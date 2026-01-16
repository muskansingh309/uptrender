"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutSection Component
 * 
 * A minimalist "Our Story" section featuring:
 * - Responsive grid layout
 * - High-quality editorial imagery
 * - Mission and Vision text blocks
 * - Decorative SVG elements (waves and dots)
 * - Typography refined for a creative studio aesthetic
 * - GSAP scroll animations
 */
const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.from(".about-caption", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-link", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Image animation
      gsap.from(".about-image", {
        x: -80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 85%",
        },
      });

      // Text blocks animation
      gsap.from(".about-text-block", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-text-block",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="page-section scrollSpysection -mt-5 py-[30px] sm:py-[50px] md:py-[70px] lg:py-[40px] xl:py-[100px] bg-white overflow-hidden" 
      id="about"
    >
      <div className="container px-[15px] sm:px-[20px] mx-auto max-w-[1140px] relative">
        
        {/* Header Row */}
        <div className="flex flex-wrap mb-[40px] sm:mb-[60px] md:mb-[80px]">
          <div className="w-full md:w-1/2">
            <span className="caption mb-[8px] sm:mb-[10px] md:mb-[15px] about-caption text-[#0ea5e9]">Our VISION</span>
            <h3 className="section-title text-[22px] sm:text-[26px] md:text-[30px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1e293b] mb-0 about-title">
              A world where AI automation scales every trader's portfolio across global multi-market opportunities.
            </h3>
          </div>
          
          <div className="w-full md:w-5/12 ml-auto relative text-left md:text-right pt-[24px] sm:pt-[30px] md:pt-[20px]">
            {/* Decorative Dots SVG */}
            <div 
              className="hidden md:block absolute right-0 top-[-80px] pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/svgs/decoration-2-3.svg" 
                alt="" 
                width={103} 
                height={200} 
                className="opacity-100"
              />
            </div>
            
            <a 
              href="#team" 
              className="inline-flex items-center gap-2 group relative py-1 about-link"
            >
              {/* <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[1px] text-[#0ea5e9] border-b border-[#0ea5e9] transition-all duration-300 group-hover:border-transparent">
                Learn more about us
              </span> */}
              {/* <ArrowRight className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#0ea5e9]" strokeWidth={2} /> */}
            </a>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-wrap items-start">
          
          {/* Main Image Container */}
          <div className="w-full lg:w-1/2 mb-[40px] sm:mb-[50px] lg:mb-0 about-image">
            <div className="relative">
              {/*
                Use an explicit height on the image wrapper and `fill` on Next/Image.
                This ensures changing the wrapper height will scale the visible image.
              */}
              <div className="relative overflow-hidden w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px]">
                <Image
                  alt="Creative person at desk"
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_10.png"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative Wave SVG */}
              <div 
                className="hidden sm:block absolute left-[-40px] bottom-[-30px] z-10"
              >
                <Image 
                  alt="" 
                  width={159} 
                  height={74} 
                  className="svg-shape" 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/svgs/decoration-1-4.svg" 
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision Text Blocks */}
          <div className="w-full lg:w-1/2 xl:w-5/12 lg:pl-[60px] xl:pl-[100px] 2xl:pl-[140px] flex flex-col justify-center">
           <div className="mb-[24px] sm:mb-[30px] about-text-block">
              <h4 className="text-[18px] sm:text-[20px] font-medium text-[#1e293b] mb-[12px] sm:mb-[18px]">Our Story</h4>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#64748b]">
               Started from trader frustration with multiple platforms. We built India's first AI-powered algo trading dashboard that unites Indian stocks, Forex, and Crypto markets—all in one place, no coding required.
              </p>
            </div>
            <div className="mb-[24px] sm:mb-[30px] about-text-block">
              <h4 className="text-[18px] sm:text-[20px] font-medium text-[#1e293b] mb-[12px] sm:mb-[18px]">Our Mission</h4>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-[#64748b]">
                Democratize algo trading in India: Empower anyone to build, test, and deploy no-code strategies across Indian, Forex, and Crypto markets effortlessly.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;