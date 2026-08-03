// whatthefuck.fr — page d'accueil : un gros bouton « pardon » qui fait
// s'envoler des 🫶. Les versions précédentes restent dispo sur /old et /old2.

const btn = document.getElementById("pardon");

// Envolée de 🫶 : plein d'emojis qui montent et s'estompent.
function burst() {
  const N = 26;
  for (let i = 0; i < N; i += 1) {
    const el = document.createElement("span");
    el.className = "wtf-float";
    el.textContent = "🫶";
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (1.2 + Math.random() * 2.8).toFixed(2) + "rem";
    el.style.animationDuration = (2 + Math.random() * 2).toFixed(2) + "s";
    el.style.animationDelay = (Math.random() * 0.5).toFixed(2) + "s";
    el.style.setProperty("--drift", (Math.random() * 160 - 80).toFixed(0) + "px");
    el.style.setProperty("--rot", (Math.random() * 160 - 80).toFixed(0) + "deg");
    el.addEventListener("animationend", () => el.remove());
    document.body.appendChild(el);
  }
}

btn.addEventListener("click", burst);
