import React, { useState } from 'react';
import { X, Check, Flame, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface AuditCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyDiagnosisToBrief: (diagnosisSummary: string) => void;
}

export const AuditCalculator: React.FC<AuditCalculatorProps> = ({
  isOpen,
  onClose,
  onApplyDiagnosisToBrief,
}) => {
  const [step, setStep] = useState<number>(1);
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string>('');
  const [q3, setQ3] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setQ1('');
    setQ2('');
    setQ3('');
  };

  const calculateResult = () => {
    return {
      title: 'KƏSKİN QLAMUR & HIGH-GLOSS TRANSFORMASİYA TƏLƏB OLUNUR',
      score: '92% Qlamur Potensialı',
      analysis:
        'Brendiniz sosial mediada "standart korporativ bozluq" tələsində qalıb. Müasir elit auditoriya darıxdırıcı afişa və qiymət postlarını bir saniyə belə izləmir. Sizə beynəlxalq moda jurnallarının (Vogue, Dazed, 032c) kəskin Bodoni-Futura tipoqrafiyası, 4K kinematik Reels və xrom/nəm parıltılı editorial art-direkşn lazımdır.',
      recommendedAction:
        'MANIFEST SPREAD 02 (High-Gloss Art-Direkşn) + SPREAD 03 (4K Kinematik Reels) kurasiyası ilə lentin tam dəb jurnalı səviyyəsində yenidən qurulması.',
    };
  };

  const result = calculateResult();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#0e0e0e] border border-neutral-800 shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-6 md:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#E52E20] text-white font-mono text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
              LE TEST DE STYLE
            </span>
            <span className="font-glossy text-lg text-white font-bold tracking-tight uppercase">
              EKSPRESS GLOSS SMM AUDİT
            </span>
            <span className="text-xs font-mono text-neutral-500">
              [ {step <= 3 ? `0${step} / 03` : 'NƏTİCƏ'} ]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="font-editorial italic text-2xl text-[#E52E20] block mb-1">
                Question Première // Mövcud Vəziyyət
              </span>
              <h3 className="font-glossy text-xl md:text-2xl font-bold text-white">
                İnstaqram lentiniz beynəlxalq qlamur jurnala bənzəyir, yoxsa adi korporativ səhifəyə?
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'canva',
                  title: 'A. Çox sadə və standartdır',
                  desc: 'Canva şablonları, quru elanlar və cansız stok şəkillərdən istifadə edirik.',
                },
                {
                  id: 'average',
                  title: 'B. Təmizdir, amma xüsusi bir "ruh" və qlamur yoxdur',
                  desc: 'Məhsul şəkillərimiz aydındır, amma insanlarda estetik həyəcan yaratmır.',
                },
                {
                  id: 'trying',
                  title: 'C. Yüksək dəb və cəsarətli vizual istəyirik',
                  desc: 'Fərqlənmək istəyirik, amma daxili komandamızın zövqü və sənət gücü çatmır.',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setQ1(opt.id)}
                  className={`p-4 border cursor-pointer transition-all ${
                    q1 === opt.id
                      ? 'bg-neutral-900 border-[#E52E20] shadow-lg'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <p className="font-glossy font-bold text-white text-base">{opt.title}</p>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                disabled={!q1}
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-[#E52E20] disabled:bg-neutral-800 disabled:text-neutral-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Növbəti</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="font-editorial italic text-2xl text-[#E52E20] block mb-1">
                Question Deuxième // Hədəf
              </span>
              <h3 className="font-glossy text-xl md:text-2xl font-bold text-white">
                Brendinizin sosial mediadakı ən böyük vizual arzusu nədir?
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'viral',
                  title: 'A. 4K Viral Reels & Gözqamaşdırıcı Çatımlılıq',
                  desc: 'Milyonlarla baxış yığmaq və şəhərin ən çox danışılan kult hesabına çevrilmək.',
                },
                {
                  id: 'prestige',
                  title: 'B. Elit Qlamur İmic & Yüksək Çekli Satış',
                  desc: 'Qiymətlərimizi artırmaq, lüks seqmentdə nüfuz qazanmaq və varlı alıcıları cəlb etmək.',
                },
                {
                  id: 'culture',
                  title: 'C. Subkultura & Qlobal Tərəfdaşlıqlar',
                  desc: 'Məşhurların, rəssamların və dəb nümayəndələrinin təbii olaraq brendi paylaşması.',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setQ2(opt.id)}
                  className={`p-4 border cursor-pointer transition-all ${
                    q2 === opt.id
                      ? 'bg-neutral-900 border-[#E52E20] shadow-lg'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <p className="font-glossy font-bold text-white text-base">{opt.title}</p>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 border border-neutral-700 text-xs font-mono uppercase text-neutral-300 hover:text-white"
              >
                Geri
              </button>
              <button
                disabled={!q2}
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-[#E52E20] disabled:bg-neutral-800 disabled:text-neutral-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Növbəti</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="font-editorial italic text-2xl text-[#E52E20] block mb-1">
                Question Troisième // Çətinlik
              </span>
              <h3 className="font-glossy text-xl md:text-2xl font-bold text-white">
                İndiyə qədər işlədiyiniz agentliklərdə ən çox nə sizi məyus edib?
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'no-soul',
                  title: 'A. Qlamur və zövqün olmaması',
                  desc: 'Dizaynerlərin qrafikləri kəndir-kəndir eyni idi, heç bir yüksək dəb hissi yox idi.',
                },
                {
                  id: 'no-sales',
                  title: 'B. Şəkillər adi idi, video montaj çox ləng gedirdi',
                  desc: 'Trendləri tuta bilmirdik, kadrlar kino kimi deyil, adi telefon videosu kimi idi.',
                },
                {
                  id: 'cheap',
                  title: 'C. Brendin nüfuzunu ucuzlaşdırırdılar',
                  desc: 'Mənasız yarışmalar və qeyri-ciddi paylaşımlarla elit imicimizə zərər vururdular.',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setQ3(opt.id)}
                  className={`p-4 border cursor-pointer transition-all ${
                    q3 === opt.id
                      ? 'bg-neutral-900 border-[#E52E20] shadow-lg'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <p className="font-glossy font-bold text-white text-base">{opt.title}</p>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">{opt.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 border border-neutral-700 text-xs font-mono uppercase text-neutral-300 hover:text-white"
              >
                Geri
              </button>
              <button
                disabled={!q3}
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-[#E52E20] disabled:bg-neutral-800 disabled:text-neutral-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Diaqnozu Gör</span>
                <Flame className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: High-Gloss Results */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="p-5 bg-neutral-900 border-l-4 border-[#E52E20]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E52E20] font-bold">
                  MANIFEST HAUTE ATELIER DİAQNOZU
                </span>
                <span className="font-mono text-xs text-white bg-black px-2.5 py-0.5 border border-neutral-700">
                  {result.score}
                </span>
              </div>
              <h4 className="font-glossy text-xl md:text-2xl font-black text-white mt-2">
                {result.title}
              </h4>
              <p className="text-xs md:text-sm text-neutral-300 mt-2 leading-relaxed font-sans">
                {result.analysis}
              </p>
            </div>

            <div className="p-4 bg-black/80 border border-neutral-800">
              <p className="text-xs font-mono uppercase text-neutral-400">
                Tövsiyə Olunan Qlamur Yol Xəritəsi:
              </p>
              <p className="text-xs text-white mt-1 font-medium font-mono">
                {result.recommendedAction}
              </p>
            </div>

            <p className="font-hand text-2xl text-[#E52E20]">
              ✎ Vaxt itirməyin — bu diaqnozu brif formanıza əlavə edib dərhal art-direktorla görüş təyin edin.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono uppercase text-neutral-400 hover:text-white flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Yenidən Keç</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onApplyDiagnosisToBrief(
                    `Gloss Audit Nəticəsi: ${result.title} | Cavablar: ${q1}, ${q2}, ${q3}`
                  );
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#E52E20] hover:bg-[#c92418] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Diaqnozla Brif Göndər</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
