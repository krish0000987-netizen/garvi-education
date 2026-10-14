import React from 'react';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';

export function WorkshopAgenda({ onRegisterClick }: { onRegisterClick: () => void }) {
  const sessions = [
    {
      time: '06:00 PM – 06:30 PM',
      duration: '30 Minutes',
      sessionNumber: 'Session 1',
      title: 'Modern School Operations Blueprint',
      description:
        'A comprehensive foundation examining how leading Indian schools have transitioned from fragmented paper registers to structured digital control without causing staff friction.',
      outcome: 'Clear operational roadmap and staff role definitions.',
    },
    {
      time: '06:30 PM – 07:00 PM',
      duration: '30 Minutes',
      sessionNumber: 'Session 2',
      title: 'Automating Student Records & Admissions',
      description:
        'Live demonstration of creating digital student dossiers, centralized KYC and document management, instant transfer certificate (TC) generation, and multi-year record lookup.',
      outcome: 'Elimination of lost paperwork and 10x faster parent inquiries.',
    },
    {
      time: '07:00 PM – 07:30 PM',
      duration: '30 Minutes',
      sessionNumber: 'Session 3',
      title: 'Digital Attendance & Paperless Fee Tracking',
      description:
        'Practical approaches to recording student and staff attendance in under two minutes daily, tracking fee installment schedules, sending automatic receipt SMS, and managing pending dues.',
      outcome: '98%+ timely fee recovery and zero register tampering.',
    },
    {
      time: '07:30 PM – 08:00 PM',
      duration: '30 Minutes',
      sessionNumber: 'Session 4',
      title: 'Parent Communication & Live Q&A Strategy',
      description:
        'Mastering broadcast communications via official WhatsApp templates for circulars and notices, followed by an open interactive Q&A solving real-world challenges faced by participating schools.',
      outcome: 'Direct answers to your specific school challenges and downloadable templates.',
    },
  ];

  return (
    <section id="agenda" className="py-24 bg-slate-50/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            STRUCTURED SCHEDULE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Workshop Agenda & Timetable
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            A fast-paced, high-value 2-hour live session structured to give you immediate actionable clarity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 space-y-10">
          {sessions.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-blue-600 group-hover:border-cyan-500 transition-colors shadow-sm" />

              {/* Session Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-700 uppercase bg-blue-50 px-2.5 py-1 rounded">
                      {item.sessionNumber}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {item.duration}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                    {item.time}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 bg-emerald-50/70 border border-emerald-200/60 rounded-xl px-3.5 py-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Key Outcome: {item.outcome}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 bg-[#0A192F] hover:bg-[#152544] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Book Your Spot for This Session — ₹199</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
