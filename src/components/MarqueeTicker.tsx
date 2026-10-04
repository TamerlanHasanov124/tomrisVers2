import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'SMM STRATEGIYASI',
    'ART-DİREKŞN & KOLLAJ',
    '4K KİNEMATİK REELS',
    'SUBKULTURA İNTEQRASIYASI',
    'MODERNIST TİPOQRAFİYA',
    'HƏDƏFLİ ADS & METRİKA',
  ];

  return (
    <div className="border-b border-white/10 bg-[#080808] py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-12 text-xs font-mono tracking-widest uppercase font-semibold text-neutral-400">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="text-white hover:text-[#E52E20] transition-colors">{text}</span>
            <span className="text-[#E52E20]">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
