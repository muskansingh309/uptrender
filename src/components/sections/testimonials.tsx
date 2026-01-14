"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials component matching the design exactly:
 * - Grey background section
 * - "Resonance is trusted by 10,000+customers." heading with squiggle decoration
 * - Quote icon in white circle
 * - Testimonial text, author info with avatar
 * - Navigation arrows on the right
 */

const testimonials = [
  {
    id: 1,
    quote: "This template is so beautiful and has such wonderful new options. It is updated often which gives me even more quality. The support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful!",
    author: "Adam Peterson",
    role: "Business Owner",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_24.png"
  },
  {
    id: 2,
    quote: "Amazing experience working with Resonance. The team delivered beyond expectations and the results speak for themselves. Highly recommended for anyone looking for quality work.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_25.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".testimonials-quote", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".testimonials-quote",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="bg-white py-[20px]" id="testimonials">
      <div className="container px-[15px] mx-auto max-w-[1200px]">
        {/* Grey background container */}
        <div className="bg-[#f5f5f5] py-[80px] md:py-[100px] px-[30px] md:px-[80px]">
          {/* Heading with squiggle */}
          <div className="text-center mb-[60px] testimonials-heading">
            <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-0.02em] leading-[1.2] text-[#111111]">
              Resonance is trusted by
              <br />
              <span className="relative inline-block">
                10,000+customers.
                {/* Squiggle decoration */}
                <svg 
                  className="absolute left-[10%] -bottom-[10px] w-[45%] h-[12px]"
                  viewBox="0 0 120 20" 
                  preserveAspectRatio="none"
                  fill="none" 
                  stroke="#111111" 
                  strokeWidth="2"
                >
                  <path d="M0 10 Q 15 0 30 10 T 60 10 T 90 10 T 120 10" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Quote Section */}
          <div className="max-w-[900px] mx-auto relative testimonials-quote">
            <div className="flex flex-col md:flex-row items-start gap-[30px]">
              {/* Quote Icon */}
              <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-white shadow-sm flex items-center justify-center">
                <span className="text-[28px] font-serif text-[#111111] leading-none">"</span>
              </div>

              {/* Quote Content */}
              <div className="flex-1">
                <blockquote className="text-[18px] md:text-[20px] leading-[1.8] text-[#111111] mb-[40px] font-normal">
                  {current.quote}
                </blockquote>

                {/* Divider */}
                <div className="w-[50px] h-[1px] bg-[#cccccc] mb-[25px]"></div>

                {/* Author Info and Navigation Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[20px]">
                  {/* Author */}
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                      <Image 
                        src={current.avatar} 
                        alt={current.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-[#111111]">
                        {current.author}
                      </div>
                      <div className="text-[13px] text-[#666666]">
                        {current.role}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex gap-[10px]">
                    <button 
                      onClick={goToPrev}
                      className="w-[50px] h-[50px] rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={goToNext}
                      className="w-[50px] h-[50px] rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}