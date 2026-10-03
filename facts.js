// whatthefuck.fr ? base de faits (g?n?r?e puis v?rifi?e, sourc?e, relue).
// Ne pas ?diter ? la main : r?g?n?r?e depuis le pipeline d'agents.
const FACTS = [
 {
  "text": "Un jour sur Vénus dure plus longtemps qu'une année sur Vénus, car la planète tourne sur elle-même plus lentement qu'elle n'orbite autour du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un jour sur Vénus dure plus longtemps qu'une année sur Vénus, car la planète tourne sur elle-même plus lentement qu'elle n'orbite autour du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20jour%20sur%20V%C3%A9nus%20dure%20plus%20longtemps%20qu'une%20ann%C3%A9e%20sur%20V%C3%A9nus%2C%20car%20la%20plan%C3%A8te%20tourne%20sur%20elle-m%C3%AAme%20plus%20lentement%20qu'elle%20n'orbite%20autour%20du%20Soleil%20%3F"
 },
 {
  "text": "Il n'y a pas de vent sur la Lune, donc les empreintes des astronautes d'Apollo pourraient rester intactes pendant des millions d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il n'y a pas de vent sur la Lune, donc les empreintes des astronautes d'Apollo pourraient rester intactes pendant des millions d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20n'y%20a%20pas%20de%20vent%20sur%20la%20Lune%2C%20donc%20les%20empreintes%20des%20astronautes%20d'Apollo%20pourraient%20rester%20intactes%20pendant%20des%20millions%20d'ann%C3%A9es%20%3F"
 },
 {
  "text": "Sur Mars, le coucher de soleil apparaît bleuté, alors que le ciel de jour y est plutôt rougeâtre.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Mars, le coucher de soleil apparaît bleuté, alors que le ciel de jour y est plutôt rougeâtre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Mars%2C%20le%20coucher%20de%20soleil%20appara%C3%AEt%20bleut%C3%A9%2C%20alors%20que%20le%20ciel%20de%20jour%20y%20est%20plut%C3%B4t%20rouge%C3%A2tre%20%3F"
 },
 {
  "text": "Neptune n'a accompli qu'une seule orbite complète autour du Soleil depuis sa découverte en 1846.",
  "source": "Perplexity",
  "question": "Est-il vrai que neptune n'a accompli qu'une seule orbite complète autour du Soleil depuis sa découverte en 1846 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20neptune%20n'a%20accompli%20qu'une%20seule%20orbite%20compl%C3%A8te%20autour%20du%20Soleil%20depuis%20sa%20d%C3%A9couverte%20en%201846%20%3F"
 },
 {
  "text": "Une cuillère à café de matière d'une étoile à neutrons pèserait environ un milliard de tonnes sur Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une cuillère à café de matière d'une étoile à neutrons pèserait environ un milliard de tonnes sur Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20cuill%C3%A8re%20%C3%A0%20caf%C3%A9%20de%20mati%C3%A8re%20d'une%20%C3%A9toile%20%C3%A0%20neutrons%20p%C3%A8serait%20environ%20un%20milliard%20de%20tonnes%20sur%20Terre%20%3F"
 },
 {
  "text": "Jupiter est si massive que le centre de gravité qu'elle partage avec le Soleil se situe légèrement au-dessus de la surface du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai que jupiter est si massive que le centre de gravité qu'elle partage avec le Soleil se situe légèrement au-dessus de la surface du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20jupiter%20est%20si%20massive%20que%20le%20centre%20de%20gravit%C3%A9%20qu'elle%20partage%20avec%20le%20Soleil%20se%20situe%20l%C3%A9g%C3%A8rement%20au-dessus%20de%20la%20surface%20du%20Soleil%20%3F"
 },
 {
  "text": "Dans l'espace, deux morceaux de métal identiques qui se touchent peuvent se souder spontanément, un phénomène appelé soudure à froid.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans l'espace, deux morceaux de métal identiques qui se touchent peuvent se souder spontanément, un phénomène appelé soudure à froid ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20l'espace%2C%20deux%20morceaux%20de%20m%C3%A9tal%20identiques%20qui%20se%20touchent%20peuvent%20se%20souder%20spontan%C3%A9ment%2C%20un%20ph%C3%A9nom%C3%A8ne%20appel%C3%A9%20soudure%20%C3%A0%20froid%20%3F"
 },
 {
  "text": "La Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, à peu près la vitesse à laquelle poussent nos ongles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, à peu près la vitesse à laquelle poussent nos ongles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Lune%20s'%C3%A9loigne%20de%20la%20Terre%20d'environ%203%2C8%20centim%C3%A8tres%20par%20an%2C%20%C3%A0%20peu%20pr%C3%A8s%20la%20vitesse%20%C3%A0%20laquelle%20poussent%20nos%20ongles%20%3F"
 },
 {
  "text": "Un an sur Mercure dure environ 88 jours terrestres, mais une seule journée solaire y dure environ 176 jours terrestres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un an sur Mercure dure environ 88 jours terrestres, mais une seule journée solaire y dure environ 176 jours terrestres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20an%20sur%20Mercure%20dure%20environ%2088%20jours%20terrestres%2C%20mais%20une%20seule%20journ%C3%A9e%20solaire%20y%20dure%20environ%20176%20jours%20terrestres%20%3F"
 },
 {
  "text": "Si l'on pouvait conduire une voiture à 100 kilomètres par heure vers le Soleil, il faudrait plus de 170 ans pour l'atteindre.",
  "source": "Perplexity",
  "question": "Est-il vrai que si l'on pouvait conduire une voiture à 100 kilomètres par heure vers le Soleil, il faudrait plus de 170 ans pour l'atteindre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20l'on%20pouvait%20conduire%20une%20voiture%20%C3%A0%20100%20kilom%C3%A8tres%20par%20heure%20vers%20le%20Soleil%2C%20il%20faudrait%20plus%20de%20170%20ans%20pour%20l'atteindre%20%3F"
 },
 {
  "text": "Certaines comètes dégagent une odeur décrite comme un mélange d'œufs pourris, d'urine de chat et d'amande amère, d'après l'analyse de la sonde Rosetta.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines comètes dégagent une odeur décrite comme un mélange d'œufs pourris, d'urine de chat et d'amande amère, d'après l'analyse de la sonde Rosetta ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20com%C3%A8tes%20d%C3%A9gagent%20une%20odeur%20d%C3%A9crite%20comme%20un%20m%C3%A9lange%20d'%C5%93ufs%20pourris%2C%20d'urine%20de%20chat%20et%20d'amande%20am%C3%A8re%2C%20d'apr%C3%A8s%20l'analyse%20de%20la%20sonde%20Rosetta%20%3F"
 },
 {
  "text": "Il y a plus d'étoiles dans l'univers observable que de grains de sable sur toutes les plages de la Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus d'étoiles dans l'univers observable que de grains de sable sur toutes les plages de la Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20d'%C3%A9toiles%20dans%20l'univers%20observable%20que%20de%20grains%20de%20sable%20sur%20toutes%20les%20plages%20de%20la%20Terre%20%3F"
 },
 {
  "text": "Le point le plus proche entre la Terre et Mars n'a été atteint qu'une fois en près de 60 000 ans, en 2003.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus proche entre la Terre et Mars n'a été atteint qu'une fois en près de 60 000 ans, en 2003 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20proche%20entre%20la%20Terre%20et%20Mars%20n'a%20%C3%A9t%C3%A9%20atteint%20qu'une%20fois%20en%20pr%C3%A8s%20de%2060%C2%A0000%20ans%2C%20en%202003%20%3F"
 },
 {
  "text": "Sur Uranus et Neptune, les scientifiques pensent qu'il pourrait pleuvoir des diamants en profondeur, sous l'effet d'une pression énorme.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Uranus et Neptune, les scientifiques pensent qu'il pourrait pleuvoir des diamants en profondeur, sous l'effet d'une pression énorme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Uranus%20et%20Neptune%2C%20les%20scientifiques%20pensent%20qu'il%20pourrait%20pleuvoir%20des%20diamants%20en%20profondeur%2C%20sous%20l'effet%20d'une%20pression%20%C3%A9norme%20%3F"
 },
 {
  "text": "Pluton est plus petite que plusieurs lunes du système solaire, dont notre propre Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que pluton est plus petite que plusieurs lunes du système solaire, dont notre propre Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pluton%20est%20plus%20petite%20que%20plusieurs%20lunes%20du%20syst%C3%A8me%20solaire%2C%20dont%20notre%20propre%20Lune%20%3F"
 },
 {
  "text": "Un astronaute peut grandir de plusieurs centimètres dans l'espace car sa colonne vertébrale se détend en apesanteur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un astronaute peut grandir de plusieurs centimètres dans l'espace car sa colonne vertébrale se détend en apesanteur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20astronaute%20peut%20grandir%20de%20plusieurs%20centim%C3%A8tres%20dans%20l'espace%20car%20sa%20colonne%20vert%C3%A9brale%20se%20d%C3%A9tend%20en%20apesanteur%20%3F"
 },
 {
  "text": "Saturne est si peu dense qu'elle flotterait dans une baignoire assez grande pour la contenir.",
  "source": "Perplexity",
  "question": "Est-il vrai que saturne est si peu dense qu'elle flotterait dans une baignoire assez grande pour la contenir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20saturne%20est%20si%20peu%20dense%20qu'elle%20flotterait%20dans%20une%20baignoire%20assez%20grande%20pour%20la%20contenir%20%3F"
 },
 {
  "text": "L'eau chaude peut geler plus vite que l'eau froide dans certaines conditions, un phénomène surprenant appelé effet Mpemba.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau chaude peut geler plus vite que l'eau froide dans certaines conditions, un phénomène surprenant appelé effet Mpemba ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20chaude%20peut%20geler%20plus%20vite%20que%20l'eau%20froide%20dans%20certaines%20conditions%2C%20un%20ph%C3%A9nom%C3%A8ne%20surprenant%20appel%C3%A9%20effet%20Mpemba%20%3F"
 },
 {
  "text": "Le verre n'est pas un liquide qui coule lentement : les vitres anciennes plus épaisses en bas viennent de leur fabrication, pas d'un écoulement.",
  "source": "Perplexity",
  "question": "Est-il vrai que le verre n'est pas un liquide qui coule lentement : les vitres anciennes plus épaisses en bas viennent de leur fabrication, pas d'un écoulement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20verre%20n'est%20pas%20un%20liquide%20qui%20coule%20lentement%C2%A0%3A%20les%20vitres%20anciennes%20plus%20%C3%A9paisses%20en%20bas%20viennent%20de%20leur%20fabrication%2C%20pas%20d'un%20%C3%A9coulement%20%3F"
 },
 {
  "text": "Un éclair est environ cinq fois plus chaud que la surface du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un éclair est environ cinq fois plus chaud que la surface du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20%C3%A9clair%20est%20environ%20cinq%20fois%20plus%20chaud%20que%20la%20surface%20du%20Soleil%20%3F"
 },
 {
  "text": "Si l'on retirait tout l'espace vide des atomes de tous les humains, l'humanité entière tiendrait dans le volume d'un morceau de sucre.",
  "source": "Perplexity",
  "question": "Est-il vrai que si l'on retirait tout l'espace vide des atomes de tous les humains, l'humanité entière tiendrait dans le volume d'un morceau de sucre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20l'on%20retirait%20tout%20l'espace%20vide%20des%20atomes%20de%20tous%20les%20humains%2C%20l'humanit%C3%A9%20enti%C3%A8re%20tiendrait%20dans%20le%20volume%20d'un%20morceau%20de%20sucre%20%3F"
 },
 {
  "text": "Le miel ne se périme jamais : on a retrouvé du miel comestible dans des tombes égyptiennes vieilles de plus de 3 000 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que le miel ne se périme jamais : on a retrouvé du miel comestible dans des tombes égyptiennes vieilles de plus de 3 000 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20miel%20ne%20se%20p%C3%A9rime%20jamais%C2%A0%3A%20on%20a%20retrouv%C3%A9%20du%20miel%20comestible%20dans%20des%20tombes%20%C3%A9gyptiennes%20vieilles%20de%20plus%20de%203%C2%A0000%20ans%20%3F"
 },
 {
  "text": "L'hélium peut adopter un état superfluide où il s'écoule sans aucune friction et grimpe le long des parois de son récipient.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'hélium peut adopter un état superfluide où il s'écoule sans aucune friction et grimpe le long des parois de son récipient ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'h%C3%A9lium%20peut%20adopter%20un%20%C3%A9tat%20superfluide%20o%C3%B9%20il%20s'%C3%A9coule%20sans%20aucune%20friction%20et%20grimpe%20le%20long%20des%20parois%20de%20son%20r%C3%A9cipient%20%3F"
 },
 {
  "text": "L'or est si malléable qu'un seul gramme peut être étiré en un fil de plus de deux kilomètres de long.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'or est si malléable qu'un seul gramme peut être étiré en un fil de plus de deux kilomètres de long ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'or%20est%20si%20mall%C3%A9able%20qu'un%20seul%20gramme%20peut%20%C3%AAtre%20%C3%A9tir%C3%A9%20en%20un%20fil%20de%20plus%20de%20deux%20kilom%C3%A8tres%20de%20long%20%3F"
 },
 {
  "text": "Le sel de table ordinaire est composé de deux éléments dangereux séparément : le sodium, un métal explosif, et le chlore, un gaz toxique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sel de table ordinaire est composé de deux éléments dangereux séparément : le sodium, un métal explosif, et le chlore, un gaz toxique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sel%20de%20table%20ordinaire%20est%20compos%C3%A9%20de%20deux%20%C3%A9l%C3%A9ments%20dangereux%20s%C3%A9par%C3%A9ment%C2%A0%3A%20le%20sodium%2C%20un%20m%C3%A9tal%20explosif%2C%20et%20le%20chlore%2C%20un%20gaz%20toxique%20%3F"
 },
 {
  "text": "Les poulpes ont trois cœurs, neuf cerveaux et un sang bleu à base de cuivre.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poulpes ont trois cœurs, neuf cerveaux et un sang bleu à base de cuivre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poulpes%20ont%20trois%20c%C5%93urs%2C%20neuf%20cerveaux%20et%20un%20sang%20bleu%20%C3%A0%20base%20de%20cuivre%20%3F"
 },
 {
  "text": "Les crevettes-mantes peuvent frapper si vite que l'eau autour de leur pince se met brièvement à bouillir.",
  "source": "Perplexity",
  "question": "Est-il vrai que les crevettes-mantes peuvent frapper si vite que l'eau autour de leur pince se met brièvement à bouillir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20crevettes-mantes%20peuvent%20frapper%20si%20vite%20que%20l'eau%20autour%20de%20leur%20pince%20se%20met%20bri%C3%A8vement%20%C3%A0%20bouillir%20%3F"
 },
 {
  "text": "Les flamants roses naissent gris : leur couleur vient des pigments contenus dans leur nourriture.",
  "source": "Perplexity",
  "question": "Est-il vrai que les flamants roses naissent gris : leur couleur vient des pigments contenus dans leur nourriture ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20flamants%20roses%20naissent%20gris%C2%A0%3A%20leur%20couleur%20vient%20des%20pigments%20contenus%20dans%20leur%20nourriture%20%3F"
 },
 {
  "text": "Les dauphins se donnent des noms : chacun a un sifflement signature qui l'identifie.",
  "source": "Perplexity",
  "question": "Est-il vrai que les dauphins se donnent des noms : chacun a un sifflement signature qui l'identifie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20dauphins%20se%20donnent%20des%20noms%C2%A0%3A%20chacun%20a%20un%20sifflement%20signature%20qui%20l'identifie%20%3F"
 },
 {
  "text": "Les kangourous ne peuvent pas reculer, en partie à cause de leur grande queue et de leurs pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les kangourous ne peuvent pas reculer, en partie à cause de leur grande queue et de leurs pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20kangourous%20ne%20peuvent%20pas%20reculer%2C%20en%20partie%20%C3%A0%20cause%20de%20leur%20grande%20queue%20et%20de%20leurs%20pattes%20%3F"
 },
 {
  "text": "Les axolotls peuvent régénérer leurs pattes, leur cœur et même des parties de leur cerveau.",
  "source": "Perplexity",
  "question": "Est-il vrai que les axolotls peuvent régénérer leurs pattes, leur cœur et même des parties de leur cerveau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20axolotls%20peuvent%20r%C3%A9g%C3%A9n%C3%A9rer%20leurs%20pattes%2C%20leur%20c%C5%93ur%20et%20m%C3%AAme%20des%20parties%20de%20leur%20cerveau%20%3F"
 },
 {
  "text": "Les tardigrades, minuscules animaux, peuvent survivre dans l'espace, à la congélation, à la déshydratation et à des radiations extrêmes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les tardigrades, minuscules animaux, peuvent survivre dans l'espace, à la congélation, à la déshydratation et à des radiations extrêmes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20tardigrades%2C%20minuscules%20animaux%2C%20peuvent%20survivre%20dans%20l'espace%2C%20%C3%A0%20la%20cong%C3%A9lation%2C%20%C3%A0%20la%20d%C3%A9shydratation%20et%20%C3%A0%20des%20radiations%20extr%C3%AAmes%20%3F"
 },
 {
  "text": "Les loutres de mer se tiennent parfois les pattes en dormant pour ne pas dériver et se perdre.",
  "source": "Perplexity",
  "question": "Est-il vrai que les loutres de mer se tiennent parfois les pattes en dormant pour ne pas dériver et se perdre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20loutres%20de%20mer%20se%20tiennent%20parfois%20les%20pattes%20en%20dormant%20pour%20ne%20pas%20d%C3%A9river%20et%20se%20perdre%20%3F"
 },
 {
  "text": "Les abeilles peuvent reconnaître des visages humains en combinant des éléments comme dans un puzzle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les abeilles peuvent reconnaître des visages humains en combinant des éléments comme dans un puzzle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20abeilles%20peuvent%20reconna%C3%AEtre%20des%20visages%20humains%20en%20combinant%20des%20%C3%A9l%C3%A9ments%20comme%20dans%20un%20puzzle%20%3F"
 },
 {
  "text": "Les crocodiles ne peuvent pas tirer la langue, celle-ci étant fixée au fond de leur bouche.",
  "source": "Perplexity",
  "question": "Est-il vrai que les crocodiles ne peuvent pas tirer la langue, celle-ci étant fixée au fond de leur bouche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20crocodiles%20ne%20peuvent%20pas%20tirer%20la%20langue%2C%20celle-ci%20%C3%A9tant%20fix%C3%A9e%20au%20fond%20de%20leur%20bouche%20%3F"
 },
 {
  "text": "Les koalas ont des empreintes digitales si semblables aux nôtres qu'elles pourraient tromper une analyse rapide.",
  "source": "Perplexity",
  "question": "Est-il vrai que les koalas ont des empreintes digitales si semblables aux nôtres qu'elles pourraient tromper une analyse rapide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20koalas%20ont%20des%20empreintes%20digitales%20si%20semblables%20aux%20n%C3%B4tres%20qu'elles%20pourraient%20tromper%20une%20analyse%20rapide%20%3F"
 },
 {
  "text": "Le blob, un organisme unicellulaire, n'a ni cerveau ni neurones mais peut apprendre et résoudre des labyrinthes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le blob, un organisme unicellulaire, n'a ni cerveau ni neurones mais peut apprendre et résoudre des labyrinthes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20blob%2C%20un%20organisme%20unicellulaire%2C%20n'a%20ni%20cerveau%20ni%20neurones%20mais%20peut%20apprendre%20et%20r%C3%A9soudre%20des%20labyrinthes%20%3F"
 },
 {
  "text": "Certaines méduses, comme Turritopsis dohrnii, peuvent inverser leur cycle de vie et rajeunir, ce qui leur vaut le surnom de méduse immortelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines méduses, comme Turritopsis dohrnii, peuvent inverser leur cycle de vie et rajeunir, ce qui leur vaut le surnom de méduse immortelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20m%C3%A9duses%2C%20comme%20Turritopsis%20dohrnii%2C%20peuvent%20inverser%20leur%20cycle%20de%20vie%20et%20rajeunir%2C%20ce%20qui%20leur%20vaut%20le%20surnom%20de%20m%C3%A9duse%20immortelle%20%3F"
 },
 {
  "text": "Les rats rient quand on les chatouille, avec des vocalisations aiguës inaudibles pour nous sans instruments.",
  "source": "Perplexity",
  "question": "Est-il vrai que les rats rient quand on les chatouille, avec des vocalisations aiguës inaudibles pour nous sans instruments ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20rats%20rient%20quand%20on%20les%20chatouille%2C%20avec%20des%20vocalisations%20aigu%C3%ABs%20inaudibles%20pour%20nous%20sans%20instruments%20%3F"
 },
 {
  "text": "Un poulpe peut passer à travers n'importe quel trou plus grand que son bec, la seule partie dure de son corps.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un poulpe peut passer à travers n'importe quel trou plus grand que son bec, la seule partie dure de son corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20poulpe%20peut%20passer%20%C3%A0%20travers%20n'importe%20quel%20trou%20plus%20grand%20que%20son%20bec%2C%20la%20seule%20partie%20dure%20de%20son%20corps%20%3F"
 },
 {
  "text": "Les corbeaux fabriquent des outils, planifient l'avenir et gardent rancune envers des humains précis.",
  "source": "Perplexity",
  "question": "Est-il vrai que les corbeaux fabriquent des outils, planifient l'avenir et gardent rancune envers des humains précis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20corbeaux%20fabriquent%20des%20outils%2C%20planifient%20l'avenir%20et%20gardent%20rancune%20envers%20des%20humains%20pr%C3%A9cis%20%3F"
 },
 {
  "text": "Les guépards ne rugissent pas, ils miaulent et ronronnent comme des chats domestiques.",
  "source": "Perplexity",
  "question": "Est-il vrai que les guépards ne rugissent pas, ils miaulent et ronronnent comme des chats domestiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gu%C3%A9pards%20ne%20rugissent%20pas%2C%20ils%20miaulent%20et%20ronronnent%20comme%20des%20chats%20domestiques%20%3F"
 },
 {
  "text": "Le poisson-clown peut changer de sexe, et c'est le mâle dominant qui devient femelle en cas de besoin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-clown peut changer de sexe, et c'est le mâle dominant qui devient femelle en cas de besoin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-clown%20peut%20changer%20de%20sexe%2C%20et%20c'est%20le%20m%C3%A2le%20dominant%20qui%20devient%20femelle%20en%20cas%20de%20besoin%20%3F"
 },
 {
  "text": "Le wombat produit des crottes de forme cubique, un cas unique dans le règne animal.",
  "source": "Perplexity",
  "question": "Est-il vrai que le wombat produit des crottes de forme cubique, un cas unique dans le règne animal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20wombat%20produit%20des%20crottes%20de%20forme%20cubique%2C%20un%20cas%20unique%20dans%20le%20r%C3%A8gne%20animal%20%3F"
 },
 {
  "text": "Un cafard peut survivre plusieurs semaines sans sa tête avant de mourir de faim.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un cafard peut survivre plusieurs semaines sans sa tête avant de mourir de faim ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20cafard%20peut%20survivre%20plusieurs%20semaines%20sans%20sa%20t%C3%AAte%20avant%20de%20mourir%20de%20faim%20%3F"
 },
 {
  "text": "La cornée de l'œil est l'un des rares tissus du corps à ne recevoir aucun vaisseau sanguin, elle respire directement l'air.",
  "source": "Perplexity",
  "question": "Est-il vrai que la cornée de l'œil est l'un des rares tissus du corps à ne recevoir aucun vaisseau sanguin, elle respire directement l'air ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20corn%C3%A9e%20de%20l'%C5%93il%20est%20l'un%20des%20rares%20tissus%20du%20corps%20%C3%A0%20ne%20recevoir%20aucun%20vaisseau%20sanguin%2C%20elle%20respire%20directement%20l'air%20%3F"
 },
 {
  "text": "Le corps humain émet une très faible lueur, invisible à l'œil nu, appelée bioluminescence humaine.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain émet une très faible lueur, invisible à l'œil nu, appelée bioluminescence humaine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20%C3%A9met%20une%20tr%C3%A8s%20faible%20lueur%2C%20invisible%20%C3%A0%20l'%C5%93il%20nu%2C%20appel%C3%A9e%20bioluminescence%20humaine%20%3F"
 },
 {
  "text": "La banane est botaniquement une baie, mais la fraise n'en est pas une.",
  "source": "Perplexity",
  "question": "Est-il vrai que la banane est botaniquement une baie, mais la fraise n'en est pas une ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20banane%20est%20botaniquement%20une%20baie%2C%20mais%20la%20fraise%20n'en%20est%20pas%20une%20%3F"
 },
 {
  "text": "Le wasabi servi dans la plupart des restaurants est en réalité du raifort coloré, le vrai wasabi étant rare et cher.",
  "source": "Perplexity",
  "question": "Est-il vrai que le wasabi servi dans la plupart des restaurants est en réalité du raifort coloré, le vrai wasabi étant rare et cher ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20wasabi%20servi%20dans%20la%20plupart%20des%20restaurants%20est%20en%20r%C3%A9alit%C3%A9%20du%20raifort%20color%C3%A9%2C%20le%20vrai%20wasabi%20%C3%A9tant%20rare%20et%20cher%20%3F"
 },
 {
  "text": "Le fromage est l'aliment le plus volé au monde selon plusieurs études sur le vol en magasin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fromage est l'aliment le plus volé au monde selon plusieurs études sur le vol en magasin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fromage%20est%20l'aliment%20le%20plus%20vol%C3%A9%20au%20monde%20selon%20plusieurs%20%C3%A9tudes%20sur%20le%20vol%20en%20magasin%20%3F"
 },
 {
  "text": "Les tomates étaient longtemps considérées comme toxiques en Europe car les riches tombaient malades, en réalité à cause du plomb de leur vaisselle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les tomates étaient longtemps considérées comme toxiques en Europe car les riches tombaient malades, en réalité à cause du plomb de leur vaisselle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20tomates%20%C3%A9taient%20longtemps%20consid%C3%A9r%C3%A9es%20comme%20toxiques%20en%20Europe%20car%20les%20riches%20tombaient%20malades%2C%20en%20r%C3%A9alit%C3%A9%20%C3%A0%20cause%20du%20plomb%20de%20leur%20vaisselle%20%3F"
 },
 {
  "text": "La guerre la plus courte de l'histoire, entre le Royaume-Uni et Zanzibar en 1896, a duré moins de 45 minutes.",
  "source": "Perplexity",
  "question": "Est-il vrai que la guerre la plus courte de l'histoire, entre le Royaume-Uni et Zanzibar en 1896, a duré moins de 45 minutes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20guerre%20la%20plus%20courte%20de%20l'histoire%2C%20entre%20le%20Royaume-Uni%20et%20Zanzibar%20en%201896%2C%20a%20dur%C3%A9%20moins%20de%2045%20minutes%20%3F"
 },
 {
  "text": "Cléopâtre a vécu plus près dans le temps de l'invention du smartphone que de la construction de la grande pyramide de Gizeh.",
  "source": "Perplexity",
  "question": "Est-il vrai que cléopâtre a vécu plus près dans le temps de l'invention du smartphone que de la construction de la grande pyramide de Gizeh ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20cl%C3%A9op%C3%A2tre%20a%20v%C3%A9cu%20plus%20pr%C3%A8s%20dans%20le%20temps%20de%20l'invention%20du%20smartphone%20que%20de%20la%20construction%20de%20la%20grande%20pyramide%20de%20Gizeh%20%3F"
 },
 {
  "text": "Les pyramides d'Égypte étaient à l'origine recouvertes d'un calcaire blanc poli qui les faisait briller au soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pyramides d'Égypte étaient à l'origine recouvertes d'un calcaire blanc poli qui les faisait briller au soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pyramides%20d'%C3%89gypte%20%C3%A9taient%20%C3%A0%20l'origine%20recouvertes%20d'un%20calcaire%20blanc%20poli%20qui%20les%20faisait%20briller%20au%20soleil%20%3F"
 },
 {
  "text": "Oxford, en Angleterre, était déjà une université avant que la civilisation aztèque ne fonde sa capitale.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'oxford, en Angleterre, était déjà une université avant que la civilisation aztèque ne fonde sa capitale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'oxford%2C%20en%20Angleterre%2C%20%C3%A9tait%20d%C3%A9j%C3%A0%20une%20universit%C3%A9%20avant%20que%20la%20civilisation%20azt%C3%A8que%20ne%20fonde%20sa%20capitale%20%3F"
 },
 {
  "text": "Les gladiateurs romains étaient souvent végétariens et surnommés mangeurs d'orge.",
  "source": "Perplexity",
  "question": "Est-il vrai que les gladiateurs romains étaient souvent végétariens et surnommés mangeurs d'orge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gladiateurs%20romains%20%C3%A9taient%20souvent%20v%C3%A9g%C3%A9tariens%20et%20surnomm%C3%A9s%20mangeurs%20d'orge%20%3F"
 },
 {
  "text": "Le mammouth laineux existait encore lorsque les pyramides d'Égypte étaient déjà construites, certains ayant survécu sur une île isolée.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mammouth laineux existait encore lorsque les pyramides d'Égypte étaient déjà construites, certains ayant survécu sur une île isolée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mammouth%20laineux%20existait%20encore%20lorsque%20les%20pyramides%20d'%C3%89gypte%20%C3%A9taient%20d%C3%A9j%C3%A0%20construites%2C%20certains%20ayant%20surv%C3%A9cu%20sur%20une%20%C3%AEle%20isol%C3%A9e%20%3F"
 },
 {
  "text": "Les Romains utilisaient de l'urine comme produit nettoyant et même pour blanchir les dents, à cause de son ammoniac.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Romains utilisaient de l'urine comme produit nettoyant et même pour blanchir les dents, à cause de son ammoniac ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Romains%20utilisaient%20de%20l'urine%20comme%20produit%20nettoyant%20et%20m%C3%AAme%20pour%20blanchir%20les%20dents%2C%20%C3%A0%20cause%20de%20son%20ammoniac%20%3F"
 },
 {
  "text": "Les anciens Égyptiens se rasaient les sourcils en signe de deuil à la mort de leur chat.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anciens Égyptiens se rasaient les sourcils en signe de deuil à la mort de leur chat ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anciens%20%C3%89gyptiens%20se%20rasaient%20les%20sourcils%20en%20signe%20de%20deuil%20%C3%A0%20la%20mort%20de%20leur%20chat%20%3F"
 },
 {
  "text": "Les Vikings n'avaient pas de casques à cornes : cette image vient surtout d'opéras et d'illustrations du 19e siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Vikings n'avaient pas de casques à cornes : cette image vient surtout d'opéras et d'illustrations du 19e siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Vikings%20n'avaient%20pas%20de%20casques%20%C3%A0%20cornes%C2%A0%3A%20cette%20image%20vient%20surtout%20d'op%C3%A9ras%20et%20d'illustrations%20du%2019e%20si%C3%A8cle%20%3F"
 },
 {
  "text": "La fourchette a longtemps été considérée comme un objet scandaleux et efféminé en Europe.",
  "source": "Perplexity",
  "question": "Est-il vrai que la fourchette a longtemps été considérée comme un objet scandaleux et efféminé en Europe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20fourchette%20a%20longtemps%20%C3%A9t%C3%A9%20consid%C3%A9r%C3%A9e%20comme%20un%20objet%20scandaleux%20et%20eff%C3%A9min%C3%A9%20en%20Europe%20%3F"
 },
 {
  "text": "Certaines momies égyptiennes ont été, à une époque, réduites en poudre et vendues comme remède médical.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines momies égyptiennes ont été, à une époque, réduites en poudre et vendues comme remède médical ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20momies%20%C3%A9gyptiennes%20ont%20%C3%A9t%C3%A9%2C%20%C3%A0%20une%20%C3%A9poque%2C%20r%C3%A9duites%20en%20poudre%20et%20vendues%20comme%20rem%C3%A8de%20m%C3%A9dical%20%3F"
 },
 {
  "text": "Avant les réveils, des hommes payés frappaient aux fenêtres avec de longues perches pour réveiller les ouvriers en Angleterre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'avant les réveils, des hommes payés frappaient aux fenêtres avec de longues perches pour réveiller les ouvriers en Angleterre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'avant%20les%20r%C3%A9veils%2C%20des%20hommes%20pay%C3%A9s%20frappaient%20aux%20fen%C3%AAtres%20avec%20de%20longues%20perches%20pour%20r%C3%A9veiller%20les%20ouvriers%20en%20Angleterre%20%3F"
 },
 {
  "text": "La chute du mur de Berlin en 1989 a été précipitée en partie par une annonce administrative mal formulée.",
  "source": "Perplexity",
  "question": "Est-il vrai que la chute du mur de Berlin en 1989 a été précipitée en partie par une annonce administrative mal formulée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20chute%20du%20mur%20de%20Berlin%20en%201989%20a%20%C3%A9t%C3%A9%20pr%C3%A9cipit%C3%A9e%20en%20partie%20par%20une%20annonce%20administrative%20mal%20formul%C3%A9e%20%3F"
 },
 {
  "text": "Le Sahara n'est pas le plus grand désert du monde : l'Antarctique, un désert froid, est bien plus étendu.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Sahara n'est pas le plus grand désert du monde : l'Antarctique, un désert froid, est bien plus étendu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Sahara%20n'est%20pas%20le%20plus%20grand%20d%C3%A9sert%20du%20monde%C2%A0%3A%20l'Antarctique%2C%20un%20d%C3%A9sert%20froid%2C%20est%20bien%20plus%20%C3%A9tendu%20%3F"
 },
 {
  "text": "Le mont Chimborazo en Équateur est le point de la surface terrestre le plus éloigné du centre de la Terre, à cause du renflement de l'équateur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mont Chimborazo en Équateur est le point de la surface terrestre le plus éloigné du centre de la Terre, à cause du renflement de l'équateur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mont%20Chimborazo%20en%20%C3%89quateur%20est%20le%20point%20de%20la%20surface%20terrestre%20le%20plus%20%C3%A9loign%C3%A9%20du%20centre%20de%20la%20Terre%2C%20%C3%A0%20cause%20du%20renflement%20de%20l'%C3%A9quateur%20%3F"
 },
 {
  "text": "L'Australie est plus large que la Lune, en diamètre.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Australie est plus large que la Lune, en diamètre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Australie%20est%20plus%20large%20que%20la%20Lune%2C%20en%20diam%C3%A8tre%20%3F"
 },
 {
  "text": "Il n'y a aucune fourmi en Islande, en Antarctique ni au Groenland, entre autres endroits.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il n'y a aucune fourmi en Islande, en Antarctique ni au Groenland, entre autres endroits ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20n'y%20a%20aucune%20fourmi%20en%20Islande%2C%20en%20Antarctique%20ni%20au%20Groenland%2C%20entre%20autres%20endroits%20%3F"
 },
 {
  "text": "Le Canada possède plus de lacs que tout le reste du monde réuni.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Canada possède plus de lacs que tout le reste du monde réuni ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Canada%20poss%C3%A8de%20plus%20de%20lacs%20que%20tout%20le%20reste%20du%20monde%20r%C3%A9uni%20%3F"
 },
 {
  "text": "Le désert d'Atacama au Chili est l'endroit le plus sec du monde, certaines zones n'ayant jamais enregistré de pluie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le désert d'Atacama au Chili est l'endroit le plus sec du monde, certaines zones n'ayant jamais enregistré de pluie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20d%C3%A9sert%20d'Atacama%20au%20Chili%20est%20l'endroit%20le%20plus%20sec%20du%20monde%2C%20certaines%20zones%20n'ayant%20jamais%20enregistr%C3%A9%20de%20pluie%20%3F"
 },
 {
  "text": "La France est le pays qui possède le plus de fuseaux horaires au monde grâce à ses territoires d'outre-mer.",
  "source": "Perplexity",
  "question": "Est-il vrai que la France est le pays qui possède le plus de fuseaux horaires au monde grâce à ses territoires d'outre-mer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20France%20est%20le%20pays%20qui%20poss%C3%A8de%20le%20plus%20de%20fuseaux%20horaires%20au%20monde%20gr%C3%A2ce%20%C3%A0%20ses%20territoires%20d'outre-mer%20%3F"
 },
 {
  "text": "Le point culminant et le point le plus bas des États-Unis contigus sont distants de moins de 150 kilomètres, en Californie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point culminant et le point le plus bas des États-Unis contigus sont distants de moins de 150 kilomètres, en Californie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20culminant%20et%20le%20point%20le%20plus%20bas%20des%20%C3%89tats-Unis%20contigus%20sont%20distants%20de%20moins%20de%20150%20kilom%C3%A8tres%2C%20en%20Californie%20%3F"
 },
 {
  "text": "L'Alaska est à la fois l'État le plus au nord, le plus à l'ouest et, à cause des îles Aléoutiennes, le plus à l'est des États-Unis.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Alaska est à la fois l'État le plus au nord, le plus à l'ouest et, à cause des îles Aléoutiennes, le plus à l'est des États-Unis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Alaska%20est%20%C3%A0%20la%20fois%20l'%C3%89tat%20le%20plus%20au%20nord%2C%20le%20plus%20%C3%A0%20l'ouest%20et%2C%20%C3%A0%20cause%20des%20%C3%AEles%20Al%C3%A9outiennes%2C%20le%20plus%20%C3%A0%20l'est%20des%20%C3%89tats-Unis%20%3F"
 },
 {
  "text": "Le point Nemo, dans l'océan Pacifique, est si isolé que les humains les plus proches sont souvent les astronautes en orbite.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point Nemo, dans l'océan Pacifique, est si isolé que les humains les plus proches sont souvent les astronautes en orbite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20Nemo%2C%20dans%20l'oc%C3%A9an%20Pacifique%2C%20est%20si%20isol%C3%A9%20que%20les%20humains%20les%20plus%20proches%20sont%20souvent%20les%20astronautes%20en%20orbite%20%3F"
 },
 {
  "text": "Certaines langues, comme le tuyuca d'Amazonie, obligent le locuteur à préciser comment il sait ce qu'il affirme.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines langues, comme le tuyuca d'Amazonie, obligent le locuteur à préciser comment il sait ce qu'il affirme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20langues%2C%20comme%20le%20tuyuca%20d'Amazonie%2C%20obligent%20le%20locuteur%20%C3%A0%20pr%C3%A9ciser%20comment%20il%20sait%20ce%20qu'il%20affirme%20%3F"
 },
 {
  "text": "Il existe des langues sifflées, comme aux Canaries, capables de transmettre des messages complexes d'une vallée à l'autre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des langues sifflées, comme aux Canaries, capables de transmettre des messages complexes d'une vallée à l'autre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20langues%20siffl%C3%A9es%2C%20comme%20aux%20Canaries%2C%20capables%20de%20transmettre%20des%20messages%20complexes%20d'une%20vall%C3%A9e%20%C3%A0%20l'autre%20%3F"
 },
 {
  "text": "L'islandais est resté si proche du vieux norrois que ses locuteurs peuvent encore lire des textes vieux de mille ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'islandais est resté si proche du vieux norrois que ses locuteurs peuvent encore lire des textes vieux de mille ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'islandais%20est%20rest%C3%A9%20si%20proche%20du%20vieux%20norrois%20que%20ses%20locuteurs%20peuvent%20encore%20lire%20des%20textes%20vieux%20de%20mille%20ans%20%3F"
 },
 {
  "text": "Le mot robot vient d'une pièce de théâtre tchèque et dérive du tchèque robota, qui signifie travail forcé ou corvée.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot robot vient d'une pièce de théâtre tchèque et dérive du tchèque robota, qui signifie travail forcé ou corvée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20robot%20vient%20d'une%20pi%C3%A8ce%20de%20th%C3%A9%C3%A2tre%20tch%C3%A8que%20et%20d%C3%A9rive%20du%20tch%C3%A8que%20robota%2C%20qui%20signifie%20travail%20forc%C3%A9%20ou%20corv%C3%A9e%20%3F"
 },
 {
  "text": "Dans un groupe de seulement 23 personnes, il y a plus d'une chance sur deux que deux d'entre elles partagent le même anniversaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans un groupe de seulement 23 personnes, il y a plus d'une chance sur deux que deux d'entre elles partagent le même anniversaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20un%20groupe%20de%20seulement%2023%20personnes%2C%20il%20y%20a%20plus%20d'une%20chance%20sur%20deux%20que%20deux%20d'entre%20elles%20partagent%20le%20m%C3%AAme%20anniversaire%20%3F"
 },
 {
  "text": "Un simple pliage de papier, s'il était possible de le plier 42 fois, donnerait une épaisseur atteignant la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un simple pliage de papier, s'il était possible de le plier 42 fois, donnerait une épaisseur atteignant la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20simple%20pliage%20de%20papier%2C%20s'il%20%C3%A9tait%20possible%20de%20le%20plier%2042%20fois%2C%20donnerait%20une%20%C3%A9paisseur%20atteignant%20la%20Lune%20%3F"
 },
 {
  "text": "Il existe différents types d'infinis, certains étant démontrés comme strictement plus grands que d'autres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe différents types d'infinis, certains étant démontrés comme strictement plus grands que d'autres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20diff%C3%A9rents%20types%20d'infinis%2C%20certains%20%C3%A9tant%20d%C3%A9montr%C3%A9s%20comme%20strictement%20plus%20grands%20que%20d'autres%20%3F"
 },
 {
  "text": "Le paradoxe de Monty Hall montre qu'il vaut mieux changer de porte dans un jeu à trois portes, ce qui déroute l'intuition.",
  "source": "Perplexity",
  "question": "Est-il vrai que le paradoxe de Monty Hall montre qu'il vaut mieux changer de porte dans un jeu à trois portes, ce qui déroute l'intuition ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20paradoxe%20de%20Monty%20Hall%20montre%20qu'il%20vaut%20mieux%20changer%20de%20porte%20dans%20un%20jeu%20%C3%A0%20trois%20portes%2C%20ce%20qui%20d%C3%A9route%20l'intuition%20%3F"
 },
 {
  "text": "Il est impossible de peigner une boule chevelue sans laisser au moins un épi, un résultat mathématique sérieux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il est impossible de peigner une boule chevelue sans laisser au moins un épi, un résultat mathématique sérieux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20est%20impossible%20de%20peigner%20une%20boule%20chevelue%20sans%20laisser%20au%20moins%20un%20%C3%A9pi%2C%20un%20r%C3%A9sultat%20math%C3%A9matique%20s%C3%A9rieux%20%3F"
 },
 {
  "text": "Le premier message envoyé sur ce qui deviendra Internet a planté après seulement deux lettres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier message envoyé sur ce qui deviendra Internet a planté après seulement deux lettres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20message%20envoy%C3%A9%20sur%20ce%20qui%20deviendra%20Internet%20a%20plant%C3%A9%20apr%C3%A8s%20seulement%20deux%20lettres%20%3F"
 },
 {
  "text": "Le code QR a été inventé au Japon pour suivre des pièces automobiles dans les usines.",
  "source": "Perplexity",
  "question": "Est-il vrai que le code QR a été inventé au Japon pour suivre des pièces automobiles dans les usines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20code%20QR%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20au%20Japon%20pour%20suivre%20des%20pi%C3%A8ces%20automobiles%20dans%20les%20usines%20%3F"
 },
 {
  "text": "Le Wi-Fi ne veut pas dire wireless fidelity, ce nom a été inventé par une agence marketing sans vraie signification.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Wi-Fi ne veut pas dire wireless fidelity, ce nom a été inventé par une agence marketing sans vraie signification ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Wi-Fi%20ne%20veut%20pas%20dire%20wireless%20fidelity%2C%20ce%20nom%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20par%20une%20agence%20marketing%20sans%20vraie%20signification%20%3F"
 },
 {
  "text": "Le four à micro-ondes a été découvert par accident quand une barre chocolatée a fondu dans la poche d'un ingénieur près d'un radar.",
  "source": "Perplexity",
  "question": "Est-il vrai que le four à micro-ondes a été découvert par accident quand une barre chocolatée a fondu dans la poche d'un ingénieur près d'un radar ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20four%20%C3%A0%20micro-ondes%20a%20%C3%A9t%C3%A9%20d%C3%A9couvert%20par%20accident%20quand%20une%20barre%20chocolat%C3%A9e%20a%20fondu%20dans%20la%20poche%20d'un%20ing%C3%A9nieur%20pr%C3%A8s%20d'un%20radar%20%3F"
 },
 {
  "text": "Le Bluetooth, littéralement dent bleue en anglais, doit son nom à un roi viking, Harald à la dent bleue, qui unifiait des peuples comme la technologie unit les appareils.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Bluetooth, littéralement dent bleue en anglais, doit son nom à un roi viking, Harald à la dent bleue, qui unifiait des peuples comme la technologie unit les appareils ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Bluetooth%2C%20litt%C3%A9ralement%20dent%20bleue%20en%20anglais%2C%20doit%20son%20nom%20%C3%A0%20un%20roi%20viking%2C%20Harald%20%C3%A0%20la%20dent%20bleue%2C%20qui%20unifiait%20des%20peuples%20comme%20la%20technologie%20unit%20les%20appareils%20%3F"
 },
 {
  "text": "Le tout premier site web est toujours en ligne et décrivait simplement ce qu'était le World Wide Web.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tout premier site web est toujours en ligne et décrivait simplement ce qu'était le World Wide Web ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tout%20premier%20site%20web%20est%20toujours%20en%20ligne%20et%20d%C3%A9crivait%20simplement%20ce%20qu'%C3%A9tait%20le%20World%20Wide%20Web%20%3F"
 },
 {
  "text": "Le Post-it est né d'une colle ratée, jugée trop faible, qui s'est révélée parfaite pour des notes repositionnables.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Post-it est né d'une colle ratée, jugée trop faible, qui s'est révélée parfaite pour des notes repositionnables ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Post-it%20est%20n%C3%A9%20d'une%20colle%20rat%C3%A9e%2C%20jug%C3%A9e%20trop%20faible%2C%20qui%20s'est%20r%C3%A9v%C3%A9l%C3%A9e%20parfaite%20pour%20des%20notes%20repositionnables%20%3F"
 },
 {
  "text": "Le vélcro a été inspiré par les petites graines qui s'accrochaient au pantalon d'un ingénieur et au poil de son chien.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vélcro a été inspiré par les petites graines qui s'accrochaient au pantalon d'un ingénieur et au poil de son chien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20v%C3%A9lcro%20a%20%C3%A9t%C3%A9%20inspir%C3%A9%20par%20les%20petites%20graines%20qui%20s'accrochaient%20au%20pantalon%20d'un%20ing%C3%A9nieur%20et%20au%20poil%20de%20son%20chien%20%3F"
 },
 {
  "text": "Le CD a été conçu pour durer environ 74 minutes, dit-on pour contenir une symphonie de Beethoven en entier.",
  "source": "Perplexity",
  "question": "Est-il vrai que le CD a été conçu pour durer environ 74 minutes, dit-on pour contenir une symphonie de Beethoven en entier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20CD%20a%20%C3%A9t%C3%A9%20con%C3%A7u%20pour%20durer%20environ%2074%20minutes%2C%20dit-on%20pour%20contenir%20une%20symphonie%20de%20Beethoven%20en%20entier%20%3F"
 },
 {
  "text": "Le plus vieil arbre vivant connu a plus de 4 800 ans, il germait donc avant la construction des pyramides.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus vieil arbre vivant connu a plus de 4 800 ans, il germait donc avant la construction des pyramides ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20vieil%20arbre%20vivant%20connu%20a%20plus%20de%204%C2%A0800%20ans%2C%20il%20germait%20donc%20avant%20la%20construction%20des%20pyramides%20%3F"
 },
 {
  "text": "Le son le plus fort jamais enregistré, l'éruption du Krakatoa en 1883, a été entendu à des milliers de kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son le plus fort jamais enregistré, l'éruption du Krakatoa en 1883, a été entendu à des milliers de kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20le%20plus%20fort%20jamais%20enregistr%C3%A9%2C%20l'%C3%A9ruption%20du%20Krakatoa%20en%201883%2C%20a%20%C3%A9t%C3%A9%20entendu%20%C3%A0%20des%20milliers%20de%20kilom%C3%A8tres%20%3F"
 },
 {
  "text": "La plus grande fleur du monde, la rafflésie, peut mesurer près d'un mètre et dégage une odeur de viande pourrie.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus grande fleur du monde, la rafflésie, peut mesurer près d'un mètre et dégage une odeur de viande pourrie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20grande%20fleur%20du%20monde%2C%20la%20raffl%C3%A9sie%2C%20peut%20mesurer%20pr%C3%A8s%20d'un%20m%C3%A8tre%20et%20d%C3%A9gage%20une%20odeur%20de%20viande%20pourrie%20%3F"
 },
 {
  "text": "La créature la plus âgée jamais identifiée est peut-être une éponge de mer vivant depuis plus de 10 000 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la créature la plus âgée jamais identifiée est peut-être une éponge de mer vivant depuis plus de 10 000 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20cr%C3%A9ature%20la%20plus%20%C3%A2g%C3%A9e%20jamais%20identifi%C3%A9e%20est%20peut-%C3%AAtre%20une%20%C3%A9ponge%20de%20mer%20vivant%20depuis%20plus%20de%2010%C2%A0000%20ans%20%3F"
 },
 {
  "text": "On connaît mieux la surface de la Lune et de Mars que le fond de nos propres océans.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on connaît mieux la surface de la Lune et de Mars que le fond de nos propres océans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20conna%C3%AEt%20mieux%20la%20surface%20de%20la%20Lune%20et%20de%20Mars%20que%20le%20fond%20de%20nos%20propres%20oc%C3%A9ans%20%3F"
 },
 {
  "text": "Plus de la moitié de l'oxygène que nous respirons est produite par le plancton et les océans, pas par les forêts.",
  "source": "Perplexity",
  "question": "Est-il vrai que plus de la moitié de l'oxygène que nous respirons est produite par le plancton et les océans, pas par les forêts ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20plus%20de%20la%20moiti%C3%A9%20de%20l'oxyg%C3%A8ne%20que%20nous%20respirons%20est%20produite%20par%20le%20plancton%20et%20les%20oc%C3%A9ans%2C%20pas%20par%20les%20for%C3%AAts%20%3F"
 },
 {
  "text": "Il existe des endroits où il a plu des grenouilles ou des poissons, aspirés puis relâchés par des tornades ou des trombes marines.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des endroits où il a plu des grenouilles ou des poissons, aspirés puis relâchés par des tornades ou des trombes marines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20endroits%20o%C3%B9%20il%20a%20plu%20des%20grenouilles%20ou%20des%20poissons%2C%20aspir%C3%A9s%20puis%20rel%C3%A2ch%C3%A9s%20par%20des%20tornades%20ou%20des%20trombes%20marines%20%3F"
 },
 {
  "text": "La foudre peut transformer le sable en un tube de verre appelé fulgurite.",
  "source": "Perplexity",
  "question": "Est-il vrai que la foudre peut transformer le sable en un tube de verre appelé fulgurite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20foudre%20peut%20transformer%20le%20sable%20en%20un%20tube%20de%20verre%20appel%C3%A9%20fulgurite%20%3F"
 },
 {
  "text": "L'arc-en-ciel est en réalité un cercle complet, mais le sol nous en cache généralement la moitié inférieure.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'arc-en-ciel est en réalité un cercle complet, mais le sol nous en cache généralement la moitié inférieure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'arc-en-ciel%20est%20en%20r%C3%A9alit%C3%A9%20un%20cercle%20complet%2C%20mais%20le%20sol%20nous%20en%20cache%20g%C3%A9n%C3%A9ralement%20la%20moiti%C3%A9%20inf%C3%A9rieure%20%3F"
 },
 {
  "text": "La plus grande cascade du monde est en réalité sous-marine, dans le détroit du Danemark.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus grande cascade du monde est en réalité sous-marine, dans le détroit du Danemark ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20grande%20cascade%20du%20monde%20est%20en%20r%C3%A9alit%C3%A9%20sous-marine%2C%20dans%20le%20d%C3%A9troit%20du%20Danemark%20%3F"
 },
 {
  "text": "Le sable du désert du Sahara traverse parfois l'Atlantique et fertilise la forêt amazonienne.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sable du désert du Sahara traverse parfois l'Atlantique et fertilise la forêt amazonienne ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sable%20du%20d%C3%A9sert%20du%20Sahara%20traverse%20parfois%20l'Atlantique%20et%20fertilise%20la%20for%C3%AAt%20amazonienne%20%3F"
 },
 {
  "text": "La tomate, le poivron et l'aubergine appartiennent à la même famille que la mortelle belladone.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tomate, le poivron et l'aubergine appartiennent à la même famille que la mortelle belladone ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tomate%2C%20le%20poivron%20et%20l'aubergine%20appartiennent%20%C3%A0%20la%20m%C3%AAme%20famille%20que%20la%20mortelle%20belladone%20%3F"
 },
 {
  "text": "Les bananes que nous mangeons sont presque toutes des clones d'une même variété, ce qui les rend fragiles face aux maladies.",
  "source": "Perplexity",
  "question": "Est-il vrai que les bananes que nous mangeons sont presque toutes des clones d'une même variété, ce qui les rend fragiles face aux maladies ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20bananes%20que%20nous%20mangeons%20sont%20presque%20toutes%20des%20clones%20d'une%20m%C3%AAme%20vari%C3%A9t%C3%A9%2C%20ce%20qui%20les%20rend%20fragiles%20face%20aux%20maladies%20%3F"
 },
 {
  "text": "Le brocoli, le chou-fleur, le chou de Bruxelles et le chou frisé viennent tous de la même espèce sauvage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le brocoli, le chou-fleur, le chou de Bruxelles et le chou frisé viennent tous de la même espèce sauvage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20brocoli%2C%20le%20chou-fleur%2C%20le%20chou%20de%20Bruxelles%20et%20le%20chou%20fris%C3%A9%20viennent%20tous%20de%20la%20m%C3%AAme%20esp%C3%A8ce%20sauvage%20%3F"
 },
 {
  "text": "La plante la plus solitaire, un cycad mâle sans femelle connue, n'a plus de partenaire pour se reproduire naturellement.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plante la plus solitaire, un cycad mâle sans femelle connue, n'a plus de partenaire pour se reproduire naturellement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plante%20la%20plus%20solitaire%2C%20un%20cycad%20m%C3%A2le%20sans%20femelle%20connue%2C%20n'a%20plus%20de%20partenaire%20pour%20se%20reproduire%20naturellement%20%3F"
 },
 {
  "text": "Nous prenons la plupart de nos décisions quelques instants avant d'en être conscients, selon des expériences de neurosciences.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous prenons la plupart de nos décisions quelques instants avant d'en être conscients, selon des expériences de neurosciences ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20prenons%20la%20plupart%20de%20nos%20d%C3%A9cisions%20quelques%20instants%20avant%20d'en%20%C3%AAtre%20conscients%2C%20selon%20des%20exp%C3%A9riences%20de%20neurosciences%20%3F"
 },
 {
  "text": "Votre mémoire ne fonctionne pas comme un enregistrement fidèle : chaque souvenir est légèrement reconstruit à chaque rappel.",
  "source": "Perplexity",
  "question": "Est-il vrai que votre mémoire ne fonctionne pas comme un enregistrement fidèle : chaque souvenir est légèrement reconstruit à chaque rappel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20votre%20m%C3%A9moire%20ne%20fonctionne%20pas%20comme%20un%20enregistrement%20fid%C3%A8le%C2%A0%3A%20chaque%20souvenir%20est%20l%C3%A9g%C3%A8rement%20reconstruit%20%C3%A0%20chaque%20rappel%20%3F"
 },
 {
  "text": "Notre cerveau comble automatiquement la tache aveugle de chaque œil, de sorte que nous ne la remarquons jamais.",
  "source": "Perplexity",
  "question": "Est-il vrai que notre cerveau comble automatiquement la tache aveugle de chaque œil, de sorte que nous ne la remarquons jamais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20notre%20cerveau%20comble%20automatiquement%20la%20tache%20aveugle%20de%20chaque%20%C5%93il%2C%20de%20sorte%20que%20nous%20ne%20la%20remarquons%20jamais%20%3F"
 },
 {
  "text": "Non, les taureaux ne sont pas enragés par la couleur rouge : ils sont daltoniens à cette couleur et réagissent au mouvement.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, les taureaux ne sont pas enragés par la couleur rouge : ils sont daltoniens à cette couleur et réagissent au mouvement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20les%20taureaux%20ne%20sont%20pas%20enrag%C3%A9s%20par%20la%20couleur%20rouge%C2%A0%3A%20ils%20sont%20daltoniens%20%C3%A0%20cette%20couleur%20et%20r%C3%A9agissent%20au%20mouvement%20%3F"
 },
 {
  "text": "Non, un sou lâché du haut d'un gratte-ciel ne peut pas tuer quelqu'un : sa vitesse de chute reste trop faible.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, un sou lâché du haut d'un gratte-ciel ne peut pas tuer quelqu'un : sa vitesse de chute reste trop faible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20un%20sou%20l%C3%A2ch%C3%A9%20du%20haut%20d'un%20gratte-ciel%20ne%20peut%20pas%20tuer%20quelqu'un%C2%A0%3A%20sa%20vitesse%20de%20chute%20reste%20trop%20faible%20%3F"
 },
 {
  "text": "Non, les poissons rouges n'ont pas une mémoire de trois secondes : ils peuvent retenir des choses pendant des mois.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, les poissons rouges n'ont pas une mémoire de trois secondes : ils peuvent retenir des choses pendant des mois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20les%20poissons%20rouges%20n'ont%20pas%20une%20m%C3%A9moire%20de%20trois%20secondes%C2%A0%3A%20ils%20peuvent%20retenir%20des%20choses%20pendant%20des%20mois%20%3F"
 },
 {
  "text": "Non, on n'avale pas huit araignées par an en dormant : cette statistique a été inventée de toutes pièces.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, on n'avale pas huit araignées par an en dormant : cette statistique a été inventée de toutes pièces ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20on%20n'avale%20pas%20huit%20araign%C3%A9es%20par%20an%20en%20dormant%C2%A0%3A%20cette%20statistique%20a%20%C3%A9t%C3%A9%20invent%C3%A9e%20de%20toutes%20pi%C3%A8ces%20%3F"
 },
 {
  "text": "Non, les chauves-souris ne sont pas aveugles : la plupart voient très bien en plus d'utiliser l'écholocation.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, les chauves-souris ne sont pas aveugles : la plupart voient très bien en plus d'utiliser l'écholocation ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20les%20chauves-souris%20ne%20sont%20pas%20aveugles%C2%A0%3A%20la%20plupart%20voient%20tr%C3%A8s%20bien%20en%20plus%20d'utiliser%20l'%C3%A9cholocation%20%3F"
 },
 {
  "text": "Non, se casser les doigts ne donne pas d'arthrose : le bruit vient de bulles de gaz dans les articulations.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, se casser les doigts ne donne pas d'arthrose : le bruit vient de bulles de gaz dans les articulations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20se%20casser%20les%20doigts%20ne%20donne%20pas%20d'arthrose%C2%A0%3A%20le%20bruit%20vient%20de%20bulles%20de%20gaz%20dans%20les%20articulations%20%3F"
 },
 {
  "text": "Non, les cheveux et les ongles ne continuent pas de pousser après la mort : c'est la peau qui se rétracte.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, les cheveux et les ongles ne continuent pas de pousser après la mort : c'est la peau qui se rétracte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20les%20cheveux%20et%20les%20ongles%20ne%20continuent%20pas%20de%20pousser%20apr%C3%A8s%20la%20mort%C2%A0%3A%20c'est%20la%20peau%20qui%20se%20r%C3%A9tracte%20%3F"
 },
 {
  "text": "Non, l'eau ne tourne pas dans un sens dans un évier selon l'hémisphère : la force de Coriolis est bien trop faible à cette échelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, l'eau ne tourne pas dans un sens dans un évier selon l'hémisphère : la force de Coriolis est bien trop faible à cette échelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20l'eau%20ne%20tourne%20pas%20dans%20un%20sens%20dans%20un%20%C3%A9vier%20selon%20l'h%C3%A9misph%C3%A8re%C2%A0%3A%20la%20force%20de%20Coriolis%20est%20bien%20trop%20faible%20%C3%A0%20cette%20%C3%A9chelle%20%3F"
 },
 {
  "text": "Non, les vikings ne buvaient pas dans des crânes : cette idée vient d'une erreur de traduction d'un vieux poème.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, les vikings ne buvaient pas dans des crânes : cette idée vient d'une erreur de traduction d'un vieux poème ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20les%20vikings%20ne%20buvaient%20pas%20dans%20des%20cr%C3%A2nes%C2%A0%3A%20cette%20id%C3%A9e%20vient%20d'une%20erreur%20de%20traduction%20d'un%20vieux%20po%C3%A8me%20%3F"
 },
 {
  "text": "Non, la langue n'a pas de zones distinctes réservées à chaque goût : cette carte de la langue est fausse.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, la langue n'a pas de zones distinctes réservées à chaque goût : cette carte de la langue est fausse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20la%20langue%20n'a%20pas%20de%20zones%20distinctes%20r%C3%A9serv%C3%A9es%20%C3%A0%20chaque%20go%C3%BBt%C2%A0%3A%20cette%20carte%20de%20la%20langue%20est%20fausse%20%3F"
 },
 {
  "text": "Il est impossible de se lécher le coude pour la plupart des gens, même si beaucoup essaient en le lisant.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il est impossible de se lécher le coude pour la plupart des gens, même si beaucoup essaient en le lisant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20est%20impossible%20de%20se%20l%C3%A9cher%20le%20coude%20pour%20la%20plupart%20des%20gens%2C%20m%C3%AAme%20si%20beaucoup%20essaient%20en%20le%20lisant%20%3F"
 },
 {
  "text": "Vous ne pouvez pas vous chatouiller vous-même, car votre cerveau anticipe le geste et annule la surprise.",
  "source": "Perplexity",
  "question": "Est-il vrai que vous ne pouvez pas vous chatouiller vous-même, car votre cerveau anticipe le geste et annule la surprise ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vous%20ne%20pouvez%20pas%20vous%20chatouiller%20vous-m%C3%AAme%2C%20car%20votre%20cerveau%20anticipe%20le%20geste%20et%20annule%20la%20surprise%20%3F"
 },
 {
  "text": "Il y a plus de parties d'échecs possibles que d'atomes dans l'univers observable.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus de parties d'échecs possibles que d'atomes dans l'univers observable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20de%20parties%20d'%C3%A9checs%20possibles%20que%20d'atomes%20dans%20l'univers%20observable%20%3F"
 },
 {
  "text": "Le marathon fait environ 42 kilomètres à cause d'une distance fixée en partie pour arranger la famille royale britannique en 1908.",
  "source": "Perplexity",
  "question": "Est-il vrai que le marathon fait environ 42 kilomètres à cause d'une distance fixée en partie pour arranger la famille royale britannique en 1908 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20marathon%20fait%20environ%2042%20kilom%C3%A8tres%20%C3%A0%20cause%20d'une%20distance%20fix%C3%A9e%20en%20partie%20pour%20arranger%20la%20famille%20royale%20britannique%20en%201908%20%3F"
 },
 {
  "text": "Au basket, le panier était à l'origine un vrai panier de pêches dont il fallait récupérer la balle à la main.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au basket, le panier était à l'origine un vrai panier de pêches dont il fallait récupérer la balle à la main ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20basket%2C%20le%20panier%20%C3%A9tait%20%C3%A0%20l'origine%20un%20vrai%20panier%20de%20p%C3%AAches%20dont%20il%20fallait%20r%C3%A9cup%C3%A9rer%20la%20balle%20%C3%A0%20la%20main%20%3F"
 },
 {
  "text": "Il y a plus d'arbres sur Terre que d'étoiles dans la Voie lactée, selon les estimations.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus d'arbres sur Terre que d'étoiles dans la Voie lactée, selon les estimations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20d'arbres%20sur%20Terre%20que%20d'%C3%A9toiles%20dans%20la%20Voie%20lact%C3%A9e%2C%20selon%20les%20estimations%20%3F"
 },
 {
  "text": "Le code-barres a été inventé en s'inspirant du code Morse tracé dans le sable.",
  "source": "Perplexity",
  "question": "Est-il vrai que le code-barres a été inventé en s'inspirant du code Morse tracé dans le sable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20code-barres%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20en%20s'inspirant%20du%20code%20Morse%20trac%C3%A9%20dans%20le%20sable%20%3F"
 },
 {
  "text": "Il existe une couleur, le magenta, qui n'a pas de longueur d'onde propre : notre cerveau l'invente à partir du rouge et du bleu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe une couleur, le magenta, qui n'a pas de longueur d'onde propre : notre cerveau l'invente à partir du rouge et du bleu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20une%20couleur%2C%20le%20magenta%2C%20qui%20n'a%20pas%20de%20longueur%20d'onde%20propre%C2%A0%3A%20notre%20cerveau%20l'invente%20%C3%A0%20partir%20du%20rouge%20et%20du%20bleu%20%3F"
 },
 {
  "text": "Le papier bulle a d'abord été inventé pour servir de papier peint texturé avant de devenir un emballage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le papier bulle a d'abord été inventé pour servir de papier peint texturé avant de devenir un emballage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20papier%20bulle%20a%20d'abord%20%C3%A9t%C3%A9%20invent%C3%A9%20pour%20servir%20de%20papier%20peint%20textur%C3%A9%20avant%20de%20devenir%20un%20emballage%20%3F"
 },
 {
  "text": "Le nombre de possibilités pour mélanger un jeu de 52 cartes est si grand que chaque battage bien fait est probablement unique dans l'histoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nombre de possibilités pour mélanger un jeu de 52 cartes est si grand que chaque battage bien fait est probablement unique dans l'histoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nombre%20de%20possibilit%C3%A9s%20pour%20m%C3%A9langer%20un%20jeu%20de%2052%20cartes%20est%20si%20grand%20que%20chaque%20battage%20bien%20fait%20est%20probablement%20unique%20dans%20l'histoire%20%3F"
 },
 {
  "text": "Un crayon à papier ordinaire peut tracer une ligne longue de plusieurs dizaines de kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un crayon à papier ordinaire peut tracer une ligne longue de plusieurs dizaines de kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20crayon%20%C3%A0%20papier%20ordinaire%20peut%20tracer%20une%20ligne%20longue%20de%20plusieurs%20dizaines%20de%20kilom%C3%A8tres%20%3F"
 },
 {
  "text": "Les girafes n'ont que sept vertèbres dans le cou, exactement comme les humains, mais chacune est énorme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les girafes n'ont que sept vertèbres dans le cou, exactement comme les humains, mais chacune est énorme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20girafes%20n'ont%20que%20sept%20vert%C3%A8bres%20dans%20le%20cou%2C%20exactement%20comme%20les%20humains%2C%20mais%20chacune%20est%20%C3%A9norme%20%3F"
 },
 {
  "text": "Un groupe de corbeaux se nomme en anglais a murder, ce qui signifie littéralement un meurtre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un groupe de corbeaux se nomme en anglais a murder, ce qui signifie littéralement un meurtre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20groupe%20de%20corbeaux%20se%20nomme%20en%20anglais%20a%20murder%2C%20ce%20qui%20signifie%20litt%C3%A9ralement%20un%20meurtre%20%3F"
 },
 {
  "text": "Le tigre a la peau rayée sous son pelage, pas seulement le poil.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tigre a la peau rayée sous son pelage, pas seulement le poil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tigre%20a%20la%20peau%20ray%C3%A9e%20sous%20son%20pelage%2C%20pas%20seulement%20le%20poil%20%3F"
 },
 {
  "text": "Les fourmis coupe-feuilles cultivent un champignon souterrain pour se nourrir, une forme d'agriculture bien avant l'homme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis coupe-feuilles cultivent un champignon souterrain pour se nourrir, une forme d'agriculture bien avant l'homme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20coupe-feuilles%20cultivent%20un%20champignon%20souterrain%20pour%20se%20nourrir%2C%20une%20forme%20d'agriculture%20bien%20avant%20l'homme%20%3F"
 },
 {
  "text": "Une baleine bleue peut avaler une quantité d'eau supérieure à son propre poids en une seule bouchée avant de la filtrer.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une baleine bleue peut avaler une quantité d'eau supérieure à son propre poids en une seule bouchée avant de la filtrer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20baleine%20bleue%20peut%20avaler%20une%20quantit%C3%A9%20d'eau%20sup%C3%A9rieure%20%C3%A0%20son%20propre%20poids%20en%20une%20seule%20bouch%C3%A9e%20avant%20de%20la%20filtrer%20%3F"
 },
 {
  "text": "Les seiches peuvent hypnotiser leurs proies en faisant onduler des motifs de couleur sur leur peau.",
  "source": "Perplexity",
  "question": "Est-il vrai que les seiches peuvent hypnotiser leurs proies en faisant onduler des motifs de couleur sur leur peau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20seiches%20peuvent%20hypnotiser%20leurs%20proies%20en%20faisant%20onduler%20des%20motifs%20de%20couleur%20sur%20leur%20peau%20%3F"
 },
 {
  "text": "Le castor construit des barrages si grands que certains sont visibles depuis l'espace.",
  "source": "Perplexity",
  "question": "Est-il vrai que le castor construit des barrages si grands que certains sont visibles depuis l'espace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20castor%20construit%20des%20barrages%20si%20grands%20que%20certains%20sont%20visibles%20depuis%20l'espace%20%3F"
 },
 {
  "text": "Le fer contenu dans notre sang a été forgé au cœur d'étoiles anciennes mortes en explosant.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fer contenu dans notre sang a été forgé au cœur d'étoiles anciennes mortes en explosant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fer%20contenu%20dans%20notre%20sang%20a%20%C3%A9t%C3%A9%20forg%C3%A9%20au%20c%C5%93ur%20d'%C3%A9toiles%20anciennes%20mortes%20en%20explosant%20%3F"
 },
 {
  "text": "Le temps s'écoule très légèrement plus vite en altitude qu'au niveau de la mer, un effet mesuré de la relativité.",
  "source": "Perplexity",
  "question": "Est-il vrai que le temps s'écoule très légèrement plus vite en altitude qu'au niveau de la mer, un effet mesuré de la relativité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20temps%20s'%C3%A9coule%20tr%C3%A8s%20l%C3%A9g%C3%A8rement%20plus%20vite%20en%20altitude%20qu'au%20niveau%20de%20la%20mer%2C%20un%20effet%20mesur%C3%A9%20de%20la%20relativit%C3%A9%20%3F"
 },
 {
  "text": "Les satellites GPS doivent corriger les effets de la relativité, sinon ils accumuleraient des erreurs de plusieurs kilomètres par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que les satellites GPS doivent corriger les effets de la relativité, sinon ils accumuleraient des erreurs de plusieurs kilomètres par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20satellites%20GPS%20doivent%20corriger%20les%20effets%20de%20la%20relativit%C3%A9%2C%20sinon%20ils%20accumuleraient%20des%20erreurs%20de%20plusieurs%20kilom%C3%A8tres%20par%20jour%20%3F"
 },
 {
  "text": "Il existe un nuage de gaz dans l'espace qui contiendrait de grandes quantités d'alcool, mais totalement imbuvable.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe un nuage de gaz dans l'espace qui contiendrait de grandes quantités d'alcool, mais totalement imbuvable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20un%20nuage%20de%20gaz%20dans%20l'espace%20qui%20contiendrait%20de%20grandes%20quantit%C3%A9s%20d'alcool%2C%20mais%20totalement%20imbuvable%20%3F"
 },
 {
  "text": "Les astronautes ne peuvent pas pleurer normalement dans l'espace, car sans gravité les larmes forment des bulles collées aux yeux.",
  "source": "Perplexity",
  "question": "Est-il vrai que les astronautes ne peuvent pas pleurer normalement dans l'espace, car sans gravité les larmes forment des bulles collées aux yeux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20astronautes%20ne%20peuvent%20pas%20pleurer%20normalement%20dans%20l'espace%2C%20car%20sans%20gravit%C3%A9%20les%20larmes%20forment%20des%20bulles%20coll%C3%A9es%20aux%20yeux%20%3F"
 },
 {
  "text": "En apesanteur, la flamme d'une bougie devient ronde et bleutée au lieu de pointer vers le haut.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en apesanteur, la flamme d'une bougie devient ronde et bleutée au lieu de pointer vers le haut ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20apesanteur%2C%20la%20flamme%20d'une%20bougie%20devient%20ronde%20et%20bleut%C3%A9e%20au%20lieu%20de%20pointer%20vers%20le%20haut%20%3F"
 },
 {
  "text": "Il existe un pays, le Lesotho, entièrement entouré par un seul autre pays, l'Afrique du Sud.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe un pays, le Lesotho, entièrement entouré par un seul autre pays, l'Afrique du Sud ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20un%20pays%2C%20le%20Lesotho%2C%20enti%C3%A8rement%20entour%C3%A9%20par%20un%20seul%20autre%20pays%2C%20l'Afrique%20du%20Sud%20%3F"
 },
 {
  "text": "L'Égypte n'est pas le pays qui compte le plus de pyramides : c'est le Soudan qui en abrite le plus grand nombre.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Égypte n'est pas le pays qui compte le plus de pyramides : c'est le Soudan qui en abrite le plus grand nombre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%89gypte%20n'est%20pas%20le%20pays%20qui%20compte%20le%20plus%20de%20pyramides%C2%A0%3A%20c'est%20le%20Soudan%20qui%20en%20abrite%20le%20plus%20grand%20nombre%20%3F"
 },
 {
  "text": "Venise est bâtie sur des millions de pieux de bois enfoncés dans la vase de la lagune.",
  "source": "Perplexity",
  "question": "Est-il vrai que venise est bâtie sur des millions de pieux de bois enfoncés dans la vase de la lagune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20venise%20est%20b%C3%A2tie%20sur%20des%20millions%20de%20pieux%20de%20bois%20enfonc%C3%A9s%20dans%20la%20vase%20de%20la%20lagune%20%3F"
 },
 {
  "text": "Il existe des villages en Norvège qui installent d'immenses miroirs sur la montagne pour renvoyer la lumière du soleil l'hiver.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des villages en Norvège qui installent d'immenses miroirs sur la montagne pour renvoyer la lumière du soleil l'hiver ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20villages%20en%20Norv%C3%A8ge%20qui%20installent%20d'immenses%20miroirs%20sur%20la%20montagne%20pour%20renvoyer%20la%20lumi%C3%A8re%20du%20soleil%20l'hiver%20%3F"
 },
 {
  "text": "Certaines frontières entre pays passent au milieu d'une bibliothèque, d'un café ou même d'une maison.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines frontières entre pays passent au milieu d'une bibliothèque, d'un café ou même d'une maison ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20fronti%C3%A8res%20entre%20pays%20passent%20au%20milieu%20d'une%20biblioth%C3%A8que%2C%20d'un%20caf%C3%A9%20ou%20m%C3%AAme%20d'une%20maison%20%3F"
 },
 {
  "text": "Le ketchup a été vendu au 19e siècle comme un médicament censé soigner divers maux.",
  "source": "Perplexity",
  "question": "Est-il vrai que le ketchup a été vendu au 19e siècle comme un médicament censé soigner divers maux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20ketchup%20a%20%C3%A9t%C3%A9%20vendu%20au%2019e%20si%C3%A8cle%20comme%20un%20m%C3%A9dicament%20cens%C3%A9%20soigner%20divers%20maux%20%3F"
 },
 {
  "text": "Au 17e siècle, aux Pays-Bas, la spéculation sur les bulbes de tulipe a atteint des prix délirants avant de s'effondrer.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au 17e siècle, aux Pays-Bas, la spéculation sur les bulbes de tulipe a atteint des prix délirants avant de s'effondrer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%2017e%20si%C3%A8cle%2C%20aux%20Pays-Bas%2C%20la%20sp%C3%A9culation%20sur%20les%20bulbes%20de%20tulipe%20a%20atteint%20des%20prix%20d%C3%A9lirants%20avant%20de%20s'effondrer%20%3F"
 },
 {
  "text": "Les chiffres que nous appelons arabes ont en réalité été mis au point en Inde avant d'être transmis par le monde arabe.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chiffres que nous appelons arabes ont en réalité été mis au point en Inde avant d'être transmis par le monde arabe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chiffres%20que%20nous%20appelons%20arabes%20ont%20en%20r%C3%A9alit%C3%A9%20%C3%A9t%C3%A9%20mis%20au%20point%20en%20Inde%20avant%20d'%C3%AAtre%20transmis%20par%20le%20monde%20arabe%20%3F"
 },
 {
  "text": "Le kiwi tient son nom d'un oiseau de Nouvelle-Zélande, et le fruit s'appelait auparavant groseille de Chine.",
  "source": "Perplexity",
  "question": "Est-il vrai que le kiwi tient son nom d'un oiseau de Nouvelle-Zélande, et le fruit s'appelait auparavant groseille de Chine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20kiwi%20tient%20son%20nom%20d'un%20oiseau%20de%20Nouvelle-Z%C3%A9lande%2C%20et%20le%20fruit%20s'appelait%20auparavant%20groseille%20de%20Chine%20%3F"
 },
 {
  "text": "Le chewing-gum le plus ancien retrouvé a plusieurs milliers d'années : c'est de la résine mâchée à l'âge de pierre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chewing-gum le plus ancien retrouvé a plusieurs milliers d'années : c'est de la résine mâchée à l'âge de pierre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chewing-gum%20le%20plus%20ancien%20retrouv%C3%A9%20a%20plusieurs%20milliers%20d'ann%C3%A9es%C2%A0%3A%20c'est%20de%20la%20r%C3%A9sine%20m%C3%A2ch%C3%A9e%20%C3%A0%20l'%C3%A2ge%20de%20pierre%20%3F"
 },
 {
  "text": "Le pain était utilisé comme assiette au Moyen Âge, une tranche épaisse imbibée de sauce appelée tranchoir.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pain était utilisé comme assiette au Moyen Âge, une tranche épaisse imbibée de sauce appelée tranchoir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pain%20%C3%A9tait%20utilis%C3%A9%20comme%20assiette%20au%20Moyen%20%C3%82ge%2C%20une%20tranche%20%C3%A9paisse%20imbib%C3%A9e%20de%20sauce%20appel%C3%A9e%20tranchoir%20%3F"
 },
 {
  "text": "Le poivre était si précieux au Moyen Âge qu'il servait parfois à payer des loyers ou des rançons.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poivre était si précieux au Moyen Âge qu'il servait parfois à payer des loyers ou des rançons ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poivre%20%C3%A9tait%20si%20pr%C3%A9cieux%20au%20Moyen%20%C3%82ge%20qu'il%20servait%20parfois%20%C3%A0%20payer%20des%20loyers%20ou%20des%20ran%C3%A7ons%20%3F"
 },
 {
  "text": "Le beurre de cacahuète peut, sous forte pression et chaleur, être transformé en un minuscule diamant, en laboratoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le beurre de cacahuète peut, sous forte pression et chaleur, être transformé en un minuscule diamant, en laboratoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20beurre%20de%20cacahu%C3%A8te%20peut%2C%20sous%20forte%20pression%20et%20chaleur%2C%20%C3%AAtre%20transform%C3%A9%20en%20un%20minuscule%20diamant%2C%20en%20laboratoire%20%3F"
 },
 {
  "text": "Le son que fait un fouet qui claque est en réalité un mini-bang supersonique, la pointe dépassant la vitesse du son.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son que fait un fouet qui claque est en réalité un mini-bang supersonique, la pointe dépassant la vitesse du son ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20que%20fait%20un%20fouet%20qui%20claque%20est%20en%20r%C3%A9alit%C3%A9%20un%20mini-bang%20supersonique%2C%20la%20pointe%20d%C3%A9passant%20la%20vitesse%20du%20son%20%3F"
 },
 {
  "text": "Certains oiseaux, comme le martinet, peuvent voler pendant des mois sans jamais se poser.",
  "source": "Perplexity",
  "question": "Est-il vrai que certains oiseaux, comme le martinet, peuvent voler pendant des mois sans jamais se poser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certains%20oiseaux%2C%20comme%20le%20martinet%2C%20peuvent%20voler%20pendant%20des%20mois%20sans%20jamais%20se%20poser%20%3F"
 },
 {
  "text": "Le mot sandwich vient du comte de Sandwich, qui aurait demandé de la viande entre deux tranches de pain pour manger en jouant.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot sandwich vient du comte de Sandwich, qui aurait demandé de la viande entre deux tranches de pain pour manger en jouant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20sandwich%20vient%20du%20comte%20de%20Sandwich%2C%20qui%20aurait%20demand%C3%A9%20de%20la%20viande%20entre%20deux%20tranches%20de%20pain%20pour%20manger%20en%20jouant%20%3F"
 },
 {
  "text": "Le mot poubelle vient du nom d'un préfet de Paris qui a rendu ces récipients obligatoires.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot poubelle vient du nom d'un préfet de Paris qui a rendu ces récipients obligatoires ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20poubelle%20vient%20du%20nom%20d'un%20pr%C3%A9fet%20de%20Paris%20qui%20a%20rendu%20ces%20r%C3%A9cipients%20obligatoires%20%3F"
 },
 {
  "text": "Le mot silhouette vient du nom d'un ministre français réputé pour son avarice.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot silhouette vient du nom d'un ministre français réputé pour son avarice ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20silhouette%20vient%20du%20nom%20d'un%20ministre%20fran%C3%A7ais%20r%C3%A9put%C3%A9%20pour%20son%20avarice%20%3F"
 },
 {
  "text": "Un ruban assez long pour faire le tour de la Terre, rallongé d'un seul mètre, se décollerait du sol de façon perceptible partout.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un ruban assez long pour faire le tour de la Terre, rallongé d'un seul mètre, se décollerait du sol de façon perceptible partout ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20ruban%20assez%20long%20pour%20faire%20le%20tour%20de%20la%20Terre%2C%20rallong%C3%A9%20d'un%20seul%20m%C3%A8tre%2C%20se%20d%C3%A9collerait%20du%20sol%20de%20fa%C3%A7on%20perceptible%20partout%20%3F"
 },
 {
  "text": "Les abeilles peuvent compter jusqu'à de petits nombres et comprendre la notion de zéro.",
  "source": "Perplexity",
  "question": "Est-il vrai que les abeilles peuvent compter jusqu'à de petits nombres et comprendre la notion de zéro ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20abeilles%20peuvent%20compter%20jusqu'%C3%A0%20de%20petits%20nombres%20et%20comprendre%20la%20notion%20de%20z%C3%A9ro%20%3F"
 },
 {
  "text": "Un poisson-perroquet dort parfois enveloppé dans une bulle de mucus qu'il fabrique lui-même pour se protéger.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un poisson-perroquet dort parfois enveloppé dans une bulle de mucus qu'il fabrique lui-même pour se protéger ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20poisson-perroquet%20dort%20parfois%20envelopp%C3%A9%20dans%20une%20bulle%20de%20mucus%20qu'il%20fabrique%20lui-m%C3%AAme%20pour%20se%20prot%C3%A9ger%20%3F"
 },
 {
  "text": "Le pistolet à claquettes, une petite crevette, produit une bulle si violente qu'elle émet un éclair de lumière.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pistolet à claquettes, une petite crevette, produit une bulle si violente qu'elle émet un éclair de lumière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pistolet%20%C3%A0%20claquettes%2C%20une%20petite%20crevette%2C%20produit%20une%20bulle%20si%20violente%20qu'elle%20%C3%A9met%20un%20%C3%A9clair%20de%20lumi%C3%A8re%20%3F"
 },
 {
  "text": "Les chats ne perçoivent pas le goût sucré, une particularité liée à un gène inactif chez les félins.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chats ne perçoivent pas le goût sucré, une particularité liée à un gène inactif chez les félins ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chats%20ne%20per%C3%A7oivent%20pas%20le%20go%C3%BBt%20sucr%C3%A9%2C%20une%20particularit%C3%A9%20li%C3%A9e%20%C3%A0%20un%20g%C3%A8ne%20inactif%20chez%20les%20f%C3%A9lins%20%3F"
 },
 {
  "text": "Les araignées ne peuvent pas mâcher : elles liquéfient leur proie avant de l'aspirer.",
  "source": "Perplexity",
  "question": "Est-il vrai que les araignées ne peuvent pas mâcher : elles liquéfient leur proie avant de l'aspirer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20araign%C3%A9es%20ne%20peuvent%20pas%20m%C3%A2cher%C2%A0%3A%20elles%20liqu%C3%A9fient%20leur%20proie%20avant%20de%20l'aspirer%20%3F"
 },
 {
  "text": "Le lézard basilic peut courir sur l'eau sur une courte distance grâce à la vitesse de ses pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lézard basilic peut courir sur l'eau sur une courte distance grâce à la vitesse de ses pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20l%C3%A9zard%20basilic%20peut%20courir%20sur%20l'eau%20sur%20une%20courte%20distance%20gr%C3%A2ce%20%C3%A0%20la%20vitesse%20de%20ses%20pattes%20%3F"
 },
 {
  "text": "Le morse peut dormir en flottant à la verticale, la tête hors de l'eau, grâce à des poches d'air dans le cou.",
  "source": "Perplexity",
  "question": "Est-il vrai que le morse peut dormir en flottant à la verticale, la tête hors de l'eau, grâce à des poches d'air dans le cou ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20morse%20peut%20dormir%20en%20flottant%20%C3%A0%20la%20verticale%2C%20la%20t%C3%AAte%20hors%20de%20l'eau%2C%20gr%C3%A2ce%20%C3%A0%20des%20poches%20d'air%20dans%20le%20cou%20%3F"
 },
 {
  "text": "Le poisson archer crache un jet d'eau précis pour faire tomber les insectes des feuilles au-dessus de lui.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson archer crache un jet d'eau précis pour faire tomber les insectes des feuilles au-dessus de lui ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson%20archer%20crache%20un%20jet%20d'eau%20pr%C3%A9cis%20pour%20faire%20tomber%20les%20insectes%20des%20feuilles%20au-dessus%20de%20lui%20%3F"
 },
 {
  "text": "Le poisson-lune, ou môle, peut pondre des centaines de millions d'œufs en une seule fois.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-lune, ou môle, peut pondre des centaines de millions d'œufs en une seule fois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-lune%2C%20ou%20m%C3%B4le%2C%20peut%20pondre%20des%20centaines%20de%20millions%20d'%C5%93ufs%20en%20une%20seule%20fois%20%3F"
 },
 {
  "text": "Le mot vaccin vient du latin vacca, la vache, en lien avec la variole des vaches utilisée par Jenner.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot vaccin vient du latin vacca, la vache, en lien avec la variole des vaches utilisée par Jenner ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20vaccin%20vient%20du%20latin%20vacca%2C%20la%20vache%2C%20en%20lien%20avec%20la%20variole%20des%20vaches%20utilis%C3%A9e%20par%20Jenner%20%3F"
 },
 {
  "text": "Le tout premier ordinateur mécanique de calcul remonte à l'Antiquité grecque, la machine d'Anticythère.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tout premier ordinateur mécanique de calcul remonte à l'Antiquité grecque, la machine d'Anticythère ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tout%20premier%20ordinateur%20m%C3%A9canique%20de%20calcul%20remonte%20%C3%A0%20l'Antiquit%C3%A9%20grecque%2C%20la%20machine%20d'Anticyth%C3%A8re%20%3F"
 },
 {
  "text": "Nous respirons majoritairement par une seule narine à la fois, en alternance au fil des heures.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous respirons majoritairement par une seule narine à la fois, en alternance au fil des heures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20respirons%20majoritairement%20par%20une%20seule%20narine%20%C3%A0%20la%20fois%2C%20en%20alternance%20au%20fil%20des%20heures%20%3F"
 },
 {
  "text": "Les gouttes de pluie ne sont pas en forme de larme mais plutôt aplaties comme de petits pains hamburgers.",
  "source": "Perplexity",
  "question": "Est-il vrai que les gouttes de pluie ne sont pas en forme de larme mais plutôt aplaties comme de petits pains hamburgers ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gouttes%20de%20pluie%20ne%20sont%20pas%20en%20forme%20de%20larme%20mais%20plut%C3%B4t%20aplaties%20comme%20de%20petits%20pains%20hamburgers%20%3F"
 },
 {
  "text": "La première photo publiée sur le web montrait un groupe de musique humoristique du laboratoire du CERN.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première photo publiée sur le web montrait un groupe de musique humoristique du laboratoire du CERN ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20photo%20publi%C3%A9e%20sur%20le%20web%20montrait%20un%20groupe%20de%20musique%20humoristique%20du%20laboratoire%20du%20CERN%20%3F"
 },
 {
  "text": "Le nom spam pour le courrier indésirable vient d'un sketch comique où ce mot était répété sans fin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nom spam pour le courrier indésirable vient d'un sketch comique où ce mot était répété sans fin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nom%20spam%20pour%20le%20courrier%20ind%C3%A9sirable%20vient%20d'un%20sketch%20comique%20o%C3%B9%20ce%20mot%20%C3%A9tait%20r%C3%A9p%C3%A9t%C3%A9%20sans%20fin%20%3F"
 },
 {
  "text": "Les nénuphars géants d'Amazonie sont assez solides pour supporter le poids d'un petit enfant.",
  "source": "Perplexity",
  "question": "Est-il vrai que les nénuphars géants d'Amazonie sont assez solides pour supporter le poids d'un petit enfant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20n%C3%A9nuphars%20g%C3%A9ants%20d'Amazonie%20sont%20assez%20solides%20pour%20supporter%20le%20poids%20d'un%20petit%20enfant%20%3F"
 },
 {
  "text": "La substance la plus noire jamais fabriquée absorbe presque toute la lumière et donne l'impression d'un trou dans l'espace.",
  "source": "Perplexity",
  "question": "Est-il vrai que la substance la plus noire jamais fabriquée absorbe presque toute la lumière et donne l'impression d'un trou dans l'espace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20substance%20la%20plus%20noire%20jamais%20fabriqu%C3%A9e%20absorbe%20presque%20toute%20la%20lumi%C3%A8re%20et%20donne%20l'impression%20d'un%20trou%20dans%20l'espace%20%3F"
 },
 {
  "text": "Le plus petit os et le plus petit muscle du corps humain se trouvent tous deux dans l'oreille.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus petit os et le plus petit muscle du corps humain se trouvent tous deux dans l'oreille ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20petit%20os%20et%20le%20plus%20petit%20muscle%20du%20corps%20humain%20se%20trouvent%20tous%20deux%20dans%20l'oreille%20%3F"
 },
 {
  "text": "L'Australie possède une clôture plus longue que la distance entre Paris et Moscou, construite contre les dingos.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Australie possède une clôture plus longue que la distance entre Paris et Moscou, construite contre les dingos ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Australie%20poss%C3%A8de%20une%20cl%C3%B4ture%20plus%20longue%20que%20la%20distance%20entre%20Paris%20et%20Moscou%2C%20construite%20contre%20les%20dingos%20%3F"
 },
 {
  "text": "La distance la plus courte entre la Russie et les États-Unis n'est que de quelques kilomètres, entre deux petites îles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la distance la plus courte entre la Russie et les États-Unis n'est que de quelques kilomètres, entre deux petites îles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20distance%20la%20plus%20courte%20entre%20la%20Russie%20et%20les%20%C3%89tats-Unis%20n'est%20que%20de%20quelques%20kilom%C3%A8tres%2C%20entre%20deux%20petites%20%C3%AEles%20%3F"
 }
];
