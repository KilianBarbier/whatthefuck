// whatthefuck.fr — page principale : le bouton WTF affiche directement la
// définition de « Sécheresse », puis un bouton WTF ?! déclenche une envolée
// de « wtf ». La version avec photos de terre craquelée reste dispo sur /old.

const gate = document.getElementById("gate");
document.getElementById("gate-yes").addEventListener("click", () => {
  gate.hidden = true;
});
document.getElementById("gate-no").addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

const btn = document.getElementById("wtf");
const defCard = document.getElementById("def");
const btn2 = document.getElementById("wtf2");

btn.addEventListener("click", () => {
  defCard.hidden = false;
  btn2.hidden = false; // fait apparaître le second bouton
});

// Envolée de « wtf » : plein de petits "wtf" qui montent et s'estompent.
function burstWtf() {
  const N = 26;
  for (let i = 0; i < N; i += 1) {
    const el = document.createElement("span");
    el.className = "wtf-float";
    el.textContent = "wtf";
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (0.8 + Math.random() * 2.4).toFixed(2) + "rem";
    el.style.animationDuration = (2 + Math.random() * 2).toFixed(2) + "s";
    el.style.animationDelay = (Math.random() * 0.5).toFixed(2) + "s";
    el.style.setProperty("--drift", (Math.random() * 160 - 80).toFixed(0) + "px");
    el.style.setProperty("--rot", (Math.random() * 160 - 80).toFixed(0) + "deg");
    el.addEventListener("animationend", () => el.remove());
    document.body.appendChild(el);
  }
}

btn2.addEventListener("click", burstWtf);
