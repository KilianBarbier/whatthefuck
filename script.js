// whatthefuck.fr — le bouton WTF affiche une photo de SÉCHERESSE au hasard.
// Source : API Wikimedia Commons (gratuite, sans clé, compatible CORS).

const API = "https://commons.wikimedia.org/w/api.php";
const QUERY = "drought"; // sécheresse

const btn = document.getElementById("wtf");
const figure = document.getElementById("reveal");
const img = document.getElementById("wtf-img");
const caption = document.getElementById("wtf-caption");

let pool = [];               // images récupérées, prêtes à afficher
const seen = new Set();      // évite de remontrer les mêmes tant qu'il en reste

// Va chercher un lot d'images de sécheresse (offset aléatoire pour varier).
async function fetchBatch() {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: QUERY,
    gsrnamespace: "6", // fichiers uniquement
    gsrlimit: "40",
    gsroffset: String(Math.floor(Math.random() * 200)),
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

// Précharge l'image pour éviter tout affichage cassé.
function preload(src) {
  return new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(src);
    i.onerror = reject;
    i.src = src;
  });
}

async function showDrought() {
  btn.disabled = true;
  btn.classList.add("loading");
  btn.textContent = "…";

  try {
    // Recharge un lot si on a tout épuisé.
    if (pool.every((p) => seen.has(p.src))) {
      seen.clear();
      pool = await fetchBatch();
    }
    if (!pool.length) throw new Error("Aucune image trouvée");

    // Choisit une image pas encore vue.
    const fresh = pool.filter((p) => !seen.has(p.src));
    const pick = fresh[Math.floor(Math.random() * fresh.length)];
    seen.add(pick.src);

    await preload(pick.src);

    img.src = pick.src;
    img.alt = pick.title || "Sécheresse";
    caption.innerHTML = pick.page
      ? `🌵 <a href="${pick.page}" target="_blank" rel="noopener">${pick.title}</a> — Wikimedia Commons`
      : "🌵 Sécheresse";
    figure.hidden = false;

    // Relance l'animation pop.
    figure.style.animation = "none";
    void figure.offsetWidth;
    figure.style.animation = "";
  } catch (err) {
    caption.textContent = "Oups, impossible de charger une image… réessaie 🌵";
    figure.hidden = false;
  } finally {
    btn.disabled = false;
    btn.classList.remove("loading");
    btn.textContent = "WTF";
  }
}

btn.addEventListener("click", showDrought);
