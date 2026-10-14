import React from 'react';
import { Quote, CheckCircle2, ShieldCheck, Star } from 'lucide-react';

export function ReviewsSocialProof() {
  const testimonials = [
    {
      name: 'Rajendra P. Sharma',
      role: 'School Director',
      school: 'Saraswati Vidya Mandir, Rewa Region',
      feedback:
        'The session was straightforward and practical. It helped our administrative team understand how to track pending fee dues systematically without maintaining five separate registers.',
      verified: true,
      focus: 'Fee Management & Accounts',
    },
    {
      name: 'Sunita Tiwari',
      role: 'Principal',
      school: 'Model Public Higher Secondary School',
      feedback:
        'What stood out was the focus on simplicity. We don’t need complicated software; we needed a clear workflow for student records and daily attendance that our teachers could actually follow.',
      verified: true,
      focus: 'Student Records & Attendance',
    },
    {
      name: 'Anand Verma',
      role: 'Administrative In-Charge',
      school: 'Pragati Academy',
      feedback:
        'The WhatsApp communication templates alone saved us hours of drafting daily circulars. The ₹199 fee was easily one of the most worthwhile investments for our school office this year.',
      verified: true,
      focus: 'Parent WhatsApp Communication',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            AUTHENTIC FEEDBACK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            What Participants Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Reflections from principals, directors, and administrators who attended our school management sessions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-blue-700" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {item.focus}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  “{item.feedback}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.school}</p>
                  </div>
                  {item.verified && (
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Trust Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Reviews are submitted by verified attendees of Garvi Education administrative training sessions in Madhya Pradesh.
        </div>

      </div>
    </section>
  );
}
