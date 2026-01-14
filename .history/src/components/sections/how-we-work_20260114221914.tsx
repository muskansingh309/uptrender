"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * How We Work section matching the design:
 * - 2 overlapping images on the left (beige bg + person, and man with sunglasses)
 * - "How we work?" heading
 * - Accordion with 4 steps (01-04)
 * - START A PROJECT button
 */

const workSteps = [
  {
    id: "01",
    title: "Discussion",
    content:
      "The core identity reflects consistent associations with the brand whereas the extended identity involves the intricate details of the brand that help generate a constant motif.",
  },
  {
    id: "02",
    title: "Design",
    content:
      "We focus on creating a custom website that not only reflects your brand but also helps you achieve your business objectives. From responsive design to intuitive navigation.",
  },
  {
    id: "03",
    title: "Development",
    content:
      "Our strong team brings innovative ideas into production. We use modern technologies to build scalable, high-performance web applications.",
  },
  {
    id: "04",
    title: "Production",
    content:
      "The final stage involves quality assurance, testing, and deployment. We ensure that your project is fully optimized and ready.",
  },
];

export default function HowWeWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="how-we-work-section" id="how-we-work">
        <div className="container px-[15px] mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-start">
            {/* Left Column: Overlapping Images */}
            <div className="w-full lg:w-1/2 mb-[60px] lg:mb-0">
              <div className="images-container">
                {/* Image 1 - Background beige with woman at desk */}
                <div className="image-back">
                  <div className="beige-bg"></div>
                  <div className="woman-image">
                     <Image 
                    // src="http://localhost:3000/_next/image?url=https%3A%2F%2Fslelguoygbfzlpylpxfs.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ftest-clones%2F15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app%2Fassets%2Fimages%2Fimages_16.png&w=3840&q=75" */}
                      src="http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fslelguoygbfzlpylpxfs.supabase.co%252Fstorage%252Fv1%252Fobject%252Fpublic%252Ftest-clones%252F15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app%252Fassets%252Fimages%252Fimages_16.png%26w%3D3840%26q%3D75&w=640&q=75"
                      alt="Woman working at desk"
                    width={280}
                    height={380}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Image 2 - Man with sunglasses (front, bottom right) */}
                <div className="image-front">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_5.png"
                    alt="Man with sunglasses"
                    width={280}
                    height={380}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="w-full lg:w-1/2 lg:pl-[60px]">
              <h2 className="section-heading">
                How we work?
              </h2>

              {/* Accordion Items */}
              <div className="accordion-container">
                {workSteps.map((step, index) => (
                  <div key={step.id} className="accordion-item">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="accordion-button"
                    >
                      <span className="accordion-title">
                        <span className="step-number">{step.id}.</span>
                        {step.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "accordion-icon",
                          openIndex === index ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "accordion-content",
                        openIndex === index ? "open" : ""
                      )}
                    >
                      <p>{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="cta-container">
                <a href="#contact" className="cta-button">
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .how-we-work-section {
          background: white;
          padding: 100px  0px;
          overflow: hidden;
        }

        .images-container {
          position: relative;
          height: 600px;
          max-width: 600px;
        }

        .image-back {
          position: relative;
          width: 100%;
        }

        .beige-bg {
          position: absolute;
          top: 0;
          left: -10%;
          width: 55%;
          height: 320px;
          background: #f5e6d3;
          border-radius: 20px;
          z-index: 1;
        }

        .woman-image {
          position: absolute;
          top: 120px;
          left: 6%;
          height:320px;
          width: 80%;
          z-index: 2;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .image-front {
          position: absolute;
          bottom: 0;
          right: 50;
          width: 50%;
          z-index: 3;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
        }

        .section-heading {
          font-size: 48px;
          font-weight: 500;
          line-height: 1.1;
          color: #111111;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }

        .accordion-container {
          border-top: 1px solid #e5e5e5;
        }

        .accordion-item {
          border-bottom: 1px solid #e5e5e5;
        }

        .accordion-button {
          width: 100%;
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
        }

        .accordion-title {
          font-size: 18px;
          font-weight: 500;
          color: #111111;
          display: flex;
          align-items: center;
        }

        .step-number {
          margin-right: 10px;
          font-size: 14px;
          font-weight: 400;
          color: #666666;
        }

        .accordion-icon {
          width: 20px;
          height: 20px;
          color: #111111;
          transition: transform 0.3s ease;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .accordion-content.open {
          max-height: 200px;
          padding-bottom: 20px;
        }

        .accordion-content p {
          font-size: 15px;
          line-height: 1.7;
          color: #666666;
          padding-left: 30px;
          margin: 0;
        }

        .cta-container {
          margin-top: 40px;
        }

        .cta-button {
          display: inline-block;
          background: #111111;
          color: white;
          padding: 16px 40px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .cta-button:hover {
          background: #333333;
        }

        @media (max-width: 1024px) {
          .images-container {
            height: 500px;
            max-width: 100%;
            margin-bottom: 40px;
          }

          .section-heading {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .how-we-work-section {
            padding: 60px 0 80px;
          }

          .images-container {
            height: 400px;
          }

          .beige-bg {
            height: 240px;
          }
        }
      `}</style>
    </>
  );
}