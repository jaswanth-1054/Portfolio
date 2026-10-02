import React from 'react';

export default function About({ profileData }) {
  const philosophies = [
    {
      title: '💡 User-First Empathy',
      desc: 'Prioritizing real human behaviors, accessibility, and clear feedback loops over aesthetic novelty alone.'
    },
    {
      title: '⚡ Scalable Systems',
      desc: 'Deep mastery of Figma Auto-Layout, variant properties, and component architecture for seamless developer handoff.'
    },
    {
      title: '🎯 Clear Hierarchy',
      desc: 'Every element on screen serves a purposeful function, reducing user anxiety and cognitive fatigue.'
    },
    {
      title: '🔄 Iterative Validation',
      desc: 'Constantly refining based on prototype walkthroughs, testing sessions, and user journey analytics.'
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Driven by Empathy, Guided by Systems.</h2>
            <p>
              I am a UI/UX Designer who believes that great design is invisible — it effortlessly guides people toward their goals while eliminating cognitive friction.
            </p>
            <p>
              With a strong foundation in user research, wireframing, and Figma design systems, I take pride in turning complex workflows (such as healthcare appointment booking, SaaS platforms, and enterprise tooling) into streamlined, accessible, and elegant interfaces.
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2rem' }}>
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a
                href="https://www.figma.com/design/4VwnEbzGMk1fjFOn6BfOTZ/Smart-Health-Services-%E2%80%94-Desktop-UI-UX?node-id=0-1&t=8KGBdmIA34YU60Xh-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Check Figma Workspace
              </a>
            </div>
          </div>

          <div className="philosophy-cards">
            {philosophies.map((item, idx) => (
              <div className="philosophy-item" key={idx}>
                <h4 className="phil-title">{item.title}</h4>
                <p className="phil-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
