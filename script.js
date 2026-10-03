// whatthefuck.fr — page publique : à chaque clic, un fait insolite mais VRAI.
// Objectif : qu'un curieux qui tombe sur le domaine reparte avec un « ah, WTF ».

const btn = document.getElementById("wtf");
const factEl = document.getElementById("fact");
const sourceEl = document.getElementById("source");
const hint = document.getElementById("hint");
const actionsEl = document.getElementById("actions");
const shareEl = document.getElementById("share");
const reportEl = document.getElementById("report");
const reasonsEl = document.getElementById("reasons");
const REPORT_EMAIL = "kil97112@gmail.com";

const REPORT_REASONS = [
  {
    label: "C'est faux",
    subject: "Fait faux",
    body: "Ce fait me semble faux.\n\nCe qui est réellement vrai :\n\nSource (lien) :\n",
  },
  {
    label: "Chiffre, date ou nom inexact",
    subject: "Détail inexact",
    body: "Un détail de ce fait est inexact.\n\nLe détail en question :\n\nLa bonne valeur :\n\nSource (lien) :\n",
  },
  {
    label: "C'est un mythe ou une légende",
    subject: "Mythe ou légende urbaine",
    body: "Ce fait est un mythe ou une légende urbaine.\n\nPourquoi :\n\nSource (lien) :\n",
  },
  {
    label: "Plus à jour",
    subject: "Fait périmé",
    body: "Ce fait n'est plus à jour (record battu, chiffre ancien, situation qui a changé…).\n\nLa situation actuelle :\n\nSource (lien) :\n",
  },
  {
    label: "Pas assez WTF",
    subject: "Pas assez WTF",
    body: "Ce fait n'est pas assez surprenant à mon goût.\n\nPourquoi (optionnel) :\n",
  },
  {
    label: "Faute ou phrase mal tournée",
    subject: "Faute ou formulation",
    body: "Il y a une faute ou une formulation bancale.\n\nCe que je propose :\n",
  },
  {
    label: "Autre",
    subject: "Autre remarque",
    body: "Ma remarque :\n",
  },
];
let currentText = "";

function factText(fact) {
  return typeof fact === "string" ? fact : fact.text;
}

function makeQuestion(text) {
  const clean = text.trim().replace(/[.?!…]+$/u, "").replace(/^non\s*,\s*/iu, "");
  const body = clean.charAt(0).toLowerCase() + clean.slice(1);
  const prefix = /^[aeiouhàâäéèêëîïôöùûüœ]/i.test(body) ? "qu'" : "que ";
  return `Est-il vrai ${prefix}${body} ?`;
}

function perplexityUrl(question) {
  return `https://www.perplexity.ai/search?q=${encodeURIComponent(question)}`;
}

function factSource(fact) {
  return { url: perplexityUrl(makeQuestion(factText(fact))) };
}

function reportUrl(text, reason) {
  const subject = `Signalement WTF : ${reason.subject}`;
  const body = `Fait signalé :\n« ${text} »\n\n${reason.body}`;
  return `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function closeReasons() {
  reasonsEl.hidden = true;
  reportEl.setAttribute("aria-expanded", "false");
}

REPORT_REASONS.forEach((reason) => {
  const link = document.createElement("a");
  link.className = "reason-btn";
  link.href = "#";
  link.textContent = reason.label;
  link.addEventListener("click", () => {
    link.href = reportUrl(currentText, reason);
    closeReasons();
  });
  reasonsEl.appendChild(link);
});

reportEl.addEventListener("click", () => {
  const open = reasonsEl.hidden;
  reasonsEl.hidden = !open;
  reportEl.setAttribute("aria-expanded", String(open));
});

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
  sourceEl.href = source.url;
  actionsEl.hidden = false;
  currentText = factText(fact);
  closeReasons();

  factEl.style.animation = "none";
  void factEl.offsetWidth;
  factEl.style.animation = "";
});

const STORY_W = 1080;
const STORY_H = 1920;
const FONT = 'system-ui, -apple-system, "Segoe UI", sans-serif';

function wrapLines(ctx, text, maxWidth) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const test = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(test).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function storyImage(text) {
  const canvas = document.createElement("canvas");
  canvas.width = STORY_W;
  canvas.height = STORY_H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, STORY_W, STORY_H);

  ctx.fillStyle = "#000";
  ctx.font = `700 110px ${FONT}`;
  const title = "WTF ?!";
  const titleW = ctx.measureText(title).width + 100;
  const titleH = 180;
  const titleX = (STORY_W - titleW) / 2;
  const titleY = 260;
  ctx.fillRect(titleX, titleY, titleW, titleH);
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(title, STORY_W / 2, titleY + titleH / 2 + 6);

  const maxWidth = STORY_W - 160;
  const top = titleY + titleH + 120;
  const bottom = STORY_H - 340;
  let size = 76;
  let lines;
  let lineH;
  do {
    ctx.font = `500 ${size}px ${FONT}`;
    lines = wrapLines(ctx, text, maxWidth);
    lineH = size * 1.4;
    size -= 2;
  } while (lines.length * lineH > bottom - top && size > 28);

  ctx.fillStyle = "#000";
  const startY = top + (bottom - top - lines.length * lineH) / 2 + lineH / 2;
  lines.forEach((l, i) => ctx.fillText(l, STORY_W / 2, startY + i * lineH));

  ctx.fillRect(STORY_W / 2 - 60, STORY_H - 250, 120, 4);
  ctx.font = `700 54px ${FONT}`;
  ctx.fillText("whatthefuck.fr", STORY_W / 2, STORY_H - 170);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

function download(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "wtf.png";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

shareEl.addEventListener("click", async () => {
  if (!currentText) return;
  const blob = await storyImage(currentText);
  const file = new File([blob], "wtf.png", { type: "image/png" });
  const data = { files: [file], title: "WTF ?!", text: "whatthefuck.fr" };

  if (navigator.canShare && navigator.canShare(data)) {
    try {
      await navigator.share(data);
    } catch (err) {
      if (err.name !== "AbortError") download(blob);
    }
  } else {
    download(blob);
  }
});
