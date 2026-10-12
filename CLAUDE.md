# WTF - Guide de Développement

## Structure des Facts

Chaque fact dans `facts.js` doit avoir la structure suivante:

```json
{
  "text": "Le fait insolite (obligatoire)",
  "explanation": "Explication du fait en 2-5 phrases (obligatoire)",
  "source": "Source (optionnel)",
  "question": "Question formée à partir du text (optionnel)",
  "url": "Lien Perplexity (optionnel)"
}
```

### Champs obligatoires
- **text**: Le fait lui-même (identifié par son hash - ne jamais modifier)
- **explanation**: Contexte, mécanisme, chiffres clés, nuances (2-5 phrases max)

### Contraintes
- `text + explanation` ≤ 1500 caractères
- L'explanation est affichée par le bouton « En savoir plus » du bot Discord WTFBOT

## Avant toute modification

1. **git pull** pour récupérer la dernière version de main
2. Vérifier s'il existe une branche `feat/explanations` non mergée
3. Lire ce fichier en entier

## À chaque régénération/ajout de facts

✅ **À faire**:
- Conserver TOUTES les explications existantes (ne pas les supprimer ni les réécrire)
- Écrire une explication pour chaque nouveau fact
- Vérifier que text + explanation < 1500 caractères

❌ **À ne jamais faire**:
- Modifier le champ `text` d'un fact existant (le bot identifie les facts par un hash du texte)
- Supprimer une explication existante
- Réécrire une explication existante

## Vérification avant commit

Avant chaque commit modifiant `facts.js`, lancer la commande de vérification:

```bash
node scripts/validate-facts.js
```

Cette commande doit afficher: **0 invalides**

Si la commande n'existe pas encore, créer le script à la racine:
```javascript
// scripts/validate-facts.js
const fs = require('fs');
const facts = require('./facts.js').FACTS || [];

let invalides = 0;
facts.forEach((fact, i) => {
  if (!fact.text) {
    console.error(`Fact ${i}: text manquant`);
    invalides++;
  }
  if (!fact.explanation) {
    console.error(`Fact ${i}: explanation manquante`);
    invalides++;
  }
  const len = (fact.text + fact.explanation).length;
  if (len > 1500) {
    console.error(`Fact ${i}: text + explanation (${len}ch) dépasse 1500`);
    invalides++;
  }
});

console.log(`${invalides} invalides`);
process.exit(invalides > 0 ? 1 : 0);
```

## Workflow type

1. `git pull origin main`
2. Modifier/ajouter facts (avec explanations)
3. Vérifier: `node scripts/validate-facts.js` → doit afficher "0 invalides"
4. Committer et pusher
