import React, { useState } from 'react';
import { Lang, TRANSLATIONS } from '../data/translations';
import { ChevronLeft, ChevronRight, ArrowDownRight } from 'lucide-react';

interface HeroProps {
  currentLang: Lang;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenContact }) => {
  const [slide, setSlide] = useState(0);
  const t = TRANSLATIONS[currentLang];

  const slides = [
    {
      kickerLeft: ['CREATIVE', 'IDEAS', 'REAL', 'RESULTS'],
      kickerRight: ['BRAND', 'DESIGN', 'DIGITAL', 'MEDIA'],
      building: '/src/assets/images/tmr_clean_building_1791144694622.jpg',
      statue: '/src/assets/images/tmr_david_transparent.png',
      caption: 'CLASSICAL ART MEETS AVANT-GARDE DIRECTION',
    },
    {
      kickerLeft: ['HAUTE', 'RUNWAY', 'EDITORIAL', 'REELS'],
      kickerRight: ['VIRAL', 'HOOKS', '4K', 'CINEMA'],
      building: '/src/assets/images/glossy_editorial_spread_1791142774632.jpg',
      statue: '/src/assets/images/glossy_fashion_leather_1791142794618.jpg',
      caption: 'STREET CULTURE & FLASH PHOTOGRAPHY',
    },
    {
      kickerLeft: ['SENSORY', 'LUXURY', 'OBSIDIAN', 'PROOF'],
      kickerRight: ['META', 'ADS', 'TIKTOK', 'GROWTH'],
      building: '/src/assets/images/glossy_perfume_luxury_1791142784011.jpg',
      statue: '/src/assets/images/glossy_cover_fashion_1791142763031.jpg',
      caption: 'HAUTE STILL-LIFE ON OBSIDIAN & STONE',
    },
  ];

  const current = slides[slide];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative bg-[#ECEAE5] border-b border-[#181819]/15 select-none overflow-hidden"
    >
      {/* 
        EXACT HERO REPRODUCTION MATCHING TURN 2 IMAGE 1:
        - Canvas background: #ECEAE5
        - Unified horizontal collage stage:
          [ CREATIVE IDEAS REAL RESULTS ]
          [ < button ]
          [ Building with foliage + Red bar ]
          [ + and Giant T M R ]
          [ > button ]
          [ David Statue with Red Brushstroke ]
          [ BRAND DESIGN DIGITAL MEDIA — ]
        - Bottom bar: Manifesto sentence + Red 'НАЧАТЬ' button + 'СМОТРЕТЬ'
      */}
      <div className="w-full max-w-[1560px] mx-auto flex flex-col justify-between p-4 sm:p-6 lg:p-8 min-h-[580px] lg:min-h-[660px]">
        
        {/* Main Artwork Stage */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 my-auto w-full py-4 lg:py-8">
          
          {/* 1. Left Typography Column */}
          <div className="shrink-0 flex flex-col justify-between self-stretch z-20 py-2 w-[80px] sm:w-[110px] lg:w-[130px]">
            <div className="font-futura text-[10px] sm:text-xs tracking-[0.28em] text-[#181819] font-black leading-loose select-none">
              {current.kickerLeft.map((word, i) => (
                <div key={i}>{word}</div>
              ))}
            </div>

            <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest pt-4">
              [ 0{slide + 1} / 0{slides.length} ]
            </div>
          </div>

          {/* 2. Left Arrow Button */}
          <div className="shrink-0 z-20">
            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#181819] hover:bg-[#D12C26] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* 3. Brutalist Architecture Image + Solid Red Base Bar */}
          <div className="relative shrink-0 w-[110px] sm:w-[160px] lg:w-[210px] xl:w-[240px] z-10">
            <div className="aspect-[3/4] overflow-hidden shadow-xl border border-black/15 bg-neutral-900">
              <img
                src={current.building}
                alt="Brutalist architectural composition"
                className="w-full h-full object-cover filter contrast-125 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Solid Red Bar Underneath Image */}
            <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-2.5 sm:h-3.5 bg-[#D12C26]" />
          </div>

          {/* 4. Center Typography: Crosshair + Monumental T M R */}
          <div className="flex-1 flex flex-col items-center justify-center shrink-0 z-20 px-1 sm:px-3">
            {/* Fine Crosshair '+' */}
            <div className="font-mono text-xl sm:text-2xl text-neutral-400 select-none mb-1">
              +
            </div>

            {/* Giant TMR */}
            <div className="flex items-baseline justify-center font-futura text-[4.5rem] sm:text-[6.8rem] md:text-[8.8rem] lg:text-[11.5rem] xl:text-[13.5rem] font-black tracking-[-0.05em] leading-none select-none text-center">
              <span className="text-[#181819]">T</span>
              <span className="text-[#181819] -ml-1 sm:-ml-2 lg:-ml-4">M</span>
              <span className="text-[#D12C26] -ml-1 sm:-ml-2 lg:-ml-4">R</span>
            </div>
          </div>

          {/* 5. Right Arrow Button */}
          <div className="shrink-0 z-20">
            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#181819] hover:bg-[#D12C26] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 6. Classical David Statue (100% Transparent PNG with Red Paint) */}
          <div className="relative shrink-0 w-[120px] sm:w-[170px] lg:w-[230px] xl:w-[270px] z-10 flex items-center justify-center">
            <img
              src={current.statue}
              alt="David sculpture with red paint brushstroke"
              className="w-full h-auto object-contain filter contrast-125 select-none drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 7. Right Typography Column */}
          <div className="shrink-0 flex flex-col justify-between self-stretch z-20 py-2 w-[80px] sm:w-[110px] lg:w-[130px]">
            <div className="font-futura text-[10px] sm:text-xs tracking-[0.28em] text-[#181819] font-black leading-loose text-right select-none">
              {current.kickerRight.map((word, i) => (
                <div key={i}>{word}</div>
              ))}
              <div className="text-[#D12C26] font-black text-sm pt-1 select-none">—</div>
            </div>

            <div className="text-right text-[10px] font-mono text-neutral-400 select-none hidden sm:block">
              VANGUARD
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Left Text + Right Action Buttons (Matching Mockup) */}
        <div className="pt-6 sm:pt-8 border-t border-[#181819]/15 flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
          {/* Subtitle statement on the left */}
          <p className="text-xs sm:text-sm font-futura text-neutral-700 max-w-2xl text-center md:text-left leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Action buttons on the right: Solid Red 'НАЧАТЬ' + Text 'СМОТРЕТЬ' */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-8 sm:px-10 py-3 sm:py-3.5 bg-[#D12C26] hover:bg-[#b5221d] text-white text-xs sm:text-sm font-futura font-black tracking-widest uppercase transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>{currentLang === 'RU' ? 'НАЧАТЬ' : currentLang === 'AZ' ? 'BAŞLA' : 'START'}</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <a
              href="#portfolio"
              className="px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-futura font-black tracking-widest uppercase text-[#181819] hover:text-[#D12C26] transition-colors"
            >
              {currentLang === 'RU' ? 'СМОТРЕТЬ' : currentLang === 'AZ' ? 'BAX' : 'EXPLORE'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
