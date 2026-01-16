"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



// Custom SVG icons matching the design
const BoxSearchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#111111]">
    <path d="M8 14L20 8L32 14V26L20 32L8 26V14Z" />
    <path d="M20 20V32" />
    <path d="M8 14L20 20L32 14" />
    <circle cx="36" cy="36" r="6" />
    <path d="M40 40L44 44" />
    <path d="M34 30L34 26" strokeLinecap="round" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#111111]">
    <path d="M24 6L38 12V22C38 32 32 40 24 44C16 40 10 32 10 22V12L24 6Z" />
    <path d="M17 24L22 29L31 20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TreesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#111111]">
    <path d="M16 40V28" />
    <path d="M16 28C12 28 8 24 8 20C8 16 12 12 16 12C16 8 20 4 24 4" />
    <path d="M16 28C20 28 24 24 24 20" />
    <path d="M32 40V24" />
    <path d="M32 24C28 24 24 20 24 16C24 12 28 8 32 8C32 4 36 0 40 4" />
    <path d="M32 24C36 24 40 20 40 16" />
    <circle cx="40" cy="8" r="3" />
    <path d="M40 8L42 6" />
    <path d="M40 8L42 10" />
    <path d="M40 8L38 6" />
  </svg>
);

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: <BoxSearchIcon />,
      title: 'Unique Design',
      description: 'Fusce aliquet quam eget neque ultrices elementum felis id arcu blandit sagittis.',
    },
    {
      icon: <ShieldCheckIcon />,
      title: 'Quality Code',
      description: 'Lorem ipsum dolor sit amet rembe adipiscing elite lnwege maximus ligula imsum.',
    },
    {
      icon: <TreesIcon />,
      title: 'Clean and Minimal',
      description: 'Maecenas volutpat, diam enime volutpa cramas luctus interdum sodales.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefits-header", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".benefit-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[60px] md:py-[80px] lg:py-[100px] bg-white" id="benefits">
      <div className="container px-[15px] sm:px-[20px] mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-start">
          {/* Section Header Column */}
          <div className="w-full lg:w-[30%] lg:mb-0 lg:pr-[60px] lg:mt-[40px] lg:self-start benefits-header text-center lg:text-left">
            <span className="block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#969595] mb-[16px] sm:mb-[20px]">
              Primary Benefits
            </span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-medium leading-[1.15] tracking-[-0.02em] text-[#111111] mb-0">
              Why choose <br className="hidden sm:block" /> Uptrender?
            </h2>
            {/* Grey divider line */}
            <div className="w-[80px] sm:w-[100px] h-[1px] bg-[#7a7878] mt-[25px] sm:mt-[35px] mx-auto lg:mx-0"></div>
          </div>

          {/* Benefits Grid Column */}
          <div className="w-full lg:w-[70%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] sm:gap-[24px] md:gap-[30px] benefits-grid">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item benefit-card bg-[#f8fafc] rounded-xl sm:rounded-2xl p-[24px] sm:p-[28px] md:p-[32px] text-center border border-[#e2e8f0] hover:shadow-md transition-shadow duration-300"
                >
                  {/* Icon Container */}
                  <div className="mb-[16px] sm:mb-[20px] flex justify-center">
                    <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-semibold text-[#111111] mb-[12px] sm:mb-[15px] tracking-[-0.01em]">
                    {benefit.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] text-[#666666] m-0">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;