"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".policy-header", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      });

      gsap.from(".policy-content", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out"
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      {/* Header */}
      <header className="policy-header border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#0f172a] hover:text-[#5e87ff] transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="policy-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 sm:mb-8">
          Terms and Conditions for Uptrender Algorithmic Trading Platform:
        </h1>

        <p className="text-[#374151] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          Welcome to Uptrender! Before you proceed, please carefully read and understand the following terms and conditions that govern your use of our algorithmic trading platform.
        </p>

        <div className="space-y-8 sm:space-y-10">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              1. Acceptance of Terms:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              By accessing or using Uptrender, you agree to abide by these terms and conditions. If you do not agree, please refrain from using the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              2. Eligibility:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              You must be of legal age and have the legal capacity to enter into this agreement. If you are accessing Uptrender on behalf of a legal entity, you represent that you have the authority to bind that entity.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              3. Risk Disclosure:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Algorithmic trading involves financial risk. Past performance is not indicative of future results. Users acknowledge that trading decisions based on algorithms may lead to financial losses, and they are solely responsible for such risks.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              4. Account Registration:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              To use Uptrender, you must register an account. Provide accurate and current information. Maintain the confidentiality of your account credentials and notify us of any unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              5. Trading Strategies:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Uptrender provides algorithmic trading tools for informational purposes. Users are responsible for designing, testing, and implementing their own trading strategies. Uptrender is not liable for the performance or outcomes of user-generated algorithms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              6. Financial Advice:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Uptrender does not provide financial advice. Users are encouraged to conduct independent research and, if necessary, seek professional advice before making trading decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              7. Market Risks:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Market conditions may change rapidly. Uptrender is not responsible for losses incurred due to market volatility, technical glitches, or unforeseen events affecting trading.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              8. Platform Availability:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Uptrender strives to maintain uninterrupted platform access but does not guarantee continuous availability. Maintenance, updates, and unforeseen technical issues may temporarily disrupt service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              9. Data Accuracy:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              While Uptrender aims to provide accurate and timely data, it does not guarantee the accuracy, completeness, or reliability of any information displayed on the platform. Users should verify information independently.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              10. Intellectual Property:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Uptrender and its content, including algorithms, logos, and trademarks, are protected by intellectual property laws. Users may not reproduce, distribute, or modify the platform's content without explicit permission from Uptrender.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base">
            <Link href="/privacy-policy" className="text-[#5e87ff] hover:text-[#7a9fff] transition-colors">
              ← Privacy Policy
            </Link>
            <Link href="/refund-policy" className="text-[#5e87ff] hover:text-[#7a9fff] transition-colors">
              Refund Policy →
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#6b7280] text-sm">
            © {new Date().getFullYear()} Uptrender. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
