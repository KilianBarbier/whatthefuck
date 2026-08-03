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
  "text": "Le Soleil représente à lui seul environ 99,8 pour cent de la masse totale de tout le système solaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Soleil représente à lui seul environ 99,8 pour cent de la masse totale de tout le système solaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Soleil%20repr%C3%A9sente%20%C3%A0%20lui%20seul%20environ%2099%2C8%20pour%20cent%20de%20la%20masse%20totale%20de%20tout%20le%20syst%C3%A8me%20solaire%20%3F"
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
  "text": "Il fait tellement chaud sur Vénus, environ 465 degrés, que le plomb y fondrait à la surface.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il fait tellement chaud sur Vénus, environ 465 degrés, que le plomb y fondrait à la surface ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20fait%20tellement%20chaud%20sur%20V%C3%A9nus%2C%20environ%20465%20degr%C3%A9s%2C%20que%20le%20plomb%20y%20fondrait%20%C3%A0%20la%20surface%20%3F"
 },
 {
  "text": "Les anneaux de Saturne sont si fins par rapport à leur largeur qu'à l'échelle ils seraient plus minces qu'une feuille de papier.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anneaux de Saturne sont si fins par rapport à leur largeur qu'à l'échelle ils seraient plus minces qu'une feuille de papier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anneaux%20de%20Saturne%20sont%20si%20fins%20par%20rapport%20%C3%A0%20leur%20largeur%20qu'%C3%A0%20l'%C3%A9chelle%20ils%20seraient%20plus%20minces%20qu'une%20feuille%20de%20papier%20%3F"
 },
 {
  "text": "Jupiter est si massive que le centre de gravité qu'elle partage avec le Soleil se situe légèrement au-dessus de la surface du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai que jupiter est si massive que le centre de gravité qu'elle partage avec le Soleil se situe légèrement au-dessus de la surface du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20jupiter%20est%20si%20massive%20que%20le%20centre%20de%20gravit%C3%A9%20qu'elle%20partage%20avec%20le%20Soleil%20se%20situe%20l%C3%A9g%C3%A8rement%20au-dessus%20de%20la%20surface%20du%20Soleil%20%3F"
 },
 {
  "text": "La Grande Tache rouge de Jupiter est une tempête assez grande pour engloutir la Terre entière.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Grande Tache rouge de Jupiter est une tempête assez grande pour engloutir la Terre entière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Grande%20Tache%20rouge%20de%20Jupiter%20est%20une%20temp%C3%AAte%20assez%20grande%20pour%20engloutir%20la%20Terre%20enti%C3%A8re%20%3F"
 },
 {
  "text": "Dans l'espace, deux morceaux de métal identiques qui se touchent peuvent se souder spontanément, un phénomène appelé soudure à froid.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans l'espace, deux morceaux de métal identiques qui se touchent peuvent se souder spontanément, un phénomène appelé soudure à froid ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20l'espace%2C%20deux%20morceaux%20de%20m%C3%A9tal%20identiques%20qui%20se%20touchent%20peuvent%20se%20souder%20spontan%C3%A9ment%2C%20un%20ph%C3%A9nom%C3%A8ne%20appel%C3%A9%20soudure%20%C3%A0%20froid%20%3F"
 },
 {
  "text": "L'espace n'est pas totalement silencieux pour les instruments, mais le son ne s'y propage pas car il n'y a presque pas de matière pour le transporter.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'espace n'est pas totalement silencieux pour les instruments, mais le son ne s'y propage pas car il n'y a presque pas de matière pour le transporter ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'espace%20n'est%20pas%20totalement%20silencieux%20pour%20les%20instruments%2C%20mais%20le%20son%20ne%20s'y%20propage%20pas%20car%20il%20n'y%20a%20presque%20pas%20de%20mati%C3%A8re%20pour%20le%20transporter%20%3F"
 },
 {
  "text": "La Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, à peu près la vitesse à laquelle poussent nos ongles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, à peu près la vitesse à laquelle poussent nos ongles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Lune%20s'%C3%A9loigne%20de%20la%20Terre%20d'environ%203%2C8%20centim%C3%A8tres%20par%20an%2C%20%C3%A0%20peu%20pr%C3%A8s%20la%20vitesse%20%C3%A0%20laquelle%20poussent%20nos%20ongles%20%3F"
 },
 {
  "text": "Il existe une planète, 55 Cancri e, dont l'intérieur pourrait contenir d'énormes quantités de carbone, ce qui a inspiré l'idée d'une planète riche en diamant.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe une planète, 55 Cancri e, dont l'intérieur pourrait contenir d'énormes quantités de carbone, ce qui a inspiré l'idée d'une planète riche en diamant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20une%20plan%C3%A8te%2C%2055%20Cancri%20e%2C%20dont%20l'int%C3%A9rieur%20pourrait%20contenir%20d'%C3%A9normes%20quantit%C3%A9s%20de%20carbone%2C%20ce%20qui%20a%20inspir%C3%A9%20l'id%C3%A9e%20d'une%20plan%C3%A8te%20riche%20en%20diamant%20%3F"
 },
 {
  "text": "Un an sur Mercure dure environ 88 jours terrestres, mais une seule journée solaire y dure environ 176 jours terrestres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un an sur Mercure dure environ 88 jours terrestres, mais une seule journée solaire y dure environ 176 jours terrestres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20an%20sur%20Mercure%20dure%20environ%2088%20jours%20terrestres%2C%20mais%20une%20seule%20journ%C3%A9e%20solaire%20y%20dure%20environ%20176%20jours%20terrestres%20%3F"
 },
 {
  "text": "La lumière du Soleil met environ huit minutes et vingt secondes à atteindre la Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai que la lumière du Soleil met environ huit minutes et vingt secondes à atteindre la Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20lumi%C3%A8re%20du%20Soleil%20met%20environ%20huit%20minutes%20et%20vingt%20secondes%20%C3%A0%20atteindre%20la%20Terre%20%3F"
 },
 {
  "text": "Si l'on pouvait conduire une voiture à 100 kilomètres par heure vers le Soleil, il faudrait plus de 170 ans pour l'atteindre.",
  "source": "Perplexity",
  "question": "Est-il vrai que si l'on pouvait conduire une voiture à 100 kilomètres par heure vers le Soleil, il faudrait plus de 170 ans pour l'atteindre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20si%20l'on%20pouvait%20conduire%20une%20voiture%20%C3%A0%20100%20kilom%C3%A8tres%20par%20heure%20vers%20le%20Soleil%2C%20il%20faudrait%20plus%20de%20170%20ans%20pour%20l'atteindre%20%3F"
 },
 {
  "text": "Olympus Mons, un volcan de Mars, culmine à environ 22 kilomètres, soit près de trois fois la hauteur de l'Everest.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'olympus Mons, un volcan de Mars, culmine à environ 22 kilomètres, soit près de trois fois la hauteur de l'Everest ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'olympus%20Mons%2C%20un%20volcan%20de%20Mars%2C%20culmine%20%C3%A0%20environ%2022%20kilom%C3%A8tres%2C%20soit%20pr%C3%A8s%20de%20trois%20fois%20la%20hauteur%20de%20l'Everest%20%3F"
 },
 {
  "text": "La station spatiale internationale fait le tour de la Terre en environ 90 minutes, soit environ 16 levers de soleil par jour pour son équipage.",
  "source": "Perplexity",
  "question": "Est-il vrai que la station spatiale internationale fait le tour de la Terre en environ 90 minutes, soit environ 16 levers de soleil par jour pour son équipage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20station%20spatiale%20internationale%20fait%20le%20tour%20de%20la%20Terre%20en%20environ%2090%20minutes%2C%20soit%20environ%2016%20levers%20de%20soleil%20par%20jour%20pour%20son%20%C3%A9quipage%20%3F"
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
  "text": "Une année-lumière n'est pas une durée mais une distance, celle que parcourt la lumière en un an, soit environ 9 460 milliards de kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une année-lumière n'est pas une durée mais une distance, celle que parcourt la lumière en un an, soit environ 9 460 milliards de kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20ann%C3%A9e-lumi%C3%A8re%20n'est%20pas%20une%20dur%C3%A9e%20mais%20une%20distance%2C%20celle%20que%20parcourt%20la%20lumi%C3%A8re%20en%20un%20an%2C%20soit%20environ%209%C2%A0460%20milliards%20de%20kilom%C3%A8tres%20%3F"
 },
 {
  "text": "La galaxie d'Andromède fonce vers la Voie lactée et les deux devraient fusionner dans environ quatre milliards d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai que la galaxie d'Andromède fonce vers la Voie lactée et les deux devraient fusionner dans environ quatre milliards d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20galaxie%20d'Androm%C3%A8de%20fonce%20vers%20la%20Voie%20lact%C3%A9e%20et%20les%20deux%20devraient%20fusionner%20dans%20environ%20quatre%20milliards%20d'ann%C3%A9es%20%3F"
 },
 {
  "text": "Sur Uranus et Neptune, les scientifiques pensent qu'il pourrait pleuvoir des diamants en profondeur, sous l'effet d'une pression énorme.",
  "source": "Perplexity",
  "question": "Est-il vrai que sur Uranus et Neptune, les scientifiques pensent qu'il pourrait pleuvoir des diamants en profondeur, sous l'effet d'une pression énorme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20sur%20Uranus%20et%20Neptune%2C%20les%20scientifiques%20pensent%20qu'il%20pourrait%20pleuvoir%20des%20diamants%20en%20profondeur%2C%20sous%20l'effet%20d'une%20pression%20%C3%A9norme%20%3F"
 },
 {
  "text": "L'espace commence conventionnellement à la ligne de Kármán, à 100 kilomètres d'altitude.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'espace commence conventionnellement à la ligne de Kármán, à 100 kilomètres d'altitude ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'espace%20commence%20conventionnellement%20%C3%A0%20la%20ligne%20de%20K%C3%A1rm%C3%A1n%2C%20%C3%A0%20100%20kilom%C3%A8tres%20d'altitude%20%3F"
 },
 {
  "text": "Pluton est plus petite que plusieurs lunes du système solaire, dont notre propre Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que pluton est plus petite que plusieurs lunes du système solaire, dont notre propre Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pluton%20est%20plus%20petite%20que%20plusieurs%20lunes%20du%20syst%C3%A8me%20solaire%2C%20dont%20notre%20propre%20Lune%20%3F"
 },
 {
  "text": "Le plus grand volcan connu du système solaire ne se trouve pas sur Terre mais sur Mars.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus grand volcan connu du système solaire ne se trouve pas sur Terre mais sur Mars ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20grand%20volcan%20connu%20du%20syst%C3%A8me%20solaire%20ne%20se%20trouve%20pas%20sur%20Terre%20mais%20sur%20Mars%20%3F"
 },
 {
  "text": "Voyager 1, lancée en 1977, est l'objet fabriqué par l'homme le plus éloigné de la Terre et a quitté le système solaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que voyager 1, lancée en 1977, est l'objet fabriqué par l'homme le plus éloigné de la Terre et a quitté le système solaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20voyager%201%2C%20lanc%C3%A9e%20en%201977%2C%20est%20l'objet%20fabriqu%C3%A9%20par%20l'homme%20le%20plus%20%C3%A9loign%C3%A9%20de%20la%20Terre%20et%20a%20quitt%C3%A9%20le%20syst%C3%A8me%20solaire%20%3F"
 },
 {
  "text": "Il n'existe aucune planète qui aurait exactement la même durée de jour et d'année, sauf par coïncidence, mais Mercure tourne exactement trois fois sur elle-même toutes les deux orbites.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il n'existe aucune planète qui aurait exactement la même durée de jour et d'année, sauf par coïncidence, mais Mercure tourne exactement trois fois sur elle-même toutes les deux orbites ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20n'existe%20aucune%20plan%C3%A8te%20qui%20aurait%20exactement%20la%20m%C3%AAme%20dur%C3%A9e%20de%20jour%20et%20d'ann%C3%A9e%2C%20sauf%20par%20co%C3%AFncidence%2C%20mais%20Mercure%20tourne%20exactement%20trois%20fois%20sur%20elle-m%C3%AAme%20toutes%20les%20deux%20orbites%20%3F"
 },
 {
  "text": "Le télescope spatial Hubble a observé des galaxies dont la lumière a mis plus de 13 milliards d'années à nous parvenir.",
  "source": "Perplexity",
  "question": "Est-il vrai que le télescope spatial Hubble a observé des galaxies dont la lumière a mis plus de 13 milliards d'années à nous parvenir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20t%C3%A9lescope%20spatial%20Hubble%20a%20observ%C3%A9%20des%20galaxies%20dont%20la%20lumi%C3%A8re%20a%20mis%20plus%20de%2013%20milliards%20d'ann%C3%A9es%20%C3%A0%20nous%20parvenir%20%3F"
 },
 {
  "text": "Certaines étoiles sont si grosses que si l'on remplaçait le Soleil par elles, leur surface engloutirait l'orbite de Jupiter.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines étoiles sont si grosses que si l'on remplaçait le Soleil par elles, leur surface engloutirait l'orbite de Jupiter ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20%C3%A9toiles%20sont%20si%20grosses%20que%20si%20l'on%20rempla%C3%A7ait%20le%20Soleil%20par%20elles%2C%20leur%20surface%20engloutirait%20l'orbite%20de%20Jupiter%20%3F"
 },
 {
  "text": "Un astronaute peut grandir de plusieurs centimètres dans l'espace car sa colonne vertébrale se détend en apesanteur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un astronaute peut grandir de plusieurs centimètres dans l'espace car sa colonne vertébrale se détend en apesanteur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20astronaute%20peut%20grandir%20de%20plusieurs%20centim%C3%A8tres%20dans%20l'espace%20car%20sa%20colonne%20vert%C3%A9brale%20se%20d%C3%A9tend%20en%20apesanteur%20%3F"
 },
 {
  "text": "La couleur du Soleil vu depuis l'espace, sans atmosphère, est en réalité blanche et non jaune.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur du Soleil vu depuis l'espace, sans atmosphère, est en réalité blanche et non jaune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20du%20Soleil%20vu%20depuis%20l'espace%2C%20sans%20atmosph%C3%A8re%2C%20est%20en%20r%C3%A9alit%C3%A9%20blanche%20et%20non%20jaune%20%3F"
 },
 {
  "text": "La face cachée de la Lune n'est pas plongée dans le noir en permanence : elle reçoit autant de lumière que la face visible. L'expression anglaise dark side of the Moon (face sombre) est donc trompeuse, on devrait parler de face cachée et non de face sombre.",
  "source": "Perplexity",
  "question": "Est-il vrai que la face cachée de la Lune n'est pas plongée dans le noir en permanence : elle reçoit autant de lumière que la face visible. L'expression anglaise dark side of the Moon (face sombre) est donc trompeuse, on devrait parler de face cachée et non de face sombre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20face%20cach%C3%A9e%20de%20la%20Lune%20n'est%20pas%20plong%C3%A9e%20dans%20le%20noir%20en%20permanence%C2%A0%3A%20elle%20re%C3%A7oit%20autant%20de%20lumi%C3%A8re%20que%20la%20face%20visible.%20L'expression%20anglaise%20dark%20side%20of%20the%20Moon%20(face%20sombre)%20est%20donc%20trompeuse%2C%20on%20devrait%20parler%20de%20face%20cach%C3%A9e%20et%20non%20de%20face%20sombre%20%3F"
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
  "text": "Les atomes sont si vides que la matière que l'on croit solide est essentiellement composée d'espace vide.",
  "source": "Perplexity",
  "question": "Est-il vrai que les atomes sont si vides que la matière que l'on croit solide est essentiellement composée d'espace vide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20atomes%20sont%20si%20vides%20que%20la%20mati%C3%A8re%20que%20l'on%20croit%20solide%20est%20essentiellement%20compos%C3%A9e%20d'espace%20vide%20%3F"
 },
 {
  "text": "La lumière voyage à environ 300 000 kilomètres par seconde, elle pourrait faire plus de sept fois le tour de la Terre en une seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que la lumière voyage à environ 300 000 kilomètres par seconde, elle pourrait faire plus de sept fois le tour de la Terre en une seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20lumi%C3%A8re%20voyage%20%C3%A0%20environ%20300%C2%A0000%20kilom%C3%A8tres%20par%20seconde%2C%20elle%20pourrait%20faire%20plus%20de%20sept%20fois%20le%20tour%20de%20la%20Terre%20en%20une%20seconde%20%3F"
 },
 {
  "text": "L'hélium peut adopter un état superfluide où il s'écoule sans aucune friction et grimpe le long des parois de son récipient.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'hélium peut adopter un état superfluide où il s'écoule sans aucune friction et grimpe le long des parois de son récipient ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'h%C3%A9lium%20peut%20adopter%20un%20%C3%A9tat%20superfluide%20o%C3%B9%20il%20s'%C3%A9coule%20sans%20aucune%20friction%20et%20grimpe%20le%20long%20des%20parois%20de%20son%20r%C3%A9cipient%20%3F"
 },
 {
  "text": "Le diamant et le graphite d'un crayon sont tous deux faits uniquement de carbone : seule l'organisation des atomes change.",
  "source": "Perplexity",
  "question": "Est-il vrai que le diamant et le graphite d'un crayon sont tous deux faits uniquement de carbone : seule l'organisation des atomes change ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20diamant%20et%20le%20graphite%20d'un%20crayon%20sont%20tous%20deux%20faits%20uniquement%20de%20carbone%C2%A0%3A%20seule%20l'organisation%20des%20atomes%20change%20%3F"
 },
 {
  "text": "Un gramme d'ADN pourrait théoriquement stocker une quantité colossale d'informations, bien plus que les disques durs classiques.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un gramme d'ADN pourrait théoriquement stocker une quantité colossale d'informations, bien plus que les disques durs classiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20gramme%20d'ADN%20pourrait%20th%C3%A9oriquement%20stocker%20une%20quantit%C3%A9%20colossale%20d'informations%2C%20bien%20plus%20que%20les%20disques%20durs%20classiques%20%3F"
 },
 {
  "text": "Le zéro absolu, environ moins 273,15 degrés Celsius, est la température la plus basse théoriquement possible.",
  "source": "Perplexity",
  "question": "Est-il vrai que le zéro absolu, environ moins 273,15 degrés Celsius, est la température la plus basse théoriquement possible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20z%C3%A9ro%20absolu%2C%20environ%20moins%20273%2C15%20degr%C3%A9s%20Celsius%2C%20est%20la%20temp%C3%A9rature%20la%20plus%20basse%20th%C3%A9oriquement%20possible%20%3F"
 },
 {
  "text": "Rien de connu ne peut voyager plus vite que la lumière dans le vide.",
  "source": "Perplexity",
  "question": "Est-il vrai que rien de connu ne peut voyager plus vite que la lumière dans le vide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20rien%20de%20connu%20ne%20peut%20voyager%20plus%20vite%20que%20la%20lumi%C3%A8re%20dans%20le%20vide%20%3F"
 },
 {
  "text": "L'or est si malléable qu'un seul gramme peut être étiré en un fil de plus de deux kilomètres de long.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'or est si malléable qu'un seul gramme peut être étiré en un fil de plus de deux kilomètres de long ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'or%20est%20si%20mall%C3%A9able%20qu'un%20seul%20gramme%20peut%20%C3%AAtre%20%C3%A9tir%C3%A9%20en%20un%20fil%20de%20plus%20de%20deux%20kilom%C3%A8tres%20de%20long%20%3F"
 },
 {
  "text": "Le son voyage environ quatre fois plus vite dans l'eau que dans l'air.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son voyage environ quatre fois plus vite dans l'eau que dans l'air ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20voyage%20environ%20quatre%20fois%20plus%20vite%20dans%20l'eau%20que%20dans%20l'air%20%3F"
 },
 {
  "text": "Les bulles de savon éclatent parce que l'eau s'évapore, mais elles peuvent geler et former de délicates sphères de glace par grand froid.",
  "source": "Perplexity",
  "question": "Est-il vrai que les bulles de savon éclatent parce que l'eau s'évapore, mais elles peuvent geler et former de délicates sphères de glace par grand froid ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20bulles%20de%20savon%20%C3%A9clatent%20parce%20que%20l'eau%20s'%C3%A9vapore%2C%20mais%20elles%20peuvent%20geler%20et%20former%20de%20d%C3%A9licates%20sph%C3%A8res%20de%20glace%20par%20grand%20froid%20%3F"
 },
 {
  "text": "Le mercure est le seul métal liquide à température ambiante.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mercure est le seul métal liquide à température ambiante ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mercure%20est%20le%20seul%20m%C3%A9tal%20liquide%20%C3%A0%20temp%C3%A9rature%20ambiante%20%3F"
 },
 {
  "text": "La foudre frappe la Terre environ une centaine de fois par seconde à l'échelle du globe.",
  "source": "Perplexity",
  "question": "Est-il vrai que la foudre frappe la Terre environ une centaine de fois par seconde à l'échelle du globe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20foudre%20frappe%20la%20Terre%20environ%20une%20centaine%20de%20fois%20par%20seconde%20%C3%A0%20l'%C3%A9chelle%20du%20globe%20%3F"
 },
 {
  "text": "Le tungstène possède le point de fusion le plus élevé de tous les métaux, environ 3 422 degrés Celsius.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tungstène possède le point de fusion le plus élevé de tous les métaux, environ 3 422 degrés Celsius ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tungst%C3%A8ne%20poss%C3%A8de%20le%20point%20de%20fusion%20le%20plus%20%C3%A9lev%C3%A9%20de%20tous%20les%20m%C3%A9taux%2C%20environ%203%C2%A0422%20degr%C3%A9s%20Celsius%20%3F"
 },
 {
  "text": "Un objet chaud émet de la lumière : c'est pourquoi le métal chauffé devient rouge puis blanc.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un objet chaud émet de la lumière : c'est pourquoi le métal chauffé devient rouge puis blanc ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20objet%20chaud%20%C3%A9met%20de%20la%20lumi%C3%A8re%C2%A0%3A%20c'est%20pourquoi%20le%20m%C3%A9tal%20chauff%C3%A9%20devient%20rouge%20puis%20blanc%20%3F"
 },
 {
  "text": "L'eau peut exister simultanément à l'état solide, liquide et gazeux à son point triple, une condition très précise de température et de pression.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau peut exister simultanément à l'état solide, liquide et gazeux à son point triple, une condition très précise de température et de pression ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20peut%20exister%20simultan%C3%A9ment%20%C3%A0%20l'%C3%A9tat%20solide%2C%20liquide%20et%20gazeux%20%C3%A0%20son%20point%20triple%2C%20une%20condition%20tr%C3%A8s%20pr%C3%A9cise%20de%20temp%C3%A9rature%20et%20de%20pression%20%3F"
 },
 {
  "text": "Le graphène, une couche de carbone d'un seul atome d'épaisseur, est environ 200 fois plus résistant que l'acier.",
  "source": "Perplexity",
  "question": "Est-il vrai que le graphène, une couche de carbone d'un seul atome d'épaisseur, est environ 200 fois plus résistant que l'acier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20graph%C3%A8ne%2C%20une%20couche%20de%20carbone%20d'un%20seul%20atome%20d'%C3%A9paisseur%2C%20est%20environ%20200%20fois%20plus%20r%C3%A9sistant%20que%20l'acier%20%3F"
 },
 {
  "text": "Le vide n'est jamais totalement vide : des paires de particules apparaissent et disparaissent en permanence selon la physique quantique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vide n'est jamais totalement vide : des paires de particules apparaissent et disparaissent en permanence selon la physique quantique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20vide%20n'est%20jamais%20totalement%20vide%C2%A0%3A%20des%20paires%20de%20particules%20apparaissent%20et%20disparaissent%20en%20permanence%20selon%20la%20physique%20quantique%20%3F"
 },
 {
  "text": "Un supraconducteur peut faire léviter un aimant en le repoussant totalement, un phénomène spectaculaire à très basse température.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un supraconducteur peut faire léviter un aimant en le repoussant totalement, un phénomène spectaculaire à très basse température ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20supraconducteur%20peut%20faire%20l%C3%A9viter%20un%20aimant%20en%20le%20repoussant%20totalement%2C%20un%20ph%C3%A9nom%C3%A8ne%20spectaculaire%20%C3%A0%20tr%C3%A8s%20basse%20temp%C3%A9rature%20%3F"
 },
 {
  "text": "La couleur bleue du ciel vient de la diffusion de la lumière du Soleil par les molécules de l'air, qui dévie surtout le bleu.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur bleue du ciel vient de la diffusion de la lumière du Soleil par les molécules de l'air, qui dévie surtout le bleu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20bleue%20du%20ciel%20vient%20de%20la%20diffusion%20de%20la%20lumi%C3%A8re%20du%20Soleil%20par%20les%20mol%C3%A9cules%20de%20l'air%2C%20qui%20d%C3%A9vie%20surtout%20le%20bleu%20%3F"
 },
 {
  "text": "Le plutonium et certains éléments radioactifs dégagent tellement d'énergie qu'ils restent tièdes au toucher.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plutonium et certains éléments radioactifs dégagent tellement d'énergie qu'ils restent tièdes au toucher ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plutonium%20et%20certains%20%C3%A9l%C3%A9ments%20radioactifs%20d%C3%A9gagent%20tellement%20d'%C3%A9nergie%20qu'ils%20restent%20ti%C3%A8des%20au%20toucher%20%3F"
 },
 {
  "text": "Le point d'ébullition de l'eau diminue avec l'altitude : au sommet de l'Everest, l'eau bout autour de 70 degrés.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point d'ébullition de l'eau diminue avec l'altitude : au sommet de l'Everest, l'eau bout autour de 70 degrés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20d'%C3%A9bullition%20de%20l'eau%20diminue%20avec%20l'altitude%C2%A0%3A%20au%20sommet%20de%20l'Everest%2C%20l'eau%20bout%20autour%20de%2070%20degr%C3%A9s%20%3F"
 },
 {
  "text": "Une cuillère de trou noir n'existe pas, mais si l'on comprimait la Terre à la taille d'une bille, elle deviendrait un trou noir.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une cuillère de trou noir n'existe pas, mais si l'on comprimait la Terre à la taille d'une bille, elle deviendrait un trou noir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20cuill%C3%A8re%20de%20trou%20noir%20n'existe%20pas%2C%20mais%20si%20l'on%20comprimait%20la%20Terre%20%C3%A0%20la%20taille%20d'une%20bille%2C%20elle%20deviendrait%20un%20trou%20noir%20%3F"
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
  "text": "Un groupe de flamants roses s'appelle une flamboyance.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un groupe de flamants roses s'appelle une flamboyance ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20groupe%20de%20flamants%20roses%20s'appelle%20une%20flamboyance%20%3F"
 },
 {
  "text": "Les vaches ont des amies proches et se stressent lorsqu'on les sépare de leurs compagnes préférées.",
  "source": "Perplexity",
  "question": "Est-il vrai que les vaches ont des amies proches et se stressent lorsqu'on les sépare de leurs compagnes préférées ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20vaches%20ont%20des%20amies%20proches%20et%20se%20stressent%20lorsqu'on%20les%20s%C3%A9pare%20de%20leurs%20compagnes%20pr%C3%A9f%C3%A9r%C3%A9es%20%3F"
 },
 {
  "text": "Les dauphins se donnent des noms : chacun a un sifflement signature qui l'identifie.",
  "source": "Perplexity",
  "question": "Est-il vrai que les dauphins se donnent des noms : chacun a un sifflement signature qui l'identifie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20dauphins%20se%20donnent%20des%20noms%C2%A0%3A%20chacun%20a%20un%20sifflement%20signature%20qui%20l'identifie%20%3F"
 },
 {
  "text": "Les fourmis ne dorment jamais vraiment comme nous, mais font des centaines de micro-siestes par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis ne dorment jamais vraiment comme nous, mais font des centaines de micro-siestes par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20ne%20dorment%20jamais%20vraiment%20comme%20nous%2C%20mais%20font%20des%20centaines%20de%20micro-siestes%20par%20jour%20%3F"
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
  "text": "Les manchots offrent parfois des cailloux à leur partenaire lors de la parade amoureuse.",
  "source": "Perplexity",
  "question": "Est-il vrai que les manchots offrent parfois des cailloux à leur partenaire lors de la parade amoureuse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20manchots%20offrent%20parfois%20des%20cailloux%20%C3%A0%20leur%20partenaire%20lors%20de%20la%20parade%20amoureuse%20%3F"
 },
 {
  "text": "Un escargot peut dormir pendant plusieurs années d'affilée en cas de conditions défavorables.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un escargot peut dormir pendant plusieurs années d'affilée en cas de conditions défavorables ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20escargot%20peut%20dormir%20pendant%20plusieurs%20ann%C3%A9es%20d'affil%C3%A9e%20en%20cas%20de%20conditions%20d%C3%A9favorables%20%3F"
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
  "text": "Le venin d'une seule pieuvre à anneaux bleus pourrait tuer plusieurs adultes, et il n'existe pas d'antidote.",
  "source": "Perplexity",
  "question": "Est-il vrai que le venin d'une seule pieuvre à anneaux bleus pourrait tuer plusieurs adultes, et il n'existe pas d'antidote ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20venin%20d'une%20seule%20pieuvre%20%C3%A0%20anneaux%20bleus%20pourrait%20tuer%20plusieurs%20adultes%2C%20et%20il%20n'existe%20pas%20d'antidote%20%3F"
 },
 {
  "text": "Les crocodiles ne peuvent pas tirer la langue, celle-ci étant fixée au fond de leur bouche.",
  "source": "Perplexity",
  "question": "Est-il vrai que les crocodiles ne peuvent pas tirer la langue, celle-ci étant fixée au fond de leur bouche ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20crocodiles%20ne%20peuvent%20pas%20tirer%20la%20langue%2C%20celle-ci%20%C3%A9tant%20fix%C3%A9e%20au%20fond%20de%20leur%20bouche%20%3F"
 },
 {
  "text": "Les chevaux et les vaches peuvent dormir debout grâce à un système de verrouillage de leurs articulations.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chevaux et les vaches peuvent dormir debout grâce à un système de verrouillage de leurs articulations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chevaux%20et%20les%20vaches%20peuvent%20dormir%20debout%20gr%C3%A2ce%20%C3%A0%20un%20syst%C3%A8me%20de%20verrouillage%20de%20leurs%20articulations%20%3F"
 },
 {
  "text": "Le colibri est le seul oiseau capable de voler en marche arrière.",
  "source": "Perplexity",
  "question": "Est-il vrai que le colibri est le seul oiseau capable de voler en marche arrière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20colibri%20est%20le%20seul%20oiseau%20capable%20de%20voler%20en%20marche%20arri%C3%A8re%20%3F"
 },
 {
  "text": "Les éléphants sont parmi les rares animaux à se reconnaître dans un miroir.",
  "source": "Perplexity",
  "question": "Est-il vrai que les éléphants sont parmi les rares animaux à se reconnaître dans un miroir ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%A9l%C3%A9phants%20sont%20parmi%20les%20rares%20animaux%20%C3%A0%20se%20reconna%C3%AEtre%20dans%20un%20miroir%20%3F"
 },
 {
  "text": "Une puce peut sauter environ cent fois sa propre hauteur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une puce peut sauter environ cent fois sa propre hauteur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20puce%20peut%20sauter%20environ%20cent%20fois%20sa%20propre%20hauteur%20%3F"
 },
 {
  "text": "Les étoiles de mer n'ont pas de cerveau ni de sang, et se déplacent grâce à un système hydraulique.",
  "source": "Perplexity",
  "question": "Est-il vrai que les étoiles de mer n'ont pas de cerveau ni de sang, et se déplacent grâce à un système hydraulique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%A9toiles%20de%20mer%20n'ont%20pas%20de%20cerveau%20ni%20de%20sang%2C%20et%20se%20d%C3%A9placent%20gr%C3%A2ce%20%C3%A0%20un%20syst%C3%A8me%20hydraulique%20%3F"
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
  "text": "Les paresseux digèrent si lentement qu'un repas peut mettre plusieurs semaines à être assimilé.",
  "source": "Perplexity",
  "question": "Est-il vrai que les paresseux digèrent si lentement qu'un repas peut mettre plusieurs semaines à être assimilé ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20paresseux%20dig%C3%A8rent%20si%20lentement%20qu'un%20repas%20peut%20mettre%20plusieurs%20semaines%20%C3%A0%20%C3%AAtre%20assimil%C3%A9%20%3F"
 },
 {
  "text": "Certaines méduses, comme Turritopsis dohrnii, peuvent inverser leur cycle de vie et rajeunir, ce qui leur vaut le surnom de méduse immortelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines méduses, comme Turritopsis dohrnii, peuvent inverser leur cycle de vie et rajeunir, ce qui leur vaut le surnom de méduse immortelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20m%C3%A9duses%2C%20comme%20Turritopsis%20dohrnii%2C%20peuvent%20inverser%20leur%20cycle%20de%20vie%20et%20rajeunir%2C%20ce%20qui%20leur%20vaut%20le%20surnom%20de%20m%C3%A9duse%20immortelle%20%3F"
 },
 {
  "text": "Le renard des sables peut se passer de boire longtemps en tirant l'eau de sa nourriture.",
  "source": "Perplexity",
  "question": "Est-il vrai que le renard des sables peut se passer de boire longtemps en tirant l'eau de sa nourriture ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20renard%20des%20sables%20peut%20se%20passer%20de%20boire%20longtemps%20en%20tirant%20l'eau%20de%20sa%20nourriture%20%3F"
 },
 {
  "text": "Les chats domestiques partagent environ 95 pour cent de leur ADN avec le tigre.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chats domestiques partagent environ 95 pour cent de leur ADN avec le tigre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chats%20domestiques%20partagent%20environ%2095%20pour%20cent%20de%20leur%20ADN%20avec%20le%20tigre%20%3F"
 },
 {
  "text": "Les hippopotames sécrètent une substance rougeâtre qui agit comme une crème solaire naturelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les hippopotames sécrètent une substance rougeâtre qui agit comme une crème solaire naturelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20hippopotames%20s%C3%A9cr%C3%A8tent%20une%20substance%20rouge%C3%A2tre%20qui%20agit%20comme%20une%20cr%C3%A8me%20solaire%20naturelle%20%3F"
 },
 {
  "text": "Le narval possède une longue défense qui est en réalité une dent traversant sa lèvre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le narval possède une longue défense qui est en réalité une dent traversant sa lèvre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20narval%20poss%C3%A8de%20une%20longue%20d%C3%A9fense%20qui%20est%20en%20r%C3%A9alit%C3%A9%20une%20dent%20traversant%20sa%20l%C3%A8vre%20%3F"
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
  "text": "Les moutons peuvent reconnaître et mémoriser des dizaines de visages, humains comme ovins, pendant des années.",
  "source": "Perplexity",
  "question": "Est-il vrai que les moutons peuvent reconnaître et mémoriser des dizaines de visages, humains comme ovins, pendant des années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20moutons%20peuvent%20reconna%C3%AEtre%20et%20m%C3%A9moriser%20des%20dizaines%20de%20visages%2C%20humains%20comme%20ovins%2C%20pendant%20des%20ann%C3%A9es%20%3F"
 },
 {
  "text": "Les chauves-souris sont les seuls mammifères capables de voler réellement, et non de planer.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chauves-souris sont les seuls mammifères capables de voler réellement, et non de planer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chauves-souris%20sont%20les%20seuls%20mammif%C3%A8res%20capables%20de%20voler%20r%C3%A9ellement%2C%20et%20non%20de%20planer%20%3F"
 },
 {
  "text": "Le seul mammifère ne pouvant pas sauter est l'éléphant.",
  "source": "Perplexity",
  "question": "Est-il vrai que le seul mammifère ne pouvant pas sauter est l'éléphant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20seul%20mammif%C3%A8re%20ne%20pouvant%20pas%20sauter%20est%20l'%C3%A9l%C3%A9phant%20%3F"
 },
 {
  "text": "Les corbeaux fabriquent des outils, planifient l'avenir et gardent rancune envers des humains précis.",
  "source": "Perplexity",
  "question": "Est-il vrai que les corbeaux fabriquent des outils, planifient l'avenir et gardent rancune envers des humains précis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20corbeaux%20fabriquent%20des%20outils%2C%20planifient%20l'avenir%20et%20gardent%20rancune%20envers%20des%20humains%20pr%C3%A9cis%20%3F"
 },
 {
  "text": "Les araignées de mer respirent et font circuler leur sang en partie grâce à leurs intestins situés dans leurs pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les araignées de mer respirent et font circuler leur sang en partie grâce à leurs intestins situés dans leurs pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20araign%C3%A9es%20de%20mer%20respirent%20et%20font%20circuler%20leur%20sang%20en%20partie%20gr%C3%A2ce%20%C3%A0%20leurs%20intestins%20situ%C3%A9s%20dans%20leurs%20pattes%20%3F"
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
  "text": "Une seule ruche peut nécessiter le nectar de plus de deux millions de fleurs pour produire un demi-kilo de miel.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une seule ruche peut nécessiter le nectar de plus de deux millions de fleurs pour produire un demi-kilo de miel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20seule%20ruche%20peut%20n%C3%A9cessiter%20le%20nectar%20de%20plus%20de%20deux%20millions%20de%20fleurs%20pour%20produire%20un%20demi-kilo%20de%20miel%20%3F"
 },
 {
  "text": "Les libellules existaient déjà avant les dinosaures et certaines espèces anciennes avaient une envergure de près de 70 centimètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que les libellules existaient déjà avant les dinosaures et certaines espèces anciennes avaient une envergure de près de 70 centimètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20libellules%20existaient%20d%C3%A9j%C3%A0%20avant%20les%20dinosaures%20et%20certaines%20esp%C3%A8ces%20anciennes%20avaient%20une%20envergure%20de%20pr%C3%A8s%20de%2070%20centim%C3%A8tres%20%3F"
 },
 {
  "text": "Les fourmis peuvent porter de nombreuses fois leur propre poids grâce à la mécanique de leur petite taille.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis peuvent porter de nombreuses fois leur propre poids grâce à la mécanique de leur petite taille ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20peuvent%20porter%20de%20nombreuses%20fois%20leur%20propre%20poids%20gr%C3%A2ce%20%C3%A0%20la%20m%C3%A9canique%20de%20leur%20petite%20taille%20%3F"
 },
 {
  "text": "Le colibri bat des ailes jusqu'à environ 80 fois par seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que le colibri bat des ailes jusqu'à environ 80 fois par seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20colibri%20bat%20des%20ailes%20jusqu'%C3%A0%20environ%2080%20fois%20par%20seconde%20%3F"
 },
 {
  "text": "Les pieuvres goûtent ce qu'elles touchent grâce à des récepteurs situés sur leurs ventouses.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pieuvres goûtent ce qu'elles touchent grâce à des récepteurs situés sur leurs ventouses ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pieuvres%20go%C3%BBtent%20ce%20qu'elles%20touchent%20gr%C3%A2ce%20%C3%A0%20des%20r%C3%A9cepteurs%20situ%C3%A9s%20sur%20leurs%20ventouses%20%3F"
 },
 {
  "text": "Les vaches produisent plus de lait quand on leur fait écouter de la musique douce et régulière.",
  "source": "Perplexity",
  "question": "Est-il vrai que les vaches produisent plus de lait quand on leur fait écouter de la musique douce et régulière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20vaches%20produisent%20plus%20de%20lait%20quand%20on%20leur%20fait%20%C3%A9couter%20de%20la%20musique%20douce%20et%20r%C3%A9guli%C3%A8re%20%3F"
 },
 {
  "text": "Le wombat produit des crottes de forme cubique, un cas unique dans le règne animal.",
  "source": "Perplexity",
  "question": "Est-il vrai que le wombat produit des crottes de forme cubique, un cas unique dans le règne animal ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20wombat%20produit%20des%20crottes%20de%20forme%20cubique%2C%20un%20cas%20unique%20dans%20le%20r%C3%A8gne%20animal%20%3F"
 },
 {
  "text": "Les abeilles communiquent l'emplacement des fleurs par une danse frétillante codée.",
  "source": "Perplexity",
  "question": "Est-il vrai que les abeilles communiquent l'emplacement des fleurs par une danse frétillante codée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20abeilles%20communiquent%20l'emplacement%20des%20fleurs%20par%20une%20danse%20fr%C3%A9tillante%20cod%C3%A9e%20%3F"
 },
 {
  "text": "Un cafard peut survivre plusieurs semaines sans sa tête avant de mourir de faim.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un cafard peut survivre plusieurs semaines sans sa tête avant de mourir de faim ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20cafard%20peut%20survivre%20plusieurs%20semaines%20sans%20sa%20t%C3%AAte%20avant%20de%20mourir%20de%20faim%20%3F"
 },
 {
  "text": "Les serpents n'ont pas de paupières et dorment les yeux ouverts.",
  "source": "Perplexity",
  "question": "Est-il vrai que les serpents n'ont pas de paupières et dorment les yeux ouverts ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20serpents%20n'ont%20pas%20de%20paupi%C3%A8res%20et%20dorment%20les%20yeux%20ouverts%20%3F"
 },
 {
  "text": "Les grenouilles de certaines espèces peuvent geler presque entièrement l'hiver puis dégeler et repartir vivantes au printemps.",
  "source": "Perplexity",
  "question": "Est-il vrai que les grenouilles de certaines espèces peuvent geler presque entièrement l'hiver puis dégeler et repartir vivantes au printemps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20grenouilles%20de%20certaines%20esp%C3%A8ces%20peuvent%20geler%20presque%20enti%C3%A8rement%20l'hiver%20puis%20d%C3%A9geler%20et%20repartir%20vivantes%20au%20printemps%20%3F"
 },
 {
  "text": "L'estomac fabrique une nouvelle couche de mucus tous les quelques jours pour éviter de se digérer lui-même.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'estomac fabrique une nouvelle couche de mucus tous les quelques jours pour éviter de se digérer lui-même ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'estomac%20fabrique%20une%20nouvelle%20couche%20de%20mucus%20tous%20les%20quelques%20jours%20pour%20%C3%A9viter%20de%20se%20dig%C3%A9rer%20lui-m%C3%AAme%20%3F"
 },
 {
  "text": "Vos poumons ont une surface totale d'échange comparable à celle d'un court de tennis s'ils étaient dépliés.",
  "source": "Perplexity",
  "question": "Est-il vrai que vos poumons ont une surface totale d'échange comparable à celle d'un court de tennis s'ils étaient dépliés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vos%20poumons%20ont%20une%20surface%20totale%20d'%C3%A9change%20comparable%20%C3%A0%20celle%20d'un%20court%20de%20tennis%20s'ils%20%C3%A9taient%20d%C3%A9pli%C3%A9s%20%3F"
 },
 {
  "text": "Le corps humain contient assez de carbone pour fabriquer environ 9 000 mines de crayon.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain contient assez de carbone pour fabriquer environ 9 000 mines de crayon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20contient%20assez%20de%20carbone%20pour%20fabriquer%20environ%209%C2%A0000%20mines%20de%20crayon%20%3F"
 },
 {
  "text": "Chaque être humain a une odeur corporelle unique, un peu comme une empreinte digitale olfactive, sauf chez les vrais jumeaux.",
  "source": "Perplexity",
  "question": "Est-il vrai que chaque être humain a une odeur corporelle unique, un peu comme une empreinte digitale olfactive, sauf chez les vrais jumeaux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chaque%20%C3%AAtre%20humain%20a%20une%20odeur%20corporelle%20unique%2C%20un%20peu%20comme%20une%20empreinte%20digitale%20olfactive%2C%20sauf%20chez%20les%20vrais%20jumeaux%20%3F"
 },
 {
  "text": "Les os humains sont, à poids égal, plus résistants que l'acier pour supporter la compression.",
  "source": "Perplexity",
  "question": "Est-il vrai que les os humains sont, à poids égal, plus résistants que l'acier pour supporter la compression ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20os%20humains%20sont%2C%20%C3%A0%20poids%20%C3%A9gal%2C%20plus%20r%C3%A9sistants%20que%20l'acier%20pour%20supporter%20la%20compression%20%3F"
 },
 {
  "text": "Vous êtes légèrement plus grand le matin qu'au coucher, car vos disques vertébraux se tassent au fil de la journée.",
  "source": "Perplexity",
  "question": "Est-il vrai que vous êtes légèrement plus grand le matin qu'au coucher, car vos disques vertébraux se tassent au fil de la journée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vous%20%C3%AAtes%20l%C3%A9g%C3%A8rement%20plus%20grand%20le%20matin%20qu'au%20coucher%2C%20car%20vos%20disques%20vert%C3%A9braux%20se%20tassent%20au%20fil%20de%20la%20journ%C3%A9e%20%3F"
 },
 {
  "text": "L'acide de votre estomac est assez fort pour dissoudre certains métaux, mais votre paroi se renouvelle sans cesse pour résister.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'acide de votre estomac est assez fort pour dissoudre certains métaux, mais votre paroi se renouvelle sans cesse pour résister ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'acide%20de%20votre%20estomac%20est%20assez%20fort%20pour%20dissoudre%20certains%20m%C3%A9taux%2C%20mais%20votre%20paroi%20se%20renouvelle%20sans%20cesse%20pour%20r%C3%A9sister%20%3F"
 },
 {
  "text": "Le corps humain héberge plus de bactéries que de cellules humaines, selon les estimations récentes à peu près à parité.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain héberge plus de bactéries que de cellules humaines, selon les estimations récentes à peu près à parité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20h%C3%A9berge%20plus%20de%20bact%C3%A9ries%20que%20de%20cellules%20humaines%2C%20selon%20les%20estimations%20r%C3%A9centes%20%C3%A0%20peu%20pr%C3%A8s%20%C3%A0%20parit%C3%A9%20%3F"
 },
 {
  "text": "Vos yeux peuvent distinguer plusieurs millions de nuances de couleurs.",
  "source": "Perplexity",
  "question": "Est-il vrai que vos yeux peuvent distinguer plusieurs millions de nuances de couleurs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vos%20yeux%20peuvent%20distinguer%20plusieurs%20millions%20de%20nuances%20de%20couleurs%20%3F"
 },
 {
  "text": "Le cœur humain bat environ 100 000 fois par jour, soit plus de 2,5 milliards de fois dans une vie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cœur humain bat environ 100 000 fois par jour, soit plus de 2,5 milliards de fois dans une vie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20c%C5%93ur%20humain%20bat%20environ%20100%C2%A0000%20fois%20par%20jour%2C%20soit%20plus%20de%202%2C5%20milliards%20de%20fois%20dans%20une%20vie%20%3F"
 },
 {
  "text": "Il est physiquement impossible d'éternuer les yeux ouverts pour la plupart des gens.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il est physiquement impossible d'éternuer les yeux ouverts pour la plupart des gens ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20est%20physiquement%20impossible%20d'%C3%A9ternuer%20les%20yeux%20ouverts%20pour%20la%20plupart%20des%20gens%20%3F"
 },
 {
  "text": "Le fémur, l'os de la cuisse, est l'os le plus long et l'un des plus solides du corps humain.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fémur, l'os de la cuisse, est l'os le plus long et l'un des plus solides du corps humain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20f%C3%A9mur%2C%20l'os%20de%20la%20cuisse%2C%20est%20l'os%20le%20plus%20long%20et%20l'un%20des%20plus%20solides%20du%20corps%20humain%20%3F"
 },
 {
  "text": "Nos empreintes digitales se forment avant la naissance et restent identiques toute la vie.",
  "source": "Perplexity",
  "question": "Est-il vrai que nos empreintes digitales se forment avant la naissance et restent identiques toute la vie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nos%20empreintes%20digitales%20se%20forment%20avant%20la%20naissance%20et%20restent%20identiques%20toute%20la%20vie%20%3F"
 },
 {
  "text": "Le corps humain produit environ un litre et demi de salive par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain produit environ un litre et demi de salive par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20produit%20environ%20un%20litre%20et%20demi%20de%20salive%20par%20jour%20%3F"
 },
 {
  "text": "La cornée de l'œil est l'un des rares tissus du corps à ne recevoir aucun vaisseau sanguin, elle respire directement l'air.",
  "source": "Perplexity",
  "question": "Est-il vrai que la cornée de l'œil est l'un des rares tissus du corps à ne recevoir aucun vaisseau sanguin, elle respire directement l'air ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20corn%C3%A9e%20de%20l'%C5%93il%20est%20l'un%20des%20rares%20tissus%20du%20corps%20%C3%A0%20ne%20recevoir%20aucun%20vaisseau%20sanguin%2C%20elle%20respire%20directement%20l'air%20%3F"
 },
 {
  "text": "Vous clignez des yeux environ 15 à 20 fois par minute, soit des millions de fois par an.",
  "source": "Perplexity",
  "question": "Est-il vrai que vous clignez des yeux environ 15 à 20 fois par minute, soit des millions de fois par an ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vous%20clignez%20des%20yeux%20environ%2015%20%C3%A0%2020%20fois%20par%20minute%2C%20soit%20des%20millions%20de%20fois%20par%20an%20%3F"
 },
 {
  "text": "Les enfants naissent avec environ 300 os, mais les adultes n'en ont que 206 car certains fusionnent.",
  "source": "Perplexity",
  "question": "Est-il vrai que les enfants naissent avec environ 300 os, mais les adultes n'en ont que 206 car certains fusionnent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20enfants%20naissent%20avec%20environ%20300%20os%2C%20mais%20les%20adultes%20n'en%20ont%20que%20206%20car%20certains%20fusionnent%20%3F"
 },
 {
  "text": "L'émail des dents est la substance la plus dure produite par le corps humain.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'émail des dents est la substance la plus dure produite par le corps humain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%A9mail%20des%20dents%20est%20la%20substance%20la%20plus%20dure%20produite%20par%20le%20corps%20humain%20%3F"
 },
 {
  "text": "Le corps humain émet une très faible lueur, invisible à l'œil nu, appelée bioluminescence humaine.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain émet une très faible lueur, invisible à l'œil nu, appelée bioluminescence humaine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20%C3%A9met%20une%20tr%C3%A8s%20faible%20lueur%2C%20invisible%20%C3%A0%20l'%C5%93il%20nu%2C%20appel%C3%A9e%20bioluminescence%20humaine%20%3F"
 },
 {
  "text": "Chaque personne perd environ un demi-kilo de peau morte par an, qui compose une part de la poussière domestique.",
  "source": "Perplexity",
  "question": "Est-il vrai que chaque personne perd environ un demi-kilo de peau morte par an, qui compose une part de la poussière domestique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chaque%20personne%20perd%20environ%20un%20demi-kilo%20de%20peau%20morte%20par%20an%2C%20qui%20compose%20une%20part%20de%20la%20poussi%C3%A8re%20domestique%20%3F"
 },
 {
  "text": "Vos globules rouges font le tour complet de votre corps en environ une minute.",
  "source": "Perplexity",
  "question": "Est-il vrai que vos globules rouges font le tour complet de votre corps en environ une minute ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vos%20globules%20rouges%20font%20le%20tour%20complet%20de%20votre%20corps%20en%20environ%20une%20minute%20%3F"
 },
 {
  "text": "Le foie est le seul organe interne humain capable de se régénérer partiellement après une ablation.",
  "source": "Perplexity",
  "question": "Est-il vrai que le foie est le seul organe interne humain capable de se régénérer partiellement après une ablation ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20foie%20est%20le%20seul%20organe%20interne%20humain%20capable%20de%20se%20r%C3%A9g%C3%A9n%C3%A9rer%20partiellement%20apr%C3%A8s%20une%20ablation%20%3F"
 },
 {
  "text": "Un adulte respire en moyenne plus de 20 000 fois par jour.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un adulte respire en moyenne plus de 20 000 fois par jour ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20adulte%20respire%20en%20moyenne%20plus%20de%2020%C2%A0000%20fois%20par%20jour%20%3F"
 },
 {
  "text": "Les vaisseaux sanguins d'un adulte mis bout à bout pourraient faire plusieurs fois le tour de la Terre.",
  "source": "Perplexity",
  "question": "Est-il vrai que les vaisseaux sanguins d'un adulte mis bout à bout pourraient faire plusieurs fois le tour de la Terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20vaisseaux%20sanguins%20d'un%20adulte%20mis%20bout%20%C3%A0%20bout%20pourraient%20faire%20plusieurs%20fois%20le%20tour%20de%20la%20Terre%20%3F"
 },
 {
  "text": "Le cerveau humain consomme environ 20 pour cent de l'énergie du corps alors qu'il ne pèse que 2 pour cent de la masse.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau humain consomme environ 20 pour cent de l'énergie du corps alors qu'il ne pèse que 2 pour cent de la masse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20humain%20consomme%20environ%2020%20pour%20cent%20de%20l'%C3%A9nergie%20du%20corps%20alors%20qu'il%20ne%20p%C3%A8se%20que%202%20pour%20cent%20de%20la%20masse%20%3F"
 },
 {
  "text": "Les larmes d'émotion ont une composition chimique différente de celles provoquées par un oignon.",
  "source": "Perplexity",
  "question": "Est-il vrai que les larmes d'émotion ont une composition chimique différente de celles provoquées par un oignon ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20larmes%20d'%C3%A9motion%20ont%20une%20composition%20chimique%20diff%C3%A9rente%20de%20celles%20provoqu%C3%A9es%20par%20un%20oignon%20%3F"
 },
 {
  "text": "Vos oreilles et votre nez continuent de grandir toute la vie, contrairement à la plupart des autres parties du corps.",
  "source": "Perplexity",
  "question": "Est-il vrai que vos oreilles et votre nez continuent de grandir toute la vie, contrairement à la plupart des autres parties du corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vos%20oreilles%20et%20votre%20nez%20continuent%20de%20grandir%20toute%20la%20vie%2C%20contrairement%20%C3%A0%20la%20plupart%20des%20autres%20parties%20du%20corps%20%3F"
 },
 {
  "text": "Le rire fait travailler des dizaines de muscles et peut réellement réduire les hormones du stress.",
  "source": "Perplexity",
  "question": "Est-il vrai que le rire fait travailler des dizaines de muscles et peut réellement réduire les hormones du stress ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20rire%20fait%20travailler%20des%20dizaines%20de%20muscles%20et%20peut%20r%C3%A9ellement%20r%C3%A9duire%20les%20hormones%20du%20stress%20%3F"
 },
 {
  "text": "L'être humain est le seul animal connu à rougir de gêne.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'être humain est le seul animal connu à rougir de gêne ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%AAtre%20humain%20est%20le%20seul%20animal%20connu%20%C3%A0%20rougir%20de%20g%C3%AAne%20%3F"
 },
 {
  "text": "Environ 60 pour cent du corps humain adulte est composé d'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'environ 60 pour cent du corps humain adulte est composé d'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'environ%2060%20pour%20cent%20du%20corps%20humain%20adulte%20est%20compos%C3%A9%20d'eau%20%3F"
 },
 {
  "text": "Vos poumons flottent sur l'eau, ce sont les seuls organes humains à le faire.",
  "source": "Perplexity",
  "question": "Est-il vrai que vos poumons flottent sur l'eau, ce sont les seuls organes humains à le faire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vos%20poumons%20flottent%20sur%20l'eau%2C%20ce%20sont%20les%20seuls%20organes%20humains%20%C3%A0%20le%20faire%20%3F"
 },
 {
  "text": "La banane est botaniquement une baie, mais la fraise n'en est pas une.",
  "source": "Perplexity",
  "question": "Est-il vrai que la banane est botaniquement une baie, mais la fraise n'en est pas une ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20banane%20est%20botaniquement%20une%20baie%2C%20mais%20la%20fraise%20n'en%20est%20pas%20une%20%3F"
 },
 {
  "text": "Le chocolat était autrefois consommé comme une boisson amère et servait même de monnaie chez les Aztèques.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chocolat était autrefois consommé comme une boisson amère et servait même de monnaie chez les Aztèques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chocolat%20%C3%A9tait%20autrefois%20consomm%C3%A9%20comme%20une%20boisson%20am%C3%A8re%20et%20servait%20m%C3%AAme%20de%20monnaie%20chez%20les%20Azt%C3%A8ques%20%3F"
 },
 {
  "text": "Les carottes étaient à l'origine surtout violettes ou blanches, la variété orange s'étant popularisée plus tard aux Pays-Bas.",
  "source": "Perplexity",
  "question": "Est-il vrai que les carottes étaient à l'origine surtout violettes ou blanches, la variété orange s'étant popularisée plus tard aux Pays-Bas ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20carottes%20%C3%A9taient%20%C3%A0%20l'origine%20surtout%20violettes%20ou%20blanches%2C%20la%20vari%C3%A9t%C3%A9%20orange%20s'%C3%A9tant%20popularis%C3%A9e%20plus%20tard%20aux%20Pays-Bas%20%3F"
 },
 {
  "text": "La noix de muscade peut être toxique et provoquer des effets étranges si elle est consommée en grande quantité.",
  "source": "Perplexity",
  "question": "Est-il vrai que la noix de muscade peut être toxique et provoquer des effets étranges si elle est consommée en grande quantité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20noix%20de%20muscade%20peut%20%C3%AAtre%20toxique%20et%20provoquer%20des%20effets%20%C3%A9tranges%20si%20elle%20est%20consomm%C3%A9e%20en%20grande%20quantit%C3%A9%20%3F"
 },
 {
  "text": "Le wasabi servi dans la plupart des restaurants est en réalité du raifort coloré, le vrai wasabi étant rare et cher.",
  "source": "Perplexity",
  "question": "Est-il vrai que le wasabi servi dans la plupart des restaurants est en réalité du raifort coloré, le vrai wasabi étant rare et cher ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20wasabi%20servi%20dans%20la%20plupart%20des%20restaurants%20est%20en%20r%C3%A9alit%C3%A9%20du%20raifort%20color%C3%A9%2C%20le%20vrai%20wasabi%20%C3%A9tant%20rare%20et%20cher%20%3F"
 },
 {
  "text": "Les pommes flottent parce qu'elles contiennent environ 25 pour cent d'air.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pommes flottent parce qu'elles contiennent environ 25 pour cent d'air ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pommes%20flottent%20parce%20qu'elles%20contiennent%20environ%2025%20pour%20cent%20d'air%20%3F"
 },
 {
  "text": "Le piment ne brûle pas réellement la bouche : la capsaïcine trompe les récepteurs de la chaleur sans causer de brûlure physique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le piment ne brûle pas réellement la bouche : la capsaïcine trompe les récepteurs de la chaleur sans causer de brûlure physique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20piment%20ne%20br%C3%BBle%20pas%20r%C3%A9ellement%20la%20bouche%C2%A0%3A%20la%20capsa%C3%AFcine%20trompe%20les%20r%C3%A9cepteurs%20de%20la%20chaleur%20sans%20causer%20de%20br%C3%BBlure%20physique%20%3F"
 },
 {
  "text": "L'ananas met environ deux à trois ans à pousser avant de donner un seul fruit.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ananas met environ deux à trois ans à pousser avant de donner un seul fruit ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'ananas%20met%20environ%20deux%20%C3%A0%20trois%20ans%20%C3%A0%20pousser%20avant%20de%20donner%20un%20seul%20fruit%20%3F"
 },
 {
  "text": "Le safran est l'épice la plus chère du monde, car il faut des dizaines de milliers de fleurs pour obtenir un kilo.",
  "source": "Perplexity",
  "question": "Est-il vrai que le safran est l'épice la plus chère du monde, car il faut des dizaines de milliers de fleurs pour obtenir un kilo ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20safran%20est%20l'%C3%A9pice%20la%20plus%20ch%C3%A8re%20du%20monde%2C%20car%20il%20faut%20des%20dizaines%20de%20milliers%20de%20fleurs%20pour%20obtenir%20un%20kilo%20%3F"
 },
 {
  "text": "La cacahuète n'est pas une noix mais une légumineuse, plus proche des pois et des lentilles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la cacahuète n'est pas une noix mais une légumineuse, plus proche des pois et des lentilles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20cacahu%C3%A8te%20n'est%20pas%20une%20noix%20mais%20une%20l%C3%A9gumineuse%2C%20plus%20proche%20des%20pois%20et%20des%20lentilles%20%3F"
 },
 {
  "text": "Le fromage est l'aliment le plus volé au monde selon plusieurs études sur le vol en magasin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fromage est l'aliment le plus volé au monde selon plusieurs études sur le vol en magasin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fromage%20est%20l'aliment%20le%20plus%20vol%C3%A9%20au%20monde%20selon%20plusieurs%20%C3%A9tudes%20sur%20le%20vol%20en%20magasin%20%3F"
 },
 {
  "text": "Un épi de maïs possède presque toujours un nombre pair de rangées de grains.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un épi de maïs possède presque toujours un nombre pair de rangées de grains ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20%C3%A9pi%20de%20ma%C3%AFs%20poss%C3%A8de%20presque%20toujours%20un%20nombre%20pair%20de%20rang%C3%A9es%20de%20grains%20%3F"
 },
 {
  "text": "Le miel est la seule nourriture produite par un insecte que les humains consomment couramment.",
  "source": "Perplexity",
  "question": "Est-il vrai que le miel est la seule nourriture produite par un insecte que les humains consomment couramment ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20miel%20est%20la%20seule%20nourriture%20produite%20par%20un%20insecte%20que%20les%20humains%20consomment%20couramment%20%3F"
 },
 {
  "text": "Les tomates étaient longtemps considérées comme toxiques en Europe car les riches tombaient malades, en réalité à cause du plomb de leur vaisselle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les tomates étaient longtemps considérées comme toxiques en Europe car les riches tombaient malades, en réalité à cause du plomb de leur vaisselle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20tomates%20%C3%A9taient%20longtemps%20consid%C3%A9r%C3%A9es%20comme%20toxiques%20en%20Europe%20car%20les%20riches%20tombaient%20malades%2C%20en%20r%C3%A9alit%C3%A9%20%C3%A0%20cause%20du%20plomb%20de%20leur%20vaisselle%20%3F"
 },
 {
  "text": "La couleur rouge de nombreux bonbons et yaourts provenait parfois d'un colorant tiré d'un insecte, la cochenille.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur rouge de nombreux bonbons et yaourts provenait parfois d'un colorant tiré d'un insecte, la cochenille ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20rouge%20de%20nombreux%20bonbons%20et%20yaourts%20provenait%20parfois%20d'un%20colorant%20tir%C3%A9%20d'un%20insecte%2C%20la%20cochenille%20%3F"
 },
 {
  "text": "Le concombre est composé d'environ 95 pour cent d'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le concombre est composé d'environ 95 pour cent d'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20concombre%20est%20compos%C3%A9%20d'environ%2095%20pour%20cent%20d'eau%20%3F"
 },
 {
  "text": "Le pain de mie complet et le pain blanc ont un nombre de calories assez proche, la différence tient surtout aux fibres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pain de mie complet et le pain blanc ont un nombre de calories assez proche, la différence tient surtout aux fibres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pain%20de%20mie%20complet%20et%20le%20pain%20blanc%20ont%20un%20nombre%20de%20calories%20assez%20proche%2C%20la%20diff%C3%A9rence%20tient%20surtout%20aux%20fibres%20%3F"
 },
 {
  "text": "La vanille est la deuxième épice la plus chère au monde après le safran.",
  "source": "Perplexity",
  "question": "Est-il vrai que la vanille est la deuxième épice la plus chère au monde après le safran ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20vanille%20est%20la%20deuxi%C3%A8me%20%C3%A9pice%20la%20plus%20ch%C3%A8re%20au%20monde%20apr%C3%A8s%20le%20safran%20%3F"
 },
 {
  "text": "Le sucre n'a pas de date de péremption réelle et peut se conserver indéfiniment s'il reste au sec.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sucre n'a pas de date de péremption réelle et peut se conserver indéfiniment s'il reste au sec ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sucre%20n'a%20pas%20de%20date%20de%20p%C3%A9remption%20r%C3%A9elle%20et%20peut%20se%20conserver%20ind%C3%A9finiment%20s'il%20reste%20au%20sec%20%3F"
 },
 {
  "text": "La couleur d'un poivron vert, jaune ou rouge indique souvent son stade de maturité, le rouge étant le plus mûr.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur d'un poivron vert, jaune ou rouge indique souvent son stade de maturité, le rouge étant le plus mûr ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20d'un%20poivron%20vert%2C%20jaune%20ou%20rouge%20indique%20souvent%20son%20stade%20de%20maturit%C3%A9%2C%20le%20rouge%20%C3%A9tant%20le%20plus%20m%C3%BBr%20%3F"
 },
 {
  "text": "Le café était d'abord mangé sous forme de baies mélangées à de la graisse avant d'être bu en infusion.",
  "source": "Perplexity",
  "question": "Est-il vrai que le café était d'abord mangé sous forme de baies mélangées à de la graisse avant d'être bu en infusion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20caf%C3%A9%20%C3%A9tait%20d'abord%20mang%C3%A9%20sous%20forme%20de%20baies%20m%C3%A9lang%C3%A9es%20%C3%A0%20de%20la%20graisse%20avant%20d'%C3%AAtre%20bu%20en%20infusion%20%3F"
 },
 {
  "text": "Une pomme de terre laissée à la lumière verdit et produit une substance légèrement toxique appelée solanine.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une pomme de terre laissée à la lumière verdit et produit une substance légèrement toxique appelée solanine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20pomme%20de%20terre%20laiss%C3%A9e%20%C3%A0%20la%20lumi%C3%A8re%20verdit%20et%20produit%20une%20substance%20l%C3%A9g%C3%A8rement%20toxique%20appel%C3%A9e%20solanine%20%3F"
 },
 {
  "text": "Le champagne contient des millions de bulles, mais leur nombre exact dépend surtout de la propreté du verre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le champagne contient des millions de bulles, mais leur nombre exact dépend surtout de la propreté du verre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20champagne%20contient%20des%20millions%20de%20bulles%2C%20mais%20leur%20nombre%20exact%20d%C3%A9pend%20surtout%20de%20la%20propret%C3%A9%20du%20verre%20%3F"
 },
 {
  "text": "Le lait de vache n'a pas toujours été bien digéré par les humains adultes, la tolérance au lactose est une adaptation relativement récente.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lait de vache n'a pas toujours été bien digéré par les humains adultes, la tolérance au lactose est une adaptation relativement récente ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20lait%20de%20vache%20n'a%20pas%20toujours%20%C3%A9t%C3%A9%20bien%20dig%C3%A9r%C3%A9%20par%20les%20humains%20adultes%2C%20la%20tol%C3%A9rance%20au%20lactose%20est%20une%20adaptation%20relativement%20r%C3%A9cente%20%3F"
 },
 {
  "text": "La gousse de vanille provient d'une orchidée, la seule de cette famille cultivée pour son fruit comestible.",
  "source": "Perplexity",
  "question": "Est-il vrai que la gousse de vanille provient d'une orchidée, la seule de cette famille cultivée pour son fruit comestible ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20gousse%20de%20vanille%20provient%20d'une%20orchid%C3%A9e%2C%20la%20seule%20de%20cette%20famille%20cultiv%C3%A9e%20pour%20son%20fruit%20comestible%20%3F"
 },
 {
  "text": "Les frites, malgré leur nom anglais French fries, sont revendiquées à la fois par la Belgique et la France.",
  "source": "Perplexity",
  "question": "Est-il vrai que les frites, malgré leur nom anglais French fries, sont revendiquées à la fois par la Belgique et la France ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20frites%2C%20malgr%C3%A9%20leur%20nom%20anglais%20French%20fries%2C%20sont%20revendiqu%C3%A9es%20%C3%A0%20la%20fois%20par%20la%20Belgique%20et%20la%20France%20%3F"
 },
 {
  "text": "Le chocolat blanc ne contient pas de cacao solide, seulement du beurre de cacao, du sucre et du lait.",
  "source": "Perplexity",
  "question": "Est-il vrai que le chocolat blanc ne contient pas de cacao solide, seulement du beurre de cacao, du sucre et du lait ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20chocolat%20blanc%20ne%20contient%20pas%20de%20cacao%20solide%2C%20seulement%20du%20beurre%20de%20cacao%2C%20du%20sucre%20et%20du%20lait%20%3F"
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
  "text": "On utilisait autrefois les crânes et les ossements comme monnaie ou objets rituels dans plusieurs cultures.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on utilisait autrefois les crânes et les ossements comme monnaie ou objets rituels dans plusieurs cultures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20utilisait%20autrefois%20les%20cr%C3%A2nes%20et%20les%20ossements%20comme%20monnaie%20ou%20objets%20rituels%20dans%20plusieurs%20cultures%20%3F"
 },
 {
  "text": "Napoléon Bonaparte n'était pas particulièrement petit pour son époque : la légende de sa petite taille vient d'une confusion d'unités de mesure.",
  "source": "Perplexity",
  "question": "Est-il vrai que napoléon Bonaparte n'était pas particulièrement petit pour son époque : la légende de sa petite taille vient d'une confusion d'unités de mesure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20napol%C3%A9on%20Bonaparte%20n'%C3%A9tait%20pas%20particuli%C3%A8rement%20petit%20pour%20son%20%C3%A9poque%C2%A0%3A%20la%20l%C3%A9gende%20de%20sa%20petite%20taille%20vient%20d'une%20confusion%20d'unit%C3%A9s%20de%20mesure%20%3F"
 },
 {
  "text": "Les gladiateurs romains étaient souvent végétariens et surnommés mangeurs d'orge.",
  "source": "Perplexity",
  "question": "Est-il vrai que les gladiateurs romains étaient souvent végétariens et surnommés mangeurs d'orge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gladiateurs%20romains%20%C3%A9taient%20souvent%20v%C3%A9g%C3%A9tariens%20et%20surnomm%C3%A9s%20mangeurs%20d'orge%20%3F"
 },
 {
  "text": "Pendant la construction, la tour Eiffel devait être démontée au bout de vingt ans avant d'être sauvée grâce à son utilité pour la radio.",
  "source": "Perplexity",
  "question": "Est-il vrai que pendant la construction, la tour Eiffel devait être démontée au bout de vingt ans avant d'être sauvée grâce à son utilité pour la radio ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20pendant%20la%20construction%2C%20la%20tour%20Eiffel%20devait%20%C3%AAtre%20d%C3%A9mont%C3%A9e%20au%20bout%20de%20vingt%20ans%20avant%20d'%C3%AAtre%20sauv%C3%A9e%20gr%C3%A2ce%20%C3%A0%20son%20utilit%C3%A9%20pour%20la%20radio%20%3F"
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
  "text": "La Grande Muraille de Chine n'est pas visible à l'œil nu depuis l'espace, contrairement à une idée reçue tenace.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Grande Muraille de Chine n'est pas visible à l'œil nu depuis l'espace, contrairement à une idée reçue tenace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Grande%20Muraille%20de%20Chine%20n'est%20pas%20visible%20%C3%A0%20l'%C5%93il%20nu%20depuis%20l'espace%2C%20contrairement%20%C3%A0%20une%20id%C3%A9e%20re%C3%A7ue%20tenace%20%3F"
 },
 {
  "text": "Le premier ordinateur programmable pesait plusieurs tonnes et occupait une pièce entière.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier ordinateur programmable pesait plusieurs tonnes et occupait une pièce entière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20ordinateur%20programmable%20pesait%20plusieurs%20tonnes%20et%20occupait%20une%20pi%C3%A8ce%20enti%C3%A8re%20%3F"
 },
 {
  "text": "Les anciens Égyptiens se rasaient les sourcils en signe de deuil à la mort de leur chat.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anciens Égyptiens se rasaient les sourcils en signe de deuil à la mort de leur chat ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anciens%20%C3%89gyptiens%20se%20rasaient%20les%20sourcils%20en%20signe%20de%20deuil%20%C3%A0%20la%20mort%20de%20leur%20chat%20%3F"
 },
 {
  "text": "Le trajet en diligence qui prenait des semaines au 19e siècle se fait aujourd'hui en quelques heures d'avion.",
  "source": "Perplexity",
  "question": "Est-il vrai que le trajet en diligence qui prenait des semaines au 19e siècle se fait aujourd'hui en quelques heures d'avion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20trajet%20en%20diligence%20qui%20prenait%20des%20semaines%20au%2019e%20si%C3%A8cle%20se%20fait%20aujourd'hui%20en%20quelques%20heures%20d'avion%20%3F"
 },
 {
  "text": "La ville de Pompéi a été si bien conservée par les cendres du Vésuve que l'on y voit encore des graffitis d'époque.",
  "source": "Perplexity",
  "question": "Est-il vrai que la ville de Pompéi a été si bien conservée par les cendres du Vésuve que l'on y voit encore des graffitis d'époque ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20ville%20de%20Pomp%C3%A9i%20a%20%C3%A9t%C3%A9%20si%20bien%20conserv%C3%A9e%20par%20les%20cendres%20du%20V%C3%A9suve%20que%20l'on%20y%20voit%20encore%20des%20graffitis%20d'%C3%A9poque%20%3F"
 },
 {
  "text": "Les Vikings n'avaient pas de casques à cornes : cette image vient surtout d'opéras et d'illustrations du 19e siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Vikings n'avaient pas de casques à cornes : cette image vient surtout d'opéras et d'illustrations du 19e siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Vikings%20n'avaient%20pas%20de%20casques%20%C3%A0%20cornes%C2%A0%3A%20cette%20image%20vient%20surtout%20d'op%C3%A9ras%20et%20d'illustrations%20du%2019e%20si%C3%A8cle%20%3F"
 },
 {
  "text": "Le stéthoscope a été inventé parce qu'un médecin français trouvait gênant de poser son oreille sur la poitrine des patients.",
  "source": "Perplexity",
  "question": "Est-il vrai que le stéthoscope a été inventé parce qu'un médecin français trouvait gênant de poser son oreille sur la poitrine des patients ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20st%C3%A9thoscope%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20parce%20qu'un%20m%C3%A9decin%20fran%C3%A7ais%20trouvait%20g%C3%AAnant%20de%20poser%20son%20oreille%20sur%20la%20poitrine%20des%20patients%20%3F"
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
  "text": "L'Empire romain a duré si longtemps que sa partie orientale, Byzance, a survécu près de mille ans après la chute de Rome.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Empire romain a duré si longtemps que sa partie orientale, Byzance, a survécu près de mille ans après la chute de Rome ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Empire%20romain%20a%20dur%C3%A9%20si%20longtemps%20que%20sa%20partie%20orientale%2C%20Byzance%2C%20a%20surv%C3%A9cu%20pr%C3%A8s%20de%20mille%20ans%20apr%C3%A8s%20la%20chute%20de%20Rome%20%3F"
 },
 {
  "text": "Le premier vol motorisé des frères Wright en 1903 a duré seulement une douzaine de secondes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier vol motorisé des frères Wright en 1903 a duré seulement une douzaine de secondes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20vol%20motoris%C3%A9%20des%20fr%C3%A8res%20Wright%20en%201903%20a%20dur%C3%A9%20seulement%20une%20douzaine%20de%20secondes%20%3F"
 },
 {
  "text": "Avant les réveils, des hommes payés frappaient aux fenêtres avec de longues perches pour réveiller les ouvriers en Angleterre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'avant les réveils, des hommes payés frappaient aux fenêtres avec de longues perches pour réveiller les ouvriers en Angleterre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'avant%20les%20r%C3%A9veils%2C%20des%20hommes%20pay%C3%A9s%20frappaient%20aux%20fen%C3%AAtres%20avec%20de%20longues%20perches%20pour%20r%C3%A9veiller%20les%20ouvriers%20en%20Angleterre%20%3F"
 },
 {
  "text": "Les anciens Grecs organisaient les Jeux olympiques et faisaient une trêve des guerres pendant leur déroulement.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anciens Grecs organisaient les Jeux olympiques et faisaient une trêve des guerres pendant leur déroulement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anciens%20Grecs%20organisaient%20les%20Jeux%20olympiques%20et%20faisaient%20une%20tr%C3%AAve%20des%20guerres%20pendant%20leur%20d%C3%A9roulement%20%3F"
 },
 {
  "text": "La bibliothèque d'Alexandrie aurait perdu une immense partie du savoir antique lors de sa disparition progressive.",
  "source": "Perplexity",
  "question": "Est-il vrai que la bibliothèque d'Alexandrie aurait perdu une immense partie du savoir antique lors de sa disparition progressive ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20biblioth%C3%A8que%20d'Alexandrie%20aurait%20perdu%20une%20immense%20partie%20du%20savoir%20antique%20lors%20de%20sa%20disparition%20progressive%20%3F"
 },
 {
  "text": "Le mot salaire vient du latin salarium, lié au sel (sal), denrée très précieuse dans l'Antiquité.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot salaire vient du latin salarium, lié au sel (sal), denrée très précieuse dans l'Antiquité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20salaire%20vient%20du%20latin%20salarium%2C%20li%C3%A9%20au%20sel%20(sal)%2C%20denr%C3%A9e%20tr%C3%A8s%20pr%C3%A9cieuse%20dans%20l'Antiquit%C3%A9%20%3F"
 },
 {
  "text": "La chute du mur de Berlin en 1989 a été précipitée en partie par une annonce administrative mal formulée.",
  "source": "Perplexity",
  "question": "Est-il vrai que la chute du mur de Berlin en 1989 a été précipitée en partie par une annonce administrative mal formulée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20chute%20du%20mur%20de%20Berlin%20en%201989%20a%20%C3%A9t%C3%A9%20pr%C3%A9cipit%C3%A9e%20en%20partie%20par%20une%20annonce%20administrative%20mal%20formul%C3%A9e%20%3F"
 },
 {
  "text": "Les pharaons d'Égypte se faisaient parfois enterrer avec des serviteurs, de la nourriture et des objets pour l'au-delà.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pharaons d'Égypte se faisaient parfois enterrer avec des serviteurs, de la nourriture et des objets pour l'au-delà ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pharaons%20d'%C3%89gypte%20se%20faisaient%20parfois%20enterrer%20avec%20des%20serviteurs%2C%20de%20la%20nourriture%20et%20des%20objets%20pour%20l'au-del%C3%A0%20%3F"
 },
 {
  "text": "La Russie est si vaste qu'elle s'étend sur onze fuseaux horaires.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Russie est si vaste qu'elle s'étend sur onze fuseaux horaires ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Russie%20est%20si%20vaste%20qu'elle%20s'%C3%A9tend%20sur%20onze%20fuseaux%20horaires%20%3F"
 },
 {
  "text": "Le Sahara n'est pas le plus grand désert du monde : l'Antarctique, un désert froid, est bien plus étendu.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Sahara n'est pas le plus grand désert du monde : l'Antarctique, un désert froid, est bien plus étendu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Sahara%20n'est%20pas%20le%20plus%20grand%20d%C3%A9sert%20du%20monde%C2%A0%3A%20l'Antarctique%2C%20un%20d%C3%A9sert%20froid%2C%20est%20bien%20plus%20%C3%A9tendu%20%3F"
 },
 {
  "text": "Le point le plus profond de l'océan, la fosse des Mariannes, est plus profond que l'Everest est haut.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus profond de l'océan, la fosse des Mariannes, est plus profond que l'Everest est haut ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20profond%20de%20l'oc%C3%A9an%2C%20la%20fosse%20des%20Mariannes%2C%20est%20plus%20profond%20que%20l'Everest%20est%20haut%20%3F"
 },
 {
  "text": "Il existe un pays, le Vatican, si petit qu'il tiendrait plusieurs fois dans un grand parc urbain.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe un pays, le Vatican, si petit qu'il tiendrait plusieurs fois dans un grand parc urbain ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20un%20pays%2C%20le%20Vatican%2C%20si%20petit%20qu'il%20tiendrait%20plusieurs%20fois%20dans%20un%20grand%20parc%20urbain%20%3F"
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
  "text": "Le lac Baïkal, en Sibérie, contient à lui seul environ un cinquième de l'eau douce liquide non gelée de la planète.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lac Baïkal, en Sibérie, contient à lui seul environ un cinquième de l'eau douce liquide non gelée de la planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20lac%20Ba%C3%AFkal%2C%20en%20Sib%C3%A9rie%2C%20contient%20%C3%A0%20lui%20seul%20environ%20un%20cinqui%C3%A8me%20de%20l'eau%20douce%20liquide%20non%20gel%C3%A9e%20de%20la%20plan%C3%A8te%20%3F"
 },
 {
  "text": "La ville de Rome est plus ancienne que la plupart des nations actuelles et fêtera bientôt ses trois mille ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la ville de Rome est plus ancienne que la plupart des nations actuelles et fêtera bientôt ses trois mille ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20ville%20de%20Rome%20est%20plus%20ancienne%20que%20la%20plupart%20des%20nations%20actuelles%20et%20f%C3%AAtera%20bient%C3%B4t%20ses%20trois%20mille%20ans%20%3F"
 },
 {
  "text": "Le Canada possède plus de lacs que tout le reste du monde réuni.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Canada possède plus de lacs que tout le reste du monde réuni ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Canada%20poss%C3%A8de%20plus%20de%20lacs%20que%20tout%20le%20reste%20du%20monde%20r%C3%A9uni%20%3F"
 },
 {
  "text": "L'Afrique est si grande que l'on pourrait y faire tenir les États-Unis, la Chine, l'Inde et une grande partie de l'Europe.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Afrique est si grande que l'on pourrait y faire tenir les États-Unis, la Chine, l'Inde et une grande partie de l'Europe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Afrique%20est%20si%20grande%20que%20l'on%20pourrait%20y%20faire%20tenir%20les%20%C3%89tats-Unis%2C%20la%20Chine%2C%20l'Inde%20et%20une%20grande%20partie%20de%20l'Europe%20%3F"
 },
 {
  "text": "Istanbul est la seule grande ville du monde située à cheval sur deux continents, l'Europe et l'Asie.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'istanbul est la seule grande ville du monde située à cheval sur deux continents, l'Europe et l'Asie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'istanbul%20est%20la%20seule%20grande%20ville%20du%20monde%20situ%C3%A9e%20%C3%A0%20cheval%20sur%20deux%20continents%2C%20l'Europe%20et%20l'Asie%20%3F"
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
  "text": "Le plus long fleuve du monde, le Nil ou l'Amazone selon les mesures, dépasse les 6 000 kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long fleuve du monde, le Nil ou l'Amazone selon les mesures, dépasse les 6 000 kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20fleuve%20du%20monde%2C%20le%20Nil%20ou%20l'Amazone%20selon%20les%20mesures%2C%20d%C3%A9passe%20les%206%C2%A0000%20kilom%C3%A8tres%20%3F"
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
  "text": "Les Pays-Bas ont gagné une grande partie de leur territoire sur la mer grâce à des digues et des polders.",
  "source": "Perplexity",
  "question": "Est-il vrai que les Pays-Bas ont gagné une grande partie de leur territoire sur la mer grâce à des digues et des polders ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20Pays-Bas%20ont%20gagn%C3%A9%20une%20grande%20partie%20de%20leur%20territoire%20sur%20la%20mer%20gr%C3%A2ce%20%C3%A0%20des%20digues%20et%20des%20polders%20%3F"
 },
 {
  "text": "Il existe une frontière entre la Norvège et la Suède qui suit un tracé si sinueux qu'elle est l'une des plus longues d'Europe.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe une frontière entre la Norvège et la Suède qui suit un tracé si sinueux qu'elle est l'une des plus longues d'Europe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20une%20fronti%C3%A8re%20entre%20la%20Norv%C3%A8ge%20et%20la%20Su%C3%A8de%20qui%20suit%20un%20trac%C3%A9%20si%20sinueux%20qu'elle%20est%20l'une%20des%20plus%20longues%20d'Europe%20%3F"
 },
 {
  "text": "Le plus petit pays d'Asie et l'un des plus petits du monde, les Maldives, est aussi le plus plat, culminant à quelques mètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus petit pays d'Asie et l'un des plus petits du monde, les Maldives, est aussi le plus plat, culminant à quelques mètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20petit%20pays%20d'Asie%20et%20l'un%20des%20plus%20petits%20du%20monde%2C%20les%20Maldives%2C%20est%20aussi%20le%20plus%20plat%2C%20culminant%20%C3%A0%20quelques%20m%C3%A8tres%20%3F"
 },
 {
  "text": "La mer Morte est si salée qu'on y flotte sans effort et qu'aucun poisson n'y survit.",
  "source": "Perplexity",
  "question": "Est-il vrai que la mer Morte est si salée qu'on y flotte sans effort et qu'aucun poisson n'y survit ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20mer%20Morte%20est%20si%20sal%C3%A9e%20qu'on%20y%20flotte%20sans%20effort%20et%20qu'aucun%20poisson%20n'y%20survit%20%3F"
 },
 {
  "text": "Le Groenland apparaît immense sur les cartes classiques, mais cette taille est très exagérée par la projection de Mercator.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Groenland apparaît immense sur les cartes classiques, mais cette taille est très exagérée par la projection de Mercator ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Groenland%20appara%C3%AEt%20immense%20sur%20les%20cartes%20classiques%2C%20mais%20cette%20taille%20est%20tr%C3%A8s%20exag%C3%A9r%C3%A9e%20par%20la%20projection%20de%20Mercator%20%3F"
 },
 {
  "text": "Le point Nemo, dans l'océan Pacifique, est si isolé que les humains les plus proches sont souvent les astronautes en orbite.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point Nemo, dans l'océan Pacifique, est si isolé que les humains les plus proches sont souvent les astronautes en orbite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20Nemo%2C%20dans%20l'oc%C3%A9an%20Pacifique%2C%20est%20si%20isol%C3%A9%20que%20les%20humains%20les%20plus%20proches%20sont%20souvent%20les%20astronautes%20en%20orbite%20%3F"
 },
 {
  "text": "La ville la plus septentrionale habitée en permanence se trouve dans l'archipel norvégien du Svalbard.",
  "source": "Perplexity",
  "question": "Est-il vrai que la ville la plus septentrionale habitée en permanence se trouve dans l'archipel norvégien du Svalbard ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20ville%20la%20plus%20septentrionale%20habit%C3%A9e%20en%20permanence%20se%20trouve%20dans%20l'archipel%20norv%C3%A9gien%20du%20Svalbard%20%3F"
 },
 {
  "text": "Le fleuve Amazone est si large à certains endroits qu'on ne peut pas voir l'autre rive.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fleuve Amazone est si large à certains endroits qu'on ne peut pas voir l'autre rive ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fleuve%20Amazone%20est%20si%20large%20%C3%A0%20certains%20endroits%20qu'on%20ne%20peut%20pas%20voir%20l'autre%20rive%20%3F"
 },
 {
  "text": "Le mont Everest grandit encore de quelques millimètres par an à cause de la collision des plaques tectoniques.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mont Everest grandit encore de quelques millimètres par an à cause de la collision des plaques tectoniques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mont%20Everest%20grandit%20encore%20de%20quelques%20millim%C3%A8tres%20par%20an%20%C3%A0%20cause%20de%20la%20collision%20des%20plaques%20tectoniques%20%3F"
 },
 {
  "text": "Les chutes Victoria, en Afrique, produisent un tel nuage de vapeur qu'on les surnomme la fumée qui gronde.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chutes Victoria, en Afrique, produisent un tel nuage de vapeur qu'on les surnomme la fumée qui gronde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chutes%20Victoria%2C%20en%20Afrique%2C%20produisent%20un%20tel%20nuage%20de%20vapeur%20qu'on%20les%20surnomme%20la%20fum%C3%A9e%20qui%20gronde%20%3F"
 },
 {
  "text": "Il existe des langues qui n'ont pas de mots distincts pour le bleu et le vert, les regroupant sous un seul terme.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des langues qui n'ont pas de mots distincts pour le bleu et le vert, les regroupant sous un seul terme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20langues%20qui%20n'ont%20pas%20de%20mots%20distincts%20pour%20le%20bleu%20et%20le%20vert%2C%20les%20regroupant%20sous%20un%20seul%20terme%20%3F"
 },
 {
  "text": "Le mandarin est la langue avec le plus de locuteurs natifs au monde, devant l'espagnol et l'anglais.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mandarin est la langue avec le plus de locuteurs natifs au monde, devant l'espagnol et l'anglais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mandarin%20est%20la%20langue%20avec%20le%20plus%20de%20locuteurs%20natifs%20au%20monde%2C%20devant%20l'espagnol%20et%20l'anglais%20%3F"
 },
 {
  "text": "Certaines langues, comme le tuyuca d'Amazonie, obligent le locuteur à préciser comment il sait ce qu'il affirme.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines langues, comme le tuyuca d'Amazonie, obligent le locuteur à préciser comment il sait ce qu'il affirme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20langues%2C%20comme%20le%20tuyuca%20d'Amazonie%2C%20obligent%20le%20locuteur%20%C3%A0%20pr%C3%A9ciser%20comment%20il%20sait%20ce%20qu'il%20affirme%20%3F"
 },
 {
  "text": "Le mot anglais set possède l'une des plus longues entrées de dictionnaire avec des dizaines de sens différents.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot anglais set possède l'une des plus longues entrées de dictionnaire avec des dizaines de sens différents ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20anglais%20set%20poss%C3%A8de%20l'une%20des%20plus%20longues%20entr%C3%A9es%20de%20dictionnaire%20avec%20des%20dizaines%20de%20sens%20diff%C3%A9rents%20%3F"
 },
 {
  "text": "Il existe des langues sifflées, comme aux Canaries, capables de transmettre des messages complexes d'une vallée à l'autre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des langues sifflées, comme aux Canaries, capables de transmettre des messages complexes d'une vallée à l'autre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20langues%20siffl%C3%A9es%2C%20comme%20aux%20Canaries%2C%20capables%20de%20transmettre%20des%20messages%20complexes%20d'une%20vall%C3%A9e%20%C3%A0%20l'autre%20%3F"
 },
 {
  "text": "Le pangramme est une phrase contenant toutes les lettres de l'alphabet, comme portez ce vieux whisky au juge blond qui fume.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pangramme est une phrase contenant toutes les lettres de l'alphabet, comme portez ce vieux whisky au juge blond qui fume ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pangramme%20est%20une%20phrase%20contenant%20toutes%20les%20lettres%20de%20l'alphabet%2C%20comme%20portez%20ce%20vieux%20whisky%20au%20juge%20blond%20qui%20fume%20%3F"
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
  "text": "En français, les mots amour, délice et orgue changent de genre au pluriel dans certains usages.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en français, les mots amour, délice et orgue changent de genre au pluriel dans certains usages ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20fran%C3%A7ais%2C%20les%20mots%20amour%2C%20d%C3%A9lice%20et%20orgue%20changent%20de%20genre%20au%20pluriel%20dans%20certains%20usages%20%3F"
 },
 {
  "text": "Certaines langues comptent en base 20 ou en base 12 plutôt qu'en base 10.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines langues comptent en base 20 ou en base 12 plutôt qu'en base 10 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20langues%20comptent%20en%20base%2020%20ou%20en%20base%2012%20plut%C3%B4t%20qu'en%20base%2010%20%3F"
 },
 {
  "text": "Le braille permet de lire avec les doigts grâce à des combinaisons de six points en relief.",
  "source": "Perplexity",
  "question": "Est-il vrai que le braille permet de lire avec les doigts grâce à des combinaisons de six points en relief ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20braille%20permet%20de%20lire%20avec%20les%20doigts%20gr%C3%A2ce%20%C3%A0%20des%20combinaisons%20de%20six%20points%20en%20relief%20%3F"
 },
 {
  "text": "L'espéranto est une langue construite au 19e siècle dans l'espoir de faciliter la communication entre les peuples.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'espéranto est une langue construite au 19e siècle dans l'espoir de faciliter la communication entre les peuples ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'esp%C3%A9ranto%20est%20une%20langue%20construite%20au%2019e%20si%C3%A8cle%20dans%20l'espoir%20de%20faciliter%20la%20communication%20entre%20les%20peuples%20%3F"
 },
 {
  "text": "Beaucoup de langues n'ont pas de futur grammatical et expriment l'avenir avec le présent et un contexte.",
  "source": "Perplexity",
  "question": "Est-il vrai que beaucoup de langues n'ont pas de futur grammatical et expriment l'avenir avec le présent et un contexte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20beaucoup%20de%20langues%20n'ont%20pas%20de%20futur%20grammatical%20et%20expriment%20l'avenir%20avec%20le%20pr%C3%A9sent%20et%20un%20contexte%20%3F"
 },
 {
  "text": "Le hawaïen n'utilise qu'une douzaine de lettres environ dans son alphabet.",
  "source": "Perplexity",
  "question": "Est-il vrai que le hawaïen n'utilise qu'une douzaine de lettres environ dans son alphabet ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20hawa%C3%AFen%20n'utilise%20qu'une%20douzaine%20de%20lettres%20environ%20dans%20son%20alphabet%20%3F"
 },
 {
  "text": "Le mot alphabet vient des deux premières lettres grecques, alpha et bêta.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot alphabet vient des deux premières lettres grecques, alpha et bêta ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20alphabet%20vient%20des%20deux%20premi%C3%A8res%20lettres%20grecques%2C%20alpha%20et%20b%C3%AAta%20%3F"
 },
 {
  "text": "Le français a été pendant des siècles la langue de la diplomatie internationale.",
  "source": "Perplexity",
  "question": "Est-il vrai que le français a été pendant des siècles la langue de la diplomatie internationale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fran%C3%A7ais%20a%20%C3%A9t%C3%A9%20pendant%20des%20si%C3%A8cles%20la%20langue%20de%20la%20diplomatie%20internationale%20%3F"
 },
 {
  "text": "Certains mots existent dans une seule langue et sont intraduisibles en un seul mot, comme le portugais saudade.",
  "source": "Perplexity",
  "question": "Est-il vrai que certains mots existent dans une seule langue et sont intraduisibles en un seul mot, comme le portugais saudade ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certains%20mots%20existent%20dans%20une%20seule%20langue%20et%20sont%20intraduisibles%20en%20un%20seul%20mot%2C%20comme%20le%20portugais%20saudade%20%3F"
 },
 {
  "text": "Dans un groupe de seulement 23 personnes, il y a plus d'une chance sur deux que deux d'entre elles partagent le même anniversaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que dans un groupe de seulement 23 personnes, il y a plus d'une chance sur deux que deux d'entre elles partagent le même anniversaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20dans%20un%20groupe%20de%20seulement%2023%20personnes%2C%20il%20y%20a%20plus%20d'une%20chance%20sur%20deux%20que%20deux%20d'entre%20elles%20partagent%20le%20m%C3%AAme%20anniversaire%20%3F"
 },
 {
  "text": "Le nombre pi possède une infinité de décimales qui ne se répètent jamais de façon périodique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nombre pi possède une infinité de décimales qui ne se répètent jamais de façon périodique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nombre%20pi%20poss%C3%A8de%20une%20infinit%C3%A9%20de%20d%C3%A9cimales%20qui%20ne%20se%20r%C3%A9p%C3%A8tent%20jamais%20de%20fa%C3%A7on%20p%C3%A9riodique%20%3F"
 },
 {
  "text": "Un simple pliage de papier, s'il était possible de le plier 42 fois, donnerait une épaisseur atteignant la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un simple pliage de papier, s'il était possible de le plier 42 fois, donnerait une épaisseur atteignant la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20simple%20pliage%20de%20papier%2C%20s'il%20%C3%A9tait%20possible%20de%20le%20plier%2042%20fois%2C%20donnerait%20une%20%C3%A9paisseur%20atteignant%20la%20Lune%20%3F"
 },
 {
  "text": "Zéro est le seul nombre qui ne peut pas être représenté en chiffres romains.",
  "source": "Perplexity",
  "question": "Est-il vrai que zéro est le seul nombre qui ne peut pas être représenté en chiffres romains ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20z%C3%A9ro%20est%20le%20seul%20nombre%20qui%20ne%20peut%20pas%20%C3%AAtre%20repr%C3%A9sent%C3%A9%20en%20chiffres%20romains%20%3F"
 },
 {
  "text": "La somme des chiffres de tout multiple de neuf donne toujours, en répétant l'opération, le chiffre neuf.",
  "source": "Perplexity",
  "question": "Est-il vrai que la somme des chiffres de tout multiple de neuf donne toujours, en répétant l'opération, le chiffre neuf ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20somme%20des%20chiffres%20de%20tout%20multiple%20de%20neuf%20donne%20toujours%2C%20en%20r%C3%A9p%C3%A9tant%20l'op%C3%A9ration%2C%20le%20chiffre%20neuf%20%3F"
 },
 {
  "text": "Il existe différents types d'infinis, certains étant démontrés comme strictement plus grands que d'autres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe différents types d'infinis, certains étant démontrés comme strictement plus grands que d'autres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20diff%C3%A9rents%20types%20d'infinis%2C%20certains%20%C3%A9tant%20d%C3%A9montr%C3%A9s%20comme%20strictement%20plus%20grands%20que%20d'autres%20%3F"
 },
 {
  "text": "Le nombre d'or, environ 1,618, apparaît dans l'art, l'architecture et de nombreuses proportions de la nature.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nombre d'or, environ 1,618, apparaît dans l'art, l'architecture et de nombreuses proportions de la nature ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nombre%20d'or%2C%20environ%201%2C618%2C%20appara%C3%AEt%20dans%20l'art%2C%20l'architecture%20et%20de%20nombreuses%20proportions%20de%20la%20nature%20%3F"
 },
 {
  "text": "Un googol est le chiffre 1 suivi de cent zéros, et il a inspiré le nom de Google.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un googol est le chiffre 1 suivi de cent zéros, et il a inspiré le nom de Google ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20googol%20est%20le%20chiffre%201%20suivi%20de%20cent%20z%C3%A9ros%2C%20et%20il%20a%20inspir%C3%A9%20le%20nom%20de%20Google%20%3F"
 },
 {
  "text": "Multiplier un nombre par onze, s'il a deux chiffres, revient souvent à additionner ces deux chiffres et à les placer au milieu.",
  "source": "Perplexity",
  "question": "Est-il vrai que multiplier un nombre par onze, s'il a deux chiffres, revient souvent à additionner ces deux chiffres et à les placer au milieu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20multiplier%20un%20nombre%20par%20onze%2C%20s'il%20a%20deux%20chiffres%2C%20revient%20souvent%20%C3%A0%20additionner%20ces%20deux%20chiffres%20et%20%C3%A0%20les%20placer%20au%20milieu%20%3F"
 },
 {
  "text": "La bande de Möbius est une surface qui n'a qu'un seul côté et un seul bord.",
  "source": "Perplexity",
  "question": "Est-il vrai que la bande de Möbius est une surface qui n'a qu'un seul côté et un seul bord ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20bande%20de%20M%C3%B6bius%20est%20une%20surface%20qui%20n'a%20qu'un%20seul%20c%C3%B4t%C3%A9%20et%20un%20seul%20bord%20%3F"
 },
 {
  "text": "En probabilité, un événement de chance une sur un million finit par arriver régulièrement à l'échelle d'une grande population.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'en probabilité, un événement de chance une sur un million finit par arriver régulièrement à l'échelle d'une grande population ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'en%20probabilit%C3%A9%2C%20un%20%C3%A9v%C3%A9nement%20de%20chance%20une%20sur%20un%20million%20finit%20par%20arriver%20r%C3%A9guli%C3%A8rement%20%C3%A0%20l'%C3%A9chelle%20d'une%20grande%20population%20%3F"
 },
 {
  "text": "Le théorème de Pythagore était connu et utilisé bien avant Pythagore par plusieurs civilisations anciennes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le théorème de Pythagore était connu et utilisé bien avant Pythagore par plusieurs civilisations anciennes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20th%C3%A9or%C3%A8me%20de%20Pythagore%20%C3%A9tait%20connu%20et%20utilis%C3%A9%20bien%20avant%20Pythagore%20par%20plusieurs%20civilisations%20anciennes%20%3F"
 },
 {
  "text": "Il n'existe pas de plus grand nombre premier : on a démontré qu'il y en a une infinité.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il n'existe pas de plus grand nombre premier : on a démontré qu'il y en a une infinité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20n'existe%20pas%20de%20plus%20grand%20nombre%20premier%C2%A0%3A%20on%20a%20d%C3%A9montr%C3%A9%20qu'il%20y%20en%20a%20une%20infinit%C3%A9%20%3F"
 },
 {
  "text": "Le zéro n'a été reconnu comme un véritable nombre que tardivement dans l'histoire des mathématiques.",
  "source": "Perplexity",
  "question": "Est-il vrai que le zéro n'a été reconnu comme un véritable nombre que tardivement dans l'histoire des mathématiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20z%C3%A9ro%20n'a%20%C3%A9t%C3%A9%20reconnu%20comme%20un%20v%C3%A9ritable%20nombre%20que%20tardivement%20dans%20l'histoire%20des%20math%C3%A9matiques%20%3F"
 },
 {
  "text": "Un nombre est divisible par trois si la somme de ses chiffres l'est aussi.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un nombre est divisible par trois si la somme de ses chiffres l'est aussi ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20nombre%20est%20divisible%20par%20trois%20si%20la%20somme%20de%20ses%20chiffres%20l'est%20aussi%20%3F"
 },
 {
  "text": "Le paradoxe de Monty Hall montre qu'il vaut mieux changer de porte dans un jeu à trois portes, ce qui déroute l'intuition.",
  "source": "Perplexity",
  "question": "Est-il vrai que le paradoxe de Monty Hall montre qu'il vaut mieux changer de porte dans un jeu à trois portes, ce qui déroute l'intuition ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20paradoxe%20de%20Monty%20Hall%20montre%20qu'il%20vaut%20mieux%20changer%20de%20porte%20dans%20un%20jeu%20%C3%A0%20trois%20portes%2C%20ce%20qui%20d%C3%A9route%20l'intuition%20%3F"
 },
 {
  "text": "La suite de Fibonacci, où chaque nombre est la somme des deux précédents, se retrouve dans la disposition des graines de tournesol.",
  "source": "Perplexity",
  "question": "Est-il vrai que la suite de Fibonacci, où chaque nombre est la somme des deux précédents, se retrouve dans la disposition des graines de tournesol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20suite%20de%20Fibonacci%2C%20o%C3%B9%20chaque%20nombre%20est%20la%20somme%20des%20deux%20pr%C3%A9c%C3%A9dents%2C%20se%20retrouve%20dans%20la%20disposition%20des%20graines%20de%20tournesol%20%3F"
 },
 {
  "text": "Additionner tous les nombres de un à cent donne 5 050, une astuce attribuée au jeune mathématicien Gauss.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'additionner tous les nombres de un à cent donne 5 050, une astuce attribuée au jeune mathématicien Gauss ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'additionner%20tous%20les%20nombres%20de%20un%20%C3%A0%20cent%20donne%205%C2%A0050%2C%20une%20astuce%20attribu%C3%A9e%20au%20jeune%20math%C3%A9maticien%20Gauss%20%3F"
 },
 {
  "text": "Le symbole de l'infini en forme de huit couché a été introduit au 17e siècle par le mathématicien John Wallis.",
  "source": "Perplexity",
  "question": "Est-il vrai que le symbole de l'infini en forme de huit couché a été introduit au 17e siècle par le mathématicien John Wallis ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20symbole%20de%20l'infini%20en%20forme%20de%20huit%20couch%C3%A9%20a%20%C3%A9t%C3%A9%20introduit%20au%2017e%20si%C3%A8cle%20par%20le%20math%C3%A9maticien%20John%20Wallis%20%3F"
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
  "text": "La souris d'ordinateur s'appelle ainsi à cause de son fil qui ressemblait à une queue de souris.",
  "source": "Perplexity",
  "question": "Est-il vrai que la souris d'ordinateur s'appelle ainsi à cause de son fil qui ressemblait à une queue de souris ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20souris%20d'ordinateur%20s'appelle%20ainsi%20%C3%A0%20cause%20de%20son%20fil%20qui%20ressemblait%20%C3%A0%20une%20queue%20de%20souris%20%3F"
 },
 {
  "text": "Le premier appareil photo nécessitait une pose de plusieurs heures pour capturer une seule image.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier appareil photo nécessitait une pose de plusieurs heures pour capturer une seule image ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20appareil%20photo%20n%C3%A9cessitait%20une%20pose%20de%20plusieurs%20heures%20pour%20capturer%20une%20seule%20image%20%3F"
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
  "text": "Le premier disque dur commercial pesait plus d'une tonne et stockait moins qu'une simple photo de smartphone aujourd'hui.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier disque dur commercial pesait plus d'une tonne et stockait moins qu'une simple photo de smartphone aujourd'hui ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20disque%20dur%20commercial%20pesait%20plus%20d'une%20tonne%20et%20stockait%20moins%20qu'une%20simple%20photo%20de%20smartphone%20aujourd'hui%20%3F"
 },
 {
  "text": "Le four à micro-ondes a été découvert par accident quand une barre chocolatée a fondu dans la poche d'un ingénieur près d'un radar.",
  "source": "Perplexity",
  "question": "Est-il vrai que le four à micro-ondes a été découvert par accident quand une barre chocolatée a fondu dans la poche d'un ingénieur près d'un radar ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20four%20%C3%A0%20micro-ondes%20a%20%C3%A9t%C3%A9%20d%C3%A9couvert%20par%20accident%20quand%20une%20barre%20chocolat%C3%A9e%20a%20fondu%20dans%20la%20poche%20d'un%20ing%C3%A9nieur%20pr%C3%A8s%20d'un%20radar%20%3F"
 },
 {
  "text": "Le premier ordinateur portable ressemblait à une valise et pesait plus de dix kilos.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier ordinateur portable ressemblait à une valise et pesait plus de dix kilos ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20ordinateur%20portable%20ressemblait%20%C3%A0%20une%20valise%20et%20pesait%20plus%20de%20dix%20kilos%20%3F"
 },
 {
  "text": "Le symbole arobase de l'e-mail existait bien avant Internet et servait en comptabilité.",
  "source": "Perplexity",
  "question": "Est-il vrai que le symbole arobase de l'e-mail existait bien avant Internet et servait en comptabilité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20symbole%20arobase%20de%20l'e-mail%20existait%20bien%20avant%20Internet%20et%20servait%20en%20comptabilit%C3%A9%20%3F"
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
  "text": "Le clavier AZERTY et QWERTY a été conçu en partie pour éviter que les touches des machines à écrire ne se coincent.",
  "source": "Perplexity",
  "question": "Est-il vrai que le clavier AZERTY et QWERTY a été conçu en partie pour éviter que les touches des machines à écrire ne se coincent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20clavier%20AZERTY%20et%20QWERTY%20a%20%C3%A9t%C3%A9%20con%C3%A7u%20en%20partie%20pour%20%C3%A9viter%20que%20les%20touches%20des%20machines%20%C3%A0%20%C3%A9crire%20ne%20se%20coincent%20%3F"
 },
 {
  "text": "Le premier téléphone portable commercialisé pesait près d'un kilo et coûtait une fortune.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier téléphone portable commercialisé pesait près d'un kilo et coûtait une fortune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20t%C3%A9l%C3%A9phone%20portable%20commercialis%C3%A9%20pesait%20pr%C3%A8s%20d'un%20kilo%20et%20co%C3%BBtait%20une%20fortune%20%3F"
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
  "text": "Le premier appareil photo numérique, créé en 1975, était aussi gros qu'un grille-pain et mettait des secondes à enregistrer une image.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier appareil photo numérique, créé en 1975, était aussi gros qu'un grille-pain et mettait des secondes à enregistrer une image ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20appareil%20photo%20num%C3%A9rique%2C%20cr%C3%A9%C3%A9%20en%201975%2C%20%C3%A9tait%20aussi%20gros%20qu'un%20grille-pain%20et%20mettait%20des%20secondes%20%C3%A0%20enregistrer%20une%20image%20%3F"
 },
 {
  "text": "Le CD a été conçu pour durer environ 74 minutes, dit-on pour contenir une symphonie de Beethoven en entier.",
  "source": "Perplexity",
  "question": "Est-il vrai que le CD a été conçu pour durer environ 74 minutes, dit-on pour contenir une symphonie de Beethoven en entier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20CD%20a%20%C3%A9t%C3%A9%20con%C3%A7u%20pour%20durer%20environ%2074%20minutes%2C%20dit-on%20pour%20contenir%20une%20symphonie%20de%20Beethoven%20en%20entier%20%3F"
 },
 {
  "text": "La disquette de sauvegarde survit dans nos logiciels sous forme d'icône, alors que peu de gens en ont déjà utilisé une.",
  "source": "Perplexity",
  "question": "Est-il vrai que la disquette de sauvegarde survit dans nos logiciels sous forme d'icône, alors que peu de gens en ont déjà utilisé une ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20disquette%20de%20sauvegarde%20survit%20dans%20nos%20logiciels%20sous%20forme%20d'ic%C3%B4ne%2C%20alors%20que%20peu%20de%20gens%20en%20ont%20d%C3%A9j%C3%A0%20utilis%C3%A9%20une%20%3F"
 },
 {
  "text": "Les premiers pixels et jeux vidéo tenaient dans une mémoire des milliers de fois plus petite qu'une simple photo actuelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que les premiers pixels et jeux vidéo tenaient dans une mémoire des milliers de fois plus petite qu'une simple photo actuelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premiers%20pixels%20et%20jeux%20vid%C3%A9o%20tenaient%20dans%20une%20m%C3%A9moire%20des%20milliers%20de%20fois%20plus%20petite%20qu'une%20simple%20photo%20actuelle%20%3F"
 },
 {
  "text": "Le pacemaker moderne a été perfectionné grâce à une erreur de composant qui produisait des impulsions régulières.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pacemaker moderne a été perfectionné grâce à une erreur de composant qui produisait des impulsions régulières ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pacemaker%20moderne%20a%20%C3%A9t%C3%A9%20perfectionn%C3%A9%20gr%C3%A2ce%20%C3%A0%20une%20erreur%20de%20composant%20qui%20produisait%20des%20impulsions%20r%C3%A9guli%C3%A8res%20%3F"
 },
 {
  "text": "La plante qui pousse le plus vite au monde, le bambou, peut grandir de près d'un mètre en une seule journée.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plante qui pousse le plus vite au monde, le bambou, peut grandir de près d'un mètre en une seule journée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plante%20qui%20pousse%20le%20plus%20vite%20au%20monde%2C%20le%20bambou%2C%20peut%20grandir%20de%20pr%C3%A8s%20d'un%20m%C3%A8tre%20en%20une%20seule%20journ%C3%A9e%20%3F"
 },
 {
  "text": "L'animal terrestre le plus rapide, le guépard, peut atteindre une vitesse comparable à celle d'une voiture sur autoroute.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'animal terrestre le plus rapide, le guépard, peut atteindre une vitesse comparable à celle d'une voiture sur autoroute ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'animal%20terrestre%20le%20plus%20rapide%2C%20le%20gu%C3%A9pard%2C%20peut%20atteindre%20une%20vitesse%20comparable%20%C3%A0%20celle%20d'une%20voiture%20sur%20autoroute%20%3F"
 },
 {
  "text": "L'être vivant le plus lourd connu est peut-être un champignon souterrain qui s'étend sur plusieurs kilomètres carrés.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'être vivant le plus lourd connu est peut-être un champignon souterrain qui s'étend sur plusieurs kilomètres carrés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%AAtre%20vivant%20le%20plus%20lourd%20connu%20est%20peut-%C3%AAtre%20un%20champignon%20souterrain%20qui%20s'%C3%A9tend%20sur%20plusieurs%20kilom%C3%A8tres%20carr%C3%A9s%20%3F"
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
  "text": "L'animal le plus venimeux au monde, en quantité de toxine, est souvent la méduse-boîte d'Australie.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'animal le plus venimeux au monde, en quantité de toxine, est souvent la méduse-boîte d'Australie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'animal%20le%20plus%20venimeux%20au%20monde%2C%20en%20quantit%C3%A9%20de%20toxine%2C%20est%20souvent%20la%20m%C3%A9duse-bo%C3%AEte%20d'Australie%20%3F"
 },
 {
  "text": "Le lieu habité le plus froid de la planète, en Sibérie, descend régulièrement sous les moins 50 degrés.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lieu habité le plus froid de la planète, en Sibérie, descend régulièrement sous les moins 50 degrés ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20lieu%20habit%C3%A9%20le%20plus%20froid%20de%20la%20plan%C3%A8te%2C%20en%20Sib%C3%A9rie%2C%20descend%20r%C3%A9guli%C3%A8rement%20sous%20les%20moins%2050%20degr%C3%A9s%20%3F"
 },
 {
  "text": "La plus grande fleur du monde, la rafflésie, peut mesurer près d'un mètre et dégage une odeur de viande pourrie.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus grande fleur du monde, la rafflésie, peut mesurer près d'un mètre et dégage une odeur de viande pourrie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20grande%20fleur%20du%20monde%2C%20la%20raffl%C3%A9sie%2C%20peut%20mesurer%20pr%C3%A8s%20d'un%20m%C3%A8tre%20et%20d%C3%A9gage%20une%20odeur%20de%20viande%20pourrie%20%3F"
 },
 {
  "text": "Le plus long éclair jamais mesuré s'étendait sur plusieurs centaines de kilomètres à travers le ciel.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long éclair jamais mesuré s'étendait sur plusieurs centaines de kilomètres à travers le ciel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20%C3%A9clair%20jamais%20mesur%C3%A9%20s'%C3%A9tendait%20sur%20plusieurs%20centaines%20de%20kilom%C3%A8tres%20%C3%A0%20travers%20le%20ciel%20%3F"
 },
 {
  "text": "L'endroit le plus profond jamais atteint par l'homme se trouve au fond de la fosse des Mariannes.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'endroit le plus profond jamais atteint par l'homme se trouve au fond de la fosse des Mariannes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'endroit%20le%20plus%20profond%20jamais%20atteint%20par%20l'homme%20se%20trouve%20au%20fond%20de%20la%20fosse%20des%20Mariannes%20%3F"
 },
 {
  "text": "Le désert le plus chaud enregistre des températures de surface dépassant parfois les 80 degrés au sol.",
  "source": "Perplexity",
  "question": "Est-il vrai que le désert le plus chaud enregistre des températures de surface dépassant parfois les 80 degrés au sol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20d%C3%A9sert%20le%20plus%20chaud%20enregistre%20des%20temp%C3%A9ratures%20de%20surface%20d%C3%A9passant%20parfois%20les%2080%20degr%C3%A9s%20au%20sol%20%3F"
 },
 {
  "text": "La créature la plus âgée jamais identifiée est peut-être une éponge de mer vivant depuis plus de 10 000 ans.",
  "source": "Perplexity",
  "question": "Est-il vrai que la créature la plus âgée jamais identifiée est peut-être une éponge de mer vivant depuis plus de 10 000 ans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20cr%C3%A9ature%20la%20plus%20%C3%A2g%C3%A9e%20jamais%20identifi%C3%A9e%20est%20peut-%C3%AAtre%20une%20%C3%A9ponge%20de%20mer%20vivant%20depuis%20plus%20de%2010%C2%A0000%20ans%20%3F"
 },
 {
  "text": "Le plus grand organisme vivant pourrait être une forêt de trembles reliés par un même système racinaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus grand organisme vivant pourrait être une forêt de trembles reliés par un même système racinaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20grand%20organisme%20vivant%20pourrait%20%C3%AAtre%20une%20for%C3%AAt%20de%20trembles%20reli%C3%A9s%20par%20un%20m%C3%AAme%20syst%C3%A8me%20racinaire%20%3F"
 },
 {
  "text": "Le vent le plus rapide jamais mesuré au sol soufflait à plus de 400 kilomètres par heure lors d'un cyclone.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vent le plus rapide jamais mesuré au sol soufflait à plus de 400 kilomètres par heure lors d'un cyclone ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20vent%20le%20plus%20rapide%20jamais%20mesur%C3%A9%20au%20sol%20soufflait%20%C3%A0%20plus%20de%20400%20kilom%C3%A8tres%20par%20heure%20lors%20d'un%20cyclone%20%3F"
 },
 {
  "text": "La chute d'eau la plus haute du monde, le Salto Angel au Venezuela, tombe de près d'un kilomètre.",
  "source": "Perplexity",
  "question": "Est-il vrai que la chute d'eau la plus haute du monde, le Salto Angel au Venezuela, tombe de près d'un kilomètre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20chute%20d'eau%20la%20plus%20haute%20du%20monde%2C%20le%20Salto%20Angel%20au%20Venezuela%2C%20tombe%20de%20pr%C3%A8s%20d'un%20kilom%C3%A8tre%20%3F"
 },
 {
  "text": "La marée la plus haute du monde, dans la baie de Fundy au Canada, peut varier de plus de quinze mètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que la marée la plus haute du monde, dans la baie de Fundy au Canada, peut varier de plus de quinze mètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20mar%C3%A9e%20la%20plus%20haute%20du%20monde%2C%20dans%20la%20baie%20de%20Fundy%20au%20Canada%2C%20peut%20varier%20de%20plus%20de%20quinze%20m%C3%A8tres%20%3F"
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
  "text": "Un flocon de neige possède une structure à six branches et il est extrêmement rare que deux soient parfaitement identiques.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un flocon de neige possède une structure à six branches et il est extrêmement rare que deux soient parfaitement identiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20flocon%20de%20neige%20poss%C3%A8de%20une%20structure%20%C3%A0%20six%20branches%20et%20il%20est%20extr%C3%AAmement%20rare%20que%20deux%20soient%20parfaitement%20identiques%20%3F"
 },
 {
  "text": "Les vagues scélérates, longtemps considérées comme des légendes de marins, ont bien été mesurées et confirmées.",
  "source": "Perplexity",
  "question": "Est-il vrai que les vagues scélérates, longtemps considérées comme des légendes de marins, ont bien été mesurées et confirmées ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20vagues%20sc%C3%A9l%C3%A9rates%2C%20longtemps%20consid%C3%A9r%C3%A9es%20comme%20des%20l%C3%A9gendes%20de%20marins%2C%20ont%20bien%20%C3%A9t%C3%A9%20mesur%C3%A9es%20et%20confirm%C3%A9es%20%3F"
 },
 {
  "text": "L'eau de mer contient de l'or dissous, mais en quantité si infime qu'il est impossible de l'exploiter rentablement.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau de mer contient de l'or dissous, mais en quantité si infime qu'il est impossible de l'exploiter rentablement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20de%20mer%20contient%20de%20l'or%20dissous%2C%20mais%20en%20quantit%C3%A9%20si%20infime%20qu'il%20est%20impossible%20de%20l'exploiter%20rentablement%20%3F"
 },
 {
  "text": "Certains nuages peuvent peser plusieurs centaines de tonnes tout en flottant dans le ciel.",
  "source": "Perplexity",
  "question": "Est-il vrai que certains nuages peuvent peser plusieurs centaines de tonnes tout en flottant dans le ciel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certains%20nuages%20peuvent%20peser%20plusieurs%20centaines%20de%20tonnes%20tout%20en%20flottant%20dans%20le%20ciel%20%3F"
 },
 {
  "text": "L'arc-en-ciel est en réalité un cercle complet, mais le sol nous en cache généralement la moitié inférieure.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'arc-en-ciel est en réalité un cercle complet, mais le sol nous en cache généralement la moitié inférieure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'arc-en-ciel%20est%20en%20r%C3%A9alit%C3%A9%20un%20cercle%20complet%2C%20mais%20le%20sol%20nous%20en%20cache%20g%C3%A9n%C3%A9ralement%20la%20moiti%C3%A9%20inf%C3%A9rieure%20%3F"
 },
 {
  "text": "Le point le plus profond de l'océan est si sombre que la lumière du soleil n'y parvient jamais.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus profond de l'océan est si sombre que la lumière du soleil n'y parvient jamais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20profond%20de%20l'oc%C3%A9an%20est%20si%20sombre%20que%20la%20lumi%C3%A8re%20du%20soleil%20n'y%20parvient%20jamais%20%3F"
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
  "text": "Un litre d'eau de mer contient en moyenne environ 35 grammes de sel.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un litre d'eau de mer contient en moyenne environ 35 grammes de sel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20litre%20d'eau%20de%20mer%20contient%20en%20moyenne%20environ%2035%20grammes%20de%20sel%20%3F"
 },
 {
  "text": "La grêle peut atteindre la taille d'une balle de tennis et tomber à grande vitesse lors d'orages violents.",
  "source": "Perplexity",
  "question": "Est-il vrai que la grêle peut atteindre la taille d'une balle de tennis et tomber à grande vitesse lors d'orages violents ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20gr%C3%AAle%20peut%20atteindre%20la%20taille%20d'une%20balle%20de%20tennis%20et%20tomber%20%C3%A0%20grande%20vitesse%20lors%20d'orages%20violents%20%3F"
 },
 {
  "text": "Les tornades peuvent générer des vents plus rapides que ceux d'un cyclone, mais sur une zone bien plus petite.",
  "source": "Perplexity",
  "question": "Est-il vrai que les tornades peuvent générer des vents plus rapides que ceux d'un cyclone, mais sur une zone bien plus petite ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20tornades%20peuvent%20g%C3%A9n%C3%A9rer%20des%20vents%20plus%20rapides%20que%20ceux%20d'un%20cyclone%2C%20mais%20sur%20une%20zone%20bien%20plus%20petite%20%3F"
 },
 {
  "text": "Les aurores boréales sont provoquées par des particules du Soleil qui percutent l'atmosphère près des pôles.",
  "source": "Perplexity",
  "question": "Est-il vrai que les aurores boréales sont provoquées par des particules du Soleil qui percutent l'atmosphère près des pôles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20aurores%20bor%C3%A9ales%20sont%20provoqu%C3%A9es%20par%20des%20particules%20du%20Soleil%20qui%20percutent%20l'atmosph%C3%A8re%20pr%C3%A8s%20des%20p%C3%B4les%20%3F"
 },
 {
  "text": "Le brouillard n'est qu'un nuage qui touche le sol.",
  "source": "Perplexity",
  "question": "Est-il vrai que le brouillard n'est qu'un nuage qui touche le sol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20brouillard%20n'est%20qu'un%20nuage%20qui%20touche%20le%20sol%20%3F"
 },
 {
  "text": "Certaines forêts communiquent sous terre via un réseau de champignons surnommé le wood wide web.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines forêts communiquent sous terre via un réseau de champignons surnommé le wood wide web ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20for%C3%AAts%20communiquent%20sous%20terre%20via%20un%20r%C3%A9seau%20de%20champignons%20surnomm%C3%A9%20le%20wood%20wide%20web%20%3F"
 },
 {
  "text": "La couleur de l'océan vient surtout de l'absorption de la lumière rouge par l'eau, ne laissant ressortir que le bleu.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur de l'océan vient surtout de l'absorption de la lumière rouge par l'eau, ne laissant ressortir que le bleu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20de%20l'oc%C3%A9an%20vient%20surtout%20de%20l'absorption%20de%20la%20lumi%C3%A8re%20rouge%20par%20l'eau%2C%20ne%20laissant%20ressortir%20que%20le%20bleu%20%3F"
 },
 {
  "text": "Un seul grand orage peut libérer plus d'énergie qu'une bombe atomique.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un seul grand orage peut libérer plus d'énergie qu'une bombe atomique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20seul%20grand%20orage%20peut%20lib%C3%A9rer%20plus%20d'%C3%A9nergie%20qu'une%20bombe%20atomique%20%3F"
 },
 {
  "text": "La neige peut paraître bleue en profondeur car la glace absorbe légèrement la lumière rouge.",
  "source": "Perplexity",
  "question": "Est-il vrai que la neige peut paraître bleue en profondeur car la glace absorbe légèrement la lumière rouge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20neige%20peut%20para%C3%AEtre%20bleue%20en%20profondeur%20car%20la%20glace%20absorbe%20l%C3%A9g%C3%A8rement%20la%20lumi%C3%A8re%20rouge%20%3F"
 },
 {
  "text": "Les océans abritent probablement des millions d'espèces encore totalement inconnues de la science.",
  "source": "Perplexity",
  "question": "Est-il vrai que les océans abritent probablement des millions d'espèces encore totalement inconnues de la science ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20oc%C3%A9ans%20abritent%20probablement%20des%20millions%20d'esp%C3%A8ces%20encore%20totalement%20inconnues%20de%20la%20science%20%3F"
 },
 {
  "text": "Les arbres peuvent se prévenir mutuellement d'une attaque d'insectes en libérant des substances chimiques dans l'air.",
  "source": "Perplexity",
  "question": "Est-il vrai que les arbres peuvent se prévenir mutuellement d'une attaque d'insectes en libérant des substances chimiques dans l'air ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20arbres%20peuvent%20se%20pr%C3%A9venir%20mutuellement%20d'une%20attaque%20d'insectes%20en%20lib%C3%A9rant%20des%20substances%20chimiques%20dans%20l'air%20%3F"
 },
 {
  "text": "La tomate, le poivron et l'aubergine appartiennent à la même famille que la mortelle belladone.",
  "source": "Perplexity",
  "question": "Est-il vrai que la tomate, le poivron et l'aubergine appartiennent à la même famille que la mortelle belladone ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20tomate%2C%20le%20poivron%20et%20l'aubergine%20appartiennent%20%C3%A0%20la%20m%C3%AAme%20famille%20que%20la%20mortelle%20belladone%20%3F"
 },
 {
  "text": "Certaines plantes carnivores, comme la dionée, se referment sur un insecte en une fraction de seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines plantes carnivores, comme la dionée, se referment sur un insecte en une fraction de seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20plantes%20carnivores%2C%20comme%20la%20dion%C3%A9e%2C%20se%20referment%20sur%20un%20insecte%20en%20une%20fraction%20de%20seconde%20%3F"
 },
 {
  "text": "Le tournesol suit la course du soleil quand il est jeune, un mouvement appelé héliotropisme.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tournesol suit la course du soleil quand il est jeune, un mouvement appelé héliotropisme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tournesol%20suit%20la%20course%20du%20soleil%20quand%20il%20est%20jeune%2C%20un%20mouvement%20appel%C3%A9%20h%C3%A9liotropisme%20%3F"
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
  "text": "Un pommier peut mettre plusieurs années avant de donner ses premiers fruits.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un pommier peut mettre plusieurs années avant de donner ses premiers fruits ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20pommier%20peut%20mettre%20plusieurs%20ann%C3%A9es%20avant%20de%20donner%20ses%20premiers%20fruits%20%3F"
 },
 {
  "text": "Certaines graines peuvent germer après avoir passé des milliers d'années dans un sol gelé ou sec.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines graines peuvent germer après avoir passé des milliers d'années dans un sol gelé ou sec ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20graines%20peuvent%20germer%20apr%C3%A8s%20avoir%20pass%C3%A9%20des%20milliers%20d'ann%C3%A9es%20dans%20un%20sol%20gel%C3%A9%20ou%20sec%20%3F"
 },
 {
  "text": "La mousse pousse plus souvent du côté humide et ombragé, mais l'idée qu'elle indique toujours le nord est peu fiable.",
  "source": "Perplexity",
  "question": "Est-il vrai que la mousse pousse plus souvent du côté humide et ombragé, mais l'idée qu'elle indique toujours le nord est peu fiable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20mousse%20pousse%20plus%20souvent%20du%20c%C3%B4t%C3%A9%20humide%20et%20ombrag%C3%A9%2C%20mais%20l'id%C3%A9e%20qu'elle%20indique%20toujours%20le%20nord%20est%20peu%20fiable%20%3F"
 },
 {
  "text": "Le café et le thé contiennent tous deux de la caféine, mais le thé en libère l'effet plus lentement.",
  "source": "Perplexity",
  "question": "Est-il vrai que le café et le thé contiennent tous deux de la caféine, mais le thé en libère l'effet plus lentement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20caf%C3%A9%20et%20le%20th%C3%A9%20contiennent%20tous%20deux%20de%20la%20caf%C3%A9ine%2C%20mais%20le%20th%C3%A9%20en%20lib%C3%A8re%20l'effet%20plus%20lentement%20%3F"
 },
 {
  "text": "Un seul grand chêne peut abriter des centaines d'espèces d'insectes, d'oiseaux et de champignons.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un seul grand chêne peut abriter des centaines d'espèces d'insectes, d'oiseaux et de champignons ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20seul%20grand%20ch%C3%AAne%20peut%20abriter%20des%20centaines%20d'esp%C3%A8ces%20d'insectes%2C%20d'oiseaux%20et%20de%20champignons%20%3F"
 },
 {
  "text": "Les cactus sont des plantes qui ont transformé leurs feuilles en épines pour limiter la perte d'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que les cactus sont des plantes qui ont transformé leurs feuilles en épines pour limiter la perte d'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20cactus%20sont%20des%20plantes%20qui%20ont%20transform%C3%A9%20leurs%20feuilles%20en%20%C3%A9pines%20pour%20limiter%20la%20perte%20d'eau%20%3F"
 },
 {
  "text": "La plante la plus solitaire, un cycad mâle sans femelle connue, n'a plus de partenaire pour se reproduire naturellement.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plante la plus solitaire, un cycad mâle sans femelle connue, n'a plus de partenaire pour se reproduire naturellement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plante%20la%20plus%20solitaire%2C%20un%20cycad%20m%C3%A2le%20sans%20femelle%20connue%2C%20n'a%20plus%20de%20partenaire%20pour%20se%20reproduire%20naturellement%20%3F"
 },
 {
  "text": "Les racines de certains arbres peuvent s'étendre bien au-delà de la largeur de leur feuillage.",
  "source": "Perplexity",
  "question": "Est-il vrai que les racines de certains arbres peuvent s'étendre bien au-delà de la largeur de leur feuillage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20racines%20de%20certains%20arbres%20peuvent%20s'%C3%A9tendre%20bien%20au-del%C3%A0%20de%20la%20largeur%20de%20leur%20feuillage%20%3F"
 },
 {
  "text": "Le bambou est techniquement une herbe géante et non un arbre.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bambou est techniquement une herbe géante et non un arbre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20bambou%20est%20techniquement%20une%20herbe%20g%C3%A9ante%20et%20non%20un%20arbre%20%3F"
 },
 {
  "text": "Certaines fleurs imitent l'apparence et l'odeur d'insectes femelles pour attirer les mâles et se faire polliniser.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines fleurs imitent l'apparence et l'odeur d'insectes femelles pour attirer les mâles et se faire polliniser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20fleurs%20imitent%20l'apparence%20et%20l'odeur%20d'insectes%20femelles%20pour%20attirer%20les%20m%C3%A2les%20et%20se%20faire%20polliniser%20%3F"
 },
 {
  "text": "Votre cerveau reste actif la nuit et consomme presque autant d'énergie pendant le sommeil qu'à l'éveil.",
  "source": "Perplexity",
  "question": "Est-il vrai que votre cerveau reste actif la nuit et consomme presque autant d'énergie pendant le sommeil qu'à l'éveil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20votre%20cerveau%20reste%20actif%20la%20nuit%20et%20consomme%20presque%20autant%20d'%C3%A9nergie%20pendant%20le%20sommeil%20qu'%C3%A0%20l'%C3%A9veil%20%3F"
 },
 {
  "text": "Nous prenons la plupart de nos décisions quelques instants avant d'en être conscients, selon des expériences de neurosciences.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous prenons la plupart de nos décisions quelques instants avant d'en être conscients, selon des expériences de neurosciences ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20prenons%20la%20plupart%20de%20nos%20d%C3%A9cisions%20quelques%20instants%20avant%20d'en%20%C3%AAtre%20conscients%2C%20selon%20des%20exp%C3%A9riences%20de%20neurosciences%20%3F"
 },
 {
  "text": "Le cerveau ne ressent pas la douleur lui-même, bien qu'il traite tous les signaux douloureux du corps.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau ne ressent pas la douleur lui-même, bien qu'il traite tous les signaux douloureux du corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20ne%20ressent%20pas%20la%20douleur%20lui-m%C3%AAme%2C%20bien%20qu'il%20traite%20tous%20les%20signaux%20douloureux%20du%20corps%20%3F"
 },
 {
  "text": "La sensation de déjà-vu reste mal expliquée, mais serait liée à un décalage dans le traitement de la mémoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que la sensation de déjà-vu reste mal expliquée, mais serait liée à un décalage dans le traitement de la mémoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20sensation%20de%20d%C3%A9j%C3%A0-vu%20reste%20mal%20expliqu%C3%A9e%2C%20mais%20serait%20li%C3%A9e%20%C3%A0%20un%20d%C3%A9calage%20dans%20le%20traitement%20de%20la%20m%C3%A9moire%20%3F"
 },
 {
  "text": "Votre mémoire ne fonctionne pas comme un enregistrement fidèle : chaque souvenir est légèrement reconstruit à chaque rappel.",
  "source": "Perplexity",
  "question": "Est-il vrai que votre mémoire ne fonctionne pas comme un enregistrement fidèle : chaque souvenir est légèrement reconstruit à chaque rappel ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20votre%20m%C3%A9moire%20ne%20fonctionne%20pas%20comme%20un%20enregistrement%20fid%C3%A8le%C2%A0%3A%20chaque%20souvenir%20est%20l%C3%A9g%C3%A8rement%20reconstruit%20%C3%A0%20chaque%20rappel%20%3F"
 },
 {
  "text": "Le cerveau humain contient environ 86 milliards de neurones.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau humain contient environ 86 milliards de neurones ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20humain%20contient%20environ%2086%20milliards%20de%20neurones%20%3F"
 },
 {
  "text": "On oublie la plupart des rêves dans les premières minutes suivant le réveil.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on oublie la plupart des rêves dans les premières minutes suivant le réveil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20oublie%20la%20plupart%20des%20r%C3%AAves%20dans%20les%20premi%C3%A8res%20minutes%20suivant%20le%20r%C3%A9veil%20%3F"
 },
 {
  "text": "L'effet placebo est si réel qu'une fausse pilule peut soulager une douleur si l'on croit qu'elle est active.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'effet placebo est si réel qu'une fausse pilule peut soulager une douleur si l'on croit qu'elle est active ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'effet%20placebo%20est%20si%20r%C3%A9el%20qu'une%20fausse%20pilule%20peut%20soulager%20une%20douleur%20si%20l'on%20croit%20qu'elle%20est%20active%20%3F"
 },
 {
  "text": "Notre cerveau comble automatiquement la tache aveugle de chaque œil, de sorte que nous ne la remarquons jamais.",
  "source": "Perplexity",
  "question": "Est-il vrai que notre cerveau comble automatiquement la tache aveugle de chaque œil, de sorte que nous ne la remarquons jamais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20notre%20cerveau%20comble%20automatiquement%20la%20tache%20aveugle%20de%20chaque%20%C5%93il%2C%20de%20sorte%20que%20nous%20ne%20la%20remarquons%20jamais%20%3F"
 },
 {
  "text": "Le multitâche est en grande partie une illusion : le cerveau bascule rapidement d'une tâche à l'autre plutôt que de tout faire à la fois.",
  "source": "Perplexity",
  "question": "Est-il vrai que le multitâche est en grande partie une illusion : le cerveau bascule rapidement d'une tâche à l'autre plutôt que de tout faire à la fois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20multit%C3%A2che%20est%20en%20grande%20partie%20une%20illusion%C2%A0%3A%20le%20cerveau%20bascule%20rapidement%20d'une%20t%C3%A2che%20%C3%A0%20l'autre%20plut%C3%B4t%20que%20de%20tout%20faire%20%C3%A0%20la%20fois%20%3F"
 },
 {
  "text": "Compter les moutons serait moins efficace pour s'endormir qu'imaginer un paysage relaxant, selon certaines études.",
  "source": "Perplexity",
  "question": "Est-il vrai que compter les moutons serait moins efficace pour s'endormir qu'imaginer un paysage relaxant, selon certaines études ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20compter%20les%20moutons%20serait%20moins%20efficace%20pour%20s'endormir%20qu'imaginer%20un%20paysage%20relaxant%2C%20selon%20certaines%20%C3%A9tudes%20%3F"
 },
 {
  "text": "Les couleurs influencent notre humeur et même notre perception du temps ou de la température.",
  "source": "Perplexity",
  "question": "Est-il vrai que les couleurs influencent notre humeur et même notre perception du temps ou de la température ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20couleurs%20influencent%20notre%20humeur%20et%20m%C3%AAme%20notre%20perception%20du%20temps%20ou%20de%20la%20temp%C3%A9rature%20%3F"
 },
 {
  "text": "Le cerveau adulte continue de créer de nouvelles connexions tout au long de la vie, c'est la plasticité cérébrale.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau adulte continue de créer de nouvelles connexions tout au long de la vie, c'est la plasticité cérébrale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20adulte%20continue%20de%20cr%C3%A9er%20de%20nouvelles%20connexions%20tout%20au%20long%20de%20la%20vie%2C%20c'est%20la%20plasticit%C3%A9%20c%C3%A9r%C3%A9brale%20%3F"
 },
 {
  "text": "Nous sommes naturellement attirés par les visages, au point d'en voir dans des objets, un phénomène appelé paréidolie.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous sommes naturellement attirés par les visages, au point d'en voir dans des objets, un phénomène appelé paréidolie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20sommes%20naturellement%20attir%C3%A9s%20par%20les%20visages%2C%20au%20point%20d'en%20voir%20dans%20des%20objets%2C%20un%20ph%C3%A9nom%C3%A8ne%20appel%C3%A9%20par%C3%A9idolie%20%3F"
 },
 {
  "text": "Le cerveau traite une image en quelques millièmes de seconde, plus vite que la lecture d'un mot.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau traite une image en quelques millièmes de seconde, plus vite que la lecture d'un mot ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20traite%20une%20image%20en%20quelques%20milli%C3%A8mes%20de%20seconde%2C%20plus%20vite%20que%20la%20lecture%20d'un%20mot%20%3F"
 },
 {
  "text": "La musique agréable libère de la dopamine, la même molécule liée au plaisir et à la récompense.",
  "source": "Perplexity",
  "question": "Est-il vrai que la musique agréable libère de la dopamine, la même molécule liée au plaisir et à la récompense ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20musique%20agr%C3%A9able%20lib%C3%A8re%20de%20la%20dopamine%2C%20la%20m%C3%AAme%20mol%C3%A9cule%20li%C3%A9e%20au%20plaisir%20et%20%C3%A0%20la%20r%C3%A9compense%20%3F"
 },
 {
  "text": "Notre perception du temps s'accélère avec l'âge, en partie parce que les expériences deviennent moins nouvelles.",
  "source": "Perplexity",
  "question": "Est-il vrai que notre perception du temps s'accélère avec l'âge, en partie parce que les expériences deviennent moins nouvelles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20notre%20perception%20du%20temps%20s'acc%C3%A9l%C3%A8re%20avec%20l'%C3%A2ge%2C%20en%20partie%20parce%20que%20les%20exp%C3%A9riences%20deviennent%20moins%20nouvelles%20%3F"
 },
 {
  "text": "Le cerveau consomme du glucose en permanence et fatigue mentalement comme un muscle après un effort intense.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau consomme du glucose en permanence et fatigue mentalement comme un muscle après un effort intense ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20consomme%20du%20glucose%20en%20permanence%20et%20fatigue%20mentalement%20comme%20un%20muscle%20apr%C3%A8s%20un%20effort%20intense%20%3F"
 },
 {
  "text": "Bâiller pourrait aider à rafraîchir le cerveau, et il est étonnamment contagieux même entre espèces.",
  "source": "Perplexity",
  "question": "Est-il vrai que bâiller pourrait aider à rafraîchir le cerveau, et il est étonnamment contagieux même entre espèces ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20b%C3%A2iller%20pourrait%20aider%20%C3%A0%20rafra%C3%AEchir%20le%20cerveau%2C%20et%20il%20est%20%C3%A9tonnamment%20contagieux%20m%C3%AAme%20entre%20esp%C3%A8ces%20%3F"
 },
 {
  "text": "Non, on n'utilise pas seulement 10 pour cent de notre cerveau : c'est un mythe, on l'utilise en quasi-totalité.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, on n'utilise pas seulement 10 pour cent de notre cerveau : c'est un mythe, on l'utilise en quasi-totalité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20on%20n'utilise%20pas%20seulement%2010%20pour%20cent%20de%20notre%20cerveau%C2%A0%3A%20c'est%20un%20mythe%2C%20on%20l'utilise%20en%20quasi-totalit%C3%A9%20%3F"
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
  "text": "Non, la Muraille de Chine n'est pas visible à l'œil nu depuis la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, la Muraille de Chine n'est pas visible à l'œil nu depuis la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20la%20Muraille%20de%20Chine%20n'est%20pas%20visible%20%C3%A0%20l'%C5%93il%20nu%20depuis%20la%20Lune%20%3F"
 },
 {
  "text": "Non, on n'avale pas huit araignées par an en dormant : cette statistique a été inventée de toutes pièces.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, on n'avale pas huit araignées par an en dormant : cette statistique a été inventée de toutes pièces ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20on%20n'avale%20pas%20huit%20araign%C3%A9es%20par%20an%20en%20dormant%C2%A0%3A%20cette%20statistique%20a%20%C3%A9t%C3%A9%20invent%C3%A9e%20de%20toutes%20pi%C3%A8ces%20%3F"
 },
 {
  "text": "Non, le sucre ne rend pas les enfants hyperactifs : de nombreuses études n'ont trouvé aucun lien direct.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, le sucre ne rend pas les enfants hyperactifs : de nombreuses études n'ont trouvé aucun lien direct ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20le%20sucre%20ne%20rend%20pas%20les%20enfants%20hyperactifs%C2%A0%3A%20de%20nombreuses%20%C3%A9tudes%20n'ont%20trouv%C3%A9%20aucun%20lien%20direct%20%3F"
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
  "text": "Non, un éclair peut très bien frapper deux fois le même endroit, et cela arrive souvent sur les hauts bâtiments.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, un éclair peut très bien frapper deux fois le même endroit, et cela arrive souvent sur les hauts bâtiments ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20un%20%C3%A9clair%20peut%20tr%C3%A8s%20bien%20frapper%20deux%20fois%20le%20m%C3%AAme%20endroit%2C%20et%20cela%20arrive%20souvent%20sur%20les%20hauts%20b%C3%A2timents%20%3F"
 },
 {
  "text": "Non, l'eau ne tourne pas dans un sens dans un évier selon l'hémisphère : la force de Coriolis est bien trop faible à cette échelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, l'eau ne tourne pas dans un sens dans un évier selon l'hémisphère : la force de Coriolis est bien trop faible à cette échelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20l'eau%20ne%20tourne%20pas%20dans%20un%20sens%20dans%20un%20%C3%A9vier%20selon%20l'h%C3%A9misph%C3%A8re%C2%A0%3A%20la%20force%20de%20Coriolis%20est%20bien%20trop%20faible%20%C3%A0%20cette%20%C3%A9chelle%20%3F"
 },
 {
  "text": "Non, Einstein n'était pas mauvais en mathématiques : cette légende repose sur un malentendu de barème.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, Einstein n'était pas mauvais en mathématiques : cette légende repose sur un malentendu de barème ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20Einstein%20n'%C3%A9tait%20pas%20mauvais%20en%20math%C3%A9matiques%C2%A0%3A%20cette%20l%C3%A9gende%20repose%20sur%20un%20malentendu%20de%20bar%C3%A8me%20%3F"
 },
 {
  "text": "Non, le caméléon ne change pas de couleur pour se camoufler avant tout, mais surtout pour communiquer et réguler sa température.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, le caméléon ne change pas de couleur pour se camoufler avant tout, mais surtout pour communiquer et réguler sa température ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20le%20cam%C3%A9l%C3%A9on%20ne%20change%20pas%20de%20couleur%20pour%20se%20camoufler%20avant%20tout%2C%20mais%20surtout%20pour%20communiquer%20et%20r%C3%A9guler%20sa%20temp%C3%A9rature%20%3F"
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
  "text": "Non, les cafards ne survivraient pas seuls à une guerre nucléaire, même s'ils résistent mieux que nous aux radiations.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, les cafards ne survivraient pas seuls à une guerre nucléaire, même s'ils résistent mieux que nous aux radiations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20les%20cafards%20ne%20survivraient%20pas%20seuls%20%C3%A0%20une%20guerre%20nucl%C3%A9aire%2C%20m%C3%AAme%20s'ils%20r%C3%A9sistent%20mieux%20que%20nous%20aux%20radiations%20%3F"
 },
 {
  "text": "Non, on ne perd pas la majorité de sa chaleur par la tête : la déperdition dépend surtout de la surface découverte.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, on ne perd pas la majorité de sa chaleur par la tête : la déperdition dépend surtout de la surface découverte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20on%20ne%20perd%20pas%20la%20majorit%C3%A9%20de%20sa%20chaleur%20par%20la%20t%C3%AAte%C2%A0%3A%20la%20d%C3%A9perdition%20d%C3%A9pend%20surtout%20de%20la%20surface%20d%C3%A9couverte%20%3F"
 },
 {
  "text": "Non, l'étoile Polaire n'est pas l'étoile la plus brillante du ciel, seulement l'une des plus utiles pour s'orienter.",
  "source": "Perplexity",
  "question": "Est-il vrai que non, l'étoile Polaire n'est pas l'étoile la plus brillante du ciel, seulement l'une des plus utiles pour s'orienter ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20non%2C%20l'%C3%A9toile%20Polaire%20n'est%20pas%20l'%C3%A9toile%20la%20plus%20brillante%20du%20ciel%2C%20seulement%20l'une%20des%20plus%20utiles%20pour%20s'orienter%20%3F"
 },
 {
  "text": "Il est impossible de se lécher le coude pour la plupart des gens, même si beaucoup essaient en le lisant.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il est impossible de se lécher le coude pour la plupart des gens, même si beaucoup essaient en le lisant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20est%20impossible%20de%20se%20l%C3%A9cher%20le%20coude%20pour%20la%20plupart%20des%20gens%2C%20m%C3%AAme%20si%20beaucoup%20essaient%20en%20le%20lisant%20%3F"
 },
 {
  "text": "Le cœur bat légèrement plus vite quand on écoute une musique que l'on adore.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cœur bat légèrement plus vite quand on écoute une musique que l'on adore ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20c%C5%93ur%20bat%20l%C3%A9g%C3%A8rement%20plus%20vite%20quand%20on%20%C3%A9coute%20une%20musique%20que%20l'on%20adore%20%3F"
 },
 {
  "text": "Éternuer projette des gouttelettes à une vitesse pouvant dépasser 150 kilomètres par heure.",
  "source": "Perplexity",
  "question": "Est-il vrai que éternuer projette des gouttelettes à une vitesse pouvant dépasser 150 kilomètres par heure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20%C3%A9ternuer%20projette%20des%20gouttelettes%20%C3%A0%20une%20vitesse%20pouvant%20d%C3%A9passer%20150%20kilom%C3%A8tres%20par%20heure%20%3F"
 },
 {
  "text": "Vous ne pouvez pas vous chatouiller vous-même, car votre cerveau anticipe le geste et annule la surprise.",
  "source": "Perplexity",
  "question": "Est-il vrai que vous ne pouvez pas vous chatouiller vous-même, car votre cerveau anticipe le geste et annule la surprise ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vous%20ne%20pouvez%20pas%20vous%20chatouiller%20vous-m%C3%AAme%2C%20car%20votre%20cerveau%20anticipe%20le%20geste%20et%20annule%20la%20surprise%20%3F"
 },
 {
  "text": "Le hoquet serait un vestige d'un ancien réflexe respiratoire hérité de nos lointains ancêtres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le hoquet serait un vestige d'un ancien réflexe respiratoire hérité de nos lointains ancêtres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20hoquet%20serait%20un%20vestige%20d'un%20ancien%20r%C3%A9flexe%20respiratoire%20h%C3%A9rit%C3%A9%20de%20nos%20lointains%20anc%C3%AAtres%20%3F"
 },
 {
  "text": "Se concentrer sur sa respiration ralentit réellement le rythme cardiaque et calme le système nerveux.",
  "source": "Perplexity",
  "question": "Est-il vrai que se concentrer sur sa respiration ralentit réellement le rythme cardiaque et calme le système nerveux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20se%20concentrer%20sur%20sa%20respiration%20ralentit%20r%C3%A9ellement%20le%20rythme%20cardiaque%20et%20calme%20le%20syst%C3%A8me%20nerveux%20%3F"
 },
 {
  "text": "Vos yeux bougent par petits sauts appelés saccades, même quand vous croyez fixer un point immobile.",
  "source": "Perplexity",
  "question": "Est-il vrai que vos yeux bougent par petits sauts appelés saccades, même quand vous croyez fixer un point immobile ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20vos%20yeux%20bougent%20par%20petits%20sauts%20appel%C3%A9s%20saccades%2C%20m%C3%AAme%20quand%20vous%20croyez%20fixer%20un%20point%20immobile%20%3F"
 },
 {
  "text": "Le fait de rougir est une réaction unique où l'émotion agit directement sur les vaisseaux sanguins du visage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fait de rougir est une réaction unique où l'émotion agit directement sur les vaisseaux sanguins du visage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fait%20de%20rougir%20est%20une%20r%C3%A9action%20unique%20o%C3%B9%20l'%C3%A9motion%20agit%20directement%20sur%20les%20vaisseaux%20sanguins%20du%20visage%20%3F"
 },
 {
  "text": "Les frissons de la peau, la chair de poule, sont un réflexe hérité d'ancêtres poilus qui hérissaient leurs poils.",
  "source": "Perplexity",
  "question": "Est-il vrai que les frissons de la peau, la chair de poule, sont un réflexe hérité d'ancêtres poilus qui hérissaient leurs poils ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20frissons%20de%20la%20peau%2C%20la%20chair%20de%20poule%2C%20sont%20un%20r%C3%A9flexe%20h%C3%A9rit%C3%A9%20d'anc%C3%AAtres%20poilus%20qui%20h%C3%A9rissaient%20leurs%20poils%20%3F"
 },
 {
  "text": "Il y a plus de parties d'échecs possibles que d'atomes dans l'univers observable.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus de parties d'échecs possibles que d'atomes dans l'univers observable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20de%20parties%20d'%C3%A9checs%20possibles%20que%20d'atomes%20dans%20l'univers%20observable%20%3F"
 },
 {
  "text": "Un ballon de football réglementaire possède le plus souvent 32 faces, mélange de pentagones et d'hexagones.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un ballon de football réglementaire possède le plus souvent 32 faces, mélange de pentagones et d'hexagones ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20ballon%20de%20football%20r%C3%A9glementaire%20poss%C3%A8de%20le%20plus%20souvent%2032%20faces%2C%20m%C3%A9lange%20de%20pentagones%20et%20d'hexagones%20%3F"
 },
 {
  "text": "Le marathon fait environ 42 kilomètres à cause d'une distance fixée en partie pour arranger la famille royale britannique en 1908.",
  "source": "Perplexity",
  "question": "Est-il vrai que le marathon fait environ 42 kilomètres à cause d'une distance fixée en partie pour arranger la famille royale britannique en 1908 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20marathon%20fait%20environ%2042%20kilom%C3%A8tres%20%C3%A0%20cause%20d'une%20distance%20fix%C3%A9e%20en%20partie%20pour%20arranger%20la%20famille%20royale%20britannique%20en%201908%20%3F"
 },
 {
  "text": "Les balles de golf ont des alvéoles parce que ces creux réduisent la traînée et les font voler plus loin.",
  "source": "Perplexity",
  "question": "Est-il vrai que les balles de golf ont des alvéoles parce que ces creux réduisent la traînée et les font voler plus loin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20balles%20de%20golf%20ont%20des%20alv%C3%A9oles%20parce%20que%20ces%20creux%20r%C3%A9duisent%20la%20tra%C3%AEn%C3%A9e%20et%20les%20font%20voler%20plus%20loin%20%3F"
 },
 {
  "text": "Le mot gymnase vient du grec gymnos, nu, et signifiait à l'origine s'exercer nu.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot gymnase vient du grec gymnos, nu, et signifiait à l'origine s'exercer nu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20gymnase%20vient%20du%20grec%20gymnos%2C%20nu%2C%20et%20signifiait%20%C3%A0%20l'origine%20s'exercer%20nu%20%3F"
 },
 {
  "text": "Au basket, le panier était à l'origine un vrai panier de pêches dont il fallait récupérer la balle à la main.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au basket, le panier était à l'origine un vrai panier de pêches dont il fallait récupérer la balle à la main ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%20basket%2C%20le%20panier%20%C3%A9tait%20%C3%A0%20l'origine%20un%20vrai%20panier%20de%20p%C3%AAches%20dont%20il%20fallait%20r%C3%A9cup%C3%A9rer%20la%20balle%20%C3%A0%20la%20main%20%3F"
 },
 {
  "text": "Le badminton est l'un des sports de raquette les plus rapides, le volant pouvant filer à plus de 400 kilomètres par heure.",
  "source": "Perplexity",
  "question": "Est-il vrai que le badminton est l'un des sports de raquette les plus rapides, le volant pouvant filer à plus de 400 kilomètres par heure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20badminton%20est%20l'un%20des%20sports%20de%20raquette%20les%20plus%20rapides%2C%20le%20volant%20pouvant%20filer%20%C3%A0%20plus%20de%20400%20kilom%C3%A8tres%20par%20heure%20%3F"
 },
 {
  "text": "Le premier ballon de football moderne était en cuir et devenait beaucoup plus lourd sous la pluie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier ballon de football moderne était en cuir et devenait beaucoup plus lourd sous la pluie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20ballon%20de%20football%20moderne%20%C3%A9tait%20en%20cuir%20et%20devenait%20beaucoup%20plus%20lourd%20sous%20la%20pluie%20%3F"
 },
 {
  "text": "Les billets de banque ne sont généralement pas en papier mais en coton ou en matières plastiques.",
  "source": "Perplexity",
  "question": "Est-il vrai que les billets de banque ne sont généralement pas en papier mais en coton ou en matières plastiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20billets%20de%20banque%20ne%20sont%20g%C3%A9n%C3%A9ralement%20pas%20en%20papier%20mais%20en%20coton%20ou%20en%20mati%C3%A8res%20plastiques%20%3F"
 },
 {
  "text": "Il y a plus d'arbres sur Terre que d'étoiles dans la Voie lactée, selon les estimations.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il y a plus d'arbres sur Terre que d'étoiles dans la Voie lactée, selon les estimations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20y%20a%20plus%20d'arbres%20sur%20Terre%20que%20d'%C3%A9toiles%20dans%20la%20Voie%20lact%C3%A9e%2C%20selon%20les%20estimations%20%3F"
 },
 {
  "text": "Le plastique met des centaines d'années à se dégrader, si bien que presque tout le plastique jamais produit existe encore.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plastique met des centaines d'années à se dégrader, si bien que presque tout le plastique jamais produit existe encore ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plastique%20met%20des%20centaines%20d'ann%C3%A9es%20%C3%A0%20se%20d%C3%A9grader%2C%20si%20bien%20que%20presque%20tout%20le%20plastique%20jamais%20produit%20existe%20encore%20%3F"
 },
 {
  "text": "Le code-barres a été inventé en s'inspirant du code Morse tracé dans le sable.",
  "source": "Perplexity",
  "question": "Est-il vrai que le code-barres a été inventé en s'inspirant du code Morse tracé dans le sable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20code-barres%20a%20%C3%A9t%C3%A9%20invent%C3%A9%20en%20s'inspirant%20du%20code%20Morse%20trac%C3%A9%20dans%20le%20sable%20%3F"
 },
 {
  "text": "Le premier objet vendu en ligne aurait été, selon certaines sources, un disque de musique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier objet vendu en ligne aurait été, selon certaines sources, un disque de musique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20objet%20vendu%20en%20ligne%20aurait%20%C3%A9t%C3%A9%2C%20selon%20certaines%20sources%2C%20un%20disque%20de%20musique%20%3F"
 },
 {
  "text": "La plupart des couleurs que nous voyons sur les écrans sont créées à partir de seulement trois couleurs de lumière.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plupart des couleurs que nous voyons sur les écrans sont créées à partir de seulement trois couleurs de lumière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plupart%20des%20couleurs%20que%20nous%20voyons%20sur%20les%20%C3%A9crans%20sont%20cr%C3%A9%C3%A9es%20%C3%A0%20partir%20de%20seulement%20trois%20couleurs%20de%20lumi%C3%A8re%20%3F"
 },
 {
  "text": "Il existe une couleur, le magenta, qui n'a pas de longueur d'onde propre : notre cerveau l'invente à partir du rouge et du bleu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe une couleur, le magenta, qui n'a pas de longueur d'onde propre : notre cerveau l'invente à partir du rouge et du bleu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20une%20couleur%2C%20le%20magenta%2C%20qui%20n'a%20pas%20de%20longueur%20d'onde%20propre%C2%A0%3A%20notre%20cerveau%20l'invente%20%C3%A0%20partir%20du%20rouge%20et%20du%20bleu%20%3F"
 },
 {
  "text": "Le zéro degré Celsius et le zéro Fahrenheit correspondent à des repères différents, l'un basé sur l'eau, l'autre sur un mélange de sel et de glace.",
  "source": "Perplexity",
  "question": "Est-il vrai que le zéro degré Celsius et le zéro Fahrenheit correspondent à des repères différents, l'un basé sur l'eau, l'autre sur un mélange de sel et de glace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20z%C3%A9ro%20degr%C3%A9%20Celsius%20et%20le%20z%C3%A9ro%20Fahrenheit%20correspondent%20%C3%A0%20des%20rep%C3%A8res%20diff%C3%A9rents%2C%20l'un%20bas%C3%A9%20sur%20l'eau%2C%20l'autre%20sur%20un%20m%C3%A9lange%20de%20sel%20et%20de%20glace%20%3F"
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
  "text": "Les feux d'artifice doivent leurs couleurs à différents métaux qui brûlent, le cuivre donnant du bleu et le strontium du rouge.",
  "source": "Perplexity",
  "question": "Est-il vrai que les feux d'artifice doivent leurs couleurs à différents métaux qui brûlent, le cuivre donnant du bleu et le strontium du rouge ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20feux%20d'artifice%20doivent%20leurs%20couleurs%20%C3%A0%20diff%C3%A9rents%20m%C3%A9taux%20qui%20br%C3%BBlent%2C%20le%20cuivre%20donnant%20du%20bleu%20et%20le%20strontium%20du%20rouge%20%3F"
 },
 {
  "text": "Le mot okay est l'un des plus compris et utilisés à travers le monde entier.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot okay est l'un des plus compris et utilisés à travers le monde entier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20okay%20est%20l'un%20des%20plus%20compris%20et%20utilis%C3%A9s%20%C3%A0%20travers%20le%20monde%20entier%20%3F"
 },
 {
  "text": "La plupart des poussières de la maison sont un mélange de peau morte, de fibres de tissu et de particules extérieures.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plupart des poussières de la maison sont un mélange de peau morte, de fibres de tissu et de particules extérieures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plupart%20des%20poussi%C3%A8res%20de%20la%20maison%20sont%20un%20m%C3%A9lange%20de%20peau%20morte%2C%20de%20fibres%20de%20tissu%20et%20de%20particules%20ext%C3%A9rieures%20%3F"
 },
 {
  "text": "Un crayon à papier ordinaire peut tracer une ligne longue de plusieurs dizaines de kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un crayon à papier ordinaire peut tracer une ligne longue de plusieurs dizaines de kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20crayon%20%C3%A0%20papier%20ordinaire%20peut%20tracer%20une%20ligne%20longue%20de%20plusieurs%20dizaines%20de%20kilom%C3%A8tres%20%3F"
 },
 {
  "text": "Le velours, la fermeture éclair et bien d'autres objets du quotidien ont mis des décennies à s'imposer après leur invention.",
  "source": "Perplexity",
  "question": "Est-il vrai que le velours, la fermeture éclair et bien d'autres objets du quotidien ont mis des décennies à s'imposer après leur invention ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20velours%2C%20la%20fermeture%20%C3%A9clair%20et%20bien%20d'autres%20objets%20du%20quotidien%20ont%20mis%20des%20d%C3%A9cennies%20%C3%A0%20s'imposer%20apr%C3%A8s%20leur%20invention%20%3F"
 },
 {
  "text": "Les girafes n'ont que sept vertèbres dans le cou, exactement comme les humains, mais chacune est énorme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les girafes n'ont que sept vertèbres dans le cou, exactement comme les humains, mais chacune est énorme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20girafes%20n'ont%20que%20sept%20vert%C3%A8bres%20dans%20le%20cou%2C%20exactement%20comme%20les%20humains%2C%20mais%20chacune%20est%20%C3%A9norme%20%3F"
 },
 {
  "text": "La langue d'un caméléon peut se déployer plus vite que l'œil ne peut la suivre pour attraper un insecte.",
  "source": "Perplexity",
  "question": "Est-il vrai que la langue d'un caméléon peut se déployer plus vite que l'œil ne peut la suivre pour attraper un insecte ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20langue%20d'un%20cam%C3%A9l%C3%A9on%20peut%20se%20d%C3%A9ployer%20plus%20vite%20que%20l'%C5%93il%20ne%20peut%20la%20suivre%20pour%20attraper%20un%20insecte%20%3F"
 },
 {
  "text": "Un groupe de corbeaux se nomme en anglais a murder, ce qui signifie littéralement un meurtre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un groupe de corbeaux se nomme en anglais a murder, ce qui signifie littéralement un meurtre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20groupe%20de%20corbeaux%20se%20nomme%20en%20anglais%20a%20murder%2C%20ce%20qui%20signifie%20litt%C3%A9ralement%20un%20meurtre%20%3F"
 },
 {
  "text": "Les chiens perçoivent le monde surtout par l'odorat, avec un flair des dizaines de milliers de fois plus fin que le nôtre.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chiens perçoivent le monde surtout par l'odorat, avec un flair des dizaines de milliers de fois plus fin que le nôtre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chiens%20per%C3%A7oivent%20le%20monde%20surtout%20par%20l'odorat%2C%20avec%20un%20flair%20des%20dizaines%20de%20milliers%20de%20fois%20plus%20fin%20que%20le%20n%C3%B4tre%20%3F"
 },
 {
  "text": "Le poisson-globe gonfle en avalant de l'eau pour paraître plus gros et dissuader les prédateurs.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-globe gonfle en avalant de l'eau pour paraître plus gros et dissuader les prédateurs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-globe%20gonfle%20en%20avalant%20de%20l'eau%20pour%20para%C3%AEtre%20plus%20gros%20et%20dissuader%20les%20pr%C3%A9dateurs%20%3F"
 },
 {
  "text": "Les papillons goûtent avec leurs pattes pour savoir si une plante convient à leurs œufs.",
  "source": "Perplexity",
  "question": "Est-il vrai que les papillons goûtent avec leurs pattes pour savoir si une plante convient à leurs œufs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20papillons%20go%C3%BBtent%20avec%20leurs%20pattes%20pour%20savoir%20si%20une%20plante%20convient%20%C3%A0%20leurs%20%C5%93ufs%20%3F"
 },
 {
  "text": "Le tigre a la peau rayée sous son pelage, pas seulement le poil.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tigre a la peau rayée sous son pelage, pas seulement le poil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tigre%20a%20la%20peau%20ray%C3%A9e%20sous%20son%20pelage%2C%20pas%20seulement%20le%20poil%20%3F"
 },
 {
  "text": "Les manchots empereurs peuvent plonger à plusieurs centaines de mètres de profondeur et retenir leur souffle très longtemps.",
  "source": "Perplexity",
  "question": "Est-il vrai que les manchots empereurs peuvent plonger à plusieurs centaines de mètres de profondeur et retenir leur souffle très longtemps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20manchots%20empereurs%20peuvent%20plonger%20%C3%A0%20plusieurs%20centaines%20de%20m%C3%A8tres%20de%20profondeur%20et%20retenir%20leur%20souffle%20tr%C3%A8s%20longtemps%20%3F"
 },
 {
  "text": "Le colossal calmar géant possède les plus grands yeux du règne animal, de la taille d'une assiette.",
  "source": "Perplexity",
  "question": "Est-il vrai que le colossal calmar géant possède les plus grands yeux du règne animal, de la taille d'une assiette ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20colossal%20calmar%20g%C3%A9ant%20poss%C3%A8de%20les%20plus%20grands%20yeux%20du%20r%C3%A8gne%20animal%2C%20de%20la%20taille%20d'une%20assiette%20%3F"
 },
 {
  "text": "Les fourmis coupe-feuilles cultivent un champignon souterrain pour se nourrir, une forme d'agriculture bien avant l'homme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis coupe-feuilles cultivent un champignon souterrain pour se nourrir, une forme d'agriculture bien avant l'homme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20coupe-feuilles%20cultivent%20un%20champignon%20souterrain%20pour%20se%20nourrir%2C%20une%20forme%20d'agriculture%20bien%20avant%20l'homme%20%3F"
 },
 {
  "text": "Les rennes voient une partie du spectre ultraviolet, ce qui les aide à repérer nourriture et prédateurs dans la neige.",
  "source": "Perplexity",
  "question": "Est-il vrai que les rennes voient une partie du spectre ultraviolet, ce qui les aide à repérer nourriture et prédateurs dans la neige ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20rennes%20voient%20une%20partie%20du%20spectre%20ultraviolet%2C%20ce%20qui%20les%20aide%20%C3%A0%20rep%C3%A9rer%20nourriture%20et%20pr%C3%A9dateurs%20dans%20la%20neige%20%3F"
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
  "text": "Les pieuvres peuvent ouvrir des bocaux et s'échapper d'aquariums grâce à leur intelligence et leur corps souple.",
  "source": "Perplexity",
  "question": "Est-il vrai que les pieuvres peuvent ouvrir des bocaux et s'échapper d'aquariums grâce à leur intelligence et leur corps souple ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20pieuvres%20peuvent%20ouvrir%20des%20bocaux%20et%20s'%C3%A9chapper%20d'aquariums%20gr%C3%A2ce%20%C3%A0%20leur%20intelligence%20et%20leur%20corps%20souple%20%3F"
 },
 {
  "text": "Les manchots peuvent boire de l'eau salée car ils possèdent une glande qui filtre le sel de leur organisme.",
  "source": "Perplexity",
  "question": "Est-il vrai que les manchots peuvent boire de l'eau salée car ils possèdent une glande qui filtre le sel de leur organisme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20manchots%20peuvent%20boire%20de%20l'eau%20sal%C3%A9e%20car%20ils%20poss%C3%A8dent%20une%20glande%20qui%20filtre%20le%20sel%20de%20leur%20organisme%20%3F"
 },
 {
  "text": "Le colibri est capable de tomber en torpeur la nuit, ralentissant fortement son cœur pour économiser l'énergie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le colibri est capable de tomber en torpeur la nuit, ralentissant fortement son cœur pour économiser l'énergie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20colibri%20est%20capable%20de%20tomber%20en%20torpeur%20la%20nuit%2C%20ralentissant%20fortement%20son%20c%C5%93ur%20pour%20%C3%A9conomiser%20l'%C3%A9nergie%20%3F"
 },
 {
  "text": "Le paresseux descend de son arbre pour faire ses besoins environ une fois par semaine seulement.",
  "source": "Perplexity",
  "question": "Est-il vrai que le paresseux descend de son arbre pour faire ses besoins environ une fois par semaine seulement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20paresseux%20descend%20de%20son%20arbre%20pour%20faire%20ses%20besoins%20environ%20une%20fois%20par%20semaine%20seulement%20%3F"
 },
 {
  "text": "Les orques sont en réalité les plus grands membres de la famille des dauphins.",
  "source": "Perplexity",
  "question": "Est-il vrai que les orques sont en réalité les plus grands membres de la famille des dauphins ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20orques%20sont%20en%20r%C3%A9alit%C3%A9%20les%20plus%20grands%20membres%20de%20la%20famille%20des%20dauphins%20%3F"
 },
 {
  "text": "Le poulpe imitateur peut copier l'apparence et les mouvements de plusieurs autres animaux marins pour se protéger.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poulpe imitateur peut copier l'apparence et les mouvements de plusieurs autres animaux marins pour se protéger ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poulpe%20imitateur%20peut%20copier%20l'apparence%20et%20les%20mouvements%20de%20plusieurs%20autres%20animaux%20marins%20pour%20se%20prot%C3%A9ger%20%3F"
 },
 {
  "text": "Un troupeau de flamants roses peut devenir moins rose s'il ne mange plus assez de crevettes et d'algues pigmentées.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un troupeau de flamants roses peut devenir moins rose s'il ne mange plus assez de crevettes et d'algues pigmentées ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20troupeau%20de%20flamants%20roses%20peut%20devenir%20moins%20rose%20s'il%20ne%20mange%20plus%20assez%20de%20crevettes%20et%20d'algues%20pigment%C3%A9es%20%3F"
 },
 {
  "text": "Le fer contenu dans notre sang a été forgé au cœur d'étoiles anciennes mortes en explosant.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fer contenu dans notre sang a été forgé au cœur d'étoiles anciennes mortes en explosant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fer%20contenu%20dans%20notre%20sang%20a%20%C3%A9t%C3%A9%20forg%C3%A9%20au%20c%C5%93ur%20d'%C3%A9toiles%20anciennes%20mortes%20en%20explosant%20%3F"
 },
 {
  "text": "Nous sommes littéralement faits de poussière d'étoiles, la plupart de nos atomes ayant été créés dans les étoiles.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous sommes littéralement faits de poussière d'étoiles, la plupart de nos atomes ayant été créés dans les étoiles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20sommes%20litt%C3%A9ralement%20faits%20de%20poussi%C3%A8re%20d'%C3%A9toiles%2C%20la%20plupart%20de%20nos%20atomes%20ayant%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9s%20dans%20les%20%C3%A9toiles%20%3F"
 },
 {
  "text": "Un trou noir n'aspire pas tout ce qui l'entoure comme un aspirateur : on peut orbiter autour, comme autour d'une étoile.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un trou noir n'aspire pas tout ce qui l'entoure comme un aspirateur : on peut orbiter autour, comme autour d'une étoile ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20trou%20noir%20n'aspire%20pas%20tout%20ce%20qui%20l'entoure%20comme%20un%20aspirateur%C2%A0%3A%20on%20peut%20orbiter%20autour%2C%20comme%20autour%20d'une%20%C3%A9toile%20%3F"
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
  "text": "La couleur d'une étoile révèle sa température : les bleues sont bien plus chaudes que les rouges.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur d'une étoile révèle sa température : les bleues sont bien plus chaudes que les rouges ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20d'une%20%C3%A9toile%20r%C3%A9v%C3%A8le%20sa%20temp%C3%A9rature%C2%A0%3A%20les%20bleues%20sont%20bien%20plus%20chaudes%20que%20les%20rouges%20%3F"
 },
 {
  "text": "L'univers observable s'étend sur des dizaines de milliards d'années-lumière dans toutes les directions.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'univers observable s'étend sur des dizaines de milliards d'années-lumière dans toutes les directions ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'univers%20observable%20s'%C3%A9tend%20sur%20des%20dizaines%20de%20milliards%20d'ann%C3%A9es-lumi%C3%A8re%20dans%20toutes%20les%20directions%20%3F"
 },
 {
  "text": "Le vide de l'espace est si froid que sans combinaison, un corps gèlerait, mais il pourrait aussi surchauffer au soleil direct.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vide de l'espace est si froid que sans combinaison, un corps gèlerait, mais il pourrait aussi surchauffer au soleil direct ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20vide%20de%20l'espace%20est%20si%20froid%20que%20sans%20combinaison%2C%20un%20corps%20g%C3%A8lerait%2C%20mais%20il%20pourrait%20aussi%20surchauffer%20au%20soleil%20direct%20%3F"
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
  "text": "Le point le plus au sud habité de la planète se trouve sur des bases scientifiques en Antarctique.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus au sud habité de la planète se trouve sur des bases scientifiques en Antarctique ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20au%20sud%20habit%C3%A9%20de%20la%20plan%C3%A8te%20se%20trouve%20sur%20des%20bases%20scientifiques%20en%20Antarctique%20%3F"
 },
 {
  "text": "La Bolivie possède une immense étendue de sel, le Salar d'Uyuni, qui se transforme en un gigantesque miroir sous la pluie.",
  "source": "Perplexity",
  "question": "Est-il vrai que la Bolivie possède une immense étendue de sel, le Salar d'Uyuni, qui se transforme en un gigantesque miroir sous la pluie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20Bolivie%20poss%C3%A8de%20une%20immense%20%C3%A9tendue%20de%20sel%2C%20le%20Salar%20d'Uyuni%2C%20qui%20se%20transforme%20en%20un%20gigantesque%20miroir%20sous%20la%20pluie%20%3F"
 },
 {
  "text": "L'Égypte n'est pas le pays qui compte le plus de pyramides : c'est le Soudan qui en abrite le plus grand nombre.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Égypte n'est pas le pays qui compte le plus de pyramides : c'est le Soudan qui en abrite le plus grand nombre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'%C3%89gypte%20n'est%20pas%20le%20pays%20qui%20compte%20le%20plus%20de%20pyramides%C2%A0%3A%20c'est%20le%20Soudan%20qui%20en%20abrite%20le%20plus%20grand%20nombre%20%3F"
 },
 {
  "text": "Le Japon est composé de milliers d'îles, dont la plupart sont inhabitées.",
  "source": "Perplexity",
  "question": "Est-il vrai que le Japon est composé de milliers d'îles, dont la plupart sont inhabitées ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20Japon%20est%20compos%C3%A9%20de%20milliers%20d'%C3%AEles%2C%20dont%20la%20plupart%20sont%20inhabit%C3%A9es%20%3F"
 },
 {
  "text": "Venise est bâtie sur des millions de pieux de bois enfoncés dans la vase de la lagune.",
  "source": "Perplexity",
  "question": "Est-il vrai que venise est bâtie sur des millions de pieux de bois enfoncés dans la vase de la lagune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20venise%20est%20b%C3%A2tie%20sur%20des%20millions%20de%20pieux%20de%20bois%20enfonc%C3%A9s%20dans%20la%20vase%20de%20la%20lagune%20%3F"
 },
 {
  "text": "L'Indonésie compte des milliers d'îles réparties sur trois fuseaux horaires.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Indonésie compte des milliers d'îles réparties sur trois fuseaux horaires ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Indon%C3%A9sie%20compte%20des%20milliers%20d'%C3%AEles%20r%C3%A9parties%20sur%20trois%20fuseaux%20horaires%20%3F"
 },
 {
  "text": "Il existe des villages en Norvège qui installent d'immenses miroirs sur la montagne pour renvoyer la lumière du soleil l'hiver.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des villages en Norvège qui installent d'immenses miroirs sur la montagne pour renvoyer la lumière du soleil l'hiver ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20villages%20en%20Norv%C3%A8ge%20qui%20installent%20d'immenses%20miroirs%20sur%20la%20montagne%20pour%20renvoyer%20la%20lumi%C3%A8re%20du%20soleil%20l'hiver%20%3F"
 },
 {
  "text": "Le fuseau horaire du Népal est décalé de 45 minutes par rapport à ses voisins, un cas assez rare.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fuseau horaire du Népal est décalé de 45 minutes par rapport à ses voisins, un cas assez rare ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fuseau%20horaire%20du%20N%C3%A9pal%20est%20d%C3%A9cal%C3%A9%20de%2045%20minutes%20par%20rapport%20%C3%A0%20ses%20voisins%2C%20un%20cas%20assez%20rare%20%3F"
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
  "text": "On a longtemps cru que la Terre était plate seulement chez quelques-uns : les savants la savaient ronde depuis l'Antiquité grecque.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'on a longtemps cru que la Terre était plate seulement chez quelques-uns : les savants la savaient ronde depuis l'Antiquité grecque ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'on%20a%20longtemps%20cru%20que%20la%20Terre%20%C3%A9tait%20plate%20seulement%20chez%20quelques-uns%C2%A0%3A%20les%20savants%20la%20savaient%20ronde%20depuis%20l'Antiquit%C3%A9%20grecque%20%3F"
 },
 {
  "text": "Les allumettes ont été inventées après le briquet, contrairement à ce que l'on imagine.",
  "source": "Perplexity",
  "question": "Est-il vrai que les allumettes ont été inventées après le briquet, contrairement à ce que l'on imagine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20allumettes%20ont%20%C3%A9t%C3%A9%20invent%C3%A9es%20apr%C3%A8s%20le%20briquet%2C%20contrairement%20%C3%A0%20ce%20que%20l'on%20imagine%20%3F"
 },
 {
  "text": "La machine à écrire a d'abord été pensée comme une aide pour les personnes aveugles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la machine à écrire a d'abord été pensée comme une aide pour les personnes aveugles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20machine%20%C3%A0%20%C3%A9crire%20a%20d'abord%20%C3%A9t%C3%A9%20pens%C3%A9e%20comme%20une%20aide%20pour%20les%20personnes%20aveugles%20%3F"
 },
 {
  "text": "Le premier parachute a été imaginé sur le papier par Léonard de Vinci bien avant l'invention de l'avion.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier parachute a été imaginé sur le papier par Léonard de Vinci bien avant l'invention de l'avion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20parachute%20a%20%C3%A9t%C3%A9%20imagin%C3%A9%20sur%20le%20papier%20par%20L%C3%A9onard%20de%20Vinci%20bien%20avant%20l'invention%20de%20l'avion%20%3F"
 },
 {
  "text": "Au 17e siècle, aux Pays-Bas, la spéculation sur les bulbes de tulipe a atteint des prix délirants avant de s'effondrer.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'au 17e siècle, aux Pays-Bas, la spéculation sur les bulbes de tulipe a atteint des prix délirants avant de s'effondrer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'au%2017e%20si%C3%A8cle%2C%20aux%20Pays-Bas%2C%20la%20sp%C3%A9culation%20sur%20les%20bulbes%20de%20tulipe%20a%20atteint%20des%20prix%20d%C3%A9lirants%20avant%20de%20s'effondrer%20%3F"
 },
 {
  "text": "Les anciens Romains avaient déjà des systèmes de chauffage par le sol dans leurs riches demeures.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anciens Romains avaient déjà des systèmes de chauffage par le sol dans leurs riches demeures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anciens%20Romains%20avaient%20d%C3%A9j%C3%A0%20des%20syst%C3%A8mes%20de%20chauffage%20par%20le%20sol%20dans%20leurs%20riches%20demeures%20%3F"
 },
 {
  "text": "Le papier hygiénique en rouleau n'a été popularisé qu'à la fin du 19e siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que le papier hygiénique en rouleau n'a été popularisé qu'à la fin du 19e siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20papier%20hygi%C3%A9nique%20en%20rouleau%20n'a%20%C3%A9t%C3%A9%20popularis%C3%A9%20qu'%C3%A0%20la%20fin%20du%2019e%20si%C3%A8cle%20%3F"
 },
 {
  "text": "Les premiers jeux Olympiques modernes en 1896 ne comptaient qu'une poignée de pays et d'épreuves.",
  "source": "Perplexity",
  "question": "Est-il vrai que les premiers jeux Olympiques modernes en 1896 ne comptaient qu'une poignée de pays et d'épreuves ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premiers%20jeux%20Olympiques%20modernes%20en%201896%20ne%20comptaient%20qu'une%20poign%C3%A9e%20de%20pays%20et%20d'%C3%A9preuves%20%3F"
 },
 {
  "text": "Les chiffres que nous appelons arabes ont en réalité été mis au point en Inde avant d'être transmis par le monde arabe.",
  "source": "Perplexity",
  "question": "Est-il vrai que les chiffres que nous appelons arabes ont en réalité été mis au point en Inde avant d'être transmis par le monde arabe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20chiffres%20que%20nous%20appelons%20arabes%20ont%20en%20r%C3%A9alit%C3%A9%20%C3%A9t%C3%A9%20mis%20au%20point%20en%20Inde%20avant%20d'%C3%AAtre%20transmis%20par%20le%20monde%20arabe%20%3F"
 },
 {
  "text": "Le tout premier appel téléphonique a été passé par Alexander Graham Bell à son assistant dans la pièce voisine.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tout premier appel téléphonique a été passé par Alexander Graham Bell à son assistant dans la pièce voisine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tout%20premier%20appel%20t%C3%A9l%C3%A9phonique%20a%20%C3%A9t%C3%A9%20pass%C3%A9%20par%20Alexander%20Graham%20Bell%20%C3%A0%20son%20assistant%20dans%20la%20pi%C3%A8ce%20voisine%20%3F"
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
  "text": "Le fruit de la passion doit son nom aux missionnaires qui voyaient dans sa fleur des symboles religieux, pas à une quelconque passion amoureuse.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fruit de la passion doit son nom aux missionnaires qui voyaient dans sa fleur des symboles religieux, pas à une quelconque passion amoureuse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fruit%20de%20la%20passion%20doit%20son%20nom%20aux%20missionnaires%20qui%20voyaient%20dans%20sa%20fleur%20des%20symboles%20religieux%2C%20pas%20%C3%A0%20une%20quelconque%20passion%20amoureuse%20%3F"
 },
 {
  "text": "Le poivre était si précieux au Moyen Âge qu'il servait parfois à payer des loyers ou des rançons.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poivre était si précieux au Moyen Âge qu'il servait parfois à payer des loyers ou des rançons ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poivre%20%C3%A9tait%20si%20pr%C3%A9cieux%20au%20Moyen%20%C3%82ge%20qu'il%20servait%20parfois%20%C3%A0%20payer%20des%20loyers%20ou%20des%20ran%C3%A7ons%20%3F"
 },
 {
  "text": "Le régime des astronautes inclut des aliments spécialement conçus pour ne pas produire de miettes flottantes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le régime des astronautes inclut des aliments spécialement conçus pour ne pas produire de miettes flottantes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20r%C3%A9gime%20des%20astronautes%20inclut%20des%20aliments%20sp%C3%A9cialement%20con%C3%A7us%20pour%20ne%20pas%20produire%20de%20miettes%20flottantes%20%3F"
 },
 {
  "text": "Le pop-corn éclate parce que l'eau enfermée dans le grain se transforme brutalement en vapeur sous la chaleur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pop-corn éclate parce que l'eau enfermée dans le grain se transforme brutalement en vapeur sous la chaleur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pop-corn%20%C3%A9clate%20parce%20que%20l'eau%20enferm%C3%A9e%20dans%20le%20grain%20se%20transforme%20brutalement%20en%20vapeur%20sous%20la%20chaleur%20%3F"
 },
 {
  "text": "Le fromage à trous, comme l'emmental, doit ses trous à des bactéries qui produisent du gaz pendant l'affinage.",
  "source": "Perplexity",
  "question": "Est-il vrai que le fromage à trous, comme l'emmental, doit ses trous à des bactéries qui produisent du gaz pendant l'affinage ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20fromage%20%C3%A0%20trous%2C%20comme%20l'emmental%2C%20doit%20ses%20trous%20%C3%A0%20des%20bact%C3%A9ries%20qui%20produisent%20du%20gaz%20pendant%20l'affinage%20%3F"
 },
 {
  "text": "La gélatine de nombreux bonbons est issue de collagène animal, ce qui surprend souvent les consommateurs.",
  "source": "Perplexity",
  "question": "Est-il vrai que la gélatine de nombreux bonbons est issue de collagène animal, ce qui surprend souvent les consommateurs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20g%C3%A9latine%20de%20nombreux%20bonbons%20est%20issue%20de%20collag%C3%A8ne%20animal%2C%20ce%20qui%20surprend%20souvent%20les%20consommateurs%20%3F"
 },
 {
  "text": "Le thé serait la boisson la plus consommée au monde après l'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai que le thé serait la boisson la plus consommée au monde après l'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20th%C3%A9%20serait%20la%20boisson%20la%20plus%20consomm%C3%A9e%20au%20monde%20apr%C3%A8s%20l'eau%20%3F"
 },
 {
  "text": "Une pincée de sel peut réhausser le goût sucré d'un dessert en trompant nos papilles.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une pincée de sel peut réhausser le goût sucré d'un dessert en trompant nos papilles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20pinc%C3%A9e%20de%20sel%20peut%20r%C3%A9hausser%20le%20go%C3%BBt%20sucr%C3%A9%20d'un%20dessert%20en%20trompant%20nos%20papilles%20%3F"
 },
 {
  "text": "Le beurre de cacahuète peut, sous forte pression et chaleur, être transformé en un minuscule diamant, en laboratoire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le beurre de cacahuète peut, sous forte pression et chaleur, être transformé en un minuscule diamant, en laboratoire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20beurre%20de%20cacahu%C3%A8te%20peut%2C%20sous%20forte%20pression%20et%20chaleur%2C%20%C3%AAtre%20transform%C3%A9%20en%20un%20minuscule%20diamant%2C%20en%20laboratoire%20%3F"
 },
 {
  "text": "Les empreintes de la langue sont uniques à chaque personne, tout comme les empreintes digitales.",
  "source": "Perplexity",
  "question": "Est-il vrai que les empreintes de la langue sont uniques à chaque personne, tout comme les empreintes digitales ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20empreintes%20de%20la%20langue%20sont%20uniques%20%C3%A0%20chaque%20personne%2C%20tout%20comme%20les%20empreintes%20digitales%20%3F"
 },
 {
  "text": "Le son que fait un fouet qui claque est en réalité un mini-bang supersonique, la pointe dépassant la vitesse du son.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son que fait un fouet qui claque est en réalité un mini-bang supersonique, la pointe dépassant la vitesse du son ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20que%20fait%20un%20fouet%20qui%20claque%20est%20en%20r%C3%A9alit%C3%A9%20un%20mini-bang%20supersonique%2C%20la%20pointe%20d%C3%A9passant%20la%20vitesse%20du%20son%20%3F"
 },
 {
  "text": "Un jour terrestre s'allonge très lentement, de quelques millisecondes par siècle, à cause du freinage dû aux marées.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un jour terrestre s'allonge très lentement, de quelques millisecondes par siècle, à cause du freinage dû aux marées ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20jour%20terrestre%20s'allonge%20tr%C3%A8s%20lentement%2C%20de%20quelques%20millisecondes%20par%20si%C3%A8cle%2C%20%C3%A0%20cause%20du%20freinage%20d%C3%BB%20aux%20mar%C3%A9es%20%3F"
 },
 {
  "text": "Les dinosaures ont vécu sur Terre pendant plus de 150 millions d'années, bien plus longtemps que les humains jusqu'ici.",
  "source": "Perplexity",
  "question": "Est-il vrai que les dinosaures ont vécu sur Terre pendant plus de 150 millions d'années, bien plus longtemps que les humains jusqu'ici ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20dinosaures%20ont%20v%C3%A9cu%20sur%20Terre%20pendant%20plus%20de%20150%20millions%20d'ann%C3%A9es%2C%20bien%20plus%20longtemps%20que%20les%20humains%20jusqu'ici%20%3F"
 },
 {
  "text": "Certains oiseaux, comme le martinet, peuvent voler pendant des mois sans jamais se poser.",
  "source": "Perplexity",
  "question": "Est-il vrai que certains oiseaux, comme le martinet, peuvent voler pendant des mois sans jamais se poser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certains%20oiseaux%2C%20comme%20le%20martinet%2C%20peuvent%20voler%20pendant%20des%20mois%20sans%20jamais%20se%20poser%20%3F"
 },
 {
  "text": "La couleur rose n'existe pas vraiment dans l'arc-en-ciel : c'est notre cerveau qui la crée en mélangeant le rouge et le violet.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur rose n'existe pas vraiment dans l'arc-en-ciel : c'est notre cerveau qui la crée en mélangeant le rouge et le violet ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20rose%20n'existe%20pas%20vraiment%20dans%20l'arc-en-ciel%C2%A0%3A%20c'est%20notre%20cerveau%20qui%20la%20cr%C3%A9e%20en%20m%C3%A9langeant%20le%20rouge%20et%20le%20violet%20%3F"
 },
 {
  "text": "Le hublot d'un avion possède un minuscule trou destiné à équilibrer la pression et à éviter la buée.",
  "source": "Perplexity",
  "question": "Est-il vrai que le hublot d'un avion possède un minuscule trou destiné à équilibrer la pression et à éviter la buée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20hublot%20d'un%20avion%20poss%C3%A8de%20un%20minuscule%20trou%20destin%C3%A9%20%C3%A0%20%C3%A9quilibrer%20la%20pression%20et%20%C3%A0%20%C3%A9viter%20la%20bu%C3%A9e%20%3F"
 },
 {
  "text": "Le drapeau planté sur la Lune est probablement blanchi aujourd'hui par le rayonnement solaire intense.",
  "source": "Perplexity",
  "question": "Est-il vrai que le drapeau planté sur la Lune est probablement blanchi aujourd'hui par le rayonnement solaire intense ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20drapeau%20plant%C3%A9%20sur%20la%20Lune%20est%20probablement%20blanchi%20aujourd'hui%20par%20le%20rayonnement%20solaire%20intense%20%3F"
 },
 {
  "text": "Nos ancêtres partageaient la planète avec plusieurs autres espèces humaines, comme les Néandertaliens.",
  "source": "Perplexity",
  "question": "Est-il vrai que nos ancêtres partageaient la planète avec plusieurs autres espèces humaines, comme les Néandertaliens ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nos%20anc%C3%AAtres%20partageaient%20la%20plan%C3%A8te%20avec%20plusieurs%20autres%20esp%C3%A8ces%20humaines%2C%20comme%20les%20N%C3%A9andertaliens%20%3F"
 },
 {
  "text": "Le miel cristallisé n'est pas périmé : il suffit de le chauffer doucement pour lui rendre sa fluidité.",
  "source": "Perplexity",
  "question": "Est-il vrai que le miel cristallisé n'est pas périmé : il suffit de le chauffer doucement pour lui rendre sa fluidité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20miel%20cristallis%C3%A9%20n'est%20pas%20p%C3%A9rim%C3%A9%C2%A0%3A%20il%20suffit%20de%20le%20chauffer%20doucement%20pour%20lui%20rendre%20sa%20fluidit%C3%A9%20%3F"
 },
 {
  "text": "Le clavier d'un smartphone vibre grâce à un minuscule moteur qui tourne des milliers de fois par minute.",
  "source": "Perplexity",
  "question": "Est-il vrai que le clavier d'un smartphone vibre grâce à un minuscule moteur qui tourne des milliers de fois par minute ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20clavier%20d'un%20smartphone%20vibre%20gr%C3%A2ce%20%C3%A0%20un%20minuscule%20moteur%20qui%20tourne%20des%20milliers%20de%20fois%20par%20minute%20%3F"
 },
 {
  "text": "Le pouce vert n'a rien de magique : les plantes réagissent surtout à la régularité des soins et à la lumière.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pouce vert n'a rien de magique : les plantes réagissent surtout à la régularité des soins et à la lumière ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pouce%20vert%20n'a%20rien%20de%20magique%C2%A0%3A%20les%20plantes%20r%C3%A9agissent%20surtout%20%C3%A0%20la%20r%C3%A9gularit%C3%A9%20des%20soins%20et%20%C3%A0%20la%20lumi%C3%A8re%20%3F"
 },
 {
  "text": "Une bougie allumée dans une pièce fermée finit par s'éteindre faute d'oxygène suffisant.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une bougie allumée dans une pièce fermée finit par s'éteindre faute d'oxygène suffisant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20bougie%20allum%C3%A9e%20dans%20une%20pi%C3%A8ce%20ferm%C3%A9e%20finit%20par%20s'%C3%A9teindre%20faute%20d'oxyg%C3%A8ne%20suffisant%20%3F"
 },
 {
  "text": "Le zip d'une fermeture éclair porte souvent les lettres YKK, du nom du fabricant japonais dominant le marché.",
  "source": "Perplexity",
  "question": "Est-il vrai que le zip d'une fermeture éclair porte souvent les lettres YKK, du nom du fabricant japonais dominant le marché ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20zip%20d'une%20fermeture%20%C3%A9clair%20porte%20souvent%20les%20lettres%20YKK%2C%20du%20nom%20du%20fabricant%20japonais%20dominant%20le%20march%C3%A9%20%3F"
 },
 {
  "text": "Le vertige n'est pas la peur du vide mais une sensation de tournis, souvent confondue avec l'acrophobie.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vertige n'est pas la peur du vide mais une sensation de tournis, souvent confondue avec l'acrophobie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20vertige%20n'est%20pas%20la%20peur%20du%20vide%20mais%20une%20sensation%20de%20tournis%2C%20souvent%20confondue%20avec%20l'acrophobie%20%3F"
 },
 {
  "text": "Les étoiles filantes sont en réalité de minuscules grains de poussière qui se consument en entrant dans l'atmosphère.",
  "source": "Perplexity",
  "question": "Est-il vrai que les étoiles filantes sont en réalité de minuscules grains de poussière qui se consument en entrant dans l'atmosphère ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%A9toiles%20filantes%20sont%20en%20r%C3%A9alit%C3%A9%20de%20minuscules%20grains%20de%20poussi%C3%A8re%20qui%20se%20consument%20en%20entrant%20dans%20l'atmosph%C3%A8re%20%3F"
 },
 {
  "text": "Le tonnerre suit toujours l'éclair car la lumière voyage bien plus vite que le son.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tonnerre suit toujours l'éclair car la lumière voyage bien plus vite que le son ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tonnerre%20suit%20toujours%20l'%C3%A9clair%20car%20la%20lumi%C3%A8re%20voyage%20bien%20plus%20vite%20que%20le%20son%20%3F"
 },
 {
  "text": "Un arc-en-ciel double montre les couleurs inversées dans son second arc, plus pâle.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un arc-en-ciel double montre les couleurs inversées dans son second arc, plus pâle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20arc-en-ciel%20double%20montre%20les%20couleurs%20invers%C3%A9es%20dans%20son%20second%20arc%2C%20plus%20p%C3%A2le%20%3F"
 },
 {
  "text": "Le silence complet est si rare qu'une chambre anéchoïque, sans écho, peut devenir désorientante au bout de quelques minutes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le silence complet est si rare qu'une chambre anéchoïque, sans écho, peut devenir désorientante au bout de quelques minutes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20silence%20complet%20est%20si%20rare%20qu'une%20chambre%20an%C3%A9cho%C3%AFque%2C%20sans%20%C3%A9cho%2C%20peut%20devenir%20d%C3%A9sorientante%20au%20bout%20de%20quelques%20minutes%20%3F"
 },
 {
  "text": "Le mot dodo, pour désigner le sommeil des enfants, existe aussi comme nom d'un oiseau disparu.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot dodo, pour désigner le sommeil des enfants, existe aussi comme nom d'un oiseau disparu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20dodo%2C%20pour%20d%C3%A9signer%20le%20sommeil%20des%20enfants%2C%20existe%20aussi%20comme%20nom%20d'un%20oiseau%20disparu%20%3F"
 },
 {
  "text": "L'expression avoir le cafard, pour dire déprimer, n'a été popularisée qu'au 19e siècle.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'expression avoir le cafard, pour dire déprimer, n'a été popularisée qu'au 19e siècle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'expression%20avoir%20le%20cafard%2C%20pour%20dire%20d%C3%A9primer%2C%20n'a%20%C3%A9t%C3%A9%20popularis%C3%A9e%20qu'au%2019e%20si%C3%A8cle%20%3F"
 },
 {
  "text": "Le mot week-end est un emprunt à l'anglais aujourd'hui totalement intégré au français.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot week-end est un emprunt à l'anglais aujourd'hui totalement intégré au français ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20week-end%20est%20un%20emprunt%20%C3%A0%20l'anglais%20aujourd'hui%20totalement%20int%C3%A9gr%C3%A9%20au%20fran%C3%A7ais%20%3F"
 },
 {
  "text": "De nombreux prénoms courants ont un sens précis dans leur langue d'origine, souvent lié à la nature ou aux vertus.",
  "source": "Perplexity",
  "question": "Est-il vrai que de nombreux prénoms courants ont un sens précis dans leur langue d'origine, souvent lié à la nature ou aux vertus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20de%20nombreux%20pr%C3%A9noms%20courants%20ont%20un%20sens%20pr%C3%A9cis%20dans%20leur%20langue%20d'origine%2C%20souvent%20li%C3%A9%20%C3%A0%20la%20nature%20ou%20aux%20vertus%20%3F"
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
  "text": "Le point d'exclamation existait bien avant d'être si utilisé, mais on l'employait avec parcimonie dans les textes anciens.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point d'exclamation existait bien avant d'être si utilisé, mais on l'employait avec parcimonie dans les textes anciens ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20d'exclamation%20existait%20bien%20avant%20d'%C3%AAtre%20si%20utilis%C3%A9%2C%20mais%20on%20l'employait%20avec%20parcimonie%20dans%20les%20textes%20anciens%20%3F"
 },
 {
  "text": "Le mot chef vient du latin caput, la tête, tout comme capitaine et capital.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot chef vient du latin caput, la tête, tout comme capitaine et capital ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20chef%20vient%20du%20latin%20caput%2C%20la%20t%C3%AAte%2C%20tout%20comme%20capitaine%20et%20capital%20%3F"
 },
 {
  "text": "Certaines langues n'ont pas de mots pour gauche et droite et utilisent les points cardinaux même dans une pièce.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines langues n'ont pas de mots pour gauche et droite et utilisent les points cardinaux même dans une pièce ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20langues%20n'ont%20pas%20de%20mots%20pour%20gauche%20et%20droite%20et%20utilisent%20les%20points%20cardinaux%20m%C3%AAme%20dans%20une%20pi%C3%A8ce%20%3F"
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
  "text": "Il existe des nombres dits parfaits, égaux à la somme de leurs diviseurs, comme six ou vingt-huit.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des nombres dits parfaits, égaux à la somme de leurs diviseurs, comme six ou vingt-huit ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20nombres%20dits%20parfaits%2C%20%C3%A9gaux%20%C3%A0%20la%20somme%20de%20leurs%20diviseurs%2C%20comme%20six%20ou%20vingt-huit%20%3F"
 },
 {
  "text": "Diviser par zéro n'est pas défini en mathématiques, ce n'est pas l'infini mais une opération sans réponse valable.",
  "source": "Perplexity",
  "question": "Est-il vrai que diviser par zéro n'est pas défini en mathématiques, ce n'est pas l'infini mais une opération sans réponse valable ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20diviser%20par%20z%C3%A9ro%20n'est%20pas%20d%C3%A9fini%20en%20math%C3%A9matiques%2C%20ce%20n'est%20pas%20l'infini%20mais%20une%20op%C3%A9ration%20sans%20r%C3%A9ponse%20valable%20%3F"
 },
 {
  "text": "Le nombre pi apparaît dans des formules qui n'ont rien à voir avec des cercles, comme certaines probabilités.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nombre pi apparaît dans des formules qui n'ont rien à voir avec des cercles, comme certaines probabilités ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nombre%20pi%20appara%C3%AEt%20dans%20des%20formules%20qui%20n'ont%20rien%20%C3%A0%20voir%20avec%20des%20cercles%2C%20comme%20certaines%20probabilit%C3%A9s%20%3F"
 },
 {
  "text": "Un échiquier peut être entièrement parcouru par un cavalier passant une seule fois par chaque case, c'est le problème du cavalier.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un échiquier peut être entièrement parcouru par un cavalier passant une seule fois par chaque case, c'est le problème du cavalier ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20%C3%A9chiquier%20peut%20%C3%AAtre%20enti%C3%A8rement%20parcouru%20par%20un%20cavalier%20passant%20une%20seule%20fois%20par%20chaque%20case%2C%20c'est%20le%20probl%C3%A8me%20du%20cavalier%20%3F"
 },
 {
  "text": "La probabilité de gagner le gros lot à certaines loteries est plus faible que celle d'être frappé par la foudre.",
  "source": "Perplexity",
  "question": "Est-il vrai que la probabilité de gagner le gros lot à certaines loteries est plus faible que celle d'être frappé par la foudre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20probabilit%C3%A9%20de%20gagner%20le%20gros%20lot%20%C3%A0%20certaines%20loteries%20est%20plus%20faible%20que%20celle%20d'%C3%AAtre%20frapp%C3%A9%20par%20la%20foudre%20%3F"
 },
 {
  "text": "Nous ne voyons pas vraiment avec nos yeux mais avec notre cerveau, qui interprète les signaux reçus.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous ne voyons pas vraiment avec nos yeux mais avec notre cerveau, qui interprète les signaux reçus ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20ne%20voyons%20pas%20vraiment%20avec%20nos%20yeux%20mais%20avec%20notre%20cerveau%2C%20qui%20interpr%C3%A8te%20les%20signaux%20re%C3%A7us%20%3F"
 },
 {
  "text": "L'odorat est le sens le plus lié à la mémoire, une odeur pouvant faire resurgir un souvenir ancien en un instant.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'odorat est le sens le plus lié à la mémoire, une odeur pouvant faire resurgir un souvenir ancien en un instant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'odorat%20est%20le%20sens%20le%20plus%20li%C3%A9%20%C3%A0%20la%20m%C3%A9moire%2C%20une%20odeur%20pouvant%20faire%20resurgir%20un%20souvenir%20ancien%20en%20un%20instant%20%3F"
 },
 {
  "text": "Les papilles gustatives se renouvellent environ toutes les deux semaines.",
  "source": "Perplexity",
  "question": "Est-il vrai que les papilles gustatives se renouvellent environ toutes les deux semaines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20papilles%20gustatives%20se%20renouvellent%20environ%20toutes%20les%20deux%20semaines%20%3F"
 },
 {
  "text": "La rétine de l'œil envoie une image à l'envers au cerveau, qui la remet à l'endroit sans que nous le remarquions.",
  "source": "Perplexity",
  "question": "Est-il vrai que la rétine de l'œil envoie une image à l'envers au cerveau, qui la remet à l'endroit sans que nous le remarquions ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20r%C3%A9tine%20de%20l'%C5%93il%20envoie%20une%20image%20%C3%A0%20l'envers%20au%20cerveau%2C%20qui%20la%20remet%20%C3%A0%20l'endroit%20sans%20que%20nous%20le%20remarquions%20%3F"
 },
 {
  "text": "Les humains peuvent détecter certaines odeurs à des concentrations extrêmement faibles, parfois quelques molécules.",
  "source": "Perplexity",
  "question": "Est-il vrai que les humains peuvent détecter certaines odeurs à des concentrations extrêmement faibles, parfois quelques molécules ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20humains%20peuvent%20d%C3%A9tecter%20certaines%20odeurs%20%C3%A0%20des%20concentrations%20extr%C3%AAmement%20faibles%2C%20parfois%20quelques%20mol%C3%A9cules%20%3F"
 },
 {
  "text": "Le sens du toucher est présent sur toute la peau, mais la sensibilité varie énormément selon les zones.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sens du toucher est présent sur toute la peau, mais la sensibilité varie énormément selon les zones ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sens%20du%20toucher%20est%20pr%C3%A9sent%20sur%20toute%20la%20peau%2C%20mais%20la%20sensibilit%C3%A9%20varie%20%C3%A9norm%C3%A9ment%20selon%20les%20zones%20%3F"
 },
 {
  "text": "Nous entendons notre propre voix différemment des autres, car le son passe aussi par les os de notre crâne.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous entendons notre propre voix différemment des autres, car le son passe aussi par les os de notre crâne ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20entendons%20notre%20propre%20voix%20diff%C3%A9remment%20des%20autres%2C%20car%20le%20son%20passe%20aussi%20par%20les%20os%20de%20notre%20cr%C3%A2ne%20%3F"
 },
 {
  "text": "Le ver de terre possède plusieurs cœurs, ou plus exactement des anneaux qui font office de pompes sanguines.",
  "source": "Perplexity",
  "question": "Est-il vrai que le ver de terre possède plusieurs cœurs, ou plus exactement des anneaux qui font office de pompes sanguines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20ver%20de%20terre%20poss%C3%A8de%20plusieurs%20c%C5%93urs%2C%20ou%20plus%20exactement%20des%20anneaux%20qui%20font%20office%20de%20pompes%20sanguines%20%3F"
 },
 {
  "text": "Les abeilles peuvent compter jusqu'à de petits nombres et comprendre la notion de zéro.",
  "source": "Perplexity",
  "question": "Est-il vrai que les abeilles peuvent compter jusqu'à de petits nombres et comprendre la notion de zéro ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20abeilles%20peuvent%20compter%20jusqu'%C3%A0%20de%20petits%20nombres%20et%20comprendre%20la%20notion%20de%20z%C3%A9ro%20%3F"
 },
 {
  "text": "Le manchot pygmée, le plus petit du monde, mesure à peine une trentaine de centimètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le manchot pygmée, le plus petit du monde, mesure à peine une trentaine de centimètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20manchot%20pygm%C3%A9e%2C%20le%20plus%20petit%20du%20monde%2C%20mesure%20%C3%A0%20peine%20une%20trentaine%20de%20centim%C3%A8tres%20%3F"
 },
 {
  "text": "Les fourmis peuvent former des radeaux vivants avec leurs corps pour survivre aux inondations.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis peuvent former des radeaux vivants avec leurs corps pour survivre aux inondations ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20peuvent%20former%20des%20radeaux%20vivants%20avec%20leurs%20corps%20pour%20survivre%20aux%20inondations%20%3F"
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
  "text": "Les lamas et alpagas fredonnent pour communiquer entre eux et exprimer leur humeur.",
  "source": "Perplexity",
  "question": "Est-il vrai que les lamas et alpagas fredonnent pour communiquer entre eux et exprimer leur humeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20lamas%20et%20alpagas%20fredonnent%20pour%20communiquer%20entre%20eux%20et%20exprimer%20leur%20humeur%20%3F"
 },
 {
  "text": "Le pangolin est le mammifère le plus braconné au monde et se roule en boule couvert d'écailles.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pangolin est le mammifère le plus braconné au monde et se roule en boule couvert d'écailles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pangolin%20est%20le%20mammif%C3%A8re%20le%20plus%20braconn%C3%A9%20au%20monde%20et%20se%20roule%20en%20boule%20couvert%20d'%C3%A9cailles%20%3F"
 },
 {
  "text": "Les araignées ne peuvent pas mâcher : elles liquéfient leur proie avant de l'aspirer.",
  "source": "Perplexity",
  "question": "Est-il vrai que les araignées ne peuvent pas mâcher : elles liquéfient leur proie avant de l'aspirer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20araign%C3%A9es%20ne%20peuvent%20pas%20m%C3%A2cher%C2%A0%3A%20elles%20liqu%C3%A9fient%20leur%20proie%20avant%20de%20l'aspirer%20%3F"
 },
 {
  "text": "Le colvert et beaucoup de canards ont un cri qui, contrairement à une légende, produit bien un écho.",
  "source": "Perplexity",
  "question": "Est-il vrai que le colvert et beaucoup de canards ont un cri qui, contrairement à une légende, produit bien un écho ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20colvert%20et%20beaucoup%20de%20canards%20ont%20un%20cri%20qui%2C%20contrairement%20%C3%A0%20une%20l%C3%A9gende%2C%20produit%20bien%20un%20%C3%A9cho%20%3F"
 },
 {
  "text": "Les baleines à bosse composent de véritables chants qui évoluent et se transmettent entre groupes.",
  "source": "Perplexity",
  "question": "Est-il vrai que les baleines à bosse composent de véritables chants qui évoluent et se transmettent entre groupes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20baleines%20%C3%A0%20bosse%20composent%20de%20v%C3%A9ritables%20chants%20qui%20%C3%A9voluent%20et%20se%20transmettent%20entre%20groupes%20%3F"
 },
 {
  "text": "Le lézard basilic peut courir sur l'eau sur une courte distance grâce à la vitesse de ses pattes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lézard basilic peut courir sur l'eau sur une courte distance grâce à la vitesse de ses pattes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20l%C3%A9zard%20basilic%20peut%20courir%20sur%20l'eau%20sur%20une%20courte%20distance%20gr%C3%A2ce%20%C3%A0%20la%20vitesse%20de%20ses%20pattes%20%3F"
 },
 {
  "text": "Les termites construisent des monticules avec un système de ventilation naturel qui régule la température.",
  "source": "Perplexity",
  "question": "Est-il vrai que les termites construisent des monticules avec un système de ventilation naturel qui régule la température ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20termites%20construisent%20des%20monticules%20avec%20un%20syst%C3%A8me%20de%20ventilation%20naturel%20qui%20r%C3%A9gule%20la%20temp%C3%A9rature%20%3F"
 },
 {
  "text": "Le morse peut dormir en flottant à la verticale, la tête hors de l'eau, grâce à des poches d'air dans le cou.",
  "source": "Perplexity",
  "question": "Est-il vrai que le morse peut dormir en flottant à la verticale, la tête hors de l'eau, grâce à des poches d'air dans le cou ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20morse%20peut%20dormir%20en%20flottant%20%C3%A0%20la%20verticale%2C%20la%20t%C3%AAte%20hors%20de%20l'eau%2C%20gr%C3%A2ce%20%C3%A0%20des%20poches%20d'air%20dans%20le%20cou%20%3F"
 },
 {
  "text": "Les serpents sentent avec leur langue en captant des particules qu'ils analysent au palais.",
  "source": "Perplexity",
  "question": "Est-il vrai que les serpents sentent avec leur langue en captant des particules qu'ils analysent au palais ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20serpents%20sentent%20avec%20leur%20langue%20en%20captant%20des%20particules%20qu'ils%20analysent%20au%20palais%20%3F"
 },
 {
  "text": "Le poisson archer crache un jet d'eau précis pour faire tomber les insectes des feuilles au-dessus de lui.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson archer crache un jet d'eau précis pour faire tomber les insectes des feuilles au-dessus de lui ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson%20archer%20crache%20un%20jet%20d'eau%20pr%C3%A9cis%20pour%20faire%20tomber%20les%20insectes%20des%20feuilles%20au-dessus%20de%20lui%20%3F"
 },
 {
  "text": "Un groupe de chats s'appelle une clowder en anglais, terme resté peu connu.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un groupe de chats s'appelle une clowder en anglais, terme resté peu connu ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20groupe%20de%20chats%20s'appelle%20une%20clowder%20en%20anglais%2C%20terme%20rest%C3%A9%20peu%20connu%20%3F"
 },
 {
  "text": "Le colibri est proportionnellement l'un des plus gros mangeurs du règne animal pour soutenir son vol.",
  "source": "Perplexity",
  "question": "Est-il vrai que le colibri est proportionnellement l'un des plus gros mangeurs du règne animal pour soutenir son vol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20colibri%20est%20proportionnellement%20l'un%20des%20plus%20gros%20mangeurs%20du%20r%C3%A8gne%20animal%20pour%20soutenir%20son%20vol%20%3F"
 },
 {
  "text": "Les éléphants communiquent sur de longues distances avec des sons trop graves pour l'oreille humaine.",
  "source": "Perplexity",
  "question": "Est-il vrai que les éléphants communiquent sur de longues distances avec des sons trop graves pour l'oreille humaine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%A9l%C3%A9phants%20communiquent%20sur%20de%20longues%20distances%20avec%20des%20sons%20trop%20graves%20pour%20l'oreille%20humaine%20%3F"
 },
 {
  "text": "Le kiwi, oiseau de Nouvelle-Zélande, pond un œuf énorme par rapport à la taille de son corps.",
  "source": "Perplexity",
  "question": "Est-il vrai que le kiwi, oiseau de Nouvelle-Zélande, pond un œuf énorme par rapport à la taille de son corps ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20kiwi%2C%20oiseau%20de%20Nouvelle-Z%C3%A9lande%2C%20pond%20un%20%C5%93uf%20%C3%A9norme%20par%20rapport%20%C3%A0%20la%20taille%20de%20son%20corps%20%3F"
 },
 {
  "text": "Les fourmis enterrent parfois leurs mortes, un comportement qui ressemble à un rituel funéraire.",
  "source": "Perplexity",
  "question": "Est-il vrai que les fourmis enterrent parfois leurs mortes, un comportement qui ressemble à un rituel funéraire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20fourmis%20enterrent%20parfois%20leurs%20mortes%2C%20un%20comportement%20qui%20ressemble%20%C3%A0%20un%20rituel%20fun%C3%A9raire%20%3F"
 },
 {
  "text": "Le poisson-lune, ou môle, peut pondre des centaines de millions d'œufs en une seule fois.",
  "source": "Perplexity",
  "question": "Est-il vrai que le poisson-lune, ou môle, peut pondre des centaines de millions d'œufs en une seule fois ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20poisson-lune%2C%20ou%20m%C3%B4le%2C%20peut%20pondre%20des%20centaines%20de%20millions%20d'%C5%93ufs%20en%20une%20seule%20fois%20%3F"
 },
 {
  "text": "Le bruit blanc contient toutes les fréquences audibles jouées en même temps, ce qui aide certains à se concentrer.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bruit blanc contient toutes les fréquences audibles jouées en même temps, ce qui aide certains à se concentrer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20bruit%20blanc%20contient%20toutes%20les%20fr%C3%A9quences%20audibles%20jou%C3%A9es%20en%20m%C3%AAme%20temps%2C%20ce%20qui%20aide%20certains%20%C3%A0%20se%20concentrer%20%3F"
 },
 {
  "text": "Un objet en chute libre dans le vide tombe à la même vitesse qu'il soit lourd ou léger, comme une plume et un marteau sur la Lune.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un objet en chute libre dans le vide tombe à la même vitesse qu'il soit lourd ou léger, comme une plume et un marteau sur la Lune ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20objet%20en%20chute%20libre%20dans%20le%20vide%20tombe%20%C3%A0%20la%20m%C3%AAme%20vitesse%20qu'il%20soit%20lourd%20ou%20l%C3%A9ger%2C%20comme%20une%20plume%20et%20un%20marteau%20sur%20la%20Lune%20%3F"
 },
 {
  "text": "La glace est moins dense que l'eau liquide, ce qui explique que les glaçons et les icebergs flottent.",
  "source": "Perplexity",
  "question": "Est-il vrai que la glace est moins dense que l'eau liquide, ce qui explique que les glaçons et les icebergs flottent ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20glace%20est%20moins%20dense%20que%20l'eau%20liquide%2C%20ce%20qui%20explique%20que%20les%20gla%C3%A7ons%20et%20les%20icebergs%20flottent%20%3F"
 },
 {
  "text": "Le feu a besoin d'oxygène, de chaleur et de combustible : retirer l'un des trois l'éteint.",
  "source": "Perplexity",
  "question": "Est-il vrai que le feu a besoin d'oxygène, de chaleur et de combustible : retirer l'un des trois l'éteint ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20feu%20a%20besoin%20d'oxyg%C3%A8ne%2C%20de%20chaleur%20et%20de%20combustible%C2%A0%3A%20retirer%20l'un%20des%20trois%20l'%C3%A9teint%20%3F"
 },
 {
  "text": "Le magnétisme et l'électricité sont deux faces d'un même phénomène, l'électromagnétisme.",
  "source": "Perplexity",
  "question": "Est-il vrai que le magnétisme et l'électricité sont deux faces d'un même phénomène, l'électromagnétisme ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20magn%C3%A9tisme%20et%20l'%C3%A9lectricit%C3%A9%20sont%20deux%20faces%20d'un%20m%C3%AAme%20ph%C3%A9nom%C3%A8ne%2C%20l'%C3%A9lectromagn%C3%A9tisme%20%3F"
 },
 {
  "text": "Un aimant coupé en deux donne deux aimants complets, chacun avec un pôle nord et un pôle sud.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un aimant coupé en deux donne deux aimants complets, chacun avec un pôle nord et un pôle sud ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20aimant%20coup%C3%A9%20en%20deux%20donne%20deux%20aimants%20complets%2C%20chacun%20avec%20un%20p%C3%B4le%20nord%20et%20un%20p%C3%B4le%20sud%20%3F"
 },
 {
  "text": "La couleur d'une flamme indique sa température : le bleu est plus chaud que le jaune ou l'orange.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur d'une flamme indique sa température : le bleu est plus chaud que le jaune ou l'orange ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20d'une%20flamme%20indique%20sa%20temp%C3%A9rature%C2%A0%3A%20le%20bleu%20est%20plus%20chaud%20que%20le%20jaune%20ou%20l'orange%20%3F"
 },
 {
  "text": "Le son ne peut pas traverser le vide, c'est pourquoi les explosions dans l'espace seraient silencieuses.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son ne peut pas traverser le vide, c'est pourquoi les explosions dans l'espace seraient silencieuses ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20ne%20peut%20pas%20traverser%20le%20vide%2C%20c'est%20pourquoi%20les%20explosions%20dans%20l'espace%20seraient%20silencieuses%20%3F"
 },
 {
  "text": "L'eau pure conduit très mal l'électricité : ce sont les sels dissous qui la rendent conductrice.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'eau pure conduit très mal l'électricité : ce sont les sels dissous qui la rendent conductrice ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'eau%20pure%20conduit%20tr%C3%A8s%20mal%20l'%C3%A9lectricit%C3%A9%C2%A0%3A%20ce%20sont%20les%20sels%20dissous%20qui%20la%20rendent%20conductrice%20%3F"
 },
 {
  "text": "Un arc électrique peut atteindre des températures bien supérieures à celles de la surface du Soleil.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un arc électrique peut atteindre des températures bien supérieures à celles de la surface du Soleil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20arc%20%C3%A9lectrique%20peut%20atteindre%20des%20temp%C3%A9ratures%20bien%20sup%C3%A9rieures%20%C3%A0%20celles%20de%20la%20surface%20du%20Soleil%20%3F"
 },
 {
  "text": "La pression atmosphérique appuie sur nous en permanence avec le poids d'une colonne d'air de plusieurs kilomètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que la pression atmosphérique appuie sur nous en permanence avec le poids d'une colonne d'air de plusieurs kilomètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20pression%20atmosph%C3%A9rique%20appuie%20sur%20nous%20en%20permanence%20avec%20le%20poids%20d'une%20colonne%20d'air%20de%20plusieurs%20kilom%C3%A8tres%20%3F"
 },
 {
  "text": "Le point de congélation de l'eau peut descendre sous zéro si elle est très pure et immobile, on parle de surfusion.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point de congélation de l'eau peut descendre sous zéro si elle est très pure et immobile, on parle de surfusion ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20de%20cong%C3%A9lation%20de%20l'eau%20peut%20descendre%20sous%20z%C3%A9ro%20si%20elle%20est%20tr%C3%A8s%20pure%20et%20immobile%2C%20on%20parle%20de%20surfusion%20%3F"
 },
 {
  "text": "Les couleurs d'une bulle de savon viennent de l'interférence de la lumière sur sa fine pellicule.",
  "source": "Perplexity",
  "question": "Est-il vrai que les couleurs d'une bulle de savon viennent de l'interférence de la lumière sur sa fine pellicule ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20couleurs%20d'une%20bulle%20de%20savon%20viennent%20de%20l'interf%C3%A9rence%20de%20la%20lumi%C3%A8re%20sur%20sa%20fine%20pellicule%20%3F"
 },
 {
  "text": "Un métal chauffé se dilate, ce qui explique les joints laissés sur les ponts et les rails de chemin de fer.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un métal chauffé se dilate, ce qui explique les joints laissés sur les ponts et les rails de chemin de fer ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20m%C3%A9tal%20chauff%C3%A9%20se%20dilate%2C%20ce%20qui%20explique%20les%20joints%20laiss%C3%A9s%20sur%20les%20ponts%20et%20les%20rails%20de%20chemin%20de%20fer%20%3F"
 },
 {
  "text": "Le son d'un diapason est produit par une vibration régulière qui fait osciller l'air autour de lui.",
  "source": "Perplexity",
  "question": "Est-il vrai que le son d'un diapason est produit par une vibration régulière qui fait osciller l'air autour de lui ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20son%20d'un%20diapason%20est%20produit%20par%20une%20vibration%20r%C3%A9guli%C3%A8re%20qui%20fait%20osciller%20l'air%20autour%20de%20lui%20%3F"
 },
 {
  "text": "Le premier timbre-poste au monde, le Penny Black, est apparu au Royaume-Uni en 1840.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier timbre-poste au monde, le Penny Black, est apparu au Royaume-Uni en 1840 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20timbre-poste%20au%20monde%2C%20le%20Penny%20Black%2C%20est%20apparu%20au%20Royaume-Uni%20en%201840%20%3F"
 },
 {
  "text": "Les dés à jouer existent depuis des milliers d'années et ont été retrouvés dans des tombes antiques.",
  "source": "Perplexity",
  "question": "Est-il vrai que les dés à jouer existent depuis des milliers d'années et ont été retrouvés dans des tombes antiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20d%C3%A9s%20%C3%A0%20jouer%20existent%20depuis%20des%20milliers%20d'ann%C3%A9es%20et%20ont%20%C3%A9t%C3%A9%20retrouv%C3%A9s%20dans%20des%20tombes%20antiques%20%3F"
 },
 {
  "text": "Les échecs sont probablement nés en Inde il y a plus de mille cinq cents ans avant de se répandre en Perse et en Europe.",
  "source": "Perplexity",
  "question": "Est-il vrai que les échecs sont probablement nés en Inde il y a plus de mille cinq cents ans avant de se répandre en Perse et en Europe ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20%C3%A9checs%20sont%20probablement%20n%C3%A9s%20en%20Inde%20il%20y%20a%20plus%20de%20mille%20cinq%20cents%20ans%20avant%20de%20se%20r%C3%A9pandre%20en%20Perse%20et%20en%20Europe%20%3F"
 },
 {
  "text": "Le premier feu de circulation a été installé avant l'invention de la voiture populaire, pour les calèches.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier feu de circulation a été installé avant l'invention de la voiture populaire, pour les calèches ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20feu%20de%20circulation%20a%20%C3%A9t%C3%A9%20install%C3%A9%20avant%20l'invention%20de%20la%20voiture%20populaire%2C%20pour%20les%20cal%C3%A8ches%20%3F"
 },
 {
  "text": "La roue a été inventée relativement tard dans l'histoire humaine, d'abord pour la poterie avant le transport.",
  "source": "Perplexity",
  "question": "Est-il vrai que la roue a été inventée relativement tard dans l'histoire humaine, d'abord pour la poterie avant le transport ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20roue%20a%20%C3%A9t%C3%A9%20invent%C3%A9e%20relativement%20tard%20dans%20l'histoire%20humaine%2C%20d'abord%20pour%20la%20poterie%20avant%20le%20transport%20%3F"
 },
 {
  "text": "Le calendrier que nous utilisons a un jour supplémentaire tous les quatre ans pour rattraper le décalage avec l'année solaire.",
  "source": "Perplexity",
  "question": "Est-il vrai que le calendrier que nous utilisons a un jour supplémentaire tous les quatre ans pour rattraper le décalage avec l'année solaire ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20calendrier%20que%20nous%20utilisons%20a%20un%20jour%20suppl%C3%A9mentaire%20tous%20les%20quatre%20ans%20pour%20rattraper%20le%20d%C3%A9calage%20avec%20l'ann%C3%A9e%20solaire%20%3F"
 },
 {
  "text": "Les anciens Mayas avaient un calendrier extrêmement précis et une notion avancée du zéro.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anciens Mayas avaient un calendrier extrêmement précis et une notion avancée du zéro ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anciens%20Mayas%20avaient%20un%20calendrier%20extr%C3%AAmement%20pr%C3%A9cis%20et%20une%20notion%20avanc%C3%A9e%20du%20z%C3%A9ro%20%3F"
 },
 {
  "text": "Le mot vaccin vient du latin vacca, la vache, en lien avec la variole des vaches utilisée par Jenner.",
  "source": "Perplexity",
  "question": "Est-il vrai que le mot vaccin vient du latin vacca, la vache, en lien avec la variole des vaches utilisée par Jenner ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20mot%20vaccin%20vient%20du%20latin%20vacca%2C%20la%20vache%2C%20en%20lien%20avec%20la%20variole%20des%20vaches%20utilis%C3%A9e%20par%20Jenner%20%3F"
 },
 {
  "text": "Les premières cartes du monde comportaient des zones inconnues remplies de dessins de monstres marins.",
  "source": "Perplexity",
  "question": "Est-il vrai que les premières cartes du monde comportaient des zones inconnues remplies de dessins de monstres marins ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20premi%C3%A8res%20cartes%20du%20monde%20comportaient%20des%20zones%20inconnues%20remplies%20de%20dessins%20de%20monstres%20marins%20%3F"
 },
 {
  "text": "Le tout premier ordinateur mécanique de calcul remonte à l'Antiquité grecque, la machine d'Anticythère.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tout premier ordinateur mécanique de calcul remonte à l'Antiquité grecque, la machine d'Anticythère ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tout%20premier%20ordinateur%20m%C3%A9canique%20de%20calcul%20remonte%20%C3%A0%20l'Antiquit%C3%A9%20grecque%2C%20la%20machine%20d'Anticyth%C3%A8re%20%3F"
 },
 {
  "text": "Les phares existaient déjà dans l'Antiquité, comme celui d'Alexandrie, l'une des sept merveilles du monde.",
  "source": "Perplexity",
  "question": "Est-il vrai que les phares existaient déjà dans l'Antiquité, comme celui d'Alexandrie, l'une des sept merveilles du monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20phares%20existaient%20d%C3%A9j%C3%A0%20dans%20l'Antiquit%C3%A9%2C%20comme%20celui%20d'Alexandrie%2C%20l'une%20des%20sept%20merveilles%20du%20monde%20%3F"
 },
 {
  "text": "Les anciens Perses avaient des glacières pour conserver la glace en plein désert bien avant les réfrigérateurs.",
  "source": "Perplexity",
  "question": "Est-il vrai que les anciens Perses avaient des glacières pour conserver la glace en plein désert bien avant les réfrigérateurs ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20anciens%20Perses%20avaient%20des%20glaci%C3%A8res%20pour%20conserver%20la%20glace%20en%20plein%20d%C3%A9sert%20bien%20avant%20les%20r%C3%A9frig%C3%A9rateurs%20%3F"
 },
 {
  "text": "Un sourire, même forcé, peut légèrement améliorer l'humeur en trompant le cerveau.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un sourire, même forcé, peut légèrement améliorer l'humeur en trompant le cerveau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20sourire%2C%20m%C3%AAme%20forc%C3%A9%2C%20peut%20l%C3%A9g%C3%A8rement%20am%C3%A9liorer%20l'humeur%20en%20trompant%20le%20cerveau%20%3F"
 },
 {
  "text": "Nous respirons majoritairement par une seule narine à la fois, en alternance au fil des heures.",
  "source": "Perplexity",
  "question": "Est-il vrai que nous respirons majoritairement par une seule narine à la fois, en alternance au fil des heures ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20nous%20respirons%20majoritairement%20par%20une%20seule%20narine%20%C3%A0%20la%20fois%2C%20en%20alternance%20au%20fil%20des%20heures%20%3F"
 },
 {
  "text": "Le corps humain remplace la quasi-totalité de ses cellules sur une période de plusieurs années.",
  "source": "Perplexity",
  "question": "Est-il vrai que le corps humain remplace la quasi-totalité de ses cellules sur une période de plusieurs années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20corps%20humain%20remplace%20la%20quasi-totalit%C3%A9%20de%20ses%20cellules%20sur%20une%20p%C3%A9riode%20de%20plusieurs%20ann%C3%A9es%20%3F"
 },
 {
  "text": "Le sommeil profond aide le cerveau à évacuer des déchets accumulés pendant l'éveil.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sommeil profond aide le cerveau à évacuer des déchets accumulés pendant l'éveil ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sommeil%20profond%20aide%20le%20cerveau%20%C3%A0%20%C3%A9vacuer%20des%20d%C3%A9chets%20accumul%C3%A9s%20pendant%20l'%C3%A9veil%20%3F"
 },
 {
  "text": "La peur et l'excitation déclenchent des réactions corporelles très proches, ce qui explique l'attrait des sensations fortes.",
  "source": "Perplexity",
  "question": "Est-il vrai que la peur et l'excitation déclenchent des réactions corporelles très proches, ce qui explique l'attrait des sensations fortes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20peur%20et%20l'excitation%20d%C3%A9clenchent%20des%20r%C3%A9actions%20corporelles%20tr%C3%A8s%20proches%2C%20ce%20qui%20explique%20l'attrait%20des%20sensations%20fortes%20%3F"
 },
 {
  "text": "Notre cerveau préfère les histoires aux faits bruts, ce qui les rend plus faciles à mémoriser.",
  "source": "Perplexity",
  "question": "Est-il vrai que notre cerveau préfère les histoires aux faits bruts, ce qui les rend plus faciles à mémoriser ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20notre%20cerveau%20pr%C3%A9f%C3%A8re%20les%20histoires%20aux%20faits%20bruts%2C%20ce%20qui%20les%20rend%20plus%20faciles%20%C3%A0%20m%C3%A9moriser%20%3F"
 },
 {
  "text": "Regarder la couleur verte de la nature réduit mesurablement le stress et la fatigue mentale.",
  "source": "Perplexity",
  "question": "Est-il vrai que regarder la couleur verte de la nature réduit mesurablement le stress et la fatigue mentale ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20regarder%20la%20couleur%20verte%20de%20la%20nature%20r%C3%A9duit%20mesurablement%20le%20stress%20et%20la%20fatigue%20mentale%20%3F"
 },
 {
  "text": "Le contact physique bienveillant libère de l'ocytocine, une hormone liée à l'attachement.",
  "source": "Perplexity",
  "question": "Est-il vrai que le contact physique bienveillant libère de l'ocytocine, une hormone liée à l'attachement ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20contact%20physique%20bienveillant%20lib%C3%A8re%20de%20l'ocytocine%2C%20une%20hormone%20li%C3%A9e%20%C3%A0%20l'attachement%20%3F"
 },
 {
  "text": "Un manque de sommeil affecte le jugement autant qu'une consommation modérée d'alcool.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un manque de sommeil affecte le jugement autant qu'une consommation modérée d'alcool ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20manque%20de%20sommeil%20affecte%20le%20jugement%20autant%20qu'une%20consommation%20mod%C3%A9r%C3%A9e%20d'alcool%20%3F"
 },
 {
  "text": "Le cerveau humain ne perçoit pas le temps de façon constante : il paraît ralentir dans les moments de danger.",
  "source": "Perplexity",
  "question": "Est-il vrai que le cerveau humain ne perçoit pas le temps de façon constante : il paraît ralentir dans les moments de danger ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20cerveau%20humain%20ne%20per%C3%A7oit%20pas%20le%20temps%20de%20fa%C3%A7on%20constante%C2%A0%3A%20il%20para%C3%AEt%20ralentir%20dans%20les%20moments%20de%20danger%20%3F"
 },
 {
  "text": "Notre humeur peut être influencée par la lumière du jour, d'où la baisse de moral fréquente en hiver.",
  "source": "Perplexity",
  "question": "Est-il vrai que notre humeur peut être influencée par la lumière du jour, d'où la baisse de moral fréquente en hiver ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20notre%20humeur%20peut%20%C3%AAtre%20influenc%C3%A9e%20par%20la%20lumi%C3%A8re%20du%20jour%2C%20d'o%C3%B9%20la%20baisse%20de%20moral%20fr%C3%A9quente%20en%20hiver%20%3F"
 },
 {
  "text": "Chanter en groupe synchronise le rythme cardiaque des participants.",
  "source": "Perplexity",
  "question": "Est-il vrai que chanter en groupe synchronise le rythme cardiaque des participants ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20chanter%20en%20groupe%20synchronise%20le%20rythme%20cardiaque%20des%20participants%20%3F"
 },
 {
  "text": "La foudre chauffe l'air si vite qu'elle le fait exploser, et c'est cette onde de choc que nous entendons comme le tonnerre.",
  "source": "Perplexity",
  "question": "Est-il vrai que la foudre chauffe l'air si vite qu'elle le fait exploser, et c'est cette onde de choc que nous entendons comme le tonnerre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20foudre%20chauffe%20l'air%20si%20vite%20qu'elle%20le%20fait%20exploser%2C%20et%20c'est%20cette%20onde%20de%20choc%20que%20nous%20entendons%20comme%20le%20tonnerre%20%3F"
 },
 {
  "text": "Un iceberg cache environ 90 pour cent de son volume sous la surface de l'eau.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un iceberg cache environ 90 pour cent de son volume sous la surface de l'eau ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20iceberg%20cache%20environ%2090%20pour%20cent%20de%20son%20volume%20sous%20la%20surface%20de%20l'eau%20%3F"
 },
 {
  "text": "La couleur verte du ciel pendant certains orages peut annoncer la grêle ou une tornade.",
  "source": "Perplexity",
  "question": "Est-il vrai que la couleur verte du ciel pendant certains orages peut annoncer la grêle ou une tornade ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20couleur%20verte%20du%20ciel%20pendant%20certains%20orages%20peut%20annoncer%20la%20gr%C3%AAle%20ou%20une%20tornade%20%3F"
 },
 {
  "text": "Les gouttes de pluie ne sont pas en forme de larme mais plutôt aplaties comme de petits pains hamburgers.",
  "source": "Perplexity",
  "question": "Est-il vrai que les gouttes de pluie ne sont pas en forme de larme mais plutôt aplaties comme de petits pains hamburgers ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20gouttes%20de%20pluie%20ne%20sont%20pas%20en%20forme%20de%20larme%20mais%20plut%C3%B4t%20aplaties%20comme%20de%20petits%20pains%20hamburgers%20%3F"
 },
 {
  "text": "Le vent n'a pas de son propre : ce que nous entendons, c'est l'air qui bute sur des obstacles.",
  "source": "Perplexity",
  "question": "Est-il vrai que le vent n'a pas de son propre : ce que nous entendons, c'est l'air qui bute sur des obstacles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20vent%20n'a%20pas%20de%20son%20propre%C2%A0%3A%20ce%20que%20nous%20entendons%2C%20c'est%20l'air%20qui%20bute%20sur%20des%20obstacles%20%3F"
 },
 {
  "text": "Un désert peut connaître un froid glacial la nuit malgré des chaleurs extrêmes le jour, faute d'humidité pour retenir la chaleur.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un désert peut connaître un froid glacial la nuit malgré des chaleurs extrêmes le jour, faute d'humidité pour retenir la chaleur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20d%C3%A9sert%20peut%20conna%C3%AEtre%20un%20froid%20glacial%20la%20nuit%20malgr%C3%A9%20des%20chaleurs%20extr%C3%AAmes%20le%20jour%2C%20faute%20d'humidit%C3%A9%20pour%20retenir%20la%20chaleur%20%3F"
 },
 {
  "text": "La neige absorbe les sons, ce qui rend les paysages enneigés étonnamment silencieux.",
  "source": "Perplexity",
  "question": "Est-il vrai que la neige absorbe les sons, ce qui rend les paysages enneigés étonnamment silencieux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20neige%20absorbe%20les%20sons%2C%20ce%20qui%20rend%20les%20paysages%20enneig%C3%A9s%20%C3%A9tonnamment%20silencieux%20%3F"
 },
 {
  "text": "Certaines plages ont un sable noir, vert ou même rose selon les roches et coquillages locaux.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines plages ont un sable noir, vert ou même rose selon les roches et coquillages locaux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20plages%20ont%20un%20sable%20noir%2C%20vert%20ou%20m%C3%AAme%20rose%20selon%20les%20roches%20et%20coquillages%20locaux%20%3F"
 },
 {
  "text": "Le sel de mer et le sable qui crissent sous les pas viennent de la friction entre grains fins.",
  "source": "Perplexity",
  "question": "Est-il vrai que le sel de mer et le sable qui crissent sous les pas viennent de la friction entre grains fins ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20sel%20de%20mer%20et%20le%20sable%20qui%20crissent%20sous%20les%20pas%20viennent%20de%20la%20friction%20entre%20grains%20fins%20%3F"
 },
 {
  "text": "Un cyclone tire son énergie de la chaleur de l'eau de mer et s'affaiblit en touchant terre.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un cyclone tire son énergie de la chaleur de l'eau de mer et s'affaiblit en touchant terre ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20cyclone%20tire%20son%20%C3%A9nergie%20de%20la%20chaleur%20de%20l'eau%20de%20mer%20et%20s'affaiblit%20en%20touchant%20terre%20%3F"
 },
 {
  "text": "L'air sec transmet mieux l'électricité statique, d'où les petites décharges plus fréquentes en hiver.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'air sec transmet mieux l'électricité statique, d'où les petites décharges plus fréquentes en hiver ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'air%20sec%20transmet%20mieux%20l'%C3%A9lectricit%C3%A9%20statique%2C%20d'o%C3%B9%20les%20petites%20d%C3%A9charges%20plus%20fr%C3%A9quentes%20en%20hiver%20%3F"
 },
 {
  "text": "Le givre se forme directement à partir de la vapeur d'eau qui se cristallise sans passer par l'état liquide.",
  "source": "Perplexity",
  "question": "Est-il vrai que le givre se forme directement à partir de la vapeur d'eau qui se cristallise sans passer par l'état liquide ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20givre%20se%20forme%20directement%20%C3%A0%20partir%20de%20la%20vapeur%20d'eau%20qui%20se%20cristallise%20sans%20passer%20par%20l'%C3%A9tat%20liquide%20%3F"
 },
 {
  "text": "La plupart des mots de passe les plus utilisés au monde sont des suites évidentes comme 123456.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plupart des mots de passe les plus utilisés au monde sont des suites évidentes comme 123456 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plupart%20des%20mots%20de%20passe%20les%20plus%20utilis%C3%A9s%20au%20monde%20sont%20des%20suites%20%C3%A9videntes%20comme%20123456%20%3F"
 },
 {
  "text": "Un smartphone contient plusieurs métaux rares extraits aux quatre coins du monde.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un smartphone contient plusieurs métaux rares extraits aux quatre coins du monde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20smartphone%20contient%20plusieurs%20m%C3%A9taux%20rares%20extraits%20aux%20quatre%20coins%20du%20monde%20%3F"
 },
 {
  "text": "La première photo publiée sur le web montrait un groupe de musique humoristique du laboratoire du CERN.",
  "source": "Perplexity",
  "question": "Est-il vrai que la première photo publiée sur le web montrait un groupe de musique humoristique du laboratoire du CERN ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20premi%C3%A8re%20photo%20publi%C3%A9e%20sur%20le%20web%20montrait%20un%20groupe%20de%20musique%20humoristique%20du%20laboratoire%20du%20CERN%20%3F"
 },
 {
  "text": "Les emojis ont été créés au Japon à la fin des années 1990 pour enrichir les messages sur téléphone.",
  "source": "Perplexity",
  "question": "Est-il vrai que les emojis ont été créés au Japon à la fin des années 1990 pour enrichir les messages sur téléphone ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20emojis%20ont%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9s%20au%20Japon%20%C3%A0%20la%20fin%20des%20ann%C3%A9es%201990%20pour%20enrichir%20les%20messages%20sur%20t%C3%A9l%C3%A9phone%20%3F"
 },
 {
  "text": "La touche F et la touche J d'un clavier ont une petite barre en relief pour repérer la position des doigts sans regarder.",
  "source": "Perplexity",
  "question": "Est-il vrai que la touche F et la touche J d'un clavier ont une petite barre en relief pour repérer la position des doigts sans regarder ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20touche%20F%20et%20la%20touche%20J%20d'un%20clavier%20ont%20une%20petite%20barre%20en%20relief%20pour%20rep%C3%A9rer%20la%20position%20des%20doigts%20sans%20regarder%20%3F"
 },
 {
  "text": "Le nom pixel vient de la contraction de picture element, élément d'image.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nom pixel vient de la contraction de picture element, élément d'image ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nom%20pixel%20vient%20de%20la%20contraction%20de%20picture%20element%2C%20%C3%A9l%C3%A9ment%20d'image%20%3F"
 },
 {
  "text": "Un câble sous-marin transporte l'immense majorité du trafic Internet mondial entre les continents.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'un câble sous-marin transporte l'immense majorité du trafic Internet mondial entre les continents ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'un%20c%C3%A2ble%20sous-marin%20transporte%20l'immense%20majorit%C3%A9%20du%20trafic%20Internet%20mondial%20entre%20les%20continents%20%3F"
 },
 {
  "text": "Le premier smartphone tactile grand public a bouleversé une industrie qui misait encore sur les claviers physiques.",
  "source": "Perplexity",
  "question": "Est-il vrai que le premier smartphone tactile grand public a bouleversé une industrie qui misait encore sur les claviers physiques ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20premier%20smartphone%20tactile%20grand%20public%20a%20boulevers%C3%A9%20une%20industrie%20qui%20misait%20encore%20sur%20les%20claviers%20physiques%20%3F"
 },
 {
  "text": "Le stockage dans le cloud n'a rien d'un nuage : ce sont d'immenses centres de données bien réels et énergivores.",
  "source": "Perplexity",
  "question": "Est-il vrai que le stockage dans le cloud n'a rien d'un nuage : ce sont d'immenses centres de données bien réels et énergivores ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20stockage%20dans%20le%20cloud%20n'a%20rien%20d'un%20nuage%C2%A0%3A%20ce%20sont%20d'immenses%20centres%20de%20donn%C3%A9es%20bien%20r%C3%A9els%20et%20%C3%A9nergivores%20%3F"
 },
 {
  "text": "Le tout premier ordinateur portable pliable a été commercialisé au début des années 1980.",
  "source": "Perplexity",
  "question": "Est-il vrai que le tout premier ordinateur portable pliable a été commercialisé au début des années 1980 ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20tout%20premier%20ordinateur%20portable%20pliable%20a%20%C3%A9t%C3%A9%20commercialis%C3%A9%20au%20d%C3%A9but%20des%20ann%C3%A9es%201980%20%3F"
 },
 {
  "text": "Une seule recherche sur Internet mobilise des centaines de serveurs en quelques millièmes de seconde.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'une seule recherche sur Internet mobilise des centaines de serveurs en quelques millièmes de seconde ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'une%20seule%20recherche%20sur%20Internet%20mobilise%20des%20centaines%20de%20serveurs%20en%20quelques%20milli%C3%A8mes%20de%20seconde%20%3F"
 },
 {
  "text": "Le nom spam pour le courrier indésirable vient d'un sketch comique où ce mot était répété sans fin.",
  "source": "Perplexity",
  "question": "Est-il vrai que le nom spam pour le courrier indésirable vient d'un sketch comique où ce mot était répété sans fin ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20nom%20spam%20pour%20le%20courrier%20ind%C3%A9sirable%20vient%20d'un%20sketch%20comique%20o%C3%B9%20ce%20mot%20%C3%A9tait%20r%C3%A9p%C3%A9t%C3%A9%20sans%20fin%20%3F"
 },
 {
  "text": "Le séquoia géant compte parmi les êtres vivants les plus massifs et peut vivre plusieurs milliers d'années.",
  "source": "Perplexity",
  "question": "Est-il vrai que le séquoia géant compte parmi les êtres vivants les plus massifs et peut vivre plusieurs milliers d'années ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20s%C3%A9quoia%20g%C3%A9ant%20compte%20parmi%20les%20%C3%AAtres%20vivants%20les%20plus%20massifs%20et%20peut%20vivre%20plusieurs%20milliers%20d'ann%C3%A9es%20%3F"
 },
 {
  "text": "Certaines plantes du désert peuvent rester dormantes des années et refleurir en quelques heures après une pluie.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines plantes du désert peuvent rester dormantes des années et refleurir en quelques heures après une pluie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20plantes%20du%20d%C3%A9sert%20peuvent%20rester%20dormantes%20des%20ann%C3%A9es%20et%20refleurir%20en%20quelques%20heures%20apr%C3%A8s%20une%20pluie%20%3F"
 },
 {
  "text": "La fleur de lotus repousse l'eau et la saleté grâce à sa surface microscopiquement rugueuse, un effet copié par l'industrie.",
  "source": "Perplexity",
  "question": "Est-il vrai que la fleur de lotus repousse l'eau et la saleté grâce à sa surface microscopiquement rugueuse, un effet copié par l'industrie ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20fleur%20de%20lotus%20repousse%20l'eau%20et%20la%20salet%C3%A9%20gr%C3%A2ce%20%C3%A0%20sa%20surface%20microscopiquement%20rugueuse%2C%20un%20effet%20copi%C3%A9%20par%20l'industrie%20%3F"
 },
 {
  "text": "Le gui pousse en parasite sur les branches d'autres arbres sans toucher le sol.",
  "source": "Perplexity",
  "question": "Est-il vrai que le gui pousse en parasite sur les branches d'autres arbres sans toucher le sol ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20gui%20pousse%20en%20parasite%20sur%20les%20branches%20d'autres%20arbres%20sans%20toucher%20le%20sol%20%3F"
 },
 {
  "text": "Le pissenlit peut disperser ses graines sur des kilomètres grâce à son parachute duveteux.",
  "source": "Perplexity",
  "question": "Est-il vrai que le pissenlit peut disperser ses graines sur des kilomètres grâce à son parachute duveteux ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20pissenlit%20peut%20disperser%20ses%20graines%20sur%20des%20kilom%C3%A8tres%20gr%C3%A2ce%20%C3%A0%20son%20parachute%20duveteux%20%3F"
 },
 {
  "text": "Le baobab peut stocker des milliers de litres d'eau dans son tronc pour survivre à la sécheresse.",
  "source": "Perplexity",
  "question": "Est-il vrai que le baobab peut stocker des milliers de litres d'eau dans son tronc pour survivre à la sécheresse ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20baobab%20peut%20stocker%20des%20milliers%20de%20litres%20d'eau%20dans%20son%20tronc%20pour%20survivre%20%C3%A0%20la%20s%C3%A9cheresse%20%3F"
 },
 {
  "text": "Certaines graines ne germent qu'après avoir été exposées au feu, une adaptation aux incendies naturels.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines graines ne germent qu'après avoir été exposées au feu, une adaptation aux incendies naturels ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20graines%20ne%20germent%20qu'apr%C3%A8s%20avoir%20%C3%A9t%C3%A9%20expos%C3%A9es%20au%20feu%2C%20une%20adaptation%20aux%20incendies%20naturels%20%3F"
 },
 {
  "text": "Le riz, le blé et le maïs fournissent à eux seuls une grande partie des calories consommées par l'humanité.",
  "source": "Perplexity",
  "question": "Est-il vrai que le riz, le blé et le maïs fournissent à eux seuls une grande partie des calories consommées par l'humanité ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20riz%2C%20le%20bl%C3%A9%20et%20le%20ma%C3%AFs%20fournissent%20%C3%A0%20eux%20seuls%20une%20grande%20partie%20des%20calories%20consomm%C3%A9es%20par%20l'humanit%C3%A9%20%3F"
 },
 {
  "text": "Les nénuphars géants d'Amazonie sont assez solides pour supporter le poids d'un petit enfant.",
  "source": "Perplexity",
  "question": "Est-il vrai que les nénuphars géants d'Amazonie sont assez solides pour supporter le poids d'un petit enfant ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20les%20n%C3%A9nuphars%20g%C3%A9ants%20d'Amazonie%20sont%20assez%20solides%20pour%20supporter%20le%20poids%20d'un%20petit%20enfant%20%3F"
 },
 {
  "text": "Le lierre grimpe en s'accrochant grâce à de minuscules crampons qui sécrètent une colle naturelle.",
  "source": "Perplexity",
  "question": "Est-il vrai que le lierre grimpe en s'accrochant grâce à de minuscules crampons qui sécrètent une colle naturelle ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20lierre%20grimpe%20en%20s'accrochant%20gr%C3%A2ce%20%C3%A0%20de%20minuscules%20crampons%20qui%20s%C3%A9cr%C3%A8tent%20une%20colle%20naturelle%20%3F"
 },
 {
  "text": "La substance la plus noire jamais fabriquée absorbe presque toute la lumière et donne l'impression d'un trou dans l'espace.",
  "source": "Perplexity",
  "question": "Est-il vrai que la substance la plus noire jamais fabriquée absorbe presque toute la lumière et donne l'impression d'un trou dans l'espace ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20substance%20la%20plus%20noire%20jamais%20fabriqu%C3%A9e%20absorbe%20presque%20toute%20la%20lumi%C3%A8re%20et%20donne%20l'impression%20d'un%20trou%20dans%20l'espace%20%3F"
 },
 {
  "text": "Le bruit d'un claquement de doigts, ralenti, révèle un mécanisme complexe entre la paume et le majeur.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bruit d'un claquement de doigts, ralenti, révèle un mécanisme complexe entre la paume et le majeur ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20bruit%20d'un%20claquement%20de%20doigts%2C%20ralenti%2C%20r%C3%A9v%C3%A8le%20un%20m%C3%A9canisme%20complexe%20entre%20la%20paume%20et%20le%20majeur%20%3F"
 },
 {
  "text": "Le plus long pont du monde s'étend sur plus de 150 kilomètres, en Chine.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus long pont du monde s'étend sur plus de 150 kilomètres, en Chine ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20long%20pont%20du%20monde%20s'%C3%A9tend%20sur%20plus%20de%20150%20kilom%C3%A8tres%2C%20en%20Chine%20%3F"
 },
 {
  "text": "Le bâtiment le plus haut du monde dépasse les 800 mètres et se trouve à Dubaï.",
  "source": "Perplexity",
  "question": "Est-il vrai que le bâtiment le plus haut du monde dépasse les 800 mètres et se trouve à Dubaï ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20b%C3%A2timent%20le%20plus%20haut%20du%20monde%20d%C3%A9passe%20les%20800%20m%C3%A8tres%20et%20se%20trouve%20%C3%A0%20Duba%C3%AF%20%3F"
 },
 {
  "text": "Le plus grand désert de glace, l'Antarctique, contient la majorité de l'eau douce de la planète.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus grand désert de glace, l'Antarctique, contient la majorité de l'eau douce de la planète ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20grand%20d%C3%A9sert%20de%20glace%2C%20l'Antarctique%2C%20contient%20la%20majorit%C3%A9%20de%20l'eau%20douce%20de%20la%20plan%C3%A8te%20%3F"
 },
 {
  "text": "L'ascenseur le plus rapide du monde monte à plusieurs dizaines de kilomètres par heure.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'ascenseur le plus rapide du monde monte à plusieurs dizaines de kilomètres par heure ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'ascenseur%20le%20plus%20rapide%20du%20monde%20monte%20%C3%A0%20plusieurs%20dizaines%20de%20kilom%C3%A8tres%20par%20heure%20%3F"
 },
 {
  "text": "Le plus petit os et le plus petit muscle du corps humain se trouvent tous deux dans l'oreille.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus petit os et le plus petit muscle du corps humain se trouvent tous deux dans l'oreille ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20petit%20os%20et%20le%20plus%20petit%20muscle%20du%20corps%20humain%20se%20trouvent%20tous%20deux%20dans%20l'oreille%20%3F"
 },
 {
  "text": "La plus longue durée sans dormir jamais tenue volontairement dépasse onze jours, une performance dangereuse et déconseillée.",
  "source": "Perplexity",
  "question": "Est-il vrai que la plus longue durée sans dormir jamais tenue volontairement dépasse onze jours, une performance dangereuse et déconseillée ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20plus%20longue%20dur%C3%A9e%20sans%20dormir%20jamais%20tenue%20volontairement%20d%C3%A9passe%20onze%20jours%2C%20une%20performance%20dangereuse%20et%20d%C3%A9conseill%C3%A9e%20%3F"
 },
 {
  "text": "Le plus grand flocon de neige signalé aurait mesuré, selon un récit ancien, plusieurs dizaines de centimètres.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus grand flocon de neige signalé aurait mesuré, selon un récit ancien, plusieurs dizaines de centimètres ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20grand%20flocon%20de%20neige%20signal%C3%A9%20aurait%20mesur%C3%A9%2C%20selon%20un%20r%C3%A9cit%20ancien%2C%20plusieurs%20dizaines%20de%20centim%C3%A8tres%20%3F"
 },
 {
  "text": "La ville de Paris compte moins d'habitants intra-muros que plusieurs de ses banlieues réunies.",
  "source": "Perplexity",
  "question": "Est-il vrai que la ville de Paris compte moins d'habitants intra-muros que plusieurs de ses banlieues réunies ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20ville%20de%20Paris%20compte%20moins%20d'habitants%20intra-muros%20que%20plusieurs%20de%20ses%20banlieues%20r%C3%A9unies%20%3F"
 },
 {
  "text": "Il existe une seule frontière terrestre entre l'Afrique et l'Asie, au niveau du canal de Suez.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe une seule frontière terrestre entre l'Afrique et l'Asie, au niveau du canal de Suez ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20une%20seule%20fronti%C3%A8re%20terrestre%20entre%20l'Afrique%20et%20l'Asie%2C%20au%20niveau%20du%20canal%20de%20Suez%20%3F"
 },
 {
  "text": "La capitale la plus haute du monde, La Paz en Bolivie, se situe à plus de 3 600 mètres d'altitude.",
  "source": "Perplexity",
  "question": "Est-il vrai que la capitale la plus haute du monde, La Paz en Bolivie, se situe à plus de 3 600 mètres d'altitude ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20capitale%20la%20plus%20haute%20du%20monde%2C%20La%20Paz%20en%20Bolivie%2C%20se%20situe%20%C3%A0%20plus%20de%203%C2%A0600%20m%C3%A8tres%20d'altitude%20%3F"
 },
 {
  "text": "Le point le plus bas sur terre ferme est la rive de la mer Morte, à plus de 400 mètres sous le niveau des océans.",
  "source": "Perplexity",
  "question": "Est-il vrai que le point le plus bas sur terre ferme est la rive de la mer Morte, à plus de 400 mètres sous le niveau des océans ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20point%20le%20plus%20bas%20sur%20terre%20ferme%20est%20la%20rive%20de%20la%20mer%20Morte%2C%20%C3%A0%20plus%20de%20400%20m%C3%A8tres%20sous%20le%20niveau%20des%20oc%C3%A9ans%20%3F"
 },
 {
  "text": "Il existe des rivières souterraines et des grottes assez grandes pour contenir des immeubles entiers.",
  "source": "Perplexity",
  "question": "Est-il vrai qu'il existe des rivières souterraines et des grottes assez grandes pour contenir des immeubles entiers ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20qu'il%20existe%20des%20rivi%C3%A8res%20souterraines%20et%20des%20grottes%20assez%20grandes%20pour%20contenir%20des%20immeubles%20entiers%20%3F"
 },
 {
  "text": "L'Australie possède une clôture plus longue que la distance entre Paris et Moscou, construite contre les dingos.",
  "source": "Perplexity",
  "question": "Est-il vrai que l'Australie possède une clôture plus longue que la distance entre Paris et Moscou, construite contre les dingos ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20l'Australie%20poss%C3%A8de%20une%20cl%C3%B4ture%20plus%20longue%20que%20la%20distance%20entre%20Paris%20et%20Moscou%2C%20construite%20contre%20les%20dingos%20%3F"
 },
 {
  "text": "Certaines îles apparaissent et disparaissent au gré des éruptions volcaniques sous-marines.",
  "source": "Perplexity",
  "question": "Est-il vrai que certaines îles apparaissent et disparaissent au gré des éruptions volcaniques sous-marines ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20certaines%20%C3%AEles%20apparaissent%20et%20disparaissent%20au%20gr%C3%A9%20des%20%C3%A9ruptions%20volcaniques%20sous-marines%20%3F"
 },
 {
  "text": "Le plus grand delta du monde, celui du Gange et du Brahmapoutre, abrite des millions de personnes.",
  "source": "Perplexity",
  "question": "Est-il vrai que le plus grand delta du monde, celui du Gange et du Brahmapoutre, abrite des millions de personnes ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20le%20plus%20grand%20delta%20du%20monde%2C%20celui%20du%20Gange%20et%20du%20Brahmapoutre%2C%20abrite%20des%20millions%20de%20personnes%20%3F"
 },
 {
  "text": "La distance la plus courte entre la Russie et les États-Unis n'est que de quelques kilomètres, entre deux petites îles.",
  "source": "Perplexity",
  "question": "Est-il vrai que la distance la plus courte entre la Russie et les États-Unis n'est que de quelques kilomètres, entre deux petites îles ?",
  "url": "https://www.perplexity.ai/search?q=Est-il%20vrai%20que%20la%20distance%20la%20plus%20courte%20entre%20la%20Russie%20et%20les%20%C3%89tats-Unis%20n'est%20que%20de%20quelques%20kilom%C3%A8tres%2C%20entre%20deux%20petites%20%C3%AEles%20%3F"
 }
];
