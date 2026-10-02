import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer({ profileData }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              {profileData.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              {profileData.title} • Healthcare & Systems Specialist
            </div>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.figma.com/design/4VwnEbzGMk1fjFOn6BfOTZ/Smart-Health-Services-%E2%80%94-Desktop-UI-UX?node-id=0-1&t=8KGBdmIA34YU60Xh-1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Figma"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 24C5.79 24 4 22.21 4 20C4 17.79 5.79 16 8 16H12V20C12 22.21 10.21 24 8 24ZM4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12ZM4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4ZM12 0H16C18.21 0 20 1.79 20 4C20 6.21 18.21 8 16 8H12V0ZM20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8C18.21 8 20 9.79 20 12Z" />
              </svg>
            </a>
            <a href={`mailto:${profileData.email}`} className="social-link" title="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
          <p className="footer-copy">© 2026 {profileData.name}. Designed with Figma precision & human-centered care.</p>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Smart Health Services UI/UX Prototype</span>
        </div>
      </div>
    </footer>
  );
}
