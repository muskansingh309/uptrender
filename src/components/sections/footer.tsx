"use client";

import React, { useEffect, useRef } from "react";
// logo replaced with text logo
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Social media icons
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <footer ref={footerRef} className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Column */}
            <div className="footer-brand">
                <div className="footer-logo">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#5e87ff] to-[#5e87ff] rounded-lg flex items-center justify-center shadow-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 17L9 11L13 15L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[18px] font-semibold text-[#1e293b]">Uptrender</span>
                  </div>
                </div>
              <p className="footer-description">
               India’s First Multi-Market AI-Powered Algo Trading Dashboard for Indian, Forex & Crypto Markets.
              </p>
              <div className="footer-contact-info">
                <div className="contact-line">
                  <span className="contact-prefix">T.</span>
                  <a href="tel:+919644466612">+91 9644466612</a>
                </div>
                <div className="contact-line">
                  <span className="contact-prefix">E.</span>
                  <a href="mailto:ibthemes21@gmail.com">harishtiwari@quantechtrends.com</a>
                </div>
              </div>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h4 className="column-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div className="footer-column">
              <h4 className="column-title">Social Media</h4>
              <ul className="footer-links social-links">
                <li>
                  <a href="#"><FacebookIcon /> Facebook</a>
                </li>
                <li>
                  <a href="#"><YoutubeIcon /> Youtube</a>
                </li>
                <li>
                  <a href="#"><PinterestIcon /> Pinterest</a>
                </li>
                <li>
                  <a href="#"><LinkedinIcon /> LinkedIn</a>
                </li>
              </ul>
            </div>

            {/* Legal & Press Column */}
            <div className="footer-column">
              <h4 className="column-title">Legal &amp; Press</h4>
              <ul className="footer-links">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
                <li><Link href="/refund-policy">Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <span className="copyright">© quantechtrends 2026</span>
            <span className="location">Based in Chhattisgarh, India.</span>
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: white;
          border-top: 1px solid #e0f2fe;
          padding: 100px 0 40px;
        }
        .footer-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        @media (min-width: 640px) {
          .footer-container {
            padding: 0 20px;
          }
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 35px;
          margin-bottom: 50px;
        }
        @media (min-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }
        }
        @media (min-width: 992px) {
          .footer-content {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 50px;
            margin-bottom: 80px;
          }
        }
        .footer-brand { max-width: 320px; }
        .footer-logo { margin-bottom: 20px; }
        @media (min-width: 640px) {
          .footer-logo { margin-bottom: 25px; }
        }
        .footer-description {
          color: #666;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        @media (min-width: 640px) {
          .footer-description {
            font-size: 15px;
            margin-bottom: 30px;
          }
        }
        .footer-contact-info { display: flex; flex-direction: column; gap: 6px; }
        @media (min-width: 640px) {
          .footer-contact-info { gap: 8px; }
        }
        .contact-line {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        @media (min-width: 640px) {
          .contact-line {
            font-size: 15px;
          }
        }
        .contact-prefix {
          color: #64748b;
          margin-right: 10px;
        }
        .contact-line a {
          color: #1e293b;
          font-weight: 500;
          transition: color 0.3s;
        }
        .contact-line a:hover { color: #5e87ff; }
        .column-title {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 20px;
          letter-spacing: 0.02em;
        }
        @media (min-width: 640px) {
          .column-title {
            font-size: 15px;
            margin-bottom: 30px;
          }
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 640px) {
          .footer-links {
            gap: 15px;
          }
        }
        .footer-links a {
          color: #64748b;
          font-size: 14px;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        @media (min-width: 640px) {
          .footer-links a {
            font-size: 15px;
            gap: 12px;
          }
        }
        .footer-links a:hover { color: #5e87ff; }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding-top: 30px;
          border-top: 1px solid #e0f2fe;
          text-align: center;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            padding-top: 40px;
          }
        }
        .copyright, .location {
          color: #94a3b8;
          font-size: 12px;
        }
        @media (min-width: 640px) {
          .copyright, .location {
            font-size: 13px;
          }
        }
        .scroll-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #e0f2fe;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #1e293b;
        }
        @media (min-width: 640px) {
          .scroll-top-btn {
            width: 50px;
            height: 50px;
          }
        }
        .scroll-top-btn:hover {
          background: linear-gradient(135deg, #5e87ff 0%, #5e87ff 100%);
          color: white;
          border-color: transparent;
        }
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 35px;
          }
        }
        @media (max-width: 639px) {
          .footer { padding: 50px 0 25px; }
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 35px;
          }
        }
      `}</style>
    </>
  );
}