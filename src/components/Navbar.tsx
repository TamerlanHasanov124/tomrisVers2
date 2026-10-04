import React from 'react';
import { TmrLogo } from './TmrLogo';
import { Lang, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentLang: Lang;
  onSelectLang: (lang: Lang) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  activeSection,
}) => {
  const t = TRANSLATIONS[currentLang];

  const navItems = [
    { num: '01', key: 'home', label: t.nav.home, href: '#home' },
    { num: '02', key: 'services', label: t.nav.services, href: '#services' },
    { num: '03', key: 'portfolio', label: t.nav.portfolio, href: '#portfolio' },
    { num: '04', key: 'careers', label: t.nav.careers, href: '#careers' },
    { num: '05', key: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ECEAE5] border-b border-[#181819]/15 shadow-sm">
      <div className="w-full flex items-center justify-between min-h-[68px] sm:min-h-[76px] px-2 sm:px-4 md:px-8">
        
        {/* LEFT: Black Box with 'tmr.' Logo (Exact from Brandbook) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="bg-[#181819] px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 flex items-center justify-center shrink-0 hover:bg-black transition-colors"
        >
          <TmrLogo className="h-6 sm:h-7 md:h-8 w-auto" dotColor="#D12C26" textColor="#FFFFFF" />
        </a>

        {/* CENTER: Navigation Links ALWAYS VISIBLE DIRECTLY IN CENTER AS TEXT (No burger menu hiding them!) */}
        <nav className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group flex flex-col items-center py-1 sm:py-2 transition-all whitespace-nowrap"
              >
                {/* [ 01 ] Bracket Number */}
                <span className="font-futura text-[9px] sm:text-[11px] tracking-wider text-neutral-500 uppercase select-none">
                  [ {item.num} ]
                </span>

                {/* Nav Text Label in Futura Bold */}
                <span
                  className={`font-futura text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wider uppercase transition-colors relative mt-0.5 ${
                    isActive ? 'text-[#D12C26]' : 'text-[#181819] group-hover:text-[#D12C26]'
                  }`}
                >
                  {item.label}
                  {/* Active Red Underline as in Image 1 */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#D12C26]" />
                  )}
                </span>
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Language Switcher (RU / AZ / EN) with vertical divider */}
        <div className="flex items-center shrink-0 border-l border-neutral-400/40 pl-3 sm:pl-6 py-2">
          <div className="flex items-center gap-1 sm:gap-2 font-futura text-[11px] sm:text-xs font-extrabold tracking-widest text-[#181819]">
            {(['RU', 'AZ', 'EN'] as Lang[]).map((lang, idx) => {
              const isSelected = currentLang === lang;
              return (
                <React.Fragment key={lang}>
                  <button
                    onClick={() => onSelectLang(lang)}
                    className={`transition-colors py-1 px-0.5 cursor-pointer uppercase ${
                      isSelected
                        ? 'text-[#D12C26] font-black'
                        : 'text-neutral-500 hover:text-black'
                    }`}
                  >
                    {lang}
                  </button>
                  {idx < 2 && <span className="text-neutral-400 select-none">/</span>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
