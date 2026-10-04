import React, { useState, useEffect } from 'react';
import { JobPosition } from '../data/careers';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ApplyModalProps {
  position: JobPosition | null;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ position, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (position) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position, onClose]);

  if (!position) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/10 shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="font-mono text-xs text-[#E52E20] uppercase font-bold">
              {position.code} // MÜRACİƏT
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-0.5">
              {position.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#E52E20] mx-auto animate-bounce" />
            <h4 className="font-display text-2xl font-bold text-white">
              MÜRACİƏTİNİZ ALINDI!
            </h4>
            <p className="text-xs font-mono text-neutral-300">
              Portfolionuzu nəzərdən keçirib 48 saat ərzində sizinlə əlaqə saxlayacağıq.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                Ad & Soyad *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Cavid Əhmədov"
                className="w-full bg-neutral-950 border border-white/10 focus:border-white text-white px-3.5 py-2.5 text-sm outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+994 50 000 00 00"
                  className="w-full bg-neutral-950 border border-white/10 focus:border-white text-white px-3.5 py-2.5 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  E-poçt *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full bg-neutral-950 border border-white/10 focus:border-white text-white px-3.5 py-2.5 text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                Portfolio Linki (Behance, Instagram, Drive) *
              </label>
              <input
                type="url"
                required
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://behance.net/profil"
                className="w-full bg-neutral-950 border border-white/10 focus:border-white text-white px-3.5 py-2.5 text-sm outline-none transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#E52E20] hover:bg-[#c92418] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Müraciəti Göndər</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
