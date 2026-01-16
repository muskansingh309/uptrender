'use client'
import React from 'react';
import Link from 'next/link';

export default function BlogNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e0f2fe]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">U</span>
          </div>
          <span className="text-xl font-semibold text-[#1e293b]">Uptrender</span>
        </Link>

        {/* Sign In Button */}
        <Link
          href="/signin"
          className="px-5 py-2.5 border-2 border-[#0ea5e9] text-[#0ea5e9] text-sm font-semibold rounded-[10px] hover:bg-[#0ea5e9] hover:text-white transition-all duration-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
