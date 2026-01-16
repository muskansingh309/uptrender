"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Icons
const TrophyIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M16 12H34V24C34 30 30 34 25 34C20 34 16 30 16 24V12Z" />
    <path d="M16 16H12C10 16 9 18 9 20C9 23 11 25 14 25H16" />
    <path d="M34 16H38C40 16 41 18 41 20C41 23 39 25 36 25H34" />
    <path d="M25 34V40" />
    <path d="M18 40H32" />
    <circle cx="38" cy="8" r="3" />
    <path d="M38 5V6" strokeLinecap="round" />
    <path d="M38 10V11" strokeLinecap="round" />
    <path d="M35 8H36" strokeLinecap="round" />
    <path d="M40 8H41" strokeLinecap="round" />
  </svg>
);

const MailIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M8 18L25 8L42 18V38H8V18Z" />
    <path d="M8 18L25 30L42 18" />
  </svg>
);

const PartyIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M12 40L20 18L32 30L12 40Z" />
    <circle cx="30" cy="10" r="2" />
    <circle cx="36" cy="14" r="1.5" />
    <circle cx="40" cy="8" r="1" />
    <path d="M28 6L30 8" strokeLinecap="round" />
    <path d="M34 5L36 7" strokeLinecap="round" />
    <path d="M38 10L40 12" strokeLinecap="round" />
  </svg>
);

