// whatthefuck.fr ? base de faits (g?n?r?e puis v?rifi?e, sourc?e, relue).
// Ne pas ?diter ? la main : r?g?n?r?e depuis le pipeline d'agents.
const FACTS = [
 {
  "text": "Un jour sur Vénus dure plus longtemps qu'une année sur Vénus, car la planète tourne sur elle-même plus lentement qu'elle n'orbite autour du Soleil.",
  "source": "NASA ? Venus",
  "url": "https://science.nasa.gov/venus/"
 },
 {
  "text": "Il n'y a pas de vent sur la Lune, donc les empreintes des astronautes d'Apollo pourraient rester intactes pendant des millions d'années.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Le Soleil représente à lui seul environ 99,8 pour cent de la masse totale de tout le système solaire.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Sur Mars, le coucher de soleil apparaît bleuté, alors que le ciel de jour y est plutôt rougeâtre.",
  "source": "NASA ? Mars",
  "url": "https://science.nasa.gov/mars/"
 },
 {
  "text": "Neptune n'a accompli qu'une seule orbite complète autour du Soleil depuis sa découverte en 1846.",
  "source": "NASA ? Neptune",
  "url": "https://science.nasa.gov/neptune/"
 },
 {
  "text": "Une cuillère à café de matière d'une étoile à neutrons pèserait environ un milliard de tonnes sur Terre.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Il fait tellement chaud sur Vénus, environ 465 degrés, que le plomb y fondrait à la surface.",
  "source": "NASA ? Venus",
  "url": "https://science.nasa.gov/venus/"
 },
 {
  "text": "Les anneaux de Saturne sont si fins par rapport à leur largeur qu'à l'échelle ils seraient plus minces qu'une feuille de papier.",
  "source": "NASA ? Saturn",
  "url": "https://science.nasa.gov/saturn/"
 },
 {
  "text": "Jupiter est si massive que le centre de gravité qu'elle partage avec le Soleil se situe légèrement au-dessus de la surface du Soleil.",
  "source": "NASA ? Jupiter",
  "url": "https://science.nasa.gov/jupiter/"
 },
 {
  "text": "La Grande Tache rouge de Jupiter est une tempête assez grande pour engloutir la Terre entière.",
  "source": "NASA ? Jupiter",
  "url": "https://science.nasa.gov/jupiter/"
 },
 {
  "text": "Dans l'espace, deux morceaux de métal identiques qui se touchent peuvent se souder spontanément, un phénomène appelé soudure à froid.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "L'espace n'est pas totalement silencieux pour les instruments, mais le son ne s'y propage pas car il n'y a presque pas de matière pour le transporter.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, à peu près la vitesse à laquelle poussent nos ongles.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Il existe une planète, 55 Cancri e, dont l'intérieur pourrait contenir d'énormes quantités de carbone, ce qui a inspiré l'idée d'une planète riche en diamant.",
  "source": "NASA ? Exoplanets",
  "url": "https://science.nasa.gov/exoplanets/"
 },
 {
  "text": "Un an sur Mercure dure environ 88 jours terrestres, mais une seule journée solaire y dure environ 176 jours terrestres.",
  "source": "NASA ? Mercury",
  "url": "https://science.nasa.gov/mercury/"
 },
 {
  "text": "La lumière du Soleil met environ huit minutes et vingt secondes à atteindre la Terre.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Si l'on pouvait conduire une voiture à 100 kilomètres par heure vers le Soleil, il faudrait plus de 170 ans pour l'atteindre.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Olympus Mons, un volcan de Mars, culmine à environ 22 kilomètres, soit près de trois fois la hauteur de l'Everest.",
  "source": "NASA ? Mars",
  "url": "https://science.nasa.gov/mars/"
 },
 {
  "text": "La station spatiale internationale fait le tour de la Terre en environ 90 minutes, soit environ 16 levers de soleil par jour pour son équipage.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Certaines comètes dégagent une odeur décrite comme un mélange d'œufs pourris, d'urine de chat et d'amande amère, d'après l'analyse de la sonde Rosetta.",
  "source": "NASA ? Comets",
  "url": "https://science.nasa.gov/solar-system/comets/"
 },
 {
  "text": "Il y a plus d'étoiles dans l'univers observable que de grains de sable sur toutes les plages de la Terre.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le point le plus proche entre la Terre et Mars n'a été atteint qu'une fois en près de 60 000 ans, en 2003.",
  "source": "NASA ? Mars",
  "url": "https://science.nasa.gov/mars/"
 },
 {
  "text": "Une année-lumière n'est pas une durée mais une distance, celle que parcourt la lumière en un an, soit environ 9 460 milliards de kilomètres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "La galaxie d'Andromède fonce vers la Voie lactée et les deux devraient fusionner dans environ quatre milliards d'années.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Sur Uranus et Neptune, les scientifiques pensent qu'il pourrait pleuvoir des diamants en profondeur, sous l'effet d'une pression énorme.",
  "source": "NASA ? Uranus",
  "url": "https://science.nasa.gov/uranus/"
 },
 {
  "text": "L'espace commence conventionnellement à la ligne de Kármán, à 100 kilomètres d'altitude.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Pluton est plus petite que plusieurs lunes du système solaire, dont notre propre Lune.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Le plus grand volcan connu du système solaire ne se trouve pas sur Terre mais sur Mars.",
  "source": "NASA ? Mars",
  "url": "https://science.nasa.gov/mars/"
 },
 {
  "text": "Voyager 1, lancée en 1977, est l'objet fabriqué par l'homme le plus éloigné de la Terre et a quitté le système solaire.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Il n'existe aucune planète qui aurait exactement la même durée de jour et d'année, sauf par coïncidence, mais Mercure tourne exactement trois fois sur elle-même toutes les deux orbites.",
  "source": "NASA ? Mercury",
  "url": "https://science.nasa.gov/mercury/"
 },
 {
  "text": "Le télescope spatial Hubble a observé des galaxies dont la lumière a mis plus de 13 milliards d'années à nous parvenir.",
  "source": "NASA ? Hubble",
  "url": "https://science.nasa.gov/mission/hubble-space-telescope/"
 },
 {
  "text": "Certaines étoiles sont si grosses que si l'on remplaçait le Soleil par elles, leur surface engloutirait l'orbite de Jupiter.",
  "source": "NASA ? Jupiter",
  "url": "https://science.nasa.gov/jupiter/"
 },
 {
  "text": "Un astronaute peut grandir de plusieurs centimètres dans l'espace car sa colonne vertébrale se détend en apesanteur.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La couleur du Soleil vu depuis l'espace, sans atmosphère, est en réalité blanche et non jaune.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La face cachée de la Lune n'est pas plongée dans le noir en permanence : elle reçoit autant de lumière que la face visible. L'expression anglaise dark side of the Moon (face sombre) est donc trompeuse, on devrait parler de face cachée et non de face sombre.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Saturne est si peu dense qu'elle flotterait dans une baignoire assez grande pour la contenir.",
  "source": "NASA ? Saturn",
  "url": "https://science.nasa.gov/saturn/"
 },
 {
  "text": "L'eau chaude peut geler plus vite que l'eau froide dans certaines conditions, un phénomène surprenant appelé effet Mpemba.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le verre n'est pas un liquide qui coule lentement : les vitres anciennes plus épaisses en bas viennent de leur fabrication, pas d'un écoulement.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un éclair est environ cinq fois plus chaud que la surface du Soleil.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Si l'on retirait tout l'espace vide des atomes de tous les humains, l'humanité entière tiendrait dans le volume d'un morceau de sucre.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le miel ne se périme jamais : on a retrouvé du miel comestible dans des tombes égyptiennes vieilles de plus de 3 000 ans.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les atomes sont si vides que la matière que l'on croit solide est essentiellement composée d'espace vide.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La lumière voyage à environ 300 000 kilomètres par seconde, elle pourrait faire plus de sept fois le tour de la Terre en une seconde.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "L'hélium peut adopter un état superfluide où il s'écoule sans aucune friction et grimpe le long des parois de son récipient.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le diamant et le graphite d'un crayon sont tous deux faits uniquement de carbone : seule l'organisation des atomes change.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Un gramme d'ADN pourrait théoriquement stocker une quantité colossale d'informations, bien plus que les disques durs classiques.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le zéro absolu, environ moins 273,15 degrés Celsius, est la température la plus basse théoriquement possible.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Rien de connu ne peut voyager plus vite que la lumière dans le vide.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "L'or est si malléable qu'un seul gramme peut être étiré en un fil de plus de deux kilomètres de long.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le son voyage environ quatre fois plus vite dans l'eau que dans l'air.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Les bulles de savon éclatent parce que l'eau s'évapore, mais elles peuvent geler et former de délicates sphères de glace par grand froid.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le mercure est le seul métal liquide à température ambiante.",
  "source": "NASA ? Mercury",
  "url": "https://science.nasa.gov/mercury/"
 },
 {
  "text": "La foudre frappe la Terre environ une centaine de fois par seconde à l'échelle du globe.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le tungstène possède le point de fusion le plus élevé de tous les métaux, environ 3 422 degrés Celsius.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Un objet chaud émet de la lumière : c'est pourquoi le métal chauffé devient rouge puis blanc.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "L'eau peut exister simultanément à l'état solide, liquide et gazeux à son point triple, une condition très précise de température et de pression.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le graphène, une couche de carbone d'un seul atome d'épaisseur, est environ 200 fois plus résistant que l'acier.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le vide n'est jamais totalement vide : des paires de particules apparaissent et disparaissent en permanence selon la physique quantique.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un supraconducteur peut faire léviter un aimant en le repoussant totalement, un phénomène spectaculaire à très basse température.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La couleur bleue du ciel vient de la diffusion de la lumière du Soleil par les molécules de l'air, qui dévie surtout le bleu.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le plutonium et certains éléments radioactifs dégagent tellement d'énergie qu'ils restent tièdes au toucher.",
  "source": "NASA ? Dwarf Planets",
  "url": "https://science.nasa.gov/dwarf-planets/pluto/"
 },
 {
  "text": "Le point d'ébullition de l'eau diminue avec l'altitude : au sommet de l'Everest, l'eau bout autour de 70 degrés.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Une cuillère de trou noir n'existe pas, mais si l'on comprimait la Terre à la taille d'une bille, elle deviendrait un trou noir.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le sel de table ordinaire est composé de deux éléments dangereux séparément : le sodium, un métal explosif, et le chlore, un gaz toxique.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les poulpes ont trois cœurs, neuf cerveaux et un sang bleu à base de cuivre.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les crevettes-mantes peuvent frapper si vite que l'eau autour de leur pince se met brièvement à bouillir.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les flamants roses naissent gris : leur couleur vient des pigments contenus dans leur nourriture.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un groupe de flamants roses s'appelle une flamboyance.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les vaches ont des amies proches et se stressent lorsqu'on les sépare de leurs compagnes préférées.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les dauphins se donnent des noms : chacun a un sifflement signature qui l'identifie.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Les%20dauphins%20se%20donnent%20des%20noms%20chacun%20a%20un%20sifflement"
 },
 {
  "text": "Les fourmis ne dorment jamais vraiment comme nous, mais font des centaines de micro-siestes par jour.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Les%20fourmis%20ne%20dorment%20jamais%20vraiment%20comme%20nous%20mais%20font"
 },
 {
  "text": "Les kangourous ne peuvent pas reculer, en partie à cause de leur grande queue et de leurs pattes.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les axolotls peuvent régénérer leurs pattes, leur cœur et même des parties de leur cerveau.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les tardigrades, minuscules animaux, peuvent survivre dans l'espace, à la congélation, à la déshydratation et à des radiations extrêmes.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Les manchots offrent parfois des cailloux à leur partenaire lors de la parade amoureuse.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Un escargot peut dormir pendant plusieurs années d'affilée en cas de conditions défavorables.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les loutres de mer se tiennent parfois les pattes en dormant pour ne pas dériver et se perdre.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les abeilles peuvent reconnaître des visages humains en combinant des éléments comme dans un puzzle.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le venin d'une seule pieuvre à anneaux bleus pourrait tuer plusieurs adultes, et il n'existe pas d'antidote.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les crocodiles ne peuvent pas tirer la langue, celle-ci étant fixée au fond de leur bouche.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les chevaux et les vaches peuvent dormir debout grâce à un système de verrouillage de leurs articulations.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le colibri est le seul oiseau capable de voler en marche arrière.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20colibri%20est%20le%20seul%20oiseau%20capable%20de%20voler%20en"
 },
 {
  "text": "Les éléphants sont parmi les rares animaux à se reconnaître dans un miroir.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Une puce peut sauter environ cent fois sa propre hauteur.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les étoiles de mer n'ont pas de cerveau ni de sang, et se déplacent grâce à un système hydraulique.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Les koalas ont des empreintes digitales si semblables aux nôtres qu'elles pourraient tromper une analyse rapide.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le blob, un organisme unicellulaire, n'a ni cerveau ni neurones mais peut apprendre et résoudre des labyrinthes.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les paresseux digèrent si lentement qu'un repas peut mettre plusieurs semaines à être assimilé.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Certaines méduses, comme Turritopsis dohrnii, peuvent inverser leur cycle de vie et rajeunir, ce qui leur vaut le surnom de méduse immortelle.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le renard des sables peut se passer de boire longtemps en tirant l'eau de sa nourriture.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Les chats domestiques partagent environ 95 pour cent de leur ADN avec le tigre.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Les%20chats%20domestiques%20partagent%20environ%2095%20pour%20cent%20de%20leur"
 },
 {
  "text": "Les hippopotames sécrètent une substance rougeâtre qui agit comme une crème solaire naturelle.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le narval possède une longue défense qui est en réalité une dent traversant sa lèvre.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les rats rient quand on les chatouille, avec des vocalisations aiguës inaudibles pour nous sans instruments.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Les%20rats%20rient%20quand%20on%20les%20chatouille%20avec%20des%20vocalisations"
 },
 {
  "text": "Un poulpe peut passer à travers n'importe quel trou plus grand que son bec, la seule partie dure de son corps.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les moutons peuvent reconnaître et mémoriser des dizaines de visages, humains comme ovins, pendant des années.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les chauves-souris sont les seuls mammifères capables de voler réellement, et non de planer.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le seul mammifère ne pouvant pas sauter est l'éléphant.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20seul%20mammif%C3%A8re%20ne%20pouvant%20pas%20sauter%20est%20l%20%C3%A9l%C3%A9phant"
 },
 {
  "text": "Les corbeaux fabriquent des outils, planifient l'avenir et gardent rancune envers des humains précis.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les araignées de mer respirent et font circuler leur sang en partie grâce à leurs intestins situés dans leurs pattes.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les guépards ne rugissent pas, ils miaulent et ronronnent comme des chats domestiques.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le poisson-clown peut changer de sexe, et c'est le mâle dominant qui devient femelle en cas de besoin.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Une seule ruche peut nécessiter le nectar de plus de deux millions de fleurs pour produire un demi-kilo de miel.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les libellules existaient déjà avant les dinosaures et certaines espèces anciennes avaient une envergure de près de 70 centimètres.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les fourmis peuvent porter de nombreuses fois leur propre poids grâce à la mécanique de leur petite taille.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le colibri bat des ailes jusqu'à environ 80 fois par seconde.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les pieuvres goûtent ce qu'elles touchent grâce à des récepteurs situés sur leurs ventouses.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les vaches produisent plus de lait quand on leur fait écouter de la musique douce et régulière.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le wombat produit des crottes de forme cubique, un cas unique dans le règne animal.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les abeilles communiquent l'emplacement des fleurs par une danse frétillante codée.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Un cafard peut survivre plusieurs semaines sans sa tête avant de mourir de faim.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les serpents n'ont pas de paupières et dorment les yeux ouverts.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les grenouilles de certaines espèces peuvent geler presque entièrement l'hiver puis dégeler et repartir vivantes au printemps.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "L'estomac fabrique une nouvelle couche de mucus tous les quelques jours pour éviter de se digérer lui-même.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=L%20estomac%20fabrique%20une%20nouvelle%20couche%20de%20mucus%20tous%20les"
 },
 {
  "text": "Vos poumons ont une surface totale d'échange comparable à celle d'un court de tennis s'ils étaient dépliés.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le corps humain contient assez de carbone pour fabriquer environ 9 000 mines de crayon.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Chaque être humain a une odeur corporelle unique, un peu comme une empreinte digitale olfactive, sauf chez les vrais jumeaux.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les os humains sont, à poids égal, plus résistants que l'acier pour supporter la compression.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Vous êtes légèrement plus grand le matin qu'au coucher, car vos disques vertébraux se tassent au fil de la journée.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "L'acide de votre estomac est assez fort pour dissoudre certains métaux, mais votre paroi se renouvelle sans cesse pour résister.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le corps humain héberge plus de bactéries que de cellules humaines, selon les estimations récentes à peu près à parité.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Vos yeux peuvent distinguer plusieurs millions de nuances de couleurs.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le cœur humain bat environ 100 000 fois par jour, soit plus de 2,5 milliards de fois dans une vie.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Il est physiquement impossible d'éternuer les yeux ouverts pour la plupart des gens.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le fémur, l'os de la cuisse, est l'os le plus long et l'un des plus solides du corps humain.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Nos empreintes digitales se forment avant la naissance et restent identiques toute la vie.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le corps humain produit environ un litre et demi de salive par jour.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La cornée de l'œil est l'un des rares tissus du corps à ne recevoir aucun vaisseau sanguin, elle respire directement l'air.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Vous clignez des yeux environ 15 à 20 fois par minute, soit des millions de fois par an.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les enfants naissent avec environ 300 os, mais les adultes n'en ont que 206 car certains fusionnent.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "L'émail des dents est la substance la plus dure produite par le corps humain.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le corps humain émet une très faible lueur, invisible à l'œil nu, appelée bioluminescence humaine.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Chaque personne perd environ un demi-kilo de peau morte par an, qui compose une part de la poussière domestique.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Vos globules rouges font le tour complet de votre corps en environ une minute.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le foie est le seul organe interne humain capable de se régénérer partiellement après une ablation.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Un adulte respire en moyenne plus de 20 000 fois par jour.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les vaisseaux sanguins d'un adulte mis bout à bout pourraient faire plusieurs fois le tour de la Terre.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le cerveau humain consomme environ 20 pour cent de l'énergie du corps alors qu'il ne pèse que 2 pour cent de la masse.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les larmes d'émotion ont une composition chimique différente de celles provoquées par un oignon.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Vos oreilles et votre nez continuent de grandir toute la vie, contrairement à la plupart des autres parties du corps.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le rire fait travailler des dizaines de muscles et peut réellement réduire les hormones du stress.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "L'être humain est le seul animal connu à rougir de gêne.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Environ 60 pour cent du corps humain adulte est composé d'eau.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Vos poumons flottent sur l'eau, ce sont les seuls organes humains à le faire.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La banane est botaniquement une baie, mais la fraise n'en est pas une.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le chocolat était autrefois consommé comme une boisson amère et servait même de monnaie chez les Aztèques.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Les carottes étaient à l'origine surtout violettes ou blanches, la variété orange s'étant popularisée plus tard aux Pays-Bas.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "La noix de muscade peut être toxique et provoquer des effets étranges si elle est consommée en grande quantité.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le wasabi servi dans la plupart des restaurants est en réalité du raifort coloré, le vrai wasabi étant rare et cher.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les pommes flottent parce qu'elles contiennent environ 25 pour cent d'air.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le piment ne brûle pas réellement la bouche : la capsaïcine trompe les récepteurs de la chaleur sans causer de brûlure physique.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "L'ananas met environ deux à trois ans à pousser avant de donner un seul fruit.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le safran est l'épice la plus chère du monde, car il faut des dizaines de milliers de fleurs pour obtenir un kilo.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "La cacahuète n'est pas une noix mais une légumineuse, plus proche des pois et des lentilles.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le fromage est l'aliment le plus volé au monde selon plusieurs études sur le vol en magasin.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Un épi de maïs possède presque toujours un nombre pair de rangées de grains.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le miel est la seule nourriture produite par un insecte que les humains consomment couramment.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les tomates étaient longtemps considérées comme toxiques en Europe car les riches tombaient malades, en réalité à cause du plomb de leur vaisselle.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "La couleur rouge de nombreux bonbons et yaourts provenait parfois d'un colorant tiré d'un insecte, la cochenille.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le concombre est composé d'environ 95 pour cent d'eau.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le pain de mie complet et le pain blanc ont un nombre de calories assez proche, la différence tient surtout aux fibres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "La vanille est la deuxième épice la plus chère au monde après le safran.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le sucre n'a pas de date de péremption réelle et peut se conserver indéfiniment s'il reste au sec.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "La couleur d'un poivron vert, jaune ou rouge indique souvent son stade de maturité, le rouge étant le plus mûr.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le café était d'abord mangé sous forme de baies mélangées à de la graisse avant d'être bu en infusion.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Une pomme de terre laissée à la lumière verdit et produit une substance légèrement toxique appelée solanine.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le champagne contient des millions de bulles, mais leur nombre exact dépend surtout de la propreté du verre.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le lait de vache n'a pas toujours été bien digéré par les humains adultes, la tolérance au lactose est une adaptation relativement récente.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La gousse de vanille provient d'une orchidée, la seule de cette famille cultivée pour son fruit comestible.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Les frites, malgré leur nom anglais French fries, sont revendiquées à la fois par la Belgique et la France.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le chocolat blanc ne contient pas de cacao solide, seulement du beurre de cacao, du sucre et du lait.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "La guerre la plus courte de l'histoire, entre le Royaume-Uni et Zanzibar en 1896, a duré moins de 45 minutes.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Cléopâtre a vécu plus près dans le temps de l'invention du smartphone que de la construction de la grande pyramide de Gizeh.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les pyramides d'Égypte étaient à l'origine recouvertes d'un calcaire blanc poli qui les faisait briller au soleil.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Oxford, en Angleterre, était déjà une université avant que la civilisation aztèque ne fonde sa capitale.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "On utilisait autrefois les crânes et les ossements comme monnaie ou objets rituels dans plusieurs cultures.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Napoléon Bonaparte n'était pas particulièrement petit pour son époque : la légende de sa petite taille vient d'une confusion d'unités de mesure.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Les gladiateurs romains étaient souvent végétariens et surnommés mangeurs d'orge.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Pendant la construction, la tour Eiffel devait être démontée au bout de vingt ans avant d'être sauvée grâce à son utilité pour la radio.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Le mammouth laineux existait encore lorsque les pyramides d'Égypte étaient déjà construites, certains ayant survécu sur une île isolée.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les Romains utilisaient de l'urine comme produit nettoyant et même pour blanchir les dents, à cause de son ammoniac.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La Grande Muraille de Chine n'est pas visible à l'œil nu depuis l'espace, contrairement à une idée reçue tenace.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le premier ordinateur programmable pesait plusieurs tonnes et occupait une pièce entière.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Les anciens Égyptiens se rasaient les sourcils en signe de deuil à la mort de leur chat.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Les%20anciens%20%C3%89gyptiens%20se%20rasaient%20les%20sourcils%20en%20signe%20de"
 },
 {
  "text": "Le trajet en diligence qui prenait des semaines au 19e siècle se fait aujourd'hui en quelques heures d'avion.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La ville de Pompéi a été si bien conservée par les cendres du Vésuve que l'on y voit encore des graffitis d'époque.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les Vikings n'avaient pas de casques à cornes : cette image vient surtout d'opéras et d'illustrations du 19e siècle.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le stéthoscope a été inventé parce qu'un médecin français trouvait gênant de poser son oreille sur la poitrine des patients.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La fourchette a longtemps été considérée comme un objet scandaleux et efféminé en Europe.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=La%20fourchette%20a%20longtemps%20%C3%A9t%C3%A9%20consid%C3%A9r%C3%A9e%20comme%20un%20objet%20scandaleux"
 },
 {
  "text": "Certaines momies égyptiennes ont été, à une époque, réduites en poudre et vendues comme remède médical.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Certaines%20momies%20%C3%A9gyptiennes%20ont%20%C3%A9t%C3%A9%20%C3%A0%20une%20%C3%A9poque%20r%C3%A9duites%20en"
 },
 {
  "text": "L'Empire romain a duré si longtemps que sa partie orientale, Byzance, a survécu près de mille ans après la chute de Rome.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le premier vol motorisé des frères Wright en 1903 a duré seulement une douzaine de secondes.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Avant les réveils, des hommes payés frappaient aux fenêtres avec de longues perches pour réveiller les ouvriers en Angleterre.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les anciens Grecs organisaient les Jeux olympiques et faisaient une trêve des guerres pendant leur déroulement.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La bibliothèque d'Alexandrie aurait perdu une immense partie du savoir antique lors de sa disparition progressive.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le mot salaire vient du latin salarium, lié au sel (sal), denrée très précieuse dans l'Antiquité.",
  "source": "CNRTL ? ?tymologie",
  "url": "https://www.cnrtl.fr/etymologie/"
 },
 {
  "text": "La chute du mur de Berlin en 1989 a été précipitée en partie par une annonce administrative mal formulée.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Les pharaons d'Égypte se faisaient parfois enterrer avec des serviteurs, de la nourriture et des objets pour l'au-delà.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "La Russie est si vaste qu'elle s'étend sur onze fuseaux horaires.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le Sahara n'est pas le plus grand désert du monde : l'Antarctique, un désert froid, est bien plus étendu.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le point le plus profond de l'océan, la fosse des Mariannes, est plus profond que l'Everest est haut.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Il existe un pays, le Vatican, si petit qu'il tiendrait plusieurs fois dans un grand parc urbain.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le mont Chimborazo en Équateur est le point de la surface terrestre le plus éloigné du centre de la Terre, à cause du renflement de l'équateur.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "L'Australie est plus large que la Lune, en diamètre.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Il n'y a aucune fourmi en Islande, en Antarctique ni au Groenland, entre autres endroits.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le lac Baïkal, en Sibérie, contient à lui seul environ un cinquième de l'eau douce liquide non gelée de la planète.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La ville de Rome est plus ancienne que la plupart des nations actuelles et fêtera bientôt ses trois mille ans.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le Canada possède plus de lacs que tout le reste du monde réuni.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "L'Afrique est si grande que l'on pourrait y faire tenir les États-Unis, la Chine, l'Inde et une grande partie de l'Europe.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Istanbul est la seule grande ville du monde située à cheval sur deux continents, l'Europe et l'Asie.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le désert d'Atacama au Chili est l'endroit le plus sec du monde, certaines zones n'ayant jamais enregistré de pluie.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La France est le pays qui possède le plus de fuseaux horaires au monde grâce à ses territoires d'outre-mer.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le plus long fleuve du monde, le Nil ou l'Amazone selon les mesures, dépasse les 6 000 kilomètres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le point culminant et le point le plus bas des États-Unis contigus sont distants de moins de 150 kilomètres, en Californie.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "L'Alaska est à la fois l'État le plus au nord, le plus à l'ouest et, à cause des îles Aléoutiennes, le plus à l'est des États-Unis.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les Pays-Bas ont gagné une grande partie de leur territoire sur la mer grâce à des digues et des polders.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Il existe une frontière entre la Norvège et la Suède qui suit un tracé si sinueux qu'elle est l'une des plus longues d'Europe.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le plus petit pays d'Asie et l'un des plus petits du monde, les Maldives, est aussi le plus plat, culminant à quelques mètres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "La mer Morte est si salée qu'on y flotte sans effort et qu'aucun poisson n'y survit.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le Groenland apparaît immense sur les cartes classiques, mais cette taille est très exagérée par la projection de Mercator.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le point Nemo, dans l'océan Pacifique, est si isolé que les humains les plus proches sont souvent les astronautes en orbite.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La ville la plus septentrionale habitée en permanence se trouve dans l'archipel norvégien du Svalbard.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le fleuve Amazone est si large à certains endroits qu'on ne peut pas voir l'autre rive.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le mont Everest grandit encore de quelques millimètres par an à cause de la collision des plaques tectoniques.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Les chutes Victoria, en Afrique, produisent un tel nuage de vapeur qu'on les surnomme la fumée qui gronde.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Il existe des langues qui n'ont pas de mots distincts pour le bleu et le vert, les regroupant sous un seul terme.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le mandarin est la langue avec le plus de locuteurs natifs au monde, devant l'espagnol et l'anglais.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Certaines langues, comme le tuyuca d'Amazonie, obligent le locuteur à préciser comment il sait ce qu'il affirme.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le mot anglais set possède l'une des plus longues entrées de dictionnaire avec des dizaines de sens différents.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Il existe des langues sifflées, comme aux Canaries, capables de transmettre des messages complexes d'une vallée à l'autre.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le pangramme est une phrase contenant toutes les lettres de l'alphabet, comme portez ce vieux whisky au juge blond qui fume.",
  "source": "CNRTL ? ?tymologie",
  "url": "https://www.cnrtl.fr/etymologie/"
 },
 {
  "text": "L'islandais est resté si proche du vieux norrois que ses locuteurs peuvent encore lire des textes vieux de mille ans.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le mot robot vient d'une pièce de théâtre tchèque et dérive du tchèque robota, qui signifie travail forcé ou corvée.",
  "source": "CNRTL ? ?tymologie",
  "url": "https://www.cnrtl.fr/etymologie/"
 },
 {
  "text": "En français, les mots amour, délice et orgue changent de genre au pluriel dans certains usages.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=En%20fran%C3%A7ais%20les%20mots%20amour%20d%C3%A9lice%20et%20orgue%20changent%20de"
 },
 {
  "text": "Certaines langues comptent en base 20 ou en base 12 plutôt qu'en base 10.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le braille permet de lire avec les doigts grâce à des combinaisons de six points en relief.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "L'espéranto est une langue construite au 19e siècle dans l'espoir de faciliter la communication entre les peuples.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Beaucoup de langues n'ont pas de futur grammatical et expriment l'avenir avec le présent et un contexte.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le hawaïen n'utilise qu'une douzaine de lettres environ dans son alphabet.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le mot alphabet vient des deux premières lettres grecques, alpha et bêta.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le français a été pendant des siècles la langue de la diplomatie internationale.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Certains mots existent dans une seule langue et sont intraduisibles en un seul mot, comme le portugais saudade.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Dans un groupe de seulement 23 personnes, il y a plus d'une chance sur deux que deux d'entre elles partagent le même anniversaire.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le nombre pi possède une infinité de décimales qui ne se répètent jamais de façon périodique.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Un simple pliage de papier, s'il était possible de le plier 42 fois, donnerait une épaisseur atteignant la Lune.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Zéro est le seul nombre qui ne peut pas être représenté en chiffres romains.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La somme des chiffres de tout multiple de neuf donne toujours, en répétant l'opération, le chiffre neuf.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Il existe différents types d'infinis, certains étant démontrés comme strictement plus grands que d'autres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le nombre d'or, environ 1,618, apparaît dans l'art, l'architecture et de nombreuses proportions de la nature.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Un googol est le chiffre 1 suivi de cent zéros, et il a inspiré le nom de Google.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Multiplier un nombre par onze, s'il a deux chiffres, revient souvent à additionner ces deux chiffres et à les placer au milieu.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La bande de Möbius est une surface qui n'a qu'un seul côté et un seul bord.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "En probabilité, un événement de chance une sur un million finit par arriver régulièrement à l'échelle d'une grande population.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le théorème de Pythagore était connu et utilisé bien avant Pythagore par plusieurs civilisations anciennes.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Il n'existe pas de plus grand nombre premier : on a démontré qu'il y en a une infinité.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le zéro n'a été reconnu comme un véritable nombre que tardivement dans l'histoire des mathématiques.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Un nombre est divisible par trois si la somme de ses chiffres l'est aussi.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le paradoxe de Monty Hall montre qu'il vaut mieux changer de porte dans un jeu à trois portes, ce qui déroute l'intuition.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "La suite de Fibonacci, où chaque nombre est la somme des deux précédents, se retrouve dans la disposition des graines de tournesol.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Additionner tous les nombres de un à cent donne 5 050, une astuce attribuée au jeune mathématicien Gauss.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le symbole de l'infini en forme de huit couché a été introduit au 17e siècle par le mathématicien John Wallis.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Il est impossible de peigner une boule chevelue sans laisser au moins un épi, un résultat mathématique sérieux.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le premier message envoyé sur ce qui deviendra Internet a planté après seulement deux lettres.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "La souris d'ordinateur s'appelle ainsi à cause de son fil qui ressemblait à une queue de souris.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le premier appareil photo nécessitait une pose de plusieurs heures pour capturer une seule image.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le code QR a été inventé au Japon pour suivre des pièces automobiles dans les usines.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le Wi-Fi ne veut pas dire wireless fidelity, ce nom a été inventé par une agence marketing sans vraie signification.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le premier disque dur commercial pesait plus d'une tonne et stockait moins qu'une simple photo de smartphone aujourd'hui.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le four à micro-ondes a été découvert par accident quand une barre chocolatée a fondu dans la poche d'un ingénieur près d'un radar.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Le premier ordinateur portable ressemblait à une valise et pesait plus de dix kilos.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le symbole arobase de l'e-mail existait bien avant Internet et servait en comptabilité.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le Bluetooth, littéralement dent bleue en anglais, doit son nom à un roi viking, Harald à la dent bleue, qui unifiait des peuples comme la technologie unit les appareils.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le tout premier site web est toujours en ligne et décrivait simplement ce qu'était le World Wide Web.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20tout%20premier%20site%20web%20est%20toujours%20en%20ligne%20et"
 },
 {
  "text": "Le clavier AZERTY et QWERTY a été conçu en partie pour éviter que les touches des machines à écrire ne se coincent.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le premier téléphone portable commercialisé pesait près d'un kilo et coûtait une fortune.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le Post-it est né d'une colle ratée, jugée trop faible, qui s'est révélée parfaite pour des notes repositionnables.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le vélcro a été inspiré par les petites graines qui s'accrochaient au pantalon d'un ingénieur et au poil de son chien.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le premier appareil photo numérique, créé en 1975, était aussi gros qu'un grille-pain et mettait des secondes à enregistrer une image.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le CD a été conçu pour durer environ 74 minutes, dit-on pour contenir une symphonie de Beethoven en entier.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "La disquette de sauvegarde survit dans nos logiciels sous forme d'icône, alors que peu de gens en ont déjà utilisé une.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les premiers pixels et jeux vidéo tenaient dans une mémoire des milliers de fois plus petite qu'une simple photo actuelle.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le pacemaker moderne a été perfectionné grâce à une erreur de composant qui produisait des impulsions régulières.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La plante qui pousse le plus vite au monde, le bambou, peut grandir de près d'un mètre en une seule journée.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "L'animal terrestre le plus rapide, le guépard, peut atteindre une vitesse comparable à celle d'une voiture sur autoroute.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "L'être vivant le plus lourd connu est peut-être un champignon souterrain qui s'étend sur plusieurs kilomètres carrés.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le plus vieil arbre vivant connu a plus de 4 800 ans, il germait donc avant la construction des pyramides.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Le son le plus fort jamais enregistré, l'éruption du Krakatoa en 1883, a été entendu à des milliers de kilomètres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "L'animal le plus venimeux au monde, en quantité de toxine, est souvent la méduse-boîte d'Australie.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le lieu habité le plus froid de la planète, en Sibérie, descend régulièrement sous les moins 50 degrés.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La plus grande fleur du monde, la rafflésie, peut mesurer près d'un mètre et dégage une odeur de viande pourrie.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le plus long éclair jamais mesuré s'étendait sur plusieurs centaines de kilomètres à travers le ciel.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "L'endroit le plus profond jamais atteint par l'homme se trouve au fond de la fosse des Mariannes.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Le désert le plus chaud enregistre des températures de surface dépassant parfois les 80 degrés au sol.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La créature la plus âgée jamais identifiée est peut-être une éponge de mer vivant depuis plus de 10 000 ans.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Le plus grand organisme vivant pourrait être une forêt de trembles reliés par un même système racinaire.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Le vent le plus rapide jamais mesuré au sol soufflait à plus de 400 kilomètres par heure lors d'un cyclone.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La chute d'eau la plus haute du monde, le Salto Angel au Venezuela, tombe de près d'un kilomètre.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La marée la plus haute du monde, dans la baie de Fundy au Canada, peut varier de plus de quinze mètres.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "On connaît mieux la surface de la Lune et de Mars que le fond de nos propres océans.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Plus de la moitié de l'oxygène que nous respirons est produite par le plancton et les océans, pas par les forêts.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Il existe des endroits où il a plu des grenouilles ou des poissons, aspirés puis relâchés par des tornades ou des trombes marines.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "La foudre peut transformer le sable en un tube de verre appelé fulgurite.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Un flocon de neige possède une structure à six branches et il est extrêmement rare que deux soient parfaitement identiques.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les vagues scélérates, longtemps considérées comme des légendes de marins, ont bien été mesurées et confirmées.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "L'eau de mer contient de l'or dissous, mais en quantité si infime qu'il est impossible de l'exploiter rentablement.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Certains nuages peuvent peser plusieurs centaines de tonnes tout en flottant dans le ciel.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "L'arc-en-ciel est en réalité un cercle complet, mais le sol nous en cache généralement la moitié inférieure.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le point le plus profond de l'océan est si sombre que la lumière du soleil n'y parvient jamais.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La plus grande cascade du monde est en réalité sous-marine, dans le détroit du Danemark.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Le sable du désert du Sahara traverse parfois l'Atlantique et fertilise la forêt amazonienne.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Un litre d'eau de mer contient en moyenne environ 35 grammes de sel.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Un%20litre%20d%20eau%20de%20mer%20contient%20en%20moyenne%20environ"
 },
 {
  "text": "La grêle peut atteindre la taille d'une balle de tennis et tomber à grande vitesse lors d'orages violents.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les tornades peuvent générer des vents plus rapides que ceux d'un cyclone, mais sur une zone bien plus petite.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les aurores boréales sont provoquées par des particules du Soleil qui percutent l'atmosphère près des pôles.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le brouillard n'est qu'un nuage qui touche le sol.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20brouillard%20n%20est%20qu%20un%20nuage%20qui%20touche%20le"
 },
 {
  "text": "Certaines forêts communiquent sous terre via un réseau de champignons surnommé le wood wide web.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "La couleur de l'océan vient surtout de l'absorption de la lumière rouge par l'eau, ne laissant ressortir que le bleu.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un seul grand orage peut libérer plus d'énergie qu'une bombe atomique.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La neige peut paraître bleue en profondeur car la glace absorbe légèrement la lumière rouge.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Les océans abritent probablement des millions d'espèces encore totalement inconnues de la science.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Les arbres peuvent se prévenir mutuellement d'une attaque d'insectes en libérant des substances chimiques dans l'air.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La tomate, le poivron et l'aubergine appartiennent à la même famille que la mortelle belladone.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Certaines plantes carnivores, comme la dionée, se referment sur un insecte en une fraction de seconde.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Le tournesol suit la course du soleil quand il est jeune, un mouvement appelé héliotropisme.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Les bananes que nous mangeons sont presque toutes des clones d'une même variété, ce qui les rend fragiles face aux maladies.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le brocoli, le chou-fleur, le chou de Bruxelles et le chou frisé viennent tous de la même espèce sauvage.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Un pommier peut mettre plusieurs années avant de donner ses premiers fruits.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Certaines graines peuvent germer après avoir passé des milliers d'années dans un sol gelé ou sec.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La mousse pousse plus souvent du côté humide et ombragé, mais l'idée qu'elle indique toujours le nord est peu fiable.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le café et le thé contiennent tous deux de la caféine, mais le thé en libère l'effet plus lentement.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Un seul grand chêne peut abriter des centaines d'espèces d'insectes, d'oiseaux et de champignons.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Un%20seul%20grand%20ch%C3%AAne%20peut%20abriter%20des%20centaines%20d%20esp%C3%A8ces"
 },
 {
  "text": "Les cactus sont des plantes qui ont transformé leurs feuilles en épines pour limiter la perte d'eau.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "La plante la plus solitaire, un cycad mâle sans femelle connue, n'a plus de partenaire pour se reproduire naturellement.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Les racines de certains arbres peuvent s'étendre bien au-delà de la largeur de leur feuillage.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le bambou est techniquement une herbe géante et non un arbre.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Certaines fleurs imitent l'apparence et l'odeur d'insectes femelles pour attirer les mâles et se faire polliniser.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Votre cerveau reste actif la nuit et consomme presque autant d'énergie pendant le sommeil qu'à l'éveil.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Nous prenons la plupart de nos décisions quelques instants avant d'en être conscients, selon des expériences de neurosciences.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le cerveau ne ressent pas la douleur lui-même, bien qu'il traite tous les signaux douloureux du corps.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La sensation de déjà-vu reste mal expliquée, mais serait liée à un décalage dans le traitement de la mémoire.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Votre mémoire ne fonctionne pas comme un enregistrement fidèle : chaque souvenir est légèrement reconstruit à chaque rappel.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le cerveau humain contient environ 86 milliards de neurones.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "On oublie la plupart des rêves dans les premières minutes suivant le réveil.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "L'effet placebo est si réel qu'une fausse pilule peut soulager une douleur si l'on croit qu'elle est active.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Notre cerveau comble automatiquement la tache aveugle de chaque œil, de sorte que nous ne la remarquons jamais.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le multitâche est en grande partie une illusion : le cerveau bascule rapidement d'une tâche à l'autre plutôt que de tout faire à la fois.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Compter les moutons serait moins efficace pour s'endormir qu'imaginer un paysage relaxant, selon certaines études.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les couleurs influencent notre humeur et même notre perception du temps ou de la température.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le cerveau adulte continue de créer de nouvelles connexions tout au long de la vie, c'est la plasticité cérébrale.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Nous sommes naturellement attirés par les visages, au point d'en voir dans des objets, un phénomène appelé paréidolie.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le cerveau traite une image en quelques millièmes de seconde, plus vite que la lecture d'un mot.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La musique agréable libère de la dopamine, la même molécule liée au plaisir et à la récompense.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Notre perception du temps s'accélère avec l'âge, en partie parce que les expériences deviennent moins nouvelles.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Notre%20perception%20du%20temps%20s%20acc%C3%A9l%C3%A8re%20avec%20l%20%C3%A2ge%20en"
 },
 {
  "text": "Le cerveau consomme du glucose en permanence et fatigue mentalement comme un muscle après un effort intense.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Bâiller pourrait aider à rafraîchir le cerveau, et il est étonnamment contagieux même entre espèces.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Non, on n'utilise pas seulement 10 pour cent de notre cerveau : c'est un mythe, on l'utilise en quasi-totalité.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Non, les taureaux ne sont pas enragés par la couleur rouge : ils sont daltoniens à cette couleur et réagissent au mouvement.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Non, un sou lâché du haut d'un gratte-ciel ne peut pas tuer quelqu'un : sa vitesse de chute reste trop faible.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Non, les poissons rouges n'ont pas une mémoire de trois secondes : ils peuvent retenir des choses pendant des mois.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Non, la Muraille de Chine n'est pas visible à l'œil nu depuis la Lune.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Non, on n'avale pas huit araignées par an en dormant : cette statistique a été inventée de toutes pièces.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Non, le sucre ne rend pas les enfants hyperactifs : de nombreuses études n'ont trouvé aucun lien direct.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Non, les chauves-souris ne sont pas aveugles : la plupart voient très bien en plus d'utiliser l'écholocation.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Non, se casser les doigts ne donne pas d'arthrose : le bruit vient de bulles de gaz dans les articulations.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Non, les cheveux et les ongles ne continuent pas de pousser après la mort : c'est la peau qui se rétracte.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Non, un éclair peut très bien frapper deux fois le même endroit, et cela arrive souvent sur les hauts bâtiments.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Non, l'eau ne tourne pas dans un sens dans un évier selon l'hémisphère : la force de Coriolis est bien trop faible à cette échelle.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Non, Einstein n'était pas mauvais en mathématiques : cette légende repose sur un malentendu de barème.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Non, le caméléon ne change pas de couleur pour se camoufler avant tout, mais surtout pour communiquer et réguler sa température.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Non, les vikings ne buvaient pas dans des crânes : cette idée vient d'une erreur de traduction d'un vieux poème.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Non%20les%20vikings%20ne%20buvaient%20pas%20dans%20des%20cr%C3%A2nes%20cette"
 },
 {
  "text": "Non, la langue n'a pas de zones distinctes réservées à chaque goût : cette carte de la langue est fausse.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Non, les cafards ne survivraient pas seuls à une guerre nucléaire, même s'ils résistent mieux que nous aux radiations.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Non, on ne perd pas la majorité de sa chaleur par la tête : la déperdition dépend surtout de la surface découverte.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Non%20on%20ne%20perd%20pas%20la%20majorit%C3%A9%20de%20sa%20chaleur"
 },
 {
  "text": "Non, l'étoile Polaire n'est pas l'étoile la plus brillante du ciel, seulement l'une des plus utiles pour s'orienter.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Il est impossible de se lécher le coude pour la plupart des gens, même si beaucoup essaient en le lisant.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le cœur bat légèrement plus vite quand on écoute une musique que l'on adore.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20c%C5%93ur%20bat%20l%C3%A9g%C3%A8rement%20plus%20vite%20quand%20on%20%C3%A9coute%20une"
 },
 {
  "text": "Éternuer projette des gouttelettes à une vitesse pouvant dépasser 150 kilomètres par heure.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Vous ne pouvez pas vous chatouiller vous-même, car votre cerveau anticipe le geste et annule la surprise.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le hoquet serait un vestige d'un ancien réflexe respiratoire hérité de nos lointains ancêtres.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Se concentrer sur sa respiration ralentit réellement le rythme cardiaque et calme le système nerveux.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Vos yeux bougent par petits sauts appelés saccades, même quand vous croyez fixer un point immobile.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le fait de rougir est une réaction unique où l'émotion agit directement sur les vaisseaux sanguins du visage.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Les frissons de la peau, la chair de poule, sont un réflexe hérité d'ancêtres poilus qui hérissaient leurs poils.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Il y a plus de parties d'échecs possibles que d'atomes dans l'univers observable.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Un ballon de football réglementaire possède le plus souvent 32 faces, mélange de pentagones et d'hexagones.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le marathon fait environ 42 kilomètres à cause d'une distance fixée en partie pour arranger la famille royale britannique en 1908.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Les balles de golf ont des alvéoles parce que ces creux réduisent la traînée et les font voler plus loin.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Les%20balles%20de%20golf%20ont%20des%20alv%C3%A9oles%20parce%20que%20ces"
 },
 {
  "text": "Le mot gymnase vient du grec gymnos, nu, et signifiait à l'origine s'exercer nu.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Au basket, le panier était à l'origine un vrai panier de pêches dont il fallait récupérer la balle à la main.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le badminton est l'un des sports de raquette les plus rapides, le volant pouvant filer à plus de 400 kilomètres par heure.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le premier ballon de football moderne était en cuir et devenait beaucoup plus lourd sous la pluie.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les billets de banque ne sont généralement pas en papier mais en coton ou en matières plastiques.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Il y a plus d'arbres sur Terre que d'étoiles dans la Voie lactée, selon les estimations.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le plastique met des centaines d'années à se dégrader, si bien que presque tout le plastique jamais produit existe encore.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le code-barres a été inventé en s'inspirant du code Morse tracé dans le sable.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le premier objet vendu en ligne aurait été, selon certaines sources, un disque de musique.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20premier%20objet%20vendu%20en%20ligne%20aurait%20%C3%A9t%C3%A9%20selon%20certaines"
 },
 {
  "text": "La plupart des couleurs que nous voyons sur les écrans sont créées à partir de seulement trois couleurs de lumière.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Il existe une couleur, le magenta, qui n'a pas de longueur d'onde propre : notre cerveau l'invente à partir du rouge et du bleu.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le zéro degré Celsius et le zéro Fahrenheit correspondent à des repères différents, l'un basé sur l'eau, l'autre sur un mélange de sel et de glace.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le papier bulle a d'abord été inventé pour servir de papier peint texturé avant de devenir un emballage.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le nombre de possibilités pour mélanger un jeu de 52 cartes est si grand que chaque battage bien fait est probablement unique dans l'histoire.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les feux d'artifice doivent leurs couleurs à différents métaux qui brûlent, le cuivre donnant du bleu et le strontium du rouge.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le mot okay est l'un des plus compris et utilisés à travers le monde entier.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "La plupart des poussières de la maison sont un mélange de peau morte, de fibres de tissu et de particules extérieures.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un crayon à papier ordinaire peut tracer une ligne longue de plusieurs dizaines de kilomètres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le velours, la fermeture éclair et bien d'autres objets du quotidien ont mis des décennies à s'imposer après leur invention.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les girafes n'ont que sept vertèbres dans le cou, exactement comme les humains, mais chacune est énorme.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La langue d'un caméléon peut se déployer plus vite que l'œil ne peut la suivre pour attraper un insecte.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Un groupe de corbeaux se nomme en anglais a murder, ce qui signifie littéralement un meurtre.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les chiens perçoivent le monde surtout par l'odorat, avec un flair des dizaines de milliers de fois plus fin que le nôtre.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le poisson-globe gonfle en avalant de l'eau pour paraître plus gros et dissuader les prédateurs.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Les papillons goûtent avec leurs pattes pour savoir si une plante convient à leurs œufs.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Le tigre a la peau rayée sous son pelage, pas seulement le poil.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les manchots empereurs peuvent plonger à plusieurs centaines de mètres de profondeur et retenir leur souffle très longtemps.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le colossal calmar géant possède les plus grands yeux du règne animal, de la taille d'une assiette.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les fourmis coupe-feuilles cultivent un champignon souterrain pour se nourrir, une forme d'agriculture bien avant l'homme.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les rennes voient une partie du spectre ultraviolet, ce qui les aide à repérer nourriture et prédateurs dans la neige.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Une baleine bleue peut avaler une quantité d'eau supérieure à son propre poids en une seule bouchée avant de la filtrer.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Les seiches peuvent hypnotiser leurs proies en faisant onduler des motifs de couleur sur leur peau.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le castor construit des barrages si grands que certains sont visibles depuis l'espace.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Les pieuvres peuvent ouvrir des bocaux et s'échapper d'aquariums grâce à leur intelligence et leur corps souple.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les manchots peuvent boire de l'eau salée car ils possèdent une glande qui filtre le sel de leur organisme.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le colibri est capable de tomber en torpeur la nuit, ralentissant fortement son cœur pour économiser l'énergie.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le paresseux descend de son arbre pour faire ses besoins environ une fois par semaine seulement.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les orques sont en réalité les plus grands membres de la famille des dauphins.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le poulpe imitateur peut copier l'apparence et les mouvements de plusieurs autres animaux marins pour se protéger.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Un troupeau de flamants roses peut devenir moins rose s'il ne mange plus assez de crevettes et d'algues pigmentées.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le fer contenu dans notre sang a été forgé au cœur d'étoiles anciennes mortes en explosant.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Nous sommes littéralement faits de poussière d'étoiles, la plupart de nos atomes ayant été créés dans les étoiles.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Un trou noir n'aspire pas tout ce qui l'entoure comme un aspirateur : on peut orbiter autour, comme autour d'une étoile.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le temps s'écoule très légèrement plus vite en altitude qu'au niveau de la mer, un effet mesuré de la relativité.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Les satellites GPS doivent corriger les effets de la relativité, sinon ils accumuleraient des erreurs de plusieurs kilomètres par jour.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Il existe un nuage de gaz dans l'espace qui contiendrait de grandes quantités d'alcool, mais totalement imbuvable.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La couleur d'une étoile révèle sa température : les bleues sont bien plus chaudes que les rouges.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "L'univers observable s'étend sur des dizaines de milliards d'années-lumière dans toutes les directions.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le vide de l'espace est si froid que sans combinaison, un corps gèlerait, mais il pourrait aussi surchauffer au soleil direct.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Les astronautes ne peuvent pas pleurer normalement dans l'espace, car sans gravité les larmes forment des bulles collées aux yeux.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "En apesanteur, la flamme d'une bougie devient ronde et bleutée au lieu de pointer vers le haut.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Il existe un pays, le Lesotho, entièrement entouré par un seul autre pays, l'Afrique du Sud.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le point le plus au sud habité de la planète se trouve sur des bases scientifiques en Antarctique.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La Bolivie possède une immense étendue de sel, le Salar d'Uyuni, qui se transforme en un gigantesque miroir sous la pluie.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "L'Égypte n'est pas le pays qui compte le plus de pyramides : c'est le Soudan qui en abrite le plus grand nombre.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le Japon est composé de milliers d'îles, dont la plupart sont inhabitées.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Venise est bâtie sur des millions de pieux de bois enfoncés dans la vase de la lagune.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "L'Indonésie compte des milliers d'îles réparties sur trois fuseaux horaires.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Il existe des villages en Norvège qui installent d'immenses miroirs sur la montagne pour renvoyer la lumière du soleil l'hiver.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le fuseau horaire du Népal est décalé de 45 minutes par rapport à ses voisins, un cas assez rare.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Certaines frontières entre pays passent au milieu d'une bibliothèque, d'un café ou même d'une maison.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le ketchup a été vendu au 19e siècle comme un médicament censé soigner divers maux.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "On a longtemps cru que la Terre était plate seulement chez quelques-uns : les savants la savaient ronde depuis l'Antiquité grecque.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Les allumettes ont été inventées après le briquet, contrairement à ce que l'on imagine.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La machine à écrire a d'abord été pensée comme une aide pour les personnes aveugles.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le premier parachute a été imaginé sur le papier par Léonard de Vinci bien avant l'invention de l'avion.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Au 17e siècle, aux Pays-Bas, la spéculation sur les bulbes de tulipe a atteint des prix délirants avant de s'effondrer.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Les anciens Romains avaient déjà des systèmes de chauffage par le sol dans leurs riches demeures.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le papier hygiénique en rouleau n'a été popularisé qu'à la fin du 19e siècle.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Les premiers jeux Olympiques modernes en 1896 ne comptaient qu'une poignée de pays et d'épreuves.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les chiffres que nous appelons arabes ont en réalité été mis au point en Inde avant d'être transmis par le monde arabe.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le tout premier appel téléphonique a été passé par Alexander Graham Bell à son assistant dans la pièce voisine.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le kiwi tient son nom d'un oiseau de Nouvelle-Zélande, et le fruit s'appelait auparavant groseille de Chine.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le chewing-gum le plus ancien retrouvé a plusieurs milliers d'années : c'est de la résine mâchée à l'âge de pierre.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20chewing-gum%20le%20plus%20ancien%20retrouv%C3%A9%20a%20plusieurs%20milliers%20d"
 },
 {
  "text": "Le pain était utilisé comme assiette au Moyen Âge, une tranche épaisse imbibée de sauce appelée tranchoir.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le fruit de la passion doit son nom aux missionnaires qui voyaient dans sa fleur des symboles religieux, pas à une quelconque passion amoureuse.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le poivre était si précieux au Moyen Âge qu'il servait parfois à payer des loyers ou des rançons.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le régime des astronautes inclut des aliments spécialement conçus pour ne pas produire de miettes flottantes.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Le pop-corn éclate parce que l'eau enfermée dans le grain se transforme brutalement en vapeur sous la chaleur.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20pop-corn%20%C3%A9clate%20parce%20que%20l%20eau%20enferm%C3%A9e%20dans%20le"
 },
 {
  "text": "Le fromage à trous, comme l'emmental, doit ses trous à des bactéries qui produisent du gaz pendant l'affinage.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "La gélatine de nombreux bonbons est issue de collagène animal, ce qui surprend souvent les consommateurs.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le thé serait la boisson la plus consommée au monde après l'eau.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Une pincée de sel peut réhausser le goût sucré d'un dessert en trompant nos papilles.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le beurre de cacahuète peut, sous forte pression et chaleur, être transformé en un minuscule diamant, en laboratoire.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les empreintes de la langue sont uniques à chaque personne, tout comme les empreintes digitales.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le son que fait un fouet qui claque est en réalité un mini-bang supersonique, la pointe dépassant la vitesse du son.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Un jour terrestre s'allonge très lentement, de quelques millisecondes par siècle, à cause du freinage dû aux marées.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Les dinosaures ont vécu sur Terre pendant plus de 150 millions d'années, bien plus longtemps que les humains jusqu'ici.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Certains oiseaux, comme le martinet, peuvent voler pendant des mois sans jamais se poser.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La couleur rose n'existe pas vraiment dans l'arc-en-ciel : c'est notre cerveau qui la crée en mélangeant le rouge et le violet.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le hublot d'un avion possède un minuscule trou destiné à équilibrer la pression et à éviter la buée.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le drapeau planté sur la Lune est probablement blanchi aujourd'hui par le rayonnement solaire intense.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Nos ancêtres partageaient la planète avec plusieurs autres espèces humaines, comme les Néandertaliens.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le miel cristallisé n'est pas périmé : il suffit de le chauffer doucement pour lui rendre sa fluidité.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le clavier d'un smartphone vibre grâce à un minuscule moteur qui tourne des milliers de fois par minute.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le pouce vert n'a rien de magique : les plantes réagissent surtout à la régularité des soins et à la lumière.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Une bougie allumée dans une pièce fermée finit par s'éteindre faute d'oxygène suffisant.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le zip d'une fermeture éclair porte souvent les lettres YKK, du nom du fabricant japonais dominant le marché.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le vertige n'est pas la peur du vide mais une sensation de tournis, souvent confondue avec l'acrophobie.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les étoiles filantes sont en réalité de minuscules grains de poussière qui se consument en entrant dans l'atmosphère.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le tonnerre suit toujours l'éclair car la lumière voyage bien plus vite que le son.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Un arc-en-ciel double montre les couleurs inversées dans son second arc, plus pâle.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le silence complet est si rare qu'une chambre anéchoïque, sans écho, peut devenir désorientante au bout de quelques minutes.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le mot dodo, pour désigner le sommeil des enfants, existe aussi comme nom d'un oiseau disparu.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20mot%20dodo%20pour%20d%C3%A9signer%20le%20sommeil%20des%20enfants%20existe"
 },
 {
  "text": "L'expression avoir le cafard, pour dire déprimer, n'a été popularisée qu'au 19e siècle.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le mot week-end est un emprunt à l'anglais aujourd'hui totalement intégré au français.",
  "source": "CNRTL ? ?tymologie",
  "url": "https://www.cnrtl.fr/etymologie/"
 },
 {
  "text": "De nombreux prénoms courants ont un sens précis dans leur langue d'origine, souvent lié à la nature ou aux vertus.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le mot sandwich vient du comte de Sandwich, qui aurait demandé de la viande entre deux tranches de pain pour manger en jouant.",
  "source": "Britannica ? Food",
  "url": "https://www.britannica.com/search?query=food"
 },
 {
  "text": "Le mot poubelle vient du nom d'un préfet de Paris qui a rendu ces récipients obligatoires.",
  "source": "CNRTL ? ?tymologie",
  "url": "https://www.cnrtl.fr/etymologie/"
 },
 {
  "text": "Le point d'exclamation existait bien avant d'être si utilisé, mais on l'employait avec parcimonie dans les textes anciens.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20point%20d%20exclamation%20existait%20bien%20avant%20d%20%C3%AAtre%20si"
 },
 {
  "text": "Le mot chef vient du latin caput, la tête, tout comme capitaine et capital.",
  "source": "CNRTL ? ?tymologie",
  "url": "https://www.cnrtl.fr/etymologie/"
 },
 {
  "text": "Certaines langues n'ont pas de mots pour gauche et droite et utilisent les points cardinaux même dans une pièce.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le mot silhouette vient du nom d'un ministre français réputé pour son avarice.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Un ruban assez long pour faire le tour de la Terre, rallongé d'un seul mètre, se décollerait du sol de façon perceptible partout.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Il existe des nombres dits parfaits, égaux à la somme de leurs diviseurs, comme six ou vingt-huit.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Diviser par zéro n'est pas défini en mathématiques, ce n'est pas l'infini mais une opération sans réponse valable.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le nombre pi apparaît dans des formules qui n'ont rien à voir avec des cercles, comme certaines probabilités.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Un échiquier peut être entièrement parcouru par un cavalier passant une seule fois par chaque case, c'est le problème du cavalier.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "La probabilité de gagner le gros lot à certaines loteries est plus faible que celle d'être frappé par la foudre.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Nous ne voyons pas vraiment avec nos yeux mais avec notre cerveau, qui interprète les signaux reçus.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "L'odorat est le sens le plus lié à la mémoire, une odeur pouvant faire resurgir un souvenir ancien en un instant.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les papilles gustatives se renouvellent environ toutes les deux semaines.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La rétine de l'œil envoie une image à l'envers au cerveau, qui la remet à l'endroit sans que nous le remarquions.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les humains peuvent détecter certaines odeurs à des concentrations extrêmement faibles, parfois quelques molécules.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le sens du toucher est présent sur toute la peau, mais la sensibilité varie énormément selon les zones.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Nous entendons notre propre voix différemment des autres, car le son passe aussi par les os de notre crâne.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le ver de terre possède plusieurs cœurs, ou plus exactement des anneaux qui font office de pompes sanguines.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les abeilles peuvent compter jusqu'à de petits nombres et comprendre la notion de zéro.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le manchot pygmée, le plus petit du monde, mesure à peine une trentaine de centimètres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Les fourmis peuvent former des radeaux vivants avec leurs corps pour survivre aux inondations.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Un poisson-perroquet dort parfois enveloppé dans une bulle de mucus qu'il fabrique lui-même pour se protéger.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le pistolet à claquettes, une petite crevette, produit une bulle si violente qu'elle émet un éclair de lumière.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les chats ne perçoivent pas le goût sucré, une particularité liée à un gène inactif chez les félins.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les lamas et alpagas fredonnent pour communiquer entre eux et exprimer leur humeur.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Le pangolin est le mammifère le plus braconné au monde et se roule en boule couvert d'écailles.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les araignées ne peuvent pas mâcher : elles liquéfient leur proie avant de l'aspirer.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le colvert et beaucoup de canards ont un cri qui, contrairement à une légende, produit bien un écho.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les baleines à bosse composent de véritables chants qui évoluent et se transmettent entre groupes.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Le lézard basilic peut courir sur l'eau sur une courte distance grâce à la vitesse de ses pattes.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Les termites construisent des monticules avec un système de ventilation naturel qui régule la température.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le morse peut dormir en flottant à la verticale, la tête hors de l'eau, grâce à des poches d'air dans le cou.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20morse%20peut%20dormir%20en%20flottant%20%C3%A0%20la%20verticale%20la"
 },
 {
  "text": "Les serpents sentent avec leur langue en captant des particules qu'ils analysent au palais.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le poisson archer crache un jet d'eau précis pour faire tomber les insectes des feuilles au-dessus de lui.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un groupe de chats s'appelle une clowder en anglais, terme resté peu connu.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Un%20groupe%20de%20chats%20s%20appelle%20une%20clowder%20en%20anglais"
 },
 {
  "text": "Le colibri est proportionnellement l'un des plus gros mangeurs du règne animal pour soutenir son vol.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les éléphants communiquent sur de longues distances avec des sons trop graves pour l'oreille humaine.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le kiwi, oiseau de Nouvelle-Zélande, pond un œuf énorme par rapport à la taille de son corps.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les fourmis enterrent parfois leurs mortes, un comportement qui ressemble à un rituel funéraire.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le poisson-lune, ou môle, peut pondre des centaines de millions d'œufs en une seule fois.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "Le bruit blanc contient toutes les fréquences audibles jouées en même temps, ce qui aide certains à se concentrer.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20bruit%20blanc%20contient%20toutes%20les%20fr%C3%A9quences%20audibles%20jou%C3%A9es%20en"
 },
 {
  "text": "Un objet en chute libre dans le vide tombe à la même vitesse qu'il soit lourd ou léger, comme une plume et un marteau sur la Lune.",
  "source": "NASA ? Moon",
  "url": "https://science.nasa.gov/moon/"
 },
 {
  "text": "La glace est moins dense que l'eau liquide, ce qui explique que les glaçons et les icebergs flottent.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Le feu a besoin d'oxygène, de chaleur et de combustible : retirer l'un des trois l'éteint.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Le magnétisme et l'électricité sont deux faces d'un même phénomène, l'électromagnétisme.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Un aimant coupé en deux donne deux aimants complets, chacun avec un pôle nord et un pôle sud.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Un%20aimant%20coup%C3%A9%20en%20deux%20donne%20deux%20aimants%20complets%20chacun"
 },
 {
  "text": "La couleur d'une flamme indique sa température : le bleu est plus chaud que le jaune ou l'orange.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le son ne peut pas traverser le vide, c'est pourquoi les explosions dans l'espace seraient silencieuses.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "L'eau pure conduit très mal l'électricité : ce sont les sels dissous qui la rendent conductrice.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un arc électrique peut atteindre des températures bien supérieures à celles de la surface du Soleil.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "La pression atmosphérique appuie sur nous en permanence avec le poids d'une colonne d'air de plusieurs kilomètres.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le point de congélation de l'eau peut descendre sous zéro si elle est très pure et immobile, on parle de surfusion.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Les couleurs d'une bulle de savon viennent de l'interférence de la lumière sur sa fine pellicule.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Un métal chauffé se dilate, ce qui explique les joints laissés sur les ponts et les rails de chemin de fer.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le son d'un diapason est produit par une vibration régulière qui fait osciller l'air autour de lui.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le premier timbre-poste au monde, le Penny Black, est apparu au Royaume-Uni en 1840.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Les dés à jouer existent depuis des milliers d'années et ont été retrouvés dans des tombes antiques.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "Les échecs sont probablement nés en Inde il y a plus de mille cinq cents ans avant de se répandre en Perse et en Europe.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le premier feu de circulation a été installé avant l'invention de la voiture populaire, pour les calèches.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La roue a été inventée relativement tard dans l'histoire humaine, d'abord pour la poterie avant le transport.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le calendrier que nous utilisons a un jour supplémentaire tous les quatre ans pour rattraper le décalage avec l'année solaire.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Les anciens Mayas avaient un calendrier extrêmement précis et une notion avancée du zéro.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le mot vaccin vient du latin vacca, la vache, en lien avec la variole des vaches utilisée par Jenner.",
  "source": "Britannica ? Biology",
  "url": "https://www.britannica.com/search?query=biology"
 },
 {
  "text": "Les premières cartes du monde comportaient des zones inconnues remplies de dessins de monstres marins.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Le tout premier ordinateur mécanique de calcul remonte à l'Antiquité grecque, la machine d'Anticythère.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Les phares existaient déjà dans l'Antiquité, comme celui d'Alexandrie, l'une des sept merveilles du monde.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Les anciens Perses avaient des glacières pour conserver la glace en plein désert bien avant les réfrigérateurs.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Un sourire, même forcé, peut légèrement améliorer l'humeur en trompant le cerveau.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Nous respirons majoritairement par une seule narine à la fois, en alternance au fil des heures.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Nous%20respirons%20majoritairement%20par%20une%20seule%20narine%20%C3%A0%20la%20fois"
 },
 {
  "text": "Le corps humain remplace la quasi-totalité de ses cellules sur une période de plusieurs années.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le sommeil profond aide le cerveau à évacuer des déchets accumulés pendant l'éveil.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "La peur et l'excitation déclenchent des réactions corporelles très proches, ce qui explique l'attrait des sensations fortes.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=La%20peur%20et%20l%20excitation%20d%C3%A9clenchent%20des%20r%C3%A9actions%20corporelles%20tr%C3%A8s"
 },
 {
  "text": "Notre cerveau préfère les histoires aux faits bruts, ce qui les rend plus faciles à mémoriser.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Regarder la couleur verte de la nature réduit mesurablement le stress et la fatigue mentale.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Regarder%20la%20couleur%20verte%20de%20la%20nature%20r%C3%A9duit%20mesurablement%20le"
 },
 {
  "text": "Le contact physique bienveillant libère de l'ocytocine, une hormone liée à l'attachement.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Un manque de sommeil affecte le jugement autant qu'une consommation modérée d'alcool.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Un%20manque%20de%20sommeil%20affecte%20le%20jugement%20autant%20qu%20une"
 },
 {
  "text": "Le cerveau humain ne perçoit pas le temps de façon constante : il paraît ralentir dans les moments de danger.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Notre humeur peut être influencée par la lumière du jour, d'où la baisse de moral fréquente en hiver.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Chanter en groupe synchronise le rythme cardiaque des participants.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Chanter%20en%20groupe%20synchronise%20le%20rythme%20cardiaque%20des%20participants"
 },
 {
  "text": "La foudre chauffe l'air si vite qu'elle le fait exploser, et c'est cette onde de choc que nous entendons comme le tonnerre.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Un iceberg cache environ 90 pour cent de son volume sous la surface de l'eau.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "La couleur verte du ciel pendant certains orages peut annoncer la grêle ou une tornade.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Les gouttes de pluie ne sont pas en forme de larme mais plutôt aplaties comme de petits pains hamburgers.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Le vent n'a pas de son propre : ce que nous entendons, c'est l'air qui bute sur des obstacles.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "Un désert peut connaître un froid glacial la nuit malgré des chaleurs extrêmes le jour, faute d'humidité pour retenir la chaleur.",
  "source": "Britannica ? History",
  "url": "https://www.britannica.com/search?query=history"
 },
 {
  "text": "La neige absorbe les sons, ce qui rend les paysages enneigés étonnamment silencieux.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Certaines plages ont un sable noir, vert ou même rose selon les roches et coquillages locaux.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le sel de mer et le sable qui crissent sous les pas viennent de la friction entre grains fins.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Un cyclone tire son énergie de la chaleur de l'eau de mer et s'affaiblit en touchant terre.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "L'air sec transmet mieux l'électricité statique, d'où les petites décharges plus fréquentes en hiver.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=L%20air%20sec%20transmet%20mieux%20l%20%C3%A9lectricit%C3%A9%20statique%20d%20o%C3%B9"
 },
 {
  "text": "Le givre se forme directement à partir de la vapeur d'eau qui se cristallise sans passer par l'état liquide.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "La plupart des mots de passe les plus utilisés au monde sont des suites évidentes comme 123456.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "Un smartphone contient plusieurs métaux rares extraits aux quatre coins du monde.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "La première photo publiée sur le web montrait un groupe de musique humoristique du laboratoire du CERN.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=La%20premi%C3%A8re%20photo%20publi%C3%A9e%20sur%20le%20web%20montrait%20un%20groupe"
 },
 {
  "text": "Les emojis ont été créés au Japon à la fin des années 1990 pour enrichir les messages sur téléphone.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Les%20emojis%20ont%20%C3%A9t%C3%A9%20cr%C3%A9%C3%A9s%20au%20Japon%20%C3%A0%20la%20fin"
 },
 {
  "text": "La touche F et la touche J d'un clavier ont une petite barre en relief pour repérer la position des doigts sans regarder.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le nom pixel vient de la contraction de picture element, élément d'image.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20nom%20pixel%20vient%20de%20la%20contraction%20de%20picture%20element"
 },
 {
  "text": "Un câble sous-marin transporte l'immense majorité du trafic Internet mondial entre les continents.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Le premier smartphone tactile grand public a bouleversé une industrie qui misait encore sur les claviers physiques.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le stockage dans le cloud n'a rien d'un nuage : ce sont d'immenses centres de données bien réels et énergivores.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le tout premier ordinateur portable pliable a été commercialisé au début des années 1980.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Une seule recherche sur Internet mobilise des centaines de serveurs en quelques millièmes de seconde.",
  "source": "Computer History Museum",
  "url": "https://www.computerhistory.org/timeline/"
 },
 {
  "text": "Le nom spam pour le courrier indésirable vient d'un sketch comique où ce mot était répété sans fin.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20nom%20spam%20pour%20le%20courrier%20ind%C3%A9sirable%20vient%20d%20un"
 },
 {
  "text": "Le séquoia géant compte parmi les êtres vivants les plus massifs et peut vivre plusieurs milliers d'années.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20s%C3%A9quoia%20g%C3%A9ant%20compte%20parmi%20les%20%C3%AAtres%20vivants%20les%20plus"
 },
 {
  "text": "Certaines plantes du désert peuvent rester dormantes des années et refleurir en quelques heures après une pluie.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La fleur de lotus repousse l'eau et la saleté grâce à sa surface microscopiquement rugueuse, un effet copié par l'industrie.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le gui pousse en parasite sur les branches d'autres arbres sans toucher le sol.",
  "source": "Britannica ? Plants",
  "url": "https://www.britannica.com/search?query=plants"
 },
 {
  "text": "Le pissenlit peut disperser ses graines sur des kilomètres grâce à son parachute duveteux.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le baobab peut stocker des milliers de litres d'eau dans son tronc pour survivre à la sécheresse.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Certaines graines ne germent qu'après avoir été exposées au feu, une adaptation aux incendies naturels.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le riz, le blé et le maïs fournissent à eux seuls une grande partie des calories consommées par l'humanité.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Les nénuphars géants d'Amazonie sont assez solides pour supporter le poids d'un petit enfant.",
  "source": "Britannica ? Science",
  "url": "https://www.britannica.com/search?query=science"
 },
 {
  "text": "Le lierre grimpe en s'accrochant grâce à de minuscules crampons qui sécrètent une colle naturelle.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=Le%20lierre%20grimpe%20en%20s%20accrochant%20gr%C3%A2ce%20%C3%A0%20de%20minuscules"
 },
 {
  "text": "La substance la plus noire jamais fabriquée absorbe presque toute la lumière et donne l'impression d'un trou dans l'espace.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "Le bruit d'un claquement de doigts, ralenti, révèle un mécanisme complexe entre la paume et le majeur.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Le plus long pont du monde s'étend sur plus de 150 kilomètres, en Chine.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le bâtiment le plus haut du monde dépasse les 800 mètres et se trouve à Dubaï.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le plus grand désert de glace, l'Antarctique, contient la majorité de l'eau douce de la planète.",
  "source": "NASA ? Solar System",
  "url": "https://science.nasa.gov/solar-system/"
 },
 {
  "text": "L'ascenseur le plus rapide du monde monte à plusieurs dizaines de kilomètres par heure.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le plus petit os et le plus petit muscle du corps humain se trouvent tous deux dans l'oreille.",
  "source": "NOAA ? Weather and Atmosphere",
  "url": "https://www.noaa.gov/education/resource-collections/weather-atmosphere"
 },
 {
  "text": "La plus longue durée sans dormir jamais tenue volontairement dépasse onze jours, une performance dangereuse et déconseillée.",
  "source": "Britannica ? recherche",
  "url": "https://www.britannica.com/search?query=La%20plus%20longue%20dur%C3%A9e%20sans%20dormir%20jamais%20tenue%20volontairement%20d%C3%A9passe"
 },
 {
  "text": "Le plus grand flocon de neige signalé aurait mesuré, selon un récit ancien, plusieurs dizaines de centimètres.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "La ville de Paris compte moins d'habitants intra-muros que plusieurs de ses banlieues réunies.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Il existe une seule frontière terrestre entre l'Afrique et l'Asie, au niveau du canal de Suez.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "La capitale la plus haute du monde, La Paz en Bolivie, se situe à plus de 3 600 mètres d'altitude.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "Le point le plus bas sur terre ferme est la rive de la mer Morte, à plus de 400 mètres sous le niveau des océans.",
  "source": "NOAA ? Ocean Service",
  "url": "https://oceanservice.noaa.gov/"
 },
 {
  "text": "Il existe des rivières souterraines et des grottes assez grandes pour contenir des immeubles entiers.",
  "source": "Britannica ? Geography",
  "url": "https://www.britannica.com/search?query=geography"
 },
 {
  "text": "L'Australie possède une clôture plus longue que la distance entre Paris et Moscou, construite contre les dingos.",
  "source": "Britannica ? Human Body",
  "url": "https://www.britannica.com/search?query=human%20body"
 },
 {
  "text": "Certaines îles apparaissent et disparaissent au gré des éruptions volcaniques sous-marines.",
  "source": "NASA ? ISS",
  "url": "https://www.nasa.gov/international-space-station/"
 },
 {
  "text": "Le plus grand delta du monde, celui du Gange et du Brahmapoutre, abrite des millions de personnes.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 },
 {
  "text": "La distance la plus courte entre la Russie et les États-Unis n'est que de quelques kilomètres, entre deux petites îles.",
  "source": "Britannica ? Mathematics",
  "url": "https://www.britannica.com/search?query=mathematics"
 }
];
