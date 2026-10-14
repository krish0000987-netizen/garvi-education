import React from 'react';
import {
  Building2,
  FolderLock,
  UserCheck,
  CreditCard,
  MessageSquare,
  Compass,
  ArrowRight,
} from 'lucide-react';

export function WorkshopOutcomes({ onRegisterClick }: { onRegisterClick: () => void }) {
  const outcomes = [
    {
      icon: Building2,
      number: '01',
      title: 'School Management Fundamentals',
      description:
        'Discover the foundational principles of modern educational administration: role-based access control, institutional data privacy, and organizing your school’s digital backbone.',
      highlights: ['Administrative hierarchy', 'Staff permissions', 'Operational security'],
      color: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/60',
    },
    {
      icon: FolderLock,
      number: '02',
      title: 'Student Information & Records',
      description:
        'Learn how to establish tamper-proof digital dossiers for every enrolled student — from digital admission forms and KYC documents to academic performance and transfer certificates.',
      highlights: ['Instant record search', 'Digital document vault', 'Zero physical misplacements'],
      color: 'from-indigo-600 to-violet-600',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
    },
    {
      icon: UserCheck,
      number: '03',
      title: 'Attendance & Administrative Workflows',
      description:
        'Examine streamlined daily attendance tracking for students and staff. Eliminate handwritten daily attendance registers and configure automated absence alerts for parents.',
      highlights: ['Daily absence tracking', 'Staff leave management', 'Automated parent alerts'],
      color: 'from-sky-600 to-blue-600',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200/60',
    },
    {
      icon: CreditCard,
      number: '04',
      title: 'Fee Management & Reporting',
      description:
        'Understand structured fee-collection mechanisms: tracking installments, automated digital receipts, identifying overdue balances, and generating audit-ready financial summaries.',
      highlights: ['Automated payment receipts', 'Defaulter tracking lists', 'Financial reconciliation'],
      color: 'from-emerald-600 to-teal-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    },
    {
      icon: MessageSquare,
      number: '05',
      title: 'Digital Communication & Coordination',
      description:
        'Explore how leading institutions utilize official WhatsApp and SMS notifications to communicate circulars, exam dates, emergency alerts, and homework with parents effortlessly.',
      highlights: ['One-click circulars', 'WhatsApp updates', 'High parent satisfaction'],
      color: 'from-cyan-600 to-blue-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
    },
    {
      icon: Compass,
      number: '06',
      title: 'Practical Implementation Strategies',
      description:
        'Gain actionable steps to smoothly introduce digital tools to your teaching and administrative staff without overwhelming them or disrupting daily classes.',
      highlights: ['Overcoming tech resistance', 'Staff onboarding roadmap', 'Step-by-step rollout'],
      color: 'from-amber-600 to-orange-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/60',
    },
  ];

  return (
    <section id="outcomes" className="py-24 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            CURRICULUM BREAKDOWN
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            What You’ll Explore in This Workshop
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A comprehensive, practical exploration of core school administrative pillars designed specifically for Indian private, public, and semi-urban educational institutions.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-black text-slate-400 tracking-wider">
                      MODULE {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A192F] mb-3 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Workshop Topics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70 font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Registration Prompt below outcomes */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:px-8 sm:py-4 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-sm font-semibold text-slate-700">
              Ready to learn actionable operational workflows for your school?
            </span>
            <button
              onClick={onRegisterClick}
              className="inline-flex items-center gap-2 bg-[#0A192F] hover:bg-[#152544] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all"
            >
              <span>Join Workshop for ₹199</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