// Carousel data - 4 slides with 6 items each (2 rows x 3 cols)
const slides = [
  {
    topRow: [
      { icon: <TrophyIcon />, title: "High Loyalty", description: "Mauris a libero et diam sodales semper. Aenean elit leo, hendrerit nec dolor id, rutrum finibus velit." },
      { icon: <MailIcon />, title: "Accountability", description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
      { icon: <PartyIcon />, title: "Simplicity", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue rhoncus enim, in pharetra lacus." },
    ],
    bottomRow: [
      { icon: <TrophyIcon />, title: "High Learner", description: "Mauris a libero et diam sodales semper. Aenean elit leo, hendrerit nec dolor id, rutrum finibus velit." },
      { icon: <MailIcon />, title: "Listener", description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
      { icon: <PartyIcon />, title: "Innovator", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue rhoncus enim, in pharetra lacus." },
    ],
  },
  {
    topRow: [
      { icon: <TrophyIcon />, title: "Excellence", description: "We strive for excellence in every project, delivering quality that exceeds expectations." },
      { icon: <MailIcon />, title: "Communication", description: "Clear and consistent communication is the foundation of successful collaboration." },
      { icon: <PartyIcon />, title: "Innovation", description: "We embrace new technologies and creative approaches to solve complex challenges." },
    ],
    bottomRow: [
      { icon: <TrophyIcon />, title: "Reliability", description: "Our clients can count on us to deliver on time and meet all project requirements." },
      { icon: <MailIcon />, title: "Support", description: "We provide ongoing support and maintenance to ensure long-term success." },
      { icon: <PartyIcon />, title: "Growth", description: "We help businesses grow and scale through strategic digital solutions." },
    ],
  },
  {
    topRow: [
      { icon: <TrophyIcon />, title: "Dedication", description: "Our team is dedicated to understanding your unique needs and delivering tailored solutions." },
      { icon: <MailIcon />, title: "Transparency", description: "We maintain open and honest communication throughout every project phase." },
      { icon: <PartyIcon />, title: "Creativity", description: "Creative thinking drives our approach to design and problem-solving." },
    ],
    bottomRow: [
      { icon: <TrophyIcon />, title: "Quality", description: "Quality is at the heart of everything we do, from code to customer service." },
      { icon: <MailIcon />, title: "Partnership", description: "We view every client relationship as a long-term partnership built on trust." },
      { icon: <PartyIcon />, title: "Vision", description: "We help you realize your vision with strategic planning and execution." },
    ],
  },
  {
    topRow: [
      { icon: <TrophyIcon />, title: "Passion", description: "We are passionate about creating digital experiences that make an impact." },
      { icon: <MailIcon />, title: "Integrity", description: "We operate with integrity and always put our clients' interests first." },
      { icon: <PartyIcon />, title: "Agility", description: "Our agile approach allows us to adapt quickly to changing requirements." },
    ],
    bottomRow: [
      { icon: <TrophyIcon />, title: "Results", description: "We focus on delivering measurable results that drive business success." },
      { icon: <MailIcon />, title: "Expertise", description: "Our team brings deep expertise across multiple industries and technologies." },
      { icon: <PartyIcon />, title: "Collaboration", description: "We believe in collaborative partnerships that foster innovation and success." },
    ],
  },
];

export default function TrustSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".logos-heading", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".logos-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(".logo-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".logos-row",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(".value-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".carousel-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(".nav-arrow",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".carousel-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(".dots-container",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".carousel-section",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentData = slides[currentSlide];

  return (
    <>
      <section ref={sectionRef} className="trust-section" id="services">
    
        {/* Services Carousel Section */}
        <div className="carousel-section">
          <div className="container">
            {/* Section Heading */}
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-heading">Our Services</h2>
              <p className="section-description">Comprehensive trading solutions designed for Indian, Forex, and Crypto markets</p>
            </div>

            {/* Left Arrow */}
            <button onClick={goToPrevious} className="nav-arrow nav-arrow-left" aria-label="Previous slide">
              <ChevronLeft strokeWidth={2} />
            </button>

            {/* Right Arrow */}
            <button onClick={goToNext} className="nav-arrow nav-arrow-right" aria-label="Next slide">
              <ChevronRight strokeWidth={2} />
            </button>

            {/* Carousel Content */}
            <div className="carousel-content">
              {/* Top Row */}
              <div className="values-row">
                {currentData.topRow.map((item, index) => (
                  <div key={`top-${index}`} className="value-card">
                    <div className="value-icon">{item.icon}</div>
                    <h4 className="value-title">{item.title}</h4>
                    <p className="value-description">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Bottom Row */}
              {/* <div className="values-row">
                {currentData.bottomRow.map((item, index) => (
                  <div key={`bottom-${index}`} className="value-card">
                    <div className="value-icon">{item.icon}</div>
                    <h4 className="value-title">{item.title}</h4>
                    <p className="value-description">{item.description}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Dot Indicators */}
            <div className="dots-container">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .trust-section {
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          position: relative;
        }

        /* Logos Section */
        .logos-section {
          background: white;
          padding: 60px 0 80px;
        }

        .logos-heading {
          text-align: center;
          font-size: 19px;
          font-weight: 600;
          color: #111111;
          letter-spacing: 0.05em;
          margin-bottom: 40px;
        }

        .logos-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 50px 50px;
        }

        .logo-item {
          filter: grayscale(100%);
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        .logo-image {
          height: 24px;
          width: auto;
          object-fit: contain;
        }

        /* Carousel Section */
        .carousel-section {
          background: linear-gradient(135deg, #fbfbfb 0%, #f4f5f6 100%);
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .carousel-section::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -20%;
          width: 80%;
          height: 80%;
          background: radial-gradient(ellipse at top right, rgba(100,100,100,0.06), transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-label {
          display: inline-block;
          color: #9aa0a6; /* light greish */
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .section-heading {
          font-size: 48px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .section-description {
          font-size: 18px;
          line-height: 1.6;
          color: #666666;
        }

        .nav-arrow {
          position: absolute;
          top: 55%;
          transform: translateY(-50%);
          background: white;
          border: none;
          color: #9aa0a6;
          cursor: pointer;
          transition: all 0.28s ease;
          z-index: 10;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(154, 160, 166, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-arrow:hover {
          background: #9aa0a6;
          color: white;
          box-shadow: 0 8px 24px rgba(154, 160, 166, 0.12);
          transform: translateY(-50%) scale(1.04);
        }

        .nav-arrow-left {
          left: 20px;
        }

        .nav-arrow-right {
          right: 20px;
        }

        .carousel-content {
          padding: 0 80px;
        }

        .values-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 50px;
        }

        .values-row:last-child {
          margin-bottom: 0;
        }

        .value-card {
          text-align: center;
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(154, 160, 166, 0.06);
        }

        .value-icon {
          color: #9aa0a6;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .value-title {
          font-size: 22px;
          font-weight: 600;
          color: #111111;
          margin-bottom: 15px;
          letter-spacing: -0.01em;
        }

        .value-description {
          font-size: 15px;
          line-height: 1.7;
          color: #666666;
          max-width: 280px;
          margin: 0 auto;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 50px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(154, 160, 166, 0.12);
          border: none;
          cursor: pointer;
          transition: all 0.26s ease;
        }

        .dot:hover {
          background: rgba(154, 160, 166, 0.28);
          transform: scale(1.06);
        }

        .dot.active {
          background: #9aa0a6;
          width: 26px;
          border-radius: 6px;
        }

        @media (max-width: 1024px) {
          .nav-arrow-left {
            left: 10px;
          }

          .nav-arrow-right {
            right: 10px;
          }

          .carousel-content {
            padding: 0 60px;
          }
        }

        @media (max-width: 768px) {
          .carousel-section {
            padding: 60px 0;
          }

          .section-heading {
            font-size: 32px;
          }

          .section-description {
            font-size: 16px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .carousel-content {
            padding: 0 40px;
          }

          .values-row {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 30px;
          }

          .value-card {
            padding: 30px 20px;
          }

          .logos-row {
            gap: 30px;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .section-heading {
            font-size: 28px;
          }

          .carousel-content {
            padding: 0 20px;
          }

          .nav-arrow-left {
            left: 10px;
          }

          .nav-arrow-right {
            right: 10px;
          }
        }
      `}</style>
    </>
  );
}
