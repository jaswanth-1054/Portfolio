import React, { useState, useEffect } from 'react';
import { Edit3, Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ 
  theme, 
  onToggleTheme, 
  onOpenReviewModal, 
  profileData 
}) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent background scrolling when mobile menu is open & listen for Escape
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#featured-case-study', id: 'featured-case-study', label: 'Featured Project' },
    { href: '#user-flow', id: 'user-flow', label: 'User Flow' },
    { href: '#process', id: 'process', label: 'Design Process' },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#skills', id: 'skills', label: 'Skills' },
    { href: '#contact', id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="navbar" id="navbar">
        <div className="container nav-container">
          <a href="#hero" className="brand-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="logo-badge">NJ</div>
            <div className="brand-details">
              <span className="brand-name">{profileData.name}</span>
              <span className="brand-title">{profileData.title}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
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

            <a href="#contact" className="btn-primary nav-cta-desktop">
              Let's Connect
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      <div 
        className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <aside className="mobile-nav-panel">
          <div className="mobile-nav-header">
            <div className="brand-logo">
              <div className="logo-badge">NJ</div>
              <div className="brand-details">
                <span className="brand-name">{profileData.name}</span>
                <span className="brand-title">{profileData.title}</span>
              </div>
            </div>
            <button 
              className="mobile-drawer-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-body">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} className="mobile-nav-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <a 
              href="#contact" 
              className="btn-primary mobile-cta-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Connect
              <ArrowRight size={16} />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
