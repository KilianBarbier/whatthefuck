// whatthefuck.fr — le bouton WTF affiche une photo de SÉCHERESSE EXTRÊME au hasard.
// Source : API Wikimedia Commons (gratuite, sans clé, compatible CORS).
//
// Perf : on maintient un buffer d'images DÉJÀ préchargées ("ready") pour que
// chaque clic soit instantané. On remplit ce buffer dès l'ouverture de la page
// puis on le reconstitue en arrière-plan après chaque affichage.

const API = "https://commons.wikimedia.org/w/api.php";
const QUERY = "cracked earth drought"; // sécheresse extrême : sols craquelés
const READY_TARGET = 6; // nombre d'images préchargées gardées d'avance

const btn = document.getElementById("wtf");
const figure = document.getElementById("reveal");
const img = document.getElementById("wtf-img");
const caption = document.getElementById("wtf-caption");
const defCard = document.getElementById("def");

let clicks = 0;              // pour l'Easter egg
let pool = [];               // métadonnées récupérées de l'API, pas encore préchargées
const ready = [];            // images DÉJÀ préchargées, prêtes à afficher instantanément
const seen = new Set();      // évite de repiocher les mêmes
let refilling = false;       // empêche deux remplissages concurrents

// Va chercher un lot d'images (offset aléatoire pour varier).
async function fetchBatch() {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: QUERY,
    gsrnamespace: "6", // fichiers uniquement
    gsrlimit: "40",
    gsroffset: String(Math.floor(Math.random() * 100)),
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

  return Object.values(pages)
    .map((p) => {
      const ii = p.imageinfo && p.imageinfo[0];
      if (!ii || !/^image\/(jpeg|png|webp)/.test(ii.mime || "")) return null;
      return {
        src: ii.thumburl || ii.url,
        title: (p.title || "").replace(/^File:/, "").replace(/\.[^.]+$/, ""),
        page: ii.descriptionurl,
      };
    })
    .filter(Boolean);
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

// Garde toujours ~READY_TARGET images préchargées d'avance.
async function refill() {
  if (refilling) return;
  refilling = true;
  try {
    let guard = 0; // évite une boucle infinie si l'API ne renvoie rien de neuf
    while (ready.length < READY_TARGET && guard < 6) {
      if (!pool.length) {
        let batch = await fetchBatch();
        batch = batch.filter((p) => !seen.has(p.src));
        if (!batch.length) {
          seen.clear(); // tout a été vu : on autorise à revoir
          guard += 1;
          continue;
        }
        pool = batch;
      }
      const item = pool.shift();
      seen.add(item.src);
      try {
        await preload(item);
        ready.push(item);
      } catch {
        /* image cassée : on l'ignore et on passe à la suivante */
      }
    }
  } catch {
    /* erreur réseau : on retentera au prochain refill */
  } finally {
    refilling = false;
  }
}

function render(item) {
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

  // Cas rare (tout premier clic très rapide, réseau lent) : on attend le buffer.
  if (!item) {
    btn.disabled = true;
    btn.classList.add("loading");
    btn.textContent = "…";
    await refill();
    btn.disabled = false;
    btn.classList.remove("loading");
    btn.textContent = "WTF";
    item = ready.shift();
  }

  if (!item) {
    caption.textContent = "Oups, impossible de charger une image… réessaie 🌵";
    figure.hidden = false;
    return;
  }

  render(item);
  refill(); // reconstitue le stock en arrière-plan (sans bloquer)
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
  if (clicks % 10 === 0) {
    showDefinition(); // 🥚 Easter egg
  } else {
    showDrought();
  }
});

// Précharge un premier lot dès l'ouverture pour que le 1er clic soit instantané.
refill();
