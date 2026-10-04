import React, { useState } from 'react';
import { Lang, TRANSLATIONS } from '../data/translations';
import { ArrowUpRight, Plus, Minus, CheckCircle2, Sparkles, Layers, Video, Palette, Target, Compass } from 'lucide-react';

interface ServicesSectionProps {
  currentLang: Lang;
  onSelectServiceForBrief: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onSelectServiceForBrief,
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'packages'>('services');
  const [activeItem, setActiveItem] = useState<number | null>(0); // First item open by default

  // Exact services from User's uploaded screenshot in AZ, with RU and EN counterparts
  const servicesContent = {
    AZ: [
      {
        num: '01',
        title: 'SMM və Instagram səhifəsinin idarə olunması',
        shortDesc: 'Paylaşım planı, postlar, Stories, mətnlər, dizayn və kontentin hazırlanması.',
        fullDesc: 'Instagram səhifənizin tam dövriyyəli idarə edilməsi: estetik grid arxitekturası, cəlbedici Stories ssenariləri, dərin təsir bağışlayan mətnlər və hər bir postun brend kodeksinə uyğunlaşdırılması.',
        badge: 'Kompleks & Fərdi',
        icon: Layers,
        image: '/src/assets/images/glossy_editorial_spread_1791142774632.jpg',
        deliverables: [
          'Aylıq strateji paylaşım planı (Roadmap)',
          'Eksklüziv post və Stories vizual dizaynı',
          'Kopiraytinq və emosional mətnlər',
          'İzləyici rəyləri və mesajların moderasiyası',
          'Aylıq analitik hesabat və inkişaf tövsiyələri',
        ],
      },
      {
        num: '02',
        title: 'Kontent strategiyası',
        shortDesc: 'Auditoriyanın müəyyənləşdirilməsi, brendin ünsiyyət tərzi və kontentin planlaşdırılması.',
        fullDesc: 'Hər bir paylaşımın arxasında dəqiq məqsəd durur. Biz hədəf auditoriyanızın psixologiyasını dekonstruksiya edir, unikal brend səsini (Tone of Voice) formalaşdırır və sizi rəqiblərdən ayıran məzmun sütunları yaradırıq.',
        badge: 'Ayrıca sifariş mümkündür',
        icon: Compass,
        image: '/src/assets/images/tmr_clean_building_1791144694622.jpg',
        deliverables: [
          'Hədəf auditoriyanın dərindən seqmentasiyası',
          'Brendin unikal ünsiyyət tərzi (Tone of Voice)',
          'Məzmun arxitekturası və rubrikalar',
          'Rəqiblərin vizual və kommunikasiya auditi',
          'Fərdi kontent bələdçisi (Content Playbook)',
        ],
      },
      {
        num: '03',
        title: 'Kreativ və dizayn',
        shortDesc: 'Kreativ ideyalar, Reels ssenariləri, post və Stories dizaynı, kopiraytinq və brend üslubuna uyğun vizuallar.',
        fullDesc: 'Standart Canva şablonlarını unudun. Biz İsveçrə modernizmi, cəsarətli tipoqrafiya və avanqard rəqəmsal kollaj elementləri ilə brendiniz üçün yüksək moda səviyyəsində vizual dil yaradırıq.',
        badge: 'Ayrıca sifariş mümkündür',
        icon: Palette,
        image: '/src/assets/images/glossy_cover_fashion_1791142763031.jpg',
        deliverables: [
          'Avanqard post və karusel dizaynları',
          'Reels üçün viraI ideyalar və kadr-bə-kadr ssenarilər',
          'İnteraktiv Stories dizayn sistemi',
          'Müəllif kopiraytinqi və şüarlar',
          'Highlights və vizual profil naviqasiyası',
        ],
      },
      {
        num: '04',
        title: 'Foto və video çəkilişləri',
        shortDesc: 'Peşəkar fotosessiyalar, Reels çəkilişləri, mobil və peşəkar avadanlıqla çəkiliş, montaj.',
        fullDesc: 'Kinematoqrafik optika, düzgün işıq rejissurası və dinamik ritmli montaj. Məhsulunuzu və xidmətinizi sənət əsərinə çevirən studiya və məkan çəkilişləri.',
        badge: 'Çəkiliş günü / Aylıq',
        icon: Video,
        image: '/src/assets/images/careers_studio_vibe_1791142147571.jpg',
        deliverables: [
          'Peşəkar kinokamera və studiya işıqlandırması',
          'Yüksək keyfiyyətli mobil çəkilişlər (iPhone 16 Pro / Log)',
          'Dinamik montaj və rəng korreksiyası (Color Grading)',
          'Trend saund-dizayn və səs təmizlənməsi',
          'Reels, Shorts və TikTok üçün xüsusi formatlaşdırma',
        ],
      },
      {
        num: '05',
        title: 'Hədəflənmiş reklam və analitika',
        shortDesc: 'Meta platformalarında reklamların qurulması, yayımlanması, optimallaşdırılması və nəticələrin təhlili.',
        fullDesc: 'Kreativ vizualları dəqiq riyazi alqoritmlərlə birləşdiririk. Meta Ads (Instagram & Facebook) platformasında büdcənizin hər qəpiyinin real müraciətə və satışa çevrilməsi üçün optimizasiya.',
        badge: 'Ayrıca sifariş mümkündür',
        icon: Target,
        image: '/src/assets/images/campaign_digital_culture_1791142136140.jpg',
        deliverables: [
          'Meta Ads Manager kabinetinin peşəkar qurulması',
          'Dəqiq auditoriya hədəfləməsi və Lookalike qrupları',
          'A/B testləri: ən yaxşı işləyən kreativlərin aşkarlanması',
          'Büdcənin gündəlik optimizasiyası (CPA / ROAS)',
          'Dərin nəticə və satış konversiyası hesabatı',
        ],
      },
    ],
    RU: [
      {
        num: '01',
        title: 'SMM и ведение Instagram-аккаунта',
        shortDesc: 'План публикаций, посты, Stories, тексты, дизайн и подготовка контента.',
        fullDesc: 'Полный цикл управления профилем: сетка публикаций, вовлекающие Stories, продающие и экспертные тексты, и приведение каждого элемента к строгому брендбуку.',
        badge: 'Комплексно & Отдельно',
        icon: Layers,
        image: '/src/assets/images/glossy_editorial_spread_1791142774632.jpg',
        deliverables: [
          'Ежемесячный стратегический контент-план',
          'Эксклюзивный дизайн постов и Stories',
          'Авторский копирайтинг и тональность текста',
          'Модерация комментариев и входящих сообщений',
          'Ежемесячный отчет с анализом метрик и точек роста',
        ],
      },
      {
        num: '02',
        title: 'Контент-стратегия',
        shortDesc: 'Определение целевой аудитории, тональность коммуникации и планирование контента.',
        fullDesc: 'Никаких случайных публикаций. Мы деконструируем поведение вашей аудитории, определяем уникальный голос бренда (Tone of Voice) и выстраиваем систему смыслов.',
        badge: 'Доступно отдельно',
        icon: Compass,
        image: '/src/assets/images/tmr_clean_building_1791144694622.jpg',
        deliverables: [
          'Глубокий анализ сегментов целевой аудитории',
          'Формирование голоса бренда (Tone of Voice)',
          'Рубрикатор и контентная архитектура',
          'Аудит конкурентов и поиск голубых океанов',
          'Фирменный гайдлайн по контенту (Content Playbook)',
        ],
      },
      {
        num: '03',
        title: 'Креатив и дизайн',
        shortDesc: 'Креативные идеи, сценарии Reels, дизайн постов и Stories, копирайтинг и визуальный стиль.',
        fullDesc: 'Забудьте о шаблонных постерах из Canva. Мы создаем смелую графику на стыке высокой моды, швейцарского минимализма и авангардного арт-дирекшна.',
        badge: 'Доступно отдельно',
        icon: Palette,
        image: '/src/assets/images/glossy_cover_fashion_1791142763031.jpg',
        deliverables: [
          'Авангардный графический дизайн постов и каруселей',
          'Виральные сценарии для Reels с таймингом и хуками',
          'Интерактивная дизайн-система для Stories',
          'Концептуальный копирайтинг и слоганы',
          'Айдентика Highlights и визуальная навигация',
        ],
      },
      {
        num: '04',
        title: 'Фото и видеосъемка',
        shortDesc: 'Профессиональные фотосессии, съемка Reels, мобильное и кинематографическое оборудование, монтаж.',
        fullDesc: 'Кинокамеры, авторский свет и клиповый ритмичный монтаж. Студийные и выездные съемки, которые превращают бренд в визуальный культ.',
        badge: 'Съемочный день / Ежемесячно',
        icon: Video,
        image: '/src/assets/images/careers_studio_vibe_1791142147571.jpg',
        deliverables: [
          'Съемка на кинокамеры с оптикой премиум-класса',
          'Динамичная мобильная съемка (iPhone 16 Pro / Log)',
          'Ритмичный монтаж и кинематографический колоргрейдинг',
          'Трендовый саунд-дизайн и сведение звука',
          'Форматирование под алгоритмы Reels, Shorts и TikTok',
        ],
      },
      {
        num: '05',
        title: 'Таргетированная реклама и аналитика',
        shortDesc: 'Настройка рекламы на платформах Meta, запуск, оптимизация и детальный анализ результатов.',
        fullDesc: 'Смелый креатив, усиленный строгими алгоритмами. Настройка таргетинга в Meta Ads (Instagram & Facebook), где каждый рекламный доллар приносит реальных клиентов.',
        badge: 'Доступно отдельно',
        icon: Target,
        image: '/src/assets/images/campaign_digital_culture_1791142136140.jpg',
        deliverables: [
          'Профессиональная настройка Meta Ads Manager',
          'Точный таргетинг и сегменты Lookalike аудиторий',
          'A/B тестирование визуалов и заголовков',
          'Ежедневная оптимизация цены заявки (CPA / ROAS)',
          'Прозрачная еженедельная отчетность по конверсиям',
        ],
      },
    ],
    EN: [
      {
        num: '01',
        title: 'SMM & Instagram Account Management',
        shortDesc: 'Publishing schedule, posts, Stories, copywriting, design and content execution.',
        fullDesc: 'End-to-end Instagram profile stewardship: avant-garde feed grid layouts, viral Stories narrative hooks, persuasive copy, and strict brand identity adherence.',
        badge: 'Comprehensive & Standalone',
        icon: Layers,
        image: '/src/assets/images/glossy_editorial_spread_1791142774632.jpg',
        deliverables: [
          'Monthly strategic content architecture (Roadmap)',
          'Exclusive post and Stories editorial design',
          'Compelling brand storytelling and copywriting',
          'Community engagement and comment moderation',
          'Monthly analytics reporting and growth forecasting',
        ],
      },
      {
        num: '02',
        title: 'Content Strategy',
        shortDesc: 'Target audience identification, brand tone of voice definition, and content scheduling.',
        fullDesc: 'Purpose behind every frame. We deconstruct audience psychology, craft an unmistakably distinct Tone of Voice, and architect content pillars that command authority.',
        badge: 'Available Standalone',
        icon: Compass,
        image: '/src/assets/images/tmr_clean_building_1791144694622.jpg',
        deliverables: [
          'Comprehensive target demographic segmentation',
          'Proprietary Brand Tone of Voice doctrine',
          'Content pillars and programmatic recurring formats',
          'Visual competitor audit and market positioning',
          'Bespoke Content Playbook guide',
        ],
      },
      {
        num: '03',
        title: 'Creative Ideation & Visual Design',
        shortDesc: 'Creative concepts, Reels scripting, post & Stories design, copywriting and branded aesthetics.',
        fullDesc: 'Zero generic templates. We build an haute-couture visual language using Swiss modernist typography, high-contrast collage, and provocative aesthetic direction.',
        badge: 'Available Standalone',
        icon: Palette,
        image: '/src/assets/images/glossy_cover_fashion_1791142763031.jpg',
        deliverables: [
          'Avant-garde graphic post and carousel compositions',
          'Viral Reels scripts with 3-second retention hooks',
          'Interactive Stories design system',
          'Conceptual copywriting and headline manifestos',
          'Highlights cover architecture and grid layout',
        ],
      },
      {
        num: '04',
        title: 'Photo & Video Production',
        shortDesc: 'Editorial photoshoots, Reels production, mobile & cinema camera equipment, editing.',
        fullDesc: 'Cinema-grade optics, editorial lighting, and high-retention rhythmic editing. Studio and on-location shoots transforming your brand into an object of desire.',
        badge: 'Production Day / Monthly',
        icon: Video,
        image: '/src/assets/images/careers_studio_vibe_1791142147571.jpg',
        deliverables: [
          'Cinema-grade camera and lighting apparatus',
          'Dynamic high-end mobile filmmaking (iPhone 16 Pro / Log)',
          'Rhythmic editing and cinematic color grading',
          'Trending sound design and audio mastering',
          'Platform-specific exports for Reels, Shorts, and TikTok',
        ],
      },
      {
        num: '05',
        title: 'Targeted Performance Ads & Analytics',
        shortDesc: 'Meta advertising setup, campaign execution, algorithmic optimization and performance reporting.',
        fullDesc: 'Where radical art direction meets algorithmic rigor. Optimizing Meta Ads (Instagram & Facebook) to ensure every marketing dollar translates to measurable revenue.',
        badge: 'Available Standalone',
        icon: Target,
        image: '/src/assets/images/campaign_digital_culture_1791142136140.jpg',
        deliverables: [
          'Meta Ads Manager technical architecture and setup',
          'Precision audience targeting and Lookalike modeling',
          'Systematic A/B creative hook testing',
          'Daily CPA and ROAS bidding optimization',
          'Transparent weekly attribution and conversion reports',
        ],
      },
    ],
  };

