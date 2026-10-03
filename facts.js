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
 },
 {
  "text": "Les six missions Apollo qui se sont posées sur la Lune y ont abandonné 96 sacs contenant urine, excréments et vomi, pour gagner du poids au décollage.",
  "source": "Perplexity",
  "question": "Est-il vrai que les six missions Apollo qui se sont posées sur la Lune y ont abandonné 96 sacs contenant urine, excréments et vomi, pour gagner du poids au décollage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20six%20missions%20Apollo%20qui%20se%20sont%20pos%C3%A9es%20sur%20la%20Lune%20y%20ont%20abandonn%C3%A9%2096%20sacs%20contenant%20urine%2C%20excr%C3%A9ments%20et%20vomi%2C%20pour%20gagner%20du%20poids%20au%20d%C3%A9collage%20%3F"
 },
 {
  "text": "Par mètre cube, le cœur du Soleil produit environ 276 watts, soit à peu près autant qu'un tas de compost actif et moins que le métabolisme d'un humain.",
  "source": "Perplexity",
  "question": "Est-il vrai que par mètre cube, le cœur du Soleil produit environ 276 watts, soit à peu près autant qu'un tas de compost actif et moins que le métabolisme d'un humain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20par%20m%C3%A8tre%20cube%2C%20le%20c%C5%93ur%20du%20Soleil%20produit%20environ%20276%20watts%2C%20soit%20%C3%A0%20peu%20pr%C3%A8s%20autant%20qu'un%20tas%20de%20compost%20actif%20et%20moins%20que%20le%20m%C3%A9tabolisme%20d'un%20humain%20%3F"
 },
 {
  "text": "Depuis certains endroits de Mercure, le Soleil se lève, s'arrête dans le ciel, repart en arrière puis reprend sa course, à cause de l'orbite très elliptique de la planète.",
  "source": "Perplexity",
  "question": "Est-il vrai que depuis certains endroits de Mercure, le Soleil se lève, s'arrête dans le ciel, repart en arrière puis reprend sa course, à cause de l'orbite très elliptique de la planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20depuis%20certains%20endroits%20de%20Mercure%2C%20le%20Soleil%20se%20l%C3%A8ve%2C%20s'arr%C3%AAte%20dans%20le%20ciel%2C%20repart%20en%20arri%C3%A8re%20puis%20reprend%20sa%20course%2C%20%C3%A0%20cause%20de%20l'orbite%20tr%C3%A8s%20elliptique%20de%20la%20plan%C3%A8te%20%3F"
 },
 {
  "text": "En 1889 à Fribourg-en-Brisgau, une tentative de distiller de la thioacétone a provoqué vomissements, nausées et évanouissements dans un rayon de 750 mètres autour du laboratoire, à cause de l'odeur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1889 à Fribourg-en-Brisgau, une tentative de distiller de la thioacétone a provoqué vomissements, nausées et évanouissements dans un rayon de 750 mètres autour du laboratoire, à cause de l'odeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201889%20%C3%A0%20Fribourg-en-Brisgau%2C%20une%20tentative%20de%20distiller%20de%20la%20thioac%C3%A9tone%20a%20provoqu%C3%A9%20vomissements%2C%20naus%C3%A9es%20et%20%C3%A9vanouissements%20dans%20un%20rayon%20de%20750%20m%C3%A8tres%20autour%20du%20laboratoire%2C%20%C3%A0%20cause%20de%20l'odeur%20%3F"
 },
 {
  "text": "Le trifluorure de chlore est un oxydant si violent qu'il enflamme spontanément des matériaux réputés incombustibles comme le sable, le verre ou l'amiante.",
  "source": "Perplexity",
  "question": "Est-il vrai que le trifluorure de chlore est un oxydant si violent qu'il enflamme spontanément des matériaux réputés incombustibles comme le sable, le verre ou l'amiante ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20trifluorure%20de%20chlore%20est%20un%20oxydant%20si%20violent%20qu'il%20enflamme%20spontan%C3%A9ment%20des%20mat%C3%A9riaux%20r%C3%A9put%C3%A9s%20incombustibles%20comme%20le%20sable%2C%20le%20verre%20ou%20l'amiante%20%3F"
 },
 {
  "text": "De retour de la Lune, les astronautes d'Apollo 11 ont rempli une déclaration de douane à Honolulu, avec la Lune comme escale sur leur itinéraire et des roches lunaires comme marchandise déclarée.",
  "source": "Perplexity",
  "question": "Est-il vrai que de retour de la Lune, les astronautes d'Apollo 11 ont rempli une déclaration de douane à Honolulu, avec la Lune comme escale sur leur itinéraire et des roches lunaires comme marchandise déclarée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20de%20retour%20de%20la%20Lune%2C%20les%20astronautes%20d'Apollo%2011%20ont%20rempli%20une%20d%C3%A9claration%20de%20douane%20%C3%A0%20Honolulu%2C%20avec%20la%20Lune%20comme%20escale%20sur%20leur%20itin%C3%A9raire%20et%20des%20roches%20lunaires%20comme%20marchandise%20d%C3%A9clar%C3%A9e%20%3F"
 },
 {
  "text": "En 1969, l'impact volontaire de l'étage de remontée du module lunaire d'Apollo 12 sur la Lune l'a fait vibrer comme une cloche pendant près d'une heure, selon le sismomètre laissé sur place.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1969, l'impact volontaire de l'étage de remontée du module lunaire d'Apollo 12 sur la Lune l'a fait vibrer comme une cloche pendant près d'une heure, selon le sismomètre laissé sur place ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201969%2C%20l'impact%20volontaire%20de%20l'%C3%A9tage%20de%20remont%C3%A9e%20du%20module%20lunaire%20d'Apollo%2012%20sur%20la%20Lune%20l'a%20fait%20vibrer%20comme%20une%20cloche%20pendant%20pr%C3%A8s%20d'une%20heure%2C%20selon%20le%20sismom%C3%A8tre%20laiss%C3%A9%20sur%20place%20%3F"
 },
 {
  "text": "Le cosmonaute Sergueï Krikaliov est parti vers Mir en mai 1991 en citoyen soviétique et en est revenu en mars 1992 dans un pays, l'URSS, qui n'existait plus.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cosmonaute Sergueï Krikaliov est parti vers Mir en mai 1991 en citoyen soviétique et en est revenu en mars 1992 dans un pays, l'URSS, qui n'existait plus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cosmonaute%20Sergue%C3%AF%20Krikaliov%20est%20parti%20vers%20Mir%20en%20mai%201991%20en%20citoyen%20sovi%C3%A9tique%20et%20en%20est%20revenu%20en%20mars%201992%20dans%20un%20pays%2C%20l'URSS%2C%20qui%20n'existait%20plus%20%3F"
 },
 {
  "text": "La France est le seul pays à avoir envoyé un chat dans l'espace : Félicette, une chatte parisienne, a effectué un vol suborbital en octobre 1963 et en est revenue vivante.",
  "source": "Perplexity",
  "question": "Est-il vrai que la France est le seul pays à avoir envoyé un chat dans l'espace : Félicette, une chatte parisienne, a effectué un vol suborbital en octobre 1963 et en est revenue vivante ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20France%20est%20le%20seul%20pays%20%C3%A0%20avoir%20envoy%C3%A9%20un%20chat%20dans%20l'espace%20%3A%20F%C3%A9licette%2C%20une%20chatte%20parisienne%2C%20a%20effectu%C3%A9%20un%20vol%20suborbital%20en%20octobre%201963%20et%20en%20est%20revenue%20vivante%20%3F"
 },
 {
  "text": "Du milieu des années 1980 au milieu des années 2000, les cosmonautes des Soyouz emportaient un pistolet à trois canons, le TP-82, contre les ours et les loups en cas d'atterrissage en Sibérie.",
  "source": "Perplexity",
  "question": "Est-il vrai que du milieu des années 1980 au milieu des années 2000, les cosmonautes des Soyouz emportaient un pistolet à trois canons, le TP-82, contre les ours et les loups en cas d'atterrissage en Sibérie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20du%20milieu%20des%20ann%C3%A9es%201980%20au%20milieu%20des%20ann%C3%A9es%202000%2C%20les%20cosmonautes%20des%20Soyouz%20emportaient%20un%20pistolet%20%C3%A0%20trois%20canons%2C%20le%20TP-82%2C%20contre%20les%20ours%20et%20les%20loups%20en%20cas%20d'atterrissage%20en%20Sib%C3%A9rie%20%3F"
 },
 {
  "text": "Selon Buzz Aldrin, le premier aliment mangé et le premier liquide versé sur la Lune furent le pain et le vin de la communion qu'il célébra en privé dans le module lunaire en 1969.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon Buzz Aldrin, le premier aliment mangé et le premier liquide versé sur la Lune furent le pain et le vin de la communion qu'il célébra en privé dans le module lunaire en 1969 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20Buzz%20Aldrin%2C%20le%20premier%20aliment%20mang%C3%A9%20et%20le%20premier%20liquide%20vers%C3%A9%20sur%20la%20Lune%20furent%20le%20pain%20et%20le%20vin%20de%20la%20communion%20qu'il%20c%C3%A9l%C3%A9bra%20en%20priv%C3%A9%20dans%20le%20module%20lunaire%20en%201969%20%3F"
 },
 {
  "text": "En 1954 en Alabama, Ann Hodges faisait la sieste sur son canapé quand une météorite de près de 4 kg a traversé son toit, rebondi sur sa radio et l'a frappée à la hanche.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1954 en Alabama, Ann Hodges faisait la sieste sur son canapé quand une météorite de près de 4 kg a traversé son toit, rebondi sur sa radio et l'a frappée à la hanche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201954%20en%20Alabama%2C%20Ann%20Hodges%20faisait%20la%20sieste%20sur%20son%20canap%C3%A9%20quand%20une%20m%C3%A9t%C3%A9orite%20de%20pr%C3%A8s%20de%204%20kg%20a%20travers%C3%A9%20son%20toit%2C%20rebondi%20sur%20sa%20radio%20et%20l'a%20frapp%C3%A9e%20%C3%A0%20la%20hanche%20%3F"
 },
 {
  "text": "La plus grosse météorite connue, celle de Hoba en Namibie, pèse plus de 60 tonnes et n'a jamais été déplacée depuis sa découverte en 1920.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus grosse météorite connue, celle de Hoba en Namibie, pèse plus de 60 tonnes et n'a jamais été déplacée depuis sa découverte en 1920 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20grosse%20m%C3%A9t%C3%A9orite%20connue%2C%20celle%20de%20Hoba%20en%20Namibie%2C%20p%C3%A8se%20plus%20de%2060%20tonnes%20et%20n'a%20jamais%20%C3%A9t%C3%A9%20d%C3%A9plac%C3%A9e%20depuis%20sa%20d%C3%A9couverte%20en%201920%20%3F"
 },
 {
  "text": "En 1964, avant de comprendre qu'ils captaient l'écho du Big Bang, Penzias et Wilson ont soupçonné les fientes des pigeons nichant dans leur antenne et les ont nettoyées : le bruit était toujours là.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1964, avant de comprendre qu'ils captaient l'écho du Big Bang, Penzias et Wilson ont soupçonné les fientes des pigeons nichant dans leur antenne et les ont nettoyées : le bruit était toujours là ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201964%2C%20avant%20de%20comprendre%20qu'ils%20captaient%20l'%C3%A9cho%20du%20Big%20Bang%2C%20Penzias%20et%20Wilson%20ont%20soup%C3%A7onn%C3%A9%20les%20fientes%20des%20pigeons%20nichant%20dans%20leur%20antenne%20et%20les%20ont%20nettoy%C3%A9es%20%3A%20le%20bruit%20%C3%A9tait%20toujours%20l%C3%A0%20%3F"
 },
 {
  "text": "Le césium réagit de façon explosive avec l'eau, et réagit même avec de la glace jusqu'à −116 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai que le césium réagit de façon explosive avec l'eau, et réagit même avec de la glace jusqu'à −116 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20c%C3%A9sium%20r%C3%A9agit%20de%20fa%C3%A7on%20explosive%20avec%20l'eau%2C%20et%20r%C3%A9agit%20m%C3%AAme%20avec%20de%20la%20glace%20jusqu'%C3%A0%20%E2%88%92116%20%C2%B0C%20%3F"
 },
 {
  "text": "Le bismuth, utilisé dans des médicaments pour l'estomac, est en réalité radioactif : sa demi-vie de 2×10¹⁹ ans dépasse plus d'un milliard de fois l'âge de l'Univers.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bismuth, utilisé dans des médicaments pour l'estomac, est en réalité radioactif : sa demi-vie de 2×10¹⁹ ans dépasse plus d'un milliard de fois l'âge de l'Univers ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20bismuth%2C%20utilis%C3%A9%20dans%20des%20m%C3%A9dicaments%20pour%20l'estomac%2C%20est%20en%20r%C3%A9alit%C3%A9%20radioactif%20%3A%20sa%20demi-vie%20de%202%C3%9710%C2%B9%E2%81%B9%20ans%20d%C3%A9passe%20plus%20d'un%20milliard%20de%20fois%20l'%C3%A2ge%20de%20l'Univers%20%3F"
 },
 {
  "text": "En 1772, Lavoisier a fait brûler un diamant en concentrant la lumière du Soleil avec une lentille : il n'en est sorti que du gaz carbonique, preuve qu'il est fait de carbone comme le charbon.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1772, Lavoisier a fait brûler un diamant en concentrant la lumière du Soleil avec une lentille : il n'en est sorti que du gaz carbonique, preuve qu'il est fait de carbone comme le charbon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201772%2C%20Lavoisier%20a%20fait%20br%C3%BBler%20un%20diamant%20en%20concentrant%20la%20lumi%C3%A8re%20du%20Soleil%20avec%20une%20lentille%20%3A%20il%20n'en%20est%20sorti%20que%20du%20gaz%20carbonique%2C%20preuve%20qu'il%20est%20fait%20de%20carbone%20comme%20le%20charbon%20%3F"
 },
 {
  "text": "Un glaçon fabriqué avec de l'eau lourde coule au fond d'un verre d'eau ordinaire au lieu de flotter, car il est plus dense qu'elle.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un glaçon fabriqué avec de l'eau lourde coule au fond d'un verre d'eau ordinaire au lieu de flotter, car il est plus dense qu'elle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20gla%C3%A7on%20fabriqu%C3%A9%20avec%20de%20l'eau%20lourde%20coule%20au%20fond%20d'un%20verre%20d'eau%20ordinaire%20au%20lieu%20de%20flotter%2C%20car%20il%20est%20plus%20dense%20qu'elle%20%3F"
 },
 {
  "text": "Dans les années 1930, la marque française Tho-Radia vendait une crème de beauté contenant du thorium et du radium, présentés comme bons pour la peau.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans les années 1930, la marque française Tho-Radia vendait une crème de beauté contenant du thorium et du radium, présentés comme bons pour la peau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20les%20ann%C3%A9es%201930%2C%20la%20marque%20fran%C3%A7aise%20Tho-Radia%20vendait%20une%20cr%C3%A8me%20de%20beaut%C3%A9%20contenant%20du%20thorium%20et%20du%20radium%2C%20pr%C3%A9sent%C3%A9s%20comme%20bons%20pour%20la%20peau%20%3F"
 },
 {
  "text": "Lors de la tempête solaire de 1859, des télégraphistes de Boston et Portland ont débranché leurs batteries et transmis des messages pendant deux heures grâce au seul courant induit par l'aurore.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors de la tempête solaire de 1859, des télégraphistes de Boston et Portland ont débranché leurs batteries et transmis des messages pendant deux heures grâce au seul courant induit par l'aurore ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20de%20la%20temp%C3%AAte%20solaire%20de%201859%2C%20des%20t%C3%A9l%C3%A9graphistes%20de%20Boston%20et%20Portland%20ont%20d%C3%A9branch%C3%A9%20leurs%20batteries%20et%20transmis%20des%20messages%20pendant%20deux%20heures%20gr%C3%A2ce%20au%20seul%20courant%20induit%20par%20l'aurore%20%3F"
 },
 {
  "text": "En 1991, un détecteur de l'Utah a capté une seule particule venue de l'espace portant l'énergie d'une balle de baseball lancée à environ 100 km/h, surnommée « Oh-My-God ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1991, un détecteur de l'Utah a capté une seule particule venue de l'espace portant l'énergie d'une balle de baseball lancée à environ 100 km/h, surnommée « Oh-My-God » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201991%2C%20un%20d%C3%A9tecteur%20de%20l'Utah%20a%20capt%C3%A9%20une%20seule%20particule%20venue%20de%20l'espace%20portant%20l'%C3%A9nergie%20d'une%20balle%20de%20baseball%20lanc%C3%A9e%20%C3%A0%20environ%20100%20km%2Fh%2C%20surnomm%C3%A9e%20%C2%AB%20Oh-My-God%20%C2%BB%20%3F"
 },
 {
  "text": "Sur l'exoplanète WASP-76b, le fer s'évapore côté jour puis retombe sous forme de pluie de fer fondu côté nuit, d'après des observations de l'ESO.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur l'exoplanète WASP-76b, le fer s'évapore côté jour puis retombe sous forme de pluie de fer fondu côté nuit, d'après des observations de l'ESO ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20l'exoplan%C3%A8te%20WASP-76b%2C%20le%20fer%20s'%C3%A9vapore%20c%C3%B4t%C3%A9%20jour%20puis%20retombe%20sous%20forme%20de%20pluie%20de%20fer%20fondu%20c%C3%B4t%C3%A9%20nuit%2C%20d'apr%C3%A8s%20des%20observations%20de%20l'ESO%20%3F"
 },
 {
  "text": "Sur l'exoplanète bleue HD 189733b, il pleuvrait du verre à l'horizontale, poussé par des vents de plus de 7 000 km/h.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur l'exoplanète bleue HD 189733b, il pleuvrait du verre à l'horizontale, poussé par des vents de plus de 7 000 km/h ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20l'exoplan%C3%A8te%20bleue%20HD%20189733b%2C%20il%20pleuvrait%20du%20verre%20%C3%A0%20l'horizontale%2C%20pouss%C3%A9%20par%20des%20vents%20de%20plus%20de%207%20000%20km%2Fh%20%3F"
 },
 {
  "text": "Sur Titan, la lune de Saturne, la gravité faible et l'atmosphère dense permettraient en théorie à un humain de voler en battant des ailes fixées à ses bras.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Titan, la lune de Saturne, la gravité faible et l'atmosphère dense permettraient en théorie à un humain de voler en battant des ailes fixées à ses bras ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Titan%2C%20la%20lune%20de%20Saturne%2C%20la%20gravit%C3%A9%20faible%20et%20l'atmosph%C3%A8re%20dense%20permettraient%20en%20th%C3%A9orie%20%C3%A0%20un%20humain%20de%20voler%20en%20battant%20des%20ailes%20fix%C3%A9es%20%C3%A0%20ses%20bras%20%3F"
 },
 {
  "text": "Uranus est couchée sur le côté, inclinée à 98° : chacun de ses pôles connaît 42 ans de jour continu suivis de 42 ans de nuit.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'uranus est couchée sur le côté, inclinée à 98° : chacun de ses pôles connaît 42 ans de jour continu suivis de 42 ans de nuit ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'uranus%20est%20couch%C3%A9e%20sur%20le%20c%C3%B4t%C3%A9%2C%20inclin%C3%A9e%20%C3%A0%2098%C2%B0%20%3A%20chacun%20de%20ses%20p%C3%B4les%20conna%C3%AEt%2042%20ans%20de%20jour%20continu%20suivis%20de%2042%20ans%20de%20nuit%20%3F"
 },
 {
  "text": "Pan, une petite lune de Saturne qui orbite dans ses anneaux, a la forme d'un ravioli à cause de la crête de poussières qu'elle accumule à son équateur.",
  "source": "Perplexity",
  "question": "Est-il vrai que pan, une petite lune de Saturne qui orbite dans ses anneaux, a la forme d'un ravioli à cause de la crête de poussières qu'elle accumule à son équateur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pan%2C%20une%20petite%20lune%20de%20Saturne%20qui%20orbite%20dans%20ses%20anneaux%2C%20a%20la%20forme%20d'un%20ravioli%20%C3%A0%20cause%20de%20la%20cr%C3%AAte%20de%20poussi%C3%A8res%20qu'elle%20accumule%20%C3%A0%20son%20%C3%A9quateur%20%3F"
 },
 {
  "text": "En 1982, la sonde soviétique Venera 13 a survécu 127 minutes à la surface de Vénus, sous environ 460 °C et 89 atmosphères, et y a enregistré les premiers sons d'une autre planète.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1982, la sonde soviétique Venera 13 a survécu 127 minutes à la surface de Vénus, sous environ 460 °C et 89 atmosphères, et y a enregistré les premiers sons d'une autre planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201982%2C%20la%20sonde%20sovi%C3%A9tique%20Venera%2013%20a%20surv%C3%A9cu%20127%20minutes%20%C3%A0%20la%20surface%20de%20V%C3%A9nus%2C%20sous%20environ%20460%20%C2%B0C%20et%2089%20atmosph%C3%A8res%2C%20et%20y%20a%20enregistr%C3%A9%20les%20premiers%20sons%20d'une%20autre%20plan%C3%A8te%20%3F"
 },
 {
  "text": "Il neige de la glace carbonique sur Mars : en hiver, des flocons microscopiques de CO2 gelé tombent sur la région du pôle Sud.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il neige de la glace carbonique sur Mars : en hiver, des flocons microscopiques de CO2 gelé tombent sur la région du pôle Sud ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20neige%20de%20la%20glace%20carbonique%20sur%20Mars%20%3A%20en%20hiver%2C%20des%20flocons%20microscopiques%20de%20CO2%20gel%C3%A9%20tombent%20sur%20la%20r%C3%A9gion%20du%20p%C3%B4le%20Sud%20%3F"
 },
 {
  "text": "Le Soleil convertit environ 4 millions de tonnes de sa masse en énergie chaque seconde par fusion nucléaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Soleil convertit environ 4 millions de tonnes de sa masse en énergie chaque seconde par fusion nucléaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Soleil%20convertit%20environ%204%20millions%20de%20tonnes%20de%20sa%20masse%20en%20%C3%A9nergie%20chaque%20seconde%20par%20fusion%20nucl%C3%A9aire%20%3F"
 },
 {
  "text": "La naine blanche BPM 37093, surnommée « Lucy » en hommage aux Beatles, a un cœur de carbone cristallisé que les astronomes ont comparé à un diamant d'environ 10³⁴ carats.",
  "source": "Perplexity",
  "question": "Est-il vrai que la naine blanche BPM 37093, surnommée « Lucy » en hommage aux Beatles, a un cœur de carbone cristallisé que les astronomes ont comparé à un diamant d'environ 10³⁴ carats ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20naine%20blanche%20BPM%2037093%2C%20surnomm%C3%A9e%20%C2%AB%20Lucy%20%C2%BB%20en%20hommage%20aux%20Beatles%2C%20a%20un%20c%C5%93ur%20de%20carbone%20cristallis%C3%A9%20que%20les%20astronomes%20ont%20compar%C3%A9%20%C3%A0%20un%20diamant%20d'environ%2010%C2%B3%E2%81%B4%20carats%20%3F"
 },
 {
  "text": "L'engin le plus rapide jamais construit, la sonde Parker Solar Probe, a atteint 692 000 km/h le 24 décembre 2024 en frôlant le Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'engin le plus rapide jamais construit, la sonde Parker Solar Probe, a atteint 692 000 km/h le 24 décembre 2024 en frôlant le Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'engin%20le%20plus%20rapide%20jamais%20construit%2C%20la%20sonde%20Parker%20Solar%20Probe%2C%20a%20atteint%20692%20000%20km%2Fh%20le%2024%20d%C3%A9cembre%202024%20en%20fr%C3%B4lant%20le%20Soleil%20%3F"
 },
 {
  "text": "Un magnétar passant à mi-distance de la Lune effacerait la bande magnétique de toutes les cartes bancaires sur Terre, tant son champ magnétique est intense.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un magnétar passant à mi-distance de la Lune effacerait la bande magnétique de toutes les cartes bancaires sur Terre, tant son champ magnétique est intense ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20magn%C3%A9tar%20passant%20%C3%A0%20mi-distance%20de%20la%20Lune%20effacerait%20la%20bande%20magn%C3%A9tique%20de%20toutes%20les%20cartes%20bancaires%20sur%20Terre%2C%20tant%20son%20champ%20magn%C3%A9tique%20est%20intense%20%3F"
 },
 {
  "text": "Non, un humain exposé au vide spatial n'explose pas : il reste conscient une dizaine de secondes, et des animaux exposés jusqu'à 90 secondes ont survécu.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, un humain exposé au vide spatial n'explose pas : il reste conscient une dizaine de secondes, et des animaux exposés jusqu'à 90 secondes ont survécu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20un%20humain%20expos%C3%A9%20au%20vide%20spatial%20n'explose%20pas%20%3A%20il%20reste%20conscient%20une%20dizaine%20de%20secondes%2C%20et%20des%20animaux%20expos%C3%A9s%20jusqu'%C3%A0%2090%20secondes%20ont%20surv%C3%A9cu%20%3F"
 },
 {
  "text": "Non, la NASA n'a pas dépensé des millions pour un stylo spatial pendant que les Soviétiques utilisaient un crayon : Paul Fisher l'a financé lui-même, et l'URSS en a acheté aussi.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, la NASA n'a pas dépensé des millions pour un stylo spatial pendant que les Soviétiques utilisaient un crayon : Paul Fisher l'a financé lui-même, et l'URSS en a acheté aussi ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20la%20NASA%20n'a%20pas%20d%C3%A9pens%C3%A9%20des%20millions%20pour%20un%20stylo%20spatial%20pendant%20que%20les%20Sovi%C3%A9tiques%20utilisaient%20un%20crayon%20%3A%20Paul%20Fisher%20l'a%20financ%C3%A9%20lui-m%C3%AAme%2C%20et%20l'URSS%20en%20a%20achet%C3%A9%20aussi%20%3F"
 },
 {
  "text": "Les astronautes d'Apollo ont décrit la même odeur pour la poussière lunaire ramenée dans le module : celle de la poudre à canon brûlée.",
  "source": "Perplexity",
  "question": "Est-il vrai que les astronautes d'Apollo ont décrit la même odeur pour la poussière lunaire ramenée dans le module : celle de la poudre à canon brûlée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20astronautes%20d'Apollo%20ont%20d%C3%A9crit%20la%20m%C3%AAme%20odeur%20pour%20la%20poussi%C3%A8re%20lunaire%20ramen%C3%A9e%20dans%20le%20module%20%3A%20celle%20de%20la%20poudre%20%C3%A0%20canon%20br%C3%BBl%C3%A9e%20%3F"
 },
 {
  "text": "Tout l'or extrait dans l'histoire de l'humanité, plus de 210 000 tonnes, tiendrait dans un cube d'environ 22 mètres de côté.",
  "source": "Perplexity",
  "question": "Est-il vrai que tout l'or extrait dans l'histoire de l'humanité, plus de 210 000 tonnes, tiendrait dans un cube d'environ 22 mètres de côté ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20tout%20l'or%20extrait%20dans%20l'histoire%20de%20l'humanit%C3%A9%2C%20plus%20de%20210%20000%20tonnes%2C%20tiendrait%20dans%20un%20cube%20d'environ%2022%20m%C3%A8tres%20de%20c%C3%B4t%C3%A9%20%3F"
 },
 {
  "text": "Les astronautes qui rentrent d'une sortie extravéhiculaire décrivent souvent l'odeur de l'espace restée sur leur combinaison comme un mélange de steak grillé, de métal chaud et de fumée de soudure.",
  "source": "Perplexity",
  "question": "Est-il vrai que les astronautes qui rentrent d'une sortie extravéhiculaire décrivent souvent l'odeur de l'espace restée sur leur combinaison comme un mélange de steak grillé, de métal chaud et de fumée de soudure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20astronautes%20qui%20rentrent%20d'une%20sortie%20extrav%C3%A9hiculaire%20d%C3%A9crivent%20souvent%20l'odeur%20de%20l'espace%20rest%C3%A9e%20sur%20leur%20combinaison%20comme%20un%20m%C3%A9lange%20de%20steak%20grill%C3%A9%2C%20de%20m%C3%A9tal%20chaud%20et%20de%20fum%C3%A9e%20de%20soudure%20%3F"
 },
 {
  "text": "La lumière du Soleil met 8 minutes à atteindre la Terre, mais l'énergie qu'elle transporte a pu mettre jusqu'à 170 000 ans à remonter du cœur du Soleil jusqu'à sa surface.",
  "source": "Perplexity",
  "question": "Est-il vrai que la lumière du Soleil met 8 minutes à atteindre la Terre, mais l'énergie qu'elle transporte a pu mettre jusqu'à 170 000 ans à remonter du cœur du Soleil jusqu'à sa surface ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20lumi%C3%A8re%20du%20Soleil%20met%208%20minutes%20%C3%A0%20atteindre%20la%20Terre%2C%20mais%20l'%C3%A9nergie%20qu'elle%20transporte%20a%20pu%20mettre%20jusqu'%C3%A0%20170%20000%20ans%20%C3%A0%20remonter%20du%20c%C5%93ur%20du%20Soleil%20jusqu'%C3%A0%20sa%20surface%20%3F"
 },
 {
  "text": "Io, une lune de Jupiter, compte environ 400 volcans actifs, ce qui en fait l'objet le plus volcanique du système solaire.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'io, une lune de Jupiter, compte environ 400 volcans actifs, ce qui en fait l'objet le plus volcanique du système solaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'io%2C%20une%20lune%20de%20Jupiter%2C%20compte%20environ%20400%20volcans%20actifs%2C%20ce%20qui%20en%20fait%20l'objet%20le%20plus%20volcanique%20du%20syst%C3%A8me%20solaire%20%3F"
 },
 {
  "text": "Pour transformer la Terre en trou noir, il faudrait comprimer toute sa masse dans une sphère de 9 millimètres de rayon, soit la taille d'une bille.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour transformer la Terre en trou noir, il faudrait comprimer toute sa masse dans une sphère de 9 millimètres de rayon, soit la taille d'une bille ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20transformer%20la%20Terre%20en%20trou%20noir%2C%20il%20faudrait%20comprimer%20toute%20sa%20masse%20dans%20une%20sph%C3%A8re%20de%209%20millim%C3%A8tres%20de%20rayon%2C%20soit%20la%20taille%20d'une%20bille%20%3F"
 },
 {
  "text": "La grenouille des bois d'Amérique du Nord peut passer l'hiver congelée, jusqu'à 65 % de l'eau de son corps transformée en glace et le cœur arrêté, puis se dégeler au printemps et repartir.",
  "source": "Perplexity",
  "question": "Est-il vrai que la grenouille des bois d'Amérique du Nord peut passer l'hiver congelée, jusqu'à 65 % de l'eau de son corps transformée en glace et le cœur arrêté, puis se dégeler au printemps et repartir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20grenouille%20des%20bois%20d'Am%C3%A9rique%20du%20Nord%20peut%20passer%20l'hiver%20congel%C3%A9e%2C%20jusqu'%C3%A0%2065%20%25%20de%20l'eau%20de%20son%20corps%20transform%C3%A9e%20en%20glace%20et%20le%20c%C5%93ur%20arr%C3%AAt%C3%A9%2C%20puis%20se%20d%C3%A9geler%20au%20printemps%20et%20repartir%20%3F"
 },
 {
  "text": "Le requin du Groenland peut vivre au moins 272 ans selon une étude publiée dans Science en 2016, et n'atteindrait sa maturité sexuelle que vers 150 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que le requin du Groenland peut vivre au moins 272 ans selon une étude publiée dans Science en 2016, et n'atteindrait sa maturité sexuelle que vers 150 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20requin%20du%20Groenland%20peut%20vivre%20au%20moins%20272%20ans%20selon%20une%20%C3%A9tude%20publi%C3%A9e%20dans%20Science%20en%202016%2C%20et%20n'atteindrait%20sa%20maturit%C3%A9%20sexuelle%20que%20vers%20150%20ans%20%3F"
 },
 {
  "text": "Pour se défendre, la myxine libère un mucus qui gonfle jusqu'à 10 000 fois son volume en moins d'une demi-seconde, de quoi étouffer les branchies d'un requin.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour se défendre, la myxine libère un mucus qui gonfle jusqu'à 10 000 fois son volume en moins d'une demi-seconde, de quoi étouffer les branchies d'un requin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20se%20d%C3%A9fendre%2C%20la%20myxine%20lib%C3%A8re%20un%20mucus%20qui%20gonfle%20jusqu'%C3%A0%2010%20000%20fois%20son%20volume%20en%20moins%20d'une%20demi-seconde%2C%20de%20quoi%20%C3%A9touffer%20les%20branchies%20d'un%20requin%20%3F"
 },
 {
  "text": "Le poisson-perle vit à l'intérieur de l'anus des holothuries : il y entre quand le concombre de mer l'ouvre pour respirer, car celui-ci respire par l'anus.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-perle vit à l'intérieur de l'anus des holothuries : il y entre quand le concombre de mer l'ouvre pour respirer, car celui-ci respire par l'anus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-perle%20vit%20%C3%A0%20l'int%C3%A9rieur%20de%20l'anus%20des%20holothuries%20%3A%20il%20y%20entre%20quand%20le%20concombre%20de%20mer%20l'ouvre%20pour%20respirer%2C%20car%20celui-ci%20respire%20par%20l'anus%20%3F"
 },
 {
  "text": "La tortue de la rivière Fitzroy, en Australie, tire jusqu'à 70 % de son oxygène de l'eau qu'elle aspire par son cloaque, ce qui lui vaut le surnom de « tortue qui respire par les fesses ».",
  "source": "Perplexity",
  "question": "Est-il vrai que la tortue de la rivière Fitzroy, en Australie, tire jusqu'à 70 % de son oxygène de l'eau qu'elle aspire par son cloaque, ce qui lui vaut le surnom de « tortue qui respire par les fesses » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tortue%20de%20la%20rivi%C3%A8re%20Fitzroy%2C%20en%20Australie%2C%20tire%20jusqu'%C3%A0%2070%20%25%20de%20son%20oxyg%C3%A8ne%20de%20l'eau%20qu'elle%20aspire%20par%20son%20cloaque%2C%20ce%20qui%20lui%20vaut%20le%20surnom%20de%20%C2%AB%20tortue%20qui%20respire%20par%20les%20fesses%20%C2%BB%20%3F"
 },
 {
  "text": "Le pelage brun de l'ornithorynque devient vert-bleu fluorescent sous lumière ultraviolette, une découverte publiée en 2020 dans la revue Mammalia.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pelage brun de l'ornithorynque devient vert-bleu fluorescent sous lumière ultraviolette, une découverte publiée en 2020 dans la revue Mammalia ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pelage%20brun%20de%20l'ornithorynque%20devient%20vert-bleu%20fluorescent%20sous%20lumi%C3%A8re%20ultraviolette%2C%20une%20d%C3%A9couverte%20publi%C3%A9e%20en%202020%20dans%20la%20revue%20Mammalia%20%3F"
 },
 {
  "text": "L'ornithorynque n'a pas d'estomac fonctionnel : son œsophage est relié directement à l'intestin, et il a perdu les gènes servant à produire les sucs gastriques.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ornithorynque n'a pas d'estomac fonctionnel : son œsophage est relié directement à l'intestin, et il a perdu les gènes servant à produire les sucs gastriques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'ornithorynque%20n'a%20pas%20d'estomac%20fonctionnel%20%3A%20son%20%C5%93sophage%20est%20reli%C3%A9%20directement%20%C3%A0%20l'intestin%2C%20et%20il%20a%20perdu%20les%20g%C3%A8nes%20servant%20%C3%A0%20produire%20les%20sucs%20gastriques%20%3F"
 },
 {
  "text": "Le pénis de l'échidné possède quatre têtes, mais il n'en utilise que deux à la fois et alterne d'un accouplement à l'autre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pénis de l'échidné possède quatre têtes, mais il n'en utilise que deux à la fois et alterne d'un accouplement à l'autre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20p%C3%A9nis%20de%20l'%C3%A9chidn%C3%A9%20poss%C3%A8de%20quatre%20t%C3%AAtes%2C%20mais%20il%20n'en%20utilise%20que%20deux%20%C3%A0%20la%20fois%20et%20alterne%20d'un%20accouplement%20%C3%A0%20l'autre%20%3F"
 },
 {
  "text": "Le coléoptère bombardier projette par l'arrière-train un liquide chimique à près de 100 °C, en environ 500 explosions par seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le coléoptère bombardier projette par l'arrière-train un liquide chimique à près de 100 °C, en environ 500 explosions par seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20col%C3%A9opt%C3%A8re%20bombardier%20projette%20par%20l'arri%C3%A8re-train%20un%20liquide%20chimique%20%C3%A0%20pr%C3%A8s%20de%20100%20%C2%B0C%2C%20en%20environ%20500%20explosions%20par%20seconde%20%3F"
 },
 {
  "text": "Menacés, certains lézards cornus peuvent projeter un jet de sang au goût infect depuis le coin de leurs yeux, jusqu'à 1,5 mètre de distance.",
  "source": "Perplexity",
  "question": "Est-il vrai que menacés, certains lézards cornus peuvent projeter un jet de sang au goût infect depuis le coin de leurs yeux, jusqu'à 1,5 mètre de distance ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20menac%C3%A9s%2C%20certains%20l%C3%A9zards%20cornus%20peuvent%20projeter%20un%20jet%20de%20sang%20au%20go%C3%BBt%20infect%20depuis%20le%20coin%20de%20leurs%20yeux%2C%20jusqu'%C3%A0%201%2C5%20m%C3%A8tre%20de%20distance%20%3F"
 },
 {
  "text": "Le crabe boxeur tient en permanence une anémone de mer dans chaque pince, et s'il n'en a pas, il en vole une à un autre crabe puis la déchire en deux pour obtenir deux clones.",
  "source": "Perplexity",
  "question": "Est-il vrai que le crabe boxeur tient en permanence une anémone de mer dans chaque pince, et s'il n'en a pas, il en vole une à un autre crabe puis la déchire en deux pour obtenir deux clones ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20crabe%20boxeur%20tient%20en%20permanence%20une%20an%C3%A9mone%20de%20mer%20dans%20chaque%20pince%2C%20et%20s'il%20n'en%20a%20pas%2C%20il%20en%20vole%20une%20%C3%A0%20un%20autre%20crabe%20puis%20la%20d%C3%A9chire%20en%20deux%20pour%20obtenir%20deux%20clones%20%3F"
 },
 {
  "text": "Chez certaines baudroies des abysses, le minuscule mâle mord la femelle et fusionne avec elle pour la vie : leurs circulations sanguines se rejoignent et il perd ses yeux et la plupart de ses organes.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez certaines baudroies des abysses, le minuscule mâle mord la femelle et fusionne avec elle pour la vie : leurs circulations sanguines se rejoignent et il perd ses yeux et la plupart de ses organes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20certaines%20baudroies%20des%20abysses%2C%20le%20minuscule%20m%C3%A2le%20mord%20la%20femelle%20et%20fusionne%20avec%20elle%20pour%20la%20vie%20%3A%20leurs%20circulations%20sanguines%20se%20rejoignent%20et%20il%20perd%20ses%20yeux%20et%20la%20plupart%20de%20ses%20organes%20%3F"
 },
 {
  "text": "En 2021, des rotifères bdelloïdes congelés depuis 24 000 ans dans le permafrost sibérien ont été ramenés à la vie et se sont remis à se reproduire.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2021, des rotifères bdelloïdes congelés depuis 24 000 ans dans le permafrost sibérien ont été ramenés à la vie et se sont remis à se reproduire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202021%2C%20des%20rotif%C3%A8res%20bdello%C3%AFdes%20congel%C3%A9s%20depuis%2024%20000%20ans%20dans%20le%20permafrost%20sib%C3%A9rien%20ont%20%C3%A9t%C3%A9%20ramen%C3%A9s%20%C3%A0%20la%20vie%20et%20se%20sont%20remis%20%C3%A0%20se%20reproduire%20%3F"
 },
 {
  "text": "Un ver nématode resté gelé 46 000 ans dans le permafrost sibérien a été réveillé en laboratoire et s'est remis à se reproduire, selon une étude publiée en 2023.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un ver nématode resté gelé 46 000 ans dans le permafrost sibérien a été réveillé en laboratoire et s'est remis à se reproduire, selon une étude publiée en 2023 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20ver%20n%C3%A9matode%20rest%C3%A9%20gel%C3%A9%2046%20000%20ans%20dans%20le%20permafrost%20sib%C3%A9rien%20a%20%C3%A9t%C3%A9%20r%C3%A9veill%C3%A9%20en%20laboratoire%20et%20s'est%20remis%20%C3%A0%20se%20reproduire%2C%20selon%20une%20%C3%A9tude%20publi%C3%A9e%20en%202023%20%3F"
 },
 {
  "text": "Les bousiers africains s'orientent la nuit grâce à la lueur de la Voie lactée pour rouler leur boule de crottin en ligne droite : c'est le premier animal connu à le faire.",
  "source": "Perplexity",
  "question": "Est-il vrai que les bousiers africains s'orientent la nuit grâce à la lueur de la Voie lactée pour rouler leur boule de crottin en ligne droite : c'est le premier animal connu à le faire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20bousiers%20africains%20s'orientent%20la%20nuit%20gr%C3%A2ce%20%C3%A0%20la%20lueur%20de%20la%20Voie%20lact%C3%A9e%20pour%20rouler%20leur%20boule%20de%20crottin%20en%20ligne%20droite%20%3A%20c'est%20le%20premier%20animal%20connu%20%C3%A0%20le%20faire%20%3F"
 },
 {
  "text": "En 1995, des chercheurs japonais ont entraîné des pigeons à distinguer des tableaux de Monet de ceux de Picasso, y compris des œuvres qu'ils n'avaient jamais vues.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1995, des chercheurs japonais ont entraîné des pigeons à distinguer des tableaux de Monet de ceux de Picasso, y compris des œuvres qu'ils n'avaient jamais vues ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201995%2C%20des%20chercheurs%20japonais%20ont%20entra%C3%AEn%C3%A9%20des%20pigeons%20%C3%A0%20distinguer%20des%20tableaux%20de%20Monet%20de%20ceux%20de%20Picasso%2C%20y%20compris%20des%20%C5%93uvres%20qu'ils%20n'avaient%20jamais%20vues%20%3F"
 },
 {
  "text": "La guêpe émeraude pique le cerveau d'une blatte pour supprimer son réflexe de fuite, puis la conduit jusqu'à son terrier en la tirant par une antenne, comme un chien en laisse.",
  "source": "Perplexity",
  "question": "Est-il vrai que la guêpe émeraude pique le cerveau d'une blatte pour supprimer son réflexe de fuite, puis la conduit jusqu'à son terrier en la tirant par une antenne, comme un chien en laisse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20gu%C3%AApe%20%C3%A9meraude%20pique%20le%20cerveau%20d'une%20blatte%20pour%20supprimer%20son%20r%C3%A9flexe%20de%20fuite%2C%20puis%20la%20conduit%20jusqu'%C3%A0%20son%20terrier%20en%20la%20tirant%20par%20une%20antenne%2C%20comme%20un%20chien%20en%20laisse%20%3F"
 },
 {
  "text": "Les cuboméduses ont 24 yeux de quatre types différents, dont certains possèdent un cristallin capable de former des images, alors qu'elles n'ont pas de cerveau central.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cuboméduses ont 24 yeux de quatre types différents, dont certains possèdent un cristallin capable de former des images, alors qu'elles n'ont pas de cerveau central ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cubom%C3%A9duses%20ont%2024%20yeux%20de%20quatre%20types%20diff%C3%A9rents%2C%20dont%20certains%20poss%C3%A8dent%20un%20cristallin%20capable%20de%20former%20des%20images%2C%20alors%20qu'elles%20n'ont%20pas%20de%20cerveau%20central%20%3F"
 },
 {
  "text": "Les mystérieux cercles géométriques de 2 mètres découverts sur le fond marin au Japon sont l'œuvre d'un petit poisson-globe mâle qui les sculpte avec ses nageoires pour séduire.",
  "source": "Perplexity",
  "question": "Est-il vrai que les mystérieux cercles géométriques de 2 mètres découverts sur le fond marin au Japon sont l'œuvre d'un petit poisson-globe mâle qui les sculpte avec ses nageoires pour séduire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20myst%C3%A9rieux%20cercles%20g%C3%A9om%C3%A9triques%20de%202%20m%C3%A8tres%20d%C3%A9couverts%20sur%20le%20fond%20marin%20au%20Japon%20sont%20l'%C5%93uvre%20d'un%20petit%20poisson-globe%20m%C3%A2le%20qui%20les%20sculpte%20avec%20ses%20nageoires%20pour%20s%C3%A9duire%20%3F"
 },
 {
  "text": "Ming, une palourde islandaise âgée de 507 ans, a été tuée en 2006 par les chercheurs qui l'ont congelée sans savoir qu'elle était l'animal le plus vieux jamais connu.",
  "source": "Perplexity",
  "question": "Est-il vrai que ming, une palourde islandaise âgée de 507 ans, a été tuée en 2006 par les chercheurs qui l'ont congelée sans savoir qu'elle était l'animal le plus vieux jamais connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20ming%2C%20une%20palourde%20islandaise%20%C3%A2g%C3%A9e%20de%20507%20ans%2C%20a%20%C3%A9t%C3%A9%20tu%C3%A9e%20en%202006%20par%20les%20chercheurs%20qui%20l'ont%20congel%C3%A9e%20sans%20savoir%20qu'elle%20%C3%A9tait%20l'animal%20le%20plus%20vieux%20jamais%20connu%20%3F"
 },
 {
  "text": "Pour devenir presque invisibles pendant leur sommeil, les grenouilles de verre retirent près de 90 % de leurs globules rouges de la circulation et les stockent dans leur foie.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour devenir presque invisibles pendant leur sommeil, les grenouilles de verre retirent près de 90 % de leurs globules rouges de la circulation et les stockent dans leur foie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20devenir%20presque%20invisibles%20pendant%20leur%20sommeil%2C%20les%20grenouilles%20de%20verre%20retirent%20pr%C3%A8s%20de%2090%20%25%20de%20leurs%20globules%20rouges%20de%20la%20circulation%20et%20les%20stockent%20dans%20leur%20foie%20%3F"
 },
 {
  "text": "Privé totalement d'oxygène, le rat-taupe nu survit 18 minutes sans dommage apparent en faisant tourner son cerveau au fructose au lieu du glucose.",
  "source": "Perplexity",
  "question": "Est-il vrai que privé totalement d'oxygène, le rat-taupe nu survit 18 minutes sans dommage apparent en faisant tourner son cerveau au fructose au lieu du glucose ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20priv%C3%A9%20totalement%20d'oxyg%C3%A8ne%2C%20le%20rat-taupe%20nu%20survit%2018%20minutes%20sans%20dommage%20apparent%20en%20faisant%20tourner%20son%20cerveau%20au%20fructose%20au%20lieu%20du%20glucose%20%3F"
 },
 {
  "text": "En 2022, une barge rousse âgée de 5 mois a volé 13 560 km sans escale de l'Alaska à la Tasmanie en 11 jours, sans manger, boire ni se poser.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2022, une barge rousse âgée de 5 mois a volé 13 560 km sans escale de l'Alaska à la Tasmanie en 11 jours, sans manger, boire ni se poser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202022%2C%20une%20barge%20rousse%20%C3%A2g%C3%A9e%20de%205%20mois%20a%20vol%C3%A9%2013%20560%20km%20sans%20escale%20de%20l'Alaska%20%C3%A0%20la%20Tasmanie%20en%2011%20jours%2C%20sans%20manger%2C%20boire%20ni%20se%20poser%20%3F"
 },
 {
  "text": "La femelle adulte de l'éphémère Dolania americana vit environ cinq minutes, juste le temps de s'accoupler et de pondre : la vie adulte la plus courte connue chez un insecte.",
  "source": "Perplexity",
  "question": "Est-il vrai que la femelle adulte de l'éphémère Dolania americana vit environ cinq minutes, juste le temps de s'accoupler et de pondre : la vie adulte la plus courte connue chez un insecte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20femelle%20adulte%20de%20l'%C3%A9ph%C3%A9m%C3%A8re%20Dolania%20americana%20vit%20environ%20cinq%20minutes%2C%20juste%20le%20temps%20de%20s'accoupler%20et%20de%20pondre%20%3A%20la%20vie%20adulte%20la%20plus%20courte%20connue%20chez%20un%20insecte%20%3F"
 },
 {
  "text": "La langue du pic-vert est soutenue par un os hyoïde si long qu'il fait le tour de son crâne, sous la peau, avant de s'ancrer près de la narine.",
  "source": "Perplexity",
  "question": "Est-il vrai que la langue du pic-vert est soutenue par un os hyoïde si long qu'il fait le tour de son crâne, sous la peau, avant de s'ancrer près de la narine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20langue%20du%20pic-vert%20est%20soutenue%20par%20un%20os%20hyo%C3%AFde%20si%20long%20qu'il%20fait%20le%20tour%20de%20son%20cr%C3%A2ne%2C%20sous%20la%20peau%2C%20avant%20de%20s'ancrer%20pr%C3%A8s%20de%20la%20narine%20%3F"
 },
 {
  "text": "Le crustacé Cymothoa exigua entre par les branchies d'un poisson, coupe l'irrigation de sa langue jusqu'à ce qu'elle tombe, puis prend sa place : le poisson s'en sert ensuite comme d'une langue.",
  "source": "Perplexity",
  "question": "Est-il vrai que le crustacé Cymothoa exigua entre par les branchies d'un poisson, coupe l'irrigation de sa langue jusqu'à ce qu'elle tombe, puis prend sa place : le poisson s'en sert ensuite comme d'une langue ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20crustac%C3%A9%20Cymothoa%20exigua%20entre%20par%20les%20branchies%20d'un%20poisson%2C%20coupe%20l'irrigation%20de%20sa%20langue%20jusqu'%C3%A0%20ce%20qu'elle%20tombe%2C%20puis%20prend%20sa%20place%20%3A%20le%20poisson%20s'en%20sert%20ensuite%20comme%20d'une%20langue%20%3F"
 },
 {
  "text": "L'anguille électrique peut bondir hors de l'eau et se plaquer contre un assaillant pour lui envoyer directement ses décharges, a montré une étude publiée en 2016.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'anguille électrique peut bondir hors de l'eau et se plaquer contre un assaillant pour lui envoyer directement ses décharges, a montré une étude publiée en 2016 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'anguille%20%C3%A9lectrique%20peut%20bondir%20hors%20de%20l'eau%20et%20se%20plaquer%20contre%20un%20assaillant%20pour%20lui%20envoyer%20directement%20ses%20d%C3%A9charges%2C%20a%20montr%C3%A9%20une%20%C3%A9tude%20publi%C3%A9e%20en%202016%20%3F"
 },
 {
  "text": "En 1987, une orque de Puget Sound s'est mise à nager avec un saumon mort posé sur la tête ; en quelques mois, la mode a gagné les trois groupes de la population, puis s'est brusquement éteinte.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1987, une orque de Puget Sound s'est mise à nager avec un saumon mort posé sur la tête ; en quelques mois, la mode a gagné les trois groupes de la population, puis s'est brusquement éteinte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201987%2C%20une%20orque%20de%20Puget%20Sound%20s'est%20mise%20%C3%A0%20nager%20avec%20un%20saumon%20mort%20pos%C3%A9%20sur%20la%20t%C3%AAte%20%3B%20en%20quelques%20mois%2C%20la%20mode%20a%20gagn%C3%A9%20les%20trois%20groupes%20de%20la%20population%2C%20puis%20s'est%20brusquement%20%C3%A9teinte%20%3F"
 },
 {
  "text": "Les grenouilles plates à incubation gastrique avalaient leurs œufs, élevaient leurs petits dans leur estomac puis les recrachaient vivants ; elles ont disparu dans les années 1980.",
  "source": "Perplexity",
  "question": "Est-il vrai que les grenouilles plates à incubation gastrique avalaient leurs œufs, élevaient leurs petits dans leur estomac puis les recrachaient vivants ; elles ont disparu dans les années 1980 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20grenouilles%20plates%20%C3%A0%20incubation%20gastrique%20avalaient%20leurs%20%C5%93ufs%2C%20%C3%A9levaient%20leurs%20petits%20dans%20leur%20estomac%20puis%20les%20recrachaient%20vivants%20%3B%20elles%20ont%20disparu%20dans%20les%20ann%C3%A9es%201980%20%3F"
 },
 {
  "text": "Chez certaines cécilies, des amphibiens sans pattes, les petits se nourrissent en arrachant et en mangeant la couche externe de la peau de leur mère avec des dents spéciales.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez certaines cécilies, des amphibiens sans pattes, les petits se nourrissent en arrachant et en mangeant la couche externe de la peau de leur mère avec des dents spéciales ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20certaines%20c%C3%A9cilies%2C%20des%20amphibiens%20sans%20pattes%2C%20les%20petits%20se%20nourrissent%20en%20arrachant%20et%20en%20mangeant%20la%20couche%20externe%20de%20la%20peau%20de%20leur%20m%C3%A8re%20avec%20des%20dents%20sp%C3%A9ciales%20%3F"
 },
 {
  "text": "Menacée, la fourmi Colobopsis explodens de Bornéo contracte son abdomen jusqu'à l'éclater, aspergeant l'ennemi d'une substance jaune toxique.",
  "source": "Perplexity",
  "question": "Est-il vrai que menacée, la fourmi Colobopsis explodens de Bornéo contracte son abdomen jusqu'à l'éclater, aspergeant l'ennemi d'une substance jaune toxique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20menac%C3%A9e%2C%20la%20fourmi%20Colobopsis%20explodens%20de%20Born%C3%A9o%20contracte%20son%20abdomen%20jusqu'%C3%A0%20l'%C3%A9clater%2C%20aspergeant%20l'ennemi%20d'une%20substance%20jaune%20toxique%20%3F"
 },
 {
  "text": "Selon les travaux du biologiste Con Slobodchikoff, les cris d'alerte des chiens de prairie précisent si l'humain qui approche est grand ou petit, et la couleur de son t-shirt.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon les travaux du biologiste Con Slobodchikoff, les cris d'alerte des chiens de prairie précisent si l'humain qui approche est grand ou petit, et la couleur de son t-shirt ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20les%20travaux%20du%20biologiste%20Con%20Slobodchikoff%2C%20les%20cris%20d'alerte%20des%20chiens%20de%20prairie%20pr%C3%A9cisent%20si%20l'humain%20qui%20approche%20est%20grand%20ou%20petit%2C%20et%20la%20couleur%20de%20son%20t-shirt%20%3F"
 },
 {
  "text": "La mouche Drosophila bifurca, de quelques millimètres, produit des spermatozoïdes de 5,8 cm, plus de 20 fois la longueur de son corps.",
  "source": "Perplexity",
  "question": "Est-il vrai que la mouche Drosophila bifurca, de quelques millimètres, produit des spermatozoïdes de 5,8 cm, plus de 20 fois la longueur de son corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20mouche%20Drosophila%20bifurca%2C%20de%20quelques%20millim%C3%A8tres%2C%20produit%20des%20spermatozo%C3%AFdes%20de%205%2C8%20cm%2C%20plus%20de%2020%20fois%20la%20longueur%20de%20son%20corps%20%3F"
 },
 {
  "text": "Les homards urinent par des orifices situés à la base de leurs antennes et s'envoient leur urine au visage pendant leurs combats pour communiquer.",
  "source": "Perplexity",
  "question": "Est-il vrai que les homards urinent par des orifices situés à la base de leurs antennes et s'envoient leur urine au visage pendant leurs combats pour communiquer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20homards%20urinent%20par%20des%20orifices%20situ%C3%A9s%20%C3%A0%20la%20base%20de%20leurs%20antennes%20et%20s'envoient%20leur%20urine%20au%20visage%20pendant%20leurs%20combats%20pour%20communiquer%20%3F"
 },
 {
  "text": "Les frégates dorment en plein vol, souvent avec un seul hémisphère cérébral, par micro-siestes d'une dizaine de secondes, pour environ 42 minutes par jour seulement.",
  "source": "Perplexity",
  "question": "Est-il vrai que les frégates dorment en plein vol, souvent avec un seul hémisphère cérébral, par micro-siestes d'une dizaine de secondes, pour environ 42 minutes par jour seulement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fr%C3%A9gates%20dorment%20en%20plein%20vol%2C%20souvent%20avec%20un%20seul%20h%C3%A9misph%C3%A8re%20c%C3%A9r%C3%A9bral%2C%20par%20micro-siestes%20d'une%20dizaine%20de%20secondes%2C%20pour%20environ%2042%20minutes%20par%20jour%20seulement%20%3F"
 },
 {
  "text": "À Madagascar, un papillon de nuit plante sa trompe en forme de harpon entre les paupières des oiseaux endormis pour boire leurs larmes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Madagascar, un papillon de nuit plante sa trompe en forme de harpon entre les paupières des oiseaux endormis pour boire leurs larmes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Madagascar%2C%20un%20papillon%20de%20nuit%20plante%20sa%20trompe%20en%20forme%20de%20harpon%20entre%20les%20paupi%C3%A8res%20des%20oiseaux%20endormis%20pour%20boire%20leurs%20larmes%20%3F"
 },
 {
  "text": "Des lézards de Nouvelle-Guinée ont le sang vert citron, ainsi que les os et la langue, à cause d'un pigment biliaire à une dose 40 fois supérieure à la dose mortelle pour l'humain.",
  "source": "Perplexity",
  "question": "Est-il vrai que des lézards de Nouvelle-Guinée ont le sang vert citron, ainsi que les os et la langue, à cause d'un pigment biliaire à une dose 40 fois supérieure à la dose mortelle pour l'humain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20des%20l%C3%A9zards%20de%20Nouvelle-Guin%C3%A9e%20ont%20le%20sang%20vert%20citron%2C%20ainsi%20que%20les%20os%20et%20la%20langue%2C%20%C3%A0%20cause%20d'un%20pigment%20biliaire%20%C3%A0%20une%20dose%2040%20fois%20sup%C3%A9rieure%20%C3%A0%20la%20dose%20mortelle%20pour%20l'humain%20%3F"
 },
 {
  "text": "Chez les calmars et les pieuvres, l'œsophage passe au milieu du cerveau, en forme d'anneau : ils doivent découper leur nourriture en petits morceaux pour qu'elle passe.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez les calmars et les pieuvres, l'œsophage passe au milieu du cerveau, en forme d'anneau : ils doivent découper leur nourriture en petits morceaux pour qu'elle passe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20les%20calmars%20et%20les%20pieuvres%2C%20l'%C5%93sophage%20passe%20au%20milieu%20du%20cerveau%2C%20en%20forme%20d'anneau%20%3A%20ils%20doivent%20d%C3%A9couper%20leur%20nourriture%20en%20petits%20morceaux%20pour%20qu'elle%20passe%20%3F"
 },
 {
  "text": "Les harengs communiquent la nuit en expulsant des bulles d'air par l'anus, produisant des sons que les chercheurs ont baptisés FRT.",
  "source": "Perplexity",
  "question": "Est-il vrai que les harengs communiquent la nuit en expulsant des bulles d'air par l'anus, produisant des sons que les chercheurs ont baptisés FRT ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20harengs%20communiquent%20la%20nuit%20en%20expulsant%20des%20bulles%20d'air%20par%20l'anus%2C%20produisant%20des%20sons%20que%20les%20chercheurs%20ont%20baptis%C3%A9s%20FRT%20%3F"
 },
 {
  "text": "Dans l'utérus du requin-taureau, l'embryon le plus développé dévore tous ses frères et sœurs : sur des dizaines d'œufs, seuls deux petits naissent.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans l'utérus du requin-taureau, l'embryon le plus développé dévore tous ses frères et sœurs : sur des dizaines d'œufs, seuls deux petits naissent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20l'ut%C3%A9rus%20du%20requin-taureau%2C%20l'embryon%20le%20plus%20d%C3%A9velopp%C3%A9%20d%C3%A9vore%20tous%20ses%20fr%C3%A8res%20et%20s%C5%93urs%20%3A%20sur%20des%20dizaines%20d'%C5%93ufs%2C%20seuls%20deux%20petits%20naissent%20%3F"
 },
 {
  "text": "La hyène tachetée femelle urine, s'accouple et met bas par un clitoris allongé en forme de pénis ; elle n'a pas d'ouverture vaginale externe.",
  "source": "Perplexity",
  "question": "Est-il vrai que la hyène tachetée femelle urine, s'accouple et met bas par un clitoris allongé en forme de pénis ; elle n'a pas d'ouverture vaginale externe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20hy%C3%A8ne%20tachet%C3%A9e%20femelle%20urine%2C%20s'accouple%20et%20met%20bas%20par%20un%20clitoris%20allong%C3%A9%20en%20forme%20de%20p%C3%A9nis%20%3B%20elle%20n'a%20pas%20d'ouverture%20vaginale%20externe%20%3F"
 },
 {
  "text": "Attaqué, le triton à côtes saillantes d'Espagne fait pivoter ses côtes pour qu'elles percent sa peau et servent de piquants enduits de poison.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'attaqué, le triton à côtes saillantes d'Espagne fait pivoter ses côtes pour qu'elles percent sa peau et servent de piquants enduits de poison ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'attaqu%C3%A9%2C%20le%20triton%20%C3%A0%20c%C3%B4tes%20saillantes%20d'Espagne%20fait%20pivoter%20ses%20c%C3%B4tes%20pour%20qu'elles%20percent%20sa%20peau%20et%20servent%20de%20piquants%20enduits%20de%20poison%20%3F"
 },
 {
  "text": "Une limace de mer (Elysia) étudiée au Japon peut se décapiter elle-même : la tête continue de ramper et de manger, et régénère un corps complet en environ 20 jours.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une limace de mer (Elysia) étudiée au Japon peut se décapiter elle-même : la tête continue de ramper et de manger, et régénère un corps complet en environ 20 jours ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20limace%20de%20mer%20(Elysia)%20%C3%A9tudi%C3%A9e%20au%20Japon%20peut%20se%20d%C3%A9capiter%20elle-m%C3%AAme%20%3A%20la%20t%C3%AAte%20continue%20de%20ramper%20et%20de%20manger%2C%20et%20r%C3%A9g%C3%A9n%C3%A8re%20un%20corps%20complet%20en%20environ%2020%20jours%20%3F"
 },
 {
  "text": "En 1848, une barre de fer de 1,10 m a traversé le crâne de l'ouvrier Phineas Gage : il est resté conscient, a parlé dans les minutes suivantes et a vécu encore près de 12 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1848, une barre de fer de 1,10 m a traversé le crâne de l'ouvrier Phineas Gage : il est resté conscient, a parlé dans les minutes suivantes et a vécu encore près de 12 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201848%2C%20une%20barre%20de%20fer%20de%201%2C10%20m%20a%20travers%C3%A9%20le%20cr%C3%A2ne%20de%20l'ouvrier%20Phineas%20Gage%20%3A%20il%20est%20rest%C3%A9%20conscient%2C%20a%20parl%C3%A9%20dans%20les%20minutes%20suivantes%20et%20a%20v%C3%A9cu%20encore%20pr%C3%A8s%20de%2012%20ans%20%3F"
 },
 {
  "text": "Pour rendre la vue à certains aveugles, des chirurgiens implantent dans leur œil une lentille fixée dans une de leurs propres dents : c'est l'ostéo-odonto-kératoprothèse.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour rendre la vue à certains aveugles, des chirurgiens implantent dans leur œil une lentille fixée dans une de leurs propres dents : c'est l'ostéo-odonto-kératoprothèse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20rendre%20la%20vue%20%C3%A0%20certains%20aveugles%2C%20des%20chirurgiens%20implantent%20dans%20leur%20%C5%93il%20une%20lentille%20fix%C3%A9e%20dans%20une%20de%20leurs%20propres%20dents%20%3A%20c'est%20l'ost%C3%A9o-odonto-k%C3%A9ratoproth%C3%A8se%20%3F"
 },
 {
  "text": "En 1929, le médecin allemand Werner Forssmann s'est glissé un cathéter du bras jusqu'au cœur, sur lui-même, puis s'est fait radiographier : ce geste lui a valu le prix Nobel en 1956.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1929, le médecin allemand Werner Forssmann s'est glissé un cathéter du bras jusqu'au cœur, sur lui-même, puis s'est fait radiographier : ce geste lui a valu le prix Nobel en 1956 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201929%2C%20le%20m%C3%A9decin%20allemand%20Werner%20Forssmann%20s'est%20gliss%C3%A9%20un%20cath%C3%A9ter%20du%20bras%20jusqu'au%20c%C5%93ur%2C%20sur%20lui-m%C3%AAme%2C%20puis%20s'est%20fait%20radiographier%20%3A%20ce%20geste%20lui%20a%20valu%20le%20prix%20Nobel%20en%201956%20%3F"
 },
 {
  "text": "En 1984, le médecin australien Barry Marshall a bu une culture de la bactérie Helicobacter pylori pour prouver qu'elle causait la gastrite. Il a obtenu le prix Nobel en 2005.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1984, le médecin australien Barry Marshall a bu une culture de la bactérie Helicobacter pylori pour prouver qu'elle causait la gastrite. Il a obtenu le prix Nobel en 2005 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201984%2C%20le%20m%C3%A9decin%20australien%20Barry%20Marshall%20a%20bu%20une%20culture%20de%20la%20bact%C3%A9rie%20Helicobacter%20pylori%20pour%20prouver%20qu'elle%20causait%20la%20gastrite.%20Il%20a%20obtenu%20le%20prix%20Nobel%20en%202005%20%3F"
 },
 {
  "text": "L'Américain Charles Osborne a eu le hoquet pendant 68 ans, de 1922 à 1990, un record homologué par le Guinness.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Américain Charles Osborne a eu le hoquet pendant 68 ans, de 1922 à 1990, un record homologué par le Guinness ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Am%C3%A9ricain%20Charles%20Osborne%20a%20eu%20le%20hoquet%20pendant%2068%20ans%2C%20de%201922%20%C3%A0%201990%2C%20un%20record%20homologu%C3%A9%20par%20le%20Guinness%20%3F"
 },
 {
  "text": "En 2002, des tests ADN ont semblé prouver que l'Américaine Lydia Fairchild n'était pas la mère de ses propres enfants : elle était en fait une chimère, porteuse de deux ADN différents.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2002, des tests ADN ont semblé prouver que l'Américaine Lydia Fairchild n'était pas la mère de ses propres enfants : elle était en fait une chimère, porteuse de deux ADN différents ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202002%2C%20des%20tests%20ADN%20ont%20sembl%C3%A9%20prouver%20que%20l'Am%C3%A9ricaine%20Lydia%20Fairchild%20n'%C3%A9tait%20pas%20la%20m%C3%A8re%20de%20ses%20propres%20enfants%20%3A%20elle%20%C3%A9tait%20en%20fait%20une%20chim%C3%A8re%2C%20porteuse%20de%20deux%20ADN%20diff%C3%A9rents%20%3F"
 },
 {
  "text": "En 2007, The Lancet a décrit un fonctionnaire français de 44 ans, marié et père de deux enfants, dont le cerveau était réduit à une fine couche par une hydrocéphalie massive.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2007, The Lancet a décrit un fonctionnaire français de 44 ans, marié et père de deux enfants, dont le cerveau était réduit à une fine couche par une hydrocéphalie massive ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202007%2C%20The%20Lancet%20a%20d%C3%A9crit%20un%20fonctionnaire%20fran%C3%A7ais%20de%2044%20ans%2C%20mari%C3%A9%20et%20p%C3%A8re%20de%20deux%20enfants%2C%20dont%20le%20cerveau%20%C3%A9tait%20r%C3%A9duit%20%C3%A0%20une%20fine%20couche%20par%20une%20hydroc%C3%A9phalie%20massive%20%3F"
 },
 {
  "text": "L'Écossaise Joy Milne détecte la maladie de Parkinson à l'odeur : elle a senti le changement d'odeur de son mari des années avant son diagnostic.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Écossaise Joy Milne détecte la maladie de Parkinson à l'odeur : elle a senti le changement d'odeur de son mari des années avant son diagnostic ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%89cossaise%20Joy%20Milne%20d%C3%A9tecte%20la%20maladie%20de%20Parkinson%20%C3%A0%20l'odeur%20%3A%20elle%20a%20senti%20le%20changement%20d'odeur%20de%20son%20mari%20des%20ann%C3%A9es%20avant%20son%20diagnostic%20%3F"
 },
 {
  "text": "Le golfeur américain Eben Byers a bu environ 1 400 doses d'eau au radium vendue comme tonique : il a perdu une grande partie de sa mâchoire et a été enterré en 1932 dans un cercueil plombé.",
  "source": "Perplexity",
  "question": "Est-il vrai que le golfeur américain Eben Byers a bu environ 1 400 doses d'eau au radium vendue comme tonique : il a perdu une grande partie de sa mâchoire et a été enterré en 1932 dans un cercueil plombé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20golfeur%20am%C3%A9ricain%20Eben%20Byers%20a%20bu%20environ%201%20400%20doses%20d'eau%20au%20radium%20vendue%20comme%20tonique%20%3A%20il%20a%20perdu%20une%20grande%20partie%20de%20sa%20m%C3%A2choire%20et%20a%20%C3%A9t%C3%A9%20enterr%C3%A9%20en%201932%20dans%20un%20cercueil%20plomb%C3%A9%20%3F"
 },
 {
  "text": "Au XVIIIe siècle, des kits de lavement à la fumée de tabac étaient installés le long de la Tamise pour tenter de ranimer les noyés.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au XVIIIe siècle, des kits de lavement à la fumée de tabac étaient installés le long de la Tamise pour tenter de ranimer les noyés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20XVIIIe%20si%C3%A8cle%2C%20des%20kits%20de%20lavement%20%C3%A0%20la%20fum%C3%A9e%20de%20tabac%20%C3%A9taient%20install%C3%A9s%20le%20long%20de%20la%20Tamise%20pour%20tenter%20de%20ranimer%20les%20noy%C3%A9s%20%3F"
 },
 {
  "text": "Après un coup de mousquet en 1822, Alexis St. Martin a gardé un trou ouvert sur l'estomac : le médecin William Beaumont y introduisait de la nourriture attachée à une ficelle pour étudier la digestion.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'après un coup de mousquet en 1822, Alexis St. Martin a gardé un trou ouvert sur l'estomac : le médecin William Beaumont y introduisait de la nourriture attachée à une ficelle pour étudier la digestion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'apr%C3%A8s%20un%20coup%20de%20mousquet%20en%201822%2C%20Alexis%20St.%20Martin%20a%20gard%C3%A9%20un%20trou%20ouvert%20sur%20l'estomac%20%3A%20le%20m%C3%A9decin%20William%20Beaumont%20y%20introduisait%20de%20la%20nourriture%20attach%C3%A9e%20%C3%A0%20une%20ficelle%20pour%20%C3%A9tudier%20la%20digestion%20%3F"
 },
 {
  "text": "Le journaliste Jean-Dominique Bauby, entièrement paralysé, a écrit Le Scaphandre et le Papillon lettre par lettre en clignant de sa seule paupière gauche.",
  "source": "Perplexity",
  "question": "Est-il vrai que le journaliste Jean-Dominique Bauby, entièrement paralysé, a écrit Le Scaphandre et le Papillon lettre par lettre en clignant de sa seule paupière gauche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20journaliste%20Jean-Dominique%20Bauby%2C%20enti%C3%A8rement%20paralys%C3%A9%2C%20a%20%C3%A9crit%20Le%20Scaphandre%20et%20le%20Papillon%20lettre%20par%20lettre%20en%20clignant%20de%20sa%20seule%20paupi%C3%A8re%20gauche%20%3F"
 },
 {
  "text": "En 1667, le médecin français Jean-Baptiste Denis a réalisé l'une des premières transfusions sur un humain… avec du sang d'agneau. Le patient, un adolescent de 15 ans, a survécu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1667, le médecin français Jean-Baptiste Denis a réalisé l'une des premières transfusions sur un humain… avec du sang d'agneau. Le patient, un adolescent de 15 ans, a survécu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201667%2C%20le%20m%C3%A9decin%20fran%C3%A7ais%20Jean-Baptiste%20Denis%20a%20r%C3%A9alis%C3%A9%20l'une%20des%20premi%C3%A8res%20transfusions%20sur%20un%20humain%E2%80%A6%20avec%20du%20sang%20d'agneau.%20Le%20patient%2C%20un%20adolescent%20de%2015%20ans%2C%20a%20surv%C3%A9cu%20%3F"
 },
 {
  "text": "Lors de l'autopsie d'Einstein en 1955, le pathologiste Thomas Harvey a prélevé son cerveau sans autorisation préalable, l'a découpé en morceaux et l'a gardé pendant plus de 40 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors de l'autopsie d'Einstein en 1955, le pathologiste Thomas Harvey a prélevé son cerveau sans autorisation préalable, l'a découpé en morceaux et l'a gardé pendant plus de 40 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20de%20l'autopsie%20d'Einstein%20en%201955%2C%20le%20pathologiste%20Thomas%20Harvey%20a%20pr%C3%A9lev%C3%A9%20son%20cerveau%20sans%20autorisation%20pr%C3%A9alable%2C%20l'a%20d%C3%A9coup%C3%A9%20en%20morceaux%20et%20l'a%20gard%C3%A9%20pendant%20plus%20de%2040%20ans%20%3F"
 },
 {
  "text": "En 1898, le laboratoire Bayer a commercialisé l'héroïne comme médicament contre la toux, présentée comme une alternative non addictive à la morphine.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1898, le laboratoire Bayer a commercialisé l'héroïne comme médicament contre la toux, présentée comme une alternative non addictive à la morphine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201898%2C%20le%20laboratoire%20Bayer%20a%20commercialis%C3%A9%20l'h%C3%A9ro%C3%AFne%20comme%20m%C3%A9dicament%20contre%20la%20toux%2C%20pr%C3%A9sent%C3%A9e%20comme%20une%20alternative%20non%20addictive%20%C3%A0%20la%20morphine%20%3F"
 },
 {
  "text": "En 1962, une épidémie de fou rire partie d'un pensionnat du Tanganyika (actuelle Tanzanie) a touché environ 1 000 personnes et forcé la fermeture de 14 écoles.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1962, une épidémie de fou rire partie d'un pensionnat du Tanganyika (actuelle Tanzanie) a touché environ 1 000 personnes et forcé la fermeture de 14 écoles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201962%2C%20une%20%C3%A9pid%C3%A9mie%20de%20fou%20rire%20partie%20d'un%20pensionnat%20du%20Tanganyika%20(actuelle%20Tanzanie)%20a%20touch%C3%A9%20environ%201%20000%20personnes%20et%20forc%C3%A9%20la%20fermeture%20de%2014%20%C3%A9coles%20%3F"
 },
 {
  "text": "Kim Peek, qui a inspiré le film Rain Man, lisait deux pages d'un livre en même temps : la page de gauche avec l'œil gauche, celle de droite avec l'œil droit.",
  "source": "Perplexity",
  "question": "Est-il vrai que kim Peek, qui a inspiré le film Rain Man, lisait deux pages d'un livre en même temps : la page de gauche avec l'œil gauche, celle de droite avec l'œil droit ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20kim%20Peek%2C%20qui%20a%20inspir%C3%A9%20le%20film%20Rain%20Man%2C%20lisait%20deux%20pages%20d'un%20livre%20en%20m%C3%AAme%20temps%20%3A%20la%20page%20de%20gauche%20avec%20l'%C5%93il%20gauche%2C%20celle%20de%20droite%20avec%20l'%C5%93il%20droit%20%3F"
 },
 {
  "text": "Fin 1963-début 1964, le lycéen américain Randy Gardner est resté éveillé 264 heures, soit 11 jours. Le Guinness a ensuite cessé d'homologuer ce type de record par sécurité.",
  "source": "Perplexity",
  "question": "Est-il vrai que fin 1963-début 1964, le lycéen américain Randy Gardner est resté éveillé 264 heures, soit 11 jours. Le Guinness a ensuite cessé d'homologuer ce type de record par sécurité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20fin%201963-d%C3%A9but%201964%2C%20le%20lyc%C3%A9en%20am%C3%A9ricain%20Randy%20Gardner%20est%20rest%C3%A9%20%C3%A9veill%C3%A9%20264%20heures%2C%20soit%2011%20jours.%20Le%20Guinness%20a%20ensuite%20cess%C3%A9%20d'homologuer%20ce%20type%20de%20record%20par%20s%C3%A9curit%C3%A9%20%3F"
 },
 {
  "text": "Ötzi, l'homme des glaces mort il y a 5 300 ans, porte 61 tatouages, souvent sur des zones douloureuses : peut-être un traitement contre ses douleurs articulaires.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'ötzi, l'homme des glaces mort il y a 5 300 ans, porte 61 tatouages, souvent sur des zones douloureuses : peut-être un traitement contre ses douleurs articulaires ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%B6tzi%2C%20l'homme%20des%20glaces%20mort%20il%20y%20a%205%20300%20ans%2C%20porte%2061%20tatouages%2C%20souvent%20sur%20des%20zones%20douloureuses%20%3A%20peut-%C3%AAtre%20un%20traitement%20contre%20ses%20douleurs%20articulaires%20%3F"
 },
 {
  "text": "Après la bataille de Waterloo en 1815, des pilleurs ont arraché les dents des soldats morts pour fabriquer des dentiers, vendus sous le nom de « dents de Waterloo ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'après la bataille de Waterloo en 1815, des pilleurs ont arraché les dents des soldats morts pour fabriquer des dentiers, vendus sous le nom de « dents de Waterloo » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'apr%C3%A8s%20la%20bataille%20de%20Waterloo%20en%201815%2C%20des%20pilleurs%20ont%20arrach%C3%A9%20les%20dents%20des%20soldats%20morts%20pour%20fabriquer%20des%20dentiers%2C%20vendus%20sous%20le%20nom%20de%20%C2%AB%20dents%20de%20Waterloo%20%C2%BB%20%3F"
 },
 {
  "text": "Non, les dentiers de George Washington n'étaient pas en bois : ils mêlaient ivoire (probablement d'hippopotame), dents d'animaux et dents humaines.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, les dentiers de George Washington n'étaient pas en bois : ils mêlaient ivoire (probablement d'hippopotame), dents d'animaux et dents humaines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20les%20dentiers%20de%20George%20Washington%20n'%C3%A9taient%20pas%20en%20bois%20%3A%20ils%20m%C3%AAlaient%20ivoire%20(probablement%20d'hippopotame)%2C%20dents%20d'animaux%20et%20dents%20humaines%20%3F"
 },
 {
  "text": "L'Américain Stan Larkin a vécu 555 jours sans cœur, avec un cœur artificiel alimenté par une pompe de 6 kg qu'il portait dans un sac à dos.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Américain Stan Larkin a vécu 555 jours sans cœur, avec un cœur artificiel alimenté par une pompe de 6 kg qu'il portait dans un sac à dos ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Am%C3%A9ricain%20Stan%20Larkin%20a%20v%C3%A9cu%20555%20jours%20sans%20c%C5%93ur%2C%20avec%20un%20c%C5%93ur%20artificiel%20aliment%C3%A9%20par%20une%20pompe%20de%206%20kg%20qu'il%20portait%20dans%20un%20sac%20%C3%A0%20dos%20%3F"
 },
 {
  "text": "Le foie d'ours polaire contient tant de vitamine A qu'en manger peut provoquer une intoxication grave, au point de faire peler la peau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le foie d'ours polaire contient tant de vitamine A qu'en manger peut provoquer une intoxication grave, au point de faire peler la peau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20foie%20d'ours%20polaire%20contient%20tant%20de%20vitamine%20A%20qu'en%20manger%20peut%20provoquer%20une%20intoxication%20grave%2C%20au%20point%20de%20faire%20peler%20la%20peau%20%3F"
 },
 {
  "text": "En 2010, des malades de l'intestin irritable ont pris des pilules en sachant que c'étaient des placebos, sans principe actif : leurs symptômes se sont nettement améliorés.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2010, des malades de l'intestin irritable ont pris des pilules en sachant que c'étaient des placebos, sans principe actif : leurs symptômes se sont nettement améliorés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202010%2C%20des%20malades%20de%20l'intestin%20irritable%20ont%20pris%20des%20pilules%20en%20sachant%20que%20c'%C3%A9taient%20des%20placebos%2C%20sans%20principe%20actif%20%3A%20leurs%20sympt%C3%B4mes%20se%20sont%20nettement%20am%C3%A9lior%C3%A9s%20%3F"
 },
 {
  "text": "En analysant le nombril de 60 volontaires, des chercheurs ont trouvé 2 368 espèces de bactéries, dont une connue seulement dans le sol du Japon, où son hôte n'était jamais allé.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en analysant le nombril de 60 volontaires, des chercheurs ont trouvé 2 368 espèces de bactéries, dont une connue seulement dans le sol du Japon, où son hôte n'était jamais allé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20analysant%20le%20nombril%20de%2060%20volontaires%2C%20des%20chercheurs%20ont%20trouv%C3%A9%202%20368%20esp%C3%A8ces%20de%20bact%C3%A9ries%2C%20dont%20une%20connue%20seulement%20dans%20le%20sol%20du%20Japon%2C%20o%C3%B9%20son%20h%C3%B4te%20n'%C3%A9tait%20jamais%20all%C3%A9%20%3F"
 },
 {
  "text": "Non, le corps ne contient pas 10 fois plus de bactéries que de cellules humaines : une étude de 2016 estime le rapport à environ 1 pour 1 (38 000 milliards contre 30 000 milliards).",
  "source": "Perplexity",
  "question": "Est-il vrai que non, le corps ne contient pas 10 fois plus de bactéries que de cellules humaines : une étude de 2016 estime le rapport à environ 1 pour 1 (38 000 milliards contre 30 000 milliards) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20le%20corps%20ne%20contient%20pas%2010%20fois%20plus%20de%20bact%C3%A9ries%20que%20de%20cellules%20humaines%20%3A%20une%20%C3%A9tude%20de%202016%20estime%20le%20rapport%20%C3%A0%20environ%201%20pour%201%20(38%20000%20milliards%20contre%2030%20000%20milliards)%20%3F"
 },
 {
  "text": "Des cellules du fœtus restent dans le corps de la mère des décennies après l'accouchement, y compris dans son cerveau : c'est le microchimérisme fœtal.",
  "source": "Perplexity",
  "question": "Est-il vrai que des cellules du fœtus restent dans le corps de la mère des décennies après l'accouchement, y compris dans son cerveau : c'est le microchimérisme fœtal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20des%20cellules%20du%20f%C5%93tus%20restent%20dans%20le%20corps%20de%20la%20m%C3%A8re%20des%20d%C3%A9cennies%20apr%C3%A8s%20l'accouchement%2C%20y%20compris%20dans%20son%20cerveau%20%3A%20c'est%20le%20microchim%C3%A9risme%20f%C5%93tal%20%3F"
 },
 {
  "text": "Le syndrome des cheveux incoiffables existe : une mutation, notamment du gène PADI3, donne aux cheveux une section triangulaire ou en forme de cœur qui les empêche de se coucher.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome des cheveux incoiffables existe : une mutation, notamment du gène PADI3, donne aux cheveux une section triangulaire ou en forme de cœur qui les empêche de se coucher ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20des%20cheveux%20incoiffables%20existe%20%3A%20une%20mutation%2C%20notamment%20du%20g%C3%A8ne%20PADI3%2C%20donne%20aux%20cheveux%20une%20section%20triangulaire%20ou%20en%20forme%20de%20c%C5%93ur%20qui%20les%20emp%C3%AAche%20de%20se%20coucher%20%3F"
 },
 {
  "text": "Quand une femme enceinte avale de l'ail, son liquide amniotique se met à sentir l'ail moins d'une heure plus tard, selon une étude de 1995.",
  "source": "Perplexity",
  "question": "Est-il vrai que quand une femme enceinte avale de l'ail, son liquide amniotique se met à sentir l'ail moins d'une heure plus tard, selon une étude de 1995 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20quand%20une%20femme%20enceinte%20avale%20de%20l'ail%2C%20son%20liquide%20amniotique%20se%20met%20%C3%A0%20sentir%20l'ail%20moins%20d'une%20heure%20plus%20tard%2C%20selon%20une%20%C3%A9tude%20de%201995%20%3F"
 },
 {
  "text": "En 2020, la violoniste Dagmar Turner a joué de son instrument pendant qu'on lui retirait une tumeur au cerveau, pour que les chirurgiens épargnent les zones qui contrôlent ses mains.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2020, la violoniste Dagmar Turner a joué de son instrument pendant qu'on lui retirait une tumeur au cerveau, pour que les chirurgiens épargnent les zones qui contrôlent ses mains ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202020%2C%20la%20violoniste%20Dagmar%20Turner%20a%20jou%C3%A9%20de%20son%20instrument%20pendant%20qu'on%20lui%20retirait%20une%20tumeur%20au%20cerveau%2C%20pour%20que%20les%20chirurgiens%20%C3%A9pargnent%20les%20zones%20qui%20contr%C3%B4lent%20ses%20mains%20%3F"
 },
 {
  "text": "La Marocaine Zahra Aboutalib a porté pendant 46 ans un fœtus mort et calcifié, un « bébé de pierre » découvert lorsqu'elle avait 75 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Marocaine Zahra Aboutalib a porté pendant 46 ans un fœtus mort et calcifié, un « bébé de pierre » découvert lorsqu'elle avait 75 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Marocaine%20Zahra%20Aboutalib%20a%20port%C3%A9%20pendant%2046%20ans%20un%20f%C5%93tus%20mort%20et%20calcifi%C3%A9%2C%20un%20%C2%AB%20b%C3%A9b%C3%A9%20de%20pierre%20%C2%BB%20d%C3%A9couvert%20lorsqu'elle%20avait%2075%20ans%20%3F"
 },
 {
  "text": "Les frères siamois Chang et Eng Bunker, reliés au niveau du torse, ont épousé deux sœurs et eu à eux deux 21 enfants.",
  "source": "Perplexity",
  "question": "Est-il vrai que les frères siamois Chang et Eng Bunker, reliés au niveau du torse, ont épousé deux sœurs et eu à eux deux 21 enfants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fr%C3%A8res%20siamois%20Chang%20et%20Eng%20Bunker%2C%20reli%C3%A9s%20au%20niveau%20du%20torse%2C%20ont%20%C3%A9pous%C3%A9%20deux%20s%C5%93urs%20et%20eu%20%C3%A0%20eux%20deux%2021%20enfants%20%3F"
 },
 {
  "text": "Le syndrome de la tête qui explose existe : en s'endormant ou au réveil, on entend une détonation violente qui n'existe pas. Il est indolore.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome de la tête qui explose existe : en s'endormant ou au réveil, on entend une détonation violente qui n'existe pas. Il est indolore ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20de%20la%20t%C3%AAte%20qui%20explose%20existe%20%3A%20en%20s'endormant%20ou%20au%20r%C3%A9veil%2C%20on%20entend%20une%20d%C3%A9tonation%20violente%20qui%20n'existe%20pas.%20Il%20est%20indolore%20%3F"
 },
 {
  "text": "Entre 18 et 35 % des gens éternuent de façon réflexe en passant brusquement à la lumière vive du soleil, un trait héréditaire appelé réflexe photo-sternutatoire.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'entre 18 et 35 % des gens éternuent de façon réflexe en passant brusquement à la lumière vive du soleil, un trait héréditaire appelé réflexe photo-sternutatoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'entre%2018%20et%2035%20%25%20des%20gens%20%C3%A9ternuent%20de%20fa%C3%A7on%20r%C3%A9flexe%20en%20passant%20brusquement%20%C3%A0%20la%20lumi%C3%A8re%20vive%20du%20soleil%2C%20un%20trait%20h%C3%A9r%C3%A9ditaire%20appel%C3%A9%20r%C3%A9flexe%20photo-sternutatoire%20%3F"
 },
 {
  "text": "Les cellules cancéreuses d'Henrietta Lacks, prélevées sans son accord en 1951, se multiplient toujours dans les laboratoires du monde entier sous le nom de HeLa.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cellules cancéreuses d'Henrietta Lacks, prélevées sans son accord en 1951, se multiplient toujours dans les laboratoires du monde entier sous le nom de HeLa ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cellules%20canc%C3%A9reuses%20d'Henrietta%20Lacks%2C%20pr%C3%A9lev%C3%A9es%20sans%20son%20accord%20en%201951%2C%20se%20multiplient%20toujours%20dans%20les%20laboratoires%20du%20monde%20entier%20sous%20le%20nom%20de%20HeLa%20%3F"
 },
 {
  "text": "Le syndrome de Cotard pousse des personnes vivantes à croire qu'elles sont mortes, qu'elles n'ont plus d'organes ou qu'elles pourrissent.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome de Cotard pousse des personnes vivantes à croire qu'elles sont mortes, qu'elles n'ont plus d'organes ou qu'elles pourrissent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20de%20Cotard%20pousse%20des%20personnes%20vivantes%20%C3%A0%20croire%20qu'elles%20sont%20mortes%2C%20qu'elles%20n'ont%20plus%20d'organes%20ou%20qu'elles%20pourrissent%20%3F"
 },
 {
  "text": "Chez les Fore de Papouasie-Nouvelle-Guinée, manger le cerveau des défunts lors des funérailles a transmis le kuru, une maladie à prion surnommée « la mort qui rit ».",
  "source": "Perplexity",
  "question": "Est-il vrai que chez les Fore de Papouasie-Nouvelle-Guinée, manger le cerveau des défunts lors des funérailles a transmis le kuru, une maladie à prion surnommée « la mort qui rit » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20les%20Fore%20de%20Papouasie-Nouvelle-Guin%C3%A9e%2C%20manger%20le%20cerveau%20des%20d%C3%A9funts%20lors%20des%20fun%C3%A9railles%20a%20transmis%20le%20kuru%2C%20une%20maladie%20%C3%A0%20prion%20surnomm%C3%A9e%20%C2%AB%20la%20mort%20qui%20rit%20%C2%BB%20%3F"
 },
 {
  "text": "La première greffe partielle du visage a eu lieu à Amiens en 2005 : Isabelle Dinoire avait été défigurée par son propre chien pendant qu'elle était inconsciente.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première greffe partielle du visage a eu lieu à Amiens en 2005 : Isabelle Dinoire avait été défigurée par son propre chien pendant qu'elle était inconsciente ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20greffe%20partielle%20du%20visage%20a%20eu%20lieu%20%C3%A0%20Amiens%20en%202005%20%3A%20Isabelle%20Dinoire%20avait%20%C3%A9t%C3%A9%20d%C3%A9figur%C3%A9e%20par%20son%20propre%20chien%20pendant%20qu'elle%20%C3%A9tait%20inconsciente%20%3F"
 },
 {
  "text": "La Britannique Donna Griffiths a éternué pendant 976 jours d'affilée à partir de 1981, dont environ un million de fois la première année.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Britannique Donna Griffiths a éternué pendant 976 jours d'affilée à partir de 1981, dont environ un million de fois la première année ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Britannique%20Donna%20Griffiths%20a%20%C3%A9ternu%C3%A9%20pendant%20976%20jours%20d'affil%C3%A9e%20%C3%A0%20partir%20de%201981%2C%20dont%20environ%20un%20million%20de%20fois%20la%20premi%C3%A8re%20ann%C3%A9e%20%3F"
 },
 {
  "text": "Certaines tumeurs, les tératomes, peuvent contenir des cheveux, des os et même des dents complètes.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines tumeurs, les tératomes, peuvent contenir des cheveux, des os et même des dents complètes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20tumeurs%2C%20les%20t%C3%A9ratomes%2C%20peuvent%20contenir%20des%20cheveux%2C%20des%20os%20et%20m%C3%AAme%20des%20dents%20compl%C3%A8tes%20%3F"
 },
 {
  "text": "Un choc émotionnel peut déformer brutalement le cœur en forme de piège à poulpe japonais : ce « syndrome du cœur brisé » s'appelle la cardiomyopathie de Takotsubo.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un choc émotionnel peut déformer brutalement le cœur en forme de piège à poulpe japonais : ce « syndrome du cœur brisé » s'appelle la cardiomyopathie de Takotsubo ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20choc%20%C3%A9motionnel%20peut%20d%C3%A9former%20brutalement%20le%20c%C5%93ur%20en%20forme%20de%20pi%C3%A8ge%20%C3%A0%20poulpe%20japonais%20%3A%20ce%20%C2%AB%20syndrome%20du%20c%C5%93ur%20bris%C3%A9%20%C2%BB%20s'appelle%20la%20cardiomyopathie%20de%20Takotsubo%20%3F"
 },
 {
  "text": "En 1941, une Norvégienne blessée à la tête par un éclat d'obus s'est mise à parler avec un accent allemand, puis a été rejetée par ses voisins : un cas célèbre de syndrome de l'accent étranger.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1941, une Norvégienne blessée à la tête par un éclat d'obus s'est mise à parler avec un accent allemand, puis a été rejetée par ses voisins : un cas célèbre de syndrome de l'accent étranger ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201941%2C%20une%20Norv%C3%A9gienne%20bless%C3%A9e%20%C3%A0%20la%20t%C3%AAte%20par%20un%20%C3%A9clat%20d'obus%20s'est%20mise%20%C3%A0%20parler%20avec%20un%20accent%20allemand%2C%20puis%20a%20%C3%A9t%C3%A9%20rejet%C3%A9e%20par%20ses%20voisins%20%3A%20un%20cas%20c%C3%A9l%C3%A8bre%20de%20syndrome%20de%20l'accent%20%C3%A9tranger%20%3F"
 },
 {
  "text": "Quand on entend « ba » en regardant des lèvres prononcer « ga », le cerveau entend « da », un son absent des deux : c'est l'effet McGurk.",
  "source": "Perplexity",
  "question": "Est-il vrai que quand on entend « ba » en regardant des lèvres prononcer « ga », le cerveau entend « da », un son absent des deux : c'est l'effet McGurk ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20quand%20on%20entend%20%C2%AB%20ba%20%C2%BB%20en%20regardant%20des%20l%C3%A8vres%20prononcer%20%C2%AB%20ga%20%C2%BB%2C%20le%20cerveau%20entend%20%C2%AB%20da%20%C2%BB%2C%20un%20son%20absent%20des%20deux%20%3A%20c'est%20l'effet%20McGurk%20%3F"
 },
 {
  "text": "Le syndrome de Capgras pousse des patients à croire qu'un proche, par exemple leur conjoint, a été remplacé par un sosie imposteur parfaitement identique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome de Capgras pousse des patients à croire qu'un proche, par exemple leur conjoint, a été remplacé par un sosie imposteur parfaitement identique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20de%20Capgras%20pousse%20des%20patients%20%C3%A0%20croire%20qu'un%20proche%2C%20par%20exemple%20leur%20conjoint%2C%20a%20%C3%A9t%C3%A9%20remplac%C3%A9%20par%20un%20sosie%20imposteur%20parfaitement%20identique%20%3F"
 },
 {
  "text": "En 1932, l'armée australienne a mené une « guerre » à la mitrailleuse contre environ 20 000 émeus en Australie-Occidentale, et a fini par abandonner face aux oiseaux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1932, l'armée australienne a mené une « guerre » à la mitrailleuse contre environ 20 000 émeus en Australie-Occidentale, et a fini par abandonner face aux oiseaux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201932%2C%20l'arm%C3%A9e%20australienne%20a%20men%C3%A9%20une%20%C2%AB%20guerre%20%C2%BB%20%C3%A0%20la%20mitrailleuse%20contre%20environ%2020%20000%20%C3%A9meus%20en%20Australie-Occidentale%2C%20et%20a%20fini%20par%20abandonner%20face%20aux%20oiseaux%20%3F"
 },
 {
  "text": "En 897, le pape Étienne VI fit déterrer son prédécesseur Formose, installa le cadavre sur un trône pour le juger, le déclara coupable et lui fit couper trois doigts.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 897, le pape Étienne VI fit déterrer son prédécesseur Formose, installa le cadavre sur un trône pour le juger, le déclara coupable et lui fit couper trois doigts ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20897%2C%20le%20pape%20%C3%89tienne%20VI%20fit%20d%C3%A9terrer%20son%20pr%C3%A9d%C3%A9cesseur%20Formose%2C%20installa%20le%20cadavre%20sur%20un%20tr%C3%B4ne%20pour%20le%20juger%2C%20le%20d%C3%A9clara%20coupable%20et%20lui%20fit%20couper%20trois%20doigts%20%3F"
 },
 {
  "text": "Le soldat japonais Hiroo Onoda a continué la guerre dans la jungle de l'île de Lubang jusqu'en 1974, et n'a déposé les armes que lorsque son ancien commandant est venu l'en relever.",
  "source": "Perplexity",
  "question": "Est-il vrai que le soldat japonais Hiroo Onoda a continué la guerre dans la jungle de l'île de Lubang jusqu'en 1974, et n'a déposé les armes que lorsque son ancien commandant est venu l'en relever ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20soldat%20japonais%20Hiroo%20Onoda%20a%20continu%C3%A9%20la%20guerre%20dans%20la%20jungle%20de%20l'%C3%AEle%20de%20Lubang%20jusqu'en%201974%2C%20et%20n'a%20d%C3%A9pos%C3%A9%20les%20armes%20que%20lorsque%20son%20ancien%20commandant%20est%20venu%20l'en%20relever%20%3F"
 },
 {
  "text": "En 1814 à Londres, une cuve de la brasserie Meux a cédé et une vague de bière a déferlé dans le quartier de St Giles, tuant huit personnes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1814 à Londres, une cuve de la brasserie Meux a cédé et une vague de bière a déferlé dans le quartier de St Giles, tuant huit personnes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201814%20%C3%A0%20Londres%2C%20une%20cuve%20de%20la%20brasserie%20Meux%20a%20c%C3%A9d%C3%A9%20et%20une%20vague%20de%20bi%C3%A8re%20a%20d%C3%A9ferl%C3%A9%20dans%20le%20quartier%20de%20St%20Giles%2C%20tuant%20huit%20personnes%20%3F"
 },
 {
  "text": "En 1919 à Boston, une vague de mélasse haute de 7,6 mètres et lancée à 56 km/h a déferlé dans les rues après la rupture d'une cuve, tuant 21 personnes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1919 à Boston, une vague de mélasse haute de 7,6 mètres et lancée à 56 km/h a déferlé dans les rues après la rupture d'une cuve, tuant 21 personnes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201919%20%C3%A0%20Boston%2C%20une%20vague%20de%20m%C3%A9lasse%20haute%20de%207%2C6%20m%C3%A8tres%20et%20lanc%C3%A9e%20%C3%A0%2056%20km%2Fh%20a%20d%C3%A9ferl%C3%A9%20dans%20les%20rues%20apr%C3%A8s%20la%20rupture%20d'une%20cuve%2C%20tuant%2021%20personnes%20%3F"
 },
 {
  "text": "En 1518 à Strasbourg, des dizaines de personnes ont été prises d'une frénésie de danse qui a duré des semaines, et la ville a d'abord engagé des musiciens pour les accompagner.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1518 à Strasbourg, des dizaines de personnes ont été prises d'une frénésie de danse qui a duré des semaines, et la ville a d'abord engagé des musiciens pour les accompagner ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201518%20%C3%A0%20Strasbourg%2C%20des%20dizaines%20de%20personnes%20ont%20%C3%A9t%C3%A9%20prises%20d'une%20fr%C3%A9n%C3%A9sie%20de%20danse%20qui%20a%20dur%C3%A9%20des%20semaines%2C%20et%20la%20ville%20a%20d'abord%20engag%C3%A9%20des%20musiciens%20pour%20les%20accompagner%20%3F"
 },
 {
  "text": "La dernière exécution à la guillotine en France, celle de Hamida Djandoubi, a eu lieu le 10 septembre 1977, quelques mois après la sortie américaine du premier film Star Wars.",
  "source": "Perplexity",
  "question": "Est-il vrai que la dernière exécution à la guillotine en France, celle de Hamida Djandoubi, a eu lieu le 10 septembre 1977, quelques mois après la sortie américaine du premier film Star Wars ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20derni%C3%A8re%20ex%C3%A9cution%20%C3%A0%20la%20guillotine%20en%20France%2C%20celle%20de%20Hamida%20Djandoubi%2C%20a%20eu%20lieu%20le%2010%20septembre%201977%2C%20quelques%20mois%20apr%C3%A8s%20la%20sortie%20am%C3%A9ricaine%20du%20premier%20film%20Star%20Wars%20%3F"
 },
 {
  "text": "En 1740, l'impératrice Anna Ivanovna força le prince Mikhaïl Golitsyne, devenu bouffon, à épouser une femme kalmouke et à passer sa nuit de noces dans un palais entièrement fait de glace.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1740, l'impératrice Anna Ivanovna força le prince Mikhaïl Golitsyne, devenu bouffon, à épouser une femme kalmouke et à passer sa nuit de noces dans un palais entièrement fait de glace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201740%2C%20l'imp%C3%A9ratrice%20Anna%20Ivanovna%20for%C3%A7a%20le%20prince%20Mikha%C3%AFl%20Golitsyne%2C%20devenu%20bouffon%2C%20%C3%A0%20%C3%A9pouser%20une%20femme%20kalmouke%20et%20%C3%A0%20passer%20sa%20nuit%20de%20noces%20dans%20un%20palais%20enti%C3%A8rement%20fait%20de%20glace%20%3F"
 },
 {
  "text": "Selon les récits d'époque, le roi de France Charles VI se croyait fait de verre : il portait des vêtements renforcés de tiges de fer et refusait qu'on l'approche de peur de se briser.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon les récits d'époque, le roi de France Charles VI se croyait fait de verre : il portait des vêtements renforcés de tiges de fer et refusait qu'on l'approche de peur de se briser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20les%20r%C3%A9cits%20d'%C3%A9poque%2C%20le%20roi%20de%20France%20Charles%20VI%20se%20croyait%20fait%20de%20verre%20%3A%20il%20portait%20des%20v%C3%AAtements%20renforc%C3%A9s%20de%20tiges%20de%20fer%20et%20refusait%20qu'on%20l'approche%20de%20peur%20de%20se%20briser%20%3F"
 },
 {
  "text": "En 1859, Joshua Norton s'est autoproclamé empereur des États-Unis à San Francisco, a décrété l'abolition du Congrès et ses billets de banque étaient acceptés dans certains restaurants.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1859, Joshua Norton s'est autoproclamé empereur des États-Unis à San Francisco, a décrété l'abolition du Congrès et ses billets de banque étaient acceptés dans certains restaurants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201859%2C%20Joshua%20Norton%20s'est%20autoproclam%C3%A9%20empereur%20des%20%C3%89tats-Unis%20%C3%A0%20San%20Francisco%2C%20a%20d%C3%A9cr%C3%A9t%C3%A9%20l'abolition%20du%20Congr%C3%A8s%20et%20ses%20billets%20de%20banque%20%C3%A9taient%20accept%C3%A9s%20dans%20certains%20restaurants%20%3F"
 },
 {
  "text": "L'astronome Tycho Brahe a perdu une partie du nez en 1566 lors d'un duel contre son cousin pour savoir lequel était le meilleur mathématicien, et a porté une prothèse en laiton le reste de sa vie.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'astronome Tycho Brahe a perdu une partie du nez en 1566 lors d'un duel contre son cousin pour savoir lequel était le meilleur mathématicien, et a porté une prothèse en laiton le reste de sa vie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'astronome%20Tycho%20Brahe%20a%20perdu%20une%20partie%20du%20nez%20en%201566%20lors%20d'un%20duel%20contre%20son%20cousin%20pour%20savoir%20lequel%20%C3%A9tait%20le%20meilleur%20math%C3%A9maticien%2C%20et%20a%20port%C3%A9%20une%20proth%C3%A8se%20en%20laiton%20le%20reste%20de%20sa%20vie%20%3F"
 },
 {
  "text": "En 1726, l'Anglaise Mary Toft a convaincu un chirurgien de la maison du roi George Ier qu'elle accouchait de lapins, avant d'avouer la supercherie.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1726, l'Anglaise Mary Toft a convaincu un chirurgien de la maison du roi George Ier qu'elle accouchait de lapins, avant d'avouer la supercherie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201726%2C%20l'Anglaise%20Mary%20Toft%20a%20convaincu%20un%20chirurgien%20de%20la%20maison%20du%20roi%20George%20Ier%20qu'elle%20accouchait%20de%20lapins%2C%20avant%20d'avouer%20la%20supercherie%20%3F"
 },
 {
  "text": "En 1925, l'escroc Victor Lustig a vendu la tour Eiffel à un ferrailleur parisien en se faisant passer pour un fonctionnaire, puis a tenté de recommencer avec d'autres acheteurs.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1925, l'escroc Victor Lustig a vendu la tour Eiffel à un ferrailleur parisien en se faisant passer pour un fonctionnaire, puis a tenté de recommencer avec d'autres acheteurs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201925%2C%20l'escroc%20Victor%20Lustig%20a%20vendu%20la%20tour%20Eiffel%20%C3%A0%20un%20ferrailleur%20parisien%20en%20se%20faisant%20passer%20pour%20un%20fonctionnaire%2C%20puis%20a%20tent%C3%A9%20de%20recommencer%20avec%20d'autres%20acheteurs%20%3F"
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, l'officier britannique Jack Churchill partait au combat avec une épée écossaise, un arc et des flèches, et une cornemuse.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, l'officier britannique Jack Churchill partait au combat avec une épée écossaise, un arc et des flèches, et une cornemuse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20l'officier%20britannique%20Jack%20Churchill%20partait%20au%20combat%20avec%20une%20%C3%A9p%C3%A9e%20%C3%A9cossaise%2C%20un%20arc%20et%20des%20fl%C3%A8ches%2C%20et%20une%20cornemuse%20%3F"
 },
 {
  "text": "Wojtek, un ours brun, a été officiellement enrôlé dans l'armée polonaise avec un matricule, aurait porté des caisses d'obus à la bataille du Mont-Cassin et a été promu caporal.",
  "source": "Perplexity",
  "question": "Est-il vrai que wojtek, un ours brun, a été officiellement enrôlé dans l'armée polonaise avec un matricule, aurait porté des caisses d'obus à la bataille du Mont-Cassin et a été promu caporal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20wojtek%2C%20un%20ours%20brun%2C%20a%20%C3%A9t%C3%A9%20officiellement%20enr%C3%B4l%C3%A9%20dans%20l'arm%C3%A9e%20polonaise%20avec%20un%20matricule%2C%20aurait%20port%C3%A9%20des%20caisses%20d'obus%20%C3%A0%20la%20bataille%20du%20Mont-Cassin%20et%20a%20%C3%A9t%C3%A9%20promu%20caporal%20%3F"
 },
 {
  "text": "Violet Jessop a survécu à la collision de l'Olympic en 1911, au naufrage du Titanic en 1912, où elle était hôtesse, puis à celui du Britannic en 1916, où elle était infirmière.",
  "source": "Perplexity",
  "question": "Est-il vrai que violet Jessop a survécu à la collision de l'Olympic en 1911, au naufrage du Titanic en 1912, où elle était hôtesse, puis à celui du Britannic en 1916, où elle était infirmière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20violet%20Jessop%20a%20surv%C3%A9cu%20%C3%A0%20la%20collision%20de%20l'Olympic%20en%201911%2C%20au%20naufrage%20du%20Titanic%20en%201912%2C%20o%C3%B9%20elle%20%C3%A9tait%20h%C3%B4tesse%2C%20puis%20%C3%A0%20celui%20du%20Britannic%20en%201916%2C%20o%C3%B9%20elle%20%C3%A9tait%20infirmi%C3%A8re%20%3F"
 },
 {
  "text": "Tsutomu Yamaguchi était à Hiroshima lors de la bombe atomique du 6 août 1945, rentra chez lui à Nagasaki, y survécut à la seconde bombe trois jours plus tard et mourut à 93 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que tsutomu Yamaguchi était à Hiroshima lors de la bombe atomique du 6 août 1945, rentra chez lui à Nagasaki, y survécut à la seconde bombe trois jours plus tard et mourut à 93 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20tsutomu%20Yamaguchi%20%C3%A9tait%20%C3%A0%20Hiroshima%20lors%20de%20la%20bombe%20atomique%20du%206%20ao%C3%BBt%201945%2C%20rentra%20chez%20lui%20%C3%A0%20Nagasaki%2C%20y%20surv%C3%A9cut%20%C3%A0%20la%20seconde%20bombe%20trois%20jours%20plus%20tard%20et%20mourut%20%C3%A0%2093%20ans%20%3F"
 },
 {
  "text": "Au marathon olympique de 1904, le premier arrivé avait fait une partie du parcours en voiture, et le vainqueur officiel avait reçu de la strychnine mélangée à du brandy pendant la course.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au marathon olympique de 1904, le premier arrivé avait fait une partie du parcours en voiture, et le vainqueur officiel avait reçu de la strychnine mélangée à du brandy pendant la course ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20marathon%20olympique%20de%201904%2C%20le%20premier%20arriv%C3%A9%20avait%20fait%20une%20partie%20du%20parcours%20en%20voiture%2C%20et%20le%20vainqueur%20officiel%20avait%20re%C3%A7u%20de%20la%20strychnine%20m%C3%A9lang%C3%A9e%20%C3%A0%20du%20brandy%20pendant%20la%20course%20%3F"
 },
 {
  "text": "Au marathon olympique de 1904, le facteur cubain Andarín Carvajal a mangé des pommes pourries, fait une sieste en pleine course, et a quand même terminé quatrième.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au marathon olympique de 1904, le facteur cubain Andarín Carvajal a mangé des pommes pourries, fait une sieste en pleine course, et a quand même terminé quatrième ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20marathon%20olympique%20de%201904%2C%20le%20facteur%20cubain%20Andar%C3%ADn%20Carvajal%20a%20mang%C3%A9%20des%20pommes%20pourries%2C%20fait%20une%20sieste%20en%20pleine%20course%2C%20et%20a%20quand%20m%C3%AAme%20termin%C3%A9%20quatri%C3%A8me%20%3F"
 },
 {
  "text": "En 1859, les États-Unis et le Royaume-Uni ont mobilisé des centaines de soldats et des navires de guerre après la mort d'un cochon : ce fut la seule victime de la « guerre du Cochon ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1859, les États-Unis et le Royaume-Uni ont mobilisé des centaines de soldats et des navires de guerre après la mort d'un cochon : ce fut la seule victime de la « guerre du Cochon » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201859%2C%20les%20%C3%89tats-Unis%20et%20le%20Royaume-Uni%20ont%20mobilis%C3%A9%20des%20centaines%20de%20soldats%20et%20des%20navires%20de%20guerre%20apr%C3%A8s%20la%20mort%20d'un%20cochon%20%3A%20ce%20fut%20la%20seule%20victime%20de%20la%20%C2%AB%20guerre%20du%20Cochon%20%C2%BB%20%3F"
 },
 {
  "text": "Le pénis supposé de Napoléon a été acheté en 1977 pour 3 000 dollars par un urologue américain, John Lattimer ; sa fille en a hérité et a refusé au moins 100 000 dollars pour le vendre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pénis supposé de Napoléon a été acheté en 1977 pour 3 000 dollars par un urologue américain, John Lattimer ; sa fille en a hérité et a refusé au moins 100 000 dollars pour le vendre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20p%C3%A9nis%20suppos%C3%A9%20de%20Napol%C3%A9on%20a%20%C3%A9t%C3%A9%20achet%C3%A9%20en%201977%20pour%203%20000%20dollars%20par%20un%20urologue%20am%C3%A9ricain%2C%20John%20Lattimer%20%3B%20sa%20fille%20en%20a%20h%C3%A9rit%C3%A9%20et%20a%20refus%C3%A9%20au%20moins%20100%20000%20dollars%20pour%20le%20vendre%20%3F"
 },
 {
  "text": "Le philosophe Jeremy Bentham a demandé que son squelette soit habillé et conservé : il est exposé à l'University College de Londres, avec une tête en cire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le philosophe Jeremy Bentham a demandé que son squelette soit habillé et conservé : il est exposé à l'University College de Londres, avec une tête en cire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20philosophe%20Jeremy%20Bentham%20a%20demand%C3%A9%20que%20son%20squelette%20soit%20habill%C3%A9%20et%20conserv%C3%A9%20%3A%20il%20est%20expos%C3%A9%20%C3%A0%20l'University%20College%20de%20Londres%2C%20avec%20une%20t%C3%AAte%20en%20cire%20%3F"
 },
 {
  "text": "En 1958, l'US Air Force a étudié le projet A119 visant à faire exploser une bombe nucléaire sur la Lune, avec la participation du jeune Carl Sagan.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1958, l'US Air Force a étudié le projet A119 visant à faire exploser une bombe nucléaire sur la Lune, avec la participation du jeune Carl Sagan ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201958%2C%20l'US%20Air%20Force%20a%20%C3%A9tudi%C3%A9%20le%20projet%20A119%20visant%20%C3%A0%20faire%20exploser%20une%20bombe%20nucl%C3%A9aire%20sur%20la%20Lune%2C%20avec%20la%20participation%20du%20jeune%20Carl%20Sagan%20%3F"
 },
 {
  "text": "Dans les années 1960, la CIA a implanté un micro et un émetteur radio dans un chat pour espionner les Soviétiques : le projet « Acoustic Kitty » fut abandonné en 1967.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans les années 1960, la CIA a implanté un micro et un émetteur radio dans un chat pour espionner les Soviétiques : le projet « Acoustic Kitty » fut abandonné en 1967 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20les%20ann%C3%A9es%201960%2C%20la%20CIA%20a%20implant%C3%A9%20un%20micro%20et%20un%20%C3%A9metteur%20radio%20dans%20un%20chat%20pour%20espionner%20les%20Sovi%C3%A9tiques%20%3A%20le%20projet%20%C2%AB%20Acoustic%20Kitty%20%C2%BB%20fut%20abandonn%C3%A9%20en%201967%20%3F"
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, les États-Unis ont développé des bombes remplies de chauves-souris équipées de mini-charges incendiaires, qui ont accidentellement brûlé leur propre base d'essai en 1943.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, les États-Unis ont développé des bombes remplies de chauves-souris équipées de mini-charges incendiaires, qui ont accidentellement brûlé leur propre base d'essai en 1943 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20les%20%C3%89tats-Unis%20ont%20d%C3%A9velopp%C3%A9%20des%20bombes%20remplies%20de%20chauves-souris%20%C3%A9quip%C3%A9es%20de%20mini-charges%20incendiaires%2C%20qui%20ont%20accidentellement%20br%C3%BBl%C3%A9%20leur%20propre%20base%20d'essai%20en%201943%20%3F"
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, le psychologue B. F. Skinner a conçu une bombe planante guidée par des pigeons qui picoraient l'image de la cible projetée sur un écran dans le nez de l'engin.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, le psychologue B. F. Skinner a conçu une bombe planante guidée par des pigeons qui picoraient l'image de la cible projetée sur un écran dans le nez de l'engin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20le%20psychologue%20B.%20F.%20Skinner%20a%20con%C3%A7u%20une%20bombe%20planante%20guid%C3%A9e%20par%20des%20pigeons%20qui%20picoraient%20l'image%20de%20la%20cible%20projet%C3%A9e%20sur%20un%20%C3%A9cran%20dans%20le%20nez%20de%20l'engin%20%3F"
 },
 {
  "text": "Les Britanniques ont envisagé pendant la Seconde Guerre mondiale un porte-avions de 600 mètres fait de pykrète, un mélange de glace et de pâte de bois, et un prototype a été construit au Canada.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Britanniques ont envisagé pendant la Seconde Guerre mondiale un porte-avions de 600 mètres fait de pykrète, un mélange de glace et de pâte de bois, et un prototype a été construit au Canada ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Britanniques%20ont%20envisag%C3%A9%20pendant%20la%20Seconde%20Guerre%20mondiale%20un%20porte-avions%20de%20600%20m%C3%A8tres%20fait%20de%20pykr%C3%A8te%2C%20un%20m%C3%A9lange%20de%20glace%20et%20de%20p%C3%A2te%20de%20bois%2C%20et%20un%20prototype%20a%20%C3%A9t%C3%A9%20construit%20au%20Canada%20%3F"
 },
 {
  "text": "Le 3 septembre 1967, toute la Suède est passée de la conduite à gauche à la droite : à 4 h 50, tous les véhicules ont dû s'arrêter, changer de côté, puis attendre 5 h pour repartir.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 3 septembre 1967, toute la Suède est passée de la conduite à gauche à la droite : à 4 h 50, tous les véhicules ont dû s'arrêter, changer de côté, puis attendre 5 h pour repartir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%203%20septembre%201967%2C%20toute%20la%20Su%C3%A8de%20est%20pass%C3%A9e%20de%20la%20conduite%20%C3%A0%20gauche%20%C3%A0%20la%20droite%20%3A%20%C3%A0%204%20h%2050%2C%20tous%20les%20v%C3%A9hicules%20ont%20d%C3%BB%20s'arr%C3%AAter%2C%20changer%20de%20c%C3%B4t%C3%A9%2C%20puis%20attendre%205%20h%20pour%20repartir%20%3F"
 },
 {
  "text": "En 1978, le cercueil de Charlie Chaplin a été volé dans un cimetière suisse par deux hommes qui réclamaient une rançon à sa veuve, puis retrouvé enterré dans un champ de maïs.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1978, le cercueil de Charlie Chaplin a été volé dans un cimetière suisse par deux hommes qui réclamaient une rançon à sa veuve, puis retrouvé enterré dans un champ de maïs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201978%2C%20le%20cercueil%20de%20Charlie%20Chaplin%20a%20%C3%A9t%C3%A9%20vol%C3%A9%20dans%20un%20cimeti%C3%A8re%20suisse%20par%20deux%20hommes%20qui%20r%C3%A9clamaient%20une%20ran%C3%A7on%20%C3%A0%20sa%20veuve%2C%20puis%20retrouv%C3%A9%20enterr%C3%A9%20dans%20un%20champ%20de%20ma%C3%AFs%20%3F"
 },
 {
  "text": "Le général mexicain Santa Anna a fait enterrer sa jambe amputée avec les honneurs militaires, avant qu'une foule ne la déterre et la traîne dans les rues en 1844.",
  "source": "Perplexity",
  "question": "Est-il vrai que le général mexicain Santa Anna a fait enterrer sa jambe amputée avec les honneurs militaires, avant qu'une foule ne la déterre et la traîne dans les rues en 1844 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20g%C3%A9n%C3%A9ral%20mexicain%20Santa%20Anna%20a%20fait%20enterrer%20sa%20jambe%20amput%C3%A9e%20avec%20les%20honneurs%20militaires%2C%20avant%20qu'une%20foule%20ne%20la%20d%C3%A9terre%20et%20la%20tra%C3%AEne%20dans%20les%20rues%20en%201844%20%3F"
 },
 {
  "text": "Le Fanta a été inventé pendant la Seconde Guerre mondiale en Allemagne nazie par la filiale de Coca-Cola, privée du sirop américain, à partir notamment de petit-lait et de résidus de pommes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Fanta a été inventé pendant la Seconde Guerre mondiale en Allemagne nazie par la filiale de Coca-Cola, privée du sirop américain, à partir notamment de petit-lait et de résidus de pommes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Fanta%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20pendant%20la%20Seconde%20Guerre%20mondiale%20en%20Allemagne%20nazie%20par%20la%20filiale%20de%20Coca-Cola%2C%20priv%C3%A9e%20du%20sirop%20am%C3%A9ricain%2C%20%C3%A0%20partir%20notamment%20de%20petit-lait%20et%20de%20r%C3%A9sidus%20de%20pommes%20%3F"
 },
 {
  "text": "La première condamnation pour excès de vitesse date de 1896 en Angleterre : Walter Arnold roulait à 13 km/h au lieu de 3 et fut rattrapé par un policier à vélo après une course-poursuite.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première condamnation pour excès de vitesse date de 1896 en Angleterre : Walter Arnold roulait à 13 km/h au lieu de 3 et fut rattrapé par un policier à vélo après une course-poursuite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20condamnation%20pour%20exc%C3%A8s%20de%20vitesse%20date%20de%201896%20en%20Angleterre%20%3A%20Walter%20Arnold%20roulait%20%C3%A0%2013%20km%2Fh%20au%20lieu%20de%203%20et%20fut%20rattrap%C3%A9%20par%20un%20policier%20%C3%A0%20v%C3%A9lo%20apr%C3%A8s%20une%20course-poursuite%20%3F"
 },
 {
  "text": "En mai 1920, le président Paul Deschanel est tombé de la fenêtre de son train de nuit près de Montargis et s'est présenté en pyjama à un cheminot sceptique, puis à des gardes-barrière.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en mai 1920, le président Paul Deschanel est tombé de la fenêtre de son train de nuit près de Montargis et s'est présenté en pyjama à un cheminot sceptique, puis à des gardes-barrière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20mai%201920%2C%20le%20pr%C3%A9sident%20Paul%20Deschanel%20est%20tomb%C3%A9%20de%20la%20fen%C3%AAtre%20de%20son%20train%20de%20nuit%20pr%C3%A8s%20de%20Montargis%20et%20s'est%20pr%C3%A9sent%C3%A9%20en%20pyjama%20%C3%A0%20un%20cheminot%20sceptique%2C%20puis%20%C3%A0%20des%20gardes-barri%C3%A8re%20%3F"
 },
 {
  "text": "En 1567, Hans Staininger, bourgmestre de Braunau, est mort en se brisant le cou après avoir trébuché sur sa propre barbe, longue de 1,4 mètre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1567, Hans Staininger, bourgmestre de Braunau, est mort en se brisant le cou après avoir trébuché sur sa propre barbe, longue de 1,4 mètre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201567%2C%20Hans%20Staininger%2C%20bourgmestre%20de%20Braunau%2C%20est%20mort%20en%20se%20brisant%20le%20cou%20apr%C3%A8s%20avoir%20tr%C3%A9buch%C3%A9%20sur%20sa%20propre%20barbe%2C%20longue%20de%201%2C4%20m%C3%A8tre%20%3F"
 },
 {
  "text": "Les chiens étant interdits à Trinity College, à Cambridge, Lord Byron y garda à la place un ours apprivoisé, suggérant même en plaisantant qu'il pourrait y obtenir un poste de fellow.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chiens étant interdits à Trinity College, à Cambridge, Lord Byron y garda à la place un ours apprivoisé, suggérant même en plaisantant qu'il pourrait y obtenir un poste de fellow ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chiens%20%C3%A9tant%20interdits%20%C3%A0%20Trinity%20College%2C%20%C3%A0%20Cambridge%2C%20Lord%20Byron%20y%20garda%20%C3%A0%20la%20place%20un%20ours%20apprivois%C3%A9%2C%20sugg%C3%A9rant%20m%C3%AAme%20en%20plaisantant%20qu'il%20pourrait%20y%20obtenir%20un%20poste%20de%20fellow%20%3F"
 },
 {
  "text": "Mozart a composé en 1782 un canon à six voix intitulé « Leck mich im Arsch », soit « Lèche-moi le cul », que ses éditeurs rebaptisèrent après sa mort.",
  "source": "Perplexity",
  "question": "Est-il vrai que mozart a composé en 1782 un canon à six voix intitulé « Leck mich im Arsch », soit « Lèche-moi le cul », que ses éditeurs rebaptisèrent après sa mort ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20mozart%20a%20compos%C3%A9%20en%201782%20un%20canon%20%C3%A0%20six%20voix%20intitul%C3%A9%20%C2%AB%20Leck%20mich%20im%20Arsch%20%C2%BB%2C%20soit%20%C2%AB%20L%C3%A8che-moi%20le%20cul%20%C2%BB%2C%20que%20ses%20%C3%A9diteurs%20rebaptis%C3%A8rent%20apr%C3%A8s%20sa%20mort%20%3F"
 },
 {
  "text": "Thomas Midgley, inventeur de l'essence au plomb et des CFC, est mort en 1944 étranglé par le système de cordes et de poulies qu'il avait conçu pour sortir de son lit (le coroner a conclu au suicide).",
  "source": "Perplexity",
  "question": "Est-il vrai que thomas Midgley, inventeur de l'essence au plomb et des CFC, est mort en 1944 étranglé par le système de cordes et de poulies qu'il avait conçu pour sortir de son lit (le coroner a conclu au suicide) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20thomas%20Midgley%2C%20inventeur%20de%20l'essence%20au%20plomb%20et%20des%20CFC%2C%20est%20mort%20en%201944%20%C3%A9trangl%C3%A9%20par%20le%20syst%C3%A8me%20de%20cordes%20et%20de%20poulies%20qu'il%20avait%20con%C3%A7u%20pour%20sortir%20de%20son%20lit%20(le%20coroner%20a%20conclu%20au%20suicide)%20%3F"
 },
 {
  "text": "En 1961, un B-52 s'est disloqué au-dessus de la Caroline du Nord en larguant deux bombes H de 3,8 mégatonnes, et sur l'une d'elles un seul interrupteur a empêché l'explosion.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1961, un B-52 s'est disloqué au-dessus de la Caroline du Nord en larguant deux bombes H de 3,8 mégatonnes, et sur l'une d'elles un seul interrupteur a empêché l'explosion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201961%2C%20un%20B-52%20s'est%20disloqu%C3%A9%20au-dessus%20de%20la%20Caroline%20du%20Nord%20en%20larguant%20deux%20bombes%20H%20de%203%2C8%20m%C3%A9gatonnes%2C%20et%20sur%20l'une%20d'elles%20un%20seul%20interrupteur%20a%20emp%C3%AAch%C3%A9%20l'explosion%20%3F"
 },
 {
  "text": "De 1814 à 1846, un éléphant en plâtre de 24 mètres de haut, maquette d'un monument voulu par Napoléon, s'est dressé place de la Bastille, jusqu'à être envahi par les rats.",
  "source": "Perplexity",
  "question": "Est-il vrai que de 1814 à 1846, un éléphant en plâtre de 24 mètres de haut, maquette d'un monument voulu par Napoléon, s'est dressé place de la Bastille, jusqu'à être envahi par les rats ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20de%201814%20%C3%A0%201846%2C%20un%20%C3%A9l%C3%A9phant%20en%20pl%C3%A2tre%20de%2024%20m%C3%A8tres%20de%20haut%2C%20maquette%20d'un%20monument%20voulu%20par%20Napol%C3%A9on%2C%20s'est%20dress%C3%A9%20place%20de%20la%20Bastille%2C%20jusqu'%C3%A0%20%C3%AAtre%20envahi%20par%20les%20rats%20%3F"
 },
 {
  "text": "En 1386 à Falaise, une truie qui avait tué un enfant a été jugée, mutilée au visage et aux pattes comme sa victime, puis pendue publiquement.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1386 à Falaise, une truie qui avait tué un enfant a été jugée, mutilée au visage et aux pattes comme sa victime, puis pendue publiquement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201386%20%C3%A0%20Falaise%2C%20une%20truie%20qui%20avait%20tu%C3%A9%20un%20enfant%20a%20%C3%A9t%C3%A9%20jug%C3%A9e%2C%20mutil%C3%A9e%20au%20visage%20et%20aux%20pattes%20comme%20sa%20victime%2C%20puis%20pendue%20publiquement%20%3F"
 },
 {
  "text": "Lors du vol de la Joconde en 1911, le poète Guillaume Apollinaire fut emprisonné et Pablo Picasso interrogé, alors que le voleur était un ancien employé du Louvre, Vincenzo Peruggia.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors du vol de la Joconde en 1911, le poète Guillaume Apollinaire fut emprisonné et Pablo Picasso interrogé, alors que le voleur était un ancien employé du Louvre, Vincenzo Peruggia ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20du%20vol%20de%20la%20Joconde%20en%201911%2C%20le%20po%C3%A8te%20Guillaume%20Apollinaire%20fut%20emprisonn%C3%A9%20et%20Pablo%20Picasso%20interrog%C3%A9%2C%20alors%20que%20le%20voleur%20%C3%A9tait%20un%20ancien%20employ%C3%A9%20du%20Louvre%2C%20Vincenzo%20Peruggia%20%3F"
 },
 {
  "text": "Lors des funérailles de Guillaume le Conquérant en 1087, son corps trop gros pour le sarcophage éclata quand on voulut l'y forcer, selon le chroniqueur Orderic Vital.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors des funérailles de Guillaume le Conquérant en 1087, son corps trop gros pour le sarcophage éclata quand on voulut l'y forcer, selon le chroniqueur Orderic Vital ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20des%20fun%C3%A9railles%20de%20Guillaume%20le%20Conqu%C3%A9rant%20en%201087%2C%20son%20corps%20trop%20gros%20pour%20le%20sarcophage%20%C3%A9clata%20quand%20on%20voulut%20l'y%20forcer%2C%20selon%20le%20chroniqueur%20Orderic%20Vital%20%3F"
 },
 {
  "text": "Sous la Révolution française, les journées ont officiellement été découpées en 10 heures de 100 minutes de 100 secondes, avant que cette heure décimale soit suspendue en 1795.",
  "source": "Perplexity",
  "question": "Est-il vrai que sous la Révolution française, les journées ont officiellement été découpées en 10 heures de 100 minutes de 100 secondes, avant que cette heure décimale soit suspendue en 1795 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sous%20la%20R%C3%A9volution%20fran%C3%A7aise%2C%20les%20journ%C3%A9es%20ont%20officiellement%20%C3%A9t%C3%A9%20d%C3%A9coup%C3%A9es%20en%2010%20heures%20de%20100%20minutes%20de%20100%20secondes%2C%20avant%20que%20cette%20heure%20d%C3%A9cimale%20soit%20suspendue%20en%201795%20%3F"
 },
 {
  "text": "En 1393, lors du Bal des Ardents, des danseurs déguisés en hommes sauvages prirent feu ; le roi Charles VI ne fut sauvé que parce que la duchesse de Berry le couvrit de sa robe.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1393, lors du Bal des Ardents, des danseurs déguisés en hommes sauvages prirent feu ; le roi Charles VI ne fut sauvé que parce que la duchesse de Berry le couvrit de sa robe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201393%2C%20lors%20du%20Bal%20des%20Ardents%2C%20des%20danseurs%20d%C3%A9guis%C3%A9s%20en%20hommes%20sauvages%20prirent%20feu%20%3B%20le%20roi%20Charles%20VI%20ne%20fut%20sauv%C3%A9%20que%20parce%20que%20la%20duchesse%20de%20Berry%20le%20couvrit%20de%20sa%20robe%20%3F"
 },
 {
  "text": "Bir Tawil, désert de 2 060 km² entre l'Égypte et le Soudan, n'est revendiqué par aucun des deux : le réclamer leur ferait perdre leurs droits sur le triangle de Halaïb, voisin et plus riche.",
  "source": "Perplexity",
  "question": "Est-il vrai que bir Tawil, désert de 2 060 km² entre l'Égypte et le Soudan, n'est revendiqué par aucun des deux : le réclamer leur ferait perdre leurs droits sur le triangle de Halaïb, voisin et plus riche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20bir%20Tawil%2C%20d%C3%A9sert%20de%202%20060%20km%C2%B2%20entre%20l'%C3%89gypte%20et%20le%20Soudan%2C%20n'est%20revendiqu%C3%A9%20par%20aucun%20des%20deux%20%3A%20le%20r%C3%A9clamer%20leur%20ferait%20perdre%20leurs%20droits%20sur%20le%20triangle%20de%20Hala%C3%AFb%2C%20voisin%20et%20plus%20riche%20%3F"
 },
 {
  "text": "L'île des Faisans, sur la Bidassoa, change d'administration tous les six mois : espagnole du 1er février au 31 juillet, française du 1er août au 31 janvier, en vertu d'un accord de 1901.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'île des Faisans, sur la Bidassoa, change d'administration tous les six mois : espagnole du 1er février au 31 juillet, française du 1er août au 31 janvier, en vertu d'un accord de 1901 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%AEle%20des%20Faisans%2C%20sur%20la%20Bidassoa%2C%20change%20d'administration%20tous%20les%20six%20mois%20%3A%20espagnole%20du%201er%20f%C3%A9vrier%20au%2031%20juillet%2C%20fran%C3%A7aise%20du%201er%20ao%C3%BBt%20au%2031%20janvier%2C%20en%20vertu%20d'un%20accord%20de%201901%20%3F"
 },
 {
  "text": "Les 1 191 habitants de Point Roberts, aux États-Unis, doivent traverser 40 km de Canada, et donc deux frontières, pour rejoindre par la route le reste de leur pays.",
  "source": "Perplexity",
  "question": "Est-il vrai que les 1 191 habitants de Point Roberts, aux États-Unis, doivent traverser 40 km de Canada, et donc deux frontières, pour rejoindre par la route le reste de leur pays ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%201%20191%20habitants%20de%20Point%20Roberts%2C%20aux%20%C3%89tats-Unis%2C%20doivent%20traverser%2040%20km%20de%20Canada%2C%20et%20donc%20deux%20fronti%C3%A8res%2C%20pour%20rejoindre%20par%20la%20route%20le%20reste%20de%20leur%20pays%20%3F"
 },
 {
  "text": "Llívia est une ville espagnole encerclée par la France : en 1659, l'Espagne a cédé les « villages » de Cerdagne, et Llívia, ancienne capitale, avait juridiquement le statut de « ville ».",
  "source": "Perplexity",
  "question": "Est-il vrai que llívia est une ville espagnole encerclée par la France : en 1659, l'Espagne a cédé les « villages » de Cerdagne, et Llívia, ancienne capitale, avait juridiquement le statut de « ville » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20ll%C3%ADvia%20est%20une%20ville%20espagnole%20encercl%C3%A9e%20par%20la%20France%20%3A%20en%201659%2C%20l'Espagne%20a%20c%C3%A9d%C3%A9%20les%20%C2%AB%20villages%20%C2%BB%20de%20Cerdagne%2C%20et%20Ll%C3%ADvia%2C%20ancienne%20capitale%2C%20avait%20juridiquement%20le%20statut%20de%20%C2%AB%20ville%20%C2%BB%20%3F"
 },
 {
  "text": "À Singapour, la vente de chewing-gum est interdite depuis le 3 janvier 1992 ; seuls les chewing-gums thérapeutiques sont tolérés depuis 2004, en pharmacie et avec enregistrement de l'acheteur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Singapour, la vente de chewing-gum est interdite depuis le 3 janvier 1992 ; seuls les chewing-gums thérapeutiques sont tolérés depuis 2004, en pharmacie et avec enregistrement de l'acheteur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Singapour%2C%20la%20vente%20de%20chewing-gum%20est%20interdite%20depuis%20le%203%20janvier%201992%20%3B%20seuls%20les%20chewing-gums%20th%C3%A9rapeutiques%20sont%20tol%C3%A9r%C3%A9s%20depuis%202004%2C%20en%20pharmacie%20et%20avec%20enregistrement%20de%20l'acheteur%20%3F"
 },
 {
  "text": "À Longyearbyen, au Svalbard, on n'enterre plus de corps depuis 1950 : le permafrost les empêche de se décomposer. Les défunts sont inhumés sur le continent norvégien.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Longyearbyen, au Svalbard, on n'enterre plus de corps depuis 1950 : le permafrost les empêche de se décomposer. Les défunts sont inhumés sur le continent norvégien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Longyearbyen%2C%20au%20Svalbard%2C%20on%20n'enterre%20plus%20de%20corps%20depuis%201950%20%3A%20le%20permafrost%20les%20emp%C3%AAche%20de%20se%20d%C3%A9composer.%20Les%20d%C3%A9funts%20sont%20inhum%C3%A9s%20sur%20le%20continent%20norv%C3%A9gien%20%3F"
 },
 {
  "text": "L'archipel norvégien du Svalbard est une zone entièrement sans visa : les ressortissants des 49 États parties au traité de 1920 peuvent s'y installer et y travailler librement.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'archipel norvégien du Svalbard est une zone entièrement sans visa : les ressortissants des 49 États parties au traité de 1920 peuvent s'y installer et y travailler librement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'archipel%20norv%C3%A9gien%20du%20Svalbard%20est%20une%20zone%20enti%C3%A8rement%20sans%20visa%20%3A%20les%20ressortissants%20des%2049%20%C3%89tats%20parties%20au%20trait%C3%A9%20de%201920%20peuvent%20s'y%20installer%20et%20y%20travailler%20librement%20%3F"
 },
 {
  "text": "Vulcan Point, aux Philippines, est une île dans un lac, sur une île, dans un lac, sur une île : le lac du cratère du Taal, sur Volcano Island, dans le lac Taal, sur l'île de Luçon.",
  "source": "Perplexity",
  "question": "Est-il vrai que vulcan Point, aux Philippines, est une île dans un lac, sur une île, dans un lac, sur une île : le lac du cratère du Taal, sur Volcano Island, dans le lac Taal, sur l'île de Luçon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vulcan%20Point%2C%20aux%20Philippines%2C%20est%20une%20%C3%AEle%20dans%20un%20lac%2C%20sur%20une%20%C3%AEle%2C%20dans%20un%20lac%2C%20sur%20une%20%C3%AEle%20%3A%20le%20lac%20du%20crat%C3%A8re%20du%20Taal%2C%20sur%20Volcano%20Island%2C%20dans%20le%20lac%20Taal%2C%20sur%20l'%C3%AEle%20de%20Lu%C3%A7on%20%3F"
 },
 {
  "text": "Pendant des décennies, le Canada et le Danemark se sont disputé l'île Hans en y laissant tour à tour drapeaux, whisky et schnaps, avant de la couper en deux en juin 2022.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant des décennies, le Canada et le Danemark se sont disputé l'île Hans en y laissant tour à tour drapeaux, whisky et schnaps, avant de la couper en deux en juin 2022 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20des%20d%C3%A9cennies%2C%20le%20Canada%20et%20le%20Danemark%20se%20sont%20disput%C3%A9%20l'%C3%AEle%20Hans%20en%20y%20laissant%20tour%20%C3%A0%20tour%20drapeaux%2C%20whisky%20et%20schnaps%2C%20avant%20de%20la%20couper%20en%20deux%20en%20juin%202022%20%3F"
 },
 {
  "text": "En Finlande, les amendes sont calculées selon les revenus : en 2023, le millionnaire Anders Wiklöf a dû payer 121 000 € pour avoir roulé à 82 km/h au lieu de 50.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en Finlande, les amendes sont calculées selon les revenus : en 2023, le millionnaire Anders Wiklöf a dû payer 121 000 € pour avoir roulé à 82 km/h au lieu de 50 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20Finlande%2C%20les%20amendes%20sont%20calcul%C3%A9es%20selon%20les%20revenus%20%3A%20en%202023%2C%20le%20millionnaire%20Anders%20Wikl%C3%B6f%20a%20d%C3%BB%20payer%20121%20000%20%E2%82%AC%20pour%20avoir%20roul%C3%A9%20%C3%A0%2082%20km%2Fh%20au%20lieu%20de%2050%20%3F"
 },
 {
  "text": "Monowi, au Nebraska, compte une seule habitante, Elsie Eiler, à la fois maire, secrétaire, trésorière et bibliothécaire, qui s'est délivré à elle-même sa licence de débit de boissons.",
  "source": "Perplexity",
  "question": "Est-il vrai que monowi, au Nebraska, compte une seule habitante, Elsie Eiler, à la fois maire, secrétaire, trésorière et bibliothécaire, qui s'est délivré à elle-même sa licence de débit de boissons ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20monowi%2C%20au%20Nebraska%2C%20compte%20une%20seule%20habitante%2C%20Elsie%20Eiler%2C%20%C3%A0%20la%20fois%20maire%2C%20secr%C3%A9taire%2C%20tr%C3%A9sori%C3%A8re%20et%20biblioth%C3%A9caire%2C%20qui%20s'est%20d%C3%A9livr%C3%A9%20%C3%A0%20elle-m%C3%AAme%20sa%20licence%20de%20d%C3%A9bit%20de%20boissons%20%3F"
 },
 {
  "text": "À Whittier, en Alaska, presque toute la population vit dans un seul immeuble, Begich Towers, qui abrite aussi la poste, une épicerie, une laverie et une église.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Whittier, en Alaska, presque toute la population vit dans un seul immeuble, Begich Towers, qui abrite aussi la poste, une épicerie, une laverie et une église ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Whittier%2C%20en%20Alaska%2C%20presque%20toute%20la%20population%20vit%20dans%20un%20seul%20immeuble%2C%20Begich%20Towers%2C%20qui%20abrite%20aussi%20la%20poste%2C%20une%20%C3%A9picerie%2C%20une%20laverie%20et%20une%20%C3%A9glise%20%3F"
 },
 {
  "text": "Les États-Unis envoient chaque année à Cuba un chèque de 4 085 dollars pour le loyer de Guantánamo, mais Cuba n'en a encaissé qu'un seul depuis la révolution, en 1959.",
  "source": "Perplexity",
  "question": "Est-il vrai que les États-Unis envoient chaque année à Cuba un chèque de 4 085 dollars pour le loyer de Guantánamo, mais Cuba n'en a encaissé qu'un seul depuis la révolution, en 1959 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%89tats-Unis%20envoient%20chaque%20ann%C3%A9e%20%C3%A0%20Cuba%20un%20ch%C3%A8que%20de%204%20085%20dollars%20pour%20le%20loyer%20de%20Guant%C3%A1namo%2C%20mais%20Cuba%20n'en%20a%20encaiss%C3%A9%20qu'un%20seul%20depuis%20la%20r%C3%A9volution%2C%20en%201959%20%3F"
 },
 {
  "text": "Une colline de 305 mètres en Nouvelle-Zélande porte un nom maori de 85 lettres : Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une colline de 305 mètres en Nouvelle-Zélande porte un nom maori de 85 lettres : Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20colline%20de%20305%20m%C3%A8tres%20en%20Nouvelle-Z%C3%A9lande%20porte%20un%20nom%20maori%20de%2085%20lettres%20%3A%20Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu%20%3F"
 },
 {
  "text": "Une commune de la Somme s'appelle simplement Y, et ses 87 habitants sont appelés les Ypsiloniens.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une commune de la Somme s'appelle simplement Y, et ses 87 habitants sont appelés les Ypsiloniens ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20commune%20de%20la%20Somme%20s'appelle%20simplement%20Y%2C%20et%20ses%2087%20habitants%20sont%20appel%C3%A9s%20les%20Ypsiloniens%20%3F"
 },
 {
  "text": "La plus longue frontière terrestre de la France est celle qu'elle partage avec le Brésil, via la Guyane : 730 km, contre 623 km avec l'Espagne.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus longue frontière terrestre de la France est celle qu'elle partage avec le Brésil, via la Guyane : 730 km, contre 623 km avec l'Espagne ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20longue%20fronti%C3%A8re%20terrestre%20de%20la%20France%20est%20celle%20qu'elle%20partage%20avec%20le%20Br%C3%A9sil%2C%20via%20la%20Guyane%20%3A%20730%20km%2C%20contre%20623%20km%20avec%20l'Espagne%20%3F"
 },
 {
  "text": "Le Peñón de Vélez de la Gomera, rocher espagnol, est relié au Maroc depuis qu'une tempête de 1930 a formé un isthme de sable, créant une frontière terrestre de seulement 85 mètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Peñón de Vélez de la Gomera, rocher espagnol, est relié au Maroc depuis qu'une tempête de 1930 a formé un isthme de sable, créant une frontière terrestre de seulement 85 mètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Pe%C3%B1%C3%B3n%20de%20V%C3%A9lez%20de%20la%20Gomera%2C%20rocher%20espagnol%2C%20est%20reli%C3%A9%20au%20Maroc%20depuis%20qu'une%20temp%C3%AAte%20de%201930%20a%20form%C3%A9%20un%20isthme%20de%20sable%2C%20cr%C3%A9ant%20une%20fronti%C3%A8re%20terrestre%20de%20seulement%2085%20m%C3%A8tres%20%3F"
 },
 {
  "text": "Jusqu'en mars 2023, la principale route d'accès à Gibraltar traversait la piste de l'aéroport et était fermée plus de 15 fois par jour pour laisser passer les avions.",
  "source": "Perplexity",
  "question": "Est-il vrai que jusqu'en mars 2023, la principale route d'accès à Gibraltar traversait la piste de l'aéroport et était fermée plus de 15 fois par jour pour laisser passer les avions ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20jusqu'en%20mars%202023%2C%20la%20principale%20route%20d'acc%C3%A8s%20%C3%A0%20Gibraltar%20traversait%20la%20piste%20de%20l'a%C3%A9roport%20et%20%C3%A9tait%20ferm%C3%A9e%20plus%20de%2015%20fois%20par%20jour%20pour%20laisser%20passer%20les%20avions%20%3F"
 },
 {
  "text": "Berne n'est pas officiellement la capitale de la Suisse : aucun texte ne lui donne ce titre, elle n'a que le statut de « ville fédérale », siège du gouvernement.",
  "source": "Perplexity",
  "question": "Est-il vrai que berne n'est pas officiellement la capitale de la Suisse : aucun texte ne lui donne ce titre, elle n'a que le statut de « ville fédérale », siège du gouvernement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20berne%20n'est%20pas%20officiellement%20la%20capitale%20de%20la%20Suisse%20%3A%20aucun%20texte%20ne%20lui%20donne%20ce%20titre%2C%20elle%20n'a%20que%20le%20statut%20de%20%C2%AB%20ville%20f%C3%A9d%C3%A9rale%20%C2%BB%2C%20si%C3%A8ge%20du%20gouvernement%20%3F"
 },
 {
  "text": "Les citoyens monégasques ont l'interdiction d'entrer dans les salles de jeu du casino de Monte-Carlo.",
  "source": "Perplexity",
  "question": "Est-il vrai que les citoyens monégasques ont l'interdiction d'entrer dans les salles de jeu du casino de Monte-Carlo ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20citoyens%20mon%C3%A9gasques%20ont%20l'interdiction%20d'entrer%20dans%20les%20salles%20de%20jeu%20du%20casino%20de%20Monte-Carlo%20%3F"
 },
 {
  "text": "Monaco, deuxième plus petit État du monde avec 2,08 km², est plus petit que Central Park à New York, qui s'étend sur 3,41 km².",
  "source": "Perplexity",
  "question": "Est-il vrai que monaco, deuxième plus petit État du monde avec 2,08 km², est plus petit que Central Park à New York, qui s'étend sur 3,41 km² ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20monaco%2C%20deuxi%C3%A8me%20plus%20petit%20%C3%89tat%20du%20monde%20avec%202%2C08%20km%C2%B2%2C%20est%20plus%20petit%20que%20Central%20Park%20%C3%A0%20New%20York%2C%20qui%20s'%C3%A9tend%20sur%203%2C41%20km%C2%B2%20%3F"
 },
 {
  "text": "Au Québec, Saint-Louis-du-Ha! Ha! détient depuis 2017 le record Guinness du nom de ville comptant le plus de points d'exclamation : deux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au Québec, Saint-Louis-du-Ha! Ha! détient depuis 2017 le record Guinness du nom de ville comptant le plus de points d'exclamation : deux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20Qu%C3%A9bec%2C%20Saint-Louis-du-Ha!%20Ha!%20d%C3%A9tient%20depuis%202017%20le%20record%20Guinness%20du%20nom%20de%20ville%20comptant%20le%20plus%20de%20points%20d'exclamation%20%3A%20deux%20%3F"
 },
 {
  "text": "Le parc national du Nord-Est du Groenland couvre 972 000 km², ce qui le rend plus grand que 166 des 195 pays du monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le parc national du Nord-Est du Groenland couvre 972 000 km², ce qui le rend plus grand que 166 des 195 pays du monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20parc%20national%20du%20Nord-Est%20du%20Groenland%20couvre%20972%20000%20km%C2%B2%2C%20ce%20qui%20le%20rend%20plus%20grand%20que%20166%20des%20195%20pays%20du%20monde%20%3F"
 },
 {
  "text": "À Churchill, au Manitoba, les ours polaires qui s'approchent trop de la ville sont enfermés dans une « prison à ours » jusqu'à ce que la baie d'Hudson gèle, puis relâchés.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Churchill, au Manitoba, les ours polaires qui s'approchent trop de la ville sont enfermés dans une « prison à ours » jusqu'à ce que la baie d'Hudson gèle, puis relâchés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Churchill%2C%20au%20Manitoba%2C%20les%20ours%20polaires%20qui%20s'approchent%20trop%20de%20la%20ville%20sont%20enferm%C3%A9s%20dans%20une%20%C2%AB%20prison%20%C3%A0%20ours%20%C2%BB%20jusqu'%C3%A0%20ce%20que%20la%20baie%20d'Hudson%20g%C3%A8le%2C%20puis%20rel%C3%A2ch%C3%A9s%20%3F"
 },
 {
  "text": "Un chat nommé Stubbs a été le « maire » honoraire de Talkeetna, en Alaska, pendant 20 ans, de 1997 jusqu'à sa mort en 2017.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un chat nommé Stubbs a été le « maire » honoraire de Talkeetna, en Alaska, pendant 20 ans, de 1997 jusqu'à sa mort en 2017 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20chat%20nomm%C3%A9%20Stubbs%20a%20%C3%A9t%C3%A9%20le%20%C2%AB%20maire%20%C2%BB%20honoraire%20de%20Talkeetna%2C%20en%20Alaska%2C%20pendant%2020%20ans%2C%20de%201997%20jusqu'%C3%A0%20sa%20mort%20en%202017%20%3F"
 },
 {
  "text": "Dans le village japonais de Nagoro, Tsukimi Ayano a fabriqué plus de 400 poupées ; environ 350 peuplent les rues, soit plus de dix fois le nombre d'habitants restants.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans le village japonais de Nagoro, Tsukimi Ayano a fabriqué plus de 400 poupées ; environ 350 peuplent les rues, soit plus de dix fois le nombre d'habitants restants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20le%20village%20japonais%20de%20Nagoro%2C%20Tsukimi%20Ayano%20a%20fabriqu%C3%A9%20plus%20de%20400%20poup%C3%A9es%20%3B%20environ%20350%20peuplent%20les%20rues%2C%20soit%20plus%20de%20dix%20fois%20le%20nombre%20d'habitants%20restants%20%3F"
 },
 {
  "text": "Le drapeau du Paraguay est le seul drapeau national dont les deux faces diffèrent : le sceau national d'un côté, le sceau du Trésor avec un lion de l'autre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le drapeau du Paraguay est le seul drapeau national dont les deux faces diffèrent : le sceau national d'un côté, le sceau du Trésor avec un lion de l'autre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20drapeau%20du%20Paraguay%20est%20le%20seul%20drapeau%20national%20dont%20les%20deux%20faces%20diff%C3%A8rent%20%3A%20le%20sceau%20national%20d'un%20c%C3%B4t%C3%A9%2C%20le%20sceau%20du%20Tr%C3%A9sor%20avec%20un%20lion%20de%20l'autre%20%3F"
 },
 {
  "text": "Le drapeau du Mozambique est le seul drapeau national à représenter un fusil d'assaut moderne : une kalachnikov AK-47 avec sa baïonnette.",
  "source": "Perplexity",
  "question": "Est-il vrai que le drapeau du Mozambique est le seul drapeau national à représenter un fusil d'assaut moderne : une kalachnikov AK-47 avec sa baïonnette ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20drapeau%20du%20Mozambique%20est%20le%20seul%20drapeau%20national%20%C3%A0%20repr%C3%A9senter%20un%20fusil%20d'assaut%20moderne%20%3A%20une%20kalachnikov%20AK-47%20avec%20sa%20ba%C3%AFonnette%20%3F"
 },
 {
  "text": "Le vendredi 30 décembre 2011 n'a jamais existé aux Samoa : le pays a sauté ce jour en passant de l'autre côté de la ligne de changement de date.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vendredi 30 décembre 2011 n'a jamais existé aux Samoa : le pays a sauté ce jour en passant de l'autre côté de la ligne de changement de date ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20vendredi%2030%20d%C3%A9cembre%202011%20n'a%20jamais%20exist%C3%A9%20aux%20Samoa%20%3A%20le%20pays%20a%20saut%C3%A9%20ce%20jour%20en%20passant%20de%20l'autre%20c%C3%B4t%C3%A9%20de%20la%20ligne%20de%20changement%20de%20date%20%3F"
 },
 {
  "text": "En passant de la Chine à l'Afghanistan par le col de Wakhjir, il faut reculer sa montre de 3 h 30, le plus grand changement d'heure à une frontière terrestre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en passant de la Chine à l'Afghanistan par le col de Wakhjir, il faut reculer sa montre de 3 h 30, le plus grand changement d'heure à une frontière terrestre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20passant%20de%20la%20Chine%20%C3%A0%20l'Afghanistan%20par%20le%20col%20de%20Wakhjir%2C%20il%20faut%20reculer%20sa%20montre%20de%203%20h%2030%2C%20le%20plus%20grand%20changement%20d'heure%20%C3%A0%20une%20fronti%C3%A8re%20terrestre%20%3F"
 },
 {
  "text": "La surface de Pluton, environ 17,7 millions de km², n'est que légèrement supérieure à celle de la Russie, environ 17,1 millions de km².",
  "source": "Perplexity",
  "question": "Est-il vrai que la surface de Pluton, environ 17,7 millions de km², n'est que légèrement supérieure à celle de la Russie, environ 17,1 millions de km² ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20surface%20de%20Pluton%2C%20environ%2017%2C7%20millions%20de%20km%C2%B2%2C%20n'est%20que%20l%C3%A9g%C3%A8rement%20sup%C3%A9rieure%20%C3%A0%20celle%20de%20la%20Russie%2C%20environ%2017%2C1%20millions%20de%20km%C2%B2%20%3F"
 },
 {
  "text": "Le Liechtenstein et l'Ouzbékistan sont les deux seuls pays doublement enclavés : pour atteindre la mer, il faut traverser au moins deux frontières (si l'on considère la Caspienne comme un lac).",
  "source": "Perplexity",
  "question": "Est-il vrai que le Liechtenstein et l'Ouzbékistan sont les deux seuls pays doublement enclavés : pour atteindre la mer, il faut traverser au moins deux frontières (si l'on considère la Caspienne comme un lac) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Liechtenstein%20et%20l'Ouzb%C3%A9kistan%20sont%20les%20deux%20seuls%20pays%20doublement%20enclav%C3%A9s%20%3A%20pour%20atteindre%20la%20mer%2C%20il%20faut%20traverser%20au%20moins%20deux%20fronti%C3%A8res%20(si%20l'on%20consid%C3%A8re%20la%20Caspienne%20comme%20un%20lac)%20%3F"
 },
 {
  "text": "Sous Centralia, en Pennsylvanie, un incendie de mine brûle depuis 1962 et pourrait durer encore 250 ans ; la ville ne comptait plus que 5 habitants en 2020.",
  "source": "Perplexity",
  "question": "Est-il vrai que sous Centralia, en Pennsylvanie, un incendie de mine brûle depuis 1962 et pourrait durer encore 250 ans ; la ville ne comptait plus que 5 habitants en 2020 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sous%20Centralia%2C%20en%20Pennsylvanie%2C%20un%20incendie%20de%20mine%20br%C3%BBle%20depuis%201962%20et%20pourrait%20durer%20encore%20250%20ans%20%3B%20la%20ville%20ne%20comptait%20plus%20que%205%20habitants%20en%202020%20%3F"
 },
 {
  "text": "En France, l'article 171 du Code civil permet d'épouser une personne décédée, sur autorisation du président de la République.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en France, l'article 171 du Code civil permet d'épouser une personne décédée, sur autorisation du président de la République ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20France%2C%20l'article%20171%20du%20Code%20civil%20permet%20d'%C3%A9pouser%20une%20personne%20d%C3%A9c%C3%A9d%C3%A9e%2C%20sur%20autorisation%20du%20pr%C3%A9sident%20de%20la%20R%C3%A9publique%20%3F"
 },
 {
  "text": "En Suisse, il est illégal de garder un cochon d'Inde seul : la loi impose qu'il ait un congénère, car l'isolement nuit au bien-être de cet animal social.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en Suisse, il est illégal de garder un cochon d'Inde seul : la loi impose qu'il ait un congénère, car l'isolement nuit au bien-être de cet animal social ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20Suisse%2C%20il%20est%20ill%C3%A9gal%20de%20garder%20un%20cochon%20d'Inde%20seul%20%3A%20la%20loi%20impose%20qu'il%20ait%20un%20cong%C3%A9n%C3%A8re%2C%20car%20l'isolement%20nuit%20au%20bien-%C3%AAtre%20de%20cet%20animal%20social%20%3F"
 },
 {
  "text": "La pâte à modeler Play-Doh était à l'origine un produit servant à nettoyer la suie de charbon sur les papiers peints, conçu dans les années 1930 par la société Kutol.",
  "source": "Perplexity",
  "question": "Est-il vrai que la pâte à modeler Play-Doh était à l'origine un produit servant à nettoyer la suie de charbon sur les papiers peints, conçu dans les années 1930 par la société Kutol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20p%C3%A2te%20%C3%A0%20modeler%20Play-Doh%20%C3%A9tait%20%C3%A0%20l'origine%20un%20produit%20servant%20%C3%A0%20nettoyer%20la%20suie%20de%20charbon%20sur%20les%20papiers%20peints%2C%20con%C3%A7u%20dans%20les%20ann%C3%A9es%201930%20par%20la%20soci%C3%A9t%C3%A9%20Kutol%20%3F"
 },
 {
  "text": "La tronçonneuse descend d'une scie à chaîne médicale inventée vers 1783-1785 par deux médecins écossais, utilisée notamment pour élargir le bassin lors d'accouchements difficiles (symphysiotomie).",
  "source": "Perplexity",
  "question": "Est-il vrai que la tronçonneuse descend d'une scie à chaîne médicale inventée vers 1783-1785 par deux médecins écossais, utilisée notamment pour élargir le bassin lors d'accouchements difficiles (symphysiotomie) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tron%C3%A7onneuse%20descend%20d'une%20scie%20%C3%A0%20cha%C3%AEne%20m%C3%A9dicale%20invent%C3%A9e%20vers%201783-1785%20par%20deux%20m%C3%A9decins%20%C3%A9cossais%2C%20utilis%C3%A9e%20notamment%20pour%20%C3%A9largir%20le%20bassin%20lors%20d'accouchements%20difficiles%20(symphysiotomie)%20%3F"
 },
 {
  "text": "Fredric Baur, l'inventeur du tube des chips Pringles, a été inhumé en 2008 en partie dans un tube de Pringles, à sa propre demande.",
  "source": "Perplexity",
  "question": "Est-il vrai que fredric Baur, l'inventeur du tube des chips Pringles, a été inhumé en 2008 en partie dans un tube de Pringles, à sa propre demande ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20fredric%20Baur%2C%20l'inventeur%20du%20tube%20des%20chips%20Pringles%2C%20a%20%C3%A9t%C3%A9%20inhum%C3%A9%20en%202008%20en%20partie%20dans%20un%20tube%20de%20Pringles%2C%20%C3%A0%20sa%20propre%20demande%20%3F"
 },
 {
  "text": "Le castoréum, sécrétion des glandes situées près de l'anus du castor, est autorisé comme arôme alimentaire aux États-Unis, mais il ne s'en utilise qu'environ 100 kilos par an.",
  "source": "Perplexity",
  "question": "Est-il vrai que le castoréum, sécrétion des glandes situées près de l'anus du castor, est autorisé comme arôme alimentaire aux États-Unis, mais il ne s'en utilise qu'environ 100 kilos par an ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20castor%C3%A9um%2C%20s%C3%A9cr%C3%A9tion%20des%20glandes%20situ%C3%A9es%20pr%C3%A8s%20de%20l'anus%20du%20castor%2C%20est%20autoris%C3%A9%20comme%20ar%C3%B4me%20alimentaire%20aux%20%C3%89tats-Unis%2C%20mais%20il%20ne%20s'en%20utilise%20qu'environ%20100%20kilos%20par%20an%20%3F"
 },
 {
  "text": "La noix de cajou n'est pratiquement jamais vendue dans sa coque, car celle-ci contient de l'acide anacardique, un irritant cutané proche du poison de l'herbe à puce.",
  "source": "Perplexity",
  "question": "Est-il vrai que la noix de cajou n'est pratiquement jamais vendue dans sa coque, car celle-ci contient de l'acide anacardique, un irritant cutané proche du poison de l'herbe à puce ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20noix%20de%20cajou%20n'est%20pratiquement%20jamais%20vendue%20dans%20sa%20coque%2C%20car%20celle-ci%20contient%20de%20l'acide%20anacardique%2C%20un%20irritant%20cutan%C3%A9%20proche%20du%20poison%20de%20l'herbe%20%C3%A0%20puce%20%3F"
 },
 {
  "text": "Les fortune cookies des restaurants chinois ne viennent pas de Chine : ils dérivent d'un biscuit japonais de Kyoto, popularisé en Californie, et sont quasiment inconnus en Chine.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fortune cookies des restaurants chinois ne viennent pas de Chine : ils dérivent d'un biscuit japonais de Kyoto, popularisé en Californie, et sont quasiment inconnus en Chine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fortune%20cookies%20des%20restaurants%20chinois%20ne%20viennent%20pas%20de%20Chine%20%3A%20ils%20d%C3%A9rivent%20d'un%20biscuit%20japonais%20de%20Kyoto%2C%20popularis%C3%A9%20en%20Californie%2C%20et%20sont%20quasiment%20inconnus%20en%20Chine%20%3F"
 },
 {
  "text": "La pizza hawaïenne a été inventée en 1962 au Canada, en Ontario, par Sam Panopoulos, un restaurateur d'origine grecque.",
  "source": "Perplexity",
  "question": "Est-il vrai que la pizza hawaïenne a été inventée en 1962 au Canada, en Ontario, par Sam Panopoulos, un restaurateur d'origine grecque ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20pizza%20hawa%C3%AFenne%20a%20%C3%A9t%C3%A9%20invent%C3%A9e%20en%201962%20au%20Canada%2C%20en%20Ontario%2C%20par%20Sam%20Panopoulos%2C%20un%20restaurateur%20d'origine%20grecque%20%3F"
 },
 {
  "text": "L'ouvre-boîte a été breveté environ 45 ans après la boîte de conserve : les premières boîtes indiquaient de les ouvrir au marteau et au burin.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ouvre-boîte a été breveté environ 45 ans après la boîte de conserve : les premières boîtes indiquaient de les ouvrir au marteau et au burin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'ouvre-bo%C3%AEte%20a%20%C3%A9t%C3%A9%20brevet%C3%A9%20environ%2045%20ans%20apr%C3%A8s%20la%20bo%C3%AEte%20de%20conserve%20%3A%20les%20premi%C3%A8res%20bo%C3%AEtes%20indiquaient%20de%20les%20ouvrir%20au%20marteau%20et%20au%20burin%20%3F"
 },
 {
  "text": "Le pistolet à eau Super Soaker a été inventé par Lonnie Johnson, un ingénieur passé par la NASA, alors qu'il testait un nouveau système de réfrigération.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pistolet à eau Super Soaker a été inventé par Lonnie Johnson, un ingénieur passé par la NASA, alors qu'il testait un nouveau système de réfrigération ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pistolet%20%C3%A0%20eau%20Super%20Soaker%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20par%20Lonnie%20Johnson%2C%20un%20ing%C3%A9nieur%20pass%C3%A9%20par%20la%20NASA%2C%20alors%20qu'il%20testait%20un%20nouveau%20syst%C3%A8me%20de%20r%C3%A9frig%C3%A9ration%20%3F"
 },
 {
  "text": "Les mouchoirs Kleenex dérivent d'un filtre de masque à gaz de la Première Guerre mondiale et ont d'abord été vendus en 1924 pour retirer le maquillage.",
  "source": "Perplexity",
  "question": "Est-il vrai que les mouchoirs Kleenex dérivent d'un filtre de masque à gaz de la Première Guerre mondiale et ont d'abord été vendus en 1924 pour retirer le maquillage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20mouchoirs%20Kleenex%20d%C3%A9rivent%20d'un%20filtre%20de%20masque%20%C3%A0%20gaz%20de%20la%20Premi%C3%A8re%20Guerre%20mondiale%20et%20ont%20d'abord%20%C3%A9t%C3%A9%20vendus%20en%201924%20pour%20retirer%20le%20maquillage%20%3F"
 },
 {
  "text": "Le Viagra a été synthétisé en 1989 dans la ville anglaise de Sandwich pour traiter l'angine de poitrine, avant que son effet sur l'érection ne soit découvert lors des essais.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Viagra a été synthétisé en 1989 dans la ville anglaise de Sandwich pour traiter l'angine de poitrine, avant que son effet sur l'érection ne soit découvert lors des essais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Viagra%20a%20%C3%A9t%C3%A9%20synth%C3%A9tis%C3%A9%20en%201989%20dans%20la%20ville%20anglaise%20de%20Sandwich%20pour%20traiter%20l'angine%20de%20poitrine%2C%20avant%20que%20son%20effet%20sur%20l'%C3%A9rection%20ne%20soit%20d%C3%A9couvert%20lors%20des%20essais%20%3F"
 },
 {
  "text": "À ses débuts, à la fin des années 1920, le soda 7 Up revendiquait contenir du citrate de lithium, un médicament régulateur de l'humeur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à ses débuts, à la fin des années 1920, le soda 7 Up revendiquait contenir du citrate de lithium, un médicament régulateur de l'humeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20ses%20d%C3%A9buts%2C%20%C3%A0%20la%20fin%20des%20ann%C3%A9es%201920%2C%20le%20soda%207%20Up%20revendiquait%20contenir%20du%20citrate%20de%20lithium%2C%20un%20m%C3%A9dicament%20r%C3%A9gulateur%20de%20l'humeur%20%3F"
 },
 {
  "text": "Le guide Michelin a été créé en 1900 par un fabricant de pneus pour pousser les automobilistes à rouler plus et donc à user leurs pneus, alors que la France comptait moins de 3 000 voitures.",
  "source": "Perplexity",
  "question": "Est-il vrai que le guide Michelin a été créé en 1900 par un fabricant de pneus pour pousser les automobilistes à rouler plus et donc à user leurs pneus, alors que la France comptait moins de 3 000 voitures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20guide%20Michelin%20a%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9%20en%201900%20par%20un%20fabricant%20de%20pneus%20pour%20pousser%20les%20automobilistes%20%C3%A0%20rouler%20plus%20et%20donc%20%C3%A0%20user%20leurs%20pneus%2C%20alors%20que%20la%20France%20comptait%20moins%20de%203%20000%20voitures%20%3F"
 },
 {
  "text": "Le Livre Guinness des records est né d'une dispute de chasse en 1951 : le patron de la brasserie Guinness ne trouvait aucun livre disant si le pluvier doré était le gibier le plus rapide d'Europe.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Livre Guinness des records est né d'une dispute de chasse en 1951 : le patron de la brasserie Guinness ne trouvait aucun livre disant si le pluvier doré était le gibier le plus rapide d'Europe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Livre%20Guinness%20des%20records%20est%20n%C3%A9%20d'une%20dispute%20de%20chasse%20en%201951%20%3A%20le%20patron%20de%20la%20brasserie%20Guinness%20ne%20trouvait%20aucun%20livre%20disant%20si%20le%20pluvier%20dor%C3%A9%20%C3%A9tait%20le%20gibier%20le%20plus%20rapide%20d'Europe%20%3F"
 },
 {
  "text": "Le chewing-gum à bulles est rose parce que son inventeur, Walter Diemer, comptable chez Fleer, n'avait que du colorant rouge sous la main en 1928 : il l'a dilué, et le rose est resté.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chewing-gum à bulles est rose parce que son inventeur, Walter Diemer, comptable chez Fleer, n'avait que du colorant rouge sous la main en 1928 : il l'a dilué, et le rose est resté ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chewing-gum%20%C3%A0%20bulles%20est%20rose%20parce%20que%20son%20inventeur%2C%20Walter%20Diemer%2C%20comptable%20chez%20Fleer%2C%20n'avait%20que%20du%20colorant%20rouge%20sous%20la%20main%20en%201928%20%3A%20il%20l'a%20dilu%C3%A9%2C%20et%20le%20rose%20est%20rest%C3%A9%20%3F"
 },
 {
  "text": "Le « 57 » de Heinz ne correspond à rien : en 1896, la marque vendait déjà plus de 60 produits, et le chiffre combinait le nombre fétiche du fondateur et celui de sa femme.",
  "source": "Perplexity",
  "question": "Est-il vrai que le « 57 » de Heinz ne correspond à rien : en 1896, la marque vendait déjà plus de 60 produits, et le chiffre combinait le nombre fétiche du fondateur et celui de sa femme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20%C2%AB%2057%20%C2%BB%20de%20Heinz%20ne%20correspond%20%C3%A0%20rien%20%3A%20en%201896%2C%20la%20marque%20vendait%20d%C3%A9j%C3%A0%20plus%20de%2060%20produits%2C%20et%20le%20chiffre%20combinait%20le%20nombre%20f%C3%A9tiche%20du%20fondateur%20et%20celui%20de%20sa%20femme%20%3F"
 },
 {
  "text": "Amazon s'appelait d'abord Cadabra, mais le nom a été changé après qu'un avocat l'a confondu avec « cadaver », cadavre en anglais.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'amazon s'appelait d'abord Cadabra, mais le nom a été changé après qu'un avocat l'a confondu avec « cadaver », cadavre en anglais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'amazon%20s'appelait%20d'abord%20Cadabra%2C%20mais%20le%20nom%20a%20%C3%A9t%C3%A9%20chang%C3%A9%20apr%C3%A8s%20qu'un%20avocat%20l'a%20confondu%20avec%20%C2%AB%20cadaver%20%C2%BB%2C%20cadavre%20en%20anglais%20%3F"
 },
 {
  "text": "Stockées en grande quantité avec de l'humidité, les pistaches peuvent s'échauffer d'elles-mêmes et même s'enflammer spontanément si elles sont conservées dans des sacs de jute.",
  "source": "Perplexity",
  "question": "Est-il vrai que stockées en grande quantité avec de l'humidité, les pistaches peuvent s'échauffer d'elles-mêmes et même s'enflammer spontanément si elles sont conservées dans des sacs de jute ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20stock%C3%A9es%20en%20grande%20quantit%C3%A9%20avec%20de%20l'humidit%C3%A9%2C%20les%20pistaches%20peuvent%20s'%C3%A9chauffer%20d'elles-m%C3%AAmes%20et%20m%C3%AAme%20s'enflammer%20spontan%C3%A9ment%20si%20elles%20sont%20conserv%C3%A9es%20dans%20des%20sacs%20de%20jute%20%3F"
 },
 {
  "text": "Le capuchon du stylo Bic Cristal est percé d'un petit trou depuis 1991 pour réduire le risque d'étouffement s'il est inhalé.",
  "source": "Perplexity",
  "question": "Est-il vrai que le capuchon du stylo Bic Cristal est percé d'un petit trou depuis 1991 pour réduire le risque d'étouffement s'il est inhalé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20capuchon%20du%20stylo%20Bic%20Cristal%20est%20perc%C3%A9%20d'un%20petit%20trou%20depuis%201991%20pour%20r%C3%A9duire%20le%20risque%20d'%C3%A9touffement%20s'il%20est%20inhal%C3%A9%20%3F"
 },
 {
  "text": "Le brillant de nombreux bonbons vient de la gomme-laque (E904), une résine sécrétée par une cochenille femelle, également utilisée pour vernir les meubles.",
  "source": "Perplexity",
  "question": "Est-il vrai que le brillant de nombreux bonbons vient de la gomme-laque (E904), une résine sécrétée par une cochenille femelle, également utilisée pour vernir les meubles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20brillant%20de%20nombreux%20bonbons%20vient%20de%20la%20gomme-laque%20(E904)%2C%20une%20r%C3%A9sine%20s%C3%A9cr%C3%A9t%C3%A9e%20par%20une%20cochenille%20femelle%2C%20%C3%A9galement%20utilis%C3%A9e%20pour%20vernir%20les%20meubles%20%3F"
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, les M&M's étaient vendus exclusivement à l'armée américaine : leur coque en sucre permettait aux soldats de transporter du chocolat sans qu'il fonde.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, les M&M's étaient vendus exclusivement à l'armée américaine : leur coque en sucre permettait aux soldats de transporter du chocolat sans qu'il fonde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20les%20M%26M's%20%C3%A9taient%20vendus%20exclusivement%20%C3%A0%20l'arm%C3%A9e%20am%C3%A9ricaine%20%3A%20leur%20coque%20en%20sucre%20permettait%20aux%20soldats%20de%20transporter%20du%20chocolat%20sans%20qu'il%20fonde%20%3F"
 },
 {
  "text": "Les œufs Kinder Surprise sont interdits à la vente aux États-Unis par une loi de 1938 bannissant les confiseries contenant un objet non comestible.",
  "source": "Perplexity",
  "question": "Est-il vrai que les œufs Kinder Surprise sont interdits à la vente aux États-Unis par une loi de 1938 bannissant les confiseries contenant un objet non comestible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C5%93ufs%20Kinder%20Surprise%20sont%20interdits%20%C3%A0%20la%20vente%20aux%20%C3%89tats-Unis%20par%20une%20loi%20de%201938%20bannissant%20les%20confiseries%20contenant%20un%20objet%20non%20comestible%20%3F"
 },
 {
  "text": "Haribo est l'abréviation de HAns RIegel BOnn, du nom de son fondateur et de sa ville ; ses premiers oursons s'appelaient les ours dansants.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'haribo est l'abréviation de HAns RIegel BOnn, du nom de son fondateur et de sa ville ; ses premiers oursons s'appelaient les ours dansants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'haribo%20est%20l'abr%C3%A9viation%20de%20HAns%20RIegel%20BOnn%2C%20du%20nom%20de%20son%20fondateur%20et%20de%20sa%20ville%20%3B%20ses%20premiers%20oursons%20s'appelaient%20les%20ours%20dansants%20%3F"
 },
 {
  "text": "Bibendum, le bonhomme Michelin, est blanc parce que les pneus étaient blanchâtres jusqu'à l'ajout de noir de carbone en 1912.",
  "source": "Perplexity",
  "question": "Est-il vrai que bibendum, le bonhomme Michelin, est blanc parce que les pneus étaient blanchâtres jusqu'à l'ajout de noir de carbone en 1912 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20bibendum%2C%20le%20bonhomme%20Michelin%2C%20est%20blanc%20parce%20que%20les%20pneus%20%C3%A9taient%20blanch%C3%A2tres%20jusqu'%C3%A0%20l'ajout%20de%20noir%20de%20carbone%20en%201912%20%3F"
 },
 {
  "text": "Monsieur Patate, premier jouet à faire l'objet d'une publicité télévisée en 1952, était vendu sans corps : il fallait planter les pièces dans une vraie pomme de terre.",
  "source": "Perplexity",
  "question": "Est-il vrai que monsieur Patate, premier jouet à faire l'objet d'une publicité télévisée en 1952, était vendu sans corps : il fallait planter les pièces dans une vraie pomme de terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20monsieur%20Patate%2C%20premier%20jouet%20%C3%A0%20faire%20l'objet%20d'une%20publicit%C3%A9%20t%C3%A9l%C3%A9vis%C3%A9e%20en%201952%2C%20%C3%A9tait%20vendu%20sans%20corps%20%3A%20il%20fallait%20planter%20les%20pi%C3%A8ces%20dans%20une%20vraie%20pomme%20de%20terre%20%3F"
 },
 {
  "text": "La poupée Barbie est inspirée de Bild Lilli, une poupée allemande tirée d'une BD du journal Bild et vendue aux adultes, surtout des hommes, comme cadeau humoristique.",
  "source": "Perplexity",
  "question": "Est-il vrai que la poupée Barbie est inspirée de Bild Lilli, une poupée allemande tirée d'une BD du journal Bild et vendue aux adultes, surtout des hommes, comme cadeau humoristique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20poup%C3%A9e%20Barbie%20est%20inspir%C3%A9e%20de%20Bild%20Lilli%2C%20une%20poup%C3%A9e%20allemande%20tir%C3%A9e%20d'une%20BD%20du%20journal%20Bild%20et%20vendue%20aux%20adultes%2C%20surtout%20des%20hommes%2C%20comme%20cadeau%20humoristique%20%3F"
 },
 {
  "text": "Les nachos doivent leur nom à Ignacio « Nacho » Anaya, maître d'hôtel qui les a improvisés en 1943 à Piedras Negras, au Mexique.",
  "source": "Perplexity",
  "question": "Est-il vrai que les nachos doivent leur nom à Ignacio « Nacho » Anaya, maître d'hôtel qui les a improvisés en 1943 à Piedras Negras, au Mexique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20nachos%20doivent%20leur%20nom%20%C3%A0%20Ignacio%20%C2%AB%20Nacho%20%C2%BB%20Anaya%2C%20ma%C3%AEtre%20d'h%C3%B4tel%20qui%20les%20a%20improvis%C3%A9s%20en%201943%20%C3%A0%20Piedras%20Negras%2C%20au%20Mexique%20%3F"
 },
 {
  "text": "L'eau tonique brille sous une lumière ultraviolette, à cause de la fluorescence de la quinine qu'elle contient.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau tonique brille sous une lumière ultraviolette, à cause de la fluorescence de la quinine qu'elle contient ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20tonique%20brille%20sous%20une%20lumi%C3%A8re%20ultraviolette%2C%20%C3%A0%20cause%20de%20la%20fluorescence%20de%20la%20quinine%20qu'elle%20contient%20%3F"
 },
 {
  "text": "En 1943, les États-Unis ont interdit le pain prétranché pour économiser en temps de guerre ; la mesure, impopulaire, a été annulée moins de deux mois plus tard.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1943, les États-Unis ont interdit le pain prétranché pour économiser en temps de guerre ; la mesure, impopulaire, a été annulée moins de deux mois plus tard ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201943%2C%20les%20%C3%89tats-Unis%20ont%20interdit%20le%20pain%20pr%C3%A9tranch%C3%A9%20pour%20%C3%A9conomiser%20en%20temps%20de%20guerre%20%3B%20la%20mesure%2C%20impopulaire%2C%20a%20%C3%A9t%C3%A9%20annul%C3%A9e%20moins%20de%20deux%20mois%20plus%20tard%20%3F"
 },
 {
  "text": "En juin 1946, à Pittsburgh, 30 000 à 40 000 femmes ont fait la queue pour 13 000 paires de bas nylon, provoquant des bagarres : l'une des pires « émeutes du nylon ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en juin 1946, à Pittsburgh, 30 000 à 40 000 femmes ont fait la queue pour 13 000 paires de bas nylon, provoquant des bagarres : l'une des pires « émeutes du nylon » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20juin%201946%2C%20%C3%A0%20Pittsburgh%2C%2030%20000%20%C3%A0%2040%20000%20femmes%20ont%20fait%20la%20queue%20pour%2013%20000%20paires%20de%20bas%20nylon%2C%20provoquant%20des%20bagarres%20%3A%20l'une%20des%20pires%20%C2%AB%20%C3%A9meutes%20du%20nylon%20%C2%BB%20%3F"
 },
 {
  "text": "Par le traité de Breda en 1667, l'Angleterre a renoncé à Run, petite île à muscade d'Indonésie, et conservé en échange Manhattan.",
  "source": "Perplexity",
  "question": "Est-il vrai que par le traité de Breda en 1667, l'Angleterre a renoncé à Run, petite île à muscade d'Indonésie, et conservé en échange Manhattan ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20par%20le%20trait%C3%A9%20de%20Breda%20en%201667%2C%20l'Angleterre%20a%20renonc%C3%A9%20%C3%A0%20Run%2C%20petite%20%C3%AEle%20%C3%A0%20muscade%20d'Indon%C3%A9sie%2C%20et%20conserv%C3%A9%20en%20%C3%A9change%20Manhattan%20%3F"
 },
 {
  "text": "Il faut environ 150 fleurs de crocus pour obtenir un seul gramme de safran, dont les stigmates sont cueillis à la main.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il faut environ 150 fleurs de crocus pour obtenir un seul gramme de safran, dont les stigmates sont cueillis à la main ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20faut%20environ%20150%20fleurs%20de%20crocus%20pour%20obtenir%20un%20seul%20gramme%20de%20safran%2C%20dont%20les%20stigmates%20sont%20cueillis%20%C3%A0%20la%20main%20%3F"
 },
 {
  "text": "Lego fabriquait environ 306 millions de pneus miniatures par an (chiffre de 2006), ce qui lui a valu d'être présenté comme le premier fabricant de pneus au monde en nombre d'unités.",
  "source": "Perplexity",
  "question": "Est-il vrai que lego fabriquait environ 306 millions de pneus miniatures par an (chiffre de 2006), ce qui lui a valu d'être présenté comme le premier fabricant de pneus au monde en nombre d'unités ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lego%20fabriquait%20environ%20306%20millions%20de%20pneus%20miniatures%20par%20an%20(chiffre%20de%202006)%2C%20ce%20qui%20lui%20a%20valu%20d'%C3%AAtre%20pr%C3%A9sent%C3%A9%20comme%20le%20premier%20fabricant%20de%20pneus%20au%20monde%20en%20nombre%20d'unit%C3%A9s%20%3F"
 },
 {
  "text": "Le casu martzu, fromage sarde interdit à la vente, contient des milliers de larves vivantes capables de sauter jusqu'à 15 centimètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le casu martzu, fromage sarde interdit à la vente, contient des milliers de larves vivantes capables de sauter jusqu'à 15 centimètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20casu%20martzu%2C%20fromage%20sarde%20interdit%20%C3%A0%20la%20vente%2C%20contient%20des%20milliers%20de%20larves%20vivantes%20capables%20de%20sauter%20jusqu'%C3%A0%2015%20centim%C3%A8tres%20%3F"
 },
 {
  "text": "En 2015, le Néo-Zélandais Nigel Richards a remporté le championnat du monde de Scrabble francophone sans parler français, après avoir étudié le dictionnaire pendant environ neuf semaines.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2015, le Néo-Zélandais Nigel Richards a remporté le championnat du monde de Scrabble francophone sans parler français, après avoir étudié le dictionnaire pendant environ neuf semaines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202015%2C%20le%20N%C3%A9o-Z%C3%A9landais%20Nigel%20Richards%20a%20remport%C3%A9%20le%20championnat%20du%20monde%20de%20Scrabble%20francophone%20sans%20parler%20fran%C3%A7ais%2C%20apr%C3%A8s%20avoir%20%C3%A9tudi%C3%A9%20le%20dictionnaire%20pendant%20environ%20neuf%20semaines%20%3F"
 },
 {
  "text": "Le faux texte « Lorem ipsum » vient d'un traité de Cicéron écrit au Ier siècle av. J.-C. ; « lorem » est un fragment tronqué de « dolorem », la douleur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le faux texte « Lorem ipsum » vient d'un traité de Cicéron écrit au Ier siècle av. J.-C. ; « lorem » est un fragment tronqué de « dolorem », la douleur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20faux%20texte%20%C2%AB%20Lorem%20ipsum%20%C2%BB%20vient%20d'un%20trait%C3%A9%20de%20Cic%C3%A9ron%20%C3%A9crit%20au%20Ier%20si%C3%A8cle%20av.%20J.-C.%20%3B%20%C2%AB%20lorem%20%C2%BB%20est%20un%20fragment%20tronqu%C3%A9%20de%20%C2%AB%20dolorem%20%C2%BB%2C%20la%20douleur%20%3F"
 },
 {
  "text": "Une église de Halberstadt, en Allemagne, joue depuis 2001 un morceau d'orgue de John Cage dont l'exécution doit durer 639 ans et s'achever en 2640.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une église de Halberstadt, en Allemagne, joue depuis 2001 un morceau d'orgue de John Cage dont l'exécution doit durer 639 ans et s'achever en 2640 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20%C3%A9glise%20de%20Halberstadt%2C%20en%20Allemagne%2C%20joue%20depuis%202001%20un%20morceau%20d'orgue%20de%20John%20Cage%20dont%20l'ex%C3%A9cution%20doit%20durer%20639%20ans%20et%20s'achever%20en%202640%20%3F"
 },
 {
  "text": "Le premier ordinateur d'Apple, l'Apple I, était vendu 666,66 dollars en 1976 : Steve Wozniak aimait les chiffres répétés et ignorait la référence au nombre de la Bête.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier ordinateur d'Apple, l'Apple I, était vendu 666,66 dollars en 1976 : Steve Wozniak aimait les chiffres répétés et ignorait la référence au nombre de la Bête ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20ordinateur%20d'Apple%2C%20l'Apple%20I%2C%20%C3%A9tait%20vendu%20666%2C66%20dollars%20en%201976%20%3A%20Steve%20Wozniak%20aimait%20les%20chiffres%20r%C3%A9p%C3%A9t%C3%A9s%20et%20ignorait%20la%20r%C3%A9f%C3%A9rence%20au%20nombre%20de%20la%20B%C3%AAte%20%3F"
 },
 {
  "text": "Ronald Wayne, troisième cofondateur d'Apple, a revendu ses 10 % de la société pour 800 dollars, seulement 12 jours après sa création en 1976.",
  "source": "Perplexity",
  "question": "Est-il vrai que ronald Wayne, troisième cofondateur d'Apple, a revendu ses 10 % de la société pour 800 dollars, seulement 12 jours après sa création en 1976 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20ronald%20Wayne%2C%20troisi%C3%A8me%20cofondateur%20d'Apple%2C%20a%20revendu%20ses%2010%20%25%20de%20la%20soci%C3%A9t%C3%A9%20pour%20800%20dollars%2C%20seulement%2012%20jours%20apr%C3%A8s%20sa%20cr%C3%A9ation%20en%201976%20%3F"
 },
 {
  "text": "En 1991, l'horloge d'une batterie de missiles Patriot avait dérivé d'un tiers de seconde après 100 heures allumée : elle n'a pas intercepté un Scud qui a tué 28 soldats américains à Dhahran.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1991, l'horloge d'une batterie de missiles Patriot avait dérivé d'un tiers de seconde après 100 heures allumée : elle n'a pas intercepté un Scud qui a tué 28 soldats américains à Dhahran ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201991%2C%20l'horloge%20d'une%20batterie%20de%20missiles%20Patriot%20avait%20d%C3%A9riv%C3%A9%20d'un%20tiers%20de%20seconde%20apr%C3%A8s%20100%20heures%20allum%C3%A9e%20%3A%20elle%20n'a%20pas%20intercept%C3%A9%20un%20Scud%20qui%20a%20tu%C3%A9%2028%20soldats%20am%C3%A9ricains%20%C3%A0%20Dhahran%20%3F"
 },
 {
  "text": "Le roman « La Disparition » de Georges Perec (1969) fait 300 pages sans jamais utiliser la lettre e ; sa traduction anglaise l'évite aussi, et l'espagnole se prive du a.",
  "source": "Perplexity",
  "question": "Est-il vrai que le roman « La Disparition » de Georges Perec (1969) fait 300 pages sans jamais utiliser la lettre e ; sa traduction anglaise l'évite aussi, et l'espagnole se prive du a ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20roman%20%C2%AB%20La%20Disparition%20%C2%BB%20de%20Georges%20Perec%20(1969)%20fait%20300%20pages%20sans%20jamais%20utiliser%20la%20lettre%20e%20%3B%20sa%20traduction%20anglaise%20l'%C3%A9vite%20aussi%2C%20et%20l'espagnole%20se%20prive%20du%20a%20%3F"
 },
 {
  "text": "Dr Seuss a écrit « Green Eggs and Ham » avec seulement 50 mots différents, pour gagner un pari de 50 dollars lancé par son éditeur Bennett Cerf.",
  "source": "Perplexity",
  "question": "Est-il vrai que dr Seuss a écrit « Green Eggs and Ham » avec seulement 50 mots différents, pour gagner un pari de 50 dollars lancé par son éditeur Bennett Cerf ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dr%20Seuss%20a%20%C3%A9crit%20%C2%AB%20Green%20Eggs%20and%20Ham%20%C2%BB%20avec%20seulement%2050%20mots%20diff%C3%A9rents%2C%20pour%20gagner%20un%20pari%20de%2050%20dollars%20lanc%C3%A9%20par%20son%20%C3%A9diteur%20Bennett%20Cerf%20%3F"
 },
 {
  "text": "En 1998, une commande d'effacement lancée par erreur a supprimé 90 % de Toy Story 2 ; le film a été sauvé par la copie qu'une directrice technique gardait chez elle.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1998, une commande d'effacement lancée par erreur a supprimé 90 % de Toy Story 2 ; le film a été sauvé par la copie qu'une directrice technique gardait chez elle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201998%2C%20une%20commande%20d'effacement%20lanc%C3%A9e%20par%20erreur%20a%20supprim%C3%A9%2090%20%25%20de%20Toy%20Story%202%20%3B%20le%20film%20a%20%C3%A9t%C3%A9%20sauv%C3%A9%20par%20la%20copie%20qu'une%20directrice%20technique%20gardait%20chez%20elle%20%3F"
 },
 {
  "text": "En 1983, Atari a enterré environ 700 000 cartouches dans une décharge du Nouveau-Mexique, dont le jeu E.T. ; en 2014, des fouilles n'en ont déterré qu'environ 1 300.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1983, Atari a enterré environ 700 000 cartouches dans une décharge du Nouveau-Mexique, dont le jeu E.T. ; en 2014, des fouilles n'en ont déterré qu'environ 1 300 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201983%2C%20Atari%20a%20enterr%C3%A9%20environ%20700%20000%20cartouches%20dans%20une%20d%C3%A9charge%20du%20Nouveau-Mexique%2C%20dont%20le%20jeu%20E.T.%20%3B%20en%202014%2C%20des%20fouilles%20n'en%20ont%20d%C3%A9terr%C3%A9%20qu'environ%201%20300%20%3F"
 },
 {
  "text": "Selon son profil officiel, Hello Kitty s'appelle Kitty White, est née dans la banlieue de Londres et mesure cinq pommes de haut pour un poids de trois pommes.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon son profil officiel, Hello Kitty s'appelle Kitty White, est née dans la banlieue de Londres et mesure cinq pommes de haut pour un poids de trois pommes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20son%20profil%20officiel%2C%20Hello%20Kitty%20s'appelle%20Kitty%20White%2C%20est%20n%C3%A9e%20dans%20la%20banlieue%20de%20Londres%20et%20mesure%20cinq%20pommes%20de%20haut%20pour%20un%20poids%20de%20trois%20pommes%20%3F"
 },
 {
  "text": "Le même cri, enregistré pour le film « Distant Drums » en 1951 et surnommé « cri Wilhelm », a été réutilisé dans plus de 400 films, dont Star Wars.",
  "source": "Perplexity",
  "question": "Est-il vrai que le même cri, enregistré pour le film « Distant Drums » en 1951 et surnommé « cri Wilhelm », a été réutilisé dans plus de 400 films, dont Star Wars ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20m%C3%AAme%20cri%2C%20enregistr%C3%A9%20pour%20le%20film%20%C2%AB%20Distant%20Drums%20%C2%BB%20en%201951%20et%20surnomm%C3%A9%20%C2%AB%20cri%20Wilhelm%20%C2%BB%2C%20a%20%C3%A9t%C3%A9%20r%C3%A9utilis%C3%A9%20dans%20plus%20de%20400%20films%2C%20dont%20Star%20Wars%20%3F"
 },
 {
  "text": "En 2008, la chanson « Happy Birthday to You » rapportait environ 2 millions de dollars de droits par an à Warner/Chappell ; en 2015, un juge a invalidé ce copyright.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2008, la chanson « Happy Birthday to You » rapportait environ 2 millions de dollars de droits par an à Warner/Chappell ; en 2015, un juge a invalidé ce copyright ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202008%2C%20la%20chanson%20%C2%AB%20Happy%20Birthday%20to%20You%20%C2%BB%20rapportait%20environ%202%20millions%20de%20dollars%20de%20droits%20par%20an%20%C3%A0%20Warner%2FChappell%20%3B%20en%202015%2C%20un%20juge%20a%20invalid%C3%A9%20ce%20copyright%20%3F"
 },
 {
  "text": "Le 22 mai 2010, Laszlo Hanyecz a payé deux pizzas 10 000 bitcoins, l'un des premiers achats réels en bitcoin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 22 mai 2010, Laszlo Hanyecz a payé deux pizzas 10 000 bitcoins, l'un des premiers achats réels en bitcoin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2022%20mai%202010%2C%20Laszlo%20Hanyecz%20a%20pay%C3%A9%20deux%20pizzas%2010%20000%20bitcoins%2C%20l'un%20des%20premiers%20achats%20r%C3%A9els%20en%20bitcoin%20%3F"
 },
 {
  "text": "Installée à Cambridge en 1991, une caméra filmait une cafetière pour que les chercheurs vérifient à distance qu'elle n'était pas vide ; reliée au Web en 1993, elle est devenue l'une des premières webcams.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'installée à Cambridge en 1991, une caméra filmait une cafetière pour que les chercheurs vérifient à distance qu'elle n'était pas vide ; reliée au Web en 1993, elle est devenue l'une des premières webcams ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'install%C3%A9e%20%C3%A0%20Cambridge%20en%201991%2C%20une%20cam%C3%A9ra%20filmait%20une%20cafeti%C3%A8re%20pour%20que%20les%20chercheurs%20v%C3%A9rifient%20%C3%A0%20distance%20qu'elle%20n'%C3%A9tait%20pas%20vide%20%3B%20reli%C3%A9e%20au%20Web%20en%201993%2C%20elle%20est%20devenue%20l'une%20des%20premi%C3%A8res%20webcams%20%3F"
 },
 {
  "text": "Le code d'erreur HTTP 418 signifie « Je suis une théière » : il vient d'un protocole de contrôle de cafetières publié comme poisson d'avril le 1er avril 1998 (RFC 2324).",
  "source": "Perplexity",
  "question": "Est-il vrai que le code d'erreur HTTP 418 signifie « Je suis une théière » : il vient d'un protocole de contrôle de cafetières publié comme poisson d'avril le 1er avril 1998 (RFC 2324) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20code%20d'erreur%20HTTP%20418%20signifie%20%C2%AB%20Je%20suis%20une%20th%C3%A9i%C3%A8re%20%C2%BB%20%3A%20il%20vient%20d'un%20protocole%20de%20contr%C3%B4le%20de%20cafeti%C3%A8res%20publi%C3%A9%20comme%20poisson%20d'avril%20le%201er%20avril%201998%20(RFC%202324)%20%3F"
 },
 {
  "text": "Le domaine .tv appartient à Tuvalu : en 2019, ses redevances représentaient 8,4 % des recettes de l'État de cet archipel du Pacifique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le domaine .tv appartient à Tuvalu : en 2019, ses redevances représentaient 8,4 % des recettes de l'État de cet archipel du Pacifique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20domaine%20.tv%20appartient%20%C3%A0%20Tuvalu%20%3A%20en%202019%2C%20ses%20redevances%20repr%C3%A9sentaient%208%2C4%20%25%20des%20recettes%20de%20l'%C3%89tat%20de%20cet%20archipel%20du%20Pacifique%20%3F"
 },
 {
  "text": "La marque Häagen-Dazs n'a rien de scandinave : ce nom sans signification a été inventé dans le Bronx, à New York, pour sonner danois.",
  "source": "Perplexity",
  "question": "Est-il vrai que la marque Häagen-Dazs n'a rien de scandinave : ce nom sans signification a été inventé dans le Bronx, à New York, pour sonner danois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20marque%20H%C3%A4agen-Dazs%20n'a%20rien%20de%20scandinave%20%3A%20ce%20nom%20sans%20signification%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20dans%20le%20Bronx%2C%20%C3%A0%20New%20York%2C%20pour%20sonner%20danois%20%3F"
 },
 {
  "text": "Le mot byte s'écrit avec un y parce que Werner Buchholz, qui l'a créé chez IBM en 1956, voulait éviter qu'une faute de frappe ne transforme « bite » en « bit ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot byte s'écrit avec un y parce que Werner Buchholz, qui l'a créé chez IBM en 1956, voulait éviter qu'une faute de frappe ne transforme « bite » en « bit » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20byte%20s'%C3%A9crit%20avec%20un%20y%20parce%20que%20Werner%20Buchholz%2C%20qui%20l'a%20cr%C3%A9%C3%A9%20chez%20IBM%20en%201956%2C%20voulait%20%C3%A9viter%20qu'une%20faute%20de%20frappe%20ne%20transforme%20%C2%AB%20bite%20%C2%BB%20en%20%C2%AB%20bit%20%C2%BB%20%3F"
 },
 {
  "text": "La sonde Mars Climate Orbiter, qui a coûté 327,6 millions de dollars, a été détruite en 1999 car un logiciel calculait en livres-force seconde et un autre attendait des newtons-seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que la sonde Mars Climate Orbiter, qui a coûté 327,6 millions de dollars, a été détruite en 1999 car un logiciel calculait en livres-force seconde et un autre attendait des newtons-seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20sonde%20Mars%20Climate%20Orbiter%2C%20qui%20a%20co%C3%BBt%C3%A9%20327%2C6%20millions%20de%20dollars%2C%20a%20%C3%A9t%C3%A9%20d%C3%A9truite%20en%201999%20car%20un%20logiciel%20calculait%20en%20livres-force%20seconde%20et%20un%20autre%20attendait%20des%20newtons-seconde%20%3F"
 },
 {
  "text": "En 1897, la Chambre des représentants de l'Indiana a voté à l'unanimité un texte impliquant que pi vaut 3,2 ; le Sénat a ajourné le projet indéfiniment.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1897, la Chambre des représentants de l'Indiana a voté à l'unanimité un texte impliquant que pi vaut 3,2 ; le Sénat a ajourné le projet indéfiniment ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201897%2C%20la%20Chambre%20des%20repr%C3%A9sentants%20de%20l'Indiana%20a%20vot%C3%A9%20%C3%A0%20l'unanimit%C3%A9%20un%20texte%20impliquant%20que%20pi%20vaut%203%2C2%20%3B%20le%20S%C3%A9nat%20a%20ajourn%C3%A9%20le%20projet%20ind%C3%A9finiment%20%3F"
 },
 {
  "text": "Le 9 septembre 1947, une vraie mite a été retrouvée coincée dans un relais du calculateur Harvard Mark II, puis scotchée dans le journal de bord avec la mention « premier vrai cas de bug trouvé ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le 9 septembre 1947, une vraie mite a été retrouvée coincée dans un relais du calculateur Harvard Mark II, puis scotchée dans le journal de bord avec la mention « premier vrai cas de bug trouvé » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%209%20septembre%201947%2C%20une%20vraie%20mite%20a%20%C3%A9t%C3%A9%20retrouv%C3%A9e%20coinc%C3%A9e%20dans%20un%20relais%20du%20calculateur%20Harvard%20Mark%20II%2C%20puis%20scotch%C3%A9e%20dans%20le%20journal%20de%20bord%20avec%20la%20mention%20%C2%AB%20premier%20vrai%20cas%20de%20bug%20trouv%C3%A9%20%C2%BB%20%3F"
 },
 {
  "text": "Pac-Man s'appelait Puck Man au Japon ; le nom a été changé aux États-Unis par crainte que des vandales transforment le P en F sur les bornes d'arcade.",
  "source": "Perplexity",
  "question": "Est-il vrai que pac-Man s'appelait Puck Man au Japon ; le nom a été changé aux États-Unis par crainte que des vandales transforment le P en F sur les bornes d'arcade ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pac-Man%20s'appelait%20Puck%20Man%20au%20Japon%20%3B%20le%20nom%20a%20%C3%A9t%C3%A9%20chang%C3%A9%20aux%20%C3%89tats-Unis%20par%20crainte%20que%20des%20vandales%20transforment%20le%20P%20en%20F%20sur%20les%20bornes%20d'arcade%20%3F"
 },
 {
  "text": "« Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo » est une phrase grammaticalement correcte en anglais, composée d'un seul mot répété huit fois.",
  "source": "Perplexity",
  "question": "Est-il vrai que « Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo » est une phrase grammaticalement correcte en anglais, composée d'un seul mot répété huit fois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20%C2%AB%20Buffalo%20buffalo%20Buffalo%20buffalo%20buffalo%20buffalo%20Buffalo%20buffalo%20%C2%BB%20est%20une%20phrase%20grammaticalement%20correcte%20en%20anglais%2C%20compos%C3%A9e%20d'un%20seul%20mot%20r%C3%A9p%C3%A9t%C3%A9%20huit%20fois%20%3F"
 },
 {
  "text": "De 1934 à 1947, le dictionnaire Merriam-Webster a contenu le mot « dord », qui n'existait pas : il provenait d'une fiche « D or d » (abréviation de densité) mal lue.",
  "source": "Perplexity",
  "question": "Est-il vrai que de 1934 à 1947, le dictionnaire Merriam-Webster a contenu le mot « dord », qui n'existait pas : il provenait d'une fiche « D or d » (abréviation de densité) mal lue ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20de%201934%20%C3%A0%201947%2C%20le%20dictionnaire%20Merriam-Webster%20a%20contenu%20le%20mot%20%C2%AB%20dord%20%C2%BB%2C%20qui%20n'existait%20pas%20%3A%20il%20provenait%20d'une%20fiche%20%C2%AB%20D%20or%20d%20%C2%BB%20(abr%C3%A9viation%20de%20densit%C3%A9)%20mal%20lue%20%3F"
 },
 {
  "text": "Le smiley :-) a été proposé le 19 septembre 1982 par Scott Fahlman, après qu'une blague sur une fuite de mercure dans un ascenseur avait été prise au sérieux.",
  "source": "Perplexity",
  "question": "Est-il vrai que le smiley :-) a été proposé le 19 septembre 1982 par Scott Fahlman, après qu'une blague sur une fuite de mercure dans un ascenseur avait été prise au sérieux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20smiley%20%3A-)%20a%20%C3%A9t%C3%A9%20propos%C3%A9%20le%2019%20septembre%201982%20par%20Scott%20Fahlman%2C%20apr%C3%A8s%20qu'une%20blague%20sur%20une%20fuite%20de%20mercure%20dans%20un%20ascenseur%20avait%20%C3%A9t%C3%A9%20prise%20au%20s%C3%A9rieux%20%3F"
 },
 {
  "text": "Le 16 décembre 1965, les astronautes de Gemini 6 ont joué « Jingle Bells » en orbite sur un harmonica et des grelots embarqués en douce : l'une des premières chansons diffusées depuis l'espace.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 16 décembre 1965, les astronautes de Gemini 6 ont joué « Jingle Bells » en orbite sur un harmonica et des grelots embarqués en douce : l'une des premières chansons diffusées depuis l'espace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2016%20d%C3%A9cembre%201965%2C%20les%20astronautes%20de%20Gemini%206%20ont%20jou%C3%A9%20%C2%AB%20Jingle%20Bells%20%C2%BB%20en%20orbite%20sur%20un%20harmonica%20et%20des%20grelots%20embarqu%C3%A9s%20en%20douce%20%3A%20l'une%20des%20premi%C3%A8res%20chansons%20diffus%C3%A9es%20depuis%20l'espace%20%3F"
 },
 {
  "text": "Le sang de la scène de la douche de « Psychose » (1960) était du sirop de chocolat, et le film est considéré comme le premier grand film américain à montrer une chasse d'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sang de la scène de la douche de « Psychose » (1960) était du sirop de chocolat, et le film est considéré comme le premier grand film américain à montrer une chasse d'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sang%20de%20la%20sc%C3%A8ne%20de%20la%20douche%20de%20%C2%AB%20Psychose%20%C2%BB%20(1960)%20%C3%A9tait%20du%20sirop%20de%20chocolat%2C%20et%20le%20film%20est%20consid%C3%A9r%C3%A9%20comme%20le%20premier%20grand%20film%20am%C3%A9ricain%20%C3%A0%20montrer%20une%20chasse%20d'eau%20%3F"
 },
 {
  "text": "Sherlock Holmes ne dit jamais « Élémentaire, mon cher Watson » dans aucune des 60 histoires écrites par Arthur Conan Doyle.",
  "source": "Perplexity",
  "question": "Est-il vrai que sherlock Holmes ne dit jamais « Élémentaire, mon cher Watson » dans aucune des 60 histoires écrites par Arthur Conan Doyle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sherlock%20Holmes%20ne%20dit%20jamais%20%C2%AB%20%C3%89l%C3%A9mentaire%2C%20mon%20cher%20Watson%20%C2%BB%20dans%20aucune%20des%2060%20histoires%20%C3%A9crites%20par%20Arthur%20Conan%20Doyle%20%3F"
 },
 {
  "text": "Sur le tournage de « L'Empire contre-attaque », David Prowse, l'acteur sous le casque de Dark Vador, récitait une fausse réplique : la révélation « Je suis ton père » est restée secrète jusqu'au doublage.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur le tournage de « L'Empire contre-attaque », David Prowse, l'acteur sous le casque de Dark Vador, récitait une fausse réplique : la révélation « Je suis ton père » est restée secrète jusqu'au doublage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20le%20tournage%20de%20%C2%AB%20L'Empire%20contre-attaque%20%C2%BB%2C%20David%20Prowse%2C%20l'acteur%20sous%20le%20casque%20de%20Dark%20Vador%2C%20r%C3%A9citait%20une%20fausse%20r%C3%A9plique%20%3A%20la%20r%C3%A9v%C3%A9lation%20%C2%AB%20Je%20suis%20ton%20p%C3%A8re%20%C2%BB%20est%20rest%C3%A9e%20secr%C3%A8te%20jusqu'au%20doublage%20%3F"
 },
 {
  "text": "Le premier objet vendu sur eBay était un pointeur laser cassé, parti pour 14,83 dollars : l'acheteur collectionnait les pointeurs laser cassés.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier objet vendu sur eBay était un pointeur laser cassé, parti pour 14,83 dollars : l'acheteur collectionnait les pointeurs laser cassés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20objet%20vendu%20sur%20eBay%20%C3%A9tait%20un%20pointeur%20laser%20cass%C3%A9%2C%20parti%20pour%2014%2C83%20dollars%20%3A%20l'acheteur%20collectionnait%20les%20pointeurs%20laser%20cass%C3%A9s%20%3F"
 },
 {
  "text": "Le paradoxe de Banach-Tarski démontre qu'une boule pleine peut être découpée en 5 morceaux puis réassemblée en deux boules identiques à l'originale.",
  "source": "Perplexity",
  "question": "Est-il vrai que le paradoxe de Banach-Tarski démontre qu'une boule pleine peut être découpée en 5 morceaux puis réassemblée en deux boules identiques à l'originale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20paradoxe%20de%20Banach-Tarski%20d%C3%A9montre%20qu'une%20boule%20pleine%20peut%20%C3%AAtre%20d%C3%A9coup%C3%A9e%20en%205%20morceaux%20puis%20r%C3%A9assembl%C3%A9e%20en%20deux%20boules%20identiques%20%C3%A0%20l'originale%20%3F"
 },
 {
  "text": "Le score le plus élevé de l'histoire du football est 149-0, en 2002 à Madagascar : les joueurs du SO l'Emyrne ont marqué contre leur camp toute la partie pour protester contre l'arbitrage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le score le plus élevé de l'histoire du football est 149-0, en 2002 à Madagascar : les joueurs du SO l'Emyrne ont marqué contre leur camp toute la partie pour protester contre l'arbitrage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20score%20le%20plus%20%C3%A9lev%C3%A9%20de%20l'histoire%20du%20football%20est%20149-0%2C%20en%202002%20%C3%A0%20Madagascar%20%3A%20les%20joueurs%20du%20SO%20l'Emyrne%20ont%20marqu%C3%A9%20contre%20leur%20camp%20toute%20la%20partie%20pour%20protester%20contre%20l'arbitrage%20%3F"
 },
 {
  "text": "Le Japonais Shizo Kanakuri, qui avait abandonné le marathon olympique de 1912, l'a terminé en 1967 : chrono officiel de 54 ans, 8 mois, 6 jours et 5 heures.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Japonais Shizo Kanakuri, qui avait abandonné le marathon olympique de 1912, l'a terminé en 1967 : chrono officiel de 54 ans, 8 mois, 6 jours et 5 heures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Japonais%20Shizo%20Kanakuri%2C%20qui%20avait%20abandonn%C3%A9%20le%20marathon%20olympique%20de%201912%2C%20l'a%20termin%C3%A9%20en%201967%20%3A%20chrono%20officiel%20de%2054%20ans%2C%208%20mois%2C%206%20jours%20et%205%20heures%20%3F"
 },
 {
  "text": "Roy Sullivan, garde forestier américain, a été frappé par la foudre 7 fois entre 1942 et 1977, et a survécu à chaque fois : un record Guinness.",
  "source": "Perplexity",
  "question": "Est-il vrai que roy Sullivan, garde forestier américain, a été frappé par la foudre 7 fois entre 1942 et 1977, et a survécu à chaque fois : un record Guinness ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20roy%20Sullivan%2C%20garde%20forestier%20am%C3%A9ricain%2C%20a%20%C3%A9t%C3%A9%20frapp%C3%A9%20par%20la%20foudre%207%20fois%20entre%201942%20et%201977%2C%20et%20a%20surv%C3%A9cu%20%C3%A0%20chaque%20fois%20%3A%20un%20record%20Guinness%20%3F"
 },
 {
  "text": "En 1945 dans le Colorado, un poulet nommé Mike a vécu 18 mois après avoir été décapité, la hache ayant épargné l'essentiel de son tronc cérébral.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1945 dans le Colorado, un poulet nommé Mike a vécu 18 mois après avoir été décapité, la hache ayant épargné l'essentiel de son tronc cérébral ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201945%20dans%20le%20Colorado%2C%20un%20poulet%20nomm%C3%A9%20Mike%20a%20v%C3%A9cu%2018%20mois%20apr%C3%A8s%20avoir%20%C3%A9t%C3%A9%20d%C3%A9capit%C3%A9%2C%20la%20hache%20ayant%20%C3%A9pargn%C3%A9%20l'essentiel%20de%20son%20tronc%20c%C3%A9r%C3%A9bral%20%3F"
 },
 {
  "text": "En 1965, un notaire a acheté en viager l'appartement de Jeanne Calment, alors âgée de 90 ans : il est mort en 1995 et sa famille a dû continuer à payer, car elle a vécu jusqu'à 122 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1965, un notaire a acheté en viager l'appartement de Jeanne Calment, alors âgée de 90 ans : il est mort en 1995 et sa famille a dû continuer à payer, car elle a vécu jusqu'à 122 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201965%2C%20un%20notaire%20a%20achet%C3%A9%20en%20viager%20l'appartement%20de%20Jeanne%20Calment%2C%20alors%20%C3%A2g%C3%A9e%20de%2090%20ans%20%3A%20il%20est%20mort%20en%201995%20et%20sa%20famille%20a%20d%C3%BB%20continuer%20%C3%A0%20payer%2C%20car%20elle%20a%20v%C3%A9cu%20jusqu'%C3%A0%20122%20ans%20%3F"
 },
 {
  "text": "Une ampoule de la caserne de pompiers de Livermore, en Californie, brille quasiment sans interruption depuis 1901 : elle détient le record Guinness de la lumière la plus durable.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une ampoule de la caserne de pompiers de Livermore, en Californie, brille quasiment sans interruption depuis 1901 : elle détient le record Guinness de la lumière la plus durable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20ampoule%20de%20la%20caserne%20de%20pompiers%20de%20Livermore%2C%20en%20Californie%2C%20brille%20quasiment%20sans%20interruption%20depuis%201901%20%3A%20elle%20d%C3%A9tient%20le%20record%20Guinness%20de%20la%20lumi%C3%A8re%20la%20plus%20durable%20%3F"
 },
 {
  "text": "Lancée en 1927 en Australie, la plus longue expérience de laboratoire en continu au monde (record Guinness) consiste à regarder couler du bitume : seulement 9 gouttes sont tombées en près d'un siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que lancée en 1927 en Australie, la plus longue expérience de laboratoire en continu au monde (record Guinness) consiste à regarder couler du bitume : seulement 9 gouttes sont tombées en près d'un siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lanc%C3%A9e%20en%201927%20en%20Australie%2C%20la%20plus%20longue%20exp%C3%A9rience%20de%20laboratoire%20en%20continu%20au%20monde%20(record%20Guinness)%20consiste%20%C3%A0%20regarder%20couler%20du%20bitume%20%3A%20seulement%209%20gouttes%20sont%20tomb%C3%A9es%20en%20pr%C3%A8s%20d'un%20si%C3%A8cle%20%3F"
 },
 {
  "text": "Le plus long match de tennis de l'histoire, Isner contre Mahut à Wimbledon en 2010, a duré 11 h 05 sur trois jours, avec un cinquième set terminé à 70-68.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long match de tennis de l'histoire, Isner contre Mahut à Wimbledon en 2010, a duré 11 h 05 sur trois jours, avec un cinquième set terminé à 70-68 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20match%20de%20tennis%20de%20l'histoire%2C%20Isner%20contre%20Mahut%20%C3%A0%20Wimbledon%20en%202010%2C%20a%20dur%C3%A9%2011%20h%2005%20sur%20trois%20jours%2C%20avec%20un%20cinqui%C3%A8me%20set%20termin%C3%A9%20%C3%A0%2070-68%20%3F"
 },
 {
  "text": "Le plus long combat de boxe connu, Andy Bowen contre Jack Burke en 1893, a duré 110 rounds et 7 h 19 : l'arbitre l'a déclaré sans vainqueur, les deux hommes étant trop épuisés pour quitter leur coin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long combat de boxe connu, Andy Bowen contre Jack Burke en 1893, a duré 110 rounds et 7 h 19 : l'arbitre l'a déclaré sans vainqueur, les deux hommes étant trop épuisés pour quitter leur coin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20combat%20de%20boxe%20connu%2C%20Andy%20Bowen%20contre%20Jack%20Burke%20en%201893%2C%20a%20dur%C3%A9%20110%20rounds%20et%207%20h%2019%20%3A%20l'arbitre%20l'a%20d%C3%A9clar%C3%A9%20sans%20vainqueur%2C%20les%20deux%20hommes%20%C3%A9tant%20trop%20%C3%A9puis%C3%A9s%20pour%20quitter%20leur%20coin%20%3F"
 },
 {
  "text": "Aux JO de 1912, une demi-finale de lutte a duré 11 h 40 : le vainqueur, Martin Klein, était si épuisé qu'il n'a pas pu disputer la finale et a dû se contenter de l'argent.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'aux JO de 1912, une demi-finale de lutte a duré 11 h 40 : le vainqueur, Martin Klein, était si épuisé qu'il n'a pas pu disputer la finale et a dû se contenter de l'argent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'aux%20JO%20de%201912%2C%20une%20demi-finale%20de%20lutte%20a%20dur%C3%A9%2011%20h%2040%20%3A%20le%20vainqueur%2C%20Martin%20Klein%2C%20%C3%A9tait%20si%20%C3%A9puis%C3%A9%20qu'il%20n'a%20pas%20pu%20disputer%20la%20finale%20et%20a%20d%C3%BB%20se%20contenter%20de%20l'argent%20%3F"
 },
 {
  "text": "Le plus court vol commercial régulier au monde relie deux îles des Orcades, en Écosse : 2,7 km, prévus en une minute et demie, avec un record de 53 secondes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus court vol commercial régulier au monde relie deux îles des Orcades, en Écosse : 2,7 km, prévus en une minute et demie, avec un record de 53 secondes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20court%20vol%20commercial%20r%C3%A9gulier%20au%20monde%20relie%20deux%20%C3%AEles%20des%20Orcades%2C%20en%20%C3%89cosse%20%3A%202%2C7%20km%2C%20pr%C3%A9vus%20en%20une%20minute%20et%20demie%2C%20avec%20un%20record%20de%2053%20secondes%20%3F"
 },
 {
  "text": "En 1989, la Thaïlandaise Chamoy Thipyaso a été condamnée à 141 078 ans de prison pour une escroquerie pyramidale, mais elle a été libérée en 1993.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1989, la Thaïlandaise Chamoy Thipyaso a été condamnée à 141 078 ans de prison pour une escroquerie pyramidale, mais elle a été libérée en 1993 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201989%2C%20la%20Tha%C3%AFlandaise%20Chamoy%20Thipyaso%20a%20%C3%A9t%C3%A9%20condamn%C3%A9e%20%C3%A0%20141%20078%20ans%20de%20prison%20pour%20une%20escroquerie%20pyramidale%2C%20mais%20elle%20a%20%C3%A9t%C3%A9%20lib%C3%A9r%C3%A9e%20en%201993%20%3F"
 },
 {
  "text": "La plus vieille bouteille de vin jamais restée fermée, datée du 4e siècle et trouvée dans une tombe romaine à Speyer, en Allemagne, n'a jamais été ouverte et contient encore du liquide.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus vieille bouteille de vin jamais restée fermée, datée du 4e siècle et trouvée dans une tombe romaine à Speyer, en Allemagne, n'a jamais été ouverte et contient encore du liquide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20vieille%20bouteille%20de%20vin%20jamais%20rest%C3%A9e%20ferm%C3%A9e%2C%20dat%C3%A9e%20du%204e%20si%C3%A8cle%20et%20trouv%C3%A9e%20dans%20une%20tombe%20romaine%20%C3%A0%20Speyer%2C%20en%20Allemagne%2C%20n'a%20jamais%20%C3%A9t%C3%A9%20ouverte%20et%20contient%20encore%20du%20liquide%20%3F"
 },
 {
  "text": "L'Américain Don Gorske a mangé un Big Mac presque chaque jour depuis 1972 et a atteint les 35 000 en 2025, un record Guinness.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Américain Don Gorske a mangé un Big Mac presque chaque jour depuis 1972 et a atteint les 35 000 en 2025, un record Guinness ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Am%C3%A9ricain%20Don%20Gorske%20a%20mang%C3%A9%20un%20Big%20Mac%20presque%20chaque%20jour%20depuis%201972%20et%20a%20atteint%20les%2035%20000%20en%202025%2C%20un%20record%20Guinness%20%3F"
 },
 {
  "text": "Le premier mille-pattes ayant vraiment plus de 1 000 pattes n'a été décrit qu'en 2021 : Eumillipes persephone, trouvé à 60 m sous terre en Australie, en compte jusqu'à 1 306.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier mille-pattes ayant vraiment plus de 1 000 pattes n'a été décrit qu'en 2021 : Eumillipes persephone, trouvé à 60 m sous terre en Australie, en compte jusqu'à 1 306 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20mille-pattes%20ayant%20vraiment%20plus%20de%201%20000%20pattes%20n'a%20%C3%A9t%C3%A9%20d%C3%A9crit%20qu'en%202021%20%3A%20Eumillipes%20persephone%2C%20trouv%C3%A9%20%C3%A0%2060%20m%20sous%20terre%20en%20Australie%2C%20en%20compte%20jusqu'%C3%A0%201%20306%20%3F"
 },
 {
  "text": "En 2012, des chercheurs russes ont fait refleurir une plante à partir de tissus de fruits vieux de 31 800 ans, enfouis dans le terrier d'un écureuil du permafrost sibérien.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2012, des chercheurs russes ont fait refleurir une plante à partir de tissus de fruits vieux de 31 800 ans, enfouis dans le terrier d'un écureuil du permafrost sibérien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202012%2C%20des%20chercheurs%20russes%20ont%20fait%20refleurir%20une%20plante%20%C3%A0%20partir%20de%20tissus%20de%20fruits%20vieux%20de%2031%20800%20ans%2C%20enfouis%20dans%20le%20terrier%20d'un%20%C3%A9cureuil%20du%20permafrost%20sib%C3%A9rien%20%3F"
 },
 {
  "text": "Un palmier dattier baptisé Mathusalem a germé en 2005 à partir d'une graine vieille d'environ 2 000 ans trouvée à Massada, et son pollen a permis de récolter des dattes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un palmier dattier baptisé Mathusalem a germé en 2005 à partir d'une graine vieille d'environ 2 000 ans trouvée à Massada, et son pollen a permis de récolter des dattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20palmier%20dattier%20baptis%C3%A9%20Mathusalem%20a%20germ%C3%A9%20en%202005%20%C3%A0%20partir%20d'une%20graine%20vieille%20d'environ%202%20000%20ans%20trouv%C3%A9e%20%C3%A0%20Massada%2C%20et%20son%20pollen%20a%20permis%20de%20r%C3%A9colter%20des%20dattes%20%3F"
 },
 {
  "text": "Wisdom, un albatros de Laysan bagué en 1956, a pondu un œuf en 2024 à au moins 73 ans : c'est le plus vieil oiseau sauvage connu.",
  "source": "Perplexity",
  "question": "Est-il vrai que wisdom, un albatros de Laysan bagué en 1956, a pondu un œuf en 2024 à au moins 73 ans : c'est le plus vieil oiseau sauvage connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20wisdom%2C%20un%20albatros%20de%20Laysan%20bagu%C3%A9%20en%201956%2C%20a%20pondu%20un%20%C5%93uf%20en%202024%20%C3%A0%20au%20moins%2073%20ans%20%3A%20c'est%20le%20plus%20vieil%20oiseau%20sauvage%20connu%20%3F"
 },
 {
  "text": "En 1965-1966, l'Écossais Angus Barbieri a jeûné 382 jours sous suivi médical, ne prenant que thé, café, eau et vitamines, et a perdu 125 kg.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1965-1966, l'Écossais Angus Barbieri a jeûné 382 jours sous suivi médical, ne prenant que thé, café, eau et vitamines, et a perdu 125 kg ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201965-1966%2C%20l'%C3%89cossais%20Angus%20Barbieri%20a%20je%C3%BBn%C3%A9%20382%20jours%20sous%20suivi%20m%C3%A9dical%2C%20ne%20prenant%20que%20th%C3%A9%2C%20caf%C3%A9%2C%20eau%20et%20vitamines%2C%20et%20a%20perdu%20125%20kg%20%3F"
 },
 {
  "text": "En 1945, Betty Lou Oliver a survécu à une chute de 75 étages dans un ascenseur de l'Empire State Building, le jour même où un bombardier s'était écrasé sur l'immeuble.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1945, Betty Lou Oliver a survécu à une chute de 75 étages dans un ascenseur de l'Empire State Building, le jour même où un bombardier s'était écrasé sur l'immeuble ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201945%2C%20Betty%20Lou%20Oliver%20a%20surv%C3%A9cu%20%C3%A0%20une%20chute%20de%2075%20%C3%A9tages%20dans%20un%20ascenseur%20de%20l'Empire%20State%20Building%2C%20le%20jour%20m%C3%AAme%20o%C3%B9%20un%20bombardier%20s'%C3%A9tait%20%C3%A9cras%C3%A9%20sur%20l'immeuble%20%3F"
 },
 {
  "text": "Le 22 janvier 1943 à Spearfish, dans le Dakota du Sud, la température est passée de -20 °C à +7 °C en deux minutes, un record mondial toujours valable.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 22 janvier 1943 à Spearfish, dans le Dakota du Sud, la température est passée de -20 °C à +7 °C en deux minutes, un record mondial toujours valable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2022%20janvier%201943%20%C3%A0%20Spearfish%2C%20dans%20le%20Dakota%20du%20Sud%2C%20la%20temp%C3%A9rature%20est%20pass%C3%A9e%20de%20-20%20%C2%B0C%20%C3%A0%20%2B7%20%C2%B0C%20en%20deux%20minutes%2C%20un%20record%20mondial%20toujours%20valable%20%3F"
 },
 {
  "text": "En 2010 en Chine, un embouteillage de plus de 100 km a duré 12 jours sur la route nationale 110 : certains conducteurs n'avançaient que d'1 km par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2010 en Chine, un embouteillage de plus de 100 km a duré 12 jours sur la route nationale 110 : certains conducteurs n'avançaient que d'1 km par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202010%20en%20Chine%2C%20un%20embouteillage%20de%20plus%20de%20100%20km%20a%20dur%C3%A9%2012%20jours%20sur%20la%20route%20nationale%20110%20%3A%20certains%20conducteurs%20n'avan%C3%A7aient%20que%20d'1%20km%20par%20jour%20%3F"
 },
 {
  "text": "Le pêcheur José Salvador Alvarenga a dérivé 438 jours sur le Pacifique, du Mexique aux îles Marshall, en se nourrissant de poissons crus, de tortues et d'oiseaux attrapés à mains nues.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pêcheur José Salvador Alvarenga a dérivé 438 jours sur le Pacifique, du Mexique aux îles Marshall, en se nourrissant de poissons crus, de tortues et d'oiseaux attrapés à mains nues ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20p%C3%AAcheur%20Jos%C3%A9%20Salvador%20Alvarenga%20a%20d%C3%A9riv%C3%A9%20438%20jours%20sur%20le%20Pacifique%2C%20du%20Mexique%20aux%20%C3%AEles%20Marshall%2C%20en%20se%20nourrissant%20de%20poissons%20crus%2C%20de%20tortues%20et%20d'oiseaux%20attrap%C3%A9s%20%C3%A0%20mains%20nues%20%3F"
 },
 {
  "text": "En 1999, la Suédoise Anna Bågenholm a survécu après être restée 80 minutes piégée dans l'eau glacée sous la glace, sa température corporelle étant descendue à 13,7 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1999, la Suédoise Anna Bågenholm a survécu après être restée 80 minutes piégée dans l'eau glacée sous la glace, sa température corporelle étant descendue à 13,7 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201999%2C%20la%20Su%C3%A9doise%20Anna%20B%C3%A5genholm%20a%20surv%C3%A9cu%20apr%C3%A8s%20%C3%AAtre%20rest%C3%A9e%2080%20minutes%20pi%C3%A9g%C3%A9e%20dans%20l'eau%20glac%C3%A9e%20sous%20la%20glace%2C%20sa%20temp%C3%A9rature%20corporelle%20%C3%A9tant%20descendue%20%C3%A0%2013%2C7%20%C2%B0C%20%3F"
 },
 {
  "text": "Le plus vieux chat de l'histoire selon le Guinness, Creme Puff, a vécu 38 ans au Texas ; son maître lui donnait du bacon de dinde, du café crème et une pipette de vin rouge tous les deux jours.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus vieux chat de l'histoire selon le Guinness, Creme Puff, a vécu 38 ans au Texas ; son maître lui donnait du bacon de dinde, du café crème et une pipette de vin rouge tous les deux jours ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20vieux%20chat%20de%20l'histoire%20selon%20le%20Guinness%2C%20Creme%20Puff%2C%20a%20v%C3%A9cu%2038%20ans%20au%20Texas%20%3B%20son%20ma%C3%AEtre%20lui%20donnait%20du%20bacon%20de%20dinde%2C%20du%20caf%C3%A9%20cr%C3%A8me%20et%20une%20pipette%20de%20vin%20rouge%20tous%20les%20deux%20jours%20%3F"
 },
 {
  "text": "La tortue Jonathan, qui vit sur l'île de Sainte-Hélène, serait née vers 1832 : elle est le plus vieil animal terrestre vivant connu.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tortue Jonathan, qui vit sur l'île de Sainte-Hélène, serait née vers 1832 : elle est le plus vieil animal terrestre vivant connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tortue%20Jonathan%2C%20qui%20vit%20sur%20l'%C3%AEle%20de%20Sainte-H%C3%A9l%C3%A8ne%2C%20serait%20n%C3%A9e%20vers%201832%20%3A%20elle%20est%20le%20plus%20vieil%20animal%20terrestre%20vivant%20connu%20%3F"
 },
 {
  "text": "L'Américain Ashrita Furman a établi plus de 700 records Guinness, dont le saut sur bâton sauteur sous l'eau et une course en sac contre un yak en Mongolie.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Américain Ashrita Furman a établi plus de 700 records Guinness, dont le saut sur bâton sauteur sous l'eau et une course en sac contre un yak en Mongolie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Am%C3%A9ricain%20Ashrita%20Furman%20a%20%C3%A9tabli%20plus%20de%20700%20records%20Guinness%2C%20dont%20le%20saut%20sur%20b%C3%A2ton%20sauteur%20sous%20l'eau%20et%20une%20course%20en%20sac%20contre%20un%20yak%20en%20Mongolie%20%3F"
 },
 {
  "text": "La grotte de Son Doong, au Vietnam, est si grande qu'une forêt pousse à l'intérieur et qu'un Boeing 747 pourrait y voler sans toucher les parois.",
  "source": "Perplexity",
  "question": "Est-il vrai que la grotte de Son Doong, au Vietnam, est si grande qu'une forêt pousse à l'intérieur et qu'un Boeing 747 pourrait y voler sans toucher les parois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20grotte%20de%20Son%20Doong%2C%20au%20Vietnam%2C%20est%20si%20grande%20qu'une%20for%C3%AAt%20pousse%20%C3%A0%20l'int%C3%A9rieur%20et%20qu'un%20Boeing%20747%20pourrait%20y%20voler%20sans%20toucher%20les%20parois%20%3F"
 },
 {
  "text": "Le plus vieux film conservé, tourné à Leeds en 1888, dure 2,11 secondes ; Sarah Whitley, l'une des quatre personnes filmées, est morte dix jours plus tard.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus vieux film conservé, tourné à Leeds en 1888, dure 2,11 secondes ; Sarah Whitley, l'une des quatre personnes filmées, est morte dix jours plus tard ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20vieux%20film%20conserv%C3%A9%2C%20tourn%C3%A9%20%C3%A0%20Leeds%20en%201888%2C%20dure%202%2C11%20secondes%20%3B%20Sarah%20Whitley%2C%20l'une%20des%20quatre%20personnes%20film%C3%A9es%2C%20est%20morte%20dix%20jours%20plus%20tard%20%3F"
 }
];
