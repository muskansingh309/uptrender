'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Play } from 'lucide-react';
import gsap from 'gsap';
import styles from './hero.module.css';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLAnchorElement>(null);
  const mockupContainerRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const [desktopVideoLoaded, setDesktopVideoLoaded] = useState(false);
  const [mobileVideoLoaded, setMobileVideoLoaded] = useState(false);

  useEffect(() => {
    // GSAP Timeline for entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Text initial state (from left)
    gsap.set([captionRef.current, headingRef.current, paragraphRef.current, buttonsRef.current, scrollDownRef.current], {
      opacity: 0,
      x: -80,
    });

    // Mockup initial state
    gsap.set(mockupContainerRef.current, {
      opacity: 0,
      x: 100,
      scale: 0.9,
    });

    // Text sequence
    tl.to(captionRef.current, { opacity: 1, x: 0, duration: 0.8 })
      .to(headingRef.current, { opacity: 1, x: 0, duration: 1 }, '-=0.5')
      .to(paragraphRef.current, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6')
      .to(buttonsRef.current, { opacity: 1, x: 0, duration: 0.8 }, '-=0.5')
      .to(scrollDownRef.current, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4');

    // Mockup animation
    tl.to(mockupContainerRef.current, { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      duration: 1.2, 
      ease: 'power3.out' 
    }, '-=1.8');

    // Play videos when animation completes
    tl.eventCallback('onComplete', () => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.play();
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.play();
      }
    });

    return () => {
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
                  {/* Uptrender Trading Platform */}
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
                    href="/register" 
                    className="btn-round"
                  >
                    <span>Register now</span>
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

            {/* Right Column: Device Mockup with Videos */}
            <div className={styles.rightColumn}>
              <div 
                ref={mockupContainerRef}
                className={styles.mockupContainer}
              >
                {/* Desktop Mockup with Video */}
                <div className={styles.desktopMockup}>
                  <div className={styles.desktopScreen}>
                    {!desktopVideoLoaded && (
                      <div className={styles.videoLoader}>
                        <div className={styles.loadingBar}></div>
                      </div>
                    )}
                    <video
                      ref={desktopVideoRef}
                      className={styles.desktopVideo}
                      muted
                      loop
                      playsInline
                      preload="none"
                      onLoadedData={() => setDesktopVideoLoaded(true)}
                      style={{ opacity: desktopVideoLoaded ? 1 : 0 }}
                    >
                      <source src="/dashboardvideo.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Mobile Mockup with Video - positioned to overlap desktop */}
                <div className={styles.mobileMockup}>
                  <div className={styles.mobileScreen}>
                    {!mobileVideoLoaded && (
                      <div className={styles.videoLoader}>
                        <div className={styles.loadingBar}></div>
                      </div>
                    )}
                    <video
                      ref={mobileVideoRef}
                      className={styles.mobileVideo}
                      muted
                      loop
                      playsInline
                      preload="none"
                      onLoadedData={() => setMobileVideoLoaded(true)}
                      style={{ opacity: mobileVideoLoaded ? 1 : 0 }}
                    >
                      <source src="/mobile.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator - Positioned higher */}
        {/* <a 
          ref={scrollDownRef}
          href="#about" 
          className={`${styles.scrollDown} text-muted-foreground hover:text-primary`}
        >
          <div className={styles.scrollIcon}>
            <ArrowDown className="w-4 h-4" />
          </div>
          <span className={styles.scrollText}>Scroll Down</span>
        </a> */}
      </div>
    </div>
  );
}