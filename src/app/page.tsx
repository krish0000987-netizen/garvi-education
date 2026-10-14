'use client';

import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ProblemOpportunity } from '@/components/problem-opportunity';
import { WorkshopOutcomes } from '@/components/workshop-outcomes';
import { VideoPreview } from '@/components/video-preview';
import { WhoShouldAttend } from '@/components/who-should-attend';
import { WorkshopAgenda } from '@/components/workshop-agenda';
import { ReviewsSocialProof } from '@/components/reviews-social-proof';
import { PricingSection } from '@/components/pricing-section';
import { FaqAccordion } from '@/components/faq-accordion';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { RegistrationModal } from '@/components/registration-modal';
import { StickyMobileCta } from '@/components/sticky-mobile-cta';
import { captureUtmParamsFromUrl } from '@/lib/utm';

export default function GarviLandingPage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Settings state (can also be loaded dynamically or fall back to defaults)
  const workshopDate = 'Saturday, 25 October 2026';
  const workshopTime = '6:00 PM IST';
  const duration = '2 Hours Live Interactive Session';
  const price = 199;

  useEffect(() => {
    // Capture and persist UTM tags from URL on mount
    captureUtmParamsFromUrl();
  }, []);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Section 1 — Premium Announcement Bar */}
      <AnnouncementBar
        workshopDate={workshopDate}
        workshopTime={workshopTime}
      />

      {/* Section 2 — Minimal Premium Navigation */}
      <Navbar
        onRegisterClick={openRegisterModal}
        price={price}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* Section 3 — High-Converting Hero Section */}
        <HeroSection
          onRegisterClick={openRegisterModal}
          onWatchVideoClick={() => {
            const videoElem = document.getElementById('open-video-preview-btn');
            if (videoElem) {
              videoElem.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => videoElem.click(), 500);
            } else {
              openRegisterModal();
            }
          }}
          workshopDate={workshopDate}
          workshopTime={workshopTime}
          duration={duration}
          price={price}
        />

        {/* Section 4 — Problem and Opportunity */}
        <ProblemOpportunity
          onRegisterClick={openRegisterModal}
        />

        {/* Section 5 — Workshop Outcomes */}
        <WorkshopOutcomes
          onRegisterClick={openRegisterModal}
        />

        {/* Section 6 — Workshop Video Preview */}
        <VideoPreview
          onRegisterClick={openRegisterModal}
          price={price}
        />

        {/* Section 7 — Who Should Attend? */}
        <WhoShouldAttend
          onRegisterClick={openRegisterModal}
        />

        {/* Section 8 — Workshop Agenda */}
        <WorkshopAgenda
          onRegisterClick={openRegisterModal}
        />

        {/* Section 9 — Reviews and Social Proof */}
        <ReviewsSocialProof />

        {/* Section 10 — Workshop Pricing */}
        <PricingSection
          onRegisterClick={openRegisterModal}
          price={price}
          workshopDate={workshopDate}
          workshopTime={workshopTime}
        />

        {/* Section 11 — FAQ Accordion */}
        <FaqAccordion
          price={price}
          workshopDate={workshopDate}
        />

        {/* Section 12 — Final Conversion Section */}
        <FinalCta
          onRegisterClick={openRegisterModal}
          price={price}
          workshopDate={workshopDate}
        />

      </main>

      {/* Section 13 — Footer */}
      <Footer />

      {/* Sticky Mobile Registration CTA */}
      <StickyMobileCta
        onRegisterClick={openRegisterModal}
        price={price}
      />

      {/* Registration & Checkout Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        price={price}
        workshopDate={workshopDate}
        workshopTime={workshopTime}
      />

    </div>
  );
}
