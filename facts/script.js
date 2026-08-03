// whatthefuck.fr — page publique : à chaque clic, un fait insolite mais VRAI.
// Objectif : qu'un curieux qui tombe sur le domaine reparte avec un « ah, WTF ».
//
// Typo FR : espaces INSÉCABLES ( ) autour des guillemets, avant « : »,
// dans les grands nombres (3 000) et avant les unités (180 kg), pour éviter
// qu'un guillemet ou un deux-points se retrouve seul en début de ligne.

const FACTS = [
  "Le miel ne périme jamais : on a retrouvé du miel encore comestible dans des tombeaux égyptiens vieux de 3 000 ans.",
  "Les pieuvres ont trois cœurs et le sang bleu.",
  "Cléopâtre a vécu plus près dans le temps de l'invention de l'iPhone que de la construction de la grande pyramide de Gizeh.",
  "Les requins existaient déjà bien avant les premiers arbres.",
  "Sur Vénus, un jour dure plus longtemps qu'une année.",
  "La tour Eiffel peut mesurer une quinzaine de centimètres de plus en été : le métal se dilate à la chaleur.",
  "Il y a plus d'étoiles dans l'univers observable que de grains de sable sur toutes les plages de la Terre.",
  "Les loutres de mer se tiennent la patte en dormant pour ne pas dériver les unes des autres.",
  "Un éclair est environ cinq fois plus chaud que la surface du Soleil.",
  "Les koalas ont des empreintes digitales presque impossibles à distinguer de celles des humains.",
  "Il y a environ 3 000 milliards d'arbres sur Terre — bien plus que d'étoiles dans la Voie lactée.",
  "Un jeu de 52 cartes bien mélangé n'a très probablement jamais existé dans ce même ordre auparavant dans toute l'histoire.",
  "La Finlande compte plus de saunas que de voitures.",
  "Les wombats font des crottes en forme de cube.",
  "Les abeilles savent reconnaître des visages humains.",
  "La guerre la plus courte de l'histoire a duré environ 38 minutes.",
  "Un nuage de beau temps pèse en moyenne plusieurs centaines de tonnes d'eau.",
  "Les bébés humains naissent sans véritable rotule : elle n'est encore que du cartilage.",
  "Saturne est si peu dense qu'elle flotterait sur l'eau… s'il existait une baignoire assez grande.",
  "Les tardigrades, des animaux d'un millimètre, peuvent survivre dans le vide de l'espace.",
  "Les dauphins se donnent des « noms » : chacun a son sifflement signature.",
  "Il est impossible de fredonner en se bouchant le nez. (Vas-y, essaie.)",
  "Le plus long hoquet de l'histoire a duré 68 ans.",
  "Le cœur d'une baleine bleue pèse à lui seul environ 180 kg.",
  "Le papier bulle a d'abord été inventé pour servir de papier peint.",
  "Les escargots peuvent dormir plusieurs mois d'affilée, parfois près de trois ans.",
  "Non, la Grande Muraille de Chine n'est pas visible à l'œil nu depuis l'espace : c'est un mythe.",
  "Un groupe de flamants roses s'appelle une « flamboyance ».",
  "Les vaches ont des amies proches et stressent quand on les sépare.",
  "L'Islande est verdoyante et le Groenland couvert de glace : leurs noms semblent inversés.",
  "Le ketchup était vendu comme médicament dans les années 1830.",
  "La banane est une baie, d'un point de vue botanique — mais pas la fraise.",
  "Les tournesols suivent le soleil quand ils sont jeunes, puis s'immobilisent vers l'est une fois adultes.",
  "Notre galaxie et Andromède foncent l'une vers l'autre et fusionneront… dans environ 4 milliards d'années.",
];

const btn = document.getElementById("wtf");
const factEl = document.getElementById("fact");
const hint = document.getElementById("hint");

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
  factEl.textContent = FACTS[nextIndex()];
  factEl.hidden = false;
  // petit rebond à chaque fait
  factEl.style.animation = "none";
  void factEl.offsetWidth;
  factEl.style.animation = "";
});
