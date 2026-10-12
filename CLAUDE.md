# whatthefuck.fr

## facts.js

`facts.js` définit `const FACTS = [...]`, un tableau JSON (indentation 1 espace) lu par le site et par le bot Discord WTFBOT (`kilianbarbier/wtfbot`, via https://whatthefuck.fr/facts.js).

Chaque fact :

```json
{
 "text": "Le fait, une ou deux phrases.",
 "source": "Perplexity",
 "question": "Est-il vrai que … ?",
 "url": "https://www.perplexity.ai/search?q=…",
 "explanation": "2 à 5 phrases."
}
```

Champ optionnel : `info` (`term`, image et légende pour la bulle « (?) » du site).

### Règles pour `explanation`

- Obligatoire pour chaque fact : il est affiché par le bouton « En savoir plus » du bot.
- 2 à 5 phrases en français : contexte, mécanisme, chiffres clés. Nuancer si le fait est discutable ou repose sur une anecdote.
- `text` + `explanation` < 1 500 caractères (limite Discord : 2 000).
- Lors d'une régénération : ne jamais supprimer ni réécrire les explications existantes ; en écrire une pour chaque nouveau fact.
- Ne pas modifier `text` d'un fact existant sans raison : le bot identifie les facts par un hash de ce texte.

### Vérification

```sh
node -e 'const F=new Function(require("fs").readFileSync("facts.js","utf8")+";return FACTS")();const bad=F.filter(f=>!f.explanation||f.text.length+f.explanation.length>=1500);console.log(F.length,"facts,",bad.length,"invalides")'
```
