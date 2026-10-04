import React from 'react';
import { Lang } from '../data/translations';
import { Flame, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface ManifestoSectionProps {
  currentLang: Lang;
  onOpenContact: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({
  currentLang,
  onOpenContact,
}) => {
  const content = {
    RU: {
      tag: 'МАНИФЕСТ TMR // АНТИ-ШАБЛОН',
      headline: 'ОБЫЧНЫЙ SMM УМЕР. ВНИМАНИЕ ЗАВОЕВЫВАЕТ АРТ.',
      p1: 'Мы отказываемся от скучных стоковых картинок, безликих текстов и типовых постов из Canva. Ваша лента — это не каталог продукции, это фасад вашего бренда, витрина в центре Манхэттена.',
      p2: 'Каждая публикация TMR выстроена по законам швейцарской типографики, высокой моды и алгоритмической кинематографии. Мы превращаем подписчиков в преданных адептов бренда.',
      stat1: '+460%',
      stat1Label: 'Средний прирост органического охвата',
      stat2: '4K CINEMA',
      stat2Label: 'Кинокамеры и авторский саунд-дизайн',
      stat3: '0%',
      stat3Label: 'Шаблонов. 100% авторский продакшн',
      cta: 'ОБСУДИТЬ ПЕРЕЗАГРУЗКУ БРЕНДА',
    },
    AZ: {
      tag: 'TMR MANİFESTO // STANDARTLARA SON',
      headline: 'STANDART SMM ÖLDÜ. DİQQƏTİ YALNIZ SƏNƏT CƏLB EDİR.',
      p1: 'Canva şablonları və cansız məhsul şəkilləri artıq işləmir. Sizin sosial media hesabınız sadəcə kataloq deyil, brendinizin yüksək moda vitrinidir.',
      p2: 'TMR-in hər paylaşımı İsveçrə tipoqrafiyası, 35mm film estetikası və viral Reels mühəndisliyi ilə hazırlanır. Biz izləyiciləri brendinizin sadiq pərəstişkarına çeviririk.',
      stat1: '+460%',
      stat1Label: 'Ortalama üzvi baxış artımı',
      stat2: '4K KİNO',
      stat2Label: 'Kinokamera və fərdi səs mühəndisliyi',
      stat3: '0%',
      stat3Label: 'Şablon. 100% eksklüziv art-direkşn',
      cta: 'BRENDİNİZİN YENİDƏN DOĞUŞUNU BAŞLADIN',
    },
    EN: {
      tag: 'TMR MANIFESTO // VANGUARD ONLY',
      headline: 'GENERIC SMM IS DEAD. CULTURE SHAPES COMMERCE.',
      p1: 'We reject cookie-cutter stock photos and Canva layouts. Your social grid is not a warehouse catalog; it is an haute-couture gallery on Fifth Avenue.',
      p2: 'Every TMR asset is governed by Swiss modernist grid discipline, 35mm cinema texture, and viral retention algorithms. We turn passive scrollers into brand devotees.',
      stat1: '+460%',
      stat1Label: 'Average organic reach multiplier',
      stat2: '4K CINEMA',
      stat2Label: 'Cinema cameras and bespoke audio',
      stat3: '0%',
      stat3Label: 'Templates. 100% bespoke direction',
      cta: 'COMMISSION TMR ART DIRECTION',
    },
  };

  const t = content[currentLang];

  return (
    <section className="bg-[#181819] text-[#ECEAE5] py-24 px-6 md:px-12 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-[#D12C26]" />
          <span className="font-futura text-xs tracking-[0.25em] text-[#D12C26] font-bold uppercase">
            {t.tag}
          </span>
        </div>

        {/* Massive Headline */}
        <h2 className="font-futura text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] max-w-5xl mb-12">
          {t.headline}
        </h2>

        {/* 2-Column Manifesto Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 border-t border-white/10 pt-8 mb-16">
          <p className="font-futura text-sm sm:text-base text-neutral-300 leading-relaxed">
            {t.p1}
          </p>
          <p className="font-futura text-sm sm:text-base text-neutral-300 leading-relaxed">
            {t.p2}
          </p>
        </div>

        {/* 3 Brutalist Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 border border-white/10 bg-neutral-900/60 flex flex-col justify-between">
            <span className="font-mono text-xs text-[#D12C26] tracking-widest">[ 01 // IMPACT ]</span>
            <div className="my-6">
              <div className="font-futura text-5xl lg:text-6xl font-black text-white tracking-tight">
                {t.stat1}
              </div>
              <p className="font-futura text-xs text-neutral-400 uppercase tracking-wider mt-2">
                {t.stat1Label}
              </p>
            </div>
          </div>

          <div className="p-8 border border-white/10 bg-neutral-900/60 flex flex-col justify-between">
            <span className="font-mono text-xs text-[#D12C26] tracking-widest">[ 02 // CRAFT ]</span>
            <div className="my-6">
              <div className="font-futura text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.stat2}
              </div>
              <p className="font-futura text-xs text-neutral-400 uppercase tracking-wider mt-2">
                {t.stat2Label}
              </p>
            </div>
          </div>

          <div className="p-8 border border-white/10 bg-neutral-900/60 flex flex-col justify-between">
            <span className="font-mono text-xs text-[#D12C26] tracking-widest">[ 03 // PURITY ]</span>
            <div className="my-6">
              <div className="font-futura text-5xl lg:text-6xl font-black text-[#D12C26] tracking-tight">
                {t.stat3}
              </div>
              <p className="font-futura text-xs text-neutral-400 uppercase tracking-wider mt-2">
                {t.stat3Label}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-futura text-neutral-400 tracking-wider">
              BAKU STUDIO · DUBAI · GLOBAL CAMPAIGNS
            </span>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 bg-[#D12C26] hover:bg-[#b5221d] text-white text-xs font-futura font-bold tracking-widest uppercase transition-colors shadow-lg active:scale-95"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
