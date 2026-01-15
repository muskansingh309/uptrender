'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, Play } from 'lucide-react';
import gsap from 'gsap';
import styles from './hero.module.css';

/**
 * HeroSection Component
 * 
 * Features:
 * - GSAP animations for text and images appearing from left to right
 * - Mouse-follow parallax effect on images
 * - Stacked image layout matching reference design
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLAnchorElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure refs exist before running animations
    if (!image1Ref.current || !image2Ref.current || !image3Ref.current) return;

    // GSAP Timeline for entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Text initial state (from left)
    gsap.set([captionRef.current, headingRef.current, paragraphRef.current, buttonsRef.current, scrollDownRef.current], {
      opacity: 0,
      x: -80,
    });

    // Images initial state (from center-left, slightly scaled)
    gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
      opacity: 0,
      x: -120,
      y: 40,
      scale: 0.95,
      transformOrigin: 'center center',
    });

    // Text sequence
    tl.to(captionRef.current, { opacity: 1, x: 0, duration: 0.8 })
      .to(headingRef.current, { opacity: 1, x: 0, duration: 1 }, '-=0.5')
      .to(paragraphRef.current, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6')
      .to(buttonsRef.current, { opacity: 1, x: 0, duration: 0.8 }, '-=0.5')
      .to(scrollDownRef.current, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4');

    // Images: animate each card from the initial center-left position to their CSS position
    // image2 (center, largest) first, then image1, then image3 for sequencing similar to reference
    tl.to(image2Ref.current, { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=1.9')
      .to(image1Ref.current, { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: 'power1.out' }, '-=1.7')
      .to(image3Ref.current, { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' }, '-=1.8');

    // After entrance completes, enable mouse parallax to avoid conflicts
    const onCompleteHandler = () => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!sectionRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;

        // Use overwrite:auto so gsap manages conflicts and ensure smooth movement
        gsap.to(image1Ref.current, { x: xPos * 20, y: yPos * 15, rotation: xPos * 2, duration: 0.9, ease: 'power2.out', overwrite: 'auto' });
        gsap.to(image2Ref.current, { x: xPos * 28, y: yPos * 22, rotation: xPos * -1.5, duration: 1.0, ease: 'power2.out', overwrite: 'auto' });
        gsap.to(image3Ref.current, { x: xPos * 14, y: yPos * 12, rotation: xPos * 1, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      // store handler to remove later
      (sectionRef.current as any)?._heroMouseHandler && window.removeEventListener('mousemove', (sectionRef.current as any)._heroMouseHandler);
      if (sectionRef.current) (sectionRef.current as any)._heroMouseHandler = handleMouseMove;
    };

    tl.eventCallback('onComplete', onCompleteHandler);

    return () => {
      // cleanup mouse handler
      const handler = (sectionRef.current as any)?._heroMouseHandler;
      if (handler) window.removeEventListener('mousemove', handler);
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`${styles.heroSection} home-section bg-gray-light-1`}
      id="home"
    >
      {/* Light alpha overlay to match original visual style */}
      <div className={styles.overlay} />

      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.grid}>
            
            {/* Left Content Column */}
            <div className={styles.leftColumn}>
              <div>
                <span 
                  ref={captionRef}
                  className={`${styles.caption} caption`}
                >
                  Uptrender Trading Platform
                </span>
                
                <h1 
                  ref={headingRef}
                  className={`${styles.heading} font-medium text-primary`}
                >
                  Automate smarter trades across global markets.
                </h1>
                
                <p 
                  ref={paragraphRef}
                  className={`${styles.paragraph} text-muted-foreground`}
                >
                 India’s First Multi-Market AI-Powered Algo Trading Dashboard for Indian, Forex & Crypto Markets.
                </p>
                
                <div 
                  ref={buttonsRef}
                  className={styles.buttons}
                >
                  <a 
                    href="#about" 
                    className="btn-round"
                  >
                    <span>Discover now</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className={`${styles.playButton} group text-primary`}
                  >
                    <span className={styles.playIcon}>
                      <Play className="w-[10px] h-[10px] fill-current ml-[1px]" />
                    </span>
                    <span className="nav-link p-0 after:bottom-[-2px]">How it works?</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image Montage Column */}
            <div className={styles.rightColumn}>
              <div 
                ref={imagesContainerRef}
                className={styles.imagesContainer}
              >
                {/* Image 1 - Top Right (Blue/Gray interior) - Smallest */}
                <div 
                  ref={image1Ref}
                  className={styles.image1}
                >
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_13.png"
                    alt="Creative Studio Work 1"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image 2 - Center Left (Beige with orange/citrus) - Largest, Front */}
                <div 
                  ref={image2Ref}
                  className={styles.image2}
                >
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_12.png"
                    alt="Creative Studio Work 2"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image 3 - Right side (Desk with cups) - Tall narrow, Behind Image 2 */}
                <div 
                  ref={image3Ref}
                  className={styles.image3}
                >
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/15c28d76-b879-403c-95c1-726d0b61c6f0-resonance-next-app-vercel-app/assets/images/images_11.png"
                    alt="Creative Studio Work 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator - Positioned higher */}
        <a 
          ref={scrollDownRef}
          href="#about" 
          className={`${styles.scrollDown} text-muted-foreground hover:text-primary`}
        >
          <div className={styles.scrollIcon}>
            <ArrowDown className="w-4 h-4" />
          </div>
          <span className={styles.scrollText}>Scroll Down</span>
        </a>
      </div>
    </div>
  );
}