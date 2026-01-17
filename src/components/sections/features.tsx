'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSection {
  id: number;
  tagline: string;
  title: string;
  image: string;
  contentBlocks: {
    heading: string;
    description: string;
  }[];
}

const featuresData: FeatureSection[] = [
  {
    id: 1,
    tagline: 'COPY TRADING',
    title: 'Copy Trading',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_10.png',
    contentBlocks: [
      {
        heading: 'How It Works',
        description: 'Copy trading allows you to automatically replicate the trades of experienced master traders. Simply connect your account, select a trader to follow, and their trades will be mirrored in your portfolio in real-time.',
      },
      {
        heading: 'Why Choose Copy Trading',
        description: 'Perfect for beginners or busy professionals who want to participate in the markets without spending hours on analysis. Benefit from expert strategies while maintaining full control over your investment amount and risk settings.',
      },
    ],
  },
  {
    id: 2,
    tagline: 'MULTI-MARKET TRADING',
    title: 'Unified Dashboard',
    image: 'https://img.freepik.com/free-photo/dynamic-data-visualization-3d_23-2151904311.jpg?semt=ais_hybrid&w=740&q=80',
    contentBlocks: [
      {
        heading: 'One Platform, All Markets',
        description: 'Trade Indian stocks, Forex pairs, and Crypto assets from a single unified dashboard. No more switching between platforms or managing multiple accounts.',
      },
      {
        heading: 'Real-Time Sync',
        description: 'All your positions, orders, and portfolio data stay synchronized across markets. Get a complete view of your investments with real-time updates and comprehensive analytics.',
      },
    ],
  },
  {
    id: 3,
    tagline: 'AI STRATEGY BUILDER',
    title: 'No-Code Automation',
    image: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig',
    contentBlocks: [
      {
        heading: 'Build Without Code',
        description: 'Create sophisticated trading strategies using our intuitive drag-and-drop builder. No programming knowledge required—just define your rules and let AI optimize your approach.',
      },
      {
        heading: 'Backtest & Deploy',
        description: 'Test your strategies against historical data before going live. Once confident, deploy to paper trading or live markets with a single click.',
      },
    ],
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        // Animate caption and title
        gsap.from(card.querySelector('.feature-caption'), {
          y: 30,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        });

        gsap.from(card.querySelector('.feature-title'), {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        });

        // Animate image
        gsap.from(card.querySelector('.feature-image'), {
          x: -80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card.querySelector('.feature-image'),
            start: 'top 85%',
          },
        });

        // Animate text blocks
        gsap.from(card.querySelectorAll('.feature-text-block'), {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: card.querySelector('.feature-text-block'),
            start: 'top 90%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-[30px] sm:py-[50px] md:py-[70px] lg:py-[100px] bg-white overflow-hidden" 
      id="features"
    >
      <div className="container px-[15px] sm:px-[20px] mx-auto max-w-[1140px]">
        {/* Feature Sections */}
        <div className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[120px]">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative"
            >
              {/* Header Row - For index 1, header appears on right side above the image */}
              <div className={`flex flex-wrap mb-[40px] sm:mb-[60px] md:mb-[80px] ${
                index === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`w-full md:w-1/2 ${
                  index === 1 ? 'lg:text-right' : ''
                }`}>
                  <span className="feature-caption caption mb-[8px] sm:mb-[10px] md:mb-[15px] block text-[#1e293b] font-semibold text-xs uppercase tracking-[2px]">
                    {feature.tagline}
                  </span>
                  <h3 className="feature-title text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-[#1e293b] mb-0">
                    {feature.title}
                  </h3>
                </div>
                
                <div className={`w-full md:w-5/12 relative pt-[24px] sm:pt-[30px] md:pt-[20px] ${
                  index === 1 ? 'lg:mr-auto lg:text-left' : 'ml-auto text-left md:text-right'
                }`}>
                  {/* Decorative Dots SVG */}
                  <div 
                    className={`hidden md:block absolute top-[-80px] pointer-events-none ${
                      index === 1 ? 'left-0' : 'right-0'
                    }`}
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
                </div>
              </div>

              {/* Content Row */}
              <div className={`flex flex-wrap items-start ${
                index === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Main Image Container */}
                <div className="w-full lg:w-1/2 mb-[40px] sm:mb-[50px] lg:mb-0 feature-image">
                  <div className="relative">
                    <div className="relative overflow-hidden w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px]">
                      <Image
                        alt={feature.title}
                        src={feature.image}
                        fill
                        className="object-cover"
                        unoptimized
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

                {/* Text Blocks */}
                <div className={`w-full lg:w-1/2 xl:w-5/12 flex flex-col justify-center ${
                  index === 1 ? 'lg:pr-[60px] xl:pr-[100px] 2xl:pr-[140px]' : 'lg:pl-[60px] xl:pl-[100px] 2xl:pl-[140px]'
                }`}>
                  {feature.contentBlocks.map((block, idx) => (
                    <div key={idx} className="mb-[24px] sm:mb-[30px] feature-text-block">
                      <h4 className="text-[18px] sm:text-[20px] font-medium text-[#1e293b] mb-[12px] sm:mb-[18px]">
                        {block.heading}
                      </h4>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] text-[#475569]">
                        {block.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
