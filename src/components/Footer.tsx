import React from 'react';
import { TmrLogo } from './TmrLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181819] text-neutral-400 py-16 px-6 md:px-12 font-futura text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="space-y-3">
            <TmrLogo className="h-8 w-auto" dotColor="#D12C26" textColor="#FFFFFF" />
            <p className="text-neutral-400 text-xs font-futura tracking-wider">
              CREATIVE IDEAS. REAL RESULTS. // BAKU, AZ.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-8 uppercase tracking-widest text-neutral-300 font-bold">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D12C26] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D12C26] transition-colors"
            >
              Behance
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D12C26] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D12C26] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} TMR CREATIVE AGENCY. ALL RIGHTS RESERVED.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-bold"
          >
            <span>Yuxarı Qayıt</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D12C26]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
