import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onRegisterClick: () => void;
  price?: number;
  workshopDate?: string;
}

export function FinalCta({
  onRegisterClick,
  price = 199,
  workshopDate = 'Saturday, 25 October 2026',
}: FinalCtaProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#0A192F] overflow-hidden shadow-2xl border border-blue-900/60">
          
          {/* Background image with high contrast dark gradient */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/images/school-operations.jpg"
              alt="School administration operations center"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:p-20 text-center max-w-3xl mx-auto text-white">
            
            <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-blue-400/20 uppercase tracking-wider mb-6">
              GARVI EDUCATION • REWA, MADHYA PRADESH
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Take the Next Step Toward Smarter School Management.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Reserve your place in the Garvi Education online workshop and discover practical systems to streamline your school operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                id="final-cta-btn"
                onClick={onRegisterClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#0A192F] hover:bg-slate-100 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all active:scale-95 group"
              >
                <span>Register Now for ₹{price}</span>
                <ArrowRight className="w-5 h-5 text-[#0A192F] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 pt-6 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Next Live Batch: {workshopDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Verified Payment & Instant Receipt</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
