"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function RefundPolicyPage() {
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
          Refund Policy for Uptrender:
        </h1>

        <p className="text-[#374151] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          At uptrender, we operate with a commitment to providing valuable services to our users. As of January 2024, we would like to inform our users that uptrender does not have a refund policy in place.
        </p>

        <div className="space-y-8 sm:space-y-10">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              No Refunds:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              uptrender does not offer refunds for any of its services, including but not limited to subscription fees, access to premium features, or any other products offered on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              Service Satisfaction:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Users are encouraged to carefully evaluate our platform and services before making any purchases. uptrender provides extensive information and resources to help users make informed decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              Subscription Cancellation:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Users have the option to cancel their subscription at any time, and the cancellation will take effect at the end of the current billing period. No refunds will be issued for the remaining days of the subscription period.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              Platform Changes:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              uptrender reserves the right to modify, suspend, or discontinue any aspect of the platform, including services and features, without notice. Such changes will not entitle users to a refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              Technical Issues:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              In the event of technical issues or interruptions in service, uptrender will make reasonable efforts to restore services promptly. However, no refunds will be provided for downtime or technical difficulties.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              Contact and Support:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              If users encounter issues or have questions about the platform, they are encouraged to contact our customer support team at support@uptrender.tech. Our team is dedicated to assisting users and addressing concerns promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 sm:mb-4">
              Policy Changes:
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              uptrender reserves the right to update or modify this refund policy at any time without prior notice. Users are responsible for regularly reviewing the policy for any changes.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 sm:p-8 mt-8">
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              By using uptrender services, users acknowledge and agree to this refund policy. If you do not agree with this policy, we recommend refraining from using our platform and services. Your understanding and cooperation are appreciated.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base">
            <Link href="/privacy-policy" className="text-[#5e87ff] hover:text-[#7a9fff] transition-colors">
              ← Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-[#5e87ff] hover:text-[#7a9fff] transition-colors">
              ← Terms & Conditions
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
