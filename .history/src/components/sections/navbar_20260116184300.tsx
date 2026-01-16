"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
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
          ? "bg-white shadow-sm h-[60px] sm:h-[70px] lg:h-[75px]"
          : "bg-transparent h-[70px] sm:h-[80px] lg:h-[85px]"
      } flex items-center`}
    >
      <div className="w-full max-w-[1860px] mx-auto px-[15px] sm:px-[20px] lg:px-[30px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-[#ecf2ff] to-[#ecf2ff] rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg">
              <svg width="18" height="18" className="sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17L9 11L13 15L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 7H21V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold tracking-tight text-[#1e293b]">
              <span className="bg-gradient-to-r from-[#e2c1f6] to-[#e2c1f6] bg-clip-text text-transparent">Up</span>
              <span className="text-[#1e293b]">trender</span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Icon (Hidden on Desktop) */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="p-2 -mr-2">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1e293b]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1e293b]" />
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
                  className={`text-[14px] font-medium tracking-wide transition-all duration-200 uppercase ${
                    activeSection === link.href.substring(1)
                      ? "text-[#ecf2ff]"
                      : "text-[#1e293b] opacity-70 hover:text-[#ecf2ff] hover:opacity-100"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Items */}
          <div className="flex items-center space-x-[25px] ml-[20px]">
           

            {/* CTA Button */}
            <a
              href="/signin"
              className="inline-flex items-center justify-center px-5 py-2 border-2 border-[#ecf2ff] text-[#ecf2ff] text-[12px] font-semibold uppercase tracking-wider rounded-[10px] hover:bg-[#ecf2ff] hover:text-white transition-all duration-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop (closes on click) */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/40 z-[1040] lg:hidden"
        />
      )}

      {/* Mobile Sidebar Menu (slides in from right) */}
      <div
        className="fixed right-0 lg:hidden"
        style={{
          top: isScrolled ? "60px" : "70px",
          height: isScrolled ? "calc(100vh - 60px)" : "calc(100vh - 70px)",
          width: 320,
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s ease-in-out",
          zIndex: 1050,
          background: "white",
          boxShadow: "-10px 0 30px rgba(16,24,40,0.08)",
        }}
      >
        <div className="flex flex-col h-full px-5 sm:px-8 py-6 overflow-y-auto">
          <ul className="flex flex-col gap-5 sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`text-[16px] sm:text-[18px] font-medium tracking-wide transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#ecf2ff]"
                      : "text-[#1e293b] opacity-80 hover:text-[#ecf2ff]"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6 border-t border-[#e8eef6]">
            <a
              href="/signin"
              onClick={closeMobileMenu}
              className="inline-block border-2 border-[#ecf2ff] text-[#ecf2ff] px-6 py-3 text-[13px] font-semibold uppercase tracking-wider rounded-[10px] hover:bg-[#ecf2ff] hover:text-white transition-all duration-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}