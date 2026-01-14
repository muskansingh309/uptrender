"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


// Client logos
const clientLogos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_18.png", alt: "Envato", width: 100 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_19.png", alt: "Unsplash", width: 100 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", alt: "GitHub", width: 90 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_21.png", alt: "Awwwards", width: 110 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_22.png", alt: "Pexels", width: 90 },
];

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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentData = slides[currentSlide];

  return (
    <>
      <section className="trust-section" id="trust">
        {/* Logos Section */}
        <div className="logos-section">
          <div className="container">
            <h3 className="logos-heading">Trusted by Leading Companies</h3>
            <div className="logos-row">
              {clientLogos.map((logo, index) => (
                <div key={index} className="logo-item">
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={0} className="logo-image" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dark Carousel Section */}
        <div className="carousel-section">
          <div className="container">
            {/* Left Arrow */}
            <button onClick={goToPrevious} className="nav-arrow nav-arrow-left" aria-label="Previous slide">
              <ChevronLeft strokeWidth={1} />
            </button>

            {/* Right Arrow */}
            <button onClick={goToNext} className="nav-arrow nav-arrow-right" aria-label="Next slide">
              <ChevronRight strokeWidth={1} />
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
          background: #1a1a1a;
          padding: 100px 0 80px;
          position: relative;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: color 0.3s ease;
          z-index: 10;
          width: 48px;
          height: 48px;
        }

        .nav-arrow:hover {
          color: white;
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
        }

        .value-icon {
          color: white;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .value-title {
          font-size: 20px;
          font-weight: 500;
          color: white;
          margin-bottom: 15px;
          letter-spacing: -0.01em;
        }

        .value-description {
          font-size: 14px;
          line-height: 1.7;
          color: #999999;
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
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .dot.active {
          background: white;
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

          .carousel-content {
            padding: 0 40px;
          }

          .values-row {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 30px;
          }

          .logos-row {
            gap: 30px;
          }
        }
      `}</style>
    </>
  );
}
