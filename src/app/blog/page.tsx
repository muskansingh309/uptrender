"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Calendar, User } from "lucide-react";
import Link from 'next/link';
import BlogNavbar from "@/components/sections/blog-navbar";
import Footer from "@/components/sections/footer";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Delightful as he it acceptance an solicitude",
    description: "Ut enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem v...",
    content: "Ut enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    author: "Rina Chaudhary",
    date: "August 01, 2018"
  },
  {
    id: 3,
    title: "She Alteration Everything Sympathize Impossible",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    author: "Rina Chaudhary",
    date: "July 25, 2018"
  },
  {
    id: 4,
    title: "The Future of Algorithmic Trading",
    description: "Discover how AI and machine learning are revolutionizing automated trading.",
    content: "Discover how AI and machine learning are revolutionizing automated trading strategies across global markets. The integration of sophisticated algorithms has transformed the landscape of financial trading.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    author: "Sarah Johnson",
    date: "January 15, 2026"
  },
  {
    id: 5,
    title: "Mastering Multi-Market Trading Strategies",
    description: "Learn proven techniques for managing positions across markets.",
    content: "Learn proven techniques for managing positions across Indian stocks, forex, and cryptocurrency markets simultaneously.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
    author: "Rajesh Kumar",
    date: "January 12, 2026"
  },
  {
    id: 6,
    title: "Delightful as he it acceptance an solicitude discretion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    author: "Rina Chaudhary",
    date: "July 28, 2018"
  },
  {
    id: 7,
    title: "She Alteration Everything Sympathize Impossible",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    author: "Rina Chaudhary",
    date: "July 25, 2018"
  },
  {
    id: 8,
    title: "The Future of Algorithmic Trading",
    description: "Discover how AI and machine learning are revolutionizing automated trading.",
    content: "Discover how AI and machine learning are revolutionizing automated trading strategies across global markets. The integration of sophisticated algorithms has transformed the landscape of financial trading.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    author: "Sarah Johnson",
    date: "January 15, 2026"
  },
  {
    id: 9,
    title: "Mastering Multi-Market Trading Strategies",
    description: "Learn proven techniques for managing positions across markets.",
    content: "Learn proven techniques for managing positions across Indian stocks, forex, and cryptocurrency markets simultaneously.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
    author: "Rajesh Kumar",
    date: "January 12, 2026"
  },
    {
    id: 2,
    title: "Delightful as he it acceptance an solicitude discretion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    author: "Rina Chaudhary",
    date: "July 28, 2018"
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost>(blogPosts[0]);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 6;
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".main-image", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".main-title", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.from(".sidebar-card", {
      x: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.3,
      ease: "power3.out"
    });
  }, []);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    if (mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.floor((blogPosts.length - 1) / pageSize);
    setPageIndex((p) => Math.min(p + 1, maxPage));
  };

  const handlePrevPage = () => {
    setPageIndex((p) => Math.max(p - 1, 0));
  };

  const displayedPosts = blogPosts.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  const hasMore = (pageIndex + 1) * pageSize < blogPosts.length;
  const hasPrev = pageIndex > 0;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BlogNavbar />

      <section className="pt-[100px] sm:pt-[120px] pb-[60px] sm:pb-[80px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Main Content - Left Side */}
            <div ref={mainContentRef} className="flex-1 lg:max-w-[calc(100%-380px)]">
              {/* Featured Image */}
              <Link href={`/blog/${selectedPost.id}`} className="block">
                <figure className="main-image relative w-full aspect-[16/10] rounded-[8px] overflow-hidden mb-6 bg-[#f5f5f5]">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </Link>

              {/* Post Title */}
              <h1 className="main-title text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#111] leading-[1.2] mb-4">
                {selectedPost.title}
              </h1>

              {/* Author & Date */}
              <div className="flex items-center gap-2 text-[14px] text-[#5e87ff] mb-6">
                <User className="w-4 h-4" />
                <span className="font-medium">{selectedPost.author}</span>
                <span className="text-[#ccc] mx-2">•</span>
                <Calendar className="w-4 h-4" />
                <span>{selectedPost.date}</span>
              </div>

              {/* Post Content */}
              <div className="text-[15px] sm:text-[16px] text-[#555] leading-[1.8]">
                <p>{selectedPost.content}</p>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <aside className="w-full lg:w-[320px] flex-shrink-0">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#999] mb-5">
                All Blogs
              </h3>

              <div className="space-y-5">
                {displayedPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`sidebar-card flex gap-4 cursor-pointer group ${
                      selectedPost.id === post.id ? 'bg-[#f0f9ff] p-2 rounded-[8px]' : ''
                    }`}
                    onClick={() => handlePostClick(post)}
                  >
                    {/* Thumbnail */}
                      <div className="w-[90px] h-[90px] rounded-[6px] overflow-hidden flex-shrink-0 bg-[#f5f5f5]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className={`text-[14px] sm:text-[15px] font-semibold leading-[1.4] mb-1 group-hover:text-[#5e87ff] transition-colors duration-300 line-clamp-2 ${
                        selectedPost.id === post.id ? 'text-[#5e87ff]' : 'text-[#111]'
                      }`}>
                        {post.title}
                      </h4>
                      <span className="text-[12px] text-[#999]">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-6 flex items-center">
                {hasPrev ? (
                  <button
                    onClick={handlePrevPage}
                    className="py-2 px-3 bg-white border border-[#e6f6ff] text-[#5e87ff] text-[14px] font-semibold rounded-[8px] hover:bg-[#eef9ff] transition-colors duration-200"
                  >
                    Previous
                  </button>
                ) : (
                  <div className="w-[96px]" />
                )}

                <div className="flex-1" />

                {hasMore ? (
                  <div>
                    <button
                      onClick={handleNextPage}
                      className="py-2 px-6 bg-white border-2 border-[#5e87ff] text-[#5e87ff] text-[14px] font-semibold rounded-[8px] hover:bg-[#5e87ff] hover:text-white transition-all duration-300"
                    >
                      Load More
                    </button>
                  </div>
                ) : (
                  <div className="text-[13px] text-[#666]">No more posts</div>
                )}
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
