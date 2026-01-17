"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function SignInPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".signin-logo", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      });

      gsap.from(".signin-title", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out"
      });

      gsap.from(".signin-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out"
      });

      gsap.from(".signin-form", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out"
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic
    console.log('Sign in:', formData);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#5e87ff] to-[#5e87ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-white/25 rounded-full"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <Link href="/" className="flex items-center gap-3 mb-0">
            <Image
              src="/web-logo.png"
              alt="Uptrender Logo"
              width={100}
              height={100}
              className="w-auto h-24 xl:h-28 brightness-0 invert"
            />
          </Link>
          
          <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            Welcome back to<br />smarter trading.
          </h2>
          <p className="text-lg text-white/80 max-w-md leading-relaxed">
            Access your AI-powered trading dashboard and continue automating your success across global markets.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div ref={formRef} className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[420px]">
          {/* Mobile Logo */}
          <Link href="/" className="signin-logo flex items-center gap-2 mb-10 lg:hidden">
            <Image
              src="/web-logo.png"
              alt="Uptrender Logo"
              width={300}
              height={75}
              className="w-auto h-12"
            />
          </Link>

          <h1 className="signin-title text-[28px] sm:text-[32px] font-semibold text-[#111] mb-2">
            Sign in to your account
          </h1>
          <p className="signin-subtitle text-[15px] text-[#64748b] mb-8">
            Enter your credentials to access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="signin-form space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#e5e7eb] rounded-xl text-[15px] text-[#111] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#5e87ff] focus:ring-2 focus:ring-[#5e87ff]/10 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[13px] font-medium text-[#374151]">
                  Password
                </label>
                <Link href="/forgot-password" className="text-[12px] text-[#5e87ff] hover:text-[#5e87ff] font-medium">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-[#e5e7eb] rounded-xl text-[15px] text-[#111] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#5e87ff] focus:ring-2 focus:ring-[#5e87ff]/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#64748b]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-[#d1d5db] text-[#5e87ff] focus:ring-[#5e87ff]/20"
              />
              <label htmlFor="remember" className="text-[13px] text-[#64748b]">
                Keep me signed in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#5e87ff] to-[#5e87ff] hover:from-[#5e87ff] hover:to-[#5e87ff] text-white text-[14px] font-semibold rounded-xl shadow-lg shadow-[#5e87ff]/25 transition-all duration-300"
            >
              Sign In
            </button>

            {/* Divider */}
            {/* <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e5e7eb]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-[#fafbfc] text-[13px] text-[#9ca3af]">or continue with</span>
              </div>
            </div> */}

            {/* Social Login */}
            {/* <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 bg-white border border-[#e5e7eb] rounded-xl text-[13px] font-medium text-[#374151] hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 bg-white border border-[#e5e7eb] rounded-xl text-[13px] font-medium text-[#374151] hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </button>
            </div> */}
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-[14px] text-[#64748b]">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#5e87ff] hover:text-[#5e87ff] font-semibold">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
