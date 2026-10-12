#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const factsPath = path.join(__dirname, '..', 'facts.js');
const factsContent = fs.readFileSync(factsPath, 'utf8');

// Extract FACTS array from the file
const match = factsContent.match(/const FACTS = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('FACTS array not found in facts.js');
  process.exit(1);
}

const FACTS = eval(match[1]);

let invalides = 0;

FACTS.forEach((fact, i) => {
  if (!fact.text) {
    console.error(`❌ Fact ${i}: text manquant`);
    invalides++;
  }
  if (!fact.explanation) {
    console.error(`❌ Fact ${i}: explanation manquante`);
    invalides++;
  }
  if (fact.text && fact.explanation) {
    const len = (fact.text + fact.explanation).length;
    if (len > 1500) {
      console.error(`❌ Fact ${i}: text + explanation (${len}ch) dépasse 1500`);
      invalides++;
    }
  }
});

console.log(`\n${invalides} invalides`);
process.exit(invalides > 0 ? 1 : 0);
