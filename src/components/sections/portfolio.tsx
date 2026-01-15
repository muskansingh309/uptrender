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
    <section ref={sectionRef} className="bg-white py-[100px] md:py-[120px]" id="portfolio">
      <div className="container px-[18px] mx-auto max-w-[1200px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] gap-y-4">
          <div className="max-w-[600px] portfolio-header">
            <span 
              className="caption tracking-[0.2em] text-[12px] font-semibold text-[#666666] uppercase mb-4 block"
            >
              Our Portfolio
            </span>
            <h3 
              className="text-[32px] md:text-[48px] font-medium leading-[1.1] text-[#111111] tracking-[-0.02em]"
            >
              Creativity meets <br className="hidden md:block" /> technology here.
            </h3>
          </div>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[12px] font-semibold uppercase tracking-[1px] transition-colors duration-300 relative pb-1 ${
                  activeFilter === cat 
                    ? "text-[#111111] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#111111]" 
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[45px] gap-y-[50px] portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group transition-all duration-700 ease-out transform portfolio-item ${
                index % 3 === 1 ? "md:translate-y-[40px]" : ""
              }`}
            >
              <div className="relative overflow-hidden mb-[25px] aspect-[3/4]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <a 
                  href="#" 
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title}`}
                />
              </div>
              <div className="text-left">
                <h4 className="text-[18px] font-medium text-[#111111] mb-[6px]">
                  {project.title}
                </h4>
                <p className="text-[13px] text-[#666666] uppercase tracking-[0.05em]">
                  {project.linkText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box with Decorative Element */}
<div className="portfolio-cta relative mt-0 md:mt-32 p-[0.4px] bg-gradient-to-r from-[#d9d9db] via-[#cfcfcf] to-[#bfbfc1] hover:from-[#cfcfcf] hover:via-[#bdbdbf] hover:to-[#a9a9ab] transition-all duration-300 rounded-2xl">
  
  {/* INNER CONTENT BACKGROUND */}
  <div className="bg-white py-[20px] md:py-[50px] rounded-2xl relative">
    
    <div className="text-center max-w-[800px] mx-auto">
      <p className="text-[18px] md:text-[20px] leading-[1.7] text-[#666666] mb-[35px] px-4">
        The power of design help us to solve complex problems and cultivate business solutions.
      </p>

      {/* Button with gradient border (already correct) */}
      <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-[#d9d9db] via-[#cfcfcf] to-[#bfbfc1] hover:from-[#cfcfcf] hover:to-[#bdbdbf] transition-all duration-300">
        <a 
          href="#contact" 
          className="inline-block bg-[#111111] text-white px-[43px] py-[16px] text-[13px] font-semibold uppercase tracking-[1px] rounded-full hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-[2px] shadow-sm"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 6px 18px rgba(0,0,0,0.10)" }}
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* Decorative Element */}
    <div className="absolute bottom-0 right-0 md:right-[5%] w-[103px] h-[103px] opacity-20">
      <img
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/svgs/decoration-3-5.svg"
        alt=""
        width={103}
        height={103}
        className="animate-spin-slow"
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