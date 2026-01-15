"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  id: string;
  title: string;
  number: string;
  description: string;
  image: string;
  points?: string[];
}

const services: ServiceItem[] = [
  {
    id: "services-item-1",
    title: "Smart Copy Trading",
    number: "01",
    description:
      "Build Your Copy Trading Network for Indian Stocks, Forex & Crypto From selecting verified master traders to monitoring real-time performance, to scaling passive income—everything for automated copy trading is built right in.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_18.png",
    points: [
      "Master Account Setup",
      "Real-Time Trade Mirroring",
      "Multi-Account Management",
    ],
  },
  {
    id: "services-item-2",
    title: "Unified Multi-Market Algo Dashboard",
    number: "02",
    description:
      "India's First Algo Dashboard for Indian, Forex & Crypto Trading From building multi-market strategies to backtesting on unified data, to deploying live algo trades without switching platforms—trade the world from one AI platform.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_19.png",
      points: [
      "Indian Stock Markets",
      "Forex Trading Pairs",
      "Crypto Assets",
    ],
  },
  {
    id: "services-item-4",
    title: "AI Strategy Builder",
    number: "03",
    description:
      "No-Code AI Algo Strategy Builder for Multi-Market Trading Build, test, and automate trading strategies with AI—no coding needed. Trade Indian stocks, Forex, and Crypto from one smart algo dashboard.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_21.png",
      points: [
      "No-Code AI Builder",
      "Paper & Live Trading",
      "Multi-Market Automation",
    ],
  },
    {
    id: "services-item-3",
    title: "Development",
    number: "04",
    description:
      "The core identity reflects consistent associations with the brand whereas the extended identity involves the intricate details of the brand that help generate a constant motif.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_20.png",
  },
  {
    id: "services-item-5",
    title: "Photography",
    number: "05",
    description:
      "The core identity reflects consistent associations with the brand whereas the extended identity involves the intricate details of the brand that help generate a constant motif.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_22.png",
  },
  {
    id: "services-item-6",
    title: "Marketing",
    number: "06",
    description:
      "The core identity reflects consistent associations with the brand whereas the extended identity involves the intricate details of the brand that help generate a constant motif.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_23.png",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  const activeService =
    services.find((s) => s.id === activeTab) || services[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".service-tab-item", {
        x: -40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-tabs",
          start: "top 85%",
        },
      });

      gsap.from(".services-image-container", {
        x: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-image-container",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="page-section scrollSpysection py-[100px]"
      id="services"
    >
      <div className="container position-relative">
        <div className="row flex flex-wrap -mx-[15px]">
          {/* Left Column */}
          <div className="col-lg-6 mb-md-60 mb-sm-30 px-[15px] w-full lg:w-1/2">
            <div className="services-header">
              <h2 className="section-caption mb-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#666666]">
                Our Services
              </h2>
              <h3 className="section-title mb-6 text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-[#111111]">
                We provide the best development solutions.
              </h3>
              <div className="row flex flex-wrap -mx-[15px]">
                <div className="col-lg-10 px-[15px] w-full lg:w-5/6">
                  <p className="section-descr mb-0 mb-sm-30 text-[16px] leading-[1.6] text-[#666666]">
                    The power of design help us to solve complex problems and
                    cultivate business solutions.
                  </p>
                </div>
              </div>
            </div>

            <ul
              className="nav nav-tabs services-tabs flex flex-col space-y-4 pt-10"
              role="tablist"
            >
              {services.map((service) => (
                <li key={service.id} role="presentation" className="service-tab-item">
                  <button
                    onClick={() => setActiveTab(service.id)}
                    className={cn(
                      "flex items-center justify-between w-full text-left py-2 border-b border-transparent transition-all duration-300 group",
                      activeTab === service.id
                        ? "text-[#111111]"
                        : "text-[#666666] hover:text-[#111111]"
                    )}
                  >
                    <span
                      className={cn(
                        "text-[20px] font-medium tracking-[-0.01em] transition-all duration-500",
                        activeTab === service.id
                          ? "opacity-100"
                          : "opacity-30 group-hover:opacity-100"
                      )}
                    >
                      {service.title}
                    </span>
                    <span
                      className={cn(
                        "text-[12px] font-semibold uppercase tracking-widest ml-4 transition-all duration-500",
                        activeTab === service.id
                          ? "opacity-100"
                          : "opacity-30 group-hover:opacity-100"
                      )}
                    >
                      {service.number}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Active Tab Image */}
          <div className="col-lg-6 px-[15px] w-full lg:w-1/2 flex items-center justify-end">
            <div className="relative w-full max-w-[720px] services-image-container">
              <div className="relative w-full h-[490px] md:h-[590px] lg:h-[680px]">
                {/* Active Image */}
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="services-image object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  priority={activeService.id === "services-item-1"}
                />

                {/* The Content Overlay Box */}
                <div className="services-text absolute bottom-10 left-[-40px] md:left-[-100px] bg-white p-[40px] shadow-xl max-w-[400px] z-20">
                  <div className="services-text-container">
                    <h4 className="services-title text-[20px] font-medium mb-[15px] text-[#111111]">
                      {activeService.title}
                    </h4>
                    <p className="text-gray mb-0 text-[14px] leading-[1.6] text-[#666666]">
                      {activeService.description}
                    </p>
                    {activeService.points && activeService.points.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {activeService.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start text-[14px] text-[#666666]">
                            <span className="mr-3 text-green-600 font-semibold">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services-tabs button {
          border: none;
          background: none;
          padding: 10px 0;
          cursor: pointer;
          position: relative;
        }
        .services-tabs button::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #111111;
          transition: width 0.3s ease;
        }
        .services-tabs li:has(button[class*="text-[#111111]"]) button::after {
          width: 50%;
        }
        @media (max-width: 991px) {
          .services-text {
            position: relative;
            left: 0 !important;
            bottom: 0 !important;
            max-width: 100% !important;
            margin-top: 20px;
          }
          .services-content {
            height: auto !important;
            min-height: auto !important;
            position: relative !important;
            display: flex;
            flex-direction: column;
          }
          .services-content > div {
            position: relative !important;
            display: none;
          }
          .services-content > div[class*="opacity-100"] {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}