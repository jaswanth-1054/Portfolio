import React from 'react';
import { Play, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero({ profileData }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot-radar"></span>
            <span>{profileData.status}</span>
          </div>

          <h1 className="hero-title">
            Crafting <span className="gradient-text">Human-Centered</span> Healthcare & Digital Experiences.
          </h1>

          <p className="hero-subtitle">
            Hi, I'm <strong>{profileData.name}</strong>. {profileData.heroSubtitle}
          </p>

          <div className="hero-cta-group">
            <a href="#featured-case-study" className="btn-primary">
              <Play size={16} fill="currentColor" />
              View Featured Case Study
            </a>

            <a
              href="https://www.figma.com/design/4VwnEbzGMk1fjFOn6BfOTZ/Smart-Health-Services-%E2%80%94-Desktop-UI-UX?node-id=0-1&t=8KGBdmIA34YU60Xh-1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-figma"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 24C5.79 24 4 22.21 4 20C4 17.79 5.79 16 8 16H12V20C12 22.21 10.21 24 8 24ZM4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12ZM4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4ZM12 0H16C18.21 0 20 1.79 20 4C20 6.21 18.21 8 16 8H12V0ZM20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8C18.21 8 20 9.79 20 12Z" />
              </svg>
              Inspect in Figma
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">End-to-End</span>
              <span className="stat-label">UX Research to Hi-Fi</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Desktop</span>
              <span className="stat-label">Healthcare & SaaS UX</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Auto-Layout & Design Tokens</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card-wrapper">
            <div className="profile-card-glow"></div>
            <div className="profile-card">
              <div className="profile-image-container">
                <img
                  src="/profile.jpg"
                  alt={profileData.name}
                  className="profile-image"
                />
                <div className="profile-card-overlay">
                  <h3 className="profile-name">{profileData.name}</h3>
                  <span className="profile-role">{profileData.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
