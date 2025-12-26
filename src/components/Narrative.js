'use client';

import React from 'react';
import Image from 'next/image';

export default function Narrative() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <section className="section narrative-section">
      <div className="container">
        <div className="narrative-grid">
          <div className="narrative-text">
            <h2 className="section-title">My Philosophy</h2>
            <p className="lead">
              I believe in living a life driven by curiosity, integrity, and the pursuit of excellence.
            </p>
            <p>
              My journey began with a curiosity for how systems communicate and scale. What started as fixing small code issues evolved into a passion for orchestrating complex cloud infrastructures.
            </p>
            <p>
              As a DevOps Engineer, I find joy in automation—turning repetitive tasks into seamless pipelines. Whether deploying Kubernetes clusters or optimizing CI/CD workflows, my goal is always reliability and efficiency. I believe technology should empower, not complicate.
            </p>
            <blockquote className="pull-quote">
              "Automation is cost cutting by tightening the corners and not cutting them."
            </blockquote>
            <p>
              Beyond the terminal, I value balance. I am looking for a partner who respects professional ambition but cherishes the quiet, offline moments just as much. Someone who understands that while we build for the future, we must also live in the present.
            </p>
          </div>
          <div className="narrative-image-wrapper">
            <div className="image-frame" onClick={() => setSelectedImage('/images/20251216_145213.jpg')}>
              <Image
                src="/images/20251216_145213.jpg"
                alt="Lifestyle composition"
                width={600}
                height={800}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="image-caption">
              Moments of reflection are where clarity is found.
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>&times;</button>
            <Image
              src={selectedImage}
              alt="Full screen view"
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .narrative-section {
          background-color: var(--color-surface);
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .narrative-text {
          font-size: 1.1rem;
          color: var(--color-text);
          line-height: 1.8;
        }

        .lead {
          font-size: 1.3rem;
          color: var(--color-primary);
          font-weight: 500;
          margin-bottom: var(--spacing-md);
        }

        p {
          margin-bottom: var(--spacing-md);
        }

        .pull-quote {
          border-left: 4px solid var(--color-accent);
          padding-left: var(--spacing-md);
          margin: var(--spacing-lg) 0;
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.8rem;
          color: var(--color-primary);
          line-height: 1.4;
        }

        .narrative-image-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          height: 600px;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 20px 20px 0 var(--color-primary-light);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .image-frame:hover {
          transform: scale(1.01);
        }

        .image-caption {
          margin-top: var(--spacing-md);
          text-align: right;
          font-size: 0.9rem;
          color: var(--color-text-light);
          font-style: italic;
        }

        @media (max-width: 900px) {
          .narrative-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
          
          .image-frame {
            height: 400px;
            box-shadow: 10px 10px 0 var(--color-primary-light);
          }
        }

        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          animation: fadeIn 0.3s ease;
        }

        .lightbox-content {
          position: relative;
          cursor: default;
        }

        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          z-index: 1001;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
