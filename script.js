// whatthefuck.fr — page principale : le bouton WTF affiche directement la
// définition de « Sécheresse » (pas d'images). La version avec photos de terre
// craquelée reste disponible sur /old.

const gate = document.getElementById("gate");
document.getElementById("gate-yes").addEventListener("click", () => {
  gate.hidden = true;
});
document.getElementById("gate-no").addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

const btn = document.getElementById("wtf");
const defCard = document.getElementById("def");

btn.addEventListener("click", () => {
  defCard.hidden = false;
});
