import React, { useState, useEffect } from 'react';
import { Edit3, Sun, Moon, ArrowRight } from 'lucide-react';

export default function Navbar({ 
  theme, 
  onToggleTheme, 
  onOpenReviewModal, 
  profileData 
}) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'featured-case-study', 'user-flow', 'process', 'about', 'skills', 'contact'];
      const scrollY = window.pageYOffset;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar" id="navbar">
      <div className="container nav-container">
        <a href="#hero" className="brand-logo">
          <div className="logo-badge">NJ</div>
          <div className="brand-details">
            <span className="brand-name">{profileData.name}</span>
            <span className="brand-title">{profileData.title}</span>
          </div>
        </a>

        <nav>
          <ul className="nav-menu">
            <li>
              <a href="#featured-case-study" className={`nav-link ${activeSection === 'featured-case-study' ? 'active' : ''}`}>
                Featured Project
              </a>
            </li>
            <li>
              <a href="#user-flow" className={`nav-link ${activeSection === 'user-flow' ? 'active' : ''}`}>
                User Flow
              </a>
            </li>
            <li>
              <a href="#process" className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}>
                Design Process
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Review & Edit Profile Fields button */}
          <button
            className="edit-mode-btn"
            onClick={onOpenReviewModal}
            title="Review & Edit Profile Fields"
            aria-label="Review & Edit Profile Fields"
          >
            <Edit3 size={18} />
          </button>

          {/* Theme Toggle Button (Light / Dark only) */}
          <button
            className="theme-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className="btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </header>
  );
}
