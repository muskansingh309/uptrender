'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCard {
  id: number;
  tagline: string;
  title: string;
  description: string;
  features: string[];
  mockupImage: string;
  screenContent: string; // image or video shown inside phone
  contentType: 'image' | 'video';
  imagePosition: 'left' | 'right';
}

const featuresData: FeatureCard[] = [
  {
    id: 1,
    tagline: 'Smart Copy Trading',
    title: 'Build Your Copy Trading Network for Indian Stocks, Forex & Crypto',
    description: 'From selecting verified master traders to monitoring real-time performance, to scaling passive income—everything for automated copy trading is built right in.',
    features: ['Master Account Setup', 'Real-Time Trade Mirroring', 'Multi-Account Management'],
    mockupImage: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ftest-clones%2F15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app%2Fassets%2Fimages%2Fimages_10.png&w=3840&q=75',
    screenContent: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ftest-clones%2F15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app%2Fassets%2Fimages%2Fimages_14.png&w=3840&q=75',
    contentType: 'image',
    imagePosition: 'left',
  },
  {
    id: 2,
    tagline: 'Unified Multi-Market Algo Dashboard',
    title: "India's First Algo Dashboard for Indian, Forex & Crypto Trading",
    description: 'From building multi-market strategies to backtesting on unified data, to deploying live algo trades without switching platforms—trade the world from one AI platform.',
    features: ['Indian Stock Markets', 'Forex Trading Pairs', 'Crypto Assets'],
    mockupImage: '/iphone.png',
    screenContent: '/chart.mov',
    contentType: 'video',
    imagePosition: 'right',
  },
  {
    id: 3,
    tagline: 'AI Strategy Builder',
    title: 'No-Code AI Algo Strategy Builder for Multi-Market Trading',
    description: 'Build, test, and automate trading strategies with AI—no coding needed. Trade Indian stocks, Forex, and Crypto from one smart algo dashboard.',
    features: ['No-Code AI Builder', 'Paper & Live Trading', 'Multi-Market Automation'],
    mockupImage: '/iphone.png',
    screenContent: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ftest-clones%2F15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app%2Fassets%2Fimages%2Fimages_10.png&w=3840&q=75',
    contentType: 'image',
    imagePosition: 'left',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const content = card.querySelector('.feature-content');
      const mockup = card.querySelector('.feature-mockup');
      const image1 = card.querySelector('.feature-image-1');
      const image2 = card.querySelector('.feature-image-2');

      gsap.set(content, { opacity: 0, y: 30 });
      gsap.set(image1, { opacity: 0, x: -50, scale: 0.9 });
      gsap.set(image2, { opacity: 0, x: 50, scale: 0.9 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            if (videoRefs.current[index]) {
              videoRefs.current[index]?.play();
            }
          },
        },
      });

      tl.to(image1, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      })
      .to(
        image2,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#0ea5e9] font-bold text-sm md:text-base uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to Trade Smarter
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed for Indian, Forex, and Crypto markets
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-16 md:gap-24">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative"
            >
              <div
                className={`flex flex-col ${
                  feature.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-12 xl:gap-16`}
              >
                {/* Image Side - 2 Overlapping Images */}
                <div className="feature-mockup w-full lg:w-1/2 flex items-center justify-center py-8">
                  <div className="relative w-full max-w-[500px] h-[420px] md:h-[500px]">
                    {/* First Image - Background Layer */}
                    <div className="feature-image-1 absolute top-0 left-0 w-[70%] h-[75%] rounded-[24px] overflow-hidden shadow-xl border-4 border-white z-10">
                      {feature.contentType === 'video' ? (
                        <video
                          ref={(el) => { videoRefs.current[index] = el; }}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        >
                          <source src={feature.screenContent} type="video/mp4" />
                          <source src={feature.screenContent} type="video/quicktime" />
                        </video>
                      ) : (
                        <Image
                          src={feature.screenContent}
                          alt={`${feature.tagline} preview`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      )}
                    </div>
                    
                    {/* Second Image - Foreground Layer */}
                    <div className="feature-image-2 absolute bottom-0 right-0 w-[65%] h-[70%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white z-20">
                      {feature.contentType === 'video' ? (
                        <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg mb-4">
                              <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent ml-1"></div>
                            </div>
                            <p className="text-white font-semibold text-lg">Watch Demo</p>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={feature.screenContent}
                          alt={`${feature.tagline} detail`}
                          fill
                          className="object-cover scale-110 brightness-105"
                          unoptimized
                        />
                      )}
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-[10%] right-[15%] w-16 h-16 rounded-full bg-[#0ea5e9]/10 -z-10"></div>
                    <div className="absolute bottom-[15%] left-[10%] w-24 h-24 rounded-full bg-[#0ea5e9]/5 -z-10"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="feature-content w-full lg:w-1/2 text-center lg:text-left">
                  <span className="inline-block text-[#0ea5e9] font-bold text-sm md:text-base uppercase tracking-wider mb-4">
                    {feature.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 sm:gap-4 justify-start lg:justify-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0ea5e9] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
