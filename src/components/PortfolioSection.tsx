import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/cases';
import { CaseStudyModal } from './CaseStudyModal';
import { Lang, TRANSLATIONS } from '../data/translations';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioSectionProps {
  currentLang: Lang;
  onStartProjectWithContext: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  currentLang,
  onStartProjectWithContext,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const t = TRANSLATIONS[currentLang];

  const categories = [
    { id: 'all', label: t.portfolio.all },
    { id: 'Fashion', label: 'Fashion & Runway' },
    { id: 'Beauty', label: 'Beauty & Fragrance' },
    { id: 'Couture', label: 'Avant-Garde' },
    { id: 'Horeca', label: 'Gastronomy' },
  ];

  const filteredCases =
    activeCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#ECEAE5] border-b border-[#181819]/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#181819]/15 pb-6">
          <div>
            <span className="text-xs font-futura tracking-widest text-[#D12C26] uppercase font-bold block mb-2">
              [ 03 ] // PORTFOLIO
            </span>
            <h2 className="font-futura text-4xl sm:text-6xl font-extrabold text-[#181819] uppercase tracking-tight">
              {t.portfolio.title}
            </h2>
          </div>

          {/* Minimal Category Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-futura uppercase tracking-wider transition-colors border ${
                    isActive
                      ? 'bg-[#181819] text-white border-[#181819] font-bold'
                      : 'border-black/15 text-neutral-600 hover:text-black hover:border-black'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Minimal Image Grid with TMR Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCase(cs)}
              className="group cursor-pointer space-y-3"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-black/15 shadow-md">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Red Accent Marker */}
                <div className="absolute top-4 right-4 bg-[#181819] px-3 py-1 text-xs font-futura text-[#D12C26] font-bold border border-white/20">
                  {cs.metrics[0].label}: {cs.metrics[0].value}
                </div>
              </div>

              {/* Title & Category */}
              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <div className="text-xs font-futura text-neutral-500 uppercase tracking-widest">
                    {cs.categoryLabel}
                  </div>
                  <h3 className="font-futura text-2xl font-bold text-[#181819] group-hover:text-[#D12C26] transition-colors mt-0.5 tracking-tight flex items-center gap-2">
                    <span>{cs.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D12C26]" />
                  </h3>
                </div>

                <span className="text-xs font-futura text-neutral-500 font-bold">
                  {cs.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onStartSimilarProject={(projectName) => {
          onStartProjectWithContext(`Case: ${projectName}`);
        }}
      />
    </section>
  );
};
