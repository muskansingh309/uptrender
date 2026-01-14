"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Background logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section logic
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1030] transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm h-[75px]"
          : "bg-transparent h-[85px]"
      } flex items-center`}
    >
      <div className="w-full max-w-[1860px] mx-auto px-[30px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/svgs/logo-dark-1.svg"
              alt="Resonance Logo"
              width={105}
              height={34}
              priority
              className="h-[34px] w-auto"
            />
          </a>
        </div>

        {/* Mobile Menu Icon (Hidden on Desktop) */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#111111]" />
            ) : (
              <Menu className="w-6 h-6 text-[#111111]" />
            )}
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-[30px]">
          <ul className="flex items-center list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name} className="px-[12px]">
                <a
                  href={link.href}
                  className={`text-[14px] font-medium tracking-wide transition-opacity duration-200 uppercase ${
                    activeSection === link.href.substring(1)
                      ? "text-[#111111] opacity-100"
                      : "text-[#111111] opacity-70 hover:opacity-100"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Items */}
          <div className="flex items-center space-x-[25px] ml-[20px]">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center text-[14px] font-medium text-[#111111] uppercase tracking-wide opacity-100">
                En
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-32 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#e5e5e5]">
                <ul className="py-2 list-none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[13px] text-[#666666] hover:text-[#111111] hover:bg-[#f4f4f4]"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[13px] text-[#666666] hover:text-[#111111] hover:bg-[#f4f4f4]"
                    >
                      French
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[13px] text-[#666666] hover:text-[#111111] hover:bg-[#f4f4f4]"
                    >
                      German
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative inline-block py-1"
            >
              <span className="text-[13px] font-semibold text-[#111111] uppercase tracking-[0.1em] relative">
                Let's work together
                <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#111111] origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[1020] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: isScrolled ? "75px" : "85px" }}
      >
        <div className="flex flex-col h-full px-[30px] py-[40px]">
          <ul className="flex flex-col space-y-[25px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`text-[18px] font-medium tracking-wide transition-opacity duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#111111] opacity-100"
                      : "text-[#111111] opacity-70"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-[40px] border-t border-[#e5e5e5]">
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="inline-block bg-[#111111] text-white px-[30px] py-[15px] text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-[#333] transition-colors duration-300"
            >
              Let's work together
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}