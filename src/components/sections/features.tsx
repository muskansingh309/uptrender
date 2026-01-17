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
    mockupImage: 'https://img.freepik.com/premium-photo/positive-bar-graph-png-3d-rendered-sticker-transparent-background_53876-1048759.jpg?semt=ais_hybrid&w=740&q=80',
    screenContent: 'https://static.tradingview.com/static/bundles/lightweight-charts.5c935e728656427cb801.jpg',
    contentType: 'image',
    imagePosition: 'left',
  },
  {
    id: 2,
    tagline: 'Unified Multi-Market Algo Dashboard',
    title: "India's First Algo Dashboard for Indian, Forex & Crypto Trading",
    description: 'From building multi-market strategies to backtesting on unified data, to deploying live algo trades without switching platforms—trade the world from one AI platform.',
    features: ['Indian Stock Markets', 'Forex Trading Pairs', 'Crypto Assets'],
    mockupImage: 'https://img.freepik.com/free-photo/dynamic-data-visualization-3d_23-2151904311.jpg?semt=ais_hybrid&w=740&q=80',
    screenContent: 'https://www.smartdraw.com/chart/img/clustered-bar-chart.png',
    contentType: 'image',
    imagePosition: 'right',
  },
  {
    id: 3,
    tagline: 'AI Strategy Builder',
    title: 'No-Code AI Algo Strategy Builder for Multi-Market Trading',
    description: 'Build, test, and automate trading strategies with AI—no coding needed. Trade Indian stocks, Forex, and Crypto from one smart algo dashboard.',
    features: ['No-Code AI Builder', 'Paper & Live Trading', 'Multi-Market Automation'],
    mockupImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig',
    screenContent: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/blue-bar-chart-shows-increased-profit_Myo_tQwO_thumb.jpg',
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
      const imageEl = card.querySelector('.feature-image-2');

      gsap.set(content, { opacity: 0, y: 30 });
      gsap.set(imageEl, { opacity: 0, y: 30, scale: 0.95 });

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
      tl.to(imageEl, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
      })
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
      <div className="container mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#5e87ff] font-bold text-sm md:text-base uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Trade Smarter
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed for Indian, Forex, and Crypto markets
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-16 md:gap-28">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative"
            >
              <div
                className={`flex flex-col ${
                  feature.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 sm:gap-14 lg:gap-24 xl:gap-32 2xl:gap-34`}
              >
                {/* Image Side */}
                <div className="feature-mockup w-full lg:w-5/12 xl:w-2/5 flex items-center justify-center py-8">
                  <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[380px] sm:h-[380px] md:h-[430px]">
                    {/* Single Foreground Image */}
                    <div className="feature-image-2 relative w-full h-full rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl border-3 sm:border-4 border-white">
                      {feature.contentType === 'video' ? (
                        feature.mockupImage ? (
                          <Image
                            src={feature.mockupImage}
                            alt={`${feature.tagline} mockup`}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg mb-4">
                                <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent ml-1"></div>
                              </div>
                              <p className="text-white font-semibold text-lg">Watch Demo</p>
                            </div>
                          </div>
                        )
                      ) : (
                        <Image
                          src={feature.mockupImage}
                          alt={`${feature.tagline} mockup`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      )}
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#5e87ff]/10 -z-10"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#5e87ff]/5 -z-10"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="feature-content w-full lg:w-7/12 xl:w-3/5 text-center lg:text-left px-4 sm:px-0">
                  <span className="inline-block text-[#5e87ff] font-bold text-sm md:text-base uppercase tracking-wider mb-4">
                    {feature.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 sm:gap-4 justify-start lg:justify-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#5e87ff] flex items-center justify-center shrink-0">
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
