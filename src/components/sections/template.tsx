"use client";

import React from "react";
import Image from "next/image";

/**
 * Services/Features Section matching the design:
 * - "Awesome Template With Clean Design" heading
 * - 2x2 grid of features with icons
 * - Image composition on the right
 */

// Custom SVG Icons matching the design
const BoxSearchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#111111]">
    <path d="M8 14L20 8L32 14V26L20 32L8 26V14Z" />
    <path d="M20 20V32" />
    <path d="M8 14L20 20L32 14" />
    <circle cx="36" cy="36" r="6" />
    <path d="M40 40L44 44" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#111111]">
    <path d="M24 6L38 12V22C38 32 32 40 24 44C16 40 10 32 10 22V12L24 6Z" />
    <path d="M17 24L22 29L31 20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TreesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#111111]">
    <path d="M16 40V28" />
    <path d="M16 28C12 28 8 24 8 20C8 16 12 12 16 12C16 8 20 4 24 4" />
    <path d="M16 28C20 28 24 24 24 20" />
    <path d="M32 40V24" />
    <path d="M32 24C28 24 24 20 24 16C24 12 28 8 32 8" />
    <path d="M32 24C36 24 40 20 40 16" />
  </svg>
);

const CodeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#111111]">
    <path d="M16 14L6 24L16 34" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 14L42 24L32 34" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 8L20 40" strokeLinecap="round" />
  </svg>
);

const features = [
  {
    icon: <BoxSearchIcon />,
    title: "Unique Design",
    description: "Fusce aliquet quam eget neque ultrices elementum felis id arcu blandit sagittis.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Quality Code",
    description: "Lorem ipsum dolor sit amet rembe adipiscing elite lnwege maximus ligula imsum.",
  },
  {
    icon: <TreesIcon />,
    title: "Clean and Minimal",
    description: "Maecenas volutpat, diam enime volutpa cramas luctus interdum sodales.",
  },
  {
    icon: <CodeIcon />,
    title: "Easy Customization",
    description: "Praesent sed nisi eleifend lorem ember fermete acome ante lorem ipsum.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-[100px] md:py-[120px]" id="services">
      <div className="container px-[15px] mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-center">
          {/* Left Column: Heading and Features Grid */}
          <div className="w-full lg:w-1/2 mb-[60px] lg:mb-0 lg:pr-[60px]">
            <h2 className="text-[36px] md:text-[48px] leading-[1.1] font-medium text-[#111111] mb-[50px] tracking-[-0.02em]">
              Awesome Template<br />
              With Clean Design
            </h2>

            {/* 2x2 Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[40px]">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  {/* Dotted border decoration */}
                  <div className="absolute -left-[20px] top-0 bottom-0 w-[1px] border-l border-dotted border-[#e5e5e5] hidden md:block" />
                  <div className="absolute left-0 right-0 -top-[20px] h-[1px] border-t border-dotted border-[#e5e5e5] hidden md:block" />
                  
                  {/* Icon */}
                  <div className="mb-[20px]">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[17px] font-semibold text-[#111111] mb-[12px]">
                    {feature.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-[15px] leading-[1.7] text-[#666666]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Composition */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] md:h-[600px]">
              {/* Main image - Pantone card with rose */}
              <div className="absolute top-[10%] left-[10%] w-[60%] z-20 shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_6.png"
                  alt="Pantone pink rose"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Background image - Blue curves */}
              <div className="absolute top-0 right-0 w-[55%] z-10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_3.png"
                  alt="Blue architectural curves"
                  width={350}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
