"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Achievements/Values Section - Dark background carousel
 * Shows: Simplicity, Accountability, High Loyalty values with icons
 * Includes navigation arrows and dot indicators
 */

// Custom SVG Icons matching the design
const PartyIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
    <path d="M15 45L25 20L40 35L15 45Z" />
    <path d="M25 20L22 17" strokeLinecap="round" />
    <path d="M40 35L43 38" strokeLinecap="round" />
    <circle cx="35" cy="12" r="2" />
    <circle cx="42" cy="18" r="1.5" />
    <circle cx="48" cy="12" r="1" />
    <path d="M32 8L34 10" strokeLinecap="round" />
    <path d="M38 6L40 8" strokeLinecap="round" />
    <path d="M44 8L46 10" strokeLinecap="round" />
  </svg>
);

const MailOpenIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
    <path d="M10 25L30 12L50 25V48H10V25Z" />
    <path d="M10 25L30 38L50 25" />
    <path d="M18 22L30 30L42 22" />
  </svg>
);

const TrophyStarIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
    <path d="M20 15H40V30C40 38 35 42 30 42C25 42 20 38 20 30V15Z" />
    <path d="M20 20H15C13 20 12 22 12 24C12 28 15 30 18 30H20" />
    <path d="M40 20H45C47 20 48 22 48 24C48 28 45 30 42 30H40" />
    <path d="M30 42V48" />
    <path d="M22 48H38" />
    <circle cx="44" cy="10" r="4" />
    <path d="M44 6V8" strokeLinecap="round" />
    <path d="M44 12V14" strokeLinecap="round" />
    <path d="M40 10H42" strokeLinecap="round" />
    <path d="M46 10H48" strokeLinecap="round" />
  </svg>
);

const values = [
  {
    icon: <PartyIcon />,
    title: 'Simplicity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue rhoncus enim, in pharetra lacus.',
  },
  {
    icon: <MailOpenIcon />,
    title: 'Accountability',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
  {
    icon: <TrophyStarIcon />,
    title: 'High Loyalty',
    description: 'Mauris a libero et diam sodales semper. Aenean elit leo, hendrerit nec dolor id, rutrum finibus velit.',
  },
];

const TrustSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  return (
    <section 
      className="relative py-[100px] md:py-[140px] overflow-hidden"
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23333333\' fill-opacity=\'0.1\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
      id="achievements"
    >
      <div className="container px-[15px] mx-auto max-w-[1200px]">
        {/* Navigation Arrows - Left */}
        <button 
          onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
          className="absolute left-[20px] md:left-[40px] top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-10 h-10" strokeWidth={1} />
        </button>

        {/* Navigation Arrows - Right */}
        <button 
          onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
          className="absolute right-[20px] md:right-[40px] top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-10 h-10" strokeWidth={1} />
        </button>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[60px] text-center px-[40px] md:px-[80px]">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-[25px]">
                {value.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] font-medium text-white mb-[15px] tracking-[-0.01em]">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-[14px] leading-[1.7] text-[#999999] max-w-[280px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-[10px] mt-[60px]">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
