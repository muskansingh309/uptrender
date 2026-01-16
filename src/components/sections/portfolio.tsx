"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  imageUrl: string;
  linkText: string;
}

const portfolioData: Project[] = [
  {
    id: "medium-scene",
    title: "Medium Scene",
    category: "Branding",
    type: "Lightbox",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_5.png",
    linkText: "Lightbox"
  },
  {
    id: "rise-of-design",
    title: "Rise of Design",
    category: "Design",
    type: "External Page",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_6.png",
    linkText: "External Page"
  },
  {
    id: "visual-stranger",
    title: "Visual Stranger",
    category: "Development",
    type: "External Page",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_7.png",
    linkText: "External Page"
  },
  {
    id: "amplitude",
    title: "Amplitude",
    category: "Branding",
    type: "External Page",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_8.png",
    linkText: "External Page"
  },
  {
    id: "super-awards",
    title: "Super Awards",
    category: "Design",
    type: "External Page",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_9.png",
    linkText: "External Page"
  },
  {
    id: "design-system",
    title: "Design System",
    category: "Development",
    type: "Lightbox",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_10.png",
    linkText: "Lightbox"
  }
];

const categories = ["All works", "Branding", "Design", "Development"];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All works");
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = activeFilter === "All works" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".portfolio-filters", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".portfolio-cta", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".portfolio-cta",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(".portfolio-item");
    
    gsap.fromTo(items, 
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [filteredProjects]);

  return (
    <section ref={sectionRef} className="bg-white py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]" id="portfolio">
      <div className="container px-[15px] sm:px-[18px] mx-auto max-w-[1200px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[40px] sm:mb-[50px] md:mb-[60px] gap-y-4">
          <div className="max-w-[600px] portfolio-header">
            <span 
              className="caption tracking-[0.15em] sm:tracking-[0.2em] text-[11px] sm:text-[12px] font-semibold text-[#5e87ff] uppercase mb-3 sm:mb-4 block"
            >
              Our Portfolio
            </span>
            <h3 
              className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.15] text-[#1e293b] tracking-[-0.02em]"
            >
              Creativity meets <br className="hidden md:block" /> technology here.
            </h3>
          </div>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.5px] sm:tracking-[1px] transition-colors duration-300 relative pb-1 ${
                  activeFilter === cat 
                    ? "text-[#5e87ff] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#5e87ff] after:to-[#5e87ff]" 
                    : "text-[#64748b] hover:text-[#5e87ff]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] sm:gap-x-[30px] lg:gap-x-[45px] gap-y-[30px] sm:gap-y-[40px] lg:gap-y-[50px] portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group transition-all duration-700 ease-out transform portfolio-item ${
                index % 3 === 1 ? "lg:translate-y-[40px]" : ""
              }`}
            >
              <div className="relative overflow-hidden mb-[18px] sm:mb-[25px] aspect-[3/4]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <a 
                  href="#" 
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title}`}
                />
              </div>
              <div className="text-left">
                <h4 className="text-[16px] sm:text-[18px] font-medium text-[#1e293b] mb-[4px] sm:mb-[6px]">
                  {project.title}
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#64748b] uppercase tracking-[0.05em]">
                  {project.linkText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box with Decorative Element */}
<div className="portfolio-cta relative mt-[40px] sm:mt-[60px] md:mt-32 p-[2px] bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] hover:from-[#7dd3fc] hover:via-[#38bdf8] hover:to-[#5e87ff] transition-all duration-300 rounded-xl sm:rounded-2xl">
  
  {/* INNER CONTENT BACKGROUND */}
  <div className="bg-white py-[30px] sm:py-[40px] md:py-[50px] px-[15px] sm:px-[20px] rounded-xl sm:rounded-2xl relative">
    
    <div className="text-center max-w-[800px] mx-auto">
      <p className="text-[15px] sm:text-[17px] md:text-[20px] leading-[1.6] sm:leading-[1.7] text-[#64748b] mb-[25px] sm:mb-[35px] px-2 sm:px-4">
        The power of design help us to solve complex problems and cultivate business solutions.
      </p>

      {/* Button with gradient */}
      <div className="inline-block">
        <a 
          href="#contact" 
          className="inline-block bg-gradient-to-r from-[#5e87ff] to-[#5e87ff] text-white px-[28px] sm:px-[36px] md:px-[43px] py-[12px] sm:py-[14px] md:py-[16px] text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.5px] sm:tracking-[1px] rounded-full hover:from-[#5e87ff] hover:to-[#5e87ff] transition-all duration-300 transform hover:-translate-y-[2px] shadow-lg"
          style={{ boxShadow: "0 8px 25px rgba(14, 165, 233, 0.3)" }}
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* Decorative Element */}
    <div className="absolute bottom-0 right-2 sm:right-4 md:right-[5%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[103px] md:h-[103px] opacity-20">
      <img
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/svgs/decoration-3-5.svg"
        alt=""
        width={103}
        height={103}
        className="animate-spin-slow w-full h-full"
        loading="lazy"
        decoding="async"
      />
    </div>

  </div>
</div>

      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}