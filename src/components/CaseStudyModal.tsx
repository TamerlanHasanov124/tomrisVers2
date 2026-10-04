import React, { useEffect } from 'react';
import { CaseStudy } from '../data/cases';
import { X, ArrowUpRight, Check } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onStartSimilarProject: (clientName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onStartSimilarProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#0c0c0c] border border-white/10 my-auto shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0a]">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-[#E52E20] font-bold">{caseStudy.categoryLabel}</span>
            <span className="text-neutral-500">/</span>
            <span className="text-neutral-400">{caseStudy.client}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-2">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Large Clean Photo */}
          <div className="aspect-[16/10] overflow-hidden bg-neutral-950 border border-white/10">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Simple Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="font-display text-2xl md:text-3xl font-bold text-white">
                  {m.value}
                </span>
                <p className="text-[11px] font-mono text-neutral-400 uppercase mt-0.5">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Brief Solution Note */}
          <div className="space-y-4">
            <div className="text-sm text-neutral-300 leading-relaxed">
              <strong className="text-white block font-mono text-xs uppercase mb-1">Strategiya & Həll:</strong>
              {caseStudy.solution}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {caseStudy.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-6 border-t border-white/10 bg-[#0a0a0a] flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
            Oxşar vizual həll istəyirsiniz?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-mono uppercase text-neutral-400 hover:text-white"
            >
              Bağla
            </button>
            <button
              onClick={() => {
                onClose();
                onStartSimilarProject(caseStudy.title);
              }}
              className="px-6 py-2.5 bg-[#E52E20] hover:bg-[#c92418] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Belə Bir Layihə Başlat</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
