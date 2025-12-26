'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("meoyndzb");

  if (state.succeeded) {
    return (
      <section className="section contact-section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2 className="section-title">Message Sent</h2>
          <p className="lead">Thank you for reaching out. I will get back to you shortly.</p>
          <button
            onClick={() => window.location.reload()}
            className="submit-btn"
            style={{ maxWidth: '200px', margin: '2rem auto' }}
          >
            Send Another
          </button>
        </div>
        <style jsx>{`
            .section-title {
              font-family: var(--font-heading);
              font-size: 3rem;
              color: var(--color-primary);
              margin-bottom: var(--spacing-md);
            }
            .lead {
              font-size: 1.2rem;
              color: var(--color-text);
            }
            .submit-btn {
              background-color: var(--color-primary);
              color: white;
              padding: 14px 28px;
              border: none;
              border-radius: 2px;
              cursor: pointer;
            }
          `}</style>
      </section>
    );
  }

  return (
    <section className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Common Ground</h2>
            <p className="lead">
              I am looking for someone who values deep connection, shared ambition, and the joy of simple moments.
            </p>
            <p>
              If you resonate with my stories and values, I would love to hear your story. This is a private space for meaningful introductions.
            </p>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell me a bit about yourself</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className="submit-btn" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Private Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--color-background);
          padding-bottom: var(--spacing-xl);
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        .lead {
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: var(--spacing-md);
          font-weight: 500;
        }

        .contact-form-wrapper {
          background-color: var(--color-surface);
          padding: var(--spacing-lg);
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .form-group {
          margin-bottom: var(--spacing-md);
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: var(--color-primary);
          font-weight: 500;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--color-text-light);
          background-color: transparent;
          border-radius: 2px;
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--color-accent);
        }

        .submit-btn {
          background-color: var(--color-primary);
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 2px;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 100%;
        }

        .submit-btn:hover {
          background-color: var(--color-accent);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
        }
      `}</style>
    </section>
  );
}
