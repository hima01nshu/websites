'use client';

import React from 'react';
import Image from 'next/image';

const hobbies = [
  { name: 'Reading', icon: '📚' },
  { name: 'Fitness', icon: '💪' },
  { name: 'Music', icon: '🎵' },
  { name: 'Travel', icon: '✈️' },
];

const hobbyData = {
  Reading: {
    title: "Books I Recommend",
    description: "Books that have shaped my perspective.",
    type: "list",
    items: ["Atomic Habits by James Clear", "Surrounded by idiots by thomas erikson", "5 love languages by Gary Chapman", "The Psychology of Money by Morgan Housel"]
  },
  Fitness: {
    title: "My Routine",
    description: "Staying active keeps the mind sharp.",
    type: "list",
    items: ["Deadlifts (Strength)", "Pull-ups (Calisthenics)", "5k Runs (Endurance)", "HIIT Circuits", "Yoga (Flexibility)"]
  },
  Music: {
    title: "My Playlist",
    description: "Music to calm your mind.",
    type: "link",
    url: "https://www.youtube.com/live/jfKfPfyJRdk?si=smydLG06Nv1ODhwK",
    label: "Listen on YouTube Music"
  },
  Travel: {
    title: "Cities Visited",
    description: "Places where I've left a piece of my heart.",
    type: "list",
    // distinct from map, maybe highlight favorites
    items: ["Manali", "Kasol", "Rishikesh", "Dharamshala", "Goa", "Mumbai", "Ujjain"]
  }
};

const feedImages = [
  '/images/20251216_145213.jpg',
  '/images/20251217_095327.jpg',
  '/images/20251217_111919(1).jpg',
  '/images/20251217_114710.jpg',
  '/images/20251217_122447(1).jpg',
  '/images/20251221_135740.jpg',
  '/images/20251221_160132.jpg',
  '/images/20251221_161332(1).jpg',
  '/images/20251221_164100.jpg',
  '/images/IMG-20251221-WA0039.jpg',
  '/images/20251217_130434.jpg',
  '/images/20251217_163633.jpg',
  '/images/20251219_143324.jpg',
  '/images/20251219_172638.jpg',
];

export default function Interests() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedHobby, setSelectedHobby] = React.useState(null);
  const [startIndex, setStartIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % feedImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    ...feedImages.slice(startIndex, startIndex + 8),
    ...feedImages.slice(0, Math.max(0, 8 - (feedImages.length - startIndex)))
  ].slice(0, 8); // Ensure exactly 8 images

  return (
    <section className="section interests-section">
      <div className="container">
        <h2 className="section-title">Interests & Hobbies</h2>

        <div className="hobbies-list">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="hobby-chip"
              onClick={() => setSelectedHobby(hobbyData[hobby.name])}
            >
              <span className="hobby-icon">{hobby.icon}</span>
              <span className="hobby-name">{hobby.name}</span>
            </div>
          ))}
        </div>

        <div className="instagram-feed">
          <div className="feed-header">
            <h3>Latest Moments</h3>
            <a href="#" className="feed-link">@myprofile</a>
          </div>
          <div className="feed-grid">
            {visibleImages.map((src, index) => (
              <div key={`${src}-${index}`} className="feed-item" onClick={() => setSelectedImage(src)}>
                <Image
                  src={src}
                  alt="Feed item"
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>&times;</button>
            <Image
              src={selectedImage}
              alt="Full screen view"
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxWidth: '100vw', maxHeight: '100vh' }}
            />
          </div>
        </div>
      )}

      {/* Hobby Details Modal */}
      {selectedHobby && (
        <div className="lightbox-overlay" onClick={() => setSelectedHobby(null)}>
          <div className="hobby-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn-modal" onClick={() => setSelectedHobby(null)}>&times;</button>
            <h3>{selectedHobby.title}</h3>
            <p className="hobby-desc">{selectedHobby.description}</p>

            <div className="hobby-content">
              {selectedHobby.type === 'list' && (
                <ul className="hobby-items">
                  {selectedHobby.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {selectedHobby.type === 'link' && (
                <a href={selectedHobby.url} target="_blank" rel="noopener noreferrer" className="hobby-link-btn">
                  {selectedHobby.label}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .interests-section {
          background-color: var(--color-background);
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: var(--spacing-md);
        }

        .hobbies-list {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
          flex-wrap: wrap;
        }

        .hobby-chip {
          display: flex;
          align-items: center;
          padding: 8px 16px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-accent);
          border-radius: 50px;
          color: var(--color-primary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hobby-chip:hover {
          background-color: var(--color-accent);
          color: #fff;
          transform: translateY(-2px);
        }

        .hobby-icon {
          margin-right: 8px;
        }

        .instagram-feed {
          max-width: 800px;
          margin: 0 auto;
        }

        .feed-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-sm);
        }

        .feed-header h3 {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .feed-link {
          color: var(--color-accent);
          font-weight: 500;
        }

        .feed-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-sm);
        }

        .feed-item {
          aspect-ratio: 1;
          background-color: var(--color-surface);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          animation: slideFadeIn 0.8s ease forwards;
        }

        .feed-item :global(img) {
          transition: transform 0.3s ease;
        }

        .feed-item:hover :global(img) {
          transform: scale(1.1);
        }

        @media (min-width: 600px) {
          .feed-grid {
            grid-template-columns: repeat(4, 1fr);
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

        .hobby-modal {
          background: var(--color-surface);
          padding: 2rem;
          border-radius: 8px;
          max-width: 500px;
          width: 90%;
          position: relative;
          cursor: default;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          border: 1px solid var(--color-primary-light);
        }

        .hobby-modal h3 {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        .hobby-desc {
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .hobby-items {
          list-style: none;
          padding: 0;
        }

        .hobby-items li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--color-primary-light);
          color: var(--color-text);
        }

        .hobby-items li:last-child {
          border-bottom: none;
        }

        .hobby-link-btn {
          display: inline-block;
          background-color: #ff0000; /* YouTube Red */
          color: white;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        
        .hobby-link-btn:hover {
          opacity: 0.9;
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

        .close-btn-modal {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          color: var(--color-text-light);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .close-btn-modal:hover {
          color: var(--color-primary);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
