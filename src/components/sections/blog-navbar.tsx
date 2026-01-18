'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e0f2fe]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/web-logo.png"
            alt="Uptrender Logo"
            width={140}
            height={84}
            className="w-25 h-12 sm:h-14 lg:h-15"
          />
        </Link>

        {/* Sign In Button */}
        <Link
          href="/signin"
          className="px-4 py-1.5 border-2 border-[#5e87ff] text-[#5e87ff] text-sm font-semibold rounded-[10px] hover:bg-[#5e87ff] hover:text-white transition-all duration-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
