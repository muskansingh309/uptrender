"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1030] transition-all duration-300 h-[85px] flex items-center ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1860px] px-4 md:px-[30px] flex items-center justify-between relative h-full">
        {/* Logo Section */}
        <div className="nav-logo-wrap z-10 flex items-center min-w-[105px]">
          <a href="/" className="logo flex items-center pr-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/svgs/logo-dark-1.svg"
              alt="Resonance"
              width={105}
              height={34}
              className="block"
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <ul className="flex items-center gap-[36px] list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-[14px] font-medium text-[#111111] uppercase tracking-[0.05em] py-1 transition-colors hover:text-[#111111]/70"
                >
                  {link.name}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#111111] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Language and CTA */}
        <div className="flex items-center gap-[30px] z-10">
          {/* Language Switcher */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-[14px] font-medium text-[#111111] uppercase tracking-[0.05em] h-[85px]"
            >
              En <ChevronDown className={`size-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full right-0 bg-white shadow-lg border border-border min-w-[140px] py-2 animate-in fade-in slide-in-from-top-2">
                <ul className="list-none p-0 m-0">
                  <li>
                    <a href="#" className="block px-4 py-2 text-[13px] text-[#111111] hover:bg-gray-50 transition-colors">
                      English
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-[13px] text-[#111111] hover:bg-gray-50 transition-colors">
                      French
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-[13px] text-[#111111] hover:bg-gray-50 transition-colors">
                      German
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* CTA Link */}
          <div className="hidden sm:block pt-[2px]">
            <a
              href="#contact"
              className="text-[14px] font-medium text-[#111111] uppercase tracking-[0.05em] relative group"
            >
              <span className="relative">
                Let's work together
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#111111]"></span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 group">
            <span className="w-7 h-[2px] bg-[#111111]"></span>
            <span className="w-5 h-[2px] bg-[#111111] transition-all group-hover:w-7"></span>
            <span className="w-7 h-[2px] bg-[#111111]"></span>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;