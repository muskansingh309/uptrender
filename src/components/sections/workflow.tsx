import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const WorkflowSection = () => {
  const steps = [
    {
      id: "01",
      title: "Discussion",
      content: "We believe that a website is the foundation of a successful online presence, and our goal is to help businesses establish a strong digital presence. Our process begins with understanding your business goals."
    },
    {
      id: "02",
      title: "Design",
      content: "We then use this information to create a custom website that not only reflects your brand but also helps you achieve your business objectives. From responsive design to intuitive navigation."
    },
    {
      id: "03",
      title: "Development",
      content: "Our development team brings the vision to life with clean, high-performance code. We focus on scalability and modern technologies to ensure your product stands the test of time."
    },
    {
      id: "04",
      title: "Production",
      content: "The final stage involves rigorous testing and deployment. We don't just launch; we optimize for performance and ensure everything is pixel-perfect before going live."
    }
  ];

  return (
    <section className="bg-white py-[140px] overflow-hidden" id="workflow">
      <div className="container px-4 mx-auto max-w-[1320px]">
        <div className="flex flex-wrap -mx-[15px]">
          {/* Left Column: Artistic Image Composition */}
          <div className="w-full lg:w-1/2 px-[15px] mb-[60px] lg:mb-0 relative">
            <div className="relative h-[640px] w-full">
              {/* Main Image (The person at desk) */}
              <div className="absolute top-0 left-0 w-[100%] h-[100%] z-10 shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_23.png"
                  alt="Creative process discussion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Supporting Image (The plant/abstract) */}
              <div className="absolute top-[20%] right-0 w-[45%] h-[60%] z-20 shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_24.png"
                  alt="Process artistic view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Background Decorative Overlay (Subtle architectural detail) */}
              <div className="absolute bottom-0 left-[5%] w-[40%] h-[35%] z-0 overflow-hidden opacity-30">
                <div className="w-full h-full border-[1px] border-border bg-[#f4f4f4]" />
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Content */}
          <div className="w-full lg:w-5/12 offset-lg-1 px-[15px] flex flex-col justify-center">
            <h2 className="text-[42px] font-medium leading-[1.2] tracking-[-0.01em] text-[#111111] mb-[40px]">
              How we work?
            </h2>

            <Accordion.Root
              type="single"
              defaultValue="item-01"
              collapsible
              className="space-y-0"
            >
              {steps.map((step, index) => (
                <Accordion.Item
                  key={step.id}
                  value={`item-${step.id}`}
                  className="border-b border-[#e5e5e5] first:border-t"
                >
                  <Accordion.Trigger className="group flex items-center justify-between w-full py-[22px] text-left hover:text-[#111111] transition-colors focus:outline-none">
                    <span className="text-[16px] font-medium text-[#111111]">
                      {step.id}. {step.title}
                    </span>
                    <ChevronDown className="w-[18px] h-[18px] text-[#666666] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-[30px] pr-[20px]">
                      <p className="text-[16px] leading-[1.7] text-[#666666]">
                        {step.content}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <div className="mt-[50px]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#000000] text-[#ffffff] px-[40px] py-[16px] text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#333333] hover:-translate-y-0.5"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;