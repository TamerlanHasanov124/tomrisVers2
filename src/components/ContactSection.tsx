import React, { useState, useEffect } from 'react';
import { Lang, TRANSLATIONS } from '../data/translations';
import { Send, CheckCircle2, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Lang;
  initialServiceContext?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  initialServiceContext,
  initialMessage,
}) => {
  const [brandName, setBrandName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('3,000 - 6,000 AZN');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    if (initialServiceContext && !selectedServices.includes(initialServiceContext)) {
      setSelectedServices((prev) => [...prev, initialServiceContext]);
    }
  }, [initialServiceContext]);

  useEffect(() => {
    if (initialMessage) {
      setMessage((prev) => (prev ? `${prev}\n\n${initialMessage}` : initialMessage));
    }
  }, [initialMessage]);

  const serviceOptions = {
    AZ: [
      'SMM və Instagram idarə olunması',
      'Kontent strategiyası',
      'Kreativ və dizayn',
      'Foto və video çəkilişləri',
      'Hədəflənmiş reklam və analitika',
      'Kompleks Paket (360°)',
    ],
    RU: [
      'SMM и ведение Instagram',
      'Контент-стратегия',
      'Креатив и дизайн',
      'Фото и видеосъемка',
      'Таргетированная реклама',
      'Комплексный Пакет (360°)',
    ],
    EN: [
      'SMM & Instagram Management',
      'Content Strategy',
      'Creative & Design',
      'Photo & Video Production',
      'Targeted Ads & Analytics',
      'Full Turnkey Retainer',
    ],
  };

  const budgetOptions = [
    '1,500 - 3,000 AZN',
    '3,000 - 6,000 AZN',
    '6,000 - 12,000 AZN',
    '12,000+ AZN',
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentServiceOptions = serviceOptions[currentLang];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#ECEAE5] border-b border-[#181819]/15 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#181819]/15 pb-6">
          <div>
            <span className="text-xs font-futura tracking-widest text-[#D12C26] uppercase font-bold block mb-2">
              [ 05 ] // CONTACT & BRIEF
            </span>
            <h2 className="font-futura text-4xl sm:text-6xl font-extrabold text-[#181819] uppercase tracking-tight">
              {t.contact.title}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-600 text-sm font-futura max-w-sm">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Split Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="font-futura text-2xl font-bold text-[#181819] tracking-tight">
                TMR CREATIVE ATELIER
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-futura">
                Nizami küç. 142, Landmark III, Bakı, Azərbaycan.
              </p>
            </div>

            <div className="space-y-3 text-xs font-futura">
              <a
                href="tel:+994124908820"
                className="flex items-center gap-3 text-neutral-700 hover:text-[#D12C26] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D12C26]" />
                <span className="font-bold">+994 (12) 490 88 20</span>
              </a>

              <a
                href="mailto:hello@tmr-agency.com"
                className="flex items-center gap-3 text-neutral-700 hover:text-[#D12C26] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D12C26]" />
                <span className="font-bold">hello@tmr-agency.com</span>
              </a>
            </div>

            {/* Direct Messengers */}
            <div className="pt-4 border-t border-[#181819]/15 space-y-2">
              <span className="text-[11px] font-futura text-neutral-500 uppercase font-bold block">
                {currentLang === 'AZ' ? 'Operativ Əlaqə:' : currentLang === 'RU' ? 'Прямой Чат:' : 'Instant Direct Chat:'}
              </span>
              <div className="flex gap-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-[#181819] hover:bg-[#D12C26] text-xs font-futura font-bold text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-[#181819] hover:bg-emerald-600 text-xs font-futura font-bold text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Brief Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="p-12 border border-[#181819] bg-white text-center space-y-4 shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-[#D12C26] mx-auto animate-bounce" />
                <h3 className="font-futura text-2xl font-bold text-[#181819] uppercase">
                  {t.contact.sentTitle}!
                </h3>
                <p className="text-sm font-futura text-neutral-600">
                  {t.contact.sentDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#181819] text-xs font-futura uppercase tracking-widest text-white hover:bg-[#D12C26] cursor-pointer"
                >
                  Ok
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-futura uppercase text-neutral-600 font-bold mb-2">
                      {t.contact.brand} *
                    </label>
                    <input
                      type="text"
                      required
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="Noir Concept"
                      className="w-full bg-white border border-[#181819]/20 focus:border-[#D12C26] text-[#181819] px-4 py-3 text-sm outline-none transition-colors font-futura"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-futura uppercase text-neutral-600 font-bold mb-2">
                      {t.contact.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="Nigar Kərimova"
                      className="w-full bg-white border border-[#181819]/20 focus:border-[#D12C26] text-[#181819] px-4 py-3 text-sm outline-none transition-colors font-futura"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-futura uppercase text-neutral-600 font-bold mb-2">
                      {t.contact.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+994 (50) 000 00 00"
                      className="w-full bg-white border border-[#181819]/20 focus:border-[#D12C26] text-[#181819] px-4 py-3 text-sm outline-none transition-colors font-futura"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-futura uppercase text-neutral-600 font-bold mb-2">
                      {t.contact.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@brand.az"
                      className="w-full bg-white border border-[#181819]/20 focus:border-[#D12C26] text-[#181819] px-4 py-3 text-sm outline-none transition-colors font-futura"
                    />
                  </div>
                </div>

                {/* Services Tags (Reflecting User's Exact Services) */}
                <div>
                  <label className="block text-xs font-futura uppercase text-neutral-600 font-bold mb-2">
                    {currentLang === 'AZ' ? 'Maraqlandığınız Xidmət və ya Paket:' : currentLang === 'RU' ? 'Интересующая Услуга или Пакет:' : 'Interested Service or Retainer:'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {currentServiceOptions.map((srv) => {
                      const isSelected = selectedServices.some((s) => s.includes(srv) || srv.includes(s));
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-3.5 py-2 text-xs font-futura uppercase tracking-wider transition-colors border cursor-pointer ${
                            isSelected
                              ? 'bg-[#D12C26] text-white border-[#D12C26] font-bold shadow-sm'
                              : 'bg-white text-neutral-700 border-[#181819]/20 hover:border-[#181819]'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-futura uppercase text-neutral-600 font-bold mb-2">
                    {t.contact.budget}:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((b) => {
                      const isSelected = budget === b;
                      return (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`py-2 px-3 text-xs font-futura border text-center transition-colors font-bold cursor-pointer ${
                            isSelected
                              ? 'bg-[#181819] text-white border-[#181819]'
                              : 'bg-white text-neutral-700 border-[#181819]/20 hover:border-[#181819]'
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-futura uppercase text-neutral-600 font-bold mb-2">
                    {t.contact.message}:
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Qısa layihə təsviri..."
                    className="w-full bg-white border border-[#181819]/20 focus:border-[#D12C26] text-[#181819] px-4 py-3 text-sm outline-none transition-colors resize-none font-futura"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#D12C26] hover:bg-[#b5221d] text-white text-xs font-futura font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-md cursor-pointer active:scale-95"
                  >
                    <span>{t.contact.send}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
