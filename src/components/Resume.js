'use client';

import React from 'react';

const experiences = [
  {
    year: '2023 - Present',
    role: 'DevOps Engineer',
    company: 'Orchestra Technology',
    description: 'Specializing in cloud automation, Kubernetes orchestration, and CI/CD pipeline optimization for scalable infrastructure.'
  },
  {
    year: '2023 - 2025',
    role: 'M.Tech (Computer Science)',
    company: 'J.C. Bose University (YMCA)',
    description: 'Focused on Machine Learning and Advanced Cloud Computing. Achieved CGPA 7.2.'
  },
  {
    year: '2018 - 2022',
    role: 'B.Tech (Information Technology)',
    company: 'B.S. Anangpuria Institute',
    description: 'Foundation in software engineering and system design. Achieved CGPA 7.9.'
  }
];

export default function Resume() {
  return (
    <section className="section resume-section">
      <div className="container">
        <h2 className="section-title">The Journey</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.year}</div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .resume-section {
          background-color: var(--color-background);
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background-color: var(--color-accent);
          opacity: 0.3;
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          padding-right: 50%;
          position: relative;
          margin-bottom: var(--spacing-lg);
        }

        .timeline-item:nth-child(even) {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: 50%;
        }

        .timeline-item:nth-child(even) .timeline-date {
          left: -140px;
          right: auto;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          text-align: left;
          align-items: flex-start;
        }

        .timeline-date {
          position: absolute;
          right: -140px;
          top: 0;
          width: 120px;
          text-align: left;
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-accent);
        }

        .timeline-content {
          width: 90%;
          padding: var(--spacing-md);
          background: var(--color-surface);
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          position: relative;
        }

        .timeline-content::after {
          content: '';
          position: absolute;
          top: 20px;
          right: -6px;
          width: 12px;
          height: 12px;
          background-color: var(--color-accent);
          border-radius: 50%;
          transform: translateX(50%);
          z-index: 2;
        }

        .timeline-item:nth-child(even) .timeline-content::after {
          right: auto;
          left: -6px;
          transform: translateX(-50%);
        }

        h3 {
          font-size: 1.5rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-xs);
        }

        h4 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-text-light);
          margin-bottom: var(--spacing-sm);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        p {
          color: var(--color-text);
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          .timeline-item {
            justify-content: flex-start;
            padding-right: 0;
            padding-left: 50px;
          }
          .timeline-item:nth-child(even) {
            padding-left: 50px;
          }
          .timeline-item:nth-child(even) .timeline-content {
            text-align: left;
            align-items: flex-start;
          }
           .timeline-content {
            width: 100%;
            text-align: left;
            align-items: flex-start;
           }
          .timeline-date {
            position: relative;
            right: auto;
            left: auto;
            width: 100%;
            margin-bottom: var(--spacing-xs);
            text-align: left !important;
          }
          .timeline-content::after {
            right: auto;
            left: -36px !important; 
          }
        }
      `}</style>
    </section>
  );
}
