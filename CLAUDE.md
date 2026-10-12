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

### Champs obligatoires
- **text** : le fait. Ne jamais modifier le `text` d'un fact existant : le bot identifie les facts par un hash de ce texte.
- **explanation** : affichée par le bouton « En savoir plus » du bot. 2 à 5 phrases en français : contexte, mécanisme, chiffres clés ; nuancer si le fait est discutable ou repose sur une anecdote.

### Contraintes
- `text` + `explanation` ≤ 1 500 caractères (limite Discord : 2 000).

## À chaque régénération / ajout de facts

✅ À faire :
- Conserver toutes les explications existantes, sans les réécrire.
- Écrire une explication pour chaque nouveau fact.

❌ À ne jamais faire :
- Modifier le `text` d'un fact existant.
- Supprimer ou réécrire une explication existante.

## Workflow

1. `git pull origin main`
2. Modifier / ajouter des facts (avec explications)
3. `node scripts/validate-facts.js` → doit afficher « 0 invalides »
4. Committer et pusher
