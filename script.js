// whatthefuck.fr — page publique : à chaque clic, un fait insolite mais VRAI.
// Objectif : qu'un curieux qui tombe sur le domaine reparte avec un « ah, WTF ».

const btn = document.getElementById("wtf");
const factEl = document.getElementById("fact");
const sourceEl = document.getElementById("source");
const hint = document.getElementById("hint");

function factText(fact) {
  return typeof fact === "string" ? fact : fact.text;
}

function makeQuestion(text) {
  const clean = text.trim().replace(/[.?!…]+$/u, "");
  const body = clean.charAt(0).toLowerCase() + clean.slice(1);
  const prefix = /^[aeiouhàâäéèêëîïôöùûüœ]/i.test(body) ? "qu'" : "que ";
  return `Est-il vrai ${prefix}${body} ?`;
}

function perplexityUrl(question) {
  return `https://www.perplexity.ai/search?q=${encodeURIComponent(question)}`;
}

function factSource(fact) {
  if (fact && typeof fact === "object" && fact.question && fact.url) {
    return { label: "Vérifier sur Perplexity : ", name: fact.question, url: fact.url };
  }

  if (fact && typeof fact === "object" && fact.url) {
    return { label: "Source : ", name: fact.source || "source", url: fact.url };
  }

  const question = makeQuestion(factText(fact));
  return { label: "Vérifier sur Perplexity : ", name: question, url: perplexityUrl(question) };
}

let order = [];
let lastIndex = -1;

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
}

function nextIndex() {
  if (!order.length) {
    order = shuffle(FACTS.map((_, index) => index));
    if (order[0] === lastIndex && order.length > 1) {
      [order[0], order[1]] = [order[1], order[0]];
    }
  }

  lastIndex = order.shift();
  return lastIndex;
}

btn.addEventListener("click", () => {
  if (hint) hint.hidden = true;

  const fact = FACTS[nextIndex()];
  factEl.textContent = factText(fact);
  factEl.hidden = false;

  const source = factSource(fact);
  sourceEl.innerHTML = source.label + `<a href="${source.url}" target="_blank" rel="noopener">${source.name}</a>`;
  sourceEl.hidden = false;

  factEl.style.animation = "none";
  void factEl.offsetWidth;
  factEl.style.animation = "";
});
