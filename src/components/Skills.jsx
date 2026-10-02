import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'UX Research & Strategy',
      icon: '🔍',
      tags: [
        'User Journey Mapping',
        'Information Architecture',
        'Low-Fi Wireframing',
        'Usability Testing',
        'Persona Modeling',
        'Empathy Mapping',
        'Task Flow Analysis'
      ]
    },
    {
      title: 'UI & Visual Design',
      icon: '✨',
      tags: [
        'Figma Component Systems',
        'Auto-Layout & Variants',
        'Typography & Grid Systems',
        'Micro-Interactions',
        'WCAG 2.1 Accessibility',
        'Responsive Desktop UI',
        'Design Tokens'
      ]
    },
    {
      title: 'Tools & Handoff',
      icon: '🛠',
      tags: [
        'Figma',
        'FigJam',
        'Interactive Prototyping',
        'Developer Handoff',
        'Design Documentation',
        'Notion',
        'HTML & CSS Fundamentals'
      ]
    }
  ];

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Skills & Toolset</h2>
          <p className="section-subtitle">A comprehensive toolkit spanning user research, visual systems, and interactive prototyping.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-category-card" key={idx}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map((tag, tIdx) => (
                  <span className="skill-tag" key={tIdx}>
                    {tag}
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
