import React, { useState } from 'react';
import { Lang, TRANSLATIONS } from '../data/translations';
import { Eye, Check, Flame, ArrowRight, Sparkles } from 'lucide-react';

interface FeedSimulatorProps {
  currentLang: Lang;
  onSelectService: (service: string) => void;
}

export const FeedSimulator: React.FC<FeedSimulatorProps> = ({
  currentLang,
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<'standard' | 'tmr'>('tmr');

  const content = {
    RU: {
      tag: 'ИНТЕРАКТИВНОЕ СРАВНЕНИЕ',
      title: 'КАК ВЫГЛЯДИТ ВАШ БРЕНД',
      subtitle: 'Переключите режим, чтобы увидеть разницу между серым шаблоном и авторским арт-дирекшном TMR.',
      tabStandard: 'ОБЫЧНЫЙ SMM (ШАБЛОНЫ)',
      tabTmr: 'TMR ART-DIRECTION (АВАНГАРД)',
      standardCaption: 'Скучные стоки, несочетаемые шрифты, нулевой брендинг и низкий охват.',
      tmrCaption: 'Модернистская сетка Futura, 35мм пленочные кадры, алые акценты и в 4 раза выше вовлеченность.',
      metricsStandard: 'Engagement: 0.8% · Рост: медленный',
      metricsTmr: 'Engagement: 5.4% · Виральность: +460%',
      cta: 'ХОЧУ ТАКУЮ СЕТКУ ДЛЯ СВОЕГО БРЕНДА',
    },
    AZ: {
      tag: 'İNTERAKTİV MÜQAYİSƏ',
      title: 'BRENDİNİZ NECƏ GÖRÜNÜR?',
      subtitle: 'Standart cansız paylaşımlar ilə TMR-in avant-garde art-direkşnı arasındakı fərqi dərhal hiss edin.',
      tabStandard: 'STANDART SMM (ŞABLONLAR)',
      tabTmr: 'TMR ART-DİREKŞN (AVANT-GARDE)',
      standardCaption: 'Canva şablonları, rəng xaosu və cansız məhsul şəkilləri.',
      tmrCaption: 'Futura arxitekturası, 35mm plyonka kadrları, qırmızı aksentlər və 4 qat yüksək reaksiyalar.',
      metricsStandard: 'Engagement: 0.8% · Artım: Passiv',
      metricsTmr: 'Engagement: 5.4% · Viralite: +460%',
      cta: 'BU VİZUAL DİLİ BRENDİMƏ TƏTBİQ ET',
    },
    EN: {
      tag: 'INTERACTIVE BENCHMARK',
      title: 'SEE THE VISUAL DIFFERENCE',
      subtitle: 'Toggle between generic corporate social media and TMR avant-garde art direction.',
      tabStandard: 'GENERIC SMM (TEMPLATES)',
      tabTmr: 'TMR ART-DIRECTION (VANGUARD)',
      standardCaption: 'Stock photos, clashing fonts, low retention, and zero brand equity.',
      tmrCaption: 'Futura typography, raw 35mm film grain, striking red accents, and 4x engagement surge.',
      metricsStandard: 'Engagement: 0.8% · Organic: Flat',
      metricsTmr: 'Engagement: 5.4% · Viral Lift: +460%',
      cta: 'DEPLOY THIS GRID TO MY BRAND',
    },
  };

  const t = content[currentLang];

  const standardPosts = [
    { title: 'СКИДКА -20%', bg: '#3a3a3a', sub: 'Акция недели' },
    { title: 'МЫ ОТКРЫЛИСЬ', bg: '#2f3542', sub: 'Ждем в гости' },
    { title: 'НАШ ПРОДУКТ', bg: '#404040', sub: 'Высокое качество' },
    { title: 'ПОЧЕМУ МЫ?', bg: '#2b2b2b', sub: '5 преимуществ' },
    { title: 'ОТЗЫВЫ', bg: '#333333', sub: 'Довольные клиенты' },
    { title: 'НОВИНКА', bg: '#282828', sub: 'Заказывайте сейчас' },
  ];

  const tmrPosts = [
    {
      img: '/src/assets/images/tmr_statue_red_stroke_1791143814642.jpg',
      tag: '01 // MANIFESTO',
      title: 'DAVID IN RED',
    },
    {
      img: '/src/assets/images/tmr_brutalist_building_1791143824729.jpg',
      tag: '02 // STRUCTURE',
      title: 'CONCRETE & FLORA',
    },
    {
      img: '/src/assets/images/glossy_cover_fashion_1791142763031.jpg',
      tag: '03 // RUNWAY',
      title: 'NOIR COUTURE',
    },
    {
      img: '/src/assets/images/glossy_perfume_luxury_1791142784011.jpg',
      tag: '04 // STILL LIFE',
      title: 'OBSIDIAN AURA',
    },
    {
      img: '/src/assets/images/glossy_fashion_leather_1791142794618.jpg',
      tag: '05 // EDITORIAL',
      title: 'ROUGE ATELIER',
    },
    {
      img: '/src/assets/images/glossy_editorial_spread_1791142774632.jpg',
      tag: '06 // CINEMA',
      title: '4K SPREAD',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#E5E3DC] border-b border-[#181819]/15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#181819]/15 pb-6">
          <div>
            <span className="text-xs font-futura tracking-widest text-[#D12C26] uppercase font-bold block mb-2">
              [ LIVE BENCHMARK ] // {t.tag}
            </span>
            <h2 className="font-futura text-3xl sm:text-5xl font-extrabold text-[#181819] uppercase tracking-tight">
              {t.title}
            </h2>
          </div>

          {/* Segmented Switcher Buttons */}
          <div className="mt-6 md:mt-0 flex items-center p-1 bg-[#181819] border border-[#181819]">
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-4 py-2 text-xs font-futura font-bold tracking-wider uppercase transition-colors ${
                activeTab === 'standard'
                  ? 'bg-neutral-700 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.tabStandard}
            </button>
            <button
              onClick={() => setActiveTab('tmr')}
              className={`px-4 py-2 text-xs font-futura font-bold tracking-wider uppercase transition-colors ${
                activeTab === 'tmr'
                  ? 'bg-[#D12C26] text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              ★ {t.tabTmr}
            </button>
          </div>
        </div>

        {/* The Phone / Grid Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Feed Preview Box */}
          <div className="lg:col-span-7 bg-[#181819] p-4 sm:p-6 border border-black shadow-2xl">
            {/* Feed Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs font-futura text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D12C26]" />
                <span className="font-bold tracking-wider">
                  {activeTab === 'tmr' ? '@brand.tmr // CURATED FEED' : '@generic.brand // DEFAULT'}
                </span>
              </div>
              <span className="text-neutral-400 text-[11px] font-mono">
                {activeTab === 'tmr' ? t.metricsTmr : t.metricsStandard}
              </span>
            </div>

            {/* 6-Grid Post Simulator */}
            <div className="grid grid-cols-3 gap-2">
              {activeTab === 'tmr'
                ? tmrPosts.map((p, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-square overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                        <span className="text-[9px] font-futura text-[#D12C26] font-bold uppercase">
                          {p.tag}
                        </span>
                        <span className="text-[11px] font-futura text-white font-bold leading-tight">
                          {p.title}
                        </span>
                      </div>
                    </div>
                  ))
                : standardPosts.map((p, idx) => (
                    <div
                      key={idx}
                      style={{ backgroundColor: p.bg }}
                      className="aspect-square p-2 flex flex-col items-center justify-center text-center text-neutral-400 border border-neutral-700 select-none"
                    >
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">Пост {idx + 1}</span>
                      <p className="text-xs font-bold text-neutral-300 mt-1">{p.title}</p>
                      <p className="text-[9px] text-neutral-500">{p.sub}</p>
                    </div>
                  ))}
            </div>
          </div>

          {/* Description & Impact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#ECEAE5] border border-[#181819]/20 shadow-md">
              <span className="font-futura text-xs text-[#D12C26] font-bold uppercase tracking-widest block mb-2">
                {activeTab === 'tmr' ? 'TMR АРТ-ДИРЕКШН ЭФФЕКТ' : 'СТАНДАРТНАЯ ОШИБКА БРЕНДОВ'}
              </span>
              <h3 className="font-futura text-2xl font-bold text-[#181819]">
                {activeTab === 'tmr'
                  ? 'Каждая публикация — арт-объект'
                  : 'Клиент скроллит и не запоминает'}
              </h3>
              <p className="font-futura text-sm text-neutral-700 mt-3 leading-relaxed">
                {activeTab === 'tmr' ? t.tmrCaption : t.standardCaption}
              </p>
            </div>

            <button
              onClick={() => onSelectService('Kreativ Art-Direkşn & Feed Arxitekturası')}
              className="w-full py-4 bg-[#D12C26] hover:bg-[#b5221d] text-white text-xs font-futura font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
