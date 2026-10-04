export interface JobPosition {
  id: string;
  code: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  brief: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'art-director',
    code: 'POS-01',
    title: 'Senior Art Director & Visual Alchemist',
    department: 'Kreativ Departament',
    type: 'Tam ştat (Full-time)',
    location: 'Bakı, Studiya (Nizami 142)',
    experience: '3+ il təcrübə',
    brief: 'Biz şablon dizaynlara nifrət edirik. Əgər sən modernist tipoqrafiyanı sevir, kollajlar yaradır, brendin ruhunu bir kadrla çatdırmağı bacarırsansa, komandamızın vizual lideri ol.',
    responsibilities: [
      'Bütün müştərilərimiz üçün unikal visual identity və editorial grid dizaynı',
      'Foto və video çəkilişlərin art-direksiyası və mudbordların hazırlanması',
      'Kiçik dizaynerlərə mentorluq və işlərin estetik nəzarəti',
      'Brend təqdimatları və pitch vizuallarının hazırlanması',
    ],
    requirements: [
      'Güclü tipoqrafiya, kompozisiya və rəng duyumu (portfolio mütləqdir)',
      'Photoshop, Illustrator, Figma, InDesign bilikləri yüksək səviyyədə',
      'Müasir moda, arxitektura və rəqəmsal sənət trendlərini dərindən izləmək',
      'Tələbkar zövq və komandada işləmək bacarığı',
    ],
    perks: [
      'Ən son model MacBook Pro M3 & 4K Studio Display',
      'İllik 1,500 AZN şəxsi təhsil və dizayn kitabları fondu',
      'Sərbəst qrafik və qəhvə / çay / meyvə ilə təmin olunmuş loft studiya',
    ],
  },
  {
    id: 'smm-strategist',
    code: 'POS-02',
    title: 'Lead SMM Strategist & Cultural Researcher',
    department: 'Strategiya & Məzmun',
    type: 'Tam ştat (Full-time)',
    location: 'Hibrid (Studiya + Remote)',
    experience: '2+ il təcrübə',
    brief: 'Sosial medianı sadəcə post qoymaq yeri kimi deyil, brendin ən böyük rəqəmsal mədəniyyət platforması kimi görən strateq axtarırıq.',
    responsibilities: [
      'Yeni brendlər üçün hərtərəfli SMM strategiyalarının hazırlanması',
      'Auditoriya təhlili, rəqib monitorinqi və yeni məzmun formatlarının kəşfi',
      'Aylıq məzmun planlarının kurasiyası və kopiraytinqə istiqamət vermək',
      'Performans analitikası və müştərilərə strateji hesabatların təqdimatı',
    ],
    requirements: [
      'Sosial şəbəkələrin (Instagram, TikTok, LinkedIn, Telegram) alqoritmlərini dərindən bilmək',
      'Analitik təfəkkür və güclü yazı dili (Azərbaycan və Rus dilləri səlis)',
      'Uğurlu keyslərdən ibarət portfel',
      'Müştəri ilə birbaşa və inamlı ünsiyyət bacarığı',
    ],
    perks: [
      'Rəqabətədavamlı əməkhaqqı + uğurlu layihələrdən bonuslar',
      'Hibrid iş rejimi (həftədə 2 gün ofis, 3 gün uzaqdan)',
      'Beynəlxalq festival və seminar iştirakı haqları',
    ],
  },
  {
    id: 'reelmaker-creator',
    code: 'POS-03',
    title: 'Content Creator & Reelmaker',
    department: 'Video İstehsalı',
    type: 'Tam ştat (Full-time)',
    location: 'Bakı / Çəkiliş məkanları',
    experience: '1+ il təcrübə',
    brief: 'Kameranı əlinə alanda kadrı adi deyil, kino kimi görən insan. Sürətli, cəsur və trendləri yaradan video istehsalçısı.',
    responsibilities: [
      'Brendlər üçün dinamik Reels, TikTok və Shorts çəkilişləri',
      'Sürətli və ritmik montaj (Premiere Pro / CapCut Desktop / DaVinci)',
      'Trend musiqilər və viral formatların araşdırılması və tətbiqi',
      'Çəkiliş günü ssenarisini operativ icra etmək',
    ],
    requirements: [
      'Sony Alpha / FX seriyası və ya ən son iPhone ilə yüksək çəkiliş bacarığı',
      'Dinamik montaj və rəng korreksiyası (Color grading) təcrübəsi',
      'Baxış sayı yüksək olan şəxsi və ya kommersiya video nümunələri',
      'Operativlik və yaradıcı çeviklik',
    ],
    perks: [
      'Studiyanın ən müasir video avadanlıqlarına limitsiz çıxış',
      'Hər viral olan və hədəfi vuran video üçün qonorar bonusu',
      'Yaradıcı sərbəstlik və fərdi müəllif krediti',
    ],
  },
  {
    id: 'editorial-copywriter',
    code: 'POS-04',
    title: 'Editorial Copywriter & Tone of Voice Curator',
    department: 'Mətn & Redaksiya',
    type: 'Part-time / Remote',
    location: 'Uzaqdan (Remote)',
    experience: '1+ il təcrübə',
    brief: 'Sözlərlə vizualın gücünü ikiqat artıran, "Biz peşəkarıq" kimi şablon ifadələrdən qaçan, fəlsəfi və cəsarətli qələm sahibi.',
    responsibilities: [
      'Brendlərin sosial media manifestoları və post mətnləri',
      'Reels və video ssenariləri üçün təsirli qarmaqlar (Hooks)',
      'Veb-sayt və tizer kampaniyaları üçün konseptual başlıqlar',
    ],
    requirements: [
      'Azərbaycan dilinin zənginliyi və cəsarətli slenq/modern dil harmoniyası',
      'Az sözlə çox məna ifadə etmək qabiliyyəti',
      'Publisistika, esse və ya brend kopiraytinq nümunələri',
    ],
    perks: [
      'Tam çevik iş saatları',
      'Layihə başına yüksək qonorar',
      'Kreativ komandamızla birgə beyin həmlələri',
    ],
  },
];
