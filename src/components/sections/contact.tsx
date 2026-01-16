"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const MailPhoneIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="8" y="15" width="44" height="30" rx="2" />
    <path d="M8 18L30 35L52 18" />
    <circle cx="48" cy="15" r="10" fill="white" stroke="currentColor" />
    <path d="M45 12C45 12 45 18 48 18C51 18 51 12 51 12" strokeWidth="1" />
    <circle cx="48" cy="10" r="1" fill="currentColor" />
  </svg>
);

const LocationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M30 8C20 8 14 16 14 24C14 36 30 52 30 52C30 52 46 36 46 24C46 16 40 8 30 8Z" />
    <circle cx="30" cy="24" r="6" />
  </svg>
);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".newsletter-section",
          start: "top 80%",
        },
      });

      gsap.from(".contact-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 85%",
        },
      });

      gsap.from(".contact-info-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-info-cards",
          start: "top 85%",
        },
      });

      gsap.from(".contact-form-wrapper", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-form-wrapper",
          start: "top 85%",
        },
      });

      gsap.from(".contact-map", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-map",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="contact" className="contact-wrapper">
        <div className="newsletter-section">
          <div className="newsletter-bg"></div>
          <div className="newsletter-content">
            <h2 className="newsletter-heading">Have a question? Get in touch.</h2>
            <form className="newsletter-form">
              <input type="text" placeholder="Enter your name" className="newsletter-input" required />
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">INQUIRY NOW</button>
            </form>
            <p className="newsletter-terms">
              ⓘ By sending the form you agree to the <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-container">
            <div className="contact-header-row">
              <div className="contact-header text-center md:text-left">
                <span className="contact-label">CONTACT US</span>
                <h2 className="contact-heading">Let&apos;s start the<br />productive work.</h2>
              </div>
              <div className="contact-info-cards">
                <div className="contact-info-card text-center md:text-left">
                  <div className="contact-icon flex justify-center md:justify-start"><MailPhoneIcon /></div>
                  <h4 className="contact-card-title">Say hello</h4>
                  <div className="contact-card-text">
                    <a href="mailto:ibthemes21@gmail.com">harishtiwari@quantechtrends.com</a>
                    <a href="tel:+18376528800">+91 9644466612</a>
                  </div>
                </div>
                <div className="contact-info-card text-center md:text-left">
                  <div className="contact-icon flex justify-center md:justify-start"><LocationIcon /></div>
                  <h4 className="contact-card-title">Location</h4>
                  <div className="contact-card-text">
                    <p>Babylon Capital Infront of Currency Tower, Vip Road Raipur (C.G) </p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-content-row">
              <div className="contact-form-wrapper">
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  <div className="form-group message-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Enter your message" rows={5} required></textarea>
                  </div>
                  <div className="form-footer">
                    <button type="submit" className="submit-btn">SEND MESSAGE</button>
                    <p className="form-terms">
                      ⓘAll the fields are required. By sending the form you agree to the <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>.
                    </p>
                  </div>
                </form>
              </div>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7954704734107!2d81.67493347551914!3d21.239957580490753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd3984e8c78f%3A0x374915a53f820cf!2sBabylon%20Capital%2C%20Raipur!5e0!3m2!1sen!2sin!4v1768547302158!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Babylon Capital, Raipur"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-wrapper { width: 100%; }
        .newsletter-section {
          position: relative;
          padding: 100px 0;
          background: #1a1a1a;
          overflow: hidden;
        }
        .newsletter-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(50,50,50,0.8) 0%, rgba(20,20,20,0.9) 100%);
        }
        .newsletter-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 15px;
          text-align: center;
        }
        .newsletter-heading {
          color: white;
          font-size: 42px;
          font-weight: 500;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }
        .newsletter-form {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
        }
        .newsletter-input {
          flex: 1;
          max-width: 420px;
          padding: 18px 24px;
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.3);
          background: transparent;
          color: white;
          outline: none;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.5); }
        .newsletter-btn {
          padding: 18px 35px;
          background: white;
          color: #111;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .newsletter-btn:hover { background: #f0f0f0; }
        .newsletter-terms {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
        }
        .newsletter-terms a {
          color: rgba(255,255,255,0.8);
          text-decoration: underline;
        }
        .contact-section {
          padding: 100px 0;
          background: white;
        }
        .contact-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .contact-header-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        .contact-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #111;
          margin-bottom: 20px;
          display: block;
        }
        .contact-heading {
          font-size: 48px;
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #111;
          margin: 0;
        }
        .contact-info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .contact-icon {
          color: #111;
          margin-bottom: 20px;
        }
        .contact-card-title {
          font-size: 18px;
          font-weight: 500;
          color: #111;
          margin-bottom: 12px;
        }
        .contact-card-text {
          font-size: 14px;
          line-height: 1.8;
          color: #666;
        }
        .contact-card-text a,
        .contact-card-text p {
          display: block;
          margin: 0;
        }
        .contact-card-text a:hover { color: #111; }
        .contact-content-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #111;
          margin-bottom: 12px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px 0;
          font-size: 14px;
          border: none;
          border-bottom: 1px solid #e5e5e5;
          background: transparent;
          outline: none;
          resize: none;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #111;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999;
        }
        .message-group { margin-bottom: 0; }
        .form-footer {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-top: 40px;
        }
        .submit-btn {
          padding: 18px 35px;
          background: linear-gradient(90deg, #5e87ff 0%, #5e87ff 100%);
          color: white;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(2,132,199,0.16);
          transition: transform 0.22s ease, box-shadow 0.22s ease, opacity 0.22s ease;
        }
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 26px rgba(2,132,199,0.2);
          opacity: 0.98;
        }
        .form-terms {
          font-size: 12px;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }
        .form-terms a {
          color: #111;
          text-decoration: underline;
        }
        .contact-map {
          height: 350px;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .contact-map { height: 400px; }
        }
        @media (min-width: 768px) {
          .contact-map { height: 450px; }
        }
        .contact-map iframe { display: block; }
        @media (max-width: 992px) {
          .contact-header-row,
          .contact-content-row {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .contact-heading { font-size: 32px; }
        }
        @media (max-width: 768px) {
          .newsletter-section { padding: 50px 0; }
          .newsletter-heading { font-size: 24px; margin-bottom: 28px; }
          .newsletter-form { flex-direction: column; gap: 12px; }
          .newsletter-input { max-width: 100%; padding: 14px 18px; font-size: 14px; }
          .newsletter-btn { padding: 14px 28px; font-size: 11px; width: 100%; }
          .newsletter-terms { font-size: 12px; }
          .contact-section { padding: 50px 0; }
          .contact-info-cards { grid-template-columns: 1fr; gap: 25px; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
          .form-footer { flex-direction: column; align-items: flex-start; gap: 16px; margin-top: 28px; }
          .submit-btn { padding: 14px 28px; font-size: 11px; }
          .contact-label { font-size: 11px; margin-bottom: 12px; }
          .contact-heading { font-size: 26px; }
          .contact-card-title { font-size: 16px; }
          .contact-card-text { font-size: 13px; }
          .form-group label { font-size: 13px; margin-bottom: 10px; }
          .form-group input, .form-group textarea { padding: 12px 0; font-size: 13px; }
          .form-terms { font-size: 11px; }
        }
        @media (max-width: 480px) {
          .newsletter-section { padding: 40px 0; }
          .newsletter-heading { font-size: 22px; margin-bottom: 24px; line-height: 1.3; }
          .contact-section { padding: 40px 0; }
          .contact-header-row { gap: 24px; margin-bottom: 40px; }
          .contact-content-row { gap: 30px; }
          .contact-heading { font-size: 24px; }
        }
      `}</style>
    </>
  );
}
