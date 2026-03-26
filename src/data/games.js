export const games = [
  {
    id: 1,
    slug: "elden-ring",
    title: "Elden Ring",
    titleRu: "Elden Ring",
    description: "Масштабная action-RPG от создателей Dark Souls и автора «Игры престолов» Джорджа Мартина. Откройте для себя огромный открытый мир Междуземья, полный опасностей, тайн и величественных боссов. Игра предлагает глубокую систему прокачки, разнообразное оружие и магию. Свобода исследования позволяет проходить локации в любом порядке. Одна из самых высоко оценённых игр последних лет.",
    shortDescription: "Эпическая action-RPG в открытом мире от создателей Dark Souls.",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2022-02-25",
    price: 3999,
    discountPercent: 20,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "SoulsLike", "Экшен"],
    metacriticScore: 96,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1245620/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10", processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X", memory: "12 GB RAM", graphics: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB", storage: "60 GB" },
      recommended: { os: "Windows 10/11", processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB", storage: "60 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["открытый мир", "тёмное фэнтези", "сложная", "кооператив"]
  },

  {
    id: 2,
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    titleRu: "Baldur's Gate 3",
    description: "Эпическая RPG от студии Larian Studios по правилам Dungeons & Dragons 5-й редакции. Соберите отряд уникальных спутников и отправляйтесь в грандиозное приключение в Забытых Королевствах. Каждое ваше решение влияет на развитие сюжета и отношения с персонажами. Игра предлагает глубокую тактическую пошаговую боевую систему. Один из лучших RPG-проектов в истории жанра.",
    shortDescription: "Легендарная RPG по правилам D&D с глубоким сюжетом и свободой выбора.",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    releaseDate: "2023-08-03",
    price: 3999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Инди"],
    metacriticScore: 96,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1086940/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-4690 / AMD FX-8350", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 480 4GB", storage: "150 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 Super / AMD Radeon RX 5700 XT", storage: "150 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["пошаговая", "D&D", "сюжетная", "кооператив"]
  },

  {
    id: 3,
    slug: "the-witcher-3-wild-hunt",
    title: "The Witcher 3: Wild Hunt",
    titleRu: "Ведьмак 3: Дикая Охота",
    description: "Культовая ролевая игра от CD Projekt RED по мотивам книг Анджея Сапковского. Вы играете за Геральта из Ривии — охотника на чудовищ, который ищет свою приёмную дочь Цири. Огромный открытый мир полон интересных квестов, колоритных персонажей и моральных дилемм. Боевая система сочетает фехтование и магические знаки. Одна из лучших RPG всех времён с двумя масштабными дополнениями.",
    shortDescription: "Легендарная RPG про ведьмака Геральта в огромном открытом мире.",
    developer: "CD Projekt RED",
    publisher: "CD Projekt",
    releaseDate: "2015-05-19",
    price: 1499,
    discountPercent: 50,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Экшен"],
    metacriticScore: 92,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/292030/",
      psStore: "https://store.playstation.com/ru-ua/product/EP4497-PPSA04021_00-0000000000GOTY11",
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i5-2500K / AMD Phenom II X4 940", memory: "6 GB RAM", graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870", storage: "50 GB" },
      recommended: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i7-3770 / AMD FX-8350", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 770 / AMD Radeon R9 290", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["открытый мир", "фэнтези", "сюжетная", "выбор"]
  },

  {
    id: 4,
    slug: "starfield",
    title: "Starfield",
    titleRu: "Starfield",
    description: "Космическая RPG от Bethesda Game Studios — создателей The Elder Scrolls и Fallout. Исследуйте более тысячи планет в огромной галактике, создавайте корабли и базы. Сюжет посвящён поиску загадочных артефактов древней цивилизации. Игра сочетает классический RPG-геймплей Bethesda с космическими путешествиями. Масштабный проект с сотнями часов контента.",
    shortDescription: "Космическая RPG от создателей Skyrim и Fallout с тысячами планет.",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseDate: "2023-09-06",
    price: 4999,
    discountPercent: 0,
    platforms: ["pc", "xbox"],
    genres: ["RPG", "Экшен"],
    metacriticScore: 83,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1716740/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 21H1", processor: "AMD Ryzen 5 2600X / Intel Core i7-6800K", memory: "16 GB RAM", graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070 Ti", storage: "125 GB SSD" },
      recommended: { os: "Windows 10/11", processor: "AMD Ryzen 5 3600X / Intel Core i5-10600K", memory: "16 GB RAM", graphics: "AMD Radeon RX 6800 XT / NVIDIA GeForce RTX 2080", storage: "125 GB SSD" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["космос", "открытый мир", "исследование", "строительство"]
  },

  {
    id: 5,
    slug: "diablo-iv",
    title: "Diablo IV",
    titleRu: "Diablo IV",
    description: "Четвёртая часть легендарной серии action-RPG от Blizzard Entertainment. Мрачный мир Санктуария вновь нуждается в героях, способных противостоять силам тьмы. Игра предлагает пять классов, общий открытый мир и глубокую систему прокачки. Динамичная боевая система и процедурно генерируемые подземелья не дают заскучать. Мрачная атмосфера и зрелый сюжет возвращают серию к истокам.",
    shortDescription: "Мрачная action-RPG с открытым миром от Blizzard в легендарной серии.",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    releaseDate: "2023-06-06",
    price: 4999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Экшен"],
    metacriticScore: 86,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/2344520/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-4670K / AMD Ryzen 3 1300X", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 470", storage: "90 GB SSD" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-8400 / AMD Ryzen 5 2600X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT", storage: "90 GB SSD" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["hack and slash", "тёмное фэнтези", "мультиплеер", "лут"]
  },

  {
    id: 6,
    slug: "final-fantasy-xvi",
    title: "Final Fantasy XVI",
    titleRu: "Final Fantasy XVI",
    description: "Шестнадцатая номерная часть легендарной серии от Square Enix. Мрачная и зрелая история Клайва Розфилда разворачивается в мире Валистеи, где кристаллы являются источником магии. Боевая система полностью экшен-ориентирована с эффектными комбо и призывами Эйконов. Потрясающая графика и кинематографичная постановка впечатляют. Одна из лучших частей серии по мнению критиков.",
    shortDescription: "Масштабная action-RPG в мрачном фэнтези-мире от Square Enix.",
    developer: "Square Enix",
    publisher: "Square Enix",
    releaseDate: "2023-12-17",
    price: 4499,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["RPG", "Экшен"],
    metacriticScore: 76,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2515020/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/2515020/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10/11 64-bit", processor: "AMD Ryzen 5 1600 / Intel Core i5-8400", memory: "16 GB RAM", graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070", storage: "170 GB SSD" },
      recommended: { os: "Windows 10/11 64-bit", processor: "AMD Ryzen 7 5700X / Intel Core i7-10700", memory: "16 GB RAM", graphics: "AMD Radeon RX 6700 XT / NVIDIA GeForce RTX 2080", storage: "170 GB SSD" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["фэнтези", "сюжетная", "эпическая", "боссы"]
  },

  {
    id: 7,
    slug: "persona-5-royal",
    title: "Persona 5 Royal",
    titleRu: "Persona 5 Royal",
    description: "Расширенное издание культовой японской RPG от студии Atlus. Вы — старшеклассник, который вместе с друзьями может проникать в сердца злодеев через параллельное измерение. Днём вы учитесь, заводите друзей и подрабатываете, а ночью сражаетесь с тенями. Стильный визуальный дизайн и потрясающий саундтрек создают уникальную атмосферу. Royal-версия добавляет нового персонажа, семестр и множество улучшений.",
    shortDescription: "Стильная японская RPG о старшеклассниках-ворах сердец.",
    developer: "Atlus",
    publisher: "SEGA",
    releaseDate: "2022-10-21",
    price: 3499,
    discountPercent: 40,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Казуальная"],
    metacriticScore: 95,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1687950/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10", processor: "Intel Core i7-4790 / AMD Ryzen 5 1500X", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 650 Ti / AMD Radeon HD 7850", storage: "41 GB" },
      recommended: { os: "Windows 10", processor: "Intel Core i7-4790 / AMD Ryzen 5 1500X", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 760 / AMD Radeon HD 7870", storage: "41 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["JRPG", "пошаговая", "стильная", "аниме"]
  },

  {
    id: 8,
    slug: "gta-v",
    title: "Grand Theft Auto V",
    titleRu: "Grand Theft Auto V",
    description: "Культовая игра с открытым миром от Rockstar Games, действие которой происходит в вымышленном городе Лос-Сантос. Три играбельных персонажа — Майкл, Тревор и Франклин — объединяются для серии дерзких ограблений. GTA Online предлагает бесконечный мультиплеерный контент с регулярными обновлениями. Огромный город живёт своей жизнью, предлагая десятки активностей. Самая продаваемая игра в истории индустрии.",
    shortDescription: "Легендарный экшен с открытым миром в криминальном Лос-Сантосе.",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    releaseDate: "2015-04-14",
    price: 1499,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "Шутер"],
    metacriticScore: 96,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/271590/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 8.1 64-bit", processor: "Intel Core 2 Quad Q6600 / AMD Phenom 9850", memory: "4 GB RAM", graphics: "NVIDIA GeForce 9800 GT 1GB / AMD Radeon HD 4870 1GB", storage: "72 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-3470 / AMD FX-8350", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7870 2GB", storage: "72 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["открытый мир", "криминал", "мультиплеер", "ограбления"]
  },

  {
    id: 9,
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    titleRu: "Red Dead Redemption 2",
    description: "Эпический вестерн от Rockstar Games о закате эпохи Дикого Запада. Вы играете за Артура Моргана — члена банды Датча ван дер Линде, вынужденного бежать после неудачного ограбления. Потрясающий открытый мир невероятно детализирован и наполнен жизнью. Глубокий эмоциональный сюжет считается одним из лучших в истории видеоигр. Игра задаёт новые стандарты качества для жанра.",
    shortDescription: "Эпический вестерн с невероятно детализированным открытым миром.",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2019-12-05",
    price: 2999,
    discountPercent: 25,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен"],
    metacriticScore: 86,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1174180/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10", processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X", memory: "12 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB", storage: "150 GB" },
      recommended: { os: "Windows 10", processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X", memory: "12 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB", storage: "150 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["вестерн", "открытый мир", "сюжетная", "реализм"]
  },

  {
    id: 10,
    slug: "devil-may-cry-5",
    title: "Devil May Cry 5",
    titleRu: "Devil May Cry 5",
    description: "Стильный слешер от Capcom, продолжающий историю легендарной серии. Три играбельных персонажа — Данте, Неро и Ви — предлагают кардинально разный игровой опыт. Безумные комбо, зрелищные приёмы и рейтинговая система мотивируют к стильной игре. Движок RE Engine обеспечивает потрясающую графику и плавный геймплей. Лучшая часть серии Devil May Cry по мнению многих фанатов.",
    shortDescription: "Зрелищный слешер с тремя уникальными играбельными персонажами.",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2019-03-08",
    price: 1999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "Слешер"],
    metacriticScore: 88,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/601150/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i5-4460 / AMD FX-6300", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 760 / AMD Radeon R7 260X", storage: "35 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-3770 / AMD FX-9590", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480", storage: "35 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["слешер", "стильный", "комбо", "демоны"]
  },

  {
    id: 11,
    slug: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice",
    titleRu: "Sekiro: Shadows Die Twice",
    description: "Хардкорный экшен от FromSoftware в сеттинге феодальной Японии. Вы играете за однорукого синоби Волка, который должен спасти своего молодого лорда. Уникальная система боя построена на парировании и отклонении ударов противника. Протез-крюк открывает вертикальное перемещение и новые тактические возможности. Игра получила премию «Игра года» на The Game Awards 2019.",
    shortDescription: "Хардкорный экшен о синоби в феодальной Японии от создателей Dark Souls.",
    developer: "FromSoftware",
    publisher: "Activision",
    releaseDate: "2019-03-22",
    price: 2999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "SoulsLike"],
    metacriticScore: 90,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/814380/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i3-2100 / AMD FX-6300", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTX 760 / AMD Radeon HD 7950", storage: "25 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-2500K / AMD Ryzen 5 1400", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 570", storage: "25 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["Япония", "синоби", "сложная", "парирование"]
  },

  {
    id: 12,
    slug: "ghost-of-tsushima",
    title: "Ghost of Tsushima",
    titleRu: "Ghost of Tsushima",
    description: "Эпический экшен от Sucker Punch Productions о монгольском вторжении на остров Цусима в 1274 году. Самурай Дзин Сакай должен отбросить захватчиков, даже если для этого придётся отказаться от кодекса чести. Потрясающий открытый мир вдохновлён японскими пейзажами и фильмами Акиры Куросавы. Боевая система позволяет выбирать между честным боем и тактикой призрака. Director's Cut включает дополнительный остров Ики.",
    shortDescription: "Самурайский экшен в открытом мире на острове Цусима.",
    developer: "Sucker Punch Productions",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2024-05-16",
    price: 3999,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Экшен"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/2215430/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i3-7100 / AMD Ryzen 3 1200", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 960 / AMD Radeon RX 5500 XT", storage: "75 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600 / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT", storage: "75 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["самурай", "Япония", "открытый мир", "стелс"]
  },

  {
    id: 13,
    slug: "marvels-spider-man-remastered",
    title: "Marvel's Spider-Man Remastered",
    titleRu: "Marvel's Spider-Man Remastered",
    description: "Захватывающий экшен о Человеке-Пауке от студии Insomniac Games. Свободно перемещайтесь по открытому Нью-Йорку, используя паутину для полётов между небоскрёбами. Динамичная боевая система сочетает акробатику, паутинные гаджеты и окружение. Увлекательный сюжет представляет зрелого Питера Паркера, столкнувшегося с Зловещей Шестёркой. Ремастер включает DLC «Город, который никогда не спит».",
    shortDescription: "Экшен про Человека-Паука с потрясающим перемещением по Нью-Йорку.",
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2022-08-12",
    price: 3499,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Экшен"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1817070/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i3-4160 / AMD equivalent", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 950 / AMD Radeon RX 470", storage: "75 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-4670 / AMD Ryzen 5 1600", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB", storage: "75 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["супергерой", "открытый мир", "Marvel", "паутина"]
  },

  {
    id: 14,
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    titleRu: "God of War Ragnarök",
    description: "Продолжение культовой перезагрузки серии God of War от Santa Monica Studio. Кратос и Атрей отправляются в путешествие по девяти мирам скандинавской мифологии, чтобы предотвратить Рагнарёк. Масштабные битвы с богами и мифическими существами впечатляют размахом. Эмоциональная история об отношениях отца и сына стала ещё глубже. Игра получила множество наград и восторженные отзывы критиков.",
    shortDescription: "Эпическое продолжение God of War о Рагнарёке в скандинавской мифологии.",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2024-09-19",
    price: 4499,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Экшен"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/2322010/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-4670K / AMD Ryzen 5 1600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5600 XT", storage: "190 GB SSD" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600 / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 3060 Ti / AMD Radeon RX 6700 XT", storage: "190 GB SSD" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["мифология", "скандинавия", "отец и сын", "боссы"]
  },

  {
    id: 15,
    slug: "uncharted-4",
    title: "Uncharted 4: A Thief's End",
    titleRu: "Uncharted 4: Путь вора",
    description: "Финальная глава приключений Нейтана Дрейка от студии Naughty Dog. Натан, уже отошедший от дел, вынужден вернуться к поискам сокровищ ради спасения своего брата Сэма. Кинематографичная постановка, потрясающая графика и захватывающие экшен-сцены задают новую планку качества. Сюжет исследует темы семьи, одержимости и прощания с прошлым. Коллекция Legacy of Thieves также включает Uncharted: The Lost Legacy.",
    shortDescription: "Кинематографичное приключение Нейтана Дрейка в поисках сокровищ пиратов.",
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2022-10-19",
    price: 2999,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Экшен"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1659420/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-4330 / AMD Ryzen 3 1200", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 960 4GB / AMD Radeon RX 470 4GB", storage: "126 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-4770 / AMD Ryzen 5 1500X", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5600 XT", storage: "126 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["приключение", "сокровища", "кинематографичная", "сюжетная"]
  },

  {
    id: 17,
    slug: "call-of-duty-modern-warfare-iii",
    title: "Call of Duty: Modern Warfare III",
    titleRu: "Call of Duty: Modern Warfare III",
    description: "Новая часть серии Modern Warfare от студии Sledgehammer Games. Капитан Прайс и оперативная группа 141 продолжают охоту на террориста Макарова по всему миру. Мультиплеер предлагает переработанные классические карты и новые режимы. Режим зомби получил масштабную открытую карту для совместного прохождения. Кампания включает открытые боевые миссии нового формата.",
    shortDescription: "Новая часть легендарной серии шутеров с масштабным мультиплеером.",
    developer: "Sledgehammer Games",
    publisher: "Activision",
    releaseDate: "2023-11-10",
    price: 4999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Шутер", "Экшен"],
    metacriticScore: 56,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/2519060/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i3-6100 / AMD Ryzen 3 1200", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 960 / AMD Radeon RX 470", storage: "149 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT", storage: "149 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["военный", "мультиплеер", "зомби", "кампания"]
  },

  {
    id: 18,
    slug: "doom-eternal",
    title: "Doom Eternal",
    titleRu: "Doom Eternal",
    description: "Невероятно динамичный шутер от id Software, продолжение перезапуска Doom 2016 года. Думгай продолжает свой крестовый поход против сил ада, теперь вторгшихся на Землю. Боевая система «push-forward» заставляет постоянно двигаться и агрессивно атаковать демонов. Арсенал включает культовые пушки и новые инструменты вроде клинка и огнемёта. Мастер-уровни и DLC добавляют ещё больше вызовов для хардкорных игроков.",
    shortDescription: "Ультра-динамичный шутер про истребление демонов из ада.",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    releaseDate: "2020-03-20",
    price: 1999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Шутер", "Экшен"],
    metacriticScore: 88,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/782330/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7/10 64-bit", processor: "Intel Core i5 / AMD Ryzen 3", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon R9 280", storage: "50 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-6700K / AMD Ryzen 7 1800X", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1080 / AMD Radeon RX Vega 56", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["демоны", "быстрый", "хардкор", "арена"]
  },

  {
    id: 19,
    slug: "battlefield-2042",
    title: "Battlefield 2042",
    titleRu: "Battlefield 2042",
    description: "Многопользовательский шутер от DICE, действие которого происходит в ближайшем будущем. Масштабные сражения на 128 игроков разворачиваются на огромных картах с динамическими погодными явлениями. Система специалистов позволяет настраивать свой стиль игры. Режим Portal даёт доступ к контенту из классических частей серии. Многочисленные обновления значительно улучшили игру после проблемного запуска.",
    shortDescription: "Масштабный мультиплеерный шутер в сеттинге ближайшего будущего.",
    developer: "DICE",
    publisher: "Electronic Arts",
    releaseDate: "2021-11-19",
    price: 2999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Шутер"],
    metacriticScore: 68,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1517290/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "AMD Ryzen 5 3600 / Intel Core i5-6600K", memory: "8 GB RAM", graphics: "AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti", storage: "100 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "AMD Ryzen 7 2700X / Intel Core i7-4790", memory: "16 GB RAM", graphics: "AMD Radeon RX 6600 XT / NVIDIA GeForce RTX 3060", storage: "100 GB SSD" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["военный", "мультиплеер", "масштабный", "будущее"]
  },

  {
    id: 22,
    slug: "microsoft-flight-simulator",
    title: "Microsoft Flight Simulator",
    titleRu: "Microsoft Flight Simulator",
    description: "Самый реалистичный авиасимулятор в истории видеоигр от Asobo Studio. Весь земной шар воссоздан с помощью спутниковых данных и технологий искусственного интеллекта. Сотни тщательно смоделированных самолётов — от лёгких поршневых до огромных авиалайнеров. Реалистичная погодная система использует данные в реальном времени. Потрясающая графика делает каждый полёт незабываемым.",
    shortDescription: "Самый реалистичный авиасимулятор с моделью всей планеты Земля.",
    developer: "Asobo Studio",
    publisher: "Xbox Game Studios",
    releaseDate: "2020-08-18",
    price: 3999,
    discountPercent: 0,
    platforms: ["pc", "xbox"],
    genres: ["Симулятор"],
    metacriticScore: 91,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1250410/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-4460 / AMD Ryzen 3 1200", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 770 / AMD Radeon RX 570", storage: "150 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-8400 / AMD Ryzen 5 1500X", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 590", storage: "150 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["авиация", "реализм", "открытый мир", "релаксация"]
  },

  {
    id: 23,
    slug: "euro-truck-simulator-2",
    title: "Euro Truck Simulator 2",
    titleRu: "Euro Truck Simulator 2",
    description: "Культовый симулятор дальнобойщика от чешской студии SCS Software. Перевозите грузы по всей Европе за рулём лицензированных грузовиков от MAN, Scania, Volvo и других брендов. Развивайте свою транспортную компанию, нанимайте водителей и покупайте гаражи. Многочисленные DLC добавляют новые страны и регионы. Невероятно расслабляющий игровой процесс с активным сообществом модмейкеров.",
    shortDescription: "Культовый симулятор грузоперевозок по дорогам Европы.",
    developer: "SCS Software",
    publisher: "SCS Software",
    releaseDate: "2012-10-18",
    price: 599,
    discountPercent: 50,
    platforms: ["pc"],
    genres: ["Симулятор"],
    metacriticScore: 79,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/227300/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Dual-Core CPU 2.4 GHz", memory: "4 GB RAM", graphics: "GeForce GTS 450 / Radeon HD 5850", storage: "12 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Quad-Core CPU 3.0 GHz", memory: "6 GB RAM", graphics: "GeForce GTX 760 / Radeon R9 270X", storage: "12 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["грузовики", "Европа", "расслабляющая", "менеджмент"]
  },

  {
    id: 25,
    slug: "cities-skylines-ii",
    title: "Cities: Skylines II",
    titleRu: "Cities: Skylines II",
    description: "Продолжение популярного градостроительного симулятора от Colossal Order. Стройте город мечты с нуля, управляя всеми аспектами городской жизни — от дорожной сети до экономики. Улучшенная симуляция жителей делает каждого горожанина уникальным. Новые системы климата и времён года влияют на игровой процесс. Масштабные карты позволяют строить мегаполисы невиданного размера.",
    shortDescription: "Масштабный градостроительный симулятор с улучшенной симуляцией.",
    developer: "Colossal Order",
    publisher: "Paradox Interactive",
    releaseDate: "2023-10-24",
    price: 2999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Симулятор"],
    metacriticScore: 68,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/949230/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/949230/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i7-6700K / AMD Ryzen 5 2600X", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 4GB / AMD Radeon RX 480 8GB", storage: "60 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-12600K / AMD Ryzen 7 5800X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 3080 / AMD Radeon RX 6800 XT", storage: "60 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["градостроительство", "менеджмент", "песочница", "стратегия"]
  },

  {
    id: 26,
    slug: "forza-horizon-5",
    title: "Forza Horizon 5",
    titleRu: "Forza Horizon 5",
    description: "Аркадная гоночная игра от Playground Games, действие которой происходит в красочной Мексике. Сотни лицензированных автомобилей от суперкаров до внедорожников доступны для гонок и кастомизации. Огромный открытый мир с разнообразными биомами — от джунглей до пустынь и вулканов. Динамические сезоны меняют ландшафт и условия на трассах. Лучшая аркадная гоночная игра текущего поколения.",
    shortDescription: "Лучшая аркадная гоночная игра с открытым миром в солнечной Мексике.",
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    releaseDate: "2021-11-09",
    price: 3999,
    discountPercent: 25,
    platforms: ["pc", "xbox"],
    genres: ["Гонки"],
    metacriticScore: 92,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1551360/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-4460 / AMD Ryzen 3 1200", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 470", storage: "110 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-8400 / AMD Ryzen 5 1500X", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 590", storage: "110 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["гонки", "открытый мир", "автомобили", "Мексика"]
  },

  {
    id: 28,
    slug: "need-for-speed-unbound",
    title: "Need for Speed Unbound",
    titleRu: "Need for Speed Unbound",
    description: "Аркадная гоночная игра от Criterion Games с уникальным визуальным стилем, сочетающим реализм и граффити-анимацию. Уличные гонки в вымышленном городе Лейкшор, где нужно заработать репутацию и деньги для участия в Гран-при. Глубокая кастомизация автомобилей позволяет создать машину мечты. Полиция активно преследует нарушителей, создавая захватывающие погони. Свежий взгляд на серию Need for Speed.",
    shortDescription: "Стильная аркадная гоночная игра с уникальной граффити-эстетикой.",
    developer: "Criterion Games",
    publisher: "Electronic Arts",
    releaseDate: "2022-12-02",
    price: 2999,
    discountPercent: 40,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Гонки"],
    metacriticScore: 73,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1846380/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600 / AMD Ryzen 5 2600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB", storage: "50 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-8700 / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["уличные гонки", "тюнинг", "полиция", "стиль"]
  },

  {
    id: 29,
    slug: "stardew-valley",
    title: "Stardew Valley",
    titleRu: "Stardew Valley",
    description: "Очаровательный фермерский симулятор от разработчика-одиночки ConcernedApe. Унаследовав старую ферму, вы начинаете новую жизнь в уютном городке Пеликан. Выращивайте урожай, разводите животных, исследуйте шахты и знакомьтесь с жителями. Каждый NPC имеет уникальную историю, и с многими можно завести романтические отношения. Одна из самых продаваемых и любимых инди-игр всех времён.",
    shortDescription: "Очаровательный фермерский симулятор с глубоким геймплеем.",
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    releaseDate: "2016-02-26",
    price: 499,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Казуальная", "Инди", "Симулятор"],
    metacriticScore: 89,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/413150/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows Vista и выше", processor: "2 GHz", memory: "2 GB RAM", graphics: "256 MB видеопамяти, поддержка OpenGL 2.0", storage: "500 MB" },
      recommended: { os: "Windows 10", processor: "2.8 GHz", memory: "4 GB RAM", graphics: "512 MB видеопамяти", storage: "500 MB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["ферма", "уютная", "пиксельная", "романтика"]
  },
  {
    id: 30,
    slug: "animal-crossing-new-horizons",
    title: "Animal Crossing: New Horizons",
    titleRu: "Animal Crossing: New Horizons",
    description: "Очаровательный симулятор жизни на острове от Nintendo для Nintendo Switch. Вы переезжаете на необитаемый остров и постепенно превращаете его в уютный дом мечты. Собирайте ресурсы, стройте здания, украшайте остров и знакомьтесь с очаровательными соседями-зверятами. Игра работает в реальном времени — события привязаны к текущему времени суток и сезону. Во время пандемии стала настоящим феноменом, объединив миллионы игроков со всего мира.",
    shortDescription: "Уютный симулятор жизни на острове с очаровательными зверятами от Nintendo.",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    releaseDate: "2020-03-20",
    price: 3999,
    discountPercent: 0,
    platforms: ["switch"],
    genres: ["Симулятор", "Казуальная"],
    metacriticScore: 90,
    coverImage: "https://placehold.co/460x215/0d1f0d/15b35a?text=Animal+Crossing",
    screenshots: [],
    storeLinks: { steam: null, psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Nintendo Switch", processor: "Nintendo Switch SoC", memory: "4 GB RAM", graphics: "Встроенная графика Nintendo Switch", storage: "6.2 GB" },
      recommended: { os: "Nintendo Switch", processor: "Nintendo Switch SoC", memory: "4 GB RAM", graphics: "Встроенная графика Nintendo Switch", storage: "6.2 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["остров", "уютная", "строительство", "зверята"]
  },
  {
    id: 32,
    slug: "dark-souls-iii",
    title: "Dark Souls III",
    titleRu: "Dark Souls III",
    description: "Финальная часть культовой трилогии от FromSoftware, задавшей стандарты жанра SoulsLike. Мрачный мир Лотрика находится на грани гибели, и вам предстоит связать Первое пламя или позволить ему угаснуть. Требовательная боевая система вознаграждает терпение и мастерство. Потрясающий арт-дизайн и незабываемые босс-файты. Два отличных DLC — Ashes of Ariandel и The Ringed City — завершают историю серии.",
    shortDescription: "Финальная часть культовой трилогии Dark Souls от FromSoftware.",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2016-04-12",
    price: 1999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["SoulsLike", "RPG", "Экшен"],
    metacriticScore: 89,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/374320/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i3-2100 / AMD FX-6300", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTX 750 Ti / AMD Radeon HD 7950", storage: "25 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-3770 / AMD FX-8350", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 series", storage: "25 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["тёмное фэнтези", "сложная", "боссы", "кооператив"]
  },

  {
    id: 33,
    slug: "lies-of-p",
    title: "Lies of P",
    titleRu: "Lies of P",
    description: "SoulsLike-экшен от корейской студии Neowiz, вдохновлённый сказкой о Пиноккио. Вы играете за куклу P в мрачном городе Крат, охваченном эпидемией безумия марионеток. Механика лжи влияет на сюжет и концовку игры. Боевая система предлагает разнообразное оружие и систему сборки из двух частей. Стильный арт-дизайн в духе Прекрасной эпохи создаёт уникальную атмосферу.",
    shortDescription: "Мрачная SoulsLike-интерпретация сказки о Пиноккио.",
    developer: "Neowiz Games",
    publisher: "Neowiz Games",
    releaseDate: "2023-09-19",
    price: 3499,
    discountPercent: 15,
    platforms: ["pc", "ps", "xbox"],
    genres: ["SoulsLike", "Экшен"],
    metacriticScore: 80,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1627720/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "AMD Ryzen 3 1200 / Intel Core i3-6300", memory: "8 GB RAM", graphics: "AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 960 4GB", storage: "40 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "AMD Ryzen 5 3600 / Intel Core i5-8400", memory: "16 GB RAM", graphics: "AMD Radeon RX 6500 XT / NVIDIA GeForce GTX 1660", storage: "40 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["Пиноккио", "сложная", "мрачная", "механизмы"]
  },

  {
    id: 34,
    slug: "nioh-2",
    title: "Nioh 2",
    titleRu: "Nioh 2",
    description: "Хардкорный экшен от Team Ninja в сеттинге мифологической Японии периода Сэнгоку. Создайте своего персонажа-полудемона и сражайтесь с ёкаями и знаменитыми самураями. Глубокая боевая система с различными стойками оружия и демоническими способностями. Огромный арсенал — от катан и копий до топоров и кусаригам. Система лута в стиле Diablo добавляет элемент коллекционирования экипировки.",
    shortDescription: "Хардкорный экшен о полудемоне-самурае в мифологической Японии.",
    developer: "Team Ninja",
    publisher: "Koei Tecmo",
    releaseDate: "2021-02-05",
    price: 2999,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["SoulsLike", "Экшен"],
    metacriticScore: 85,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1325200/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1325200/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-4460 / AMD FX-6300", memory: "6 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290X", storage: "80 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-8700 / AMD Ryzen 5 2600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1660 Super / AMD Radeon RX 5600 XT", storage: "80 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["Япония", "самурай", "ёкай", "лут"]
  },

  {
    id: 35,
    slug: "hollow-knight",
    title: "Hollow Knight",
    titleRu: "Hollow Knight",
    description: "Атмосферный метроидвания от инди-студии Team Cherry. Исследуйте заброшенное подземное королевство Хэллоунест, сражаясь с множеством врагов и боссов. Нелинейное исследование огромного мира открывает новые способности и секретные области. Великолепный рисованный арт-стиль и атмосферный саундтрек создают уникальное настроение. Одна из лучших инди-игр десятилетия с десятками часов контента.",
    shortDescription: "Атмосферная метроидвания в подземном мире насекомых.",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    releaseDate: "2017-02-24",
    price: 499,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Инди", "Экшен"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/367520/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7", processor: "Intel Core 2 Duo E5200", memory: "4 GB RAM", graphics: "GeForce 9800 GTX+ 1GB", storage: "9 GB" },
      recommended: { os: "Windows 10", processor: "Intel Core i5", memory: "8 GB RAM", graphics: "GeForce GTX 560", storage: "9 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["метроидвания", "атмосферная", "исследование", "боссы"]
  },

  {
    id: 36,
    slug: "celeste",
    title: "Celeste",
    titleRu: "Celeste",
    description: "Инди-платформер от создателей TowerFall о девушке Мэдлин, покоряющей гору Селест. За простой механикой скрывается невероятно глубокий и требовательный геймплей с сотнями экранов. Трогательная история о борьбе с депрессией и принятии себя. Система assist-mode делает игру доступной для всех, несмотря на высокую сложность. Шедевр среди инди-платформеров с идеальным управлением.",
    shortDescription: "Трогательный хардкорный платформер о покорении горы и борьбе с собой.",
    developer: "Extremely OK Games",
    publisher: "Extremely OK Games",
    releaseDate: "2018-01-25",
    price: 499,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Инди"],
    metacriticScore: 94,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/504230/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7 и выше", processor: "Intel Core i3 M380", memory: "2 GB RAM", graphics: "Intel HD 4000", storage: "1.2 GB" },
      recommended: { os: "Windows 10", processor: "Intel Core i7-4770", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTX 660", storage: "1.2 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["платформер", "хардкор", "эмоциональная", "пиксельная"]
  },

  {
    id: 37,
    slug: "hades",
    title: "Hades",
    titleRu: "Hades",
    description: "Рогалик-экшен от Supergiant Games о сыне бога Аида — Загрее, пытающемся сбежать из подземного мира. Каждый забег генерирует уникальную комбинацию способностей от олимпийских богов. Великолепная боевая система с шестью видами оружия и бесконечными билдами. Уникальная для жанра глубокая сюжетная линия, развивающаяся с каждой попыткой. Получила множество наград и считается одним из лучших рогаликов в истории.",
    shortDescription: "Блестящий рогалик-экшен о побеге из греческого подземного мира.",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    releaseDate: "2020-09-17",
    price: 899,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Инди", "Экшен", "Слешер"],
    metacriticScore: 93,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1145360/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7 SP1", processor: "Dual Core 2.4 GHz", memory: "4 GB RAM", graphics: "1 GB VRAM, DirectX 10+", storage: "15 GB" },
      recommended: { os: "Windows 10", processor: "Dual Core 3.0 GHz+", memory: "8 GB RAM", graphics: "2 GB VRAM, DirectX 10+", storage: "15 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["рогалик", "мифология", "повторяемость", "сюжетная"]
  },

  {
    id: 38,
    slug: "disco-elysium",
    title: "Disco Elysium",
    titleRu: "Disco Elysium",
    description: "Уникальная текстовая RPG от эстонской студии ZA/UM, где все конфликты решаются через диалоги и проверки навыков. Вы — детектив с амнезией, расследующий убийство в вымышленном городе Ревашоль. 24 навыка-голоса в голове персонажа формируют его личность и влияют на варианты действий. Политические системы, философия и человеческие истории переплетаются в гениальном сценарии. Революционная для жанра игра, удостоенная множества наград.",
    shortDescription: "Уникальная детективная RPG, где все проблемы решаются через диалоги.",
    developer: "ZA/UM",
    publisher: "ZA/UM",
    releaseDate: "2019-10-15",
    price: 1999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Инди", "RPG"],
    metacriticScore: 86,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/632470/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7/8/10", processor: "Intel Core 2 Duo / AMD equivalent", memory: "2 GB RAM", graphics: "Совместимая с DirectX 11, 512 MB VRAM", storage: "20 GB" },
      recommended: { os: "Windows 10", processor: "Intel Core i7-4770K / AMD Ryzen 7 2700", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", storage: "20 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["детектив", "текстовая", "философия", "выбор"]
  },

  {
    id: 39,
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    titleRu: "Cyberpunk 2077",
    description: "Масштабная RPG в открытом мире от CD Projekt RED в жанре киберпанк. Вы играете за наёмника V в мегаполисе Найт-Сити, где технологии и преступность переплелись воедино. После масштабных обновлений и дополнения Phantom Liberty игра стала одной из лучших RPG поколения. Нелинейный сюжет с Джонни Сильверхендом в исполнении Киану Ривза. Потрясающий город с вертикальным дизайном, который хочется исследовать часами.",
    shortDescription: "Масштабная RPG в мрачном мегаполисе будущего от создателей «Ведьмака».",
    developer: "CD Projekt RED",
    publisher: "CD Projekt",
    releaseDate: "2020-12-10",
    price: 2999,
    discountPercent: 30,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Киберпанк", "RPG", "Экшен", "Шутер"],
    metacriticScore: 86,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1091500/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i7-6700 / AMD Ryzen 5 1600", memory: "12 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB", storage: "70 GB SSD" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-12700 / AMD Ryzen 7 5800X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 Super / AMD Radeon RX 5700 XT", storage: "70 GB SSD" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["киберпанк", "открытый мир", "нелинейный", "Найт-Сити"]
  },

  {
    id: 40,
    slug: "ghostrunner",
    title: "Ghostrunner",
    titleRu: "Ghostrunner",
    description: "Молниеносный экшен от первого лица в киберпанк-сеттинге от студии One More Level. Вы — кибернетический ниндзя, который поднимается по башне-мегаструктуре Дхарма, сражаясь с тиранией. Один удар убивает и врагов, и вас — каждая секунда требует точности и мгновенной реакции. Паркур по стенам, замедление времени и катана делают бой невероятно стильным. Идеальная игра для любителей хардкорного геймплея и киберпанк-эстетики.",
    shortDescription: "Молниеносный хардкорный экшен с катаной в киберпанк-башне.",
    developer: "One More Level",
    publisher: "505 Games",
    releaseDate: "2020-10-27",
    price: 999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Киберпанк", "Экшен", "Слешер"],
    metacriticScore: 79,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1139900/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1139900/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i5-2500K / AMD Ryzen 3 1200", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560", storage: "22 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-6700K / AMD Ryzen 5 2600", memory: "12 GB RAM", graphics: "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700", storage: "22 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["киберпанк", "паркур", "хардкор", "катана"]
  },

  {
    id: 42,
    slug: "metal-gear-rising-revengeance",
    title: "Metal Gear Rising: Revengeance",
    titleRu: "Metal Gear Rising: Revengeance",
    description: "Динамичный слешер во вселенной Metal Gear от PlatinumGames. Райден — кибернетический ниндзя — сражается с приватными военными компаниями и боевыми роботами. Уникальная механика Blade Mode позволяет разрезать врагов и объекты в любом направлении. Незабываемые босс-файты с харизматичными антагонистами и потрясающим рок-саундтреком. Культовая игра, ставшая источником бесконечных мемов.",
    shortDescription: "Культовый слешер с кибер-ниндзя Райденом и механикой свободной резки.",
    developer: "PlatinumGames",
    publisher: "Konami",
    releaseDate: "2014-01-09",
    price: 899,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Слешер", "Экшен"],
    metacriticScore: 79,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/235460/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/235460/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7/8", processor: "Intel Core i5-2400 / AMD equivalent", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTS 450 / AMD Radeon HD 5870", storage: "25 GB" },
      recommended: { os: "Windows 7/8", processor: "Intel Core i7-3770 / AMD equivalent", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 650 / AMD Radeon HD 7850", storage: "25 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["ниндзя", "мемы", "босс-файты", "рок"]
  },

  {
    id: 43,
    slug: "resident-evil-4-remake",
    title: "Resident Evil 4 Remake",
    titleRu: "Resident Evil 4 Remake",
    description: "Ремейк культового хоррор-экшена от Capcom, полностью переработанный на движке RE Engine. Леон Кеннеди отправляется в глухую испанскую деревню, чтобы спасти дочь президента. Обновлённая боевая система стала более динамичной, сохранив дух оригинала. Потрясающая графика и звуковой дизайн создают невероятно напряжённую атмосферу. Один из лучших ремейков в истории игровой индустрии.",
    shortDescription: "Великолепный ремейк культового хоррор-экшена от Capcom.",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2023-03-24",
    price: 3499,
    discountPercent: 25,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Хоррор", "Экшен", "Шутер"],
    metacriticScore: 93,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/2050650/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "AMD Ryzen 3 1200 / Intel Core i5-7500", memory: "8 GB RAM", graphics: "AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 1050 Ti 4GB", storage: "60 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "AMD Ryzen 5 3600 / Intel Core i7-8700", memory: "16 GB RAM", graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070", storage: "60 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["хоррор", "зомби", "ремейк", "выживание"]
  },
  {
    id: 44,
    slug: "alan-wake-2",
    title: "Alan Wake 2",
    titleRu: "Alan Wake 2",
    description: "Долгожданное продолжение культового психологического триллера от Remedy Entertainment. Два параллельных сюжета — писатель Алан Уэйк пытается вырваться из тёмного измерения, а агент ФБР Саги Андерсон расследует серию ритуальных убийств. Игра сочетает элементы сюрреалистического хоррора, нуара и метанарратива о природе творчества. Революционный движок Northlight обеспечивает потрясающую технологию освещения. Один из самых необычных и атмосферных ААА-проектов последних лет.",
    shortDescription: "Психологический хоррор-триллер с двумя параллельными детективными сюжетами.",
    developer: "Remedy Entertainment",
    publisher: "Epic Games Publishing",
    releaseDate: "2023-10-27",
    price: 3999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Хоррор", "Экшен"],
    metacriticScore: 89,
    coverImage: "https://placehold.co/460x215/0d1f0d/15b35a?text=Alan+Wake+2",
    screenshots: [],
    storeLinks: { steam: null, psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600K / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT", storage: "90 GB SSD" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 7 5800X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 3080 / AMD Radeon RX 6800 XT", storage: "90 GB SSD" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["психологический", "детектив", "хоррор", "нуар"]
  },


  {
    id: 45,
    slug: "silent-hill-2-remake",
    title: "Silent Hill 2 Remake",
    titleRu: "Silent Hill 2 Remake",
    description: "Ремейк одного из самых культовых хорроров в истории видеоигр от студии Bloober Team. Джеймс Сандерленд получает письмо от своей покойной жены и отправляется в туманный город Сайлент Хилл. Психологический ужас и символизм оригинала бережно перенесены в современную графику. Обновлённая боевая система и камера от третьего лица меняют восприятие классических локаций. Переосмысление одной из самых глубоких историй в играх.",
    shortDescription: "Ремейк культового психологического хоррора о туманном Сайлент Хилле.",
    developer: "Bloober Team",
    publisher: "Konami",
    releaseDate: "2024-10-08",
    price: 3999,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Хоррор"],
    metacriticScore: 86,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/2124490/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "AMD Ryzen 5 2600 / Intel Core i5-8400", memory: "12 GB RAM", graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070", storage: "50 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "AMD Ryzen 5 3600 / Intel Core i7-8700", memory: "16 GB RAM", graphics: "AMD Radeon RX 6800 XT / NVIDIA GeForce RTX 2080 Super", storage: "50 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["психологический", "туман", "ремейк", "атмосферный"]
  },

  {
    id: 46,
    slug: "dead-space-remake",
    title: "Dead Space Remake",
    titleRu: "Dead Space Remake",
    description: "Ремейк культового космического хоррора от Motive Studio на движке Frostbite. Инженер Айзек Кларк прибывает на корабль USG Ishimura, захваченный ужасными некроморфами. Полностью переработанная графика и система расчленения врагов впечатляют. Бесшовный мир без загрузочных экранов усиливает погружение и напряжение. Озвучка Айзека и расширенный сюжет добавляют глубины оригинальной истории.",
    shortDescription: "Ремейк культового космического хоррора о кошмаре на корабле Ishimura.",
    developer: "Motive Studio",
    publisher: "Electronic Arts",
    releaseDate: "2023-01-27",
    price: 3499,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Хоррор", "Экшен"],
    metacriticScore: 88,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/1693980/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600 / AMD Ryzen 5 2600X", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5700", storage: "50 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-11600K / AMD Ryzen 5 5600X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["космос", "некроморфы", "ремейк", "напряжение"]
  },

  {
    id: 47,
    slug: "subnautica",
    title: "Subnautica",
    titleRu: "Subnautica",
    description: "Приключенческая игра на выживание в открытом мире на инопланетной океанической планете. После крушения корабля вы оказываетесь один посреди чужого океана с удивительной экосистемой. Исследуйте коралловые рифы, глубоководные пещеры и термальные источники, встречая уникальных существ. Постройте подводные базы и транспорт для погружения в самые глубокие впадины. Захватывающий сюжет постепенно раскрывается через исследование мира.",
    shortDescription: "Уникальная игра на выживание в подводном мире чужой планеты.",
    developer: "Unknown Worlds Entertainment",
    publisher: "Unknown Worlds Entertainment",
    releaseDate: "2018-01-23",
    price: 999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Выживание", "Инди"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/264710/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows Vista/7/8/10 64-bit", processor: "Intel Haswell 2-core / 4-thread 2.5 GHz", memory: "4 GB RAM", graphics: "Intel HD 4600 / NVIDIA GeForce GTX 550 Ti", storage: "20 GB" },
      recommended: { os: "Windows Vista/7/8/10 64-bit", processor: "Intel Haswell 4-core / 4-thread 3.5 GHz", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290", storage: "20 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["подводный мир", "исследование", "строительство", "инопланетный"]
  },

  {
    id: 48,
    slug: "rust",
    title: "Rust",
    titleRu: "Rust",
    description: "Многопользовательская игра на выживание от Facepunch Studios, известная своей жёсткостью и непредсказуемостью. Вы начинаете голым на острове и должны добывать ресурсы, строить укрытия и защищаться от других игроков. Социальные взаимодействия — от союзов до предательств — делают каждый вайп уникальным. Продвинутая система строительства позволяет возводить огромные крепости. Одна из самых популярных игр на выживание с миллионами активных игроков.",
    shortDescription: "Жёсткая многопользовательская игра на выживание с PvP и строительством.",
    developer: "Facepunch Studios",
    publisher: "Facepunch Studios",
    releaseDate: "2018-02-08",
    price: 1499,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Выживание", "Шутер"],
    metacriticScore: 69,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/252490/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 8.1 64-bit", processor: "Intel Core i7-3770 / AMD FX-9590", memory: "10 GB RAM", graphics: "NVIDIA GeForce GTX 670 2GB / AMD Radeon R9 280", storage: "25 GB SSD" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-4790K / AMD Ryzen 5 1600", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 980 / AMD Radeon R9 Fury", storage: "25 GB SSD" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["PvP", "строительство", "рейды", "социальная"]
  },

  {
    id: 49,
    slug: "the-forest",
    title: "The Forest",
    titleRu: "The Forest",
    description: "Хоррор-выживание от Endnight Games о крушении самолёта на таинственном полуострове. Ваш сын похищен каннибалами, и вы должны выжить и найти его в густом лесу. Днём вы строите убежища, собираете ресурсы и исследуете пещеры, а ночью обороняетесь от мутантов. Система строительства позволяет возводить сложные базы и ловушки. Кооперативный режим делает выживание ещё более увлекательным.",
    shortDescription: "Хоррор-выживание на таинственном полуострове, населённом каннибалами.",
    developer: "Endnight Games",
    publisher: "Endnight Games",
    releaseDate: "2018-04-30",
    price: 699,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Выживание", "Хоррор"],
    metacriticScore: 70,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/242760/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Dual-Core 2.4 GHz", memory: "4 GB RAM", graphics: "NVIDIA GeForce 8800GT", storage: "5 GB" },
      recommended: { os: "Windows 7 64-bit", processor: "Quad-Core Processor 3.0 GHz", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTX 560", storage: "5 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["лес", "каннибалы", "строительство", "кооператив"]
  },

  {
    id: 50,
    slug: "valheim",
    title: "Valheim",
    titleRu: "Valheim",
    description: "Кооперативное выживание в процедурно генерируемом мире скандинавской мифологии от Iron Gate Studio. Вы — павший викинг, отправленный в десятый мир для доказательства своей доблести Одину. Уникальный визуальный стиль сочетает низкополигональные модели с современным освещением. Система строительства позволяет возводить впечатляющие викингские крепости и корабли. Каждый биом предлагает уникальные ресурсы, врагов и боссов.",
    shortDescription: "Кооперативное выживание викингов в мире скандинавской мифологии.",
    developer: "Iron Gate Studio",
    publisher: "Coffee Stain Publishing",
    releaseDate: "2021-02-02",
    price: 699,
    discountPercent: 0,
    platforms: ["pc", "xbox"],
    genres: ["Выживание", "Инди"],
    metacriticScore: 80,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",
    screenshots: [],
    storeLinks: {
      steam: "https://store.steampowered.com/app/892970/",
      psStore: null,
      xboxStore: null
    },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "2.6 GHz Dual Core", memory: "4 GB RAM", graphics: "GeForce GTX 500 / Radeon HD 7000", storage: "1 GB" },
      recommended: { os: "Windows 7 64-bit", processor: "i5 3GHz / Ryzen 5 3GHz", memory: "8 GB RAM", graphics: "GeForce GTX 970 / Radeon RX 480", storage: "1 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["викинги", "мифология", "строительство", "кооператив"]
  },
  {
    id: 51,
    slug: "resident-evil-requiem",
    title: "Resident Evil Requiem",
    titleRu: "Resident Evil Requiem",
    description: "Новая глава легендарной серии ужасов от Capcom, продолжающая историю после событий Resident Evil Village. Главная героиня оказывается в заброшенном европейском городе, захваченном новым видом биологического оружия. Игра возвращается к классическим корням серии, сочетая напряжённый хоррор от первого лица с современным экшеном. Переработанная система крафта и ресурсов добавляет элемент выживания. Великолепный движок RE Engine обеспечивает фотореалистичную графику и потрясающие эффекты.",
    shortDescription: "Новая часть легендарной серии хоррор-сюрвайвл от Capcom на движке RE Engine.",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2025-10-31",
    price: 4999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Хоррор", "Экшен", "Выживание"],
    metacriticScore: 0,
    coverImage: "https://cdn1.epicgames.com/spt-assets/b2e589fac93746fc8d20b4177f5b3a60/resident-evil-requiem-12gn0.png",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/3764200/Resident_Evil_Requiem/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600 / AMD Ryzen 5 3600", memory: "12 GB RAM", graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5600 XT", storage: "70 GB SSD" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-10700K / AMD Ryzen 7 5800X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6700 XT", storage: "70 GB SSD" }
    },
    isTrending: true,
    isFeatured: true,
    tags: ["хоррор", "выживание", "зомби", "от первого лица"]
  },
  {
    id: 52,
    slug: "hollow-knight-silksong",
    title: "Hollow Knight: Silksong",
    titleRu: "Hollow Knight: Silksong",
    description: "Долгожданное продолжение культового метроидвания Hollow Knight от студии Team Cherry. Вы играете за Хорнет — принцессу Глубин, путешествующую по новому таинственному королевству Фелвидж. Более 165 врагов, десятки боссов, 5 городов и обширный мир для исследования — всё нарисовано и анимировано вручную. Новая система охотничьих испытаний вознаграждает исследование и мастерство. Одна из самых ожидаемых инди-игр последних лет с уникальной атмосферой.",
    shortDescription: "Долгожданный сиквел культового метроидвания с новой героиней Хорнет.",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    releaseDate: "2025-06-12",
    price: 799,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Инди", "Экшен", "SoulsLike"],
    metacriticScore: 0,
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVMcx8xAZHC-lmtdK0iZyJJHCmvqdZzDYJQ&s",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i5 2.8GHz+", memory: "6 GB RAM", graphics: "GeForce 750Ti / Radeon R9 280X", storage: "9 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7 3.5GHz+", memory: "8 GB RAM", graphics: "GeForce GTX 1060 / Radeon RX 580", storage: "9 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["метроидвания", "инди", "боссы", "исследование"]
  },
  {
    id: 53,
    slug: "dying-light-enhanced-edition",
    title: "Dying Light: Enhanced Edition",
    titleRu: "Dying Light: Enhanced Edition",
    description: "Один из лучших зомби-экшенов в открытом мире от польской студии Techland. Главный герой — агент Кайл Крейн, заброшенный в карантинный город Харран, охваченный вирусной эпидемией. Уникальная система паркура позволяет свободно перемещаться по крышам и вертикальным пространствам. Ночью зомби становятся значительно опаснее, добавляя элемент настоящего ужаса. Улучшенное издание включает все DLC, в том числе масштабное The Following с открытым сельским миром.",
    shortDescription: "Зомби-паркур-экшен в открытом мире с динамической сменой дня и ночи.",
    developer: "Techland",
    publisher: "Techland",
    releaseDate: "2016-02-09",
    price: 999,
    discountPercent: 60,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "Выживание", "Хоррор"],
    metacriticScore: 74,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/239140/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i5-2500 / AMD FX-8320", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTX 560 / AMD Radeon HD 6870", storage: "40 GB" },
      recommended: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i5-4670K / AMD FX-8350", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 780 / AMD Radeon R9 290", storage: "40 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["зомби", "паркур", "открытый мир", "кооператив"]
  },
  {
    id: 54,
    slug: "dying-light-2-stay-human",
    title: "Dying Light 2: Stay Human",
    titleRu: "Dying Light 2: Stay Human",
    description: "Масштабное продолжение культового зомби-экшена от Techland. Действие разворачивается в постапокалиптическом Вильдоре — последнем крупном городе человечества. Улучшенный паркур и параплан с крюком-кошкой позволяют перемещаться по городу с беспрецедентной свободой. Система социальных выборов влияет на облик города и доступные фракционные ресурсы. Обновление Reloaded добавило множество улучшений, а сюжетное DLC Bloody Ties расширяет историю.",
    shortDescription: "Постапокалиптический зомби-паркур в последнем городе человечества.",
    developer: "Techland",
    publisher: "Techland",
    releaseDate: "2022-02-04",
    price: 2999,
    discountPercent: 40,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "Выживание"],
    metacriticScore: 80,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/534380/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i3-9100 / AMD Ryzen 3 2300X", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560", storage: "60 GB SSD" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600K / AMD Ryzen 5 3600X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT", storage: "60 GB SSD" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["зомби", "паркур", "открытый мир", "выборы"]
  },
  {
    id: 55,
    slug: "mafia-definitive-edition",
    title: "Mafia: Definitive Edition",
    titleRu: "Mafia: Definitive Edition",
    description: "Полный ремейк классической гангстерской игры 2002 года от студии Hangar 13. История Томаса Анджело — обычного таксиста, втянутого в мир организованной преступности Лост-Хэвена в 1930-х годах. Расширенный сюжет, полностью переснятые кинематографичные сцены и современная графика. Детально воссозданный открытый город в атмосфере эпохи Великой депрессии с джазовым саундтреком. Одна из лучших гангстерских историй в видеоиграх, сохранившая душу оригинала.",
    shortDescription: "Кинематографичный ремейк классики о гангстерах эпохи Сухого закона.",
    developer: "Hangar 13",
    publisher: "2K Games",
    releaseDate: "2020-09-25",
    price: 1999,
    discountPercent: 50,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен"],
    metacriticScore: 73,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1030840/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1030840/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-2500K / AMD FX-8120", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870", storage: "50 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-3770 / AMD FX-8350", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["мафия", "1930-е", "гангстеры", "сюжетная"]
  },
  {
    id: 56,
    slug: "mafia-ii-definitive-edition",
    title: "Mafia II: Definitive Edition",
    titleRu: "Mafia II: Definitive Edition",
    description: "Культовый гангстерский экшен о Вито Скалетта — ветеране Второй мировой, вступившем на путь мафии в 1940-50-х годах. Атмосферный открытый мир Empire Bay детально воссоздаёт послевоенную Америку с её архитектурой, музыкой и культурой. Cinematic-подача истории и кинематографичные сцены захватывают с первых минут. Игра считается одной из лучших по нарративу среди игр с открытым миром. Definitive Edition включает все DLC с дополнительными эпизодами.",
    shortDescription: "Культовый гангстерский экшен о Вито Скалетта в послевоенной Америке.",
    developer: "Hangar 13",
    publisher: "2K Games",
    releaseDate: "2020-05-19",
    price: 1499,
    discountPercent: 60,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен"],
    metacriticScore: 75,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1030830/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1030830/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-2500K / AMD FX-8120", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870", storage: "45 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-3770 / AMD FX-8350", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700", storage: "45 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["мафия", "1940-е", "гангстеры", "послевоенная Америка"]
  },
  {
    id: 57,
    slug: "mafia-iii-definitive-edition",
    title: "Mafia III: Definitive Edition",
    titleRu: "Mafia III: Definitive Edition",
    description: "Третья часть гангстерской серии, перенёсшая действие в конец 1960-х в вымышленный Нью-Бордо — прообраз Нового Орлеана. Главный герой Линкольн Клэй — ветеран Вьетнама, мстящий итальянской мафии за убийство своей семьи. Богатый открытый мир наполнен атмосферой эпохи Джима Кроу, расовой напряжённостью и духом американских 60-х. Саундтрек включает сотни песен эпохи — от Rolling Stones до Jimi Hendrix. Definitive Edition включает все три сюжетных DLC.",
    shortDescription: "Гангстерский экшен о мести в атмосфере Нового Орлеана 1960-х годов.",
    developer: "Hangar 13",
    publisher: "2K Games",
    releaseDate: "2020-05-19",
    price: 1499,
    discountPercent: 60,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен"],
    metacriticScore: 67,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/360430/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/360430/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i5-2500K / AMD FX-8120", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 780 / AMD Radeon R9 290X", storage: "50 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-3770 / AMD FX-8350", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["мафия", "1960-е", "месть", "Новый Орлеан"]
  },
  {
    id: 58,
    slug: "the-last-of-us-part-i",
    title: "The Last of Us Part I",
    titleRu: "The Last of Us Part I",
    description: "Ремейк легендарной постапокалиптической игры от Naughty Dog, пересозданный на движке The Last of Us Part II. История Джоэла и Элли, путешествующих через опасную постпандемическую Америку, считается одной из лучших в игровой индустрии. Переработанная боевая система, улучшенный ИИ и потрясающая графика поднимают классику на новый уровень. Мир, поглощённый грибковой инфекцией кордицепс, пугает реализмом и вниманием к деталям. Полное издание включает DLC Left Behind.",
    shortDescription: "Эталонный постапокалиптический экшен о выживании и человеческих связях.",
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2023-03-28",
    price: 4499,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Экшен", "Хоррор", "Выживание"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1888930/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "AMD Ryzen 5 1500X / Intel Core i7-4770K", memory: "16 GB RAM", graphics: "AMD Radeon RX 5500 XT 8GB / NVIDIA GeForce GTX 970 4GB", storage: "72 GB SSD" },
      recommended: { os: "Windows 10/11 64-bit", processor: "AMD Ryzen 5 3600X / Intel Core i7-8700", memory: "16 GB RAM", graphics: "AMD Radeon RX 6600 XT / NVIDIA GeForce RTX 2080", storage: "72 GB SSD" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["постапокалипсис", "выживание", "эмоциональная", "сюжетная"]
  },
  {
    id: 59,
    slug: "monster-hunter-world",
    title: "Monster Hunter: World",
    titleRu: "Monster Hunter: World",
    description: "Революционная часть серии Monster Hunter от Capcom, открывшая её мировой аудитории. Охотники отправляются в Новый Свет изучать и охотиться на гигантских монстров в живых экосистемах. Каждое из 14 типов оружия предлагает уникальный стиль игры и глубину механик. Совместная охота до четырёх игроков делает процесс ещё более захватывающим. Масштабное дополнение Iceborne добавило новый снежный регион и десятки новых монстров.",
    shortDescription: "Легендарная охота на гигантских монстров в живом открытом мире.",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2018-08-09",
    price: 1999,
    discountPercent: 50,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Экшен"],
    metacriticScore: 90,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/582010/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i5-4460 / AMD FX-6300", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 760 / AMD Radeon R7 260X", storage: "48 GB" },
      recommended: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i7-3770 / AMD FX-9590", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 570", storage: "48 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["охота", "монстры", "кооператив", "крафт"]
  },
  {
    id: 60,
    slug: "nier-automata",
    title: "NieR: Automata",
    titleRu: "NieR: Automata",
    description: "Шедевральный action-RPG от PlatinumGames о войне андроидов и машин на постапокалиптической Земле. 2B, 9S и A2 — три играбельных персонажа с разными стилями боя. Философский сюжет исследует вопросы сознания, смысла существования и что значит быть человеком. 26 концовок складываются в полную картину этой трагической истории. Саундтрек от Кэйити Окабэ признан одним из лучших в истории игровой индустрии.",
    shortDescription: "Философский экшен-RPG об андроидах, задающихся вопросами смысла бытия.",
    developer: "PlatinumGames",
    publisher: "Square Enix",
    releaseDate: "2017-03-17",
    price: 1799,
    discountPercent: 40,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Экшен", "Слешер"],
    metacriticScore: 88,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/524220/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7/8.1/10 64-bit", processor: "Intel Core i5-4670 / AMD A10-7850K", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 770 / AMD Radeon R9 380X", storage: "50 GB" },
      recommended: { os: "Windows 8.1/10 64-bit", processor: "Intel Core i7-4770 / AMD FX-9590", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 980 / AMD Radeon R9 Fury", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["андроиды", "философия", "постапокалипсис", "несколько концовок"]
  },
  {
    id: 61,
    slug: "street-fighter-6",
    title: "Street Fighter 6",
    titleRu: "Стрит Файтер 6",
    description: "Революционный файтинг от Capcom с новой системой Drive System, дающей каждому персонажу уникальные манёвры. Три режима управления позволяют комфортно играть как новичкам, так и ветеранам серии. Режим World Tour предлагает полноценное одиночное приключение по всему миру с кастомизируемым персонажем. Battle Hub — живой онлайн-центр, где игроки соревнуются и общаются. 18 бойцов на старте с отточенным балансом и насыщенным контентом.",
    shortDescription: "Революционный файтинг с Drive System и режимом World Tour.",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2023-06-02",
    price: 2999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Файтинг", "Экшен"],
    metacriticScore: 92,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1670460/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1670460/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-6600 / AMD Ryzen 5 1600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 5500 XT", storage: "60 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700 / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1080 Ti / AMD RX 5700 XT", storage: "60 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["файтинг", "онлайн", "аркада", "соревновательный"]
  },
  {
    id: 62,
    slug: "tekken-8",
    title: "Tekken 8",
    titleRu: "Теккен 8",
    description: "Восьмая часть культовой серии файтингов от Bandai Namco с потрясающей графикой на Unreal Engine 5. Новая механика Heat System добавляет агрессивный стиль боя и уникальные суперудары. История продолжает войну Мисима с эпичным финалом между Кадзуей и Джином. Arcade Quest позволяет прокачивать собственного аватара через режимы аркады. 32 бойца на старте с детализированными моделями и разнообразными стилями боя.",
    shortDescription: "Эпический файтинг с Heat System и финальным конфликтом клана Мисима.",
    developer: "Bandai Namco Studios",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2024-01-26",
    price: 3999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Файтинг", "Экшен"],
    metacriticScore: 90,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1778820/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-6600K / AMD Ryzen 5 1600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon R9 380X", storage: "100 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT", storage: "100 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["файтинг", "3D", "онлайн", "соревновательный"]
  },
  {
    id: 63,
    slug: "mortal-kombat-1",
    title: "Mortal Kombat 1",
    titleRu: "Мортал Комбат 1",
    description: "Перезапуск легендарной серии от NetherRealm Studios в новой мультивселенной Лю Кана. Механика Камео позволяет вызывать второго бойца для комбо и специальных приёмов в бою. Невероятно детализированные фаталити поражают уровнем жестокости и фантазии разработчиков. Живая история переосмысляет любимых персонажей в совершенно новом контексте. Crossplay объединяет игроков всех платформ в общем сезонном контенте.",
    shortDescription: "Перезапуск MK с системой Камео-бойцов и новой мультивселенной.",
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Games",
    releaseDate: "2023-09-19",
    price: 3499,
    discountPercent: 25,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Файтинг", "Экшен"],
    metacriticScore: 86,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1971870/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-8400 / AMD Ryzen 5 2600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 980 / AMD Radeon RX 470", storage: "100 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 7 3700X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2080 / AMD Radeon RX 6800 XT", storage: "100 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["файтинг", "фаталити", "мультивселенная", "gore"]
  },
  {
    id: 64,
    slug: "civilization-vi",
    title: "Sid Meier's Civilization VI",
    titleRu: "Цивилизация VI",
    description: "Легендарная пошаговая стратегия, в которой вы ведёте цивилизацию от каменного века до космической эры. Система районов разделяет постройки по территории и требует стратегического планирования. 40 лидеров с уникальными способностями и агендами создают непредсказуемую дипломатию. Режим Multiplayer позволяет до 12 игроков сражаться за доминирование на одной карте. Дополнения Rise & Fall и Gathering Storm расширяют контент до сотен часов геймплея.",
    shortDescription: "Легендарная пошаговая стратегия — стройте цивилизацию от нуля до звёзд.",
    developer: "Firaxis Games",
    publisher: "2K Games",
    releaseDate: "2016-10-21",
    price: 1499,
    discountPercent: 70,
    platforms: ["pc"],
    genres: ["Стратегия", "Симулятор"],
    metacriticScore: 88,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/289070/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i3-4340 / AMD FX-6300", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 650 Ti / AMD HD 7000", storage: "17 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600K / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700 XT", storage: "17 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["стратегия", "пошаговая", "история", "цивилизация"]
  },
  {
    id: 65,
    slug: "age-of-empires-iv",
    title: "Age of Empires IV",
    titleRu: "Эпоха Империй IV",
    description: "Масштабная стратегия в реальном времени от Relic Entertainment, продолжающая легендарную серию. Восемь уникальных цивилизаций со своими механиками и юнитами — от монголов до французского рыцарства. Документальные ролики между миссиями рассказывают реальную историю каждой нации. Четыре кампании охватывают важнейшие исторические конфликты Средневековья. Живая мультиплеерная сцена с регулярными обновлениями и балансировкой.",
    shortDescription: "RTS с 8 уникальными цивилизациями и историческими документальными вставками.",
    developer: "Relic Entertainment",
    publisher: "Xbox Game Studios",
    releaseDate: "2021-10-28",
    price: 2499,
    discountPercent: 40,
    platforms: ["pc", "xbox"],
    genres: ["Стратегия"],
    metacriticScore: 81,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1466860/", psStore: null, xboxStore: "https://www.xbox.com/ru-RU/games/store/age-of-empires-iv/9TMZT0N4F5L3" },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-6300U / AMD Ryzen 5 2400G", memory: "8 GB RAM", graphics: "Intel HD 520 / NVIDIA GTX 970 / AMD Radeon RX 570", storage: "50 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X", memory: "16 GB RAM", graphics: "NVIDIA GTX 1080 / AMD Radeon RX 5700 XT", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["стратегия", "RTS", "средневековье", "история"]
  },
  {
    id: 66,
    slug: "total-war-warhammer-iii",
    title: "Total War: Warhammer III",
    titleRu: "Тотальная Война: Вархаммер III",
    description: "Грандиозная финальная часть трилогии с крупнейшей картой в истории серии Total War. Боги Хаоса — Кхорн, Нургл, Тзинч и Слаанеш — являются играбельными фракциями с уникальными механиками. Immortal Empires объединяет контент всех трёх частей на одной исполинской карте. Тактические сражения в реальном времени сочетаются с пошаговым управлением империей. Огромное моддинг-сообщество создало тысячи дополнений, расширяющих вселенную.",
    shortDescription: "Эпическая стратегия в вселенной Warhammer с богами Хаоса и объединённой картой.",
    developer: "Creative Assembly",
    publisher: "SEGA",
    releaseDate: "2022-02-17",
    price: 2999,
    discountPercent: 30,
    platforms: ["pc"],
    genres: ["Стратегия", "RPG"],
    metacriticScore: 82,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1142710/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-6600 / AMD Ryzen 5 1600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 900 / AMD RX 480 4GB", storage: "120 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT", storage: "120 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["стратегия", "вархаммер", "фэнтези", "хаос"]
  },
  {
    id: 67,
    slug: "ori-and-the-will-of-the-wisps",
    title: "Ori and the Will of the Wisps",
    titleRu: "Ори и Блуждающие Огни",
    description: "Потрясающий платформер-метроидвания от Moon Studios с нарисованной вручную графикой уровня кино. Плавная система движения делает перемещение по миру настоящим удовольствием. Эмоциональный сюжет о потере и принятии трогает до слёз. Динамический саундтрек от Гарета Кокера адаптируется под игровые события в реальном времени. Великолепные визуальные эффекты превращают игру в интерактивное произведение искусства.",
    shortDescription: "Шедевральный платформер с кинематографической графикой и трогательной историей.",
    developer: "Moon Studios",
    publisher: "Xbox Game Studios",
    releaseDate: "2020-03-11",
    price: 1199,
    discountPercent: 0,
    platforms: ["pc", "xbox"],
    genres: ["Платформер", "Инди", "Экшен"],
    metacriticScore: 93,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1057090/", psStore: null, xboxStore: "https://www.xbox.com/ru-RU/games/store/ori-and-the-will-of-the-wisps/9N8CD3NQKX29" },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5 / AMD Ryzen 5", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD RX 470", storage: "20 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7 / AMD Ryzen 7", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1070 / AMD Vega 56", storage: "20 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["платформер", "метроидвания", "красивая", "инди"]
  },
  {
    id: 68,
    slug: "cuphead",
    title: "Cuphead",
    titleRu: "Капхед",
    description: "Культовый платформер-ран-энд-ган с вручную нарисованной анимацией в стиле мультфильмов 1930-х. Каждый босс — уникальная многофазная схватка, требующая изучения паттернов и мгновенной реакции. Два игрока могут совместно проходить игру в кооперативном режиме. Джазовый оркестровый саундтрек полностью записан живыми музыкантами. DLC «The Delicious Last Course» добавляет новые острова, боссов и играбельную Кубхед.",
    shortDescription: "Хардкорный платформер в стиле 30-х с боссами и живым джазом.",
    developer: "Studio MDHR",
    publisher: "Studio MDHR",
    releaseDate: "2017-09-29",
    price: 599,
    discountPercent: 0,
    platforms: ["pc", "xbox"],
    genres: ["Платформер", "Инди", "Экшен"],
    metacriticScore: 88,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/268910/", psStore: null, xboxStore: "https://www.xbox.com/ru-RU/games/store/cuphead/9NXX4H2DTXNX" },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i3 / AMD Phenom II X4 965", memory: "4 GB RAM", graphics: "NVIDIA GTX 260 / ATI 4890", storage: "4 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5 / AMD FX-8350", memory: "8 GB RAM", graphics: "NVIDIA GTX 560 Ti / AMD HD 6950", storage: "4 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["платформер", "хардкор", "мультфильм", "боссы"]
  },
  {
    id: 69,
    slug: "dead-cells",
    title: "Dead Cells",
    titleRu: "Мёртвые Клетки",
    description: "Брутальный рогалик-метроидвания от Motion Twin, сочетающий исследование с быстрым экшеном. Каждое прохождение уникально — оружие, маршруты и апгрейды генерируются заново. Система прокачки клеток позволяет улучшать возможности для следующих попыток. Свыше 100 видов оружия с синергиями создают тысячи уникальных билдов. Регулярные обновления и бесплатные DLC держат игру живой уже много лет.",
    shortDescription: "Брутальный рогалик-метроидвания с уникальными прохождениями и 100+ видами оружия.",
    developer: "Motion Twin",
    publisher: "Motion Twin",
    releaseDate: "2018-08-07",
    price: 899,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Инди", "Экшен", "Платформер"],
    metacriticScore: 89,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/588650/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i5 / AMD Phenom II X4", memory: "2 GB RAM", graphics: "NVIDIA GeForce GTX 460 / AMD Radeon HD 5870", storage: "2 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7 / AMD Ryzen 5", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 480", storage: "2 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["рогалик", "метроидвания", "пиксельная", "хардкор"]
  },
  {
    id: 70,
    slug: "bioshock-infinite",
    title: "BioShock Infinite",
    titleRu: "БиоШок: Бесконечность",
    description: "Культовый шутер от первого лица в парящем городе Колумбия, рассказывающий об агенте Букере ДеВитте и девушке Элизабет. Элизабет — один из лучших ИИ-напарников в истории игр, помогающая в бою и взаимодействующая с миром. Нарратив с неожиданными поворотами и темами параллельных реальностей обсуждается фанатами до сих пор. Виготики дают разнообразные сверхъестественные способности для разных стилей боя. Визуальный стиль арт-деко 1912 года создаёт незабываемую атмосферу.",
    shortDescription: "Шутер в летающем городе с Элизабет и поворотами нарратива.",
    developer: "Irrational Games",
    publisher: "2K Games",
    releaseDate: "2013-03-26",
    price: 999,
    discountPercent: 70,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Шутер", "Экшен"],
    metacriticScore: 94,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/49520/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows Vista/7/8", processor: "Intel Core 2 DUO 2.4GHz / AMD Athlon X2 2.7GHz", memory: "2 GB RAM", graphics: "NVIDIA GeForce GTX 8800 / ATI Radeon HD 4800", storage: "20 GB" },
      recommended: { os: "Windows 7/8 64-bit", processor: "Intel Core i5 2.9GHz / AMD Phenom II X4", memory: "4 GB RAM", graphics: "NVIDIA GeForce GTX 560 / AMD Radeon HD 6950", storage: "20 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["шутер", "стимпанк", "нарратив", "летающий город"]
  },
  {
    id: 71,
    slug: "batman-arkham-knight",
    title: "Batman: Arkham Knight",
    titleRu: "Бэтмен: Рыцарь Аркхема",
    description: "Грандиозное завершение трилогии Rocksteady с полностью открытым Готэм-Сити и управляемым Бэтмобилем. Система Freeflow Combat достигает своего пика — бои с десятками противников превращаются в элегантный танец. Мощная история об «Аркхем Найте» и Страшиле держит в напряжении до самого финала. Детально воссозданный ночной Готэм — один из лучших игровых городов эпохи. New Game+ и испытания Риддлера обеспечивают десятки часов дополнительного контента.",
    shortDescription: "Финал трилогии Аркхем с открытым Готэмом и Бэтмобилем.",
    developer: "Rocksteady Studios",
    publisher: "Warner Bros. Games",
    releaseDate: "2015-06-23",
    price: 999,
    discountPercent: 60,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "Слешер"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/208650/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7 64-bit", processor: "Intel Core i5-750 / AMD Phenom II X4 965", memory: "6 GB RAM", graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870", storage: "45 GB" },
      recommended: { os: "Windows 7/8/10 64-bit", processor: "Intel Core i7-3770 / AMD FX-8350", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290X", storage: "45 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["бэтмен", "открытый мир", "комиксы", "супергерой"]
  },
  {
    id: 72,
    slug: "a-plague-tale-requiem",
    title: "A Plague Tale: Requiem",
    titleRu: "Чума Тейл: Реквием",
    description: "Продолжение истории Амиции и Гюго во Франции XIV века в окружении ещё более страшных крысиных полчищ. Визуально одна из самых красивых игр поколения — пейзажи Средиземноморья воссозданы с фотографической точностью. Улучшенная система стелса позволяет использовать мышей как оружие против врагов. Эмоциональная история о цене принятия судьбы трогает не меньше первой части. Напряжённый экшен органично сочетается с медленными драматическими сценами.",
    shortDescription: "Продолжение путешествия Амиции и Гюго в мире крыс и инквизиции.",
    developer: "Asobo Studio",
    publisher: "Focus Entertainment",
    releaseDate: "2022-10-18",
    price: 3499,
    discountPercent: 20,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "Хоррор"],
    metacriticScore: 82,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1621690/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1621690/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i7-8700 / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 590", storage: "60 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 7 3700X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800 XT", storage: "60 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["средневековье", "стелс", "крысы", "история"]
  },
  {
    id: 73,
    slug: "returnal",
    title: "Returnal",
    titleRu: "Ретернал",
    description: "Безжалостный шутер-рогалик от Housemarque об астронавте, застрявшей в петле времени на чужой планете. Каждая смерть переносит героиню в начало с сохранением лишь части прогресса. Стремительный bullet-hell геймплей требует постоянного движения и идеального уклонения. Мрачная хоррор-атмосфера планеты Атропос сочетается с загадочным нарративом. Версия для PC включает мультиплеер и функцию Save&Quit.",
    shortDescription: "Хардкорный шутер-рогалик в петле времени на чужой планете.",
    developer: "Housemarque",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2023-02-15",
    price: 2999,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Шутер", "SoulsLike", "Экшен"],
    metacriticScore: 86,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1649240/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i7-8700 / AMD Ryzen 7 2700X", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5700", storage: "60 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i9-9900K / AMD Ryzen 9 3900X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2080 Ti / AMD Radeon RX 6800 XT", storage: "60 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["рогалик", "bullet hell", "sci-fi", "петля времени"]
  },
  {
    id: 74,
    slug: "control",
    title: "Control",
    titleRu: "Контроль",
    description: "Психологический экшен от Remedy о директоре Федерального Бюро Контроля, исследующей паранормальные явления. Здание Oldest House меняет свою структуру и физику — каждый коридор скрывает новое открытие. Телекинез и другие сверхъестественные способности дают невероятную свободу в бою. Лор раскрывается через документы, аудиозаписи и кинематографические катсцены. Два DLC связывают вселенную Control с Alan Wake.",
    shortDescription: "Паранормальный экшен в здании, нарушающем законы физики.",
    developer: "Remedy Entertainment",
    publisher: "505 Games",
    releaseDate: "2020-08-27",
    price: 1499,
    discountPercent: 50,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Экшен", "Инди"],
    metacriticScore: 82,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/870780/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/870780/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 7/10 64-bit", processor: "Intel Core i5-7600K / AMD Ryzen 5 1600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 / AMD RX 580", storage: "50 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i7-7700 / AMD Ryzen 7 1700", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 1080 Ti / AMD RX Vega 64", storage: "50 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["паранормальное", "remedy", "телекинез", "лор"]
  },
  {
    id: 75,
    slug: "monster-hunter-rise",
    title: "Monster Hunter Rise",
    titleRu: "Охотник на Монстров: Восход",
    description: "Захватывающая часть Monster Hunter с новой механикой вертикального исследования через Wirebug. Японская деревня Камура и её уникальная эстетика сочетают тему ниндзя и традиционной охоты. Palamute позволяет ездить верхом на собаке-компаньоне, ускоряя перемещение по картам. Все 14 видов оружия получили новые движения через Silkbind Attacks. Дополнение Sunbreak добавляет новый континент и десятки эндгейм-монстров.",
    shortDescription: "Охота на монстров в японской деревне с вертикальным перемещением на Wirebug.",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2022-01-12",
    price: 2499,
    discountPercent: 50,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Экшен"],
    metacriticScore: 87,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1446780/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i3-4130 / AMD FX-6100", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 5500 XT", storage: "24 GB" },
      recommended: { os: "Windows 10 64-bit", processor: "Intel Core i5-4460 / AMD FX-8300", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 5600 XT", storage: "24 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["кооператив", "охота", "японский стиль", "эндгейм"]
  },
  {
    id: 76,
    slug: "metaphor-refantazio",
    title: "Metaphor: ReFantazio",
    titleRu: "Метафора: РеФантазио",
    description: "Амбициозная JRPG от создателей Persona о борьбе за трон фэнтезийного королевства через выборы. Уникальная система Archetype позволяет менять профессии персонажей и комбинировать их способности. Боевая система сочетает тактические пошаговые схватки с экшеном в реальном времени для слабых врагов. Глубокая социальная система раскрывает мотивы каждого уникального персонажа. Саундтрек от Сёдзи Мэгуро продолжает традиции серии Persona.",
    shortDescription: "Необычная JRPG о выборах в фэнтезийном королевстве от авторов Persona.",
    developer: "Atlus",
    publisher: "Sega",
    releaseDate: "2024-10-11",
    price: 4999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Казуальная"],
    metacriticScore: 94,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2679460/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/2679460/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-8600 / AMD Ryzen 5 3600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 5700", storage: "25 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700 / AMD Ryzen 7 3700X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2080 / AMD Radeon RX 6800 XT", storage: "25 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["JRPG", "фэнтези", "выборы", "новинка 2024"]
  },
  {
    id: 77,
    slug: "helldivers-2",
    title: "Helldivers 2",
    titleRu: "Хеллдайверс 2",
    description: "Взрывной кооперативный шутер от третьего лица — вы элитный солдат, несущий демократию жукам и роботам. Страгемы позволяют вызывать мощное оружие и орбитальные удары прямо в бою. Галактическая война — живой контент, где все игроки совместно атакуют планеты врагов в реальном времени. До четырёх игроков в кооперативе с дружественным огнём и весёлым хаосом. Патриотический юмор и саркастический сеттинг превратили игру в культурный феномен 2024 года.",
    shortDescription: "Взрывной кооп-шутер за демократию против жуков и роботов.",
    developer: "Arrowhead Game Studios",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2024-02-08",
    price: 2499,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Шутер", "Экшен"],
    metacriticScore: 82,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/553850/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i7-9700K / AMD Ryzen 7 3700X", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 470", storage: "100 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-9700K / AMD Ryzen 7 3700X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600 XT", storage: "100 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["кооператив", "демократия", "sci-fi", "взрывы"]
  },
  {
    id: 78,
    slug: "dragon-age-the-veilguard",
    title: "Dragon Age: The Veilguard",
    titleRu: "Век Дракона: Страж Завесы",
    description: "Долгожданное продолжение культовой RPG-серии BioWare после 10 лет ожидания. Новый герой Рук собирает команду из семи уникальных компаньонов для противостояния богам Элувиан. Боевая система сочетает динамический экшен с паузой для тактических решений. Мир Тедас расширяется новыми регионами: Минратос, Антива и Тевинтер. Каждый компаньон имеет развитую линию лояльности с разветвлённым нарративом.",
    shortDescription: "Долгожданный Dragon Age с новым героем Руком и семью компаньонами.",
    developer: "BioWare",
    publisher: "Electronic Arts",
    releaseDate: "2024-10-31",
    price: 4999,
    discountPercent: 0,
    platforms: ["pc", "ps", "xbox"],
    genres: ["RPG", "Экшен"],
    metacriticScore: 77,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1845910/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/1845910/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10/11 64-bit", processor: "Intel Core i5-8400 / AMD Ryzen 5 3600", memory: "16 GB RAM", graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 480", storage: "100 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700K / AMD Ryzen 7 5800X", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 3080 / AMD Radeon RX 6800 XT", storage: "100 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["RPG", "bioware", "фэнтези", "компаньоны"]
  },
  {
    id: 79,
    slug: "black-myth-wukong",
    title: "Black Myth: Wukong",
    titleRu: "Чёрный Миф: Укун",
    description: "Эпический экшен-RPG по мотивам китайского классического романа «Путешествие на Запад» от студии Game Science. Потрясающая графика на Unreal Engine 5 с фотореалистичными лесами и монастырями Китая. Боевая система с трансформациями — герой принимает облик побеждённых врагов. Семь глав с уникальными боссами, вдохновлёнными мифами и духами китайского фольклора. Игра стала мировым феноменом и крупнейшим китайским хитом в истории.",
    shortDescription: "Эпический экшен по «Путешествию на Запад» с трансформациями и богами китайского пантеона.",
    developer: "Game Science",
    publisher: "Game Science",
    releaseDate: "2024-08-20",
    price: 3999,
    discountPercent: 0,
    platforms: ["pc", "ps"],
    genres: ["Экшен", "RPG", "SoulsLike"],
    metacriticScore: 82,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/2358720/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i7-9700 / AMD Ryzen 5 5500", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2060 / AMD RX 5700 XT", storage: "130 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-9700 / AMD Ryzen 5 5500", memory: "16 GB RAM", graphics: "NVIDIA GeForce RTX 2080 Ti / AMD RX 6800 XT", storage: "130 GB" }
    },
    isTrending: true,
    isFeatured: false,
    tags: ["китай", "мифология", "soulslike", "трансформации"]
  },
  {
    id: 80,
    slug: "ea-sports-fc-25",
    title: "EA SPORTS FC 25",
    titleRu: "EA SPORTS FC 25",
    description: "Ведущий футбольный симулятор от EA Sports с улучшенным движком FC IQ и реалистичным позиционированием игроков. Режим Ultimate Team позволяет строить команду мечты из тысяч лицензированных игроков. Rush — новый кооперативный режим 5v5 для совместной игры с друзьями. Лицензии 19 000 игроков, 700 клубов и 30 лиг обеспечивают полное погружение. Улучшенная механика ударов и розыгрышей делает каждый матч непредсказуемым.",
    shortDescription: "Ведущий футбольный симулятор с Ultimate Team и новым режимом Rush.",
    developer: "EA Vancouver",
    publisher: "Electronic Arts",
    releaseDate: "2024-09-27",
    price: 3999,
    discountPercent: 20,
    platforms: ["pc", "ps", "xbox"],
    genres: ["Спорт", "Симулятор"],
    metacriticScore: 76,
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg",
    screenshots: [],
    storeLinks: { steam: "https://store.steampowered.com/app/2669320/", psStore: null, xboxStore: null },
    systemRequirements: {
      minimum: { os: "Windows 10 64-bit", processor: "Intel Core i5-6600K / AMD Ryzen 5 1600", memory: "8 GB RAM", graphics: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570", storage: "100 GB" },
      recommended: { os: "Windows 10/11 64-bit", processor: "Intel Core i7-8700 / AMD Ryzen 7 2700X", memory: "12 GB RAM", graphics: "NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 590", storage: "100 GB" }
    },
    isTrending: false,
    isFeatured: false,
    tags: ["футбол", "спорт", "ultimate team", "мультиплеер"]
  }
]

export const genres = ['Экшен', 'Шутер', 'Симулятор', 'Гонки', 'RPG', 'Казуальная', 'SoulsLike', 'Инди', 'Киберпанк', 'Слешер', 'Хоррор', 'Выживание', 'Файтинг', 'Стратегия', 'Платформер', 'Спорт']

export const platforms = [
  { id: 'pc', name: 'PC' },
  { id: 'ps', name: 'PlayStation' },
  { id: 'xbox', name: 'Xbox' }
]
