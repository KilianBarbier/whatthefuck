// whatthefuck.fr — base de faits (générée puis vérifiée, sourcée, relue).
// Ne pas éditer à la main : régénérée depuis le pipeline d'agents.
// Chaque fact doit avoir un champ explanation (voir CLAUDE.md).
const FACTS = [
 {
  "text": "Un jour sur Vénus dure plus longtemps qu'une année sur Vénus, car la planète tourne sur elle-même plus lentement qu'elle n'orbite autour du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un jour sur Vénus dure plus longtemps qu'une année sur Vénus, car la planète tourne sur elle-même plus lentement qu'elle n'orbite autour du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20jour%20sur%20V%C3%A9nus%20dure%20plus%20longtemps%20qu'une%20ann%C3%A9e%20sur%20V%C3%A9nus%2C%20car%20la%20plan%C3%A8te%20tourne%20sur%20elle-m%C3%AAme%20plus%20lentement%20qu'elle%20n'orbite%20autour%20du%20Soleil%20%3F",
  "explanation": "Vénus met environ 243 jours terrestres pour faire un tour sur elle-même (jour sidéral), mais seulement 225 jours pour faire le tour du Soleil. Elle tourne en plus à l'envers par rapport aux autres planètes : le Soleil s'y lève à l'ouest. À cause de cette rotation rétrograde, le jour solaire (d'un lever de Soleil au suivant) ne dure « que » 117 jours terrestres."
 },
 {
  "text": "Il n'y a pas de vent sur la Lune, donc les empreintes des astronautes d'Apollo pourraient rester intactes pendant des millions d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il n'y a pas de vent sur la Lune, donc les empreintes des astronautes d'Apollo pourraient rester intactes pendant des millions d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20n'y%20a%20pas%20de%20vent%20sur%20la%20Lune%2C%20donc%20les%20empreintes%20des%20astronautes%20d'Apollo%20pourraient%20rester%20intactes%20pendant%20des%20millions%20d'ann%C3%A9es%20%3F",
  "explanation": "La Lune n'a quasiment pas d'atmosphère, donc ni vent ni pluie pour effacer les traces. Les empreintes laissées dans la poussière (le régolithe) ne seront abîmées que très lentement, par les micrométéorites, le vent solaire et les écarts de température. Les estimations parlent de dizaines à centaines de millions d'années."
 },
 {
  "text": "Sur Mars, le coucher de soleil apparaît bleuté, alors que le ciel de jour y est plutôt rougeâtre.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Mars, le coucher de soleil apparaît bleuté, alors que le ciel de jour y est plutôt rougeâtre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Mars%2C%20le%20coucher%20de%20soleil%20appara%C3%AEt%20bleut%C3%A9%2C%20alors%20que%20le%20ciel%20de%20jour%20y%20est%20plut%C3%B4t%20rouge%C3%A2tre%20%3F",
  "explanation": "L'atmosphère martienne est chargée de fines poussières qui diffusent la lumière rouge dans tout le ciel en journée. Au coucher du Soleil, la lumière traverse beaucoup plus de poussière : ces grains laissent passer et diffusent préférentiellement le bleu vers l'avant, d'où un halo bleuté autour du Soleil, photographié par les rovers Spirit et Curiosity. C'est l'inverse exact de ce qui se passe sur Terre."
 },
 {
  "text": "Neptune n'a accompli qu'une seule orbite complète autour du Soleil depuis sa découverte en 1846.",
  "source": "Perplexity",
  "question": "Est-il vrai que neptune n'a accompli qu'une seule orbite complète autour du Soleil depuis sa découverte en 1846 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20neptune%20n'a%20accompli%20qu'une%20seule%20orbite%20compl%C3%A8te%20autour%20du%20Soleil%20depuis%20sa%20d%C3%A9couverte%20en%201846%20%3F",
  "explanation": "Neptune, découverte le 23 septembre 1846 grâce aux calculs d'Urbain Le Verrier, met environ 165 ans à faire le tour du Soleil. Elle a donc bouclé sa première orbite complète depuis sa découverte en juillet 2011. Personne ayant assisté à sa découverte n'a pu la voir revenir au même endroit."
 },
 {
  "text": "Une cuillère à café de matière d'une étoile à neutrons pèserait environ un milliard de tonnes sur Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une cuillère à café de matière d'une étoile à neutrons pèserait environ un milliard de tonnes sur Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20cuill%C3%A8re%20%C3%A0%20caf%C3%A9%20de%20mati%C3%A8re%20d'une%20%C3%A9toile%20%C3%A0%20neutrons%20p%C3%A8serait%20environ%20un%20milliard%20de%20tonnes%20sur%20Terre%20%3F",
  "explanation": "Une étoile à neutrons est le cœur effondré d'une étoile massive après une supernova : plus d'une masse solaire compressée dans une sphère d'une vingtaine de kilomètres. Sa densité atteint des centaines de millions de tonnes par centimètre cube. Une cuillère à café (environ 5 cm³) pèserait donc de l'ordre du milliard de tonnes."
 },
 {
  "text": "Jupiter est si massive que le centre de gravité qu'elle partage avec le Soleil se situe légèrement au-dessus de la surface du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai que jupiter est si massive que le centre de gravité qu'elle partage avec le Soleil se situe légèrement au-dessus de la surface du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20jupiter%20est%20si%20massive%20que%20le%20centre%20de%20gravit%C3%A9%20qu'elle%20partage%20avec%20le%20Soleil%20se%20situe%20l%C3%A9g%C3%A8rement%20au-dessus%20de%20la%20surface%20du%20Soleil%20%3F",
  "explanation": "Le Soleil et Jupiter tournent tous deux autour de leur centre de masse commun, le barycentre. Comme Jupiter pèse environ un millième de la masse du Soleil et en est très éloignée, ce point se trouve à environ 1,07 rayon solaire du centre du Soleil, soit juste au-dessus de sa surface. Le Soleil « tangue » donc légèrement autour de ce point."
 },
 {
  "text": "Dans l'espace, deux morceaux de métal identiques qui se touchent peuvent se souder spontanément, un phénomène appelé soudure à froid.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans l'espace, deux morceaux de métal identiques qui se touchent peuvent se souder spontanément, un phénomène appelé soudure à froid ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20l'espace%2C%20deux%20morceaux%20de%20m%C3%A9tal%20identiques%20qui%20se%20touchent%20peuvent%20se%20souder%20spontan%C3%A9ment%2C%20un%20ph%C3%A9nom%C3%A8ne%20appel%C3%A9%20soudure%20%C3%A0%20froid%20%3F",
  "explanation": "Sur Terre, les métaux sont recouverts d'une fine couche d'oxyde et d'air qui empêche leurs atomes de se lier. Dans le vide spatial, si deux surfaces métalliques propres et du même métal se touchent, rien ne distingue plus les deux pièces : les atomes se lient et les soudent. Ce phénomène a posé des problèmes, notamment à l'antenne de la sonde Galileo qui ne s'est jamais complètement déployée."
 },
 {
  "text": "La Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, à peu près la vitesse à laquelle poussent nos ongles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, à peu près la vitesse à laquelle poussent nos ongles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Lune%20s'%C3%A9loigne%20de%20la%20Terre%20d'environ%203%2C8%20centim%C3%A8tres%20par%20an%2C%20%C3%A0%20peu%20pr%C3%A8s%20la%20vitesse%20%C3%A0%20laquelle%20poussent%20nos%20ongles%20%3F",
  "explanation": "Les marées provoquées par la Lune freinent la rotation de la Terre et, en échange, transfèrent de l'énergie à la Lune, qui s'éloigne lentement. La distance est mesurée au laser grâce aux réflecteurs déposés par les missions Apollo : environ 3,8 cm par an. Les ongles poussent à une vitesse comparable, de l'ordre de 3 à 4 cm par an."
 },
 {
  "text": "Un an sur Mercure dure environ 88 jours terrestres, mais une seule journée solaire y dure environ 176 jours terrestres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un an sur Mercure dure environ 88 jours terrestres, mais une seule journée solaire y dure environ 176 jours terrestres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20an%20sur%20Mercure%20dure%20environ%2088%20jours%20terrestres%2C%20mais%20une%20seule%20journ%C3%A9e%20solaire%20y%20dure%20environ%20176%20jours%20terrestres%20%3F",
  "explanation": "Mercure tourne sur elle-même en 59 jours terrestres et fait le tour du Soleil en 88 jours : elle fait exactement 3 rotations pour 2 révolutions. Cette combinaison fait qu'entre deux levers de Soleil au même endroit, il s'écoule environ 176 jours terrestres, soit deux années mercuriennes. Un jour solaire y dure donc deux ans."
 },
 {
  "text": "Si l'on pouvait conduire une voiture à 100 kilomètres par heure vers le Soleil, il faudrait plus de 170 ans pour l'atteindre.",
  "source": "Perplexity",
  "question": "Est-il vrai que si l'on pouvait conduire une voiture à 100 kilomètres par heure vers le Soleil, il faudrait plus de 170 ans pour l'atteindre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20l'on%20pouvait%20conduire%20une%20voiture%20%C3%A0%20100%20kilom%C3%A8tres%20par%20heure%20vers%20le%20Soleil%2C%20il%20faudrait%20plus%20de%20170%20ans%20pour%20l'atteindre%20%3F",
  "explanation": "Le Soleil est en moyenne à environ 150 millions de kilomètres de la Terre. À 100 km/h sans jamais s'arrêter, il faudrait 1,5 million d'heures, soit environ 171 ans. La lumière, elle, parcourt cette distance en un peu plus de 8 minutes."
 },
 {
  "text": "Certaines comètes dégagent une odeur décrite comme un mélange d'œufs pourris, d'urine de chat et d'amande amère, d'après l'analyse de la sonde Rosetta.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines comètes dégagent une odeur décrite comme un mélange d'œufs pourris, d'urine de chat et d'amande amère, d'après l'analyse de la sonde Rosetta ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20com%C3%A8tes%20d%C3%A9gagent%20une%20odeur%20d%C3%A9crite%20comme%20un%20m%C3%A9lange%20d'%C5%93ufs%20pourris%2C%20d'urine%20de%20chat%20et%20d'amande%20am%C3%A8re%2C%20d'apr%C3%A8s%20l'analyse%20de%20la%20sonde%20Rosetta%20%3F",
  "explanation": "En 2014, l'instrument ROSINA de la sonde Rosetta a analysé les gaz autour de la comète 67P/Tchourioumov-Guérassimenko. Il y a détecté du sulfure d'hydrogène (œuf pourri), de l'ammoniac (urine), de l'acide cyanhydrique (amande amère), du méthanol ou encore du formaldéhyde. Les chercheurs en ont déduit l'odeur qu'aurait la comète si l'on pouvait la sentir."
 },
 {
  "text": "Il y a plus d'étoiles dans l'univers observable que de grains de sable sur toutes les plages de la Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus d'étoiles dans l'univers observable que de grains de sable sur toutes les plages de la Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20d'%C3%A9toiles%20dans%20l'univers%20observable%20que%20de%20grains%20de%20sable%20sur%20toutes%20les%20plages%20de%20la%20Terre%20%3F",
  "explanation": "On estime que l'univers observable contient environ 10^22 à 10^24 étoiles, réparties dans des centaines de milliards de galaxies. Les estimations du nombre de grains de sable sur toutes les plages terrestres tournent autour de 10^18 à 10^20. Même avec de grosses marges d'erreur, les étoiles l'emportent largement."
 },
 {
  "text": "Le point le plus proche entre la Terre et Mars n'a été atteint qu'une fois en près de 60 000 ans, en 2003.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus proche entre la Terre et Mars n'a été atteint qu'une fois en près de 60 000 ans, en 2003 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20proche%20entre%20la%20Terre%20et%20Mars%20n'a%20%C3%A9t%C3%A9%20atteint%20qu'une%20fois%20en%20pr%C3%A8s%20de%2060%C2%A0000%20ans%2C%20en%202003%20%3F",
  "explanation": "Le 27 août 2003, Mars est passée à environ 55,7 millions de kilomètres de la Terre, le rapprochement le plus serré depuis près de 60 000 ans selon les calculs. Cela s'explique par la combinaison de l'orbite très elliptique de Mars et de la position des deux planètes. Un rapprochement encore légèrement plus proche est attendu en 2287."
 },
 {
  "text": "Sur Uranus et Neptune, les scientifiques pensent qu'il pourrait pleuvoir des diamants en profondeur, sous l'effet d'une pression énorme.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Uranus et Neptune, les scientifiques pensent qu'il pourrait pleuvoir des diamants en profondeur, sous l'effet d'une pression énorme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Uranus%20et%20Neptune%2C%20les%20scientifiques%20pensent%20qu'il%20pourrait%20pleuvoir%20des%20diamants%20en%20profondeur%2C%20sous%20l'effet%20d'une%20pression%20%C3%A9norme%20%3F",
  "explanation": "Au cœur d'Uranus et de Neptune, la pression et la température sont gigantesques. Les modèles et des expériences de laboratoire au laser suggèrent que le méthane s'y décompose, et que le carbone libéré se compacte en diamants qui « tombent » lentement vers le centre. Cela reste une hypothèse, impossible à observer directement."
 },
 {
  "text": "Pluton est plus petite que plusieurs lunes du système solaire, dont notre propre Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que pluton est plus petite que plusieurs lunes du système solaire, dont notre propre Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pluton%20est%20plus%20petite%20que%20plusieurs%20lunes%20du%20syst%C3%A8me%20solaire%2C%20dont%20notre%20propre%20Lune%20%3F",
  "explanation": "Pluton mesure environ 2 377 km de diamètre. Plusieurs lunes du système solaire sont plus grandes : Ganymède, Titan, Callisto, Io, Europe, Triton et notre Lune (3 474 km). C'est une des raisons pour lesquelles elle a été reclassée « planète naine » en 2006."
 },
 {
  "text": "Un astronaute peut grandir de plusieurs centimètres dans l'espace car sa colonne vertébrale se détend en apesanteur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un astronaute peut grandir de plusieurs centimètres dans l'espace car sa colonne vertébrale se détend en apesanteur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20astronaute%20peut%20grandir%20de%20plusieurs%20centim%C3%A8tres%20dans%20l'espace%20car%20sa%20colonne%20vert%C3%A9brale%20se%20d%C3%A9tend%20en%20apesanteur%20%3F",
  "explanation": "Sur Terre, la gravité comprime en permanence les disques entre les vertèbres. En apesanteur, ils se décompressent et la colonne s'allonge : les astronautes gagnent jusqu'à environ 3 % de leur taille, soit quelques centimètres. Ils les reperdent quelques semaines après leur retour, souvent avec des maux de dos."
 },
 {
  "text": "Saturne est si peu dense qu'elle flotterait dans une baignoire assez grande pour la contenir.",
  "source": "Perplexity",
  "question": "Est-il vrai que saturne est si peu dense qu'elle flotterait dans une baignoire assez grande pour la contenir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20saturne%20est%20si%20peu%20dense%20qu'elle%20flotterait%20dans%20une%20baignoire%20assez%20grande%20pour%20la%20contenir%20%3F",
  "explanation": "La densité moyenne de Saturne est d'environ 0,69 g/cm³, inférieure à celle de l'eau (1 g/cm³), car elle est surtout faite d'hydrogène et d'hélium. En théorie, elle flotterait donc. En pratique, c'est une image : une planète gazeuse ne garderait pas sa forme dans une « baignoire »."
 },
 {
  "text": "L'eau chaude peut geler plus vite que l'eau froide dans certaines conditions, un phénomène surprenant appelé effet Mpemba.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau chaude peut geler plus vite que l'eau froide dans certaines conditions, un phénomène surprenant appelé effet Mpemba ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20chaude%20peut%20geler%20plus%20vite%20que%20l'eau%20froide%20dans%20certaines%20conditions%2C%20un%20ph%C3%A9nom%C3%A8ne%20surprenant%20appel%C3%A9%20effet%20Mpemba%20%3F",
  "explanation": "Décrit par Erasto Mpemba, alors lycéen, en 1969, l'effet Mpemba est observé dans certaines conditions : évaporation plus forte, convection, gaz dissous, surfusion... Il est cependant très débattu : les résultats sont difficiles à reproduire et dépendent énormément du protocole. Ce n'est pas une règle générale."
 },
 {
  "text": "Le verre n'est pas un liquide qui coule lentement : les vitres anciennes plus épaisses en bas viennent de leur fabrication, pas d'un écoulement.",
  "source": "Perplexity",
  "question": "Est-il vrai que le verre n'est pas un liquide qui coule lentement : les vitres anciennes plus épaisses en bas viennent de leur fabrication, pas d'un écoulement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20verre%20n'est%20pas%20un%20liquide%20qui%20coule%20lentement%C2%A0%3A%20les%20vitres%20anciennes%20plus%20%C3%A9paisses%20en%20bas%20viennent%20de%20leur%20fabrication%2C%20pas%20d'un%20%C3%A9coulement%20%3F",
  "explanation": "Le verre est un solide amorphe : à température ambiante, il faudrait bien plus que l'âge de l'univers pour qu'il coule de façon visible. Les vitres médiévales étaient fabriquées par soufflage, et leur épaisseur n'était jamais uniforme. Les vitriers posaient souvent le côté épais en bas, mais on trouve aussi des vitres anciennes plus épaisses en haut."
 },
 {
  "text": "Un éclair est environ cinq fois plus chaud que la surface du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un éclair est environ cinq fois plus chaud que la surface du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20%C3%A9clair%20est%20environ%20cinq%20fois%20plus%20chaud%20que%20la%20surface%20du%20Soleil%20%3F",
  "explanation": "Le canal d'un éclair peut atteindre environ 30 000 °C pendant une fraction de seconde. La surface visible du Soleil (la photosphère) est à environ 5 500 °C. Ce chauffage brutal de l'air provoque une dilatation explosive : c'est le tonnerre."
 },
 {
  "text": "Si l'on retirait tout l'espace vide des atomes de tous les humains, l'humanité entière tiendrait dans le volume d'un morceau de sucre.",
  "source": "Perplexity",
  "question": "Est-il vrai que si l'on retirait tout l'espace vide des atomes de tous les humains, l'humanité entière tiendrait dans le volume d'un morceau de sucre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20l'on%20retirait%20tout%20l'espace%20vide%20des%20atomes%20de%20tous%20les%20humains%2C%20l'humanit%C3%A9%20enti%C3%A8re%20tiendrait%20dans%20le%20volume%20d'un%20morceau%20de%20sucre%20%3F",
  "explanation": "Un atome est presque entièrement vide : son noyau est environ 100 000 fois plus petit que l'atome lui-même. Si on comprimait toute la matière humaine à la densité d'un noyau atomique, les quelque 8 milliards d'humains tiendraient dans un volume de l'ordre d'un morceau de sucre, qui pèserait toutefois des centaines de millions de tonnes."
 },
 {
  "text": "Le miel ne se périme jamais : on a retrouvé du miel comestible dans des tombes égyptiennes vieilles de plus de 3 000 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que le miel ne se périme jamais : on a retrouvé du miel comestible dans des tombes égyptiennes vieilles de plus de 3 000 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20miel%20ne%20se%20p%C3%A9rime%20jamais%C2%A0%3A%20on%20a%20retrouv%C3%A9%20du%20miel%20comestible%20dans%20des%20tombes%20%C3%A9gyptiennes%20vieilles%20de%20plus%20de%203%C2%A0000%20ans%20%3F",
  "explanation": "Le miel est très pauvre en eau, très riche en sucres et naturellement acide, et il contient du peroxyde d'hydrogène produit par une enzyme des abeilles. Les bactéries et moisissures n'y survivent pas. Des pots retrouvés dans des tombes égyptiennes étaient encore comestibles, même s'il peut cristalliser ou fermenter s'il prend l'humidité."
 },
 {
  "text": "L'hélium peut adopter un état superfluide où il s'écoule sans aucune friction et grimpe le long des parois de son récipient.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'hélium peut adopter un état superfluide où il s'écoule sans aucune friction et grimpe le long des parois de son récipient ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'h%C3%A9lium%20peut%20adopter%20un%20%C3%A9tat%20superfluide%20o%C3%B9%20il%20s'%C3%A9coule%20sans%20aucune%20friction%20et%20grimpe%20le%20long%20des%20parois%20de%20son%20r%C3%A9cipient%20%3F",
  "explanation": "Refroidi sous environ -271 °C (2,17 K), l'hélium 4 devient superfluide : sa viscosité tombe à zéro. Il peut alors traverser des pores microscopiques et former un film très fin qui remonte le long des parois du récipient et en déborde. C'est un effet quantique visible à l'échelle macroscopique."
 },
 {
  "text": "L'or est si malléable qu'un seul gramme peut être étiré en un fil de plus de deux kilomètres de long.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'or est si malléable qu'un seul gramme peut être étiré en un fil de plus de deux kilomètres de long ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'or%20est%20si%20mall%C3%A9able%20qu'un%20seul%20gramme%20peut%20%C3%AAtre%20%C3%A9tir%C3%A9%20en%20un%20fil%20de%20plus%20de%20deux%20kilom%C3%A8tres%20de%20long%20%3F",
  "explanation": "L'or est le métal le plus malléable et ductile qui soit. Un gramme peut être étiré en un fil de plusieurs kilomètres, ou battu en une feuille d'environ un mètre carré, si fine qu'elle laisse passer la lumière. C'est ce qu'on utilise pour la dorure à la feuille."
 },
 {
  "text": "Le sel de table ordinaire est composé de deux éléments dangereux séparément : le sodium, un métal explosif, et le chlore, un gaz toxique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sel de table ordinaire est composé de deux éléments dangereux séparément : le sodium, un métal explosif, et le chlore, un gaz toxique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sel%20de%20table%20ordinaire%20est%20compos%C3%A9%20de%20deux%20%C3%A9l%C3%A9ments%20dangereux%20s%C3%A9par%C3%A9ment%C2%A0%3A%20le%20sodium%2C%20un%20m%C3%A9tal%20explosif%2C%20et%20le%20chlore%2C%20un%20gaz%20toxique%20%3F",
  "explanation": "Le sodium pur est un métal mou qui réagit violemment avec l'eau, parfois de façon explosive. Le chlore est un gaz toxique, utilisé comme arme chimique en 1915. Combinés, ils forment le chlorure de sodium, un composé ionique stable et indispensable à notre organisme."
 },
 {
  "text": "Les poulpes ont trois cœurs, neuf cerveaux et un sang bleu à base de cuivre.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poulpes ont trois cœurs, neuf cerveaux et un sang bleu à base de cuivre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poulpes%20ont%20trois%20c%C5%93urs%2C%20neuf%20cerveaux%20et%20un%20sang%20bleu%20%C3%A0%20base%20de%20cuivre%20%3F",
  "explanation": "Le poulpe a deux cœurs pour irriguer les branchies et un troisième pour le reste du corps. Il a un cerveau central et un gros amas de neurones dans chacun de ses huit bras, d'où l'image des « neuf cerveaux ». Son sang transporte l'oxygène grâce à l'hémocyanine, une protéine à base de cuivre qui le rend bleu."
 },
 {
  "text": "Les crevettes-mantes peuvent frapper si vite que l'eau autour de leur pince se met brièvement à bouillir.",
  "source": "Perplexity",
  "question": "Est-il vrai que les crevettes-mantes peuvent frapper si vite que l'eau autour de leur pince se met brièvement à bouillir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20crevettes-mantes%20peuvent%20frapper%20si%20vite%20que%20l'eau%20autour%20de%20leur%20pince%20se%20met%20bri%C3%A8vement%20%C3%A0%20bouillir%20%3F",
  "explanation": "La crevette-mante (squille) détend sa patte ravisseuse à plus de 80 km/h avec une accélération phénoménale. Le mouvement est si rapide qu'il crée des bulles de cavitation qui implosent en libérant de la chaleur et même un peu de lumière. Localement, la température dans ces bulles est extrêmement élevée, pendant quelques nanosecondes."
 },
 {
  "text": "Les flamants roses naissent gris : leur couleur vient des pigments contenus dans leur nourriture.",
  "source": "Perplexity",
  "question": "Est-il vrai que les flamants roses naissent gris : leur couleur vient des pigments contenus dans leur nourriture ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20flamants%20roses%20naissent%20gris%C2%A0%3A%20leur%20couleur%20vient%20des%20pigments%20contenus%20dans%20leur%20nourriture%20%3F",
  "explanation": "Les poussins de flamant naissent avec un duvet gris ou blanc. Leur couleur rose vient des caroténoïdes contenus dans les algues et petits crustacés qu'ils filtrent, pigments qui se déposent dans leurs plumes. En captivité, sans nourriture adaptée, ils pâlissent."
 },
 {
  "text": "Les dauphins se donnent des noms : chacun a un sifflement signature qui l'identifie.",
  "source": "Perplexity",
  "question": "Est-il vrai que les dauphins se donnent des noms : chacun a un sifflement signature qui l'identifie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20dauphins%20se%20donnent%20des%20noms%C2%A0%3A%20chacun%20a%20un%20sifflement%20signature%20qui%20l'identifie%20%3F",
  "explanation": "Chaque grand dauphin développe un sifflement « signature » unique, qu'il utilise pour s'identifier. Des expériences ont montré que les dauphins répondent quand on diffuse leur propre sifflement, et qu'ils imitent celui d'un congénère pour l'appeler. C'est l'équivalent le plus proche d'un nom connu chez les animaux."
 },
 {
  "text": "Les kangourous ne peuvent pas reculer, en partie à cause de leur grande queue et de leurs pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les kangourous ne peuvent pas reculer, en partie à cause de leur grande queue et de leurs pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20kangourous%20ne%20peuvent%20pas%20reculer%2C%20en%20partie%20%C3%A0%20cause%20de%20leur%20grande%20queue%20et%20de%20leurs%20pattes%20%3F",
  "explanation": "Les kangourous se déplacent en sautant avec leurs deux pattes arrière synchronisées, et leur grosse queue sert de balancier et d'appui. Cette morphologie rend la marche arrière très difficile. Ils figurent d'ailleurs avec l'émeu, qui a la même réputation, sur les armoiries de l'Australie, symbole d'un pays qui « va de l'avant »."
 },
 {
  "text": "Les axolotls peuvent régénérer leurs pattes, leur cœur et même des parties de leur cerveau.",
  "source": "Perplexity",
  "question": "Est-il vrai que les axolotls peuvent régénérer leurs pattes, leur cœur et même des parties de leur cerveau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20axolotls%20peuvent%20r%C3%A9g%C3%A9n%C3%A9rer%20leurs%20pattes%2C%20leur%20c%C5%93ur%20et%20m%C3%AAme%20des%20parties%20de%20leur%20cerveau%20%3F",
  "explanation": "L'axolotl, une salamandre mexicaine, peut régénérer à l'identique des membres, la queue, la moelle épinière, des parties du cœur, des yeux et du cerveau, sans cicatrice. Il le fait de nombreuses fois au cours de sa vie. C'est un modèle étudié de près en médecine régénérative. L'espèce est en danger critique d'extinction à l'état sauvage."
 },
 {
  "text": "Les tardigrades, minuscules animaux, peuvent survivre dans l'espace, à la congélation, à la déshydratation et à des radiations extrêmes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les tardigrades, minuscules animaux, peuvent survivre dans l'espace, à la congélation, à la déshydratation et à des radiations extrêmes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20tardigrades%2C%20minuscules%20animaux%2C%20peuvent%20survivre%20dans%20l'espace%2C%20%C3%A0%20la%20cong%C3%A9lation%2C%20%C3%A0%20la%20d%C3%A9shydratation%20et%20%C3%A0%20des%20radiations%20extr%C3%AAmes%20%3F",
  "explanation": "Les tardigrades, longs d'environ un demi-millimètre, peuvent entrer en cryptobiose : ils se déshydratent, et leur métabolisme devient presque nul. Dans cet état, ils survivent au vide spatial (expérience TARDIS en 2007), à des températures proches du zéro absolu et à de fortes radiations. Ils reprennent vie une fois réhydratés."
 },
 {
  "text": "Les loutres de mer se tiennent parfois les pattes en dormant pour ne pas dériver et se perdre.",
  "source": "Perplexity",
  "question": "Est-il vrai que les loutres de mer se tiennent parfois les pattes en dormant pour ne pas dériver et se perdre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20loutres%20de%20mer%20se%20tiennent%20parfois%20les%20pattes%20en%20dormant%20pour%20ne%20pas%20d%C3%A9river%20et%20se%20perdre%20%3F",
  "explanation": "Les loutres de mer dorment sur le dos à la surface de l'eau. Pour ne pas être emportées par le courant, elles s'enroulent dans les algues géantes (kelp), et on observe parfois des individus se tenant par les pattes. Les groupes de loutres au repos s'appellent des « radeaux »."
 },
 {
  "text": "Les abeilles peuvent reconnaître des visages humains en combinant des éléments comme dans un puzzle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les abeilles peuvent reconnaître des visages humains en combinant des éléments comme dans un puzzle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20abeilles%20peuvent%20reconna%C3%AEtre%20des%20visages%20humains%20en%20combinant%20des%20%C3%A9l%C3%A9ments%20comme%20dans%20un%20puzzle%20%3F",
  "explanation": "Des expériences ont montré que les abeilles domestiques peuvent apprendre à reconnaître une photo de visage humain en l'associant à une récompense sucrée. Elles traitent les visages de manière « configurale », en assemblant yeux, nez et bouche en un tout. Un cerveau d'environ un million de neurones suffit donc pour cette tâche."
 },
 {
  "text": "Les crocodiles ne peuvent pas tirer la langue, celle-ci étant fixée au fond de leur bouche.",
  "source": "Perplexity",
  "question": "Est-il vrai que les crocodiles ne peuvent pas tirer la langue, celle-ci étant fixée au fond de leur bouche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20crocodiles%20ne%20peuvent%20pas%20tirer%20la%20langue%2C%20celle-ci%20%C3%A9tant%20fix%C3%A9e%20au%20fond%20de%20leur%20bouche%20%3F",
  "explanation": "La langue du crocodile est maintenue au plancher de la bouche par une membrane, il ne peut pas la sortir. Il a aussi une valve au fond de la gorge qui lui permet d'ouvrir la gueule sous l'eau sans se noyer. La langue joue un rôle limité dans sa façon de manger : il avale ses proies en grosses bouchées."
 },
 {
  "text": "Les koalas ont des empreintes digitales si semblables aux nôtres qu'elles pourraient tromper une analyse rapide.",
  "source": "Perplexity",
  "question": "Est-il vrai que les koalas ont des empreintes digitales si semblables aux nôtres qu'elles pourraient tromper une analyse rapide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20koalas%20ont%20des%20empreintes%20digitales%20si%20semblables%20aux%20n%C3%B4tres%20qu'elles%20pourraient%20tromper%20une%20analyse%20rapide%20%3F",
  "explanation": "Les koalas sont parmi les rares animaux non primates à avoir des empreintes digitales. Elles ressemblent tellement aux nôtres, avec boucles et arches, qu'il est difficile de les distinguer même au microscope. Elles les aident probablement à saisir l'écorce et à sélectionner les feuilles d'eucalyptus."
 },
 {
  "text": "Le blob, un organisme unicellulaire, n'a ni cerveau ni neurones mais peut apprendre et résoudre des labyrinthes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le blob, un organisme unicellulaire, n'a ni cerveau ni neurones mais peut apprendre et résoudre des labyrinthes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20blob%2C%20un%20organisme%20unicellulaire%2C%20n'a%20ni%20cerveau%20ni%20neurones%20mais%20peut%20apprendre%20et%20r%C3%A9soudre%20des%20labyrinthes%20%3F",
  "explanation": "Physarum polycephalum, surnommé le blob, est une seule cellule géante pouvant contenir des millions de noyaux. Il trouve le plus court chemin vers la nourriture dans un labyrinthe, et des chercheurs du CNRS ont montré qu'il pouvait s'habituer à une substance répulsive et transmettre cet apprentissage à un autre blob en fusionnant."
 },
 {
  "text": "Certaines méduses, comme Turritopsis dohrnii, peuvent inverser leur cycle de vie et rajeunir, ce qui leur vaut le surnom de méduse immortelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines méduses, comme Turritopsis dohrnii, peuvent inverser leur cycle de vie et rajeunir, ce qui leur vaut le surnom de méduse immortelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20m%C3%A9duses%2C%20comme%20Turritopsis%20dohrnii%2C%20peuvent%20inverser%20leur%20cycle%20de%20vie%20et%20rajeunir%2C%20ce%20qui%20leur%20vaut%20le%20surnom%20de%20m%C3%A9duse%20immortelle%20%3F",
  "explanation": "Face au stress, à une blessure ou à la vieillesse, Turritopsis dohrnii peut retransformer sa forme adulte (la méduse) en polype, son stade juvénile, puis recommencer son cycle. En théorie, elle peut répéter ce processus indéfiniment. En pratique, elle meurt souvent de maladie ou mangée par des prédateurs."
 },
 {
  "text": "Les rats rient quand on les chatouille, avec des vocalisations aiguës inaudibles pour nous sans instruments.",
  "source": "Perplexity",
  "question": "Est-il vrai que les rats rient quand on les chatouille, avec des vocalisations aiguës inaudibles pour nous sans instruments ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20rats%20rient%20quand%20on%20les%20chatouille%2C%20avec%20des%20vocalisations%20aigu%C3%ABs%20inaudibles%20pour%20nous%20sans%20instruments%20%3F",
  "explanation": "Le neuroscientifique Jaak Panksepp a montré que les rats chatouillés émettent des ultrasons autour de 50 kHz, associés au jeu et au plaisir. Ils recherchent ensuite la main qui les chatouille. Ces cris sont inaudibles pour nous sans détecteur à ultrasons."
 },
 {
  "text": "Un poulpe peut passer à travers n'importe quel trou plus grand que son bec, la seule partie dure de son corps.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un poulpe peut passer à travers n'importe quel trou plus grand que son bec, la seule partie dure de son corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20poulpe%20peut%20passer%20%C3%A0%20travers%20n'importe%20quel%20trou%20plus%20grand%20que%20son%20bec%2C%20la%20seule%20partie%20dure%20de%20son%20corps%20%3F",
  "explanation": "Le corps du poulpe n'a ni squelette ni os. Sa seule partie rigide est son bec, semblable à celui d'un perroquet. Tant que ce bec passe, le reste du corps peut s'aplatir et suivre, ce qui permet à de gros poulpes de se glisser dans des fentes minuscules et de s'échapper d'aquariums."
 },
 {
  "text": "Les corbeaux fabriquent des outils, planifient l'avenir et gardent rancune envers des humains précis.",
  "source": "Perplexity",
  "question": "Est-il vrai que les corbeaux fabriquent des outils, planifient l'avenir et gardent rancune envers des humains précis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20corbeaux%20fabriquent%20des%20outils%2C%20planifient%20l'avenir%20et%20gardent%20rancune%20envers%20des%20humains%20pr%C3%A9cis%20%3F",
  "explanation": "Les corbeaux de Nouvelle-Calédonie taillent des crochets dans des brindilles. En laboratoire, des corvidés ont montré qu'ils pouvaient choisir et garder un outil pour l'utiliser plus tard. Une étude de l'université de Washington a montré que des corneilles se souviennent pendant des années d'un visage humain qui les a menacées et le harcèlent en groupe."
 },
 {
  "text": "Les guépards ne rugissent pas, ils miaulent et ronronnent comme des chats domestiques.",
  "source": "Perplexity",
  "question": "Est-il vrai que les guépards ne rugissent pas, ils miaulent et ronronnent comme des chats domestiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gu%C3%A9pards%20ne%20rugissent%20pas%2C%20ils%20miaulent%20et%20ronronnent%20comme%20des%20chats%20domestiques%20%3F",
  "explanation": "Le guépard n'a pas le larynx et l'os hyoïde souple qui permettent aux lions, tigres, léopards et jaguars de rugir. À la place, il ronronne, siffle, grogne et émet des petits cris aigus ressemblant à des pépiements ou des miaulements. C'est pourquoi il est classé à part des « grands félins rugissants »."
 },
 {
  "text": "Le poisson-clown peut changer de sexe, et c'est le mâle dominant qui devient femelle en cas de besoin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-clown peut changer de sexe, et c'est le mâle dominant qui devient femelle en cas de besoin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-clown%20peut%20changer%20de%20sexe%2C%20et%20c'est%20le%20m%C3%A2le%20dominant%20qui%20devient%20femelle%20en%20cas%20de%20besoin%20%3F",
  "explanation": "Les poissons-clowns naissent tous mâles. Dans une anémone, seule la plus grosse est femelle et le plus gros mâle est son partenaire. Si la femelle meurt, ce mâle dominant devient femelle de façon irréversible, et le plus gros des autres mâles prend sa place. Dans « Le Monde de Nemo », Marin aurait donc dû devenir femelle."
 },
 {
  "text": "Le wombat produit des crottes de forme cubique, un cas unique dans le règne animal.",
  "source": "Perplexity",
  "question": "Est-il vrai que le wombat produit des crottes de forme cubique, un cas unique dans le règne animal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20wombat%20produit%20des%20crottes%20de%20forme%20cubique%2C%20un%20cas%20unique%20dans%20le%20r%C3%A8gne%20animal%20%3F",
  "explanation": "Le wombat produit environ 80 à 100 crottes cubiques par nuit. Leur forme vient des parois de la dernière partie de son intestin, qui présentent des zones d'élasticité différentes. Il dépose ces cubes en hauteur, sur des rochers ou des troncs, pour marquer son territoire : ils ne roulent pas."
 },
 {
  "text": "Un cafard peut survivre plusieurs semaines sans sa tête avant de mourir de faim.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un cafard peut survivre plusieurs semaines sans sa tête avant de mourir de faim ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20cafard%20peut%20survivre%20plusieurs%20semaines%20sans%20sa%20t%C3%AAte%20avant%20de%20mourir%20de%20faim%20%3F",
  "explanation": "Le cafard respire par de petits orifices répartis sur tout son corps et non par la bouche ou le nez. Sa pression sanguine est faible, et la plaie peut coaguler rapidement. Sans tête, il peut donc continuer à vivre jusqu'à quelques semaines, jusqu'à mourir de déshydratation ou de faim faute de pouvoir boire et manger."
 },
 {
  "text": "La cornée de l'œil est l'un des rares tissus du corps à ne recevoir aucun vaisseau sanguin, elle respire directement l'air.",
  "source": "Perplexity",
  "question": "Est-il vrai que la cornée de l'œil est l'un des rares tissus du corps à ne recevoir aucun vaisseau sanguin, elle respire directement l'air ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20corn%C3%A9e%20de%20l'%C5%93il%20est%20l'un%20des%20rares%20tissus%20du%20corps%20%C3%A0%20ne%20recevoir%20aucun%20vaisseau%20sanguin%2C%20elle%20respire%20directement%20l'air%20%3F",
  "explanation": "La cornée doit être parfaitement transparente, ce qui exclut les vaisseaux sanguins. Elle reçoit son oxygène principalement de l'air, dissous dans le film lacrymal, et ses nutriments de l'humeur aqueuse derrière elle. C'est pour cela que les lentilles de contact doivent laisser passer l'oxygène."
 },
 {
  "text": "Le corps humain émet une très faible lueur, invisible à l'œil nu, appelée bioluminescence humaine.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain émet une très faible lueur, invisible à l'œil nu, appelée bioluminescence humaine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20%C3%A9met%20une%20tr%C3%A8s%20faible%20lueur%2C%20invisible%20%C3%A0%20l'%C5%93il%20nu%2C%20appel%C3%A9e%20bioluminescence%20humaine%20%3F",
  "explanation": "En 2009, des chercheurs ont filmé avec des caméras ultra-sensibles une émission de lumière par le corps humain, environ 1 000 fois trop faible pour notre œil. Elle vient de réactions chimiques liées au métabolisme et aux radicaux libres, et varie au cours de la journée. On parle plutôt d'émission ultra-faible de photons que de vraie bioluminescence."
 },
 {
  "text": "La banane est botaniquement une baie, mais la fraise n'en est pas une.",
  "source": "Perplexity",
  "question": "Est-il vrai que la banane est botaniquement une baie, mais la fraise n'en est pas une ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20banane%20est%20botaniquement%20une%20baie%2C%20mais%20la%20fraise%20n'en%20est%20pas%20une%20%3F",
  "explanation": "En botanique, une baie est un fruit charnu issu d'un seul ovaire, avec des graines à l'intérieur. La banane, la tomate ou le kiwi en sont. La fraise est un « faux fruit » : sa partie charnue vient du réceptacle de la fleur, et les vrais fruits sont les petits grains (akènes) à sa surface."
 },
 {
  "text": "Le wasabi servi dans la plupart des restaurants est en réalité du raifort coloré, le vrai wasabi étant rare et cher.",
  "source": "Perplexity",
  "question": "Est-il vrai que le wasabi servi dans la plupart des restaurants est en réalité du raifort coloré, le vrai wasabi étant rare et cher ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20wasabi%20servi%20dans%20la%20plupart%20des%20restaurants%20est%20en%20r%C3%A9alit%C3%A9%20du%20raifort%20color%C3%A9%2C%20le%20vrai%20wasabi%20%C3%A9tant%20rare%20et%20cher%20%3F",
  "explanation": "Le vrai wasabi (Eutrema japonicum) est une plante difficile à cultiver, qui pousse lentement au bord de ruisseaux froids, et coûte très cher. La plupart des pâtes vendues sont un mélange de raifort, de moutarde et de colorant vert, avec parfois un peu de vrai wasabi. Le vrai perd aussi son arôme en quelques minutes une fois râpé."
 },
 {
  "text": "Le fromage est l'aliment le plus volé au monde selon plusieurs études sur le vol en magasin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fromage est l'aliment le plus volé au monde selon plusieurs études sur le vol en magasin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fromage%20est%20l'aliment%20le%20plus%20vol%C3%A9%20au%20monde%20selon%20plusieurs%20%C3%A9tudes%20sur%20le%20vol%20en%20magasin%20%3F",
  "explanation": "Plusieurs enquêtes, dont le Global Retail Theft Barometer, ont classé le fromage parmi les produits alimentaires les plus volés en magasin, avec un taux d'environ 4 % de la production selon certaines estimations. Sa valeur élevée, sa petite taille et la facilité à le revendre l'expliquent. Le classement varie toutefois selon les études et les pays."
 },
 {
  "text": "Les tomates étaient longtemps considérées comme toxiques en Europe car les riches tombaient malades, en réalité à cause du plomb de leur vaisselle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les tomates étaient longtemps considérées comme toxiques en Europe car les riches tombaient malades, en réalité à cause du plomb de leur vaisselle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20tomates%20%C3%A9taient%20longtemps%20consid%C3%A9r%C3%A9es%20comme%20toxiques%20en%20Europe%20car%20les%20riches%20tombaient%20malades%2C%20en%20r%C3%A9alit%C3%A9%20%C3%A0%20cause%20du%20plomb%20de%20leur%20vaisselle%20%3F",
  "explanation": "Aux XVIe-XVIIIe siècles, la tomate, de la même famille que la belladone, inspirait la méfiance en Europe. On raconte que les aristocrates tombaient malades car l'acidité de la tomate dissolvait le plomb de leurs assiettes en étain. Cette explication est populaire mais historiquement discutée ; la méfiance venait aussi de la parenté botanique avec des plantes toxiques."
 },
 {
  "text": "La guerre la plus courte de l'histoire, entre le Royaume-Uni et Zanzibar en 1896, a duré moins de 45 minutes.",
  "source": "Perplexity",
  "question": "Est-il vrai que la guerre la plus courte de l'histoire, entre le Royaume-Uni et Zanzibar en 1896, a duré moins de 45 minutes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20guerre%20la%20plus%20courte%20de%20l'histoire%2C%20entre%20le%20Royaume-Uni%20et%20Zanzibar%20en%201896%2C%20a%20dur%C3%A9%20moins%20de%2045%20minutes%20%3F",
  "explanation": "Le 27 août 1896, après la prise du pouvoir d'un sultan non approuvé par Londres, la Royal Navy bombarde le palais de Zanzibar. Le sultan fuit, et la reddition intervient au bout de 38 à 45 minutes selon les sources. C'est considéré comme la guerre la plus courte jamais enregistrée."
 },
 {
  "text": "Cléopâtre a vécu plus près dans le temps de l'invention du smartphone que de la construction de la grande pyramide de Gizeh.",
  "source": "Perplexity",
  "question": "Est-il vrai que cléopâtre a vécu plus près dans le temps de l'invention du smartphone que de la construction de la grande pyramide de Gizeh ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20cl%C3%A9op%C3%A2tre%20a%20v%C3%A9cu%20plus%20pr%C3%A8s%20dans%20le%20temps%20de%20l'invention%20du%20smartphone%20que%20de%20la%20construction%20de%20la%20grande%20pyramide%20de%20Gizeh%20%3F",
  "explanation": "La grande pyramide de Gizeh a été construite vers 2560 av. J.-C. Cléopâtre est morte en 30 av. J.-C., soit environ 2 500 ans plus tard. Le premier iPhone date de 2007, environ 2 040 ans après elle. Pour Cléopâtre, les pyramides étaient déjà des monuments très anciens."
 },
 {
  "text": "Les pyramides d'Égypte étaient à l'origine recouvertes d'un calcaire blanc poli qui les faisait briller au soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pyramides d'Égypte étaient à l'origine recouvertes d'un calcaire blanc poli qui les faisait briller au soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pyramides%20d'%C3%89gypte%20%C3%A9taient%20%C3%A0%20l'origine%20recouvertes%20d'un%20calcaire%20blanc%20poli%20qui%20les%20faisait%20briller%20au%20soleil%20%3F",
  "explanation": "Les grandes pyramides étaient recouvertes d'un parement de calcaire blanc de Tourah, poli et ajusté avec précision. Il reflétait le soleil et les rendait éclatantes. Ces blocs ont été en grande partie récupérés au Moyen Âge, notamment après un séisme en 1303, pour construire Le Caire. Il en reste au sommet de la pyramide de Khéphren."
 },
 {
  "text": "Oxford, en Angleterre, était déjà une université avant que la civilisation aztèque ne fonde sa capitale.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'oxford, en Angleterre, était déjà une université avant que la civilisation aztèque ne fonde sa capitale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'oxford%2C%20en%20Angleterre%2C%20%C3%A9tait%20d%C3%A9j%C3%A0%20une%20universit%C3%A9%20avant%20que%20la%20civilisation%20azt%C3%A8que%20ne%20fonde%20sa%20capitale%20%3F",
  "explanation": "L'enseignement est attesté à Oxford dès 1096, et l'université se développe rapidement à partir de 1167. Les Aztèques ont fondé Tenochtitlan, leur capitale, vers 1325. Oxford enseignait donc depuis plus de deux siècles quand Tenochtitlan a été fondée."
 },
 {
  "text": "Les gladiateurs romains étaient souvent végétariens et surnommés mangeurs d'orge.",
  "source": "Perplexity",
  "question": "Est-il vrai que les gladiateurs romains étaient souvent végétariens et surnommés mangeurs d'orge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gladiateurs%20romains%20%C3%A9taient%20souvent%20v%C3%A9g%C3%A9tariens%20et%20surnomm%C3%A9s%20mangeurs%20d'orge%20%3F",
  "explanation": "L'analyse d'os retrouvés dans un cimetière de gladiateurs à Éphèse a montré un régime riche en céréales et légumineuses, et pauvre en viande. Les textes romains les appelaient « hordearii », les mangeurs d'orge. Cette alimentation calorique les aidait peut-être à avoir une couche de graisse protectrice. Ils buvaient aussi une boisson à base de cendres végétales, riche en calcium."
 },
 {
  "text": "Le mammouth laineux existait encore lorsque les pyramides d'Égypte étaient déjà construites, certains ayant survécu sur une île isolée.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mammouth laineux existait encore lorsque les pyramides d'Égypte étaient déjà construites, certains ayant survécu sur une île isolée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mammouth%20laineux%20existait%20encore%20lorsque%20les%20pyramides%20d'%C3%89gypte%20%C3%A9taient%20d%C3%A9j%C3%A0%20construites%2C%20certains%20ayant%20surv%C3%A9cu%20sur%20une%20%C3%AEle%20isol%C3%A9e%20%3F",
  "explanation": "La plupart des mammouths ont disparu il y a environ 10 000 ans, mais une petite population a survécu sur l'île Wrangel, au nord de la Sibérie, jusqu'à environ 2000 av. J.-C. La grande pyramide de Gizeh, elle, date d'environ 2560 av. J.-C. Les deux ont donc coexisté quelques siècles."
 },
 {
  "text": "Les Romains utilisaient de l'urine comme produit nettoyant et même pour blanchir les dents, à cause de son ammoniac.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Romains utilisaient de l'urine comme produit nettoyant et même pour blanchir les dents, à cause de son ammoniac ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Romains%20utilisaient%20de%20l'urine%20comme%20produit%20nettoyant%20et%20m%C3%AAme%20pour%20blanchir%20les%20dents%2C%20%C3%A0%20cause%20de%20son%20ammoniac%20%3F",
  "explanation": "L'urine en décomposition produit de l'ammoniac, un excellent nettoyant. Les Romains collectaient l'urine dans des urinoirs publics pour les fouleries, qui nettoyaient et blanchissaient les vêtements. L'empereur Vespasien a même taxé sa collecte, d'où l'expression « l'argent n'a pas d'odeur ». Certains textes évoquent aussi son usage pour les dents."
 },
 {
  "text": "Les anciens Égyptiens se rasaient les sourcils en signe de deuil à la mort de leur chat.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anciens Égyptiens se rasaient les sourcils en signe de deuil à la mort de leur chat ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anciens%20%C3%89gyptiens%20se%20rasaient%20les%20sourcils%20en%20signe%20de%20deuil%20%C3%A0%20la%20mort%20de%20leur%20chat%20%3F",
  "explanation": "D'après l'historien Hérodote, lorsqu'un chat mourait dans une maison égyptienne, tous les habitants se rasaient les sourcils en signe de deuil. Les chats étaient associés à la déesse Bastet et souvent momifiés. Le fait repose principalement sur ce témoignage d'Hérodote."
 },
 {
  "text": "Les Vikings n'avaient pas de casques à cornes : cette image vient surtout d'opéras et d'illustrations du 19e siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Vikings n'avaient pas de casques à cornes : cette image vient surtout d'opéras et d'illustrations du 19e siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Vikings%20n'avaient%20pas%20de%20casques%20%C3%A0%20cornes%C2%A0%3A%20cette%20image%20vient%20surtout%20d'op%C3%A9ras%20et%20d'illustrations%20du%2019e%20si%C3%A8cle%20%3F",
  "explanation": "Aucun casque viking à cornes n'a été retrouvé par les archéologues, et les combattants portaient des casques coniques ou des calottes simples. L'image s'est imposée au XIXe siècle grâce à des peintres romantiques et surtout aux costumes de l'opéra de Wagner « L'Anneau du Nibelung » (1876). Des casques à cornes existent, mais ils sont bien plus anciens et cérémoniels."
 },
 {
  "text": "La fourchette a longtemps été considérée comme un objet scandaleux et efféminé en Europe.",
  "source": "Perplexity",
  "question": "Est-il vrai que la fourchette a longtemps été considérée comme un objet scandaleux et efféminé en Europe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20fourchette%20a%20longtemps%20%C3%A9t%C3%A9%20consid%C3%A9r%C3%A9e%20comme%20un%20objet%20scandaleux%20et%20eff%C3%A9min%C3%A9%20en%20Europe%20%3F",
  "explanation": "Arrivée de Byzance, la fourchette a scandalisé au XIe siècle à Venise, où une princesse byzantine qui l'utilisait fut accusée de raffinement excessif. En France, au XVIe siècle, la cour d'Henri III fut moquée pour son usage. Elle n'est devenue courante en Europe qu'aux XVIIe et XVIIIe siècles."
 },
 {
  "text": "Certaines momies égyptiennes ont été, à une époque, réduites en poudre et vendues comme remède médical.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines momies égyptiennes ont été, à une époque, réduites en poudre et vendues comme remède médical ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20momies%20%C3%A9gyptiennes%20ont%20%C3%A9t%C3%A9%2C%20%C3%A0%20une%20%C3%A9poque%2C%20r%C3%A9duites%20en%20poudre%20et%20vendues%20comme%20rem%C3%A8de%20m%C3%A9dical%20%3F",
  "explanation": "Du XIIe au XVIIIe siècle environ, la « mumia », de la poudre de momie, était vendue en Europe dans les apothicaireries pour soigner contusions, maux de tête ou hémorragies. Le terme vient d'une confusion avec un bitume naturel utilisé comme remède. La demande était telle que de fausses momies étaient fabriquées."
 },
 {
  "text": "Avant les réveils, des hommes payés frappaient aux fenêtres avec de longues perches pour réveiller les ouvriers en Angleterre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'avant les réveils, des hommes payés frappaient aux fenêtres avec de longues perches pour réveiller les ouvriers en Angleterre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'avant%20les%20r%C3%A9veils%2C%20des%20hommes%20pay%C3%A9s%20frappaient%20aux%20fen%C3%AAtres%20avec%20de%20longues%20perches%20pour%20r%C3%A9veiller%20les%20ouvriers%20en%20Angleterre%20%3F",
  "explanation": "Au Royaume-Uni et en Irlande, du XIXe siècle jusqu'aux années 1920 environ, les « knocker-uppers » réveillaient les ouvriers en tapant aux fenêtres avec de longues perches, voire en tirant des pois avec une sarbacane. Ils étaient payés quelques pennies par semaine. Les réveils mécaniques abordables les ont rendus obsolètes."
 },
 {
  "text": "La chute du mur de Berlin en 1989 a été précipitée en partie par une annonce administrative mal formulée.",
  "source": "Perplexity",
  "question": "Est-il vrai que la chute du mur de Berlin en 1989 a été précipitée en partie par une annonce administrative mal formulée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20chute%20du%20mur%20de%20Berlin%20en%201989%20a%20%C3%A9t%C3%A9%20pr%C3%A9cipit%C3%A9e%20en%20partie%20par%20une%20annonce%20administrative%20mal%20formul%C3%A9e%20%3F",
  "explanation": "Le 9 novembre 1989, le porte-parole est-allemand Günter Schabowski annonce en conférence de presse de nouvelles règles de voyage. Mal briefé, il répond que cela s'applique « immédiatement, sans délai ». Des milliers de Berlinois se ruent aux postes-frontières et les gardes, débordés, finissent par ouvrir. Le mur tombe le soir même."
 },
 {
  "text": "Le Sahara n'est pas le plus grand désert du monde : l'Antarctique, un désert froid, est bien plus étendu.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Sahara n'est pas le plus grand désert du monde : l'Antarctique, un désert froid, est bien plus étendu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Sahara%20n'est%20pas%20le%20plus%20grand%20d%C3%A9sert%20du%20monde%C2%A0%3A%20l'Antarctique%2C%20un%20d%C3%A9sert%20froid%2C%20est%20bien%20plus%20%C3%A9tendu%20%3F",
  "explanation": "Un désert se définit par de très faibles précipitations, pas par la chaleur. L'Antarctique reçoit moins de 200 mm d'équivalent eau par an et couvre environ 14 millions de km² : c'est le plus grand désert du monde. Le Sahara, avec environ 9 millions de km², est le plus grand désert chaud."
 },
 {
  "text": "Le mont Chimborazo en Équateur est le point de la surface terrestre le plus éloigné du centre de la Terre, à cause du renflement de l'équateur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mont Chimborazo en Équateur est le point de la surface terrestre le plus éloigné du centre de la Terre, à cause du renflement de l'équateur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mont%20Chimborazo%20en%20%C3%89quateur%20est%20le%20point%20de%20la%20surface%20terrestre%20le%20plus%20%C3%A9loign%C3%A9%20du%20centre%20de%20la%20Terre%2C%20%C3%A0%20cause%20du%20renflement%20de%20l'%C3%A9quateur%20%3F",
  "explanation": "La Terre est légèrement aplatie aux pôles et renflée à l'équateur. Le Chimborazo, haut de 6 263 m, se trouve presque sur l'équateur : son sommet est à environ 6 384 km du centre de la Terre, soit 2 km de plus que celui de l'Everest. L'Everest reste le plus haut au-dessus du niveau de la mer."
 },
 {
  "text": "L'Australie est plus large que la Lune, en diamètre.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Australie est plus large que la Lune, en diamètre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Australie%20est%20plus%20large%20que%20la%20Lune%2C%20en%20diam%C3%A8tre%20%3F",
  "explanation": "L'Australie mesure environ 4 000 km d'est en ouest. Le diamètre de la Lune est d'environ 3 474 km. L'Australie est donc plus large, bien que la surface de la Lune (38 millions de km²) soit environ cinq fois plus grande que celle de l'Australie."
 },
 {
  "text": "Il n'y a aucune fourmi en Islande, en Antarctique ni au Groenland, entre autres endroits.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il n'y a aucune fourmi en Islande, en Antarctique ni au Groenland, entre autres endroits ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20n'y%20a%20aucune%20fourmi%20en%20Islande%2C%20en%20Antarctique%20ni%20au%20Groenland%2C%20entre%20autres%20endroits%20%3F",
  "explanation": "Les fourmis sont présentes sur presque toutes les terres émergées, mais pas en Antarctique, au Groenland, en Islande et sur quelques îles isolées, à cause du froid. Des fourmis sont parfois importées en Islande dans des bâtiments chauffés, mais sans populations sauvages établies."
 },
 {
  "text": "Le Canada possède plus de lacs que tout le reste du monde réuni.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Canada possède plus de lacs que tout le reste du monde réuni ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Canada%20poss%C3%A8de%20plus%20de%20lacs%20que%20tout%20le%20reste%20du%20monde%20r%C3%A9uni%20%3F",
  "explanation": "Le Canada compte environ 900 000 lacs de plus de 10 hectares, soit plus de la moitié des lacs du monde. Ils sont un héritage des glaciers de la dernière glaciation, qui ont creusé le Bouclier canadien. Une partie de ce comptage dépend de la taille minimale retenue pour un « lac »."
 },
 {
  "text": "Le désert d'Atacama au Chili est l'endroit le plus sec du monde, certaines zones n'ayant jamais enregistré de pluie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le désert d'Atacama au Chili est l'endroit le plus sec du monde, certaines zones n'ayant jamais enregistré de pluie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20d%C3%A9sert%20d'Atacama%20au%20Chili%20est%20l'endroit%20le%20plus%20sec%20du%20monde%2C%20certaines%20zones%20n'ayant%20jamais%20enregistr%C3%A9%20de%20pluie%20%3F",
  "explanation": "Situé entre la cordillère des Andes et la cordillère de la Côte, le désert d'Atacama est bloqué des deux côtés de l'humidité. Certaines stations météo n'y ont jamais enregistré de pluie significative. Ses sols ressemblent tellement à ceux de Mars que la NASA y teste ses instruments."
 },
 {
  "text": "La France est le pays qui possède le plus de fuseaux horaires au monde grâce à ses territoires d'outre-mer.",
  "source": "Perplexity",
  "question": "Est-il vrai que la France est le pays qui possède le plus de fuseaux horaires au monde grâce à ses territoires d'outre-mer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20France%20est%20le%20pays%20qui%20poss%C3%A8de%20le%20plus%20de%20fuseaux%20horaires%20au%20monde%20gr%C3%A2ce%20%C3%A0%20ses%20territoires%20d'outre-mer%20%3F",
  "explanation": "Avec ses territoires d'outre-mer répartis sur tous les océans (Polynésie, Antilles, Réunion, Nouvelle-Calédonie, Terres australes...), la France couvre 12 fuseaux horaires, 13 en comptant la terre Adélie en Antarctique. Elle devance la Russie et les États-Unis."
 },
 {
  "text": "Le point culminant et le point le plus bas des États-Unis contigus sont distants de moins de 150 kilomètres, en Californie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point culminant et le point le plus bas des États-Unis contigus sont distants de moins de 150 kilomètres, en Californie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20culminant%20et%20le%20point%20le%20plus%20bas%20des%20%C3%89tats-Unis%20contigus%20sont%20distants%20de%20moins%20de%20150%20kilom%C3%A8tres%2C%20en%20Californie%20%3F",
  "explanation": "Le mont Whitney (4 421 m) et le bassin de Badwater dans la vallée de la Mort (-86 m) se trouvent tous les deux en Californie, à environ 136 km à vol d'oiseau. Ce sont le point le plus haut et le plus bas des 48 États contigus. Le relief entre les deux est spectaculaire."
 },
 {
  "text": "L'Alaska est à la fois l'État le plus au nord, le plus à l'ouest et, à cause des îles Aléoutiennes, le plus à l'est des États-Unis.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Alaska est à la fois l'État le plus au nord, le plus à l'ouest et, à cause des îles Aléoutiennes, le plus à l'est des États-Unis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Alaska%20est%20%C3%A0%20la%20fois%20l'%C3%89tat%20le%20plus%20au%20nord%2C%20le%20plus%20%C3%A0%20l'ouest%20et%2C%20%C3%A0%20cause%20des%20%C3%AEles%20Al%C3%A9outiennes%2C%20le%20plus%20%C3%A0%20l'est%20des%20%C3%89tats-Unis%20%3F",
  "explanation": "L'Alaska est l'État le plus au nord et le plus à l'ouest. Les îles Aléoutiennes s'étendent si loin qu'elles traversent le 180e méridien : certaines se trouvent donc en longitude est. Techniquement, l'Alaska est aussi l'État le plus à l'est."
 },
 {
  "text": "Le point Nemo, dans l'océan Pacifique, est si isolé que les humains les plus proches sont souvent les astronautes en orbite.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point Nemo, dans l'océan Pacifique, est si isolé que les humains les plus proches sont souvent les astronautes en orbite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20Nemo%2C%20dans%20l'oc%C3%A9an%20Pacifique%2C%20est%20si%20isol%C3%A9%20que%20les%20humains%20les%20plus%20proches%20sont%20souvent%20les%20astronautes%20en%20orbite%20%3F",
  "explanation": "Le point Nemo est le point océanique le plus éloigné de toute terre, à environ 2 700 km des côtes les plus proches. La Station spatiale internationale orbite à environ 400 km d'altitude : quand elle passe au-dessus, ses astronautes sont les humains les plus proches. C'est aussi un cimetière de satellites et vaisseaux spatiaux."
 },
 {
  "text": "Certaines langues, comme le tuyuca d'Amazonie, obligent le locuteur à préciser comment il sait ce qu'il affirme.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines langues, comme le tuyuca d'Amazonie, obligent le locuteur à préciser comment il sait ce qu'il affirme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20langues%2C%20comme%20le%20tuyuca%20d'Amazonie%2C%20obligent%20le%20locuteur%20%C3%A0%20pr%C3%A9ciser%20comment%20il%20sait%20ce%20qu'il%20affirme%20%3F",
  "explanation": "Le tuyuca possède des « évidentiels », des marques grammaticales obligatoires indiquant la source de l'information : vu, entendu, déduit, rapporté par quelqu'un... Dire une phrase sans préciser comment on le sait est grammaticalement incorrect. D'autres langues (turc, quechua, tibétain...) ont aussi des systèmes d'évidentialité."
 },
 {
  "text": "Il existe des langues sifflées, comme aux Canaries, capables de transmettre des messages complexes d'une vallée à l'autre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des langues sifflées, comme aux Canaries, capables de transmettre des messages complexes d'une vallée à l'autre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20langues%20siffl%C3%A9es%2C%20comme%20aux%20Canaries%2C%20capables%20de%20transmettre%20des%20messages%20complexes%20d'une%20vall%C3%A9e%20%C3%A0%20l'autre%20%3F",
  "explanation": "Le silbo gomero, de l'île de La Gomera aux Canaries, transpose l'espagnol en sifflements. Il peut porter jusqu'à plusieurs kilomètres à travers les ravins, et permet de transmettre des phrases complètes. Il est inscrit au patrimoine culturel immatériel de l'UNESCO et enseigné à l'école. D'autres langues sifflées existent, notamment en Turquie ou dans les Pyrénées."
 },
 {
  "text": "L'islandais est resté si proche du vieux norrois que ses locuteurs peuvent encore lire des textes vieux de mille ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'islandais est resté si proche du vieux norrois que ses locuteurs peuvent encore lire des textes vieux de mille ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'islandais%20est%20rest%C3%A9%20si%20proche%20du%20vieux%20norrois%20que%20ses%20locuteurs%20peuvent%20encore%20lire%20des%20textes%20vieux%20de%20mille%20ans%20%3F",
  "explanation": "Grâce à l'isolement de l'île et à une politique linguistique volontariste, l'islandais a peu évolué depuis le vieux norrois. Les Islandais peuvent lire assez facilement les sagas écrites aux XIIe-XIIIe siècles, même si la prononciation a changé. L'Islande crée même des néologismes à partir de racines anciennes plutôt que d'emprunter des mots étrangers."
 },
 {
  "text": "Le mot robot vient d'une pièce de théâtre tchèque et dérive du tchèque robota, qui signifie travail forcé ou corvée.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot robot vient d'une pièce de théâtre tchèque et dérive du tchèque robota, qui signifie travail forcé ou corvée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20robot%20vient%20d'une%20pi%C3%A8ce%20de%20th%C3%A9%C3%A2tre%20tch%C3%A8que%20et%20d%C3%A9rive%20du%20tch%C3%A8que%20robota%2C%20qui%20signifie%20travail%20forc%C3%A9%20ou%20corv%C3%A9e%20%3F",
  "explanation": "Le mot apparaît en 1920 dans la pièce « R.U.R. » de l'écrivain tchèque Karel Čapek, qui l'attribuait à son frère Josef. Il vient de « robota », qui désigne la corvée, le travail forcé des serfs. Dans la pièce, les robots sont des êtres artificiels fabriqués pour travailler, qui finissent par se révolter."
 },
 {
  "text": "Dans un groupe de seulement 23 personnes, il y a plus d'une chance sur deux que deux d'entre elles partagent le même anniversaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans un groupe de seulement 23 personnes, il y a plus d'une chance sur deux que deux d'entre elles partagent le même anniversaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20un%20groupe%20de%20seulement%2023%20personnes%2C%20il%20y%20a%20plus%20d'une%20chance%20sur%20deux%20que%20deux%20d'entre%20elles%20partagent%20le%20m%C3%AAme%20anniversaire%20%3F",
  "explanation": "C'est le paradoxe des anniversaires. Avec 23 personnes, il y a 253 paires possibles, et la probabilité qu'au moins deux personnes partagent une date dépasse 50 %. Avec 57 personnes, elle dépasse 99 %. Notre intuition compare à tort avec la probabilité que quelqu'un partage notre propre anniversaire."
 },
 {
  "text": "Un simple pliage de papier, s'il était possible de le plier 42 fois, donnerait une épaisseur atteignant la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un simple pliage de papier, s'il était possible de le plier 42 fois, donnerait une épaisseur atteignant la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20simple%20pliage%20de%20papier%2C%20s'il%20%C3%A9tait%20possible%20de%20le%20plier%2042%20fois%2C%20donnerait%20une%20%C3%A9paisseur%20atteignant%20la%20Lune%20%3F",
  "explanation": "Chaque pliage double l'épaisseur. En partant d'une feuille de 0,1 mm, 42 pliages donnent 0,1 mm × 2^42, soit environ 440 000 km, plus que la distance Terre-Lune (environ 384 000 km). Dans la réalité, on ne peut guère dépasser 7 ou 8 pliages, le record étant de 12 avec une très longue feuille."
 },
 {
  "text": "Il existe différents types d'infinis, certains étant démontrés comme strictement plus grands que d'autres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe différents types d'infinis, certains étant démontrés comme strictement plus grands que d'autres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20diff%C3%A9rents%20types%20d'infinis%2C%20certains%20%C3%A9tant%20d%C3%A9montr%C3%A9s%20comme%20strictement%20plus%20grands%20que%20d'autres%20%3F",
  "explanation": "Le mathématicien Georg Cantor a montré à la fin du XIXe siècle que l'infini des nombres réels est strictement plus grand que celui des nombres entiers : il est impossible de les mettre en correspondance un à un. Il a montré qu'il existe en fait une hiérarchie infinie d'infinis de plus en plus grands."
 },
 {
  "text": "Le paradoxe de Monty Hall montre qu'il vaut mieux changer de porte dans un jeu à trois portes, ce qui déroute l'intuition.",
  "source": "Perplexity",
  "question": "Est-il vrai que le paradoxe de Monty Hall montre qu'il vaut mieux changer de porte dans un jeu à trois portes, ce qui déroute l'intuition ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20paradoxe%20de%20Monty%20Hall%20montre%20qu'il%20vaut%20mieux%20changer%20de%20porte%20dans%20un%20jeu%20%C3%A0%20trois%20portes%2C%20ce%20qui%20d%C3%A9route%20l'intuition%20%3F",
  "explanation": "Derrière l'une des trois portes se trouve une voiture. Vous en choisissez une, puis l'animateur, qui sait tout, ouvre une autre porte perdante. Si vous changez, vous gagnez 2 fois sur 3 : votre premier choix n'avait qu'une chance sur 3 d'être bon, et l'animateur vous révèle l'information pour les deux autres. Même des mathématiciens ont refusé d'y croire."
 },
 {
  "text": "Il est impossible de peigner une boule chevelue sans laisser au moins un épi, un résultat mathématique sérieux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il est impossible de peigner une boule chevelue sans laisser au moins un épi, un résultat mathématique sérieux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20est%20impossible%20de%20peigner%20une%20boule%20chevelue%20sans%20laisser%20au%20moins%20un%20%C3%A9pi%2C%20un%20r%C3%A9sultat%20math%C3%A9matique%20s%C3%A9rieux%20%3F",
  "explanation": "C'est le théorème de la boule chevelue, démontré en topologie : sur une sphère, on ne peut pas définir partout une direction tangente continue sans qu'elle s'annule au moins en un point. Une conséquence : à tout moment, il y a au moins un point sur Terre où le vent horizontal est nul."
 },
 {
  "text": "Le premier message envoyé sur ce qui deviendra Internet a planté après seulement deux lettres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier message envoyé sur ce qui deviendra Internet a planté après seulement deux lettres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20message%20envoy%C3%A9%20sur%20ce%20qui%20deviendra%20Internet%20a%20plant%C3%A9%20apr%C3%A8s%20seulement%20deux%20lettres%20%3F",
  "explanation": "Le 29 octobre 1969, l'UCLA tente d'envoyer le mot « LOGIN » à Stanford via ARPANET, l'ancêtre d'Internet. Le système plante après « L » et « O ». Le premier message de l'histoire d'Internet fut donc « LO ». La connexion complète réussit environ une heure plus tard."
 },
 {
  "text": "Le code QR a été inventé au Japon pour suivre des pièces automobiles dans les usines.",
  "source": "Perplexity",
  "question": "Est-il vrai que le code QR a été inventé au Japon pour suivre des pièces automobiles dans les usines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20code%20QR%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20au%20Japon%20pour%20suivre%20des%20pi%C3%A8ces%20automobiles%20dans%20les%20usines%20%3F",
  "explanation": "Le QR code (Quick Response) a été inventé en 1994 par Masahiro Hara chez Denso Wave, filiale de Toyota. Il fallait suivre les pièces sur les chaînes de montage plus vite et avec plus d'informations qu'un code-barres. Denso a choisi de ne pas faire valoir ses droits de brevet, ce qui a favorisé sa diffusion."
 },
 {
  "text": "Le Wi-Fi ne veut pas dire wireless fidelity, ce nom a été inventé par une agence marketing sans vraie signification.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Wi-Fi ne veut pas dire wireless fidelity, ce nom a été inventé par une agence marketing sans vraie signification ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Wi-Fi%20ne%20veut%20pas%20dire%20wireless%20fidelity%2C%20ce%20nom%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20par%20une%20agence%20marketing%20sans%20vraie%20signification%20%3F",
  "explanation": "Le nom « Wi-Fi » a été créé en 1999 par l'agence Interbrand pour remplacer le peu commercial « IEEE 802.11b ». Il joue sur le mot « hi-fi » mais ne signifie rien. Le slogan « The Standard for Wireless Fidelity » a été ajouté ensuite, puis abandonné, ce qui a entretenu la confusion."
 },
 {
  "text": "Le four à micro-ondes a été découvert par accident quand une barre chocolatée a fondu dans la poche d'un ingénieur près d'un radar.",
  "source": "Perplexity",
  "question": "Est-il vrai que le four à micro-ondes a été découvert par accident quand une barre chocolatée a fondu dans la poche d'un ingénieur près d'un radar ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20four%20%C3%A0%20micro-ondes%20a%20%C3%A9t%C3%A9%20d%C3%A9couvert%20par%20accident%20quand%20une%20barre%20chocolat%C3%A9e%20a%20fondu%20dans%20la%20poche%20d'un%20ing%C3%A9nieur%20pr%C3%A8s%20d'un%20radar%20%3F",
  "explanation": "En 1945, l'ingénieur Percy Spencer, de Raytheon, travaillait près d'un magnétron, un tube produisant des micro-ondes pour les radars. Il remarque qu'une barre chocolatée a fondu dans sa poche. Il fait ensuite éclater du maïs à pop-corn et cuire un œuf, qui explose. Le premier four, le Radarange, mesurait près de 1,8 m."
 },
 {
  "text": "Le Bluetooth, littéralement dent bleue en anglais, doit son nom à un roi viking, Harald à la dent bleue, qui unifiait des peuples comme la technologie unit les appareils.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Bluetooth, littéralement dent bleue en anglais, doit son nom à un roi viking, Harald à la dent bleue, qui unifiait des peuples comme la technologie unit les appareils ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Bluetooth%2C%20litt%C3%A9ralement%20dent%20bleue%20en%20anglais%2C%20doit%20son%20nom%20%C3%A0%20un%20roi%20viking%2C%20Harald%20%C3%A0%20la%20dent%20bleue%2C%20qui%20unifiait%20des%20peuples%20comme%20la%20technologie%20unit%20les%20appareils%20%3F",
  "explanation": "Harald Ier, dit « à la dent bleue », roi du Danemark au Xe siècle, est connu pour avoir unifié des tribus danoises et norvégiennes. Le nom de code a été choisi en 1997 par des ingénieurs d'Intel, Ericsson et Nokia, et il est resté. Le logo combine les runes correspondant à ses initiales, H et B."
 },
 {
  "text": "Le tout premier site web est toujours en ligne et décrivait simplement ce qu'était le World Wide Web.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tout premier site web est toujours en ligne et décrivait simplement ce qu'était le World Wide Web ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tout%20premier%20site%20web%20est%20toujours%20en%20ligne%20et%20d%C3%A9crivait%20simplement%20ce%20qu'%C3%A9tait%20le%20World%20Wide%20Web%20%3F",
  "explanation": "Tim Berners-Lee a mis en ligne le premier site web au CERN en 1991, sur info.cern.ch. Il expliquait le projet World Wide Web, comment créer des pages et utiliser un navigateur. Le CERN l'a restauré en 2013 à son adresse d'origine, où il est toujours consultable."
 },
 {
  "text": "Le Post-it est né d'une colle ratée, jugée trop faible, qui s'est révélée parfaite pour des notes repositionnables.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Post-it est né d'une colle ratée, jugée trop faible, qui s'est révélée parfaite pour des notes repositionnables ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Post-it%20est%20n%C3%A9%20d'une%20colle%20rat%C3%A9e%2C%20jug%C3%A9e%20trop%20faible%2C%20qui%20s'est%20r%C3%A9v%C3%A9l%C3%A9e%20parfaite%20pour%20des%20notes%20repositionnables%20%3F",
  "explanation": "En 1968, Spencer Silver, chimiste chez 3M, cherche une colle très forte et obtient l'inverse : un adhésif faible mais réutilisable. Des années plus tard, son collègue Art Fry l'utilise pour des marque-pages qui ne tombent pas de son recueil de chants à l'église. Le Post-it est commercialisé en 1980."
 },
 {
  "text": "Le vélcro a été inspiré par les petites graines qui s'accrochaient au pantalon d'un ingénieur et au poil de son chien.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vélcro a été inspiré par les petites graines qui s'accrochaient au pantalon d'un ingénieur et au poil de son chien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20v%C3%A9lcro%20a%20%C3%A9t%C3%A9%20inspir%C3%A9%20par%20les%20petites%20graines%20qui%20s'accrochaient%20au%20pantalon%20d'un%20ing%C3%A9nieur%20et%20au%20poil%20de%20son%20chien%20%3F",
  "explanation": "En 1941, l'ingénieur George de Mestral s'intéresse aux fruits de bardane accrochés à son pantalon et au pelage de son chien. Au microscope, il découvre de petits crochets qui s'agrippent aux boucles. Il met plus de dix ans à reproduire le système. Le nom vient de « velours » et « crochet »."
 },
 {
  "text": "Le CD a été conçu pour durer environ 74 minutes, dit-on pour contenir une symphonie de Beethoven en entier.",
  "source": "Perplexity",
  "question": "Est-il vrai que le CD a été conçu pour durer environ 74 minutes, dit-on pour contenir une symphonie de Beethoven en entier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20CD%20a%20%C3%A9t%C3%A9%20con%C3%A7u%20pour%20durer%20environ%2074%20minutes%2C%20dit-on%20pour%20contenir%20une%20symphonie%20de%20Beethoven%20en%20entier%20%3F",
  "explanation": "Selon une histoire racontée par Sony, la durée de 74 minutes aurait été choisie pour pouvoir contenir la 9e symphonie de Beethoven dans une seule face, à la demande d'un dirigeant ou du chef d'orchestre Herbert von Karajan. Les historiens pensent que des contraintes techniques et industrielles ont aussi joué. C'est donc une belle histoire, à nuancer."
 },
 {
  "text": "Le plus vieil arbre vivant connu a plus de 4 800 ans, il germait donc avant la construction des pyramides.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus vieil arbre vivant connu a plus de 4 800 ans, il germait donc avant la construction des pyramides ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20vieil%20arbre%20vivant%20connu%20a%20plus%20de%204%C2%A0800%20ans%2C%20il%20germait%20donc%20avant%20la%20construction%20des%20pyramides%20%3F",
  "explanation": "Un pin de Bristlecone (Pinus longaeva) de Californie, surnommé Mathusalem, a environ 4 850 ans selon le comptage de ses cernes. Il a donc germé vers 2830 av. J.-C., avant la grande pyramide de Gizeh (vers 2560 av. J.-C.). Son emplacement exact est tenu secret pour le protéger."
 },
 {
  "text": "Le son le plus fort jamais enregistré, l'éruption du Krakatoa en 1883, a été entendu à des milliers de kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son le plus fort jamais enregistré, l'éruption du Krakatoa en 1883, a été entendu à des milliers de kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20le%20plus%20fort%20jamais%20enregistr%C3%A9%2C%20l'%C3%A9ruption%20du%20Krakatoa%20en%201883%2C%20a%20%C3%A9t%C3%A9%20entendu%20%C3%A0%20des%20milliers%20de%20kilom%C3%A8tres%20%3F",
  "explanation": "L'éruption du Krakatoa, en Indonésie, le 27 août 1883, a produit un son entendu jusqu'à environ 4 800 km de distance, sur l'île Rodrigues dans l'océan Indien. L'onde de pression a fait plusieurs fois le tour de la Terre, enregistrée par des baromètres du monde entier. Elle aurait dépassé 170 décibels à 160 km."
 },
 {
  "text": "La plus grande fleur du monde, la rafflésie, peut mesurer près d'un mètre et dégage une odeur de viande pourrie.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus grande fleur du monde, la rafflésie, peut mesurer près d'un mètre et dégage une odeur de viande pourrie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20grande%20fleur%20du%20monde%2C%20la%20raffl%C3%A9sie%2C%20peut%20mesurer%20pr%C3%A8s%20d'un%20m%C3%A8tre%20et%20d%C3%A9gage%20une%20odeur%20de%20viande%20pourrie%20%3F",
  "explanation": "Rafflesia arnoldii, d'Asie du Sud-Est, produit la plus grande fleur individuelle du monde, jusqu'à environ un mètre de diamètre et une dizaine de kilos. C'est une plante parasite, sans feuilles ni racines. Son odeur de charogne attire les mouches qui la pollinisent."
 },
 {
  "text": "La créature la plus âgée jamais identifiée est peut-être une éponge de mer vivant depuis plus de 10 000 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la créature la plus âgée jamais identifiée est peut-être une éponge de mer vivant depuis plus de 10 000 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20cr%C3%A9ature%20la%20plus%20%C3%A2g%C3%A9e%20jamais%20identifi%C3%A9e%20est%20peut-%C3%AAtre%20une%20%C3%A9ponge%20de%20mer%20vivant%20depuis%20plus%20de%2010%C2%A0000%20ans%20%3F",
  "explanation": "Certaines éponges des eaux glacées de l'Antarctique grandissent extrêmement lentement. Pour une éponge de la mer de Ross (Anoxycalyx joubini), certaines estimations dépassent 10 000 ans, mais elles sont très incertaines. Une éponge de verre de mer de Chine orientale a été datée d'environ 11 000 ans."
 },
 {
  "text": "On connaît mieux la surface de la Lune et de Mars que le fond de nos propres océans.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on connaît mieux la surface de la Lune et de Mars que le fond de nos propres océans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20conna%C3%AEt%20mieux%20la%20surface%20de%20la%20Lune%20et%20de%20Mars%20que%20le%20fond%20de%20nos%20propres%20oc%C3%A9ans%20%3F",
  "explanation": "La surface de la Lune et de Mars est cartographiée à quelques mètres près, car aucune eau ne gêne les satellites. Les océans bloquent les ondes radar : leur fond n'est cartographié qu'à une résolution grossière par satellite. Seulement un quart environ des fonds marins était cartographié au sonar avec précision au début des années 2020."
 },
 {
  "text": "Plus de la moitié de l'oxygène que nous respirons est produite par le plancton et les océans, pas par les forêts.",
  "source": "Perplexity",
  "question": "Est-il vrai que plus de la moitié de l'oxygène que nous respirons est produite par le plancton et les océans, pas par les forêts ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20plus%20de%20la%20moiti%C3%A9%20de%20l'oxyg%C3%A8ne%20que%20nous%20respirons%20est%20produite%20par%20le%20plancton%20et%20les%20oc%C3%A9ans%2C%20pas%20par%20les%20for%C3%AAts%20%3F",
  "explanation": "Le phytoplancton marin effectue la photosynthèse à une échelle gigantesque et produirait environ 50 % de l'oxygène de la planète. Une seule espèce, Prochlorococcus, en fournirait une part importante. Les forêts produisent beaucoup d'oxygène, mais elles en consomment aussi presque autant."
 },
 {
  "text": "Il existe des endroits où il a plu des grenouilles ou des poissons, aspirés puis relâchés par des tornades ou des trombes marines.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des endroits où il a plu des grenouilles ou des poissons, aspirés puis relâchés par des tornades ou des trombes marines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20endroits%20o%C3%B9%20il%20a%20plu%20des%20grenouilles%20ou%20des%20poissons%2C%20aspir%C3%A9s%20puis%20rel%C3%A2ch%C3%A9s%20par%20des%20tornades%20ou%20des%20trombes%20marines%20%3F",
  "explanation": "Des pluies d'animaux ont été rapportées à de nombreuses reprises, par exemple des poissons au Honduras ou des grenouilles en Serbie. L'explication la plus courante : des trombes marines ou tornades aspirent de l'eau avec de petits animaux, puis les relâchent plus loin. Peu de ces événements ont été observés directement par des scientifiques."
 },
 {
  "text": "La foudre peut transformer le sable en un tube de verre appelé fulgurite.",
  "source": "Perplexity",
  "question": "Est-il vrai que la foudre peut transformer le sable en un tube de verre appelé fulgurite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20foudre%20peut%20transformer%20le%20sable%20en%20un%20tube%20de%20verre%20appel%C3%A9%20fulgurite%20%3F",
  "explanation": "Lorsque la foudre frappe du sable, elle chauffe le sol à plusieurs milliers de degrés en une fraction de seconde. Les grains de silice fondent et fusionnent le long du trajet de la décharge, formant un tube de verre creux et ramifié : une fulgurite. Elles peuvent mesurer plusieurs mètres."
 },
 {
  "text": "L'arc-en-ciel est en réalité un cercle complet, mais le sol nous en cache généralement la moitié inférieure.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'arc-en-ciel est en réalité un cercle complet, mais le sol nous en cache généralement la moitié inférieure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'arc-en-ciel%20est%20en%20r%C3%A9alit%C3%A9%20un%20cercle%20complet%2C%20mais%20le%20sol%20nous%20en%20cache%20g%C3%A9n%C3%A9ralement%20la%20moiti%C3%A9%20inf%C3%A9rieure%20%3F",
  "explanation": "Un arc-en-ciel se forme à 42° autour du point opposé au Soleil, ce qui dessine un cercle. Depuis le sol, l'horizon cache la partie basse. Depuis un avion ou un sommet, on peut voir le cercle complet."
 },
 {
  "text": "La plus grande cascade du monde est en réalité sous-marine, dans le détroit du Danemark.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus grande cascade du monde est en réalité sous-marine, dans le détroit du Danemark ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20grande%20cascade%20du%20monde%20est%20en%20r%C3%A9alit%C3%A9%20sous-marine%2C%20dans%20le%20d%C3%A9troit%20du%20Danemark%20%3F",
  "explanation": "Dans le détroit du Danemark, entre l'Islande et le Groenland, l'eau froide et dense des mers nordiques plonge sous l'eau plus chaude de l'Atlantique. Elle descend sur environ 3,5 km de dénivelé avec un débit de millions de mètres cubes par seconde, bien plus que n'importe quelle chute terrestre. C'est invisible depuis la surface."
 },
 {
  "text": "Le sable du désert du Sahara traverse parfois l'Atlantique et fertilise la forêt amazonienne.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sable du désert du Sahara traverse parfois l'Atlantique et fertilise la forêt amazonienne ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sable%20du%20d%C3%A9sert%20du%20Sahara%20traverse%20parfois%20l'Atlantique%20et%20fertilise%20la%20for%C3%AAt%20amazonienne%20%3F",
  "explanation": "Chaque année, les vents transportent des millions de tonnes de poussière saharienne à travers l'Atlantique. Une partie retombe sur l'Amazonie. Elle contient du phosphore, nutriment rare dans les sols amazoniens lessivés par les pluies, que ces apports aident à compenser, selon des mesures satellites de la NASA."
 },
 {
  "text": "La tomate, le poivron et l'aubergine appartiennent à la même famille que la mortelle belladone.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tomate, le poivron et l'aubergine appartiennent à la même famille que la mortelle belladone ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tomate%2C%20le%20poivron%20et%20l'aubergine%20appartiennent%20%C3%A0%20la%20m%C3%AAme%20famille%20que%20la%20mortelle%20belladone%20%3F",
  "explanation": "Toutes ces plantes appartiennent aux Solanacées, comme la pomme de terre, le tabac, le piment et la belladone. Beaucoup de Solanacées produisent des alcaloïdes toxiques : les feuilles de tomate et les pommes de terre vertes en contiennent aussi. Les parties que nous mangeons sont sans danger."
 },
 {
  "text": "Les bananes que nous mangeons sont presque toutes des clones d'une même variété, ce qui les rend fragiles face aux maladies.",
  "source": "Perplexity",
  "question": "Est-il vrai que les bananes que nous mangeons sont presque toutes des clones d'une même variété, ce qui les rend fragiles face aux maladies ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20bananes%20que%20nous%20mangeons%20sont%20presque%20toutes%20des%20clones%20d'une%20m%C3%AAme%20vari%C3%A9t%C3%A9%2C%20ce%20qui%20les%20rend%20fragiles%20face%20aux%20maladies%20%3F",
  "explanation": "La banane Cavendish, qui représente l'essentiel du commerce mondial, ne produit pas de graines : on la multiplie par rejets, d'où des clones génétiquement identiques. Une maladie peut donc décimer toutes les plantations. C'est arrivé à la variété précédente, la Gros Michel, dans les années 1950, et la Cavendish est menacée par la fusariose TR4."
 },
 {
  "text": "Le brocoli, le chou-fleur, le chou de Bruxelles et le chou frisé viennent tous de la même espèce sauvage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le brocoli, le chou-fleur, le chou de Bruxelles et le chou frisé viennent tous de la même espèce sauvage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20brocoli%2C%20le%20chou-fleur%2C%20le%20chou%20de%20Bruxelles%20et%20le%20chou%20fris%C3%A9%20viennent%20tous%20de%20la%20m%C3%AAme%20esp%C3%A8ce%20sauvage%20%3F",
  "explanation": "Tous ces légumes, ainsi que le chou-rave et le chou cabus, descendent du chou sauvage, Brassica oleracea. L'agriculture a sélectionné différentes parties de la plante : les bourgeons latéraux pour le chou de Bruxelles, les fleurs pour le brocoli et le chou-fleur, les feuilles pour le chou frisé."
 },
 {
  "text": "La plante la plus solitaire, un cycad mâle sans femelle connue, n'a plus de partenaire pour se reproduire naturellement.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plante la plus solitaire, un cycad mâle sans femelle connue, n'a plus de partenaire pour se reproduire naturellement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plante%20la%20plus%20solitaire%2C%20un%20cycad%20m%C3%A2le%20sans%20femelle%20connue%2C%20n'a%20plus%20de%20partenaire%20pour%20se%20reproduire%20naturellement%20%3F",
  "explanation": "Encephalartos woodii a été découvert en 1895 en Afrique du Sud, sous la forme d'un unique pied mâle. Aucun individu femelle n'a jamais été trouvé. Tous les spécimens existants sont des clones de cet unique individu, et des chercheurs explorent les forêts avec des drones et l'IA pour trouver une femelle."
 },
 {
  "text": "Nous prenons la plupart de nos décisions quelques instants avant d'en être conscients, selon des expériences de neurosciences.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous prenons la plupart de nos décisions quelques instants avant d'en être conscients, selon des expériences de neurosciences ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20prenons%20la%20plupart%20de%20nos%20d%C3%A9cisions%20quelques%20instants%20avant%20d'en%20%C3%AAtre%20conscients%2C%20selon%20des%20exp%C3%A9riences%20de%20neurosciences%20%3F",
  "explanation": "Dans les années 1980, Benjamin Libet a mesuré une activité cérébrale (le « potentiel de préparation ») plusieurs centaines de millisecondes avant que les participants ne sentent avoir décidé de bouger. D'autres études ont prolongé ce résultat. Son interprétation reste très débattue, notamment pour le libre arbitre."
 },
 {
  "text": "Votre mémoire ne fonctionne pas comme un enregistrement fidèle : chaque souvenir est légèrement reconstruit à chaque rappel.",
  "source": "Perplexity",
  "question": "Est-il vrai que votre mémoire ne fonctionne pas comme un enregistrement fidèle : chaque souvenir est légèrement reconstruit à chaque rappel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20votre%20m%C3%A9moire%20ne%20fonctionne%20pas%20comme%20un%20enregistrement%20fid%C3%A8le%C2%A0%3A%20chaque%20souvenir%20est%20l%C3%A9g%C3%A8rement%20reconstruit%20%C3%A0%20chaque%20rappel%20%3F",
  "explanation": "Selon les recherches en psychologie, comme celles d'Elizabeth Loftus, on reconstruit un souvenir à chaque fois qu'on le rappelle, en l'influençant par nos connaissances et émotions actuelles. On peut même implanter de faux souvenirs. C'est pourquoi les témoignages oculaires sont peu fiables."
 },
 {
  "text": "Notre cerveau comble automatiquement la tache aveugle de chaque œil, de sorte que nous ne la remarquons jamais.",
  "source": "Perplexity",
  "question": "Est-il vrai que notre cerveau comble automatiquement la tache aveugle de chaque œil, de sorte que nous ne la remarquons jamais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20notre%20cerveau%20comble%20automatiquement%20la%20tache%20aveugle%20de%20chaque%20%C5%93il%2C%20de%20sorte%20que%20nous%20ne%20la%20remarquons%20jamais%20%3F",
  "explanation": "Là où le nerf optique quitte la rétine, il n'y a aucun photorécepteur : c'est la tache aveugle. Le cerveau la masque en combinant les informations des deux yeux et en « remplissant » la zone avec ce qui l'entoure. On peut la mettre en évidence avec un simple test de papier."
 },
 {
  "text": "Non, les taureaux ne sont pas enragés par la couleur rouge : ils sont daltoniens à cette couleur et réagissent au mouvement.",
  "source": "Perplexity",
  "question": "Est-il vrai que les taureaux ne sont pas enragés par la couleur rouge : ils sont daltoniens à cette couleur et réagissent au mouvement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20taureaux%20ne%20sont%20pas%20enrag%C3%A9s%20par%20la%20couleur%20rouge%C2%A0%3A%20ils%20sont%20daltoniens%20%C3%A0%20cette%20couleur%20et%20r%C3%A9agissent%20au%20mouvement%20%3F",
  "explanation": "Les bovins voient mal le rouge, qu'ils confondent avec d'autres couleurs. Dans une corrida, le taureau charge la muleta parce qu'elle bouge. La couleur rouge est surtout une tradition, et elle masque le sang. Des tests ont montré que les taureaux chargent aussi des tissus d'autres couleurs."
 },
 {
  "text": "Non, un sou lâché du haut d'un gratte-ciel ne peut pas tuer quelqu'un : sa vitesse de chute reste trop faible.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un sou lâché du haut d'un gratte-ciel ne peut pas tuer quelqu'un : sa vitesse de chute reste trop faible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20sou%20l%C3%A2ch%C3%A9%20du%20haut%20d'un%20gratte-ciel%20ne%20peut%20pas%20tuer%20quelqu'un%C2%A0%3A%20sa%20vitesse%20de%20chute%20reste%20trop%20faible%20%3F",
  "explanation": "Une pièce d'un cent américain, plate et légère, atteint vite sa vitesse limite à cause de la résistance de l'air : environ 40 à 80 km/h. Elle ferait mal, mais ne serait pas mortelle. Un objet plus lourd et aérodynamique serait en revanche dangereux."
 },
 {
  "text": "Non, les poissons rouges n'ont pas une mémoire de trois secondes : ils peuvent retenir des choses pendant des mois.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poissons rouges n'ont pas une mémoire de trois secondes : ils peuvent retenir des choses pendant des mois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poissons%20rouges%20n'ont%20pas%20une%20m%C3%A9moire%20de%20trois%20secondes%C2%A0%3A%20ils%20peuvent%20retenir%20des%20choses%20pendant%20des%20mois%20%3F",
  "explanation": "Des expériences ont montré que les poissons rouges peuvent apprendre à pousser un levier ou à associer un son à la nourriture et s'en souvenir pendant des mois. Leur mémoire est donc bien meilleure que la légende des 3 secondes. Celle-ci n'a jamais eu de fondement scientifique."
 },
 {
  "text": "Non, on n'avale pas huit araignées par an en dormant : cette statistique a été inventée de toutes pièces.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on n'avale pas huit araignées par an en dormant : cette statistique a été inventée de toutes pièces ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20n'avale%20pas%20huit%20araign%C3%A9es%20par%20an%20en%20dormant%C2%A0%3A%20cette%20statistique%20a%20%C3%A9t%C3%A9%20invent%C3%A9e%20de%20toutes%20pi%C3%A8ces%20%3F",
  "explanation": "Une araignée évite naturellement une personne endormie, qui vibre, respire et dégage de la chaleur. La statistique des « 8 araignées par an » circulerait depuis une rubrique de 1993. Elle est parfois présentée comme un exemple de faux fait volontairement inventé, mais même cette origine est discutée."
 },
 {
  "text": "Non, les chauves-souris ne sont pas aveugles : la plupart voient très bien en plus d'utiliser l'écholocation.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chauves-souris ne sont pas aveugles : la plupart voient très bien en plus d'utiliser l'écholocation ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chauves-souris%20ne%20sont%20pas%20aveugles%C2%A0%3A%20la%20plupart%20voient%20tr%C3%A8s%20bien%20en%20plus%20d'utiliser%20l'%C3%A9cholocation%20%3F",
  "explanation": "Toutes les chauves-souris voient. Les grandes chauves-souris frugivores (roussettes) n'utilisent d'ailleurs pas l'écholocation et ont une très bonne vision. Les petites espèces insectivores combinent la vision et l'écholocation pour chasser."
 },
 {
  "text": "Non, se casser les doigts ne donne pas d'arthrose : le bruit vient de bulles de gaz dans les articulations.",
  "source": "Perplexity",
  "question": "Est-il vrai que se casser les doigts ne donne pas d'arthrose : le bruit vient de bulles de gaz dans les articulations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20se%20casser%20les%20doigts%20ne%20donne%20pas%20d'arthrose%C2%A0%3A%20le%20bruit%20vient%20de%20bulles%20de%20gaz%20dans%20les%20articulations%20%3F",
  "explanation": "Le bruit vient de bulles de gaz qui se forment dans le liquide synovial lorsqu'on écarte l'articulation. Un médecin, Donald Unger, a fait craquer les doigts d'une seule main pendant 60 ans sans observer d'arthrose dans aucune des deux. Les études n'ont pas trouvé de lien."
 },
 {
  "text": "Non, les cheveux et les ongles ne continuent pas de pousser après la mort : c'est la peau qui se rétracte.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cheveux et les ongles ne continuent pas de pousser après la mort : c'est la peau qui se rétracte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cheveux%20et%20les%20ongles%20ne%20continuent%20pas%20de%20pousser%20apr%C3%A8s%20la%20mort%C2%A0%3A%20c'est%20la%20peau%20qui%20se%20r%C3%A9tracte%20%3F",
  "explanation": "Après la mort, la peau se déshydrate et se rétracte. Elle fait ressortir la base des poils et des ongles, ce qui donne l'illusion qu'ils ont poussé. La croissance réelle demande une division cellulaire, qui s'arrête sans circulation sanguine."
 },
 {
  "text": "Non, l'eau ne tourne pas dans un sens dans un évier selon l'hémisphère : la force de Coriolis est bien trop faible à cette échelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau ne tourne pas dans un sens dans un évier selon l'hémisphère : la force de Coriolis est bien trop faible à cette échelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20ne%20tourne%20pas%20dans%20un%20sens%20dans%20un%20%C3%A9vier%20selon%20l'h%C3%A9misph%C3%A8re%C2%A0%3A%20la%20force%20de%20Coriolis%20est%20bien%20trop%20faible%20%C3%A0%20cette%20%C3%A9chelle%20%3F",
  "explanation": "La force de Coriolis influence les grands systèmes comme les cyclones, mais elle est minuscule à l'échelle d'un lavabo. Le sens de rotation de l'eau dépend surtout de la forme de l'évier et des mouvements résiduels de l'eau. Dans des conditions de laboratoire extrêmes, on peut néanmoins détecter l'effet."
 },
 {
  "text": "Non, les vikings ne buvaient pas dans des crânes : cette idée vient d'une erreur de traduction d'un vieux poème.",
  "source": "Perplexity",
  "question": "Est-il vrai que les vikings ne buvaient pas dans des crânes : cette idée vient d'une erreur de traduction d'un vieux poème ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20vikings%20ne%20buvaient%20pas%20dans%20des%20cr%C3%A2nes%C2%A0%3A%20cette%20id%C3%A9e%20vient%20d'une%20erreur%20de%20traduction%20d'un%20vieux%20po%C3%A8me%20%3F",
  "explanation": "Dans un poème nordique, les guerriers boivent dans « les branches courbes des crânes », une métaphore pour les cornes d'animaux. Un traducteur du XVIIe siècle l'a prise au sens littéral, popularisant le mythe des crânes. Les Vikings utilisaient bien des cornes pour boire."
 },
 {
  "text": "Non, la langue n'a pas de zones distinctes réservées à chaque goût : cette carte de la langue est fausse.",
  "source": "Perplexity",
  "question": "Est-il vrai que la langue n'a pas de zones distinctes réservées à chaque goût : cette carte de la langue est fausse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20langue%20n'a%20pas%20de%20zones%20distinctes%20r%C3%A9serv%C3%A9es%20%C3%A0%20chaque%20go%C3%BBt%C2%A0%3A%20cette%20carte%20de%20la%20langue%20est%20fausse%20%3F",
  "explanation": "La « carte de la langue » vient d'une mauvaise interprétation d'une étude allemande de 1901, traduite en 1942. En réalité, toutes les zones de la langue qui ont des bourgeons gustatifs perçoivent les cinq saveurs : sucré, salé, acide, amer et umami. Les différences de sensibilité entre zones sont minimes."
 },
 {
  "text": "Il est impossible de se lécher le coude pour la plupart des gens, même si beaucoup essaient en le lisant.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il est impossible de se lécher le coude pour la plupart des gens, même si beaucoup essaient en le lisant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20est%20impossible%20de%20se%20l%C3%A9cher%20le%20coude%20pour%20la%20plupart%20des%20gens%2C%20m%C3%AAme%20si%20beaucoup%20essaient%20en%20le%20lisant%20%3F",
  "explanation": "La longueur du bras et l'articulation du coude font que la langue ne peut pas l'atteindre pour la plupart des gens. Quelques personnes très souples y parviennent. Ce fait est souvent proposé comme blague, car le lecteur essaie aussitôt."
 },
 {
  "text": "Vous ne pouvez pas vous chatouiller vous-même, car votre cerveau anticipe le geste et annule la surprise.",
  "source": "Perplexity",
  "question": "Est-il vrai que vous ne pouvez pas vous chatouiller vous-même, car votre cerveau anticipe le geste et annule la surprise ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vous%20ne%20pouvez%20pas%20vous%20chatouiller%20vous-m%C3%AAme%2C%20car%20votre%20cerveau%20anticipe%20le%20geste%20et%20annule%20la%20surprise%20%3F",
  "explanation": "Le cervelet prédit les sensations produites par nos propres mouvements et atténue la réponse du cerveau. L'effet de surprise, essentiel au chatouillement, disparaît. Certaines personnes atteintes de schizophrénie, chez qui cette prédiction fonctionne moins bien, peuvent se chatouiller."
 },
 {
  "text": "Il y a plus de parties d'échecs possibles que d'atomes dans l'univers observable.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus de parties d'échecs possibles que d'atomes dans l'univers observable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20de%20parties%20d'%C3%A9checs%20possibles%20que%20d'atomes%20dans%20l'univers%20observable%20%3F",
  "explanation": "Le mathématicien Claude Shannon a estimé en 1950 qu'il existe environ 10^120 parties d'échecs possibles (« nombre de Shannon »). L'univers observable contient environ 10^80 atomes. Le nombre de parties possibles est donc 10^40 fois supérieur."
 },
 {
  "text": "Le marathon fait environ 42 kilomètres à cause d'une distance fixée en partie pour arranger la famille royale britannique en 1908.",
  "source": "Perplexity",
  "question": "Est-il vrai que le marathon fait environ 42 kilomètres à cause d'une distance fixée en partie pour arranger la famille royale britannique en 1908 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20marathon%20fait%20environ%2042%20kilom%C3%A8tres%20%C3%A0%20cause%20d'une%20distance%20fix%C3%A9e%20en%20partie%20pour%20arranger%20la%20famille%20royale%20britannique%20en%201908%20%3F",
  "explanation": "Pour les Jeux de Londres en 1908, le départ a été placé au château de Windsor, et l'arrivée devant la loge royale du stade, soit 42,195 km. Cette distance est devenue officielle en 1921. Le rôle exact de la famille royale dans ce tracé est surtout une jolie anecdote."
 },
 {
  "text": "Au basket, le panier était à l'origine un vrai panier de pêches dont il fallait récupérer la balle à la main.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au basket, le panier était à l'origine un vrai panier de pêches dont il fallait récupérer la balle à la main ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20basket%2C%20le%20panier%20%C3%A9tait%20%C3%A0%20l'origine%20un%20vrai%20panier%20de%20p%C3%AAches%20dont%20il%20fallait%20r%C3%A9cup%C3%A9rer%20la%20balle%20%C3%A0%20la%20main%20%3F",
  "explanation": "En 1891, James Naismith, professeur au Massachusetts, invente le basket et accroche deux paniers à pêches à des balcons. Après chaque panier, il fallait récupérer la balle avec une échelle ou un bâton. Le fond a été découpé bien plus tard, et les filets ouverts sont apparus au début du XXe siècle."
 },
 {
  "text": "Il y a plus d'arbres sur Terre que d'étoiles dans la Voie lactée, selon les estimations.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus d'arbres sur Terre que d'étoiles dans la Voie lactée, selon les estimations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20d'arbres%20sur%20Terre%20que%20d'%C3%A9toiles%20dans%20la%20Voie%20lact%C3%A9e%2C%20selon%20les%20estimations%20%3F",
  "explanation": "Une étude publiée dans Nature en 2015 estime le nombre d'arbres sur Terre à environ 3 000 milliards. La Voie lactée contiendrait entre 100 et 400 milliards d'étoiles. Il y aurait donc nettement plus d'arbres, même avec l'estimation haute."
 },
 {
  "text": "Le code-barres a été inventé en s'inspirant du code Morse tracé dans le sable.",
  "source": "Perplexity",
  "question": "Est-il vrai que le code-barres a été inventé en s'inspirant du code Morse tracé dans le sable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20code-barres%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20en%20s'inspirant%20du%20code%20Morse%20trac%C3%A9%20dans%20le%20sable%20%3F",
  "explanation": "En 1948, Norman Joseph Woodland cherche un système pour enregistrer les produits en caisse. Sur une plage de Miami, il trace des points et des traits du Morse dans le sable, puis les prolonge vers le bas en traits fins et épais. Le brevet est déposé en 1949, et le premier article scanné en caisse sera un paquet de chewing-gum en 1974."
 },
 {
  "text": "Il existe une couleur, le magenta, qui n'a pas de longueur d'onde propre : notre cerveau l'invente à partir du rouge et du bleu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe une couleur, le magenta, qui n'a pas de longueur d'onde propre : notre cerveau l'invente à partir du rouge et du bleu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20une%20couleur%2C%20le%20magenta%2C%20qui%20n'a%20pas%20de%20longueur%20d'onde%20propre%C2%A0%3A%20notre%20cerveau%20l'invente%20%C3%A0%20partir%20du%20rouge%20et%20du%20bleu%20%3F",
  "explanation": "Il n'existe pas de longueur d'onde de lumière magenta dans le spectre. Quand nos cônes sensibles au rouge et au bleu sont stimulés mais pas ceux du vert, le cerveau « invente » cette couleur. Elle n'a pas sa place dans l'arc-en-ciel, mais elle referme le cercle chromatique."
 },
 {
  "text": "Le papier bulle a d'abord été inventé pour servir de papier peint texturé avant de devenir un emballage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le papier bulle a d'abord été inventé pour servir de papier peint texturé avant de devenir un emballage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20papier%20bulle%20a%20d'abord%20%C3%A9t%C3%A9%20invent%C3%A9%20pour%20servir%20de%20papier%20peint%20textur%C3%A9%20avant%20de%20devenir%20un%20emballage%20%3F",
  "explanation": "En 1957, Alfred Fielding et Marc Chavannes collent deux rideaux de douche avec des bulles d'air pour créer un papier peint texturé. Le produit ne se vend pas, ni comme isolant pour serres. Le succès arrive quand IBM l'utilise pour protéger ses ordinateurs en 1960."
 },
 {
  "text": "Le nombre de possibilités pour mélanger un jeu de 52 cartes est si grand que chaque battage bien fait est probablement unique dans l'histoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nombre de possibilités pour mélanger un jeu de 52 cartes est si grand que chaque battage bien fait est probablement unique dans l'histoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nombre%20de%20possibilit%C3%A9s%20pour%20m%C3%A9langer%20un%20jeu%20de%2052%20cartes%20est%20si%20grand%20que%20chaque%20battage%20bien%20fait%20est%20probablement%20unique%20dans%20l'histoire%20%3F",
  "explanation": "Un jeu de 52 cartes peut être ordonné de 52! façons, soit environ 8 × 10^67 combinaisons. Même si chaque humain ayant jamais vécu avait battu des cartes chaque seconde depuis le Big Bang, on n'aurait exploré qu'une infime fraction. Un mélange bien fait donne presque sûrement un ordre jamais vu."
 },
 {
  "text": "Un crayon à papier ordinaire peut tracer une ligne longue de plusieurs dizaines de kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un crayon à papier ordinaire peut tracer une ligne longue de plusieurs dizaines de kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20crayon%20%C3%A0%20papier%20ordinaire%20peut%20tracer%20une%20ligne%20longue%20de%20plusieurs%20dizaines%20de%20kilom%C3%A8tres%20%3F",
  "explanation": "Une estimation souvent citée affirme qu'un crayon HB standard pourrait tracer une ligne d'environ 56 km. Ce chiffre dépend fortement de la dureté de la mine, de la pression et du papier. L'ordre de grandeur de plusieurs dizaines de kilomètres est plausible, mais il est difficile à vérifier avec précision."
 },
 {
  "text": "Les girafes n'ont que sept vertèbres dans le cou, exactement comme les humains, mais chacune est énorme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les girafes n'ont que sept vertèbres dans le cou, exactement comme les humains, mais chacune est énorme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20girafes%20n'ont%20que%20sept%20vert%C3%A8bres%20dans%20le%20cou%2C%20exactement%20comme%20les%20humains%2C%20mais%20chacune%20est%20%C3%A9norme%20%3F",
  "explanation": "Presque tous les mammifères, de la souris à la girafe, ont 7 vertèbres cervicales. Celles de la girafe peuvent mesurer chacune plus de 25 cm. Seules quelques exceptions existent, comme les paresseux et les lamantins."
 },
 {
  "text": "Un groupe de corbeaux se nomme en anglais a murder, ce qui signifie littéralement un meurtre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un groupe de corbeaux se nomme en anglais a murder, ce qui signifie littéralement un meurtre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20groupe%20de%20corbeaux%20se%20nomme%20en%20anglais%20a%20murder%2C%20ce%20qui%20signifie%20litt%C3%A9ralement%20un%20meurtre%20%3F",
  "explanation": "En anglais, il existe des noms collectifs poétiques pour les animaux, comme « a murder of crows ». L'expression date du XVe siècle, peut-être liée aux corneilles associées à la mort et aux charognes. Les Anglais disent aussi « a parliament of owls » pour les hiboux."
 },
 {
  "text": "Le tigre a la peau rayée sous son pelage, pas seulement le poil.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tigre a la peau rayée sous son pelage, pas seulement le poil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tigre%20a%20la%20peau%20ray%C3%A9e%20sous%20son%20pelage%2C%20pas%20seulement%20le%20poil%20%3F",
  "explanation": "Les rayures du tigre sont visibles sur sa peau elle-même, pigmentée sous les poils. Si on le rasait, on verrait toujours le motif. Comme les empreintes digitales, ce motif est unique à chaque tigre."
 },
 {
  "text": "Les fourmis coupe-feuilles cultivent un champignon souterrain pour se nourrir, une forme d'agriculture bien avant l'homme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis coupe-feuilles cultivent un champignon souterrain pour se nourrir, une forme d'agriculture bien avant l'homme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20coupe-feuilles%20cultivent%20un%20champignon%20souterrain%20pour%20se%20nourrir%2C%20une%20forme%20d'agriculture%20bien%20avant%20l'homme%20%3F",
  "explanation": "Les fourmis coupe-feuilles d'Amérique ne mangent pas les feuilles qu'elles découpent. Elles en nourrissent un champignon qu'elles cultivent dans des chambres souterraines, et qu'elles protègent avec des bactéries antibiotiques. Cette agriculture existe depuis des dizaines de millions d'années."
 },
 {
  "text": "Une baleine bleue peut avaler une quantité d'eau supérieure à son propre poids en une seule bouchée avant de la filtrer.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une baleine bleue peut avaler une quantité d'eau supérieure à son propre poids en une seule bouchée avant de la filtrer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20baleine%20bleue%20peut%20avaler%20une%20quantit%C3%A9%20d'eau%20sup%C3%A9rieure%20%C3%A0%20son%20propre%20poids%20en%20une%20seule%20bouch%C3%A9e%20avant%20de%20la%20filtrer%20%3F",
  "explanation": "La baleine bleue se nourrit en engloutissant d'énormes quantités d'eau chargée de krill, en dilatant les sillons de sa gorge. Une bouchée peut représenter jusqu'à environ 100 tonnes d'eau, parfois plus que son propre poids. Elle expulse ensuite l'eau à travers ses fanons."
 },
 {
  "text": "Les seiches peuvent hypnotiser leurs proies en faisant onduler des motifs de couleur sur leur peau.",
  "source": "Perplexity",
  "question": "Est-il vrai que les seiches peuvent hypnotiser leurs proies en faisant onduler des motifs de couleur sur leur peau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20seiches%20peuvent%20hypnotiser%20leurs%20proies%20en%20faisant%20onduler%20des%20motifs%20de%20couleur%20sur%20leur%20peau%20%3F",
  "explanation": "Les seiches font défiler des bandes sombres sur leur peau, grâce à des cellules pigmentaires (chromatophores) contrôlées par les nerfs. Ce spectacle, appelé « passing cloud », semble désorienter ou figer les proies. Le terme « hypnotiser » est une image : on ne sait pas exactement comment cela agit sur la proie."
 },
 {
  "text": "Le castor construit des barrages si grands que certains sont visibles depuis l'espace.",
  "source": "Perplexity",
  "question": "Est-il vrai que le castor construit des barrages si grands que certains sont visibles depuis l'espace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20castor%20construit%20des%20barrages%20si%20grands%20que%20certains%20sont%20visibles%20depuis%20l'espace%20%3F",
  "explanation": "Le plus grand barrage de castor connu, dans le parc national Wood Buffalo au Canada, mesure environ 850 m de long. Il a été repéré en 2007 sur des images satellites Google Earth. Il est « visible depuis l'espace » au sens des images satellite, pas à l'œil nu depuis l'orbite."
 },
 {
  "text": "Le fer contenu dans notre sang a été forgé au cœur d'étoiles anciennes mortes en explosant.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fer contenu dans notre sang a été forgé au cœur d'étoiles anciennes mortes en explosant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fer%20contenu%20dans%20notre%20sang%20a%20%C3%A9t%C3%A9%20forg%C3%A9%20au%20c%C5%93ur%20d'%C3%A9toiles%20anciennes%20mortes%20en%20explosant%20%3F",
  "explanation": "Les éléments plus lourds que l'hélium sont fabriqués par fusion nucléaire au cœur des étoiles. Le fer est le dernier élément produit avant l'effondrement, et il est dispersé lors de supernovas. Le fer de notre hémoglobine vient donc d'étoiles mortes avant la formation du système solaire."
 },
 {
  "text": "Le temps s'écoule très légèrement plus vite en altitude qu'au niveau de la mer, un effet mesuré de la relativité.",
  "source": "Perplexity",
  "question": "Est-il vrai que le temps s'écoule très légèrement plus vite en altitude qu'au niveau de la mer, un effet mesuré de la relativité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20temps%20s'%C3%A9coule%20tr%C3%A8s%20l%C3%A9g%C3%A8rement%20plus%20vite%20en%20altitude%20qu'au%20niveau%20de%20la%20mer%2C%20un%20effet%20mesur%C3%A9%20de%20la%20relativit%C3%A9%20%3F",
  "explanation": "Selon la relativité générale, le temps passe plus lentement là où la gravité est plus forte. En 2010, des horloges atomiques ont mesuré une différence pour une élévation de seulement 33 cm. Sur une vie entière, vivre en altitude ne fait gagner qu'une fraction de microseconde."
 },
 {
  "text": "Les satellites GPS doivent corriger les effets de la relativité, sinon ils accumuleraient des erreurs de plusieurs kilomètres par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que les satellites GPS doivent corriger les effets de la relativité, sinon ils accumuleraient des erreurs de plusieurs kilomètres par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20satellites%20GPS%20doivent%20corriger%20les%20effets%20de%20la%20relativit%C3%A9%2C%20sinon%20ils%20accumuleraient%20des%20erreurs%20de%20plusieurs%20kilom%C3%A8tres%20par%20jour%20%3F",
  "explanation": "Les horloges des satellites GPS avancent d'environ 38 microsecondes par jour par rapport au sol : la gravité plus faible les accélère, leur vitesse les ralentit. Sans correction, l'erreur de positionnement s'accumulerait d'environ 10 km par jour. Les horloges sont donc réglées volontairement avant le lancement."
 },
 {
  "text": "Il existe un nuage de gaz dans l'espace qui contiendrait de grandes quantités d'alcool, mais totalement imbuvable.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe un nuage de gaz dans l'espace qui contiendrait de grandes quantités d'alcool, mais totalement imbuvable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20un%20nuage%20de%20gaz%20dans%20l'espace%20qui%20contiendrait%20de%20grandes%20quantit%C3%A9s%20d'alcool%2C%20mais%20totalement%20imbuvable%20%3F",
  "explanation": "Le nuage moléculaire Sagittarius B2, près du centre de la Voie lactée, contient de l'alcool éthylique et méthylique en quantités énormes, des milliards de milliards de litres. Mais il est extrêmement dilué, et mêlé à d'autres molécules toxiques. Il se trouve à environ 26 000 années-lumière."
 },
 {
  "text": "Les astronautes ne peuvent pas pleurer normalement dans l'espace, car sans gravité les larmes forment des bulles collées aux yeux.",
  "source": "Perplexity",
  "question": "Est-il vrai que les astronautes ne peuvent pas pleurer normalement dans l'espace, car sans gravité les larmes forment des bulles collées aux yeux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20astronautes%20ne%20peuvent%20pas%20pleurer%20normalement%20dans%20l'espace%2C%20car%20sans%20gravit%C3%A9%20les%20larmes%20forment%20des%20bulles%20coll%C3%A9es%20aux%20yeux%20%3F",
  "explanation": "Les astronautes peuvent produire des larmes, mais sans gravité elles ne coulent pas. Elles forment une boule qui reste collée à l'œil et peut piquer. L'astronaute Chris Hadfield l'a montré dans une vidéo depuis la Station spatiale internationale."
 },
 {
  "text": "En apesanteur, la flamme d'une bougie devient ronde et bleutée au lieu de pointer vers le haut.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en apesanteur, la flamme d'une bougie devient ronde et bleutée au lieu de pointer vers le haut ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20apesanteur%2C%20la%20flamme%20d'une%20bougie%20devient%20ronde%20et%20bleut%C3%A9e%20au%20lieu%20de%20pointer%20vers%20le%20haut%20%3F",
  "explanation": "Sur Terre, l'air chaud monte et crée un courant qui étire la flamme vers le haut. En apesanteur, il n'y a pas de convection : l'oxygène arrive seulement par diffusion, de tous côtés. La flamme devient sphérique, plus froide et bleutée, et elle brûle plus lentement."
 },
 {
  "text": "Il existe un pays, le Lesotho, entièrement entouré par un seul autre pays, l'Afrique du Sud.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe un pays, le Lesotho, entièrement entouré par un seul autre pays, l'Afrique du Sud ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20un%20pays%2C%20le%20Lesotho%2C%20enti%C3%A8rement%20entour%C3%A9%20par%20un%20seul%20autre%20pays%2C%20l'Afrique%20du%20Sud%20%3F",
  "explanation": "Le Lesotho est un royaume montagneux entièrement entouré par l'Afrique du Sud. Il n'existe que trois pays enclavés dans un seul autre pays : le Lesotho, le Vatican et Saint-Marin, ces deux derniers dans l'Italie. Le Lesotho est aussi le pays dont le point le plus bas est le plus haut du monde."
 },
 {
  "text": "L'Égypte n'est pas le pays qui compte le plus de pyramides : c'est le Soudan qui en abrite le plus grand nombre.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Égypte n'est pas le pays qui compte le plus de pyramides : c'est le Soudan qui en abrite le plus grand nombre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%89gypte%20n'est%20pas%20le%20pays%20qui%20compte%20le%20plus%20de%20pyramides%C2%A0%3A%20c'est%20le%20Soudan%20qui%20en%20abrite%20le%20plus%20grand%20nombre%20%3F",
  "explanation": "L'ancien royaume de Koush, en Nubie (Soudan actuel), a fait construire plus de 200 pyramides, notamment à Méroé. L'Égypte en compte environ 120 à 130. Les pyramides soudanaises sont plus petites et plus pentues."
 },
 {
  "text": "Venise est bâtie sur des millions de pieux de bois enfoncés dans la vase de la lagune.",
  "source": "Perplexity",
  "question": "Est-il vrai que venise est bâtie sur des millions de pieux de bois enfoncés dans la vase de la lagune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20venise%20est%20b%C3%A2tie%20sur%20des%20millions%20de%20pieux%20de%20bois%20enfonc%C3%A9s%20dans%20la%20vase%20de%20la%20lagune%20%3F",
  "explanation": "Venise repose sur des millions de pieux de bois (aulne, chêne, mélèze) enfoncés dans la vase de la lagune. Privés d'oxygène sous l'eau, ils ne pourrissent pas et se minéralisent avec le temps. Certains pieux sont en place depuis plus de mille ans."
 },
 {
  "text": "Il existe des villages en Norvège qui installent d'immenses miroirs sur la montagne pour renvoyer la lumière du soleil l'hiver.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des villages en Norvège qui installent d'immenses miroirs sur la montagne pour renvoyer la lumière du soleil l'hiver ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20villages%20en%20Norv%C3%A8ge%20qui%20installent%20d'immenses%20miroirs%20sur%20la%20montagne%20pour%20renvoyer%20la%20lumi%C3%A8re%20du%20soleil%20l'hiver%20%3F",
  "explanation": "Rjukan, en Norvège, est privée de soleil direct environ six mois par an à cause des montagnes. Depuis 2013, trois grands miroirs pilotés par ordinateur, installés sur la montagne, renvoient la lumière du soleil vers la place centrale. Le village italien de Viganella avait fait de même en 2006."
 },
 {
  "text": "Certaines frontières entre pays passent au milieu d'une bibliothèque, d'un café ou même d'une maison.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines frontières entre pays passent au milieu d'une bibliothèque, d'un café ou même d'une maison ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20fronti%C3%A8res%20entre%20pays%20passent%20au%20milieu%20d'une%20biblioth%C3%A8que%2C%20d'un%20caf%C3%A9%20ou%20m%C3%AAme%20d'une%20maison%20%3F",
  "explanation": "La bibliothèque Haskell, entre le Vermont (États-Unis) et le Québec (Canada), est traversée par la frontière, matérialisée par une ligne au sol. À Baarle, entre la Belgique et les Pays-Bas, la frontière passe par des maisons et des cafés. L'adresse d'une maison dépend alors de l'emplacement de sa porte."
 },
 {
  "text": "Le ketchup a été vendu au 19e siècle comme un médicament censé soigner divers maux.",
  "source": "Perplexity",
  "question": "Est-il vrai que le ketchup a été vendu au 19e siècle comme un médicament censé soigner divers maux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20ketchup%20a%20%C3%A9t%C3%A9%20vendu%20au%2019e%20si%C3%A8cle%20comme%20un%20m%C3%A9dicament%20cens%C3%A9%20soigner%20divers%20maux%20%3F",
  "explanation": "Dans les années 1830, le médecin John Cook Bennett vante les tomates comme remède contre la diarrhée ou l'indigestion. Des « pilules de tomate » sont vendues avec succès avant que l'escroquerie ne soit dénoncée. Le ketchup s'en est trouvé associé à la médecine."
 },
 {
  "text": "Au 17e siècle, aux Pays-Bas, la spéculation sur les bulbes de tulipe a atteint des prix délirants avant de s'effondrer.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au 17e siècle, aux Pays-Bas, la spéculation sur les bulbes de tulipe a atteint des prix délirants avant de s'effondrer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%2017e%20si%C3%A8cle%2C%20aux%20Pays-Bas%2C%20la%20sp%C3%A9culation%20sur%20les%20bulbes%20de%20tulipe%20a%20atteint%20des%20prix%20d%C3%A9lirants%20avant%20de%20s'effondrer%20%3F",
  "explanation": "Durant l'hiver 1636-1637, aux Provinces-Unies, des bulbes de tulipes rares se vendent à des prix exorbitants, parfois l'équivalent d'une maison. En février 1637, le marché s'effondre brutalement. C'est souvent considéré comme la première bulle spéculative, même si les historiens relativisent l'ampleur de la crise."
 },
 {
  "text": "Les chiffres que nous appelons arabes ont en réalité été mis au point en Inde avant d'être transmis par le monde arabe.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chiffres que nous appelons arabes ont en réalité été mis au point en Inde avant d'être transmis par le monde arabe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chiffres%20que%20nous%20appelons%20arabes%20ont%20en%20r%C3%A9alit%C3%A9%20%C3%A9t%C3%A9%20mis%20au%20point%20en%20Inde%20avant%20d'%C3%AAtre%20transmis%20par%20le%20monde%20arabe%20%3F",
  "explanation": "Notre système de numération, avec le zéro et la position des chiffres, a été développé en Inde. Il a été adopté par les savants arabes, comme Al-Khwârizmî, au IXe siècle, puis transmis en Europe, notamment par Fibonacci en 1202. Les Européens les ont appelés « chiffres arabes »."
 },
 {
  "text": "Le kiwi tient son nom d'un oiseau de Nouvelle-Zélande, et le fruit s'appelait auparavant groseille de Chine.",
  "source": "Perplexity",
  "question": "Est-il vrai que le kiwi tient son nom d'un oiseau de Nouvelle-Zélande, et le fruit s'appelait auparavant groseille de Chine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20kiwi%20tient%20son%20nom%20d'un%20oiseau%20de%20Nouvelle-Z%C3%A9lande%2C%20et%20le%20fruit%20s'appelait%20auparavant%20groseille%20de%20Chine%20%3F",
  "explanation": "Le fruit est originaire de Chine, d'où son ancien nom de « groseille de Chine ». Les producteurs néo-zélandais l'ont rebaptisé « kiwi » dans les années 1950-1960 pour l'export, en hommage à l'oiseau national. Le nom a aussi permis d'éviter des taxes sur les « groseilles » aux États-Unis."
 },
 {
  "text": "Le chewing-gum le plus ancien retrouvé a plusieurs milliers d'années : c'est de la résine mâchée à l'âge de pierre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chewing-gum le plus ancien retrouvé a plusieurs milliers d'années : c'est de la résine mâchée à l'âge de pierre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chewing-gum%20le%20plus%20ancien%20retrouv%C3%A9%20a%20plusieurs%20milliers%20d'ann%C3%A9es%C2%A0%3A%20c'est%20de%20la%20r%C3%A9sine%20m%C3%A2ch%C3%A9e%20%C3%A0%20l'%C3%A2ge%20de%20pierre%20%3F",
  "explanation": "En Finlande, on a retrouvé de la résine de bouleau mâchée datant d'environ 5 000 ans, portant des empreintes dentaires. En Scandinavie, un morceau vieux d'environ 10 000 ans a même permis de séquencer l'ADN de la personne qui l'a mâché. Cette résine servait probablement de colle ou de soin dentaire."
 },
 {
  "text": "Le pain était utilisé comme assiette au Moyen Âge, une tranche épaisse imbibée de sauce appelée tranchoir.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pain était utilisé comme assiette au Moyen Âge, une tranche épaisse imbibée de sauce appelée tranchoir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pain%20%C3%A9tait%20utilis%C3%A9%20comme%20assiette%20au%20Moyen%20%C3%82ge%2C%20une%20tranche%20%C3%A9paisse%20imbib%C3%A9e%20de%20sauce%20appel%C3%A9e%20tranchoir%20%3F",
  "explanation": "Au Moyen Âge, on servait les plats sur une tranche de pain rassis, le tranchoir. Elle absorbait les sauces et les jus de viande. Après le repas, elle était mangée, donnée aux pauvres ou aux chiens."
 },
 {
  "text": "Le poivre était si précieux au Moyen Âge qu'il servait parfois à payer des loyers ou des rançons.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poivre était si précieux au Moyen Âge qu'il servait parfois à payer des loyers ou des rançons ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poivre%20%C3%A9tait%20si%20pr%C3%A9cieux%20au%20Moyen%20%C3%82ge%20qu'il%20servait%20parfois%20%C3%A0%20payer%20des%20loyers%20ou%20des%20ran%C3%A7ons%20%3F",
  "explanation": "Le poivre, importé d'Inde, coûtait très cher au Moyen Âge. Il servait parfois de monnaie d'échange : on payait des loyers, des impôts ou des dots en poivre. En 410, Alaric aurait exigé 3 000 livres de poivre dans la rançon de Rome."
 },
 {
  "text": "Le beurre de cacahuète peut, sous forte pression et chaleur, être transformé en un minuscule diamant, en laboratoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le beurre de cacahuète peut, sous forte pression et chaleur, être transformé en un minuscule diamant, en laboratoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20beurre%20de%20cacahu%C3%A8te%20peut%2C%20sous%20forte%20pression%20et%20chaleur%2C%20%C3%AAtre%20transform%C3%A9%20en%20un%20minuscule%20diamant%2C%20en%20laboratoire%20%3F",
  "explanation": "En 2014, le géophysicien Dan Frost a reproduit au laboratoire les conditions du manteau terrestre. Sous une pression énorme, le carbone du beurre de cacahuète peut se transformer en diamant. Cela reste une curiosité : l'hydrogène doit d'abord être éliminé, et le processus est très long."
 },
 {
  "text": "Le son que fait un fouet qui claque est en réalité un mini-bang supersonique, la pointe dépassant la vitesse du son.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son que fait un fouet qui claque est en réalité un mini-bang supersonique, la pointe dépassant la vitesse du son ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20que%20fait%20un%20fouet%20qui%20claque%20est%20en%20r%C3%A9alit%C3%A9%20un%20mini-bang%20supersonique%2C%20la%20pointe%20d%C3%A9passant%20la%20vitesse%20du%20son%20%3F",
  "explanation": "Lorsqu'on fait claquer un fouet, l'onde le long de la lanière s'accélère vers son extrémité qui se rétrécit. La pointe dépasse alors la vitesse du son (environ 1 200 km/h). Le claquement est un petit bang supersonique. Le fouet est sans doute le premier objet humain à franchir le mur du son."
 },
 {
  "text": "Certains oiseaux, comme le martinet, peuvent voler pendant des mois sans jamais se poser.",
  "source": "Perplexity",
  "question": "Est-il vrai que certains oiseaux, comme le martinet, peuvent voler pendant des mois sans jamais se poser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certains%20oiseaux%2C%20comme%20le%20martinet%2C%20peuvent%20voler%20pendant%20des%20mois%20sans%20jamais%20se%20poser%20%3F",
  "explanation": "Une étude suédoise de 2016 a montré que le martinet noir reste en vol pendant ses 10 mois de migration, avec très peu ou pas d'atterrissages. Il mange, boit et dort probablement en vol. Un jeune martinet peut voler plusieurs années avant de se poser pour se reproduire."
 },
 {
  "text": "Le mot sandwich vient du comte de Sandwich, qui aurait demandé de la viande entre deux tranches de pain pour manger en jouant.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot sandwich vient du comte de Sandwich, qui aurait demandé de la viande entre deux tranches de pain pour manger en jouant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20sandwich%20vient%20du%20comte%20de%20Sandwich%2C%20qui%20aurait%20demand%C3%A9%20de%20la%20viande%20entre%20deux%20tranches%20de%20pain%20pour%20manger%20en%20jouant%20%3F",
  "explanation": "Le nom vient de John Montagu, 4e comte de Sandwich, au XVIIIe siècle. Il aurait demandé de la viande entre deux tranches de pain pour pouvoir continuer à jouer aux cartes sans se salir les doigts. D'autres sources disent qu'il travaillait à son bureau. L'idée elle-même est bien plus ancienne."
 },
 {
  "text": "Le mot poubelle vient du nom d'un préfet de Paris qui a rendu ces récipients obligatoires.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot poubelle vient du nom d'un préfet de Paris qui a rendu ces récipients obligatoires ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20poubelle%20vient%20du%20nom%20d'un%20pr%C3%A9fet%20de%20Paris%20qui%20a%20rendu%20ces%20r%C3%A9cipients%20obligatoires%20%3F",
  "explanation": "En 1883-1884, Eugène Poubelle, préfet de la Seine, impose aux Parisiens de déposer leurs ordures dans des récipients fermés, avec un tri en trois catégories. Les Parisiens ont surnommé ces boîtes « poubelles » par moquerie, et le mot est entré au dictionnaire."
 },
 {
  "text": "Le mot silhouette vient du nom d'un ministre français réputé pour son avarice.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot silhouette vient du nom d'un ministre français réputé pour son avarice ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20silhouette%20vient%20du%20nom%20d'un%20ministre%20fran%C3%A7ais%20r%C3%A9put%C3%A9%20pour%20son%20avarice%20%3F",
  "explanation": "Étienne de Silhouette, contrôleur général des finances en 1759, voulut imposer des mesures d'économie très impopulaires. Son nom désigna des choses réduites au strict minimum, puis ces portraits bon marché découpés en ombre noire, dessinés en un trait. Lui-même aurait pratiqué ce passe-temps."
 },
 {
  "text": "Un ruban assez long pour faire le tour de la Terre, rallongé d'un seul mètre, se décollerait du sol de façon perceptible partout.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un ruban assez long pour faire le tour de la Terre, rallongé d'un seul mètre, se décollerait du sol de façon perceptible partout ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20ruban%20assez%20long%20pour%20faire%20le%20tour%20de%20la%20Terre%2C%20rallong%C3%A9%20d'un%20seul%20m%C3%A8tre%2C%20se%20d%C3%A9collerait%20du%20sol%20de%20fa%C3%A7on%20perceptible%20partout%20%3F",
  "explanation": "La circonférence est égale à 2π × rayon. Ajouter 1 m à la longueur du ruban augmente son rayon de 1/(2π), soit environ 16 cm, quelle que soit la taille du cercle. Le ruban flotterait donc à 16 cm du sol tout autour de la Terre : assez pour qu'un chat passe dessous."
 },
 {
  "text": "Les abeilles peuvent compter jusqu'à de petits nombres et comprendre la notion de zéro.",
  "source": "Perplexity",
  "question": "Est-il vrai que les abeilles peuvent compter jusqu'à de petits nombres et comprendre la notion de zéro ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20abeilles%20peuvent%20compter%20jusqu'%C3%A0%20de%20petits%20nombres%20et%20comprendre%20la%20notion%20de%20z%C3%A9ro%20%3F",
  "explanation": "Des chercheurs ont montré en 2018 que les abeilles peuvent classer de petits ensembles d'éléments du plus petit au plus grand. Elles comprennent aussi qu'un ensemble vide est « plus petit » qu'un ensemble à un élément, ce qui s'apparente à la notion de zéro. Elles ont aussi appris de petites additions et soustractions."
 },
 {
  "text": "Un poisson-perroquet dort parfois enveloppé dans une bulle de mucus qu'il fabrique lui-même pour se protéger.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un poisson-perroquet dort parfois enveloppé dans une bulle de mucus qu'il fabrique lui-même pour se protéger ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20poisson-perroquet%20dort%20parfois%20envelopp%C3%A9%20dans%20une%20bulle%20de%20mucus%20qu'il%20fabrique%20lui-m%C3%AAme%20pour%20se%20prot%C3%A9ger%20%3F",
  "explanation": "Avant de dormir, certains poissons-perroquets sécrètent par leurs branchies un cocon de mucus qui les enveloppe entièrement. Cette « moustiquaire » les protégerait des parasites comme les isopodes, et masquerait peut-être leur odeur aux prédateurs. Fabriquer ce cocon leur coûte environ 2,5 % de leur énergie quotidienne."
 },
 {
  "text": "Le pistolet à claquettes, une petite crevette, produit une bulle si violente qu'elle émet un éclair de lumière.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pistolet à claquettes, une petite crevette, produit une bulle si violente qu'elle émet un éclair de lumière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pistolet%20%C3%A0%20claquettes%2C%20une%20petite%20crevette%2C%20produit%20une%20bulle%20si%20violente%20qu'elle%20%C3%A9met%20un%20%C3%A9clair%20de%20lumi%C3%A8re%20%3F",
  "explanation": "La crevette-pistolet referme sa pince si brusquement qu'elle crée une bulle de cavitation. Son implosion produit un claquement de plus de 200 décibels et une température de plusieurs milliers de degrés. Un très bref flash lumineux, appelé « shrimpoluminescence », a même été mesuré."
 },
 {
  "text": "Les chats ne perçoivent pas le goût sucré, une particularité liée à un gène inactif chez les félins.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chats ne perçoivent pas le goût sucré, une particularité liée à un gène inactif chez les félins ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chats%20ne%20per%C3%A7oivent%20pas%20le%20go%C3%BBt%20sucr%C3%A9%2C%20une%20particularit%C3%A9%20li%C3%A9e%20%C3%A0%20un%20g%C3%A8ne%20inactif%20chez%20les%20f%C3%A9lins%20%3F",
  "explanation": "Le récepteur du goût sucré est formé de deux protéines. Chez les chats, le gène Tas1r2, qui code l'une d'elles, est inactif à cause d'une mutation. Comme ils sont strictement carnivores, cette perte n'a pas été un handicap. C'est aussi le cas chez d'autres félins comme le lion et le tigre."
 },
 {
  "text": "Les araignées ne peuvent pas mâcher : elles liquéfient leur proie avant de l'aspirer.",
  "source": "Perplexity",
  "question": "Est-il vrai que les araignées ne peuvent pas mâcher : elles liquéfient leur proie avant de l'aspirer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20araign%C3%A9es%20ne%20peuvent%20pas%20m%C3%A2cher%C2%A0%3A%20elles%20liqu%C3%A9fient%20leur%20proie%20avant%20de%20l'aspirer%20%3F",
  "explanation": "La plupart des araignées injectent du venin, puis des enzymes digestives dans leur proie, ou les régurgitent dessus. L'intérieur de la proie se liquéfie et l'araignée l'aspire, comme une soupe. Il ne reste souvent qu'une enveloppe vide."
 },
 {
  "text": "Le lézard basilic peut courir sur l'eau sur une courte distance grâce à la vitesse de ses pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lézard basilic peut courir sur l'eau sur une courte distance grâce à la vitesse de ses pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20l%C3%A9zard%20basilic%20peut%20courir%20sur%20l'eau%20sur%20une%20courte%20distance%20gr%C3%A2ce%20%C3%A0%20la%20vitesse%20de%20ses%20pattes%20%3F",
  "explanation": "Le basilic d'Amérique centrale, surnommé « lézard Jésus-Christ », frappe la surface de l'eau avec ses grandes pattes arrière à environ 20 pas par seconde. Chaque frappe crée une poche d'air qui le soutient brièvement. Les jeunes, plus légers, peuvent parcourir plus de 10 mètres ainsi."
 },
 {
  "text": "Le morse peut dormir en flottant à la verticale, la tête hors de l'eau, grâce à des poches d'air dans le cou.",
  "source": "Perplexity",
  "question": "Est-il vrai que le morse peut dormir en flottant à la verticale, la tête hors de l'eau, grâce à des poches d'air dans le cou ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20morse%20peut%20dormir%20en%20flottant%20%C3%A0%20la%20verticale%2C%20la%20t%C3%AAte%20hors%20de%20l'eau%2C%20gr%C3%A2ce%20%C3%A0%20des%20poches%20d'air%20dans%20le%20cou%20%3F",
  "explanation": "Le morse peut gonfler deux sacs d'air élastiques reliés à son pharynx, avec jusqu'à 50 litres d'air. Ils agissent comme une bouée et le maintiennent la tête hors de l'eau, ce qui lui permet de dormir en flottant. Les mâles s'en servent aussi pour produire des sons de parade."
 },
 {
  "text": "Le poisson archer crache un jet d'eau précis pour faire tomber les insectes des feuilles au-dessus de lui.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson archer crache un jet d'eau précis pour faire tomber les insectes des feuilles au-dessus de lui ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson%20archer%20crache%20un%20jet%20d'eau%20pr%C3%A9cis%20pour%20faire%20tomber%20les%20insectes%20des%20feuilles%20au-dessus%20de%20lui%20%3F",
  "explanation": "Le poisson archer d'Asie du Sud-Est forme un tube avec sa langue et son palais et propulse un jet d'eau jusqu'à 2 à 3 m. Il compense la réfraction de la lumière à la surface de l'eau pour viser juste. L'insecte touché tombe à l'eau et il l'avale."
 },
 {
  "text": "Le poisson-lune, ou môle, peut pondre des centaines de millions d'œufs en une seule fois.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-lune, ou môle, peut pondre des centaines de millions d'œufs en une seule fois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-lune%2C%20ou%20m%C3%B4le%2C%20peut%20pondre%20des%20centaines%20de%20millions%20d'%C5%93ufs%20en%20une%20seule%20fois%20%3F",
  "explanation": "Le poisson-lune (Mola mola) est le poisson osseux le plus lourd, jusqu'à plus de 2 tonnes. Une femelle peut porter environ 300 millions d'œufs, un record chez les vertébrés. Seule une infime partie survit jusqu'à l'âge adulte."
 },
 {
  "text": "Le mot vaccin vient du latin vacca, la vache, en lien avec la variole des vaches utilisée par Jenner.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot vaccin vient du latin vacca, la vache, en lien avec la variole des vaches utilisée par Jenner ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20vaccin%20vient%20du%20latin%20vacca%2C%20la%20vache%2C%20en%20lien%20avec%20la%20variole%20des%20vaches%20utilis%C3%A9e%20par%20Jenner%20%3F",
  "explanation": "En 1796, Edward Jenner remarque que les vachères ayant contracté la vaccine (variole de la vache) semblent protégées de la variole. Il inocule un enfant avec du pus de vaccine, puis avec la variole, qui ne se développe pas. Louis Pasteur a ensuite généralisé le mot « vaccin » à toutes les immunisations, en son honneur."
 },
 {
  "text": "Le tout premier ordinateur mécanique de calcul remonte à l'Antiquité grecque, la machine d'Anticythère.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tout premier ordinateur mécanique de calcul remonte à l'Antiquité grecque, la machine d'Anticythère ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tout%20premier%20ordinateur%20m%C3%A9canique%20de%20calcul%20remonte%20%C3%A0%20l'Antiquit%C3%A9%20grecque%2C%20la%20machine%20d'Anticyth%C3%A8re%20%3F",
  "explanation": "Découverte en 1901 dans une épave au large de l'île grecque d'Anticythère, cette machine date d'environ 100 à 200 av. J.-C. Ses dizaines d'engrenages en bronze permettaient de prédire la position du Soleil, de la Lune, les éclipses et les dates des Jeux. C'est un calculateur analogique, considéré comme le premier « ordinateur » connu."
 },
 {
  "text": "Nous respirons majoritairement par une seule narine à la fois, en alternance au fil des heures.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous respirons majoritairement par une seule narine à la fois, en alternance au fil des heures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20respirons%20majoritairement%20par%20une%20seule%20narine%20%C3%A0%20la%20fois%2C%20en%20alternance%20au%20fil%20des%20heures%20%3F",
  "explanation": "C'est le cycle nasal : les tissus érectiles de chaque narine gonflent et dégonflent en alternance, contrôlés par le système nerveux autonome. Une narine laisse passer l'essentiel de l'air pendant que l'autre se repose, puis elles échangent, toutes les quelques heures. On ne s'en rend généralement pas compte."
 },
 {
  "text": "Les gouttes de pluie ne sont pas en forme de larme mais plutôt aplaties comme de petits pains hamburgers.",
  "source": "Perplexity",
  "question": "Est-il vrai que les gouttes de pluie ne sont pas en forme de larme mais plutôt aplaties comme de petits pains hamburgers ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gouttes%20de%20pluie%20ne%20sont%20pas%20en%20forme%20de%20larme%20mais%20plut%C3%B4t%20aplaties%20comme%20de%20petits%20pains%20hamburgers%20%3F",
  "explanation": "Les petites gouttes sont sphériques à cause de la tension superficielle. En tombant, les gouttes plus grosses sont aplaties par la résistance de l'air, et prennent la forme d'un petit pain à hamburger. Au-delà d'environ 4,5 mm, elles se déforment trop et éclatent en gouttes plus petites."
 },
 {
  "text": "La première photo publiée sur le web montrait un groupe de musique humoristique du laboratoire du CERN.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première photo publiée sur le web montrait un groupe de musique humoristique du laboratoire du CERN ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20photo%20publi%C3%A9e%20sur%20le%20web%20montrait%20un%20groupe%20de%20musique%20humoristique%20du%20laboratoire%20du%20CERN%20%3F",
  "explanation": "En 1992, Tim Berners-Lee a mis en ligne une photo des Horrible Cernettes, groupe de parodie composé d'employées du CERN. Elle était retouchée par l'un de ses membres, Silvano de Gennaro. Elle est souvent considérée comme la première photo publiée sur le web."
 },
 {
  "text": "Le nom spam pour le courrier indésirable vient d'un sketch comique où ce mot était répété sans fin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nom spam pour le courrier indésirable vient d'un sketch comique où ce mot était répété sans fin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nom%20spam%20pour%20le%20courrier%20ind%C3%A9sirable%20vient%20d'un%20sketch%20comique%20o%C3%B9%20ce%20mot%20%C3%A9tait%20r%C3%A9p%C3%A9t%C3%A9%20sans%20fin%20%3F",
  "explanation": "Dans un sketch des Monty Python de 1970, des clients tentent de commander dans un café où presque tous les plats contiennent du Spam, une viande en conserve, et où des Vikings chantent « Spam ! » en boucle. Le mot a été repris dans les années 1980-1990 pour désigner les messages répétitifs et envahissants."
 },
 {
  "text": "Les nénuphars géants d'Amazonie sont assez solides pour supporter le poids d'un petit enfant.",
  "source": "Perplexity",
  "question": "Est-il vrai que les nénuphars géants d'Amazonie sont assez solides pour supporter le poids d'un petit enfant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20n%C3%A9nuphars%20g%C3%A9ants%20d'Amazonie%20sont%20assez%20solides%20pour%20supporter%20le%20poids%20d'un%20petit%20enfant%20%3F",
  "explanation": "Les feuilles de Victoria amazonica dépassent 2 m de diamètre. Leur face inférieure est renforcée par un réseau de nervures remplies d'air, qui répartit le poids. Une feuille peut supporter plusieurs dizaines de kilos si la charge est bien répartie, par exemple sur une planche."
 },
 {
  "text": "La substance la plus noire jamais fabriquée absorbe presque toute la lumière et donne l'impression d'un trou dans l'espace.",
  "source": "Perplexity",
  "question": "Est-il vrai que la substance la plus noire jamais fabriquée absorbe presque toute la lumière et donne l'impression d'un trou dans l'espace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20substance%20la%20plus%20noire%20jamais%20fabriqu%C3%A9e%20absorbe%20presque%20toute%20la%20lumi%C3%A8re%20et%20donne%20l'impression%20d'un%20trou%20dans%20l'espace%20%3F",
  "explanation": "Le Vantablack, créé en 2014, est fait de nanotubes de carbone verticaux qui piègent la lumière : il absorbe environ 99,96 % de la lumière visible. Un objet recouvert perd tout relief visible et semble être un trou. Des chercheurs du MIT ont depuis créé un matériau encore plus noir."
 },
 {
  "text": "Le plus petit os et le plus petit muscle du corps humain se trouvent tous deux dans l'oreille.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus petit os et le plus petit muscle du corps humain se trouvent tous deux dans l'oreille ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20petit%20os%20et%20le%20plus%20petit%20muscle%20du%20corps%20humain%20se%20trouvent%20tous%20deux%20dans%20l'oreille%20%3F",
  "explanation": "L'étrier, l'un des trois osselets de l'oreille moyenne, mesure environ 3 mm. Le muscle stapédien, attaché à l'étrier, mesure environ 1 mm. Il se contracte face aux sons forts pour protéger l'oreille interne."
 },
 {
  "text": "L'Australie possède une clôture plus longue que la distance entre Paris et Moscou, construite contre les dingos.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Australie possède une clôture plus longue que la distance entre Paris et Moscou, construite contre les dingos ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Australie%20poss%C3%A8de%20une%20cl%C3%B4ture%20plus%20longue%20que%20la%20distance%20entre%20Paris%20et%20Moscou%2C%20construite%20contre%20les%20dingos%20%3F",
  "explanation": "La Dingo Fence, terminée dans les années 1880, s'étend sur environ 5 600 km dans l'est de l'Australie. La distance Paris-Moscou est d'environ 2 500 km. Elle protège les troupeaux de moutons du sud-est contre les dingos et c'est l'une des plus longues structures du monde."
 },
 {
  "text": "La distance la plus courte entre la Russie et les États-Unis n'est que de quelques kilomètres, entre deux petites îles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la distance la plus courte entre la Russie et les États-Unis n'est que de quelques kilomètres, entre deux petites îles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20distance%20la%20plus%20courte%20entre%20la%20Russie%20et%20les%20%C3%89tats-Unis%20n'est%20que%20de%20quelques%20kilom%C3%A8tres%2C%20entre%20deux%20petites%20%C3%AEles%20%3F",
  "explanation": "Dans le détroit de Béring, la Grande Diomède (Russie) et la Petite Diomède (États-Unis) ne sont séparées que d'environ 3,8 km. La ligne de changement de date passe entre elles : la russe a presque un jour d'avance. En hiver, la glace peut même relier les deux îles."
 },
 {
  "text": "Les six missions Apollo qui se sont posées sur la Lune y ont abandonné 96 sacs de déchets humains, pour gagner du poids au décollage.",
  "source": "Perplexity",
  "question": "Est-il vrai que les six missions Apollo qui se sont posées sur la Lune y ont abandonné 96 sacs de déchets humains, pour gagner du poids au décollage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20six%20missions%20Apollo%20qui%20se%20sont%20pos%C3%A9es%20sur%20la%20Lune%20y%20ont%20abandonn%C3%A9%2096%20sacs%20de%20d%C3%A9chets%20humains%2C%20pour%20gagner%20du%20poids%20au%20d%C3%A9collage%20%3F",
  "explanation": "Pour gagner du poids au décollage depuis la Lune et rapporter des roches lunaires, les astronautes ont laissé sur place de nombreux objets, dont 96 sacs d'excréments, d'urine et de vomi. Les scientifiques s'intéressent à ces sacs pour savoir si des bactéries ont pu survivre des décennies dans ces conditions."
 },
 {
  "text": "Par mètre cube, le cœur du Soleil produit environ 276 watts, soit à peu près autant qu'un tas de compost actif et moins que le métabolisme d'un humain.",
  "source": "Perplexity",
  "question": "Est-il vrai que par mètre cube, le cœur du Soleil produit environ 276 watts, soit à peu près autant qu'un tas de compost actif et moins que le métabolisme d'un humain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20par%20m%C3%A8tre%20cube%2C%20le%20c%C5%93ur%20du%20Soleil%20produit%20environ%20276%20watts%2C%20soit%20%C3%A0%20peu%20pr%C3%A8s%20autant%20qu'un%20tas%20de%20compost%20actif%20et%20moins%20que%20le%20m%C3%A9tabolisme%20d'un%20humain%20%3F",
  "explanation": "La fusion nucléaire dans le cœur du Soleil est très lente : à l'échelle d'un mètre cube, la puissance produite est faible. Le Soleil est si brillant parce qu'il est immense. Un humain au repos produit environ 1 000 W par mètre cube de corps, davantage que le cœur solaire à volume égal."
 },
 {
  "text": "Depuis certains endroits de Mercure, le Soleil se lève, s'arrête dans le ciel, repart en arrière puis reprend sa course, à cause de l'orbite très elliptique de la planète.",
  "source": "Perplexity",
  "question": "Est-il vrai que depuis certains endroits de Mercure, le Soleil se lève, s'arrête dans le ciel, repart en arrière puis reprend sa course, à cause de l'orbite très elliptique de la planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20depuis%20certains%20endroits%20de%20Mercure%2C%20le%20Soleil%20se%20l%C3%A8ve%2C%20s'arr%C3%AAte%20dans%20le%20ciel%2C%20repart%20en%20arri%C3%A8re%20puis%20reprend%20sa%20course%2C%20%C3%A0%20cause%20de%20l'orbite%20tr%C3%A8s%20elliptique%20de%20la%20plan%C3%A8te%20%3F",
  "explanation": "Près du périhélie (son point le plus proche du Soleil), Mercure se déplace plus vite sur son orbite qu'elle ne tourne sur elle-même. Depuis certains points de sa surface, le Soleil semble donc ralentir, s'arrêter, reculer, puis repartir. À certains endroits, on peut même assister à un double lever de Soleil."
 },
 {
  "text": "En 1889 à Fribourg-en-Brisgau, une tentative de distiller de la thioacétone a provoqué nausées et évanouissements dans un rayon de 750 mètres autour du laboratoire, à cause de l'odeur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1889 à Fribourg-en-Brisgau, une tentative de distiller de la thioacétone a provoqué nausées et évanouissements dans un rayon de 750 mètres autour du laboratoire, à cause de l'odeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201889%20%C3%A0%20Fribourg-en-Brisgau%2C%20une%20tentative%20de%20distiller%20de%20la%20thioac%C3%A9tone%20a%20provoqu%C3%A9%20naus%C3%A9es%20et%20%C3%A9vanouissements%20dans%20un%20rayon%20de%20750%20m%C3%A8tres%20autour%20du%20laboratoire%2C%20%C3%A0%20cause%20de%20l'odeur%20%3F",
  "explanation": "La thioacétone est un composé soufré réputé pour avoir l'une des pires odeurs connues. En 1889, une tentative de production à Fribourg aurait provoqué des vomissements et des malaises dans un large périmètre de la ville. Les chimistes qui ont reproduit l'expérience ensuite ont décrit une odeur à faire fuir les gens à des centaines de mètres."
 },
 {
  "text": "Le trifluorure de chlore est un oxydant si violent qu'il enflamme spontanément des matériaux réputés incombustibles comme le sable, le verre ou l'amiante.",
  "source": "Perplexity",
  "question": "Est-il vrai que le trifluorure de chlore est un oxydant si violent qu'il enflamme spontanément des matériaux réputés incombustibles comme le sable, le verre ou l'amiante ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20trifluorure%20de%20chlore%20est%20un%20oxydant%20si%20violent%20qu'il%20enflamme%20spontan%C3%A9ment%20des%20mat%C3%A9riaux%20r%C3%A9put%C3%A9s%20incombustibles%20comme%20le%20sable%2C%20le%20verre%20ou%20l'amiante%20%3F",
  "explanation": "Le trifluorure de chlore (ClF3) est un oxydant plus puissant que l'oxygène. Il peut enflammer des matériaux déjà « oxydés » comme le sable, le verre ou l'amiante. Un accident industriel l'a vu traverser une couche de béton. Le chimiste John D. Clark a écrit qu'en cas d'incendie, il conseillait surtout de bonnes chaussures de course."
 },
 {
  "text": "De retour de la Lune, les astronautes d'Apollo 11 ont rempli une déclaration de douane à Honolulu, avec la Lune comme escale sur leur itinéraire et des roches lunaires comme marchandise déclarée.",
  "source": "Perplexity",
  "question": "Est-il vrai que de retour de la Lune, les astronautes d'Apollo 11 ont rempli une déclaration de douane à Honolulu, avec la Lune comme escale sur leur itinéraire et des roches lunaires comme marchandise déclarée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20de%20retour%20de%20la%20Lune%2C%20les%20astronautes%20d'Apollo%2011%20ont%20rempli%20une%20d%C3%A9claration%20de%20douane%20%C3%A0%20Honolulu%2C%20avec%20la%20Lune%20comme%20escale%20sur%20leur%20itin%C3%A9raire%20et%20des%20roches%20lunaires%20comme%20marchandise%20d%C3%A9clar%C3%A9e%20%3F",
  "explanation": "Le 24 juillet 1969, à leur retour à Honolulu, Armstrong, Aldrin et Collins ont signé un formulaire de douane mentionnant comme provenance « la Lune » et comme marchandise des roches et de la poussière lunaires. Le document, en partie humoristique, a bien été rempli. Il est désormais exposé."
 },
 {
  "text": "En 1969, l'impact volontaire de l'étage de remontée du module lunaire d'Apollo 12 sur la Lune l'a fait vibrer comme une cloche pendant près d'une heure, selon le sismomètre laissé sur place.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1969, l'impact volontaire de l'étage de remontée du module lunaire d'Apollo 12 sur la Lune l'a fait vibrer comme une cloche pendant près d'une heure, selon le sismomètre laissé sur place ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201969%2C%20l'impact%20volontaire%20de%20l'%C3%A9tage%20de%20remont%C3%A9e%20du%20module%20lunaire%20d'Apollo%2012%20sur%20la%20Lune%20l'a%20fait%20vibrer%20comme%20une%20cloche%20pendant%20pr%C3%A8s%20d'une%20heure%2C%20selon%20le%20sismom%C3%A8tre%20laiss%C3%A9%20sur%20place%20%3F",
  "explanation": "Le 20 novembre 1969, l'étage de remontée du module lunaire d'Apollo 12 a été volontairement envoyé s'écraser sur la Lune. Le sismomètre déposé par l'équipage a enregistré des vibrations pendant près d'une heure. Ce résultat a révélé que la croûte lunaire est fracturée et sèche, et qu'elle transmet longtemps les ondes."
 },
 {
  "text": "Le cosmonaute Sergueï Krikaliov est parti vers Mir en mai 1991 en citoyen soviétique et en est revenu en mars 1992 dans un pays, l'URSS, qui n'existait plus.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cosmonaute Sergueï Krikaliov est parti vers Mir en mai 1991 en citoyen soviétique et en est revenu en mars 1992 dans un pays, l'URSS, qui n'existait plus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cosmonaute%20Sergue%C3%AF%20Krikaliov%20est%20parti%20vers%20Mir%20en%20mai%201991%20en%20citoyen%20sovi%C3%A9tique%20et%20en%20est%20revenu%20en%20mars%201992%20dans%20un%20pays%2C%20l'URSS%2C%20qui%20n'existait%20plus%20%3F",
  "explanation": "Sergueï Krikaliov est parti vers la station Mir en mai 1991. Pendant sa mission, l'URSS s'est effondrée et sa ville natale, Leningrad, a été renommée Saint-Pétersbourg. Faute de budget pour envoyer un remplaçant, son séjour a été prolongé. Il est revenu en mars 1992, après 311 jours, dans un nouveau pays, la Russie."
 },
 {
  "text": "La France est le seul pays à avoir envoyé un chat dans l'espace : Félicette, une chatte parisienne, a effectué un vol suborbital en octobre 1963 et en est revenue vivante.",
  "source": "Perplexity",
  "question": "Est-il vrai que la France est le seul pays à avoir envoyé un chat dans l'espace : Félicette, une chatte parisienne, a effectué un vol suborbital en octobre 1963 et en est revenue vivante ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20France%20est%20le%20seul%20pays%20%C3%A0%20avoir%20envoy%C3%A9%20un%20chat%20dans%20l'espace%20%3A%20F%C3%A9licette%2C%20une%20chatte%20parisienne%2C%20a%20effectu%C3%A9%20un%20vol%20suborbital%20en%20octobre%201963%20et%20en%20est%20revenue%20vivante%20%3F",
  "explanation": "Le 18 octobre 1963, Félicette, une chatte errante parisienne, est envoyée à bord d'une fusée Véronique depuis le Sahara algérien pour un vol suborbital d'environ 15 minutes. Elle est récupérée vivante, puis euthanasiée quelques mois plus tard pour étudier son cerveau. Une statue lui rend hommage depuis 2019 à Strasbourg."
 },
 {
  "text": "Du milieu des années 1980 au milieu des années 2000, les cosmonautes des Soyouz emportaient un pistolet à trois canons, le TP-82, contre les ours et les loups en cas d'atterrissage en Sibérie.",
  "source": "Perplexity",
  "question": "Est-il vrai que du milieu des années 1980 au milieu des années 2000, les cosmonautes des Soyouz emportaient un pistolet à trois canons, le TP-82, contre les ours et les loups en cas d'atterrissage en Sibérie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20du%20milieu%20des%20ann%C3%A9es%201980%20au%20milieu%20des%20ann%C3%A9es%202000%2C%20les%20cosmonautes%20des%20Soyouz%20emportaient%20un%20pistolet%20%C3%A0%20trois%20canons%2C%20le%20TP-82%2C%20contre%20les%20ours%20et%20les%20loups%20en%20cas%20d'atterrissage%20en%20Sib%C3%A9rie%20%3F",
  "explanation": "Après l'atterrissage difficile de Voskhod 2 en 1965, avec des cosmonautes perdus dans la taïga, les Soviétiques ont développé le TP-82. Ce pistolet à trois canons tirait des balles, des cartouches de chasse et des fusées de détresse. Sa crosse servait aussi de machette. Il était embarqué dans les Soyouz jusqu'en 2007 environ."
 },
 {
  "text": "Selon Buzz Aldrin, le premier aliment mangé et le premier liquide versé sur la Lune furent le pain et le vin de la communion qu'il célébra en privé dans le module lunaire en 1969.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon Buzz Aldrin, le premier aliment mangé et le premier liquide versé sur la Lune furent le pain et le vin de la communion qu'il célébra en privé dans le module lunaire en 1969 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20Buzz%20Aldrin%2C%20le%20premier%20aliment%20mang%C3%A9%20et%20le%20premier%20liquide%20vers%C3%A9%20sur%20la%20Lune%20furent%20le%20pain%20et%20le%20vin%20de%20la%20communion%20qu'il%20c%C3%A9l%C3%A9bra%20en%20priv%C3%A9%20dans%20le%20module%20lunaire%20en%201969%20%3F",
  "explanation": "Presbytérien, Buzz Aldrin a célébré une communion dans le module lunaire après l'alunissage, avant la sortie sur la Lune. Le vin s'est déversé lentement dans le calice à cause de la gravité lunaire. Il l'a fait discrètement, la NASA étant poursuivie en justice pour une lecture de la Bible lors d'Apollo 8."
 },
 {
  "text": "En 1954 en Alabama, Ann Hodges faisait la sieste sur son canapé quand une météorite de près de 4 kg a traversé son toit, rebondi sur sa radio et l'a frappée à la hanche.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1954 en Alabama, Ann Hodges faisait la sieste sur son canapé quand une météorite de près de 4 kg a traversé son toit, rebondi sur sa radio et l'a frappée à la hanche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201954%20en%20Alabama%2C%20Ann%20Hodges%20faisait%20la%20sieste%20sur%20son%20canap%C3%A9%20quand%20une%20m%C3%A9t%C3%A9orite%20de%20pr%C3%A8s%20de%204%20kg%20a%20travers%C3%A9%20son%20toit%2C%20rebondi%20sur%20sa%20radio%20et%20l'a%20frapp%C3%A9e%20%C3%A0%20la%20hanche%20%3F",
  "explanation": "Le 30 novembre 1954, une météorite de 3,9 kg a traversé le toit de la maison d'Ann Hodges à Sylacauga, en Alabama. Elle a rebondi sur un poste de radio et l'a heurtée, causant un gros hématome. C'est le premier cas documenté d'une personne blessée par une météorite."
 },
 {
  "text": "La plus grosse météorite connue, celle de Hoba en Namibie, pèse plus de 60 tonnes et n'a jamais été déplacée depuis sa découverte en 1920.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus grosse météorite connue, celle de Hoba en Namibie, pèse plus de 60 tonnes et n'a jamais été déplacée depuis sa découverte en 1920 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20grosse%20m%C3%A9t%C3%A9orite%20connue%2C%20celle%20de%20Hoba%20en%20Namibie%2C%20p%C3%A8se%20plus%20de%2060%20tonnes%20et%20n'a%20jamais%20%C3%A9t%C3%A9%20d%C3%A9plac%C3%A9e%20depuis%20sa%20d%C3%A9couverte%20en%201920%20%3F",
  "explanation": "La météorite de Hoba, découverte en 1920 par un fermier, est un bloc de fer et de nickel d'environ 60 tonnes. Elle n'a laissé aucun cratère, peut-être parce que sa forme plate l'a ralentie dans l'atmosphère. Elle est restée où elle est tombée il y a environ 80 000 ans."
 },
 {
  "text": "En 1964, avant de comprendre qu'ils captaient l'écho du Big Bang, Penzias et Wilson ont soupçonné les fientes des pigeons nichant dans leur antenne et les ont nettoyées : le bruit était toujours là.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1964, avant de comprendre qu'ils captaient l'écho du Big Bang, Penzias et Wilson ont soupçonné les fientes des pigeons nichant dans leur antenne et les ont nettoyées : le bruit était toujours là ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201964%2C%20avant%20de%20comprendre%20qu'ils%20captaient%20l'%C3%A9cho%20du%20Big%20Bang%2C%20Penzias%20et%20Wilson%20ont%20soup%C3%A7onn%C3%A9%20les%20fientes%20des%20pigeons%20nichant%20dans%20leur%20antenne%20et%20les%20ont%20nettoy%C3%A9es%20%3A%20le%20bruit%20%C3%A9tait%20toujours%20l%C3%A0%20%3F",
  "explanation": "Arno Penzias et Robert Wilson, des laboratoires Bell, ne parvenaient pas à éliminer un bruit radio persistant de leur antenne. Ils ont nettoyé les fientes des pigeons qui y nichaient, et même chassé les pigeons. Le bruit persistait : c'était le fond diffus cosmologique, rayonnement résiduel du Big Bang. Ils ont reçu le prix Nobel en 1978."
 },
 {
  "text": "Le césium réagit de façon explosive avec l'eau, et réagit même avec de la glace jusqu'à −116 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai que le césium réagit de façon explosive avec l'eau, et réagit même avec de la glace jusqu'à −116 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20c%C3%A9sium%20r%C3%A9agit%20de%20fa%C3%A7on%20explosive%20avec%20l'eau%2C%20et%20r%C3%A9agit%20m%C3%AAme%20avec%20de%20la%20glace%20jusqu'%C3%A0%20%E2%88%92116%20%C2%B0C%20%3F",
  "explanation": "Le césium, un métal alcalin, a un électron externe très facile à arracher. Au contact de l'eau, il réagit violemment en produisant de l'hydrogène qui s'enflamme. Il réagit même avec la glace à très basse température. On le conserve sous huile ou dans un gaz inerte."
 },
 {
  "text": "Le bismuth, utilisé dans des médicaments pour l'estomac, est en réalité radioactif : sa demi-vie de 2×10¹⁹ ans dépasse plus d'un milliard de fois l'âge de l'Univers.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bismuth, utilisé dans des médicaments pour l'estomac, est en réalité radioactif : sa demi-vie de 2×10¹⁹ ans dépasse plus d'un milliard de fois l'âge de l'Univers ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20bismuth%2C%20utilis%C3%A9%20dans%20des%20m%C3%A9dicaments%20pour%20l'estomac%2C%20est%20en%20r%C3%A9alit%C3%A9%20radioactif%20%3A%20sa%20demi-vie%20de%202%C3%9710%C2%B9%E2%81%B9%20ans%20d%C3%A9passe%20plus%20d'un%20milliard%20de%20fois%20l'%C3%A2ge%20de%20l'Univers%20%3F",
  "explanation": "Le bismuth 209 a longtemps été considéré comme stable. En 2003, des physiciens ont détecté sa désintégration alpha, avec une demi-vie d'environ 2 × 10^19 ans. Sa radioactivité est donc totalement négligeable. Il est utilisé dans des médicaments contre les troubles digestifs."
 },
 {
  "text": "En 1772, Lavoisier a fait brûler un diamant en concentrant la lumière du Soleil avec une lentille : il n'en est sorti que du gaz carbonique, preuve qu'il est fait de carbone comme le charbon.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1772, Lavoisier a fait brûler un diamant en concentrant la lumière du Soleil avec une lentille : il n'en est sorti que du gaz carbonique, preuve qu'il est fait de carbone comme le charbon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201772%2C%20Lavoisier%20a%20fait%20br%C3%BBler%20un%20diamant%20en%20concentrant%20la%20lumi%C3%A8re%20du%20Soleil%20avec%20une%20lentille%20%3A%20il%20n'en%20est%20sorti%20que%20du%20gaz%20carbonique%2C%20preuve%20qu'il%20est%20fait%20de%20carbone%20comme%20le%20charbon%20%3F",
  "explanation": "Avec une grande lentille, Lavoisier et d'autres chimistes ont fait brûler un diamant enfermé dans une cloche. Le diamant a disparu et le seul produit était du dioxyde de carbone, comme pour le charbon. C'est la preuve que le diamant et le charbon sont faits du même élément, le carbone."
 },
 {
  "text": "Un glaçon fabriqué avec de l'eau lourde coule au fond d'un verre d'eau ordinaire au lieu de flotter, car il est plus dense qu'elle.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un glaçon fabriqué avec de l'eau lourde coule au fond d'un verre d'eau ordinaire au lieu de flotter, car il est plus dense qu'elle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20gla%C3%A7on%20fabriqu%C3%A9%20avec%20de%20l'eau%20lourde%20coule%20au%20fond%20d'un%20verre%20d'eau%20ordinaire%20au%20lieu%20de%20flotter%2C%20car%20il%20est%20plus%20dense%20qu'elle%20%3F",
  "explanation": "Dans l'eau lourde (D2O), les atomes d'hydrogène sont du deutérium, deux fois plus lourd. La glace d'eau lourde est donc environ 10 % plus dense que la glace normale, et plus dense que l'eau liquide ordinaire. Elle coule. L'eau lourde n'est pas radioactive mais est utilisée dans certains réacteurs nucléaires."
 },
 {
  "text": "Dans les années 1930, la marque française Tho-Radia vendait une crème de beauté contenant du thorium et du radium, présentés comme bons pour la peau.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans les années 1930, la marque française Tho-Radia vendait une crème de beauté contenant du thorium et du radium, présentés comme bons pour la peau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20les%20ann%C3%A9es%201930%2C%20la%20marque%20fran%C3%A7aise%20Tho-Radia%20vendait%20une%20cr%C3%A8me%20de%20beaut%C3%A9%20contenant%20du%20thorium%20et%20du%20radium%2C%20pr%C3%A9sent%C3%A9s%20comme%20bons%20pour%20la%20peau%20%3F",
  "explanation": "Tho-Radia, lancée en 1932, utilisait l'image d'un docteur, Alfred Curie, sans lien avec Pierre et Marie Curie. Ses crèmes et poudres au thorium et radium promettaient d'embellir et rajeunir la peau. La radioactivité était alors perçue comme bénéfique, avant que ses dangers ne soient connus du grand public."
 },
 {
  "text": "Lors de la tempête solaire de 1859, des télégraphistes de Boston et Portland ont débranché leurs batteries et transmis des messages pendant deux heures grâce au seul courant induit par l'aurore.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors de la tempête solaire de 1859, des télégraphistes de Boston et Portland ont débranché leurs batteries et transmis des messages pendant deux heures grâce au seul courant induit par l'aurore ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20de%20la%20temp%C3%AAte%20solaire%20de%201859%2C%20des%20t%C3%A9l%C3%A9graphistes%20de%20Boston%20et%20Portland%20ont%20d%C3%A9branch%C3%A9%20leurs%20batteries%20et%20transmis%20des%20messages%20pendant%20deux%20heures%20gr%C3%A2ce%20au%20seul%20courant%20induit%20par%20l'aurore%20%3F",
  "explanation": "Lors de l'événement de Carrington, en septembre 1859, la plus puissante tempête solaire connue, des courants électriques ont été induits dans les lignes de télégraphe. Des opérateurs ont reçu des chocs, des papiers ont pris feu. Entre Boston et Portland, ils ont débranché leurs batteries et transmis des messages en utilisant le courant induit."
 },
 {
  "text": "En 1991, un détecteur de l'Utah a capté une seule particule venue de l'espace portant l'énergie d'une balle de baseball lancée à environ 100 km/h, surnommée « Oh-My-God ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1991, un détecteur de l'Utah a capté une seule particule venue de l'espace portant l'énergie d'une balle de baseball lancée à environ 100 km/h, surnommée « Oh-My-God » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201991%2C%20un%20d%C3%A9tecteur%20de%20l'Utah%20a%20capt%C3%A9%20une%20seule%20particule%20venue%20de%20l'espace%20portant%20l'%C3%A9nergie%20d'une%20balle%20de%20baseball%20lanc%C3%A9e%20%C3%A0%20environ%20100%20km%2Fh%2C%20surnomm%C3%A9e%20%C2%AB%20Oh-My-God%20%C2%BB%20%3F",
  "explanation": "Le 15 octobre 1991, le détecteur Fly's Eye a mesuré un rayon cosmique (sans doute un proton) d'environ 3 × 10^20 électronvolts. C'est une énergie énorme pour une particule subatomique, comparable à celle d'une balle lancée. On ne sait toujours pas exactement ce qui a pu l'accélérer à ce point."
 },
 {
  "text": "Sur l'exoplanète WASP-76b, le fer s'évapore côté jour puis retombe sous forme de pluie de fer fondu côté nuit, d'après des observations de l'ESO.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur l'exoplanète WASP-76b, le fer s'évapore côté jour puis retombe sous forme de pluie de fer fondu côté nuit, d'après des observations de l'ESO ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20l'exoplan%C3%A8te%20WASP-76b%2C%20le%20fer%20s'%C3%A9vapore%20c%C3%B4t%C3%A9%20jour%20puis%20retombe%20sous%20forme%20de%20pluie%20de%20fer%20fondu%20c%C3%B4t%C3%A9%20nuit%2C%20d'apr%C3%A8s%20des%20observations%20de%20l'ESO%20%3F",
  "explanation": "WASP-76b est une géante gazeuse très proche de son étoile, avec toujours la même face tournée vers elle. Côté jour, la température dépasse 2 400 °C, assez pour vaporiser le fer. Le vent emporte ces vapeurs côté nuit, plus froid, où le fer condenserait en gouttelettes. L'instrument ESPRESSO du VLT de l'ESO l'a montré en 2020."
 },
 {
  "text": "Sur l'exoplanète bleue HD 189733b, il pleuvrait du verre à l'horizontale, poussé par des vents de plus de 7 000 km/h.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur l'exoplanète bleue HD 189733b, il pleuvrait du verre à l'horizontale, poussé par des vents de plus de 7 000 km/h ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20l'exoplan%C3%A8te%20bleue%20HD%20189733b%2C%20il%20pleuvrait%20du%20verre%20%C3%A0%20l'horizontale%2C%20pouss%C3%A9%20par%20des%20vents%20de%20plus%20de%207%20000%20km%2Fh%20%3F",
  "explanation": "HD 189733b est une géante gazeuse bleu cobalt, dont la couleur viendrait de particules de silicates dans l'atmosphère. Avec des températures supérieures à 1 000 °C et des vents de l'ordre de 8 700 km/h, ces particules pourraient former une pluie de verre à l'horizontale. Elle sentirait en plus l'œuf pourri, à cause du sulfure d'hydrogène détecté."
 },
 {
  "text": "Sur Titan, la lune de Saturne, la gravité faible et l'atmosphère dense permettraient en théorie à un humain de voler en battant des ailes fixées à ses bras.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Titan, la lune de Saturne, la gravité faible et l'atmosphère dense permettraient en théorie à un humain de voler en battant des ailes fixées à ses bras ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Titan%2C%20la%20lune%20de%20Saturne%2C%20la%20gravit%C3%A9%20faible%20et%20l'atmosph%C3%A8re%20dense%20permettraient%20en%20th%C3%A9orie%20%C3%A0%20un%20humain%20de%20voler%20en%20battant%20des%20ailes%20fix%C3%A9es%20%C3%A0%20ses%20bras%20%3F",
  "explanation": "Sur Titan, la gravité vaut environ 14 % de celle de la Terre, et l'atmosphère est environ 4 fois plus dense au sol. Un humain, avec une combinaison chauffante et des ailes fixées aux bras, pourrait générer suffisamment de portance pour voler. C'est une idée popularisée par des scientifiques comme Robert Zubrin."
 },
 {
  "text": "Uranus est couchée sur le côté, inclinée à 98° : chacun de ses pôles connaît 42 ans de jour continu suivis de 42 ans de nuit.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'uranus est couchée sur le côté, inclinée à 98° : chacun de ses pôles connaît 42 ans de jour continu suivis de 42 ans de nuit ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'uranus%20est%20couch%C3%A9e%20sur%20le%20c%C3%B4t%C3%A9%2C%20inclin%C3%A9e%20%C3%A0%2098%C2%B0%20%3A%20chacun%20de%20ses%20p%C3%B4les%20conna%C3%AEt%2042%20ans%20de%20jour%20continu%20suivis%20de%2042%20ans%20de%20nuit%20%3F",
  "explanation": "L'axe de rotation d'Uranus est incliné d'environ 98°, ce qui lui fait « rouler » sur son orbite. Comme elle met 84 ans à faire le tour du Soleil, chaque pôle est alternativement éclairé en continu pendant environ 42 ans, puis plongé dans la nuit pendant 42 ans. Cette inclinaison serait due à une collision géante."
 },
 {
  "text": "Pan, une petite lune de Saturne qui orbite dans ses anneaux, a la forme d'un ravioli à cause de la crête de poussières qu'elle accumule à son équateur.",
  "source": "Perplexity",
  "question": "Est-il vrai que pan, une petite lune de Saturne qui orbite dans ses anneaux, a la forme d'un ravioli à cause de la crête de poussières qu'elle accumule à son équateur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pan%2C%20une%20petite%20lune%20de%20Saturne%20qui%20orbite%20dans%20ses%20anneaux%2C%20a%20la%20forme%20d'un%20ravioli%20%C3%A0%20cause%20de%20la%20cr%C3%AAte%20de%20poussi%C3%A8res%20qu'elle%20accumule%20%C3%A0%20son%20%C3%A9quateur%20%3F",
  "explanation": "Pan, d'environ 30 km de diamètre, orbite dans la division d'Encke des anneaux de Saturne. Les images de la sonde Cassini en 2017 ont montré une crête très marquée à son équateur, formée par l'accumulation de matériaux des anneaux. Elle ressemble à un ravioli ou à une soucoupe volante."
 },
 {
  "text": "En 1982, la sonde soviétique Venera 13 a survécu 127 minutes à la surface de Vénus, sous environ 460 °C et 89 atmosphères, et y a enregistré les premiers sons d'une autre planète.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1982, la sonde soviétique Venera 13 a survécu 127 minutes à la surface de Vénus, sous environ 460 °C et 89 atmosphères, et y a enregistré les premiers sons d'une autre planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201982%2C%20la%20sonde%20sovi%C3%A9tique%20Venera%2013%20a%20surv%C3%A9cu%20127%20minutes%20%C3%A0%20la%20surface%20de%20V%C3%A9nus%2C%20sous%20environ%20460%20%C2%B0C%20et%2089%20atmosph%C3%A8res%2C%20et%20y%20a%20enregistr%C3%A9%20les%20premiers%20sons%20d'une%20autre%20plan%C3%A8te%20%3F",
  "explanation": "Venera 13 s'est posée sur Vénus le 1er mars 1982. Elle a transmis des photos couleur et analysé le sol pendant 127 minutes, bien plus que les 32 minutes prévues, avant d'être détruite par la chaleur et la pression. Son microphone a enregistré le bruit du vent et de ses propres mécanismes."
 },
 {
  "text": "Il neige de la glace carbonique sur Mars : en hiver, des flocons microscopiques de CO2 gelé tombent sur la région du pôle Sud.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il neige de la glace carbonique sur Mars : en hiver, des flocons microscopiques de CO2 gelé tombent sur la région du pôle Sud ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20neige%20de%20la%20glace%20carbonique%20sur%20Mars%20%3A%20en%20hiver%2C%20des%20flocons%20microscopiques%20de%20CO2%20gel%C3%A9%20tombent%20sur%20la%20r%C3%A9gion%20du%20p%C3%B4le%20Sud%20%3F",
  "explanation": "En hiver, au pôle Sud de Mars, il fait assez froid pour que le CO2 de l'atmosphère gèle. Le Mars Reconnaissance Orbiter a montré que de petites particules de glace carbonique tombent en flocons, qui se déposent en surface. Ce ne sont pas des flocons comme sur Terre : ils seraient cubiques et plus petits qu'un cheveu."
 },
 {
  "text": "Le Soleil convertit environ 4 millions de tonnes de sa masse en énergie chaque seconde par fusion nucléaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Soleil convertit environ 4 millions de tonnes de sa masse en énergie chaque seconde par fusion nucléaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Soleil%20convertit%20environ%204%20millions%20de%20tonnes%20de%20sa%20masse%20en%20%C3%A9nergie%20chaque%20seconde%20par%20fusion%20nucl%C3%A9aire%20%3F",
  "explanation": "Dans le cœur du Soleil, environ 600 millions de tonnes d'hydrogène fusionnent chaque seconde en hélium. La différence de masse, environ 4 millions de tonnes, est convertie en énergie selon E = mc². Malgré ce rythme, le Soleil a perdu une part infime de sa masse depuis sa naissance."
 },
 {
  "text": "La naine blanche BPM 37093, surnommée « Lucy » en hommage aux Beatles, a un cœur de carbone cristallisé que les astronomes ont comparé à un diamant d'environ 10³⁴ carats.",
  "source": "Perplexity",
  "question": "Est-il vrai que la naine blanche BPM 37093, surnommée « Lucy » en hommage aux Beatles, a un cœur de carbone cristallisé que les astronomes ont comparé à un diamant d'environ 10³⁴ carats ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20naine%20blanche%20BPM%2037093%2C%20surnomm%C3%A9e%20%C2%AB%20Lucy%20%C2%BB%20en%20hommage%20aux%20Beatles%2C%20a%20un%20c%C5%93ur%20de%20carbone%20cristallis%C3%A9%20que%20les%20astronomes%20ont%20compar%C3%A9%20%C3%A0%20un%20diamant%20d'environ%2010%C2%B3%E2%81%B4%20carats%20%3F",
  "explanation": "Les naines blanches se refroidissent et leur cœur de carbone et d'oxygène peut se cristalliser. Pour BPM 37093, les astronomes ont estimé en 2004 une masse cristallisée équivalant à environ 10^34 carats. Elle doit son surnom à la chanson des Beatles « Lucy in the Sky with Diamonds »."
 },
 {
  "text": "L'engin le plus rapide jamais construit, la sonde Parker Solar Probe, a atteint 692 000 km/h le 24 décembre 2024 en frôlant le Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'engin le plus rapide jamais construit, la sonde Parker Solar Probe, a atteint 692 000 km/h le 24 décembre 2024 en frôlant le Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'engin%20le%20plus%20rapide%20jamais%20construit%2C%20la%20sonde%20Parker%20Solar%20Probe%2C%20a%20atteint%20692%20000%20km%2Fh%20le%2024%20d%C3%A9cembre%202024%20en%20fr%C3%B4lant%20le%20Soleil%20%3F",
  "explanation": "Lancée en 2018, la sonde Parker Solar Probe de la NASA plonge vers le Soleil en profitant de l'attraction de celui-ci. Lors de son passage le plus proche, le 24 décembre 2024, elle est passée à environ 6,1 millions de km de la surface et a atteint 692 000 km/h, le record de vitesse pour un objet humain."
 },
 {
  "text": "Un magnétar passant à mi-distance de la Lune effacerait la bande magnétique de toutes les cartes bancaires sur Terre, tant son champ magnétique est intense.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un magnétar passant à mi-distance de la Lune effacerait la bande magnétique de toutes les cartes bancaires sur Terre, tant son champ magnétique est intense ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20magn%C3%A9tar%20passant%20%C3%A0%20mi-distance%20de%20la%20Lune%20effacerait%20la%20bande%20magn%C3%A9tique%20de%20toutes%20les%20cartes%20bancaires%20sur%20Terre%2C%20tant%20son%20champ%20magn%C3%A9tique%20est%20intense%20%3F",
  "explanation": "Un magnétar est une étoile à neutrons au champ magnétique monstrueux, jusqu'à un million de milliards de fois celui de la Terre. Selon un calcul souvent cité, un magnétar placé à la moitié de la distance Terre-Lune effacerait toutes les bandes magnétiques terrestres. À 1 000 km, il serait directement mortel."
 },
 {
  "text": "Non, un humain exposé au vide spatial n'explose pas : il reste conscient une dizaine de secondes, et des animaux exposés jusqu'à 90 secondes ont survécu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un humain exposé au vide spatial n'explose pas : il reste conscient une dizaine de secondes, et des animaux exposés jusqu'à 90 secondes ont survécu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20humain%20expos%C3%A9%20au%20vide%20spatial%20n'explose%20pas%20%3A%20il%20reste%20conscient%20une%20dizaine%20de%20secondes%2C%20et%20des%20animaux%20expos%C3%A9s%20jusqu'%C3%A0%2090%20secondes%20ont%20surv%C3%A9cu%20%3F",
  "explanation": "Exposé au vide, le corps gonfle un peu mais la peau le retient. Le principal danger est le manque d'oxygène : on perd connaissance au bout d'environ 10 à 15 secondes. En 1966, un technicien de la NASA a survécu après une exposition accidentelle de quelques secondes. Il faut surtout ne pas retenir son souffle, pour ne pas endommager les poumons."
 },
 {
  "text": "Non, la NASA n'a pas dépensé des millions pour un stylo spatial pendant que les Soviétiques utilisaient un crayon : Paul Fisher l'a financé lui-même, et l'URSS en a acheté aussi.",
  "source": "Perplexity",
  "question": "Est-il vrai que la NASA n'a pas dépensé des millions pour un stylo spatial pendant que les Soviétiques utilisaient un crayon : Paul Fisher l'a financé lui-même, et l'URSS en a acheté aussi ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20NASA%20n'a%20pas%20d%C3%A9pens%C3%A9%20des%20millions%20pour%20un%20stylo%20spatial%20pendant%20que%20les%20Sovi%C3%A9tiques%20utilisaient%20un%20crayon%20%3A%20Paul%20Fisher%20l'a%20financ%C3%A9%20lui-m%C3%AAme%2C%20et%20l'URSS%20en%20a%20achet%C3%A9%20aussi%20%3F",
  "explanation": "Paul Fisher a développé le stylo à cartouche pressurisée avec ses propres fonds, puis l'a vendu à la NASA pour environ 2,39 $ pièce en 1967. Les cosmonautes soviétiques l'ont aussi adopté. Les crayons posaient problème : des mines et de la poussière de graphite pouvaient flotter et causer des courts-circuits."
 },
 {
  "text": "Les astronautes d'Apollo ont décrit la même odeur pour la poussière lunaire ramenée dans le module : celle de la poudre à canon brûlée.",
  "source": "Perplexity",
  "question": "Est-il vrai que les astronautes d'Apollo ont décrit la même odeur pour la poussière lunaire ramenée dans le module : celle de la poudre à canon brûlée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20astronautes%20d'Apollo%20ont%20d%C3%A9crit%20la%20m%C3%AAme%20odeur%20pour%20la%20poussi%C3%A8re%20lunaire%20ramen%C3%A9e%20dans%20le%20module%20%3A%20celle%20de%20la%20poudre%20%C3%A0%20canon%20br%C3%BBl%C3%A9e%20%3F",
  "explanation": "Après leurs sorties sur la Lune, les astronautes d'Apollo remarquaient une odeur dans le module. Plusieurs l'ont comparée à de la poudre à canon brûlée. Pourtant, la poudre lunaire n'en a pas la composition. L'odeur viendrait de la réaction de la poussière avec l'oxygène et l'humidité de la cabine."
 },
 {
  "text": "Tout l'or extrait dans l'histoire de l'humanité, plus de 210 000 tonnes, tiendrait dans un cube d'environ 22 mètres de côté.",
  "source": "Perplexity",
  "question": "Est-il vrai que tout l'or extrait dans l'histoire de l'humanité, plus de 210 000 tonnes, tiendrait dans un cube d'environ 22 mètres de côté ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20tout%20l'or%20extrait%20dans%20l'histoire%20de%20l'humanit%C3%A9%2C%20plus%20de%20210%20000%20tonnes%2C%20tiendrait%20dans%20un%20cube%20d'environ%2022%20m%C3%A8tres%20de%20c%C3%B4t%C3%A9%20%3F",
  "explanation": "L'or est très dense : environ 19,3 tonnes par mètre cube. Les quelque 210 000 tonnes extraites dans toute l'histoire représentent environ 11 000 m³, soit un cube de 22 mètres de côté. Cela tiendrait dans trois piscines olympiques environ."
 },
 {
  "text": "Les astronautes qui rentrent d'une sortie extravéhiculaire décrivent souvent l'odeur de l'espace restée sur leur combinaison comme un mélange de steak grillé, de métal chaud et de fumée de soudure.",
  "source": "Perplexity",
  "question": "Est-il vrai que les astronautes qui rentrent d'une sortie extravéhiculaire décrivent souvent l'odeur de l'espace restée sur leur combinaison comme un mélange de steak grillé, de métal chaud et de fumée de soudure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20astronautes%20qui%20rentrent%20d'une%20sortie%20extrav%C3%A9hiculaire%20d%C3%A9crivent%20souvent%20l'odeur%20de%20l'espace%20rest%C3%A9e%20sur%20leur%20combinaison%20comme%20un%20m%C3%A9lange%20de%20steak%20grill%C3%A9%2C%20de%20m%C3%A9tal%20chaud%20et%20de%20fum%C3%A9e%20de%20soudure%20%3F",
  "explanation": "Après une sortie dans l'espace, les combinaisons et sas dégagent une odeur particulière, décrite par des astronautes comme rappelant le steak grillé, le métal chaud ou la soudure. Elle viendrait des radicaux libres et de l'oxygène atomique accrochés aux surfaces exposées au vide. Une entreprise a même essayé de la reproduire."
 },
 {
  "text": "La lumière du Soleil met 8 minutes à atteindre la Terre, mais l'énergie qu'elle transporte a pu mettre jusqu'à 170 000 ans à remonter du cœur du Soleil jusqu'à sa surface.",
  "source": "Perplexity",
  "question": "Est-il vrai que la lumière du Soleil met 8 minutes à atteindre la Terre, mais l'énergie qu'elle transporte a pu mettre jusqu'à 170 000 ans à remonter du cœur du Soleil jusqu'à sa surface ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20lumi%C3%A8re%20du%20Soleil%20met%208%20minutes%20%C3%A0%20atteindre%20la%20Terre%2C%20mais%20l'%C3%A9nergie%20qu'elle%20transporte%20a%20pu%20mettre%20jusqu'%C3%A0%20170%20000%20ans%20%C3%A0%20remonter%20du%20c%C5%93ur%20du%20Soleil%20jusqu'%C3%A0%20sa%20surface%20%3F",
  "explanation": "Dans le Soleil, l'énergie produite au cœur est absorbée et réémise des milliards de fois par la matière très dense. Chaque photon est dévié dans une direction aléatoire, ce qui rend son trajet très long. Selon les modèles, l'énergie met entre environ 10 000 et 170 000 ans à atteindre la surface."
 },
 {
  "text": "Io, une lune de Jupiter, compte environ 400 volcans actifs, ce qui en fait l'objet le plus volcanique du système solaire.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'io, une lune de Jupiter, compte environ 400 volcans actifs, ce qui en fait l'objet le plus volcanique du système solaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'io%2C%20une%20lune%20de%20Jupiter%2C%20compte%20environ%20400%20volcans%20actifs%2C%20ce%20qui%20en%20fait%20l'objet%20le%20plus%20volcanique%20du%20syst%C3%A8me%20solaire%20%3F",
  "explanation": "Io est constamment déformée par les marées de Jupiter et des autres lunes, ce qui chauffe son intérieur. Elle compte environ 400 volcans actifs, avec des panaches qui montent jusqu'à 400 km de haut. Sa surface jaune-orange est recouverte de soufre."
 },
 {
  "text": "Pour transformer la Terre en trou noir, il faudrait comprimer toute sa masse dans une sphère de 9 millimètres de rayon, soit la taille d'une bille.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour transformer la Terre en trou noir, il faudrait comprimer toute sa masse dans une sphère de 9 millimètres de rayon, soit la taille d'une bille ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20transformer%20la%20Terre%20en%20trou%20noir%2C%20il%20faudrait%20comprimer%20toute%20sa%20masse%20dans%20une%20sph%C3%A8re%20de%209%20millim%C3%A8tres%20de%20rayon%2C%20soit%20la%20taille%20d'une%20bille%20%3F",
  "explanation": "Tout objet peut devenir un trou noir s'il est comprimé sous son rayon de Schwarzschild. Pour la Terre, ce rayon est d'environ 9 mm, soit une bille. Pour le Soleil, il est d'environ 3 km. Rien de connu ne pourrait réellement comprimer la Terre ainsi."
 },
 {
  "text": "La grenouille des bois d'Amérique du Nord peut passer l'hiver congelée, jusqu'à 65 % de l'eau de son corps transformée en glace et le cœur arrêté, puis se dégeler au printemps et repartir.",
  "source": "Perplexity",
  "question": "Est-il vrai que la grenouille des bois d'Amérique du Nord peut passer l'hiver congelée, jusqu'à 65 % de l'eau de son corps transformée en glace et le cœur arrêté, puis se dégeler au printemps et repartir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20grenouille%20des%20bois%20d'Am%C3%A9rique%20du%20Nord%20peut%20passer%20l'hiver%20congel%C3%A9e%2C%20jusqu'%C3%A0%2065%20%25%20de%20l'eau%20de%20son%20corps%20transform%C3%A9e%20en%20glace%20et%20le%20c%C5%93ur%20arr%C3%AAt%C3%A9%2C%20puis%20se%20d%C3%A9geler%20au%20printemps%20et%20repartir%20%3F",
  "explanation": "En hiver, la grenouille des bois (Lithobates sylvaticus) laisse geler l'eau autour de ses organes. Son foie inonde ses cellules de glucose, qui agit comme un antigel et empêche les cristaux de les détruire. Son cœur et sa respiration s'arrêtent, puis reprennent après le dégel."
 },
 {
  "text": "Le requin du Groenland peut vivre au moins 272 ans selon une étude publiée dans Science en 2016, et n'atteindrait sa maturité sexuelle que vers 150 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que le requin du Groenland peut vivre au moins 272 ans selon une étude publiée dans Science en 2016, et n'atteindrait sa maturité sexuelle que vers 150 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20requin%20du%20Groenland%20peut%20vivre%20au%20moins%20272%20ans%20selon%20une%20%C3%A9tude%20publi%C3%A9e%20dans%20Science%20en%202016%2C%20et%20n'atteindrait%20sa%20maturit%C3%A9%20sexuelle%20que%20vers%20150%20ans%20%3F",
  "explanation": "Des chercheurs ont daté le cristallin de 28 requins du Groenland au carbone 14. Le plus grand avait entre 272 et 512 ans, la valeur la plus probable étant autour de 390 ans. C'est le vertébré à la plus longue durée de vie connue. Il grandit d'environ 1 cm par an."
 },
 {
  "text": "Pour se défendre, la myxine libère un mucus qui gonfle jusqu'à 10 000 fois son volume en moins d'une demi-seconde, de quoi étouffer les branchies d'un requin.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour se défendre, la myxine libère un mucus qui gonfle jusqu'à 10 000 fois son volume en moins d'une demi-seconde, de quoi étouffer les branchies d'un requin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20se%20d%C3%A9fendre%2C%20la%20myxine%20lib%C3%A8re%20un%20mucus%20qui%20gonfle%20jusqu'%C3%A0%2010%20000%20fois%20son%20volume%20en%20moins%20d'une%20demi-seconde%2C%20de%20quoi%20%C3%A9touffer%20les%20branchies%20d'un%20requin%20%3F",
  "explanation": "La myxine, un poisson anguilliforme sans mâchoire, sécrète un mélange de mucines et de fibres très fines qui gonflent au contact de l'eau. Elle peut produire des litres de bave en un instant. Des vidéos montrent des requins recracher la myxine, la gueule pleine de mucus."
 },
 {
  "text": "Le poisson-perle vit à l'intérieur des concombres de mer : il s'y glisse par l'orifice arrière, que l'animal ouvre régulièrement pour respirer.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-perle vit à l'intérieur des concombres de mer : il s'y glisse par l'orifice arrière, que l'animal ouvre régulièrement pour respirer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-perle%20vit%20%C3%A0%20l'int%C3%A9rieur%20des%20concombres%20de%20mer%20%3A%20il%20s'y%20glisse%20par%20l'orifice%20arri%C3%A8re%2C%20que%20l'animal%20ouvre%20r%C3%A9guli%C3%A8rement%20pour%20respirer%20%3F",
  "explanation": "Le poisson-perle (famille des Carapidae) vit à l'intérieur du concombre de mer, qu'il utilise comme abri. Il entre par l'anus, souvent la queue en premier, quand l'animal l'ouvre pour respirer. Certaines espèces sont même parasites et grignotent les organes de leur hôte."
 },
 {
  "text": "La tortue de la rivière Fitzroy, en Australie, tire jusqu'à 70 % de son oxygène de l'eau qu'elle aspire par son cloaque, ce qui lui vaut le surnom de « tortue qui respire par les fesses ».",
  "source": "Perplexity",
  "question": "Est-il vrai que la tortue de la rivière Fitzroy, en Australie, tire jusqu'à 70 % de son oxygène de l'eau qu'elle aspire par son cloaque, ce qui lui vaut le surnom de « tortue qui respire par les fesses » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tortue%20de%20la%20rivi%C3%A8re%20Fitzroy%2C%20en%20Australie%2C%20tire%20jusqu'%C3%A0%2070%20%25%20de%20son%20oxyg%C3%A8ne%20de%20l'eau%20qu'elle%20aspire%20par%20son%20cloaque%2C%20ce%20qui%20lui%20vaut%20le%20surnom%20de%20%C2%AB%20tortue%20qui%20respire%20par%20les%20fesses%20%C2%BB%20%3F",
  "explanation": "La tortue de la rivière Fitzroy (Rheodytes leukops) pompe de l'eau par son cloaque, qui contient des structures riches en vaisseaux sanguins, pour en extraire l'oxygène. Cela lui permet de rester sous l'eau pendant des jours. Cette espèce est menacée, notamment par les barrages."
 },
 {
  "text": "Le pelage brun de l'ornithorynque devient vert-bleu fluorescent sous lumière ultraviolette, une découverte publiée en 2020 dans la revue Mammalia.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pelage brun de l'ornithorynque devient vert-bleu fluorescent sous lumière ultraviolette, une découverte publiée en 2020 dans la revue Mammalia ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pelage%20brun%20de%20l'ornithorynque%20devient%20vert-bleu%20fluorescent%20sous%20lumi%C3%A8re%20ultraviolette%2C%20une%20d%C3%A9couverte%20publi%C3%A9e%20en%202020%20dans%20la%20revue%20Mammalia%20%3F",
  "explanation": "En 2020, des chercheurs ont exposé à la lumière UV des spécimens d'ornithorynques de musées. Leur pelage brun est devenu vert-bleu fluorescent. Le rôle de cette fluorescence reste mystérieux : elle pourrait aider à se camoufler aux yeux de prédateurs sensibles aux UV, ou n'avoir aucune fonction."
 },
 {
  "text": "L'ornithorynque n'a pas d'estomac fonctionnel : son œsophage est relié directement à l'intestin, et il a perdu les gènes servant à produire les sucs gastriques.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ornithorynque n'a pas d'estomac fonctionnel : son œsophage est relié directement à l'intestin, et il a perdu les gènes servant à produire les sucs gastriques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'ornithorynque%20n'a%20pas%20d'estomac%20fonctionnel%20%3A%20son%20%C5%93sophage%20est%20reli%C3%A9%20directement%20%C3%A0%20l'intestin%2C%20et%20il%20a%20perdu%20les%20g%C3%A8nes%20servant%20%C3%A0%20produire%20les%20sucs%20gastriques%20%3F",
  "explanation": "Chez l'ornithorynque, comme chez l'échidné et de nombreux poissons, l'œsophage est relié à l'intestin par une partie qui ne produit ni acide ni enzymes digestives. Les gènes responsables de la digestion gastrique ont disparu de son génome. Son régime alimentaire, sans besoin de digestion acide, l'explique peut-être."
 },
 {
  "text": "L'organe reproducteur de l'échidné mâle possède quatre têtes, mais il n'en utilise que deux à la fois, en alternant.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'organe reproducteur de l'échidné mâle possède quatre têtes, mais il n'en utilise que deux à la fois, en alternant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'organe%20reproducteur%20de%20l'%C3%A9chidn%C3%A9%20m%C3%A2le%20poss%C3%A8de%20quatre%20t%C3%AAtes%2C%20mais%20il%20n'en%20utilise%20que%20deux%20%C3%A0%20la%20fois%2C%20en%20alternant%20%3F",
  "info": {
   "term": "échidné",
   "img": "images/echidne.jpg",
   "caption": "Ce n'est pas un hérisson même si ça y ressemble"
  },
  "explanation": "Le pénis de l'échidné se termine par quatre extrémités. Lors de l'accouplement, deux d'entre elles se rétractent et les deux autres sont utilisées, puis il alterne la paire suivante. Cela correspondrait à l'appareil reproducteur de la femelle, qui a deux branches."
 },
 {
  "text": "Le coléoptère bombardier projette par l'arrière-train un liquide chimique à près de 100 °C, en environ 500 explosions par seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le coléoptère bombardier projette par l'arrière-train un liquide chimique à près de 100 °C, en environ 500 explosions par seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20col%C3%A9opt%C3%A8re%20bombardier%20projette%20par%20l'arri%C3%A8re-train%20un%20liquide%20chimique%20%C3%A0%20pr%C3%A8s%20de%20100%20%C2%B0C%2C%20en%20environ%20500%20explosions%20par%20seconde%20%3F",
  "explanation": "Le coléoptère bombardier stocke deux substances chimiques dans des réservoirs séparés. Mélangées avec des enzymes dans une chambre de réaction, elles réagissent violemment, et le liquide atteint environ 100 °C. Le jet est projeté par une série de microexplosions, ce qui évite à l'insecte de se brûler."
 },
 {
  "text": "Menacés, certains lézards cornus peuvent projeter un jet de sang au goût infect depuis le coin de leurs yeux, jusqu'à 1,5 mètre de distance.",
  "source": "Perplexity",
  "question": "Est-il vrai que menacés, certains lézards cornus peuvent projeter un jet de sang au goût infect depuis le coin de leurs yeux, jusqu'à 1,5 mètre de distance ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20menac%C3%A9s%2C%20certains%20l%C3%A9zards%20cornus%20peuvent%20projeter%20un%20jet%20de%20sang%20au%20go%C3%BBt%20infect%20depuis%20le%20coin%20de%20leurs%20yeux%2C%20jusqu'%C3%A0%201%2C5%20m%C3%A8tre%20de%20distance%20%3F",
  "explanation": "Lorsqu'il est attaqué, notamment par des coyotes ou des chiens, le lézard à cornes (Phrynosoma) peut augmenter la pression sanguine dans sa tête jusqu'à rompre de petits vaisseaux autour de ses yeux. Il projette alors du sang, dont le goût répugne aux canidés. C'est un mécanisme très rare."
 },
 {
  "text": "Le crabe boxeur tient en permanence une anémone de mer dans chaque pince, et s'il n'en a pas, il en vole une à un autre crabe puis la déchire en deux pour obtenir deux clones.",
  "source": "Perplexity",
  "question": "Est-il vrai que le crabe boxeur tient en permanence une anémone de mer dans chaque pince, et s'il n'en a pas, il en vole une à un autre crabe puis la déchire en deux pour obtenir deux clones ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20crabe%20boxeur%20tient%20en%20permanence%20une%20an%C3%A9mone%20de%20mer%20dans%20chaque%20pince%2C%20et%20s'il%20n'en%20a%20pas%2C%20il%20en%20vole%20une%20%C3%A0%20un%20autre%20crabe%20puis%20la%20d%C3%A9chire%20en%20deux%20pour%20obtenir%20deux%20clones%20%3F",
  "explanation": "Le crabe boxeur (Lybia) agite des anémones urticantes comme des pompons pour se défendre et ramasser de la nourriture. S'il n'en a qu'une, il la déchire en deux, et chaque morceau se régénère en une anémone complète. Des chercheurs ont aussi observé des crabes en voler à d'autres."
 },
 {
  "text": "Chez certaines baudroies des abysses, le minuscule mâle mord la femelle et fusionne avec elle pour la vie : leurs circulations sanguines se rejoignent et il perd ses yeux et la plupart de ses organes.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez certaines baudroies des abysses, le minuscule mâle mord la femelle et fusionne avec elle pour la vie : leurs circulations sanguines se rejoignent et il perd ses yeux et la plupart de ses organes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20certaines%20baudroies%20des%20abysses%2C%20le%20minuscule%20m%C3%A2le%20mord%20la%20femelle%20et%20fusionne%20avec%20elle%20pour%20la%20vie%20%3A%20leurs%20circulations%20sanguines%20se%20rejoignent%20et%20il%20perd%20ses%20yeux%20et%20la%20plupart%20de%20ses%20organes%20%3F",
  "explanation": "Chez plusieurs espèces de baudroies abyssales, trouver un partenaire dans l'obscurité est rare. Le mâle, beaucoup plus petit, mord la femelle et sa peau fusionne avec la sienne. Il devient un appendice qui fournit du sperme. Une femelle peut porter plusieurs mâles, et son système immunitaire s'est adapté pour ne pas les rejeter."
 },
 {
  "text": "En 2021, des rotifères bdelloïdes congelés depuis 24 000 ans dans le permafrost sibérien ont été ramenés à la vie et se sont remis à se reproduire.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2021, des rotifères bdelloïdes congelés depuis 24 000 ans dans le permafrost sibérien ont été ramenés à la vie et se sont remis à se reproduire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202021%2C%20des%20rotif%C3%A8res%20bdello%C3%AFdes%20congel%C3%A9s%20depuis%2024%20000%20ans%20dans%20le%20permafrost%20sib%C3%A9rien%20ont%20%C3%A9t%C3%A9%20ramen%C3%A9s%20%C3%A0%20la%20vie%20et%20se%20sont%20remis%20%C3%A0%20se%20reproduire%20%3F",
  "explanation": "En 2021, des chercheurs ont décongelé des rotifères bdelloïdes, de minuscules animaux aquatiques, prélevés dans du permafrost daté d'environ 24 000 ans. Ils ont repris vie et se sont reproduits par clonage (parthénogenèse). C'est l'une des plus longues cryptobioses documentées chez un animal."
 },
 {
  "text": "Un ver nématode resté gelé 46 000 ans dans le permafrost sibérien a été réveillé en laboratoire et s'est remis à se reproduire, selon une étude publiée en 2023.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un ver nématode resté gelé 46 000 ans dans le permafrost sibérien a été réveillé en laboratoire et s'est remis à se reproduire, selon une étude publiée en 2023 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20ver%20n%C3%A9matode%20rest%C3%A9%20gel%C3%A9%2046%20000%20ans%20dans%20le%20permafrost%20sib%C3%A9rien%20a%20%C3%A9t%C3%A9%20r%C3%A9veill%C3%A9%20en%20laboratoire%20et%20s'est%20remis%20%C3%A0%20se%20reproduire%2C%20selon%20une%20%C3%A9tude%20publi%C3%A9e%20en%202023%20%3F",
  "explanation": "En 2023, une équipe a décrit un nématode, Panagrolaimus kolymaensis, extrait du permafrost sibérien et daté d'environ 46 000 ans. Une fois réhydraté, il a repris vie et s'est reproduit en laboratoire. Il survit en produisant du tréhalose, un sucre protecteur."
 },
 {
  "text": "Les bousiers africains s'orientent la nuit grâce à la lueur de la Voie lactée pour rouler leur boule de crottin en ligne droite : c'est le premier animal connu à le faire.",
  "source": "Perplexity",
  "question": "Est-il vrai que les bousiers africains s'orientent la nuit grâce à la lueur de la Voie lactée pour rouler leur boule de crottin en ligne droite : c'est le premier animal connu à le faire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20bousiers%20africains%20s'orientent%20la%20nuit%20gr%C3%A2ce%20%C3%A0%20la%20lueur%20de%20la%20Voie%20lact%C3%A9e%20pour%20rouler%20leur%20boule%20de%20crottin%20en%20ligne%20droite%20%3A%20c'est%20le%20premier%20animal%20connu%20%C3%A0%20le%20faire%20%3F",
  "explanation": "En 2013, des chercheurs ont montré que des bousiers sud-africains s'orientent grâce à la bande lumineuse de la Voie lactée pour rouler leur boule en ligne droite. Dans un planétarium, ils se trompaient quand on masquait la Voie lactée. C'est le premier cas connu d'animal utilisant notre galaxie pour s'orienter."
 },
 {
  "text": "En 1995, des chercheurs ont entraîné des pigeons à distinguer des tableaux de Monet de ceux de Picasso, y compris des œuvres qu'ils n'avaient jamais vues.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1995, des chercheurs ont entraîné des pigeons à distinguer des tableaux de Monet de ceux de Picasso, y compris des œuvres qu'ils n'avaient jamais vues ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201995%2C%20des%20chercheurs%20ont%20entra%C3%AEn%C3%A9%20des%20pigeons%20%C3%A0%20distinguer%20des%20tableaux%20de%20Monet%20de%20ceux%20de%20Picasso%2C%20y%20compris%20des%20%C5%93uvres%20qu'ils%20n'avaient%20jamais%20vues%20%3F",
  "explanation": "Les pigeons de l'étude japonaise ont été récompensés pour picorer des œuvres de l'un ou l'autre peintre. Ils ont ensuite reconnu des tableaux qu'ils n'avaient jamais vus, et ont même généralisé à d'autres impressionnistes et cubistes. Les chercheurs ont reçu un prix Ig Nobel en 1995."
 },
 {
  "text": "La guêpe émeraude pique le cerveau d'une blatte pour supprimer son réflexe de fuite, puis la conduit jusqu'à son terrier en la tirant par une antenne, comme un chien en laisse.",
  "source": "Perplexity",
  "question": "Est-il vrai que la guêpe émeraude pique le cerveau d'une blatte pour supprimer son réflexe de fuite, puis la conduit jusqu'à son terrier en la tirant par une antenne, comme un chien en laisse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20gu%C3%AApe%20%C3%A9meraude%20pique%20le%20cerveau%20d'une%20blatte%20pour%20supprimer%20son%20r%C3%A9flexe%20de%20fuite%2C%20puis%20la%20conduit%20jusqu'%C3%A0%20son%20terrier%20en%20la%20tirant%20par%20une%20antenne%2C%20comme%20un%20chien%20en%20laisse%20%3F",
  "explanation": "La guêpe émeraude (Ampulex compressa) pique d'abord le thorax de la blatte pour la paralyser brièvement, puis injecte un venin dans son cerveau. La blatte perd toute volonté de fuir. La guêpe la guide par l'antenne jusqu'à son terrier, y pond un œuf, et la larve dévorera la blatte vivante."
 },
 {
  "text": "Les cuboméduses ont 24 yeux de quatre types différents, dont certains possèdent un cristallin capable de former des images, alors qu'elles n'ont pas de cerveau central.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cuboméduses ont 24 yeux de quatre types différents, dont certains possèdent un cristallin capable de former des images, alors qu'elles n'ont pas de cerveau central ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cubom%C3%A9duses%20ont%2024%20yeux%20de%20quatre%20types%20diff%C3%A9rents%2C%20dont%20certains%20poss%C3%A8dent%20un%20cristallin%20capable%20de%20former%20des%20images%2C%20alors%20qu'elles%20n'ont%20pas%20de%20cerveau%20central%20%3F",
  "explanation": "Les cuboméduses ont quatre structures sensorielles appelées rhopalies, portant chacune six yeux. Certains sont de simples taches photosensibles, d'autres possèdent une cornée, un cristallin et une rétine. Elles parviennent à s'orienter et éviter les obstacles avec un système nerveux en anneau, sans cerveau central."
 },
 {
  "text": "Les mystérieux cercles géométriques de 2 mètres découverts sur le fond marin au Japon sont l'œuvre d'un petit poisson-globe mâle qui les sculpte avec ses nageoires pour séduire.",
  "source": "Perplexity",
  "question": "Est-il vrai que les mystérieux cercles géométriques de 2 mètres découverts sur le fond marin au Japon sont l'œuvre d'un petit poisson-globe mâle qui les sculpte avec ses nageoires pour séduire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20myst%C3%A9rieux%20cercles%20g%C3%A9om%C3%A9triques%20de%202%20m%C3%A8tres%20d%C3%A9couverts%20sur%20le%20fond%20marin%20au%20Japon%20sont%20l'%C5%93uvre%20d'un%20petit%20poisson-globe%20m%C3%A2le%20qui%20les%20sculpte%20avec%20ses%20nageoires%20pour%20s%C3%A9duire%20%3F",
  "explanation": "Découverts en 1995 à Amami-Ōshima, ces cercles sous-marins ont longtemps intrigué. En 2011, on a découvert qu'ils sont réalisés par le mâle d'une espèce de poisson-globe (Torquigener albomaculosus), qui creuse des sillons avec ses nageoires pendant des jours. La femelle choisit son partenaire en fonction du nid et y pond ses œufs."
 },
 {
  "text": "Ming, une palourde islandaise âgée de 507 ans, a été tuée en 2006 par les chercheurs qui l'ont congelée sans savoir qu'elle était l'animal le plus vieux jamais connu.",
  "source": "Perplexity",
  "question": "Est-il vrai que ming, une palourde islandaise âgée de 507 ans, a été tuée en 2006 par les chercheurs qui l'ont congelée sans savoir qu'elle était l'animal le plus vieux jamais connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20ming%2C%20une%20palourde%20islandaise%20%C3%A2g%C3%A9e%20de%20507%20ans%2C%20a%20%C3%A9t%C3%A9%20tu%C3%A9e%20en%202006%20par%20les%20chercheurs%20qui%20l'ont%20congel%C3%A9e%20sans%20savoir%20qu'elle%20%C3%A9tait%20l'animal%20le%20plus%20vieux%20jamais%20connu%20%3F",
  "explanation": "Les chercheurs de l'université de Bangor ont prélevé des palourdes Arctica islandica au large de l'Islande en 2006 et les ont congelées. En comptant les stries de sa coquille, ils ont découvert que l'une d'elles avait 507 ans. Elle a été surnommée Ming, la dynastie chinoise régnante à sa naissance."
 },
 {
  "text": "Pour devenir presque invisibles pendant leur sommeil, les grenouilles de verre retirent près de 90 % de leurs globules rouges de la circulation et les stockent dans leur foie.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour devenir presque invisibles pendant leur sommeil, les grenouilles de verre retirent près de 90 % de leurs globules rouges de la circulation et les stockent dans leur foie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20devenir%20presque%20invisibles%20pendant%20leur%20sommeil%2C%20les%20grenouilles%20de%20verre%20retirent%20pr%C3%A8s%20de%2090%20%25%20de%20leurs%20globules%20rouges%20de%20la%20circulation%20et%20les%20stockent%20dans%20leur%20foie%20%3F",
  "explanation": "Les globules rouges absorbent le vert et rendent le sang visible. En 2022, des chercheurs ont montré que les grenouilles de verre, au repos, retirent environ 89 % de leurs globules rouges de la circulation et les stockent dans leur foie. Leur corps devient alors 2 à 3 fois plus transparent. Elles le font sans formation de caillots."
 },
 {
  "text": "Privé totalement d'oxygène, le rat-taupe nu survit 18 minutes sans dommage apparent en faisant tourner son cerveau au fructose au lieu du glucose.",
  "source": "Perplexity",
  "question": "Est-il vrai que privé totalement d'oxygène, le rat-taupe nu survit 18 minutes sans dommage apparent en faisant tourner son cerveau au fructose au lieu du glucose ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20priv%C3%A9%20totalement%20d'oxyg%C3%A8ne%2C%20le%20rat-taupe%20nu%20survit%2018%20minutes%20sans%20dommage%20apparent%20en%20faisant%20tourner%20son%20cerveau%20au%20fructose%20au%20lieu%20du%20glucose%20%3F",
  "explanation": "Selon une étude de 2017, privé d'oxygène, le rat-taupe nu ralentit son rythme cardiaque et sa respiration, et utilise le fructose pour produire de l'énergie, une voie qui ne requiert pas d'oxygène. Il survit 18 minutes sans dommage visible. Cet animal ne vieillit presque pas et est très résistant au cancer."
 },
 {
  "text": "En 2022, une barge rousse âgée de 5 mois a volé 13 560 km sans escale de l'Alaska à la Tasmanie en 11 jours, sans manger, boire ni se poser.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2022, une barge rousse âgée de 5 mois a volé 13 560 km sans escale de l'Alaska à la Tasmanie en 11 jours, sans manger, boire ni se poser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202022%2C%20une%20barge%20rousse%20%C3%A2g%C3%A9e%20de%205%20mois%20a%20vol%C3%A9%2013%20560%20km%20sans%20escale%20de%20l'Alaska%20%C3%A0%20la%20Tasmanie%20en%2011%20jours%2C%20sans%20manger%2C%20boire%20ni%20se%20poser%20%3F",
  "explanation": "En octobre 2022, une jeune barge rousse équipée d'une balise satellite a quitté l'Alaska et a rejoint la Tasmanie en environ 11 jours, sans pause. Elle a parcouru au moins 13 560 km, un record de distance de vol sans escale chez les oiseaux. Les barges stockent de la graisse avant le départ et réduisent leurs organes digestifs."
 },
 {
  "text": "La femelle adulte de l'éphémère Dolania americana vit environ cinq minutes, juste le temps de s'accoupler et de pondre : la vie adulte la plus courte connue chez un insecte.",
  "source": "Perplexity",
  "question": "Est-il vrai que la femelle adulte de l'éphémère Dolania americana vit environ cinq minutes, juste le temps de s'accoupler et de pondre : la vie adulte la plus courte connue chez un insecte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20femelle%20adulte%20de%20l'%C3%A9ph%C3%A9m%C3%A8re%20Dolania%20americana%20vit%20environ%20cinq%20minutes%2C%20juste%20le%20temps%20de%20s'accoupler%20et%20de%20pondre%20%3A%20la%20vie%20adulte%20la%20plus%20courte%20connue%20chez%20un%20insecte%20%3F",
  "explanation": "Les éphémères vivent le plus souvent des mois, voire des années sous forme de larve aquatique. Les adultes n'ont pas de bouche fonctionnelle et vivent très peu de temps. La femelle de Dolania americana ne vit, une fois adulte, que quelques minutes, le temps de s'accoupler et de pondre."
 },
 {
  "text": "La langue du pic-vert est soutenue par un os hyoïde si long qu'il fait le tour de son crâne, sous la peau, avant de s'ancrer près de la narine.",
  "source": "Perplexity",
  "question": "Est-il vrai que la langue du pic-vert est soutenue par un os hyoïde si long qu'il fait le tour de son crâne, sous la peau, avant de s'ancrer près de la narine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20langue%20du%20pic-vert%20est%20soutenue%20par%20un%20os%20hyo%C3%AFde%20si%20long%20qu'il%20fait%20le%20tour%20de%20son%20cr%C3%A2ne%2C%20sous%20la%20peau%2C%20avant%20de%20s'ancrer%20pr%C3%A8s%20de%20la%20narine%20%3F",
  "explanation": "La langue des pics est soutenue par un hyoïde très long qui sort de la bouche, contourne l'arrière du crâne, passe par-dessus et vient se fixer près du bec ou de la narine. Il pourrait aussi aider à amortir les chocs de la tête lors des coups de bec."
 },
 {
  "text": "Le crustacé Cymothoa exigua entre par les branchies d'un poisson, coupe l'irrigation de sa langue jusqu'à ce qu'elle tombe, puis prend sa place : le poisson s'en sert ensuite comme d'une langue.",
  "source": "Perplexity",
  "question": "Est-il vrai que le crustacé Cymothoa exigua entre par les branchies d'un poisson, coupe l'irrigation de sa langue jusqu'à ce qu'elle tombe, puis prend sa place : le poisson s'en sert ensuite comme d'une langue ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20crustac%C3%A9%20Cymothoa%20exigua%20entre%20par%20les%20branchies%20d'un%20poisson%2C%20coupe%20l'irrigation%20de%20sa%20langue%20jusqu'%C3%A0%20ce%20qu'elle%20tombe%2C%20puis%20prend%20sa%20place%20%3A%20le%20poisson%20s'en%20sert%20ensuite%20comme%20d'une%20langue%20%3F",
  "explanation": "Cymothoa exigua, un isopode marin, se fixe à la langue du poisson et se nourrit de son sang. La langue s'atrophie et tombe, puis le parasite s'accroche à sa base et remplit la fonction de langue. C'est le seul cas connu de parasite qui remplace un organe de son hôte."
 },
 {
  "text": "L'anguille électrique peut bondir hors de l'eau et se plaquer contre un assaillant pour lui envoyer directement ses décharges, a montré une étude publiée en 2016.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'anguille électrique peut bondir hors de l'eau et se plaquer contre un assaillant pour lui envoyer directement ses décharges, a montré une étude publiée en 2016 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'anguille%20%C3%A9lectrique%20peut%20bondir%20hors%20de%20l'eau%20et%20se%20plaquer%20contre%20un%20assaillant%20pour%20lui%20envoyer%20directement%20ses%20d%C3%A9charges%2C%20a%20montr%C3%A9%20une%20%C3%A9tude%20publi%C3%A9e%20en%202016%20%3F",
  "explanation": "Le biologiste Kenneth Catania a montré qu'une anguille électrique menacée sort à moitié de l'eau, se plaque contre l'assaillant en remontant le long de sa tête et décharge directement. Le courant traverse l'ennemi plutôt que de se diluer dans l'eau. Ce comportement avait été décrit par Alexander von Humboldt en 1800."
 },
 {
  "text": "En 1987, une orque de Puget Sound s'est mise à nager avec un saumon mort posé sur la tête ; en quelques mois, la mode a gagné les trois groupes de la population, puis s'est brusquement éteinte.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1987, une orque de Puget Sound s'est mise à nager avec un saumon mort posé sur la tête ; en quelques mois, la mode a gagné les trois groupes de la population, puis s'est brusquement éteinte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201987%2C%20une%20orque%20de%20Puget%20Sound%20s'est%20mise%20%C3%A0%20nager%20avec%20un%20saumon%20mort%20pos%C3%A9%20sur%20la%20t%C3%AAte%20%3B%20en%20quelques%20mois%2C%20la%20mode%20a%20gagn%C3%A9%20les%20trois%20groupes%20de%20la%20population%2C%20puis%20s'est%20brusquement%20%C3%A9teinte%20%3F",
  "explanation": "En 1987, une femelle orque du groupe K de Puget Sound a commencé à porter un saumon mort sur la tête. Ce comportement s'est répandu dans les groupes J, K et L, avant de disparaître l'année suivante. Les chercheurs y voient l'un des premiers exemples de « mode » culturelle chez les animaux."
 },
 {
  "text": "Les grenouilles plates à incubation gastrique avalaient leurs œufs, élevaient leurs petits dans leur estomac puis les recrachaient vivants ; elles ont disparu dans les années 1980.",
  "source": "Perplexity",
  "question": "Est-il vrai que les grenouilles plates à incubation gastrique avalaient leurs œufs, élevaient leurs petits dans leur estomac puis les recrachaient vivants ; elles ont disparu dans les années 1980 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20grenouilles%20plates%20%C3%A0%20incubation%20gastrique%20avalaient%20leurs%20%C5%93ufs%2C%20%C3%A9levaient%20leurs%20petits%20dans%20leur%20estomac%20puis%20les%20recrachaient%20vivants%20%3B%20elles%20ont%20disparu%20dans%20les%20ann%C3%A9es%201980%20%3F",
  "explanation": "Les deux espèces de Rheobatrachus, découvertes en Australie dans les années 1970, avalaient leurs œufs fécondés. Les petits se développaient dans l'estomac, qui cessait de produire de l'acide, puis sortaient par la bouche de la mère. Les deux espèces ont disparu dans les années 1980, peut-être à cause d'un champignon."
 },
 {
  "text": "Chez certaines cécilies, des amphibiens sans pattes, les petits se nourrissent en arrachant et en mangeant la couche externe de la peau de leur mère avec des dents spéciales.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez certaines cécilies, des amphibiens sans pattes, les petits se nourrissent en arrachant et en mangeant la couche externe de la peau de leur mère avec des dents spéciales ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20certaines%20c%C3%A9cilies%2C%20des%20amphibiens%20sans%20pattes%2C%20les%20petits%20se%20nourrissent%20en%20arrachant%20et%20en%20mangeant%20la%20couche%20externe%20de%20la%20peau%20de%20leur%20m%C3%A8re%20avec%20des%20dents%20sp%C3%A9ciales%20%3F",
  "explanation": "Chez la cécilie Boulengerula taitanus, la mère développe une couche de peau épaisse et riche en graisses. Les petits la décollent et la mangent avec des dents spécialisées, environ tous les trois jours. La peau se régénère entre-temps."
 },
 {
  "text": "Menacée, la fourmi Colobopsis explodens de Bornéo contracte son abdomen jusqu'à l'éclater, aspergeant l'ennemi d'une substance jaune toxique.",
  "source": "Perplexity",
  "question": "Est-il vrai que menacée, la fourmi Colobopsis explodens de Bornéo contracte son abdomen jusqu'à l'éclater, aspergeant l'ennemi d'une substance jaune toxique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20menac%C3%A9e%2C%20la%20fourmi%20Colobopsis%20explodens%20de%20Born%C3%A9o%20contracte%20son%20abdomen%20jusqu'%C3%A0%20l'%C3%A9clater%2C%20aspergeant%20l'ennemi%20d'une%20substance%20jaune%20toxique%20%3F",
  "explanation": "Les ouvrières de Colobopsis explodens ont des glandes géantes remplies d'un liquide toxique. Face à un ennemi, elles contractent leur abdomen jusqu'à le faire éclater, libérant une substance jaune collante et toxique. Elles meurent, mais protègent la colonie, et on les appelle pour cette raison « fourmis kamikazes »."
 },
 {
  "text": "Selon les travaux du biologiste Con Slobodchikoff, les cris d'alerte des chiens de prairie précisent si l'humain qui approche est grand ou petit, et la couleur de son t-shirt.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon les travaux du biologiste Con Slobodchikoff, les cris d'alerte des chiens de prairie précisent si l'humain qui approche est grand ou petit, et la couleur de son t-shirt ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20les%20travaux%20du%20biologiste%20Con%20Slobodchikoff%2C%20les%20cris%20d'alerte%20des%20chiens%20de%20prairie%20pr%C3%A9cisent%20si%20l'humain%20qui%20approche%20est%20grand%20ou%20petit%2C%20et%20la%20couleur%20de%20son%20t-shirt%20%3F",
  "explanation": "Con Slobodchikoff a enregistré les cris d'alarme de chiens de prairie face à différents humains, chiens et coyotes. Leurs cris varient selon l'espèce du prédateur, mais aussi la taille, la forme, la vitesse et la couleur des vêtements de l'humain. Il les décrit comme un langage relativement complexe."
 },
 {
  "text": "La mouche Drosophila bifurca, de quelques millimètres, produit des spermatozoïdes de 5,8 cm, plus de 20 fois la longueur de son corps.",
  "source": "Perplexity",
  "question": "Est-il vrai que la mouche Drosophila bifurca, de quelques millimètres, produit des spermatozoïdes de 5,8 cm, plus de 20 fois la longueur de son corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20mouche%20Drosophila%20bifurca%2C%20de%20quelques%20millim%C3%A8tres%2C%20produit%20des%20spermatozo%C3%AFdes%20de%205%2C8%20cm%2C%20plus%20de%2020%20fois%20la%20longueur%20de%20son%20corps%20%3F",
  "explanation": "Le mâle de Drosophila bifurca produit des spermatozoïdes enroulés d'environ 5,8 cm, record connu dans le règne animal. Sa taille est d'environ 3 mm. La production de ces spermatozoïdes géants mobilise beaucoup de ressources, et cette caractéristique serait liée à la compétition entre mâles."
 },
 {
  "text": "Pendant leurs combats, les homards s'aspergent le visage d'urine, émise par des orifices situés à la base de leurs antennes, pour communiquer.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant leurs combats, les homards s'aspergent le visage d'urine, émise par des orifices situés à la base de leurs antennes, pour communiquer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20leurs%20combats%2C%20les%20homards%20s'aspergent%20le%20visage%20d'urine%2C%20%C3%A9mise%20par%20des%20orifices%20situ%C3%A9s%20%C3%A0%20la%20base%20de%20leurs%20antennes%2C%20pour%20communiquer%20%3F",
  "explanation": "Les homards ont des glandes urinaires situées près de leurs antennes. Lors de combats ou de parades, ils projettent de l'urine en direction de l'adversaire. Celle-ci contient des signaux chimiques qui informent sur leur statut social. Les vainqueurs se souviennent de leurs adversaires et évitent les affrontements suivants."
 },
 {
  "text": "Les frégates dorment en plein vol, souvent avec un seul hémisphère cérébral, par micro-siestes d'une dizaine de secondes, pour environ 42 minutes par jour seulement.",
  "source": "Perplexity",
  "question": "Est-il vrai que les frégates dorment en plein vol, souvent avec un seul hémisphère cérébral, par micro-siestes d'une dizaine de secondes, pour environ 42 minutes par jour seulement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fr%C3%A9gates%20dorment%20en%20plein%20vol%2C%20souvent%20avec%20un%20seul%20h%C3%A9misph%C3%A8re%20c%C3%A9r%C3%A9bral%2C%20par%20micro-siestes%20d'une%20dizaine%20de%20secondes%2C%20pour%20environ%2042%20minutes%20par%20jour%20seulement%20%3F",
  "explanation": "Une étude de 2016 a enregistré l'activité cérébrale de frégates pendant des vols de plusieurs jours au-dessus de l'océan. Elles dorment en vol par périodes de quelques secondes, souvent avec un seul hémisphère. Le total ne représente qu'environ 42 minutes par jour, contre plus de 12 heures au sol."
 },
 {
  "text": "À Madagascar, un papillon de nuit plante sa trompe en forme de harpon entre les paupières des oiseaux endormis pour boire leurs larmes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Madagascar, un papillon de nuit plante sa trompe en forme de harpon entre les paupières des oiseaux endormis pour boire leurs larmes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Madagascar%2C%20un%20papillon%20de%20nuit%20plante%20sa%20trompe%20en%20forme%20de%20harpon%20entre%20les%20paupi%C3%A8res%20des%20oiseaux%20endormis%20pour%20boire%20leurs%20larmes%20%3F",
  "explanation": "Le papillon Hemiceratoides hieroglyphica, de Madagascar, insère sa trompe sous les paupières d'oiseaux endormis. Sa trompe est munie de crochets en forme de harpon. Il boit les larmes, riches en sels minéraux et en protéines."
 },
 {
  "text": "Des lézards de Nouvelle-Guinée ont le sang vert citron, ainsi que les os et la langue, à cause d'un pigment biliaire à une dose 40 fois supérieure à la dose mortelle pour l'humain.",
  "source": "Perplexity",
  "question": "Est-il vrai que des lézards de Nouvelle-Guinée ont le sang vert citron, ainsi que les os et la langue, à cause d'un pigment biliaire à une dose 40 fois supérieure à la dose mortelle pour l'humain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20des%20l%C3%A9zards%20de%20Nouvelle-Guin%C3%A9e%20ont%20le%20sang%20vert%20citron%2C%20ainsi%20que%20les%20os%20et%20la%20langue%2C%20%C3%A0%20cause%20d'un%20pigment%20biliaire%20%C3%A0%20une%20dose%2040%20fois%20sup%C3%A9rieure%20%C3%A0%20la%20dose%20mortelle%20pour%20l'humain%20%3F",
  "explanation": "Les lézards du genre Prasinohaema ont dans leur sang un taux très élevé de biliverdine, un pigment vert issu de la dégradation des globules rouges. Ce taux colore leur sang, leurs os, leurs muscles et leurs muqueuses en vert. Chez l'humain, une telle concentration provoquerait une jaunisse mortelle."
 },
 {
  "text": "Chez les calmars et les pieuvres, l'œsophage passe au milieu du cerveau, en forme d'anneau : ils doivent découper leur nourriture en petits morceaux pour qu'elle passe.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez les calmars et les pieuvres, l'œsophage passe au milieu du cerveau, en forme d'anneau : ils doivent découper leur nourriture en petits morceaux pour qu'elle passe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20les%20calmars%20et%20les%20pieuvres%2C%20l'%C5%93sophage%20passe%20au%20milieu%20du%20cerveau%2C%20en%20forme%20d'anneau%20%3A%20ils%20doivent%20d%C3%A9couper%20leur%20nourriture%20en%20petits%20morceaux%20pour%20qu'elle%20passe%20%3F",
  "explanation": "Chez les céphalopodes, le cerveau forme un anneau autour de l'œsophage. Ils doivent donc couper leur nourriture en petits morceaux avec leur bec et leur radula. Un morceau trop gros pourrait endommager le cerveau."
 },
 {
  "text": "Les harengs communiquent la nuit en pétant : ils relâchent des bulles d'air qui produisent des cliquetis, que les chercheurs ont baptisés FRT.",
  "source": "Perplexity",
  "question": "Est-il vrai que les harengs communiquent la nuit en pétant : ils relâchent des bulles d'air qui produisent des cliquetis, que les chercheurs ont baptisés FRT ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20harengs%20communiquent%20la%20nuit%20en%20p%C3%A9tant%20%3A%20ils%20rel%C3%A2chent%20des%20bulles%20d'air%20qui%20produisent%20des%20cliquetis%2C%20que%20les%20chercheurs%20ont%20baptis%C3%A9s%20FRT%20%3F",
  "explanation": "En 2003, des chercheurs ont découvert que les harengs émettent des bulles d'air par l'anus, produisant un son. Ils ont appelé ces sons FRT (« Fast Repetitive Tick »), un jeu de mots avec « fart » (pet en anglais). Ces sons serviraient à la communication de groupe dans l'obscurité. Les chercheurs ont reçu un prix Ig Nobel en 2004."
 },
 {
  "text": "Dans l'utérus du requin-taureau, l'embryon le plus développé dévore tous ses frères et sœurs : sur des dizaines d'œufs, seuls deux petits naissent.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans l'utérus du requin-taureau, l'embryon le plus développé dévore tous ses frères et sœurs : sur des dizaines d'œufs, seuls deux petits naissent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20l'ut%C3%A9rus%20du%20requin-taureau%2C%20l'embryon%20le%20plus%20d%C3%A9velopp%C3%A9%20d%C3%A9vore%20tous%20ses%20fr%C3%A8res%20et%20s%C5%93urs%20%3A%20sur%20des%20dizaines%20d'%C5%93ufs%2C%20seuls%20deux%20petits%20naissent%20%3F",
  "explanation": "Chez le requin-taureau, chacun des deux utérus contient au départ de nombreux embryons. Le premier à se développer suffisamment dévore ses frères et sœurs, ainsi que les œufs non fécondés. Il ne naît que deux petits, un par utérus. C'est l'adelphophagie, ou cannibalisme intra-utérin."
 },
 {
  "text": "Chez la hyène tachetée, l'appareil génital de la femelle ressemble tellement à celui du mâle qu'il est très difficile de distinguer les sexes à l'œil nu.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez la hyène tachetée, l'appareil génital de la femelle ressemble tellement à celui du mâle qu'il est très difficile de distinguer les sexes à l'œil nu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20la%20hy%C3%A8ne%20tachet%C3%A9e%2C%20l'appareil%20g%C3%A9nital%20de%20la%20femelle%20ressemble%20tellement%20%C3%A0%20celui%20du%20m%C3%A2le%20qu'il%20est%20tr%C3%A8s%20difficile%20de%20distinguer%20les%20sexes%20%C3%A0%20l'%C5%93il%20nu%20%3F",
  "explanation": "La femelle hyène tachetée possède un clitoris très développé qui ressemble à un pénis, et des lèvres fusionnées qui ressemblent à un scrotum. Elle urine, s'accouple et accouche par cet organe. Les femelles sont aussi plus grandes et dominantes que les mâles."
 },
 {
  "text": "Attaqué, le triton à côtes saillantes d'Espagne fait pivoter ses côtes pour qu'elles percent sa peau et servent de piquants enduits de poison.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'attaqué, le triton à côtes saillantes d'Espagne fait pivoter ses côtes pour qu'elles percent sa peau et servent de piquants enduits de poison ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'attaqu%C3%A9%2C%20le%20triton%20%C3%A0%20c%C3%B4tes%20saillantes%20d'Espagne%20fait%20pivoter%20ses%20c%C3%B4tes%20pour%20qu'elles%20percent%20sa%20peau%20et%20servent%20de%20piquants%20enduits%20de%20poison%20%3F",
  "explanation": "Le triton à côtes saillantes (Pleurodeles waltl) peut faire pivoter ses côtes pointues. Elles percent sa peau à travers des pores et sont enduites d'une sécrétion toxique. La blessure se referme et se régénère ensuite. Cette espèce est d'ailleurs allée dans l'espace pour étudier la régénération."
 },
 {
  "text": "Une limace de mer (Elysia) étudiée au Japon peut se décapiter elle-même : la tête continue de ramper et de manger, et régénère un corps complet en environ 20 jours.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une limace de mer (Elysia) étudiée au Japon peut se décapiter elle-même : la tête continue de ramper et de manger, et régénère un corps complet en environ 20 jours ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20limace%20de%20mer%20(Elysia)%20%C3%A9tudi%C3%A9e%20au%20Japon%20peut%20se%20d%C3%A9capiter%20elle-m%C3%AAme%20%3A%20la%20t%C3%AAte%20continue%20de%20ramper%20et%20de%20manger%2C%20et%20r%C3%A9g%C3%A9n%C3%A8re%20un%20corps%20complet%20en%20environ%2020%20jours%20%3F",
  "explanation": "En 2021, des chercheurs ont observé que des limaces de mer du genre Elysia peuvent s'autodécapiter. La tête, qui photosynthétise grâce aux chloroplastes des algues qu'elle mange, survit et régénère un nouveau corps en quelques semaines. Elles se débarrasseraient ainsi d'un corps infesté de parasites."
 },
 {
  "text": "En 1848, une barre de fer de 1,10 m a traversé le crâne de l'ouvrier Phineas Gage : il est resté conscient, a parlé dans les minutes suivantes et a vécu encore près de 12 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1848, une barre de fer de 1,10 m a traversé le crâne de l'ouvrier Phineas Gage : il est resté conscient, a parlé dans les minutes suivantes et a vécu encore près de 12 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201848%2C%20une%20barre%20de%20fer%20de%201%2C10%20m%20a%20travers%C3%A9%20le%20cr%C3%A2ne%20de%20l'ouvrier%20Phineas%20Gage%20%3A%20il%20est%20rest%C3%A9%20conscient%2C%20a%20parl%C3%A9%20dans%20les%20minutes%20suivantes%20et%20a%20v%C3%A9cu%20encore%20pr%C3%A8s%20de%2012%20ans%20%3F",
  "explanation": "Phineas Gage, contremaître des chemins de fer, a été touché par une barre de fer lors d'une explosion. La barre est entrée sous sa joue gauche et ressortie par le haut du crâne, détruisant une partie de son lobe frontal. Il a survécu, mais aurait changé de personnalité, ce qui a fait de lui un cas célèbre en neurosciences."
 },
 {
  "text": "Pour rendre la vue à certains aveugles, des chirurgiens implantent dans leur œil une lentille fixée dans une de leurs propres dents : c'est l'ostéo-odonto-kératoprothèse.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour rendre la vue à certains aveugles, des chirurgiens implantent dans leur œil une lentille fixée dans une de leurs propres dents : c'est l'ostéo-odonto-kératoprothèse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20rendre%20la%20vue%20%C3%A0%20certains%20aveugles%2C%20des%20chirurgiens%20implantent%20dans%20leur%20%C5%93il%20une%20lentille%20fix%C3%A9e%20dans%20une%20de%20leurs%20propres%20dents%20%3A%20c'est%20l'ost%C3%A9o-odonto-k%C3%A9ratoproth%C3%A8se%20%3F",
  "explanation": "L'ostéo-odonto-kératoprothèse est utilisée en dernier recours pour certaines cécités cornéennes. On prélève une dent du patient (souvent une canine) avec un morceau d'os de la mâchoire, on y fixe une lentille optique, puis on l'implante d'abord dans la joue pour qu'elle se vascularise avant de la placer dans l'œil."
 },
 {
  "text": "En 1929, le médecin Werner Forssmann s'est glissé un cathéter du bras jusqu'au cœur, sur lui-même, puis s'est fait radiographier : ce geste lui a valu le prix Nobel en 1956.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1929, le médecin Werner Forssmann s'est glissé un cathéter du bras jusqu'au cœur, sur lui-même, puis s'est fait radiographier : ce geste lui a valu le prix Nobel en 1956 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201929%2C%20le%20m%C3%A9decin%20Werner%20Forssmann%20s'est%20gliss%C3%A9%20un%20cath%C3%A9ter%20du%20bras%20jusqu'au%20c%C5%93ur%2C%20sur%20lui-m%C3%AAme%2C%20puis%20s'est%20fait%20radiographier%20%3A%20ce%20geste%20lui%20a%20valu%20le%20prix%20Nobel%20en%201956%20%3F",
  "explanation": "À 25 ans, Werner Forssmann s'est anesthésié le bras, s'est introduit un cathéter dans une veine et l'a poussé jusqu'au cœur, puis est descendu à la radiologie pour faire une radio. Il a été renvoyé et moqué. Ses travaux ont été repris par d'autres, et il a partagé le prix Nobel de médecine en 1956."
 },
 {
  "text": "En 1984, le médecin Barry Marshall a bu une culture de la bactérie Helicobacter pylori pour prouver qu'elle causait la gastrite. Il a obtenu le prix Nobel en 2005.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1984, le médecin Barry Marshall a bu une culture de la bactérie Helicobacter pylori pour prouver qu'elle causait la gastrite. Il a obtenu le prix Nobel en 2005 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201984%2C%20le%20m%C3%A9decin%20Barry%20Marshall%20a%20bu%20une%20culture%20de%20la%20bact%C3%A9rie%20Helicobacter%20pylori%20pour%20prouver%20qu'elle%20causait%20la%20gastrite.%20Il%20a%20obtenu%20le%20prix%20Nobel%20en%202005%20%3F",
  "explanation": "On pensait que les ulcères et gastrites étaient causés par le stress et l'acidité. Barry Marshall et Robin Warren soupçonnaient la bactérie Helicobacter pylori. Pour le prouver, Marshall en a avalé une culture : il a développé une gastrite, ensuite soignée par antibiotiques. Ils ont obtenu le prix Nobel de médecine en 2005."
 },
 {
  "text": "Charles Osborne a eu le hoquet pendant 68 ans, de 1922 à 1990, un record homologué par le Guinness.",
  "source": "Perplexity",
  "question": "Est-il vrai que Charles Osborne a eu le hoquet pendant 68 ans, de 1922 à 1990, un record homologué par le Guinness ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Charles%20Osborne%20a%20eu%20le%20hoquet%20pendant%2068%20ans%2C%20de%201922%20%C3%A0%201990%2C%20un%20record%20homologu%C3%A9%20par%20le%20Guinness%20%3F",
  "explanation": "En 1922, Charles Osborne a commencé à avoir le hoquet en soulevant un porc. Il a hoqueté environ 20 à 40 fois par minute pendant 68 ans, ce qui lui a valu une entrée au Guinness. Il a pourtant mené une vie presque normale, et le hoquet s'est arrêté environ un an avant sa mort."
 },
 {
  "text": "En 2002, des tests ADN ont semblé prouver que Lydia Fairchild n'était pas la mère de ses propres enfants : elle était en fait une chimère, porteuse de deux ADN différents.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2002, des tests ADN ont semblé prouver que Lydia Fairchild n'était pas la mère de ses propres enfants : elle était en fait une chimère, porteuse de deux ADN différents ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202002%2C%20des%20tests%20ADN%20ont%20sembl%C3%A9%20prouver%20que%20Lydia%20Fairchild%20n'%C3%A9tait%20pas%20la%20m%C3%A8re%20de%20ses%20propres%20enfants%20%3A%20elle%20%C3%A9tait%20en%20fait%20une%20chim%C3%A8re%2C%20porteuse%20de%20deux%20ADN%20diff%C3%A9rents%20%3F",
  "explanation": "Lydia Fairchild a failli perdre la garde de ses enfants quand des tests ADN ont indiqué qu'elle n'était pas leur mère. On a fini par découvrir qu'elle était une chimère : elle s'était formée à partir de deux embryons fusionnés. L'ADN de ses ovules ne correspondait pas à celui de sa salive."
 },
 {
  "text": "En 2007, The Lancet a décrit un fonctionnaire de 44 ans, marié et père de deux enfants, dont le cerveau était réduit à une fine couche par une hydrocéphalie massive.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2007, The Lancet a décrit un fonctionnaire de 44 ans, marié et père de deux enfants, dont le cerveau était réduit à une fine couche par une hydrocéphalie massive ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202007%2C%20The%20Lancet%20a%20d%C3%A9crit%20un%20fonctionnaire%20de%2044%20ans%2C%20mari%C3%A9%20et%20p%C3%A8re%20de%20deux%20enfants%2C%20dont%20le%20cerveau%20%C3%A9tait%20r%C3%A9duit%20%C3%A0%20une%20fine%20couche%20par%20une%20hydroc%C3%A9phalie%20massive%20%3F",
  "explanation": "Le patient, suivi depuis l'enfance pour une hydrocéphalie, consultait pour une faiblesse à la jambe. L'imagerie a montré que ses ventricules cérébraux, remplis de liquide, occupaient l'essentiel de son crâne, ne laissant qu'une fine couche de tissu cérébral. Il avait un QI de 75 et une vie sociale normale."
 },
 {
  "text": "Joy Milne détecte la maladie de Parkinson à l'odeur : elle a senti le changement d'odeur de son mari des années avant son diagnostic.",
  "source": "Perplexity",
  "question": "Est-il vrai que Joy Milne détecte la maladie de Parkinson à l'odeur : elle a senti le changement d'odeur de son mari des années avant son diagnostic ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Joy%20Milne%20d%C3%A9tecte%20la%20maladie%20de%20Parkinson%20%C3%A0%20l'odeur%20%3A%20elle%20a%20senti%20le%20changement%20d'odeur%20de%20son%20mari%20des%20ann%C3%A9es%20avant%20son%20diagnostic%20%3F",
  "explanation": "Joy Milne a remarqué que son mari dégageait une odeur différente, musquée, une dizaine d'années avant son diagnostic. Des chercheurs ont testé son odorat avec des t-shirts portés : elle a identifié correctement les malades. Ses capacités ont permis d'identifier des molécules du sébum pouvant servir de test diagnostic."
 },
 {
  "text": "Le golfeur Eben Byers a bu environ 1 400 doses d'eau au radium vendue comme tonique : il a perdu une grande partie de sa mâchoire et a été enterré en 1932 dans un cercueil plombé.",
  "source": "Perplexity",
  "question": "Est-il vrai que le golfeur Eben Byers a bu environ 1 400 doses d'eau au radium vendue comme tonique : il a perdu une grande partie de sa mâchoire et a été enterré en 1932 dans un cercueil plombé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20golfeur%20Eben%20Byers%20a%20bu%20environ%201%20400%20doses%20d'eau%20au%20radium%20vendue%20comme%20tonique%20%3A%20il%20a%20perdu%20une%20grande%20partie%20de%20sa%20m%C3%A2choire%20et%20a%20%C3%A9t%C3%A9%20enterr%C3%A9%20en%201932%20dans%20un%20cercueil%20plomb%C3%A9%20%3F",
  "explanation": "Eben Byers, riche industriel, a bu du Radithor, une eau au radium vendue comme tonique, sur les conseils de son médecin. Le radium s'est accumulé dans ses os et a provoqué de graves nécroses de la mâchoire. Sa mort en 1932 a fait scandale et a contribué à renforcer la réglementation des médicaments aux États-Unis."
 },
 {
  "text": "Au XVIIIe siècle, des kits de lavement à la fumée de tabac étaient installés le long de la Tamise pour tenter de ranimer les noyés.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au XVIIIe siècle, des kits de lavement à la fumée de tabac étaient installés le long de la Tamise pour tenter de ranimer les noyés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20XVIIIe%20si%C3%A8cle%2C%20des%20kits%20de%20lavement%20%C3%A0%20la%20fum%C3%A9e%20de%20tabac%20%C3%A9taient%20install%C3%A9s%20le%20long%20de%20la%20Tamise%20pour%20tenter%20de%20ranimer%20les%20noy%C3%A9s%20%3F",
  "explanation": "Au XVIIIe siècle, on pensait que la fumée de tabac pouvait réchauffer et stimuler les noyés. La Royal Humane Society a installé des kits le long de la Tamise, comprenant un soufflet pour insuffler de la fumée par l'anus. L'expression anglaise « blowing smoke up someone's ass » viendrait de là."
 },
 {
  "text": "Après un coup de mousquet en 1822, Alexis St. Martin a gardé un trou ouvert sur l'estomac : le médecin William Beaumont y introduisait de la nourriture attachée à une ficelle pour étudier la digestion.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'après un coup de mousquet en 1822, Alexis St. Martin a gardé un trou ouvert sur l'estomac : le médecin William Beaumont y introduisait de la nourriture attachée à une ficelle pour étudier la digestion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'apr%C3%A8s%20un%20coup%20de%20mousquet%20en%201822%2C%20Alexis%20St.%20Martin%20a%20gard%C3%A9%20un%20trou%20ouvert%20sur%20l'estomac%20%3A%20le%20m%C3%A9decin%20William%20Beaumont%20y%20introduisait%20de%20la%20nourriture%20attach%C3%A9e%20%C3%A0%20une%20ficelle%20pour%20%C3%A9tudier%20la%20digestion%20%3F",
  "explanation": "Alexis St. Martin, un trappeur, a été blessé accidentellement par un coup de feu. Sa plaie a guéri en laissant une ouverture permanente sur l'estomac. William Beaumont a mené pendant des années des expériences sur sa digestion, en introduisant des aliments attachés à une ficelle. Ses travaux ont fondé la physiologie de la digestion."
 },
 {
  "text": "Le journaliste Jean-Dominique Bauby, entièrement paralysé, a écrit Le Scaphandre et le Papillon lettre par lettre en clignant de sa seule paupière gauche.",
  "source": "Perplexity",
  "question": "Est-il vrai que le journaliste Jean-Dominique Bauby, entièrement paralysé, a écrit Le Scaphandre et le Papillon lettre par lettre en clignant de sa seule paupière gauche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20journaliste%20Jean-Dominique%20Bauby%2C%20enti%C3%A8rement%20paralys%C3%A9%2C%20a%20%C3%A9crit%20Le%20Scaphandre%20et%20le%20Papillon%20lettre%20par%20lettre%20en%20clignant%20de%20sa%20seule%20paupi%C3%A8re%20gauche%20%3F",
  "explanation": "Après un accident vasculaire cérébral en 1995, Jean-Dominique Bauby, rédacteur en chef de Elle, est atteint du syndrome d'enfermement. Une orthophoniste lui récitait l'alphabet, et il clignait de la paupière pour choisir chaque lettre. Le livre, publié en 1997, a demandé environ 200 000 clignements. Il est mort quelques jours après sa parution."
 },
 {
  "text": "En 1667, le médecin Jean-Baptiste Denis a réalisé l'une des premières transfusions sur un humain… avec du sang d'agneau. Le patient, un adolescent de 15 ans, a survécu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1667, le médecin Jean-Baptiste Denis a réalisé l'une des premières transfusions sur un humain… avec du sang d'agneau. Le patient, un adolescent de 15 ans, a survécu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201667%2C%20le%20m%C3%A9decin%20Jean-Baptiste%20Denis%20a%20r%C3%A9alis%C3%A9%20l'une%20des%20premi%C3%A8res%20transfusions%20sur%20un%20humain%E2%80%A6%20avec%20du%20sang%20d'agneau.%20Le%20patient%2C%20un%20adolescent%20de%2015%20ans%2C%20a%20surv%C3%A9cu%20%3F",
  "explanation": "Jean-Baptiste Denis, médecin de Louis XIV, a transfusé environ 350 ml de sang d'agneau à un garçon souffrant de fièvre, qui a survécu, probablement parce que la quantité était faible. Une transfusion ultérieure, avec du sang de veau, s'est soldée par la mort d'un patient, et la pratique a été interdite en France pendant plus d'un siècle."
 },
 {
  "text": "Lors de l'autopsie d'Einstein en 1955, le pathologiste Thomas Harvey a prélevé son cerveau sans autorisation préalable, l'a découpé en morceaux et l'a gardé pendant plus de 40 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors de l'autopsie d'Einstein en 1955, le pathologiste Thomas Harvey a prélevé son cerveau sans autorisation préalable, l'a découpé en morceaux et l'a gardé pendant plus de 40 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20de%20l'autopsie%20d'Einstein%20en%201955%2C%20le%20pathologiste%20Thomas%20Harvey%20a%20pr%C3%A9lev%C3%A9%20son%20cerveau%20sans%20autorisation%20pr%C3%A9alable%2C%20l'a%20d%C3%A9coup%C3%A9%20en%20morceaux%20et%20l'a%20gard%C3%A9%20pendant%20plus%20de%2040%20ans%20%3F",
  "explanation": "Thomas Harvey a prélevé le cerveau d'Einstein lors de l'autopsie, sans autorisation claire de la famille, qu'il a obtenue ensuite. Il l'a découpé en 240 morceaux qu'il a conservés pendant des décennies, parfois dans des bocaux chez lui. Il en a distribué des fragments à des chercheurs."
 },
 {
  "text": "En 1898, le laboratoire Bayer a commercialisé l'héroïne comme médicament contre la toux, présentée comme une alternative non addictive à la morphine.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1898, le laboratoire Bayer a commercialisé l'héroïne comme médicament contre la toux, présentée comme une alternative non addictive à la morphine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201898%2C%20le%20laboratoire%20Bayer%20a%20commercialis%C3%A9%20l'h%C3%A9ro%C3%AFne%20comme%20m%C3%A9dicament%20contre%20la%20toux%2C%20pr%C3%A9sent%C3%A9e%20comme%20une%20alternative%20non%20addictive%20%C3%A0%20la%20morphine%20%3F",
  "explanation": "Bayer a commercialisé la diacétylmorphine en 1898 sous le nom commercial d'Héroïne, comme sirop contre la toux et la tuberculose. Elle était présentée comme non addictive, contrairement à la morphine. Sa dangerosité est vite apparue, et elle a été interdite aux États-Unis en 1924."
 },
 {
  "text": "En 1962, une épidémie de fou rire partie d'un pensionnat du Tanganyika (actuelle Tanzanie) a touché environ 1 000 personnes et forcé la fermeture de 14 écoles.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1962, une épidémie de fou rire partie d'un pensionnat du Tanganyika (actuelle Tanzanie) a touché environ 1 000 personnes et forcé la fermeture de 14 écoles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201962%2C%20une%20%C3%A9pid%C3%A9mie%20de%20fou%20rire%20partie%20d'un%20pensionnat%20du%20Tanganyika%20(actuelle%20Tanzanie)%20a%20touch%C3%A9%20environ%201%20000%20personnes%20et%20forc%C3%A9%20la%20fermeture%20de%2014%20%C3%A9coles%20%3F",
  "explanation": "En janvier 1962, une épidémie de rire a commencé dans un pensionnat de filles de Kashasha, au Tanganyika. Elle s'est propagée aux villages alentour pendant environ 18 mois, causant aussi pleurs et évanouissements. On l'attribue à une maladie psychogène de masse, probablement liée au stress."
 },
 {
  "text": "Kim Peek, qui a inspiré le film Rain Man, lisait deux pages d'un livre en même temps : la page de gauche avec l'œil gauche, celle de droite avec l'œil droit.",
  "source": "Perplexity",
  "question": "Est-il vrai que kim Peek, qui a inspiré le film Rain Man, lisait deux pages d'un livre en même temps : la page de gauche avec l'œil gauche, celle de droite avec l'œil droit ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20kim%20Peek%2C%20qui%20a%20inspir%C3%A9%20le%20film%20Rain%20Man%2C%20lisait%20deux%20pages%20d'un%20livre%20en%20m%C3%AAme%20temps%20%3A%20la%20page%20de%20gauche%20avec%20l'%C5%93il%20gauche%2C%20celle%20de%20droite%20avec%20l'%C5%93il%20droit%20%3F",
  "explanation": "Kim Peek avait une mémoire hors du commun : il aurait mémorisé environ 12 000 livres. Il lisait une page en environ 10 secondes, et pouvait lire les deux pages ouvertes en même temps avec chaque œil. Son cerveau n'avait pas de corps calleux, la structure reliant les deux hémisphères."
 },
 {
  "text": "Fin 1963-début 1964, le lycéen Randy Gardner est resté éveillé 264 heures, soit 11 jours. Le Guinness a ensuite cessé d'homologuer ce type de record par sécurité.",
  "source": "Perplexity",
  "question": "Est-il vrai que fin 1963-début 1964, le lycéen Randy Gardner est resté éveillé 264 heures, soit 11 jours. Le Guinness a ensuite cessé d'homologuer ce type de record par sécurité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20fin%201963-d%C3%A9but%201964%2C%20le%20lyc%C3%A9en%20Randy%20Gardner%20est%20rest%C3%A9%20%C3%A9veill%C3%A9%20264%20heures%2C%20soit%2011%20jours.%20Le%20Guinness%20a%20ensuite%20cess%C3%A9%20d'homologuer%20ce%20type%20de%20record%20par%20s%C3%A9curit%C3%A9%20%3F",
  "explanation": "Pour une expérience scientifique, Randy Gardner, 17 ans, est resté éveillé 264,4 heures, suivi par le chercheur William Dement. Il a souffert de troubles de concentration, d'humeur, de mémoire et d'hallucinations. Le Guinness a cessé d'homologuer ces records car la privation de sommeil est dangereuse."
 },
 {
  "text": "Ötzi, l'homme des glaces mort il y a 5 300 ans, porte 61 tatouages, souvent sur des zones douloureuses : peut-être un traitement contre ses douleurs articulaires.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'ötzi, l'homme des glaces mort il y a 5 300 ans, porte 61 tatouages, souvent sur des zones douloureuses : peut-être un traitement contre ses douleurs articulaires ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%B6tzi%2C%20l'homme%20des%20glaces%20mort%20il%20y%20a%205%20300%20ans%2C%20porte%2061%20tatouages%2C%20souvent%20sur%20des%20zones%20douloureuses%20%3A%20peut-%C3%AAtre%20un%20traitement%20contre%20ses%20douleurs%20articulaires%20%3F",
  "explanation": "Ötzi a été retrouvé en 1991 dans les Alpes, entre l'Italie et l'Autriche. Ses 61 tatouages sont des lignes et des croix réalisées en frottant du charbon dans des incisions. Beaucoup se situent sur des articulations usées, comme les genoux, les chevilles et le bas du dos, ce qui suggère un usage thérapeutique."
 },
 {
  "text": "Après la bataille de Waterloo en 1815, des pilleurs ont arraché les dents des soldats morts pour fabriquer des dentiers, vendus sous le nom de « dents de Waterloo ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'après la bataille de Waterloo en 1815, des pilleurs ont arraché les dents des soldats morts pour fabriquer des dentiers, vendus sous le nom de « dents de Waterloo » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'apr%C3%A8s%20la%20bataille%20de%20Waterloo%20en%201815%2C%20des%20pilleurs%20ont%20arrach%C3%A9%20les%20dents%20des%20soldats%20morts%20pour%20fabriquer%20des%20dentiers%2C%20vendus%20sous%20le%20nom%20de%20%C2%AB%20dents%20de%20Waterloo%20%C2%BB%20%3F",
  "explanation": "Avant la porcelaine, les dentiers utilisaient des dents humaines prélevées sur des cadavres. Après la bataille de Waterloo, des milliers de dents ont été arrachées aux soldats morts. On a désigné ces dentiers comme « dents de Waterloo », même si les dents provenaient aussi d'autres champs de bataille."
 },
 {
  "text": "Non, les dentiers de George Washington n'étaient pas en bois : ils mêlaient ivoire (probablement d'hippopotame), dents d'animaux et dents humaines.",
  "source": "Perplexity",
  "question": "Est-il vrai que les dentiers de George Washington n'étaient pas en bois : ils mêlaient ivoire (probablement d'hippopotame), dents d'animaux et dents humaines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20dentiers%20de%20George%20Washington%20n'%C3%A9taient%20pas%20en%20bois%20%3A%20ils%20m%C3%AAlaient%20ivoire%20(probablement%20d'hippopotame)%2C%20dents%20d'animaux%20et%20dents%20humaines%20%3F",
  "explanation": "George Washington a souffert de problèmes dentaires toute sa vie et n'avait plus qu'une dent en devenant président. Ses dentiers étaient en ivoire d'hippopotame, en plomb, avec des dents humaines (certaines achetées à des esclaves) et animales. Le mythe des dents en bois viendrait des taches qui faisaient ressembler l'ivoire au bois."
 },
 {
  "text": "Stan Larkin a vécu 555 jours sans cœur, avec un cœur artificiel alimenté par une pompe de 6 kg qu'il portait dans un sac à dos.",
  "source": "Perplexity",
  "question": "Est-il vrai que Stan Larkin a vécu 555 jours sans cœur, avec un cœur artificiel alimenté par une pompe de 6 kg qu'il portait dans un sac à dos ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Stan%20Larkin%20a%20v%C3%A9cu%20555%20jours%20sans%20c%C5%93ur%2C%20avec%20un%20c%C5%93ur%20artificiel%20aliment%C3%A9%20par%20une%20pompe%20de%206%20kg%20qu'il%20portait%20dans%20un%20sac%20%C3%A0%20dos%20%3F",
  "explanation": "Atteint d'une maladie cardiaque génétique, Stan Larkin a reçu un cœur artificiel total en 2014. Relié à un compresseur portable, le Freedom Driver, il a pu rentrer chez lui et même jouer au basket. Il a reçu une greffe de cœur en 2016, après 555 jours sans cœur biologique."
 },
 {
  "text": "Le foie d'ours polaire contient tant de vitamine A qu'en manger peut provoquer une intoxication grave, au point de faire peler la peau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le foie d'ours polaire contient tant de vitamine A qu'en manger peut provoquer une intoxication grave, au point de faire peler la peau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20foie%20d'ours%20polaire%20contient%20tant%20de%20vitamine%20A%20qu'en%20manger%20peut%20provoquer%20une%20intoxication%20grave%2C%20au%20point%20de%20faire%20peler%20la%20peau%20%3F",
  "explanation": "Le foie d'ours polaire contient une concentration énorme de vitamine A, accumulée via sa chaîne alimentaire. Une petite portion suffit à provoquer une hypervitaminose A, avec maux de tête, vomissements et desquamation de la peau. Des explorateurs polaires en sont morts. Les Inuits ne le mangent pas."
 },
 {
  "text": "En 2010, des malades de l'intestin irritable ont pris des pilules en sachant que c'étaient des placebos, sans principe actif : leurs symptômes se sont nettement améliorés.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2010, des malades de l'intestin irritable ont pris des pilules en sachant que c'étaient des placebos, sans principe actif : leurs symptômes se sont nettement améliorés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202010%2C%20des%20malades%20de%20l'intestin%20irritable%20ont%20pris%20des%20pilules%20en%20sachant%20que%20c'%C3%A9taient%20des%20placebos%2C%20sans%20principe%20actif%20%3A%20leurs%20sympt%C3%B4mes%20se%20sont%20nettement%20am%C3%A9lior%C3%A9s%20%3F",
  "explanation": "Dans une étude de Harvard publiée en 2010, des patients atteints du syndrome de l'intestin irritable ont pris des pilules dont ils savaient qu'il s'agissait de placebos. Les symptômes de ce groupe se sont davantage améliorés que ceux du groupe sans traitement. On parle de « placebo ouvert », un effet étudié depuis dans d'autres maladies."
 },
 {
  "text": "En analysant le nombril de 60 volontaires, des chercheurs ont trouvé 2 368 espèces de bactéries, dont une connue seulement dans le sol du Japon, où son hôte n'était jamais allé.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en analysant le nombril de 60 volontaires, des chercheurs ont trouvé 2 368 espèces de bactéries, dont une connue seulement dans le sol du Japon, où son hôte n'était jamais allé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20analysant%20le%20nombril%20de%2060%20volontaires%2C%20des%20chercheurs%20ont%20trouv%C3%A9%202%20368%20esp%C3%A8ces%20de%20bact%C3%A9ries%2C%20dont%20une%20connue%20seulement%20dans%20le%20sol%20du%20Japon%2C%20o%C3%B9%20son%20h%C3%B4te%20n'%C3%A9tait%20jamais%20all%C3%A9%20%3F",
  "explanation": "En 2012, le projet Belly Button Biodiversity a analysé des prélèvements de nombril. Les chercheurs ont trouvé 2 368 espèces de bactéries, dont de nombreuses inconnues. Une bactérie retrouvée chez un participant n'était connue que dans des sols japonais. Le nombril est un environnement protégé, rarement lavé."
 },
 {
  "text": "Non, le corps ne contient pas 10 fois plus de bactéries que de cellules humaines : une étude de 2016 estime le rapport à environ 1 pour 1 (38 000 milliards contre 30 000 milliards).",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps ne contient pas 10 fois plus de bactéries que de cellules humaines : une étude de 2016 estime le rapport à environ 1 pour 1 (38 000 milliards contre 30 000 milliards) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20ne%20contient%20pas%2010%20fois%20plus%20de%20bact%C3%A9ries%20que%20de%20cellules%20humaines%20%3A%20une%20%C3%A9tude%20de%202016%20estime%20le%20rapport%20%C3%A0%20environ%201%20pour%201%20(38%20000%20milliards%20contre%2030%20000%20milliards)%20%3F",
  "explanation": "Le chiffre de 10 bactéries pour 1 cellule humaine vient d'une estimation approximative des années 1970. En 2016, une étude a recalculé un rapport d'environ 1,3 pour 1. Les bactéries sont beaucoup plus petites, et le nombre de cellules humaines est dominé par les globules rouges. Ce rapport varie même après une selle."
 },
 {
  "text": "Des cellules du fœtus restent dans le corps de la mère des décennies après l'accouchement, y compris dans son cerveau : c'est le microchimérisme fœtal.",
  "source": "Perplexity",
  "question": "Est-il vrai que des cellules du fœtus restent dans le corps de la mère des décennies après l'accouchement, y compris dans son cerveau : c'est le microchimérisme fœtal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20des%20cellules%20du%20f%C5%93tus%20restent%20dans%20le%20corps%20de%20la%20m%C3%A8re%20des%20d%C3%A9cennies%20apr%C3%A8s%20l'accouchement%2C%20y%20compris%20dans%20son%20cerveau%20%3A%20c'est%20le%20microchim%C3%A9risme%20f%C5%93tal%20%3F",
  "explanation": "Pendant la grossesse, des cellules du fœtus passent dans le sang de la mère. Certaines restent dans ses organes pendant des décennies, y compris dans le cerveau, selon des études post-mortem. Leurs effets sont encore étudiés : elles pourraient aider à réparer des tissus, ou au contraire être impliquées dans certaines maladies auto-immunes."
 },
 {
  "text": "Le syndrome des cheveux incoiffables existe : une mutation, notamment du gène PADI3, donne aux cheveux une section triangulaire ou en forme de cœur qui les empêche de se coucher.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome des cheveux incoiffables existe : une mutation, notamment du gène PADI3, donne aux cheveux une section triangulaire ou en forme de cœur qui les empêche de se coucher ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20des%20cheveux%20incoiffables%20existe%20%3A%20une%20mutation%2C%20notamment%20du%20g%C3%A8ne%20PADI3%2C%20donne%20aux%20cheveux%20une%20section%20triangulaire%20ou%20en%20forme%20de%20c%C5%93ur%20qui%20les%20emp%C3%AAche%20de%20se%20coucher%20%3F",
  "explanation": "Le syndrome des cheveux incoiffables est rare. Il apparaît généralement dans l'enfance : les cheveux sont secs, clairs, et se dressent dans toutes les directions. En 2016, des mutations dans les gènes PADI3, TGM3 ou TCHH ont été identifiées. Les symptômes s'atténuent souvent avec l'âge."
 },
 {
  "text": "Quand une femme enceinte avale de l'ail, son liquide amniotique se met à sentir l'ail moins d'une heure plus tard, selon une étude de 1995.",
  "source": "Perplexity",
  "question": "Est-il vrai que quand une femme enceinte avale de l'ail, son liquide amniotique se met à sentir l'ail moins d'une heure plus tard, selon une étude de 1995 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20quand%20une%20femme%20enceinte%20avale%20de%20l'ail%2C%20son%20liquide%20amniotique%20se%20met%20%C3%A0%20sentir%20l'ail%20moins%20d'une%20heure%20plus%20tard%2C%20selon%20une%20%C3%A9tude%20de%201995%20%3F",
  "explanation": "En 1995, des chercheurs ont donné à des femmes enceintes des gélules d'ail ou de placebo avant une amniocentèse. Un panel de testeurs a détecté une odeur d'ail dans les échantillons de liquide amniotique de celles qui en avaient pris. Le fœtus est ainsi exposé aux arômes de l'alimentation de sa mère."
 },
 {
  "text": "En 2020, la violoniste Dagmar Turner a joué de son instrument pendant qu'on lui retirait une tumeur au cerveau, pour que les chirurgiens épargnent les zones qui contrôlent ses mains.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2020, la violoniste Dagmar Turner a joué de son instrument pendant qu'on lui retirait une tumeur au cerveau, pour que les chirurgiens épargnent les zones qui contrôlent ses mains ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202020%2C%20la%20violoniste%20Dagmar%20Turner%20a%20jou%C3%A9%20de%20son%20instrument%20pendant%20qu'on%20lui%20retirait%20une%20tumeur%20au%20cerveau%2C%20pour%20que%20les%20chirurgiens%20%C3%A9pargnent%20les%20zones%20qui%20contr%C3%B4lent%20ses%20mains%20%3F",
  "explanation": "En 2020, au King's College Hospital de Londres, Dagmar Turner a joué du violon pendant l'opération d'une tumeur au cerveau, en chirurgie éveillée. Les chirurgiens surveillaient son jeu pour éviter d'endommager les zones contrôlant la motricité fine des mains. L'opération a réussi."
 },
 {
  "text": "Zahra Aboutalib a porté pendant 46 ans un fœtus mort et calcifié, un « bébé de pierre » découvert lorsqu'elle avait 75 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que Zahra Aboutalib a porté pendant 46 ans un fœtus mort et calcifié, un « bébé de pierre » découvert lorsqu'elle avait 75 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Zahra%20Aboutalib%20a%20port%C3%A9%20pendant%2046%20ans%20un%20f%C5%93tus%20mort%20et%20calcifi%C3%A9%2C%20un%20%C2%AB%20b%C3%A9b%C3%A9%20de%20pierre%20%C2%BB%20d%C3%A9couvert%20lorsqu'elle%20avait%2075%20ans%20%3F",
  "explanation": "Zahra Aboutalib aurait été enceinte en 1955. Après un travail difficile, elle est rentrée chez elle. Le fœtus mort s'est calcifié : c'est un lithopédion, ou « bébé de pierre ». Il a été découvert en 2001 lors d'un examen médical. Ce phénomène, très rare, survient lors de grossesses extra-utérines."
 },
 {
  "text": "Les frères siamois Chang et Eng Bunker, reliés au niveau du torse, ont épousé deux sœurs et eu à eux deux 21 enfants.",
  "source": "Perplexity",
  "question": "Est-il vrai que les frères siamois Chang et Eng Bunker, reliés au niveau du torse, ont épousé deux sœurs et eu à eux deux 21 enfants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fr%C3%A8res%20siamois%20Chang%20et%20Eng%20Bunker%2C%20reli%C3%A9s%20au%20niveau%20du%20torse%2C%20ont%20%C3%A9pous%C3%A9%20deux%20s%C5%93urs%20et%20eu%20%C3%A0%20eux%20deux%2021%20enfants%20%3F",
  "explanation": "Chang et Eng Bunker, nés au Siam en 1811, étaient reliés au niveau du sternum. Ils ont épousé deux sœurs, Adelaide et Sarah Yates, et alternaient entre deux maisons tous les trois jours. Ils ont eu 21 enfants. Ce sont eux qui ont popularisé l'expression « frères siamois »."
 },
 {
  "text": "Le syndrome de la tête qui explose existe : en s'endormant ou au réveil, on entend une détonation violente qui n'existe pas. Il est indolore.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome de la tête qui explose existe : en s'endormant ou au réveil, on entend une détonation violente qui n'existe pas. Il est indolore ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20de%20la%20t%C3%AAte%20qui%20explose%20existe%20%3A%20en%20s'endormant%20ou%20au%20r%C3%A9veil%2C%20on%20entend%20une%20d%C3%A9tonation%20violente%20qui%20n'existe%20pas.%20Il%20est%20indolore%20%3F",
  "explanation": "Le syndrome de la tête qui explose est un trouble du sommeil bénin : au moment de s'endormir ou de se réveiller, on entend un bruit fort et soudain, comme une explosion ou un coup de feu, qui n'existe pas. Il provoque de la peur mais pas de douleur. Il serait lié à un problème de « mise en veille » du cerveau."
 },
 {
  "text": "Entre 18 et 35 % des gens éternuent de façon réflexe en passant brusquement à la lumière vive du soleil, un trait héréditaire appelé réflexe photo-sternutatoire.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'entre 18 et 35 % des gens éternuent de façon réflexe en passant brusquement à la lumière vive du soleil, un trait héréditaire appelé réflexe photo-sternutatoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'entre%2018%20et%2035%20%25%20des%20gens%20%C3%A9ternuent%20de%20fa%C3%A7on%20r%C3%A9flexe%20en%20passant%20brusquement%20%C3%A0%20la%20lumi%C3%A8re%20vive%20du%20soleil%2C%20un%20trait%20h%C3%A9r%C3%A9ditaire%20appel%C3%A9%20r%C3%A9flexe%20photo-sternutatoire%20%3F",
  "explanation": "Le réflexe photo-sternutatoire, ou syndrome ACHOO, est héréditaire. Il serait dû à un croisement entre les nerfs du nez et ceux de l'œil : une lumière vive stimule le nerf optique, et le cerveau déclenche un éternuement. Il peut poser des problèmes, par exemple pour des pilotes."
 },
 {
  "text": "Les cellules cancéreuses d'Henrietta Lacks, prélevées sans son accord en 1951, se multiplient toujours dans les laboratoires du monde entier sous le nom de HeLa.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cellules cancéreuses d'Henrietta Lacks, prélevées sans son accord en 1951, se multiplient toujours dans les laboratoires du monde entier sous le nom de HeLa ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cellules%20canc%C3%A9reuses%20d'Henrietta%20Lacks%2C%20pr%C3%A9lev%C3%A9es%20sans%20son%20accord%20en%201951%2C%20se%20multiplient%20toujours%20dans%20les%20laboratoires%20du%20monde%20entier%20sous%20le%20nom%20de%20HeLa%20%3F",
  "explanation": "Henrietta Lacks, atteinte d'un cancer du col de l'utérus, a été soignée à l'hôpital Johns Hopkins en 1951. Des cellules ont été prélevées sans son accord. Elles se sont révélées capables de se diviser indéfiniment. La lignée HeLa a servi à mettre au point le vaccin contre la polio et à de nombreuses découvertes."
 },
 {
  "text": "Le syndrome de Cotard pousse des personnes vivantes à croire qu'elles sont mortes, qu'elles n'ont plus d'organes ou qu'elles pourrissent.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome de Cotard pousse des personnes vivantes à croire qu'elles sont mortes, qu'elles n'ont plus d'organes ou qu'elles pourrissent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20de%20Cotard%20pousse%20des%20personnes%20vivantes%20%C3%A0%20croire%20qu'elles%20sont%20mortes%2C%20qu'elles%20n'ont%20plus%20d'organes%20ou%20qu'elles%20pourrissent%20%3F",
  "explanation": "Le syndrome de Cotard, décrit par le neurologue Jules Cotard en 1880, est un trouble psychiatrique rare. Les patients sont convaincus d'être morts, de ne plus avoir de sang ou d'organes. Il est associé à la dépression sévère, la psychose ou des lésions cérébrales. Il peut être traité."
 },
 {
  "text": "Chez les Fore de Papouasie-Nouvelle-Guinée, manger le cerveau des défunts lors des funérailles a transmis le kuru, une maladie à prion surnommée « la mort qui rit ».",
  "source": "Perplexity",
  "question": "Est-il vrai que chez les Fore de Papouasie-Nouvelle-Guinée, manger le cerveau des défunts lors des funérailles a transmis le kuru, une maladie à prion surnommée « la mort qui rit » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20les%20Fore%20de%20Papouasie-Nouvelle-Guin%C3%A9e%2C%20manger%20le%20cerveau%20des%20d%C3%A9funts%20lors%20des%20fun%C3%A9railles%20a%20transmis%20le%20kuru%2C%20une%20maladie%20%C3%A0%20prion%20surnomm%C3%A9e%20%C2%AB%20la%20mort%20qui%20rit%20%C2%BB%20%3F",
  "explanation": "Le kuru a été observé chez les Fore dans les années 1950. Il se transmettait par la consommation de tissus de défunts, notamment le cerveau, lors de rites funéraires. Il cause des tremblements, et des crises de rire incontrôlées en phase avancée. La maladie a quasiment disparu après l'abandon de ces pratiques."
 },
 {
  "text": "La première greffe partielle du visage a eu lieu à Amiens en 2005 : Isabelle Dinoire avait été défigurée par son propre chien pendant qu'elle était inconsciente.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première greffe partielle du visage a eu lieu à Amiens en 2005 : Isabelle Dinoire avait été défigurée par son propre chien pendant qu'elle était inconsciente ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20greffe%20partielle%20du%20visage%20a%20eu%20lieu%20%C3%A0%20Amiens%20en%202005%20%3A%20Isabelle%20Dinoire%20avait%20%C3%A9t%C3%A9%20d%C3%A9figur%C3%A9e%20par%20son%20propre%20chien%20pendant%20qu'elle%20%C3%A9tait%20inconsciente%20%3F",
  "explanation": "En novembre 2005, au CHU d'Amiens, l'équipe de Bernard Devauchelle et Jean-Michel Dubernard a greffé à Isabelle Dinoire le nez, les lèvres et le menton d'une donneuse. Isabelle Dinoire avait été mordue par son chien alors qu'elle était inconsciente après avoir pris des médicaments. Elle est décédée en 2016."
 },
 {
  "text": "Donna Griffiths a éternué pendant 976 jours d'affilée à partir de 1981, dont environ un million de fois la première année.",
  "source": "Perplexity",
  "question": "Est-il vrai que Donna Griffiths a éternué pendant 976 jours d'affilée à partir de 1981, dont environ un million de fois la première année ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Donna%20Griffiths%20a%20%C3%A9ternu%C3%A9%20pendant%20976%20jours%20d'affil%C3%A9e%20%C3%A0%20partir%20de%201981%2C%20dont%20environ%20un%20million%20de%20fois%20la%20premi%C3%A8re%20ann%C3%A9e%20%3F",
  "explanation": "Donna Griffiths, une Britannique de 12 ans, a commencé à éternuer le 13 janvier 1981. Elle aurait éternué environ un million de fois la première année, et n'a arrêté que 976 jours plus tard, le 16 septembre 1983. C'est un record du Guinness. La cause n'a jamais été clairement identifiée."
 },
 {
  "text": "Certaines tumeurs, les tératomes, peuvent contenir des cheveux, des os et même des dents complètes.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines tumeurs, les tératomes, peuvent contenir des cheveux, des os et même des dents complètes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20tumeurs%2C%20les%20t%C3%A9ratomes%2C%20peuvent%20contenir%20des%20cheveux%2C%20des%20os%20et%20m%C3%AAme%20des%20dents%20compl%C3%A8tes%20%3F",
  "explanation": "Les tératomes se développent à partir de cellules germinales, capables de produire tous les types de tissus. Ils peuvent contenir des cheveux, des dents, des os, de la graisse, voire des fragments d'œil ou de cerveau. Ils sont souvent bénins et se forment généralement dans les ovaires ou les testicules."
 },
 {
  "text": "Un choc émotionnel peut déformer brutalement le cœur en forme de piège à poulpe japonais : ce « syndrome du cœur brisé » s'appelle la cardiomyopathie de Takotsubo.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un choc émotionnel peut déformer brutalement le cœur en forme de piège à poulpe japonais : ce « syndrome du cœur brisé » s'appelle la cardiomyopathie de Takotsubo ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20choc%20%C3%A9motionnel%20peut%20d%C3%A9former%20brutalement%20le%20c%C5%93ur%20en%20forme%20de%20pi%C3%A8ge%20%C3%A0%20poulpe%20japonais%20%3A%20ce%20%C2%AB%20syndrome%20du%20c%C5%93ur%20bris%C3%A9%20%C2%BB%20s'appelle%20la%20cardiomyopathie%20de%20Takotsubo%20%3F",
  "explanation": "La cardiomyopathie de Takotsubo a été décrite au Japon en 1990. Un stress intense, émotionnel ou physique, provoque un afflux d'adrénaline qui sidère une partie du ventricule gauche. Celui-ci prend la forme d'un takotsubo, un pot utilisé pour piéger les poulpes. Les symptômes ressemblent à ceux d'un infarctus, mais le cœur récupère généralement."
 },
 {
  "text": "En 1941, une Norvégienne blessée à la tête par un éclat d'obus s'est mise à parler avec un accent allemand, puis a été rejetée par ses voisins : un cas célèbre de syndrome de l'accent étranger.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1941, une Norvégienne blessée à la tête par un éclat d'obus s'est mise à parler avec un accent allemand, puis a été rejetée par ses voisins : un cas célèbre de syndrome de l'accent étranger ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201941%2C%20une%20Norv%C3%A9gienne%20bless%C3%A9e%20%C3%A0%20la%20t%C3%AAte%20par%20un%20%C3%A9clat%20d'obus%20s'est%20mise%20%C3%A0%20parler%20avec%20un%20accent%20allemand%2C%20puis%20a%20%C3%A9t%C3%A9%20rejet%C3%A9e%20par%20ses%20voisins%20%3A%20un%20cas%20c%C3%A9l%C3%A8bre%20de%20syndrome%20de%20l'accent%20%C3%A9tranger%20%3F",
  "explanation": "En 1941, Astrid L., une Norvégienne, a été blessée par un éclat d'obus lors d'un bombardement. Après sa guérison, elle parlait avec une intonation que les gens percevaient comme allemande. Elle a été rejetée par son entourage, en pleine occupation nazie. Ce cas, étudié par le neurologue Georg Monrad-Krohn, est l'un des plus célèbres."
 },
 {
  "text": "Quand on entend « ba » en regardant des lèvres prononcer « ga », le cerveau entend « da », un son absent des deux : c'est l'effet McGurk.",
  "source": "Perplexity",
  "question": "Est-il vrai que quand on entend « ba » en regardant des lèvres prononcer « ga », le cerveau entend « da », un son absent des deux : c'est l'effet McGurk ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20quand%20on%20entend%20%C2%AB%20ba%20%C2%BB%20en%20regardant%20des%20l%C3%A8vres%20prononcer%20%C2%AB%20ga%20%C2%BB%2C%20le%20cerveau%20entend%20%C2%AB%20da%20%C2%BB%2C%20un%20son%20absent%20des%20deux%20%3A%20c'est%20l'effet%20McGurk%20%3F",
  "explanation": "Décrit par Harry McGurk et John MacDonald en 1976, cet effet montre que le cerveau combine ce qu'il voit et ce qu'il entend pour percevoir la parole. Lorsque les informations ne concordent pas, il fabrique un compromis. L'effet persiste même quand on le connaît."
 },
 {
  "text": "Le syndrome de Capgras pousse des patients à croire qu'un proche, par exemple leur conjoint, a été remplacé par un sosie imposteur parfaitement identique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome de Capgras pousse des patients à croire qu'un proche, par exemple leur conjoint, a été remplacé par un sosie imposteur parfaitement identique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20de%20Capgras%20pousse%20des%20patients%20%C3%A0%20croire%20qu'un%20proche%2C%20par%20exemple%20leur%20conjoint%2C%20a%20%C3%A9t%C3%A9%20remplac%C3%A9%20par%20un%20sosie%20imposteur%20parfaitement%20identique%20%3F",
  "explanation": "Le syndrome de Capgras, décrit par le psychiatre Joseph Capgras en 1923, serait dû à une rupture entre la reconnaissance visuelle d'un visage et la réaction émotionnelle associée. Le patient reconnaît le visage, mais ne ressent rien, et en conclut que c'est un imposteur. Il survient dans certaines psychoses ou après des lésions cérébrales."
 },
 {
  "text": "En 1932, l'armée australienne a mené une « guerre » à la mitrailleuse contre environ 20 000 émeus en Australie-Occidentale, et a fini par abandonner face aux oiseaux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1932, l'armée australienne a mené une « guerre » à la mitrailleuse contre environ 20 000 émeus en Australie-Occidentale, et a fini par abandonner face aux oiseaux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201932%2C%20l'arm%C3%A9e%20australienne%20a%20men%C3%A9%20une%20%C2%AB%20guerre%20%C2%BB%20%C3%A0%20la%20mitrailleuse%20contre%20environ%2020%20000%20%C3%A9meus%20en%20Australie-Occidentale%2C%20et%20a%20fini%20par%20abandonner%20face%20aux%20oiseaux%20%3F",
  "explanation": "En 1932, des fermiers d'Australie-Occidentale se plaignent des émeus qui ravagent leurs récoltes. L'armée envoie des soldats avec des mitrailleuses. Les émeus, rapides et dispersés, se révèlent difficiles à toucher. Après plusieurs semaines et des milliers de balles, l'opération est abandonnée."
 },
 {
  "text": "En 897, le pape Étienne VI fit déterrer son prédécesseur Formose, installa le cadavre sur un trône pour le juger, le déclara coupable et lui fit couper trois doigts.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 897, le pape Étienne VI fit déterrer son prédécesseur Formose, installa le cadavre sur un trône pour le juger, le déclara coupable et lui fit couper trois doigts ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20897%2C%20le%20pape%20%C3%89tienne%20VI%20fit%20d%C3%A9terrer%20son%20pr%C3%A9d%C3%A9cesseur%20Formose%2C%20installa%20le%20cadavre%20sur%20un%20tr%C3%B4ne%20pour%20le%20juger%2C%20le%20d%C3%A9clara%20coupable%20et%20lui%20fit%20couper%20trois%20doigts%20%3F",
  "explanation": "Lors du « concile cadavérique » de 897, le pape Étienne VI fit exhumer le corps du pape Formose, mort plusieurs mois plus tôt, et l'habilla de vêtements pontificaux. Formose fut jugé, déclaré coupable, et ses actes annulés. Ses doigts de bénédiction furent coupés, et son corps jeté dans le Tibre. Étienne VI fut ensuite emprisonné et étranglé."
 },
 {
  "text": "Le soldat japonais Hiroo Onoda a continué la guerre dans la jungle de l'île de Lubang jusqu'en 1974, et n'a déposé les armes que lorsque son ancien commandant est venu l'en relever.",
  "source": "Perplexity",
  "question": "Est-il vrai que le soldat japonais Hiroo Onoda a continué la guerre dans la jungle de l'île de Lubang jusqu'en 1974, et n'a déposé les armes que lorsque son ancien commandant est venu l'en relever ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20soldat%20japonais%20Hiroo%20Onoda%20a%20continu%C3%A9%20la%20guerre%20dans%20la%20jungle%20de%20l'%C3%AEle%20de%20Lubang%20jusqu'en%201974%2C%20et%20n'a%20d%C3%A9pos%C3%A9%20les%20armes%20que%20lorsque%20son%20ancien%20commandant%20est%20venu%20l'en%20relever%20%3F",
  "explanation": "Hiroo Onoda, officier du renseignement, avait reçu l'ordre de ne jamais se rendre. Il a continué une guérilla sur l'île philippine de Lubang pendant 29 ans après la fin de la guerre, refusant de croire aux tracts annonçant la paix. Son ancien commandant est venu en personne lui ordonner de se rendre en 1974."
 },
 {
  "text": "En 1814 à Londres, une cuve de la brasserie Meux a cédé et une vague de bière a déferlé dans le quartier de St Giles, tuant huit personnes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1814 à Londres, une cuve de la brasserie Meux a cédé et une vague de bière a déferlé dans le quartier de St Giles, tuant huit personnes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201814%20%C3%A0%20Londres%2C%20une%20cuve%20de%20la%20brasserie%20Meux%20a%20c%C3%A9d%C3%A9%20et%20une%20vague%20de%20bi%C3%A8re%20a%20d%C3%A9ferl%C3%A9%20dans%20le%20quartier%20de%20St%20Giles%2C%20tuant%20huit%20personnes%20%3F",
  "explanation": "Le 17 octobre 1814, une cuve de la brasserie Meux, à Londres, s'est rompue. Plus d'un million de litres de bière ont déferlé dans les rues du quartier pauvre de St Giles. La vague a détruit des maisons et tué huit personnes. Le tribunal a jugé l'accident comme « une action de Dieu »."
 },
 {
  "text": "En 1919 à Boston, une vague de mélasse haute de 7,6 mètres et lancée à 56 km/h a déferlé dans les rues après la rupture d'une cuve, tuant 21 personnes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1919 à Boston, une vague de mélasse haute de 7,6 mètres et lancée à 56 km/h a déferlé dans les rues après la rupture d'une cuve, tuant 21 personnes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201919%20%C3%A0%20Boston%2C%20une%20vague%20de%20m%C3%A9lasse%20haute%20de%207%2C6%20m%C3%A8tres%20et%20lanc%C3%A9e%20%C3%A0%2056%20km%2Fh%20a%20d%C3%A9ferl%C3%A9%20dans%20les%20rues%20apr%C3%A8s%20la%20rupture%20d'une%20cuve%2C%20tuant%2021%20personnes%20%3F",
  "explanation": "Le 15 janvier 1919, une cuve contenant environ 8,7 millions de litres de mélasse s'est rompue à Boston. La vague a détruit des bâtiments, renversé un train et piégé des personnes et des chevaux dans le liquide visqueux. Elle a fait 21 morts et environ 150 blessés. On dit que le quartier sentait encore la mélasse des années plus tard."
 },
 {
  "text": "En 1518 à Strasbourg, des dizaines de personnes ont été prises d'une frénésie de danse qui a duré des semaines, et la ville a d'abord engagé des musiciens pour les accompagner.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1518 à Strasbourg, des dizaines de personnes ont été prises d'une frénésie de danse qui a duré des semaines, et la ville a d'abord engagé des musiciens pour les accompagner ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201518%20%C3%A0%20Strasbourg%2C%20des%20dizaines%20de%20personnes%20ont%20%C3%A9t%C3%A9%20prises%20d'une%20fr%C3%A9n%C3%A9sie%20de%20danse%20qui%20a%20dur%C3%A9%20des%20semaines%2C%20et%20la%20ville%20a%20d'abord%20engag%C3%A9%20des%20musiciens%20pour%20les%20accompagner%20%3F",
  "explanation": "En juillet 1518, une femme, Frau Troffea, se mit à danser seule dans une rue de Strasbourg. Des dizaines d'autres personnes la rejoignirent. Les autorités crurent qu'il fallait les laisser danser pour les guérir, et engagèrent des musiciens. Certains seraient morts d'épuisement. On pense à une hystérie collective, sur fond de famine et de maladies."
 },
 {
  "text": "La dernière exécution à la guillotine en France, celle de Hamida Djandoubi, a eu lieu le 10 septembre 1977, quelques mois après la sortie américaine du premier film Star Wars.",
  "source": "Perplexity",
  "question": "Est-il vrai que la dernière exécution à la guillotine en France, celle de Hamida Djandoubi, a eu lieu le 10 septembre 1977, quelques mois après la sortie américaine du premier film Star Wars ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20derni%C3%A8re%20ex%C3%A9cution%20%C3%A0%20la%20guillotine%20en%20France%2C%20celle%20de%20Hamida%20Djandoubi%2C%20a%20eu%20lieu%20le%2010%20septembre%201977%2C%20quelques%20mois%20apr%C3%A8s%20la%20sortie%20am%C3%A9ricaine%20du%20premier%20film%20Star%20Wars%20%3F",
  "explanation": "Hamida Djandoubi, condamné pour meurtre, a été guillotiné à Marseille le 10 septembre 1977. « Star Wars » était sorti aux États-Unis en mai 1977. La peine de mort a été abolie en France en 1981, grâce à Robert Badinter."
 },
 {
  "text": "En 1740, l'impératrice Anna Ivanovna força le prince Mikhaïl Golitsyne, devenu bouffon, à épouser une servante et à passer sa nuit de noces dans un palais entièrement fait de glace.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1740, l'impératrice Anna Ivanovna força le prince Mikhaïl Golitsyne, devenu bouffon, à épouser une servante et à passer sa nuit de noces dans un palais entièrement fait de glace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201740%2C%20l'imp%C3%A9ratrice%20Anna%20Ivanovna%20for%C3%A7a%20le%20prince%20Mikha%C3%AFl%20Golitsyne%2C%20devenu%20bouffon%2C%20%C3%A0%20%C3%A9pouser%20une%20servante%20et%20%C3%A0%20passer%20sa%20nuit%20de%20noces%20dans%20un%20palais%20enti%C3%A8rement%20fait%20de%20glace%20%3F",
  "explanation": "Pour punir le prince Golitsyne, qui avait épousé une catholique, l'impératrice Anna Ivanovna en fit son bouffon, puis le força à épouser une servante kalmouke. Elle fit construire à Saint-Pétersbourg un palais de glace, avec un lit en glace, et y fit passer leur nuit de noces sous bonne garde, en plein hiver."
 },
 {
  "text": "Selon les récits d'époque, le roi de France Charles VI se croyait fait de verre : il portait des vêtements renforcés de tiges de fer et refusait qu'on l'approche de peur de se briser.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon les récits d'époque, le roi de France Charles VI se croyait fait de verre : il portait des vêtements renforcés de tiges de fer et refusait qu'on l'approche de peur de se briser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20les%20r%C3%A9cits%20d'%C3%A9poque%2C%20le%20roi%20de%20France%20Charles%20VI%20se%20croyait%20fait%20de%20verre%20%3A%20il%20portait%20des%20v%C3%AAtements%20renforc%C3%A9s%20de%20tiges%20de%20fer%20et%20refusait%20qu'on%20l'approche%20de%20peur%20de%20se%20briser%20%3F",
  "explanation": "Charles VI, roi de France de 1380 à 1422, a souffert de graves crises de folie. Selon les chroniqueurs, il se croyait par moments fait de verre, et craignait de se briser. Il aurait porté des vêtements renforcés de tiges de fer. Ce trouble, appelé « illusion de verre », était connu à cette époque."
 },
 {
  "text": "En 1859, Joshua Norton s'est autoproclamé empereur des États-Unis à San Francisco, a décrété l'abolition du Congrès et ses billets de banque étaient acceptés dans certains restaurants.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1859, Joshua Norton s'est autoproclamé empereur des États-Unis à San Francisco, a décrété l'abolition du Congrès et ses billets de banque étaient acceptés dans certains restaurants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201859%2C%20Joshua%20Norton%20s'est%20autoproclam%C3%A9%20empereur%20des%20%C3%89tats-Unis%20%C3%A0%20San%20Francisco%2C%20a%20d%C3%A9cr%C3%A9t%C3%A9%20l'abolition%20du%20Congr%C3%A8s%20et%20ses%20billets%20de%20banque%20%C3%A9taient%20accept%C3%A9s%20dans%20certains%20restaurants%20%3F",
  "explanation": "Joshua Norton, homme d'affaires ruiné, s'est proclamé « Norton Ier, empereur des États-Unis » en 1859. Il a décrété l'abolition du Congrès et la construction d'un pont sur la baie de San Francisco. Les habitants l'adoraient : ses billets étaient acceptés par certains commerçants, et environ 30 000 personnes ont assisté à ses funérailles en 1880."
 },
 {
  "text": "L'astronome Tycho Brahe a perdu une partie du nez en 1566 lors d'un duel contre son cousin pour savoir lequel était le meilleur mathématicien, et a porté une prothèse en laiton le reste de sa vie.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'astronome Tycho Brahe a perdu une partie du nez en 1566 lors d'un duel contre son cousin pour savoir lequel était le meilleur mathématicien, et a porté une prothèse en laiton le reste de sa vie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'astronome%20Tycho%20Brahe%20a%20perdu%20une%20partie%20du%20nez%20en%201566%20lors%20d'un%20duel%20contre%20son%20cousin%20pour%20savoir%20lequel%20%C3%A9tait%20le%20meilleur%20math%C3%A9maticien%2C%20et%20a%20port%C3%A9%20une%20proth%C3%A8se%20en%20laiton%20le%20reste%20de%20sa%20vie%20%3F",
  "explanation": "Le jeune Tycho Brahe, alors étudiant en Allemagne, s'est battu en duel avec son cousin Manderup Parsberg, à la suite d'une dispute, la légende disant qu'elle portait sur une formule mathématique. Un coup d'épée lui a tranché une partie du nez. Il a porté une prothèse, probablement en laiton, même si elle était réputée en or et argent. L'exhumation de son corps en 2010 a révélé des traces de laiton."
 },
 {
  "text": "En 1726, Mary Toft a convaincu un chirurgien de la maison du roi George Ier qu'elle accouchait de lapins, avant d'avouer la supercherie.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1726, Mary Toft a convaincu un chirurgien de la maison du roi George Ier qu'elle accouchait de lapins, avant d'avouer la supercherie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201726%2C%20Mary%20Toft%20a%20convaincu%20un%20chirurgien%20de%20la%20maison%20du%20roi%20George%20Ier%20qu'elle%20accouchait%20de%20lapins%2C%20avant%20d'avouer%20la%20supercherie%20%3F",
  "explanation": "Mary Toft prétendait avoir donné naissance à des lapins, en réalité introduits dans son corps. Le chirurgien Nathaniel St André, envoyé par la cour, y a cru et a publié un compte rendu. Sous la menace d'une opération, elle a fini par avouer. L'affaire a ridiculisé le milieu médical anglais."
 },
 {
  "text": "En 1925, l'escroc Victor Lustig a vendu la tour Eiffel à un ferrailleur parisien en se faisant passer pour un fonctionnaire, puis a tenté de recommencer avec d'autres acheteurs.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1925, l'escroc Victor Lustig a vendu la tour Eiffel à un ferrailleur parisien en se faisant passer pour un fonctionnaire, puis a tenté de recommencer avec d'autres acheteurs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201925%2C%20l'escroc%20Victor%20Lustig%20a%20vendu%20la%20tour%20Eiffel%20%C3%A0%20un%20ferrailleur%20parisien%20en%20se%20faisant%20passer%20pour%20un%20fonctionnaire%2C%20puis%20a%20tent%C3%A9%20de%20recommencer%20avec%20d'autres%20acheteurs%20%3F",
  "explanation": "Victor Lustig a convoqué des ferrailleurs dans un grand hôtel, se présentant comme un haut fonctionnaire chargé de vendre la tour, prétendument trop coûteuse à entretenir. André Poisson lui a versé l'argent, et un pot-de-vin. Honteux, il n'a jamais porté plainte, ce qui a permis à Lustig de tenter le coup une seconde fois."
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, l'officier Jack Churchill partait au combat avec une épée écossaise, un arc et des flèches, et une cornemuse.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, l'officier Jack Churchill partait au combat avec une épée écossaise, un arc et des flèches, et une cornemuse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20l'officier%20Jack%20Churchill%20partait%20au%20combat%20avec%20une%20%C3%A9p%C3%A9e%20%C3%A9cossaise%2C%20un%20arc%20et%20des%20fl%C3%A8ches%2C%20et%20une%20cornemuse%20%3F",
  "explanation": "John « Mad Jack » Churchill, surnommé ainsi pour ses excentricités, combattait avec une claymore, un arc et une cornemuse. En 1940, il aurait abattu un sous-officier allemand à l'arc, la dernière mort attestée par une flèche lors d'une guerre. Il a aussi capturé des dizaines de soldats allemands, armé de son épée."
 },
 {
  "text": "Wojtek, un ours brun, a été officiellement enrôlé dans l'armée polonaise avec un matricule, aurait porté des caisses d'obus à la bataille du Mont-Cassin et a été promu caporal.",
  "source": "Perplexity",
  "question": "Est-il vrai que wojtek, un ours brun, a été officiellement enrôlé dans l'armée polonaise avec un matricule, aurait porté des caisses d'obus à la bataille du Mont-Cassin et a été promu caporal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20wojtek%2C%20un%20ours%20brun%2C%20a%20%C3%A9t%C3%A9%20officiellement%20enr%C3%B4l%C3%A9%20dans%20l'arm%C3%A9e%20polonaise%20avec%20un%20matricule%2C%20aurait%20port%C3%A9%20des%20caisses%20d'obus%20%C3%A0%20la%20bataille%20du%20Mont-Cassin%20et%20a%20%C3%A9t%C3%A9%20promu%20caporal%20%3F",
  "explanation": "Wojtek, un ourson syrien adopté par des soldats polonais en Iran en 1942, a été enrôlé officiellement pour pouvoir voyager avec eux. Il buvait de la bière, fumait des cigarettes et luttait avec les soldats. Pendant la bataille du Mont-Cassin en 1944, il aurait transporté des caisses de munitions. Il a fini sa vie au zoo d'Édimbourg."
 },
 {
  "text": "Violet Jessop a survécu à la collision de l'Olympic en 1911, au naufrage du Titanic en 1912, où elle était hôtesse, puis à celui du Britannic en 1916, où elle était infirmière.",
  "source": "Perplexity",
  "question": "Est-il vrai que violet Jessop a survécu à la collision de l'Olympic en 1911, au naufrage du Titanic en 1912, où elle était hôtesse, puis à celui du Britannic en 1916, où elle était infirmière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20violet%20Jessop%20a%20surv%C3%A9cu%20%C3%A0%20la%20collision%20de%20l'Olympic%20en%201911%2C%20au%20naufrage%20du%20Titanic%20en%201912%2C%20o%C3%B9%20elle%20%C3%A9tait%20h%C3%B4tesse%2C%20puis%20%C3%A0%20celui%20du%20Britannic%20en%201916%2C%20o%C3%B9%20elle%20%C3%A9tait%20infirmi%C3%A8re%20%3F",
  "explanation": "Violet Jessop, surnommée « Miss Insubmersible », était employée sur l'Olympic lors de sa collision avec un navire de guerre en 1911. Elle était hôtesse sur le Titanic, et a survécu dans un canot. Pendant la Première Guerre mondiale, elle était infirmière à bord du Britannic, coulé par une mine, et a sauté du navire."
 },
 {
  "text": "Tsutomu Yamaguchi était à Hiroshima lors de la bombe atomique du 6 août 1945, rentra chez lui à Nagasaki, y survécut à la seconde bombe trois jours plus tard et mourut à 93 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que tsutomu Yamaguchi était à Hiroshima lors de la bombe atomique du 6 août 1945, rentra chez lui à Nagasaki, y survécut à la seconde bombe trois jours plus tard et mourut à 93 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20tsutomu%20Yamaguchi%20%C3%A9tait%20%C3%A0%20Hiroshima%20lors%20de%20la%20bombe%20atomique%20du%206%20ao%C3%BBt%201945%2C%20rentra%20chez%20lui%20%C3%A0%20Nagasaki%2C%20y%20surv%C3%A9cut%20%C3%A0%20la%20seconde%20bombe%20trois%20jours%20plus%20tard%20et%20mourut%20%C3%A0%2093%20ans%20%3F",
  "explanation": "Tsutomu Yamaguchi, ingénieur de Mitsubishi, était en déplacement à Hiroshima. Brûlé et partiellement sourd, il est rentré à Nagasaki et y était au travail quand la seconde bombe a explosé. Il est le seul survivant officiellement reconnu des deux bombardements par le gouvernement japonais. Il est mort en 2010, à 93 ans."
 },
 {
  "text": "Au marathon olympique de 1904, le premier arrivé avait fait une partie du parcours en voiture, et le vainqueur officiel avait reçu de la strychnine mélangée à du brandy pendant la course.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au marathon olympique de 1904, le premier arrivé avait fait une partie du parcours en voiture, et le vainqueur officiel avait reçu de la strychnine mélangée à du brandy pendant la course ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20marathon%20olympique%20de%201904%2C%20le%20premier%20arriv%C3%A9%20avait%20fait%20une%20partie%20du%20parcours%20en%20voiture%2C%20et%20le%20vainqueur%20officiel%20avait%20re%C3%A7u%20de%20la%20strychnine%20m%C3%A9lang%C3%A9e%20%C3%A0%20du%20brandy%20pendant%20la%20course%20%3F",
  "explanation": "Le marathon de Saint-Louis en 1904 s'est couru par une forte chaleur, sur des routes poussiéreuses. Fred Lorz, arrivé premier, avait parcouru une partie en voiture et a été disqualifié. Thomas Hicks, déclaré vainqueur, avait reçu de la strychnine et du brandy de ses soigneurs, une pratique alors légale. Il a dû être soutenu pour franchir la ligne."
 },
 {
  "text": "Au marathon olympique de 1904, le facteur cubain Andarín Carvajal a mangé des pommes pourries, fait une sieste en pleine course, et a quand même terminé quatrième.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au marathon olympique de 1904, le facteur cubain Andarín Carvajal a mangé des pommes pourries, fait une sieste en pleine course, et a quand même terminé quatrième ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20marathon%20olympique%20de%201904%2C%20le%20facteur%20cubain%20Andar%C3%ADn%20Carvajal%20a%20mang%C3%A9%20des%20pommes%20pourries%2C%20fait%20une%20sieste%20en%20pleine%20course%2C%20et%20a%20quand%20m%C3%AAme%20termin%C3%A9%20quatri%C3%A8me%20%3F",
  "explanation": "Félix Carvajal avait perdu son argent au jeu en route vers Saint-Louis, et a couru avec des vêtements de ville découpés. Pendant la course, il a mangé des pommes trouvées dans un verger, qui lui ont donné des crampes. Il a fait une sieste, puis a fini quatrième. Ce marathon est souvent qualifié de plus étrange de l'histoire olympique."
 },
 {
  "text": "En 1859, les États-Unis et le Royaume-Uni ont mobilisé des centaines de soldats et des navires de guerre après la mort d'un cochon : ce fut la seule victime de la « guerre du Cochon ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1859, les États-Unis et le Royaume-Uni ont mobilisé des centaines de soldats et des navires de guerre après la mort d'un cochon : ce fut la seule victime de la « guerre du Cochon » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201859%2C%20les%20%C3%89tats-Unis%20et%20le%20Royaume-Uni%20ont%20mobilis%C3%A9%20des%20centaines%20de%20soldats%20et%20des%20navires%20de%20guerre%20apr%C3%A8s%20la%20mort%20d'un%20cochon%20%3A%20ce%20fut%20la%20seule%20victime%20de%20la%20%C2%AB%20guerre%20du%20Cochon%20%C2%BB%20%3F",
  "explanation": "Sur l'île San Juan, revendiquée par les deux pays, un fermier américain a abattu un cochon appartenant à la Compagnie de la baie d'Hudson. L'affaire a dégénéré en confrontation militaire, avec plusieurs centaines de soldats et des navires de guerre. Aucun coup de feu n'a été tiré. Le conflit a été réglé par arbitrage en 1872."
 },
 {
  "text": "Une relique présentée comme le pénis de Napoléon a été achetée en 1977 pour 3 000 dollars par un urologue américain, John Lattimer.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une relique présentée comme le pénis de Napoléon a été achetée en 1977 pour 3 000 dollars par un urologue américain, John Lattimer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20relique%20pr%C3%A9sent%C3%A9e%20comme%20le%20p%C3%A9nis%20de%20Napol%C3%A9on%20a%20%C3%A9t%C3%A9%20achet%C3%A9e%20en%201977%20pour%203%20000%20dollars%20par%20un%20urologue%20am%C3%A9ricain%2C%20John%20Lattimer%20%3F",
  "explanation": "Le prêtre qui a pratiqué l'autopsie de Napoléon en 1821 aurait prélevé son pénis. L'objet a changé de mains plusieurs fois avant que l'urologue John Lattimer l'achète aux enchères en 1977 pour environ 3 000 dollars. Son authenticité n'a jamais été prouvée. Il est conservé par la fille de Lattimer."
 },
 {
  "text": "Le philosophe Jeremy Bentham a demandé que son squelette soit habillé et conservé : il est exposé à l'University College de Londres, avec une tête en cire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le philosophe Jeremy Bentham a demandé que son squelette soit habillé et conservé : il est exposé à l'University College de Londres, avec une tête en cire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20philosophe%20Jeremy%20Bentham%20a%20demand%C3%A9%20que%20son%20squelette%20soit%20habill%C3%A9%20et%20conserv%C3%A9%20%3A%20il%20est%20expos%C3%A9%20%C3%A0%20l'University%20College%20de%20Londres%2C%20avec%20une%20t%C3%AAte%20en%20cire%20%3F",
  "explanation": "Jeremy Bentham, philosophe de l'utilitarisme mort en 1832, a demandé que son corps serve à la science, puis que son squelette soit habillé de ses vêtements : il a appelé ça l'« auto-icône ». Sa tête, momifiée, a pris un aspect peu engageant : elle a été remplacée par une tête de cire. L'auto-icône est exposée à l'University College de Londres."
 },
 {
  "text": "En 1958, l'US Air Force a étudié le projet A119 visant à faire exploser une bombe nucléaire sur la Lune, avec la participation du jeune Carl Sagan.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1958, l'US Air Force a étudié le projet A119 visant à faire exploser une bombe nucléaire sur la Lune, avec la participation du jeune Carl Sagan ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201958%2C%20l'US%20Air%20Force%20a%20%C3%A9tudi%C3%A9%20le%20projet%20A119%20visant%20%C3%A0%20faire%20exploser%20une%20bombe%20nucl%C3%A9aire%20sur%20la%20Lune%2C%20avec%20la%20participation%20du%20jeune%20Carl%20Sagan%20%3F",
  "explanation": "Après le lancement de Spoutnik, l'armée de l'air américaine a étudié la possibilité de faire exploser une bombe atomique sur la Lune, pour montrer la puissance des États-Unis. Carl Sagan, jeune chercheur, a calculé l'expansion du nuage de poussière. Le projet a été abandonné, notamment par crainte des retombées et de la contamination de la Lune."
 },
 {
  "text": "Dans les années 1960, la CIA a implanté un micro et un émetteur radio dans un chat pour espionner les Soviétiques : le projet « Acoustic Kitty » fut abandonné en 1967.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans les années 1960, la CIA a implanté un micro et un émetteur radio dans un chat pour espionner les Soviétiques : le projet « Acoustic Kitty » fut abandonné en 1967 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20les%20ann%C3%A9es%201960%2C%20la%20CIA%20a%20implant%C3%A9%20un%20micro%20et%20un%20%C3%A9metteur%20radio%20dans%20un%20chat%20pour%20espionner%20les%20Sovi%C3%A9tiques%20%3A%20le%20projet%20%C2%AB%20Acoustic%20Kitty%20%C2%BB%20fut%20abandonn%C3%A9%20en%201967%20%3F",
  "explanation": "Selon des documents de la CIA déclassifiés, l'agence a implanté un microphone dans l'oreille d'un chat, un émetteur à la base de son crâne, et une antenne dans sa queue. Le chat se laissait distraire par la faim et était difficile à diriger. Le projet aurait coûté environ 20 millions de dollars avant d'être abandonné."
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, les États-Unis ont développé des bombes remplies de chauves-souris équipées de mini-charges incendiaires, qui ont accidentellement brûlé leur propre base d'essai en 1943.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, les États-Unis ont développé des bombes remplies de chauves-souris équipées de mini-charges incendiaires, qui ont accidentellement brûlé leur propre base d'essai en 1943 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20les%20%C3%89tats-Unis%20ont%20d%C3%A9velopp%C3%A9%20des%20bombes%20remplies%20de%20chauves-souris%20%C3%A9quip%C3%A9es%20de%20mini-charges%20incendiaires%2C%20qui%20ont%20accidentellement%20br%C3%BBl%C3%A9%20leur%20propre%20base%20d'essai%20en%201943%20%3F",
  "explanation": "Le projet X-Ray prévoyait de lâcher au-dessus du Japon des milliers de chauves-souris équipées de petites bombes incendiaires à retardement, qui iraient se loger dans les maisons. Lors d'un essai en 1943, des chauves-souris se sont échappées et ont incendié une base d'essai au Nouveau-Mexique. Le projet a été abandonné au profit de la bombe atomique."
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, le psychologue B. F. Skinner a conçu une bombe planante guidée par des pigeons qui picoraient l'image de la cible projetée sur un écran dans le nez de l'engin.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, le psychologue B. F. Skinner a conçu une bombe planante guidée par des pigeons qui picoraient l'image de la cible projetée sur un écran dans le nez de l'engin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20le%20psychologue%20B.%20F.%20Skinner%20a%20con%C3%A7u%20une%20bombe%20planante%20guid%C3%A9e%20par%20des%20pigeons%20qui%20picoraient%20l'image%20de%20la%20cible%20projet%C3%A9e%20sur%20un%20%C3%A9cran%20dans%20le%20nez%20de%20l'engin%20%3F",
  "explanation": "Avec le projet Pigeon, B. F. Skinner a entraîné des pigeons à picorer l'image de la cible sur un écran. Leurs coups de bec actionnaient les gouvernes de la bombe. Les tests étaient prometteurs, mais l'armée a jugé le projet trop étrange et l'a abandonné en 1944, puis à nouveau dans les années 1950."
 },
 {
  "text": "Les Britanniques ont envisagé pendant la Seconde Guerre mondiale un porte-avions de 600 mètres fait de pykrète, un mélange de glace et de pâte de bois, et un prototype a été construit au Canada.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Britanniques ont envisagé pendant la Seconde Guerre mondiale un porte-avions de 600 mètres fait de pykrète, un mélange de glace et de pâte de bois, et un prototype a été construit au Canada ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Britanniques%20ont%20envisag%C3%A9%20pendant%20la%20Seconde%20Guerre%20mondiale%20un%20porte-avions%20de%20600%20m%C3%A8tres%20fait%20de%20pykr%C3%A8te%2C%20un%20m%C3%A9lange%20de%20glace%20et%20de%20p%C3%A2te%20de%20bois%2C%20et%20un%20prototype%20a%20%C3%A9t%C3%A9%20construit%20au%20Canada%20%3F",
  "explanation": "Le projet Habakkuk visait à construire un immense porte-avions en pykrète, un matériau résistant et lent à fondre. Un prototype de 18 m a été construit en 1943 sur le lac Patricia, dans les Rocheuses canadiennes. Le projet a été abandonné à cause de son coût et de l'évolution de la guerre."
 },
 {
  "text": "Le 3 septembre 1967, toute la Suède est passée de la conduite à gauche à la droite : à 4 h 50, tous les véhicules ont dû s'arrêter, changer de côté, puis attendre 5 h pour repartir.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 3 septembre 1967, toute la Suède est passée de la conduite à gauche à la droite : à 4 h 50, tous les véhicules ont dû s'arrêter, changer de côté, puis attendre 5 h pour repartir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%203%20septembre%201967%2C%20toute%20la%20Su%C3%A8de%20est%20pass%C3%A9e%20de%20la%20conduite%20%C3%A0%20gauche%20%C3%A0%20la%20droite%20%3A%20%C3%A0%204%20h%2050%2C%20tous%20les%20v%C3%A9hicules%20ont%20d%C3%BB%20s'arr%C3%AAter%2C%20changer%20de%20c%C3%B4t%C3%A9%2C%20puis%20attendre%205%20h%20pour%20repartir%20%3F",
  "explanation": "Le « jour H » (Dagen H), la Suède a basculé à la conduite à droite, comme ses voisins. La circulation non essentielle a été interdite, et des milliers de panneaux ont été modifiés pendant la nuit. Le nombre d'accidents a même baissé dans les semaines suivantes, les conducteurs étant plus prudents."
 },
 {
  "text": "En 1978, le cercueil de Charlie Chaplin a été volé dans un cimetière suisse par deux hommes qui réclamaient une rançon à sa veuve, puis retrouvé enterré dans un champ de maïs.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1978, le cercueil de Charlie Chaplin a été volé dans un cimetière suisse par deux hommes qui réclamaient une rançon à sa veuve, puis retrouvé enterré dans un champ de maïs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201978%2C%20le%20cercueil%20de%20Charlie%20Chaplin%20a%20%C3%A9t%C3%A9%20vol%C3%A9%20dans%20un%20cimeti%C3%A8re%20suisse%20par%20deux%20hommes%20qui%20r%C3%A9clamaient%20une%20ran%C3%A7on%20%C3%A0%20sa%20veuve%2C%20puis%20retrouv%C3%A9%20enterr%C3%A9%20dans%20un%20champ%20de%20ma%C3%AFs%20%3F",
  "explanation": "Deux mécaniciens ont déterré le cercueil de Charlie Chaplin à Corsier-sur-Vevey et réclamé 600 000 francs suisses à sa veuve Oona. Elle a refusé de payer. La police a tracé les appels et arrêté les voleurs. Le corps a été retrouvé dans un champ et réinhumé sous une dalle de béton."
 },
 {
  "text": "Le général mexicain Santa Anna a fait enterrer sa jambe amputée avec les honneurs militaires, avant qu'une foule ne la déterre et la traîne dans les rues en 1844.",
  "source": "Perplexity",
  "question": "Est-il vrai que le général mexicain Santa Anna a fait enterrer sa jambe amputée avec les honneurs militaires, avant qu'une foule ne la déterre et la traîne dans les rues en 1844 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20g%C3%A9n%C3%A9ral%20mexicain%20Santa%20Anna%20a%20fait%20enterrer%20sa%20jambe%20amput%C3%A9e%20avec%20les%20honneurs%20militaires%2C%20avant%20qu'une%20foule%20ne%20la%20d%C3%A9terre%20et%20la%20tra%C3%AEne%20dans%20les%20rues%20en%201844%20%3F",
  "explanation": "Antonio López de Santa Anna, président du Mexique à plusieurs reprises, a perdu une jambe en 1838 face aux Français, lors de la « guerre des Pâtisseries ». Il a fait enterrer sa jambe en grande pompe en 1842. Lors d'une révolte contre lui en 1844, une foule l'a déterrée. Sa jambe de bois est exposée dans un musée de l'Illinois."
 },
 {
  "text": "Le Fanta a été inventé pendant la Seconde Guerre mondiale en Allemagne nazie par la filiale de Coca-Cola, privée du sirop américain, à partir notamment de petit-lait et de résidus de pommes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Fanta a été inventé pendant la Seconde Guerre mondiale en Allemagne nazie par la filiale de Coca-Cola, privée du sirop américain, à partir notamment de petit-lait et de résidus de pommes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Fanta%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20pendant%20la%20Seconde%20Guerre%20mondiale%20en%20Allemagne%20nazie%20par%20la%20filiale%20de%20Coca-Cola%2C%20priv%C3%A9e%20du%20sirop%20am%C3%A9ricain%2C%20%C3%A0%20partir%20notamment%20de%20petit-lait%20et%20de%20r%C3%A9sidus%20de%20pommes%20%3F",
  "explanation": "Pendant la guerre, l'embargo empêchait Coca-Cola Allemagne de recevoir le sirop. Son directeur, Max Keith, a créé une nouvelle boisson à partir des ingrédients disponibles, comme le petit-lait et le marc de pommes. Le nom vient du mot allemand « Fantasie ». Le Fanta à l'orange actuel a été relancé en Italie dans les années 1950."
 },
 {
  "text": "La première condamnation pour excès de vitesse date de 1896 en Angleterre : Walter Arnold roulait à 13 km/h au lieu de 3 et fut rattrapé par un policier à vélo après une course-poursuite.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première condamnation pour excès de vitesse date de 1896 en Angleterre : Walter Arnold roulait à 13 km/h au lieu de 3 et fut rattrapé par un policier à vélo après une course-poursuite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20condamnation%20pour%20exc%C3%A8s%20de%20vitesse%20date%20de%201896%20en%20Angleterre%20%3A%20Walter%20Arnold%20roulait%20%C3%A0%2013%20km%2Fh%20au%20lieu%20de%203%20et%20fut%20rattrap%C3%A9%20par%20un%20policier%20%C3%A0%20v%C3%A9lo%20apr%C3%A8s%20une%20course-poursuite%20%3F",
  "explanation": "En 1896, au Royaume-Uni, la vitesse limite des véhicules à moteur en ville était de 2 miles par heure. Walter Arnold roulait à environ 8 miles par heure. Il a été rattrapé par un policier à vélo et condamné à une amende d'un shilling. La loi a été modifiée la même année."
 },
 {
  "text": "En mai 1920, le président Paul Deschanel est tombé de la fenêtre de son train de nuit près de Montargis et s'est présenté en pyjama à un cheminot sceptique, puis à des gardes-barrière.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en mai 1920, le président Paul Deschanel est tombé de la fenêtre de son train de nuit près de Montargis et s'est présenté en pyjama à un cheminot sceptique, puis à des gardes-barrière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20mai%201920%2C%20le%20pr%C3%A9sident%20Paul%20Deschanel%20est%20tomb%C3%A9%20de%20la%20fen%C3%AAtre%20de%20son%20train%20de%20nuit%20pr%C3%A8s%20de%20Montargis%20et%20s'est%20pr%C3%A9sent%C3%A9%20en%20pyjama%20%C3%A0%20un%20cheminot%20sceptique%2C%20puis%20%C3%A0%20des%20gardes-barri%C3%A8re%20%3F",
  "explanation": "Dans la nuit du 23 au 24 mai 1920, le président Paul Deschanel, pris de malaise, est tombé de la fenêtre de son train. Il a marché sur les voies, en pyjama, jusqu'à un poste de garde-barrière, où on a eu du mal à le croire. L'affaire a fait jaser, et il a démissionné quelques mois plus tard pour raisons de santé."
 },
 {
  "text": "En 1567, Hans Staininger, bourgmestre de Braunau, est mort en se brisant le cou après avoir trébuché sur sa propre barbe, longue de 1,4 mètre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1567, Hans Staininger, bourgmestre de Braunau, est mort en se brisant le cou après avoir trébuché sur sa propre barbe, longue de 1,4 mètre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201567%2C%20Hans%20Staininger%2C%20bourgmestre%20de%20Braunau%2C%20est%20mort%20en%20se%20brisant%20le%20cou%20apr%C3%A8s%20avoir%20tr%C3%A9buch%C3%A9%20sur%20sa%20propre%20barbe%2C%20longue%20de%201%2C4%20m%C3%A8tre%20%3F",
  "explanation": "Hans Staininger, célèbre pour sa barbe très longue, la gardait habituellement enroulée dans une bourse en cuir. Lors d'un incendie, il ne l'aurait pas rangée, et aurait trébuché dessus dans la précipitation. Sa barbe est conservée au musée de Braunau am Inn, en Autriche."
 },
 {
  "text": "Les chiens étant interdits à Trinity College, à Cambridge, Lord Byron y garda à la place un ours apprivoisé, suggérant même en plaisantant qu'il pourrait y obtenir un poste de fellow.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chiens étant interdits à Trinity College, à Cambridge, Lord Byron y garda à la place un ours apprivoisé, suggérant même en plaisantant qu'il pourrait y obtenir un poste de fellow ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chiens%20%C3%A9tant%20interdits%20%C3%A0%20Trinity%20College%2C%20%C3%A0%20Cambridge%2C%20Lord%20Byron%20y%20garda%20%C3%A0%20la%20place%20un%20ours%20apprivois%C3%A9%2C%20sugg%C3%A9rant%20m%C3%AAme%20en%20plaisantant%20qu'il%20pourrait%20y%20obtenir%20un%20poste%20de%20fellow%20%3F",
  "explanation": "Lord Byron, étudiant à Cambridge, a contourné l'interdiction des chiens en adoptant un ours, puisque le règlement n'interdisait pas les ours. Il le promenait en laisse. Il plaisantait en disant qu'il le présenterait pour un poste de fellow, comme les universitaires."
 },
 {
  "text": "Mozart a composé en 1782 un canon à six voix intitulé « Leck mich im Arsch », soit « Lèche-moi le cul », que ses éditeurs rebaptisèrent après sa mort.",
  "source": "Perplexity",
  "question": "Est-il vrai que mozart a composé en 1782 un canon à six voix intitulé « Leck mich im Arsch », soit « Lèche-moi le cul », que ses éditeurs rebaptisèrent après sa mort ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20mozart%20a%20compos%C3%A9%20en%201782%20un%20canon%20%C3%A0%20six%20voix%20intitul%C3%A9%20%C2%AB%20Leck%20mich%20im%20Arsch%20%C2%BB%2C%20soit%20%C2%AB%20L%C3%A8che-moi%20le%20cul%20%C2%BB%2C%20que%20ses%20%C3%A9diteurs%20rebaptis%C3%A8rent%20apr%C3%A8s%20sa%20mort%20%3F",
  "explanation": "Mozart avait un goût prononcé pour l'humour scatologique, qu'on retrouve dans ses lettres. Le canon « Leck mich im Arsch » (K. 231) aurait été composé pour ses amis. Après sa mort, l'éditeur a modifié les paroles pour un texte plus convenable. Le texte original a été redécouvert au XXe siècle."
 },
 {
  "text": "Thomas Midgley, inventeur de l'essence au plomb et des CFC, est mort en 1944 étranglé par le système de cordes et de poulies qu'il avait conçu pour sortir de son lit (le coroner a conclu au suicide).",
  "source": "Perplexity",
  "question": "Est-il vrai que thomas Midgley, inventeur de l'essence au plomb et des CFC, est mort en 1944 étranglé par le système de cordes et de poulies qu'il avait conçu pour sortir de son lit (le coroner a conclu au suicide) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20thomas%20Midgley%2C%20inventeur%20de%20l'essence%20au%20plomb%20et%20des%20CFC%2C%20est%20mort%20en%201944%20%C3%A9trangl%C3%A9%20par%20le%20syst%C3%A8me%20de%20cordes%20et%20de%20poulies%20qu'il%20avait%20con%C3%A7u%20pour%20sortir%20de%20son%20lit%20(le%20coroner%20a%20conclu%20au%20suicide)%20%3F",
  "explanation": "Thomas Midgley a mis au point le plomb tétraéthyle pour l'essence et les CFC pour la réfrigération, deux inventions aux conséquences catastrophiques pour la santé et la couche d'ozone. Atteint de la polio, il avait conçu un système de cordes et poulies pour se lever. Il a été retrouvé étranglé dans ce système."
 },
 {
  "text": "En 1961, un B-52 s'est disloqué au-dessus de la Caroline du Nord en larguant deux bombes H de 3,8 mégatonnes, et sur l'une d'elles un seul interrupteur a empêché l'explosion.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1961, un B-52 s'est disloqué au-dessus de la Caroline du Nord en larguant deux bombes H de 3,8 mégatonnes, et sur l'une d'elles un seul interrupteur a empêché l'explosion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201961%2C%20un%20B-52%20s'est%20disloqu%C3%A9%20au-dessus%20de%20la%20Caroline%20du%20Nord%20en%20larguant%20deux%20bombes%20H%20de%203%2C8%20m%C3%A9gatonnes%2C%20et%20sur%20l'une%20d'elles%20un%20seul%20interrupteur%20a%20emp%C3%AAch%C3%A9%20l'explosion%20%3F",
  "explanation": "Le 24 janvier 1961, un B-52 transportant deux bombes thermonucléaires s'est disloqué au-dessus de Goldsboro. Une bombe a été retrouvée dans un champ, son parachute déployé. Selon un document déclassifié en 2013, trois des quatre dispositifs de sécurité avaient échoué, et un seul interrupteur a évité l'explosion."
 },
 {
  "text": "De 1814 à 1846, un éléphant en plâtre de 24 mètres de haut, maquette d'un monument voulu par Napoléon, s'est dressé place de la Bastille, jusqu'à être envahi par les rats.",
  "source": "Perplexity",
  "question": "Est-il vrai que de 1814 à 1846, un éléphant en plâtre de 24 mètres de haut, maquette d'un monument voulu par Napoléon, s'est dressé place de la Bastille, jusqu'à être envahi par les rats ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20de%201814%20%C3%A0%201846%2C%20un%20%C3%A9l%C3%A9phant%20en%20pl%C3%A2tre%20de%2024%20m%C3%A8tres%20de%20haut%2C%20maquette%20d'un%20monument%20voulu%20par%20Napol%C3%A9on%2C%20s'est%20dress%C3%A9%20place%20de%20la%20Bastille%2C%20jusqu'%C3%A0%20%C3%AAtre%20envahi%20par%20les%20rats%20%3F",
  "explanation": "Napoléon voulait ériger une fontaine monumentale en bronze en forme d'éléphant sur la place de la Bastille. Seule une maquette grandeur nature en plâtre a été construite. Elle s'est dégradée et a été envahie par les rats avant d'être démolie en 1846. Victor Hugo l'a immortalisée dans « Les Misérables », où Gavroche y loge."
 },
 {
  "text": "En 1386 à Falaise, une truie qui avait tué un enfant a été jugée, mutilée au visage et aux pattes comme sa victime, puis pendue publiquement.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1386 à Falaise, une truie qui avait tué un enfant a été jugée, mutilée au visage et aux pattes comme sa victime, puis pendue publiquement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201386%20%C3%A0%20Falaise%2C%20une%20truie%20qui%20avait%20tu%C3%A9%20un%20enfant%20a%20%C3%A9t%C3%A9%20jug%C3%A9e%2C%20mutil%C3%A9e%20au%20visage%20et%20aux%20pattes%20comme%20sa%20victime%2C%20puis%20pendue%20publiquement%20%3F",
  "explanation": "Au Moyen Âge, les animaux pouvaient être jugés pour des crimes. À Falaise, en 1386, une truie qui avait blessé mortellement un enfant a été jugée, mutilée, puis pendue, vêtue de vêtements humains. L'exécution a été représentée sur une fresque de l'église de la Sainte-Trinité de Falaise, aujourd'hui disparue."
 },
 {
  "text": "Lors du vol de la Joconde en 1911, le poète Guillaume Apollinaire fut emprisonné et Pablo Picasso interrogé, alors que le voleur était un ancien employé du Louvre, Vincenzo Peruggia.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors du vol de la Joconde en 1911, le poète Guillaume Apollinaire fut emprisonné et Pablo Picasso interrogé, alors que le voleur était un ancien employé du Louvre, Vincenzo Peruggia ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20du%20vol%20de%20la%20Joconde%20en%201911%2C%20le%20po%C3%A8te%20Guillaume%20Apollinaire%20fut%20emprisonn%C3%A9%20et%20Pablo%20Picasso%20interrog%C3%A9%2C%20alors%20que%20le%20voleur%20%C3%A9tait%20un%20ancien%20employ%C3%A9%20du%20Louvre%2C%20Vincenzo%20Peruggia%20%3F",
  "explanation": "Vincenzo Peruggia, vitrier qui avait travaillé au Louvre, a volé la Joconde en sortant avec sous sa blouse. Apollinaire a été soupçonné à cause d'un ami qui avait volé des statuettes au Louvre, et a été emprisonné quelques jours. Picasso, qui avait acheté ces statuettes, a été interrogé. Le tableau a été retrouvé à Florence en 1913."
 },
 {
  "text": "Lors des funérailles de Guillaume le Conquérant en 1087, son corps trop gros pour le sarcophage éclata quand on voulut l'y forcer, selon le chroniqueur Orderic Vital.",
  "source": "Perplexity",
  "question": "Est-il vrai que lors des funérailles de Guillaume le Conquérant en 1087, son corps trop gros pour le sarcophage éclata quand on voulut l'y forcer, selon le chroniqueur Orderic Vital ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lors%20des%20fun%C3%A9railles%20de%20Guillaume%20le%20Conqu%C3%A9rant%20en%201087%2C%20son%20corps%20trop%20gros%20pour%20le%20sarcophage%20%C3%A9clata%20quand%20on%20voulut%20l'y%20forcer%2C%20selon%20le%20chroniqueur%20Orderic%20Vital%20%3F",
  "explanation": "Guillaume le Conquérant est mort en 1087 après une chute de cheval. Lors de ses funérailles à Caen, son corps, enflé par la décomposition, ne rentrait pas dans le sarcophage. Selon le moine Orderic Vital, il a éclaté quand on a voulu l'y forcer, dégageant une odeur insupportable qui a fait fuir l'assistance."
 },
 {
  "text": "Sous la Révolution française, les journées ont officiellement été découpées en 10 heures de 100 minutes de 100 secondes, avant que cette heure décimale soit suspendue en 1795.",
  "source": "Perplexity",
  "question": "Est-il vrai que sous la Révolution française, les journées ont officiellement été découpées en 10 heures de 100 minutes de 100 secondes, avant que cette heure décimale soit suspendue en 1795 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sous%20la%20R%C3%A9volution%20fran%C3%A7aise%2C%20les%20journ%C3%A9es%20ont%20officiellement%20%C3%A9t%C3%A9%20d%C3%A9coup%C3%A9es%20en%2010%20heures%20de%20100%20minutes%20de%20100%20secondes%2C%20avant%20que%20cette%20heure%20d%C3%A9cimale%20soit%20suspendue%20en%201795%20%3F",
  "explanation": "En 1793, la Convention a instauré le temps décimal avec le calendrier républicain. Des horloges à 10 heures ont été fabriquées. La population ne l'a pas adopté, et l'obligation a été suspendue en 1795. Le système métrique, lancé à la même époque, a eu plus de succès."
 },
 {
  "text": "En 1393, lors du Bal des Ardents, des danseurs déguisés en hommes sauvages prirent feu ; le roi Charles VI ne fut sauvé que parce que la duchesse de Berry le couvrit de sa robe.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1393, lors du Bal des Ardents, des danseurs déguisés en hommes sauvages prirent feu ; le roi Charles VI ne fut sauvé que parce que la duchesse de Berry le couvrit de sa robe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201393%2C%20lors%20du%20Bal%20des%20Ardents%2C%20des%20danseurs%20d%C3%A9guis%C3%A9s%20en%20hommes%20sauvages%20prirent%20feu%20%3B%20le%20roi%20Charles%20VI%20ne%20fut%20sauv%C3%A9%20que%20parce%20que%20la%20duchesse%20de%20Berry%20le%20couvrit%20de%20sa%20robe%20%3F",
  "explanation": "Lors d'un bal masqué à l'hôtel Saint-Pol en janvier 1393, le roi Charles VI et des seigneurs étaient déguisés en « hommes sauvages », avec des costumes en lin enduits de poix. Une torche les a enflammés. Quatre danseurs sont morts. La duchesse de Berry a sauvé le roi en l'enveloppant dans sa robe."
 },
 {
  "text": "Bir Tawil, désert de 2 060 km² entre l'Égypte et le Soudan, n'est revendiqué par aucun des deux : le réclamer leur ferait perdre leurs droits sur le triangle de Halaïb, voisin et plus riche.",
  "source": "Perplexity",
  "question": "Est-il vrai que bir Tawil, désert de 2 060 km² entre l'Égypte et le Soudan, n'est revendiqué par aucun des deux : le réclamer leur ferait perdre leurs droits sur le triangle de Halaïb, voisin et plus riche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20bir%20Tawil%2C%20d%C3%A9sert%20de%202%20060%20km%C2%B2%20entre%20l'%C3%89gypte%20et%20le%20Soudan%2C%20n'est%20revendiqu%C3%A9%20par%20aucun%20des%20deux%20%3A%20le%20r%C3%A9clamer%20leur%20ferait%20perdre%20leurs%20droits%20sur%20le%20triangle%20de%20Hala%C3%AFb%2C%20voisin%20et%20plus%20riche%20%3F",
  "explanation": "Le tracé de 1899 place Bir Tawil au Soudan et le triangle de Halaïb en Égypte, alors qu'une frontière administrative de 1902 fait l'inverse. Chaque pays revendique le tracé qui lui donne Halaïb. Bir Tawil, aride et sans ressources, est ainsi l'une des rares terres habitables au monde à ne pas être revendiquée."
 },
 {
  "text": "L'île des Faisans, sur la Bidassoa, change d'administration tous les six mois : espagnole du 1er février au 31 juillet, française du 1er août au 31 janvier, en vertu d'un accord de 1901.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'île des Faisans, sur la Bidassoa, change d'administration tous les six mois : espagnole du 1er février au 31 juillet, française du 1er août au 31 janvier, en vertu d'un accord de 1901 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%AEle%20des%20Faisans%2C%20sur%20la%20Bidassoa%2C%20change%20d'administration%20tous%20les%20six%20mois%20%3A%20espagnole%20du%201er%20f%C3%A9vrier%20au%2031%20juillet%2C%20fran%C3%A7aise%20du%201er%20ao%C3%BBt%20au%2031%20janvier%2C%20en%20vertu%20d'un%20accord%20de%201901%20%3F",
  "explanation": "L'île des Faisans est un condominium franco-espagnol. Elle a accueilli la signature du traité des Pyrénées en 1659 et le mariage de Louis XIV a été négocié là. Elle est administrée alternativement par les villes de Hendaye et d'Irun. L'accès au public est restreint."
 },
 {
  "text": "Les 1 191 habitants de Point Roberts, aux États-Unis, doivent traverser 40 km de Canada, et donc deux frontières, pour rejoindre par la route le reste de leur pays.",
  "source": "Perplexity",
  "question": "Est-il vrai que les 1 191 habitants de Point Roberts, aux États-Unis, doivent traverser 40 km de Canada, et donc deux frontières, pour rejoindre par la route le reste de leur pays ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%201%20191%20habitants%20de%20Point%20Roberts%2C%20aux%20%C3%89tats-Unis%2C%20doivent%20traverser%2040%20km%20de%20Canada%2C%20et%20donc%20deux%20fronti%C3%A8res%2C%20pour%20rejoindre%20par%20la%20route%20le%20reste%20de%20leur%20pays%20%3F",
  "explanation": "Point Roberts se trouve au bout d'une péninsule rattachée au Canada. Le 49e parallèle, choisi comme frontière en 1846, a coupé cette pointe du reste des États-Unis. Ses habitants passent la frontière canadienne pour faire leurs courses ou aller à l'école. Pendant la pandémie de Covid, la fermeture des frontières a durement isolé la commune."
 },
 {
  "text": "Llívia est une ville espagnole encerclée par la France : en 1659, l'Espagne a cédé les « villages » de Cerdagne, et Llívia, ancienne capitale, avait juridiquement le statut de « ville ».",
  "source": "Perplexity",
  "question": "Est-il vrai que llívia est une ville espagnole encerclée par la France : en 1659, l'Espagne a cédé les « villages » de Cerdagne, et Llívia, ancienne capitale, avait juridiquement le statut de « ville » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20ll%C3%ADvia%20est%20une%20ville%20espagnole%20encercl%C3%A9e%20par%20la%20France%20%3A%20en%201659%2C%20l'Espagne%20a%20c%C3%A9d%C3%A9%20les%20%C2%AB%20villages%20%C2%BB%20de%20Cerdagne%2C%20et%20Ll%C3%ADvia%2C%20ancienne%20capitale%2C%20avait%20juridiquement%20le%20statut%20de%20%C2%AB%20ville%20%C2%BB%20%3F",
  "explanation": "Le traité des Pyrénées de 1659 a cédé à la France 33 villages de Cerdagne. Llívia, qui était une ville et non un village, est restée espagnole. Elle est entourée par le territoire français, et reliée à l'Espagne par une route neutre. Elle abrite l'une des plus anciennes pharmacies d'Europe."
 },
 {
  "text": "À Singapour, la vente de chewing-gum est interdite depuis le 3 janvier 1992 ; seuls les chewing-gums thérapeutiques sont tolérés depuis 2004, en pharmacie et avec enregistrement de l'acheteur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Singapour, la vente de chewing-gum est interdite depuis le 3 janvier 1992 ; seuls les chewing-gums thérapeutiques sont tolérés depuis 2004, en pharmacie et avec enregistrement de l'acheteur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Singapour%2C%20la%20vente%20de%20chewing-gum%20est%20interdite%20depuis%20le%203%20janvier%201992%20%3B%20seuls%20les%20chewing-gums%20th%C3%A9rapeutiques%20sont%20tol%C3%A9r%C3%A9s%20depuis%202004%2C%20en%20pharmacie%20et%20avec%20enregistrement%20de%20l'acheteur%20%3F",
  "explanation": "Singapour a interdit l'importation et la vente de chewing-gum en 1992, car les déchets collés posaient des problèmes de propreté et bloquaient même les portes du métro. Depuis un accord commercial avec les États-Unis en 2004, les chewing-gums à usage thérapeutique, comme ceux à la nicotine, sont autorisés en pharmacie."
 },
 {
  "text": "À Longyearbyen, au Svalbard, on n'enterre plus de corps depuis 1950 : le permafrost les empêche de se décomposer. Les défunts sont inhumés sur le continent norvégien.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Longyearbyen, au Svalbard, on n'enterre plus de corps depuis 1950 : le permafrost les empêche de se décomposer. Les défunts sont inhumés sur le continent norvégien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Longyearbyen%2C%20au%20Svalbard%2C%20on%20n'enterre%20plus%20de%20corps%20depuis%201950%20%3A%20le%20permafrost%20les%20emp%C3%AAche%20de%20se%20d%C3%A9composer.%20Les%20d%C3%A9funts%20sont%20inhum%C3%A9s%20sur%20le%20continent%20norv%C3%A9gien%20%3F",
  "explanation": "À Longyearbyen, les chercheurs ont découvert que les corps enterrés lors de l'épidémie de grippe espagnole de 1918 ne s'étaient pas décomposés, et contenaient encore le virus. Depuis, les enterrements sont interdits. Les personnes gravement malades sont aussi évacuées vers le continent."
 },
 {
  "text": "L'archipel norvégien du Svalbard est une zone entièrement sans visa : les ressortissants des 49 États parties au traité de 1920 peuvent s'y installer et y travailler librement.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'archipel norvégien du Svalbard est une zone entièrement sans visa : les ressortissants des 49 États parties au traité de 1920 peuvent s'y installer et y travailler librement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'archipel%20norv%C3%A9gien%20du%20Svalbard%20est%20une%20zone%20enti%C3%A8rement%20sans%20visa%20%3A%20les%20ressortissants%20des%2049%20%C3%89tats%20parties%20au%20trait%C3%A9%20de%201920%20peuvent%20s'y%20installer%20et%20y%20travailler%20librement%20%3F",
  "explanation": "Le traité du Svalbard de 1920 reconnaît la souveraineté de la Norvège, mais garantit aux ressortissants des pays signataires le droit de s'y installer et d'y exercer des activités économiques. Toute personne doit cependant pouvoir subvenir à ses besoins. Pour y aller depuis la Norvège continentale, il faut parfois traverser l'espace Schengen."
 },
 {
  "text": "Vulcan Point, aux Philippines, est une île dans un lac, sur une île, dans un lac, sur une île : le lac du cratère du Taal, sur Volcano Island, dans le lac Taal, sur l'île de Luçon.",
  "source": "Perplexity",
  "question": "Est-il vrai que vulcan Point, aux Philippines, est une île dans un lac, sur une île, dans un lac, sur une île : le lac du cratère du Taal, sur Volcano Island, dans le lac Taal, sur l'île de Luçon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vulcan%20Point%2C%20aux%20Philippines%2C%20est%20une%20%C3%AEle%20dans%20un%20lac%2C%20sur%20une%20%C3%AEle%2C%20dans%20un%20lac%2C%20sur%20une%20%C3%AEle%20%3A%20le%20lac%20du%20crat%C3%A8re%20du%20Taal%2C%20sur%20Volcano%20Island%2C%20dans%20le%20lac%20Taal%2C%20sur%20l'%C3%AEle%20de%20Lu%C3%A7on%20%3F",
  "explanation": "Le volcan Taal se trouve sur l'île de Volcano Island, au milieu du lac Taal, sur l'île de Luçon. Le cratère principal contenait un lac, au milieu duquel se trouvait Vulcan Point. L'éruption de 2020 a profondément modifié le cratère et son lac."
 },
 {
  "text": "Pendant des décennies, le Canada et le Danemark se sont disputé l'île Hans en y laissant tour à tour drapeaux, whisky et schnaps, avant de la couper en deux en juin 2022.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant des décennies, le Canada et le Danemark se sont disputé l'île Hans en y laissant tour à tour drapeaux, whisky et schnaps, avant de la couper en deux en juin 2022 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20des%20d%C3%A9cennies%2C%20le%20Canada%20et%20le%20Danemark%20se%20sont%20disput%C3%A9%20l'%C3%AEle%20Hans%20en%20y%20laissant%20tour%20%C3%A0%20tour%20drapeaux%2C%20whisky%20et%20schnaps%2C%20avant%20de%20la%20couper%20en%20deux%20en%20juin%202022%20%3F",
  "explanation": "L'île Hans est un rocher inhabité de 1,3 km² entre le Groenland et le Canada. Les militaires danois et canadiens y plantaient leurs drapeaux, y laissant une bouteille de schnaps ou de whisky. On a parlé de « guerre du whisky ». En 2022, un accord l'a partagée, créant une frontière terrestre entre les deux pays."
 },
 {
  "text": "En Finlande, les amendes sont calculées selon les revenus : en 2023, le millionnaire Anders Wiklöf a dû payer 121 000 € pour avoir roulé à 82 km/h au lieu de 50.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en Finlande, les amendes sont calculées selon les revenus : en 2023, le millionnaire Anders Wiklöf a dû payer 121 000 € pour avoir roulé à 82 km/h au lieu de 50 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20Finlande%2C%20les%20amendes%20sont%20calcul%C3%A9es%20selon%20les%20revenus%20%3A%20en%202023%2C%20le%20millionnaire%20Anders%20Wikl%C3%B6f%20a%20d%C3%BB%20payer%20121%20000%20%E2%82%AC%20pour%20avoir%20roul%C3%A9%20%C3%A0%2082%20km%2Fh%20au%20lieu%20de%2050%20%3F",
  "explanation": "En Finlande, les amendes pour certaines infractions sont des « jours-amendes » proportionnels aux revenus. Pour les plus riches, les montants peuvent atteindre des sommes très élevées. Anders Wiklöf, homme d'affaires des Åland, a déclaré qu'il aurait préféré que l'argent finance des hôpitaux."
 },
 {
  "text": "Monowi, au Nebraska, compte une seule habitante, Elsie Eiler, à la fois maire, secrétaire, trésorière et bibliothécaire, qui s'est délivré à elle-même sa licence de débit de boissons.",
  "source": "Perplexity",
  "question": "Est-il vrai que monowi, au Nebraska, compte une seule habitante, Elsie Eiler, à la fois maire, secrétaire, trésorière et bibliothécaire, qui s'est délivré à elle-même sa licence de débit de boissons ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20monowi%2C%20au%20Nebraska%2C%20compte%20une%20seule%20habitante%2C%20Elsie%20Eiler%2C%20%C3%A0%20la%20fois%20maire%2C%20secr%C3%A9taire%2C%20tr%C3%A9sori%C3%A8re%20et%20biblioth%C3%A9caire%2C%20qui%20s'est%20d%C3%A9livr%C3%A9%20%C3%A0%20elle-m%C3%AAme%20sa%20licence%20de%20d%C3%A9bit%20de%20boissons%20%3F",
  "explanation": "Monowi, autrefois une petite ville ferroviaire, a perdu ses habitants au fil des décennies. Depuis la mort de son mari en 2004, Elsie Eiler en est la seule habitante. Elle tient la taverne et entretient une bibliothèque de milliers de livres. Elle paie des taxes à elle-même et renouvelle chaque année sa licence."
 },
 {
  "text": "À Whittier, en Alaska, presque toute la population vit dans un seul immeuble, Begich Towers, qui abrite aussi la poste, une épicerie, une laverie et une église.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Whittier, en Alaska, presque toute la population vit dans un seul immeuble, Begich Towers, qui abrite aussi la poste, une épicerie, une laverie et une église ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Whittier%2C%20en%20Alaska%2C%20presque%20toute%20la%20population%20vit%20dans%20un%20seul%20immeuble%2C%20Begich%20Towers%2C%20qui%20abrite%20aussi%20la%20poste%2C%20une%20%C3%A9picerie%2C%20une%20laverie%20et%20une%20%C3%A9glise%20%3F",
  "explanation": "Whittier, accessible par un tunnel ferroviaire et routier à voie unique, était une base militaire. La plupart des quelque 270 habitants vivent dans Begich Towers, un ancien bâtiment militaire de 14 étages. L'école est reliée à l'immeuble par un tunnel, utile pendant les longs hivers."
 },
 {
  "text": "Les États-Unis envoient chaque année à Cuba un chèque de 4 085 dollars pour le loyer de Guantánamo, mais Cuba n'en a encaissé qu'un seul depuis la révolution, en 1959.",
  "source": "Perplexity",
  "question": "Est-il vrai que les États-Unis envoient chaque année à Cuba un chèque de 4 085 dollars pour le loyer de Guantánamo, mais Cuba n'en a encaissé qu'un seul depuis la révolution, en 1959 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%89tats-Unis%20envoient%20chaque%20ann%C3%A9e%20%C3%A0%20Cuba%20un%20ch%C3%A8que%20de%204%20085%20dollars%20pour%20le%20loyer%20de%20Guant%C3%A1namo%2C%20mais%20Cuba%20n'en%20a%20encaiss%C3%A9%20qu'un%20seul%20depuis%20la%20r%C3%A9volution%2C%20en%201959%20%3F",
  "explanation": "Le bail de 1903 sur la baie de Guantánamo prévoyait un loyer annuel, fixé en 1934 à environ 4 085 dollars. Après la révolution de 1959, le gouvernement de Fidel Castro a refusé d'encaisser les chèques, considérant la présence américaine comme illégale. Il n'en aurait encaissé qu'un seul, par erreur selon Castro."
 },
 {
  "text": "Une colline de 305 mètres en Nouvelle-Zélande porte un nom maori de 85 lettres : Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une colline de 305 mètres en Nouvelle-Zélande porte un nom maori de 85 lettres : Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20colline%20de%20305%20m%C3%A8tres%20en%20Nouvelle-Z%C3%A9lande%20porte%20un%20nom%20maori%20de%2085%20lettres%20%3A%20Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu%20%3F",
  "explanation": "Ce nom maori, souvent abrégé en Taumata, signifie à peu près « le sommet où Tamatea, l'homme aux grands genoux, qui a escaladé et avalé les montagnes, qui a voyagé sur les terres, a joué de la flûte pour sa bien-aimée ». C'est l'un des plus longs noms de lieu au monde."
 },
 {
  "text": "Une commune de la Somme s'appelle simplement Y, et ses 87 habitants sont appelés les Ypsiloniens.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une commune de la Somme s'appelle simplement Y, et ses 87 habitants sont appelés les Ypsiloniens ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20commune%20de%20la%20Somme%20s'appelle%20simplement%20Y%2C%20et%20ses%2087%20habitants%20sont%20appel%C3%A9s%20les%20Ypsiloniens%20%3F",
  "explanation": "Y est une petite commune de la Somme, l'une des rares au monde à avoir un nom d'une seule lettre. Son nom pourrait venir de la forme d'une intersection de routes. Ses habitants sont appelés Ypsiloniens."
 },
 {
  "text": "La plus longue frontière terrestre de la France est celle qu'elle partage avec le Brésil, via la Guyane : 730 km, contre 623 km avec l'Espagne.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus longue frontière terrestre de la France est celle qu'elle partage avec le Brésil, via la Guyane : 730 km, contre 623 km avec l'Espagne ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20longue%20fronti%C3%A8re%20terrestre%20de%20la%20France%20est%20celle%20qu'elle%20partage%20avec%20le%20Br%C3%A9sil%2C%20via%20la%20Guyane%20%3A%20730%20km%2C%20contre%20623%20km%20avec%20l'Espagne%20%3F",
  "explanation": "La Guyane étant une région française, la frontière avec le Brésil, le long du fleuve Oyapock, est une frontière de la France, la plus longue frontière terrestre. Un pont relie les deux rives depuis 2017. La frontière avec l'Espagne arrive en deuxième position."
 },
 {
  "text": "Le Peñón de Vélez de la Gomera, rocher espagnol, est relié au Maroc depuis qu'une tempête de 1930 a formé un isthme de sable, créant une frontière terrestre de seulement 85 mètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Peñón de Vélez de la Gomera, rocher espagnol, est relié au Maroc depuis qu'une tempête de 1930 a formé un isthme de sable, créant une frontière terrestre de seulement 85 mètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Pe%C3%B1%C3%B3n%20de%20V%C3%A9lez%20de%20la%20Gomera%2C%20rocher%20espagnol%2C%20est%20reli%C3%A9%20au%20Maroc%20depuis%20qu'une%20temp%C3%AAte%20de%201930%20a%20form%C3%A9%20un%20isthme%20de%20sable%2C%20cr%C3%A9ant%20une%20fronti%C3%A8re%20terrestre%20de%20seulement%2085%20m%C3%A8tres%20%3F",
  "explanation": "Le Peñón de Vélez de la Gomera est un territoire espagnol au large de la côte marocaine. Une tempête a accumulé assez de sable pour le relier au continent par un isthme. La frontière terrestre avec le Maroc mesure environ 85 m, l'une des plus courtes au monde."
 },
 {
  "text": "Jusqu'en mars 2023, la principale route d'accès à Gibraltar traversait la piste de l'aéroport et était fermée plus de 15 fois par jour pour laisser passer les avions.",
  "source": "Perplexity",
  "question": "Est-il vrai que jusqu'en mars 2023, la principale route d'accès à Gibraltar traversait la piste de l'aéroport et était fermée plus de 15 fois par jour pour laisser passer les avions ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20jusqu'en%20mars%202023%2C%20la%20principale%20route%20d'acc%C3%A8s%20%C3%A0%20Gibraltar%20traversait%20la%20piste%20de%20l'a%C3%A9roport%20et%20%C3%A9tait%20ferm%C3%A9e%20plus%20de%2015%20fois%20par%20jour%20pour%20laisser%20passer%20les%20avions%20%3F",
  "explanation": "À Gibraltar, l'aéroport a été construit sur l'isthme qui relie le territoire à l'Espagne, faute de place. Winston Churchill Avenue traversait la piste, et des barrières l'interrompaient à chaque atterrissage et décollage. En 2023, un tunnel routier a ouvert sous la piste."
 },
 {
  "text": "Berne n'est pas officiellement la capitale de la Suisse : aucun texte ne lui donne ce titre, elle n'a que le statut de « ville fédérale », siège du gouvernement.",
  "source": "Perplexity",
  "question": "Est-il vrai que berne n'est pas officiellement la capitale de la Suisse : aucun texte ne lui donne ce titre, elle n'a que le statut de « ville fédérale », siège du gouvernement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20berne%20n'est%20pas%20officiellement%20la%20capitale%20de%20la%20Suisse%20%3A%20aucun%20texte%20ne%20lui%20donne%20ce%20titre%2C%20elle%20n'a%20que%20le%20statut%20de%20%C2%AB%20ville%20f%C3%A9d%C3%A9rale%20%C2%BB%2C%20si%C3%A8ge%20du%20gouvernement%20%3F",
  "explanation": "La Constitution suisse ne désigne aucune capitale. Berne, choisie en 1848 comme siège des autorités fédérales, est appelée « ville fédérale » (Bundesstadt). Ce choix évitait de froisser Zurich et Genève, grandes villes concurrentes. Dans la pratique, Berne est considérée comme la capitale."
 },
 {
  "text": "Les citoyens monégasques ont l'interdiction d'entrer dans les salles de jeu du casino de Monte-Carlo.",
  "source": "Perplexity",
  "question": "Est-il vrai que les citoyens monégasques ont l'interdiction d'entrer dans les salles de jeu du casino de Monte-Carlo ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20citoyens%20mon%C3%A9gasques%20ont%20l'interdiction%20d'entrer%20dans%20les%20salles%20de%20jeu%20du%20casino%20de%20Monte-Carlo%20%3F",
  "explanation": "Depuis le XIXe siècle, il est interdit aux Monégasques d'entrer dans les salles de jeu de Monaco, et de jouer. Le prince Charles III, qui a fondé le casino, voulait protéger ses sujets de la ruine. Ses revenus finançaient les dépenses publiques, ce qui a permis de supprimer l'impôt sur le revenu."
 },
 {
  "text": "Monaco, deuxième plus petit État du monde avec 2,08 km², est plus petit que Central Park à New York, qui s'étend sur 3,41 km².",
  "source": "Perplexity",
  "question": "Est-il vrai que monaco, deuxième plus petit État du monde avec 2,08 km², est plus petit que Central Park à New York, qui s'étend sur 3,41 km² ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20monaco%2C%20deuxi%C3%A8me%20plus%20petit%20%C3%89tat%20du%20monde%20avec%202%2C08%20km%C2%B2%2C%20est%20plus%20petit%20que%20Central%20Park%20%C3%A0%20New%20York%2C%20qui%20s'%C3%A9tend%20sur%203%2C41%20km%C2%B2%20%3F",
  "explanation": "Monaco, d'une superficie d'environ 2 km², est le deuxième plus petit État au monde, après le Vatican. Central Park, à Manhattan, mesure environ 3,4 km². La principauté compte pourtant environ 38 000 habitants, l'une des plus fortes densités au monde."
 },
 {
  "text": "Au Québec, Saint-Louis-du-Ha! Ha! détient depuis 2017 le record Guinness du nom de ville comptant le plus de points d'exclamation : deux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au Québec, Saint-Louis-du-Ha! Ha! détient depuis 2017 le record Guinness du nom de ville comptant le plus de points d'exclamation : deux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20Qu%C3%A9bec%2C%20Saint-Louis-du-Ha!%20Ha!%20d%C3%A9tient%20depuis%202017%20le%20record%20Guinness%20du%20nom%20de%20ville%20comptant%20le%20plus%20de%20points%20d'exclamation%20%3A%20deux%20%3F",
  "explanation": "Le nom Saint-Louis-du-Ha! Ha! viendrait de « haha », un vieux mot français désignant un obstacle inattendu sur un chemin, comme un fossé ou une impasse. Le Guinness a reconnu en 2017 le record du plus grand nombre de points d'exclamation dans un nom de ville. Une autre ville, Westward Ho!, en Angleterre, n'en compte qu'un."
 },
 {
  "text": "Le parc national du Nord-Est du Groenland couvre 972 000 km², ce qui le rend plus grand que 166 des 195 pays du monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le parc national du Nord-Est du Groenland couvre 972 000 km², ce qui le rend plus grand que 166 des 195 pays du monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20parc%20national%20du%20Nord-Est%20du%20Groenland%20couvre%20972%20000%20km%C2%B2%2C%20ce%20qui%20le%20rend%20plus%20grand%20que%20166%20des%20195%20pays%20du%20monde%20%3F",
  "explanation": "Le parc national du Nord-Est du Groenland, créé en 1974, est le plus grand parc national du monde. Il est en grande partie couvert de glace. Il abrite des ours polaires, des bœufs musqués et des morses. Il n'a pas d'habitants permanents, à part du personnel de stations."
 },
 {
  "text": "À Churchill, au Manitoba, les ours polaires qui s'approchent trop de la ville sont enfermés dans une « prison à ours » jusqu'à ce que la baie d'Hudson gèle, puis relâchés.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Churchill, au Manitoba, les ours polaires qui s'approchent trop de la ville sont enfermés dans une « prison à ours » jusqu'à ce que la baie d'Hudson gèle, puis relâchés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Churchill%2C%20au%20Manitoba%2C%20les%20ours%20polaires%20qui%20s'approchent%20trop%20de%20la%20ville%20sont%20enferm%C3%A9s%20dans%20une%20%C2%AB%20prison%20%C3%A0%20ours%20%C2%BB%20jusqu'%C3%A0%20ce%20que%20la%20baie%20d'Hudson%20g%C3%A8le%2C%20puis%20rel%C3%A2ch%C3%A9s%20%3F",
  "explanation": "Churchill, surnommée la « capitale mondiale de l'ours polaire », se trouve sur le chemin de migration des ours, qui attendent que la baie gèle pour chasser le phoque. Les ours trop proches sont capturés et placés dans un ancien hangar militaire. Ils sont ensuite relâchés sur la glace, parfois par hélicoptère."
 },
 {
  "text": "Un chat nommé Stubbs a été le « maire » honoraire de Talkeetna, en Alaska, pendant 20 ans, de 1997 jusqu'à sa mort en 2017.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un chat nommé Stubbs a été le « maire » honoraire de Talkeetna, en Alaska, pendant 20 ans, de 1997 jusqu'à sa mort en 2017 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20chat%20nomm%C3%A9%20Stubbs%20a%20%C3%A9t%C3%A9%20le%20%C2%AB%20maire%20%C2%BB%20honoraire%20de%20Talkeetna%2C%20en%20Alaska%2C%20pendant%2020%20ans%2C%20de%201997%20jusqu'%C3%A0%20sa%20mort%20en%202017%20%3F",
  "explanation": "Selon la légende locale, les habitants de Talkeetna, mécontents des candidats à l'élection, ont élu le chat Stubbs comme maire honoraire. Talkeetna n'est pas une commune constituée et n'a pas de vrai maire. Stubbs était une attraction touristique : il buvait son eau dans un verre à vin."
 },
 {
  "text": "Dans le village japonais de Nagoro, Tsukimi Ayano a fabriqué plus de 400 poupées ; environ 350 peuplent les rues, soit plus de dix fois le nombre d'habitants restants.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans le village japonais de Nagoro, Tsukimi Ayano a fabriqué plus de 400 poupées ; environ 350 peuplent les rues, soit plus de dix fois le nombre d'habitants restants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20le%20village%20japonais%20de%20Nagoro%2C%20Tsukimi%20Ayano%20a%20fabriqu%C3%A9%20plus%20de%20400%20poup%C3%A9es%20%3B%20environ%20350%20peuplent%20les%20rues%2C%20soit%20plus%20de%20dix%20fois%20le%20nombre%20d'habitants%20restants%20%3F",
  "explanation": "Tsukimi Ayano, de retour dans son village natal de Nagoro, a commencé à fabriquer des poupées grandeur nature pour représenter ses voisins morts ou partis. On en trouve à l'école, aux arrêts de bus, dans les champs. Le village, surnommé « vallée des poupées », compte moins de 30 habitants."
 },
 {
  "text": "Le drapeau du Paraguay est le seul drapeau national dont les deux faces diffèrent : le sceau national d'un côté, le sceau du Trésor avec un lion de l'autre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le drapeau du Paraguay est le seul drapeau national dont les deux faces diffèrent : le sceau national d'un côté, le sceau du Trésor avec un lion de l'autre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20drapeau%20du%20Paraguay%20est%20le%20seul%20drapeau%20national%20dont%20les%20deux%20faces%20diff%C3%A8rent%20%3A%20le%20sceau%20national%20d'un%20c%C3%B4t%C3%A9%2C%20le%20sceau%20du%20Tr%C3%A9sor%20avec%20un%20lion%20de%20l'autre%20%3F",
  "explanation": "Le drapeau du Paraguay a trois bandes rouge, blanc et bleu. Au recto figure le blason national, avec une étoile, et au verso le sceau du Trésor, avec un lion et la devise « Paz y Justicia ». Les deux faces différentes compliquent la fabrication. Le drapeau de l'État américain de l'Oregon a aussi deux faces différentes."
 },
 {
  "text": "Le drapeau du Mozambique est le seul drapeau national à représenter un fusil d'assaut moderne : une kalachnikov AK-47 avec sa baïonnette.",
  "source": "Perplexity",
  "question": "Est-il vrai que le drapeau du Mozambique est le seul drapeau national à représenter un fusil d'assaut moderne : une kalachnikov AK-47 avec sa baïonnette ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20drapeau%20du%20Mozambique%20est%20le%20seul%20drapeau%20national%20%C3%A0%20repr%C3%A9senter%20un%20fusil%20d'assaut%20moderne%20%3A%20une%20kalachnikov%20AK-47%20avec%20sa%20ba%C3%AFonnette%20%3F",
  "explanation": "Le drapeau du Mozambique, adopté en 1983, représente une kalachnikov croisée avec une houe sur un livre ouvert. La kalachnikov symbolise la défense et la vigilance, la houe l'agriculture et le livre l'éducation. Des propositions pour retirer le fusil ont été rejetées."
 },
 {
  "text": "Le vendredi 30 décembre 2011 n'a jamais existé aux Samoa : le pays a sauté ce jour en passant de l'autre côté de la ligne de changement de date.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vendredi 30 décembre 2011 n'a jamais existé aux Samoa : le pays a sauté ce jour en passant de l'autre côté de la ligne de changement de date ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20vendredi%2030%20d%C3%A9cembre%202011%20n'a%20jamais%20exist%C3%A9%20aux%20Samoa%20%3A%20le%20pays%20a%20saut%C3%A9%20ce%20jour%20en%20passant%20de%20l'autre%20c%C3%B4t%C3%A9%20de%20la%20ligne%20de%20changement%20de%20date%20%3F",
  "explanation": "Samoa a changé de côté de la ligne de changement de date pour s'aligner sur ses partenaires commerciaux, l'Australie et la Nouvelle-Zélande. Le jeudi 29 décembre 2011 a été directement suivi du samedi 31 décembre. Les employés ont été payés pour le vendredi manquant."
 },
 {
  "text": "En passant de la Chine à l'Afghanistan par le col de Wakhjir, il faut reculer sa montre de 3 h 30, le plus grand changement d'heure à une frontière terrestre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en passant de la Chine à l'Afghanistan par le col de Wakhjir, il faut reculer sa montre de 3 h 30, le plus grand changement d'heure à une frontière terrestre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20passant%20de%20la%20Chine%20%C3%A0%20l'Afghanistan%20par%20le%20col%20de%20Wakhjir%2C%20il%20faut%20reculer%20sa%20montre%20de%203%20h%2030%2C%20le%20plus%20grand%20changement%20d'heure%20%C3%A0%20une%20fronti%C3%A8re%20terrestre%20%3F",
  "explanation": "La Chine utilise un seul fuseau horaire, celui de Pékin (UTC+8), sur tout son territoire. L'Afghanistan est à UTC+4:30. Au col de Wakhjir, dans les montagnes du Pamir, la différence est donc de 3 h 30. Le passage est fermé et peu fréquenté."
 },
 {
  "text": "La surface de Pluton, environ 17,7 millions de km², n'est que légèrement supérieure à celle de la Russie, environ 17,1 millions de km².",
  "source": "Perplexity",
  "question": "Est-il vrai que la surface de Pluton, environ 17,7 millions de km², n'est que légèrement supérieure à celle de la Russie, environ 17,1 millions de km² ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20surface%20de%20Pluton%2C%20environ%2017%2C7%20millions%20de%20km%C2%B2%2C%20n'est%20que%20l%C3%A9g%C3%A8rement%20sup%C3%A9rieure%20%C3%A0%20celle%20de%20la%20Russie%2C%20environ%2017%2C1%20millions%20de%20km%C2%B2%20%3F",
  "explanation": "Pluton a un rayon d'environ 1 188 km, soit une surface d'environ 17,7 millions de km². La Russie, plus grand pays du monde, s'étend sur environ 17,1 millions de km². Pluton est donc à peine plus grande que la Russie en surface."
 },
 {
  "text": "Le Liechtenstein et l'Ouzbékistan sont les deux seuls pays doublement enclavés : pour atteindre la mer, il faut traverser au moins deux frontières (si l'on considère la Caspienne comme un lac).",
  "source": "Perplexity",
  "question": "Est-il vrai que le Liechtenstein et l'Ouzbékistan sont les deux seuls pays doublement enclavés : pour atteindre la mer, il faut traverser au moins deux frontières (si l'on considère la Caspienne comme un lac) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Liechtenstein%20et%20l'Ouzb%C3%A9kistan%20sont%20les%20deux%20seuls%20pays%20doublement%20enclav%C3%A9s%20%3A%20pour%20atteindre%20la%20mer%2C%20il%20faut%20traverser%20au%20moins%20deux%20fronti%C3%A8res%20(si%20l'on%20consid%C3%A8re%20la%20Caspienne%20comme%20un%20lac)%20%3F",
  "explanation": "Un pays doublement enclavé est entouré uniquement par des pays eux-mêmes sans accès à la mer. Le Liechtenstein est entouré par la Suisse et l'Autriche, l'Ouzbékistan par le Kazakhstan, le Kirghizistan, le Tadjikistan, l'Afghanistan et le Turkménistan. Le statut de la mer Caspienne, lac ou mer, est un point débattu."
 },
 {
  "text": "Sous Centralia, en Pennsylvanie, un incendie de mine brûle depuis 1962 et pourrait durer encore 250 ans ; la ville ne comptait plus que 5 habitants en 2020.",
  "source": "Perplexity",
  "question": "Est-il vrai que sous Centralia, en Pennsylvanie, un incendie de mine brûle depuis 1962 et pourrait durer encore 250 ans ; la ville ne comptait plus que 5 habitants en 2020 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sous%20Centralia%2C%20en%20Pennsylvanie%2C%20un%20incendie%20de%20mine%20br%C3%BBle%20depuis%201962%20et%20pourrait%20durer%20encore%20250%20ans%20%3B%20la%20ville%20ne%20comptait%20plus%20que%205%20habitants%20en%202020%20%3F",
  "explanation": "En 1962, un incendie de déchets à Centralia a enflammé une veine de charbon souterraine. Le feu s'est propagé dans les galeries de mine. Des fumées toxiques et des affaissements de terrain ont entraîné l'évacuation de la ville dans les années 1980. Centralia aurait inspiré le jeu vidéo « Silent Hill »."
 },
 {
  "text": "En France, l'article 171 du Code civil permet d'épouser une personne décédée, sur autorisation du président de la République.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en France, l'article 171 du Code civil permet d'épouser une personne décédée, sur autorisation du président de la République ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20France%2C%20l'article%20171%20du%20Code%20civil%20permet%20d'%C3%A9pouser%20une%20personne%20d%C3%A9c%C3%A9d%C3%A9e%2C%20sur%20autorisation%20du%20pr%C3%A9sident%20de%20la%20R%C3%A9publique%20%3F",
  "explanation": "L'article 171 du Code civil autorise le mariage posthume, pour motifs graves, si la personne décédée avait manifesté son intention de se marier. Il faut l'autorisation du président de la République. La loi a été adoptée en 1959 après la rupture d'un barrage à Fréjus. Plusieurs mariages de ce type sont célébrés chaque année."
 },
 {
  "text": "En Suisse, il est illégal de garder un cochon d'Inde seul : la loi impose qu'il ait un congénère, car l'isolement nuit au bien-être de cet animal social.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en Suisse, il est illégal de garder un cochon d'Inde seul : la loi impose qu'il ait un congénère, car l'isolement nuit au bien-être de cet animal social ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20Suisse%2C%20il%20est%20ill%C3%A9gal%20de%20garder%20un%20cochon%20d'Inde%20seul%20%3A%20la%20loi%20impose%20qu'il%20ait%20un%20cong%C3%A9n%C3%A8re%2C%20car%20l'isolement%20nuit%20au%20bien-%C3%AAtre%20de%20cet%20animal%20social%20%3F",
  "explanation": "La loi suisse sur la protection des animaux, en vigueur depuis 2008, exige que les animaux sociaux comme les cochons d'Inde aient des contacts avec des congénères. Les cochons d'Inde ne doivent pas être détenus seuls. Un service permet même de louer un compagnon quand l'un d'eux meurt."
 },
 {
  "text": "La pâte à modeler Play-Doh était à l'origine un produit servant à nettoyer la suie de charbon sur les papiers peints, conçu dans les années 1930 par la société Kutol.",
  "source": "Perplexity",
  "question": "Est-il vrai que la pâte à modeler Play-Doh était à l'origine un produit servant à nettoyer la suie de charbon sur les papiers peints, conçu dans les années 1930 par la société Kutol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20p%C3%A2te%20%C3%A0%20modeler%20Play-Doh%20%C3%A9tait%20%C3%A0%20l'origine%20un%20produit%20servant%20%C3%A0%20nettoyer%20la%20suie%20de%20charbon%20sur%20les%20papiers%20peints%2C%20con%C3%A7u%20dans%20les%20ann%C3%A9es%201930%20par%20la%20soci%C3%A9t%C3%A9%20Kutol%20%3F",
  "explanation": "Kutol vendait une pâte pour nettoyer les traces de suie sur les papiers peints. Avec la généralisation du chauffage au gaz et des papiers peints lavables, la demande a chuté. Une institutrice l'utilisait pour faire modeler ses élèves. La pâte a été reformulée et vendue comme jouet en 1956."
 },
 {
  "text": "La tronçonneuse descend d'une scie à chaîne médicale inventée vers 1783-1785 par deux médecins, utilisée notamment pour élargir le bassin lors d'accouchements difficiles (symphysiotomie).",
  "source": "Perplexity",
  "question": "Est-il vrai que la tronçonneuse descend d'une scie à chaîne médicale inventée vers 1783-1785 par deux médecins, utilisée notamment pour élargir le bassin lors d'accouchements difficiles (symphysiotomie) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tron%C3%A7onneuse%20descend%20d'une%20scie%20%C3%A0%20cha%C3%AEne%20m%C3%A9dicale%20invent%C3%A9e%20vers%201783-1785%20par%20deux%20m%C3%A9decins%2C%20utilis%C3%A9e%20notamment%20pour%20%C3%A9largir%20le%20bassin%20lors%20d'accouchements%20difficiles%20%28symphysiotomie%29%20%3F",
  "explanation": "Les médecins John Aitken et James Jeffray ont développé une scie à chaîne pour faciliter les symphysiotomies et la découpe d'os. Elle était actionnée à la main par une manivelle. Les tronçonneuses à bois motorisées sont apparues bien plus tard, au XXe siècle."
 },
 {
  "text": "Fredric Baur, l'inventeur du tube des chips Pringles, a été inhumé en 2008 en partie dans un tube de Pringles, à sa propre demande.",
  "source": "Perplexity",
  "question": "Est-il vrai que fredric Baur, l'inventeur du tube des chips Pringles, a été inhumé en 2008 en partie dans un tube de Pringles, à sa propre demande ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20fredric%20Baur%2C%20l'inventeur%20du%20tube%20des%20chips%20Pringles%2C%20a%20%C3%A9t%C3%A9%20inhum%C3%A9%20en%202008%20en%20partie%20dans%20un%20tube%20de%20Pringles%2C%20%C3%A0%20sa%20propre%20demande%20%3F",
  "explanation": "Fredric Baur, chimiste chez Procter & Gamble, a conçu le tube cylindrique et le procédé pour empiler les chips en forme de selle. À sa mort en 2008, ses enfants ont respecté sa volonté : une partie de ses cendres a été placée dans un tube de Pringles."
 },
 {
  "text": "Le castoréum, une sécrétion odorante produite par des glandes situées sous la queue du castor, est autorisé comme arôme alimentaire aux États-Unis.",
  "source": "Perplexity",
  "question": "Est-il vrai que le castoréum, une sécrétion odorante produite par des glandes situées sous la queue du castor, est autorisé comme arôme alimentaire aux États-Unis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20castor%C3%A9um%2C%20une%20s%C3%A9cr%C3%A9tion%20odorante%20produite%20par%20des%20glandes%20situ%C3%A9es%20sous%20la%20queue%20du%20castor%2C%20est%20autoris%C3%A9%20comme%20ar%C3%B4me%20alimentaire%20aux%20%C3%89tats-Unis%20%3F",
  "explanation": "Le castoréum est sécrété par des glandes près de la queue du castor, qui l'utilise pour marquer son territoire. Il a une odeur de vanille. Il est autorisé par la FDA comme additif alimentaire, mais il est rarement utilisé à cause de son coût et de la difficulté d'en collecter."
 },
 {
  "text": "La noix de cajou n'est pratiquement jamais vendue dans sa coque, car celle-ci contient de l'acide anacardique, un irritant cutané proche du poison de l'herbe à puce.",
  "source": "Perplexity",
  "question": "Est-il vrai que la noix de cajou n'est pratiquement jamais vendue dans sa coque, car celle-ci contient de l'acide anacardique, un irritant cutané proche du poison de l'herbe à puce ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20noix%20de%20cajou%20n'est%20pratiquement%20jamais%20vendue%20dans%20sa%20coque%2C%20car%20celle-ci%20contient%20de%20l'acide%20anacardique%2C%20un%20irritant%20cutan%C3%A9%20proche%20du%20poison%20de%20l'herbe%20%C3%A0%20puce%20%3F",
  "explanation": "La noix de cajou pousse au bout d'un faux fruit, la pomme de cajou. Sa coque contient un liquide irritant, proche de l'urushiol de l'herbe à puce, de la même famille de plantes. Les noix sont donc décortiquées et grillées avant la vente, souvent à la main, ce qui peut brûler la peau des ouvriers."
 },
 {
  "text": "Les fortune cookies des restaurants chinois ne viennent pas de Chine : ils dérivent d'un biscuit japonais de Kyoto, popularisé en Californie, et sont quasiment inconnus en Chine.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fortune cookies des restaurants chinois ne viennent pas de Chine : ils dérivent d'un biscuit japonais de Kyoto, popularisé en Californie, et sont quasiment inconnus en Chine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fortune%20cookies%20des%20restaurants%20chinois%20ne%20viennent%20pas%20de%20Chine%20%3A%20ils%20d%C3%A9rivent%20d'un%20biscuit%20japonais%20de%20Kyoto%2C%20popularis%C3%A9%20en%20Californie%2C%20et%20sont%20quasiment%20inconnus%20en%20Chine%20%3F",
  "explanation": "Les historiens relient les fortune cookies à un biscuit japonais, le tsujiura senbei, fabriqué à Kyoto. Des immigrants japonais en Californie les auraient introduits au début du XXe siècle. Pendant la Seconde Guerre mondiale, l'internement des Japonais-Américains a laissé leur production aux restaurateurs chinois."
 },
 {
  "text": "La pizza hawaïenne a été inventée en 1962 au Canada, en Ontario, par Sam Panopoulos, un restaurateur d'origine grecque.",
  "source": "Perplexity",
  "question": "Est-il vrai que la pizza hawaïenne a été inventée en 1962 au Canada, en Ontario, par Sam Panopoulos, un restaurateur d'origine grecque ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20pizza%20hawa%C3%AFenne%20a%20%C3%A9t%C3%A9%20invent%C3%A9e%20en%201962%20au%20Canada%2C%20en%20Ontario%2C%20par%20Sam%20Panopoulos%2C%20un%20restaurateur%20d'origine%20grecque%20%3F",
  "explanation": "Sam Panopoulos, propriétaire d'un restaurant à Chatham, en Ontario, a eu l'idée d'ajouter de l'ananas en conserve sur une pizza. Le nom « hawaïenne » viendrait de la marque de l'ananas. La garniture divise toujours : même le président islandais a plaisanté en 2017 sur son interdiction."
 },
 {
  "text": "L'ouvre-boîte a été breveté environ 45 ans après la boîte de conserve : les premières boîtes indiquaient de les ouvrir au marteau et au burin.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ouvre-boîte a été breveté environ 45 ans après la boîte de conserve : les premières boîtes indiquaient de les ouvrir au marteau et au burin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'ouvre-bo%C3%AEte%20a%20%C3%A9t%C3%A9%20brevet%C3%A9%20environ%2045%20ans%20apr%C3%A8s%20la%20bo%C3%AEte%20de%20conserve%20%3A%20les%20premi%C3%A8res%20bo%C3%AEtes%20indiquaient%20de%20les%20ouvrir%20au%20marteau%20et%20au%20burin%20%3F",
  "explanation": "Les premières boîtes de conserve, en fer épais, étaient brevetées en 1810. Il fallait un marteau et un ciseau pour les ouvrir. L'ouvre-boîte n'a été breveté qu'en 1855 en Angleterre, et en 1858 aux États-Unis, quand les boîtes sont devenues plus fines."
 },
 {
  "text": "Le pistolet à eau Super Soaker a été inventé par Lonnie Johnson, un ingénieur passé par la NASA, alors qu'il testait un nouveau système de réfrigération.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pistolet à eau Super Soaker a été inventé par Lonnie Johnson, un ingénieur passé par la NASA, alors qu'il testait un nouveau système de réfrigération ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pistolet%20%C3%A0%20eau%20Super%20Soaker%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20par%20Lonnie%20Johnson%2C%20un%20ing%C3%A9nieur%20pass%C3%A9%20par%20la%20NASA%2C%20alors%20qu'il%20testait%20un%20nouveau%20syst%C3%A8me%20de%20r%C3%A9frig%C3%A9ration%20%3F",
  "explanation": "En 1982, Lonnie Johnson travaillait sur une pompe à chaleur utilisant de l'eau plutôt que du fréon. Un jet d'eau puissant a traversé la salle de bains. Il a eu l'idée d'un pistolet à eau pressurisé. Le Super Soaker, sorti en 1990, a été l'un des jouets les plus vendus au monde."
 },
 {
  "text": "Les mouchoirs Kleenex dérivent d'un filtre de masque à gaz de la Première Guerre mondiale et ont d'abord été vendus en 1924 pour retirer le maquillage.",
  "source": "Perplexity",
  "question": "Est-il vrai que les mouchoirs Kleenex dérivent d'un filtre de masque à gaz de la Première Guerre mondiale et ont d'abord été vendus en 1924 pour retirer le maquillage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20mouchoirs%20Kleenex%20d%C3%A9rivent%20d'un%20filtre%20de%20masque%20%C3%A0%20gaz%20de%20la%20Premi%C3%A8re%20Guerre%20mondiale%20et%20ont%20d'abord%20%C3%A9t%C3%A9%20vendus%20en%201924%20pour%20retirer%20le%20maquillage%20%3F",
  "explanation": "Pendant la Première Guerre mondiale, Kimberly-Clark avait créé le Cellucotton, un matériau en ouate de cellulose, utilisé pour les pansements et les filtres de masques à gaz. Après la guerre, ce matériau a été commercialisé comme mouchoir démaquillant. Les clients s'en sont servis pour se moucher, ce qui a changé son marketing."
 },
 {
  "text": "Le Viagra a été synthétisé en 1989 dans la ville anglaise de Sandwich pour traiter l'angine de poitrine, avant que son effet sur l'érection ne soit découvert lors des essais.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Viagra a été synthétisé en 1989 dans la ville anglaise de Sandwich pour traiter l'angine de poitrine, avant que son effet sur l'érection ne soit découvert lors des essais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Viagra%20a%20%C3%A9t%C3%A9%20synth%C3%A9tis%C3%A9%20en%201989%20dans%20la%20ville%20anglaise%20de%20Sandwich%20pour%20traiter%20l'angine%20de%20poitrine%2C%20avant%20que%20son%20effet%20sur%20l'%C3%A9rection%20ne%20soit%20d%C3%A9couvert%20lors%20des%20essais%20%3F",
  "explanation": "Le sildénafil a été développé par Pfizer dans son laboratoire de Sandwich pour traiter l'hypertension et l'angine de poitrine. Les résultats étaient décevants, mais les volontaires ont signalé un effet secondaire inattendu. Pfizer l'a commercialisé en 1998 sous le nom de Viagra."
 },
 {
  "text": "À ses débuts, à la fin des années 1920, le soda 7 Up revendiquait contenir du citrate de lithium, un médicament régulateur de l'humeur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à ses débuts, à la fin des années 1920, le soda 7 Up revendiquait contenir du citrate de lithium, un médicament régulateur de l'humeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20ses%20d%C3%A9buts%2C%20%C3%A0%20la%20fin%20des%20ann%C3%A9es%201920%2C%20le%20soda%207%20Up%20revendiquait%20contenir%20du%20citrate%20de%20lithium%2C%20un%20m%C3%A9dicament%20r%C3%A9gulateur%20de%20l'humeur%20%3F",
  "explanation": "Le soda, lancé en 1929 sous le nom de « Bib-Label Lithiated Lemon-Lime Soda », contenait du citrate de lithium, utilisé pour réguler l'humeur. Le lithium a été retiré en 1948. L'origine du nom 7 Up reste incertaine, certains le liant au lithium (masse atomique proche de 7)."
 },
 {
  "text": "Le guide Michelin a été créé en 1900 par un fabricant de pneus pour pousser les automobilistes à rouler plus et donc à user leurs pneus, alors que la France comptait moins de 3 000 voitures.",
  "source": "Perplexity",
  "question": "Est-il vrai que le guide Michelin a été créé en 1900 par un fabricant de pneus pour pousser les automobilistes à rouler plus et donc à user leurs pneus, alors que la France comptait moins de 3 000 voitures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20guide%20Michelin%20a%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9%20en%201900%20par%20un%20fabricant%20de%20pneus%20pour%20pousser%20les%20automobilistes%20%C3%A0%20rouler%20plus%20et%20donc%20%C3%A0%20user%20leurs%20pneus%2C%20alors%20que%20la%20France%20comptait%20moins%20de%203%20000%20voitures%20%3F",
  "explanation": "André et Édouard Michelin ont créé un guide gratuit pour les automobilistes, avec des cartes, des garages et des hôtels. Plus les gens voyageaient, plus ils usaient leurs pneus. Les étoiles pour les restaurants sont apparues en 1926, et le guide est devenu payant en 1920."
 },
 {
  "text": "Le Livre Guinness des records est né d'une dispute de chasse en 1951 : le patron de la brasserie Guinness ne trouvait aucun livre disant si le pluvier doré était le gibier le plus rapide d'Europe.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Livre Guinness des records est né d'une dispute de chasse en 1951 : le patron de la brasserie Guinness ne trouvait aucun livre disant si le pluvier doré était le gibier le plus rapide d'Europe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Livre%20Guinness%20des%20records%20est%20n%C3%A9%20d'une%20dispute%20de%20chasse%20en%201951%20%3A%20le%20patron%20de%20la%20brasserie%20Guinness%20ne%20trouvait%20aucun%20livre%20disant%20si%20le%20pluvier%20dor%C3%A9%20%C3%A9tait%20le%20gibier%20le%20plus%20rapide%20d'Europe%20%3F",
  "explanation": "En 1951, Sir Hugh Beaver, directeur de la brasserie Guinness, a participé à une partie de chasse en Irlande. Il s'est demandé quel était l'oiseau de gibier le plus rapide d'Europe. Il a eu l'idée de créer un livre de références, compilé par les jumeaux McWhirter. La première édition a été publiée en 1955."
 },
 {
  "text": "Le chewing-gum à bulles est rose parce que son inventeur, Walter Diemer, comptable chez Fleer, n'avait que du colorant rouge sous la main en 1928 : il l'a dilué, et le rose est resté.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chewing-gum à bulles est rose parce que son inventeur, Walter Diemer, comptable chez Fleer, n'avait que du colorant rouge sous la main en 1928 : il l'a dilué, et le rose est resté ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chewing-gum%20%C3%A0%20bulles%20est%20rose%20parce%20que%20son%20inventeur%2C%20Walter%20Diemer%2C%20comptable%20chez%20Fleer%2C%20n'avait%20que%20du%20colorant%20rouge%20sous%20la%20main%20en%201928%20%3A%20il%20l'a%20dilu%C3%A9%2C%20et%20le%20rose%20est%20rest%C3%A9%20%3F",
  "explanation": "Walter Diemer, comptable de 23 ans, a trouvé par hasard une formule de gomme moins collante et plus élastique, qui permettait de faire des bulles. Le seul colorant disponible à l'usine était rose. Le chewing-gum Dubble Bubble a été un succès, et le rose est devenu la couleur classique."
 },
 {
  "text": "Le « 57 » de Heinz ne correspond à rien : en 1896, la marque vendait déjà plus de 60 produits, et le chiffre combinait le nombre fétiche du fondateur et celui de sa femme.",
  "source": "Perplexity",
  "question": "Est-il vrai que le « 57 » de Heinz ne correspond à rien : en 1896, la marque vendait déjà plus de 60 produits, et le chiffre combinait le nombre fétiche du fondateur et celui de sa femme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20%C2%AB%2057%20%C2%BB%20de%20Heinz%20ne%20correspond%20%C3%A0%20rien%20%3A%20en%201896%2C%20la%20marque%20vendait%20d%C3%A9j%C3%A0%20plus%20de%2060%20produits%2C%20et%20le%20chiffre%20combinait%20le%20nombre%20f%C3%A9tiche%20du%20fondateur%20et%20celui%20de%20sa%20femme%20%3F",
  "explanation": "Henry John Heinz aurait vu une publicité pour « 21 styles de chaussures » dans un train et aimé l'idée. Il a choisi 5, son chiffre porte-bonheur, et 7, celui de sa femme. Le slogan « 57 Varieties » est devenu célèbre, et figure toujours sur les bouteilles."
 },
 {
  "text": "Amazon s'appelait d'abord Cadabra, mais le nom a été changé après qu'un avocat l'a confondu avec « cadaver », cadavre en anglais.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'amazon s'appelait d'abord Cadabra, mais le nom a été changé après qu'un avocat l'a confondu avec « cadaver », cadavre en anglais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'amazon%20s'appelait%20d'abord%20Cadabra%2C%20mais%20le%20nom%20a%20%C3%A9t%C3%A9%20chang%C3%A9%20apr%C3%A8s%20qu'un%20avocat%20l'a%20confondu%20avec%20%C2%AB%20cadaver%20%C2%BB%2C%20cadavre%20en%20anglais%20%3F",
  "explanation": "Jeff Bezos a fondé son entreprise en 1994 sous le nom de Cadabra, comme dans « abracadabra ». Un avocat a compris « cadaver » au téléphone. Il a choisi Amazon, le plus grand fleuve du monde, ce qui faisait aussi apparaître le site en tête des listes alphabétiques."
 },
 {
  "text": "Stockées en grande quantité avec de l'humidité, les pistaches peuvent s'échauffer d'elles-mêmes et même s'enflammer spontanément si elles sont conservées dans des sacs de jute.",
  "source": "Perplexity",
  "question": "Est-il vrai que stockées en grande quantité avec de l'humidité, les pistaches peuvent s'échauffer d'elles-mêmes et même s'enflammer spontanément si elles sont conservées dans des sacs de jute ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20stock%C3%A9es%20en%20grande%20quantit%C3%A9%20avec%20de%20l'humidit%C3%A9%2C%20les%20pistaches%20peuvent%20s'%C3%A9chauffer%20d'elles-m%C3%AAmes%20et%20m%C3%AAme%20s'enflammer%20spontan%C3%A9ment%20si%20elles%20sont%20conserv%C3%A9es%20dans%20des%20sacs%20de%20jute%20%3F",
  "explanation": "Les pistaches sont riches en matières grasses. Lorsqu'elles sont stockées humides et en grande quantité, les graisses peuvent s'oxyder et générer de la chaleur. Si la chaleur ne s'évacue pas, elles peuvent s'enflammer. Les règles de transport maritime les classent pour cette raison parmi les marchandises à risque."
 },
 {
  "text": "Le capuchon du stylo Bic Cristal est percé d'un petit trou depuis 1991 pour réduire le risque d'étouffement s'il est inhalé.",
  "source": "Perplexity",
  "question": "Est-il vrai que le capuchon du stylo Bic Cristal est percé d'un petit trou depuis 1991 pour réduire le risque d'étouffement s'il est inhalé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20capuchon%20du%20stylo%20Bic%20Cristal%20est%20perc%C3%A9%20d'un%20petit%20trou%20depuis%201991%20pour%20r%C3%A9duire%20le%20risque%20d'%C3%A9touffement%20s'il%20est%20inhal%C3%A9%20%3F",
  "explanation": "Les enfants mâchouillent souvent les capuchons de stylos, au risque de les inhaler. Depuis 1991, le capuchon du Bic Cristal comporte un trou, qui permet de laisser passer un peu d'air s'il se coince dans la gorge. Ce trou est conforme à une norme internationale de sécurité."
 },
 {
  "text": "Le brillant de nombreux bonbons vient de la gomme-laque (E904), une résine sécrétée par une cochenille femelle, également utilisée pour vernir les meubles.",
  "source": "Perplexity",
  "question": "Est-il vrai que le brillant de nombreux bonbons vient de la gomme-laque (E904), une résine sécrétée par une cochenille femelle, également utilisée pour vernir les meubles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20brillant%20de%20nombreux%20bonbons%20vient%20de%20la%20gomme-laque%20(E904)%2C%20une%20r%C3%A9sine%20s%C3%A9cr%C3%A9t%C3%A9e%20par%20une%20cochenille%20femelle%2C%20%C3%A9galement%20utilis%C3%A9e%20pour%20vernir%20les%20meubles%20%3F",
  "explanation": "La gomme-laque est produite par une cochenille d'Asie du Sud, Kerria lacca, qui sécrète une résine sur les branches des arbres. Elle est récoltée et purifiée. Elle est utilisée comme agent d'enrobage pour les bonbons, les comprimés, et pour vernir les meubles et les instruments de musique."
 },
 {
  "text": "Pendant la Seconde Guerre mondiale, les M&M's étaient vendus exclusivement à l'armée américaine : leur coque en sucre permettait aux soldats de transporter du chocolat sans qu'il fonde.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la Seconde Guerre mondiale, les M&M's étaient vendus exclusivement à l'armée américaine : leur coque en sucre permettait aux soldats de transporter du chocolat sans qu'il fonde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20Seconde%20Guerre%20mondiale%2C%20les%20M%26M's%20%C3%A9taient%20vendus%20exclusivement%20%C3%A0%20l'arm%C3%A9e%20am%C3%A9ricaine%20%3A%20leur%20coque%20en%20sucre%20permettait%20aux%20soldats%20de%20transporter%20du%20chocolat%20sans%20qu'il%20fonde%20%3F",
  "explanation": "Forrest Mars aurait eu l'idée des M&M's en voyant des soldats espagnols manger du chocolat enrobé de sucre. Lancés en 1941, ils étaient fournis presque exclusivement à l'armée américaine pendant la guerre. Après la guerre, ils ont été vendus au grand public."
 },
 {
  "text": "Les œufs Kinder Surprise sont interdits à la vente aux États-Unis par une loi de 1938 bannissant les confiseries contenant un objet non comestible.",
  "source": "Perplexity",
  "question": "Est-il vrai que les œufs Kinder Surprise sont interdits à la vente aux États-Unis par une loi de 1938 bannissant les confiseries contenant un objet non comestible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C5%93ufs%20Kinder%20Surprise%20sont%20interdits%20%C3%A0%20la%20vente%20aux%20%C3%89tats-Unis%20par%20une%20loi%20de%201938%20bannissant%20les%20confiseries%20contenant%20un%20objet%20non%20comestible%20%3F",
  "explanation": "Une loi américaine de 1938 interdit les aliments contenant un objet non comestible, par crainte d'étouffement. Les douaniers saisissent régulièrement des Kinder Surprise. Depuis 2017, Ferrero vend aux États-Unis le Kinder Joy, où le jouet est séparé du chocolat."
 },
 {
  "text": "Haribo est l'abréviation de HAns RIegel BOnn, du nom de son fondateur et de sa ville ; ses premiers oursons s'appelaient les ours dansants.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'haribo est l'abréviation de HAns RIegel BOnn, du nom de son fondateur et de sa ville ; ses premiers oursons s'appelaient les ours dansants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'haribo%20est%20l'abr%C3%A9viation%20de%20HAns%20RIegel%20BOnn%2C%20du%20nom%20de%20son%20fondateur%20et%20de%20sa%20ville%20%3B%20ses%20premiers%20oursons%20s'appelaient%20les%20ours%20dansants%20%3F",
  "explanation": "Hans Riegel, confiseur, a fondé Haribo en 1920 à Bonn. En 1922, il a créé les « ours dansants », des oursons en gomme inspirés des ours de foire. Les célèbres Goldbären sont apparus en 1967."
 },
 {
  "text": "Bibendum, le bonhomme Michelin, est blanc parce que les pneus étaient blanchâtres jusqu'à l'ajout de noir de carbone en 1912.",
  "source": "Perplexity",
  "question": "Est-il vrai que bibendum, le bonhomme Michelin, est blanc parce que les pneus étaient blanchâtres jusqu'à l'ajout de noir de carbone en 1912 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20bibendum%2C%20le%20bonhomme%20Michelin%2C%20est%20blanc%20parce%20que%20les%20pneus%20%C3%A9taient%20blanch%C3%A2tres%20jusqu'%C3%A0%20l'ajout%20de%20noir%20de%20carbone%20en%201912%20%3F",
  "explanation": "Bibendum, créé en 1898 par l'illustrateur O'Galop, est formé d'une pile de pneus blancs. Les premiers pneus étaient blanchâtres, en caoutchouc naturel. Le noir de carbone, ajouté ensuite, les a rendus plus solides et noirs. Bibendum est resté blanc."
 },
 {
  "text": "Monsieur Patate, premier jouet à faire l'objet d'une publicité télévisée en 1952, était vendu sans corps : il fallait planter les pièces dans une vraie pomme de terre.",
  "source": "Perplexity",
  "question": "Est-il vrai que monsieur Patate, premier jouet à faire l'objet d'une publicité télévisée en 1952, était vendu sans corps : il fallait planter les pièces dans une vraie pomme de terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20monsieur%20Patate%2C%20premier%20jouet%20%C3%A0%20faire%20l'objet%20d'une%20publicit%C3%A9%20t%C3%A9l%C3%A9vis%C3%A9e%20en%201952%2C%20%C3%A9tait%20vendu%20sans%20corps%20%3A%20il%20fallait%20planter%20les%20pi%C3%A8ces%20dans%20une%20vraie%20pomme%20de%20terre%20%3F",
  "explanation": "Monsieur Patate a été inventé par George Lerner et vendu par Hasbro en 1952. Le kit comprenait des yeux, un nez, une bouche et des accessoires à planter dans un légume. Le corps en plastique a été ajouté en 1964, notamment à cause de plaintes sur les légumes pourris."
 },
 {
  "text": "La poupée Barbie est inspirée de Bild Lilli, une poupée allemande tirée d'une BD du journal Bild et vendue aux adultes, surtout des hommes, comme cadeau humoristique.",
  "source": "Perplexity",
  "question": "Est-il vrai que la poupée Barbie est inspirée de Bild Lilli, une poupée allemande tirée d'une BD du journal Bild et vendue aux adultes, surtout des hommes, comme cadeau humoristique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20poup%C3%A9e%20Barbie%20est%20inspir%C3%A9e%20de%20Bild%20Lilli%2C%20une%20poup%C3%A9e%20allemande%20tir%C3%A9e%20d'une%20BD%20du%20journal%20Bild%20et%20vendue%20aux%20adultes%2C%20surtout%20des%20hommes%2C%20comme%20cadeau%20humoristique%20%3F",
  "explanation": "Lilli était une poupée blonde vendue en Allemagne dans les années 1950, inspirée d'un personnage de bande dessinée humoristique. Ruth Handler, cofondatrice de Mattel, a vu la poupée en Suisse et l'a adaptée pour les enfants. Barbie est sortie en 1959, et Mattel a racheté les droits de Lilli."
 },
 {
  "text": "Les nachos doivent leur nom à Ignacio « Nacho » Anaya, maître d'hôtel qui les a improvisés en 1943 à Piedras Negras, au Mexique.",
  "source": "Perplexity",
  "question": "Est-il vrai que les nachos doivent leur nom à Ignacio « Nacho » Anaya, maître d'hôtel qui les a improvisés en 1943 à Piedras Negras, au Mexique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20nachos%20doivent%20leur%20nom%20%C3%A0%20Ignacio%20%C2%AB%20Nacho%20%C2%BB%20Anaya%2C%20ma%C3%AEtre%20d'h%C3%B4tel%20qui%20les%20a%20improvis%C3%A9s%20en%201943%20%C3%A0%20Piedras%20Negras%2C%20au%20Mexique%20%3F",
  "explanation": "Selon l'histoire, des épouses d'officiers américains sont entrées dans un restaurant après la fermeture des cuisines. Ignacio Anaya a improvisé un plat avec des tortillas frites, du fromage fondu et des piments jalapeños. Le plat est devenu les « Nachos especiales ». Piedras Negras célèbre une fête du nacho."
 },
 {
  "text": "L'eau tonique brille sous une lumière ultraviolette, à cause de la fluorescence de la quinine qu'elle contient.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau tonique brille sous une lumière ultraviolette, à cause de la fluorescence de la quinine qu'elle contient ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20tonique%20brille%20sous%20une%20lumi%C3%A8re%20ultraviolette%2C%20%C3%A0%20cause%20de%20la%20fluorescence%20de%20la%20quinine%20qu'elle%20contient%20%3F",
  "explanation": "La quinine, ajoutée à l'eau tonique pour son amertume, est fluorescente : elle absorbe les ultraviolets et émet une lumière bleue. Sous une lumière noire, l'eau tonique brille. La quinine était autrefois utilisée contre le paludisme, d'où le gin tonic des colons britanniques."
 },
 {
  "text": "En 1943, les États-Unis ont interdit le pain prétranché pour économiser en temps de guerre ; la mesure, impopulaire, a été annulée moins de deux mois plus tard.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1943, les États-Unis ont interdit le pain prétranché pour économiser en temps de guerre ; la mesure, impopulaire, a été annulée moins de deux mois plus tard ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201943%2C%20les%20%C3%89tats-Unis%20ont%20interdit%20le%20pain%20pr%C3%A9tranch%C3%A9%20pour%20%C3%A9conomiser%20en%20temps%20de%20guerre%20%3B%20la%20mesure%2C%20impopulaire%2C%20a%20%C3%A9t%C3%A9%20annul%C3%A9e%20moins%20de%20deux%20mois%20plus%20tard%20%3F",
  "explanation": "En janvier 1943, le gouvernement américain a interdit le pain prétranché pour économiser le papier ciré et l'acier des machines. La mesure a provoqué de nombreuses protestations. Elle a été annulée en mars. L'expression « the best thing since sliced bread » date de cette époque."
 },
 {
  "text": "En juin 1946, à Pittsburgh, 30 000 à 40 000 femmes ont fait la queue pour 13 000 paires de bas nylon, provoquant des bagarres : l'une des pires « émeutes du nylon ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en juin 1946, à Pittsburgh, 30 000 à 40 000 femmes ont fait la queue pour 13 000 paires de bas nylon, provoquant des bagarres : l'une des pires « émeutes du nylon » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20juin%201946%2C%20%C3%A0%20Pittsburgh%2C%2030%20000%20%C3%A0%2040%20000%20femmes%20ont%20fait%20la%20queue%20pour%2013%20000%20paires%20de%20bas%20nylon%2C%20provoquant%20des%20bagarres%20%3A%20l'une%20des%20pires%20%C2%AB%20%C3%A9meutes%20du%20nylon%20%C2%BB%20%3F",
  "explanation": "Les bas nylon, lancés par DuPont en 1940, étaient très populaires, mais la production a été réservée à l'armée pendant la guerre. Après la guerre, la production n'a pas suivi la demande. Des queues gigantesques et des émeutes ont éclaté dans plusieurs villes américaines."
 },
 {
  "text": "Par le traité de Breda en 1667, l'Angleterre a renoncé à Run, petite île à muscade d'Indonésie, et conservé en échange Manhattan.",
  "source": "Perplexity",
  "question": "Est-il vrai que par le traité de Breda en 1667, l'Angleterre a renoncé à Run, petite île à muscade d'Indonésie, et conservé en échange Manhattan ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20par%20le%20trait%C3%A9%20de%20Breda%20en%201667%2C%20l'Angleterre%20a%20renonc%C3%A9%20%C3%A0%20Run%2C%20petite%20%C3%AEle%20%C3%A0%20muscade%20d'Indon%C3%A9sie%2C%20et%20conserv%C3%A9%20en%20%C3%A9change%20Manhattan%20%3F",
  "explanation": "Au XVIIe siècle, la noix de muscade valait très cher. Après une guerre, le traité de Breda a laissé aux Néerlandais l'île de Run, pour contrôler le commerce de la muscade, et aux Anglais La Nouvelle-Amsterdam, rebaptisée New York. Le choix semblait alors favorable aux Néerlandais."
 },
 {
  "text": "Il faut environ 150 fleurs de crocus pour obtenir un seul gramme de safran, dont les stigmates sont cueillis à la main.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il faut environ 150 fleurs de crocus pour obtenir un seul gramme de safran, dont les stigmates sont cueillis à la main ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20faut%20environ%20150%20fleurs%20de%20crocus%20pour%20obtenir%20un%20seul%20gramme%20de%20safran%2C%20dont%20les%20stigmates%20sont%20cueillis%20%C3%A0%20la%20main%20%3F",
  "explanation": "Le safran vient des stigmates du crocus Crocus sativus. Chaque fleur n'en produit que trois, qui doivent être récoltés à la main, tôt le matin, puis séchés. Il faut environ 150 fleurs pour un gramme. C'est l'épice la plus chère au monde."
 },
 {
  "text": "Lego fabriquait environ 306 millions de pneus miniatures par an (chiffre de 2006), ce qui lui a valu d'être présenté comme le premier fabricant de pneus au monde en nombre d'unités.",
  "source": "Perplexity",
  "question": "Est-il vrai que lego fabriquait environ 306 millions de pneus miniatures par an (chiffre de 2006), ce qui lui a valu d'être présenté comme le premier fabricant de pneus au monde en nombre d'unités ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lego%20fabriquait%20environ%20306%20millions%20de%20pneus%20miniatures%20par%20an%20(chiffre%20de%202006)%2C%20ce%20qui%20lui%20a%20valu%20d'%C3%AAtre%20pr%C3%A9sent%C3%A9%20comme%20le%20premier%20fabricant%20de%20pneus%20au%20monde%20en%20nombre%20d'unit%C3%A9s%20%3F",
  "explanation": "Lego produit des pneus en caoutchouc pour ses véhicules. En 2006, il en aurait produit environ 306 millions, ce qui dépasse en nombre la production de fabricants comme Michelin ou Bridgestone. Bien sûr, ces pneus pèsent quelques grammes."
 },
 {
  "text": "Le casu martzu, fromage sarde interdit à la vente, contient des milliers de larves vivantes capables de sauter jusqu'à 15 centimètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le casu martzu, fromage sarde interdit à la vente, contient des milliers de larves vivantes capables de sauter jusqu'à 15 centimètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20casu%20martzu%2C%20fromage%20sarde%20interdit%20%C3%A0%20la%20vente%2C%20contient%20des%20milliers%20de%20larves%20vivantes%20capables%20de%20sauter%20jusqu'%C3%A0%2015%20centim%C3%A8tres%20%3F",
  "explanation": "Le casu martzu est un pecorino sarde que l'on laisse infester par les larves de la mouche du fromage. Les larves décomposent les graisses, rendant le fromage crémeux. Il est consommé avec les larves vivantes. Sa vente est interdite par les règles sanitaires de l'UE, mais il est fabriqué et consommé localement."
 },
 {
  "text": "En 2015, Nigel Richards a remporté le championnat du monde de Scrabble francophone sans parler français, après avoir étudié le dictionnaire pendant environ neuf semaines.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2015, Nigel Richards a remporté le championnat du monde de Scrabble francophone sans parler français, après avoir étudié le dictionnaire pendant environ neuf semaines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202015%2C%20Nigel%20Richards%20a%20remport%C3%A9%20le%20championnat%20du%20monde%20de%20Scrabble%20francophone%20sans%20parler%20fran%C3%A7ais%2C%20apr%C3%A8s%20avoir%20%C3%A9tudi%C3%A9%20le%20dictionnaire%20pendant%20environ%20neuf%20semaines%20%3F",
  "explanation": "Nigel Richards, champion du Scrabble anglophone, a mémorisé les mots du dictionnaire officiel du Scrabble francophone en quelques semaines. Il a remporté le championnat du monde francophone en 2015 en Belgique. Il ne parlait pas français : il connaissait les mots comme des combinaisons de lettres."
 },
 {
  "text": "Le faux texte « Lorem ipsum » vient d'un traité de Cicéron écrit au Ier siècle av. J.-C. ; « lorem » est un fragment tronqué de « dolorem », la douleur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le faux texte « Lorem ipsum » vient d'un traité de Cicéron écrit au Ier siècle av. J.-C. ; « lorem » est un fragment tronqué de « dolorem », la douleur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20faux%20texte%20%C2%AB%20Lorem%20ipsum%20%C2%BB%20vient%20d'un%20trait%C3%A9%20de%20Cic%C3%A9ron%20%C3%A9crit%20au%20Ier%20si%C3%A8cle%20av.%20J.-C.%20%3B%20%C2%AB%20lorem%20%C2%BB%20est%20un%20fragment%20tronqu%C3%A9%20de%20%C2%AB%20dolorem%20%C2%BB%2C%20la%20douleur%20%3F",
  "explanation": "Le texte vient de « De finibus bonorum et malorum » de Cicéron. Il a été déformé et tronqué, peut-être au XVIe siècle, pour servir de texte factice aux imprimeurs. Il est utilisé par les graphistes pour simuler un texte sans distraire le lecteur."
 },
 {
  "text": "Une église de Halberstadt, en Allemagne, joue depuis 2001 un morceau d'orgue de John Cage dont l'exécution doit durer 639 ans et s'achever en 2640.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une église de Halberstadt, en Allemagne, joue depuis 2001 un morceau d'orgue de John Cage dont l'exécution doit durer 639 ans et s'achever en 2640 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20%C3%A9glise%20de%20Halberstadt%2C%20en%20Allemagne%2C%20joue%20depuis%202001%20un%20morceau%20d'orgue%20de%20John%20Cage%20dont%20l'ex%C3%A9cution%20doit%20durer%20639%20ans%20et%20s'achever%20en%202640%20%3F",
  "explanation": "L'œuvre « Organ²/ASLSP » de John Cage porte l'indication « As SLow aS Possible ». L'église Saint-Burchardi de Halberstadt a choisi une durée de 639 ans. Les changements d'accord sont rares, et attirent des visiteurs. Le dernier changement a eu lieu en 2024."
 },
 {
  "text": "Le premier ordinateur d'Apple, l'Apple I, était vendu 666,66 dollars en 1976 : Steve Wozniak aimait les chiffres répétés et ignorait la référence au nombre de la Bête.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier ordinateur d'Apple, l'Apple I, était vendu 666,66 dollars en 1976 : Steve Wozniak aimait les chiffres répétés et ignorait la référence au nombre de la Bête ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20ordinateur%20d'Apple%2C%20l'Apple%20I%2C%20%C3%A9tait%20vendu%20666%2C66%20dollars%20en%201976%20%3A%20Steve%20Wozniak%20aimait%20les%20chiffres%20r%C3%A9p%C3%A9t%C3%A9s%20et%20ignorait%20la%20r%C3%A9f%C3%A9rence%20au%20nombre%20de%20la%20B%C3%AAte%20%3F",
  "explanation": "Steve Wozniak a fixé le prix de l'Apple I à 666,66 dollars, environ un tiers au-dessus du coût de fabrication. Il a expliqué aimer les chiffres répétés. Il a reçu des lettres de groupes religieux. Environ 200 exemplaires ont été fabriqués, et ils valent aujourd'hui des centaines de milliers de dollars."
 },
 {
  "text": "Ronald Wayne, troisième cofondateur d'Apple, a revendu ses 10 % de la société pour 800 dollars, seulement 12 jours après sa création en 1976.",
  "source": "Perplexity",
  "question": "Est-il vrai que ronald Wayne, troisième cofondateur d'Apple, a revendu ses 10 % de la société pour 800 dollars, seulement 12 jours après sa création en 1976 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20ronald%20Wayne%2C%20troisi%C3%A8me%20cofondateur%20d'Apple%2C%20a%20revendu%20ses%2010%20%25%20de%20la%20soci%C3%A9t%C3%A9%20pour%20800%20dollars%2C%20seulement%2012%20jours%20apr%C3%A8s%20sa%20cr%C3%A9ation%20en%201976%20%3F",
  "explanation": "Ronald Wayne, collègue de Steve Jobs chez Atari, a rédigé l'accord de partenariat et dessiné le premier logo d'Apple. Inquiet des dettes et risques, il a revendu ses parts. Ces 10 % auraient représenté des centaines de milliards de dollars. Il a dit ne pas regretter sa décision."
 },
 {
  "text": "En 1991, l'horloge d'une batterie de missiles Patriot avait dérivé d'un tiers de seconde après 100 heures allumée : elle n'a pas intercepté un Scud qui a tué 28 soldats américains à Dhahran.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1991, l'horloge d'une batterie de missiles Patriot avait dérivé d'un tiers de seconde après 100 heures allumée : elle n'a pas intercepté un Scud qui a tué 28 soldats américains à Dhahran ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201991%2C%20l'horloge%20d'une%20batterie%20de%20missiles%20Patriot%20avait%20d%C3%A9riv%C3%A9%20d'un%20tiers%20de%20seconde%20apr%C3%A8s%20100%20heures%20allum%C3%A9e%20%3A%20elle%20n'a%20pas%20intercept%C3%A9%20un%20Scud%20qui%20a%20tu%C3%A9%2028%20soldats%20am%C3%A9ricains%20%C3%A0%20Dhahran%20%3F",
  "explanation": "Le système Patriot mesurait le temps en dixièmes de seconde, dont la représentation binaire était légèrement inexacte. Après 100 heures de fonctionnement, l'erreur accumulée atteignait environ 0,34 seconde. Le radar a cherché le Scud au mauvais endroit, et ne l'a pas intercepté. Le correctif logiciel est arrivé le lendemain."
 },
 {
  "text": "Le roman « La Disparition » de Georges Perec (1969) fait 300 pages sans jamais utiliser la lettre e ; sa traduction anglaise l'évite aussi, et l'espagnole se prive du a.",
  "source": "Perplexity",
  "question": "Est-il vrai que le roman « La Disparition » de Georges Perec (1969) fait 300 pages sans jamais utiliser la lettre e ; sa traduction anglaise l'évite aussi, et l'espagnole se prive du a ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20roman%20%C2%AB%20La%20Disparition%20%C2%BB%20de%20Georges%20Perec%20(1969)%20fait%20300%20pages%20sans%20jamais%20utiliser%20la%20lettre%20e%20%3B%20sa%20traduction%20anglaise%20l'%C3%A9vite%20aussi%2C%20et%20l'espagnole%20se%20prive%20du%20a%20%3F",
  "explanation": "« La Disparition » est un lipogramme, un texte qui s'interdit une lettre. Perec faisait partie de l'Oulipo, un groupe de littérature sous contraintes. Le roman raconte une disparition, celle d'Anton Voyl, sans aucune lettre e. Perec a ensuite écrit « Les Revenentes », qui n'utilise que la voyelle e."
 },
 {
  "text": "Dr Seuss a écrit « Green Eggs and Ham » avec seulement 50 mots différents, pour gagner un pari de 50 dollars lancé par son éditeur Bennett Cerf.",
  "source": "Perplexity",
  "question": "Est-il vrai que dr Seuss a écrit « Green Eggs and Ham » avec seulement 50 mots différents, pour gagner un pari de 50 dollars lancé par son éditeur Bennett Cerf ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dr%20Seuss%20a%20%C3%A9crit%20%C2%AB%20Green%20Eggs%20and%20Ham%20%C2%BB%20avec%20seulement%2050%20mots%20diff%C3%A9rents%2C%20pour%20gagner%20un%20pari%20de%2050%20dollars%20lanc%C3%A9%20par%20son%20%C3%A9diteur%20Bennett%20Cerf%20%3F",
  "explanation": "L'éditeur Bennett Cerf a parié 50 dollars que Dr Seuss ne pourrait pas écrire un livre avec seulement 50 mots différents. Seuss a gagné avec « Green Eggs and Ham » (1960), l'un des livres pour enfants les plus vendus. Cerf n'aurait jamais payé le pari."
 },
 {
  "text": "En 1998, une commande d'effacement lancée par erreur a supprimé 90 % de Toy Story 2 ; le film a été sauvé par la copie qu'une directrice technique gardait chez elle.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1998, une commande d'effacement lancée par erreur a supprimé 90 % de Toy Story 2 ; le film a été sauvé par la copie qu'une directrice technique gardait chez elle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201998%2C%20une%20commande%20d'effacement%20lanc%C3%A9e%20par%20erreur%20a%20supprim%C3%A9%2090%20%25%20de%20Toy%20Story%202%20%3B%20le%20film%20a%20%C3%A9t%C3%A9%20sauv%C3%A9%20par%20la%20copie%20qu'une%20directrice%20technique%20gardait%20chez%20elle%20%3F",
  "explanation": "Une commande de suppression a été exécutée par erreur sur les serveurs de Pixar. Les sauvegardes ne fonctionnaient pas. Galyn Susman, directrice technique, travaillait depuis chez elle après la naissance de son enfant, et avait une copie du film sur son ordinateur. Le film a ensuite été en grande partie refait."
 },
 {
  "text": "En 1983, Atari a enterré environ 700 000 cartouches dans une décharge du Nouveau-Mexique, dont le jeu E.T. ; en 2014, des fouilles n'en ont déterré qu'environ 1 300.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1983, Atari a enterré environ 700 000 cartouches dans une décharge du Nouveau-Mexique, dont le jeu E.T. ; en 2014, des fouilles n'en ont déterré qu'environ 1 300 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201983%2C%20Atari%20a%20enterr%C3%A9%20environ%20700%20000%20cartouches%20dans%20une%20d%C3%A9charge%20du%20Nouveau-Mexique%2C%20dont%20le%20jeu%20E.T.%20%3B%20en%202014%2C%20des%20fouilles%20n'en%20ont%20d%C3%A9terr%C3%A9%20qu'environ%201%20300%20%3F",
  "explanation": "« E.T. » pour l'Atari 2600, développé en cinq semaines, est souvent considéré comme l'un des pires jeux. Atari a enterré des invendus dans une décharge d'Alamogordo. Ce fait a longtemps été considéré comme une légende urbaine, jusqu'à ce que des fouilles en 2014 retrouvent des cartouches."
 },
 {
  "text": "Selon son profil officiel, Hello Kitty s'appelle Kitty White, est née dans la banlieue de Londres et mesure cinq pommes de haut pour un poids de trois pommes.",
  "source": "Perplexity",
  "question": "Est-il vrai que selon son profil officiel, Hello Kitty s'appelle Kitty White, est née dans la banlieue de Londres et mesure cinq pommes de haut pour un poids de trois pommes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20selon%20son%20profil%20officiel%2C%20Hello%20Kitty%20s'appelle%20Kitty%20White%2C%20est%20n%C3%A9e%20dans%20la%20banlieue%20de%20Londres%20et%20mesure%20cinq%20pommes%20de%20haut%20pour%20un%20poids%20de%20trois%20pommes%20%3F",
  "explanation": "Sanrio a créé Hello Kitty en 1974, et lui a donné une biographie détaillée : elle est britannique, vit avec sa famille dans la banlieue de Londres, a une sœur jumelle, Mimmy. Sanrio a précisé qu'elle n'est pas un chat, mais une petite fille."
 },
 {
  "text": "Le même cri, enregistré pour le film « Distant Drums » en 1951 et surnommé « cri Wilhelm », a été réutilisé dans plus de 400 films, dont Star Wars.",
  "source": "Perplexity",
  "question": "Est-il vrai que le même cri, enregistré pour le film « Distant Drums » en 1951 et surnommé « cri Wilhelm », a été réutilisé dans plus de 400 films, dont Star Wars ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20m%C3%AAme%20cri%2C%20enregistr%C3%A9%20pour%20le%20film%20%C2%AB%20Distant%20Drums%20%C2%BB%20en%201951%20et%20surnomm%C3%A9%20%C2%AB%20cri%20Wilhelm%20%C2%BB%2C%20a%20%C3%A9t%C3%A9%20r%C3%A9utilis%C3%A9%20dans%20plus%20de%20400%20films%2C%20dont%20Star%20Wars%20%3F",
  "explanation": "Le cri, enregistré en 1951, a été nommé d'après le soldat Wilhelm, personnage du film « The Charge at Feather River » (1953). Le monteur son Ben Burtt l'a réutilisé dans Star Wars et Indiana Jones. Il est devenu un clin d'œil entre ingénieurs du son."
 },
 {
  "text": "En 2008, la chanson « Happy Birthday to You » rapportait environ 2 millions de dollars de droits par an à Warner/Chappell ; en 2015, un juge a invalidé ce copyright.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2008, la chanson « Happy Birthday to You » rapportait environ 2 millions de dollars de droits par an à Warner/Chappell ; en 2015, un juge a invalidé ce copyright ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202008%2C%20la%20chanson%20%C2%AB%20Happy%20Birthday%20to%20You%20%C2%BB%20rapportait%20environ%202%20millions%20de%20dollars%20de%20droits%20par%20an%20%C3%A0%20Warner%2FChappell%20%3B%20en%202015%2C%20un%20juge%20a%20invalid%C3%A9%20ce%20copyright%20%3F",
  "explanation": "La mélodie vient de « Good Morning to All », écrite par les sœurs Hill à la fin du XIXe siècle. Warner/Chappell réclamait des droits sur la chanson, notamment pour les films. En 2015, un tribunal a jugé que le copyright n'était pas valide, et la chanson est entrée dans le domaine public."
 },
 {
  "text": "Le 22 mai 2010, Laszlo Hanyecz a payé deux pizzas 10 000 bitcoins, l'un des premiers achats réels en bitcoin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 22 mai 2010, Laszlo Hanyecz a payé deux pizzas 10 000 bitcoins, l'un des premiers achats réels en bitcoin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2022%20mai%202010%2C%20Laszlo%20Hanyecz%20a%20pay%C3%A9%20deux%20pizzas%2010%20000%20bitcoins%2C%20l'un%20des%20premiers%20achats%20r%C3%A9els%20en%20bitcoin%20%3F",
  "explanation": "Laszlo Hanyecz a proposé 10 000 bitcoins sur un forum pour deux pizzas. Un utilisateur les a commandées chez Papa John's. Ce jour est célébré comme le « Bitcoin Pizza Day ». À la valeur actuelle du bitcoin, ces pizzas représenteraient des centaines de millions de dollars."
 },
 {
  "text": "Installée à Cambridge en 1991, une caméra filmait une cafetière pour que les chercheurs vérifient à distance qu'elle n'était pas vide ; reliée au Web en 1993, elle est devenue l'une des premières webcams.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'installée à Cambridge en 1991, une caméra filmait une cafetière pour que les chercheurs vérifient à distance qu'elle n'était pas vide ; reliée au Web en 1993, elle est devenue l'une des premières webcams ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'install%C3%A9e%20%C3%A0%20Cambridge%20en%201991%2C%20une%20cam%C3%A9ra%20filmait%20une%20cafeti%C3%A8re%20pour%20que%20les%20chercheurs%20v%C3%A9rifient%20%C3%A0%20distance%20qu'elle%20n'%C3%A9tait%20pas%20vide%20%3B%20reli%C3%A9e%20au%20Web%20en%201993%2C%20elle%20est%20devenue%20l'une%20des%20premi%C3%A8res%20webcams%20%3F",
  "explanation": "La Trojan Room coffee pot se trouvait dans le laboratoire d'informatique de l'université de Cambridge. Les chercheurs des autres étages vérifiaient s'il restait du café avant de se déplacer. Elle a été mise sur le Web en 1993, et éteinte en 2001. La cafetière a été vendue aux enchères."
 },
 {
  "text": "Le code d'erreur HTTP 418 signifie « Je suis une théière » : il vient d'un protocole de contrôle de cafetières publié comme poisson d'avril le 1er avril 1998 (RFC 2324).",
  "source": "Perplexity",
  "question": "Est-il vrai que le code d'erreur HTTP 418 signifie « Je suis une théière » : il vient d'un protocole de contrôle de cafetières publié comme poisson d'avril le 1er avril 1998 (RFC 2324) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20code%20d'erreur%20HTTP%20418%20signifie%20%C2%AB%20Je%20suis%20une%20th%C3%A9i%C3%A8re%20%C2%BB%20%3A%20il%20vient%20d'un%20protocole%20de%20contr%C3%B4le%20de%20cafeti%C3%A8res%20publi%C3%A9%20comme%20poisson%20d'avril%20le%201er%20avril%201998%20(RFC%202324)%20%3F",
  "explanation": "Le RFC 2324 décrit le « Hyper Text Coffee Pot Control Protocol », un protocole de contrôle de cafetières. Le code 418 indique qu'une théière refuse de préparer du café. Le code n'est pas officiel, mais il est implémenté par de nombreux serveurs comme clin d'œil."
 },
 {
  "text": "Le domaine .tv appartient à Tuvalu : en 2019, ses redevances représentaient 8,4 % des recettes de l'État de cet archipel du Pacifique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le domaine .tv appartient à Tuvalu : en 2019, ses redevances représentaient 8,4 % des recettes de l'État de cet archipel du Pacifique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20domaine%20.tv%20appartient%20%C3%A0%20Tuvalu%20%3A%20en%202019%2C%20ses%20redevances%20repr%C3%A9sentaient%208%2C4%20%25%20des%20recettes%20de%20l'%C3%89tat%20de%20cet%20archipel%20du%20Pacifique%20%3F",
  "explanation": "Tuvalu, petit État insulaire du Pacifique, a reçu l'extension « .tv » lors de l'attribution des noms de domaine par pays. Le domaine est populaire auprès des chaînes de télévision et plateformes de streaming. Les revenus de sa gestion financent une part importante de son budget."
 },
 {
  "text": "La marque Häagen-Dazs n'a rien de scandinave : ce nom sans signification a été inventé dans le Bronx, à New York, pour sonner danois.",
  "source": "Perplexity",
  "question": "Est-il vrai que la marque Häagen-Dazs n'a rien de scandinave : ce nom sans signification a été inventé dans le Bronx, à New York, pour sonner danois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20marque%20H%C3%A4agen-Dazs%20n'a%20rien%20de%20scandinave%20%3A%20ce%20nom%20sans%20signification%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20dans%20le%20Bronx%2C%20%C3%A0%20New%20York%2C%20pour%20sonner%20danois%20%3F",
  "explanation": "Reuben Mattus, glacier du Bronx, a inventé le nom Häagen-Dazs en 1960, pour donner une image européenne. Le tréma n'existe pas en danois. Le nom n'a aucune signification. Il voulait rendre hommage au Danemark pour son attitude envers les Juifs pendant la guerre."
 },
 {
  "text": "Le mot byte s'écrit avec un y parce que Werner Buchholz, qui l'a créé chez IBM en 1956, voulait éviter qu'une faute de frappe ne transforme « bite » en « bit ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot byte s'écrit avec un y parce que Werner Buchholz, qui l'a créé chez IBM en 1956, voulait éviter qu'une faute de frappe ne transforme « bite » en « bit » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20byte%20s'%C3%A9crit%20avec%20un%20y%20parce%20que%20Werner%20Buchholz%2C%20qui%20l'a%20cr%C3%A9%C3%A9%20chez%20IBM%20en%201956%2C%20voulait%20%C3%A9viter%20qu'une%20faute%20de%20frappe%20ne%20transforme%20%C2%AB%20bite%20%C2%BB%20en%20%C2%AB%20bit%20%C2%BB%20%3F",
  "explanation": "Werner Buchholz a créé le terme « byte » en 1956 pour l'ordinateur IBM Stretch. Il désignait un groupe de bits. Le mot vient de « bite » (bouchée), écrit avec un y pour ne pas être confondu avec « bit »."
 },
 {
  "text": "La sonde Mars Climate Orbiter, qui a coûté 327,6 millions de dollars, a été détruite en 1999 car un logiciel calculait en livres-force seconde et un autre attendait des newtons-seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que la sonde Mars Climate Orbiter, qui a coûté 327,6 millions de dollars, a été détruite en 1999 car un logiciel calculait en livres-force seconde et un autre attendait des newtons-seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20sonde%20Mars%20Climate%20Orbiter%2C%20qui%20a%20co%C3%BBt%C3%A9%20327%2C6%20millions%20de%20dollars%2C%20a%20%C3%A9t%C3%A9%20d%C3%A9truite%20en%201999%20car%20un%20logiciel%20calculait%20en%20livres-force%20seconde%20et%20un%20autre%20attendait%20des%20newtons-seconde%20%3F",
  "explanation": "Mars Climate Orbiter devait se mettre en orbite autour de Mars. Un logiciel de Lockheed Martin fournissait des données en unités anglo-saxonnes, alors que celui de la NASA attendait des unités métriques. La trajectoire était trop basse : la sonde s'est désintégrée dans l'atmosphère martienne."
 },
 {
  "text": "En 1897, la Chambre des représentants de l'Indiana a voté à l'unanimité un texte impliquant que pi vaut 3,2 ; le Sénat a ajourné le projet indéfiniment.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1897, la Chambre des représentants de l'Indiana a voté à l'unanimité un texte impliquant que pi vaut 3,2 ; le Sénat a ajourné le projet indéfiniment ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201897%2C%20la%20Chambre%20des%20repr%C3%A9sentants%20de%20l'Indiana%20a%20vot%C3%A9%20%C3%A0%20l'unanimit%C3%A9%20un%20texte%20impliquant%20que%20pi%20vaut%203%2C2%20%3B%20le%20S%C3%A9nat%20a%20ajourn%C3%A9%20le%20projet%20ind%C3%A9finiment%20%3F",
  "explanation": "Le projet, proposé par un médecin amateur de mathématiques, prétendait offrir une méthode pour la quadrature du cercle. Les calculs impliquaient une valeur de pi de 3,2. Un professeur de mathématiques présent au Capitole a alerté les sénateurs, et le projet a été abandonné."
 },
 {
  "text": "Le 9 septembre 1947, une vraie mite a été retrouvée coincée dans un relais du calculateur Harvard Mark II, puis scotchée dans le journal de bord avec la mention « premier vrai cas de bug trouvé ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le 9 septembre 1947, une vraie mite a été retrouvée coincée dans un relais du calculateur Harvard Mark II, puis scotchée dans le journal de bord avec la mention « premier vrai cas de bug trouvé » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%209%20septembre%201947%2C%20une%20vraie%20mite%20a%20%C3%A9t%C3%A9%20retrouv%C3%A9e%20coinc%C3%A9e%20dans%20un%20relais%20du%20calculateur%20Harvard%20Mark%20II%2C%20puis%20scotch%C3%A9e%20dans%20le%20journal%20de%20bord%20avec%20la%20mention%20%C2%AB%20premier%20vrai%20cas%20de%20bug%20trouv%C3%A9%20%C2%BB%20%3F",
  "explanation": "L'équipe de Grace Hopper a trouvé une mite dans un relais du calculateur Mark II. Elle a été scotchée dans le journal de bord avec la mention « First actual case of bug being found ». Le terme « bug » existait déjà pour désigner un défaut, et l'anecdote l'a popularisé en informatique."
 },
 {
  "text": "Pac-Man s'appelait Puck Man au Japon ; le nom a été changé aux États-Unis par crainte que des vandales transforment le P en F sur les bornes d'arcade.",
  "source": "Perplexity",
  "question": "Est-il vrai que pac-Man s'appelait Puck Man au Japon ; le nom a été changé aux États-Unis par crainte que des vandales transforment le P en F sur les bornes d'arcade ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pac-Man%20s'appelait%20Puck%20Man%20au%20Japon%20%3B%20le%20nom%20a%20%C3%A9t%C3%A9%20chang%C3%A9%20aux%20%C3%89tats-Unis%20par%20crainte%20que%20des%20vandales%20transforment%20le%20P%20en%20F%20sur%20les%20bornes%20d'arcade%20%3F",
  "explanation": "Le nom japonais vient de « paku paku », l'onomatopée de la bouche qui s'ouvre et se ferme. Pour la sortie américaine, Namco a changé Puck Man en Pac-Man, pour éviter qu'on transforme le P en F et obtienne un mot grossier."
 },
 {
  "text": "« Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo » est une phrase grammaticalement correcte en anglais, composée d'un seul mot répété huit fois.",
  "source": "Perplexity",
  "question": "Est-il vrai que « Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo » est une phrase grammaticalement correcte en anglais, composée d'un seul mot répété huit fois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20%C2%AB%20Buffalo%20buffalo%20Buffalo%20buffalo%20buffalo%20buffalo%20Buffalo%20buffalo%20%C2%BB%20est%20une%20phrase%20grammaticalement%20correcte%20en%20anglais%2C%20compos%C3%A9e%20d'un%20seul%20mot%20r%C3%A9p%C3%A9t%C3%A9%20huit%20fois%20%3F",
  "explanation": "La phrase utilise trois sens de « buffalo » : la ville de Buffalo, l'animal (bison), et le verbe « buffalo », qui signifie intimider. Elle signifie : « Les bisons de Buffalo, que les bisons de Buffalo intimident, intimident les bisons de Buffalo. » Elle a été popularisée par le linguiste William Rapaport."
 },
 {
  "text": "De 1934 à 1947, le dictionnaire Merriam-Webster a contenu le mot « dord », qui n'existait pas : il provenait d'une fiche « D or d » (abréviation de densité) mal lue.",
  "source": "Perplexity",
  "question": "Est-il vrai que de 1934 à 1947, le dictionnaire Merriam-Webster a contenu le mot « dord », qui n'existait pas : il provenait d'une fiche « D or d » (abréviation de densité) mal lue ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20de%201934%20%C3%A0%201947%2C%20le%20dictionnaire%20Merriam-Webster%20a%20contenu%20le%20mot%20%C2%AB%20dord%20%C2%BB%2C%20qui%20n'existait%20pas%20%3A%20il%20provenait%20d'une%20fiche%20%C2%AB%20D%20or%20d%20%C2%BB%20(abr%C3%A9viation%20de%20densit%C3%A9)%20mal%20lue%20%3F",
  "explanation": "Une fiche portant « D or d », indiquant que « densité » pouvait s'abréger en D ou d, a été interprétée comme un mot, « dord ». Il est entré dans le dictionnaire en 1934 avec la définition « densité ». L'erreur a été repérée en 1939, et le mot retiré en 1947."
 },
 {
  "text": "Le smiley :-) a été proposé le 19 septembre 1982 par Scott Fahlman, après qu'une blague sur une fuite de mercure dans un ascenseur avait été prise au sérieux.",
  "source": "Perplexity",
  "question": "Est-il vrai que le smiley :-) a été proposé le 19 septembre 1982 par Scott Fahlman, après qu'une blague sur une fuite de mercure dans un ascenseur avait été prise au sérieux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20smiley%20%3A-)%20a%20%C3%A9t%C3%A9%20propos%C3%A9%20le%2019%20septembre%201982%20par%20Scott%20Fahlman%2C%20apr%C3%A8s%20qu'une%20blague%20sur%20une%20fuite%20de%20mercure%20dans%20un%20ascenseur%20avait%20%C3%A9t%C3%A9%20prise%20au%20s%C3%A9rieux%20%3F",
  "explanation": "Sur un forum de l'université Carnegie Mellon, une blague sur une fuite de mercure dans un ascenseur avait été prise au sérieux. Scott Fahlman a proposé d'utiliser :-) pour les messages humoristiques et :-( pour les sérieux. Son message a été retrouvé en 2002."
 },
 {
  "text": "Le 16 décembre 1965, les astronautes de Gemini 6 ont joué « Jingle Bells » en orbite sur un harmonica et des grelots embarqués en douce : l'une des premières chansons diffusées depuis l'espace.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 16 décembre 1965, les astronautes de Gemini 6 ont joué « Jingle Bells » en orbite sur un harmonica et des grelots embarqués en douce : l'une des premières chansons diffusées depuis l'espace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2016%20d%C3%A9cembre%201965%2C%20les%20astronautes%20de%20Gemini%206%20ont%20jou%C3%A9%20%C2%AB%20Jingle%20Bells%20%C2%BB%20en%20orbite%20sur%20un%20harmonica%20et%20des%20grelots%20embarqu%C3%A9s%20en%20douce%20%3A%20l'une%20des%20premi%C3%A8res%20chansons%20diffus%C3%A9es%20depuis%20l'espace%20%3F",
  "explanation": "Walter Schirra et Thomas Stafford, à bord de Gemini 6, ont annoncé avoir vu un objet volant non identifié, un « homme en rouge ». Ils ont ensuite joué « Jingle Bells » avec un harmonica et des clochettes. Les instruments sont exposés au Smithsonian."
 },
 {
  "text": "Le sang de la scène de la douche de « Psychose » (1960) était du sirop de chocolat, et le film est considéré comme le premier grand film américain à montrer une chasse d'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sang de la scène de la douche de « Psychose » (1960) était du sirop de chocolat, et le film est considéré comme le premier grand film américain à montrer une chasse d'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sang%20de%20la%20sc%C3%A8ne%20de%20la%20douche%20de%20%C2%AB%20Psychose%20%C2%BB%20(1960)%20%C3%A9tait%20du%20sirop%20de%20chocolat%2C%20et%20le%20film%20est%20consid%C3%A9r%C3%A9%20comme%20le%20premier%20grand%20film%20am%C3%A9ricain%20%C3%A0%20montrer%20une%20chasse%20d'eau%20%3F",
  "explanation": "« Psychose » d'Alfred Hitchcock était en noir et blanc : le sirop de chocolat rendait mieux à l'image que le faux sang. La scène de la douche a été tournée pendant une semaine. Montrer une chasse d'eau à l'écran était alors considéré comme choquant."
 },
 {
  "text": "Sherlock Holmes ne dit jamais « Élémentaire, mon cher Watson » dans aucune des 60 histoires écrites par Arthur Conan Doyle.",
  "source": "Perplexity",
  "question": "Est-il vrai que sherlock Holmes ne dit jamais « Élémentaire, mon cher Watson » dans aucune des 60 histoires écrites par Arthur Conan Doyle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sherlock%20Holmes%20ne%20dit%20jamais%20%C2%AB%20%C3%89l%C3%A9mentaire%2C%20mon%20cher%20Watson%20%C2%BB%20dans%20aucune%20des%2060%20histoires%20%C3%A9crites%20par%20Arthur%20Conan%20Doyle%20%3F",
  "explanation": "Holmes dit « Elementary » ou « My dear Watson », mais jamais la phrase complète dans les romans et nouvelles de Conan Doyle. La formule a été popularisée par les films et adaptations ultérieures, notamment à partir de 1929."
 },
 {
  "text": "Sur le tournage de « L'Empire contre-attaque », David Prowse, l'acteur sous le casque de Dark Vador, récitait une fausse réplique : la révélation « Je suis ton père » est restée secrète jusqu'au doublage.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur le tournage de « L'Empire contre-attaque », David Prowse, l'acteur sous le casque de Dark Vador, récitait une fausse réplique : la révélation « Je suis ton père » est restée secrète jusqu'au doublage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20le%20tournage%20de%20%C2%AB%20L'Empire%20contre-attaque%20%C2%BB%2C%20David%20Prowse%2C%20l'acteur%20sous%20le%20casque%20de%20Dark%20Vador%2C%20r%C3%A9citait%20une%20fausse%20r%C3%A9plique%20%3A%20la%20r%C3%A9v%C3%A9lation%20%C2%AB%20Je%20suis%20ton%20p%C3%A8re%20%C2%BB%20est%20rest%C3%A9e%20secr%C3%A8te%20jusqu'au%20doublage%20%3F",
  "explanation": "Pour éviter les fuites, le script indiquait « Obi-Wan a tué ton père ». Seules quelques personnes connaissaient la vraie réplique. Mark Hamill a été informé juste avant le tournage de la scène. James Earl Jones a enregistré la vraie réplique en postproduction."
 },
 {
  "text": "Le premier objet vendu sur eBay était un pointeur laser cassé, parti pour 14,83 dollars : l'acheteur collectionnait les pointeurs laser cassés.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier objet vendu sur eBay était un pointeur laser cassé, parti pour 14,83 dollars : l'acheteur collectionnait les pointeurs laser cassés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20objet%20vendu%20sur%20eBay%20%C3%A9tait%20un%20pointeur%20laser%20cass%C3%A9%2C%20parti%20pour%2014%2C83%20dollars%20%3A%20l'acheteur%20collectionnait%20les%20pointeurs%20laser%20cass%C3%A9s%20%3F",
  "explanation": "En 1995, Pierre Omidyar a lancé AuctionWeb, futur eBay. Il a mis en vente un pointeur laser cassé, pour tester le site. Il a été surpris qu'un acheteur l'achète. Celui-ci lui a expliqué qu'il collectionnait les pointeurs laser cassés."
 },
 {
  "text": "Le paradoxe de Banach-Tarski démontre qu'une boule pleine peut être découpée en 5 morceaux puis réassemblée en deux boules identiques à l'originale.",
  "source": "Perplexity",
  "question": "Est-il vrai que le paradoxe de Banach-Tarski démontre qu'une boule pleine peut être découpée en 5 morceaux puis réassemblée en deux boules identiques à l'originale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20paradoxe%20de%20Banach-Tarski%20d%C3%A9montre%20qu'une%20boule%20pleine%20peut%20%C3%AAtre%20d%C3%A9coup%C3%A9e%20en%205%20morceaux%20puis%20r%C3%A9assembl%C3%A9e%20en%20deux%20boules%20identiques%20%C3%A0%20l'originale%20%3F",
  "explanation": "Le paradoxe de Banach-Tarski, démontré en 1924, est un théorème mathématique. Les morceaux utilisés sont des ensembles de points si complexes qu'on ne peut pas leur attribuer de volume. Le résultat repose sur l'axiome du choix. Il est impossible à réaliser physiquement."
 },
 {
  "text": "Le score le plus élevé de l'histoire du football est 149-0, en 2002 à Madagascar : les joueurs du SO l'Emyrne ont marqué contre leur camp toute la partie pour protester contre l'arbitrage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le score le plus élevé de l'histoire du football est 149-0, en 2002 à Madagascar : les joueurs du SO l'Emyrne ont marqué contre leur camp toute la partie pour protester contre l'arbitrage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20score%20le%20plus%20%C3%A9lev%C3%A9%20de%20l'histoire%20du%20football%20est%20149-0%2C%20en%202002%20%C3%A0%20Madagascar%20%3A%20les%20joueurs%20du%20SO%20l'Emyrne%20ont%20marqu%C3%A9%20contre%20leur%20camp%20toute%20la%20partie%20pour%20protester%20contre%20l'arbitrage%20%3F",
  "explanation": "En 2002, lors du championnat de Madagascar, le SO l'Emyrne, mécontent d'une décision arbitrale lors d'un match précédent, a marqué 149 buts contre son camp face à l'AS Adema. Les joueurs ont été suspendus. C'est le score le plus élevé de l'histoire du football."
 },
 {
  "text": "Le marathonien Shizo Kanakuri, qui avait abandonné le marathon olympique de 1912, l'a terminé en 1967 : chrono officiel de 54 ans, 8 mois, 6 jours et 5 heures.",
  "source": "Perplexity",
  "question": "Est-il vrai que le marathonien Shizo Kanakuri, qui avait abandonné le marathon olympique de 1912, l'a terminé en 1967 : chrono officiel de 54 ans, 8 mois, 6 jours et 5 heures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20marathonien%20Shizo%20Kanakuri%2C%20qui%20avait%20abandonn%C3%A9%20le%20marathon%20olympique%20de%201912%2C%20l'a%20termin%C3%A9%20en%201967%20%3A%20chrono%20officiel%20de%2054%20ans%2C%208%20mois%2C%206%20jours%20et%205%20heures%20%3F",
  "explanation": "Shizo Kanakuri, épuisé par la chaleur, a abandonné le marathon de Stockholm et s'est arrêté dans une ferme. Il est rentré au Japon sans prévenir les organisateurs, qui l'ont déclaré disparu. En 1967, une télévision suédoise l'a invité à terminer la course, ce qu'il a fait."
 },
 {
  "text": "Roy Sullivan, garde forestier, a été frappé par la foudre 7 fois entre 1942 et 1977, et a survécu à chaque fois : un record Guinness.",
  "source": "Perplexity",
  "question": "Est-il vrai que Roy Sullivan, garde forestier, a été frappé par la foudre 7 fois entre 1942 et 1977, et a survécu à chaque fois : un record Guinness ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Roy%20Sullivan%2C%20garde%20forestier%2C%20a%20%C3%A9t%C3%A9%20frapp%C3%A9%20par%20la%20foudre%207%20fois%20entre%201942%20et%201977%2C%20et%20a%20surv%C3%A9cu%20%C3%A0%20chaque%20fois%20%3A%20un%20record%20Guinness%20%3F",
  "explanation": "Roy Sullivan, garde forestier en Virginie, a été frappé par la foudre à sept reprises. Il a perdu un ongle, ses sourcils, et ses cheveux ont pris feu à deux reprises. Les probabilités d'un tel record sont infimes, mais son métier l'exposait beaucoup."
 },
 {
  "text": "En 1945 dans le Colorado, un poulet nommé Mike a vécu 18 mois après avoir été décapité, la hache ayant épargné l'essentiel de son tronc cérébral.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1945 dans le Colorado, un poulet nommé Mike a vécu 18 mois après avoir été décapité, la hache ayant épargné l'essentiel de son tronc cérébral ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201945%20dans%20le%20Colorado%2C%20un%20poulet%20nomm%C3%A9%20Mike%20a%20v%C3%A9cu%2018%20mois%20apr%C3%A8s%20avoir%20%C3%A9t%C3%A9%20d%C3%A9capit%C3%A9%2C%20la%20hache%20ayant%20%C3%A9pargn%C3%A9%20l'essentiel%20de%20son%20tronc%20c%C3%A9r%C3%A9bral%20%3F",
  "explanation": "Lloyd Olsen a coupé la tête de Mike, mais une grande partie du tronc cérébral et une oreille étaient intactes. Mike a continué à vivre. Il a été nourri à la pipette, et présenté dans des foires. Il est mort étouffé en 1947. La ville de Fruita organise une fête en son honneur."
 },
 {
  "text": "En 1965, un notaire a acheté en viager l'appartement de Jeanne Calment, alors âgée de 90 ans : il est mort en 1995 et sa famille a dû continuer à payer, car elle a vécu jusqu'à 122 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1965, un notaire a acheté en viager l'appartement de Jeanne Calment, alors âgée de 90 ans : il est mort en 1995 et sa famille a dû continuer à payer, car elle a vécu jusqu'à 122 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201965%2C%20un%20notaire%20a%20achet%C3%A9%20en%20viager%20l'appartement%20de%20Jeanne%20Calment%2C%20alors%20%C3%A2g%C3%A9e%20de%2090%20ans%20%3A%20il%20est%20mort%20en%201995%20et%20sa%20famille%20a%20d%C3%BB%20continuer%20%C3%A0%20payer%2C%20car%20elle%20a%20v%C3%A9cu%20jusqu'%C3%A0%20122%20ans%20%3F",
  "explanation": "André-François Raffray a acheté l'appartement de Jeanne Calment en viager, en payant une rente mensuelle. Il est mort à 77 ans, et sa veuve a continué à payer. Jeanne Calment est morte en 1997, à 122 ans, la plus longue vie humaine vérifiée. Son âge a été contesté, puis confirmé."
 },
 {
  "text": "Une ampoule de la caserne de pompiers de Livermore, en Californie, brille quasiment sans interruption depuis 1901 : elle détient le record Guinness de la lumière la plus durable.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une ampoule de la caserne de pompiers de Livermore, en Californie, brille quasiment sans interruption depuis 1901 : elle détient le record Guinness de la lumière la plus durable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20ampoule%20de%20la%20caserne%20de%20pompiers%20de%20Livermore%2C%20en%20Californie%2C%20brille%20quasiment%20sans%20interruption%20depuis%201901%20%3A%20elle%20d%C3%A9tient%20le%20record%20Guinness%20de%20la%20lumi%C3%A8re%20la%20plus%20durable%20%3F",
  "explanation": "La Centennial Light est une ampoule à filament de carbone fabriquée à la fin du XIXe siècle. Elle brille presque sans interruption depuis 1901. Sa faible puissance, environ 4 watts, et le fait qu'elle soit rarement allumée et éteinte expliqueraient sa longévité. Elle est filmée en direct sur Internet."
 },
 {
  "text": "Lancée en 1927 en Australie, la plus longue expérience de laboratoire en continu au monde (record Guinness) consiste à regarder couler du bitume : seulement 9 gouttes sont tombées en près d'un siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que lancée en 1927 en Australie, la plus longue expérience de laboratoire en continu au monde (record Guinness) consiste à regarder couler du bitume : seulement 9 gouttes sont tombées en près d'un siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lanc%C3%A9e%20en%201927%20en%20Australie%2C%20la%20plus%20longue%20exp%C3%A9rience%20de%20laboratoire%20en%20continu%20au%20monde%20(record%20Guinness)%20consiste%20%C3%A0%20regarder%20couler%20du%20bitume%20%3A%20seulement%209%20gouttes%20sont%20tomb%C3%A9es%20en%20pr%C3%A8s%20d'un%20si%C3%A8cle%20%3F",
  "explanation": "L'expérience a été lancée à l'université du Queensland par Thomas Parnell pour montrer que le bitume, solide en apparence, est un liquide très visqueux. Personne n'a jamais vu une goutte tomber : elle s'est produite pendant une panne de caméra en 2000. La neuvième goutte est tombée en 2014."
 },
 {
  "text": "Le plus long match de tennis de l'histoire, Isner contre Mahut à Wimbledon en 2010, a duré 11 h 05 sur trois jours, avec un cinquième set terminé à 70-68.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long match de tennis de l'histoire, Isner contre Mahut à Wimbledon en 2010, a duré 11 h 05 sur trois jours, avec un cinquième set terminé à 70-68 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20match%20de%20tennis%20de%20l'histoire%2C%20Isner%20contre%20Mahut%20%C3%A0%20Wimbledon%20en%202010%2C%20a%20dur%C3%A9%2011%20h%2005%20sur%20trois%20jours%2C%20avec%20un%20cinqui%C3%A8me%20set%20termin%C3%A9%20%C3%A0%2070-68%20%3F",
  "explanation": "John Isner et Nicolas Mahut ont joué le premier tour de Wimbledon du 22 au 24 juin 2010. Le cinquième set a duré 8 h 11. Le tableau d'affichage est tombé en panne. Le match a conduit à l'introduction du jeu décisif dans le dernier set à Wimbledon en 2019."
 },
 {
  "text": "Le plus long combat de boxe connu, Andy Bowen contre Jack Burke en 1893, a duré 110 rounds et 7 h 19 : l'arbitre l'a déclaré sans vainqueur, les deux hommes étant trop épuisés pour quitter leur coin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long combat de boxe connu, Andy Bowen contre Jack Burke en 1893, a duré 110 rounds et 7 h 19 : l'arbitre l'a déclaré sans vainqueur, les deux hommes étant trop épuisés pour quitter leur coin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20combat%20de%20boxe%20connu%2C%20Andy%20Bowen%20contre%20Jack%20Burke%20en%201893%2C%20a%20dur%C3%A9%20110%20rounds%20et%207%20h%2019%20%3A%20l'arbitre%20l'a%20d%C3%A9clar%C3%A9%20sans%20vainqueur%2C%20les%20deux%20hommes%20%C3%A9tant%20trop%20%C3%A9puis%C3%A9s%20pour%20quitter%20leur%20coin%20%3F",
  "explanation": "Le combat entre Andy Bowen et Jack Burke a eu lieu à La Nouvelle-Orléans, en 1893. Les rounds duraient trois minutes. Après plus de 7 heures, l'arbitre l'a arrêté et a déclaré un « no contest », que les boxeurs ont contesté. Le prix a été partagé."
 },
 {
  "text": "Aux JO de 1912, une demi-finale de lutte a duré 11 h 40 : le vainqueur, Martin Klein, était si épuisé qu'il n'a pas pu disputer la finale et a dû se contenter de l'argent.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'aux JO de 1912, une demi-finale de lutte a duré 11 h 40 : le vainqueur, Martin Klein, était si épuisé qu'il n'a pas pu disputer la finale et a dû se contenter de l'argent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'aux%20JO%20de%201912%2C%20une%20demi-finale%20de%20lutte%20a%20dur%C3%A9%2011%20h%2040%20%3A%20le%20vainqueur%2C%20Martin%20Klein%2C%20%C3%A9tait%20si%20%C3%A9puis%C3%A9%20qu'il%20n'a%20pas%20pu%20disputer%20la%20finale%20et%20a%20d%C3%BB%20se%20contenter%20de%20l'argent%20%3F",
  "explanation": "La lutte gréco-romaine n'avait pas de limite de temps. Martin Klein, Estonien représentant la Russie, et Alfred Asikainen, Finlandais, se sont affrontés pendant 11 h 40. Klein a gagné, mais était trop épuisé pour la finale. Le titre est revenu au Suédois Claes Johansson."
 },
 {
  "text": "Le plus court vol commercial régulier au monde relie deux îles des Orcades, en Écosse : 2,7 km, prévus en une minute et demie, avec un record de 53 secondes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus court vol commercial régulier au monde relie deux îles des Orcades, en Écosse : 2,7 km, prévus en une minute et demie, avec un record de 53 secondes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20court%20vol%20commercial%20r%C3%A9gulier%20au%20monde%20relie%20deux%20%C3%AEles%20des%20Orcades%2C%20en%20%C3%89cosse%20%3A%202%2C7%20km%2C%20pr%C3%A9vus%20en%20une%20minute%20et%20demie%2C%20avec%20un%20record%20de%2053%20secondes%20%3F",
  "explanation": "La compagnie Loganair relie les îles de Westray et Papa Westray, dans les Orcades. Le vol, effectué en petit avion, dure en moyenne environ 1 minute 30, selon le vent. Le record est de 53 secondes. Le trajet est plus court que la piste de certains aéroports."
 },
 {
  "text": "En 1989, Chamoy Thipyaso a été condamnée à 141 078 ans de prison pour une escroquerie pyramidale, mais elle a été libérée en 1993.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1989, Chamoy Thipyaso a été condamnée à 141 078 ans de prison pour une escroquerie pyramidale, mais elle a été libérée en 1993 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201989%2C%20Chamoy%20Thipyaso%20a%20%C3%A9t%C3%A9%20condamn%C3%A9e%20%C3%A0%20141%20078%20ans%20de%20prison%20pour%20une%20escroquerie%20pyramidale%2C%20mais%20elle%20a%20%C3%A9t%C3%A9%20lib%C3%A9r%C3%A9e%20en%201993%20%3F",
  "explanation": "Chamoy Thipyaso a escroqué plus de 16 000 personnes avec un système de Ponzi présenté comme un investissement pétrolier. Elle a été condamnée en 1989 à 141 078 ans de prison. Le droit thaïlandais limitant la peine effective, elle a été libérée après environ huit ans."
 },
 {
  "text": "La plus vieille bouteille de vin jamais restée fermée, datée du 4e siècle et trouvée dans une tombe romaine à Speyer, en Allemagne, n'a jamais été ouverte et contient encore du liquide.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus vieille bouteille de vin jamais restée fermée, datée du 4e siècle et trouvée dans une tombe romaine à Speyer, en Allemagne, n'a jamais été ouverte et contient encore du liquide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20vieille%20bouteille%20de%20vin%20jamais%20rest%C3%A9e%20ferm%C3%A9e%2C%20dat%C3%A9e%20du%204e%20si%C3%A8cle%20et%20trouv%C3%A9e%20dans%20une%20tombe%20romaine%20%C3%A0%20Speyer%2C%20en%20Allemagne%2C%20n'a%20jamais%20%C3%A9t%C3%A9%20ouverte%20et%20contient%20encore%20du%20liquide%20%3F",
  "explanation": "La bouteille de Speyer, d'environ 1,5 litre, a été retrouvée en 1867 dans la tombe d'un noble romain. Le vin est protégé par une couche d'huile d'olive et de cire. Elle est exposée au musée historique du Palatinat. Les scientifiques ont décidé de ne pas l'ouvrir."
 },
 {
  "text": "Don Gorske a mangé un Big Mac presque chaque jour depuis 1972 et a atteint les 35 000 en 2025, un record Guinness.",
  "source": "Perplexity",
  "question": "Est-il vrai que Don Gorske a mangé un Big Mac presque chaque jour depuis 1972 et a atteint les 35 000 en 2025, un record Guinness ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Don%20Gorske%20a%20mang%C3%A9%20un%20Big%20Mac%20presque%20chaque%20jour%20depuis%201972%20et%20a%20atteint%20les%2035%20000%20en%202025%2C%20un%20record%20Guinness%20%3F",
  "explanation": "Don Gorske a mangé son premier Big Mac en 1972 et il en a mangé environ deux par jour pendant des années. Il conserve les tickets de caisse comme preuves. Il assure être en bonne santé, avec un taux de cholestérol normal."
 },
 {
  "text": "Le premier mille-pattes ayant vraiment plus de 1 000 pattes n'a été décrit qu'en 2021 : Eumillipes persephone, trouvé à 60 m sous terre en Australie, en compte jusqu'à 1 306.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier mille-pattes ayant vraiment plus de 1 000 pattes n'a été décrit qu'en 2021 : Eumillipes persephone, trouvé à 60 m sous terre en Australie, en compte jusqu'à 1 306 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20mille-pattes%20ayant%20vraiment%20plus%20de%201%20000%20pattes%20n'a%20%C3%A9t%C3%A9%20d%C3%A9crit%20qu'en%202021%20%3A%20Eumillipes%20persephone%2C%20trouv%C3%A9%20%C3%A0%2060%20m%20sous%20terre%20en%20Australie%2C%20en%20compte%20jusqu'%C3%A0%201%20306%20%3F",
  "explanation": "Le mot « mille-pattes » est trompeur : la plupart des espèces ont moins de 400 pattes. Eumillipes persephone, découvert en Australie occidentale et décrit en 2021, peut avoir jusqu'à 1 306 pattes. Il mesure environ 10 cm et vit dans l'obscurité."
 },
 {
  "text": "En 2012, des chercheurs ont fait refleurir une plante à partir de tissus de fruits vieux de 31 800 ans, enfouis dans le terrier d'un écureuil du permafrost sibérien.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2012, des chercheurs ont fait refleurir une plante à partir de tissus de fruits vieux de 31 800 ans, enfouis dans le terrier d'un écureuil du permafrost sibérien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202012%2C%20des%20chercheurs%20ont%20fait%20refleurir%20une%20plante%20%C3%A0%20partir%20de%20tissus%20de%20fruits%20vieux%20de%2031%20800%20ans%2C%20enfouis%20dans%20le%20terrier%20d'un%20%C3%A9cureuil%20du%20permafrost%20sib%C3%A9rien%20%3F",
  "explanation": "Des scientifiques ont retrouvé des graines de Silene stenophylla dans des terriers d'écureuils, dans le permafrost. Les graines ne germaient pas, mais les tissus du placenta du fruit étaient viables. Ils ont cultivé des plantes en laboratoire, qui ont fleuri et produit des graines."
 },
 {
  "text": "Un palmier dattier baptisé Mathusalem a germé en 2005 à partir d'une graine vieille d'environ 2 000 ans trouvée à Massada, et son pollen a permis de récolter des dattes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un palmier dattier baptisé Mathusalem a germé en 2005 à partir d'une graine vieille d'environ 2 000 ans trouvée à Massada, et son pollen a permis de récolter des dattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20palmier%20dattier%20baptis%C3%A9%20Mathusalem%20a%20germ%C3%A9%20en%202005%20%C3%A0%20partir%20d'une%20graine%20vieille%20d'environ%202%20000%20ans%20trouv%C3%A9e%20%C3%A0%20Massada%2C%20et%20son%20pollen%20a%20permis%20de%20r%C3%A9colter%20des%20dattes%20%3F",
  "explanation": "Des graines de palmier dattier ont été découvertes dans la forteresse de Massada, en Israël. En 2005, des chercheurs ont réussi à faire germer l'une d'elles. Le palmier, un mâle, a été nommé Mathusalem. Son pollen a fécondé une femelle issue d'une autre graine ancienne, qui a produit des dattes."
 },
 {
  "text": "Wisdom, un albatros de Laysan bagué en 1956, a pondu un œuf en 2024 à au moins 73 ans : c'est le plus vieil oiseau sauvage connu.",
  "source": "Perplexity",
  "question": "Est-il vrai que wisdom, un albatros de Laysan bagué en 1956, a pondu un œuf en 2024 à au moins 73 ans : c'est le plus vieil oiseau sauvage connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20wisdom%2C%20un%20albatros%20de%20Laysan%20bagu%C3%A9%20en%201956%2C%20a%20pondu%20un%20%C5%93uf%20en%202024%20%C3%A0%20au%20moins%2073%20ans%20%3A%20c'est%20le%20plus%20vieil%20oiseau%20sauvage%20connu%20%3F",
  "explanation": "Wisdom, un albatros de Laysan, a été bagué sur l'atoll de Midway en 1956, alors qu'elle était déjà adulte. Elle a pondu de nombreux œufs avec plusieurs partenaires. En 2024, elle a pondu avec un nouveau partenaire. Elle aurait parcouru des millions de kilomètres en vol."
 },
 {
  "text": "En 1965-1966, Angus Barbieri a jeûné 382 jours sous suivi médical, ne prenant que thé, café, eau et vitamines, et a perdu 125 kg.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1965-1966, Angus Barbieri a jeûné 382 jours sous suivi médical, ne prenant que thé, café, eau et vitamines, et a perdu 125 kg ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201965-1966%2C%20Angus%20Barbieri%20a%20je%C3%BBn%C3%A9%20382%20jours%20sous%20suivi%20m%C3%A9dical%2C%20ne%20prenant%20que%20th%C3%A9%2C%20caf%C3%A9%2C%20eau%20et%20vitamines%2C%20et%20a%20perdu%20125%20kg%20%3F",
  "explanation": "Angus Barbieri pesait environ 207 kg. Il a jeûné pendant 382 jours, sous surveillance médicale à l'hôpital de Dundee. Il prenait des vitamines et des électrolytes. Il a atteint 82 kg et a maintenu son poids. Cette expérience n'est pas recommandée sans suivi médical."
 },
 {
  "text": "En 1945, Betty Lou Oliver a survécu à une chute de 75 étages dans un ascenseur de l'Empire State Building, le jour même où un bombardier s'était écrasé sur l'immeuble.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1945, Betty Lou Oliver a survécu à une chute de 75 étages dans un ascenseur de l'Empire State Building, le jour même où un bombardier s'était écrasé sur l'immeuble ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201945%2C%20Betty%20Lou%20Oliver%20a%20surv%C3%A9cu%20%C3%A0%20une%20chute%20de%2075%20%C3%A9tages%20dans%20un%20ascenseur%20de%20l'Empire%20State%20Building%2C%20le%20jour%20m%C3%AAme%20o%C3%B9%20un%20bombardier%20s'%C3%A9tait%20%C3%A9cras%C3%A9%20sur%20l'immeuble%20%3F",
  "explanation": "Le 28 juillet 1945, un bombardier B-25 s'est écrasé dans le brouillard sur l'Empire State Building. Betty Lou Oliver, liftière, a été blessée. Lors de son évacuation, les câbles de l'ascenseur, endommagés, ont lâché. Elle a survécu grâce à l'air comprimé et aux câbles accumulés au fond de la cage."
 },
 {
  "text": "Le 22 janvier 1943 à Spearfish, dans le Dakota du Sud, la température est passée de -20 °C à +7 °C en deux minutes, un record mondial toujours valable.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 22 janvier 1943 à Spearfish, dans le Dakota du Sud, la température est passée de -20 °C à +7 °C en deux minutes, un record mondial toujours valable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2022%20janvier%201943%20%C3%A0%20Spearfish%2C%20dans%20le%20Dakota%20du%20Sud%2C%20la%20temp%C3%A9rature%20est%20pass%C3%A9e%20de%20-20%20%C2%B0C%20%C3%A0%20%2B7%20%C2%B0C%20en%20deux%20minutes%2C%20un%20record%20mondial%20toujours%20valable%20%3F",
  "explanation": "Le changement brutal de température à Spearfish était dû au vent chinook, un vent chaud et sec qui descend des montagnes. La température est montée de 27 °C en 2 minutes, puis a chuté de nouveau. Selon des récits d'époque, des vitres se seraient brisées sous le choc thermique."
 },
 {
  "text": "En 2010 en Chine, un embouteillage de plus de 100 km a duré 12 jours sur la route nationale 110 : certains conducteurs n'avançaient que d'1 km par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2010 en Chine, un embouteillage de plus de 100 km a duré 12 jours sur la route nationale 110 : certains conducteurs n'avançaient que d'1 km par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202010%20en%20Chine%2C%20un%20embouteillage%20de%20plus%20de%20100%20km%20a%20dur%C3%A9%2012%20jours%20sur%20la%20route%20nationale%20110%20%3A%20certains%20conducteurs%20n'avan%C3%A7aient%20que%20d'1%20km%20par%20jour%20%3F",
  "explanation": "L'embouteillage de 2010 sur la route nationale 110, entre la Mongolie-Intérieure et Pékin, a été causé par des travaux et le trafic de camions transportant du charbon. Des commerçants locaux ont vendu de l'eau et des nouilles aux automobilistes, à prix gonflés."
 },
 {
  "text": "Le pêcheur José Salvador Alvarenga a dérivé 438 jours sur le Pacifique, du Mexique aux îles Marshall, en se nourrissant de poissons crus, de tortues et d'oiseaux attrapés à mains nues.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pêcheur José Salvador Alvarenga a dérivé 438 jours sur le Pacifique, du Mexique aux îles Marshall, en se nourrissant de poissons crus, de tortues et d'oiseaux attrapés à mains nues ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20p%C3%AAcheur%20Jos%C3%A9%20Salvador%20Alvarenga%20a%20d%C3%A9riv%C3%A9%20438%20jours%20sur%20le%20Pacifique%2C%20du%20Mexique%20aux%20%C3%AEles%20Marshall%2C%20en%20se%20nourrissant%20de%20poissons%20crus%2C%20de%20tortues%20et%20d'oiseaux%20attrap%C3%A9s%20%C3%A0%20mains%20nues%20%3F",
  "explanation": "José Salvador Alvarenga, pêcheur, est parti de la côte mexicaine en 2012 pour une sortie de pêche. Une tempête a endommagé son bateau. Son compagnon est mort. Il a dérivé jusqu'aux îles Marshall en 2014. Certains ont mis son récit en doute, mais il a passé un test au détecteur de mensonges."
 },
 {
  "text": "En 1999, Anna Bågenholm a survécu après être restée 80 minutes piégée dans l'eau glacée sous la glace, sa température corporelle étant descendue à 13,7 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1999, Anna Bågenholm a survécu après être restée 80 minutes piégée dans l'eau glacée sous la glace, sa température corporelle étant descendue à 13,7 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201999%2C%20Anna%20B%C3%A5genholm%20a%20surv%C3%A9cu%20apr%C3%A8s%20%C3%AAtre%20rest%C3%A9e%2080%20minutes%20pi%C3%A9g%C3%A9e%20dans%20l'eau%20glac%C3%A9e%20sous%20la%20glace%2C%20sa%20temp%C3%A9rature%20corporelle%20%C3%A9tant%20descendue%20%C3%A0%2013%2C7%20%C2%B0C%20%3F",
  "explanation": "Anna Bågenholm, étudiante en médecine, est tombée dans une rivière gelée en skiant en Norvège. Elle a été coincée sous la glace avec une poche d'air. Sa température est descendue à 13,7 °C. Son cœur s'était arrêté. Le froid a protégé son cerveau, et elle a été réanimée."
 },
 {
  "text": "Le plus vieux chat de l'histoire selon le Guinness, Creme Puff, a vécu 38 ans au Texas ; son maître lui donnait du bacon de dinde, du café crème et une pipette de vin rouge tous les deux jours.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus vieux chat de l'histoire selon le Guinness, Creme Puff, a vécu 38 ans au Texas ; son maître lui donnait du bacon de dinde, du café crème et une pipette de vin rouge tous les deux jours ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20vieux%20chat%20de%20l'histoire%20selon%20le%20Guinness%2C%20Creme%20Puff%2C%20a%20v%C3%A9cu%2038%20ans%20au%20Texas%20%3B%20son%20ma%C3%AEtre%20lui%20donnait%20du%20bacon%20de%20dinde%2C%20du%20caf%C3%A9%20cr%C3%A8me%20et%20une%20pipette%20de%20vin%20rouge%20tous%20les%20deux%20jours%20%3F",
  "explanation": "Creme Puff est née en 1967 et morte en 2005, à 38 ans. Son propriétaire, Jake Perry, a aussi possédé un autre chat très âgé. Son régime alimentaire inhabituel, à base de bacon, café et vin, n'est pas recommandé par les vétérinaires."
 },
 {
  "text": "La tortue Jonathan, qui vit sur l'île de Sainte-Hélène, serait née vers 1832 : elle est le plus vieil animal terrestre vivant connu.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tortue Jonathan, qui vit sur l'île de Sainte-Hélène, serait née vers 1832 : elle est le plus vieil animal terrestre vivant connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tortue%20Jonathan%2C%20qui%20vit%20sur%20l'%C3%AEle%20de%20Sainte-H%C3%A9l%C3%A8ne%2C%20serait%20n%C3%A9e%20vers%201832%20%3A%20elle%20est%20le%20plus%20vieil%20animal%20terrestre%20vivant%20connu%20%3F",
  "explanation": "Jonathan, une tortue géante des Seychelles, a été amenée à Sainte-Hélène en 1882, déjà adulte, ce qui permet d'estimer sa naissance vers 1832. Une photo de la fin du XIXe siècle la montre déjà sur l'île. Elle est aveugle et a perdu l'odorat, mais elle est toujours active et nourrie à la main."
 },
 {
  "text": "Ashrita Furman a établi plus de 700 records Guinness, dont le saut sur bâton sauteur sous l'eau et une course en sac contre un yak en Mongolie.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'Ashrita Furman a établi plus de 700 records Guinness, dont le saut sur bâton sauteur sous l'eau et une course en sac contre un yak en Mongolie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'Ashrita%20Furman%20a%20%C3%A9tabli%20plus%20de%20700%20records%20Guinness%2C%20dont%20le%20saut%20sur%20b%C3%A2ton%20sauteur%20sous%20l'eau%20et%20une%20course%20en%20sac%20contre%20un%20yak%20en%20Mongolie%20%3F",
  "explanation": "Ashrita Furman, un New-Yorkais, s'est lancé dans les records en 1979, inspiré par la méditation et le dépassement de soi. Il a détenu à un moment le plus grand nombre de records Guinness pour une seule personne. Il en a établi dans des dizaines de pays, souvent dans des lieux emblématiques."
 },
 {
  "text": "La grotte de Son Doong, au Vietnam, est si grande qu'une forêt pousse à l'intérieur et qu'un Boeing 747 pourrait y voler sans toucher les parois.",
  "source": "Perplexity",
  "question": "Est-il vrai que la grotte de Son Doong, au Vietnam, est si grande qu'une forêt pousse à l'intérieur et qu'un Boeing 747 pourrait y voler sans toucher les parois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20grotte%20de%20Son%20Doong%2C%20au%20Vietnam%2C%20est%20si%20grande%20qu'une%20for%C3%AAt%20pousse%20%C3%A0%20l'int%C3%A9rieur%20et%20qu'un%20Boeing%20747%20pourrait%20y%20voler%20sans%20toucher%20les%20parois%20%3F",
  "explanation": "Son Doong, découverte en 1990 par un habitant et explorée en 2009, est la plus grande grotte connue au monde. Certaines salles font plus de 200 m de haut. Des effondrements du plafond laissent entrer la lumière, permettant à une jungle de pousser à l'intérieur. Elle a même son propre microclimat, avec des nuages."
 },
 {
  "text": "Le plus vieux film conservé, tourné à Leeds en 1888, dure 2,11 secondes ; Sarah Whitley, l'une des quatre personnes filmées, est morte dix jours plus tard.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus vieux film conservé, tourné à Leeds en 1888, dure 2,11 secondes ; Sarah Whitley, l'une des quatre personnes filmées, est morte dix jours plus tard ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20vieux%20film%20conserv%C3%A9%2C%20tourn%C3%A9%20%C3%A0%20Leeds%20en%201888%2C%20dure%202%2C11%20secondes%20%3B%20Sarah%20Whitley%2C%20l'une%20des%20quatre%20personnes%20film%C3%A9es%2C%20est%20morte%20dix%20jours%20plus%20tard%20%3F",
  "explanation": "La « Roundhay Garden Scene » a été tournée par l'inventeur Louis Le Prince dans le jardin de ses beaux-parents à Leeds. On y voit quatre personnes marcher en rond. Le Prince a mystérieusement disparu en 1890, peu avant de présenter son invention."
 },
 {
  "text": "Le trou noir de l'amas de Persée émet des ondes de pression correspondant à un si bémol situé 57 octaves sous le do central, la note la plus grave jamais détectée dans l'Univers.",
  "source": "Perplexity",
  "question": "Est-il vrai que le trou noir de l'amas de Persée émet des ondes de pression correspondant à un si bémol situé 57 octaves sous le do central, la note la plus grave jamais détectée dans l'Univers ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20trou%20noir%20de%20l'amas%20de%20Pers%C3%A9e%20%C3%A9met%20des%20ondes%20de%20pression%20correspondant%20%C3%A0%20un%20si%20b%C3%A9mol%20situ%C3%A9%2057%20octaves%20sous%20le%20do%20central%2C%20la%20note%20la%20plus%20grave%20jamais%20d%C3%A9tect%C3%A9e%20dans%20l'Univers%20%3F",
  "explanation": "En 2003, le télescope spatial Chandra a observé des ondes concentriques dans le gaz chaud autour du trou noir supermassif de l'amas de Persée. Elles correspondent à des ondes sonores d'une période d'environ 10 millions d'années. Ce son est bien trop grave pour être entendu, et il ne se propage pas dans le vide, mais dans le gaz de l'amas."
 },
 {
  "text": "Au pôle Nord de Saturne tourne un courant atmosphérique en forme d'hexagone presque parfait dont chaque côté mesure environ 14 500 km, soit plus que le diamètre de la Terre (12 742 km).",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au pôle Nord de Saturne tourne un courant atmosphérique en forme d'hexagone presque parfait dont chaque côté mesure environ 14 500 km, soit plus que le diamètre de la Terre (12 742 km) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20p%C3%B4le%20Nord%20de%20Saturne%20tourne%20un%20courant%20atmosph%C3%A9rique%20en%20forme%20d'hexagone%20presque%20parfait%20dont%20chaque%20c%C3%B4t%C3%A9%20mesure%20environ%2014%20500%20km%2C%20soit%20plus%20que%20le%20diam%C3%A8tre%20de%20la%20Terre%20(12%20742%20km)%20%3F",
  "explanation": "L'hexagone de Saturne a été découvert par les sondes Voyager en 1981, puis observé en détail par Cassini. C'est un courant-jet qui tourne autour du pôle Nord. Sa forme hexagonale s'explique par des phénomènes d'ondes dans le fluide, que des expériences en laboratoire ont reproduits."
 },
 {
  "text": "Autour du quasar APM 08279+5255, à plus de 12 milliards d'années-lumière, flotte une masse de vapeur d'eau équivalente à 140 000 milliards de fois toute l'eau des océans terrestres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'autour du quasar APM 08279+5255, à plus de 12 milliards d'années-lumière, flotte une masse de vapeur d'eau équivalente à 140 000 milliards de fois toute l'eau des océans terrestres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'autour%20du%20quasar%20APM%2008279%2B5255%2C%20%C3%A0%20plus%20de%2012%20milliards%20d'ann%C3%A9es-lumi%C3%A8re%2C%20flotte%20une%20masse%20de%20vapeur%20d'eau%20%C3%A9quivalente%20%C3%A0%20140%20000%20milliards%20de%20fois%20toute%20l'eau%20des%20oc%C3%A9ans%20terrestres%20%3F",
  "explanation": "En 2011, des astronomes ont détecté une immense quantité de vapeur d'eau autour du trou noir supermassif qui alimente le quasar APM 08279+5255. Sa lumière a voyagé plus de 12 milliards d'années pour nous atteindre. C'est la plus grande réserve d'eau connue dans l'Univers."
 },
 {
  "text": "En 1971, l'astronaute d'Apollo 14 Stuart Roosa a emporté en orbite lunaire des centaines de graines d'arbres : devenues des « arbres lunaires », elles ont été plantées aux États-Unis et dans le monde entier.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1971, l'astronaute d'Apollo 14 Stuart Roosa a emporté en orbite lunaire des centaines de graines d'arbres : devenues des « arbres lunaires », elles ont été plantées aux États-Unis et dans le monde entier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201971%2C%20l'astronaute%20d'Apollo%2014%20Stuart%20Roosa%20a%20emport%C3%A9%20en%20orbite%20lunaire%20des%20centaines%20de%20graines%20d'arbres%20%3A%20devenues%20des%20%C2%AB%20arbres%20lunaires%20%C2%BB%2C%20elles%20ont%20%C3%A9t%C3%A9%20plant%C3%A9es%20aux%20%C3%89tats-Unis%20et%20dans%20le%20monde%20entier%20%3F",
  "explanation": "Stuart Roosa, ancien pompier forestier, a emporté environ 500 graines de pins, séquoias, sycomores et autres arbres. Les chercheurs voulaient savoir si le voyage les affecterait. Les arbres qui en sont issus ne présentaient pas de différence. Beaucoup ont été plantés dans des lieux symboliques, mais leur emplacement a parfois été perdu."
 },
 {
  "text": "Le géologue Eugene Shoemaker est la première personne dont les cendres reposent sur la Lune : elles y ont été écrasées volontairement avec la sonde Lunar Prospector en 1999.",
  "source": "Perplexity",
  "question": "Est-il vrai que le géologue Eugene Shoemaker est la première personne dont les cendres reposent sur la Lune : elles y ont été écrasées volontairement avec la sonde Lunar Prospector en 1999 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20g%C3%A9ologue%20Eugene%20Shoemaker%20est%20la%20premi%C3%A8re%20personne%20dont%20les%20cendres%20reposent%20sur%20la%20Lune%20%3A%20elles%20y%20ont%20%C3%A9t%C3%A9%20%C3%A9cras%C3%A9es%20volontairement%20avec%20la%20sonde%20Lunar%20Prospector%20en%201999%20%3F",
  "explanation": "Eugene Shoemaker, pionnier de la géologie planétaire, rêvait d'aller sur la Lune, mais un problème de santé l'en a empêché. Il est mort dans un accident de voiture en 1997. Une capsule contenant une partie de ses cendres a été placée à bord de Lunar Prospector, qui s'est écrasé dans un cratère près du pôle Sud lunaire."
 },
 {
  "text": "Une partie des cendres de Clyde Tombaugh, qui a découvert Pluton en 1930, voyage à bord de la sonde New Horizons, qui a survolé Pluton le 14 juillet 2015.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une partie des cendres de Clyde Tombaugh, qui a découvert Pluton en 1930, voyage à bord de la sonde New Horizons, qui a survolé Pluton le 14 juillet 2015 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20partie%20des%20cendres%20de%20Clyde%20Tombaugh%2C%20qui%20a%20d%C3%A9couvert%20Pluton%20en%201930%2C%20voyage%20%C3%A0%20bord%20de%20la%20sonde%20New%20Horizons%2C%20qui%20a%20survol%C3%A9%20Pluton%20le%2014%20juillet%202015%20%3F",
  "explanation": "Clyde Tombaugh, astronome, a découvert Pluton à l'observatoire Lowell en 1930. Il est mort en 1997. Une petite capsule contenant une partie de ses cendres a été fixée à la sonde New Horizons, lancée en 2006. La sonde poursuit sa route vers l'espace interstellaire."
 },
 {
  "text": "Une larme batavique, goutte de verre trempée dans l'eau, résiste à un coup de marteau sur sa tête, mais explose en poudre si l'on casse le bout de sa queue.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une larme batavique, goutte de verre trempée dans l'eau, résiste à un coup de marteau sur sa tête, mais explose en poudre si l'on casse le bout de sa queue ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20larme%20batavique%2C%20goutte%20de%20verre%20tremp%C3%A9e%20dans%20l'eau%2C%20r%C3%A9siste%20%C3%A0%20un%20coup%20de%20marteau%20sur%20sa%20t%C3%AAte%2C%20mais%20explose%20en%20poudre%20si%20l'on%20casse%20le%20bout%20de%20sa%20queue%20%3F",
  "explanation": "La larme batavique se forme en laissant tomber une goutte de verre fondu dans de l'eau froide. L'extérieur refroidit et durcit, puis l'intérieur se contracte, créant des contraintes de compression très fortes en surface. Quand on casse la queue, l'équilibre des forces est rompu, et la fissure se propage à plus de 1 km/s."
 },
 {
  "text": "Le francium, découvert en 1939 par Marguerite Perey, simple assistante à l'Institut du radium, est le dernier élément découvert dans la nature : tous les suivants ont d'abord été créés en laboratoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le francium, découvert en 1939 par Marguerite Perey, simple assistante à l'Institut du radium, est le dernier élément découvert dans la nature : tous les suivants ont d'abord été créés en laboratoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20francium%2C%20d%C3%A9couvert%20en%201939%20par%20Marguerite%20Perey%2C%20simple%20assistante%20%C3%A0%20l'Institut%20du%20radium%2C%20est%20le%20dernier%20%C3%A9l%C3%A9ment%20d%C3%A9couvert%20dans%20la%20nature%20%3A%20tous%20les%20suivants%20ont%20d'abord%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9s%20en%20laboratoire%20%3F",
  "explanation": "Marguerite Perey, assistante de Marie Curie, a identifié le francium en étudiant la désintégration de l'actinium. Elle l'a nommé d'après la France. Elle est devenue en 1962 la première femme élue à l'Académie des sciences comme membre correspondant. Le francium est extrêmement rare et radioactif."
 },
 {
  "text": "Dérouler du ruban adhésif dans le vide émet assez de rayons X pour radiographier un doigt : des chercheurs de l'UCLA l'ont démontré dans Nature en 2008.",
  "source": "Perplexity",
  "question": "Est-il vrai que dérouler du ruban adhésif dans le vide émet assez de rayons X pour radiographier un doigt : des chercheurs de l'UCLA l'ont démontré dans Nature en 2008 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20d%C3%A9rouler%20du%20ruban%20adh%C3%A9sif%20dans%20le%20vide%20%C3%A9met%20assez%20de%20rayons%20X%20pour%20radiographier%20un%20doigt%20%3A%20des%20chercheurs%20de%20l'UCLA%20l'ont%20d%C3%A9montr%C3%A9%20dans%20Nature%20en%202008%20%3F",
  "explanation": "Quand on décolle un ruban adhésif, des charges électriques se séparent et des électrons accélérés produisent de la lumière, phénomène appelé triboluminescence. Dans le vide, les électrons atteignent des énergies suffisantes pour produire des rayons X. Les chercheurs ont réalisé une radiographie d'un doigt avec un rouleau."
 },
 {
  "text": "En 1999, la physicienne Lene Hau a ralenti la lumière à 17 mètres par seconde, environ 60 km/h, en la faisant traverser un gaz d'atomes refroidis près du zéro absolu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1999, la physicienne Lene Hau a ralenti la lumière à 17 mètres par seconde, environ 60 km/h, en la faisant traverser un gaz d'atomes refroidis près du zéro absolu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201999%2C%20la%20physicienne%20Lene%20Hau%20a%20ralenti%20la%20lumi%C3%A8re%20%C3%A0%2017%20m%C3%A8tres%20par%20seconde%2C%20environ%2060%20km%2Fh%2C%20en%20la%20faisant%20traverser%20un%20gaz%20d'atomes%20refroidis%20pr%C3%A8s%20du%20z%C3%A9ro%20absolu%20%3F",
  "explanation": "Lene Hau, physicienne à Harvard, a fait passer de la lumière dans un condensat de Bose-Einstein, un état de la matière où les atomes refroidis se comportent comme un seul objet quantique. La lumière y a été ralentie à la vitesse d'un vélo rapide. En 2001, elle a même réussi à l'arrêter complètement."
 },
 {
  "text": "En 2012, des collisions d'ions de plomb au LHC du CERN ont produit une température de plus de 5 000 milliards de degrés, record Guinness de la température artificielle la plus élevée.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2012, des collisions d'ions de plomb au LHC du CERN ont produit une température de plus de 5 000 milliards de degrés, record Guinness de la température artificielle la plus élevée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202012%2C%20des%20collisions%20d'ions%20de%20plomb%20au%20LHC%20du%20CERN%20ont%20produit%20une%20temp%C3%A9rature%20de%20plus%20de%205%20000%20milliards%20de%20degr%C3%A9s%2C%20record%20Guinness%20de%20la%20temp%C3%A9rature%20artificielle%20la%20plus%20%C3%A9lev%C3%A9e%20%3F",
  "explanation": "L'expérience ALICE du LHC a recréé brièvement un plasma de quarks et de gluons, un état de la matière qui aurait existé juste après le Big Bang. La température dépassait 5 500 milliards de degrés, environ 250 000 fois celle du cœur du Soleil. Ce record a été reconnu par le Guinness."
 },
 {
  "text": "En 1940, pour cacher aux nazis les médailles Nobel en or de Max von Laue et James Franck, le chimiste George de Hevesy les a dissoutes dans de l'eau régale, puis a récupéré l'or après la guerre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1940, pour cacher aux nazis les médailles Nobel en or de Max von Laue et James Franck, le chimiste George de Hevesy les a dissoutes dans de l'eau régale, puis a récupéré l'or après la guerre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201940%2C%20pour%20cacher%20aux%20nazis%20les%20m%C3%A9dailles%20Nobel%20en%20or%20de%20Max%20von%20Laue%20et%20James%20Franck%2C%20le%20chimiste%20George%20de%20Hevesy%20les%20a%20dissoutes%20dans%20de%20l'eau%20r%C3%A9gale%2C%20puis%20a%20r%C3%A9cup%C3%A9r%C3%A9%20l'or%20apr%C3%A8s%20la%20guerre%20%3F",
  "explanation": "Les deux physiciens allemands avaient confié leurs médailles à l'institut de Niels Bohr à Copenhague. Exporter de l'or était interdit par les nazis. Quand les Allemands ont envahi le Danemark, George de Hevesy les a dissoutes dans l'eau régale, un mélange d'acides. Le flacon est resté sur une étagère. Après la guerre, l'or a été récupéré et les médailles refrappées."
 },
 {
  "text": "À Oklo, au Gabon, des gisements d'uranium ont fonctionné comme des réacteurs nucléaires naturels il y a environ 1,7 milliard d'années, pendant quelques centaines de milliers d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Oklo, au Gabon, des gisements d'uranium ont fonctionné comme des réacteurs nucléaires naturels il y a environ 1,7 milliard d'années, pendant quelques centaines de milliers d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Oklo%2C%20au%20Gabon%2C%20des%20gisements%20d'uranium%20ont%20fonctionn%C3%A9%20comme%20des%20r%C3%A9acteurs%20nucl%C3%A9aires%20naturels%20il%20y%20a%20environ%201%2C7%20milliard%20d'ann%C3%A9es%2C%20pendant%20quelques%20centaines%20de%20milliers%20d'ann%C3%A9es%20%3F",
  "explanation": "En 1972, des chercheurs ont trouvé à Oklo de l'uranium appauvri en uranium 235, comme s'il avait été utilisé dans un réacteur. Il y a 1,7 milliard d'années, la proportion d'uranium 235 était plus élevée, et l'eau souterraine jouait le rôle de modérateur. Des réactions en chaîne se sont produites, par intermittence."
 },
 {
  "text": "Si elle était assez lumineuse pour être vue en entier, la galaxie d'Andromède paraîtrait dans le ciel environ six fois plus large que la pleine Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que si elle était assez lumineuse pour être vue en entier, la galaxie d'Andromède paraîtrait dans le ciel environ six fois plus large que la pleine Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20elle%20%C3%A9tait%20assez%20lumineuse%20pour%20%C3%AAtre%20vue%20en%20entier%2C%20la%20galaxie%20d'Androm%C3%A8de%20para%C3%AEtrait%20dans%20le%20ciel%20environ%20six%20fois%20plus%20large%20que%20la%20pleine%20Lune%20%3F",
  "explanation": "La galaxie d'Andromède, notre voisine à environ 2,5 millions d'années-lumière, est immense. Seul son noyau brillant est visible à l'œil nu, par temps très clair. Son disque complet s'étend sur environ 3 degrés dans le ciel, contre un demi-degré pour la pleine Lune."
 },
 {
  "text": "En 1971, l'équipage d'Apollo 15 a déposé sur la Lune, sans l'annoncer, « Fallen Astronaut », une statuette en aluminium de 8,9 cm de l'artiste Paul Van Hoeydonck, en hommage aux astronautes morts.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1971, l'équipage d'Apollo 15 a déposé sur la Lune, sans l'annoncer, « Fallen Astronaut », une statuette en aluminium de 8,9 cm de l'artiste Paul Van Hoeydonck, en hommage aux astronautes morts ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201971%2C%20l'%C3%A9quipage%20d'Apollo%2015%20a%20d%C3%A9pos%C3%A9%20sur%20la%20Lune%2C%20sans%20l'annoncer%2C%20%C2%AB%20Fallen%20Astronaut%20%C2%BB%2C%20une%20statuette%20en%20aluminium%20de%208%2C9%20cm%20de%20l'artiste%20Paul%20Van%20Hoeydonck%2C%20en%20hommage%20aux%20astronautes%20morts%20%3F",
  "explanation": "Fallen Astronaut a été déposé par David Scott, avec une plaque portant les noms de 14 astronautes et cosmonautes morts. L'artiste avait demandé que l'œuvre reste anonyme et sans exploitation commerciale. La découverte de répliques vendues a provoqué une polémique. C'est la seule œuvre d'art sur la Lune."
 },
 {
  "text": "Dans « La Vie des oiseaux » de David Attenborough (1998), un oiseau-lyre superbe imite à la perfection une alarme de voiture, une tronçonneuse et des déclencheurs d'appareils photo.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans « La Vie des oiseaux » de David Attenborough (1998), un oiseau-lyre superbe imite à la perfection une alarme de voiture, une tronçonneuse et des déclencheurs d'appareils photo ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20%C2%AB%20La%20Vie%20des%20oiseaux%20%C2%BB%20de%20David%20Attenborough%20(1998)%2C%20un%20oiseau-lyre%20superbe%20imite%20%C3%A0%20la%20perfection%20une%20alarme%20de%20voiture%2C%20une%20tron%C3%A7onneuse%20et%20des%20d%C3%A9clencheurs%20d'appareils%20photo%20%3F",
  "explanation": "L'oiseau-lyre d'Australie est l'un des meilleurs imitateurs du monde animal. Les mâles intègrent à leur chant des sons de leur environnement, y compris d'origine humaine. La séquence de David Attenborough montre un oiseau imitant des appareils photo, une alarme de voiture et une tronçonneuse."
 },
 {
  "text": "Les fourmis charpentières de Floride amputent la patte blessée d'une congénère au niveau de la cuisse avec leurs mâchoires : 90 à 95 % des opérées survivent, selon une étude de 2024.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis charpentières de Floride amputent la patte blessée d'une congénère au niveau de la cuisse avec leurs mâchoires : 90 à 95 % des opérées survivent, selon une étude de 2024 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20charpenti%C3%A8res%20de%20Floride%20amputent%20la%20patte%20bless%C3%A9e%20d'une%20cong%C3%A9n%C3%A8re%20au%20niveau%20de%20la%20cuisse%20avec%20leurs%20m%C3%A2choires%20%3A%2090%20%C3%A0%2095%20%25%20des%20op%C3%A9r%C3%A9es%20survivent%2C%20selon%20une%20%C3%A9tude%20de%202024%20%3F",
  "explanation": "Une étude publiée en 2024 a montré que les fourmis charpentières de Floride (Camponotus floridanus) soignent les blessures de leurs congénères. Lorsqu'une patte est blessée près de la cuisse, d'autres fourmis l'amputent. Cette amputation réduit le risque d'infection. C'est le premier cas connu d'amputation pratiquée par un animal autre que l'humain."
 },
 {
  "text": "Le labre nettoyeur, un petit poisson de récif, réussit le test du miroir : marqué d'une tache colorée visible seulement dans son reflet, il tente de la gratter contre le sol.",
  "source": "Perplexity",
  "question": "Est-il vrai que le labre nettoyeur, un petit poisson de récif, réussit le test du miroir : marqué d'une tache colorée visible seulement dans son reflet, il tente de la gratter contre le sol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20labre%20nettoyeur%2C%20un%20petit%20poisson%20de%20r%C3%A9cif%2C%20r%C3%A9ussit%20le%20test%20du%20miroir%20%3A%20marqu%C3%A9%20d'une%20tache%20color%C3%A9e%20visible%20seulement%20dans%20son%20reflet%2C%20il%20tente%20de%20la%20gratter%20contre%20le%20sol%20%3F",
  "explanation": "Le test du miroir est utilisé pour tester la reconnaissance de soi. Une étude de 2019 a montré que des labres nettoyeurs, marqués d'une tache visible seulement dans un miroir, essayaient de la gratter. L'interprétation est débattue : certains chercheurs pensent que le test n'est pas adapté aux poissons."
 },
 {
  "text": "En 1999, l'analyse du cristallin d'une baleine boréale chassée en Alaska a estimé son âge à environ 211 ans, ce qui fait de cette espèce le mammifère le plus longévif connu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1999, l'analyse du cristallin d'une baleine boréale chassée en Alaska a estimé son âge à environ 211 ans, ce qui fait de cette espèce le mammifère le plus longévif connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201999%2C%20l'analyse%20du%20cristallin%20d'une%20baleine%20bor%C3%A9ale%20chass%C3%A9e%20en%20Alaska%20a%20estim%C3%A9%20son%20%C3%A2ge%20%C3%A0%20environ%20211%20ans%2C%20ce%20qui%20fait%20de%20cette%20esp%C3%A8ce%20le%20mammif%C3%A8re%20le%20plus%20long%C3%A9vif%20connu%20%3F",
  "explanation": "En analysant les acides aminés du cristallin d'une baleine boréale, les chercheurs ont estimé son âge à environ 211 ans. Des harpons de pierre du XIXe siècle ont aussi été retrouvés dans des baleines chassées. Les gènes de cette baleine sont étudiés pour comprendre sa résistance au cancer."
 },
 {
  "text": "L'hippopotame sécrète un liquide rouge-orangé qui n'est ni du sang ni de la sueur : son pigment, l'acide hipposudorique, agit comme crème solaire et antibiotique, selon une étude parue dans Nature en 2004.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'hippopotame sécrète un liquide rouge-orangé qui n'est ni du sang ni de la sueur : son pigment, l'acide hipposudorique, agit comme crème solaire et antibiotique, selon une étude parue dans Nature en 2004 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'hippopotame%20s%C3%A9cr%C3%A8te%20un%20liquide%20rouge-orang%C3%A9%20qui%20n'est%20ni%20du%20sang%20ni%20de%20la%20sueur%20%3A%20son%20pigment%2C%20l'acide%20hipposudorique%2C%20agit%20comme%20cr%C3%A8me%20solaire%20et%20antibiotique%2C%20selon%20une%20%C3%A9tude%20parue%20dans%20Nature%20en%202004%20%3F",
  "explanation": "L'hippopotame n'a pas de glandes sudoripares, mais sa peau sécrète une substance visqueuse. Elle devient rouge puis brune au contact de l'air. Ce pigment absorbe les rayons UV et inhibe la croissance de certaines bactéries. On a longtemps cru qu'il « transpirait du sang »."
 },
 {
  "text": "L'œil de l'autruche peut atteindre 5 cm de diamètre, environ deux fois celui d'un œil humain, et il est plus gros que son cerveau, pas plus grand qu'une noix.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'œil de l'autruche peut atteindre 5 cm de diamètre, environ deux fois celui d'un œil humain, et il est plus gros que son cerveau, pas plus grand qu'une noix ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C5%93il%20de%20l'autruche%20peut%20atteindre%205%20cm%20de%20diam%C3%A8tre%2C%20environ%20deux%20fois%20celui%20d'un%20%C5%93il%20humain%2C%20et%20il%20est%20plus%20gros%20que%20son%20cerveau%2C%20pas%20plus%20grand%20qu'une%20noix%20%3F",
  "explanation": "L'autruche a les plus grands yeux de tous les animaux terrestres, environ 5 cm de diamètre. Ils lui permettent de repérer des prédateurs à grande distance dans la savane. Chaque œil est plus gros que son cerveau."
 },
 {
  "text": "La coquille Saint-Jacques peut avoir jusqu'à 200 yeux, qui focalisent la lumière non pas avec une lentille mais avec un miroir fait de cristaux de guanine, comme un télescope.",
  "source": "Perplexity",
  "question": "Est-il vrai que la coquille Saint-Jacques peut avoir jusqu'à 200 yeux, qui focalisent la lumière non pas avec une lentille mais avec un miroir fait de cristaux de guanine, comme un télescope ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20coquille%20Saint-Jacques%20peut%20avoir%20jusqu'%C3%A0%20200%20yeux%2C%20qui%20focalisent%20la%20lumi%C3%A8re%20non%20pas%20avec%20une%20lentille%20mais%20avec%20un%20miroir%20fait%20de%20cristaux%20de%20guanine%2C%20comme%20un%20t%C3%A9lescope%20%3F",
  "explanation": "La coquille Saint-Jacques a des dizaines d'yeux, jusqu'à environ 200, sur le bord de son manteau. Chaque œil contient un miroir concave fait de cristaux carrés de guanine, qui concentre la lumière sur la rétine, comme dans un télescope à réflexion. Ils l'aident à détecter les mouvements."
 },
 {
  "text": "En hibernation, l'écureuil terrestre arctique laisse sa température corporelle descendre jusqu'à −2,9 °C sans geler, la plus basse jamais mesurée chez un mammifère vivant.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en hibernation, l'écureuil terrestre arctique laisse sa température corporelle descendre jusqu'à −2,9 °C sans geler, la plus basse jamais mesurée chez un mammifère vivant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20hibernation%2C%20l'%C3%A9cureuil%20terrestre%20arctique%20laisse%20sa%20temp%C3%A9rature%20corporelle%20descendre%20jusqu'%C3%A0%20%E2%88%922%2C9%20%C2%B0C%20sans%20geler%2C%20la%20plus%20basse%20jamais%20mesur%C3%A9e%20chez%20un%20mammif%C3%A8re%20vivant%20%3F",
  "explanation": "L'écureuil terrestre arctique hiberne jusqu'à huit mois par an. Sa température corporelle descend sous 0 °C, en surfusion : ses fluides restent liquides malgré le froid. Il se réchauffe toutes les deux à trois semaines, puis replonge en torpeur."
 },
 {
  "text": "Des seiches ont réussi une version du test du marshmallow : elles dédaignaient un morceau de crevette offert tout de suite pour attendre jusqu'à 130 secondes une crevette vivante, leur mets préféré (2021).",
  "source": "Perplexity",
  "question": "Est-il vrai que des seiches ont réussi une version du test du marshmallow : elles dédaignaient un morceau de crevette offert tout de suite pour attendre jusqu'à 130 secondes une crevette vivante, leur mets préféré (2021) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20des%20seiches%20ont%20r%C3%A9ussi%20une%20version%20du%20test%20du%20marshmallow%20%3A%20elles%20d%C3%A9daignaient%20un%20morceau%20de%20crevette%20offert%20tout%20de%20suite%20pour%20attendre%20jusqu'%C3%A0%20130%20secondes%20une%20crevette%20vivante%2C%20leur%20mets%20pr%C3%A9f%C3%A9r%C3%A9%20(2021)%20%3F",
  "explanation": "Le test du marshmallow mesure la capacité d'un enfant à retarder une récompense. Des chercheurs de Cambridge ont adapté le test à des seiches : elles pouvaient manger un morceau de crevette tout de suite, ou attendre une crevette vivante. Celles qui attendaient le plus longtemps apprenaient aussi plus vite."
 },
 {
  "text": "Des bourdons font rouler de petites balles en bois sans aucune récompense, certains jusqu'à 117 fois : en 2022, ce fut le premier jeu avec un objet démontré chez un insecte.",
  "source": "Perplexity",
  "question": "Est-il vrai que des bourdons font rouler de petites balles en bois sans aucune récompense, certains jusqu'à 117 fois : en 2022, ce fut le premier jeu avec un objet démontré chez un insecte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20des%20bourdons%20font%20rouler%20de%20petites%20balles%20en%20bois%20sans%20aucune%20r%C3%A9compense%2C%20certains%20jusqu'%C3%A0%20117%20fois%20%3A%20en%202022%2C%20ce%20fut%20le%20premier%20jeu%20avec%20un%20objet%20d%C3%A9montr%C3%A9%20chez%20un%20insecte%20%3F",
  "explanation": "Des chercheurs ont observé des bourdons rouler de petites balles sans récompense. Les jeunes bourdons roulaient les balles plus souvent que les adultes, et les mâles plus longtemps que les femelles. Les chercheurs y voient une forme de jeu, comme chez certains mammifères."
 },
 {
  "text": "Les poissons des glaces de l'Antarctique n'ont pas d'hémoglobine et presque pas de globules rouges : leur sang est transparent et l'oxygène y circule simplement dissous dans le plasma.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poissons des glaces de l'Antarctique n'ont pas d'hémoglobine et presque pas de globules rouges : leur sang est transparent et l'oxygène y circule simplement dissous dans le plasma ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poissons%20des%20glaces%20de%20l'Antarctique%20n'ont%20pas%20d'h%C3%A9moglobine%20et%20presque%20pas%20de%20globules%20rouges%20%3A%20leur%20sang%20est%20transparent%20et%20l'oxyg%C3%A8ne%20y%20circule%20simplement%20dissous%20dans%20le%20plasma%20%3F",
  "explanation": "Les poissons des glaces (Channichthyidae) vivent dans des eaux à environ -2 °C, riches en oxygène. Le froid permet à l'oxygène de se dissoudre davantage dans le sang. Pour compenser, ils ont un cœur plus gros, un volume sanguin important et des vaisseaux plus larges."
 },
 {
  "text": "Le minuscule caméléon Rhampholeon spinosus projette sa langue avec une accélération de 264 g, l'équivalent de passer de 0 à 97 km/h en un centième de seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le minuscule caméléon Rhampholeon spinosus projette sa langue avec une accélération de 264 g, l'équivalent de passer de 0 à 97 km/h en un centième de seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20minuscule%20cam%C3%A9l%C3%A9on%20Rhampholeon%20spinosus%20projette%20sa%20langue%20avec%20une%20acc%C3%A9l%C3%A9ration%20de%20264%20g%2C%20l'%C3%A9quivalent%20de%20passer%20de%200%20%C3%A0%2097%20km%2Fh%20en%20un%20centi%C3%A8me%20de%20seconde%20%3F",
  "explanation": "Le caméléon Rhampholeon spinosus, long de quelques centimètres, a une langue propulsée par des tissus élastiques qui stockent l'énergie, comme un ressort. Selon une étude de 2016, l'accélération atteint 264 fois celle de la gravité. Les plus petits caméléons ont les langues les plus rapides, proportionnellement."
 },
 {
  "text": "L'opah (Lampris guttatus) est le premier poisson connu entièrement à sang chaud : le battement constant de ses nageoires réchauffe tout son corps, selon une étude parue dans Science en 2015.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'opah (Lampris guttatus) est le premier poisson connu entièrement à sang chaud : le battement constant de ses nageoires réchauffe tout son corps, selon une étude parue dans Science en 2015 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'opah%20(Lampris%20guttatus)%20est%20le%20premier%20poisson%20connu%20enti%C3%A8rement%20%C3%A0%20sang%20chaud%20%3A%20le%20battement%20constant%20de%20ses%20nageoires%20r%C3%A9chauffe%20tout%20son%20corps%2C%20selon%20une%20%C3%A9tude%20parue%20dans%20Science%20en%202015%20%3F",
  "explanation": "L'opah, ou poisson-lune royal, vit en eaux profondes et froides. Les muscles de ses nageoires pectorales produisent de la chaleur, et ses branchies ont un système d'échange qui empêche le sang de se refroidir. Sa température est environ 5 °C plus élevée que celle de l'eau."
 },
 {
  "text": "Face à un frelon géant, des centaines d'abeilles japonaises l'enveloppent en boule et font vibrer leurs muscles jusqu'à environ 46 °C : le frelon meurt de chaleur, juste sous la limite fatale pour elles.",
  "source": "Perplexity",
  "question": "Est-il vrai que face à un frelon géant, des centaines d'abeilles japonaises l'enveloppent en boule et font vibrer leurs muscles jusqu'à environ 46 °C : le frelon meurt de chaleur, juste sous la limite fatale pour elles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20face%20%C3%A0%20un%20frelon%20g%C3%A9ant%2C%20des%20centaines%20d'abeilles%20japonaises%20l'enveloppent%20en%20boule%20et%20font%20vibrer%20leurs%20muscles%20jusqu'%C3%A0%20environ%2046%20%C2%B0C%20%3A%20le%20frelon%20meurt%20de%20chaleur%2C%20juste%20sous%20la%20limite%20fatale%20pour%20elles%20%3F",
  "explanation": "Les abeilles japonaises (Apis cerana japonica) forment une boule autour du frelon géant qui attaque la ruche. Elles font vibrer leurs muscles alaires pour produire de la chaleur, et augmentent la concentration de CO2. La température atteint environ 46 °C, mortelle pour le frelon, alors que les abeilles tolèrent jusqu'à environ 48 °C."
 },
 {
  "text": "Une baleine à bec de Cuvier est restée 222 minutes en plongée sans respirer au large de la Caroline du Nord, le record d'apnée pour un mammifère, publié en 2020.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une baleine à bec de Cuvier est restée 222 minutes en plongée sans respirer au large de la Caroline du Nord, le record d'apnée pour un mammifère, publié en 2020 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20baleine%20%C3%A0%20bec%20de%20Cuvier%20est%20rest%C3%A9e%20222%20minutes%20en%20plong%C3%A9e%20sans%20respirer%20au%20large%20de%20la%20Caroline%20du%20Nord%2C%20le%20record%20d'apn%C3%A9e%20pour%20un%20mammif%C3%A8re%2C%20publi%C3%A9%20en%202020%20%3F",
  "explanation": "Les baleines à bec de Cuvier sont les mammifères qui plongent le plus profond, jusqu'à près de 3 000 m. Une étude publiée en 2020 a enregistré une plongée de 222 minutes. Les chercheurs ne comprennent pas encore totalement comment elles gèrent le manque d'oxygène."
 },
 {
  "text": "Les poussins de l'hoazin, un oiseau d'Amazonie, portent des griffes sur les ailes qui leur servent à grimper dans les branches ; elles disparaissent en grandissant.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poussins de l'hoazin, un oiseau d'Amazonie, portent des griffes sur les ailes qui leur servent à grimper dans les branches ; elles disparaissent en grandissant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poussins%20de%20l'hoazin%2C%20un%20oiseau%20d'Amazonie%2C%20portent%20des%20griffes%20sur%20les%20ailes%20qui%20leur%20servent%20%C3%A0%20grimper%20dans%20les%20branches%20%3B%20elles%20disparaissent%20en%20grandissant%20%3F",
  "explanation": "L'hoazin vit dans les mangroves et forêts d'Amazonie. Les poussins ont deux griffes sur chaque aile, qui les aident à grimper. En cas de danger, ils se jettent dans l'eau, puis remontent dans l'arbre. Les griffes disparaissent chez l'adulte. On a comparé cette caractéristique à l'archéoptéryx."
 },
 {
  "text": "Sur 99 Équatoriens atteints du syndrome de Laron, une forme de nanisme, suivis pendant 22 ans, aucun n'a développé de diabète et un seul a eu un cancer, non mortel.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur 99 Équatoriens atteints du syndrome de Laron, une forme de nanisme, suivis pendant 22 ans, aucun n'a développé de diabète et un seul a eu un cancer, non mortel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%2099%20%C3%89quatoriens%20atteints%20du%20syndrome%20de%20Laron%2C%20une%20forme%20de%20nanisme%2C%20suivis%20pendant%2022%20ans%2C%20aucun%20n'a%20d%C3%A9velopp%C3%A9%20de%20diab%C3%A8te%20et%20un%20seul%20a%20eu%20un%20cancer%2C%20non%20mortel%20%3F",
  "explanation": "Les personnes atteintes du syndrome de Laron ont une résistance à l'hormone de croissance, ce qui les rend de petite taille. Une étude de 2011 sur une communauté équatorienne a montré une protection presque totale contre le diabète et le cancer. Les chercheurs étudient ce mécanisme pour des traitements."
 },
 {
  "text": "Chez les Bajau, « nomades de la mer » d'Indonésie qui plongent en apnée, la rate est en moyenne 50 % plus grosse que chez leurs voisins, un trait lié à une variante du gène PDE10A.",
  "source": "Perplexity",
  "question": "Est-il vrai que chez les Bajau, « nomades de la mer » d'Indonésie qui plongent en apnée, la rate est en moyenne 50 % plus grosse que chez leurs voisins, un trait lié à une variante du gène PDE10A ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chez%20les%20Bajau%2C%20%C2%AB%20nomades%20de%20la%20mer%20%C2%BB%20d'Indon%C3%A9sie%20qui%20plongent%20en%20apn%C3%A9e%2C%20la%20rate%20est%20en%20moyenne%2050%20%25%20plus%20grosse%20que%20chez%20leurs%20voisins%2C%20un%20trait%20li%C3%A9%20%C3%A0%20une%20variante%20du%20g%C3%A8ne%20PDE10A%20%3F",
  "explanation": "Les Bajau plongent jusqu'à des dizaines de mètres pour pêcher, parfois plusieurs heures par jour. Une étude de 2018 a montré que leur rate est plus grosse. La rate stocke des globules rouges riches en oxygène, libérés pendant la plongée. Un gène lié à cette taille de rate a été sélectionné au fil des générations."
 },
 {
  "text": "Les Tibétains doivent leur résistance à l'altitude à une version du gène EPAS1 héritée des Dénisoviens, une espèce humaine disparue.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Tibétains doivent leur résistance à l'altitude à une version du gène EPAS1 héritée des Dénisoviens, une espèce humaine disparue ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Tib%C3%A9tains%20doivent%20leur%20r%C3%A9sistance%20%C3%A0%20l'altitude%20%C3%A0%20une%20version%20du%20g%C3%A8ne%20EPAS1%20h%C3%A9rit%C3%A9e%20des%20D%C3%A9nisoviens%2C%20une%20esp%C3%A8ce%20humaine%20disparue%20%3F",
  "explanation": "La version du gène EPAS1 présente chez les Tibétains limite la surproduction de globules rouges en altitude, qui épaissit le sang et cause des problèmes de santé. Cette version a été héritée d'un croisement avec les Dénisoviens, il y a des dizaines de milliers d'années."
 },
 {
  "text": "Jo Cameron ne ressent presque ni douleur ni anxiété : en 2019, des chercheurs l'ont attribué en partie à une mutation d'un gène qu'on croyait inutile, baptisé FAAH-OUT.",
  "source": "Perplexity",
  "question": "Est-il vrai que Jo Cameron ne ressent presque ni douleur ni anxiété : en 2019, des chercheurs l'ont attribué en partie à une mutation d'un gène qu'on croyait inutile, baptisé FAAH-OUT ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Jo%20Cameron%20ne%20ressent%20presque%20ni%20douleur%20ni%20anxi%C3%A9t%C3%A9%20%3A%20en%202019%2C%20des%20chercheurs%20l'ont%20attribu%C3%A9%20en%20partie%20%C3%A0%20une%20mutation%20d'un%20g%C3%A8ne%20qu'on%20croyait%20inutile%2C%20baptis%C3%A9%20FAAH-OUT%20%3F",
  "explanation": "Jo Cameron a découvert son insensibilité à la douleur à 65 ans, lors d'une opération de la main qui aurait dû être douloureuse. Les chercheurs ont trouvé une mutation dans un gène voisin du gène FAAH, nommé FAAH-OUT. Il régule la dégradation de l'anandamide, une molécule liée à la douleur et à l'humeur."
 },
 {
  "text": "Une mutation du gène SMARCAD1 fait naître des personnes sans empreintes digitales : l'adermatoglyphie est surnommée « maladie du retard à l'immigration ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une mutation du gène SMARCAD1 fait naître des personnes sans empreintes digitales : l'adermatoglyphie est surnommée « maladie du retard à l'immigration » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20mutation%20du%20g%C3%A8ne%20SMARCAD1%20fait%20na%C3%AEtre%20des%20personnes%20sans%20empreintes%20digitales%20%3A%20l'adermatoglyphie%20est%20surnomm%C3%A9e%20%C2%AB%20maladie%20du%20retard%20%C3%A0%20l'immigration%20%C2%BB%20%3F",
  "explanation": "L'adermatoglyphie est une maladie génétique très rare qui empêche la formation des empreintes digitales. Elle a été découverte en 2011 dans une famille, liée à une mutation de SMARCAD1. Les personnes concernées ont des difficultés aux contrôles de passeport biométriques, d'où le surnom de « maladie du retard à l'immigration »."
 },
 {
  "text": "Les petits points lumineux qui filent devant les yeux quand on regarde un ciel bleu sont des globules blancs circulant dans les capillaires devant la rétine.",
  "source": "Perplexity",
  "question": "Est-il vrai que les petits points lumineux qui filent devant les yeux quand on regarde un ciel bleu sont des globules blancs circulant dans les capillaires devant la rétine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20petits%20points%20lumineux%20qui%20filent%20devant%20les%20yeux%20quand%20on%20regarde%20un%20ciel%20bleu%20sont%20des%20globules%20blancs%20circulant%20dans%20les%20capillaires%20devant%20la%20r%C3%A9tine%20%3F",
  "explanation": "C'est le phénomène du champ entoptique de lumière bleue, ou phénomène de Scheerer. Les globules blancs, plus gros que les globules rouges, laissent passer la lumière bleue. On les voit comme de petits points lumineux qui suivent le rythme cardiaque. C'est normal et sans danger."
 },
 {
  "text": "En 2005, des chercheurs ont repéré chez un patient épileptique un neurone qui réagissait à diverses photos de Jennifer Aniston, mais pas aux autres célébrités testées, ni même à une photo d'elle avec Brad Pitt.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2005, des chercheurs ont repéré chez un patient épileptique un neurone qui réagissait à diverses photos de Jennifer Aniston, mais pas aux autres célébrités testées, ni même à une photo d'elle avec Brad Pitt ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202005%2C%20des%20chercheurs%20ont%20rep%C3%A9r%C3%A9%20chez%20un%20patient%20%C3%A9pileptique%20un%20neurone%20qui%20r%C3%A9agissait%20%C3%A0%20diverses%20photos%20de%20Jennifer%20Aniston%2C%20mais%20pas%20aux%20autres%20c%C3%A9l%C3%A9brit%C3%A9s%20test%C3%A9es%2C%20ni%20m%C3%AAme%20%C3%A0%20une%20photo%20d'elle%20avec%20Brad%20Pitt%20%3F",
  "explanation": "Lors d'une étude sur des patients épileptiques équipés d'électrodes, des neurones ont réagi spécifiquement à des personnes connues. L'un d'eux s'activait pour des photos de Jennifer Aniston. On a appelé ce type de neurones « neurones grand-mère » ou « neurones concept »."
 },
 {
  "text": "En 2002, en stimulant électriquement le gyrus angulaire droit d'une patiente épileptique, des neurologues ont provoqué chez elle, à plusieurs reprises, des sorties hors du corps.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2002, en stimulant électriquement le gyrus angulaire droit d'une patiente épileptique, des neurologues ont provoqué chez elle, à plusieurs reprises, des sorties hors du corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202002%2C%20en%20stimulant%20%C3%A9lectriquement%20le%20gyrus%20angulaire%20droit%20d'une%20patiente%20%C3%A9pileptique%2C%20des%20neurologues%20ont%20provoqu%C3%A9%20chez%20elle%2C%20%C3%A0%20plusieurs%20reprises%2C%20des%20sorties%20hors%20du%20corps%20%3F",
  "explanation": "Le neurologue Olaf Blanke a stimulé le gyrus angulaire droit d'une patiente pour localiser l'origine de ses crises. Elle a eu l'impression de flotter au-dessus de son corps. Ces travaux suggèrent que les expériences de sortie du corps sont liées à des perturbations de l'intégration des informations sensorielles."
 },
 {
  "text": "Dans une étude publiée fin 2006, deux tiers des volontaires aux yeux bandés ont réussi à suivre à quatre pattes, au seul odorat, une piste de 10 mètres de ficelle parfumée au chocolat.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans une étude publiée fin 2006, deux tiers des volontaires aux yeux bandés ont réussi à suivre à quatre pattes, au seul odorat, une piste de 10 mètres de ficelle parfumée au chocolat ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20une%20%C3%A9tude%20publi%C3%A9e%20fin%202006%2C%20deux%20tiers%20des%20volontaires%20aux%20yeux%20band%C3%A9s%20ont%20r%C3%A9ussi%20%C3%A0%20suivre%20%C3%A0%20quatre%20pattes%2C%20au%20seul%20odorat%2C%20une%20piste%20de%2010%20m%C3%A8tres%20de%20ficelle%20parfum%C3%A9e%20au%20chocolat%20%3F",
  "explanation": "Des chercheurs de l'université de Californie à Berkeley ont montré que les humains peuvent suivre une piste olfactive, comme les chiens. Les participants s'amélioraient avec l'entraînement. Avec une seule narine, ils réussissaient moins bien, ce qui montre l'intérêt de la stéréo olfactive."
 },
 {
  "text": "Les doigts fripés après un bain ne sont pas un simple effet de l'eau : c'est un réflexe nerveux, et les doigts dont le nerf est endommagé ne se rident pas.",
  "source": "Perplexity",
  "question": "Est-il vrai que les doigts fripés après un bain ne sont pas un simple effet de l'eau : c'est un réflexe nerveux, et les doigts dont le nerf est endommagé ne se rident pas ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20doigts%20frip%C3%A9s%20apr%C3%A8s%20un%20bain%20ne%20sont%20pas%20un%20simple%20effet%20de%20l'eau%20%3A%20c'est%20un%20r%C3%A9flexe%20nerveux%2C%20et%20les%20doigts%20dont%20le%20nerf%20est%20endommag%C3%A9%20ne%20se%20rident%20pas%20%3F",
  "explanation": "Les doigts fripés sont dus à une constriction des vaisseaux sanguins sous la peau, contrôlée par le système nerveux. Des études suggèrent que ces rides améliorent la prise sur les objets mouillés, comme les sculptures d'un pneu. Les doigts privés d'innervation ne se rident pas."
 },
 {
  "text": "Les bronches possèdent des récepteurs du goût amer : en laboratoire, des substances amères les ont dilatées trois fois plus que les médicaments classiques contre l'asthme (étude de 2010).",
  "source": "Perplexity",
  "question": "Est-il vrai que les bronches possèdent des récepteurs du goût amer : en laboratoire, des substances amères les ont dilatées trois fois plus que les médicaments classiques contre l'asthme (étude de 2010) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20bronches%20poss%C3%A8dent%20des%20r%C3%A9cepteurs%20du%20go%C3%BBt%20amer%20%3A%20en%20laboratoire%2C%20des%20substances%20am%C3%A8res%20les%20ont%20dilat%C3%A9es%20trois%20fois%20plus%20que%20les%20m%C3%A9dicaments%20classiques%20contre%20l'asthme%20(%C3%A9tude%20de%202010)%20%3F",
  "explanation": "Une étude publiée en 2010 a montré que les muscles lisses des bronches possèdent des récepteurs au goût amer. Les substances amères, comme la quinine, provoquent une relaxation des bronches. Cette découverte ouvre des pistes pour de nouveaux traitements de l'asthme."
 },
 {
  "text": "Grâce au carbone 14 libéré par les essais nucléaires, on a établi que le cœur ne renouvelle qu'environ 1 % de ses cellules musculaires par an à 25 ans, et 0,45 % à 75 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que grâce au carbone 14 libéré par les essais nucléaires, on a établi que le cœur ne renouvelle qu'environ 1 % de ses cellules musculaires par an à 25 ans, et 0,45 % à 75 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20gr%C3%A2ce%20au%20carbone%2014%20lib%C3%A9r%C3%A9%20par%20les%20essais%20nucl%C3%A9aires%2C%20on%20a%20%C3%A9tabli%20que%20le%20c%C5%93ur%20ne%20renouvelle%20qu'environ%201%20%25%20de%20ses%20cellules%20musculaires%20par%20an%20%C3%A0%2025%20ans%2C%20et%200%2C45%20%25%20%C3%A0%2075%20ans%20%3F",
  "explanation": "Les essais nucléaires des années 1950-1960 ont augmenté la quantité de carbone 14 dans l'atmosphère, qui s'est retrouvé dans l'ADN des cellules nouvellement formées. En mesurant ce carbone dans les cellules cardiaques, des chercheurs ont estimé la vitesse de renouvellement. Moins de la moitié des cellules sont renouvelées au cours d'une vie."
 },
 {
  "text": "Le syndrome de Charles Bonnet fait voir à des malvoyants sains d'esprit des hallucinations très nettes de visages, d'animaux ou de paysages qu'ils savent irréels.",
  "source": "Perplexity",
  "question": "Est-il vrai que le syndrome de Charles Bonnet fait voir à des malvoyants sains d'esprit des hallucinations très nettes de visages, d'animaux ou de paysages qu'ils savent irréels ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syndrome%20de%20Charles%20Bonnet%20fait%20voir%20%C3%A0%20des%20malvoyants%20sains%20d'esprit%20des%20hallucinations%20tr%C3%A8s%20nettes%20de%20visages%2C%20d'animaux%20ou%20de%20paysages%20qu'ils%20savent%20irr%C3%A9els%20%3F",
  "explanation": "Le syndrome de Charles Bonnet, décrit par ce naturaliste au XVIIIe siècle chez son grand-père, touche des personnes ayant une perte de vision. Le cerveau, privé d'informations visuelles, génère des images. Les personnes sont conscientes que les visions ne sont pas réelles."
 },
 {
  "text": "En 1878, des bûcherons canadiens-français du Maine, surpris par un ordre crié, l'exécutaient aussitôt malgré eux, comme lancer ce qu'ils tenaient : les « Jumping Frenchmen ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1878, des bûcherons canadiens-français du Maine, surpris par un ordre crié, l'exécutaient aussitôt malgré eux, comme lancer ce qu'ils tenaient : les « Jumping Frenchmen » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201878%2C%20des%20b%C3%BBcherons%20canadiens-fran%C3%A7ais%20du%20Maine%2C%20surpris%20par%20un%20ordre%20cri%C3%A9%2C%20l'ex%C3%A9cutaient%20aussit%C3%B4t%20malgr%C3%A9%20eux%2C%20comme%20lancer%20ce%20qu'ils%20tenaient%20%3A%20les%20%C2%AB%20Jumping%20Frenchmen%20%C2%BB%20%3F",
  "explanation": "Le neurologue George Miller Beard a décrit ces bûcherons qui réagissaient de façon exagérée à la surprise : ils sautaient, criaient, répétaient des mots ou obéissaient à un ordre. On pense aujourd'hui à une forme de réflexe de sursaut exagéré, peut-être en partie culturel."
 },
 {
  "text": "Atteint de fibrodysplasie ossifiante progressive, Harry Eastlack avait le corps quasi entièrement ossifié à sa mort en 1973 : il ne pouvait plus guère bouger que le visage et la langue.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'atteint de fibrodysplasie ossifiante progressive, Harry Eastlack avait le corps quasi entièrement ossifié à sa mort en 1973 : il ne pouvait plus guère bouger que le visage et la langue ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'atteint%20de%20fibrodysplasie%20ossifiante%20progressive%2C%20Harry%20Eastlack%20avait%20le%20corps%20quasi%20enti%C3%A8rement%20ossifi%C3%A9%20%C3%A0%20sa%20mort%20en%201973%20%3A%20il%20ne%20pouvait%20plus%20gu%C3%A8re%20bouger%20que%20le%20visage%20et%20la%20langue%20%3F",
  "explanation": "La fibrodysplasie ossifiante progressive transforme progressivement les muscles, tendons et ligaments en os. Harry Eastlack a été diagnostiqué à 10 ans. Il a fait don de son squelette, exposé au musée Mütter de Philadelphie. La maladie est liée à une mutation du gène ACVR1."
 },
 {
  "text": "Dans le syndrome d'Ondine, dû au gène PHOX2B, la respiration automatique fait défaut : beaucoup de malades respirent correctement éveillés mais hypoventilent dès qu'ils s'endorment.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans le syndrome d'Ondine, dû au gène PHOX2B, la respiration automatique fait défaut : beaucoup de malades respirent correctement éveillés mais hypoventilent dès qu'ils s'endorment ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20le%20syndrome%20d'Ondine%2C%20d%C3%BB%20au%20g%C3%A8ne%20PHOX2B%2C%20la%20respiration%20automatique%20fait%20d%C3%A9faut%20%3A%20beaucoup%20de%20malades%20respirent%20correctement%20%C3%A9veill%C3%A9s%20mais%20hypoventilent%20d%C3%A8s%20qu'ils%20s'endorment%20%3F",
  "explanation": "Le syndrome d'hypoventilation alvéolaire centrale congénitale, appelé syndrome d'Ondine, affecte le contrôle automatique de la respiration. Les malades doivent souvent être placés sous ventilation la nuit. Son nom vient d'une légende où le mari d'Ondine, maudit, devait penser à respirer."
 },
 {
  "text": "Après avoir mâché un « fruit miracle » d'Afrique de l'Ouest, le citron paraît sucré jusqu'à une heure ou deux : sa protéine, la miraculine, active les récepteurs du sucré en milieu acide.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'après avoir mâché un « fruit miracle » d'Afrique de l'Ouest, le citron paraît sucré jusqu'à une heure ou deux : sa protéine, la miraculine, active les récepteurs du sucré en milieu acide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'apr%C3%A8s%20avoir%20m%C3%A2ch%C3%A9%20un%20%C2%AB%20fruit%20miracle%20%C2%BB%20d'Afrique%20de%20l'Ouest%2C%20le%20citron%20para%C3%AEt%20sucr%C3%A9%20jusqu'%C3%A0%20une%20heure%20ou%20deux%20%3A%20sa%20prot%C3%A9ine%2C%20la%20miraculine%2C%20active%20les%20r%C3%A9cepteurs%20du%20sucr%C3%A9%20en%20milieu%20acide%20%3F",
  "explanation": "Le « fruit miracle » vient de l'arbuste Synsepalum dulcificum. Sa protéine, la miraculine, se fixe sur les récepteurs du sucré. En milieu acide, elle les active. Les aliments acides, comme le citron, paraissent alors sucrés. L'effet dure environ une heure."
 },
 {
  "text": "Près de 1 % des gens sont incapables de former la moindre image mentale : cette aphantasie n'a reçu un nom qu'en 2015, grâce au neurologue Adam Zeman.",
  "source": "Perplexity",
  "question": "Est-il vrai que près de 1 % des gens sont incapables de former la moindre image mentale : cette aphantasie n'a reçu un nom qu'en 2015, grâce au neurologue Adam Zeman ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pr%C3%A8s%20de%201%20%25%20des%20gens%20sont%20incapables%20de%20former%20la%20moindre%20image%20mentale%20%3A%20cette%20aphantasie%20n'a%20re%C3%A7u%20un%20nom%20qu'en%202015%2C%20gr%C3%A2ce%20au%20neurologue%20Adam%20Zeman%20%3F",
  "explanation": "Le neurologue Adam Zeman a étudié un patient ayant perdu la capacité d'imaginer après une opération. Après avoir publié son cas, il a été contacté par des milliers de personnes qui n'avaient jamais eu d'images mentales. Il a appelé ce phénomène « aphantasie ». Son opposé est l'hyperphantasie."
 },
 {
  "text": "L'infrarouge n'est pas toujours invisible : un laser pulsé de 1 000 nm est vu vert, car deux photons frappent un pigment de la rétine en même temps (étude PNAS, 2014).",
  "source": "Perplexity",
  "question": "Est-il vrai que l'infrarouge n'est pas toujours invisible : un laser pulsé de 1 000 nm est vu vert, car deux photons frappent un pigment de la rétine en même temps (étude PNAS, 2014) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'infrarouge%20n'est%20pas%20toujours%20invisible%20%3A%20un%20laser%20puls%C3%A9%20de%201%20000%20nm%20est%20vu%20vert%2C%20car%20deux%20photons%20frappent%20un%20pigment%20de%20la%20r%C3%A9tine%20en%20m%C3%AAme%20temps%20(%C3%A9tude%20PNAS%2C%202014)%20%3F",
  "explanation": "En temps normal, l'œil ne voit pas la lumière au-delà d'environ 700 nm. Des chercheurs ont montré qu'un laser infrarouge pulsé pouvait être vu. Deux photons frappent simultanément un pigment de la rétine, et leur énergie combinée correspond à celle d'un photon vert."
 },
 {
  "text": "Abraham Lincoln est le seul président américain à avoir détenu un brevet : n° 6469, accordé en 1849 pour un système de flotteurs gonflables censé soulever les bateaux échoués sur des hauts-fonds.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'abraham Lincoln est le seul président américain à avoir détenu un brevet : n° 6469, accordé en 1849 pour un système de flotteurs gonflables censé soulever les bateaux échoués sur des hauts-fonds ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'abraham%20Lincoln%20est%20le%20seul%20pr%C3%A9sident%20am%C3%A9ricain%20%C3%A0%20avoir%20d%C3%A9tenu%20un%20brevet%20%3A%20n%C2%B0%206469%2C%20accord%C3%A9%20en%201849%20pour%20un%20syst%C3%A8me%20de%20flotteurs%20gonflables%20cens%C3%A9%20soulever%20les%20bateaux%20%C3%A9chou%C3%A9s%20sur%20des%20hauts-fonds%20%3F",
  "explanation": "Lincoln avait vu un bateau échoué sur le Mississippi. Il a imaginé des flotteurs gonflables fixés sur la coque, pour soulever le bateau au-dessus des bancs de sable. L'invention n'a jamais été commercialisée. La maquette est conservée au Smithsonian."
 },
 {
  "text": "Abraham Lincoln figure au National Wrestling Hall of Fame : lutteur réputé dans sa jeunesse, il y a été honoré en 1992 du titre d'« Outstanding American ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'abraham Lincoln figure au National Wrestling Hall of Fame : lutteur réputé dans sa jeunesse, il y a été honoré en 1992 du titre d'« Outstanding American » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'abraham%20Lincoln%20figure%20au%20National%20Wrestling%20Hall%20of%20Fame%20%3A%20lutteur%20r%C3%A9put%C3%A9%20dans%20sa%20jeunesse%2C%20il%20y%20a%20%C3%A9t%C3%A9%20honor%C3%A9%20en%201992%20du%20titre%20d'%C2%AB%20Outstanding%20American%20%C2%BB%20%3F",
  "explanation": "Le jeune Lincoln était connu pour sa force. Selon la tradition, il n'aurait perdu qu'un seul de ses quelque 300 combats de lutte. Il a été intronisé au National Wrestling Hall of Fame. D'autres présidents, comme Washington et Taft, étaient aussi lutteurs."
 },
 {
  "text": "En 1698, Pierre le Grand a instauré en Russie une taxe sur la barbe : ceux qui la payaient devaient porter un jeton prouvant leur droit de rester barbus. Elle a duré jusqu'en 1772.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1698, Pierre le Grand a instauré en Russie une taxe sur la barbe : ceux qui la payaient devaient porter un jeton prouvant leur droit de rester barbus. Elle a duré jusqu'en 1772 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201698%2C%20Pierre%20le%20Grand%20a%20instaur%C3%A9%20en%20Russie%20une%20taxe%20sur%20la%20barbe%20%3A%20ceux%20qui%20la%20payaient%20devaient%20porter%20un%20jeton%20prouvant%20leur%20droit%20de%20rester%20barbus.%20Elle%20a%20dur%C3%A9%20jusqu'en%201772%20%3F",
  "explanation": "Pierre le Grand voulait moderniser la Russie et l'aligner sur l'Europe occidentale, où l'on se rasait. Les hommes devaient payer une taxe annuelle pour garder leur barbe. Ils recevaient un jeton en cuivre portant l'inscription « la barbe est un fardeau superflu »."
 },
 {
  "text": "Les États-Unis ont versé une pension de la guerre de Sécession jusqu'en 2020 : Irene Triplett, fille d'un soldat de ce conflit, l'a touchée de 1938 à sa mort, le 31 mai 2020 (73,13 dollars par mois à la fin).",
  "source": "Perplexity",
  "question": "Est-il vrai que les États-Unis ont versé une pension de la guerre de Sécession jusqu'en 2020 : Irene Triplett, fille d'un soldat de ce conflit, l'a touchée de 1938 à sa mort, le 31 mai 2020 (73,13 dollars par mois à la fin) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%89tats-Unis%20ont%20vers%C3%A9%20une%20pension%20de%20la%20guerre%20de%20S%C3%A9cession%20jusqu'en%202020%20%3A%20Irene%20Triplett%2C%20fille%20d'un%20soldat%20de%20ce%20conflit%2C%20l'a%20touch%C3%A9e%20de%201938%20%C3%A0%20sa%20mort%2C%20le%2031%20mai%202020%20(73%2C13%20dollars%20par%20mois%20%C3%A0%20la%20fin)%20%3F",
  "explanation": "Irene Triplett était la fille de Mose Triplett, qui avait combattu pour les Confédérés puis déserté pour rejoindre l'Union. Il s'est marié à un âge avancé. Irene, née en 1930, avait des troubles cognitifs et recevait une pension d'orphelin. Elle était la dernière bénéficiaire d'une pension de cette guerre."
 },
 {
  "text": "En 1856, l'armée américaine a importé des dizaines de chameaux au Texas pour créer un « Camel Corps » dans les déserts du Sud-Ouest ; la guerre de Sécession a mis fin à l'expérience.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1856, l'armée américaine a importé des dizaines de chameaux au Texas pour créer un « Camel Corps » dans les déserts du Sud-Ouest ; la guerre de Sécession a mis fin à l'expérience ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201856%2C%20l'arm%C3%A9e%20am%C3%A9ricaine%20a%20import%C3%A9%20des%20dizaines%20de%20chameaux%20au%20Texas%20pour%20cr%C3%A9er%20un%20%C2%AB%20Camel%20Corps%20%C2%BB%20dans%20les%20d%C3%A9serts%20du%20Sud-Ouest%20%3B%20la%20guerre%20de%20S%C3%A9cession%20a%20mis%20fin%20%C3%A0%20l'exp%C3%A9rience%20%3F",
  "explanation": "Le secrétaire à la Guerre Jefferson Davis a soutenu l'idée d'utiliser des chameaux pour transporter des marchandises dans les déserts. L'expérience a été concluante, mais les chameaux effrayaient les chevaux. Après la guerre de Sécession, les animaux ont été vendus ou relâchés, et certains ont vécu à l'état sauvage."
 },
 {
  "text": "William Patrick Hitler, neveu d'Adolf Hitler né à Liverpool, a écrit à Roosevelt pour pouvoir combattre son oncle : il a servi dans l'US Navy de 1944 à 1947.",
  "source": "Perplexity",
  "question": "Est-il vrai que william Patrick Hitler, neveu d'Adolf Hitler né à Liverpool, a écrit à Roosevelt pour pouvoir combattre son oncle : il a servi dans l'US Navy de 1944 à 1947 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20william%20Patrick%20Hitler%2C%20neveu%20d'Adolf%20Hitler%20n%C3%A9%20%C3%A0%20Liverpool%2C%20a%20%C3%A9crit%20%C3%A0%20Roosevelt%20pour%20pouvoir%20combattre%20son%20oncle%20%3A%20il%20a%20servi%20dans%20l'US%20Navy%20de%201944%20%C3%A0%201947%20%3F",
  "explanation": "William Patrick Hitler, fils du demi-frère d'Adolf Hitler, a vécu en Allemagne dans les années 1930, puis s'est installé aux États-Unis. Il a écrit à Roosevelt pour demander à rejoindre l'armée. Après la guerre, il a changé de nom et s'est installé dans l'État de New York."
 },
 {
  "text": "En novembre 1952, Israël a proposé à Albert Einstein de devenir président du pays ; il a refusé, expliquant manquer d'aptitude et d'expérience pour traiter avec les gens.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en novembre 1952, Israël a proposé à Albert Einstein de devenir président du pays ; il a refusé, expliquant manquer d'aptitude et d'expérience pour traiter avec les gens ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20novembre%201952%2C%20Isra%C3%ABl%20a%20propos%C3%A9%20%C3%A0%20Albert%20Einstein%20de%20devenir%20pr%C3%A9sident%20du%20pays%20%3B%20il%20a%20refus%C3%A9%2C%20expliquant%20manquer%20d'aptitude%20et%20d'exp%C3%A9rience%20pour%20traiter%20avec%20les%20gens%20%3F",
  "explanation": "Après la mort du premier président d'Israël, Chaim Weizmann, le Premier ministre David Ben Gourion a proposé le poste à Einstein. Il a refusé, se disant touché, mais sans expérience pour traiter avec les gens et exercer des fonctions officielles."
 },
 {
  "text": "Mark Twain, né en 1835 deux semaines après le passage de la comète de Halley au plus près du Soleil, avait prédit qu'il repartirait avec elle : il est mort le 21 avril 1910, au lendemain de son retour au périhélie.",
  "source": "Perplexity",
  "question": "Est-il vrai que mark Twain, né en 1835 deux semaines après le passage de la comète de Halley au plus près du Soleil, avait prédit qu'il repartirait avec elle : il est mort le 21 avril 1910, au lendemain de son retour au périhélie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20mark%20Twain%2C%20n%C3%A9%20en%201835%20deux%20semaines%20apr%C3%A8s%20le%20passage%20de%20la%20com%C3%A8te%20de%20Halley%20au%20plus%20pr%C3%A8s%20du%20Soleil%2C%20avait%20pr%C3%A9dit%20qu'il%20repartirait%20avec%20elle%20%3A%20il%20est%20mort%20le%2021%20avril%201910%2C%20au%20lendemain%20de%20son%20retour%20au%20p%C3%A9rih%C3%A9lie%20%3F",
  "explanation": "Mark Twain a écrit en 1909 : « Je suis venu au monde avec la comète de Halley... Ce serait la plus grande déception de ma vie si je ne repartais pas avec elle. » Il est mort le lendemain du passage de la comète au plus près du Soleil, ce qui a frappé les esprits."
 },
 {
  "text": "En septembre 1914, les taxis parisiens réquisitionnés pour amener des soldats sur la Marne n'ont pas roulé gratuitement : l'État a payé la course, soit 70 102 francs.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en septembre 1914, les taxis parisiens réquisitionnés pour amener des soldats sur la Marne n'ont pas roulé gratuitement : l'État a payé la course, soit 70 102 francs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20septembre%201914%2C%20les%20taxis%20parisiens%20r%C3%A9quisitionn%C3%A9s%20pour%20amener%20des%20soldats%20sur%20la%20Marne%20n'ont%20pas%20roul%C3%A9%20gratuitement%20%3A%20l'%C3%89tat%20a%20pay%C3%A9%20la%20course%2C%20soit%2070%20102%20francs%20%3F",
  "explanation": "Lors de la bataille de la Marne, en septembre 1914, le général Gallieni a réquisitionné des centaines de taxis parisiens pour transporter des soldats vers le front. Les compteurs ont tourné, et l'État a payé la course. Le rôle militaire réel de ces taxis a été modeste, mais l'épisode est devenu un symbole."
 },
 {
  "text": "Vers 1863-1864, Robert, le fils d'Abraham Lincoln, est tombé entre un quai et un train à Jersey City ; il a été rattrapé par le col par Edwin Booth, le frère de celui qui allait assassiner son père.",
  "source": "Perplexity",
  "question": "Est-il vrai que vers 1863-1864, Robert, le fils d'Abraham Lincoln, est tombé entre un quai et un train à Jersey City ; il a été rattrapé par le col par Edwin Booth, le frère de celui qui allait assassiner son père ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vers%201863-1864%2C%20Robert%2C%20le%20fils%20d'Abraham%20Lincoln%2C%20est%20tomb%C3%A9%20entre%20un%20quai%20et%20un%20train%20%C3%A0%20Jersey%20City%20%3B%20il%20a%20%C3%A9t%C3%A9%20rattrap%C3%A9%20par%20le%20col%20par%20Edwin%20Booth%2C%20le%20fr%C3%A8re%20de%20celui%20qui%20allait%20assassiner%20son%20p%C3%A8re%20%3F",
  "explanation": "Robert Lincoln a raconté avoir été poussé contre un train qui démarrait. Un homme l'a tiré par le col. C'était Edwin Booth, un acteur célèbre, frère de John Wilkes Booth, qui a assassiné Abraham Lincoln en 1865. Edwin Booth a appris plus tard qui il avait sauvé."
 },
 {
  "text": "Gandhi a été nommé cinq fois pour le prix Nobel de la paix sans jamais l'obtenir ; en 1948, année de sa mort, le comité n'a décerné aucun prix, faute de « candidat vivant approprié ».",
  "source": "Perplexity",
  "question": "Est-il vrai que gandhi a été nommé cinq fois pour le prix Nobel de la paix sans jamais l'obtenir ; en 1948, année de sa mort, le comité n'a décerné aucun prix, faute de « candidat vivant approprié » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20gandhi%20a%20%C3%A9t%C3%A9%20nomm%C3%A9%20cinq%20fois%20pour%20le%20prix%20Nobel%20de%20la%20paix%20sans%20jamais%20l'obtenir%20%3B%20en%201948%2C%20ann%C3%A9e%20de%20sa%20mort%2C%20le%20comit%C3%A9%20n'a%20d%C3%A9cern%C3%A9%20aucun%20prix%2C%20faute%20de%20%C2%AB%20candidat%20vivant%20appropri%C3%A9%20%C2%BB%20%3F",
  "explanation": "Gandhi a été nommé en 1937, 1938, 1939, 1947 et 1948, peu avant son assassinat. Le comité Nobel n'a jamais attribué de prix à titre posthume. Il a ensuite reconnu que l'absence de prix à Gandhi était une omission. Le dalaï-lama, lauréat en 1989, a dit recevoir le prix en hommage à Gandhi."
 },
 {
  "text": "En 1939, Adolf Hitler a été proposé pour le prix Nobel de la paix par le député suédois Erik Brandt, qui voulait ainsi ironiser sur la nomination de Chamberlain ; il a retiré sa proposition.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1939, Adolf Hitler a été proposé pour le prix Nobel de la paix par le député suédois Erik Brandt, qui voulait ainsi ironiser sur la nomination de Chamberlain ; il a retiré sa proposition ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201939%2C%20Adolf%20Hitler%20a%20%C3%A9t%C3%A9%20propos%C3%A9%20pour%20le%20prix%20Nobel%20de%20la%20paix%20par%20le%20d%C3%A9put%C3%A9%20su%C3%A9dois%20Erik%20Brandt%2C%20qui%20voulait%20ainsi%20ironiser%20sur%20la%20nomination%20de%20Chamberlain%20%3B%20il%20a%20retir%C3%A9%20sa%20proposition%20%3F",
  "explanation": "Erik Brandt, député social-démocrate, a envoyé sa nomination pour critiquer celle de Neville Chamberlain, artisan des accords de Munich. Son ironie n'a pas été comprise, et il a retiré la proposition. Hitler avait interdit aux Allemands d'accepter le prix Nobel après le prix attribué à Carl von Ossietzky en 1935."
 },
 {
  "text": "Pierre de Coubertin, fondateur des Jeux olympiques modernes, a remporté la médaille d'or de littérature aux JO de 1912 avec son « Ode au sport », envoyée sous deux pseudonymes.",
  "source": "Perplexity",
  "question": "Est-il vrai que pierre de Coubertin, fondateur des Jeux olympiques modernes, a remporté la médaille d'or de littérature aux JO de 1912 avec son « Ode au sport », envoyée sous deux pseudonymes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pierre%20de%20Coubertin%2C%20fondateur%20des%20Jeux%20olympiques%20modernes%2C%20a%20remport%C3%A9%20la%20m%C3%A9daille%20d'or%20de%20litt%C3%A9rature%20aux%20JO%20de%201912%20avec%20son%20%C2%AB%20Ode%20au%20sport%20%C2%BB%2C%20envoy%C3%A9e%20sous%20deux%20pseudonymes%20%3F",
  "explanation": "Entre 1912 et 1948, les Jeux olympiques comprenaient des concours d'art : architecture, littérature, musique, peinture et sculpture. Pierre de Coubertin a soumis son « Ode au sport » sous les pseudonymes Georges Hohrod et M. Eschbach. Il a gagné la médaille d'or de littérature."
 },
 {
  "text": "Le tir à la corde a été une épreuve olympique de 1900 à 1920 : la police de la City de Londres y a remporté deux médailles d'or, en 1908 et en 1920.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tir à la corde a été une épreuve olympique de 1900 à 1920 : la police de la City de Londres y a remporté deux médailles d'or, en 1908 et en 1920 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tir%20%C3%A0%20la%20corde%20a%20%C3%A9t%C3%A9%20une%20%C3%A9preuve%20olympique%20de%201900%20%C3%A0%201920%20%3A%20la%20police%20de%20la%20City%20de%20Londres%20y%20a%20remport%C3%A9%20deux%20m%C3%A9dailles%20d'or%2C%20en%201908%20et%20en%201920%20%3F",
  "explanation": "Le tir à la corde faisait partie de l'athlétisme olympique. Les équipes étaient souvent des clubs ou des corps de police. Lors des Jeux de 1908 à Londres, les trois médailles sont revenues à des équipes de police britanniques. L'épreuve a été retirée après 1920."
 },
 {
  "text": "Au début du XIXe siècle, la cheffe pirate Ching Shih dirigeait en mer de Chine l'une des plus grandes confédérations pirates de l'histoire, puis s'est rendue en 1810 contre une amnistie qui lui évita toute poursuite.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au début du XIXe siècle, la cheffe pirate Ching Shih dirigeait en mer de Chine l'une des plus grandes confédérations pirates de l'histoire, puis s'est rendue en 1810 contre une amnistie qui lui évita toute poursuite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20d%C3%A9but%20du%20XIXe%20si%C3%A8cle%2C%20la%20cheffe%20pirate%20Ching%20Shih%20dirigeait%20en%20mer%20de%20Chine%20l'une%20des%20plus%20grandes%20conf%C3%A9d%C3%A9rations%20pirates%20de%20l'histoire%2C%20puis%20s'est%20rendue%20en%201810%20contre%20une%20amnistie%20qui%20lui%20%C3%A9vita%20toute%20poursuite%20%3F",
  "explanation": "Ching Shih, ancienne prostituée, a épousé un chef pirate. À sa mort, elle a pris la tête de la flotte, comptant des centaines de navires et des dizaines de milliers de pirates. Elle a imposé un code de conduite strict. Elle a négocié sa reddition avec le gouvernement chinois et a pu garder sa fortune."
 },
 {
  "text": "La plus vieille réclamation client connue est une tablette d'argile d'environ 1750 av. J.-C. : un certain Nanni y reproche au marchand Ea-nasir de lui avoir vendu du cuivre de mauvaise qualité.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus vieille réclamation client connue est une tablette d'argile d'environ 1750 av. J.-C. : un certain Nanni y reproche au marchand Ea-nasir de lui avoir vendu du cuivre de mauvaise qualité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20vieille%20r%C3%A9clamation%20client%20connue%20est%20une%20tablette%20d'argile%20d'environ%201750%20av.%20J.-C.%20%3A%20un%20certain%20Nanni%20y%20reproche%20au%20marchand%20Ea-nasir%20de%20lui%20avoir%20vendu%20du%20cuivre%20de%20mauvaise%20qualit%C3%A9%20%3F",
  "explanation": "La tablette, découverte à Ur, en Mésopotamie, est conservée au British Museum. Nanni se plaint que le cuivre est de mauvaise qualité, qu'il a été maltraité par le serviteur d'Ea-nasir, et réclame un remboursement. D'autres réclamations ont été retrouvées dans la maison d'Ea-nasir."
 },
 {
  "text": "Cléopâtre était d'origine grecque macédonienne et, selon Plutarque, fut la première de la dynastie des Ptolémées, au pouvoir en Égypte depuis plus de 250 ans, à apprendre l'égyptien.",
  "source": "Perplexity",
  "question": "Est-il vrai que cléopâtre était d'origine grecque macédonienne et, selon Plutarque, fut la première de la dynastie des Ptolémées, au pouvoir en Égypte depuis plus de 250 ans, à apprendre l'égyptien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20cl%C3%A9op%C3%A2tre%20%C3%A9tait%20d'origine%20grecque%20mac%C3%A9donienne%20et%2C%20selon%20Plutarque%2C%20fut%20la%20premi%C3%A8re%20de%20la%20dynastie%20des%20Ptol%C3%A9m%C3%A9es%2C%20au%20pouvoir%20en%20%C3%89gypte%20depuis%20plus%20de%20250%20ans%2C%20%C3%A0%20apprendre%20l'%C3%A9gyptien%20%3F",
  "explanation": "Les Ptolémées, descendants d'un général d'Alexandre le Grand, régnaient sur l'Égypte depuis 305 av. J.-C. Ils parlaient grec. Selon Plutarque, Cléopâtre VII parlait de nombreuses langues, et elle aurait été la première de sa dynastie à apprendre l'égyptien."
 },
 {
  "text": "Non, Napoléon n'était pas petit : ses « 5 pieds 2 pouces » étaient des mesures françaises, soit environ 1,68 m, une taille dans la moyenne de son époque.",
  "source": "Perplexity",
  "question": "Est-il vrai que napoléon n'était pas petit : ses « 5 pieds 2 pouces » étaient des mesures françaises, soit environ 1,68 m, une taille dans la moyenne de son époque ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20napol%C3%A9on%20n'%C3%A9tait%20pas%20petit%20%3A%20ses%20%C2%AB%205%20pieds%202%20pouces%20%C2%BB%20%C3%A9taient%20des%20mesures%20fran%C3%A7aises%2C%20soit%20environ%201%2C68%20m%2C%20une%20taille%20dans%20la%20moyenne%20de%20son%20%C3%A9poque%20%3F",
  "explanation": "À sa mort, Napoléon mesurait 5 pieds 2 pouces en unités françaises, soit environ 1,68 m. Les Britanniques ont converti ces mesures en unités anglaises plus courtes, et ont obtenu environ 1,57 m. La caricature britannique l'a représenté petit et colérique, d'où le mythe."
 },
 {
  "text": "La tour Eiffel ne devait être exploitée que 20 ans : si elle n'a pas été démontée vers 1910, c'est en grande partie parce qu'elle servait d'antenne de radiotélégraphie militaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tour Eiffel ne devait être exploitée que 20 ans : si elle n'a pas été démontée vers 1910, c'est en grande partie parce qu'elle servait d'antenne de radiotélégraphie militaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tour%20Eiffel%20ne%20devait%20%C3%AAtre%20exploit%C3%A9e%20que%2020%20ans%20%3A%20si%20elle%20n'a%20pas%20%C3%A9t%C3%A9%20d%C3%A9mont%C3%A9e%20vers%201910%2C%20c'est%20en%20grande%20partie%20parce%20qu'elle%20servait%20d'antenne%20de%20radiot%C3%A9l%C3%A9graphie%20militaire%20%3F",
  "explanation": "La tour Eiffel a été construite pour l'Exposition universelle de 1889. La concession prévoyait son démontage en 1909. Gustave Eiffel a encouragé des expériences scientifiques, notamment de radiotélégraphie militaire. Son utilité stratégique a convaincu de la conserver. Elle a joué un rôle pendant la Première Guerre mondiale."
 },
 {
  "text": "Nintendo a été fondé à Kyoto en 1889, l'année de l'inauguration de la tour Eiffel, pour fabriquer des cartes à jouer japonaises hanafuda.",
  "source": "Perplexity",
  "question": "Est-il vrai que nintendo a été fondé à Kyoto en 1889, l'année de l'inauguration de la tour Eiffel, pour fabriquer des cartes à jouer japonaises hanafuda ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nintendo%20a%20%C3%A9t%C3%A9%20fond%C3%A9%20%C3%A0%20Kyoto%20en%201889%2C%20l'ann%C3%A9e%20de%20l'inauguration%20de%20la%20tour%20Eiffel%2C%20pour%20fabriquer%20des%20cartes%20%C3%A0%20jouer%20japonaises%20hanafuda%20%3F",
  "explanation": "Fusajiro Yamauchi a fondé Nintendo Koppai en 1889 pour fabriquer des cartes hanafuda, un jeu japonais. L'entreprise s'est diversifiée au XXe siècle, avec des hôtels, des taxis, des jouets, puis les jeux vidéo à partir des années 1970."
 },
 {
  "text": "Thérèse d'Avila est morte dans la nuit du 4 au 15 octobre 1582 : cette nuit-là, l'Espagne passait au calendrier grégorien, qui supprimait dix jours d'un coup.",
  "source": "Perplexity",
  "question": "Est-il vrai que thérèse d'Avila est morte dans la nuit du 4 au 15 octobre 1582 : cette nuit-là, l'Espagne passait au calendrier grégorien, qui supprimait dix jours d'un coup ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20th%C3%A9r%C3%A8se%20d'Avila%20est%20morte%20dans%20la%20nuit%20du%204%20au%2015%20octobre%201582%20%3A%20cette%20nuit-l%C3%A0%2C%20l'Espagne%20passait%20au%20calendrier%20gr%C3%A9gorien%2C%20qui%20supprimait%20dix%20jours%20d'un%20coup%20%3F",
  "explanation": "Le calendrier grégorien, introduit par le pape Grégoire XIII, a supprimé dix jours pour corriger la dérive du calendrier julien. En Espagne, en Italie, au Portugal et en Pologne, le jeudi 4 octobre 1582 a été suivi du vendredi 15 octobre. Thérèse d'Avila est morte cette nuit-là."
 },
 {
  "text": "L'entreprise japonaise de construction de temples Kongō Gumi, fondée en 578, a été gérée par la même famille pendant plus de 1 400 ans avant d'être absorbée par un autre groupe en 2006.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'entreprise japonaise de construction de temples Kongō Gumi, fondée en 578, a été gérée par la même famille pendant plus de 1 400 ans avant d'être absorbée par un autre groupe en 2006 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'entreprise%20japonaise%20de%20construction%20de%20temples%20Kong%C5%8D%20Gumi%2C%20fond%C3%A9e%20en%20578%2C%20a%20%C3%A9t%C3%A9%20g%C3%A9r%C3%A9e%20par%20la%20m%C3%AAme%20famille%20pendant%20plus%20de%201%20400%20ans%20avant%20d'%C3%AAtre%20absorb%C3%A9e%20par%20un%20autre%20groupe%20en%202006%20%3F",
  "explanation": "Kongō Gumi a été fondée par un charpentier venu de Corée, invité au Japon pour construire un temple bouddhiste. L'entreprise a construit et entretenu des temples pendant des siècles. Après des difficultés financières, elle a été rachetée en 2006 par le groupe Takamatsu."
 },
 {
  "text": "En 1912, Theodore Roosevelt a reçu une balle dans la poitrine, freinée par l'étui de ses lunettes et son discours plié de 50 pages, puis a tenu à prononcer ce discours avant d'accepter d'aller à l'hôpital.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1912, Theodore Roosevelt a reçu une balle dans la poitrine, freinée par l'étui de ses lunettes et son discours plié de 50 pages, puis a tenu à prononcer ce discours avant d'accepter d'aller à l'hôpital ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201912%2C%20Theodore%20Roosevelt%20a%20re%C3%A7u%20une%20balle%20dans%20la%20poitrine%2C%20frein%C3%A9e%20par%20l'%C3%A9tui%20de%20ses%20lunettes%20et%20son%20discours%20pli%C3%A9%20de%2050%20pages%2C%20puis%20a%20tenu%20%C3%A0%20prononcer%20ce%20discours%20avant%20d'accepter%20d'aller%20%C3%A0%20l'h%C3%B4pital%20%3F",
  "explanation": "Theodore Roosevelt, candidat à un troisième mandat, a été visé par John Schrank à Milwaukee. La balle a traversé l'étui à lunettes et le discours plié, et s'est logée dans un muscle thoracique. Il a commencé son discours par : « Il en faut plus pour tuer un élan mâle. » La balle n'a jamais été retirée."
 },
 {
  "text": "Thomas Jefferson et John Adams, deux pères fondateurs des États-Unis, sont morts le même jour, le 4 juillet 1826, 50e anniversaire de la Déclaration d'indépendance, à quelques heures d'intervalle.",
  "source": "Perplexity",
  "question": "Est-il vrai que thomas Jefferson et John Adams, deux pères fondateurs des États-Unis, sont morts le même jour, le 4 juillet 1826, 50e anniversaire de la Déclaration d'indépendance, à quelques heures d'intervalle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20thomas%20Jefferson%20et%20John%20Adams%2C%20deux%20p%C3%A8res%20fondateurs%20des%20%C3%89tats-Unis%2C%20sont%20morts%20le%20m%C3%AAme%20jour%2C%20le%204%20juillet%201826%2C%2050e%20anniversaire%20de%20la%20D%C3%A9claration%20d'ind%C3%A9pendance%2C%20%C3%A0%20quelques%20heures%20d'intervalle%20%3F",
  "explanation": "John Adams et Thomas Jefferson, deuxième et troisième présidents des États-Unis, étaient rivaux politiques, puis sont devenus amis. Ils sont morts le 4 juillet 1826, jour du 50e anniversaire de la Déclaration d'indépendance. Les derniers mots d'Adams auraient été : « Jefferson survit encore », alors qu'il était mort quelques heures plus tôt."
 },
 {
  "text": "Étudiant à Cambridge, Charles Darwin faisait partie du Glutton Club, qui goûtait des animaux inconnus des assiettes (faucon, butor) ; le club y a renoncé après un vieux hibou jugé « indescriptible ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'étudiant à Cambridge, Charles Darwin faisait partie du Glutton Club, qui goûtait des animaux inconnus des assiettes (faucon, butor) ; le club y a renoncé après un vieux hibou jugé « indescriptible » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A9tudiant%20%C3%A0%20Cambridge%2C%20Charles%20Darwin%20faisait%20partie%20du%20Glutton%20Club%2C%20qui%20go%C3%BBtait%20des%20animaux%20inconnus%20des%20assiettes%20(faucon%2C%20butor)%20%3B%20le%20club%20y%20a%20renonc%C3%A9%20apr%C3%A8s%20un%20vieux%20hibou%20jug%C3%A9%20%C2%AB%20indescriptible%20%C2%BB%20%3F",
  "explanation": "Le Glutton Club se réunissait chaque semaine pour manger des animaux qu'on ne consomme pas habituellement. Darwin a gardé ce goût pendant son voyage sur le Beagle, où il a mangé un tatou, un agouti, et même un nandou, une espèce qu'il recherchait."
 },
 {
  "text": "Jusqu'en 2015, Dahala Khagrabari était un champ indien situé dans une enclave bangladaise, elle-même dans une enclave indienne, elle-même au Bangladesh : la seule enclave de troisième ordre au monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que jusqu'en 2015, Dahala Khagrabari était un champ indien situé dans une enclave bangladaise, elle-même dans une enclave indienne, elle-même au Bangladesh : la seule enclave de troisième ordre au monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20jusqu'en%202015%2C%20Dahala%20Khagrabari%20%C3%A9tait%20un%20champ%20indien%20situ%C3%A9%20dans%20une%20enclave%20bangladaise%2C%20elle-m%C3%AAme%20dans%20une%20enclave%20indienne%2C%20elle-m%C3%AAme%20au%20Bangladesh%20%3A%20la%20seule%20enclave%20de%20troisi%C3%A8me%20ordre%20au%20monde%20%3F",
  "explanation": "Les enclaves de Cooch Behar, entre l'Inde et le Bangladesh, étaient un enchevêtrement de près de 200 territoires. Dahala Khagrabari était un champ indien d'environ 0,7 hectare. En 2015, un accord frontalier a échangé les enclaves, et les habitants ont choisi leur nationalité."
 },
 {
  "text": "Le nom cérémoniel complet de Bangkok compte 168 lettres en transcription latine : le Guinness des records le classe comme le plus long nom de lieu au monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nom cérémoniel complet de Bangkok compte 168 lettres en transcription latine : le Guinness des records le classe comme le plus long nom de lieu au monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nom%20c%C3%A9r%C3%A9moniel%20complet%20de%20Bangkok%20compte%20168%20lettres%20en%20transcription%20latine%20%3A%20le%20Guinness%20des%20records%20le%20classe%20comme%20le%20plus%20long%20nom%20de%20lieu%20au%20monde%20%3F",
  "explanation": "Le nom complet de Bangkok en thaï est Krung Thep Mahanakhon... Il évoque la ville des anges, la grande cité, la résidence du Bouddha d'émeraude. Les Thaïlandais l'appellent simplement Krung Thep. « Bangkok » est le nom de l'ancien village."
 },
 {
  "text": "L'île Bouvet, territoire norvégien de l'Atlantique Sud couvert à 93 % de glacier, est l'île la plus isolée du monde : la terre la plus proche, en Antarctique, est à environ 1 700 km.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'île Bouvet, territoire norvégien de l'Atlantique Sud couvert à 93 % de glacier, est l'île la plus isolée du monde : la terre la plus proche, en Antarctique, est à environ 1 700 km ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%AEle%20Bouvet%2C%20territoire%20norv%C3%A9gien%20de%20l'Atlantique%20Sud%20couvert%20%C3%A0%2093%20%25%20de%20glacier%2C%20est%20l'%C3%AEle%20la%20plus%20isol%C3%A9e%20du%20monde%20%3A%20la%20terre%20la%20plus%20proche%2C%20en%20Antarctique%2C%20est%20%C3%A0%20environ%201%20700%20km%20%3F",
  "explanation": "L'île Bouvet, découverte en 1739 par le Français Jean-Baptiste Bouvet de Lozier, est un volcan recouvert de glace. Elle est inhabitée et réserve naturelle. En 1964, on y a trouvé un canot de sauvetage abandonné, sans trace d'équipage, un mystère jamais résolu."
 },
 {
  "text": "Büsingen est une commune allemande enclavée en Suisse où l'on paie surtout en francs suisses ; elle possède deux codes postaux, l'un allemand (78266) et l'autre suisse (8238).",
  "source": "Perplexity",
  "question": "Est-il vrai que büsingen est une commune allemande enclavée en Suisse où l'on paie surtout en francs suisses ; elle possède deux codes postaux, l'un allemand (78266) et l'autre suisse (8238) ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20b%C3%BCsingen%20est%20une%20commune%20allemande%20enclav%C3%A9e%20en%20Suisse%20o%C3%B9%20l'on%20paie%20surtout%20en%20francs%20suisses%20%3B%20elle%20poss%C3%A8de%20deux%20codes%20postaux%2C%20l'un%20allemand%20(78266)%20et%20l'autre%20suisse%20(8238)%20%3F",
  "explanation": "Büsingen am Hochrhein est une enclave allemande d'environ 7,6 km², entourée par la Suisse. Elle fait partie de l'union douanière suisse. Les habitants paient leurs impôts en Allemagne, mais utilisent surtout le franc suisse. Leurs plaques d'immatriculation sont allemandes, avec un code spécifique."
 },
 {
  "text": "La Vennbahn, ancienne voie ferrée attribuée à la Belgique après 1919, traverse le territoire allemand et isole cinq morceaux d'Allemagne, devenus des enclaves en territoire belge.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Vennbahn, ancienne voie ferrée attribuée à la Belgique après 1919, traverse le territoire allemand et isole cinq morceaux d'Allemagne, devenus des enclaves en territoire belge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Vennbahn%2C%20ancienne%20voie%20ferr%C3%A9e%20attribu%C3%A9e%20%C3%A0%20la%20Belgique%20apr%C3%A8s%201919%2C%20traverse%20le%20territoire%20allemand%20et%20isole%20cinq%20morceaux%20d'Allemagne%2C%20devenus%20des%20enclaves%20en%20territoire%20belge%20%3F",
  "explanation": "Le traité de Versailles a attribué la voie ferrée de la Vennbahn à la Belgique, y compris dans les tronçons traversant l'Allemagne. Le tracé a créé des enclaves allemandes isolées par le territoire ferroviaire belge. La ligne n'est plus utilisée pour les trains, mais est devenue une piste cyclable."
 },
 {
  "text": "Depuis près de 1 000 ans, les femmes sont interdites sur le mont Athos, en Grèce, ainsi que les animaux domestiques femelles ; les chattes y sont toutefois tolérées pour chasser les souris.",
  "source": "Perplexity",
  "question": "Est-il vrai que depuis près de 1 000 ans, les femmes sont interdites sur le mont Athos, en Grèce, ainsi que les animaux domestiques femelles ; les chattes y sont toutefois tolérées pour chasser les souris ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20depuis%20pr%C3%A8s%20de%201%20000%20ans%2C%20les%20femmes%20sont%20interdites%20sur%20le%20mont%20Athos%2C%20en%20Gr%C3%A8ce%2C%20ainsi%20que%20les%20animaux%20domestiques%20femelles%20%3B%20les%20chattes%20y%20sont%20toutefois%20tol%C3%A9r%C3%A9es%20pour%20chasser%20les%20souris%20%3F",
  "explanation": "Le mont Athos est une république monastique autonome orthodoxe, dans le nord de la Grèce. L'interdiction faite aux femmes (l'abaton) vise à préserver la vie monastique. Les chattes y sont tolérées, notamment pour lutter contre les rongeurs. Les visiteurs masculins doivent obtenir une autorisation."
 },
 {
  "text": "En 1996, pour protester contre la loi suédoise sur les prénoms, des parents ont tenté d'appeler leur fils Brfxxccxxmnpcccclllmmnprxvclmnckssqlbb11116, à prononcer « Albin ». Le tribunal a refusé.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1996, pour protester contre la loi suédoise sur les prénoms, des parents ont tenté d'appeler leur fils Brfxxccxxmnpcccclllmmnprxvclmnckssqlbb11116, à prononcer « Albin ». Le tribunal a refusé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201996%2C%20pour%20protester%20contre%20la%20loi%20su%C3%A9doise%20sur%20les%20pr%C3%A9noms%2C%20des%20parents%20ont%20tent%C3%A9%20d'appeler%20leur%20fils%20Brfxxccxxmnpcccclllmmnprxvclmnckssqlbb11116%2C%20%C3%A0%20prononcer%20%C2%AB%20Albin%20%C2%BB.%20Le%20tribunal%20a%20refus%C3%A9%20%3F",
  "explanation": "La loi suédoise sur les noms impose une validation administrative des prénoms. Des parents ont proposé ce prénom en protestation. Le tribunal l'a refusé. Ils ont ensuite proposé « A », aussi refusé."
 },
 {
  "text": "En Islande, la bière forte est restée interdite jusqu'au 1er mars 1989, alors que le vin et les spiritueux étaient autorisés depuis des décennies ; cette date est fêtée chaque année comme le « jour de la bière ».",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en Islande, la bière forte est restée interdite jusqu'au 1er mars 1989, alors que le vin et les spiritueux étaient autorisés depuis des décennies ; cette date est fêtée chaque année comme le « jour de la bière » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20Islande%2C%20la%20bi%C3%A8re%20forte%20est%20rest%C3%A9e%20interdite%20jusqu'au%201er%20mars%201989%2C%20alors%20que%20le%20vin%20et%20les%20spiritueux%20%C3%A9taient%20autoris%C3%A9s%20depuis%20des%20d%C3%A9cennies%20%3B%20cette%20date%20est%20f%C3%AAt%C3%A9e%20chaque%20ann%C3%A9e%20comme%20le%20%C2%AB%20jour%20de%20la%20bi%C3%A8re%20%C2%BB%20%3F",
  "explanation": "L'Islande a instauré une prohibition totale en 1915. Le vin a été autorisé dès 1921, puis les spiritueux en 1935. La bière forte est restée interdite, car on la jugeait plus susceptible d'encourager l'ivresse quotidienne. La loi a été abrogée en 1989."
 },
 {
  "text": "Après les élections de juin 2010, la Belgique est restée 541 jours sans nouveau gouvernement, un record Guinness du plus long délai en temps de paix.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'après les élections de juin 2010, la Belgique est restée 541 jours sans nouveau gouvernement, un record Guinness du plus long délai en temps de paix ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'apr%C3%A8s%20les%20%C3%A9lections%20de%20juin%202010%2C%20la%20Belgique%20est%20rest%C3%A9e%20541%20jours%20sans%20nouveau%20gouvernement%2C%20un%20record%20Guinness%20du%20plus%20long%20d%C3%A9lai%20en%20temps%20de%20paix%20%3F",
  "explanation": "Après les élections de 2010, les partis belges, divisés entre néerlandophones et francophones, n'ont pas réussi à former un gouvernement. Le gouvernement sortant d'Yves Leterme a géré les affaires courantes. Elio Di Rupo est devenu Premier ministre en décembre 2011."
 },
 {
  "text": "Depuis 2017, le fleuve Whanganui, en Nouvelle-Zélande, est juridiquement une personne, dotée de droits et de représentants légaux qui parlent en son nom.",
  "source": "Perplexity",
  "question": "Est-il vrai que depuis 2017, le fleuve Whanganui, en Nouvelle-Zélande, est juridiquement une personne, dotée de droits et de représentants légaux qui parlent en son nom ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20depuis%202017%2C%20le%20fleuve%20Whanganui%2C%20en%20Nouvelle-Z%C3%A9lande%2C%20est%20juridiquement%20une%20personne%2C%20dot%C3%A9e%20de%20droits%20et%20de%20repr%C3%A9sentants%20l%C3%A9gaux%20qui%20parlent%20en%20son%20nom%20%3F",
  "explanation": "Le Whanganui est sacré pour les Maoris de la région, qui se battaient depuis plus d'un siècle pour le faire reconnaître. La loi de 2017 lui accorde la personnalité juridique. Deux représentants, l'un de l'État et l'autre des iwis, parlent en son nom."
 },
 {
  "text": "Depuis 2007, une réglementation chinoise impose que toute réincarnation d'un « bouddha vivant » tibétain soit approuvée par le gouvernement, sous peine d'être déclarée invalide.",
  "source": "Perplexity",
  "question": "Est-il vrai que depuis 2007, une réglementation chinoise impose que toute réincarnation d'un « bouddha vivant » tibétain soit approuvée par le gouvernement, sous peine d'être déclarée invalide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20depuis%202007%2C%20une%20r%C3%A9glementation%20chinoise%20impose%20que%20toute%20r%C3%A9incarnation%20d'un%20%C2%AB%20bouddha%20vivant%20%C2%BB%20tib%C3%A9tain%20soit%20approuv%C3%A9e%20par%20le%20gouvernement%2C%20sous%20peine%20d'%C3%AAtre%20d%C3%A9clar%C3%A9e%20invalide%20%3F",
  "explanation": "En 2007, le gouvernement chinois a publié une réglementation pour encadrer la réincarnation des « bouddhas vivants » tibétains. Les réincarnations doivent être approuvées par l'administration. Cette réglementation vise notamment la succession du dalaï-lama."
 },
 {
  "text": "Au Royaume-Uni, l'article 32 du Salmon Act de 1986 réprime le fait de manipuler un saumon dans des circonstances suspectes, c'est-à-dire en le soupçonnant d'avoir été braconné.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au Royaume-Uni, l'article 32 du Salmon Act de 1986 réprime le fait de manipuler un saumon dans des circonstances suspectes, c'est-à-dire en le soupçonnant d'avoir été braconné ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20Royaume-Uni%2C%20l'article%2032%20du%20Salmon%20Act%20de%201986%20r%C3%A9prime%20le%20fait%20de%20manipuler%20un%20saumon%20dans%20des%20circonstances%20suspectes%2C%20c'est-%C3%A0-dire%20en%20le%20soup%C3%A7onnant%20d'avoir%20%C3%A9t%C3%A9%20braconn%C3%A9%20%3F",
  "explanation": "La loi sur le saumon de 1986 vise à lutter contre le braconnage. L'article 32 interdit de manipuler du saumon, de le recevoir ou d'en disposer, si on sait ou si on a des raisons de croire qu'il a été pêché illégalement. Le titre de l'article est souvent cité pour son humour involontaire."
 },
 {
  "text": "À Coober Pedy, ville minière d'opale en Australie, environ la moitié des habitants vit sous terre, dans des maisons creusées dans la roche pour échapper à la chaleur du désert.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à Coober Pedy, ville minière d'opale en Australie, environ la moitié des habitants vit sous terre, dans des maisons creusées dans la roche pour échapper à la chaleur du désert ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20Coober%20Pedy%2C%20ville%20mini%C3%A8re%20d'opale%20en%20Australie%2C%20environ%20la%20moiti%C3%A9%20des%20habitants%20vit%20sous%20terre%2C%20dans%20des%20maisons%20creus%C3%A9es%20dans%20la%20roche%20pour%20%C3%A9chapper%20%C3%A0%20la%20chaleur%20du%20d%C3%A9sert%20%3F",
  "explanation": "Coober Pedy, dans le sud de l'Australie, fournit une grande partie des opales du monde. Les températures dépassent souvent 40 °C l'été. Les habitants ont creusé des maisons, des églises et des hôtels dans la roche, appelés dugouts, qui restent frais. Des films comme « Mad Max 3 » y ont été tournés."
 },
 {
  "text": "L'ordre souverain de Malte n'a aucun territoire, mais il délivre ses propres passeports, entretient des relations diplomatiques avec plus de 110 États et siège comme observateur permanent à l'ONU.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ordre souverain de Malte n'a aucun territoire, mais il délivre ses propres passeports, entretient des relations diplomatiques avec plus de 110 États et siège comme observateur permanent à l'ONU ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'ordre%20souverain%20de%20Malte%20n'a%20aucun%20territoire%2C%20mais%20il%20d%C3%A9livre%20ses%20propres%20passeports%2C%20entretient%20des%20relations%20diplomatiques%20avec%20plus%20de%20110%20%C3%89tats%20et%20si%C3%A8ge%20comme%20observateur%20permanent%20%C3%A0%20l'ONU%20%3F",
  "explanation": "L'ordre souverain militaire hospitalier de Saint-Jean de Jérusalem, de Rhodes et de Malte a perdu Malte en 1798, conquise par Napoléon. Il est reconnu comme sujet du droit international. Son siège est à Rome. Il mène des activités humanitaires dans de nombreux pays."
 },
 {
  "text": "En 2002, le président du Turkménistan Saparmourat Niazov a renommé janvier d'après son propre titre, « Turkmenbachi », et avril d'après le prénom de sa mère, Gourbansoltan. L'usage a été aboli en 2008.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2002, le président du Turkménistan Saparmourat Niazov a renommé janvier d'après son propre titre, « Turkmenbachi », et avril d'après le prénom de sa mère, Gourbansoltan. L'usage a été aboli en 2008 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202002%2C%20le%20pr%C3%A9sident%20du%20Turkm%C3%A9nistan%20Saparmourat%20Niazov%20a%20renomm%C3%A9%20janvier%20d'apr%C3%A8s%20son%20propre%20titre%2C%20%C2%AB%20Turkmenbachi%20%C2%BB%2C%20et%20avril%20d'apr%C3%A8s%20le%20pr%C3%A9nom%20de%20sa%20m%C3%A8re%2C%20Gourbansoltan.%20L'usage%20a%20%C3%A9t%C3%A9%20aboli%20en%202008%20%3F",
  "explanation": "Saparmourat Niazov a dirigé le Turkménistan de 1991 à 2006. Il a développé un culte de la personnalité, avec une statue en or tournant avec le soleil. Il a renommé les mois de l'année et les jours de la semaine. Son successeur a rétabli les noms d'origine."
 },
 {
  "text": "L'Éthiopie utilise un calendrier de 13 mois : douze de 30 jours et un treizième de 5 ou 6 jours. Son année commence le 11 ou le 12 septembre et compte sept à huit ans de retard sur le calendrier grégorien.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Éthiopie utilise un calendrier de 13 mois : douze de 30 jours et un treizième de 5 ou 6 jours. Son année commence le 11 ou le 12 septembre et compte sept à huit ans de retard sur le calendrier grégorien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%89thiopie%20utilise%20un%20calendrier%20de%2013%20mois%20%3A%20douze%20de%2030%20jours%20et%20un%20treizi%C3%A8me%20de%205%20ou%206%20jours.%20Son%20ann%C3%A9e%20commence%20le%2011%20ou%20le%2012%20septembre%20et%20compte%20sept%20%C3%A0%20huit%20ans%20de%20retard%20sur%20le%20calendrier%20gr%C3%A9gorien%20%3F",
  "explanation": "Le calendrier éthiopien est dérivé du calendrier copte. Il a 12 mois de 30 jours et un 13e mois, Pagume. Il calcule différemment la date de l'Annonciation, ce qui explique le décalage avec le calendrier grégorien. L'Éthiopie a célébré l'an 2000 le 12 septembre 2007."
 },
 {
  "text": "Depuis l'été 2019, s'asseoir sur l'escalier de la Trinité-des-Monts, à Rome, est interdit : les contrevenants s'exposent à une amende pouvant atteindre 400 euros.",
  "source": "Perplexity",
  "question": "Est-il vrai que depuis l'été 2019, s'asseoir sur l'escalier de la Trinité-des-Monts, à Rome, est interdit : les contrevenants s'exposent à une amende pouvant atteindre 400 euros ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20depuis%20l'%C3%A9t%C3%A9%202019%2C%20s'asseoir%20sur%20l'escalier%20de%20la%20Trinit%C3%A9-des-Monts%2C%20%C3%A0%20Rome%2C%20est%20interdit%20%3A%20les%20contrevenants%20s'exposent%20%C3%A0%20une%20amende%20pouvant%20atteindre%20400%20euros%20%3F",
  "explanation": "L'escalier de la Trinité-des-Monts, ou escalier de la place d'Espagne, construit au XVIIIe siècle, est l'un des lieux touristiques les plus fréquentés de Rome. Un règlement municipal de 2019 interdit de s'y asseoir, de manger ou de boire, pour préserver le monument."
 },
 {
  "text": "Le Slinky est né en 1943 quand un ressort est tombé d'une étagère devant Richard James, ingénieur de la Navy ; en 1945, ses 400 premiers exemplaires se sont vendus en 90 minutes dans un magasin de Philadelphie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Slinky est né en 1943 quand un ressort est tombé d'une étagère devant Richard James, ingénieur de la Navy ; en 1945, ses 400 premiers exemplaires se sont vendus en 90 minutes dans un magasin de Philadelphie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Slinky%20est%20n%C3%A9%20en%201943%20quand%20un%20ressort%20est%20tomb%C3%A9%20d'une%20%C3%A9tag%C3%A8re%20devant%20Richard%20James%2C%20ing%C3%A9nieur%20de%20la%20Navy%20%3B%20en%201945%2C%20ses%20400%20premiers%20exemplaires%20se%20sont%20vendus%20en%2090%20minutes%20dans%20un%20magasin%20de%20Philadelphie%20%3F",
  "explanation": "Richard James travaillait sur des ressorts pour stabiliser les instruments des navires. Un ressort est tombé et a « marché » sur une étagère. Avec sa femme Betty, qui a trouvé le nom, il a lancé le Slinky. Des centaines de millions d'exemplaires ont été vendus."
 },
 {
  "text": "Ed Headrick, père du Frisbee moderne, a demandé que ses cendres soient incorporées à des disques après sa mort en 2002 : certains ont été vendus pour financer un projet de musée.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'ed Headrick, père du Frisbee moderne, a demandé que ses cendres soient incorporées à des disques après sa mort en 2002 : certains ont été vendus pour financer un projet de musée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'ed%20Headrick%2C%20p%C3%A8re%20du%20Frisbee%20moderne%2C%20a%20demand%C3%A9%20que%20ses%20cendres%20soient%20incorpor%C3%A9es%20%C3%A0%20des%20disques%20apr%C3%A8s%20sa%20mort%20en%202002%20%3A%20certains%20ont%20%C3%A9t%C3%A9%20vendus%20pour%20financer%20un%20projet%20de%20mus%C3%A9e%20%3F",
  "explanation": "Ed Headrick, designer chez Wham-O, a breveté le Frisbee moderne en 1966. Il a aussi inventé le disc golf. Selon ses souhaits, ses cendres ont été mélangées au plastique de disques. Sa famille les a distribuées à des proches et en a vendu."
 },
 {
  "text": "Les cotons-tiges Q-tips, inventés en 1923 par Leo Gerstenzang, se sont d'abord appelés « Baby Gays », gay signifiant alors joyeux.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cotons-tiges Q-tips, inventés en 1923 par Leo Gerstenzang, se sont d'abord appelés « Baby Gays », gay signifiant alors joyeux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cotons-tiges%20Q-tips%2C%20invent%C3%A9s%20en%201923%20par%20Leo%20Gerstenzang%2C%20se%20sont%20d'abord%20appel%C3%A9s%20%C2%AB%20Baby%20Gays%20%C2%BB%2C%20gay%20signifiant%20alors%20joyeux%20%3F",
  "explanation": "Leo Gerstenzang a vu sa femme mettre du coton sur un cure-dent pour nettoyer les oreilles de leur bébé. Il a lancé un produit prêt à l'emploi, les « Baby Gays ». Le nom a été changé en Q-tips, le Q pour « qualité ». Les médecins déconseillent de les introduire dans le conduit auditif."
 },
 {
  "text": "WD-40 signifie « Water Displacement, 40e formule » : mis au point en 1953, le produit a d'abord servi à protéger de la rouille la coque des missiles Atlas.",
  "source": "Perplexity",
  "question": "Est-il vrai que wD-40 signifie « Water Displacement, 40e formule » : mis au point en 1953, le produit a d'abord servi à protéger de la rouille la coque des missiles Atlas ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20wD-40%20signifie%20%C2%AB%20Water%20Displacement%2C%2040e%20formule%20%C2%BB%20%3A%20mis%20au%20point%20en%201953%2C%20le%20produit%20a%20d'abord%20servi%20%C3%A0%20prot%C3%A9ger%20de%20la%20rouille%20la%20coque%20des%20missiles%20Atlas%20%3F",
  "explanation": "La Rocket Chemical Company cherchait à créer un produit anticorrosion pour l'industrie aérospatiale. Le WD-40 a été mis au point après 40 essais. Les employés ont commencé à l'utiliser chez eux, et le produit a été vendu au grand public en 1958."
 },
 {
  "text": "L'ancêtre du Nutella, le Giandujot lancé en 1946 par Pietro Ferrero, était un pain de pâte aux noisettes qu'on coupait en tranches au couteau pour le poser sur du pain.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ancêtre du Nutella, le Giandujot lancé en 1946 par Pietro Ferrero, était un pain de pâte aux noisettes qu'on coupait en tranches au couteau pour le poser sur du pain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'anc%C3%AAtre%20du%20Nutella%2C%20le%20Giandujot%20lanc%C3%A9%20en%201946%20par%20Pietro%20Ferrero%2C%20%C3%A9tait%20un%20pain%20de%20p%C3%A2te%20aux%20noisettes%20qu'on%20coupait%20en%20tranches%20au%20couteau%20pour%20le%20poser%20sur%20du%20pain%20%3F",
  "explanation": "Après la guerre, le cacao était rare et cher. Pietro Ferrero, pâtissier d'Alba, a mélangé du cacao avec des noisettes du Piémont. Le Giandujot était vendu en pains. En 1951, il a créé une version tartinable, la Supercrema. Le Nutella est apparu en 1964."
 },
 {
  "text": "Le Dr Pepper est plus ancien que le Coca-Cola : il a été servi dès 1885 dans une pharmacie de Waco, au Texas, un an avant l'apparition du Coca.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Dr Pepper est plus ancien que le Coca-Cola : il a été servi dès 1885 dans une pharmacie de Waco, au Texas, un an avant l'apparition du Coca ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Dr%20Pepper%20est%20plus%20ancien%20que%20le%20Coca-Cola%20%3A%20il%20a%20%C3%A9t%C3%A9%20servi%20d%C3%A8s%201885%20dans%20une%20pharmacie%20de%20Waco%2C%20au%20Texas%2C%20un%20an%20avant%20l'apparition%20du%20Coca%20%3F",
  "explanation": "Le Dr Pepper a été créé par le pharmacien Charles Alderton dans la pharmacie Old Corner Drug Store de Waco. Le Coca-Cola a été inventé en 1886 par John Pemberton à Atlanta. L'origine du nom « Dr Pepper » reste incertaine."
 },
 {
  "text": "Lancé en 1937 dans l'Oklahoma, le caddie de supermarché était boudé : les hommes le trouvaient peu viril, et son inventeur Sylvan Goldman a dû payer des figurants pour le pousser en magasin.",
  "source": "Perplexity",
  "question": "Est-il vrai que lancé en 1937 dans l'Oklahoma, le caddie de supermarché était boudé : les hommes le trouvaient peu viril, et son inventeur Sylvan Goldman a dû payer des figurants pour le pousser en magasin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20lanc%C3%A9%20en%201937%20dans%20l'Oklahoma%2C%20le%20caddie%20de%20supermarch%C3%A9%20%C3%A9tait%20boud%C3%A9%20%3A%20les%20hommes%20le%20trouvaient%20peu%20viril%2C%20et%20son%20inventeur%20Sylvan%20Goldman%20a%20d%C3%BB%20payer%20des%20figurants%20pour%20le%20pousser%20en%20magasin%20%3F",
  "explanation": "Sylvan Goldman, propriétaire de supermarchés, a remarqué que les clients s'arrêtaient d'acheter quand leurs paniers étaient trop lourds. Il a créé un chariot en ajoutant des roues à une chaise pliante. Les hommes le trouvaient efféminé, les femmes le comparaient à une poussette. Les figurants ont lancé la mode."
 },
 {
  "text": "Le premier distributeur automatique connu date du Ier siècle : Héron d'Alexandrie a conçu une machine qui délivrait de l'eau bénite en échange d'une pièce.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier distributeur automatique connu date du Ier siècle : Héron d'Alexandrie a conçu une machine qui délivrait de l'eau bénite en échange d'une pièce ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20distributeur%20automatique%20connu%20date%20du%20Ier%20si%C3%A8cle%20%3A%20H%C3%A9ron%20d'Alexandrie%20a%20con%C3%A7u%20une%20machine%20qui%20d%C3%A9livrait%20de%20l'eau%20b%C3%A9nite%20en%20%C3%A9change%20d'une%20pi%C3%A8ce%20%3F",
  "explanation": "Héron d'Alexandrie, ingénieur grec, a décrit une machine dans laquelle une pièce tombait sur un plateau relié à un levier. Le levier ouvrait une valve qui libérait de l'eau. Quand la pièce glissait, la valve se refermait. Il a aussi conçu une sorte de machine à vapeur, l'éolipyle."
 },
 {
  "text": "Les Doritos sont nés au début des années 1960 à Disneyland, dans le restaurant Casa de Fritos, qui faisait frire des tortillas invendues coupées en morceaux.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Doritos sont nés au début des années 1960 à Disneyland, dans le restaurant Casa de Fritos, qui faisait frire des tortillas invendues coupées en morceaux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Doritos%20sont%20n%C3%A9s%20au%20d%C3%A9but%20des%20ann%C3%A9es%201960%20%C3%A0%20Disneyland%2C%20dans%20le%20restaurant%20Casa%20de%20Fritos%2C%20qui%20faisait%20frire%20des%20tortillas%20invendues%20coup%C3%A9es%20en%20morceaux%20%3F",
  "explanation": "Le restaurant Casa de Fritos était géré par l'entreprise Frito. Pour éviter de jeter les tortillas, les cuisiniers les ont coupées, frites et assaisonnées. Un dirigeant de Frito-Lay a remarqué ces chips et les a commercialisées en 1966 sous le nom de Doritos, qui signifie « petites choses dorées »."
 },
 {
  "text": "Avant les spas, les frères Jacuzzi fabriquaient des hélices d'avion : leur première pompe de bain, en 1948, devait soulager le fils de Candido Jacuzzi, atteint de polyarthrite.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'avant les spas, les frères Jacuzzi fabriquaient des hélices d'avion : leur première pompe de bain, en 1948, devait soulager le fils de Candido Jacuzzi, atteint de polyarthrite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'avant%20les%20spas%2C%20les%20fr%C3%A8res%20Jacuzzi%20fabriquaient%20des%20h%C3%A9lices%20d'avion%20%3A%20leur%20premi%C3%A8re%20pompe%20de%20bain%2C%20en%201948%2C%20devait%20soulager%20le%20fils%20de%20Candido%20Jacuzzi%2C%20atteint%20de%20polyarthrite%20%3F",
  "explanation": "Les frères Jacuzzi ont fondé une entreprise qui fabriquait des hélices et des pompes agricoles. Le fils de Candido souffrait de polyarthrite rhumatoïde. La famille a adapté une pompe pour créer un bain à remous thérapeutique. Le spa Jacuzzi a été commercialisé dans les années 1950-1960."
 },
 {
  "text": "Dès 1662, le scientifique Christopher Merret décrivait à la Royal Society l'ajout de sucre pour rendre le vin pétillant, environ 35 ans avant les travaux attribués à Dom Pérignon.",
  "source": "Perplexity",
  "question": "Est-il vrai que dès 1662, le scientifique Christopher Merret décrivait à la Royal Society l'ajout de sucre pour rendre le vin pétillant, environ 35 ans avant les travaux attribués à Dom Pérignon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20d%C3%A8s%201662%2C%20le%20scientifique%20Christopher%20Merret%20d%C3%A9crivait%20%C3%A0%20la%20Royal%20Society%20l'ajout%20de%20sucre%20pour%20rendre%20le%20vin%20p%C3%A9tillant%2C%20environ%2035%20ans%20avant%20les%20travaux%20attribu%C3%A9s%20%C3%A0%20Dom%20P%C3%A9rignon%20%3F",
  "explanation": "Christopher Merret, scientifique anglais, a présenté un texte décrivant l'ajout de sucre au vin pour provoquer une seconde fermentation. Les verriers anglais fabriquaient alors des bouteilles plus résistantes. Dom Pérignon, moine de l'abbaye d'Hautvillers, cherchait au contraire à éviter les bulles."
 },
 {
  "text": "Momofuku Ando a inventé les nouilles instantanées en 1958, à 48 ans ; mort à 96 ans, il attribuait sa longévité au golf et à ses Chicken Ramen mangés presque chaque jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que momofuku Ando a inventé les nouilles instantanées en 1958, à 48 ans ; mort à 96 ans, il attribuait sa longévité au golf et à ses Chicken Ramen mangés presque chaque jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20momofuku%20Ando%20a%20invent%C3%A9%20les%20nouilles%20instantan%C3%A9es%20en%201958%2C%20%C3%A0%2048%20ans%20%3B%20mort%20%C3%A0%2096%20ans%2C%20il%20attribuait%20sa%20long%C3%A9vit%C3%A9%20au%20golf%20et%20%C3%A0%20ses%20Chicken%20Ramen%20mang%C3%A9s%20presque%20chaque%20jour%20%3F",
  "explanation": "Momofuku Ando, fondateur de Nissin, voulait offrir un aliment bon marché au Japon d'après-guerre. Il a découvert qu'il pouvait frire des nouilles pour les sécher et les conserver. Il a aussi inventé les Cup Noodles en 1971."
 },
 {
  "text": "Le logo des sucettes Chupa Chups a été dessiné en 1969 par le peintre surréaliste Salvador Dalí.",
  "source": "Perplexity",
  "question": "Est-il vrai que le logo des sucettes Chupa Chups a été dessiné en 1969 par le peintre surréaliste Salvador Dalí ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20logo%20des%20sucettes%20Chupa%20Chups%20a%20%C3%A9t%C3%A9%20dessin%C3%A9%20en%201969%20par%20le%20peintre%20surr%C3%A9aliste%20Salvador%20Dal%C3%AD%20%3F",
  "explanation": "Enric Bernat, fondateur de Chupa Chups, a demandé à Salvador Dalí de redessiner le logo. Dalí l'a fait en moins d'une heure, en dessinant une marguerite. Il a aussi conseillé de placer le logo sur le dessus de l'emballage, pour qu'il soit visible."
 },
 {
  "text": "La célèbre sauce sriracha au coq est fabriquée par Huy Fong Foods, nommée d'après le cargo Huey Fong sur lequel son fondateur David Tran avait fui le Vietnam.",
  "source": "Perplexity",
  "question": "Est-il vrai que la célèbre sauce sriracha au coq est fabriquée par Huy Fong Foods, nommée d'après le cargo Huey Fong sur lequel son fondateur David Tran avait fui le Vietnam ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20c%C3%A9l%C3%A8bre%20sauce%20sriracha%20au%20coq%20est%20fabriqu%C3%A9e%20par%20Huy%20Fong%20Foods%2C%20nomm%C3%A9e%20d'apr%C3%A8s%20le%20cargo%20Huey%20Fong%20sur%20lequel%20son%20fondateur%20David%20Tran%20avait%20fui%20le%20Vietnam%20%3F",
  "explanation": "David Tran a fui le Vietnam en 1978. Arrivé aux États-Unis, il a fondé Huy Fong Foods à Los Angeles. Le coq du logo correspond à son signe astrologique chinois. La sauce sriracha est inspirée d'une sauce thaïlandaise."
 },
 {
  "text": "Le Ferrero Rocher doit son nom au rocher de Massabielle, la grotte du sanctuaire de Lourdes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Ferrero Rocher doit son nom au rocher de Massabielle, la grotte du sanctuaire de Lourdes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Ferrero%20Rocher%20doit%20son%20nom%20au%20rocher%20de%20Massabielle%2C%20la%20grotte%20du%20sanctuaire%20de%20Lourdes%20%3F",
  "explanation": "Michele Ferrero, fils de Pietro, était un catholique fervent. Il a nommé la praline Ferrero Rocher d'après le rocher de Massabielle, où Bernadette Soubirous aurait vu la Vierge Marie. La forme rugueuse de la confiserie rappelle aussi celle d'un rocher."
 },
 {
  "text": "La barre Snickers, lancée en 1930, porte le nom du cheval préféré de la famille Mars.",
  "source": "Perplexity",
  "question": "Est-il vrai que la barre Snickers, lancée en 1930, porte le nom du cheval préféré de la famille Mars ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20barre%20Snickers%2C%20lanc%C3%A9e%20en%201930%2C%20porte%20le%20nom%20du%20cheval%20pr%C3%A9f%C3%A9r%C3%A9%20de%20la%20famille%20Mars%20%3F",
  "explanation": "Snickers a été lancé par Frank Mars. La famille Mars possédait des chevaux, dont Snickers, mort peu de temps avant le lancement. La barre est devenue la confiserie la plus vendue au monde."
 },
 {
  "text": "L'Oreo est une copie : créé en 1912, il imitait le biscuit Hydrox, commercialisé dès 1908, que le public a fini par prendre pour l'imitation.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Oreo est une copie : créé en 1912, il imitait le biscuit Hydrox, commercialisé dès 1908, que le public a fini par prendre pour l'imitation ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Oreo%20est%20une%20copie%20%3A%20cr%C3%A9%C3%A9%20en%201912%2C%20il%20imitait%20le%20biscuit%20Hydrox%2C%20commercialis%C3%A9%20d%C3%A8s%201908%2C%20que%20le%20public%20a%20fini%20par%20prendre%20pour%20l'imitation%20%3F",
  "explanation": "L'Hydrox a été créé par Sunshine Biscuits en 1908. Nabisco a lancé l'Oreo quatre ans plus tard. Grâce au marketing, l'Oreo est devenu beaucoup plus populaire. L'Hydrox, dont le nom évoquait l'hydrogène et l'oxygène, a fini par être considéré comme la copie."
 },
 {
  "text": "Au XVIIIe siècle, le ketchup anglais se faisait aux champignons, aux huîtres ou aux noix : la première recette connue à la tomate, publiée par James Mease, ne date que de 1812.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'Au XVIIIe siècle, le ketchup anglais se faisait aux champignons, aux huîtres ou aux noix : la première recette connue à la tomate, publiée par James Mease, ne date que de 1812 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'Au%20XVIIIe%20si%C3%A8cle%2C%20le%20ketchup%20anglais%20se%20faisait%20aux%20champignons%2C%20aux%20hu%C3%AEtres%20ou%20aux%20noix%20%3A%20la%20premi%C3%A8re%20recette%20connue%20%C3%A0%20la%20tomate%2C%20publi%C3%A9e%20par%20James%20Mease%2C%20ne%20date%20que%20de%201812%20%3F",
  "explanation": "Le mot ketchup viendrait d'une sauce de poisson fermenté d'Asie du Sud-Est. Les Anglais l'ont adapté avec des champignons, des noix ou des huîtres. James Mease a publié une recette de ketchup aux tomates en 1812. Heinz a commercialisé son ketchup à la tomate en 1876."
 },
 {
  "text": "Le plus grand nombre premier connu, 2^136 279 841 − 1, compte 41 024 320 chiffres ; Luke Durant l'a trouvé en octobre 2024 après un an de calcul sur des milliers de cartes graphiques, pour environ 2 millions de dollars.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus grand nombre premier connu, 2^136 279 841 − 1, compte 41 024 320 chiffres ; Luke Durant l'a trouvé en octobre 2024 après un an de calcul sur des milliers de cartes graphiques, pour environ 2 millions de dollars ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20grand%20nombre%20premier%20connu%2C%202%5E136%20279%20841%20%E2%88%92%201%2C%20compte%2041%20024%20320%20chiffres%20%3B%20Luke%20Durant%20l'a%20trouv%C3%A9%20en%20octobre%202024%20apr%C3%A8s%20un%20an%20de%20calcul%20sur%20des%20milliers%20de%20cartes%20graphiques%2C%20pour%20environ%202%20millions%20de%20dollars%20%3F",
  "explanation": "Ce nombre est un nombre premier de Mersenne, de la forme 2^p − 1. Luke Durant, ancien ingénieur de Nvidia, a utilisé des milliers de processeurs graphiques dans le cloud. Il participait au projet GIMPS, qui recherche ces nombres depuis 1996. Il a battu le record précédent de près de 16 millions de chiffres."
 },
 {
  "text": "Le 21 décembre 2023, Willis Gibson, 13 ans, est devenu le premier humain à « battre » le Tetris de la NES en faisant planter le jeu au niveau 157, exploit jusque-là réservé aux IA.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 21 décembre 2023, Willis Gibson, 13 ans, est devenu le premier humain à « battre » le Tetris de la NES en faisant planter le jeu au niveau 157, exploit jusque-là réservé aux IA ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2021%20d%C3%A9cembre%202023%2C%20Willis%20Gibson%2C%2013%20ans%2C%20est%20devenu%20le%20premier%20humain%20%C3%A0%20%C2%AB%20battre%20%C2%BB%20le%20Tetris%20de%20la%20NES%20en%20faisant%20planter%20le%20jeu%20au%20niveau%20157%2C%20exploit%20jusque-l%C3%A0%20r%C3%A9serv%C3%A9%20aux%20IA%20%3F",
  "explanation": "Willis Gibson, connu sous le pseudonyme Blue Scuti, a utilisé des techniques de jeu très rapides. Au niveau 157, une combinaison de lignes provoque un bug qui fige le jeu. Les développeurs n'avaient pas prévu que les joueurs atteindraient ces niveaux. La performance a été célébrée par la communauté."
 },
 {
  "text": "La deuxième plus grande Wikipédia du monde par nombre d'articles est en cebuano, une langue des Philippines : la quasi-totalité de ses 6 millions d'articles a été générée par des robots, surtout Lsjbot.",
  "source": "Perplexity",
  "question": "Est-il vrai que la deuxième plus grande Wikipédia du monde par nombre d'articles est en cebuano, une langue des Philippines : la quasi-totalité de ses 6 millions d'articles a été générée par des robots, surtout Lsjbot ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20deuxi%C3%A8me%20plus%20grande%20Wikip%C3%A9dia%20du%20monde%20par%20nombre%20d'articles%20est%20en%20cebuano%2C%20une%20langue%20des%20Philippines%20%3A%20la%20quasi-totalit%C3%A9%20de%20ses%206%20millions%20d'articles%20a%20%C3%A9t%C3%A9%20g%C3%A9n%C3%A9r%C3%A9e%20par%20des%20robots%2C%20surtout%20Lsjbot%20%3F",
  "explanation": "Le cebuano est parlé par environ 20 millions de personnes aux Philippines. Un programme écrit par le Suédois Sverker Johansson, Lsjbot, a créé des millions d'articles sur des espèces et des lieux à partir de bases de données. La qualité de ces articles est critiquée."
 },
 {
  "text": "En 2020, on a découvert qu'un adolescent qui ne parlait pas le scots avait écrit environ 23 000 articles, un tiers de la Wikipédia en scots, en anglais déguisé avec un accent écossais.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2020, on a découvert qu'un adolescent qui ne parlait pas le scots avait écrit environ 23 000 articles, un tiers de la Wikipédia en scots, en anglais déguisé avec un accent écossais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202020%2C%20on%20a%20d%C3%A9couvert%20qu'un%20adolescent%20qui%20ne%20parlait%20pas%20le%20scots%20avait%20%C3%A9crit%20environ%2023%20000%20articles%2C%20un%20tiers%20de%20la%20Wikip%C3%A9dia%20en%20scots%2C%20en%20anglais%20d%C3%A9guis%C3%A9%20avec%20un%20accent%20%C3%A9cossais%20%3F",
  "explanation": "En 2020, un utilisateur de Reddit a découvert qu'un adolescent américain avait écrit des milliers d'articles de la Wikipédia en scots, une langue germanique d'Écosse. Il écrivait en anglais avec une orthographe imitant l'accent écossais. Les articles ont dû être revus ou supprimés."
 },
 {
  "text": "En recopiant les mots déformés des CAPTCHA, des millions d'internautes ont aidé sans le savoir à numériser les archives du New York Times puis des livres de Google Books.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en recopiant les mots déformés des CAPTCHA, des millions d'internautes ont aidé sans le savoir à numériser les archives du New York Times puis des livres de Google Books ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20recopiant%20les%20mots%20d%C3%A9form%C3%A9s%20des%20CAPTCHA%2C%20des%20millions%20d'internautes%20ont%20aid%C3%A9%20sans%20le%20savoir%20%C3%A0%20num%C3%A9riser%20les%20archives%20du%20New%20York%20Times%20puis%20des%20livres%20de%20Google%20Books%20%3F",
  "explanation": "Le projet reCAPTCHA, lancé par Luis von Ahn, utilisait des mots que les logiciels de reconnaissance de texte ne parvenaient pas à lire. Les internautes résolvaient le CAPTCHA, et aidaient en même temps à numériser des textes. Google a acheté reCAPTCHA en 2009, et l'a ensuite utilisé pour Google Maps."
 },
 {
  "text": "Excel considère que le 29 février 1900 a existé, alors que 1900 n'était pas bissextile : Microsoft a copié volontairement ce bug du tableur Lotus 1-2-3 pour rester compatible.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'excel considère que le 29 février 1900 a existé, alors que 1900 n'était pas bissextile : Microsoft a copié volontairement ce bug du tableur Lotus 1-2-3 pour rester compatible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'excel%20consid%C3%A8re%20que%20le%2029%20f%C3%A9vrier%201900%20a%20exist%C3%A9%2C%20alors%20que%201900%20n'%C3%A9tait%20pas%20bissextile%20%3A%20Microsoft%20a%20copi%C3%A9%20volontairement%20ce%20bug%20du%20tableur%20Lotus%201-2-3%20pour%20rester%20compatible%20%3F",
  "explanation": "Lotus 1-2-3, le tableur dominant dans les années 1980, considérait par erreur 1900 comme bissextile. Pour assurer la compatibilité, Microsoft a conservé ce bug dans Excel. Les dates avant mars 1900 peuvent donc être décalées d'un jour."
 },
 {
  "text": "En 2020, les généticiens ont renommé 27 gènes humains, comme SEPT1 devenu SEPTIN1 et MARCH1 devenu MARCHF1, parce qu'Excel les transformait sans cesse en dates.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2020, les généticiens ont renommé 27 gènes humains, comme SEPT1 devenu SEPTIN1 et MARCH1 devenu MARCHF1, parce qu'Excel les transformait sans cesse en dates ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202020%2C%20les%20g%C3%A9n%C3%A9ticiens%20ont%20renomm%C3%A9%2027%20g%C3%A8nes%20humains%2C%20comme%20SEPT1%20devenu%20SEPTIN1%20et%20MARCH1%20devenu%20MARCHF1%2C%20parce%20qu'Excel%20les%20transformait%20sans%20cesse%20en%20dates%20%3F",
  "explanation": "Excel convertit automatiquement certains textes en dates, comme SEPT1 en 1er septembre. Cela a causé des erreurs dans de nombreux articles scientifiques. Le comité de nomenclature des gènes humains a décidé de renommer les gènes concernés, plutôt que d'attendre une modification d'Excel."
 },
 {
  "text": "JavaScript, l'un des langages fondamentaux du Web, a été écrit dans sa première version en dix jours par Brendan Eich chez Netscape en 1995, sous le nom de Mocha.",
  "source": "Perplexity",
  "question": "Est-il vrai que javaScript, l'un des langages fondamentaux du Web, a été écrit dans sa première version en dix jours par Brendan Eich chez Netscape en 1995, sous le nom de Mocha ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20javaScript%2C%20l'un%20des%20langages%20fondamentaux%20du%20Web%2C%20a%20%C3%A9t%C3%A9%20%C3%A9crit%20dans%20sa%20premi%C3%A8re%20version%20en%20dix%20jours%20par%20Brendan%20Eich%20chez%20Netscape%20en%201995%2C%20sous%20le%20nom%20de%20Mocha%20%3F",
  "explanation": "Netscape voulait un langage de script simple pour son navigateur. Brendan Eich a créé un prototype en mai 1995. Le langage a été renommé LiveScript, puis JavaScript, pour profiter de la popularité de Java, auquel il n'est pas lié. Certaines bizarreries du langage viennent de cette conception rapide."
 },
 {
  "text": "Le théorème des quatre couleurs, prouvé en 1976 par Appel et Haken, est le premier grand théorème démontré par ordinateur : la vérification a demandé plus de mille heures de calcul.",
  "source": "Perplexity",
  "question": "Est-il vrai que le théorème des quatre couleurs, prouvé en 1976 par Appel et Haken, est le premier grand théorème démontré par ordinateur : la vérification a demandé plus de mille heures de calcul ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20th%C3%A9or%C3%A8me%20des%20quatre%20couleurs%2C%20prouv%C3%A9%20en%201976%20par%20Appel%20et%20Haken%2C%20est%20le%20premier%20grand%20th%C3%A9or%C3%A8me%20d%C3%A9montr%C3%A9%20par%20ordinateur%20%3A%20la%20v%C3%A9rification%20a%20demand%C3%A9%20plus%20de%20mille%20heures%20de%20calcul%20%3F",
  "explanation": "Le théorème affirme que toute carte peut être coloriée avec quatre couleurs, de sorte que deux régions voisines n'aient pas la même couleur. Kenneth Appel et Wolfgang Haken ont réduit le problème à environ 1 900 configurations, vérifiées par ordinateur. Certains mathématiciens ont contesté une preuve impossible à vérifier à la main."
 },
 {
  "text": "Le 19 janvier 2038 à 03:14:08 UTC, les systèmes qui stockent l'heure sur un entier signé de 32 bits déborderont et croiront être revenus au 13 décembre 1901.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 19 janvier 2038 à 03:14:08 UTC, les systèmes qui stockent l'heure sur un entier signé de 32 bits déborderont et croiront être revenus au 13 décembre 1901 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2019%20janvier%202038%20%C3%A0%2003%3A14%3A08%20UTC%2C%20les%20syst%C3%A8mes%20qui%20stockent%20l'heure%20sur%20un%20entier%20sign%C3%A9%20de%2032%20bits%20d%C3%A9borderont%20et%20croiront%20%C3%AAtre%20revenus%20au%2013%20d%C3%A9cembre%201901%20%3F",
  "explanation": "De nombreux systèmes comptent le temps en secondes depuis le 1er janvier 1970. Un entier signé de 32 bits ne peut pas dépasser environ 2,1 milliards. Après cette date, le nombre devient négatif, renvoyant à 1901. La plupart des systèmes modernes utilisent 64 bits, ce qui repousse le problème de milliards d'années."
 },
 {
  "text": "Le site web promotionnel du film Space Jam, créé en 1996 avec ses GIF animés, est toujours consultable : Warner Bros l'a conservé comme page à part lors de la sortie de la suite en 2021.",
  "source": "Perplexity",
  "question": "Est-il vrai que le site web promotionnel du film Space Jam, créé en 1996 avec ses GIF animés, est toujours consultable : Warner Bros l'a conservé comme page à part lors de la sortie de la suite en 2021 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20site%20web%20promotionnel%20du%20film%20Space%20Jam%2C%20cr%C3%A9%C3%A9%20en%201996%20avec%20ses%20GIF%20anim%C3%A9s%2C%20est%20toujours%20consultable%20%3A%20Warner%20Bros%20l'a%20conserv%C3%A9%20comme%20page%20%C3%A0%20part%20lors%20de%20la%20sortie%20de%20la%20suite%20en%202021%20%3F",
  "explanation": "Le site de Space Jam est resté en ligne pendant 25 ans sans modification, devenant une curiosité de l'Internet des années 1990. Lors de la sortie de « Space Jam : Nouvelle ère » en 2021, Warner Bros a conservé l'ancien site sur une page séparée."
 },
 {
  "text": "Les mots « zéro » et « chiffre » viennent tous deux du même mot arabe, sifr, qui signifie « vide ».",
  "source": "Perplexity",
  "question": "Est-il vrai que les mots « zéro » et « chiffre » viennent tous deux du même mot arabe, sifr, qui signifie « vide » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20mots%20%C2%AB%20z%C3%A9ro%20%C2%BB%20et%20%C2%AB%20chiffre%20%C2%BB%20viennent%20tous%20deux%20du%20m%C3%AAme%20mot%20arabe%2C%20sifr%2C%20qui%20signifie%20%C2%AB%20vide%20%C2%BB%20%3F",
  "explanation": "Le mot arabe sifr désignait le vide, et le zéro dans le système de numération. En latin médiéval, il a donné « zephirum », qui a évolué en « zéro » via l'italien. Parallèlement, sifr a donné « cifra », qui a évolué en « chiffre »."
 },
 {
  "text": "Le mot anglais « nice » (gentil, agréable) vient du latin nescius, « ignorant » : au XIIIe siècle, il signifiait « sot » et n'a pris le sens d'« agréable » qu'au XVIIIe siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot anglais « nice » (gentil, agréable) vient du latin nescius, « ignorant » : au XIIIe siècle, il signifiait « sot » et n'a pris le sens d'« agréable » qu'au XVIIIe siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20anglais%20%C2%AB%20nice%20%C2%BB%20(gentil%2C%20agr%C3%A9able)%20vient%20du%20latin%20nescius%2C%20%C2%AB%20ignorant%20%C2%BB%20%3A%20au%20XIIIe%20si%C3%A8cle%2C%20il%20signifiait%20%C2%AB%20sot%20%C2%BB%20et%20n'a%20pris%20le%20sens%20d'%C2%AB%20agr%C3%A9able%20%C2%BB%20qu'au%20XVIIIe%20si%C3%A8cle%20%3F",
  "explanation": "Le latin nescius signifie « qui ne sait pas ». En ancien français, « nice » signifiait sot ou simple. Le mot est passé en anglais au XIIIe siècle, et son sens a évolué : délicat, précis, puis agréable. C'est un exemple de changement sémantique."
 },
 {
  "text": "L'arobase @ s'appelle « escargot » en italien, « queue de singe » en néerlandais, « petit chien » en russe, « queue de chat » en finnois et « strudel » en hébreu.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'arobase @ s'appelle « escargot » en italien, « queue de singe » en néerlandais, « petit chien » en russe, « queue de chat » en finnois et « strudel » en hébreu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'arobase%20%40%20s'appelle%20%C2%AB%20escargot%20%C2%BB%20en%20italien%2C%20%C2%AB%20queue%20de%20singe%20%C2%BB%20en%20n%C3%A9erlandais%2C%20%C2%AB%20petit%20chien%20%C2%BB%20en%20russe%2C%20%C2%AB%20queue%20de%20chat%20%C2%BB%20en%20finnois%20et%20%C2%AB%20strudel%20%C2%BB%20en%20h%C3%A9breu%20%3F",
  "explanation": "Le signe @ était utilisé par les marchands pour indiquer un prix unitaire. Avec le courrier électronique, il est devenu universel. Chaque langue lui a donné un nom inspiré de sa forme. En français, on l'appelle arobase, d'origine incertaine."
 },
 {
  "text": "Le raccourci Ctrl+Alt+Suppr a été inventé en 1981 par David Bradley, ingénieur d'IBM ; en 2013, Bill Gates a reconnu que l'utiliser pour ouvrir une session Windows avait été une erreur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le raccourci Ctrl+Alt+Suppr a été inventé en 1981 par David Bradley, ingénieur d'IBM ; en 2013, Bill Gates a reconnu que l'utiliser pour ouvrir une session Windows avait été une erreur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20raccourci%20Ctrl%2BAlt%2BSuppr%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20en%201981%20par%20David%20Bradley%2C%20ing%C3%A9nieur%20d'IBM%20%3B%20en%202013%2C%20Bill%20Gates%20a%20reconnu%20que%20l'utiliser%20pour%20ouvrir%20une%20session%20Windows%20avait%20%C3%A9t%C3%A9%20une%20erreur%20%3F",
  "explanation": "David Bradley a conçu Ctrl+Alt+Suppr pour redémarrer un ordinateur IBM sans l'éteindre, en évitant les manipulations accidentelles. Microsoft l'a utilisé pour ouvrir une session Windows, garantissant une interface sécurisée. Bill Gates a admis qu'un seul bouton aurait été préférable."
 },
 {
  "text": "Le mot « esquivalience », défini dans le New Oxford American Dictionary de 2001, n'existait pas : c'était un piège inventé pour démasquer les plagiaires, découvert en 2005.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « esquivalience », défini dans le New Oxford American Dictionary de 2001, n'existait pas : c'était un piège inventé pour démasquer les plagiaires, découvert en 2005 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20esquivalience%20%C2%BB%2C%20d%C3%A9fini%20dans%20le%20New%20Oxford%20American%20Dictionary%20de%202001%2C%20n'existait%20pas%20%3A%20c'%C3%A9tait%20un%20pi%C3%A8ge%20invent%C3%A9%20pour%20d%C3%A9masquer%20les%20plagiaires%2C%20d%C3%A9couvert%20en%202005%20%3F",
  "explanation": "Certains dictionnaires incluent de faux mots pour repérer les plagiats. « Esquivalience », défini comme « le fait d'éviter volontairement ses responsabilités », était l'un d'eux. Le journaliste Henry Alford l'a découvert en 2005. Le mot a été repris par d'autres sites."
 },
 {
  "text": "Agloe, village fictif inventé dans les années 1930 par des cartographes pour piéger les copieurs, est devenu réel quand un magasin portant ce nom a été construit à l'endroit indiqué sur la carte.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'agloe, village fictif inventé dans les années 1930 par des cartographes pour piéger les copieurs, est devenu réel quand un magasin portant ce nom a été construit à l'endroit indiqué sur la carte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'agloe%2C%20village%20fictif%20invent%C3%A9%20dans%20les%20ann%C3%A9es%201930%20par%20des%20cartographes%20pour%20pi%C3%A9ger%20les%20copieurs%2C%20est%20devenu%20r%C3%A9el%20quand%20un%20magasin%20portant%20ce%20nom%20a%20%C3%A9t%C3%A9%20construit%20%C3%A0%20l'endroit%20indiqu%C3%A9%20sur%20la%20carte%20%3F",
  "explanation": "Des cartographes de la General Drafting Company ont inventé Agloe, dans l'État de New York, pour piéger les copieurs. Un magasin, le « Agloe General Store », a été construit à cet emplacement. Agloe a été inscrit sur certaines cartes officielles. Le magasin a disparu, mais Agloe apparaît dans un roman de John Green."
 },
 {
  "text": "Un Rubik's Cube compte plus de 43 milliards de milliards de positions, mais chacune peut être résolue en 20 mouvements au maximum, ce qui a été prouvé par ordinateur en 2010.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un Rubik's Cube compte plus de 43 milliards de milliards de positions, mais chacune peut être résolue en 20 mouvements au maximum, ce qui a été prouvé par ordinateur en 2010 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20Rubik's%20Cube%20compte%20plus%20de%2043%20milliards%20de%20milliards%20de%20positions%2C%20mais%20chacune%20peut%20%C3%AAtre%20r%C3%A9solue%20en%2020%20mouvements%20au%20maximum%2C%20ce%20qui%20a%20%C3%A9t%C3%A9%20prouv%C3%A9%20par%20ordinateur%20en%202010%20%3F",
  "explanation": "Le Rubik's Cube compte environ 4,3 × 10^19 positions. En 2010, des chercheurs ont prouvé, avec l'aide de Google, que chacune peut être résolue en 20 mouvements au maximum. On appelle ce nombre le « nombre de Dieu »."
 },
 {
  "text": "Un gène essentiel au développement de l'embryon humain s'appelle « Sonic hedgehog » : le chercheur Robert Riddle l'a nommé ainsi d'après le héros du jeu vidéo de Sega.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un gène essentiel au développement de l'embryon humain s'appelle « Sonic hedgehog » : le chercheur Robert Riddle l'a nommé ainsi d'après le héros du jeu vidéo de Sega ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20g%C3%A8ne%20essentiel%20au%20d%C3%A9veloppement%20de%20l'embryon%20humain%20s'appelle%20%C2%AB%20Sonic%20hedgehog%20%C2%BB%20%3A%20le%20chercheur%20Robert%20Riddle%20l'a%20nomm%C3%A9%20ainsi%20d'apr%C3%A8s%20le%20h%C3%A9ros%20du%20jeu%20vid%C3%A9o%20de%20Sega%20%3F",
  "explanation": "Robert Riddle, chercheur à Harvard, a nommé ce gène lié au développement des embryons d'après le hérisson de Sega. Le gène « hedgehog » avait été découvert chez la drosophile. Le gène humain est impliqué dans le développement du cerveau, des membres et des organes."
 },
 {
  "text": "Le « D'oh! » d'Homer Simpson est entré dans l'Oxford English Dictionary en 2001 ; le script original indiquait seulement « grognement agacé ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le « D'oh! » d'Homer Simpson est entré dans l'Oxford English Dictionary en 2001 ; le script original indiquait seulement « grognement agacé » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20%C2%AB%20D'oh!%20%C2%BB%20d'Homer%20Simpson%20est%20entr%C3%A9%20dans%20l'Oxford%20English%20Dictionary%20en%202001%20%3B%20le%20script%20original%20indiquait%20seulement%20%C2%AB%20grognement%20agac%C3%A9%20%C2%BB%20%3F",
  "explanation": "Dan Castellaneta, voix d'Homer Simpson, a improvisé « D'oh! » à partir d'une expression de l'acteur James Finlayson. Les scripts mentionnaient « annoyed grunt ». Le mot est entré dans l'Oxford English Dictionary en 2001."
 },
 {
  "text": "Le langage de programmation Python ne doit pas son nom au serpent mais à la troupe comique britannique des Monty Python, selon son créateur Guido van Rossum.",
  "source": "Perplexity",
  "question": "Est-il vrai que le langage de programmation Python ne doit pas son nom au serpent mais à la troupe comique britannique des Monty Python, selon son créateur Guido van Rossum ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20langage%20de%20programmation%20Python%20ne%20doit%20pas%20son%20nom%20au%20serpent%20mais%20%C3%A0%20la%20troupe%20comique%20britannique%20des%20Monty%20Python%2C%20selon%20son%20cr%C3%A9ateur%20Guido%20van%20Rossum%20%3F",
  "explanation": "Guido van Rossum a créé Python à la fin des années 1980. Il lisait les scripts du « Monty Python's Flying Circus » et voulait un nom court et un peu mystérieux. La documentation de Python contient de nombreuses références aux Monty Python, comme « spam » et « eggs »."
 },
 {
  "text": "Mario s'appelait Jumpman et était charpentier dans Donkey Kong (1981) ; sa moustache et sa casquette évitaient de dessiner une bouche et des cheveux avec trop peu de pixels.",
  "source": "Perplexity",
  "question": "Est-il vrai que mario s'appelait Jumpman et était charpentier dans Donkey Kong (1981) ; sa moustache et sa casquette évitaient de dessiner une bouche et des cheveux avec trop peu de pixels ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20mario%20s'appelait%20Jumpman%20et%20%C3%A9tait%20charpentier%20dans%20Donkey%20Kong%20(1981)%20%3B%20sa%20moustache%20et%20sa%20casquette%20%C3%A9vitaient%20de%20dessiner%20une%20bouche%20et%20des%20cheveux%20avec%20trop%20peu%20de%20pixels%20%3F",
  "explanation": "Shigeru Miyamoto a créé Jumpman pour Donkey Kong. Avec les limites graphiques, la moustache évitait de dessiner une bouche, la casquette les cheveux, et la salopette rendait les bras visibles. Le personnage a été renommé Mario, d'après Mario Segale, le propriétaire d'un entrepôt de Nintendo of America."
 },
 {
  "text": "En 1972, l'hôtesse de l'air Vesna Vulović a survécu à l'explosion de son avion en vol : depuis 1985, le Guinness lui attribue le record de la plus haute chute sans parachute, 10 160 mètres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 1972, l'hôtesse de l'air Vesna Vulović a survécu à l'explosion de son avion en vol : depuis 1985, le Guinness lui attribue le record de la plus haute chute sans parachute, 10 160 mètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%201972%2C%20l'h%C3%B4tesse%20de%20l'air%20Vesna%20Vulovi%C4%87%20a%20surv%C3%A9cu%20%C3%A0%20l'explosion%20de%20son%20avion%20en%20vol%20%3A%20depuis%201985%2C%20le%20Guinness%20lui%20attribue%20le%20record%20de%20la%20plus%20haute%20chute%20sans%20parachute%2C%2010%20160%20m%C3%A8tres%20%3F",
  "explanation": "Vesna Vulović était hôtesse de l'air à bord d'un DC-9 de la compagnie JAT, qui a explosé au-dessus de la Tchécoslovaquie. Elle a survécu à la chute, coincée dans une partie du fuselage. Des enquêtes ultérieures ont suggéré que l'avion volait plus bas, mais le record a été maintenu."
 },
 {
  "text": "Jetée le 12 juin 1886 depuis le voilier allemand Paula, une bouteille à la mer a été retrouvée en janvier 2018 sur une plage d'Australie-Occidentale, 131 ans plus tard : un record pour un message ayant dérivé en mer.",
  "source": "Perplexity",
  "question": "Est-il vrai que jetée le 12 juin 1886 depuis le voilier allemand Paula, une bouteille à la mer a été retrouvée en janvier 2018 sur une plage d'Australie-Occidentale, 131 ans plus tard : un record pour un message ayant dérivé en mer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20jet%C3%A9e%20le%2012%20juin%201886%20depuis%20le%20voilier%20allemand%20Paula%2C%20une%20bouteille%20%C3%A0%20la%20mer%20a%20%C3%A9t%C3%A9%20retrouv%C3%A9e%20en%20janvier%202018%20sur%20une%20plage%20d'Australie-Occidentale%2C%20131%20ans%20plus%20tard%20%3A%20un%20record%20pour%20un%20message%20ayant%20d%C3%A9riv%C3%A9%20en%20mer%20%3F",
  "explanation": "La bouteille faisait partie d'une expérience de l'observatoire maritime allemand pour étudier les courants. Elle contenait un formulaire. Elle a été retrouvée par une habitante de Wedge Island, en Australie. L'authenticité a été confirmée par le Western Australian Museum avec des experts allemands."
 },
 {
  "text": "Le 9 juillet 1958, en Alaska, un glissement de terrain dans la baie Lituya a provoqué une vague qui est montée jusqu'à 524 mètres sur le versant opposé, plus haut que l'Empire State Building.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 9 juillet 1958, en Alaska, un glissement de terrain dans la baie Lituya a provoqué une vague qui est montée jusqu'à 524 mètres sur le versant opposé, plus haut que l'Empire State Building ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%209%20juillet%201958%2C%20en%20Alaska%2C%20un%20glissement%20de%20terrain%20dans%20la%20baie%20Lituya%20a%20provoqu%C3%A9%20une%20vague%20qui%20est%20mont%C3%A9e%20jusqu'%C3%A0%20524%20m%C3%A8tres%20sur%20le%20versant%20oppos%C3%A9%2C%20plus%20haut%20que%20l'Empire%20State%20Building%20%3F",
  "explanation": "Un séisme a provoqué l'effondrement d'environ 30 millions de m³ de roche dans la baie Lituya. L'impact a créé une vague qui a dévasté la forêt jusqu'à 524 m d'altitude. Deux pêcheurs sont morts, mais d'autres ont survécu sur leurs bateaux. C'est la plus haute vague connue."
 },
 {
  "text": "À sa mort en 1927, la barbe de Hans Langseth mesurait 5,33 mètres ; elle est conservée depuis 1967 par la Smithsonian Institution, à Washington.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à sa mort en 1927, la barbe de Hans Langseth mesurait 5,33 mètres ; elle est conservée depuis 1967 par la Smithsonian Institution, à Washington ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20sa%20mort%20en%201927%2C%20la%20barbe%20de%20Hans%20Langseth%20mesurait%205%2C33%20m%C3%A8tres%20%3B%20elle%20est%20conserv%C3%A9e%20depuis%201967%20par%20la%20Smithsonian%20Institution%2C%20%C3%A0%20Washington%20%3F",
  "explanation": "Hans Langseth avait commencé à faire pousser sa barbe pour un concours. Il la roulait et la glissait dans ses vêtements. Après sa mort, ses enfants ont coupé la barbe, et l'ont donnée au Smithsonian. C'est la plus longue barbe connue."
 },
 {
  "text": "En 2014, Alan Eustace, cadre de Google, a sauté d'environ 41 km d'altitude, suspendu sous un ballon d'hélium sans capsule, et a dépassé 1 300 km/h en chute libre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2014, Alan Eustace, cadre de Google, a sauté d'environ 41 km d'altitude, suspendu sous un ballon d'hélium sans capsule, et a dépassé 1 300 km/h en chute libre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202014%2C%20Alan%20Eustace%2C%20cadre%20de%20Google%2C%20a%20saut%C3%A9%20d'environ%2041%20km%20d'altitude%2C%20suspendu%20sous%20un%20ballon%20d'h%C3%A9lium%20sans%20capsule%2C%20et%20a%20d%C3%A9pass%C3%A9%201%20300%20km%2Fh%20en%20chute%20libre%20%3F",
  "explanation": "Alan Eustace a battu le record de Felix Baumgartner, établi en 2012. Il est monté pendant plus de deux heures sous un ballon d'hélium, dans une combinaison pressurisée, sans capsule. Il a franchi le mur du son pendant la chute, et a ouvert son parachute vers 5 km d'altitude."
 },
 {
  "text": "En 2007, Martin Strel a descendu l'Amazone à la nage : 5 268 km en 66 jours, la plus longue distance jamais parcourue à la nage.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2007, Martin Strel a descendu l'Amazone à la nage : 5 268 km en 66 jours, la plus longue distance jamais parcourue à la nage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202007%2C%20Martin%20Strel%20a%20descendu%20l'Amazone%20%C3%A0%20la%20nage%20%3A%205%20268%20km%20en%2066%20jours%2C%20la%20plus%20longue%20distance%20jamais%20parcourue%20%C3%A0%20la%20nage%20%3F",
  "explanation": "Martin Strel a nagé environ 10 heures par jour, avec une équipe de soutien. Il a enduré la chaleur, les parasites et la fatigue. Il avait déjà descendu le Danube, le Mississippi et le Yangtsé."
 },
 {
  "text": "Bette Nash a été hôtesse de l'air pendant près de 67 ans, de 1957 à sa mort en 2024, un record Guinness de longévité dans le métier.",
  "source": "Perplexity",
  "question": "Est-il vrai que Bette Nash a été hôtesse de l'air pendant près de 67 ans, de 1957 à sa mort en 2024, un record Guinness de longévité dans le métier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Bette%20Nash%20a%20%C3%A9t%C3%A9%20h%C3%B4tesse%20de%20l'air%20pendant%20pr%C3%A8s%20de%2067%20ans%2C%20de%201957%20%C3%A0%20sa%20mort%20en%202024%2C%20un%20record%20Guinness%20de%20long%C3%A9vit%C3%A9%20dans%20le%20m%C3%A9tier%20%3F",
  "explanation": "Bette Nash a commencé sa carrière en 1957 chez Eastern Air Lines, puis a travaillé chez American Airlines. Elle volait souvent sur la ligne Washington-Boston. Elle a été reconnue par le Guinness comme l'hôtesse de l'air ayant la plus longue carrière."
 },
 {
  "text": "Le timbre British Guiana 1c magenta, d'une valeur faciale d'un cent, a été vendu 9,48 millions de dollars en 2014 au créateur de chaussures Stuart Weitzman.",
  "source": "Perplexity",
  "question": "Est-il vrai que le timbre British Guiana 1c magenta, d'une valeur faciale d'un cent, a été vendu 9,48 millions de dollars en 2014 au créateur de chaussures Stuart Weitzman ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20timbre%20British%20Guiana%201c%20magenta%2C%20d'une%20valeur%20faciale%20d'un%20cent%2C%20a%20%C3%A9t%C3%A9%20vendu%209%2C48%20millions%20de%20dollars%20en%202014%20au%20cr%C3%A9ateur%20de%20chaussures%20Stuart%20Weitzman%20%3F",
  "explanation": "Le timbre, imprimé en 1856 en Guyane britannique, est le seul exemplaire connu. Il a été découvert en 1873 par un écolier écossais. Il est passé entre les mains de plusieurs collectionneurs. Stuart Weitzman l'a revendu en 2021 pour environ 8,3 millions de dollars."
 },
 {
  "text": "Oscar Swahn a remporté une médaille d'argent olympique en tir sur cerf courant en 1920, à 72 ans : il reste le plus vieux médaillé sportif de l'histoire des Jeux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'Oscar Swahn a remporté une médaille d'argent olympique en tir sur cerf courant en 1920, à 72 ans : il reste le plus vieux médaillé sportif de l'histoire des Jeux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'Oscar%20Swahn%20a%20remport%C3%A9%20une%20m%C3%A9daille%20d'argent%20olympique%20en%20tir%20sur%20cerf%20courant%20en%201920%2C%20%C3%A0%2072%20ans%20%3A%20il%20reste%20le%20plus%20vieux%20m%C3%A9daill%C3%A9%20sportif%20de%20l'histoire%20des%20Jeux%20%3F",
  "explanation": "Oscar Swahn a participé aux Jeux de 1908, 1912 et 1920. Il a remporté des médailles d'or et d'argent. Le tir sur cerf courant consistait à tirer sur une cible représentant un cerf, qui se déplaçait. Il s'était qualifié pour 1924, mais n'a pas participé pour raison de santé."
 },
 {
  "text": "Le plus jeune médaillé olympique connu, Dimitrios Loundras, a eu le bronze aux barres parallèles par équipes en 1896 à 10 ans : son équipe a fini troisième… sur trois.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus jeune médaillé olympique connu, Dimitrios Loundras, a eu le bronze aux barres parallèles par équipes en 1896 à 10 ans : son équipe a fini troisième… sur trois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20jeune%20m%C3%A9daill%C3%A9%20olympique%20connu%2C%20Dimitrios%20Loundras%2C%20a%20eu%20le%20bronze%20aux%20barres%20parall%C3%A8les%20par%20%C3%A9quipes%20en%201896%20%C3%A0%2010%20ans%20%3A%20son%20%C3%A9quipe%20a%20fini%20troisi%C3%A8me%E2%80%A6%20sur%20trois%20%3F",
  "explanation": "Lors des Jeux d'Athènes de 1896, Dimitrios Loundras faisait partie de l'équipe grecque du club Ethnikos Gymnastikos Syllogos. Il n'y avait que trois équipes. Il est le plus jeune médaillé olympique connu. Il est ensuite devenu officier de marine."
 },
 {
  "text": "Le grêlon le plus lourd jamais pesé, tombé le 14 avril 1986 dans le district de Gopalganj, au Bangladesh, faisait 1,02 kg.",
  "source": "Perplexity",
  "question": "Est-il vrai que le grêlon le plus lourd jamais pesé, tombé le 14 avril 1986 dans le district de Gopalganj, au Bangladesh, faisait 1,02 kg ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20gr%C3%AAlon%20le%20plus%20lourd%20jamais%20pes%C3%A9%2C%20tomb%C3%A9%20le%2014%20avril%201986%20dans%20le%20district%20de%20Gopalganj%2C%20au%20Bangladesh%2C%20faisait%201%2C02%20kg%20%3F",
  "explanation": "Le grêlon de Gopalganj, au Bangladesh, pesait 1,02 kg. Les orages de grêle ont fait 92 morts dans cette région. Le plus gros grêlon mesuré en diamètre est tombé à Vivian, dans le Dakota du Sud, en 2010."
 },
 {
  "text": "Le plus long éclair homologué a parcouru 829 km entre le Texas et le Kansas en octobre 2017, et le plus durable a brillé 17,1 secondes au-dessus de l'Uruguay et de l'Argentine en 2020.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long éclair homologué a parcouru 829 km entre le Texas et le Kansas en octobre 2017, et le plus durable a brillé 17,1 secondes au-dessus de l'Uruguay et de l'Argentine en 2020 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20%C3%A9clair%20homologu%C3%A9%20a%20parcouru%20829%20km%20entre%20le%20Texas%20et%20le%20Kansas%20en%20octobre%202017%2C%20et%20le%20plus%20durable%20a%20brill%C3%A9%2017%2C1%20secondes%20au-dessus%20de%20l'Uruguay%20et%20de%20l'Argentine%20en%202020%20%3F",
  "explanation": "L'Organisation météorologique mondiale homologue les records d'éclairs grâce aux satellites, qui détectent les flashs à très grande échelle. Ces « mégaflashs » naissent dans d'immenses systèmes orageux. L'éclair de 829 km de 2017 a été identifié plus tard, en réanalysant les données, et a battu le précédent record de 768 km."
 },
 {
  "text": "Le record mondial de pluie en 24 heures est français : 1 825 mm tombés à Foc-Foc, à La Réunion, lors du cyclone Denise en janvier 1966, dont 1 144 mm en 12 heures.",
  "source": "Perplexity",
  "question": "Est-il vrai que le record mondial de pluie en 24 heures est français : 1 825 mm tombés à Foc-Foc, à La Réunion, lors du cyclone Denise en janvier 1966, dont 1 144 mm en 12 heures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20record%20mondial%20de%20pluie%20en%2024%20heures%20est%20fran%C3%A7ais%20%3A%201%20825%20mm%20tomb%C3%A9s%20%C3%A0%20Foc-Foc%2C%20%C3%A0%20La%20R%C3%A9union%2C%20lors%20du%20cyclone%20Denise%20en%20janvier%201966%2C%20dont%201%20144%20mm%20en%2012%20heures%20%3F",
  "explanation": "Lors du passage du cyclone Denise, Foc-Foc, sur le piton de la Fournaise, a reçu 1 825 mm de pluie en 24 heures. Le relief de La Réunion favorise les pluies intenses, en forçant l'air humide à monter. L'île détient d'autres records de précipitations."
 },
 {
  "text": "En 2015, une chambre anéchoïque de Microsoft, à Redmond, a mesuré un bruit de fond d'environ −20 décibels, sous le seuil de l'audition humaine : un record mondial de silence.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2015, une chambre anéchoïque de Microsoft, à Redmond, a mesuré un bruit de fond d'environ −20 décibels, sous le seuil de l'audition humaine : un record mondial de silence ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202015%2C%20une%20chambre%20an%C3%A9cho%C3%AFque%20de%20Microsoft%2C%20%C3%A0%20Redmond%2C%20a%20mesur%C3%A9%20un%20bruit%20de%20fond%20d'environ%20%E2%88%9220%20d%C3%A9cibels%2C%20sous%20le%20seuil%20de%20l'audition%20humaine%20%3A%20un%20record%20mondial%20de%20silence%20%3F",
  "explanation": "Une chambre anéchoïque absorbe presque tous les sons. Celle de Microsoft, utilisée pour tester des appareils, est montée sur des ressorts et isolée des vibrations. Dans une telle pièce, on entend son propre cœur et sa respiration. Certaines personnes trouvent le silence perturbant."
 },
 {
  "text": "En 2014, dans les réservoirs de pétrole souterrains d'Inchindown, en Écosse, le son d'un coup de pistolet à blanc a résonné 75 secondes, la plus longue réverbération d'une construction humaine.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2014, dans les réservoirs de pétrole souterrains d'Inchindown, en Écosse, le son d'un coup de pistolet à blanc a résonné 75 secondes, la plus longue réverbération d'une construction humaine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202014%2C%20dans%20les%20r%C3%A9servoirs%20de%20p%C3%A9trole%20souterrains%20d'Inchindown%2C%20en%20%C3%89cosse%2C%20le%20son%20d'un%20coup%20de%20pistolet%20%C3%A0%20blanc%20a%20r%C3%A9sonn%C3%A9%2075%20secondes%2C%20la%20plus%20longue%20r%C3%A9verb%C3%A9ration%20d'une%20construction%20humaine%20%3F",
  "explanation": "Les réservoirs d'Inchindown ont été construits pendant la Seconde Guerre mondiale pour stocker le carburant de la Royal Navy, dans une colline, à l'abri des bombardements. Leur immense volume de béton fermé crée une réverbération exceptionnelle. L'acousticien Trevor Cox y a mesuré le record."
 },
 {
  "text": "Dans la forêt de Malheur, en Oregon, un seul champignon Armillaria ostoyae s'étend sous terre sur environ 9 km², ce qui en fait l'un des plus grands organismes vivants connus.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans la forêt de Malheur, en Oregon, un seul champignon Armillaria ostoyae s'étend sous terre sur environ 9 km², ce qui en fait l'un des plus grands organismes vivants connus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20la%20for%C3%AAt%20de%20Malheur%2C%20en%20Oregon%2C%20un%20seul%20champignon%20Armillaria%20ostoyae%20s'%C3%A9tend%20sous%20terre%20sur%20environ%209%20km%C2%B2%2C%20ce%20qui%20en%20fait%20l'un%20des%20plus%20grands%20organismes%20vivants%20connus%20%3F",
  "explanation": "L'armillaire de l'Oregon est un champignon dont les filaments, le mycélium, s'étendent sous terre. Les analyses génétiques ont montré qu'il s'agit d'un seul individu. Il aurait entre 2 000 et 8 000 ans. Il tue les arbres en parasitant leurs racines."
 },
 {
  "text": "En 2022, des analyses génétiques ont montré qu'un herbier de Shark Bay, en Australie, est une seule plante clonée de Posidonia australis couvrant environ 200 km² sur 180 km de long.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en 2022, des analyses génétiques ont montré qu'un herbier de Shark Bay, en Australie, est une seule plante clonée de Posidonia australis couvrant environ 200 km² sur 180 km de long ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%202022%2C%20des%20analyses%20g%C3%A9n%C3%A9tiques%20ont%20montr%C3%A9%20qu'un%20herbier%20de%20Shark%20Bay%2C%20en%20Australie%2C%20est%20une%20seule%20plante%20clon%C3%A9e%20de%20Posidonia%20australis%20couvrant%20environ%20200%20km%C2%B2%20sur%20180%20km%20de%20long%20%3F",
  "explanation": "En 2022, des chercheurs australiens ont montré qu'une grande partie de l'herbier de Shark Bay est une seule plante. Elle s'est propagée par clonage, à partir de rhizomes. Elle aurait environ 4 500 ans. Elle est hybride et a deux fois plus de chromosomes que ses parents."
 },
 {
  "text": "Décrite en 2022 dans une mangrove de Guadeloupe, la bactérie Thiomargarita magnifica mesure environ 1 cm, jusqu'à 2 cm : elle est visible à l'œil nu.",
  "source": "Perplexity",
  "question": "Est-il vrai que décrite en 2022 dans une mangrove de Guadeloupe, la bactérie Thiomargarita magnifica mesure environ 1 cm, jusqu'à 2 cm : elle est visible à l'œil nu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20d%C3%A9crite%20en%202022%20dans%20une%20mangrove%20de%20Guadeloupe%2C%20la%20bact%C3%A9rie%20Thiomargarita%20magnifica%20mesure%20environ%201%20cm%2C%20jusqu'%C3%A0%202%20cm%20%3A%20elle%20est%20visible%20%C3%A0%20l'%C5%93il%20nu%20%3F",
  "explanation": "Thiomargarita magnifica a été découverte par Olivier Gros, biologiste de l'université des Antilles, en Guadeloupe. Elle est environ 5 000 fois plus grande que la plupart des bactéries. Son ADN est contenu dans des compartiments membranaires, ce qui est inhabituel chez les bactéries."
 },
 {
  "text": "Pour empêcher son abattage, la militante Julia Butterfly Hill a vécu 738 jours, de 1997 à 1999, sur une plateforme perchée à 55 mètres dans un séquoia californien millénaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que pour empêcher son abattage, la militante Julia Butterfly Hill a vécu 738 jours, de 1997 à 1999, sur une plateforme perchée à 55 mètres dans un séquoia californien millénaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pour%20emp%C3%AAcher%20son%20abattage%2C%20la%20militante%20Julia%20Butterfly%20Hill%20a%20v%C3%A9cu%20738%20jours%2C%20de%201997%20%C3%A0%201999%2C%20sur%20une%20plateforme%20perch%C3%A9e%20%C3%A0%2055%20m%C3%A8tres%20dans%20un%20s%C3%A9quoia%20californien%20mill%C3%A9naire%20%3F",
  "explanation": "Julia Butterfly Hill a vécu dans un séquoia surnommé Luna, pour empêcher la compagnie Pacific Lumber de l'abattre. Elle a enduré des tempêtes, des intimidations et des hélicoptères. Un accord a été conclu pour protéger l'arbre et une zone autour. L'arbre a été endommagé par vandalisme en 2000, mais a survécu."
 },
 {
  "text": "Mill Ends Park, à Portland, avec un seul arbre sur 0,29 m², a été le plus petit parc du monde selon le Guinness de 1971 à 2025, détrôné par un parc japonais de 0,24 m² à Nagaizumi.",
  "source": "Perplexity",
  "question": "Est-il vrai que mill Ends Park, à Portland, avec un seul arbre sur 0,29 m², a été le plus petit parc du monde selon le Guinness de 1971 à 2025, détrôné par un parc japonais de 0,24 m² à Nagaizumi ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20mill%20Ends%20Park%2C%20%C3%A0%20Portland%2C%20avec%20un%20seul%20arbre%20sur%200%2C29%20m%C2%B2%2C%20a%20%C3%A9t%C3%A9%20le%20plus%20petit%20parc%20du%20monde%20selon%20le%20Guinness%20de%201971%20%C3%A0%202025%2C%20d%C3%A9tr%C3%B4n%C3%A9%20par%20un%20parc%20japonais%20de%200%2C24%20m%C2%B2%20%C3%A0%20Nagaizumi%20%3F",
  "explanation": "Mill Ends Park a été créé par le journaliste Dick Fagan, qui a planté des fleurs dans un trou destiné à un lampadaire. Il écrivait sur une colonie de lutins qui y vivait. Le parc a été officiellement intégré au réseau de parcs de Portland en 1976."
 },
 {
  "text": "Lee Redmond a fait pousser ses ongles pendant 30 ans jusqu'à 7,51 mètres au total, avant de les perdre en 2009 dans un accident de voiture.",
  "source": "Perplexity",
  "question": "Est-il vrai que Lee Redmond a fait pousser ses ongles pendant 30 ans jusqu'à 7,51 mètres au total, avant de les perdre en 2009 dans un accident de voiture ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Lee%20Redmond%20a%20fait%20pousser%20ses%20ongles%20pendant%2030%20ans%20jusqu'%C3%A0%207%2C51%20m%C3%A8tres%20au%20total%2C%20avant%20de%20les%20perdre%20en%202009%20dans%20un%20accident%20de%20voiture%20%3F",
  "explanation": "Lee Redmond a cessé de se couper les ongles en 1979. Elle les soignait avec de l'huile d'olive chaude. Après son accident de voiture en 2009, ses ongles se sont cassés. Elle a dit avoir été libérée de leur entretien."
 },
 {
  "text": "Les vaches ont des « meilleures amies » : séparées de leur congénère préférée, leur rythme cardiaque et leur niveau de stress augmentent.",
  "source": "Perplexity",
  "question": "Est-il vrai que les vaches ont des « meilleures amies » : séparées de leur congénère préférée, leur rythme cardiaque et leur niveau de stress augmentent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20vaches%20ont%20des%20%C2%AB%20meilleures%20amies%20%C2%BB%20%3A%20s%C3%A9par%C3%A9es%20de%20leur%20cong%C3%A9n%C3%A8re%20pr%C3%A9f%C3%A9r%C3%A9e%2C%20leur%20rythme%20cardiaque%20et%20leur%20niveau%20de%20stress%20augmentent%20%3F",
  "explanation": "Une étude de l'université de Northampton (2013) a mesuré le stress de vaches laitières isolées, placées avec une inconnue, ou avec leur compagne habituelle. Avec leur partenaire préférée, leur fréquence cardiaque et leurs signes d'agitation étaient nettement plus bas. Les bovins sont des animaux sociaux qui forment des liens stables au sein du troupeau."
 },
 {
  "text": "Les pieuvres ne dorment pas toutes de la même façon : pendant leur sommeil « actif », elles changent de couleur, ce qui pourrait correspondre à une forme de rêve.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pieuvres ne dorment pas toutes de la même façon : pendant leur sommeil « actif », elles changent de couleur, ce qui pourrait correspondre à une forme de rêve ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pieuvres%20ne%20dorment%20pas%20toutes%20de%20la%20m%C3%AAme%20fa%C3%A7on%20%3A%20pendant%20leur%20sommeil%20%C2%AB%20actif%20%C2%BB%2C%20elles%20changent%20de%20couleur%2C%20ce%20qui%20pourrait%20correspondre%20%C3%A0%20une%20forme%20de%20r%C3%AAve%20%3F",
  "explanation": "Des chercheurs ont observé chez le poulpe deux phases de sommeil : une phase calme, et une phase active de quelques dizaines de secondes avec des mouvements des yeux et des changements de couleur de la peau. Cette alternance rappelle le sommeil paradoxal des mammifères, pendant lequel nous rêvons. Les scientifiques restent prudents : on ne sait pas ce que vit l'animal."
 },
 {
  "text": "Les escargots peuvent dormir jusqu'à trois ans d'affilée quand le climat est trop sec.",
  "source": "Perplexity",
  "question": "Est-il vrai que les escargots peuvent dormir jusqu'à trois ans d'affilée quand le climat est trop sec ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20escargots%20peuvent%20dormir%20jusqu'%C3%A0%20trois%20ans%20d'affil%C3%A9e%20quand%20le%20climat%20est%20trop%20sec%20%3F",
  "explanation": "En cas de sécheresse, l'escargot se retire dans sa coquille et la ferme avec un voile de mucus séché, l'épiphragme. Son métabolisme ralentit fortement : c'est l'estivation (ou l'hibernation en hiver). Il peut rester ainsi des mois, et selon certaines observations jusqu'à environ trois ans, en attendant le retour de l'humidité."
 },
 {
  "text": "Les éléphants sont l'un des rares animaux à se reconnaître dans un miroir.",
  "source": "Perplexity",
  "question": "Est-il vrai que les éléphants sont l'un des rares animaux à se reconnaître dans un miroir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%A9l%C3%A9phants%20sont%20l'un%20des%20rares%20animaux%20%C3%A0%20se%20reconna%C3%AEtre%20dans%20un%20miroir%20%3F",
  "explanation": "En 2006, des éléphants d'Asie du zoo du Bronx ont passé le test du miroir : marqués d'une croix visible seulement dans leur reflet, ils ont touché la marque avec leur trompe. Ce test de reconnaissance de soi est réussi par peu d'espèces : grands singes, dauphins, pies, et quelques autres."
 },
 {
  "text": "Une girafe ne dort qu'environ 30 minutes à 2 heures par jour, souvent par petites siestes de quelques minutes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une girafe ne dort qu'environ 30 minutes à 2 heures par jour, souvent par petites siestes de quelques minutes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20girafe%20ne%20dort%20qu'environ%2030%20minutes%20%C3%A0%202%20heures%20par%20jour%2C%20souvent%20par%20petites%20siestes%20de%20quelques%20minutes%20%3F",
  "explanation": "Dans la nature, se coucher rend la girafe vulnérable aux prédateurs, car il lui faut du temps pour se relever. Elle dort donc très peu, souvent debout, par épisodes de quelques minutes. En captivité, à l'abri des prédateurs, elle dort un peu plus longtemps."
 },
 {
  "text": "Les papillons goûtent avec leurs pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les papillons goûtent avec leurs pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20papillons%20go%C3%BBtent%20avec%20leurs%20pattes%20%3F",
  "explanation": "Les papillons possèdent des récepteurs gustatifs, appelés chimiorécepteurs, sur leurs pattes. En se posant sur une feuille, une femelle peut ainsi « goûter » la plante pour vérifier qu'elle convient à ses chenilles avant d'y pondre. Les mouches ont aussi des capteurs de goût sur les pattes."
 },
 {
  "text": "Le cœur d'une crevette se trouve dans sa tête.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cœur d'une crevette se trouve dans sa tête ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20c%C5%93ur%20d'une%20crevette%20se%20trouve%20dans%20sa%20t%C3%AAte%20%3F",
  "explanation": "Chez la crevette, la plupart des organes vitaux, dont le cœur, l'estomac et les glandes digestives, sont regroupés dans le céphalothorax, la partie avant du corps qui comprend la tête. C'est pourquoi la « tête » d'une crevette contient l'essentiel de ses organes."
 },
 {
  "text": "Les hiboux ne peuvent pas bouger leurs yeux : pour regarder ailleurs, ils tournent la tête jusqu'à environ 270 degrés.",
  "source": "Perplexity",
  "question": "Est-il vrai que les hiboux ne peuvent pas bouger leurs yeux : pour regarder ailleurs, ils tournent la tête jusqu'à environ 270 degrés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20hiboux%20ne%20peuvent%20pas%20bouger%20leurs%20yeux%20%3A%20pour%20regarder%20ailleurs%2C%20ils%20tournent%20la%20t%C3%AAte%20jusqu'%C3%A0%20environ%20270%20degr%C3%A9s%20%3F",
  "explanation": "Les yeux du hibou sont en forme de tube et fixés dans leur orbite osseuse, ce qui les empêche de pivoter. Pour compenser, son cou possède 14 vertèbres (contre 7 chez l'humain) et un système de vaisseaux sanguins qui évite de couper la circulation quand il tourne la tête."
 },
 {
  "text": "Un colibri bat des ailes jusqu'à environ 80 fois par seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un colibri bat des ailes jusqu'à environ 80 fois par seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20colibri%20bat%20des%20ailes%20jusqu'%C3%A0%20environ%2080%20fois%20par%20seconde%20%3F",
  "explanation": "Selon les espèces, les colibris battent des ailes entre environ 10 et 80 fois par seconde. Cela leur permet de faire du vol stationnaire devant les fleurs, et même de voler en arrière. Leur cœur peut dépasser 1 000 battements par minute en vol."
 },
 {
  "text": "Le paresseux peut mettre jusqu'à un mois pour digérer un seul repas.",
  "source": "Perplexity",
  "question": "Est-il vrai que le paresseux peut mettre jusqu'à un mois pour digérer un seul repas ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20paresseux%20peut%20mettre%20jusqu'%C3%A0%20un%20mois%20pour%20dig%C3%A9rer%20un%20seul%20repas%20%3F",
  "explanation": "Le paresseux se nourrit de feuilles peu nutritives et difficiles à digérer. Son estomac à plusieurs compartiments fonctionne très lentement, et son métabolisme est l'un des plus bas des mammifères. La digestion complète d'un repas peut prendre de quelques jours à près d'un mois."
 },
 {
  "text": "Les paresseux descendent de leur arbre environ une fois par semaine, uniquement pour faire leurs besoins au sol.",
  "source": "Perplexity",
  "question": "Est-il vrai que les paresseux descendent de leur arbre environ une fois par semaine, uniquement pour faire leurs besoins au sol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20paresseux%20descendent%20de%20leur%20arbre%20environ%20une%20fois%20par%20semaine%2C%20uniquement%20pour%20faire%20leurs%20besoins%20au%20sol%20%3F",
  "explanation": "Le paresseux passe presque toute sa vie dans les arbres. Environ une fois par semaine, il descend pour déféquer au pied de l'arbre, ce qui le rend vulnérable. Les raisons de ce comportement risqué sont débattues : marquage, communication, ou entretien d'un écosystème de mites et d'algues dans son pelage."
 },
 {
  "text": "Les corneilles et les corbeaux organisent parfois des « funérailles » autour d'un congénère mort.",
  "source": "Perplexity",
  "question": "Est-il vrai que les corneilles et les corbeaux organisent parfois des « funérailles » autour d'un congénère mort ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20corneilles%20et%20les%20corbeaux%20organisent%20parfois%20des%20%C2%AB%20fun%C3%A9railles%20%C2%BB%20autour%20d'un%20cong%C3%A9n%C3%A8re%20mort%20%3F",
  "explanation": "Des études, notamment à l'université de Californie à Davis, ont montré que les geais et les corneilles se rassemblent et crient autour d'un congénère mort. Cette réaction leur permettrait d'apprendre où se trouve un danger. Elles évitent ensuite l'endroit et se méfient de la personne présente."
 },
 {
  "text": "Le poisson zèbre peut régénérer son cœur après qu'on en a retiré une partie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson zèbre peut régénérer son cœur après qu'on en a retiré une partie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson%20z%C3%A8bre%20peut%20r%C3%A9g%C3%A9n%C3%A9rer%20son%20c%C5%93ur%20apr%C3%A8s%20qu'on%20en%20a%20retir%C3%A9%20une%20partie%20%3F",
  "explanation": "Le poisson zèbre, petit poisson tropical, peut reconstruire jusqu'à environ 20 % de son ventricule en quelques semaines. Ses cellules cardiaques restantes se remettent à se diviser. Les chercheurs l'étudient pour comprendre pourquoi le cœur humain cicatrise au lieu de se régénérer."
 },
 {
  "text": "Les hippocampes mâles portent les bébés et accouchent.",
  "source": "Perplexity",
  "question": "Est-il vrai que les hippocampes mâles portent les bébés et accouchent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20hippocampes%20m%C3%A2les%20portent%20les%20b%C3%A9b%C3%A9s%20et%20accouchent%20%3F",
  "explanation": "Chez l'hippocampe, la femelle dépose ses œufs dans une poche ventrale du mâle. Le mâle les féconde, les nourrit et les oxygène pendant la gestation, puis les expulse par des contractions. Il peut naître de quelques dizaines à plus d'un millier de petits selon les espèces."
 },
 {
  "text": "Le bébé panda géant pèse environ 100 à 200 grammes à la naissance, soit environ 1/900e du poids de sa mère.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bébé panda géant pèse environ 100 à 200 grammes à la naissance, soit environ 1/900e du poids de sa mère ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20b%C3%A9b%C3%A9%20panda%20g%C3%A9ant%20p%C3%A8se%20environ%20100%20%C3%A0%20200%20grammes%20%C3%A0%20la%20naissance%2C%20soit%20environ%201%2F900e%20du%20poids%20de%20sa%20m%C3%A8re%20%3F",
  "explanation": "Le panda géant a l'un des rapports de taille mère-petit les plus extrêmes des mammifères placentaires. Le nouveau-né est rose, aveugle et presque nu. Il dépend totalement de sa mère pendant des semaines."
 },
 {
  "text": "Le chant de la baleine bleue peut dépasser 180 décibels, plus fort qu'un avion au décollage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chant de la baleine bleue peut dépasser 180 décibels, plus fort qu'un avion au décollage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chant%20de%20la%20baleine%20bleue%20peut%20d%C3%A9passer%20180%20d%C3%A9cibels%2C%20plus%20fort%20qu'un%20avion%20au%20d%C3%A9collage%20%3F",
  "explanation": "Les appels de la baleine bleue sont très graves, en partie inaudibles pour l'humain, et parmi les sons les plus puissants produits par un animal. Dans l'eau, ils peuvent porter sur des centaines de kilomètres. Les décibels sous l'eau ne se comparent pas directement à ceux dans l'air, mais leur puissance reste exceptionnelle."
 },
 {
  "text": "Les pics frappent les troncs jusqu'à environ 20 fois par seconde sans se faire de commotion cérébrale.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pics frappent les troncs jusqu'à environ 20 fois par seconde sans se faire de commotion cérébrale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pics%20frappent%20les%20troncs%20jusqu'%C3%A0%20environ%2020%20fois%20par%20seconde%20sans%20se%20faire%20de%20commotion%20c%C3%A9r%C3%A9brale%20%3F",
  "explanation": "Les pics frappent le bois jusqu'à environ 20 coups par seconde, avec des décélérations très élevées. Leur cerveau, petit et bien calé dans le crâne, est moins sensible aux chocs. Une étude de 2022 suggère que leur tête agit comme un marteau rigide plutôt que comme un amortisseur."
 },
 {
  "text": "Les flamants roses dorment souvent sur une seule patte.",
  "source": "Perplexity",
  "question": "Est-il vrai que les flamants roses dorment souvent sur une seule patte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20flamants%20roses%20dorment%20souvent%20sur%20une%20seule%20patte%20%3F",
  "explanation": "Une étude de 2017 a montré que les flamants peuvent tenir sur une patte sans effort musculaire, grâce à un mécanisme passif de leur articulation. Cette posture leur ferait aussi économiser de la chaleur dans l'eau froide. Elle est si stable qu'un flamant mort, correctement placé, tient dans cette position."
 },
 {
  "text": "Un escargot a des milliers de dents, alignées sur une langue en forme de râpe.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un escargot a des milliers de dents, alignées sur une langue en forme de râpe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20escargot%20a%20des%20milliers%20de%20dents%2C%20align%C3%A9es%20sur%20une%20langue%20en%20forme%20de%20r%C3%A2pe%20%3F",
  "explanation": "L'escargot possède une radula, une sorte de langue couverte de rangées de minuscules dents en chitine. Selon les espèces, il peut y en avoir plusieurs milliers, voire plus de 10 000. Les dents s'usent et sont remplacées en continu."
 },
 {
  "text": "Certaines tortues peuvent respirer par la peau et les muqueuses de leur gorge pendant l'hibernation sous l'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines tortues peuvent respirer par la peau et les muqueuses de leur gorge pendant l'hibernation sous l'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20tortues%20peuvent%20respirer%20par%20la%20peau%20et%20les%20muqueuses%20de%20leur%20gorge%20pendant%20l'hibernation%20sous%20l'eau%20%3F",
  "explanation": "Des tortues d'eau douce, comme la tortue peinte, passent l'hiver au fond des étangs gelés. Elles absorbent un peu d'oxygène à travers la peau et les muqueuses, et réduisent fortement leur métabolisme. Elles tolèrent aussi des mois avec très peu d'oxygène grâce à leur carapace qui neutralise l'acide accumulé."
 },
 {
  "text": "Le crabe de cocotier, le plus grand crustacé terrestre, peut ouvrir une noix de coco avec ses pinces.",
  "source": "Perplexity",
  "question": "Est-il vrai que le crabe de cocotier, le plus grand crustacé terrestre, peut ouvrir une noix de coco avec ses pinces ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20crabe%20de%20cocotier%2C%20le%20plus%20grand%20crustac%C3%A9%20terrestre%2C%20peut%20ouvrir%20une%20noix%20de%20coco%20avec%20ses%20pinces%20%3F",
  "explanation": "Le crabe de cocotier (Birgus latro) peut mesurer environ un mètre d'envergure. Sa pince est l'une des plus puissantes du monde animal, avec une force estimée à plus de 3 000 newtons. Il grimpe aux arbres et se nourrit de fruits, de noix de coco et de charognes."
 },
 {
  "text": "Les abeilles mellifères communiquent l'emplacement des fleurs par une danse.",
  "source": "Perplexity",
  "question": "Est-il vrai que les abeilles mellifères communiquent l'emplacement des fleurs par une danse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20abeilles%20mellif%C3%A8res%20communiquent%20l'emplacement%20des%20fleurs%20par%20une%20danse%20%3F",
  "explanation": "La « danse frétillante » indique la direction de la source de nourriture par rapport au soleil, et sa distance par la durée du frétillement. Le biologiste Karl von Frisch a décrypté ce langage, ce qui lui a valu le prix Nobel en 1973."
 },
 {
  "text": "Une seule abeille produit environ un douzième de cuillère à café de miel dans toute sa vie.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une seule abeille produit environ un douzième de cuillère à café de miel dans toute sa vie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20seule%20abeille%20produit%20environ%20un%20douzi%C3%A8me%20de%20cuill%C3%A8re%20%C3%A0%20caf%C3%A9%20de%20miel%20dans%20toute%20sa%20vie%20%3F",
  "explanation": "Une ouvrière vit quelques semaines en été. Pendant sa vie de butineuse, elle rapporte du nectar qui, une fois concentré, représente environ 0,8 gramme de miel. Un pot de 500 g est donc le travail de centaines d'abeilles."
 },
 {
  "text": "Les chats passent environ deux tiers de leur vie à dormir.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chats passent environ deux tiers de leur vie à dormir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chats%20passent%20environ%20deux%20tiers%20de%20leur%20vie%20%C3%A0%20dormir%20%3F",
  "explanation": "Un chat adulte dort en moyenne 12 à 16 heures par jour, souvent en courtes siestes. Cette habitude viendrait de son mode de vie de prédateur, qui alterne de courtes périodes de chasse intense avec de longues phases de repos pour économiser l'énergie."
 },
 {
  "text": "Les chiens ont environ 300 millions de récepteurs olfactifs, contre environ 6 millions chez l'humain.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chiens ont environ 300 millions de récepteurs olfactifs, contre environ 6 millions chez l'humain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chiens%20ont%20environ%20300%20millions%20de%20r%C3%A9cepteurs%20olfactifs%2C%20contre%20environ%206%20millions%20chez%20l'humain%20%3F",
  "explanation": "Le nez du chien est beaucoup plus développé que le nôtre, et la partie de son cerveau consacrée à l'odorat est proportionnellement bien plus grande. Les chiens peuvent détecter certaines substances à des concentrations extrêmement faibles, ce qui en fait des aides pour la détection d'explosifs, de drogues ou de maladies."
 },
 {
  "text": "Les chevaux ne peuvent pas vomir.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chevaux ne peuvent pas vomir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chevaux%20ne%20peuvent%20pas%20vomir%20%3F",
  "explanation": "Chez le cheval, un sphincter très puissant à l'entrée de l'estomac et l'angle de l'œsophage empêchent tout reflux. C'est pourquoi une indigestion ou une obstruction peut devenir grave : les coliques sont une urgence vétérinaire. Les rongeurs comme les rats ne peuvent pas vomir non plus."
 },
 {
  "text": "Le rat-kangourou des déserts d'Amérique du Nord peut vivre toute sa vie sans boire une goutte d'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le rat-kangourou des déserts d'Amérique du Nord peut vivre toute sa vie sans boire une goutte d'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20rat-kangourou%20des%20d%C3%A9serts%20d'Am%C3%A9rique%20du%20Nord%20peut%20vivre%20toute%20sa%20vie%20sans%20boire%20une%20goutte%20d'eau%20%3F",
  "explanation": "Ce petit rongeur tire toute l'eau dont il a besoin des graines qu'il mange, notamment de l'eau produite par la digestion de leurs graisses et de leurs sucres. Ses reins produisent une urine extrêmement concentrée et il perd très peu d'eau en respirant. Il passe les heures chaudes dans un terrier frais et humide."
 },
 {
  "text": "Certains serpents marins respirent en partie par la peau, ce qui les aide à rester longtemps sous l'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que certains serpents marins respirent en partie par la peau, ce qui les aide à rester longtemps sous l'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certains%20serpents%20marins%20respirent%20en%20partie%20par%20la%20peau%2C%20ce%20qui%20les%20aide%20%C3%A0%20rester%20longtemps%20sous%20l'eau%20%3F",
  "explanation": "Des études ont montré que certains serpents marins absorbent une partie de leur oxygène à travers la peau, et rejettent aussi du dioxyde de carbone par cette voie. Ils doivent tout de même remonter respirer à la surface avec leur unique poumon allongé. Cette respiration cutanée existe aussi chez de nombreux amphibiens."
 },
 {
  "text": "Les grenouilles avalent en s'aidant de leurs yeux : elles les enfoncent dans leur crâne pour pousser la nourriture vers la gorge.",
  "source": "Perplexity",
  "question": "Est-il vrai que les grenouilles avalent en s'aidant de leurs yeux : elles les enfoncent dans leur crâne pour pousser la nourriture vers la gorge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20grenouilles%20avalent%20en%20s'aidant%20de%20leurs%20yeux%20%3A%20elles%20les%20enfoncent%20dans%20leur%20cr%C3%A2ne%20pour%20pousser%20la%20nourriture%20vers%20la%20gorge%20%3F",
  "explanation": "En avalant, la grenouille rentre ses globes oculaires dans sa bouche. Une étude a montré que ce mouvement aide à pousser la proie vers l'œsophage. C'est pourquoi on voit une grenouille cligner fortement des yeux en mangeant."
 },
 {
  "text": "Les autruches ne cachent pas leur tête dans le sable.",
  "source": "Perplexity",
  "question": "Est-il vrai que les autruches ne cachent pas leur tête dans le sable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20autruches%20ne%20cachent%20pas%20leur%20t%C3%AAte%20dans%20le%20sable%20%3F",
  "explanation": "Ce mythe viendrait de l'Antiquité, notamment de Pline l'Ancien. En réalité, l'autruche baisse la tête au sol pour retourner ses œufs dans son nid, creusé dans le sable. Face au danger, elle fuit en courant jusqu'à environ 70 km/h ou se couche à plat."
 },
 {
  "text": "Le koala dort jusqu'à 18 à 22 heures par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que le koala dort jusqu'à 18 à 22 heures par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20koala%20dort%20jusqu'%C3%A0%2018%20%C3%A0%2022%20heures%20par%20jour%20%3F",
  "explanation": "Les feuilles d'eucalyptus sont pauvres en énergie et contiennent des composés toxiques. Le koala économise son énergie en dormant ou en restant immobile la majeure partie de la journée. Sa digestion est longue et demande beaucoup d'énergie."
 },
 {
  "text": "Les chauves-souris sont les seuls mammifères capables d'un véritable vol battu.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chauves-souris sont les seuls mammifères capables d'un véritable vol battu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chauves-souris%20sont%20les%20seuls%20mammif%C3%A8res%20capables%20d'un%20v%C3%A9ritable%20vol%20battu%20%3F",
  "explanation": "D'autres mammifères, comme les écureuils volants, planent grâce à une membrane, mais seules les chauves-souris volent en battant des ailes. Leurs ailes sont des mains modifiées, avec des doigts très allongés reliés par une membrane de peau. Elles représentent environ un cinquième des espèces de mammifères."
 },
 {
  "text": "Certaines chenilles se font passer pour des fientes d'oiseau pour ne pas être mangées.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines chenilles se font passer pour des fientes d'oiseau pour ne pas être mangées ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20chenilles%20se%20font%20passer%20pour%20des%20fientes%20d'oiseau%20pour%20ne%20pas%20%C3%AAtre%20mang%C3%A9es%20%3F",
  "explanation": "Les jeunes chenilles de plusieurs espèces, comme le grand porte-queue, sont noires et blanches et luisantes, et ressemblent à des déjections d'oiseau. Les prédateurs les ignorent. C'est une forme de mimétisme appelée masquerade."
 },
 {
  "text": "Le pigeon voyageur peut retrouver son pigeonnier à plus de 1 000 km de distance.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pigeon voyageur peut retrouver son pigeonnier à plus de 1 000 km de distance ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pigeon%20voyageur%20peut%20retrouver%20son%20pigeonnier%20%C3%A0%20plus%20de%201%20000%20km%20de%20distance%20%3F",
  "explanation": "Les pigeons voyageurs s'orientent grâce à plusieurs indices : la position du soleil, le champ magnétique terrestre, les odeurs, les repères visuels et peut-être les infrasons. Ils ont été utilisés pour transporter des messages pendant les guerres mondiales, et certains ont été décorés."
 },
 {
  "text": "Les termites construisent des monticules qui se ventilent seuls, une source d'inspiration pour l'architecture.",
  "source": "Perplexity",
  "question": "Est-il vrai que les termites construisent des monticules qui se ventilent seuls, une source d'inspiration pour l'architecture ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20termites%20construisent%20des%20monticules%20qui%20se%20ventilent%20seuls%2C%20une%20source%20d'inspiration%20pour%20l'architecture%20%3F",
  "explanation": "Les termitières de certaines espèces africaines contiennent un réseau de conduits qui régulent la température et le renouvellement de l'air, grâce aux différences de température entre le jour et la nuit. L'immeuble Eastgate à Harare, au Zimbabwe, s'en est inspiré pour se ventiler avec très peu de climatisation."
 },
 {
  "text": "Le dauphin dort avec une moitié du cerveau à la fois.",
  "source": "Perplexity",
  "question": "Est-il vrai que le dauphin dort avec une moitié du cerveau à la fois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20dauphin%20dort%20avec%20une%20moiti%C3%A9%20du%20cerveau%20%C3%A0%20la%20fois%20%3F",
  "explanation": "Les dauphins pratiquent le sommeil unihémisphérique : un hémisphère dort pendant que l'autre reste éveillé. Cela leur permet de continuer à remonter respirer et à surveiller leur environnement. L'œil opposé à l'hémisphère éveillé reste souvent ouvert."
 },
 {
  "text": "Le poulpe peut goûter avec ses ventouses.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poulpe peut goûter avec ses ventouses ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poulpe%20peut%20go%C3%BBter%20avec%20ses%20ventouses%20%3F",
  "explanation": "Les ventouses des bras du poulpe contiennent des milliers de récepteurs chimiques. En 2020, des chercheurs ont identifié des récepteurs qui lui permettent de « goûter » ce qu'il touche. Il peut ainsi explorer les crevasses et reconnaître une proie sans la voir."
 },
 {
  "text": "Le pelage de l'ours polaire n'est pas blanc : ses poils sont transparents et sa peau est noire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pelage de l'ours polaire n'est pas blanc : ses poils sont transparents et sa peau est noire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pelage%20de%20l'ours%20polaire%20n'est%20pas%20blanc%20%3A%20ses%20poils%20sont%20transparents%20et%20sa%20peau%20est%20noire%20%3F",
  "explanation": "Les poils de l'ours polaire sont creux et sans pigment. Ils diffusent la lumière, ce qui leur donne une apparence blanche. Sous le pelage, sa peau noire absorbe la chaleur du soleil."
 },
 {
  "text": "Les zèbres ont chacun un motif de rayures unique, comme une empreinte digitale.",
  "source": "Perplexity",
  "question": "Est-il vrai que les zèbres ont chacun un motif de rayures unique, comme une empreinte digitale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20z%C3%A8bres%20ont%20chacun%20un%20motif%20de%20rayures%20unique%2C%20comme%20une%20empreinte%20digitale%20%3F",
  "explanation": "Aucun zèbre n'a exactement les mêmes rayures qu'un autre. Les chercheurs les identifient sur photo grâce à ces motifs. L'utilité des rayures est débattue : la piste la plus solide est qu'elles perturbent l'atterrissage des mouches piqueuses."
 },
 {
  "text": "Les fourmis ne dorment pas comme nous, mais font des centaines de micro-siestes d'environ une minute par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis ne dorment pas comme nous, mais font des centaines de micro-siestes d'environ une minute par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20ne%20dorment%20pas%20comme%20nous%2C%20mais%20font%20des%20centaines%20de%20micro-siestes%20d'environ%20une%20minute%20par%20jour%20%3F",
  "explanation": "Une étude sur les ouvrières de fourmis de feu a montré qu'elles font environ 250 siestes par jour, d'une minute chacune environ. Les reines dorment davantage et plus longtemps. Ce mode de repos fragmenté permet à la colonie de rester active en permanence."
 },
 {
  "text": "Le cerf-volant n'est pas qu'un jouet : c'est aussi le nom du plus grand coléoptère d'Europe, le lucane cerf-volant.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerf-volant n'est pas qu'un jouet : c'est aussi le nom du plus grand coléoptère d'Europe, le lucane cerf-volant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerf-volant%20n'est%20pas%20qu'un%20jouet%20%3A%20c'est%20aussi%20le%20nom%20du%20plus%20grand%20col%C3%A9opt%C3%A8re%20d'Europe%2C%20le%20lucane%20cerf-volant%20%3F",
  "explanation": "Le lucane cerf-volant (Lucanus cervus) peut dépasser 8 cm. Les mâles ont des mandibules en forme de bois de cerf, qu'ils utilisent pour se battre. Ses larves vivent plusieurs années dans le bois mort, et l'adulte ne vit que quelques semaines."
 },
 {
  "text": "Les axolotls restent toute leur vie au stade larvaire, avec leurs branchies extérieures.",
  "source": "Perplexity",
  "question": "Est-il vrai que les axolotls restent toute leur vie au stade larvaire, avec leurs branchies extérieures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20axolotls%20restent%20toute%20leur%20vie%20au%20stade%20larvaire%2C%20avec%20leurs%20branchies%20ext%C3%A9rieures%20%3F",
  "explanation": "L'axolotl est un exemple de néoténie : il atteint la maturité sexuelle sans se métamorphoser en adulte terrestre. Avec une injection d'hormone thyroïdienne en laboratoire, il peut se métamorphoser en salamandre terrestre, mais cela réduit généralement sa durée de vie."
 },
 {
  "text": "Le caméléon ne change pas de couleur pour se camoufler, mais surtout pour communiquer et réguler sa température.",
  "source": "Perplexity",
  "question": "Est-il vrai que le caméléon ne change pas de couleur pour se camoufler, mais surtout pour communiquer et réguler sa température ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cam%C3%A9l%C3%A9on%20ne%20change%20pas%20de%20couleur%20pour%20se%20camoufler%2C%20mais%20surtout%20pour%20communiquer%20et%20r%C3%A9guler%20sa%20temp%C3%A9rature%20%3F",
  "explanation": "La peau du caméléon contient des cristaux de guanine dont l'espacement change, ce qui modifie la lumière réfléchie. Ces changements servent principalement à signaler son humeur, à attirer un partenaire ou à intimider un rival, et à absorber ou réfléchir la chaleur."
 },
 {
  "text": "Les pingouins et les manchots ne sont pas les mêmes animaux : les manchots ne volent pas, les pingouins si.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pingouins et les manchots ne sont pas les mêmes animaux : les manchots ne volent pas, les pingouins si ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pingouins%20et%20les%20manchots%20ne%20sont%20pas%20les%20m%C3%AAmes%20animaux%20%3A%20les%20manchots%20ne%20volent%20pas%2C%20les%20pingouins%20si%20%3F",
  "explanation": "En français, le manchot vit dans l'hémisphère Sud et ne vole pas. Le pingouin (le petit pingouin, ou pingouin torda) vit dans l'Atlantique Nord et peut voler. La confusion vient de l'anglais, où « penguin » désigne les manchots."
 },
 {
  "text": "Les loutres de mer ont une poche de peau sous chaque patte avant, où elles rangent nourriture et cailloux.",
  "source": "Perplexity",
  "question": "Est-il vrai que les loutres de mer ont une poche de peau sous chaque patte avant, où elles rangent nourriture et cailloux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20loutres%20de%20mer%20ont%20une%20poche%20de%20peau%20sous%20chaque%20patte%20avant%2C%20o%C3%B9%20elles%20rangent%20nourriture%20et%20cailloux%20%3F",
  "explanation": "La loutre de mer possède sous ses aisselles des replis de peau lâche qui servent de poches. Elle y stocke les proies ramassées au fond de l'eau, ainsi qu'un caillou qu'elle utilise pour casser les coquillages en flottant sur le dos. Certaines gardent le même caillou longtemps."
 },
 {
  "text": "La vipère n'injecte pas toujours du venin : certaines morsures sont « sèches ».",
  "source": "Perplexity",
  "question": "Est-il vrai que la vipère n'injecte pas toujours du venin : certaines morsures sont « sèches » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20vip%C3%A8re%20n'injecte%20pas%20toujours%20du%20venin%20%3A%20certaines%20morsures%20sont%20%C2%AB%20s%C3%A8ches%20%C2%BB%20%3F",
  "explanation": "Les serpents venimeux contrôlent en partie la quantité de venin injectée. Une proportion notable des morsures défensives sont sans venin ou presque. Cela ne permet pas de prendre une morsure à la légère : il faut toujours consulter."
 },
 {
  "text": "Le gecko peut marcher au plafond grâce à des millions de poils microscopiques sous ses pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le gecko peut marcher au plafond grâce à des millions de poils microscopiques sous ses pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20gecko%20peut%20marcher%20au%20plafond%20gr%C3%A2ce%20%C3%A0%20des%20millions%20de%20poils%20microscopiques%20sous%20ses%20pattes%20%3F",
  "explanation": "Les pattes du gecko sont couvertes de lamelles portant des millions de poils, les sétules, qui se divisent en extrémités encore plus fines. Ces structures créent des forces de van der Waals avec la surface, sans colle ni ventouse. Ce mécanisme inspire des adhésifs réutilisables."
 },
 {
  "text": "Les méduses existent depuis plus de 500 millions d'années, bien avant les dinosaures.",
  "source": "Perplexity",
  "question": "Est-il vrai que les méduses existent depuis plus de 500 millions d'années, bien avant les dinosaures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20m%C3%A9duses%20existent%20depuis%20plus%20de%20500%20millions%20d'ann%C3%A9es%2C%20bien%20avant%20les%20dinosaures%20%3F",
  "explanation": "Des fossiles de méduses datés d'environ 500 millions d'années ont été retrouvés, et leur lignée serait encore plus ancienne. Elles n'ont ni cerveau, ni cœur, ni os, et sont composées à environ 95 % d'eau."
 },
 {
  "text": "Le cachalot a le plus gros cerveau du règne animal, environ 8 kg.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cachalot a le plus gros cerveau du règne animal, environ 8 kg ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cachalot%20a%20le%20plus%20gros%20cerveau%20du%20r%C3%A8gne%20animal%2C%20environ%208%20kg%20%3F",
  "explanation": "Le cerveau du cachalot pèse environ 7 à 9 kg, cinq à six fois plus que celui d'un humain. Rapporté à la taille du corps, il reste cependant bien plus petit en proportion. Le cachalot plonge à plus de 1 000 mètres pour chasser des calmars."
 },
 {
  "text": "Un chien peut sentir certaines maladies, comme certains cancers ou une hypoglycémie, grâce à l'odeur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un chien peut sentir certaines maladies, comme certains cancers ou une hypoglycémie, grâce à l'odeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20chien%20peut%20sentir%20certaines%20maladies%2C%20comme%20certains%20cancers%20ou%20une%20hypoglyc%C3%A9mie%2C%20gr%C3%A2ce%20%C3%A0%20l'odeur%20%3F",
  "explanation": "Des études ont montré que des chiens entraînés peuvent identifier des échantillons d'haleine ou d'urine de patients atteints de certains cancers, ou détecter les variations de glycémie chez des personnes diabétiques. Leurs performances varient selon les études et les protocoles."
 },
 {
  "text": "L'estomac renouvelle sa paroi interne en quelques jours pour ne pas se digérer lui-même.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'estomac renouvelle sa paroi interne en quelques jours pour ne pas se digérer lui-même ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'estomac%20renouvelle%20sa%20paroi%20interne%20en%20quelques%20jours%20pour%20ne%20pas%20se%20dig%C3%A9rer%20lui-m%C3%AAme%20%3F",
  "explanation": "L'acide de l'estomac est assez fort pour attaquer les tissus. Une couche de mucus protège la paroi, et les cellules de surface sont remplacées en continu, en quelques jours. Quand cette protection est altérée, par exemple par la bactérie Helicobacter pylori ou certains médicaments, un ulcère peut se former."
 },
 {
  "text": "Un adulte possède environ 206 os, mais un nouveau-né en a environ 300.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un adulte possède environ 206 os, mais un nouveau-né en a environ 300 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20adulte%20poss%C3%A8de%20environ%20206%20os%2C%20mais%20un%20nouveau-n%C3%A9%20en%20a%20environ%20300%20%3F",
  "explanation": "À la naissance, de nombreux os sont encore en plusieurs morceaux reliés par du cartilage, comme ceux du crâne ou du bassin. En grandissant, ces pièces fusionnent progressivement. Le nombre exact varie légèrement d'une personne à l'autre."
 },
 {
  "text": "Le corps humain produit chaque seconde environ 2 à 3 millions de globules rouges.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain produit chaque seconde environ 2 à 3 millions de globules rouges ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20produit%20chaque%20seconde%20environ%202%20%C3%A0%203%20millions%20de%20globules%20rouges%20%3F",
  "explanation": "Les globules rouges vivent environ 120 jours et doivent être remplacés en permanence. La moelle osseuse en produit des millions chaque seconde. Ce rythme augmente en altitude ou après une perte de sang, sous l'effet d'une hormone, l'érythropoïétine (EPO)."
 },
 {
  "text": "Si l'on mettait bout à bout tous les vaisseaux sanguins d'un adulte, ils feraient environ 100 000 km, soit plus de deux fois le tour de la Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai que si l'on mettait bout à bout tous les vaisseaux sanguins d'un adulte, ils feraient environ 100 000 km, soit plus de deux fois le tour de la Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20l'on%20mettait%20bout%20%C3%A0%20bout%20tous%20les%20vaisseaux%20sanguins%20d'un%20adulte%2C%20ils%20feraient%20environ%20100%20000%20km%2C%20soit%20plus%20de%20deux%20fois%20le%20tour%20de%20la%20Terre%20%3F",
  "explanation": "Le réseau sanguin comprend artères, veines et surtout d'innombrables capillaires microscopiques. L'estimation de 100 000 km est souvent citée, même si certains calculs récents donnent des chiffres plus bas. L'ordre de grandeur reste vertigineux."
 },
 {
  "text": "Le cerveau représente environ 2 % du poids du corps, mais consomme environ 20 % de son énergie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau représente environ 2 % du poids du corps, mais consomme environ 20 % de son énergie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20repr%C3%A9sente%20environ%202%20%25%20du%20poids%20du%20corps%2C%20mais%20consomme%20environ%2020%20%25%20de%20son%20%C3%A9nergie%20%3F",
  "explanation": "Le cerveau a besoin d'une alimentation constante en glucose et en oxygène pour faire fonctionner ses quelque 86 milliards de neurones. Même au repos, il consomme environ un cinquième de l'énergie de l'organisme. C'est l'un des organes les plus coûteux à entretenir."
 },
 {
  "text": "Nous perdons environ 30 000 à 40 000 cellules de peau par minute.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous perdons environ 30 000 à 40 000 cellules de peau par minute ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20perdons%20environ%2030%20000%20%C3%A0%2040%20000%20cellules%20de%20peau%20par%20minute%20%3F",
  "explanation": "La couche externe de la peau se renouvelle en continu : les cellules mortes se détachent et sont remplacées par d'autres, venues des couches profondes. Une bonne partie de la poussière d'une maison provient de ces cellules. La peau se renouvelle complètement en environ un mois."
 },
 {
  "text": "Les empreintes digitales se forment dans l'utérus, vers le troisième mois de grossesse, et ne changent plus ensuite.",
  "source": "Perplexity",
  "question": "Est-il vrai que les empreintes digitales se forment dans l'utérus, vers le troisième mois de grossesse, et ne changent plus ensuite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20empreintes%20digitales%20se%20forment%20dans%20l'ut%C3%A9rus%2C%20vers%20le%20troisi%C3%A8me%20mois%20de%20grossesse%2C%20et%20ne%20changent%20plus%20ensuite%20%3F",
  "explanation": "Les crêtes des empreintes se forment pendant le développement du fœtus, sous l'effet de la croissance de la peau et de la pression du liquide amniotique. Même les vrais jumeaux, qui ont le même ADN, ont des empreintes différentes. Elles restent identiques toute la vie, sauf cicatrices."
 },
 {
  "text": "Le muscle le plus puissant du corps, par rapport à sa taille, est le masséter, celui de la mâchoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le muscle le plus puissant du corps, par rapport à sa taille, est le masséter, celui de la mâchoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20muscle%20le%20plus%20puissant%20du%20corps%2C%20par%20rapport%20%C3%A0%20sa%20taille%2C%20est%20le%20mass%C3%A9ter%2C%20celui%20de%20la%20m%C3%A2choire%20%3F",
  "explanation": "Le masséter permet de fermer la mâchoire avec une force importante, mesurée jusqu'à environ 70 kg au niveau des molaires chez certaines personnes. La notion de « muscle le plus puissant » dépend de la définition : le plus gros est le grand fessier, et le cœur est le plus endurant."
 },
 {
  "text": "Les yeux voient à l'envers : c'est le cerveau qui redresse l'image.",
  "source": "Perplexity",
  "question": "Est-il vrai que les yeux voient à l'envers : c'est le cerveau qui redresse l'image ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20yeux%20voient%20%C3%A0%20l'envers%20%3A%20c'est%20le%20cerveau%20qui%20redresse%20l'image%20%3F",
  "explanation": "Le cristallin projette sur la rétine une image inversée. Le cerveau interprète automatiquement ces signaux pour nous donner une vision à l'endroit. Dans les années 1890, le psychologue George Stratton a porté des lunettes qui inversaient sa vision : après quelques jours, son cerveau s'y était adapté."
 },
 {
  "text": "Le cœur humain bat environ 100 000 fois par jour, soit environ 3 milliards de fois au cours d'une vie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cœur humain bat environ 100 000 fois par jour, soit environ 3 milliards de fois au cours d'une vie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20c%C5%93ur%20humain%20bat%20environ%20100%20000%20fois%20par%20jour%2C%20soit%20environ%203%20milliards%20de%20fois%20au%20cours%20d'une%20vie%20%3F",
  "explanation": "Au repos, le cœur bat en moyenne 60 à 80 fois par minute. Sur 24 heures, cela représente environ 100 000 battements, et il pompe environ 7 000 litres de sang. Sur une vie de 80 ans, on dépasse les 3 milliards de battements."
 },
 {
  "text": "Il est impossible d'éternuer les yeux ouverts pour la plupart des gens, car le réflexe ferme les paupières.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il est impossible d'éternuer les yeux ouverts pour la plupart des gens, car le réflexe ferme les paupières ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20est%20impossible%20d'%C3%A9ternuer%20les%20yeux%20ouverts%20pour%20la%20plupart%20des%20gens%2C%20car%20le%20r%C3%A9flexe%20ferme%20les%20paupi%C3%A8res%20%3F",
  "explanation": "L'éternuement déclenche une série de réflexes, dont la fermeture des paupières. Ce n'est pas pour empêcher les yeux de sortir de leurs orbites, contrairement à une légende. Certaines personnes parviennent à garder les yeux ouverts, mais c'est rare."
 },
 {
  "text": "Le foie est capable de se régénérer : une partie du foie greffée peut retrouver presque sa taille normale en quelques semaines.",
  "source": "Perplexity",
  "question": "Est-il vrai que le foie est capable de se régénérer : une partie du foie greffée peut retrouver presque sa taille normale en quelques semaines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20foie%20est%20capable%20de%20se%20r%C3%A9g%C3%A9n%C3%A9rer%20%3A%20une%20partie%20du%20foie%20greff%C3%A9e%20peut%20retrouver%20presque%20sa%20taille%20normale%20en%20quelques%20semaines%20%3F",
  "explanation": "Le foie a une capacité de régénération exceptionnelle. Après l'ablation d'une partie de l'organe, les cellules restantes se divisent jusqu'à retrouver un volume proche de l'original. C'est ce qui permet de greffer un morceau de foie d'un donneur vivant."
 },
 {
  "text": "L'odorat humain peut distinguer bien plus d'odeurs qu'on ne le pensait, possiblement des milliards selon une étude.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'odorat humain peut distinguer bien plus d'odeurs qu'on ne le pensait, possiblement des milliards selon une étude ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'odorat%20humain%20peut%20distinguer%20bien%20plus%20d'odeurs%20qu'on%20ne%20le%20pensait%2C%20possiblement%20des%20milliards%20selon%20une%20%C3%A9tude%20%3F",
  "explanation": "Une étude publiée dans Science en 2014 a estimé que nous pourrions distinguer plus de mille milliards de mélanges d'odeurs. Le chiffre a été contesté pour des raisons méthodologiques, mais il a remis en cause l'idée que l'odorat humain est médiocre."
 },
 {
  "text": "Le bâillement est contagieux même entre humains et chiens.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bâillement est contagieux même entre humains et chiens ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20b%C3%A2illement%20est%20contagieux%20m%C3%AAme%20entre%20humains%20et%20chiens%20%3F",
  "explanation": "Des études ont montré que les chiens bâillent plus souvent en voyant un humain bâiller, surtout leur propriétaire. Chez l'humain, la contagion du bâillement serait liée à l'empathie. Le simple fait de lire ou de penser au bâillement peut aussi en déclencher un."
 },
 {
  "text": "Le corps humain contient assez de fer pour fabriquer un petit clou d'environ 7 cm.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain contient assez de fer pour fabriquer un petit clou d'environ 7 cm ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20contient%20assez%20de%20fer%20pour%20fabriquer%20un%20petit%20clou%20d'environ%207%20cm%20%3F",
  "explanation": "Un adulte possède environ 3 à 4 grammes de fer, principalement dans l'hémoglobine des globules rouges. C'est à peu près la quantité de fer d'un petit clou. Le fer permet le transport de l'oxygène dans le sang."
 },
 {
  "text": "L'intestin grêle d'un adulte mesure environ 6 à 7 mètres de long.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'intestin grêle d'un adulte mesure environ 6 à 7 mètres de long ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'intestin%20gr%C3%AAle%20d'un%20adulte%20mesure%20environ%206%20%C3%A0%207%20m%C3%A8tres%20de%20long%20%3F",
  "explanation": "L'intestin grêle est plié dans l'abdomen. Sa surface interne est couverte de replis et de villosités qui augmentent énormément la surface d'absorption des nutriments, estimée à environ 30 m² selon les études récentes."
 },
 {
  "text": "Le cerveau ne ressent pas la douleur, ce qui permet d'opérer certains patients éveillés.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau ne ressent pas la douleur, ce qui permet d'opérer certains patients éveillés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20ne%20ressent%20pas%20la%20douleur%2C%20ce%20qui%20permet%20d'op%C3%A9rer%20certains%20patients%20%C3%A9veill%C3%A9s%20%3F",
  "explanation": "Le tissu cérébral n'a pas de récepteurs de la douleur. Les maux de tête viennent des méninges, des vaisseaux sanguins ou des muscles. Lors d'une chirurgie éveillée, le cuir chevelu est anesthésié et le patient peut parler pendant que les chirurgiens vérifient les fonctions préservées."
 },
 {
  "text": "Nous sommes environ 1 cm plus grands le matin que le soir.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous sommes environ 1 cm plus grands le matin que le soir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20sommes%20environ%201%20cm%20plus%20grands%20le%20matin%20que%20le%20soir%20%3F",
  "explanation": "Pendant la journée, la gravité comprime les disques entre les vertèbres, qui perdent un peu de liquide. Allongés pendant la nuit, ils se réhydratent et la colonne s'allonge. La différence est d'environ 1 cm, parfois plus."
 },
 {
  "text": "Les cheveux poussent d'environ 1 cm par mois.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cheveux poussent d'environ 1 cm par mois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cheveux%20poussent%20d'environ%201%20cm%20par%20mois%20%3F",
  "explanation": "Un cheveu pousse en moyenne de 0,3 à 0,4 mm par jour. Chaque follicule suit un cycle de croissance de plusieurs années, puis de repos, avant que le cheveu tombe. Nous en perdons naturellement 50 à 100 par jour."
 },
 {
  "text": "L'appendice n'est pas forcément inutile : il servirait de réserve de bonnes bactéries pour l'intestin.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'appendice n'est pas forcément inutile : il servirait de réserve de bonnes bactéries pour l'intestin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'appendice%20n'est%20pas%20forc%C3%A9ment%20inutile%20%3A%20il%20servirait%20de%20r%C3%A9serve%20de%20bonnes%20bact%C3%A9ries%20pour%20l'intestin%20%3F",
  "explanation": "L'appendice a longtemps été considéré comme un vestige de l'évolution. Des chercheurs suggèrent qu'il abrite un biofilm de bactéries utiles, qui pourrait aider à recoloniser l'intestin après une diarrhée sévère. Il contient aussi du tissu lymphoïde lié à l'immunité."
 },
 {
  "text": "Le corps humain produit environ 1 à 1,5 litre de salive par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain produit environ 1 à 1,5 litre de salive par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20produit%20environ%201%20%C3%A0%201%2C5%20litre%20de%20salive%20par%20jour%20%3F",
  "explanation": "La salive humidifie la bouche, commence la digestion des amidons grâce à une enzyme, l'amylase, et protège les dents. Sa production diminue fortement pendant le sommeil, d'où la bouche sèche au réveil."
 },
 {
  "text": "Les ongles des mains poussent environ deux à trois fois plus vite que ceux des pieds.",
  "source": "Perplexity",
  "question": "Est-il vrai que les ongles des mains poussent environ deux à trois fois plus vite que ceux des pieds ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20ongles%20des%20mains%20poussent%20environ%20deux%20%C3%A0%20trois%20fois%20plus%20vite%20que%20ceux%20des%20pieds%20%3F",
  "explanation": "Un ongle de main pousse d'environ 3 mm par mois, contre environ 1 mm pour ceux des pieds. La croissance est plus rapide chez les jeunes, en été, et sur la main dominante. Un ongle de main met environ 6 mois à se renouveler entièrement."
 },
 {
  "text": "Le cœur continue de battre en dehors du corps tant qu'il reçoit de l'oxygène, car il génère sa propre impulsion électrique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cœur continue de battre en dehors du corps tant qu'il reçoit de l'oxygène, car il génère sa propre impulsion électrique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20c%C5%93ur%20continue%20de%20battre%20en%20dehors%20du%20corps%20tant%20qu'il%20re%C3%A7oit%20de%20l'oxyg%C3%A8ne%2C%20car%20il%20g%C3%A9n%C3%A8re%20sa%20propre%20impulsion%20%C3%A9lectrique%20%3F",
  "explanation": "Le cœur possède son propre stimulateur naturel, le nœud sinusal, qui déclenche les battements sans commande du cerveau. C'est ce qui permet de maintenir un cœur battant dans une machine de perfusion avant une greffe."
 },
 {
  "text": "L'humain est l'un des seuls primates dont le blanc de l'œil est bien visible.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'humain est l'un des seuls primates dont le blanc de l'œil est bien visible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'humain%20est%20l'un%20des%20seuls%20primates%20dont%20le%20blanc%20de%20l'%C5%93il%20est%20bien%20visible%20%3F",
  "explanation": "Chez la plupart des autres primates, la sclère (le blanc de l'œil) est plus sombre ou peu visible. Selon l'hypothèse de « l'œil coopératif », un blanc bien contrasté permettrait de suivre facilement la direction du regard des autres, ce qui faciliterait la communication. Des études récentes nuancent : certains chimpanzés et bonobos ont aussi des sclères claires."
 },
 {
  "text": "Le goût des aliments vient en grande partie de l'odorat.",
  "source": "Perplexity",
  "question": "Est-il vrai que le goût des aliments vient en grande partie de l'odorat ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20go%C3%BBt%20des%20aliments%20vient%20en%20grande%20partie%20de%20l'odorat%20%3F",
  "explanation": "La langue ne perçoit que quelques saveurs : sucré, salé, acide, amer et umami. Les arômes, perçus par le nez via l'arrière de la bouche, font l'essentiel de ce que nous appelons le goût. C'est pourquoi la nourriture semble fade quand on a le nez bouché."
 },
 {
  "text": "Le squelette se renouvelle entièrement en une dizaine d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai que le squelette se renouvelle entièrement en une dizaine d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20squelette%20se%20renouvelle%20enti%C3%A8rement%20en%20une%20dizaine%20d'ann%C3%A9es%20%3F",
  "explanation": "L'os est un tissu vivant : des cellules le détruisent (ostéoclastes) pendant que d'autres en reconstruisent (ostéoblastes). Ce remodelage remplace environ 10 % du squelette adulte chaque année. C'est ce qui permet aux fractures de se consolider et aux os de s'adapter aux efforts."
 },
 {
  "text": "Les poumons ont une surface d'échange d'environ 70 m², à peu près celle d'un demi-terrain de tennis.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poumons ont une surface d'échange d'environ 70 m², à peu près celle d'un demi-terrain de tennis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poumons%20ont%20une%20surface%20d'%C3%A9change%20d'environ%2070%20m%C2%B2%2C%20%C3%A0%20peu%20pr%C3%A8s%20celle%20d'un%20demi-terrain%20de%20tennis%20%3F",
  "explanation": "Les poumons contiennent environ 300 à 500 millions d'alvéoles, de minuscules sacs où l'oxygène passe dans le sang. Leur surface totale est estimée entre 50 et 100 m². Cette grande surface rend les échanges gazeux très efficaces."
 },
 {
  "text": "On ne peut pas se souvenir de ses premières années : c'est l'amnésie infantile.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on ne peut pas se souvenir de ses premières années : c'est l'amnésie infantile ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20ne%20peut%20pas%20se%20souvenir%20de%20ses%20premi%C3%A8res%20ann%C3%A9es%20%3A%20c'est%20l'amn%C3%A9sie%20infantile%20%3F",
  "explanation": "La plupart des adultes n'ont aucun souvenir avant l'âge d'environ 3 ans. Les raisons restent débattues : immaturité de l'hippocampe, absence de langage pour encoder les souvenirs, ou renouvellement rapide des neurones. Certains « souvenirs » précoces sont en fait reconstruits à partir de photos ou de récits."
 },
 {
  "text": "La plupart des adultes hébergent des acariens microscopiques, les Demodex, à la base de leurs cils.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plupart des adultes hébergent des acariens microscopiques, les Demodex, à la base de leurs cils ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plupart%20des%20adultes%20h%C3%A9bergent%20des%20acariens%20microscopiques%2C%20les%20Demodex%2C%20%C3%A0%20la%20base%20de%20leurs%20cils%20%3F",
  "explanation": "Ces acariens d'environ 0,3 mm vivent dans les follicules des cils et des poils du visage, où ils se nourrissent de sébum. Ils sont présents chez une grande majorité d'adultes, en général sans aucun symptôme. Ils sont surtout actifs la nuit, et leur prolifération excessive peut favoriser certaines inflammations des paupières."
 },
 {
  "text": "Les humains partagent environ 60 % de leurs gènes avec la banane… mais la comparaison est trompeuse.",
  "source": "Perplexity",
  "question": "Est-il vrai que les humains partagent environ 60 % de leurs gènes avec la banane… mais la comparaison est trompeuse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20humains%20partagent%20environ%2060%20%25%20de%20leurs%20g%C3%A8nes%20avec%20la%20banane%E2%80%A6%20mais%20la%20comparaison%20est%20trompeuse%20%3F",
  "explanation": "Le chiffre circule souvent : il signifie qu'environ 60 % des gènes humains ont un équivalent chez la banane, car toutes les cellules vivantes partagent des mécanismes de base. Cela ne veut pas dire que notre ADN est identique à 60 % à celui de la banane. La comparaison exacte est bien plus faible."
 },
 {
  "text": "La peau est le plus grand organe du corps humain : environ 2 m² chez un adulte.",
  "source": "Perplexity",
  "question": "Est-il vrai que la peau est le plus grand organe du corps humain : environ 2 m² chez un adulte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20peau%20est%20le%20plus%20grand%20organe%20du%20corps%20humain%20%3A%20environ%202%20m%C2%B2%20chez%20un%20adulte%20%3F",
  "explanation": "Chez un adulte, la peau couvre entre 1,5 et 2 m² et pèse plusieurs kilos. Elle protège contre les microbes, régule la température et contient des récepteurs du toucher, de la chaleur et de la douleur."
 },
 {
  "text": "Les larmes ne sont pas toutes identiques : les larmes d'émotion n'ont pas la même composition que celles provoquées par l'oignon.",
  "source": "Perplexity",
  "question": "Est-il vrai que les larmes ne sont pas toutes identiques : les larmes d'émotion n'ont pas la même composition que celles provoquées par l'oignon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20larmes%20ne%20sont%20pas%20toutes%20identiques%20%3A%20les%20larmes%20d'%C3%A9motion%20n'ont%20pas%20la%20m%C3%AAme%20composition%20que%20celles%20provoqu%C3%A9es%20par%20l'oignon%20%3F",
  "explanation": "On distingue les larmes basales, qui humidifient l'œil en continu, les larmes réflexes, déclenchées par un irritant, et les larmes émotionnelles. Des études suggèrent que leur composition en protéines diffère. Le rôle exact des larmes émotionnelles reste étudié."
 },
 {
  "text": "La rotule n'existe pas encore vraiment chez le nouveau-né : elle est en cartilage et s'ossifie entre 3 et 6 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la rotule n'existe pas encore vraiment chez le nouveau-né : elle est en cartilage et s'ossifie entre 3 et 6 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20rotule%20n'existe%20pas%20encore%20vraiment%20chez%20le%20nouveau-n%C3%A9%20%3A%20elle%20est%20en%20cartilage%20et%20s'ossifie%20entre%203%20et%206%20ans%20%3F",
  "explanation": "Chez le bébé, la rotule est principalement cartilagineuse et n'apparaît pas sur une radiographie. Elle s'ossifie progressivement pendant l'enfance. C'est un exemple de la transformation du squelette pendant la croissance."
 },
 {
  "text": "Le hoquet est dû à une contraction involontaire du diaphragme, suivie de la fermeture brutale des cordes vocales.",
  "source": "Perplexity",
  "question": "Est-il vrai que le hoquet est dû à une contraction involontaire du diaphragme, suivie de la fermeture brutale des cordes vocales ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20hoquet%20est%20d%C3%BB%20%C3%A0%20une%20contraction%20involontaire%20du%20diaphragme%2C%20suivie%20de%20la%20fermeture%20brutale%20des%20cordes%20vocales%20%3F",
  "explanation": "Le diaphragme se contracte soudainement, ce qui fait entrer de l'air. Une fraction de seconde plus tard, la glotte se ferme brusquement, produisant le « hic ». Le hoquet peut être déclenché par un repas trop rapide, des boissons gazeuses ou une émotion. Son utilité éventuelle reste mal comprise."
 },
 {
  "text": "L'oreille interne ne sert pas qu'à entendre : elle permet aussi de garder l'équilibre.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'oreille interne ne sert pas qu'à entendre : elle permet aussi de garder l'équilibre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'oreille%20interne%20ne%20sert%20pas%20qu'%C3%A0%20entendre%20%3A%20elle%20permet%20aussi%20de%20garder%20l'%C3%A9quilibre%20%3F",
  "explanation": "L'oreille interne contient le vestibule et les canaux semi-circulaires, remplis de liquide, qui détectent les mouvements et la position de la tête. Quand les informations du vestibule et des yeux ne concordent pas, comme en voiture ou en bateau, on peut avoir le mal des transports."
 },
 {
  "text": "L'émail des dents, le tissu le plus dur du corps, ne se régénère jamais.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'émail des dents, le tissu le plus dur du corps, ne se régénère jamais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%A9mail%20des%20dents%2C%20le%20tissu%20le%20plus%20dur%20du%20corps%2C%20ne%20se%20r%C3%A9g%C3%A9n%C3%A8re%20jamais%20%3F",
  "explanation": "L'émail est produit avant l'éruption des dents par des cellules qui disparaissent ensuite. Il ne contient pas de cellules vivantes et ne peut pas se réparer : une carie ou une fissure ne guérit pas. La salive et le fluor peuvent seulement reminéraliser de petites lésions de surface."
 },
 {
  "text": "Nous clignons des yeux environ 15 à 20 fois par minute, ce qui représente plusieurs minutes de « noir » par heure.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous clignons des yeux environ 15 à 20 fois par minute, ce qui représente plusieurs minutes de « noir » par heure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20clignons%20des%20yeux%20environ%2015%20%C3%A0%2020%20fois%20par%20minute%2C%20ce%20qui%20repr%C3%A9sente%20plusieurs%20minutes%20de%20%C2%AB%20noir%20%C2%BB%20par%20heure%20%3F",
  "explanation": "Chaque clignement dure environ 100 à 400 millisecondes. Le cerveau masque ces coupures, et nous n'avons pas conscience de ces interruptions. Nous clignons moins devant un écran, ce qui peut assécher les yeux."
 },
 {
  "text": "Le sang n'est jamais bleu dans le corps : les veines paraissent bleues à cause de la façon dont la peau filtre la lumière.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sang n'est jamais bleu dans le corps : les veines paraissent bleues à cause de la façon dont la peau filtre la lumière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sang%20n'est%20jamais%20bleu%20dans%20le%20corps%20%3A%20les%20veines%20paraissent%20bleues%20%C3%A0%20cause%20de%20la%20fa%C3%A7on%20dont%20la%20peau%20filtre%20la%20lumi%C3%A8re%20%3F",
  "explanation": "Le sang est rouge vif quand il est riche en oxygène et rouge sombre dans les veines. L'apparence bleutée vient de la façon dont la peau absorbe et diffuse les différentes couleurs de lumière. C'est une illusion d'optique."
 },
 {
  "text": "Le cerveau humain contient environ 86 milliards de neurones.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau humain contient environ 86 milliards de neurones ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20humain%20contient%20environ%2086%20milliards%20de%20neurones%20%3F",
  "explanation": "En 2009, la neuroscientifique Suzana Herculano-Houzel a compté les neurones en dissolvant des cerveaux et en comptant leurs noyaux. Elle a obtenu environ 86 milliards, contre les 100 milliards souvent cités. Le cervelet en contient la grande majorité."
 },
 {
  "text": "Les poumons d'un bébé continuent de fabriquer des alvéoles pendant des années après la naissance.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poumons d'un bébé continuent de fabriquer des alvéoles pendant des années après la naissance ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poumons%20d'un%20b%C3%A9b%C3%A9%20continuent%20de%20fabriquer%20des%20alv%C3%A9oles%20pendant%20des%20ann%C3%A9es%20apr%C3%A8s%20la%20naissance%20%3F",
  "explanation": "À la naissance, les poumons ne comptent qu'une partie des quelque 300 à 500 millions d'alvéoles d'un adulte. Leur nombre augmente fortement pendant l'enfance, au moins jusqu'à l'âge de 2 ans et probablement au-delà selon des études récentes. C'est l'une des raisons pour lesquelles la qualité de l'air respiré par les enfants compte autant."
 },
 {
  "text": "À la naissance, un bébé ne voit nettement qu'à 20 à 30 cm, la distance du visage de la personne qui le tient.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'à la naissance, un bébé ne voit nettement qu'à 20 à 30 cm, la distance du visage de la personne qui le tient ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%A0%20la%20naissance%2C%20un%20b%C3%A9b%C3%A9%20ne%20voit%20nettement%20qu'%C3%A0%2020%20%C3%A0%2030%20cm%2C%20la%20distance%20du%20visage%20de%20la%20personne%20qui%20le%20tient%20%3F",
  "explanation": "La vision du nouveau-né est floue et peu sensible aux couleurs : il distingue surtout les contrastes et les visages proches. Elle s'améliore rapidement pendant les premiers mois, à mesure que la rétine et les zones visuelles du cerveau mûrissent. Vers 6 mois à un an, l'acuité s'approche de celle d'un adulte."
 },
 {
  "text": "La plante des pieds compte plus de glandes sudoripares au cm² que presque n'importe quelle autre partie du corps.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plante des pieds compte plus de glandes sudoripares au cm² que presque n'importe quelle autre partie du corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plante%20des%20pieds%20compte%20plus%20de%20glandes%20sudoripares%20au%20cm%C2%B2%20que%20presque%20n'importe%20quelle%20autre%20partie%20du%20corps%20%3F",
  "explanation": "Chaque pied possède environ 250 000 glandes sudoripares. La transpiration, enfermée dans les chaussures, favorise la prolifération de bactéries qui produisent les odeurs. La paume des mains en est aussi très riche."
 },
 {
  "text": "Le nez peut garder en mémoire une odeur pendant des décennies et la lier à un souvenir précis.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nez peut garder en mémoire une odeur pendant des décennies et la lier à un souvenir précis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nez%20peut%20garder%20en%20m%C3%A9moire%20une%20odeur%20pendant%20des%20d%C3%A9cennies%20et%20la%20lier%20%C3%A0%20un%20souvenir%20pr%C3%A9cis%20%3F",
  "explanation": "Les informations olfactives sont traitées par des régions du cerveau proches de l'hippocampe et de l'amygdale, impliquées dans la mémoire et les émotions. C'est pourquoi une odeur peut faire resurgir un souvenir ancien avec beaucoup d'intensité. On parle d'effet madeleine de Proust."
 },
 {
  "text": "Avoir la chair de poule est un réflexe hérité de nos ancêtres plus poilus.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'avoir la chair de poule est un réflexe hérité de nos ancêtres plus poilus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'avoir%20la%20chair%20de%20poule%20est%20un%20r%C3%A9flexe%20h%C3%A9rit%C3%A9%20de%20nos%20anc%C3%AAtres%20plus%20poilus%20%3F",
  "explanation": "Le froid ou une émotion font contracter de petits muscles à la base des poils, qui se dressent. Chez les animaux à fourrure, cela emprisonne de l'air et isole du froid, ou fait paraître plus gros face à une menace. Chez l'humain, avec peu de poils, l'effet est surtout visible."
 },
 {
  "text": "Les gauchers représentent environ 10 % de la population mondiale, une proportion stable depuis des milliers d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai que les gauchers représentent environ 10 % de la population mondiale, une proportion stable depuis des milliers d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gauchers%20repr%C3%A9sentent%20environ%2010%20%25%20de%20la%20population%20mondiale%2C%20une%20proportion%20stable%20depuis%20des%20milliers%20d'ann%C3%A9es%20%3F",
  "explanation": "Des études d'outils préhistoriques et de peintures rupestres suggèrent que la proportion de gauchers était déjà d'environ 10 % il y a des milliers d'années. La latéralité dépendrait de facteurs génétiques et environnementaux complexes."
 },
 {
  "text": "L'être humain est l'un des rares mammifères capables de transpirer abondamment pour se refroidir.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'être humain est l'un des rares mammifères capables de transpirer abondamment pour se refroidir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%AAtre%20humain%20est%20l'un%20des%20rares%20mammif%C3%A8res%20capables%20de%20transpirer%20abondamment%20pour%20se%20refroidir%20%3F",
  "explanation": "L'humain possède des millions de glandes sudoripares et peu de poils, ce qui permet une évaporation efficace. Cette capacité aurait permis à nos ancêtres de chasser à l'endurance, en poursuivant des proies jusqu'à leur épuisement. Les chevaux transpirent aussi beaucoup."
 },
 {
  "text": "Le pouce a son propre muscle et sa propre zone importante dans le cerveau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pouce a son propre muscle et sa propre zone importante dans le cerveau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pouce%20a%20son%20propre%20muscle%20et%20sa%20propre%20zone%20importante%20dans%20le%20cerveau%20%3F",
  "explanation": "Le pouce opposable est contrôlé par plusieurs muscles qui lui sont propres. Dans le cortex moteur, la zone qui contrôle la main et le pouce est proportionnellement très grande, ce qui reflète l'importance de la manipulation fine pour l'humain."
 },
 {
  "text": "Le corps humain contient environ 0,2 milligramme d'or, surtout dans le sang.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain contient environ 0,2 milligramme d'or, surtout dans le sang ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20contient%20environ%200%2C2%20milligramme%20d'or%2C%20surtout%20dans%20le%20sang%20%3F",
  "explanation": "On trouve des traces de nombreux éléments dans le corps humain, dont l'or, à hauteur d'environ 0,2 mg pour un adulte. Son rôle biologique éventuel est inconnu. Il faudrait des dizaines de milliers de personnes pour réunir de quoi fabriquer une bague."
 },
 {
  "text": "On rêve environ 2 heures par nuit, même quand on ne s'en souvient pas.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on rêve environ 2 heures par nuit, même quand on ne s'en souvient pas ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20r%C3%AAve%20environ%202%20heures%20par%20nuit%2C%20m%C3%AAme%20quand%20on%20ne%20s'en%20souvient%20pas%20%3F",
  "explanation": "Les rêves les plus vifs surviennent pendant le sommeil paradoxal, qui revient par cycles d'environ 90 minutes. On en oublie la grande majorité au réveil. Se réveiller pendant une phase de rêve augmente les chances de s'en souvenir."
 },
 {
  "text": "La couleur des yeux de beaucoup de bébés change pendant la première année.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur des yeux de beaucoup de bébés change pendant la première année ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20des%20yeux%20de%20beaucoup%20de%20b%C3%A9b%C3%A9s%20change%20pendant%20la%20premi%C3%A8re%20ann%C3%A9e%20%3F",
  "explanation": "Beaucoup de bébés naissent avec des yeux clairs, car la mélanine de l'iris n'est pas encore produite en quantité. Elle augmente au cours des premiers mois, et la couleur peut foncer jusqu'à environ un an, parfois un peu plus tard. La couleur dépend de plusieurs gènes."
 },
 {
  "text": "Sur la Lune, une personne de 70 kg ne pèserait qu'environ 12 kg sur une balance.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur la Lune, une personne de 70 kg ne pèserait qu'environ 12 kg sur une balance ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20la%20Lune%2C%20une%20personne%20de%2070%20kg%20ne%20p%C3%A8serait%20qu'environ%2012%20kg%20sur%20une%20balance%20%3F",
  "explanation": "La gravité à la surface de la Lune est environ six fois plus faible que sur Terre. La masse d'une personne reste la même, mais la force qui l'attire vers le sol, et donc ce qu'affiche une balance, est divisée par six. C'est pourquoi les astronautes d'Apollo se déplaçaient par bonds."
 },
 {
  "text": "L'espace n'est pas totalement silencieux pour les instruments : la NASA a converti en sons les ondes de pression autour d'un trou noir.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'espace n'est pas totalement silencieux pour les instruments : la NASA a converti en sons les ondes de pression autour d'un trou noir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'espace%20n'est%20pas%20totalement%20silencieux%20pour%20les%20instruments%20%3A%20la%20NASA%20a%20converti%20en%20sons%20les%20ondes%20de%20pression%20autour%20d'un%20trou%20noir%20%3F",
  "explanation": "Le son ne se propage pas dans le vide, mais les nuages de gaz des amas de galaxies sont assez denses pour transmettre des ondes de pression. En 2022, la NASA a « sonifié » les données du télescope Chandra sur l'amas de Persée, en accélérant ces ondes pour les rendre audibles."
 },
 {
  "text": "Une journée sur Terre durait environ 4 heures de moins à l'époque des dinosaures.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une journée sur Terre durait environ 4 heures de moins à l'époque des dinosaures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20journ%C3%A9e%20sur%20Terre%20durait%20environ%204%20heures%20de%20moins%20%C3%A0%20l'%C3%A9poque%20des%20dinosaures%20%3F",
  "explanation": "La rotation de la Terre ralentit très lentement à cause des marées provoquées par la Lune. Il y a 70 millions d'années, une journée durait environ 23 heures et demie. Il y a plus d'un milliard d'années, elle aurait duré moins de 20 heures. Les cernes de coquillages fossiles permettent de mesurer ce changement."
 },
 {
  "text": "La lumière des étoiles que nous voyons peut provenir d'étoiles qui n'existent plus.",
  "source": "Perplexity",
  "question": "Est-il vrai que la lumière des étoiles que nous voyons peut provenir d'étoiles qui n'existent plus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20lumi%C3%A8re%20des%20%C3%A9toiles%20que%20nous%20voyons%20peut%20provenir%20d'%C3%A9toiles%20qui%20n'existent%20plus%20%3F",
  "explanation": "La lumière met du temps à nous parvenir : des années à des milliers d'années pour les étoiles visibles à l'œil nu. Nous les voyons donc telles qu'elles étaient dans le passé. La plupart des étoiles visibles sont encore là, mais certaines, très massives et lointaines, ont pu exploser depuis."
 },
 {
  "text": "Le Soleil représente environ 99,8 % de la masse du système solaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Soleil représente environ 99,8 % de la masse du système solaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Soleil%20repr%C3%A9sente%20environ%2099%2C8%20%25%20de%20la%20masse%20du%20syst%C3%A8me%20solaire%20%3F",
  "explanation": "Toutes les planètes, lunes, astéroïdes et comètes réunis ne pèsent qu'environ 0,2 % du système solaire, dont la majeure partie est Jupiter. Le Soleil est pourtant une étoile de taille moyenne."
 },
 {
  "text": "Mars a les plus hauts volcans connus du système solaire : Olympus Mons fait environ 22 km de haut, presque trois fois l'Everest.",
  "source": "Perplexity",
  "question": "Est-il vrai que Mars a les plus hauts volcans connus du système solaire : Olympus Mons fait environ 22 km de haut, presque trois fois l'Everest ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Mars%20a%20les%20plus%20hauts%20volcans%20connus%20du%20syst%C3%A8me%20solaire%20%3A%20Olympus%20Mons%20fait%20environ%2022%20km%20de%20haut%2C%20presque%20trois%20fois%20l'Everest%20%3F",
  "explanation": "Olympus Mons est un volcan bouclier géant, d'environ 600 km de large. Sur Mars, l'absence de tectonique des plaques a permis au magma de s'accumuler au même endroit pendant très longtemps. Sa pente est si douce qu'un marcheur au sommet ne verrait pas qu'il est sur une montagne."
 },
 {
  "text": "Il pleut de l'acide sulfurique sur Vénus, mais il s'évapore avant d'atteindre le sol.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il pleut de l'acide sulfurique sur Vénus, mais il s'évapore avant d'atteindre le sol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20pleut%20de%20l'acide%20sulfurique%20sur%20V%C3%A9nus%2C%20mais%20il%20s'%C3%A9vapore%20avant%20d'atteindre%20le%20sol%20%3F",
  "explanation": "Les nuages de Vénus sont composés de gouttelettes d'acide sulfurique. La température au sol dépasse 460 °C, si bien que la pluie s'évapore en tombant. On appelle ces pluies qui ne touchent pas le sol des virgas."
 },
 {
  "text": "Un astronaute en orbite voit environ 16 levers et couchers de soleil par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un astronaute en orbite voit environ 16 levers et couchers de soleil par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20astronaute%20en%20orbite%20voit%20environ%2016%20levers%20et%20couchers%20de%20soleil%20par%20jour%20%3F",
  "explanation": "La Station spatiale internationale fait le tour de la Terre en environ 90 minutes, à environ 28 000 km/h. Les astronautes passent donc régulièrement du jour à la nuit. Pour garder un rythme, ils suivent l'heure universelle et dorment à heures fixes."
 },
 {
  "text": "La Grande Tache rouge de Jupiter est une tempête plus grande que la Terre, observée depuis au moins 1830.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Grande Tache rouge de Jupiter est une tempête plus grande que la Terre, observée depuis au moins 1830 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Grande%20Tache%20rouge%20de%20Jupiter%20est%20une%20temp%C3%AAte%20plus%20grande%20que%20la%20Terre%2C%20observ%C3%A9e%20depuis%20au%20moins%201830%20%3F",
  "explanation": "Cette tempête anticyclonique est suivie en continu depuis 1830, et peut-être observée dès 1665. Elle rétrécit depuis plusieurs décennies : elle pourrait aujourd'hui contenir une seule Terre environ, contre trois au XIXe siècle."
 },
 {
  "text": "Sur Saturne et Jupiter, il n'y a pas de surface solide sur laquelle se poser.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Saturne et Jupiter, il n'y a pas de surface solide sur laquelle se poser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Saturne%20et%20Jupiter%2C%20il%20n'y%20a%20pas%20de%20surface%20solide%20sur%20laquelle%20se%20poser%20%3F",
  "explanation": "Ces géantes gazeuses sont composées principalement d'hydrogène et d'hélium. En descendant, la pression et la température augmentent jusqu'à transformer l'hydrogène en liquide, puis en un état métallique. Une sonde serait écrasée bien avant d'atteindre un éventuel noyau solide."
 },
 {
  "text": "Une boule de neige sur Pluton ne fondrait jamais : la température y est d'environ −230 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une boule de neige sur Pluton ne fondrait jamais : la température y est d'environ −230 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20boule%20de%20neige%20sur%20Pluton%20ne%20fondrait%20jamais%20%3A%20la%20temp%C3%A9rature%20y%20est%20d'environ%20%E2%88%92230%20%C2%B0C%20%3F",
  "explanation": "Pluton orbite très loin du Soleil, à environ 40 fois la distance Terre-Soleil en moyenne. Sa surface est recouverte de glaces d'azote, de méthane et de monoxyde de carbone. La sonde New Horizons y a découvert en 2015 des montagnes de glace d'eau et une vaste plaine en forme de cœur."
 },
 {
  "text": "Le premier être vivant en orbite autour de la Terre était une chienne, Laïka, en 1957.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier être vivant en orbite autour de la Terre était une chienne, Laïka, en 1957 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20%C3%AAtre%20vivant%20en%20orbite%20autour%20de%20la%20Terre%20%C3%A9tait%20une%20chienne%2C%20La%C3%AFka%2C%20en%201957%20%3F",
  "explanation": "Laïka a été lancée à bord de Spoutnik 2 le 3 novembre 1957. Elle est morte de surchauffe quelques heures après le lancement, car le retour n'était pas prévu. Sa mission a montré qu'un être vivant pouvait supporter le lancement et l'apesanteur. Un monument lui rend hommage à Moscou."
 },
 {
  "text": "Il y a environ 10 000 satellites actifs autour de la Terre, et le nombre augmente très vite.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a environ 10 000 satellites actifs autour de la Terre, et le nombre augmente très vite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20environ%2010%20000%20satellites%20actifs%20autour%20de%20la%20Terre%2C%20et%20le%20nombre%20augmente%20tr%C3%A8s%20vite%20%3F",
  "explanation": "Le nombre de satellites a explosé depuis 2019 avec les constellations de satellites Internet comme Starlink. Les astronomes s'inquiètent de leurs traînées lumineuses sur les images de télescope et de l'augmentation des débris spatiaux."
 },
 {
  "text": "Le dioxyde de carbone gelé, la « glace sèche », passe directement de l'état solide à l'état gazeux.",
  "source": "Perplexity",
  "question": "Est-il vrai que le dioxyde de carbone gelé, la « glace sèche », passe directement de l'état solide à l'état gazeux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20dioxyde%20de%20carbone%20gel%C3%A9%2C%20la%20%C2%AB%20glace%20s%C3%A8che%20%C2%BB%2C%20passe%20directement%20de%20l'%C3%A9tat%20solide%20%C3%A0%20l'%C3%A9tat%20gazeux%20%3F",
  "explanation": "À pression atmosphérique, le CO2 ne peut pas exister sous forme liquide : il se sublime à −78,5 °C. La glace sèche produit un brouillard blanc quand elle est plongée dans l'eau chaude. Elle peut provoquer des brûlures par le froid et ne doit pas être enfermée dans un récipient hermétique."
 },
 {
  "text": "L'eau peut bouillir et geler en même temps : c'est le point triple.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau peut bouillir et geler en même temps : c'est le point triple ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20peut%20bouillir%20et%20geler%20en%20m%C3%AAme%20temps%20%3A%20c'est%20le%20point%20triple%20%3F",
  "explanation": "À une température de 0,01 °C et une pression d'environ 0,006 atmosphère, l'eau peut exister simultanément sous forme solide, liquide et gazeuse. Ce point triple servait à définir le kelvin, l'unité de température, avant 2019."
 },
 {
  "text": "Le verre est fabriqué à partir de sable fondu à plus de 1 500 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai que le verre est fabriqué à partir de sable fondu à plus de 1 500 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20verre%20est%20fabriqu%C3%A9%20%C3%A0%20partir%20de%20sable%20fondu%20%C3%A0%20plus%20de%201%20500%20%C2%B0C%20%3F",
  "explanation": "Le verre ordinaire est principalement composé de silice, le principal constituant du sable. On y ajoute du carbonate de sodium et de la chaux pour abaisser la température de fusion et le rendre plus résistant. Refroidi rapidement, il devient un solide amorphe, sans structure cristalline."
 },
 {
  "text": "L'hélium est le seul élément qui ne gèle pas à pression normale, même au zéro absolu.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'hélium est le seul élément qui ne gèle pas à pression normale, même au zéro absolu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'h%C3%A9lium%20est%20le%20seul%20%C3%A9l%C3%A9ment%20qui%20ne%20g%C3%A8le%20pas%20%C3%A0%20pression%20normale%2C%20m%C3%AAme%20au%20z%C3%A9ro%20absolu%20%3F",
  "explanation": "À pression atmosphérique, l'hélium reste liquide jusqu'à la température la plus basse possible. Les effets quantiques empêchent ses atomes de se figer en réseau. Il faut une pression d'environ 25 fois la pression atmosphérique pour le solidifier."
 },
 {
  "text": "L'hélium a été découvert dans le Soleil avant d'être trouvé sur Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'hélium a été découvert dans le Soleil avant d'être trouvé sur Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'h%C3%A9lium%20a%20%C3%A9t%C3%A9%20d%C3%A9couvert%20dans%20le%20Soleil%20avant%20d'%C3%AAtre%20trouv%C3%A9%20sur%20Terre%20%3F",
  "explanation": "En 1868, lors d'une éclipse, les astronomes Jules Janssen et Norman Lockyer ont observé une raie jaune inconnue dans le spectre du Soleil. Lockyer a nommé l'élément hélium, d'après le mot grec pour Soleil. Il n'a été isolé sur Terre qu'en 1895."
 },
 {
  "text": "Un bout de diamant et un bout de mine de crayon sont faits du même élément : le carbone.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un bout de diamant et un bout de mine de crayon sont faits du même élément : le carbone ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20bout%20de%20diamant%20et%20un%20bout%20de%20mine%20de%20crayon%20sont%20faits%20du%20m%C3%AAme%20%C3%A9l%C3%A9ment%20%3A%20le%20carbone%20%3F",
  "explanation": "Le diamant et le graphite sont deux formes du carbone. Dans le diamant, chaque atome est lié à quatre voisins dans une structure rigide, d'où sa dureté. Dans le graphite, les atomes forment des feuillets qui glissent les uns sur les autres, d'où sa capacité à laisser une trace."
 },
 {
  "text": "La foudre frappe la Terre environ 40 à 50 fois par seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que la foudre frappe la Terre environ 40 à 50 fois par seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20foudre%20frappe%20la%20Terre%20environ%2040%20%C3%A0%2050%20fois%20par%20seconde%20%3F",
  "explanation": "Des satellites qui détectent les éclairs ont permis d'estimer qu'il y a environ 1,4 milliard d'éclairs par an dans le monde. Ils sont beaucoup plus fréquents sur les continents, notamment dans les zones tropicales. Le lac Maracaibo, au Venezuela, est l'un des endroits les plus foudroyés au monde."
 },
 {
  "text": "La foudre peut frapper deux fois au même endroit : l'Empire State Building est frappé environ 20 à 25 fois par an.",
  "source": "Perplexity",
  "question": "Est-il vrai que la foudre peut frapper deux fois au même endroit : l'Empire State Building est frappé environ 20 à 25 fois par an ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20foudre%20peut%20frapper%20deux%20fois%20au%20m%C3%AAme%20endroit%20%3A%20l'Empire%20State%20Building%20est%20frapp%C3%A9%20environ%2020%20%C3%A0%2025%20fois%20par%20an%20%3F",
  "explanation": "Contrairement au dicton, la foudre frappe souvent les mêmes endroits, surtout les points hauts et isolés. Les gratte-ciel, les antennes et les arbres solitaires sont des cibles fréquentes. C'est pourquoi on les équipe de paratonnerres."
 },
 {
  "text": "Le son voyage environ quatre fois plus vite dans l'eau que dans l'air.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son voyage environ quatre fois plus vite dans l'eau que dans l'air ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20voyage%20environ%20quatre%20fois%20plus%20vite%20dans%20l'eau%20que%20dans%20l'air%20%3F",
  "explanation": "Dans l'air, le son voyage à environ 343 m/s. Dans l'eau, il atteint environ 1 500 m/s, et dans l'acier plus de 5 000 m/s. Les molécules plus rapprochées transmettent plus vite les vibrations. C'est pourquoi les baleines communiquent sur de longues distances."
 },
 {
  "text": "Le verre de quartz résiste à un choc thermique extrême : chauffé au rouge, il peut être plongé dans l'eau froide sans se briser.",
  "source": "Perplexity",
  "question": "Est-il vrai que le verre de quartz résiste à un choc thermique extrême : chauffé au rouge, il peut être plongé dans l'eau froide sans se briser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20verre%20de%20quartz%20r%C3%A9siste%20%C3%A0%20un%20choc%20thermique%20extr%C3%AAme%20%3A%20chauff%C3%A9%20au%20rouge%2C%20il%20peut%20%C3%AAtre%20plong%C3%A9%20dans%20l'eau%20froide%20sans%20se%20briser%20%3F",
  "explanation": "La silice fondue se dilate très peu avec la chaleur, ce qui évite les tensions qui font éclater le verre ordinaire. Elle est utilisée pour les lampes à haute température, les instruments de laboratoire et certains hublots de vaisseaux spatiaux."
 },
 {
  "text": "Le point le plus froid connu dans l'Univers naturel est la nébuleuse du Boomerang, à environ −272 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus froid connu dans l'Univers naturel est la nébuleuse du Boomerang, à environ −272 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20froid%20connu%20dans%20l'Univers%20naturel%20est%20la%20n%C3%A9buleuse%20du%20Boomerang%2C%20%C3%A0%20environ%20%E2%88%92272%20%C2%B0C%20%3F",
  "explanation": "La nébuleuse du Boomerang est un nuage de gaz expulsé par une étoile mourante, à environ 5 000 années-lumière. Le gaz en expansion rapide se refroidit à environ 1 K, plus froid que le rayonnement du fond diffus cosmologique (2,7 K). Les laboratoires terrestres atteignent cependant des températures encore plus basses."
 },
 {
  "text": "Les laboratoires ont produit des températures à moins d'un milliardième de degré du zéro absolu.",
  "source": "Perplexity",
  "question": "Est-il vrai que les laboratoires ont produit des températures à moins d'un milliardième de degré du zéro absolu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20laboratoires%20ont%20produit%20des%20temp%C3%A9ratures%20%C3%A0%20moins%20d'un%20milliardi%C3%A8me%20de%20degr%C3%A9%20du%20z%C3%A9ro%20absolu%20%3F",
  "explanation": "En refroidissant des atomes avec des lasers et des pièges magnétiques, des physiciens atteignent des températures de l'ordre du nanokelvin, voire moins. Ces conditions permettent d'étudier des états de la matière comme les condensats de Bose-Einstein."
 },
 {
  "text": "Si la Terre avait la taille d'une bille, le Soleil serait une boule d'environ 1,4 m à 150 mètres de distance.",
  "source": "Perplexity",
  "question": "Est-il vrai que si la Terre avait la taille d'une bille, le Soleil serait une boule d'environ 1,4 m à 150 mètres de distance ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20la%20Terre%20avait%20la%20taille%20d'une%20bille%2C%20le%20Soleil%20serait%20une%20boule%20d'environ%201%2C4%20m%20%C3%A0%20150%20m%C3%A8tres%20de%20distance%20%3F",
  "explanation": "Le diamètre du Soleil est environ 109 fois celui de la Terre. Pour une Terre de 1,3 cm, le Soleil ferait environ 1,4 m et serait à environ 150 m. Les planètes les plus lointaines seraient à plusieurs kilomètres. Cette échelle montre le vide immense du système solaire."
 },
 {
  "text": "On ne peut pas voir le côté caché de la Lune depuis la Terre, car elle tourne sur elle-même à la même vitesse qu'elle tourne autour de nous.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on ne peut pas voir le côté caché de la Lune depuis la Terre, car elle tourne sur elle-même à la même vitesse qu'elle tourne autour de nous ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20ne%20peut%20pas%20voir%20le%20c%C3%B4t%C3%A9%20cach%C3%A9%20de%20la%20Lune%20depuis%20la%20Terre%2C%20car%20elle%20tourne%20sur%20elle-m%C3%AAme%20%C3%A0%20la%20m%C3%AAme%20vitesse%20qu'elle%20tourne%20autour%20de%20nous%20%3F",
  "explanation": "La Lune est en rotation synchrone : elle met environ 27 jours à faire un tour sur elle-même et autant pour faire le tour de la Terre. Elle nous présente donc toujours la même face. La face cachée n'est pas sombre : elle reçoit autant de lumière du Soleil. Elle a été photographiée pour la première fois en 1959 par la sonde Luna 3."
 },
 {
  "text": "Le dernier homme à avoir marché sur la Lune, Eugene Cernan, y a tracé les initiales de sa fille dans la poussière.",
  "source": "Perplexity",
  "question": "Est-il vrai que le dernier homme à avoir marché sur la Lune, Eugene Cernan, y a tracé les initiales de sa fille dans la poussière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20dernier%20homme%20%C3%A0%20avoir%20march%C3%A9%20sur%20la%20Lune%2C%20Eugene%20Cernan%2C%20y%20a%20trac%C3%A9%20les%20initiales%20de%20sa%20fille%20dans%20la%20poussi%C3%A8re%20%3F",
  "explanation": "Lors de la mission Apollo 17 en décembre 1972, Eugene Cernan a tracé « TDC », les initiales de sa fille Tracy, dans le sol lunaire. Sans vent ni pluie, ces lettres pourraient rester visibles très longtemps. Aucun humain n'est retourné sur la Lune depuis."
 },
 {
  "text": "Le béton romain est plus durable que beaucoup de bétons modernes, grâce à de petits morceaux de chaux qui « réparent » les fissures.",
  "source": "Perplexity",
  "question": "Est-il vrai que le béton romain est plus durable que beaucoup de bétons modernes, grâce à de petits morceaux de chaux qui « réparent » les fissures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20b%C3%A9ton%20romain%20est%20plus%20durable%20que%20beaucoup%20de%20b%C3%A9tons%20modernes%2C%20gr%C3%A2ce%20%C3%A0%20de%20petits%20morceaux%20de%20chaux%20qui%20%C2%AB%20r%C3%A9parent%20%C2%BB%20les%20fissures%20%3F",
  "explanation": "En 2023, des chercheurs du MIT ont montré que les inclusions de chaux du béton romain réagissent avec l'eau qui s'infiltre dans les fissures, ce qui reforme du carbonate de calcium et colmate les fissures. Ce mécanisme expliquerait la longévité de monuments comme le Panthéon, toujours debout après près de 2 000 ans."
 },
 {
  "text": "Le Panthéon de Rome possède depuis près de 2 000 ans la plus grande coupole en béton non armé du monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Panthéon de Rome possède depuis près de 2 000 ans la plus grande coupole en béton non armé du monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Panth%C3%A9on%20de%20Rome%20poss%C3%A8de%20depuis%20pr%C3%A8s%20de%202%20000%20ans%20la%20plus%20grande%20coupole%20en%20b%C3%A9ton%20non%20arm%C3%A9%20du%20monde%20%3F",
  "explanation": "Achevée vers 125 apr. J.-C., la coupole du Panthéon mesure environ 43 mètres de diamètre. Les bâtisseurs ont utilisé des matériaux de plus en plus légers vers le sommet, comme la pierre ponce. L'oculus, ouverture centrale de 9 mètres, allège encore la structure."
 },
 {
  "text": "Un aimant coupé en deux donne deux aimants, chacun avec un pôle nord et un pôle sud.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un aimant coupé en deux donne deux aimants, chacun avec un pôle nord et un pôle sud ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20aimant%20coup%C3%A9%20en%20deux%20donne%20deux%20aimants%2C%20chacun%20avec%20un%20p%C3%B4le%20nord%20et%20un%20p%C3%B4le%20sud%20%3F",
  "explanation": "Les propriétés magnétiques viennent de l'alignement des moments magnétiques des atomes. Couper un aimant ne permet pas d'isoler un pôle : chaque morceau a toujours ses deux pôles. Les physiciens cherchent depuis longtemps un hypothétique « monopôle magnétique », jamais observé."
 },
 {
  "text": "Les pôles magnétiques de la Terre se sont inversés des centaines de fois au cours de son histoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pôles magnétiques de la Terre se sont inversés des centaines de fois au cours de son histoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20p%C3%B4les%20magn%C3%A9tiques%20de%20la%20Terre%20se%20sont%20invers%C3%A9s%20des%20centaines%20de%20fois%20au%20cours%20de%20son%20histoire%20%3F",
  "explanation": "Les roches volcaniques enregistrent la direction du champ magnétique au moment de leur refroidissement. Elles montrent que le nord et le sud magnétiques se sont inversés de nombreuses fois. La dernière inversion complète date d'environ 780 000 ans. Le pôle Nord magnétique se déplace actuellement de plusieurs dizaines de kilomètres par an."
 },
 {
  "text": "Le noyau interne de la Terre est aussi chaud que la surface du Soleil, environ 5 000 °C.",
  "source": "Perplexity",
  "question": "Est-il vrai que le noyau interne de la Terre est aussi chaud que la surface du Soleil, environ 5 000 °C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20noyau%20interne%20de%20la%20Terre%20est%20aussi%20chaud%20que%20la%20surface%20du%20Soleil%2C%20environ%205%20000%20%C2%B0C%20%3F",
  "explanation": "Le noyau interne est une boule de fer et de nickel solide, d'environ 1 220 km de rayon. Malgré sa température d'environ 5 000 à 6 000 °C, la pression énorme le maintient à l'état solide. Il est entouré d'un noyau externe liquide, dont les mouvements génèrent le champ magnétique terrestre."
 },
 {
  "text": "Nous n'avons jamais creusé plus loin qu'environ 12 km dans la croûte terrestre.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous n'avons jamais creusé plus loin qu'environ 12 km dans la croûte terrestre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20n'avons%20jamais%20creus%C3%A9%20plus%20loin%20qu'environ%2012%20km%20dans%20la%20cro%C3%BBte%20terrestre%20%3F",
  "explanation": "Le forage de Kola, en Russie, a atteint 12 262 mètres en 1989, le trou le plus profond jamais creusé. À cette profondeur, la température atteignait 180 °C et la roche se comportait de façon plastique. Cela représente à peine 0,2 % du rayon de la Terre."
 },
 {
  "text": "La Terre n'est pas parfaitement ronde : elle est légèrement aplatie aux pôles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Terre n'est pas parfaitement ronde : elle est légèrement aplatie aux pôles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Terre%20n'est%20pas%20parfaitement%20ronde%20%3A%20elle%20est%20l%C3%A9g%C3%A8rement%20aplatie%20aux%20p%C3%B4les%20%3F",
  "explanation": "La rotation de la Terre crée un renflement à l'équateur. Le rayon équatorial est environ 21 km plus grand que le rayon polaire. Isaac Newton avait prédit cet aplatissement, confirmé par des expéditions françaises en Laponie et au Pérou au XVIIIe siècle."
 },
 {
  "text": "Une seule éruption volcanique, celle du Tambora en 1815, a provoqué une « année sans été » en Europe et en Amérique.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une seule éruption volcanique, celle du Tambora en 1815, a provoqué une « année sans été » en Europe et en Amérique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20seule%20%C3%A9ruption%20volcanique%2C%20celle%20du%20Tambora%20en%201815%2C%20a%20provoqu%C3%A9%20une%20%C2%AB%20ann%C3%A9e%20sans%20%C3%A9t%C3%A9%20%C2%BB%20en%20Europe%20et%20en%20Am%C3%A9rique%20%3F",
  "explanation": "L'éruption du Tambora, en Indonésie, a projeté d'énormes quantités de cendres et de soufre dans la haute atmosphère, ce qui a refroidi le climat mondial. En 1816, des récoltes ont été perdues et des famines ont touché l'Europe et l'Amérique du Nord. Cet été pluvieux a aussi inspiré Mary Shelley pour Frankenstein."
 },
 {
  "text": "Frankenstein est né d'un concours d'histoires de fantômes pendant un été pourri, en 1816.",
  "source": "Perplexity",
  "question": "Est-il vrai que Frankenstein est né d'un concours d'histoires de fantômes pendant un été pourri, en 1816 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Frankenstein%20est%20n%C3%A9%20d'un%20concours%20d'histoires%20de%20fant%C3%B4mes%20pendant%20un%20%C3%A9t%C3%A9%20pourri%2C%20en%201816%20%3F",
  "explanation": "Bloqués par le mauvais temps dans une villa près du lac Léman, Mary Shelley, Percy Shelley, Lord Byron et John Polidori se sont lancé le défi d'écrire une histoire de fantômes. Mary Shelley, alors âgée de 18 ans, a imaginé Frankenstein. Polidori a écrit « Le Vampire », l'un des premiers récits de vampire modernes."
 },
 {
  "text": "Le Soleil n'est pas jaune : vu de l'espace, sa lumière est blanche.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Soleil n'est pas jaune : vu de l'espace, sa lumière est blanche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Soleil%20n'est%20pas%20jaune%20%3A%20vu%20de%20l'espace%2C%20sa%20lumi%C3%A8re%20est%20blanche%20%3F",
  "explanation": "Le Soleil émet toutes les couleurs de la lumière visible, ce qui donne du blanc. Depuis le sol, l'atmosphère diffuse davantage le bleu, ce qui fait paraître le Soleil plus jaune, et orange ou rouge quand il est bas sur l'horizon. Les astronautes le décrivent comme blanc."
 },
 {
  "text": "Le ciel est bleu parce que l'atmosphère diffuse beaucoup plus la lumière bleue que la rouge.",
  "source": "Perplexity",
  "question": "Est-il vrai que le ciel est bleu parce que l'atmosphère diffuse beaucoup plus la lumière bleue que la rouge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20ciel%20est%20bleu%20parce%20que%20l'atmosph%C3%A8re%20diffuse%20beaucoup%20plus%20la%20lumi%C3%A8re%20bleue%20que%20la%20rouge%20%3F",
  "explanation": "Les molécules d'air diffusent davantage les courtes longueurs d'onde, comme le bleu : c'est la diffusion de Rayleigh. Le ciel apparaît donc bleu dans toutes les directions. Le violet est encore plus diffusé, mais nos yeux y sont moins sensibles et une partie est absorbée en haute altitude."
 },
 {
  "text": "Un éclair de chaleur n'existe pas : c'est un orage trop lointain pour qu'on entende le tonnerre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un éclair de chaleur n'existe pas : c'est un orage trop lointain pour qu'on entende le tonnerre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20%C3%A9clair%20de%20chaleur%20n'existe%20pas%20%3A%20c'est%20un%20orage%20trop%20lointain%20pour%20qu'on%20entende%20le%20tonnerre%20%3F",
  "explanation": "On parle parfois d'éclairs de chaleur lors des soirées d'été sans orage apparent. Il s'agit en réalité d'éclairs produits par un orage situé à plus de 15 à 20 km, trop loin pour que le son du tonnerre nous parvienne, mais dont la lumière est visible."
 },
 {
  "text": "En comptant les secondes entre l'éclair et le tonnerre et en divisant par trois, on obtient la distance de l'orage en kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en comptant les secondes entre l'éclair et le tonnerre et en divisant par trois, on obtient la distance de l'orage en kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20comptant%20les%20secondes%20entre%20l'%C3%A9clair%20et%20le%20tonnerre%20et%20en%20divisant%20par%20trois%2C%20on%20obtient%20la%20distance%20de%20l'orage%20en%20kilom%C3%A8tres%20%3F",
  "explanation": "La lumière arrive presque instantanément, alors que le son voyage à environ 340 m/s, soit environ 1 km toutes les 3 secondes. Cette règle simple permet d'estimer si un orage s'approche. Si le tonnerre suit l'éclair en moins de 30 secondes, il est conseillé de se mettre à l'abri."
 },
 {
  "text": "Un grain de sable sur une plage peut avoir été un morceau de montagne il y a des millions d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un grain de sable sur une plage peut avoir été un morceau de montagne il y a des millions d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20grain%20de%20sable%20sur%20une%20plage%20peut%20avoir%20%C3%A9t%C3%A9%20un%20morceau%20de%20montagne%20il%20y%20a%20des%20millions%20d'ann%C3%A9es%20%3F",
  "explanation": "Le sable provient de l'érosion des roches par l'eau, le vent et la glace. Les grains de quartz, très résistants, peuvent être recyclés à travers plusieurs cycles d'érosion et de sédimentation. Sur certaines plages tropicales, le sable blanc provient en grande partie de coraux broyés et digérés par les poissons-perroquets."
 },
 {
  "text": "Le sable blanc de certaines plages tropicales est en partie fabriqué par les poissons-perroquets.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sable blanc de certaines plages tropicales est en partie fabriqué par les poissons-perroquets ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sable%20blanc%20de%20certaines%20plages%20tropicales%20est%20en%20partie%20fabriqu%C3%A9%20par%20les%20poissons-perroquets%20%3F",
  "explanation": "Les poissons-perroquets grignotent les coraux pour manger les algues qui s'y trouvent. Ils broient le calcaire et le rejettent sous forme de fin sable blanc. Un gros poisson-perroquet peut produire plusieurs centaines de kilos de sable par an."
 },
 {
  "text": "Le soleil couchant que nous voyons a déjà disparu sous l'horizon depuis quelques minutes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le soleil couchant que nous voyons a déjà disparu sous l'horizon depuis quelques minutes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20soleil%20couchant%20que%20nous%20voyons%20a%20d%C3%A9j%C3%A0%20disparu%20sous%20l'horizon%20depuis%20quelques%20minutes%20%3F",
  "explanation": "L'atmosphère courbe les rayons lumineux, un phénomène appelé réfraction. Quand le Soleil semble toucher l'horizon, il est en réalité déjà en dessous. Cet effet allonge un peu la durée du jour, de quelques minutes."
 },
 {
  "text": "Les arcs-en-ciel peuvent apparaître la nuit, grâce à la lumière de la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que les arcs-en-ciel peuvent apparaître la nuit, grâce à la lumière de la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20arcs-en-ciel%20peuvent%20appara%C3%AEtre%20la%20nuit%2C%20gr%C3%A2ce%20%C3%A0%20la%20lumi%C3%A8re%20de%20la%20Lune%20%3F",
  "explanation": "Un arc-en-ciel lunaire, ou arc lunaire, se forme quand la lumière de la Lune traverse des gouttes d'eau. Il est beaucoup plus pâle qu'un arc-en-ciel de jour et paraît souvent blanc à l'œil nu, car nos yeux perçoivent mal les couleurs dans la pénombre. On en voit près de certaines chutes d'eau, comme celles de Victoria."
 },
 {
  "text": "Le premier objet humain à avoir quitté le système solaire est la sonde Voyager 1, lancée en 1977.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier objet humain à avoir quitté le système solaire est la sonde Voyager 1, lancée en 1977 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20objet%20humain%20%C3%A0%20avoir%20quitt%C3%A9%20le%20syst%C3%A8me%20solaire%20est%20la%20sonde%20Voyager%201%2C%20lanc%C3%A9e%20en%201977%20%3F",
  "explanation": "Voyager 1 a franchi l'héliopause, la limite de l'influence du vent solaire, en 2012. Elle se trouve à plus de 24 milliards de km de la Terre, et ses signaux mettent plus de 22 heures à nous parvenir. Elle transporte un disque d'or contenant des sons et des images de la Terre."
 },
 {
  "text": "Une cuillère d'eau contient plus de molécules qu'il n'y a de cuillères d'eau dans tous les océans.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une cuillère d'eau contient plus de molécules qu'il n'y a de cuillères d'eau dans tous les océans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20cuill%C3%A8re%20d'eau%20contient%20plus%20de%20mol%C3%A9cules%20qu'il%20n'y%20a%20de%20cuill%C3%A8res%20d'eau%20dans%20tous%20les%20oc%C3%A9ans%20%3F",
  "explanation": "Une cuillère à soupe d'eau, environ 15 ml, contient environ 5 × 10^23 molécules. Les océans contiennent environ 1,3 × 10^21 litres, soit environ 10^23 cuillères. Il y a donc plus de molécules dans une cuillère que de cuillères dans les océans."
 },
 {
  "text": "Chaque verre d'eau que l'on boit contient probablement quelques molécules qui sont passées par un dinosaure.",
  "source": "Perplexity",
  "question": "Est-il vrai que chaque verre d'eau que l'on boit contient probablement quelques molécules qui sont passées par un dinosaure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chaque%20verre%20d'eau%20que%20l'on%20boit%20contient%20probablement%20quelques%20mol%C3%A9cules%20qui%20sont%20pass%C3%A9es%20par%20un%20dinosaure%20%3F",
  "explanation": "L'eau de la Terre circule en permanence entre océans, atmosphère, sols et êtres vivants. Comme un verre contient un nombre gigantesque de molécules et que l'eau terrestre a été recyclée pendant des milliards d'années, il est statistiquement très probable qu'une partie ait été bue par des dinosaures."
 },
 {
  "text": "L'Everest grandit encore de quelques millimètres par an.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Everest grandit encore de quelques millimètres par an ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Everest%20grandit%20encore%20de%20quelques%20millim%C3%A8tres%20par%20an%20%3F",
  "explanation": "La collision entre les plaques indienne et eurasienne continue de soulever l'Himalaya. Les mesures GPS indiquent une hausse de l'ordre de quelques millimètres par an pour l'Everest. Une étude de 2024 suggère qu'une partie de ce soulèvement vient aussi de l'érosion d'une rivière voisine, qui allège la croûte."
 },
 {
  "text": "Il faudrait environ 1,3 million de Terres pour remplir le Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il faudrait environ 1,3 million de Terres pour remplir le Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20faudrait%20environ%201%2C3%20million%20de%20Terres%20pour%20remplir%20le%20Soleil%20%3F",
  "explanation": "Le volume du Soleil est environ 1,3 million de fois celui de la Terre. Pourtant, c'est une étoile naine jaune ordinaire. Certaines étoiles géantes, comme Bételgeuse, pourraient contenir des millions de Soleils."
 },
 {
  "text": "Les Égyptiens de l'Antiquité se maquillaient les yeux avec un fard au plomb qui protégeait peut-être des infections.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Égyptiens de l'Antiquité se maquillaient les yeux avec un fard au plomb qui protégeait peut-être des infections ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%89gyptiens%20de%20l'Antiquit%C3%A9%20se%20maquillaient%20les%20yeux%20avec%20un%20fard%20au%20plomb%20qui%20prot%C3%A9geait%20peut-%C3%AAtre%20des%20infections%20%3F",
  "explanation": "Le khôl égyptien contenait des composés de plomb comme la galène. En 2010, des chercheurs français ont montré que de faibles doses de certains de ces composés stimulent le système immunitaire des cellules de la peau. Ce maquillage aurait donc pu limiter les infections des yeux, fréquentes près du Nil, malgré la toxicité du plomb."
 },
 {
  "text": "Les Égyptiens de l'Antiquité utilisaient des tests de grossesse à base de blé et d'orge.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Égyptiens de l'Antiquité utilisaient des tests de grossesse à base de blé et d'orge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%89gyptiens%20de%20l'Antiquit%C3%A9%20utilisaient%20des%20tests%20de%20grossesse%20%C3%A0%20base%20de%20bl%C3%A9%20et%20d'orge%20%3F",
  "explanation": "Un papyrus médical décrit une méthode : une femme urinait sur des graines de blé et d'orge. Si elles germaient, elle était enceinte. Des tests modernes de cette méthode dans les années 1960 ont montré qu'elle détectait effectivement une grossesse dans une majorité de cas, probablement grâce aux hormones de l'urine."
 },
 {
  "text": "Le papier toilette moderne en rouleau n'a été commercialisé qu'à la fin du XIXe siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que le papier toilette moderne en rouleau n'a été commercialisé qu'à la fin du XIXe siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20papier%20toilette%20moderne%20en%20rouleau%20n'a%20%C3%A9t%C3%A9%20commercialis%C3%A9%20qu'%C3%A0%20la%20fin%20du%20XIXe%20si%C3%A8cle%20%3F",
  "explanation": "Avant cela, on utilisait des feuilles, de la mousse, des chiffons, des épis de maïs ou du papier journal. En Chine, du papier était utilisé pour l'hygiène dès le VIe siècle. Le papier toilette en rouleau perforé a été breveté aux États-Unis en 1891."
 },
 {
  "text": "Napoléon a été attaqué par une horde de lapins lors d'une chasse organisée en son honneur.",
  "source": "Perplexity",
  "question": "Est-il vrai que Napoléon a été attaqué par une horde de lapins lors d'une chasse organisée en son honneur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Napol%C3%A9on%20a%20%C3%A9t%C3%A9%20attaqu%C3%A9%20par%20une%20horde%20de%20lapins%20lors%20d'une%20chasse%20organis%C3%A9e%20en%20son%20honneur%20%3F",
  "explanation": "Selon les mémoires du général Thiébault, une chasse aux lapins fut organisée pour Napoléon en 1807. Les lapins, des animaux domestiques lâchés pour l'occasion, se seraient précipités vers les invités au lieu de fuir, croyant qu'on venait les nourrir. L'anecdote est souvent racontée, mais repose sur un seul témoignage."
 },
 {
  "text": "L'Université d'Al Quaraouiyine, à Fès, fondée en 859 par Fatima al-Fihri, est considérée comme la plus ancienne université encore en activité.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Université d'Al Quaraouiyine, à Fès, fondée en 859 par Fatima al-Fihri, est considérée comme la plus ancienne université encore en activité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Universit%C3%A9%20d'Al%20Quaraouiyine%2C%20%C3%A0%20F%C3%A8s%2C%20fond%C3%A9e%20en%20859%20par%20Fatima%20al-Fihri%2C%20est%20consid%C3%A9r%C3%A9e%20comme%20la%20plus%20ancienne%20universit%C3%A9%20encore%20en%20activit%C3%A9%20%3F",
  "explanation": "Fatima al-Fihri a fondé une mosquée qui est devenue un centre d'enseignement majeur. L'UNESCO et le Guinness la considèrent comme le plus ancien établissement d'enseignement supérieur encore en activité. Elle enseignait la théologie, le droit, l'astronomie et les mathématiques."
 },
 {
  "text": "Les Vikings utilisaient peut-être des « pierres de soleil » pour naviguer par temps couvert.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Vikings utilisaient peut-être des « pierres de soleil » pour naviguer par temps couvert ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Vikings%20utilisaient%20peut-%C3%AAtre%20des%20%C2%AB%20pierres%20de%20soleil%20%C2%BB%20pour%20naviguer%20par%20temps%20couvert%20%3F",
  "explanation": "Les sagas mentionnent une sólarsteinn. Des chercheurs pensent qu'il s'agissait de spath d'Islande, un cristal de calcite qui polarise la lumière. En le tournant vers le ciel, on peut localiser le soleil même derrière les nuages. Un tel cristal a été retrouvé dans une épave anglaise du XVIe siècle."
 },
 {
  "text": "L'expression « tirer les marrons du feu » vient d'une fable de La Fontaine.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'expression « tirer les marrons du feu » vient d'une fable de La Fontaine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'expression%20%C2%AB%20tirer%20les%20marrons%20du%20feu%20%C2%BB%20vient%20d'une%20fable%20de%20La%20Fontaine%20%3F",
  "explanation": "Dans « Le Singe et le Chat » (1678), le singe Bertrand convainc le chat Raton de retirer des marrons qui grillent dans la cheminée. Le chat se brûle les pattes et le singe mange les marrons. À l'origine, l'expression désignait donc celui qui prend les risques au profit d'un autre ; elle est aujourd'hui souvent utilisée dans le sens inverse, pour celui qui en tire profit."
 },
 {
  "text": "Au Moyen Âge, de nombreuses personnes croyaient déjà que la Terre était ronde.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au Moyen Âge, de nombreuses personnes croyaient déjà que la Terre était ronde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20Moyen%20%C3%82ge%2C%20de%20nombreuses%20personnes%20croyaient%20d%C3%A9j%C3%A0%20que%20la%20Terre%20%C3%A9tait%20ronde%20%3F",
  "explanation": "L'idée d'une Terre plate au Moyen Âge est en grande partie un mythe du XIXe siècle. Les savants grecs, comme Ératosthène, avaient déjà mesuré la circonférence de la Terre. Les érudits médiévaux, comme Bède le Vénérable ou Thomas d'Aquin, enseignaient qu'elle était sphérique."
 },
 {
  "text": "Ératosthène a calculé la circonférence de la Terre vers 240 av. J.-C. avec une erreur probablement inférieure à 15 %.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'Ératosthène a calculé la circonférence de la Terre vers 240 av. J.-C. avec une erreur probablement inférieure à 15 % ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'%C3%89ratosth%C3%A8ne%20a%20calcul%C3%A9%20la%20circonf%C3%A9rence%20de%20la%20Terre%20vers%20240%20av.%20J.-C.%20avec%20une%20erreur%20probablement%20inf%C3%A9rieure%20%C3%A0%2015%20%25%20%3F",
  "explanation": "Ératosthène a remarqué qu'au solstice d'été, à Syène, le Soleil était à la verticale, alors qu'à Alexandrie il formait un angle d'environ 7 degrés. Connaissant la distance entre les deux villes, il en a déduit la circonférence de la Terre. La précision exacte dépend de la valeur du stade utilisé, mais elle était remarquable."
 },
 {
  "text": "La Grande Muraille de Chine n'est pas visible à l'œil nu depuis la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Grande Muraille de Chine n'est pas visible à l'œil nu depuis la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Grande%20Muraille%20de%20Chine%20n'est%20pas%20visible%20%C3%A0%20l'%C5%93il%20nu%20depuis%20la%20Lune%20%3F",
  "explanation": "La muraille est très longue, mais étroite, et de la même couleur que le paysage. Depuis la Lune, à environ 384 000 km, aucune construction humaine n'est visible à l'œil nu. Même depuis l'orbite basse, à environ 400 km, les astronautes ont du mal à la distinguer sans aide."
 },
 {
  "text": "La Grande Muraille de Chine mesure plus de 21 000 km en comptant toutes ses sections.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Grande Muraille de Chine mesure plus de 21 000 km en comptant toutes ses sections ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Grande%20Muraille%20de%20Chine%20mesure%20plus%20de%2021%20000%20km%20en%20comptant%20toutes%20ses%20sections%20%3F",
  "explanation": "Un relevé officiel chinois de 2012 a estimé la longueur totale de toutes les sections de la muraille, construites sur plus de deux millénaires, à 21 196 km. Elle comprend des murs, des tranchées et des barrières naturelles. Une grande partie est aujourd'hui en ruine."
 },
 {
  "text": "Les jeans ont été inventés pour les mineurs de la ruée vers l'or.",
  "source": "Perplexity",
  "question": "Est-il vrai que les jeans ont été inventés pour les mineurs de la ruée vers l'or ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20jeans%20ont%20%C3%A9t%C3%A9%20invent%C3%A9s%20pour%20les%20mineurs%20de%20la%20ru%C3%A9e%20vers%20l'or%20%3F",
  "explanation": "En 1873, le tailleur Jacob Davis et le commerçant Levi Strauss ont breveté un pantalon de travail en toile de coton renforcé par des rivets de cuivre aux points de tension. Ces pantalons étaient destinés aux travailleurs, notamment aux mineurs. Le mot « jean » viendrait de Gênes, et « denim » de Nîmes."
 },
 {
  "text": "Le mot « denim » viendrait de la ville de Nîmes : « serge de Nîmes ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « denim » viendrait de la ville de Nîmes : « serge de Nîmes » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20denim%20%C2%BB%20viendrait%20de%20la%20ville%20de%20N%C3%AEmes%20%3A%20%C2%AB%20serge%20de%20N%C3%AEmes%20%C2%BB%20%3F",
  "explanation": "La serge de Nîmes était une toile solide fabriquée dans le sud de la France. Selon l'explication la plus répandue, l'expression a donné « denim » en anglais. Le mot « jean » viendrait de Gênes, port d'où partait une toile de coton utilisée par les marins."
 },
 {
  "text": "Les premiers Jeux olympiques modernes, en 1896, ne comptaient aucune athlète féminine.",
  "source": "Perplexity",
  "question": "Est-il vrai que les premiers Jeux olympiques modernes, en 1896, ne comptaient aucune athlète féminine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premiers%20Jeux%20olympiques%20modernes%2C%20en%201896%2C%20ne%20comptaient%20aucune%20athl%C3%A8te%20f%C3%A9minine%20%3F",
  "explanation": "Pierre de Coubertin était opposé à la participation des femmes. Elles ont pu concourir pour la première fois aux Jeux de Paris en 1900, dans quelques disciplines comme le tennis et le golf. La joueuse de tennis Charlotte Cooper est devenue la première championne olympique."
 },
 {
  "text": "Le chocolat a longtemps été consommé uniquement comme boisson.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chocolat a longtemps été consommé uniquement comme boisson ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chocolat%20a%20longtemps%20%C3%A9t%C3%A9%20consomm%C3%A9%20uniquement%20comme%20boisson%20%3F",
  "explanation": "Les Mayas et les Aztèques consommaient le cacao en boisson épicée, souvent amère. Introduit en Europe au XVIe siècle, il a été sucré et bu chaud. La première tablette de chocolat à croquer a été produite en Angleterre en 1847 par la société Fry."
 },
 {
  "text": "Les fèves de cacao servaient de monnaie chez les Aztèques.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fèves de cacao servaient de monnaie chez les Aztèques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20f%C3%A8ves%20de%20cacao%20servaient%20de%20monnaie%20chez%20les%20Azt%C3%A8ques%20%3F",
  "explanation": "Les fèves de cacao avaient une grande valeur dans la Mésoamérique précolombienne. Elles servaient à payer des marchandises et des tributs. Des documents de l'époque coloniale donnent des équivalences : par exemple, une centaine de fèves pour un dindon."
 },
 {
  "text": "Les Romains avaient une déesse des égouts, Cloacina.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Romains avaient une déesse des égouts, Cloacina ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Romains%20avaient%20une%20d%C3%A9esse%20des%20%C3%A9gouts%2C%20Cloacina%20%3F",
  "explanation": "Cloacina était associée à la Cloaca Maxima, le grand égout de Rome, qui fonctionne en partie encore aujourd'hui. Elle était aussi liée à la purification. Un petit sanctuaire lui était dédié sur le Forum romain."
 },
 {
  "text": "La Cloaca Maxima, l'égout construit à Rome il y a plus de 2 500 ans, est toujours en partie utilisée.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Cloaca Maxima, l'égout construit à Rome il y a plus de 2 500 ans, est toujours en partie utilisée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Cloaca%20Maxima%2C%20l'%C3%A9gout%20construit%20%C3%A0%20Rome%20il%20y%20a%20plus%20de%202%20500%20ans%2C%20est%20toujours%20en%20partie%20utilis%C3%A9e%20%3F",
  "explanation": "Commencée vers le VIe siècle av. J.-C., elle drainait les marais du Forum vers le Tibre. Elle a été agrandie et recouverte au fil des siècles. Certaines parties servent encore à évacuer les eaux de pluie de la ville."
 },
 {
  "text": "Les pyramides de Gizeh n'ont pas été construites par des esclaves, mais par des ouvriers rémunérés.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pyramides de Gizeh n'ont pas été construites par des esclaves, mais par des ouvriers rémunérés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pyramides%20de%20Gizeh%20n'ont%20pas%20%C3%A9t%C3%A9%20construites%20par%20des%20esclaves%2C%20mais%20par%20des%20ouvriers%20r%C3%A9mun%C3%A9r%C3%A9s%20%3F",
  "explanation": "Les fouilles du village des ouvriers, près des pyramides, ont révélé des boulangeries, des brasseries, et des tombes d'ouvriers enterrés avec honneur. Ils recevaient des rations de pain, de bière et parfois de viande. L'idée d'esclaves vient en partie d'Hérodote et d'Hollywood."
 },
 {
  "text": "La première grève documentée de l'histoire a eu lieu en Égypte, vers 1155 av. J.-C.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première grève documentée de l'histoire a eu lieu en Égypte, vers 1155 av. J.-C ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20gr%C3%A8ve%20document%C3%A9e%20de%20l'histoire%20a%20eu%20lieu%20en%20%C3%89gypte%2C%20vers%201155%20av.%20J.-C%20%3F",
  "explanation": "Vers 1155 av. J.-C., sous Ramsès III, les artisans qui construisaient les tombes royales à Deir el-Médineh ont cessé le travail parce que leurs rations n'étaient pas livrées. Un papyrus, conservé à Turin, décrit cette grève, souvent citée comme la première documentée."
 },
 {
  "text": "La plus ancienne recette de bière connue a environ 3 800 ans : c'est un hymne à la déesse sumérienne Ninkasi.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus ancienne recette de bière connue a environ 3 800 ans : c'est un hymne à la déesse sumérienne Ninkasi ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20ancienne%20recette%20de%20bi%C3%A8re%20connue%20a%20environ%203%20800%20ans%20%3A%20c'est%20un%20hymne%20%C3%A0%20la%20d%C3%A9esse%20sum%C3%A9rienne%20Ninkasi%20%3F",
  "explanation": "L'hymne à Ninkasi, gravé sur une tablette d'argile, décrit les étapes de la fabrication de la bière à partir de pain d'orge. Des brasseurs modernes l'ont reconstituée. On trouve des traces de bière encore plus anciennes, il y a environ 13 000 ans."
 },
 {
  "text": "Le Titanic transportait environ 20 000 bouteilles de bière à son bord.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Titanic transportait environ 20 000 bouteilles de bière à son bord ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Titanic%20transportait%20environ%2020%20000%20bouteilles%20de%20bi%C3%A8re%20%C3%A0%20son%20bord%20%3F",
  "explanation": "Les listes d'approvisionnement du Titanic mentionnent environ 20 000 bouteilles de bière, 1 500 bouteilles de vin et 8 000 cigares, ainsi que des tonnes de viande et des dizaines de milliers d'œufs. Le paquebot pouvait accueillir plus de 2 200 passagers et membres d'équipage."
 },
 {
  "text": "La première photographie connue a nécessité un temps de pose de plusieurs heures, voire de plusieurs jours.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première photographie connue a nécessité un temps de pose de plusieurs heures, voire de plusieurs jours ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20photographie%20connue%20a%20n%C3%A9cessit%C3%A9%20un%20temps%20de%20pose%20de%20plusieurs%20heures%2C%20voire%20de%20plusieurs%20jours%20%3F",
  "explanation": "Nicéphore Niépce a réalisé « Point de vue du Gras » vers 1826-1827, depuis une fenêtre de sa propriété en Bourgogne. Il utilisait une plaque recouverte de bitume de Judée. Le temps de pose est estimé entre 8 heures et plusieurs jours."
 },
 {
  "text": "La Statue de la Liberté était à l'origine de couleur cuivre, avant de verdir à cause de l'oxydation.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Statue de la Liberté était à l'origine de couleur cuivre, avant de verdir à cause de l'oxydation ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Statue%20de%20la%20Libert%C3%A9%20%C3%A9tait%20%C3%A0%20l'origine%20de%20couleur%20cuivre%2C%20avant%20de%20verdir%20%C3%A0%20cause%20de%20l'oxydation%20%3F",
  "explanation": "La statue est recouverte de plaques de cuivre. Au contact de l'air et de l'humidité, le cuivre s'est couvert d'une couche de vert-de-gris, la patine, en une vingtaine d'années après son inauguration en 1886. Cette patine protège le métal."
 },
 {
  "text": "La Statue de la Liberté a une structure interne conçue par Gustave Eiffel.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Statue de la Liberté a une structure interne conçue par Gustave Eiffel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Statue%20de%20la%20Libert%C3%A9%20a%20une%20structure%20interne%20con%C3%A7ue%20par%20Gustave%20Eiffel%20%3F",
  "explanation": "Le sculpteur Auguste Bartholdi a conçu l'apparence de la statue, et Gustave Eiffel l'ossature métallique qui soutient les plaques de cuivre. Ce squelette flexible permet à la statue de supporter le vent. Elle a été offerte par la France aux États-Unis et inaugurée en 1886."
 },
 {
  "text": "Les premiers numéros de téléphone en France commençaient par le nom du central, comme « Danton » ou « Opéra ».",
  "source": "Perplexity",
  "question": "Est-il vrai que les premiers numéros de téléphone en France commençaient par le nom du central, comme « Danton » ou « Opéra » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premiers%20num%C3%A9ros%20de%20t%C3%A9l%C3%A9phone%20en%20France%20commen%C3%A7aient%20par%20le%20nom%20du%20central%2C%20comme%20%C2%AB%20Danton%20%C2%BB%20ou%20%C2%AB%20Op%C3%A9ra%20%C2%BB%20%3F",
  "explanation": "Avant l'automatisation, les numéros parisiens étaient composés d'un nom de central et de chiffres, comme « ÉLYsées 12-34 ». Les trois premières lettres correspondaient à des chiffres sur le cadran. Ce système a été abandonné en 1963 au profit de numéros entièrement numériques."
 },
 {
  "text": "Le premier SMS a été envoyé le 3 décembre 1992 et disait « Merry Christmas ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier SMS a été envoyé le 3 décembre 1992 et disait « Merry Christmas » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20SMS%20a%20%C3%A9t%C3%A9%20envoy%C3%A9%20le%203%20d%C3%A9cembre%201992%20et%20disait%20%C2%AB%20Merry%20Christmas%20%C2%BB%20%3F",
  "explanation": "L'ingénieur Neil Papworth l'a envoyé depuis un ordinateur vers le téléphone d'un dirigeant de Vodafone au Royaume-Uni. Le destinataire n'a pas pu répondre, car les téléphones ne permettaient pas encore d'écrire des messages. Ce SMS a été vendu aux enchères sous forme de NFT en 2021."
 },
 {
  "text": "La guerre de Cent Ans a duré 116 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la guerre de Cent Ans a duré 116 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20guerre%20de%20Cent%20Ans%20a%20dur%C3%A9%20116%20ans%20%3F",
  "explanation": "Le conflit entre la France et l'Angleterre a duré de 1337 à 1453, avec de longues périodes de trêve. Le nom « guerre de Cent Ans » a été donné par les historiens du XIXe siècle. Il regroupe une série de guerres pour la couronne de France."
 },
 {
  "text": "La guerre de Trente Ans, elle, a vraiment duré 30 ans, de 1618 à 1648.",
  "source": "Perplexity",
  "question": "Est-il vrai que la guerre de Trente Ans, elle, a vraiment duré 30 ans, de 1618 à 1648 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20guerre%20de%20Trente%20Ans%2C%20elle%2C%20a%20vraiment%20dur%C3%A9%2030%20ans%2C%20de%201618%20%C3%A0%201648%20%3F",
  "explanation": "Ce conflit a ravagé une grande partie de l'Europe centrale, notamment le Saint-Empire romain germanique. Il a fait des millions de morts, à cause des combats, des famines et des épidémies. Il s'est terminé par les traités de Westphalie."
 },
 {
  "text": "Le mot « salaire » viendrait du sel.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « salaire » viendrait du sel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20salaire%20%C2%BB%20viendrait%20du%20sel%20%3F",
  "explanation": "En latin, salarium était lié au sel, et désignait une somme versée aux soldats romains. L'explication selon laquelle ils étaient payés en sel est souvent racontée, mais elle est discutée : il s'agissait peut-être d'une allocation pour acheter du sel, ou d'un lien avec la via Salaria."
 },
 {
  "text": "Le premier billet de banque a été utilisé en Chine, au VIIe siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier billet de banque a été utilisé en Chine, au VIIe siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20billet%20de%20banque%20a%20%C3%A9t%C3%A9%20utilis%C3%A9%20en%20Chine%2C%20au%20VIIe%20si%C3%A8cle%20%3F",
  "explanation": "Sous la dynastie Tang, des marchands utilisaient des certificats de dépôt pour éviter de transporter de lourdes pièces. Sous la dynastie Song, au XIe siècle, l'État a commencé à émettre officiellement de la monnaie papier. L'Europe n'a adopté les billets qu'au XVIIe siècle."
 },
 {
  "text": "Les premiers distributeurs automatiques de billets sont apparus en 1967, à Londres.",
  "source": "Perplexity",
  "question": "Est-il vrai que les premiers distributeurs automatiques de billets sont apparus en 1967, à Londres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premiers%20distributeurs%20automatiques%20de%20billets%20sont%20apparus%20en%201967%2C%20%C3%A0%20Londres%20%3F",
  "explanation": "Le premier distributeur a été installé par la banque Barclays le 27 juin 1967. Il utilisait des chèques imprégnés de carbone 14, légèrement radioactif, lus par la machine. L'acteur Reg Varney a été le premier à l'utiliser."
 },
 {
  "text": "Les machines à écrire ont un clavier QWERTY qui aurait été conçu pour éviter que les tiges ne se bloquent.",
  "source": "Perplexity",
  "question": "Est-il vrai que les machines à écrire ont un clavier QWERTY qui aurait été conçu pour éviter que les tiges ne se bloquent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20machines%20%C3%A0%20%C3%A9crire%20ont%20un%20clavier%20QWERTY%20qui%20aurait%20%C3%A9t%C3%A9%20con%C3%A7u%20pour%20%C3%A9viter%20que%20les%20tiges%20ne%20se%20bloquent%20%3F",
  "explanation": "Christopher Latham Sholes a conçu le clavier QWERTY dans les années 1870. Selon l'explication la plus répandue, il a écarté les lettres fréquemment utilisées ensemble pour éviter que les tiges ne s'emmêlent. Des historiens nuancent : la disposition aurait aussi été influencée par les besoins des télégraphistes."
 },
 {
  "text": "Le clavier AZERTY a été adopté en France au début du XXe siècle, sans jamais devenir une norme officielle jusqu'en 2019.",
  "source": "Perplexity",
  "question": "Est-il vrai que le clavier AZERTY a été adopté en France au début du XXe siècle, sans jamais devenir une norme officielle jusqu'en 2019 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20clavier%20AZERTY%20a%20%C3%A9t%C3%A9%20adopt%C3%A9%20en%20France%20au%20d%C3%A9but%20du%20XXe%20si%C3%A8cle%2C%20sans%20jamais%20devenir%20une%20norme%20officielle%20jusqu'en%202019%20%3F",
  "explanation": "Le clavier AZERTY dérive du QWERTY, adapté aux langues française et belge. Il ne facilitait pas la saisie des majuscules accentuées, comme É ou Ç. En 2019, l'Afnor a publié une norme pour un nouveau clavier AZERTY amélioré, qui reste peu utilisé."
 },
 {
  "text": "Les premières lunettes ont été inventées en Italie vers la fin du XIIIe siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les premières lunettes ont été inventées en Italie vers la fin du XIIIe siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premi%C3%A8res%20lunettes%20ont%20%C3%A9t%C3%A9%20invent%C3%A9es%20en%20Italie%20vers%20la%20fin%20du%20XIIIe%20si%C3%A8cle%20%3F",
  "explanation": "Les premières mentions de lunettes datent d'environ 1285-1290, près de Pise ou de Venise, où les verriers fabriquaient du verre de qualité. Elles corrigeaient la presbytie et se tenaient sur le nez sans branches. Les branches sont apparues au XVIIIe siècle."
 },
 {
  "text": "Les branches de lunettes ne sont apparues qu'au XVIIIe siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les branches de lunettes ne sont apparues qu'au XVIIIe siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20branches%20de%20lunettes%20ne%20sont%20apparues%20qu'au%20XVIIIe%20si%C3%A8cle%20%3F",
  "explanation": "Pendant des siècles, les lunettes étaient pincées sur le nez ou tenues à la main. Des branches rigides passant derrière les oreilles ont été popularisées vers 1720-1730, notamment par l'opticien londonien Edward Scarlett."
 },
 {
  "text": "Le premier passager d'une montgolfière n'était pas un humain, mais un mouton, un canard et un coq.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier passager d'une montgolfière n'était pas un humain, mais un mouton, un canard et un coq ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20passager%20d'une%20montgolfi%C3%A8re%20n'%C3%A9tait%20pas%20un%20humain%2C%20mais%20un%20mouton%2C%20un%20canard%20et%20un%20coq%20%3F",
  "explanation": "Le 19 septembre 1783, à Versailles, devant Louis XVI, les frères Montgolfier ont fait voler un ballon transportant un mouton, un canard et un coq. Les animaux ont survécu au vol d'environ 8 minutes. Le premier vol habité a eu lieu deux mois plus tard."
 },
 {
  "text": "Le premier vol humain en ballon libre a eu lieu au-dessus de Paris le 21 novembre 1783.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier vol humain en ballon libre a eu lieu au-dessus de Paris le 21 novembre 1783 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20vol%20humain%20en%20ballon%20libre%20a%20eu%20lieu%20au-dessus%20de%20Paris%20le%2021%20novembre%201783%20%3F",
  "explanation": "Jean-François Pilâtre de Rozier et le marquis d'Arlandes ont décollé du château de la Muette, dans une montgolfière à air chaud. Ils ont parcouru environ 9 km en 25 minutes environ, avant d'atterrir près de la Butte-aux-Cailles."
 },
 {
  "text": "La tour Eiffel a été le plus haut bâtiment du monde pendant 41 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tour Eiffel a été le plus haut bâtiment du monde pendant 41 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tour%20Eiffel%20a%20%C3%A9t%C3%A9%20le%20plus%20haut%20b%C3%A2timent%20du%20monde%20pendant%2041%20ans%20%3F",
  "explanation": "Inaugurée en 1889, la tour Eiffel mesurait environ 300 mètres. Elle est restée le plus haut édifice du monde jusqu'à l'achèvement du Chrysler Building à New York en 1930. Avec ses antennes, elle mesure aujourd'hui environ 330 mètres."
 },
 {
  "text": "La tour Eiffel grandit d'environ 15 cm en été, sous l'effet de la chaleur.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tour Eiffel grandit d'environ 15 cm en été, sous l'effet de la chaleur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tour%20Eiffel%20grandit%20d'environ%2015%20cm%20en%20%C3%A9t%C3%A9%2C%20sous%20l'effet%20de%20la%20chaleur%20%3F",
  "explanation": "Le fer se dilate quand il chauffe. Selon la température, le sommet de la tour peut s'élever d'environ 15 cm et s'incliner légèrement du côté opposé au soleil. Le phénomène est réversible : elle reprend sa taille en refroidissant."
 },
 {
  "text": "Le Louvre était à l'origine une forteresse construite vers 1190.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Louvre était à l'origine une forteresse construite vers 1190 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Louvre%20%C3%A9tait%20%C3%A0%20l'origine%20une%20forteresse%20construite%20vers%201190%20%3F",
  "explanation": "Le roi Philippe Auguste a fait construire une forteresse pour protéger Paris. Transformé en palais royal au XIVe siècle, puis agrandi au fil des siècles, le Louvre est devenu un musée en 1793. On peut encore voir les fondations de la forteresse médiévale dans ses sous-sols."
 },
 {
  "text": "Le dernier duel judiciaire autorisé en France a eu lieu en 1547.",
  "source": "Perplexity",
  "question": "Est-il vrai que le dernier duel judiciaire autorisé en France a eu lieu en 1547 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20dernier%20duel%20judiciaire%20autoris%C3%A9%20en%20France%20a%20eu%20lieu%20en%201547%20%3F",
  "explanation": "Le « coup de Jarnac » fait référence au duel du 10 juillet 1547 entre Guy Chabot de Jarnac et François de Vivonne, devant le roi Henri II. Jarnac a frappé son adversaire au jarret, un coup inattendu mais légal. L'expression désigne aujourd'hui un coup habile et décisif, souvent perçu à tort comme déloyal."
 },
 {
  "text": "Le système métrique a été créé pendant la Révolution française pour remplacer des centaines d'unités locales.",
  "source": "Perplexity",
  "question": "Est-il vrai que le système métrique a été créé pendant la Révolution française pour remplacer des centaines d'unités locales ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20syst%C3%A8me%20m%C3%A9trique%20a%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9%20pendant%20la%20R%C3%A9volution%20fran%C3%A7aise%20pour%20remplacer%20des%20centaines%20d'unit%C3%A9s%20locales%20%3F",
  "explanation": "Avant la Révolution, la France utilisait des centaines d'unités différentes selon les régions. Le mètre a été défini en 1791 comme une fraction de la distance entre le pôle Nord et l'équateur. Les astronomes Delambre et Méchain ont mesuré l'arc entre Dunkerque et Barcelone pour le calculer."
 },
 {
  "text": "Le mot « sabotage » viendrait des sabots, mais l'histoire des ouvriers jetant leurs sabots dans les machines est probablement une légende.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « sabotage » viendrait des sabots, mais l'histoire des ouvriers jetant leurs sabots dans les machines est probablement une légende ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20sabotage%20%C2%BB%20viendrait%20des%20sabots%2C%20mais%20l'histoire%20des%20ouvriers%20jetant%20leurs%20sabots%20dans%20les%20machines%20est%20probablement%20une%20l%C3%A9gende%20%3F",
  "explanation": "Le mot sabotage est attesté à la fin du XIXe siècle dans le sens de travail mal fait, venant du verbe saboter, « faire quelque chose grossièrement ». L'image d'ouvriers jetant leurs sabots dans les machines est une explication populaire, mais peu documentée."
 },
 {
  "text": "Les Romains utilisaient du plomb pour sucrer le vin.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Romains utilisaient du plomb pour sucrer le vin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Romains%20utilisaient%20du%20plomb%20pour%20sucrer%20le%20vin%20%3F",
  "explanation": "Les Romains faisaient réduire du jus de raisin dans des marmites en plomb pour obtenir un sirop appelé sapa ou defrutum. Ce sirop, riche en acétate de plomb au goût sucré, était utilisé pour sucrer et conserver le vin. Des historiens pensent que cela a pu causer des intoxications au plomb."
 },
 {
  "text": "Les Incas tenaient leurs comptes avec des cordelettes nouées, les quipus.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Incas tenaient leurs comptes avec des cordelettes nouées, les quipus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Incas%20tenaient%20leurs%20comptes%20avec%20des%20cordelettes%20nou%C3%A9es%2C%20les%20quipus%20%3F",
  "explanation": "Les quipus étaient des cordelettes de coton ou de laine, dont la couleur, la position des nœuds et leur type enregistraient des nombres. Ils servaient aux recensements, aux impôts et peut-être à des récits. Leur déchiffrement complet reste un défi pour les chercheurs."
 },
 {
  "text": "Le plus ancien instrument de musique connu est une flûte en os vieille d'environ 40 000 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus ancien instrument de musique connu est une flûte en os vieille d'environ 40 000 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20ancien%20instrument%20de%20musique%20connu%20est%20une%20fl%C3%BBte%20en%20os%20vieille%20d'environ%2040%20000%20ans%20%3F",
  "explanation": "Des flûtes taillées dans des os de vautour et dans de l'ivoire de mammouth ont été retrouvées dans des grottes du Jura souabe, en Allemagne. Datées d'environ 40 000 ans, elles montrent que la musique faisait déjà partie de la vie des premiers humains modernes en Europe."
 },
 {
  "text": "Les grottes de Lascaux ont été découvertes en 1940 par des adolescents qui cherchaient leur chien… ou un trésor.",
  "source": "Perplexity",
  "question": "Est-il vrai que les grottes de Lascaux ont été découvertes en 1940 par des adolescents qui cherchaient leur chien… ou un trésor ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20grottes%20de%20Lascaux%20ont%20%C3%A9t%C3%A9%20d%C3%A9couvertes%20en%201940%20par%20des%20adolescents%20qui%20cherchaient%20leur%20chien%E2%80%A6%20ou%20un%20tr%C3%A9sor%20%3F",
  "explanation": "Le 12 septembre 1940, Marcel Ravidat et trois camarades ont exploré une cavité près de Montignac, en Dordogne. Ils ont découvert des peintures vieilles d'environ 17 000 ans. La grotte a été fermée au public en 1963 pour protéger les peintures, et des répliques ont été construites."
 },
 {
  "text": "Le mot « bistrot » ne viendrait pas des soldats russes criant « bystro » en 1814.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « bistrot » ne viendrait pas des soldats russes criant « bystro » en 1814 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20bistrot%20%C2%BB%20ne%20viendrait%20pas%20des%20soldats%20russes%20criant%20%C2%AB%20bystro%20%C2%BB%20en%201814%20%3F",
  "explanation": "Selon une légende populaire, les cosaques occupant Paris en 1814 réclamaient d'être servis « bystro », vite en russe. Les linguistes réfutent cette origine : le mot bistrot n'apparaît qu'à la fin du XIXe siècle. Son origine reste incertaine, peut-être liée à un mot régional."
 },
 {
  "text": "Les premiers Jeux olympiques antiques auraient eu lieu en 776 av. J.-C., avec une seule épreuve : une course d'environ 190 mètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que les premiers Jeux olympiques antiques auraient eu lieu en 776 av. J.-C., avec une seule épreuve : une course d'environ 190 mètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premiers%20Jeux%20olympiques%20antiques%20auraient%20eu%20lieu%20en%20776%20av.%20J.-C.%2C%20avec%20une%20seule%20%C3%A9preuve%20%3A%20une%20course%20d'environ%20190%20m%C3%A8tres%20%3F",
  "explanation": "Selon la tradition, les premiers Jeux d'Olympie comportaient une seule épreuve, le stadion, une course d'une longueur de stade. D'autres disciplines ont été ajoutées par la suite : lutte, pugilat, pentathlon, courses de chars. Les Jeux antiques ont duré plus de mille ans."
 },
 {
  "text": "Les carottes n'ont pas toujours été orange : les premières carottes cultivées étaient violettes ou jaunes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les carottes n'ont pas toujours été orange : les premières carottes cultivées étaient violettes ou jaunes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20carottes%20n'ont%20pas%20toujours%20%C3%A9t%C3%A9%20orange%20%3A%20les%20premi%C3%A8res%20carottes%20cultiv%C3%A9es%20%C3%A9taient%20violettes%20ou%20jaunes%20%3F",
  "explanation": "Les carottes cultivées en Asie centrale il y a plus de mille ans étaient violettes ou jaunes. Les variétés orange se sont répandues à partir du XVIIe siècle, notamment grâce aux sélections des cultivateurs des Pays-Bas. L'histoire selon laquelle elles auraient été créées pour honorer la maison d'Orange est une légende."
 },
 {
  "text": "Les cacahuètes ne sont pas des noix : ce sont des légumineuses, comme les petits pois.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cacahuètes ne sont pas des noix : ce sont des légumineuses, comme les petits pois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cacahu%C3%A8tes%20ne%20sont%20pas%20des%20noix%20%3A%20ce%20sont%20des%20l%C3%A9gumineuses%2C%20comme%20les%20petits%20pois%20%3F",
  "explanation": "L'arachide appartient à la famille des Fabacées, comme les haricots et les lentilles. Après la floraison, la tige de la fleur s'allonge et s'enfonce dans le sol, où la gousse se développe. C'est pourquoi on l'appelle aussi « pois de terre »."
 },
 {
  "text": "Les ananas mettent environ 18 à 24 mois à pousser.",
  "source": "Perplexity",
  "question": "Est-il vrai que les ananas mettent environ 18 à 24 mois à pousser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20ananas%20mettent%20environ%2018%20%C3%A0%2024%20mois%20%C3%A0%20pousser%20%3F",
  "explanation": "Un plant d'ananas produit généralement un seul fruit par cycle, après environ un an et demi à deux ans. Le fruit est en fait composé de dizaines de petites baies soudées, une par fleur. On peut faire repousser un plant à partir de la couronne de feuilles."
 },
 {
  "text": "Le poivre noir, le poivre blanc et le poivre vert viennent de la même plante.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poivre noir, le poivre blanc et le poivre vert viennent de la même plante ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poivre%20noir%2C%20le%20poivre%20blanc%20et%20le%20poivre%20vert%20viennent%20de%20la%20m%C3%AAme%20plante%20%3F",
  "explanation": "Ce sont les fruits de la même liane, Piper nigrum, récoltés à des stades différents. Le poivre vert est cueilli avant maturité, le noir est récolté vert puis séché au soleil, et le blanc est le grain mûr débarrassé de son enveloppe. Le « poivre rose », lui, vient d'un arbre différent."
 },
 {
  "text": "Le piment ne brûle pas vraiment : la capsaïcine trompe les récepteurs de la chaleur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le piment ne brûle pas vraiment : la capsaïcine trompe les récepteurs de la chaleur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20piment%20ne%20br%C3%BBle%20pas%20vraiment%20%3A%20la%20capsa%C3%AFcine%20trompe%20les%20r%C3%A9cepteurs%20de%20la%20chaleur%20%3F",
  "explanation": "La capsaïcine active le récepteur TRPV1, qui détecte normalement les températures supérieures à environ 43 °C. Le cerveau interprète ce signal comme une brûlure, alors qu'il n'y a aucune chaleur réelle. La découverte de ce récepteur a contribué au prix Nobel de médecine 2021."
 },
 {
  "text": "Les oiseaux ne sentent pas le piquant des piments.",
  "source": "Perplexity",
  "question": "Est-il vrai que les oiseaux ne sentent pas le piquant des piments ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20oiseaux%20ne%20sentent%20pas%20le%20piquant%20des%20piments%20%3F",
  "explanation": "Le récepteur des oiseaux équivalent à TRPV1 n'est pas sensible à la capsaïcine. Les oiseaux peuvent donc manger des piments sans gêne et disperser leurs graines, qui traversent leur tube digestif intactes. Les mammifères, qui broient les graines, sont au contraire repoussés."
 },
 {
  "text": "Le menthol ne refroidit pas : il active les récepteurs du froid.",
  "source": "Perplexity",
  "question": "Est-il vrai que le menthol ne refroidit pas : il active les récepteurs du froid ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20menthol%20ne%20refroidit%20pas%20%3A%20il%20active%20les%20r%C3%A9cepteurs%20du%20froid%20%3F",
  "explanation": "Le menthol se lie au récepteur TRPM8, qui détecte normalement le froid. Le cerveau perçoit alors une sensation de fraîcheur sans changement réel de température. C'est l'équivalent inverse de l'effet de la capsaïcine du piment."
 },
 {
  "text": "Le riz est l'aliment de base de plus de la moitié de la population mondiale.",
  "source": "Perplexity",
  "question": "Est-il vrai que le riz est l'aliment de base de plus de la moitié de la population mondiale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20riz%20est%20l'aliment%20de%20base%20de%20plus%20de%20la%20moiti%C3%A9%20de%20la%20population%20mondiale%20%3F",
  "explanation": "Le riz fournit une grande part des calories consommées en Asie, en Afrique et en Amérique latine. La Chine et l'Inde en sont les premiers producteurs. Il existe des dizaines de milliers de variétés, et sa culture remonte à environ 9 000 ans."
 },
 {
  "text": "Les pommes de terre ont été considérées avec méfiance en France jusqu'au XVIIIe siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pommes de terre ont été considérées avec méfiance en France jusqu'au XVIIIe siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pommes%20de%20terre%20ont%20%C3%A9t%C3%A9%20consid%C3%A9r%C3%A9es%20avec%20m%C3%A9fiance%20en%20France%20jusqu'au%20XVIIIe%20si%C3%A8cle%20%3F",
  "explanation": "Venue d'Amérique du Sud, la pomme de terre était souvent réservée au bétail en France. Le pharmacien Antoine Parmentier a contribué à sa diffusion après avoir constaté sa valeur nutritive. Selon une anecdote, il aurait fait garder un champ le jour pour donner envie aux Parisiens de venir en voler la nuit."
 },
 {
  "text": "Le sel de mer et le sel gemme sont le même composé : du chlorure de sodium.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sel de mer et le sel gemme sont le même composé : du chlorure de sodium ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sel%20de%20mer%20et%20le%20sel%20gemme%20sont%20le%20m%C3%AAme%20compos%C3%A9%20%3A%20du%20chlorure%20de%20sodium%20%3F",
  "explanation": "Le sel de mer est obtenu par évaporation de l'eau de mer, le sel gemme est extrait de mines formées par l'évaporation d'anciennes mers. Leur goût peut différer légèrement selon les traces de minéraux, mais leur composition est très majoritairement la même."
 },
 {
  "text": "Le citron contient moins de sucre que la fraise, mais plus d'acide : c'est pourquoi il paraît moins sucré.",
  "source": "Perplexity",
  "question": "Est-il vrai que le citron contient moins de sucre que la fraise, mais plus d'acide : c'est pourquoi il paraît moins sucré ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20citron%20contient%20moins%20de%20sucre%20que%20la%20fraise%2C%20mais%20plus%20d'acide%20%3A%20c'est%20pourquoi%20il%20para%C3%AEt%20moins%20sucr%C3%A9%20%3F",
  "explanation": "Le citron contient environ 2 à 3 g de sucre pour 100 g, contre environ 5 à 7 g pour la fraise. Son acide citrique masque encore davantage la saveur sucrée. Le goût perçu dépend de l'équilibre entre sucres et acides."
 },
 {
  "text": "Le pop-corn éclate parce que l'eau à l'intérieur du grain se transforme en vapeur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pop-corn éclate parce que l'eau à l'intérieur du grain se transforme en vapeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pop-corn%20%C3%A9clate%20parce%20que%20l'eau%20%C3%A0%20l'int%C3%A9rieur%20du%20grain%20se%20transforme%20en%20vapeur%20%3F",
  "explanation": "Chaque grain de maïs à éclater contient un peu d'eau dans son amidon. En chauffant, l'eau se vaporise et la pression augmente jusqu'à faire éclater l'enveloppe, vers 180 °C. L'amidon se dilate alors en mousse qui durcit en refroidissant."
 },
 {
  "text": "Les amandes, les pêches, les cerises et les pommes appartiennent à la même famille que la rose.",
  "source": "Perplexity",
  "question": "Est-il vrai que les amandes, les pêches, les cerises et les pommes appartiennent à la même famille que la rose ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20amandes%2C%20les%20p%C3%AAches%2C%20les%20cerises%20et%20les%20pommes%20appartiennent%20%C3%A0%20la%20m%C3%AAme%20famille%20que%20la%20rose%20%3F",
  "explanation": "Ces fruits font partie de la famille des Rosacées, avec les poires, les fraises, les framboises et les prunes. Les amandes sont les graines d'un fruit proche de la pêche. Les fleurs de ces arbres ressemblent souvent à de petites roses simples."
 },
 {
  "text": "Les noyaux d'abricot contiennent un composé qui peut libérer du cyanure dans le corps.",
  "source": "Perplexity",
  "question": "Est-il vrai que les noyaux d'abricot contiennent un composé qui peut libérer du cyanure dans le corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20noyaux%20d'abricot%20contiennent%20un%20compos%C3%A9%20qui%20peut%20lib%C3%A9rer%20du%20cyanure%20dans%20le%20corps%20%3F",
  "explanation": "L'amande du noyau d'abricot contient de l'amygdaline, qui se transforme en cyanure dans le corps. En manger en grande quantité peut provoquer une intoxication. Les autorités sanitaires européennes recommandent de limiter très fortement leur consommation."
 },
 {
  "text": "Le chou-fleur, le brocoli romanesco et la fougère ont des formes fractales.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chou-fleur, le brocoli romanesco et la fougère ont des formes fractales ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chou-fleur%2C%20le%20brocoli%20romanesco%20et%20la%20foug%C3%A8re%20ont%20des%20formes%20fractales%20%3F",
  "explanation": "Une forme fractale se répète à différentes échelles. Le romanesco est composé de pointes, elles-mêmes formées de pointes plus petites, organisées en spirales. Le nombre de spirales suit souvent la suite de Fibonacci, comme dans les pommes de pin et les tournesols."
 },
 {
  "text": "Les graines de tournesol sont disposées en spirales qui suivent la suite de Fibonacci.",
  "source": "Perplexity",
  "question": "Est-il vrai que les graines de tournesol sont disposées en spirales qui suivent la suite de Fibonacci ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20graines%20de%20tournesol%20sont%20dispos%C3%A9es%20en%20spirales%20qui%20suivent%20la%20suite%20de%20Fibonacci%20%3F",
  "explanation": "Les graines d'un tournesol forment deux séries de spirales dans des sens opposés, souvent en nombres consécutifs de la suite de Fibonacci, comme 34 et 55. Cette disposition permet de placer un maximum de graines dans un espace limité."
 },
 {
  "text": "Le bambou peut pousser de près d'un mètre en une journée.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bambou peut pousser de près d'un mètre en une journée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20bambou%20peut%20pousser%20de%20pr%C3%A8s%20d'un%20m%C3%A8tre%20en%20une%20journ%C3%A9e%20%3F",
  "explanation": "Certaines espèces de bambou font partie des plantes à la croissance la plus rapide. Des pousses ont été mesurées à près de 90 cm en 24 heures. Le bambou est une herbe, pas un arbre, et certaines espèces fleurissent toutes en même temps, à des intervalles de plusieurs décennies."
 },
 {
  "text": "Certaines espèces de bambous fleurissent toutes en même temps, une fois tous les 60 à 120 ans, puis meurent.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines espèces de bambous fleurissent toutes en même temps, une fois tous les 60 à 120 ans, puis meurent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20esp%C3%A8ces%20de%20bambous%20fleurissent%20toutes%20en%20m%C3%AAme%20temps%2C%20une%20fois%20tous%20les%2060%20%C3%A0%20120%20ans%2C%20puis%20meurent%20%3F",
  "explanation": "Des bambous comme Phyllostachys bambusoides fleurissent de façon synchronisée dans le monde entier, même transplantés loin de leur région d'origine. Après la floraison, les plants meurent. Ce phénomène peut provoquer une explosion des populations de rongeurs nourris par les graines."
 },
 {
  "text": "Les arbres d'une forêt peuvent échanger des nutriments grâce à un réseau de champignons souterrains.",
  "source": "Perplexity",
  "question": "Est-il vrai que les arbres d'une forêt peuvent échanger des nutriments grâce à un réseau de champignons souterrains ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20arbres%20d'une%20for%C3%AAt%20peuvent%20%C3%A9changer%20des%20nutriments%20gr%C3%A2ce%20%C3%A0%20un%20r%C3%A9seau%20de%20champignons%20souterrains%20%3F",
  "explanation": "Les racines de nombreux arbres sont associées à des champignons mycorhiziens. Ces champignons échangent des nutriments avec les arbres et pourraient faire transiter des ressources d'un arbre à l'autre. L'image du « Wood Wide Web » est populaire, mais l'ampleur réelle de ces échanges est débattue par les chercheurs."
 },
 {
  "text": "Le plus grand arbre du monde par le volume est un séquoia géant surnommé General Sherman.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus grand arbre du monde par le volume est un séquoia géant surnommé General Sherman ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20grand%20arbre%20du%20monde%20par%20le%20volume%20est%20un%20s%C3%A9quoia%20g%C3%A9ant%20surnomm%C3%A9%20General%20Sherman%20%3F",
  "explanation": "Situé en Californie, General Sherman mesure environ 84 mètres de haut et a un volume d'environ 1 500 m³. Il aurait entre 2 000 et 2 500 ans. Le plus haut arbre connu est un séquoia à feuilles d'if, surnommé Hyperion, d'environ 116 mètres."
 },
 {
  "text": "Les plantes carnivores comme la dionée comptent : il faut deux contacts en moins de 30 secondes pour que le piège se referme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les plantes carnivores comme la dionée comptent : il faut deux contacts en moins de 30 secondes pour que le piège se referme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20plantes%20carnivores%20comme%20la%20dion%C3%A9e%20comptent%20%3A%20il%20faut%20deux%20contacts%20en%20moins%20de%2030%20secondes%20pour%20que%20le%20pi%C3%A8ge%20se%20referme%20%3F",
  "explanation": "Les feuilles de la dionée attrape-mouche portent des poils sensibles. Un premier contact ne suffit pas. Un second contact en quelques secondes déclenche la fermeture rapide. Cela évite que le piège se referme pour une goutte de pluie. Une étude a même montré qu'elle compte jusqu'à cinq stimulations pour commencer la digestion."
 },
 {
  "text": "Les tomates, poivrons et aubergines viennent des Amériques : avant Christophe Colomb, la cuisine italienne n'avait pas de sauce tomate.",
  "source": "Perplexity",
  "question": "Est-il vrai que les tomates, poivrons et aubergines viennent des Amériques : avant Christophe Colomb, la cuisine italienne n'avait pas de sauce tomate ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20tomates%2C%20poivrons%20et%20aubergines%20viennent%20des%20Am%C3%A9riques%20%3A%20avant%20Christophe%20Colomb%2C%20la%20cuisine%20italienne%20n'avait%20pas%20de%20sauce%20tomate%20%3F",
  "explanation": "La tomate a été rapportée en Europe au XVIe siècle. En Italie, elle n'est devenue courante dans la cuisine qu'au XVIIIe et XIXe siècle. La pomme de terre, le maïs, le cacao, le piment et la vanille viennent aussi des Amériques."
 },
 {
  "text": "La vanille est la gousse d'une orchidée, pollinisée à la main presque partout dans le monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que la vanille est la gousse d'une orchidée, pollinisée à la main presque partout dans le monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20vanille%20est%20la%20gousse%20d'une%20orchid%C3%A9e%2C%20pollinis%C3%A9e%20%C3%A0%20la%20main%20presque%20partout%20dans%20le%20monde%20%3F",
  "explanation": "La vanille vient d'une orchidée originaire du Mexique, pollinisée naturellement par des abeilles locales. Ailleurs, il faut polliniser chaque fleur à la main. La technique a été mise au point en 1841 à La Réunion par Edmond Albius, alors âgé de 12 ans. C'est pourquoi la vanille est l'une des épices les plus chères."
 },
 {
  "text": "Le safran, la vanille et la cardamome sont parmi les épices les plus chères du monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le safran, la vanille et la cardamome sont parmi les épices les plus chères du monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20safran%2C%20la%20vanille%20et%20la%20cardamome%20sont%20parmi%20les%20%C3%A9pices%20les%20plus%20ch%C3%A8res%20du%20monde%20%3F",
  "explanation": "Leur prix vient de la récolte manuelle : stigmates de crocus pour le safran, pollinisation et séchage de gousses pour la vanille, cueillette de capsules pour la cardamome. Les rendements sont faibles et le travail très long."
 },
 {
  "text": "Le mot « barbecue » viendrait d'une langue des Caraïbes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « barbecue » viendrait d'une langue des Caraïbes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20barbecue%20%C2%BB%20viendrait%20d'une%20langue%20des%20Cara%C3%AFbes%20%3F",
  "explanation": "Le mot viendrait de « barbacoa », emprunté par les Espagnols à la langue des Taïnos, peuple des Caraïbes. Il désignait une structure en bois servant à cuire ou fumer la viande. L'explication par « de la barbe à la queue » est une étymologie populaire sans fondement."
 },
 {
  "text": "Le mot « ouragan » vient du nom d'un dieu des tempêtes des Caraïbes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « ouragan » vient du nom d'un dieu des tempêtes des Caraïbes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20ouragan%20%C2%BB%20vient%20du%20nom%20d'un%20dieu%20des%20temp%C3%AAtes%20des%20Cara%C3%AFbes%20%3F",
  "explanation": "Le mot « huracán » a été emprunté par les Espagnols aux langues des Caraïbes, où il était lié à une divinité des tempêtes. Il a donné « ouragan » en français et « hurricane » en anglais. Le mot « Hunrakan » apparaît aussi chez les Mayas."
 },
 {
  "text": "Le mot « algorithme » vient du nom d'un mathématicien du IXe siècle, al-Khwârizmî.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « algorithme » vient du nom d'un mathématicien du IXe siècle, al-Khwârizmî ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20algorithme%20%C2%BB%20vient%20du%20nom%20d'un%20math%C3%A9maticien%20du%20IXe%20si%C3%A8cle%2C%20al-Khw%C3%A2rizm%C3%AE%20%3F",
  "explanation": "Muhammad ibn Musa al-Khwârizmî travaillait à la Maison de la sagesse de Bagdad. Ses ouvrages, traduits en latin, ont diffusé en Europe le système décimal et le calcul. Son nom latinisé, Algoritmi, a donné « algorithme », et le titre d'un de ses livres, al-jabr, a donné « algèbre »."
 },
 {
  "text": "Le français compte environ 60 000 mots dans un dictionnaire usuel, mais la plupart des gens en utilisent quelques milliers au quotidien.",
  "source": "Perplexity",
  "question": "Est-il vrai que le français compte environ 60 000 mots dans un dictionnaire usuel, mais la plupart des gens en utilisent quelques milliers au quotidien ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fran%C3%A7ais%20compte%20environ%2060%20000%20mots%20dans%20un%20dictionnaire%20usuel%2C%20mais%20la%20plupart%20des%20gens%20en%20utilisent%20quelques%20milliers%20au%20quotidien%20%3F",
  "explanation": "Un dictionnaire courant comme le Petit Robert compte environ 60 000 mots. Le vocabulaire actif d'un adulte est estimé entre quelques milliers et environ 20 000 mots selon les définitions. On comprend beaucoup plus de mots qu'on n'en utilise."
 },
 {
  "text": "Le mot le plus long du dictionnaire français est souvent cité comme « anticonstitutionnellement », avec 25 lettres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot le plus long du dictionnaire français est souvent cité comme « anticonstitutionnellement », avec 25 lettres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20le%20plus%20long%20du%20dictionnaire%20fran%C3%A7ais%20est%20souvent%20cit%C3%A9%20comme%20%C2%AB%20anticonstitutionnellement%20%C2%BB%2C%20avec%2025%20lettres%20%3F",
  "explanation": "« Anticonstitutionnellement » est le mot le plus long couramment cité, mais des mots techniques plus longs existent, comme « intergouvernementalisations » (27 lettres). Les noms chimiques peuvent être beaucoup plus longs, mais ne sont pas considérés comme des mots du vocabulaire courant."
 },
 {
  "text": "« Oiseau » est le plus court mot français contenant les cinq voyelles a, e, i, o, u.",
  "source": "Perplexity",
  "question": "Est-il vrai que « Oiseau » est le plus court mot français contenant les cinq voyelles a, e, i, o, u ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20%C2%AB%20Oiseau%20%C2%BB%20est%20le%20plus%20court%20mot%20fran%C3%A7ais%20contenant%20les%20cinq%20voyelles%20a%2C%20e%2C%20i%2C%20o%2C%20u%20%3F",
  "explanation": "Le mot « oiseau » contient les cinq voyelles principales en seulement six lettres. Il ne s'entend pourtant pas avec ces sons-là : sa prononciation, [wazo], ne contient aucun des sons a, e, i, o, u isolés tels qu'on les prononce."
 },
 {
  "text": "Le mot « hôpital » porte un accent circonflexe parce qu'il s'écrivait autrefois « hospital ».",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « hôpital » porte un accent circonflexe parce qu'il s'écrivait autrefois « hospital » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20h%C3%B4pital%20%C2%BB%20porte%20un%20accent%20circonflexe%20parce%20qu'il%20s'%C3%A9crivait%20autrefois%20%C2%AB%20hospital%20%C2%BB%20%3F",
  "explanation": "L'accent circonflexe marque souvent la disparition d'un s présent en ancien français : hôpital (hospital), forêt (forest), fête (feste), île (isle). On retrouve ce s dans les mots de la même famille, comme « hospitalier » ou « forestier »."
 },
 {
  "text": "Le mot « OK » viendrait d'une plaisanterie de journalistes de Boston en 1839.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot « OK » viendrait d'une plaisanterie de journalistes de Boston en 1839 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20%C2%AB%20OK%20%C2%BB%20viendrait%20d'une%20plaisanterie%20de%20journalistes%20de%20Boston%20en%201839%20%3F",
  "explanation": "La piste la plus solide est celle du linguiste Allen Walker Read : « O.K. » serait l'abréviation volontairement mal orthographiée de « oll korrect » (all correct), née d'une mode des abréviations humoristiques dans les journaux de Boston. Il a ensuite été popularisé par la campagne présidentielle de Martin Van Buren, surnommé « Old Kinderhook »."
 },
 {
  "text": "Il existe environ 7 000 langues dans le monde, dont près de la moitié sont menacées de disparition.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe environ 7 000 langues dans le monde, dont près de la moitié sont menacées de disparition ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20environ%207%20000%20langues%20dans%20le%20monde%2C%20dont%20pr%C3%A8s%20de%20la%20moiti%C3%A9%20sont%20menac%C3%A9es%20de%20disparition%20%3F",
  "explanation": "Selon les recensements des linguistes, environ 7 000 langues sont parlées aujourd'hui. Beaucoup ne sont parlées que par quelques centaines ou milliers de personnes. On estime qu'une langue disparaît toutes les quelques semaines ou mois."
 },
 {
  "text": "La Russie s'étend sur 11 fuseaux horaires.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Russie s'étend sur 11 fuseaux horaires ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Russie%20s'%C3%A9tend%20sur%2011%20fuseaux%20horaires%20%3F",
  "explanation": "La Russie est le plus grand pays du monde, avec environ 17 millions de km². Elle couvre 11 fuseaux horaires, de Kaliningrad à l'ouest jusqu'au Kamtchatka à l'est. Quand il est midi à Moscou, il est déjà 21 h au Kamtchatka."
 },
 {
  "text": "L'Afrique est plus grande que la Chine, les États-Unis, l'Inde et une grande partie de l'Europe réunis.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Afrique est plus grande que la Chine, les États-Unis, l'Inde et une grande partie de l'Europe réunis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Afrique%20est%20plus%20grande%20que%20la%20Chine%2C%20les%20%C3%89tats-Unis%2C%20l'Inde%20et%20une%20grande%20partie%20de%20l'Europe%20r%C3%A9unis%20%3F",
  "explanation": "Avec environ 30 millions de km², l'Afrique est bien plus grande que ce que montrent la plupart des cartes. La projection de Mercator, très utilisée, agrandit les régions proches des pôles et rétrécit celles proches de l'équateur. Le Groenland y paraît aussi grand que l'Afrique, alors qu'il est environ 14 fois plus petit."
 },
 {
  "text": "Le Mont Blanc ne mesure pas toujours la même hauteur : son sommet de glace varie de plusieurs mètres d'une année à l'autre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Mont Blanc ne mesure pas toujours la même hauteur : son sommet de glace varie de plusieurs mètres d'une année à l'autre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Mont%20Blanc%20ne%20mesure%20pas%20toujours%20la%20m%C3%AAme%20hauteur%20%3A%20son%20sommet%20de%20glace%20varie%20de%20plusieurs%20m%C3%A8tres%20d'une%20ann%C3%A9e%20%C3%A0%20l'autre%20%3F",
  "explanation": "Le sommet du Mont Blanc est une calotte de glace et de neige, dont l'épaisseur change avec les vents et les chutes de neige. Des géomètres le mesurent régulièrement : il a été mesuré à 4 810,90 m en 2013 et à 4 805,59 m en 2021. Le sommet rocheux, lui, se trouve à environ 4 792 m."
 },
 {
  "text": "La mer Morte est si salée qu'on y flotte sans effort.",
  "source": "Perplexity",
  "question": "Est-il vrai que la mer Morte est si salée qu'on y flotte sans effort ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20mer%20Morte%20est%20si%20sal%C3%A9e%20qu'on%20y%20flotte%20sans%20effort%20%3F",
  "explanation": "La mer Morte contient environ 30 % de sels, soit près de dix fois plus que l'océan. L'eau est donc très dense et porte facilement un corps humain. Son niveau baisse d'environ un mètre par an, à cause du détournement du Jourdain et de l'exploitation des minéraux."
 },
 {
  "text": "La rive de la mer Morte est le point terrestre le plus bas du monde, à environ 430 mètres sous le niveau de la mer.",
  "source": "Perplexity",
  "question": "Est-il vrai que la rive de la mer Morte est le point terrestre le plus bas du monde, à environ 430 mètres sous le niveau de la mer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20rive%20de%20la%20mer%20Morte%20est%20le%20point%20terrestre%20le%20plus%20bas%20du%20monde%2C%20%C3%A0%20environ%20430%20m%C3%A8tres%20sous%20le%20niveau%20de%20la%20mer%20%3F",
  "explanation": "La mer Morte se trouve dans une dépression entre Israël, la Cisjordanie et la Jordanie. Son niveau a beaucoup baissé depuis le XXe siècle, ce qui fait reculer chaque année ce record. Des milliers de dolines se sont formées sur ses rives à cause de la dissolution du sel."
 },
 {
  "text": "Le lac Baïkal contient environ 20 % de l'eau douce liquide de surface de la planète.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lac Baïkal contient environ 20 % de l'eau douce liquide de surface de la planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20lac%20Ba%C3%AFkal%20contient%20environ%2020%20%25%20de%20l'eau%20douce%20liquide%20de%20surface%20de%20la%20plan%C3%A8te%20%3F",
  "explanation": "Situé en Sibérie, le lac Baïkal est le plus profond du monde, avec environ 1 640 mètres. Il est aussi le plus ancien, avec environ 25 millions d'années. Il abrite des espèces uniques, comme le phoque du Baïkal, l'un des seuls phoques d'eau douce."
 },
 {
  "text": "Le Nil traverse ou borde 11 pays.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Nil traverse ou borde 11 pays ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Nil%20traverse%20ou%20borde%2011%20pays%20%3F",
  "explanation": "Le Nil, l'un des plus longs fleuves du monde avec environ 6 650 km, draine un bassin qui s'étend sur 11 pays d'Afrique. Le Nil Blanc et le Nil Bleu se rejoignent à Khartoum, au Soudan. Le titre de plus long fleuve est disputé avec l'Amazone selon la méthode de mesure."
 },
 {
  "text": "L'Amazone déverse dans l'océan environ 20 % de toute l'eau douce apportée par les fleuves du monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Amazone déverse dans l'océan environ 20 % de toute l'eau douce apportée par les fleuves du monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Amazone%20d%C3%A9verse%20dans%20l'oc%C3%A9an%20environ%2020%20%25%20de%20toute%20l'eau%20douce%20apport%C3%A9e%20par%20les%20fleuves%20du%20monde%20%3F",
  "explanation": "L'Amazone a le débit le plus élevé du monde, environ 200 000 m³ par seconde en moyenne. Son eau douce reste visible à des dizaines de kilomètres dans l'océan Atlantique. Aucun pont ne traverse l'Amazone sur son cours principal."
 },
 {
  "text": "Aucun pont ne traverse l'Amazone sur son cours principal.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'aucun pont ne traverse l'Amazone sur son cours principal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'aucun%20pont%20ne%20traverse%20l'Amazone%20sur%20son%20cours%20principal%20%3F",
  "explanation": "Le fleuve traverse surtout des zones de forêt peu peuplées, et ses rives sont instables et inondables. Les grandes villes riveraines sont reliées par bateau. Construire un pont serait coûteux et peu utile. Des ponts existent sur ses affluents, comme le pont du Rio Negro à Manaus."
 },
 {
  "text": "Il pleut presque tous les jours sur le mont Waialeale, à Hawaï, l'un des endroits les plus humides de la planète.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il pleut presque tous les jours sur le mont Waialeale, à Hawaï, l'un des endroits les plus humides de la planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20pleut%20presque%20tous%20les%20jours%20sur%20le%20mont%20Waialeale%2C%20%C3%A0%20Hawa%C3%AF%2C%20l'un%20des%20endroits%20les%20plus%20humides%20de%20la%20plan%C3%A8te%20%3F",
  "explanation": "Le mont Waialeale, sur l'île de Kauai, reçoit en moyenne plus de 9 mètres de pluie par an. Sa forme oblige les vents humides à monter, ce qui provoque des pluies presque continues. Mawsynram et Cherrapunji, en Inde, figurent aussi parmi les endroits les plus pluvieux."
 },
 {
  "text": "La Finlande compte environ 188 000 lacs.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Finlande compte environ 188 000 lacs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Finlande%20compte%20environ%20188%20000%20lacs%20%3F",
  "explanation": "La Finlande est surnommée le « pays des mille lacs », mais elle en compte environ 188 000 de plus de 5 ares. La Suède en compte près de 100 000. Ces lacs sont, comme ceux du Canada, l'héritage des glaciers de la dernière glaciation."
 },
 {
  "text": "Le Vatican est le plus petit État du monde : environ 0,44 km².",
  "source": "Perplexity",
  "question": "Est-il vrai que le Vatican est le plus petit État du monde : environ 0,44 km² ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Vatican%20est%20le%20plus%20petit%20%C3%89tat%20du%20monde%20%3A%20environ%200%2C44%20km%C2%B2%20%3F",
  "explanation": "Le Vatican est un État indépendant depuis les accords du Latran de 1929. Il compte quelques centaines d'habitants permanents. Il a ses propres timbres, sa radio, sa garde suisse et même une gare ferroviaire."
 },
 {
  "text": "L'Indonésie compte plus de 17 000 îles.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Indonésie compte plus de 17 000 îles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Indon%C3%A9sie%20compte%20plus%20de%2017%20000%20%C3%AEles%20%3F",
  "explanation": "L'Indonésie est le plus grand archipel du monde, avec environ 17 000 îles, dont environ 6 000 habitées. Elle s'étend sur plus de 5 000 km d'est en ouest. Le nombre exact varie selon les recensements et la définition d'une île."
 },
 {
  "text": "Le Canada a le plus long littoral du monde, plus de 200 000 km.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Canada a le plus long littoral du monde, plus de 200 000 km ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Canada%20a%20le%20plus%20long%20littoral%20du%20monde%2C%20plus%20de%20200%20000%20km%20%3F",
  "explanation": "Le Canada possède des milliers d'îles dans l'Arctique, et son littoral découpé s'étend sur environ 243 000 km. La longueur d'une côte dépend de l'échelle utilisée pour la mesurer : plus on mesure finement, plus elle s'allonge. C'est le paradoxe du littoral."
 },
 {
  "text": "Plus on mesure une côte finement, plus elle paraît longue : c'est le paradoxe du littoral.",
  "source": "Perplexity",
  "question": "Est-il vrai que plus on mesure une côte finement, plus elle paraît longue : c'est le paradoxe du littoral ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20plus%20on%20mesure%20une%20c%C3%B4te%20finement%2C%20plus%20elle%20para%C3%AEt%20longue%20%3A%20c'est%20le%20paradoxe%20du%20littoral%20%3F",
  "explanation": "En mesurant une côte avec une règle de 100 km, on ignore les petites baies. Avec une règle d'un mètre, on suit chaque rocher, et la longueur augmente. Le mathématicien Benoît Mandelbrot a utilisé ce paradoxe pour introduire la notion de fractale en 1967."
 },
 {
  "text": "Le désert du Sahara a été vert et couvert de lacs il y a environ 6 000 à 10 000 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que le désert du Sahara a été vert et couvert de lacs il y a environ 6 000 à 10 000 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20d%C3%A9sert%20du%20Sahara%20a%20%C3%A9t%C3%A9%20vert%20et%20couvert%20de%20lacs%20il%20y%20a%20environ%206%20000%20%C3%A0%2010%20000%20ans%20%3F",
  "explanation": "Pendant la « période humide africaine », des pluies de mousson plus abondantes ont permis le développement de savanes, de lacs et de rivières dans le Sahara. Des peintures rupestres montrent des girafes, des hippopotames et des troupeaux. Ce changement est lié aux variations de l'orbite terrestre."
 },
 {
  "text": "Le point le plus éloigné de toute mer, en Chine, se trouve à environ 2 600 km de la côte la plus proche.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus éloigné de toute mer, en Chine, se trouve à environ 2 600 km de la côte la plus proche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20%C3%A9loign%C3%A9%20de%20toute%20mer%2C%20en%20Chine%2C%20se%20trouve%20%C3%A0%20environ%202%20600%20km%20de%20la%20c%C3%B4te%20la%20plus%20proche%20%3F",
  "explanation": "Le « pôle d'inaccessibilité » continental se trouve dans la région du Xinjiang, en Chine, près de la ville d'Ürümqi. C'est le point terrestre le plus éloigné de tout océan. Ürümqi est d'ailleurs souvent citée comme la grande ville la plus éloignée de la mer."
 },
 {
  "text": "Le premier disque dur, en 1956, pesait environ une tonne et stockait environ 5 mégaoctets.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier disque dur, en 1956, pesait environ une tonne et stockait environ 5 mégaoctets ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20disque%20dur%2C%20en%201956%2C%20pesait%20environ%20une%20tonne%20et%20stockait%20environ%205%20m%C3%A9gaoctets%20%3F",
  "explanation": "L'IBM 350, livré avec l'ordinateur IBM 305 RAMAC, comportait 50 disques de 61 cm de diamètre. Il occupait la place de deux réfrigérateurs et se louait plusieurs milliers de dollars par mois. Aujourd'hui, une carte microSD de la taille d'un ongle peut stocker plus d'un téraoctet."
 },
 {
  "text": "Un smartphone actuel est des milliers de fois plus puissant que les ordinateurs qui ont guidé Apollo 11 vers la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un smartphone actuel est des milliers de fois plus puissant que les ordinateurs qui ont guidé Apollo 11 vers la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20smartphone%20actuel%20est%20des%20milliers%20de%20fois%20plus%20puissant%20que%20les%20ordinateurs%20qui%20ont%20guid%C3%A9%20Apollo%2011%20vers%20la%20Lune%20%3F",
  "explanation": "L'ordinateur de guidage d'Apollo avait environ 4 Ko de mémoire vive et une fréquence d'environ 1 MHz. Il était cependant très fiable, conçu pour un usage précis, et programmé avec une mémoire tressée à la main. Un smartphone moderne dépasse ses capacités de plusieurs ordres de grandeur."
 },
 {
  "text": "La mémoire des ordinateurs d'Apollo était tissée à la main, fil par fil.",
  "source": "Perplexity",
  "question": "Est-il vrai que la mémoire des ordinateurs d'Apollo était tissée à la main, fil par fil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20m%C3%A9moire%20des%20ordinateurs%20d'Apollo%20%C3%A9tait%20tiss%C3%A9e%20%C3%A0%20la%20main%2C%20fil%20par%20fil%20%3F",
  "explanation": "La mémoire morte de l'ordinateur de guidage d'Apollo était une « core rope memory » : des fils passaient à travers ou autour de petits anneaux magnétiques pour coder des 1 ou des 0. Des ouvrières spécialisées de l'entreprise Raytheon les assemblaient à la main, un travail extrêmement minutieux."
 },
 {
  "text": "Margaret Hamilton, qui dirigeait l'équipe de logiciel d'Apollo, a popularisé l'expression « génie logiciel ».",
  "source": "Perplexity",
  "question": "Est-il vrai que Margaret Hamilton, qui dirigeait l'équipe de logiciel d'Apollo, a popularisé l'expression « génie logiciel » ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Margaret%20Hamilton%2C%20qui%20dirigeait%20l'%C3%A9quipe%20de%20logiciel%20d'Apollo%2C%20a%20popularis%C3%A9%20l'expression%20%C2%AB%20g%C3%A9nie%20logiciel%20%C2%BB%20%3F",
  "explanation": "Margaret Hamilton dirigeait au MIT l'équipe qui a développé les logiciels de vol d'Apollo. Son code a permis à l'ordinateur de gérer une surcharge lors de l'alunissage d'Apollo 11 en priorisant les tâches essentielles. Elle a reçu la médaille présidentielle de la Liberté en 2016."
 },
 {
  "text": "Le premier programme informatique a été écrit par Ada Lovelace en 1843, pour une machine qui n'a jamais été construite.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier programme informatique a été écrit par Ada Lovelace en 1843, pour une machine qui n'a jamais été construite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20programme%20informatique%20a%20%C3%A9t%C3%A9%20%C3%A9crit%20par%20Ada%20Lovelace%20en%201843%2C%20pour%20une%20machine%20qui%20n'a%20jamais%20%C3%A9t%C3%A9%20construite%20%3F",
  "explanation": "Ada Lovelace a publié des notes sur la machine analytique de Charles Babbage, incluant un algorithme pour calculer les nombres de Bernoulli. Elle a aussi imaginé que ces machines pourraient manipuler autre chose que des nombres, comme de la musique. La machine de Babbage n'a jamais été achevée."
 },
 {
  "text": "Le premier courriel a été envoyé en 1971, et son auteur ne se souvient pas de son contenu.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier courriel a été envoyé en 1971, et son auteur ne se souvient pas de son contenu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20courriel%20a%20%C3%A9t%C3%A9%20envoy%C3%A9%20en%201971%2C%20et%20son%20auteur%20ne%20se%20souvient%20pas%20de%20son%20contenu%20%3F",
  "explanation": "L'ingénieur Ray Tomlinson a envoyé le premier courriel entre deux ordinateurs reliés à ARPANET, placés côte à côte. Il a choisi le symbole @ pour séparer le nom de l'utilisateur et celui de la machine. Il a expliqué que le message était probablement quelque chose comme « QWERTYUIOP »."
 },
 {
  "text": "Le premier nom de domaine enregistré en .com est symbolics.com, en 1985.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier nom de domaine enregistré en .com est symbolics.com, en 1985 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20nom%20de%20domaine%20enregistr%C3%A9%20en%20.com%20est%20symbolics.com%2C%20en%201985%20%3F",
  "explanation": "Symbolics était un fabricant d'ordinateurs du Massachusetts. Le nom de domaine a été enregistré le 15 mars 1985. Il existe aujourd'hui des centaines de millions de noms de domaine enregistrés dans le monde."
 },
 {
  "text": "La première vidéo publiée sur YouTube, en 2005, montre un des fondateurs devant des éléphants au zoo.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première vidéo publiée sur YouTube, en 2005, montre un des fondateurs devant des éléphants au zoo ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20vid%C3%A9o%20publi%C3%A9e%20sur%20YouTube%2C%20en%202005%2C%20montre%20un%20des%20fondateurs%20devant%20des%20%C3%A9l%C3%A9phants%20au%20zoo%20%3F",
  "explanation": "La vidéo « Me at the zoo », publiée le 23 avril 2005 par Jawed Karim, cofondateur de YouTube, dure 19 secondes. Il y commente les trompes des éléphants du zoo de San Diego. Elle a été vue des centaines de millions de fois."
 },
 {
  "text": "Le Wi-Fi s'appuie en partie sur des recherches en radioastronomie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Wi-Fi s'appuie en partie sur des recherches en radioastronomie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Wi-Fi%20s'appuie%20en%20partie%20sur%20des%20recherches%20en%20radioastronomie%20%3F",
  "explanation": "Dans les années 1990, une équipe du CSIRO australien, menée par John O'Sullivan, a développé une technique pour corriger les échos des signaux radio en intérieur, inspirée de ses travaux pour détecter les explosions de trous noirs. Le CSIRO a obtenu un brevet clé et a perçu des centaines de millions de dollars de redevances."
 },
 {
  "text": "L'actrice Hedy Lamarr a coinventé une technique de transmission utilisée plus tard dans le Wi-Fi et le Bluetooth.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'actrice Hedy Lamarr a coinventé une technique de transmission utilisée plus tard dans le Wi-Fi et le Bluetooth ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'actrice%20Hedy%20Lamarr%20a%20coinvent%C3%A9%20une%20technique%20de%20transmission%20utilis%C3%A9e%20plus%20tard%20dans%20le%20Wi-Fi%20et%20le%20Bluetooth%20%3F",
  "explanation": "En 1942, l'actrice et le compositeur George Antheil ont breveté un système de saut de fréquence pour guider des torpilles sans que le signal puisse être brouillé. L'idée a été reprise plus tard dans les communications militaires, puis dans des technologies sans fil. Hedy Lamarr n'a été reconnue pour cette invention que dans les années 1990."
 },
 {
  "text": "Le premier jeu vidéo à avoir été joué dans l'espace est Tetris, sur une Game Boy emmenée en orbite en 1993.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier jeu vidéo à avoir été joué dans l'espace est Tetris, sur une Game Boy emmenée en orbite en 1993 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20jeu%20vid%C3%A9o%20%C3%A0%20avoir%20%C3%A9t%C3%A9%20jou%C3%A9%20dans%20l'espace%20est%20Tetris%2C%20sur%20une%20Game%20Boy%20emmen%C3%A9e%20en%20orbite%20en%201993%20%3F",
  "explanation": "Le cosmonaute Alexandre Serebrov a emporté une Game Boy et la cartouche de Tetris à bord de la station Mir. Elle aurait parcouru des millions de kilomètres en orbite. Elle a été vendue aux enchères en 2011."
 },
 {
  "text": "Tetris a été créé en 1984 par Alexeï Pajitnov, sur un ordinateur incapable d'afficher des graphismes.",
  "source": "Perplexity",
  "question": "Est-il vrai que Tetris a été créé en 1984 par Alexeï Pajitnov, sur un ordinateur incapable d'afficher des graphismes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Tetris%20a%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9%20en%201984%20par%20Alexe%C3%AF%20Pajitnov%2C%20sur%20un%20ordinateur%20incapable%20d'afficher%20des%20graphismes%20%3F",
  "explanation": "Alexeï Pajitnov travaillait au Centre de calcul de l'Académie des sciences de Moscou. Il a créé Tetris sur un ordinateur Elektronika 60, qui affichait les pièces avec des caractères. Les droits ont fait l'objet d'une longue bataille juridique, et il n'a commencé à toucher des royalties qu'en 1996."
 },
 {
  "text": "Le premier code-barres scanné en magasin, en 1974, était celui d'un paquet de chewing-gums.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier code-barres scanné en magasin, en 1974, était celui d'un paquet de chewing-gums ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20code-barres%20scann%C3%A9%20en%20magasin%2C%20en%201974%2C%20%C3%A9tait%20celui%20d'un%20paquet%20de%20chewing-gums%20%3F",
  "explanation": "Le 26 juin 1974, dans un supermarché de Troy, dans l'Ohio, un paquet de 10 chewing-gums Wrigley a été le premier produit scanné par une caisse. Le paquet est aujourd'hui exposé au Smithsonian. Le code UPC était devenu la norme en 1973."
 },
 {
  "text": "Un mot de passe de 12 caractères mêlant lettres, chiffres et symboles est des milliards de fois plus difficile à deviner qu'un mot de passe de 8 caractères.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un mot de passe de 12 caractères mêlant lettres, chiffres et symboles est des milliards de fois plus difficile à deviner qu'un mot de passe de 8 caractères ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20mot%20de%20passe%20de%2012%20caract%C3%A8res%20m%C3%AAlant%20lettres%2C%20chiffres%20et%20symboles%20est%20des%20milliards%20de%20fois%20plus%20difficile%20%C3%A0%20deviner%20qu'un%20mot%20de%20passe%20de%208%20caract%C3%A8res%20%3F",
  "explanation": "Le nombre de combinaisons croît de façon exponentielle avec la longueur. Avec environ 95 caractères possibles, un mot de passe de 8 caractères offre environ 6 × 10^15 combinaisons, et un de 12 caractères environ 5 × 10^23. La longueur est souvent plus efficace que la complexité."
 },
 {
  "text": "« 123456 » est l'un des mots de passe les plus utilisés au monde depuis des années.",
  "source": "Perplexity",
  "question": "Est-il vrai que « 123456 » est l'un des mots de passe les plus utilisés au monde depuis des années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20%C2%AB%20123456%20%C2%BB%20est%20l'un%20des%20mots%20de%20passe%20les%20plus%20utilis%C3%A9s%20au%20monde%20depuis%20des%20ann%C3%A9es%20%3F",
  "explanation": "Les analyses de fuites de données montrent chaque année que des mots de passe comme « 123456 », « password » ou « azerty » sont parmi les plus courants. Ils peuvent être devinés instantanément. Les spécialistes recommandent des phrases de passe longues et un gestionnaire de mots de passe."
 },
 {
  "text": "Le symbole « # » s'appelle croisillon en français, et non dièse.",
  "source": "Perplexity",
  "question": "Est-il vrai que le symbole « # » s'appelle croisillon en français, et non dièse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20symbole%20%C2%AB%20%23%20%C2%BB%20s'appelle%20croisillon%20en%20fran%C3%A7ais%2C%20et%20non%20di%C3%A8se%20%3F",
  "explanation": "Le dièse musical (♯) a des traits verticaux et des traits obliques montants, alors que le croisillon (#) a des traits horizontaux et des traits verticaux légèrement inclinés. Dans le langage courant, on les confond souvent. Sur un téléphone, la touche est officiellement un croisillon."
 },
 {
  "text": "Il existe environ 6,67 × 10²¹ grilles de sudoku complètes différentes.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe environ 6,67 × 10²¹ grilles de sudoku complètes différentes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20environ%206%2C67%20%C3%97%2010%C2%B2%C2%B9%20grilles%20de%20sudoku%20compl%C3%A8tes%20diff%C3%A9rentes%20%3F",
  "explanation": "En 2005, les mathématiciens Bertram Felgenhauer et Frazer Jarvis ont calculé qu'il existe environ 6 670 milliards de milliards de grilles de sudoku complètes valides. En éliminant les symétries, il reste environ 5,5 milliards de grilles essentiellement différentes."
 },
 {
  "text": "Une grille de sudoku a besoin d'au moins 17 chiffres de départ pour avoir une solution unique.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une grille de sudoku a besoin d'au moins 17 chiffres de départ pour avoir une solution unique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20grille%20de%20sudoku%20a%20besoin%20d'au%20moins%2017%20chiffres%20de%20d%C3%A9part%20pour%20avoir%20une%20solution%20unique%20%3F",
  "explanation": "En 2012, une équipe de mathématiciens a démontré par ordinateur, après des millions d'heures de calcul, qu'aucune grille de sudoku avec 16 chiffres de départ ne possède une solution unique. Le minimum est donc 17, et des dizaines de milliers de grilles à 17 indices sont connues."
 },
 {
  "text": "Le nombre pi a été calculé à plus de 200 000 milliards de décimales.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nombre pi a été calculé à plus de 200 000 milliards de décimales ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nombre%20pi%20a%20%C3%A9t%C3%A9%20calcul%C3%A9%20%C3%A0%20plus%20de%20200%20000%20milliards%20de%20d%C3%A9cimales%20%3F",
  "explanation": "Les records de calcul de décimales de pi sont battus régulièrement grâce à des ordinateurs puissants et des algorithmes optimisés. En 2024, le record a dépassé les 200 000 milliards de décimales. En pratique, une quarantaine de décimales suffisent pour calculer la circonférence de l'univers observable à la taille d'un atome près."
 },
 {
  "text": "Une quarantaine de décimales de pi suffisent pour calculer le périmètre de l'univers observable avec une précision d'un atome.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une quarantaine de décimales de pi suffisent pour calculer le périmètre de l'univers observable avec une précision d'un atome ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20quarantaine%20de%20d%C3%A9cimales%20de%20pi%20suffisent%20pour%20calculer%20le%20p%C3%A9rim%C3%A8tre%20de%20l'univers%20observable%20avec%20une%20pr%C3%A9cision%20d'un%20atome%20%3F",
  "explanation": "L'univers observable a un diamètre d'environ 10^27 mètres, et un atome mesure environ 10^-10 mètre. Une précision relative de 10^-37 suffit donc. La NASA utilise seulement 15 décimales de pi pour ses calculs de navigation interplanétaire."
 },
 {
  "text": "Le 14 mars est la journée de pi, car la date s'écrit 3/14 en anglais.",
  "source": "Perplexity",
  "question": "Est-il vrai que le 14 mars est la journée de pi, car la date s'écrit 3/14 en anglais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%2014%20mars%20est%20la%20journ%C3%A9e%20de%20pi%2C%20car%20la%20date%20s'%C3%A9crit%203%2F14%20en%20anglais%20%3F",
  "explanation": "Le Pi Day a été lancé en 1988 par le physicien Larry Shaw à l'Exploratorium de San Francisco. Il coïncide avec l'anniversaire d'Albert Einstein, né le 14 mars 1879. On le célèbre souvent en mangeant des tartes, « pie » en anglais."
 },
 {
  "text": "Un googol est un 1 suivi de 100 zéros, et c'est un enfant de 9 ans qui lui a donné son nom.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un googol est un 1 suivi de 100 zéros, et c'est un enfant de 9 ans qui lui a donné son nom ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20googol%20est%20un%201%20suivi%20de%20100%20z%C3%A9ros%2C%20et%20c'est%20un%20enfant%20de%209%20ans%20qui%20lui%20a%20donn%C3%A9%20son%20nom%20%3F",
  "explanation": "En 1938, le mathématicien Edward Kasner a demandé à son neveu Milton Sirotta de nommer ce nombre. L'enfant a proposé « googol ». Le nom de Google viendrait d'une faute d'orthographe sur ce mot, choisi pour évoquer l'énorme quantité d'informations à organiser."
 },
 {
  "text": "Si l'on écrit les nombres en toutes lettres en anglais, il faut aller jusqu'à « thousand » pour trouver la lettre A.",
  "source": "Perplexity",
  "question": "Est-il vrai que si l'on écrit les nombres en toutes lettres en anglais, il faut aller jusqu'à « thousand » pour trouver la lettre A ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20l'on%20%C3%A9crit%20les%20nombres%20en%20toutes%20lettres%20en%20anglais%2C%20il%20faut%20aller%20jusqu'%C3%A0%20%C2%AB%20thousand%20%C2%BB%20pour%20trouver%20la%20lettre%20A%20%3F",
  "explanation": "En anglais, de « one » à « nine hundred ninety-nine », aucun nombre ne contient la lettre a. Il faut attendre « one thousand ». En français, la lettre a apparaît plus vite, avec « quatre ». C'est une curiosité souvent citée dans les jeux de lettres."
 },
 {
  "text": "Le nombre 0,999… avec une infinité de 9 est exactement égal à 1.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nombre 0,999… avec une infinité de 9 est exactement égal à 1 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nombre%200%2C999%E2%80%A6%20avec%20une%20infinit%C3%A9%20de%209%20est%20exactement%20%C3%A9gal%20%C3%A0%201%20%3F",
  "explanation": "Plusieurs démonstrations le montrent. Par exemple, 1/3 = 0,333…, donc 3 × 1/3 = 0,999… = 1. Il n'existe aucun nombre entre 0,999… et 1, ce qui signifie qu'ils sont égaux. Ce résultat surprend car notre intuition considère qu'il « manque toujours un peu »."
 },
 {
  "text": "Il y a autant de nombres pairs que de nombres entiers, même si les pairs semblent deux fois moins nombreux.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a autant de nombres pairs que de nombres entiers, même si les pairs semblent deux fois moins nombreux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20autant%20de%20nombres%20pairs%20que%20de%20nombres%20entiers%2C%20m%C3%AAme%20si%20les%20pairs%20semblent%20deux%20fois%20moins%20nombreux%20%3F",
  "explanation": "On peut associer chaque entier n à un nombre pair 2n, sans en oublier ni en répéter aucun. Pour les ensembles infinis, cette correspondance un à un signifie qu'ils ont la même taille. C'est l'un des résultats de Georg Cantor sur l'infini."
 },
 {
  "text": "La Joconde n'a pas de sourcils visibles, peut-être parce qu'ils se sont effacés lors de nettoyages.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Joconde n'a pas de sourcils visibles, peut-être parce qu'ils se sont effacés lors de nettoyages ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Joconde%20n'a%20pas%20de%20sourcils%20visibles%2C%20peut-%C3%AAtre%20parce%20qu'ils%20se%20sont%20effac%C3%A9s%20lors%20de%20nettoyages%20%3F",
  "explanation": "En 2007, l'ingénieur Pascal Cotte a analysé le tableau avec un scanner haute résolution et a affirmé avoir trouvé la trace d'un sourcil. Les sourcils, peints très finement, auraient pu disparaître lors de restaurations anciennes. D'autres pensent qu'ils étaient volontairement épilés, selon une mode de l'époque."
 },
 {
  "text": "La Joconde est peinte sur du bois de peuplier, pas sur une toile.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Joconde est peinte sur du bois de peuplier, pas sur une toile ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Joconde%20est%20peinte%20sur%20du%20bois%20de%20peuplier%2C%20pas%20sur%20une%20toile%20%3F",
  "explanation": "Léonard de Vinci a peint la Joconde sur un panneau de peuplier d'environ 77 × 53 cm. Le bois s'est légèrement déformé avec le temps, et une fissure est surveillée. Le tableau est conservé derrière une vitre blindée, dans une atmosphère contrôlée."
 },
 {
  "text": "Vincent van Gogh n'aurait vendu qu'un seul tableau de son vivant, selon une idée reçue largement exagérée.",
  "source": "Perplexity",
  "question": "Est-il vrai que Vincent van Gogh n'aurait vendu qu'un seul tableau de son vivant, selon une idée reçue largement exagérée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Vincent%20van%20Gogh%20n'aurait%20vendu%20qu'un%20seul%20tableau%20de%20son%20vivant%2C%20selon%20une%20id%C3%A9e%20re%C3%A7ue%20largement%20exag%C3%A9r%C3%A9e%20%3F",
  "explanation": "On raconte souvent que van Gogh n'a vendu qu'un tableau, « La Vigne rouge ». En réalité, des chercheurs ont trouvé des traces d'autres ventes ou échanges, mais ses ventes étaient très modestes. Il a produit environ 860 peintures en dix ans de carrière. Ses œuvres comptent aujourd'hui parmi les plus chères au monde."
 },
 {
  "text": "Le compositeur Beethoven a continué à composer après être devenu presque totalement sourd.",
  "source": "Perplexity",
  "question": "Est-il vrai que le compositeur Beethoven a continué à composer après être devenu presque totalement sourd ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20compositeur%20Beethoven%20a%20continu%C3%A9%20%C3%A0%20composer%20apr%C3%A8s%20%C3%AAtre%20devenu%20presque%20totalement%20sourd%20%3F",
  "explanation": "Beethoven a commencé à perdre l'audition vers l'âge de 28 ans. À la création de sa Neuvième Symphonie en 1824, il était presque totalement sourd : une chanteuse a dû le retourner pour qu'il voie les applaudissements du public. Il composait en entendant la musique dans sa tête."
 },
 {
  "text": "Mozart a retranscrit de mémoire, à 14 ans, une œuvre que le Vatican interdisait de copier.",
  "source": "Perplexity",
  "question": "Est-il vrai que Mozart a retranscrit de mémoire, à 14 ans, une œuvre que le Vatican interdisait de copier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20Mozart%20a%20retranscrit%20de%20m%C3%A9moire%2C%20%C3%A0%2014%20ans%2C%20une%20%C5%93uvre%20que%20le%20Vatican%20interdisait%20de%20copier%20%3F",
  "explanation": "Le Miserere de Gregorio Allegri n'était chanté qu'à la chapelle Sixtine pendant la Semaine sainte, et sa partition ne devait pas circuler. Selon une lettre de son père, Mozart l'aurait entendu en 1770 puis retranscrit de mémoire. L'anecdote est célèbre, mais certains historiens la jugent en partie embellie."
 },
 {
  "text": "Le la utilisé pour accorder les instruments n'a pas toujours été réglé sur 440 Hz.",
  "source": "Perplexity",
  "question": "Est-il vrai que le la utilisé pour accorder les instruments n'a pas toujours été réglé sur 440 Hz ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20la%20utilis%C3%A9%20pour%20accorder%20les%20instruments%20n'a%20pas%20toujours%20%C3%A9t%C3%A9%20r%C3%A9gl%C3%A9%20sur%20440%20Hz%20%3F",
  "explanation": "La hauteur du la de référence variait selon les villes et les époques, entre environ 400 et 460 Hz. Le la 440 Hz a été adopté comme référence internationale en 1939, puis confirmé par la norme ISO en 1975. Certains orchestres jouent encore un peu plus haut, à 442 ou 443 Hz."
 },
 {
  "text": "Le morceau « 4'33\" » de John Cage consiste en 4 minutes et 33 secondes de silence.",
  "source": "Perplexity",
  "question": "Est-il vrai que le morceau « 4'33\" » de John Cage consiste en 4 minutes et 33 secondes de silence ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20morceau%20%C2%AB%204'33%22%20%C2%BB%20de%20John%20Cage%20consiste%20en%204%20minutes%20et%2033%20secondes%20de%20silence%20%3F",
  "explanation": "Composée en 1952, l'œuvre demande aux musiciens de ne jouer aucune note. Cage voulait que le public prenne conscience des sons ambiants : bruits de la salle, toux, bruissements. C'est l'une des œuvres les plus discutées de la musique du XXe siècle."
 },
 {
  "text": "Le plus long mot de passe ne sert à rien s'il est réutilisé partout : la plupart des piratages de comptes viennent de mots de passe réutilisés.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long mot de passe ne sert à rien s'il est réutilisé partout : la plupart des piratages de comptes viennent de mots de passe réutilisés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20mot%20de%20passe%20ne%20sert%20%C3%A0%20rien%20s'il%20est%20r%C3%A9utilis%C3%A9%20partout%20%3A%20la%20plupart%20des%20piratages%20de%20comptes%20viennent%20de%20mots%20de%20passe%20r%C3%A9utilis%C3%A9s%20%3F",
  "explanation": "Quand un site se fait voler sa base de données, les couples identifiant-mot de passe sont testés automatiquement sur d'autres services : c'est le « credential stuffing ». Utiliser un mot de passe différent par site, avec un gestionnaire de mots de passe, et activer la double authentification réduit fortement le risque."
 },
 {
  "text": "Un ballon de football officiel de Coupe du monde est testé en soufflerie avant chaque tournoi.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un ballon de football officiel de Coupe du monde est testé en soufflerie avant chaque tournoi ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20ballon%20de%20football%20officiel%20de%20Coupe%20du%20monde%20est%20test%C3%A9%20en%20soufflerie%20avant%20chaque%20tournoi%20%3F",
  "explanation": "Les fabricants testent la trajectoire des ballons en soufflerie et avec des robots frappeurs, car le nombre de panneaux, leur forme et la texture de surface modifient le comportement en vol. Le ballon Jabulani de 2010, trop lisse, avait été critiqué par les gardiens pour ses trajectoires imprévisibles."
 },
 {
  "text": "Les médailles d'or olympiques ne sont pas en or massif : elles sont surtout en argent.",
  "source": "Perplexity",
  "question": "Est-il vrai que les médailles d'or olympiques ne sont pas en or massif : elles sont surtout en argent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20m%C3%A9dailles%20d'or%20olympiques%20ne%20sont%20pas%20en%20or%20massif%20%3A%20elles%20sont%20surtout%20en%20argent%20%3F",
  "explanation": "Depuis 1912, les médailles d'or sont en argent recouvert d'au moins 6 grammes d'or. Une médaille d'or des Jeux de Paris 2024 contenait aussi un morceau de fer provenant de la tour Eiffel. Sa valeur en métal est bien inférieure à sa valeur symbolique."
 },
 {
  "text": "Le golf est l'un des seuls sports à avoir été pratiqués sur la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que le golf est l'un des seuls sports à avoir été pratiqués sur la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20golf%20est%20l'un%20des%20seuls%20sports%20%C3%A0%20avoir%20%C3%A9t%C3%A9%20pratiqu%C3%A9s%20sur%20la%20Lune%20%3F",
  "explanation": "En 1971, lors de la mission Apollo 14, l'astronaute Alan Shepard a frappé deux balles de golf avec une tête de club fixée sur un outil de prélèvement. Une analyse d'images a estimé en 2021 que la plus longue a parcouru environ 40 mètres, loin des centaines de mètres souvent annoncées."
 },
 {
  "text": "Une balle de golf compte généralement entre 300 et 500 alvéoles.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une balle de golf compte généralement entre 300 et 500 alvéoles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20balle%20de%20golf%20compte%20g%C3%A9n%C3%A9ralement%20entre%20300%20et%20500%20alv%C3%A9oles%20%3F",
  "explanation": "Les alvéoles créent une fine couche d'air turbulent autour de la balle, ce qui réduit la traînée et lui permet de voler beaucoup plus loin qu'une balle lisse. Les premières balles étaient lisses : les golfeurs ont remarqué que les balles abîmées allaient plus loin."
 },
 {
  "text": "Un match de football professionnel compte en moyenne moins d'une heure de jeu effectif.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un match de football professionnel compte en moyenne moins d'une heure de jeu effectif ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20match%20de%20football%20professionnel%20compte%20en%20moyenne%20moins%20d'une%20heure%20de%20jeu%20effectif%20%3F",
  "explanation": "Sur les 90 minutes réglementaires, le ballon est réellement en jeu environ 55 à 60 minutes en moyenne. Le reste est perdu en touches, coups francs, fautes et remplacements. Les instances du football ont encouragé l'ajout de temps additionnel plus long pour compenser."
 },
 {
  "text": "Le premier match de football télévisé en direct a eu lieu en 1937, au Royaume-Uni.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier match de football télévisé en direct a eu lieu en 1937, au Royaume-Uni ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20match%20de%20football%20t%C3%A9l%C3%A9vis%C3%A9%20en%20direct%20a%20eu%20lieu%20en%201937%2C%20au%20Royaume-Uni%20%3F",
  "explanation": "La BBC a retransmis en direct un match d'entraînement d'Arsenal le 16 septembre 1937. Très peu de foyers possédaient alors un téléviseur. La première Coupe du monde télévisée fut celle de 1954 en Suisse."
 },
 {
  "text": "Le premier match de basket de l'histoire s'est terminé sur le score de 1 à 0.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier match de basket de l'histoire s'est terminé sur le score de 1 à 0 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20match%20de%20basket%20de%20l'histoire%20s'est%20termin%C3%A9%20sur%20le%20score%20de%201%20%C3%A0%200%20%3F",
  "explanation": "En décembre 1891, James Naismith a fait jouer le premier match de basket dans un gymnase de Springfield, au Massachusetts, avec deux équipes de neuf joueurs. Un seul panier a été marqué, par William Chase. Les règles d'origine interdisaient de courir avec le ballon."
 },
 {
  "text": "Usain Bolt a atteint une vitesse de pointe d'environ 44,7 km/h lors de son record du monde du 100 mètres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'Usain Bolt a atteint une vitesse de pointe d'environ 44,7 km/h lors de son record du monde du 100 mètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'Usain%20Bolt%20a%20atteint%20une%20vitesse%20de%20pointe%20d'environ%2044%2C7%20km%2Fh%20lors%20de%20son%20record%20du%20monde%20du%20100%20m%C3%A8tres%20%3F",
  "explanation": "Lors de son record de 9,58 secondes en 2009 à Berlin, Usain Bolt a atteint sa vitesse maximale entre 60 et 80 mètres. Il faisait des foulées d'environ 2,44 mètres. Sa vitesse moyenne sur la course était d'environ 37,6 km/h."
 },
 {
  "text": "Le tennis est né d'un jeu français, le jeu de paume, d'abord joué à mains nues.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tennis est né d'un jeu français, le jeu de paume, d'abord joué à mains nues ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tennis%20est%20n%C3%A9%20d'un%20jeu%20fran%C3%A7ais%2C%20le%20jeu%20de%20paume%2C%20d'abord%20jou%C3%A9%20%C3%A0%20mains%20nues%20%3F",
  "explanation": "Le jeu de paume se jouait en frappant la balle avec la paume de la main, puis avec des gants et des raquettes. Le mot « tennis » viendrait de l'exclamation « tenez ! » lancée par le serveur. Le décompte des points (15, 30, 40) viendrait aussi de cette époque, mais son origine est débattue."
 },
 {
  "text": "Non, les éléphants n'ont pas peur des souris.",
  "source": "Perplexity",
  "question": "Est-il vrai que les éléphants n'ont pas peur des souris ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%A9l%C3%A9phants%20n'ont%20pas%20peur%20des%20souris%20%3F",
  "explanation": "Rien ne montre que les éléphants craignent particulièrement les souris. Leur vue est médiocre et ils peuvent sursauter face à n'importe quel petit animal qui surgit. Une étude a montré qu'ils réagissaient aussi à des objets en mouvement inattendus. Le mythe remonterait à l'Antiquité."
 },
 {
  "text": "Non, l'homme n'utilise pas seulement 10 % de son cerveau.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'homme n'utilise pas seulement 10 % de son cerveau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'homme%20n'utilise%20pas%20seulement%2010%20%25%20de%20son%20cerveau%20%3F",
  "explanation": "L'imagerie cérébrale montre que toutes les régions du cerveau ont une activité, même si elles ne sont pas toutes sollicitées en même temps. Une lésion dans presque n'importe quelle zone a des conséquences. Ce mythe a été popularisé par des livres de développement personnel et des films."
 },
 {
  "text": "Non, le sucre ne rend pas les enfants hyperactifs.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sucre ne rend pas les enfants hyperactifs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sucre%20ne%20rend%20pas%20les%20enfants%20hyperactifs%20%3F",
  "explanation": "Des études contrôlées, où ni les enfants ni les parents ne savaient qui avait consommé du sucre, n'ont trouvé aucun effet sur le comportement. En revanche, quand les parents pensaient que leur enfant avait mangé du sucre, ils le jugeaient plus agité. L'effet est surtout lié aux attentes et au contexte, comme les fêtes."
 },
 {
  "text": "Non, raser les poils ne les fait pas repousser plus épais ou plus foncés.",
  "source": "Perplexity",
  "question": "Est-il vrai que raser les poils ne les fait pas repousser plus épais ou plus foncés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20raser%20les%20poils%20ne%20les%20fait%20pas%20repousser%20plus%20%C3%A9pais%20ou%20plus%20fonc%C3%A9s%20%3F",
  "explanation": "Le rasoir coupe le poil à la surface, sans toucher la racine. Le poil repousse avec une extrémité coupée net et non effilée, ce qui donne l'impression d'un poil plus dur. Des études ont montré que l'épaisseur, la couleur et la vitesse de pousse ne changent pas."
 },
 {
  "text": "Non, il ne faut pas attendre deux heures après avoir mangé pour se baigner.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il ne faut pas attendre deux heures après avoir mangé pour se baigner ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20ne%20faut%20pas%20attendre%20deux%20heures%20apr%C3%A8s%20avoir%20mang%C3%A9%20pour%20se%20baigner%20%3F",
  "explanation": "Aucune étude n'a montré un risque accru de noyade lié à la digestion. Un repas copieux peut éventuellement causer un inconfort ou des crampes, mais pas de danger particulier. Les vrais facteurs de risque de noyade sont l'alcool, le froid, la fatigue et l'absence de surveillance."
 },
 {
  "text": "Non, les poissons ne sont pas insensibles à la douleur.",
  "source": "Perplexity",
  "question": "Est-il vrai que les poissons ne sont pas insensibles à la douleur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20poissons%20ne%20sont%20pas%20insensibles%20%C3%A0%20la%20douleur%20%3F",
  "explanation": "Des études ont montré que les poissons possèdent des nocicepteurs, des récepteurs de la douleur, et modifient leur comportement après une stimulation douloureuse. Ils peuvent par exemple frotter une zone touchée ou délaisser la nourriture. Le débat scientifique porte sur la façon dont ils ressentent cette douleur."
 },
 {
  "text": "Non, les lemmings ne se suicident pas en masse en se jetant des falaises.",
  "source": "Perplexity",
  "question": "Est-il vrai que les lemmings ne se suicident pas en masse en se jetant des falaises ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20lemmings%20ne%20se%20suicident%20pas%20en%20masse%20en%20se%20jetant%20des%20falaises%20%3F",
  "explanation": "Ce mythe a été popularisé par le documentaire « White Wilderness » de Disney en 1958, dans lequel des lemmings avaient été poussés vers une falaise pour le tournage. En réalité, leurs populations varient fortement selon les cycles, et ils migrent parfois en grand nombre, mais ne cherchent pas à mourir."
 },
 {
  "text": "Non, l'eau ne conduit pas l'électricité : ce sont les sels dissous dans l'eau qui le font.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau ne conduit pas l'électricité : ce sont les sels dissous dans l'eau qui le font ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20ne%20conduit%20pas%20l'%C3%A9lectricit%C3%A9%20%3A%20ce%20sont%20les%20sels%20dissous%20dans%20l'eau%20qui%20le%20font%20%3F",
  "explanation": "L'eau parfaitement pure est un très mauvais conducteur électrique. Dans la vie courante, l'eau contient des minéraux et des impuretés qui se séparent en ions, et ce sont eux qui transportent le courant. C'est pourquoi l'eau du robinet, de la mer ou celle d'un bain est dangereuse avec l'électricité."
 }
];
