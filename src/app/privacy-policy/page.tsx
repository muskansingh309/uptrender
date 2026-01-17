"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-8 sm:mb-12">
          We are committed to your privacy
        </h1>

        <div className="space-y-8 sm:space-y-10">
          <section>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              The confidentiality and security of information we collect about consumers and customers is something The uptrender is committed to protecting. Non public information ("Information") about you will not be shared with third parties without your consent. The exceptions being the specific purposes below. This notice describes the information we may gather and the circumstances under which we may share it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 sm:mb-6">
              This is how our information is gathered
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              We get most of our Information directly from you. This happens when you apply for, access and use financial (and related) products and services offered by The uptrender. This personal information we collect may include your name, address, telephone number, email address. We also use web tools on our website to help us monitor traffic patterns to see how our users navigate through our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 sm:mb-6">
              This is how we protect your information
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              We maintain physical, electronic and procedural safeguards which are designed to comply with industry rules and regulations. To protect the confidentiality of Information and to comply with our established policies is something our employees are required to do. Information may be accessed by them only when there is an appropriate reason to do so, such as to administer our products or services. We also maintain physical, electronic and procedural safeguards to protect Information which complies with all applicable laws. Employees who violate this Privacy Policy are subject to disciplinary process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 sm:mb-6">
              Password-protection on a secure server
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              Secure Sockets Layer (SSL) encryption is used on a secure server to better protect your information. Any interception by a third party is prevented when SSL encodes and decodes the transmission of personal information. Firewalls and other security technology are also used to protect our network and systems from external attack. In addition to our efforts, it is imperative that you protect your identity. Here are a few suggestions. When using the Internet, keep your security software current and turned on; protect your password information, shred personal documents, and check your credit report regularly. Bear in mind that The uptrender will never request by email or similar electronic means your account number or login password, so if you ever receive such a request via the Internet, it is not from us and you should not entertain the same.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 sm:mb-6">
              Information disclosure
            </h2>
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              It is our policy to never disclose any nonpublic information about our customers or former customers to anyone. We do not sell customer lists and we will never sell your name to a catalogue company.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base">
            <Link href="/terms-conditions" className="text-[#5e87ff] hover:text-[#7a9fff] transition-colors">
              Terms & Conditions →
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
