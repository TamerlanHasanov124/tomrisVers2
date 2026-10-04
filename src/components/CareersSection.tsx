import React, { useState } from 'react';
import { OPEN_POSITIONS, JobPosition } from '../data/careers';
import { ApplyModal } from './ApplyModal';
import { Lang, TRANSLATIONS } from '../data/translations';
import { ArrowUpRight } from 'lucide-react';

interface CareersSectionProps {
  currentLang: Lang;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ currentLang }) => {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="careers" className="py-24 px-6 md:px-12 bg-[#ECEAE5] border-b border-[#181819]/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#181819]/15 pb-6">
          <div>
            <span className="text-xs font-futura tracking-widest text-[#D12C26] uppercase font-bold block mb-2">
              [ 04 ] // CAREERS
            </span>
            <h2 className="font-futura text-4xl sm:text-6xl font-extrabold text-[#181819] uppercase tracking-tight">
              {t.careers.title}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-600 text-sm font-futura max-w-sm">
            {t.careers.subtitle}
          </p>
        </div>

        {/* Roles Table */}
        <div className="divide-y divide-[#181819]/15">
          {OPEN_POSITIONS.map((pos) => (
            <div
              key={pos.id}
              onClick={() => setSelectedPosition(pos)}
              className="group py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition-colors hover:bg-black/[0.02]"
            >
              <div className="space-y-1">
                <div className="text-xs font-futura text-[#D12C26] font-bold">
                  {pos.code} // {pos.department}
                </div>
                <h3 className="font-futura text-2xl sm:text-3xl font-bold text-[#181819] group-hover:text-[#D12C26] transition-colors tracking-tight">
                  {pos.title}
                </h3>
                <p className="text-xs font-futura text-neutral-600">
                  {pos.type} · {pos.location} · {pos.experience}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-futura uppercase tracking-widest text-neutral-600 group-hover:text-[#D12C26] transition-colors font-bold">
                <span>{t.careers.apply}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D12C26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      <ApplyModal
        position={selectedPosition}
        onClose={() => setSelectedPosition(null)}
      />
    </section>
  );
};