  // Packages (As mentioned in User's screenshot: "Əməkdaşlıq paketlərini də burada yerləşdirmək olar")
  const packagesContent = {
    AZ: [
      {
        name: 'START // VİTİRN',
        tag: 'Baza Mövcudluq',
        price: 'Fərdi Hesablama',
        desc: 'Profilin estetik baxımdan qaydaya salınması və nizamlı, peşəkar görünüşü üçün təməl paket.',
        features: [
          '12 vizual post və karusel',
          '30 Stories paylaşımı və dizaynı',
          'Məzmun planı və kopiraytinq',
          'Instagram səhifəsinin vizual auditi',
          'Ay sonu analitik hesabat',
        ],
      },
      {
        name: 'GROWTH // AVANQARD',
        tag: 'Populyar Seçim',
        isPopular: true,
        price: 'Fərdi Hesablama',
        desc: 'Baxış sayını partladan, üzvi kəşfiyyat və davamlı müştəri axını yaradan tam idarəetmə.',
        features: [
          '18 post və premium karusellər',
          '60 Stories (interaktiv və satış yönümlü)',
          '8 Peşəkar kinematoqrafik Reels',
          '1 Tam çəkiliş günü (foto & video)',
          'Meta Ads hədəfli reklamın idarəsi',
          'Şəxsi layihə meneceri',
        ],
      },
      {
        name: 'CULT 360° // DOMİNANT',
        tag: 'Eksklüziv Liderlik',
        price: 'Fərdi Hesablama',
        desc: 'Bazarda dominant mövqe tutmaq istəyən brendlər üçün tam hərtərəfli art-direkşn və media prodakşn.',
        features: [
          '24 Eksklüziv post və editorial kollajlar',
          'Gündəlik aktiv Stories sistemi',
          '16 Kinematoqrafik Reels və TikTok',
          '2 Tam çəkiliş günü (peşəkar aktyor/model dəstəyi)',
          'Brend Tone of Voice və tam kontent strategiyası',
          'Genişmiqyaslı Meta Ads performans optimizasiyası',
          'Həftəlik strategiya görüşləri',
        ],
      },
    ],
    RU: [
      {
        name: 'START // ВИТРИНА',
        tag: 'Базовый Уровень',
        price: 'По Запросу',
        desc: 'Приведение профиля к идеальному эстетическому порядку и регулярное качественное присутствие.',
        features: [
          '12 дизайнерских постов и каруселей',
          '30 продуманных Stories с интерактивами',
          'Контент-план и авторский копирайтинг',
          'Визуальный аудит и чистка профиля',
          'Ежемесячный аналитический отчет',
        ],
      },
      {
        name: 'GROWTH // АВАНГАРД',
        tag: 'Хит Продаж',
        isPopular: true,
        price: 'По Запросу',
        desc: 'Взрывной органический охват в Reels и системное привлечение лояльной премиальной аудитории.',
        features: [
          '18 постов и премиальных каруселей',
          '60 Stories (прогревы и витрина)',
          '8 Кинематографичных виральных Reels',
          '1 Полноценный съемочный день (фото + видео)',
          'Ведение таргетированной рекламы Meta Ads',
          'Персональный проектный менеджер',
        ],
      },
      {
        name: 'CULT 360° // ДОМИНАЦИЯ',
        tag: 'Флагманский Пакет',
        price: 'По Запросу',
        desc: 'Полный арт-дирекшн и бескомпромиссное лидерство в нише для брендов первого эшелона.',
        features: [
          '24 Эксклюзивных поста и эдиториал-коллажей',
          'Ежедневная динамичная система Stories',
          '16 Кино-Reels с профессиональным звуком',
          '2 Съемочных дня с кастингом моделей',
          'Разработка Tone of Voice и контент-стратегии',
          'Масштабирование таргетированной рекламы Meta',
          'Еженедельные стратегические сессии',
        ],
      },
    ],
    EN: [
      {
        name: 'START // SHOWCASE',
        tag: 'Essential Tier',
        price: 'Custom Quote',
        desc: 'Establish a pristine aesthetic foundation and maintain a consistent, high-fashion social presence.',
        features: [
          '12 bespoke graphic posts & carousels',
          '30 branded interactive Stories',
          'Monthly content calendar & copy',
          'Visual profile audit & highlights setup',
          'End-of-month metric report',
        ],
      },
      {
        name: 'GROWTH // AVANT-GARDE',
        tag: 'Most Popular',
        isPopular: true,
        price: 'Custom Quote',
        desc: 'Accelerate organic reach through viral short-form video and strategic algorithmic paid distribution.',
        features: [
          '18 editorial posts & carousels',
          '60 conversion-focused Stories',
          '8 Cinema-grade viral Reels',
          '1 Full production shoot day (photo & video)',
          'Meta Ads targeting campaign management',
          'Dedicated account director',
        ],
      },
      {
        name: 'CULT 360° // DOMINANCE',
        tag: 'Flagship Retainer',
        price: 'Custom Quote',
        desc: 'Full-spectrum creative direction and dominant cultural market presence for luxury and visionary brands.',
        features: [
          '24 Bespoke editorial compositions',
          'Daily dynamic Stories narrative system',
          '16 High-retention cinematic Reels & TikToks',
          '2 Full production shoot days with model casting',
          'Full Tone of Voice doctrine & content strategy',
          'High-budget Meta Ads conversion scaling',
          'Weekly executive strategy sessions',
        ],
      },
    ],
  };

