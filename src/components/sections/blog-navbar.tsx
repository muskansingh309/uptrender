'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e0f2fe]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/web-logo.png"
            alt="Uptrender Logo"
            width={100}
            height={100}
          className="w-auto h-15 sm:h-19 lg:h-23"
          />
        </Link>

        {/* Sign In Button */}
        <Link
          href="/signin"
          className="px-5 py-2.5 border-2 border-[#5e87ff] text-[#5e87ff] text-sm font-semibold rounded-[10px] hover:bg-[#5e87ff] hover:text-white transition-all duration-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
