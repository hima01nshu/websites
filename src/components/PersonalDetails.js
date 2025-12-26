'use client';

import React from 'react';

const personalData = {
  personal: {
    title: "Personal Details",
    fields: [
      { label: "Name", value: "Himanshu Prajapati" },
      { label: "Date of Birth", value: "01 Jan 1999" },
      { label: "Age", value: "27" },
      { label: "Height", value: "5'11" },
      { label: "Weight", value: "77kg" },
      { label: "Complexion", value: "Fair" },
      { label: "Marital Status", value: "Never Married" },
      { label: "Mother Tongue", value: "Hindi" },
      { label: "Religion / Caste", value: "Hindu / Prajapati" },
      { label: "Gotra", value: "Janotharia" },
      { label: "Mother's Gotra", value: "Tahanguria" },
      { label: "GrandMother's Gotra", value: "Jamanapuria" },
      { label: "Manglik", value: "No" },
      { label: "Diet", value: "Vegetarian/ No-onion/ No-garlic" }
    ]
  },
  contact: {
    title: "Contact Details",
    fields: [
      { label: "Phone", value: "+91 8750039601" },
      { label: "Email", value: "himanshupcs.1@gmail.com" },
      { label: "Current Location", value: "Faridabad, Haryana" },
      { label: "Permanent Address", value: "Faridabad, Haryana, India" }
    ]
  },
  family: {
    title: "Family Details",
    fields: [
      { label: "Father", value: "Rohtash Kumar, Worker" },
      { label: "Mother", value: "Pinki, homemaker" },
      { label: "Siblings", value: "Sister (Master's Student)" },
      { label: "Family Type", value: "Nuclear" },
      // { label: "Family Values", value: "Traditional with " }
    ]
  },
  education: {
    title: "Educational Background",
    fields: [
      { label: "Highest Qualification", value: "M.Tech (Computer Science)" },
      { label: "Specialization", value: "Machine Learning / Cloud & DevOps" },
      { label: "Other Qualifications", value: " DevOps, Cloud Security, AI Automation" },
      { label: "Schooling", value: "J.C. Bose University of Science and Technology" }]
  },
  professional: {
    title: "Professional Details",
    fields: [
      { label: "Current Role", value: "AI Automation Engineer / DevOps Engineer" },
      { label: "Work Experience", value: "L&T Technology Services (20+ months) + Ongoing projects" },
      { label: "Current Employer", value: "L&T Technology Services" },
      // { label: "Annual Income", value: "[Add your CTC]" },
      { label: "Career Interests", value: "Cloud, ML, AI-based automation, DevSecOps" }
    ]
  }
};

export default function PersonalDetails() {
  return (
    <section className="section details-section">
      <div className="container">
        <h2 className="section-title">Personal Profile</h2>

        <div className="details-grid">
          {Object.entries(personalData).map(([key, section]) => (
            <div key={key} className="details-card">
              <h3 className="card-title">{section.title}</h3>
              <div className="card-content">
                {section.fields.map((field, idx) => (
                  <div key={idx} className="detail-row">
                    <span className="detail-label">{field.label}:</span>
                    <span className="detail-value">{field.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .details-section {
          background-color: var(--color-background);
          padding: 4rem 0;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: 3rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .details-card {
          background: var(--color-surface);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .details-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border-color: var(--color-accent);
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.5rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-label {
          color: var(--color-text-light);
          font-weight: 500;
          flex: 1;
        }

        .detail-value {
          color: var(--color-text);
          font-weight: 600;
          flex: 1.2;
          text-align: right;
        }
      `}</style>
    </section>
  );
}