  const list = servicesContent[currentLang];
  const packages = packagesContent[currentLang];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#ECEAE5] border-b border-[#181819]/15 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 border-b border-[#181819]/15 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#D12C26]" />
              <span className="text-xs font-futura tracking-[0.25em] text-[#D12C26] uppercase font-black">
                [ 02 ] // SERVICES & PACKAGES
              </span>
            </div>
            <h2 className="font-futura text-3xl sm:text-5xl lg:text-6xl font-black text-[#181819] uppercase tracking-tight">
              {currentLang === 'AZ'
                ? 'XİDMƏTLƏRİMİZ VƏ İMKANLAR'
                : currentLang === 'RU'
                ? 'УСЛУГИ И ЭКСПЕРТИЗА'
                : 'SERVICES & EXPERTISE'}
            </h2>
          </div>

          {/* Toggle between Individual Services & Collaboration Packages */}
          <div className="flex items-center gap-2 border border-[#181819] p-1 bg-[#181819]/5">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 sm:px-6 py-2.5 text-xs font-futura font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-[#181819] text-white shadow-sm'
                  : 'text-[#181819] hover:text-[#D12C26]'
              }`}
            >
              {currentLang === 'AZ' ? 'Xidmətlər Siyahısı' : currentLang === 'RU' ? 'Список Услуг' : 'Individual Services'}
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-4 sm:px-6 py-2.5 text-xs font-futura font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'packages'
                  ? 'bg-[#D12C26] text-white shadow-sm'
                  : 'text-[#181819] hover:text-[#D12C26]'
              }`}
            >
              <span>{currentLang === 'AZ' ? 'Əməkdaşlıq Paketləri' : currentLang === 'RU' ? 'Пакеты Сотрудничества' : 'Retainer Packages'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </button>
          </div>
        </div>

        {/* TAB 1: INDIVIDUAL SERVICES (Accurate 1-to-1 match with user screenshot) */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            {list.map((srv, idx) => {
              const isOpen = activeItem === idx;
              const IconComponent = srv.icon;
              return (
                <div
                  key={srv.num}
                  className={`border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#181819] bg-white shadow-md'
                      : 'border-[#181819]/20 bg-[#ECEAE5] hover:border-[#181819]/60'
                  }`}
                >
                  {/* Service Header Row */}
                  <div
                    onClick={() => setActiveItem(isOpen ? null : idx)}
                    className="p-6 sm:p-8 flex items-start sm:items-center justify-between cursor-pointer gap-4"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-8">
                      {/* Number */}
                      <span className="font-futura text-xs sm:text-sm font-black tracking-widest text-[#D12C26] shrink-0 pt-1 sm:pt-0">
                        [ {srv.num} ]
                      </span>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#181819]/5 flex items-center justify-center shrink-0 hidden md:flex text-[#181819]">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Title & Short Description */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <h3 className="font-futura text-xl sm:text-2xl lg:text-3xl font-black text-[#181819] tracking-tight group-hover:text-[#D12C26] transition-colors">
                            {srv.title}
                          </h3>
                          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 border border-[#181819]/30 text-neutral-600 bg-neutral-100 font-bold">
                            {srv.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-600 font-futura mt-1">
                          {srv.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="shrink-0 flex items-center gap-2 pt-1 sm:pt-0">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                          isOpen
                            ? 'bg-[#D12C26] border-[#D12C26] text-white'
                            : 'border-black/20 text-[#181819] hover:border-[#D12C26] hover:text-[#D12C26]'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Editorial Content */}
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-neutral-200">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                        
                        {/* Left: Detailed Text + Deliverables */}
                        <div className="lg:col-span-8 space-y-6">
                          <p className="font-futura text-sm sm:text-base text-neutral-800 leading-relaxed">
                            {srv.fullDesc}
                          </p>

                          <div>
                            <div className="text-xs font-mono text-[#D12C26] uppercase font-bold tracking-widest mb-3">
                              {currentLang === 'AZ'
                                ? '// XİDMƏTƏ DAXİLDİR (DELIVERABLES):'
                                : currentLang === 'RU'
                                ? '// В СТОИМОСТЬ ВХОДИТ (DELIVERABLES):'
                                : '// DELIVERABLES & SCOPE:'}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {srv.deliverables.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2.5 text-xs font-futura text-neutral-700 bg-neutral-50 p-2.5 border border-black/5"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#D12C26] shrink-0 mt-0.5" />
                                  <span className="font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <div className="pt-2">
                            <button
                              onClick={() => onSelectServiceForBrief(srv.title)}
                              className="px-6 py-3.5 bg-[#181819] hover:bg-[#D12C26] text-white text-xs font-futura font-black uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
                            >
                              <span>
                                {currentLang === 'AZ'
                                  ? 'BU XİDMƏTİ SİFARİŞ ET'
                                  : currentLang === 'RU'
                                  ? 'ВЫБРАТЬ ЭТУ УСЛУГУ'
                                  : 'COMMISSION THIS SERVICE'}
                              </span>
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Right: High-fashion Editorial Preview Photo */}
                        <div className="lg:col-span-4">
                          <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-black/15 shadow-md relative group">
                            <img
                              src={srv.image}
                              alt={srv.title}
                              className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-2 right-2 bg-[#181819] px-2 py-0.5 text-[9px] font-mono text-white tracking-widest">
                              TMR PRODUCTION
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: PACKAGES (Əməkdaşlıq Paketləri) */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-8 border flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular
                    ? 'border-[#D12C26] bg-[#181819] text-[#ECEAE5] shadow-xl relative'
                    : 'border-[#181819]/20 bg-white text-[#181819] hover:border-[#181819]'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 right-6 bg-[#D12C26] text-white text-[10px] font-futura font-black uppercase px-3 py-1 tracking-widest shadow-sm">
                    {pkg.tag}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${
                      pkg.isPopular ? 'text-[#D12C26]' : 'text-neutral-500'
                    }`}>
                      [ 0{idx + 1} // TIER ]
                    </span>
                    {!pkg.isPopular && (
                      <span className="text-[10px] font-mono uppercase border border-black/20 px-2 py-0.5 text-neutral-600">
                        {pkg.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="font-futura text-2xl font-black uppercase tracking-tight mb-2">
                    {pkg.name}
                  </h3>

                  <p className={`font-futura text-xs leading-relaxed mb-6 ${
                    pkg.isPopular ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {pkg.desc}
                  </p>

                  <div className="border-t border-current/15 pt-6 mb-8 space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs font-futura">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          pkg.isPopular ? 'bg-[#D12C26]' : 'bg-[#181819]'
                        }`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectServiceForBrief(`Paket: ${pkg.name}`)}
                    className={`w-full py-4 text-xs font-futura font-black uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 ${
                      pkg.isPopular
                        ? 'bg-[#D12C26] hover:bg-[#b5221d] text-white shadow-lg'
                        : 'bg-[#181819] hover:bg-[#D12C26] text-white'
                    }`}
                  >
                    <span>
                      {currentLang === 'AZ'
                        ? 'PAKETİ SEÇİN'
                        : currentLang === 'RU'
                        ? 'ВЫБРАТЬ ПАКЕТ'
                        : 'SELECT PACKAGE'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Note from screenshot: "Hansı xidmətlərin ayrıca sifariş edilə bildiyini..." */}
        <div className="mt-12 p-6 border border-[#181819]/15 bg-neutral-100/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D12C26]" />
            <p className="font-futura text-xs text-neutral-600 leading-relaxed">
              {currentLang === 'AZ'
                ? 'Qeyd: Xidmətlərimiz həm ayrıca, həm də kompleks paket şəklində sifariş edilə bilər. İlkin konsultasiya zamanı biznesinizə ən uyğun format dəqiqləşdirilir.'
                : currentLang === 'RU'
                ? 'Примечание: Услуги могут заказываться как отдельно, так и в рамках комплексного ежемесячного пакета. Формат сотрудничества подбирается на первичной консультации.'
                : 'Note: Services can be contracted individually or as part of a turnkey monthly retainer. The optimal format is customized during the initial strategy consultation.'}
            </p>
          </div>

          <a
            href="#contact"
            className="text-xs font-futura font-bold text-[#D12C26] hover:underline whitespace-nowrap uppercase tracking-wider"
          >
            {currentLang === 'AZ' ? 'Konsultasiya al →' : currentLang === 'RU' ? 'Получить консультацию →' : 'Book a Call →'}
          </a>
        </div>

      </div>
    </section>
  );
};
