// whatthefuck.fr — page publique : à chaque clic, un fait insolite mais VRAI.
// Objectif : qu'un curieux qui tombe sur le domaine reparte avec un « ah, WTF ».
//
// Typo FR : espaces INSÉCABLES ( ) autour des guillemets, avant « : »,
// dans les grands nombres (3 000) et avant les unités (180 kg), pour éviter
// qu'un guillemet ou un deux-points se retrouve seul en début de ligne.

// Les faits proviennent de facts.js (chargé avant ce script) : const FACTS.

const btn = document.getElementById("wtf");
const factEl = document.getElementById("fact");
const sourceEl = document.getElementById("source");
const hint = document.getElementById("hint");

// Un fait est soit une chaîne, soit un objet { text, source, url }.
function factText(f) {
  return typeof f === "string" ? f : f.text;
}

// Renvoie la ligne source à afficher (lien réel si dispo, sinon « vérifier »).
function factSource(f) {
  if (f && typeof f === "object" && f.url) {
    return { label: "Source : ", name: f.source || "source", url: f.url };
  }
  const q = encodeURIComponent(factText(f));
  return { label: "", name: "🔎 vérifier", url: "https://fr.wikipedia.org/w/index.php?search=" + q };
}

let order = [];       // indices à venir, mélangés
let lastIndex = -1;   // dernier fait montré (anti-répétition)

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Parcourt tous les faits en ordre aléatoire, puis re-mélange —
// jamais deux fois le même d'affilée, pas de répétition avant un tour complet.
function nextIndex() {
  if (!order.length) {
    order = shuffle(FACTS.map((_, i) => i));
    if (order[0] === lastIndex && order.length > 1) {
      [order[0], order[1]] = [order[1], order[0]];
    }
  }
  lastIndex = order.shift();
  return lastIndex;
}

btn.addEventListener("click", () => {
  if (hint) hint.hidden = true;

  const f = FACTS[nextIndex()];
  factEl.textContent = factText(f);
  factEl.hidden = false;

  const s = factSource(f);
  sourceEl.innerHTML =
    s.label + `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`;
  sourceEl.hidden = false;

  // petit rebond à chaque fait
  factEl.style.animation = "none";
  void factEl.offsetWidth;
  factEl.style.animation = "";
});
