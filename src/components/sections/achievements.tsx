"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 28,
    suffix: "%",
    label: "Resent tincidunt lacus sedenim posuere posuere nulla acusan.",
  },
  {
    value: 1.5,
    suffix: "k",
    label: "Curabitur eu quam auctor nuca convallis metus nec feugia.",
  },
  {
    value: 30,
    suffix: "+",
    label: "Pellentesque pharetra libero eget vestibulum ullamcorper.",
  },
  {
    value: 2,
    suffix: "x",
    label: "Suspendisse a scelerisque vitae rutrum posuere sec lacus.",
  },
];

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the left content
      gsap.from(".achievements-left", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate each stat item with stagger
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
      });

      // Number counting animation
      numberRefs.current.forEach((el, index) => {
        if (!el) return;
        const stat = stats[index];
        const isDecimal = stat.value % 1 !== 0;
        
        const countObj = { val: 0 };
        
        gsap.to(countObj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            if (isDecimal) {
              el.textContent = countObj.val.toFixed(1) + stat.suffix;
            } else {
              el.textContent = Math.round(countObj.val) + stat.suffix;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#111111] text-white py-[100px] md:py-[120px]" id="achievements">
      <div className="container px-[15px] mx-auto max-w-[1140px]">
        <div className="flex flex-wrap -mx-[15px]">
          {/* Left Side: Call to Action */}
          <div className="w-full lg:w-4/12 px-[15px] mb-[60px] lg:mb-0 achievements-left">
            <h2 
              className="text-[48px] leading-[1.1] font-medium tracking-[-0.02em] mb-[30px] font-display"
              style={{ color: '#ffffff' }}
            >
              Check recent achievements.
            </h2>
            <p className="text-[#999999] text-[16px] leading-[1.6] mb-[50px] max-w-[320px]">
              We provide the effective ideas that grow businesses of our clients.
            </p>
            <div className="local-scroll">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-full bg-white text-[#111111] px-[36px] py-[14px] text-[13px] font-semibold uppercase tracking-[1px] transition-all duration-300 hover:bg-[#eeeeee] hover:-translate-y-[2px]"
              >
                Request Price
              </a>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="w-full lg:w-8/12 px-[15px]">
            <div className="flex flex-wrap -mx-[15px] stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`w-full sm:w-1/2 px-[15px] ${index < 2 ? 'mb-[60px]' : ''} stat-item`}
                >
                  <div>
                    <div 
                      ref={(el) => { numberRefs.current[index] = el; }}
                      className="text-[60px] md:text-[72px] leading-[1] font-medium tracking-[-2px] mb-[20px] font-display"
                      style={{ color: '#ffffff' }}
                    >
                      0{stat.suffix}
                    </div>
                    <div className="text-[#999999] text-[14px] leading-[1.5] max-w-[240px]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;