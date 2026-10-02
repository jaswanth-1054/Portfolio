import React from 'react';

export default function DesignProcess() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Research',
      desc: 'Uncovering user pain points, interviewing clinical stakeholders, mapping empathy matrices, and conducting competitive benchmarking audits.',
      deliverables: ['Empathy Map', 'User Personas', 'Competitive Analysis']
    },
    {
      num: '02',
      title: 'Information Architecture',
      desc: 'Structuring logical content hierarchies, user journeys, friction-free booking flows, and low-fidelity paper and digital wireframes.',
      deliverables: ['Sitemap', 'User Flows', 'Low-Fi Wireframes']
    },
    {
      num: '03',
      title: 'UI & Design Systems',
      desc: 'Translating validated wireframes into high-fidelity Figma components, auto-layout layouts, accessible color palettes, and tokenized design systems.',
      deliverables: ['Component Library', 'Design Tokens', 'WCAG AA Audit']
    },
    {
      num: '04',
      title: 'Prototyping & Testing',
      desc: 'Building interactive end-to-end Figma prototypes, running usability tests with real users, synthesizing feedback, and preparing developer handoff.',
      deliverables: ['Figma Prototype', 'Usability Report', 'Dev Handoff Specs']
    }
  ];

  return (
    <section className="section" id="process" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">UX Methodology</span>
          <h2 className="section-title">Design Process & Framework</h2>
          <p className="section-subtitle">
            How I transform ambiguous healthcare problem spaces into systematic, validated, and delight-driven digital products.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-card" key={step.num}>
              <div className="process-number">{step.num}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
              <div className="process-deliverables">
                {step.deliverables.map((item, idx) => (
                  <span className="process-deliverable-tag" key={idx}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
