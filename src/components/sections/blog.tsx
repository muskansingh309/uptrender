"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Blog Section matching the design:
 * - "OUR BLOG" caption
 * - "The latest news" heading
 * - "Read more in our blog →" link on the right
 * - 3 blog cards with images, titles, excerpts, author info and dates
 * - GSAP scroll animations
 */

const blogPosts = [
  {
    id: 1,
    title: 'Spotlight — Equinox Collection by Shane Griffin',
    description: 'Looking for inspiration to kick it off, I stumbled across the work of Shane Griffin, an artist and director based in New York...',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_28.png',
    author: 'Adam Smith',
    authorAvatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_25.png',
    date: 'August 3',
  },
  {
    id: 2,
    title: 'Random Explorations with Cinema 4D and Redshift',
    description: 'Nidia Dias is a 3D designer based in the Portugal with an incredible portfolio. From the professional work done with...',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_29.png',
    author: 'Emma Kandel',
    authorAvatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_26.png',
    date: 'August 2',
  },
  {
    id: 3,
    title: 'Visually Identity and Branding for Mexican Restaurant',
    description: 'Anta Petrenco shared a beautiful visual identity, branding and packaging design project on their Behance profile...',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_30.png',
    author: 'Thomas Johnson',
    authorAvatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_27.png',
    date: 'August 1',
  },
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".blog-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]" id="blog">
      <div className="container px-[15px] sm:px-[20px] mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between mb-[35px] sm:mb-[45px] md:mb-[50px] blog-header">
          <div>
            <span className="block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0ea5e9] mb-[10px] sm:mb-[15px]">
              Our Blog
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium tracking-[-0.02em] text-[#1e293b] leading-[1.15]">
              The latest news
            </h2>
          </div>
          <a 
            href="/blog" 
            className="text-[13px] sm:text-[14px] font-medium text-[#0ea5e9] inline-flex items-center gap-[6px] sm:gap-[8px] hover:gap-[10px] sm:hover:gap-[12px] transition-all duration-300 mt-[16px] sm:mt-[20px] md:mt-0"
          >
            Read more in our blog
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[28px] lg:gap-[30px] blog-grid">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group cursor-pointer blog-card"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden mb-0 w-full aspect-[4/3] rounded-t-[6px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className='border border-[#e0f2fe] rounded-b-[6px] p-[16px] sm:p-[20px] transition-all duration-300 hover:border-[#7dd3fc] hover:shadow-lg'>
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[1.4] text-[#1e293b] mb-[12px] sm:mb-[15px] transition-colors duration-300 group-hover:text-[#0ea5e9]">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-[#64748b] mb-[16px] sm:mb-[20px]">
                  {post.description}
                </p>

                {/* Meta - Author and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[8px] sm:gap-[10px]">
                    <div className="relative w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] rounded-full overflow-hidden">
                      <Image
                        src={post.authorAvatar}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#1e293b]">
                      {post.author}
                    </span>
                  </div>
                  <span className="text-[12px] sm:text-[13px] text-[#64748b]">
                    {post.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;