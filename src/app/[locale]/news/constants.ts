export const NewsPageData = {
  ru: {
    title: "Новости и события",
    subtitle:
      "Последние новости в мире искусственного интеллекта в Узбекистане и мире",
    searchPlaceholder: "Поиск новостей...",
    filters: {
      all: "Все",
      uzbekistan: "Узбекистан",
      world: "Мир",
      events: "Мероприятия",
    },
    newsletter: {
      title: "Подписаться на дайджест",
      description: "Получайте еженедельные новости об ИИ в Узбекистане",
      placeholder: "Введите ваш email",
      button: "Подписаться",
    },
    readMore: "Читать далее",
  },
  uz: {
    title: "Yangiliklar va voqealar",
    subtitle:
      "O'zbekiston va dunyoda sun'iy intellekt sohasidagi so'nggi yangiliklar",
    searchPlaceholder: "Yangiliklar qidirish...",
    filters: {
      all: "Barchasi",
      uzbekistan: "O'zbekiston",
      world: "Dunyo",
      events: "Voqealar",
    },
    newsletter: {
      title: "Dayjest obunasi",
      description: "O'zbekistonda AI haqida haftalik yangiliklar oling",
      placeholder: "Email manzilingizni kiriting",
      button: "Obuna bo'lish",
    },
    readMore: "Davomini o'qish",
  },
  en: {
    title: "News and Events",
    subtitle:
      "Latest news in artificial intelligence in Uzbekistan and around the world",
    searchPlaceholder: "Search news...",
    filters: {
      all: "All",
      uzbekistan: "Uzbekistan",
      world: "World",
      events: "Events",
    },
    newsletter: {
      title: "Subscribe to Digest",
      description: "Get weekly AI news from Uzbekistan",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
    readMore: "Read more",
  },
};

export const newsItems = [
  {
    id: 1,
    title: {
      ru: "IT-парк Ташкента запускает новую AI-лабораторию",
      uz: "Toshkent IT-park yangi AI laboratoriyasini ishga tushirmoqda",
      en: "Tashkent IT Park launches new AI laboratory",
    },
    excerpt: {
      ru: "Новая лаборатория будет заниматься исследованиями в области компьютерного зрения и обработки естественного языка для узбекского языка",
      uz: "Yangi laboratoriya kompyuter ko'rishi va o'zbek tili uchun tabiiy tilni qayta ishlash sohasida tadqiqotlar olib boradi",
      en: "The new laboratory will focus on computer vision and natural language processing research for the Uzbek language",
    },
    date: "2025-01-02",
    category: "uzbekistan",
    image:
      "https://images.unsplash.com/photo-1646153389640-958d7ba1a864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHRlY2glMjBzdGFydHVwfGVufDF8fHx8MTc1NjgyMjgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
  },
  {
    id: 2,
    title: {
      ru: "Международная конференция AI Summit 2025 в Самарканде",
      uz: "Samarqandda xalqaro AI Summit 2025 konferentsiyasi",
      en: "International AI Summit 2025 conference in Samarkand",
    },
    excerpt: {
      ru: "15-16 марта состоится крупнейшая конференция по ИИ в Центральной Азии с участием ведущих мировых экспертов",
      uz: "15-16 mart kunlari dunyoning yetakchi mutaxassislari ishtirokida Markaziy Osiyodagi eng yirik AI konferentsiyasi bo'lib o'tadi",
      en: "March 15-16 will host the largest AI conference in Central Asia with leading world experts",
    },
    date: "2025-01-01",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY4MjI4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: {
      ru: "Google открывает исследовательский центр в Ташкенте",
      uz: "Google Toshkentda tadqiqot markazini ochmoqda",
      en: "Google opens research center in Tashkent",
    },
    excerpt: {
      ru: "Глобальная технологическая компания планирует нанять 200 местных специалистов для работы над AI-проектами",
      uz: "Global texnologik kompaniya AI loyihalari ustida ishlash uchun 200 mahalliy mutaxassisni ishga olishni rejalashtirmoqda",
      en: "The global tech company plans to hire 200 local specialists to work on AI projects",
    },
    date: "2024-12-30",
    category: "uzbekistan",
    image:
      "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBmdXR1cmV8ZW58MXx8fHwxNzU2ODIyODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: {
      ru: "OpenAI представила GPT-5: революция в ИИ",
      uz: "OpenAI GPT-5 ni taqdim etdi: AI sohasida inqilob",
      en: "OpenAI introduced GPT-5: AI revolution",
    },
    excerpt: {
      ru: "Новая модель демонстрирует невиданные ранее возможности в понимании и генерации контента",
      uz: "Yangi model kontentni tushunish va yaratishda ilgari ko'rilmagan imkoniyatlarni namoyish etadi",
      en: "The new model demonstrates unprecedented capabilities in content understanding and generation",
    },
    date: "2024-12-28",
    category: "world",
    image:
      "https://images.unsplash.com/photo-1587124367855-97579a3eec12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMHV6YmVraXN0YW58ZW58MXx8fHwxNzU2ODIyODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: {
      ru: "Студенты ТУИТ выиграли международный AI-хакатон",
      uz: "TUIT talabalari xalqaro AI xakatonini yutib oldilar",
      en: "TUIT students won international AI hackathon",
    },
    excerpt: {
      ru: "Команда создала AI-систему для диагностики заболеваний по медицинским снимкам",
      uz: "Jamoa tibbiy suratlar orqali kasalliklarni tashxislash uchun AI tizimini yaratdi",
      en: "The team created an AI system for diagnosing diseases from medical images",
    },
    date: "2024-12-25",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY4MjI4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: {
      ru: "ЕС инвестирует €10 млрд в развитие AI",
      uz: "Yevropa Ittifoqi AI rivojlantirishga 10 mlrd evro sarmoya kiritadi",
      en: "EU invests €10 billion in AI development",
    },
    excerpt: {
      ru: "Новая программа направлена на поддержку европейских AI-стартапов и исследований",
      uz: "Yangi dastur yevropa AI startaplari va tadqiqotlarini qo'llab-quvvatlashga qaratilgan",
      en: "The new program aims to support European AI startups and research",
    },
    date: "2024-12-20",
    category: "world",
    image:
      "https://images.unsplash.com/photo-1646153389640-958d7ba1a864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHRlY2glMjBzdGFydHVwfGVufDF8fHx8MTc1NjgyMjgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];
