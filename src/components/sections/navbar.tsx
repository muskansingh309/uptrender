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
      <div className="relative w-full max-w-[1860px] mx-auto px-[15px] sm:px-[20px] lg:px-[30px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/web-logo.png"
              alt="Uptrender Logo"
              width={600}
              height={100}
              className="w-auto h-20 sm:h-22 lg:h-25"
              priority
            />
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

        {/* Desktop Navigation Links (centered) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-[30px] z-20">
          {/* Centered Nav Box - White Theme like reference image */}
          <div className="bg-white shadow-lg rounded-full px-8 py-3 border border-gray-100">
            <ul className="flex items-center list-none m-0 p-0 gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-[14px] font-medium tracking-wide transition-all duration-200 ${
                      activeSection === link.href.substring(1)
                        ? "text-[#5e87ff]"
                        : "text-gray-500 hover:text-#5e87ff"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Items removed from centered container to keep nav items centered */}
        </div>
        {/* Desktop Right Side Items (placed outside centered nav box so button sits on the right) */}
        <div className="hidden lg:flex items-center space-x-[25px]">
          <a
            href="/signin"
            className="inline-flex items-center justify-center border border-[#5e87ff] text-[#5e87ff] text-[12px] font-semibold uppercase tracking-wider rounded-[9px] hover:bg-[#5e87ff] hover:text-white transition-colors duration-200"
            style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px' }}
          >
            Sign In
          </a>
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
                      ? "text-[#5e87ff]"
                      : "text-[#1e293b] opacity-80 hover:text-[#5e87ff]"
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
              className="inline-block border border-[#5e87ff] text-[#5e87ff] text-[13px] font-semibold uppercase tracking-wider rounded-[9px] hover:bg-[#5e87ff] hover:text-white transition-colors duration-200"
              style={{ paddingLeft: '29px', paddingRight: '29px', paddingTop: '17px', paddingBottom: '17px' }}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}