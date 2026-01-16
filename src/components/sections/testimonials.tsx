"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "This template is so beautiful and has such wonderful new options. It is updated often which gives me even more quality. The support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful!",
    author: "Adam Peterson",
    role: "Business Owner",
    company: "TechCorp Inc.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_24.png",
    rating: 5
  },
  {
    id: 2,
    quote: "Amazing experience working with Resonance. The team delivered beyond expectations and the results speak for themselves. Highly recommended for anyone looking for quality work.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Creative Studios",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_25.png",
    rating: 5
  },
  {
    id: 3,
    quote: "The algo trading platform exceeded all my expectations. Real-time trade mirroring works flawlessly, and the multi-market support for Indian, Forex, and Crypto is game-changing for my portfolio.",
    author: "Michael Chen",
    role: "Professional Trader",
    company: "Quantum Trading",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_24.png",
    rating: 5
  },
  {
    id: 4,
    quote: "Finally, a no-code AI strategy builder that actually works! I've automated my entire trading workflow and the results have been incredible. The UI is intuitive and the support team is fantastic.",
    author: "Emily Richards",
    role: "Investment Analyst",
    company: "Global Investments",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_25.png",
    rating: 5
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

      gsap.from(".testimonials-cards", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".testimonials-cards",
          start: "top 85%",
          once: true,
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

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-15 md:py-18 lg:py-20 overflow-hidden" id="testimonials">
      <div className="container px-4 sm:px-5 md:px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 testimonials-heading">
          <span className="inline-block px-4 py-2 bg-[#f1f5f9] text-[#64748b] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full mb-4 sm:mb-6">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] leading-tight mb-4 sm:mb-6">
            Trusted by{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] bg-clip-text text-transparent">
                10,000+
              </span>
              <svg 
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3"
                viewBox="0 0 200 12" 
                preserveAspectRatio="none"
                fill="none"
              >
                <path 
                  d="M0 6 Q 25 0 50 6 T 100 6 T 150 6 T 200 6" 
                  stroke="url(#gradient)" 
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}customers
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            See what our customers have to say about their experience with our platform
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-cards">
          {/* Mobile: Single Card View */}
          <div className="block lg:hidden">
            <div className="testimonials-card bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-[#e2e8f0] relative overflow-hidden">
              {/* Subtle accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e2e8f0]"></div>
              
              {/* Quote icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f0f9ff] flex items-center justify-center mb-4 sm:mb-6">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#94a3b8]" fill="#94a3b8" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#fbbf24] fill-[#fbbf24]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-[#1e293b] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#e2e8f0] ring-offset-2">
                  <Image 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#1e293b] text-sm sm:text-base">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-[#64748b] text-xs sm:text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-[#64748b] text-xs font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button 
                onClick={goToPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#bcbdbd] w-6 sm:w-8' 
                          : 'bg-[#e2e8f0] hover:bg-[#cbd5e1]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={goToNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all duration-300 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Desktop: Three Cards View */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${currentIndex}`}
                className={`bg-white rounded-3xl p-8 shadow-lg border border-[#e2e8f0] relative overflow-hidden transition-all duration-500 ${
                  index === 0 ? 'scale-100 opacity-100' : 'scale-95 opacity-90 hover:scale-100 hover:opacity-100'
                }`}
              >
                {/* Subtle accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                  index === 0 
                    ? 'bg-[#e2e8f0]' 
                    : 'bg-[#e2e8f0]'
                }`}></div>
                
                {/* Quote icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                  index === 0 
                    ? 'bg-[#f0f9ff]' 
                    : 'bg-[#f8fafc]'
                }`}>
                  <Quote className={`w-5 h-5 text-[#94a3b8]`} fill="#94a3b8" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#fbbf24] fill-[#fbbf24]" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-[#1e293b] text-base leading-relaxed mb-8 font-medium line-clamp-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-14 h-14 rounded-full overflow-hidden ring-2 ring-offset-2 ${
                    index === 0 ? 'ring-[#e2e8f0]' : 'ring-[#e2e8f0]'
                  }`}>
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e293b]">
                      {testimonial.author}
                    </div>
                    <div className="text-[#64748b] text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-[#64748b] text-xs font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={goToPrev}
              className="w-14 h-14 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all duration-300 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#bcbdbd] w-10' 
                      : 'bg-[#e2e8f0] w-3 hover:bg-[#cbd5e1]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={goToNext}
              className="w-14 h-14 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all duration-300 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}