'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const descriptors = ["Guitarist", "Traveler", "Partner", "Musician", "Dreamer", "Engineer"];

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % descriptors.length;
      const fullText = descriptors[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before new word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="greeting">Hello, I am a</h2>
          <h1 className="typing-text">{text}<span className="cursor">|</span></h1>
          <p className="tagline">Welcome to my personal journey.</p>
        </div>

        <div className="hero-visuals">
          <div className="image-collage">
            <div className="hero-img main-img">
              <Image
                src="/images/20251214_160614.jpg"
                alt="Profile Secondary"
                width={350}
                height={500}
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="hero-img secondary-img-2">
              <Image
                src="/images/20241231_123938.jpg"
                alt="Profile Secondary"
                width={200}
                height={250}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%);
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          width: 100%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .greeting {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 1.5rem;
          color: var(--color-accent);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: var(--spacing-sm);
        }

        .typing-text {
          font-size: 5rem;
          font-family: var(--font-heading);
          color: var(--color-primary);
          min-height: 1.2em;
          line-height: 1.1;
        }

        .cursor {
          animation: blink 1s step-end infinite;
        }

        .tagline {
          margin-top: var(--spacing-md);
          font-size: 1.2rem;
          color: var(--color-text-light);
          max-width: 500px;
        }

        /* Visuals & Collage */
        .hero-visuals {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-collage {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero-img {
          position: absolute;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border: 2px solid rgba(255,255,255,0.1);
          transition: transform 0.3s ease, z-index 0.3s;
        }

        .hero-img:hover {
          transform: scale(1.02) translateY(-5px);
          z-index: 10 !important;
          border-color: var(--color-accent);
        }

        .hero-img img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .main-img {
          width: 320px;
          height: 450px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .secondary-img-1 {
          width: 200px;
          height: 250px;
          top: 10%;
          right: 5%;
          z-index: 1;
        }

        .secondary-img-2 {
          width: 180px;
          height: 220px;
          bottom: 10%;
          left: 5%;
          z-index: 3;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 1024px) {
           .hero-container {
             gap: 2rem;
           }
           .typing-text {
             font-size: 4rem;
           }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 4rem;
            min-height: auto;
            text-align: center;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .tagline {
            margin-right: auto;
            margin-left: auto;
          }

          .hero-visuals {
             height: 400px;
             width: 100%;
             max-width: 400px;
             margin: 0 auto;
          }

          .typing-text {
            font-size: 3rem;
          }
          
          .main-img {
            width: 250px;
            height: 350px;
          }
          
          .secondary-img-1 {
            width: 140px;
            height: 180px;
            right: 0;
          }
          
          .secondary-img-2 {
            width: 130px;
            height: 160px;
            left: 0;
          }
        }
      `}</style>
    </section>
  );
}
