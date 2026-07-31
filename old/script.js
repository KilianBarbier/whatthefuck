// whatthefuck.fr — le bouton WTF affiche une photo de TERRE CRAQUELÉE au hasard.
//
// Jeu d'images FIXE, embarqué et servi localement (aucun appel API au runtime).
// Chaque image a été vérifiée à la main : que de la terre craquelée, sans doublon.
// Toutes libres de droits (Wikimedia Commons), crédit affiché sous l'image.

const IMAGES = [
  { src: "images/cracked-earth-4561030223.jpg", author: "THOR", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Cracked_Earth_(4561030223).jpg" },
  { src: "images/cracked-earth-unsplash.jpg", author: "Dan Gold", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Cracked_Earth_(Unsplash).jpg" },
  { src: "images/cracked-earth-flickr-al-jazeera-english.jpg", author: "Al Jazeera English", license: "CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Cracked_earth_-_Flickr_-_Al_Jazeera_English.jpg" },
  { src: "images/cracked-earth2-4460361396.jpg", author: "CIAT", license: "CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Cracked_earth2_(4460361396).jpg" },
  { src: "images/cracked-mud-in-black-rock-desert.jpg", author: "Jcomeau ictx", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Cracked_mud_in_Black_Rock_desert.JPG" },
  { src: "images/cracks-in-the-earth-unsplash.jpg", author: "Brad Helmink", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Cracks_in_the_Earth_(Unsplash).jpg" },
  { src: "images/dried-land.jpg", author: "T.SABRY", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Dried_land.jpg" },
  { src: "images/cracked-earth-in-ladakh-2014.jpg", author: "Christopher Michel", license: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Cracked_Earth_in_Ladakh_(2014).jpg" },
];

const btn = document.getElementById("wtf");
const figure = document.getElementById("reveal");
const img = document.getElementById("wtf-img");
const caption = document.getElementById("wtf-caption");
const defCard = document.getElementById("def");

let clicks = 0;       // pour l'Easter egg
let order = [];       // indices à venir, mélangés
let lastIndex = -1;   // dernière image affichée (anti-répétition)

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Parcourt toutes les images en ordre aléatoire, puis re-mélange —
// jamais deux fois la même d'affilée, jamais de doublon avant un tour complet.
function nextIndex() {
  if (!order.length) {
    order = shuffle(IMAGES.map((_, i) => i));
    if (order[0] === lastIndex && order.length > 1) {
      [order[0], order[1]] = [order[1], order[0]];
    }
  }
  lastIndex = order.shift();
  return lastIndex;
}

// Précharge TOUTES les images dès l'ouverture → affichage instantané au clic.
function preloadAll() {
  IMAGES.forEach((im) => {
    const i = new Image();
    i.src = im.src;
  });
}

function render(im) {
  defCard.hidden = true;
  img.src = im.src;
  img.alt = "Terre craquelée";
  caption.innerHTML =
    `🌵 <a href="${im.page}" target="_blank" rel="noopener">${im.author}</a> — ${im.license}`;
  figure.hidden = false;
}

function showDrought() {
  render(IMAGES[nextIndex()]);
}

// Easter egg : tous les 5 clics, on montre la définition au lieu d'une image.
function showDefinition() {
  figure.hidden = true;
  defCard.hidden = false;
}

// Private joke : faux avertissement d'âge au chargement.
const gate = document.getElementById("gate");
document.getElementById("gate-yes").addEventListener("click", () => {
  gate.hidden = true;
});
document.getElementById("gate-no").addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

btn.addEventListener("click", () => {
  clicks += 1;
  if (clicks % 5 === 0) {
    showDefinition(); // 🥚 Easter egg
  } else {
    showDrought();
  }
});

preloadAll();
