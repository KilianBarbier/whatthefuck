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
- **text** : le fait. Ne modifier le `text` d'un fact existant que pour corriger une erreur ou une formulation problématique : le bot identifie les facts par un hash de ce texte, et le bouton « En savoir plus » des anciens messages de ce fact cessera de fonctionner. Mettre alors à jour `question` et `url` en conséquence.
- **explanation** : affichée par le bouton « En savoir plus » du bot. 2 à 5 phrases en français : contexte, mécanisme, chiffres clés ; nuancer si le fait est discutable ou repose sur une anecdote.

### Contraintes
- `text` + `explanation` ≤ 1 500 caractères (limite Discord : 2 000).

### Règles d'écriture (text et explanation)
- Ne jamais désigner une personne par sa nationalité, son origine, sa couleur de peau, sa religion ou son ethnie (« la Marocaine X », « l'Américain Y », « Afro-Américaine »…). Écrire son nom, ou son rôle si c'est utile (« le médecin X », « le marathonien Y »).
- Exception : uniquement quand c'est le cœur du fait (ex. un accent étranger, une langue, l'armée d'un pays en guerre) — se demander si le fait reste vrai et intéressant sans ce mot ; si oui, le retirer.
- Même vigilance pour les stéréotypes, l'humour aux dépens d'un groupe et les maladies présentées comme une curiosité : le fait doit rester respectueux des personnes réelles qu'il décrit.

## À chaque régénération / ajout de facts

✅ À faire :
- Conserver toutes les explications existantes, sans les réécrire.
- Écrire une explication pour chaque nouveau fact.

❌ À ne jamais faire :
- Modifier le `text` d'un fact existant sans raison (voir ci-dessus).
- Supprimer ou réécrire une explication existante.

## Workflow

1. `git pull origin main`
2. Modifier / ajouter des facts (avec explications)
3. `node scripts/validate-facts.js` → doit afficher « 0 invalides »
4. Committer et pusher
