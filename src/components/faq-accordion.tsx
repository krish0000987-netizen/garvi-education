'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

interface FaqAccordionProps {
  price?: number;
  workshopDate?: string;
}

export function FaqAccordion({ price = 199, workshopDate = 'Saturday, 25 October 2026' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can attend this workshop?',
      answer:
        'This workshop is designed for school owners, directors, principals, vice-principals, administrative coordinators, and office managers of primary, secondary, and higher secondary schools across Madhya Pradesh and India. Whether your school has 150 students or 2,500 students, the administrative principles apply directly.',
    },
    {
      question: 'Is the workshop conducted online?',
      answer:
        'Yes. The workshop is conducted 100% online via a secure, interactive live video session. You can join conveniently from your office laptop, desktop, tablet, or smartphone from anywhere in Rewa, MP, or nationwide.',
    },
    {
      question: 'What will I learn?',
      answer:
        'You will explore practical school management strategies: structuring digital student records and dossiers, managing multi-period attendance, tracking fee collections and pending dues, automating parent WhatsApp and SMS circulars, and creating standard operating procedures for everyday school administration.',
    },
    {
      question: 'How much does registration cost?',
      answer: `Registration is a one-time fixed fee of ₹${price}. There are no hidden fees, recurring subscriptions, or surprise software charges. This includes full access to the live 2-hour session, digital templates, and the WhatsApp community.`,
    },
    {
      question: 'How do I complete registration?',
      answer:
        'Click any "Register Now" button on this page. Enter your name, mobile number, email, school name, and city. You will be guided through secure online payment (UPI, debit/credit cards, or net banking). Upon successful payment verification, your registration is immediately confirmed.',
    },
    {
      question: 'How will I receive workshop details?',
      answer:
        'Immediately after payment verification, you will receive an official confirmation on the screen with your unique Registration ID. You will also receive an instant confirmation via WhatsApp and email containing your session schedule and instructions.',
    },
    {
      question: 'How do I join the WhatsApp group?',
      answer:
        'On your post-registration confirmation page (Thank You page) and inside your confirmation email and WhatsApp message, an exclusive direct invite link to the official Garvi Education WhatsApp Group is provided. Simply click the link to join the community.',
    },
    {
      question: 'What if my payment succeeds but registration is not confirmed?',
      answer:
        'Our system uses secure server-side payment verification. In rare cases where your network drops during payment, our automated webhook synchronizes with the payment gateway within seconds to verify and confirm your seat. If you ever need manual assistance, our Rewa support helpline (+91 94251 00000 / support@garvieducation.com) will immediately verify your transaction and issue your registration ID.',
    },
    {
      question: 'Will I receive reminders before the workshop?',
      answer: `Yes. To ensure you don't miss the session, our automated system sends reminders via WhatsApp and email 1 day before the workshop and 1 hour before we go live on ${workshopDate}, complete with the direct meeting joining link.`,
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Have Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Everything you need to know about the Garvi Education School Management Workshop.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/20 shadow-md'
                    : 'border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg text-[#0A192F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help support box */}
        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Still have a question?</h4>
              <p className="text-xs text-slate-500">Our Rewa academic team is here to assist you.</p>
            </div>
          </div>

          <a
            href="https://wa.me/919425100000?text=Hello%20Garvi%20Education,%20I%20have%20a%20question%20about%20the%20School%20Management%20Workshop."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl border border-emerald-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
