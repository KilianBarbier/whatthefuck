// whatthefuck.fr — clique sur le bouton, ça affiche une image WTF au hasard.

// Images auto-suffisantes (SVG en data URI) : aucune dépendance externe,
// ça marche même hors-ligne et se déploie n'importe où.
function face(bg, emoji, label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <rect width="400" height="400" rx="32" fill="${bg}"/>
      <text x="200" y="215" font-size="180" text-anchor="middle"
            dominant-baseline="middle" font-family="sans-serif">${emoji}</text>
      <text x="200" y="360" font-size="42" font-weight="900" fill="#ffffff"
            text-anchor="middle" font-family="sans-serif">${label}</text>
    </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg.trim());
}

const IMAGES = [
  { src: face("#ff2e63", "🤯", "WTF ?!"), caption: "Mais... quoi ?!" },
  { src: face("#08d9d6", "🫠", "WTF ?!"), caption: "Je comprends rien." },
  { src: face("#f9ed69", "🙃", "WTF ?!"), caption: "Tout va bien." },
  { src: face("#a06cd5", "👽", "WTF ?!"), caption: "Ce n'est pas normal." },
  { src: face("#3fb950", "🥴", "WTF ?!"), caption: "Sérieux ?" },
  { src: face("#ff9f1c", "🤡", "WTF ?!"), caption: "C'est une blague." },
];

const btn = document.getElementById("wtf");
const figure = document.getElementById("reveal");
const img = document.getElementById("wtf-img");
const caption = document.getElementById("wtf-caption");

let last = -1;

btn.addEventListener("click", () => {
  let i;
  do {
    i = Math.floor(Math.random() * IMAGES.length);
  } while (IMAGES.length > 1 && i === last);
  last = i;

  img.src = IMAGES[i].src;
  caption.textContent = IMAGES[i].caption;
  figure.hidden = false;

  // Relance l'animation "pop" à chaque clic.
  figure.style.animation = "none";
  void figure.offsetWidth;
  figure.style.animation = "";
});
