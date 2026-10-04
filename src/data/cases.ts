export interface CaseStudy {
  id: string;
  issueNumber: string;
  pageSpread: string;
  title: string;
  client: string;
  category: 'Fashion' | 'Horeca' | 'Beauty' | 'Couture';
  categoryLabel: string;
  year: string;
  tagline: string;
  image: string;
  accentColor: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  artDirectionNotes: string;
  quote: {
    text: string;
    author: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'noir-couture',
    issueNumber: 'ISSUE 09',
    pageSpread: 'P. 018 — 025',
    title: 'NOIR COUTURE',
    client: 'Noir Concept Baku',
    category: 'Fashion',
    categoryLabel: 'Haute Runway & Glossy Art Direction',
    year: '2026',
    tagline: 'Gözqamaşdırıcı qara, xrom aksessuarlar və qırmızı dodaq vurğusu ilə qlobal moda jurnalı səviyyəsində SMM',
    image: '/src/assets/images/glossy_cover_fashion_1791142763031.jpg',
    accentColor: '#E52E20',
    metrics: [
      { label: 'Qlobal Üzvi Baxış', value: '4.2M+' },
      { label: 'Engagement Rate', value: '+460%' },
      { label: 'Kolleksiya Satışı', value: '14 Günə 100%' },
      { label: 'Vogue & Dazed Repostları', value: '28 nəşr' },
    ],
    challenge: 'Brend Bakının premium seqmentində fəaliyyət göstərirdi, lakin sosial media hesabları cansız və standart korporativ görünürdü. Müştəri hesabın Vogue və Dazed kimi beynəlxalq parlaq jurnal (глянец) kimi görünməsini istəyirdi.',
    solution: 'Biz brend üçün "High-Gloss Obsidian & Crimson" editorial vizual dili qurduq. Nəm saç stilləri, kəskin studiya işıqları, xrom bəzəklər, dərin qırmızı dodaq boyası və modernist Bodoni-Futura tipoqrafiyası ilə hər postu parlaq jurnal üz qabığına çevirdik.',
    deliverables: ['Editorial Grid Arxitekturası', 'Aylıq 18x Glossy 4K Reels', 'Magazine Cover Formatlı Karusel', 'VIP Influencer Front-Row Seeding'],
    artDirectionNotes: 'Kəskin fləş işığı, nəm parlaqlıq (gloss sheen), xrom və tünd laklı dərinin qırmızı aksentlə kontrastı.',
    quote: {
      text: 'MANIFEST hesabımızı sadəcə idarə etmədi, onu Bakının ən elit rəqəmsal moda jurnalına çevirdi.',
      author: 'Fərid Əliyev · Noir Couture Baş Kreativ Direktoru',
    },
  },
  {
    id: 'aura-parfums',
    issueNumber: 'ISSUE 08',
    pageSpread: 'P. 032 — 039',
    title: 'AURA PARFUMS',
    client: 'Aura Niche Fragrance House',
    category: 'Beauty',
    categoryLabel: 'Lüks Ətir & Still-Life Fotoqrafiya',
    year: '2025',
    tagline: 'Qara obsidian daş, parıldayan su damcıları və qırmızı qızılgül ilə sensor lüks',
    image: '/src/assets/images/glossy_perfume_luxury_1791142784011.jpg',
    accentColor: '#D82216',
    metrics: [
      { label: 'E-ticarət Konversiyası', value: '+185%' },
      { label: 'Lüks Seqment İzləyicisi', value: '+54K' },
      { label: 'Soraq və Sifariş Sayı', value: '3.4X artım' },
      { label: 'Orta Səbət Dəyəri', value: '420 AZN' },
    ],
    challenge: 'Niş ətirləri adi məhsul şəkilləri ilə satmaq olmurdu — ətrin notlarını və lüks hissini vizual olaraq duyurmaq lazım idi.',
    solution: 'Hər bir flakon üçün bədii still-life kompozisiyaları yaratdıq: güzgü kimi cilalanmış nəm obsidian, dərin qırmızı nar və qızılgül damcıları, hiper-real 4K makro çəkilişlər və fəlsəfi fransız editorial mətni.',
    deliverables: ['Sensorial Macro Video Seriyası', 'High-Gloss Reklam Bannerləri', 'Parfümeriya Nağılları (Stories)', 'Lüks Qablaşdırma Unboxing Təcrübəsi'],
    artDirectionNotes: 'Güzgü əksləri, kəskin kəhrəba və yaqut şüşə işıqlanması, dəbdəbəli minimalizm.',
    quote: {
      text: 'İnsanlar postlarımıza baxanda ətrin qoxusunu hiss etdiklərini yazırlar. Satışlarımız rekord həddə çatdı.',
      author: 'Kəmalə Rüstəmova · Aura Parfums Təsisçisi',
    },
  },
  {
    id: 'atelier-rouge',
    issueNumber: 'ISSUE 07',
    pageSpread: 'P. 044 — 051',
    title: 'ATELIER ROUGE',
    client: 'Rouge Vinyl Couture',
    category: 'Couture',
    categoryLabel: 'Qırmızı Lak Dəri & Avant-Garde Dəb',
    year: '2026',
    tagline: 'Cəsarətli qırmızı vinil, futuristik siluetlər və 032c jurnal estetikası',
    image: '/src/assets/images/glossy_fashion_leather_1791142794618.jpg',
    accentColor: '#FF2A1D',
    metrics: [
      { label: 'TikTok Viral Səsi', value: '1.8M baxış' },
      { label: 'İzləyici İnteqrasiyası', value: '14.2%' },
      { label: 'Pre-Order Sifarişləri', value: '620 ədəd' },
      { label: 'Məşhur Sənətçi Geyimləri', value: '12 ulduz' },
    ],
    challenge: 'Yeni açılan avant-garde geyim brendi konservativ standartları qırıb özünü cəsarətli və qlamur elan etmək istəyirdi.',
    solution: 'Berlin və Paris andeqraund klublarının estetikası ilə yüksək parlaq jurnalları birləşdirdik. Qırmızı parlaq dəri trençkotlar, dərin qara fonlar, provokativ editorial başlıqlar və dinamik bas ritmləri ilə TikTok seriyaları.',
    deliverables: ['Viral Qarmaqlı Reels / Shorts', 'Editorial Lookbook Formatı', 'Məşhurlarla Eksklüziv Çəkilişlər', 'Meta Dynamic Retargeting'],
    artDirectionNotes: 'Yüksək parıltılı vinil, monoxrom kəskinlik, parlaq qırmızı akril boya elementləri.',
    quote: {
      text: 'MANIFEST bizə yalnız sosial media vermədi — onlar bizi kult brendə çevirdilər.',
      author: 'Murad İsmayılov · Art Direktoru',
    },
  },
  {
    id: 'runway-baku',
    issueNumber: 'ISSUE 06',
    pageSpread: 'P. 058 — 067',
    title: 'THE RUNWAY EDIT',
    client: 'Baku Fashion Weekend',
    category: 'Fashion',
    categoryLabel: 'Podium Double-Spread & Şou İdarəetməsi',
    year: '2025',
    tagline: 'Ağ minimalist podium və dramatik kölgələr üzərində lüks moda şousu',
    image: '/src/assets/images/glossy_editorial_spread_1791142774632.jpg',
    accentColor: '#E52E20',
    metrics: [
      { label: 'Canlı Yayım İzləyicisi', value: '180K' },
      { label: 'Story Mention Sayı', value: '24.5K' },
      { label: 'Sponsor Brend Çıxışı', value: '+320%' },
      { label: 'Xarici Media Yazıları', value: '19 jurnal' },
    ],
    challenge: 'Azərbaycanın ən böyük moda həftəsi üçün rəqəmsal platformalarda qlobal Paris və Milan moda həftələri səviyyəsində işıqlandırma tələb olunurdu.',
    solution: 'Real-time backstage və podium çəkiliş komandası qurduq. Şou bitən kimi 15 dəqiqə ərzində parlaq jurnal yayımı şəklində kadrlar, double-spread kollajlar və yüksək sürətli Reels yayımladıq.',
    deliverables: ['Canlı Real-Time Backstage SMM', 'Podium Lookbook Double-Spread', 'VIP Qonaqlarla Mikro-Müsahibələr', 'Aftermovie & Sənədli Qısa Film'],
    artDirectionNotes: 'Ultra-təmiz ağ podium, skulptural kölgələr, təmiz Bodoni tipoqrafiyası və ikisəhifəlik jurnal yayımı formatı.',
    quote: {
      text: 'Şou zalda olduğu qədər, İnstaqramda da əsl qlobal hadisəyə çevrildi.',
      author: 'Aysel Quliyeva · Baş Prodüser',
    },
  },
  {
    id: 'nar-das-luxe',
    issueNumber: 'ISSUE 05',
    pageSpread: 'P. 072 — 079',
    title: 'NAR & DAŞ · HAUTE CUISINE',
    client: 'Nar & Daş Fine Dining',
    category: 'Horeca',
    categoryLabel: 'Mişlen Tərzli Qastronomiya & Qlamur',
    year: '2025',
    tagline: 'Qastronomik heykəltaraşlıq, yaqut nar dənələri və qara mərmər',
    image: '/src/assets/images/campaign_culinary_art_1791142119518.jpg',
    accentColor: '#D82216',
    metrics: [
      { label: 'Masa Rezervasiyaları', value: '+300%' },
      { label: 'Elit İzləyici Kütləsi', value: '+48K' },
      { label: 'Viral Estetik Reels', value: '22 video' },
      { label: 'Orta Çek Artımı', value: '+45%' },
    ],
    challenge: 'Premium restoran adi yemək postlarından qaçıb Michelin bələdçisi və lüks qastronomiya jurnalları səviyyəsində imic qurmaq istəyirdi.',
    solution: 'Yeməkləri zərgərlik və heykəltaraşlıq kimi çəkdik. Chiaroscuro qaranlıq mərmər, parıldayan şüşə kokteyllər, yaqut nar damlaları və fransız poeziyası ilə yoğrulmuş səs dizaynı.',
    deliverables: ['Gastronomy Sensory Reels', 'Menyu Art-Direkşn', 'Şef Masası Sənədli Çəkilişləri', 'Özəl Tədbir Təqdimatları'],
    artDirectionNotes: 'Qara mərmər refleksi, qırmızı yaqut tonları, kristal şüşə sındırmaları və Bodoni başlıqlar.',
    quote: {
      text: 'Müştərilərimiz artıq adi restorana deyil, sənət qalereyasına gəldiklərini hiss edirlər.',
      author: 'Leyla Məmmədova · Art Direktoru, Nar & Daş',
    },
  },
];
