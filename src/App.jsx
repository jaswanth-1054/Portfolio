import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReviewBanner from './components/ReviewBanner';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import DesignProcess from './components/DesignProcess';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReviewModal from './components/ReviewModal';
import Toast from './components/Toast';

const DEFAULT_PROFILE = {
  name: 'Naga Jaswanth Bobba',
  title: 'UI/UX & Product Designer',
  email: 'nagajaswanth25@gmail.com',
  location: 'Open for Remote & On-site roles',
  status: 'Available for Product & UI/UX Design Opportunities',
  heroSubtitle:
    'I bridge complex user challenges and seamless interfaces through deep UX research, thoughtful information architecture, wireframing, and pixel-precise Figma prototypes.',
  projectDesc:
    'Smart Health Services is a desktop healthcare appointment booking experience designed to make it easier for users to discover medical services, find doctors, and schedule appointments through a clear and intuitive interface. I designed the complete user journey in Figma, starting from UX research and user flow, followed by wireframes, visual design, and high-fidelity desktop screens. The prototype allows users to explore healthcare services, browse doctors, view doctor details, select an appointment date and time, enter patient information, and receive an appointment confirmation.'
};

export default function App() {
  const [theme, setTheme] = useState('light');

  const [profileData, setProfileData] = useState(() => {
    const saved = localStorage.getItem('nj_portfolio_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.email === 'jaswanthbobba@example.com' || parsed.email === 'jaswanthbobba@gmail.com') {
          parsed.email = 'nagajaswanth25@gmail.com';
          localStorage.setItem('nj_portfolio_data', JSON.stringify({ ...DEFAULT_PROFILE, ...parsed }));
        }
        return { ...DEFAULT_PROFILE, ...parsed };
      } catch (err) {
        console.error('Error parsing stored portfolio data:', err);
      }
    }
    return DEFAULT_PROFILE;
  });

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', isSuccess: true });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.setAttribute('data-theme', theme);
    if (theme === 'light') {
      try {
        localStorage.setItem('nj_portfolio_theme', 'light');
      } catch (e) {}
    } else {
      try {
        localStorage.removeItem('nj_portfolio_theme');
      } catch (e) {}
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, isSuccess = true) => {
    setToast({ show: true, message, isSuccess });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleSaveProfile = (newData) => {
    setProfileData(newData);
    localStorage.setItem('nj_portfolio_data', JSON.stringify(newData));
    showToast('Profile information successfully updated!');
  };

  const handleResetProfile = () => {
    localStorage.removeItem('nj_portfolio_data');
    setProfileData(DEFAULT_PROFILE);
    showToast('Reset to default values.');
  };

  return (
    <>
      {/* Ambient Light Orbs */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
        profileData={profileData}
      />

      <main>
        <Hero profileData={profileData} />

        <ReviewBanner onOpenReviewModal={() => setIsReviewModalOpen(true)} />

        <FeaturedCaseStudy profileData={profileData} />

        <DesignProcess />

        <About profileData={profileData} />

        <Skills />

        <Contact profileData={profileData} onShowToast={showToast} />
      </main>

      <Footer profileData={profileData} />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        profileData={profileData}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />

      <Toast toast={toast} />
    </>
  );
}
