// whatthefuck.fr — confidentialité : la popup du bouclier (accueil) et le choix « me compter / ne
// pas me compter », partagés avec confidentialite.html.
// La mesure d'audience (mesure.js, servie par l'atelier) expose window.mesureAudience une fois
// chargée ; bloquée ou coupée, rien n'est compté et on le dit.

const privacyBtn = document.getElementById("privacy-btn");
const privacyDialog = document.getElementById("privacy-dialog");

function renderMeasureState() {
  const api = window.mesureAudience;
  document.querySelectorAll("[data-mesure-etat]").forEach((el) => {
    if (!api) {
      el.textContent = "Aucune mesure ne tourne sur ta visite (bloqueur de contenu ou mesure coupée) : rien n'est compté.";
    } else {
      el.textContent = api.compte()
        ? "Ta visite est comptée, de façon anonyme."
        : "Ta visite n'est pas comptée. Ce choix est gardé six mois sur cet appareil.";
    }
  });
  document.querySelectorAll("[data-mesure-basculer]").forEach((button) => {
    button.hidden = !api;
    if (api) button.textContent = api.compte() ? "Ne pas me compter" : "Me compter à nouveau";
  });
}

document.querySelectorAll("[data-mesure-basculer]").forEach((button) => {
  button.addEventListener("click", () => {
    const api = window.mesureAudience;
    if (!api) return;
    api.choisir(api.compte() ? "non" : "oui");
    renderMeasureState();
  });
});

if (privacyBtn && privacyDialog) {
  privacyBtn.addEventListener("click", () => {
    renderMeasureState();
    privacyDialog.showModal();
  });
  document.getElementById("privacy-close").addEventListener("click", () => privacyDialog.close());
  privacyDialog.addEventListener("click", (event) => {
    if (event.target === privacyDialog) privacyDialog.close();
  });
}

// La page de confidentialité affiche l'état dès son chargement (mesure.js arrive en « defer »).
window.addEventListener("load", renderMeasureState);
