// whatthefuck.fr — le bouton WTF affiche une photo de SÉCHERESSE EXTRÊME au hasard.
// Source : API Wikimedia Commons (gratuite, sans clé, compatible CORS).
//
// Perf : on maintient un buffer d'images DÉJÀ préchargées ("ready") pour que
// chaque clic soit instantané. On remplit ce buffer dès l'ouverture de la page
// puis on le reconstitue en arrière-plan après chaque affichage.

const API = "https://commons.wikimedia.org/w/api.php";
const READY_TARGET = 18; // nombre d'images préchargées gardées d'avance

// Source : catégories Commons CURÉES de terre craquelée uniquement.
// Tout ce qui s'y trouve a été classé "cracked earth" par des contributeurs,
// donc pas de plantes, cartes ni portraits qui polluaient la recherche texte.
const CATEGORIES = [
  "Cracked earth",
  "Cracked earth in Asia",
  "Cracked earth in Europe",
  "Cracked earth in Africa",
  "Cracked earth in South America",
  "Cracked earth in North America",
];

// Écarte les fichiers qui ne sont pas des photos de paysage
// (micrographies géologiques, cartes, schémas, logos…).
const NON_PHOTO = /\b(ppl|xpl|thin[ _-]?section|microscop|micrograph|sem|eds|diagram|schéma|schema|map|carte|chart|graph|logo|coat of arms|blason|icon|svg)\b/i;

const btn = document.getElementById("wtf");
const figure = document.getElementById("reveal");
const img = document.getElementById("wtf-img");
const caption = document.getElementById("wtf-caption");
const defCard = document.getElementById("def");

let clicks = 0;              // pour l'Easter egg
let pool = [];               // métadonnées récupérées de l'API, pas encore préchargées
const ready = [];            // images DÉJÀ préchargées, prêtes à afficher instantanément
const seen = new Set();      // signatures déjà vues (dédoublonnage)
let refillPromise = null;    // remplissage en cours partagé (single-flight)
let lastSig = null;          // signature de la dernière image affichée

// Signature normalisée : neutralise les quasi-doublons de Commons
// (même photo sous "... (cropped)", "... 2.jpg", dimensions, accents, etc.).
function sig(item) {
  return (item.title || item.src || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // accents
    .replace(/\([^)]*\)/g, " ") // (cropped), (1)…
    .replace(/\b\d{2,4}\s*[x×]\s*\d{2,4}\b/g, " ") // dimensions 1024x768
    .replace(/[_-]+/g, " ")
    .replace(/\s+\d{1,3}$/, "") // numéro de série final " 2"
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Va chercher les fichiers d'une catégorie "terre craquelée" au hasard.
async function fetchBatch() {
  const cat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const params = new URLSearchParams({
    action: "query",
    generator: "categorymembers",
    gcmtitle: "Category:" + cat,
    gcmtype: "file", // fichiers seulement
    gcmlimit: "100",
    prop: "imageinfo",
    iiprop: "url|mime",
    iiurlwidth: "1000",
    format: "json",
    origin: "*", // CORS
  });

  const res = await fetch(`${API}?${params}`);
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  const pages = (data.query && data.query.pages) || {};

  const items = Object.values(pages)
    .map((p) => {
      const ii = p.imageinfo && p.imageinfo[0];
      if (!ii || !/^image\/(jpeg|png|webp)/.test(ii.mime || "")) return null;
      const title = (p.title || "").replace(/^File:/, "").replace(/\.[^.]+$/, "");
      if (NON_PHOTO.test(title)) return null; // écarte les non-photos
      return { src: ii.thumburl || ii.url, title, page: ii.descriptionurl };
    })
    .filter(Boolean);

  // Mélange pour varier (les catégories sont triées alphabétiquement).
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

// Précharge (télécharge + décode) une image dans le cache du navigateur.
function preload(item) {
  return new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(item);
    i.onerror = reject;
    i.src = item.src;
  });
}

// Remplit le buffer en préchargeant les images EN PARALLÈLE, jusqu'à
// READY_TARGET. Single-flight : les appels concurrents partagent la même
// promesse, donc `await refill()` attend toujours un vrai remplissage.
function refill() {
  if (!refillPromise) {
    refillPromise = doRefill().finally(() => {
      refillPromise = null;
    });
  }
  return refillPromise;
}

async function doRefill() {
  let guard = 0; // évite une boucle infinie si l'API ne renvoie rien de neuf
  while (ready.length < READY_TARGET && guard < 8) {
    if (!pool.length) {
      let batch;
      try {
        batch = await fetchBatch();
      } catch {
        return; // erreur réseau : on retentera au prochain refill
      }
      batch = batch.filter((p) => !seen.has(sig(p)));
      if (!batch.length) {
        seen.clear(); // tout a été vu : on autorise à revoir
        guard += 1;
        continue;
      }
      pool = batch;
    }

    // Sélectionne un lot en écartant les quasi-doublons (même signature),
    // y compris ceux présents dans le même lot.
    const need = READY_TARGET - ready.length;
    const chunk = [];
    while (pool.length && chunk.length < need) {
      const it = pool.shift();
      const s = sig(it);
      if (seen.has(s)) continue;
      seen.add(s);
      chunk.push(it);
    }
    if (!chunk.length) continue;

    // Précharge tout le lot d'un coup (parallèle) pour combler vite le buffer.
    const results = await Promise.allSettled(chunk.map(preload));
    results.forEach((r) => {
      if (r.status === "fulfilled") ready.push(r.value);
    });
  }
}

function render(item) {
  lastSig = sig(item);
  defCard.hidden = true;
  img.src = item.src;
  img.alt = item.title || "Sécheresse";
  caption.innerHTML = item.page
    ? `🌵 <a href="${item.page}" target="_blank" rel="noopener">${item.title}</a> — Wikimedia Commons`
    : "🌵 Sécheresse";
  figure.hidden = false;

  // Relance l'animation pop.
  figure.style.animation = "none";
  void figure.offsetWidth;
  figure.style.animation = "";
}

async function showDrought() {
  // Cas normal : une image est déjà préchargée → affichage instantané.
  let item = ready.shift();

  // Évite de remontrer la même image que la précédente (quasi-doublons).
  if (item && sig(item) === lastSig && ready.length) {
    ready.push(item);
    item = ready.shift();
  }

  // Cas rare (buffer vidé par des clics rapides / réseau lent) : on attend
  // réellement le remplissage en cours, avec quelques tentatives.
  if (!item) {
    btn.disabled = true;
    btn.classList.add("loading");
    btn.textContent = "…";
    for (let t = 0; t < 4 && !item; t += 1) {
      await refill();
      item = ready.shift();
    }
    btn.disabled = false;
    btn.classList.remove("loading");
    btn.textContent = "WTF";
  }

  if (!item) {
    caption.textContent = "Oups, impossible de charger une image… réessaie 🌵";
    figure.hidden = false;
    return;
  }

  render(item);

  // Reconstitue le stock dès qu'il descend sous la moitié (anticipation).
  if (ready.length < READY_TARGET / 2) refill();
}

// Easter egg : tous les 10 clics, on montre la définition au lieu d'une image.
function showDefinition() {
  figure.hidden = true;
  defCard.hidden = false;
  defCard.style.animation = "none";
  void defCard.offsetWidth;
  defCard.style.animation = "";
}

btn.addEventListener("click", () => {
  clicks += 1;
  if (clicks % 5 === 0) {
    showDefinition(); // 🥚 Easter egg
  } else {
    showDrought();
  }
});

// Précharge un premier lot dès l'ouverture pour que le 1er clic soit instantané.
refill();
