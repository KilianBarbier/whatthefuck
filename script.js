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
const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

const SOURCE_RULES = [
  { terms: ["venus"], source: "NASA — Venus", url: "https://science.nasa.gov/venus/" },
  { terms: ["mercure"], source: "NASA — Mercury", url: "https://science.nasa.gov/mercury/" },
  { terms: ["lune"], source: "NASA — Moon", url: "https://science.nasa.gov/moon/" },
  { terms: ["mars"], source: "NASA — Mars", url: "https://science.nasa.gov/mars/" },
  { terms: ["jupiter"], source: "NASA — Jupiter", url: "https://science.nasa.gov/jupiter/" },
  { terms: ["saturne"], source: "NASA — Saturn", url: "https://science.nasa.gov/saturn/" },
  { terms: ["uranus"], source: "NASA — Uranus", url: "https://science.nasa.gov/uranus/" },
  { terms: ["neptune"], source: "NASA — Neptune", url: "https://science.nasa.gov/neptune/" },
  {
    terms: ["pluton"],
    source: "NASA — Dwarf Planets",
    url: "https://science.nasa.gov/dwarf-planets/pluto/",
  },
  {
    terms: ["55 cancri", "exoplan"],
    source: "NASA — Exoplanets",
    url: "https://science.nasa.gov/exoplanets/",
  },
  {
    terms: ["station spatiale", "iss"],
    source: "NASA — ISS",
    url: "https://www.nasa.gov/international-space-station/",
  },
  {
    terms: ["comet"],
    source: "NASA — Comets",
    url: "https://science.nasa.gov/solar-system/comets/",
  },
  {
    terms: ["hubble"],
    source: "NASA — Hubble",
    url: "https://science.nasa.gov/mission/hubble-space-telescope/",
  },
  {
    terms: [
      "soleil",
      "espace",
      "orbite",
      "planete",
      "etoile",
      "galax",
      "voie lactee",
      "annee lumiere",
      "gravite",
      "neutron",
      "supernova",
      "vide spatial",
      "lumiere du soleil",
    ],
    source: "NASA — Solar System",
    url: "https://science.nasa.gov/solar-system/",
  },
  {
    terms: ["meteor", "tempete", "vent", "orage", "climat", "ciel", "pluie", "eclair", "foudre", "atmospher", "temperature", "tornade", "tornado"],
    source: "NOAA — Weather and Atmosphere",
    url: "https://www.noaa.gov/education/resource-collections/weather-atmosphere",
  },
  {
    terms: ["ocean", "marin", "maree", "mariannes", "profonde", "requin", "baleine"],
    source: "NOAA — Ocean Service",
    url: "https://oceanservice.noaa.gov/",
  },
  {
    terms: ["volcan", "magma", "lave"],
    source: "USGS — Volcano Hazards",
    url: "https://www.usgs.gov/programs/VHP",
  },
  {
    terms: ["ordinateur", "internet", "disque dur", "arobase", "clavier", "telephone portable", "smartphone", "e-mail", "email", "cd", "pixels", "jeu video"],
    source: "Computer History Museum",
    url: "https://www.computerhistory.org/timeline/",
  },
  {
    terms: ["robot", "week-end", "poubelle", "chef", "salarium", "qwerty", "azerty", "pangramme"],
    source: "CNRTL — Étymologie",
    url: "https://www.cnrtl.fr/etymologie/",
  },
  {
    terms: ["cerveau", "coeur", "peau", "ongle", "yeux", "langue", "sang", "muscle", "os", "corps", "humain", "main", "oreille", "nez", "sueur", "poil", "poumon", "dents", "respire", "respiration", "mémoire", "memoire", "rêve", "reve", "déjà-vu", "dejavu", "pareidolie"],
    source: "Britannica — Human Body",
    url: "https://www.britannica.com/search?query=human%20body",
  },
  {
    terms: ["miel", "vaches", "manchots", "loutres", "pieuvre", "puce", "koalas", "hippopotames", "wombat", "banane", "fraise", "noix de muscade", "wasabi", "pommes", "cacahuete", "sucre", "chewing gum", "pop corn", "beurre de cacahuete", "canards", "lamas", "corbeaux", "guepard", "koala", "otaries"],
    source: "Britannica — Biology",
    url: "https://www.britannica.com/search?query=biology",
  },
  {
    terms: ["plante", "plantes", "brocoli", "chou", "bambou", "fleurs", "tomate", "poivron", "aubergine", "belladone", "cycad", "arbre", "éponge", "eponge", "organisme", "algue"],
    source: "Britannica — Plants",
    url: "https://www.britannica.com/search?query=plants",
  },
  {
    terms: ["siecle", "guerre", "empire", "roi", "reine", "napoleon", "antique", "romain", "grec", "pharaon", "histoire", "moyen age", "monarchie", "mur de berlin", "frères wright", "wrighter"],
    source: "Britannica — History",
    url: "https://www.britannica.com/search?query=history",
  },
  {
    terms: ["nombre", "probabilite", "cartes", "jeu de cartes", "zero", "milliard", "million", "vitesse", "mesure", "metre", "kilometre", "angles", "chiffre", "calcul", "math", "statistique", "infinis", "mobius", "pythagore", "echiquier", "cavalier"],
    source: "Britannica — Mathematics",
    url: "https://www.britannica.com/search?query=mathematics",
  },
  {
    terms: ["pays", "capitale", "ville", "continent", "montagne", "desert", "riviere", "lac", "frontiere", "archipel", "ile", "altitude", "latitude", "longitude", "terre", "monde", "russie", "afrique", "nepal", "bolivie", "victoria", "nepal", "paz"],
    source: "Britannica — Geography",
    url: "https://www.britannica.com/search?query=geography",
  },
  {
    terms: ["cafe", "chocolat", "fromage", "pain", "vin", "fruit", "legume", "aliment", "nourriture", "cuisine", "gout", "honey", "miel", "banana", "strawberry", "peanut"],
    source: "Britannica — Food",
    url: "https://www.britannica.com/search?query=food",
  },
  {
    terms: ["atom", "molecule", "chimie", "physique", "energie", "gravite", "lumiere", "son", "froid", "chaud", "liquide", "solide", "gaz", "melange", "coriolis", "plastique", "bougie", "feu", "flamme", "diamant"],
    source: "Britannica — Science",
    url: "https://www.britannica.com/search?query=science",
  },
];

// Un fait est soit une chaîne, soit un objet { text, source, url }.
function factText(f) {
  return typeof f === "string" ? f : f.text;
}

function resolveSourceFromText(text) {
  const normalized = normalize(text);

  for (const rule of SOURCE_RULES) {
    if (rule.terms.some((term) => normalized.includes(normalize(term)))) {
      return { label: "Source : ", name: rule.source, url: rule.url };
    }
  }

  const query = encodeURIComponent(
    text
      .replace(/[^\p{L}\p{N}\s-]+/gu, " ")
      .trim()
      .split(/\s+/)
      .slice(0, 10)
      .join(" ")
  );

  return {
    label: "Source : ",
    name: "Britannica — recherche",
    url: `https://www.britannica.com/search?query=${query}`,
  };
}

// Renvoie la ligne source à afficher.
function factSource(f) {
  if (f && typeof f === "object" && f.url && !/wikipedia\.org/i.test(f.url)) {
    return { label: "Source : ", name: f.source || "source", url: f.url };
  }
  return resolveSourceFromText(factText(f));
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
