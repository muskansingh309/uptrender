"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight, Facebook, Twitter, Ghost } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * TeamSection Component
 * 
 * A pixel-perfect clone of the team carousel section featuring:
 * - A large blockquote on the left.
 * - A sliding gallery of team profiles on the right.
 * - Social links and hover effects for team members.
 */

const teamMembers = [
  {
    id: 1,
    name: "Harish Sharma",
    role: "Head, co-founder",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_14.png",
  },
  {
    id: 2,
    name: "Emma Johnson",
    role: "UI/UX Designer, co-founder",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_15.png",
  },
  {
    id: 3,
    name: "Marta Laning",
    role: "Web developer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_16.png",
  },
  {
    id: 4,
    name: "Marta Laning",
    role: "Art director, designer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_17.png",
  }
];

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-blockquote", {
        x: -60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".team-carousel", {
        x: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".team-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".team-carousel",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (teamMembers.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (teamMembers.length - 1)) % (teamMembers.length - 1));
  };

  return (
    <section ref={sectionRef} className="page-section bg-gray-light-1 py-[100px]" id="team">
      <div className="container px-[15px] mx-auto max-w-[1140px]">
        <div className="flex flex-wrap -mx-[15px]">
          {/* Blockquote Left */}
          <div className="w-full md:w-1/2 px-[15px] mb-[40px] md:mb-0 flex items-center team-blockquote">
            <blockquote className="m-0 relative pl-0">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center mb-[10px] text-[#111111] font-display  shadow-sm border border-[#f0f0f0]">
                <span className="text-[44px]  leading-none text-[#111111] pt-[20px]">”</span>
              </div>

              <p className="text-[32px] md:text-[38px] leading-[1.3] text-[#111111] font-display font-medium tracking-tight mb-[30px] italic">
                We are strong team who brings innovative ideas into production.
              </p>
              <footer className="mt-[20px]">
                <div className="w-[40px] h-[1px] bg-[#111111] mb-[15px]"></div>
                <div className="text-[15px] font-semibold text-[#111111] uppercase tracking-[1px]">
                  Harish Sharma
                </div>
                <div className="text-[12px] text-[#666666] mt-[5px]">
                  Head, Co-founder
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Carousel Right */}
          <div className="w-full md:w-1/2 px-[15px] relative overflow-hidden team-carousel">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 56}%)` }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className="min-w-[55%] px-[12px]">
                  <div className="team-item group overflow-hidden">
                    <div className="relative overflow-hidden mb-[25px] h-[350px] sm:h-[300px] lg:h-[350px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Social Links Overlay */}
                      <div className="absolute inset-x-0 bottom-0 py-[15px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 flex justify-center gap-x-[15px]">
                        <a href="#" className="text-[#111111] hover:text-[#666666] transition-colors">
                          <Facebook size={14} />
                        </a>
                        <a href="#" className="text-[#111111] hover:text-[#666666] transition-colors">
                          <Twitter size={14} />
                        </a>
                        <a href="#" className="text-[#111111] hover:text-[#666666] transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                             <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.44 7.63 11.25.12.02.24.03.37.03.45 0 .81-.36.81-.81v-1.12c-3.33.72-4.03-1.61-4.03-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.02-.4 1.03 0 2.06.13 3.02.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.3c0 .45.36.81.81.81.13 0 .25-.01.37-.03 4.47-1.81 7.63-6.17 7.63-11.25 0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-descr text-center mt-[12px]">
                      <div className="text-[18px] font-medium text-[#111111] mb-[6px]">
                        {member.name}
                      </div>
                      <div className="text-[13px] text-[#666666] font-normal italic">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-x-[15px] mt-[40px] md:absolute md:top-1/2 md:-translate-y-1/2 md:inset-x-0 md:justify-between px-[30px] pointer-events-none">
              <button 
                onClick={handlePrev}
                className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white text-[#111111] border border-[#e5e5e5] hover:bg-[#111111] hover:text-white transition-all pointer-events-auto shadow-sm"
                aria-label="Previous Slide"
              >
                <MoveLeft size={18} />
              </button>
              <button 
                onClick={handleNext}
                className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white text-[#111111] border border-[#e5e5e5] hover:bg-[#111111] hover:text-white transition-all pointer-events-auto shadow-sm"
                aria-label="Next Slide"
              >
                <MoveRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .team-carousel-item {
          transition: opacity 0.4s ease;
        }
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #111111;
          opacity: 0.2;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;