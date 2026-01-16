"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Clients component - Logo bar matching the design:
 * "Trusted by Leading Companies" heading with logos (envato, Unsplash, GitHub, awwwards, Pexels)
 */
const Clients: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".clients-heading", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".client-logo", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".clients-logos",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const clientLogos = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_18.png",
      alt: "Envato",
      width: 100,
      height: 24,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_19.png",
      alt: "Unsplash",
      width: 100,
      height: 24,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_20.png",
      alt: "GitHub",
      width: 85,
      height: 24,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_21.png",
      alt: "Awwwards",
      width: 110,
      height: 24,
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_22.png",
      alt: "Pexels",
      width: 90,
      height: 24,
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#f0f9ff] to-white py-[60px] md:py-[80px]" id="clients">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-[40px] clients-heading">
          <h2 className="text-[14px] font-semibold text-[#5e87ff] tracking-[0.05em]">
            Trusted by Leading Companies
          </h2>
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-[50px] gap-y-[30px] clients-logos">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 client-logo"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-[24px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;