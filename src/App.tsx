/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ManifestoSection } from './components/ManifestoSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Lang } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Lang>('RU'); // Matches Image 1 default state
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState<string | undefined>();
  const [briefMessageContext, setBriefMessageContext] = useState<string | undefined>();

  // Intersection observer to track active section
  useEffect(() => {
    const sectionIds = ['home', 'services', 'portfolio', 'careers', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (serviceTitle?: string, messageNote?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBrief(serviceTitle);
    }
    if (messageNote) {
      setBriefMessageContext(messageNote);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#ECEAE5] text-[#181819] selection:bg-[#D12C26] selection:text-white font-futura">
      {/* 
        HEADER:
        Matching Turn 2 Image 1 exactly:
        Left: Black box with 'tmr.' logo
        Center: [ 01 ] ГЛАВНАЯ, [ 02 ] УСЛУГИ, [ 03 ] ПОРТФОЛИО, [ 04 ] КАРЬЕРА, [ 05 ] СВЯЗЬ
        Right: RU / AZ / EN
      */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
        activeSection={activeSection}
      />

      <main>
        {/* 
          01. HERO:
          Exact reproduction from Turn 2 Image 1:
          - Left: CREATIVE IDEAS REAL RESULTS + Left circular arrow '<' + Brutalist building with red accent bar
          - Center: Fine '+' crosshair + Towering 'T M R' with 'R' in bold red (#D12C26)
          - Right: Right circular arrow '>' + Classical David statue with red paint brushstroke (100% transparent PNG) + BRAND DESIGN DIGITAL MEDIA —
          - Bottom: Manifesto statement + Red button 'НАЧАТЬ' + 'СМОТРЕТЬ'
        */}
        <Hero
          currentLang={currentLang}
          onOpenContact={() => scrollToContact()}
        />

        {/* 02. SERVICES */}
        <ServicesSection
          currentLang={currentLang}
          onSelectServiceForBrief={(srv) => scrollToContact(srv, `Selected: ${srv}`)}
        />

        {/* CONTRASTING DARK OBSIDIAN MANIFESTO SECTION */}
        <ManifestoSection
          currentLang={currentLang}
          onOpenContact={() => scrollToContact()}
        />

        {/* 03. PORTFOLIO */}
        <PortfolioSection
          currentLang={currentLang}
          onStartProjectWithContext={(context) => scrollToContact(undefined, context)}
        />

        {/* 04. CAREERS */}
        <CareersSection currentLang={currentLang} />

        {/* 05. CONTACT */}
        <ContactSection
          currentLang={currentLang}
          initialServiceContext={selectedServiceForBrief}
          initialMessage={briefMessageContext}
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
