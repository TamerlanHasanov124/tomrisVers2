export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  handwrittenNote: string;
  description: string;
  bulletPoints: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'smm-strategy',
    number: '01',
    title: 'Tam SMM Strategiyası & Brend Dili',
    subtitle: 'Auditoriya psixologiyası, məzmun arxitekturası və kultura kəşfi',
    handwrittenNote: 'Təsadüfi post yoxdur — hər addım planlaşdırılıb',
    description: 'Biz sadəcə təqvim dolduran postlar hazırlamırıq. Brendinizin sosial mediadakı xarakterini, səs tonunu (tone-of-voice), vizual sərhədlərini və auditoriya ilə ünsiyyət mexanikasını sıfırdan formalaşdırırıq.',
    bulletPoints: [
      'Rəqiblərin vizual dekonstruksiyası və boşluq analizi',
      'Brend arxetipi və unikal kommunikasiya manifestosu',
      'Rubrikator, məzmun pillars və ritmik təqvim sistemi',
      'Böhran idarəetməsi və icma (community) qaydaları',
    ],
    deliverables: [
      '60+ səhifəlik SMM Strategiya Kitabı (PDF & Figma)',
      'Aylıq Məzmun Yol Xəritəsi (Content Roadmap)',
      'Məzmun arxitekturası və metrika KPI matrisi',
    ],
    timeline: '2-3 Həftə (Başlanğıc Strategiya)',
    idealFor: 'Bazar payını böyütmək və özünəməxsus səs qazanmaq istəyən iddialı brendlər.',
  },
  {
    id: 'art-direction',
    number: '02',
    title: 'Kreativ Art-Direkşn & Rəqəmsal Kollaj',
    subtitle: 'Müasir editorial jurnallar, modernist tipoqrafiya və cəsarətli vizuallar',
    handwrittenNote: 'Dizayn deyil, sənət əsəridir!',
    description: 'Şablon Canva şablonlarını unudun. Biz hər brend üçün eksklüziv qrafik dil, modernist tipoqrafiya (Futura / Neue Haas), foto-kollajlar, teksturalı laylar və yüksək bədii dəyəri olan vizuallar yaradırıq.',
    bulletPoints: [
      'Eksperimental editorial grid arxitekturası',
      'Rəqəmsal kollaj, skan effektləri və fiziki toxunuşlar',
      'Tipografik şrift sistemi və rəng iyerarxiyası',
      'Müəllif illüstrasiyaları və qrafik elementlər toplusu',
    ],
    deliverables: [
      'Sosial Media Vizual Brandbook',
      'Feed Grid Konsepti (9-luq və sonsuz axın)',
      'Hekayə (Stories) və Highlight Şablonlar Sistemi',
    ],
    timeline: 'Davamlı aylıq kurasiya',
    idealFor: 'Köhnəlmiş və darıxdırıcı korporativ dizayndan xilas olmaq istəyən şirkətlər.',
  },
  {
    id: 'video-production',
    number: '03',
    title: 'Reels, TikTok & Kinematik İstehsal',
    subtitle: 'Ritmik montaj, 35mm film estetikası və viral baxış mühəndisliyi',
    handwrittenNote: 'İlk 3 saniyə hər şeyi həll edir!',
    description: 'Sosial medianın əsas valyutası diqqətdir. Studiyamız xüsusi çəkiliş komandası ilə brendiniz üçün yüksək dinamikalı Reels, TikTok və YouTube Shorts videoları istehsal edir. Ssenaridən tutmuş səs dizaynına qədər.',
    bulletPoints: [
      'Viral qarmaq (hook) və hekayəçilik ssenariləri',
      'Peşəkar kinokameralar və optikalarla çəkiliş',
      'Müəllif saundtrekləri və qüsursuz audio montaj',
      'Trend adaptasiyası və mikro-sənədli formatlar',
    ],
    deliverables: [
      'Aylıq 12-24 ədəd tam tamamlanmış viral video',
      'B-roll və arxivi material bazası',
      'Şaquli (9:16) formatda yüksək ayırdetməli kadrlar',
    ],
    timeline: 'Həftəlik çəkiliş və operativ montaj',
    idealFor: 'Auditoriyanı passiv izləyicidən sadiq müştəriyə çevirmək istəyən bizneslər.',
  },
  {
    id: 'influencer-seeding',
    number: '04',
    title: 'Influencer & Tastemaker İnteqrasiyası',
    subtitle: 'Səmimi, ssenarisiz və cəmiyyətdə iz qoyan subkultura tərəfdaşlıqları',
    handwrittenNote: 'Reklam kimi görünməyən reklam',
    description: 'Biz saxta rəqəmlər və şablon reklam inteqrasiyaları ilə işləmirik. Brendinizin ruhuna uyğun olan sənətçiləri, rəy liderlərini və kreativ şəxsləri seçir, onlarla təbii və yadda qalan kollaborasiyalar qururuq.',
    bulletPoints: [
      'Dərin auditoriya uyğunluğu və fırıldaqçılıq (fraud) yoxlaması',
      'Kreativ qutu və xüsusi hədiyyə təqdimatları (Unboxing kits)',
      'Müəllif kollaborasiyaları və ortaq tədbirlər',
      'Dəqiq izləmə və satış bağlantıları (UTM & promo kodlar)',
    ],
    deliverables: [
      'Kurasiya olunmuş Tastemaker Verilənlər Bazası',
      'Hüquqi müqavilələr və brifinq sənədləri',
      'Kampaniya performans hesabatı və ROI analizi',
    ],
    timeline: 'Kampaniya əsaslı (1-4 həftə)',
    idealFor: 'Sosial sübut və brend nüfuzunu sürətlə gücləndirmək istəyən brendlər.',
  },
  {
    id: 'performance-ads',
    number: '05',
    title: 'Hədəfli Reklam & Alqoritmik Hacking',
    subtitle: 'Meta Ads, TikTok Ads və kreativ A/B sınaqları ilə maksimal nəticə',
    handwrittenNote: 'Hər qəpik ölçülür və qayıdır',
    description: 'Yaxşı dizayn təkcə gözəl görünməməli, həm də satmalıdır. Biz eksperimental kreativləri dəqiq hədəfləmə, retargetinq tunelləri və alqoritmik optimizasiya ilə birləşdirərək reklam büdcənizin səmərəliliyini artırırıq.',
    bulletPoints: [
      'Funnel arxitekturası (TOFU, MOFU, BOFU)',
      'Kreativ yorğunluğun qarşısının alınması üçün dinamik testlər',
      'Pixel, CAPI və analitika inteqrasiyaları',
      'Şəffaf həftəlik ROI və ROAS hesabatlılığı',
    ],
    deliverables: [
      'Canlı Tableau / Looker Studio İdarəetmə Paneli',
      'A/B Reklam Kreativləri Test Nəticələri',
      'Davamlı büdcə optimizasiyası və miqyaslama planı',
    ],
    timeline: 'Davamlı aylıq idarəetmə',
    idealFor: 'Gəlirlərini və sifariş sayını sabit şəkildə artırmaq istəyən e-ticarət və xidmət şirkətləri.',
  },
];
