import React, { useState } from 'react';
import { 
  Monitor, ArrowRight, ArrowLeft, CheckCircle2, Search, Calendar, 
  UserCheck, ShieldCheck, Star, Clock, MapPin, Phone, Award,
  Check, ChevronRight, FileText, Download, Sparkles
} from 'lucide-react';

export default function FeaturedCaseStudy({ profileData }) {
  const [activeTab, setActiveTab] = useState('screen-1');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [selectedDate, setSelectedDate] = useState('1');
  const [consultType, setConsultType] = useState('in-clinic');

  const screens = [
    { id: 'screen-1', label: '01. Service Discovery', path: 'find-doctors' },
    { id: 'screen-2', label: '02. Doctor Directory', path: 'cardiologists' },
    { id: 'screen-3', label: '03. Doctor Profile', path: 'dr-robert-chen' },
    { id: 'screen-4', label: '04. Slot Scheduling', path: 'schedule-time' },
    { id: 'screen-5', label: '05. Patient & Confirmation', path: 'booking-receipt' }
  ];

  const currentScreenIndex = screens.findIndex(s => s.id === activeTab);

  const handleNextScreen = () => {
    if (currentScreenIndex < screens.length - 1) {
      setActiveTab(screens[currentScreenIndex + 1].id);
    }
  };

  const handlePrevScreen = () => {
    if (currentScreenIndex > 0) {
      setActiveTab(screens[currentScreenIndex - 1].id);
    }
  };

  return (
    <section className="section" id="featured-case-study">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Flagship Case Study</span>
          <h2 className="section-title">Smart Health Services</h2>
          <p className="section-subtitle">
            Desktop Healthcare Appointment Booking System — End-to-End User Experience & Figma Design System
          </p>
        </div>

        <div className="case-study-card">
          {/* Project Hero Banner */}
          <div className="case-study-hero">
            <div className="project-meta-pills">
              <span className="meta-pill">Desktop Web App</span>
              <span className="meta-pill">UX Research</span>
              <span className="meta-pill">Information Architecture</span>
              <span className="meta-pill">Figma Design System</span>
              <span className="meta-pill">WCAG AA Compliant</span>
            </div>

            <h3 className="project-title">Smart Health Services — Healthcare Appointment Booking</h3>

            <p className="project-description-lead">
              {profileData.projectDesc}
            </p>

            <div className="project-action-bar">
              <a
                href="https://www.figma.com/design/4VwnEbzGMk1fjFOn6BfOTZ/Smart-Health-Services-%E2%80%94-Desktop-UI-UX?node-id=0-1&t=8KGBdmIA34YU60Xh-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-figma"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 24C5.79 24 4 22.21 4 20C4 17.79 5.79 16 8 16H12V20C12 22.21 10.21 24 8 24ZM4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12ZM4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4ZM12 0H16C18.21 0 20 1.79 20 4C20 6.21 18.21 8 16 8H12V0ZM20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8C18.21 8 20 9.79 20 12Z" />
                </svg>
                Inspect Live in Figma
              </a>

              <a href="#prototype-preview" className="btn-secondary">
                Explore Screen Prototype
              </a>
            </div>
          </div>

          {/* Interactive Screen Mockups & Browser Frame */}
          <div className="interactive-mockup-section" id="prototype-preview">
            <div className="mockup-controls-header">
              <div className="mockup-title">
                <Monitor size={20} color="var(--health-light)" />
                Interactive Desktop Flow Preview
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, marginLeft: '0.5rem' }}>
                  (Step {currentScreenIndex + 1} of {screens.length})
                </span>
              </div>

              {/* Screen Selector Tabs */}
              <div className="screen-tabs" role="tablist">
                {screens.map((screen) => (
                  <button
                    key={screen.id}
                    className={`screen-tab-btn ${activeTab === screen.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(screen.id)}
                  >
                    {screen.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Browser Viewport Container */}
            <div className="mockup-viewport">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>

                <div className="mockup-nav-arrows">
                  <button 
                    className="mockup-arrow-btn" 
                    onClick={handlePrevScreen}
                    disabled={currentScreenIndex === 0}
                    style={{ opacity: currentScreenIndex === 0 ? 0.4 : 1 }}
                  >
                    <ArrowLeft size={12} /> Prev
                  </button>
                  <button 
                    className="mockup-arrow-btn" 
                    onClick={handleNextScreen}
                    disabled={currentScreenIndex === screens.length - 1}
                    style={{ opacity: currentScreenIndex === screens.length - 1 ? 0.4 : 1 }}
                  >
                    Next <ArrowRight size={12} />
                  </button>
                </div>

                <div className="browser-url-pill">
                  <ShieldCheck size={13} color="#10b981" />
                  https://<span>smarthealth.io/{screens[currentScreenIndex].path}</span>
                </div>
              </div>

              <div className="screen-content-area">
                {/* Screen 1: Discovery */}
                {activeTab === 'screen-1' && (
                  <div className="screen-mockup-slide">
                    <div style={{ background: '#0e1524', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {/* Sub-Navbar in App */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                          <div style={{ background: 'linear-gradient(135deg, #0ea5e9, #10b981)', color: '#fff', fontWeight: 900, width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>+</div>
                          <div>
                            <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>SmartHealth</span>
                            <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block' }}>Healthcare Services Portal</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: '#94a3b8', alignItems: 'center' }}>
                          <span style={{ color: '#38bdf8', fontWeight: 600 }}>Find Care</span>
                          <span>Medical Specialties</span>
                          <span>Clinics</span>
                          <span>My Appointments</span>
                          <span style={{ background: 'rgba(255,255,255,0.08)', padding: '5px 12px', borderRadius: '20px', color: '#fff', fontSize: '0.75rem' }}>NYC, Metro Area ▾</span>
                        </div>
                      </div>

                      {/* Hero Search Banner */}
                      <div style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.25) 0%, rgba(14,21,36,0.6) 80%)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '14px', padding: '2.5rem 2rem', textAlign: 'center', marginBottom: '2rem' }}>
                        <span style={{ background: 'rgba(56,189,248,0.18)', color: '#38bdf8', fontSize: '0.75rem', padding: '4px 12px', borderRadius: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          ✦ Instant Patient Care System
                        </span>
                        <h4 style={{ fontSize: '2rem', margin: '0.85rem 0 0.5rem', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                          Find & Book Verified Specialists Near You
                        </h4>
                        <p style={{ color: '#94a3b8', fontSize: '0.92rem', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
                          Browse accredited doctors, inspect detailed clinic profiles, check transparent fees, and confirm appointments in under 3 minutes.
                        </p>

                        {/* Search Input Bar */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 120px', maxWidth: '720px', margin: '0 auto', background: '#162032', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '40px', padding: '6px 8px', gap: '0.5rem', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', paddingLeft: '1rem' }}>
                            <Search size={16} color="#38bdf8" />
                            <input type="text" readOnly defaultValue="Cardiology, Heart Specialist, ECG..." style={{ background: 'transparent', border: 'none', color: '#cbd5e1', width: '100%', outline: 'none', fontSize: '0.825rem' }} />
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '0.75rem' }}>
                            <MapPin size={15} color="#94a3b8" />
                            <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Manhattan, NY</span>
                          </div>
                          <button onClick={() => setActiveTab('screen-2')} style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#fff', border: 'none', borderRadius: '30px', padding: '10px 0', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', boxShadow: '0 2px 10px rgba(14,165,233,0.4)' }}>
                            Explore Doctors &rarr;
                          </button>
                        </div>
                      </div>

                      {/* Department Quick Cards */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top Medical Departments</span>
                          <span style={{ fontSize: '0.75rem', color: '#38bdf8', cursor: 'pointer' }}>View All 18 Specialties &rarr;</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                          <div onClick={() => setActiveTab('screen-2')} style={{ background: '#162032', border: '1px solid rgba(56,189,248,0.25)', padding: '1.1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', transition: 'transform 0.2s' }}>
                            <span style={{ background: 'rgba(14,165,233,0.18)', color: '#38bdf8', width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🫀</span>
                            <div>
                              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>Cardiology</div>
                              <div style={{ color: '#38bdf8', fontSize: '0.72rem', fontWeight: 600 }}>24 Active Doctors</div>
                            </div>
                          </div>
                          <div style={{ background: '#162032', border: '1px solid rgba(255,255,255,0.06)', padding: '1.1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <span style={{ background: 'rgba(16,185,129,0.18)', color: '#34d399', width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🧠</span>
                            <div>
                              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>Neurology</div>
                              <div style={{ color: '#64748b', fontSize: '0.72rem' }}>16 Active Doctors</div>
                            </div>
                          </div>
                          <div style={{ background: '#162032', border: '1px solid rgba(255,255,255,0.06)', padding: '1.1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <span style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24', width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🦷</span>
                            <div>
                              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>Dental Surgery</div>
                              <div style={{ color: '#64748b', fontSize: '0.72rem' }}>32 Active Doctors</div>
                            </div>
                          </div>
                          <div style={{ background: '#162032', border: '1px solid rgba(255,255,255,0.06)', padding: '1.1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <span style={{ background: 'rgba(168,85,247,0.18)', color: '#c084fc', width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🩺</span>
                            <div>
                              <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>Pediatrics</div>
                              <div style={{ color: '#64748b', fontSize: '0.72rem' }}>28 Active Doctors</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Screen 2: Doctor Directory */}
                {activeTab === 'screen-2' && (
                  <div className="screen-mockup-slide">
                    <div style={{ background: '#0e1524', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>Cardiology Specialists Directory</h4>
                            <span style={{ background: 'rgba(14,165,233,0.15)', color: '#38bdf8', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>24 Doctors Found</span>
                          </div>
                          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '2px' }}>Showing verified cardiologists accepting new patients in Manhattan</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.6rem' }}>
                          <span style={{ background: '#162032', color: '#cbd5e1', fontSize: '0.75rem', padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>Sort: Highest Rated ★</span>
                          <span style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', fontSize: '0.75rem', padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(16,185,129,0.3)', fontWeight: 600 }}>Filter: Available Today</span>
                        </div>
                      </div>

                      {/* Doctor Cards Grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                        {/* Doctor 1 (Featured Sample Doctor in Case Study) */}
                        <div style={{ background: '#162032', border: '1px solid rgba(56,189,248,0.35)', borderRadius: '12px', padding: '1.4rem', display: 'flex', gap: '1.25rem', position: 'relative', boxShadow: '0 8px 25px rgba(0,0,0,0.3)' }}>
                          <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(16,185,129,0.18)', color: '#10b981', fontSize: '0.7rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span> NEXT SLOT: 10:30 AM
                          </span>

                          <div style={{ width: '75px', height: '75px', borderRadius: '12px', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.4rem', flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)' }}>
                            👨‍⚕️
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>Dr. Robert Chen, MD</div>
                              <Award size={15} color="#38bdf8" />
                            </div>
                            <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600, marginTop: '2px' }}>Senior Cardiologist • 14 Yrs Clinical Exp.</div>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem', margin: '0.4rem 0' }}>St. Jude Heart Institute & Medical Center</div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.6rem 0', fontSize: '0.75rem' }}>
                              <span style={{ color: '#fbbf24', fontWeight: 700 }}>★ 4.9 (248 reviews)</span>
                              <span style={{ color: '#cbd5e1' }}>Fee: <strong>$85</strong> / visit</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>✓ Insurance Verified</span>
                              <button onClick={() => setActiveTab('screen-3')} style={{ background: '#0ea5e9', color: '#fff', fontSize: '0.78rem', fontWeight: 700, padding: '7px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 2px 10px rgba(14,165,233,0.3)' }}>
                                View Profile & Schedule &rarr;
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Doctor 2 */}
                        <div style={{ background: '#162032', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.4rem', display: 'flex', gap: '1.25rem' }}>
                          <div style={{ width: '75px', height: '75px', borderRadius: '12px', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.4rem', flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)' }}>
                            👩‍⚕️
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>Dr. Sarah Jenkins, MD</div>
                            <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600, marginTop: '2px' }}>Cardiovascular Specialist • 11 Yrs Exp.</div>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem', margin: '0.4rem 0' }}>City Wellness Pavilion & Clinic</div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.6rem 0', fontSize: '0.75rem' }}>
                              <span style={{ color: '#fbbf24', fontWeight: 700 }}>★ 4.8 (192 reviews)</span>
                              <span style={{ color: '#cbd5e1' }}>Fee: <strong>$95</strong> / visit</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Tomorrow, 02:00 PM</span>
                              <button style={{ background: '#1e293b', color: '#cbd5e1', fontSize: '0.78rem', fontWeight: 600, padding: '7px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Screen 3: Doctor Profile */}
                {activeTab === 'screen-3' && (
                  <div className="screen-mockup-slide">
                    <div style={{ background: '#0e1524', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: '2rem' }}>
                        {/* Sidebar Credential Card */}
                        <div style={{ background: '#162032', borderRadius: '12px', padding: '1.75rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
                          <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: '#1e293b', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', border: '2px solid #38bdf8' }}>
                            👨‍⚕️
                          </div>
                          <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>Dr. Robert Chen</h4>
                          <div style={{ color: '#38bdf8', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.85rem' }}>Cardiology Specialist</div>
                          
                          <div style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.25)', borderRadius: '8px', padding: '10px', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '1.25rem' }}>
                            Consultation Fee: <strong style={{ color: '#38bdf8', fontSize: '1rem' }}>$85</strong>
                          </div>

                          <div style={{ textAlign: 'left', fontSize: '0.78rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <MapPin size={14} color="#38bdf8" /> Suite 402, Metro Health Plaza
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <Award size={14} color="#38bdf8" /> Johns Hopkins Medical School
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <Clock size={14} color="#38bdf8" /> 14 Years Clinical Practice
                            </div>
                          </div>
                        </div>

                        {/* Main Details Body */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                          <div style={{ background: '#162032', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <h5 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.6rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>About Dr. Robert Chen</h5>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>
                              Dr. Robert Chen is a double board-certified Cardiologist specializing in preventive cardiology, coronary artery disease management, advanced echocardiography, and vascular diagnostic care. He takes an evidence-backed, empathetic approach to each patient consultation.
                            </p>
                          </div>

                          <div style={{ background: '#162032', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <h5 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>Clinical Expertise & Procedures</h5>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                              <span style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', fontSize: '0.78rem', padding: '5px 12px', borderRadius: '6px' }}>Electrocardiogram (ECG)</span>
                              <span style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', fontSize: '0.78rem', padding: '5px 12px', borderRadius: '6px' }}>Hypertension Management</span>
                              <span style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', fontSize: '0.78rem', padding: '5px 12px', borderRadius: '6px' }}>Holter Monitoring</span>
                              <span style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', fontSize: '0.78rem', padding: '5px 12px', borderRadius: '6px' }}>Preventive Heart Screening</span>
                            </div>
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>✓ Next slot: Oct 1, 10:30 AM</span>
                            <button onClick={() => setActiveTab('screen-4')} style={{ background: '#0ea5e9', color: '#fff', border: 'none', padding: '11px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(14,165,233,0.35)' }}>
                              Select Appointment Slot &rarr;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Screen 4: Slot Scheduling */}
                {activeTab === 'screen-4' && (
                  <div className="screen-mockup-slide">
                    <div style={{ background: '#0e1524', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                          <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>Select Consultation Date & Time Slot</h4>
                          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '2px' }}>Consulting with Dr. Robert Chen (Cardiology)</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button 
                            onClick={() => setConsultType('in-clinic')}
                            style={{ background: consultType === 'in-clinic' ? '#0ea5e9' : '#162032', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                          >
                            In-Clinic Visit
                          </button>
                          <button 
                            onClick={() => setConsultType('video')}
                            style={{ background: consultType === 'video' ? '#0ea5e9' : '#162032', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                          >
                            Telehealth Video
                          </button>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
                        {/* Interactive Calendar Matrix */}
                        <div style={{ background: '#162032', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>
                            <span>October 2026</span>
                            <span style={{ color: '#38bdf8', fontSize: '0.75rem', cursor: 'pointer' }}>Today</span>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', fontSize: '0.78rem' }}>
                            <span style={{ color: '#64748b', fontWeight: 700 }}>M</span>
                            <span style={{ color: '#64748b', fontWeight: 700 }}>T</span>
                            <span style={{ color: '#64748b', fontWeight: 700 }}>W</span>
                            <span style={{ color: '#64748b', fontWeight: 700 }}>T</span>
                            <span style={{ color: '#64748b', fontWeight: 700 }}>F</span>
                            <span style={{ color: '#64748b', fontWeight: 700 }}>S</span>
                            <span style={{ color: '#64748b', fontWeight: 700 }}>S</span>

                            <span style={{ color: '#475569', padding: '8px' }}>28</span>
                            <span style={{ color: '#475569', padding: '8px' }}>29</span>
                            <span style={{ color: '#475569', padding: '8px' }}>30</span>
                            
                            {['1', '2', '3', '4'].map((day) => (
                              <span
                                key={day}
                                onClick={() => setSelectedDate(day)}
                                style={{
                                  padding: '8px',
                                  borderRadius: '8px',
                                  background: selectedDate === day ? '#0ea5e9' : 'rgba(255,255,255,0.05)',
                                  color: selectedDate === day ? '#fff' : '#cbd5e1',
                                  fontWeight: selectedDate === day ? 800 : 500,
                                  cursor: 'pointer',
                                  border: selectedDate === day ? '1px solid #38bdf8' : 'none'
                                }}
                              >
                                {day}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Slot Grid */}
                        <div style={{ background: '#162032', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                          <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>Morning Available Slots</div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem', marginBottom: '1.25rem' }}>
                            {['09:00 AM', '10:30 AM'].map((slot) => (
                              <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                style={{
                                  padding: '10px',
                                  borderRadius: '8px',
                                  border: selectedSlot === slot ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.08)',
                                  background: selectedSlot === slot ? 'rgba(14,165,233,0.25)' : 'rgba(255,255,255,0.04)',
                                  color: selectedSlot === slot ? '#38bdf8' : '#cbd5e1',
                                  fontWeight: selectedSlot === slot ? 800 : 500,
                                  fontSize: '0.8rem',
                                  cursor: 'pointer'
                                }}
                              >
                                {slot} {selectedSlot === slot && '✓'}
                              </button>
                            ))}
                          </div>

                          <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>Afternoon Available Slots</div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem', marginBottom: '1.5rem' }}>
                            {['02:00 PM', '04:30 PM'].map((slot) => (
                              <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                style={{
                                  padding: '10px',
                                  borderRadius: '8px',
                                  border: selectedSlot === slot ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.08)',
                                  background: selectedSlot === slot ? 'rgba(14,165,233,0.25)' : 'rgba(255,255,255,0.04)',
                                  color: selectedSlot === slot ? '#38bdf8' : '#cbd5e1',
                                  fontWeight: selectedSlot === slot ? 800 : 500,
                                  fontSize: '0.8rem',
                                  cursor: 'pointer'
                                }}
                              >
                                {slot} {selectedSlot === slot && '✓'}
                              </button>
                            ))}
                          </div>

                          <button onClick={() => setActiveTab('screen-5')} style={{ width: '100%', background: '#0ea5e9', color: '#fff', border: 'none', padding: '10px 0', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(14,165,233,0.35)' }}>
                            Confirm Oct {selectedDate}, {selectedSlot} & Continue &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Screen 5: Patient Info & Confirmation */}
                {activeTab === 'screen-5' && (
                  <div className="screen-mockup-slide">
                    <div style={{ background: '#0e1524', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '2rem', alignItems: 'start' }}>
                        {/* Patient Summary Card */}
                        <div style={{ background: '#162032', borderRadius: '12px', padding: '1.6rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                          <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>Patient Booking Details</h4>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.825rem' }}>
                            <div>
                              <label style={{ color: '#94a3b8', display: 'block', marginBottom: '4px', fontSize: '0.75rem' }}>Full Patient Legal Name</label>
                              <div style={{ background: '#0a0f1a', padding: '9px 14px', borderRadius: '8px', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>Jaswanth Bobba</div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                              <div>
                                <label style={{ color: '#94a3b8', display: 'block', marginBottom: '4px', fontSize: '0.75rem' }}>Age / Biological Gender</label>
                                <div style={{ background: '#0a0f1a', padding: '9px 14px', borderRadius: '8px', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>24 / Male</div>
                              </div>
                              <div>
                                <label style={{ color: '#94a3b8', display: 'block', marginBottom: '4px', fontSize: '0.75rem' }}>Contact Phone</label>
                                <div style={{ background: '#0a0f1a', padding: '9px 14px', borderRadius: '8px', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>+1 (555) 019-2834</div>
                              </div>
                            </div>

                            <div>
                              <label style={{ color: '#94a3b8', display: 'block', marginBottom: '4px', fontSize: '0.75rem' }}>Primary Consultation Reason</label>
                              <div style={{ background: '#0a0f1a', padding: '9px 14px', borderRadius: '8px', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)' }}>Routine Cardiovascular Health Checkup & ECG Evaluation</div>
                            </div>
                          </div>
                        </div>

                        {/* Confirmed Receipt Ticket */}
                        <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.16) 0%, rgba(14,165,233,0.12) 100%)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: '14px', padding: '1.75rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                          <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.85rem', fontSize: '1.6rem', fontWeight: 'bold' }}>
                            ✓
                          </div>
                          <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>Appointment Confirmed!</h4>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '1.25rem' }}>Booking Identifier: #SHS-2026-9812</p>

                          <div style={{ background: '#0a0f1a', borderRadius: '10px', padding: '1.1rem', textAlign: 'left', fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <div><strong>Specialist:</strong> Dr. Robert Chen (Cardiology)</div>
                            <div><strong>Date & Time:</strong> Oct {selectedDate}, 2026 • {selectedSlot}</div>
                            <div><strong>Consultation:</strong> In-Clinic ($85)</div>
                            <div><strong>Status:</strong> <span style={{ color: '#10b981', fontWeight: 800 }}>● Confirmed & Verified</span></div>
                          </div>

                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{ flex: 1, background: '#10b981', color: '#fff', border: 'none', padding: '9px 0', borderRadius: '8px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer' }}>
                              Add to Google Calendar
                            </button>
                            <button onClick={() => setActiveTab('screen-1')} style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '9px 14px', borderRadius: '8px', fontWeight: 600, fontSize: '0.78rem', cursor: 'pointer' }}>
                              Restart Flow
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Deep-Dive Case Study Grid */}
          <div className="case-study-details">
            <div className="detail-block">
              <div className="detail-icon">🎯</div>
              <h4 className="detail-title">The Challenge & Objective</h4>
              <p className="detail-text">
                Patients seeking healthcare services frequently encounter confusing directories, hidden fee structures, and fragmented booking steps. The objective of Smart Health Services was to eliminate cognitive load, elevate trust through verified doctor credentials, and deliver an effortless booking journey in under 3 minutes.
              </p>
            </div>

            <div className="detail-block">
              <div className="detail-icon">⚡</div>
              <h4 className="detail-title">Key UX Solutions</h4>
              <p className="detail-text">
                Structured a clear desktop booking flow with instant specialty search, real-time date and slot availability, transparent consultation pricing, and an automated post-booking digital confirmation receipt with calendar integration.
              </p>
            </div>

            {/* User Flow Section */}
            <div className="flow-diagram-container" id="user-flow">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 className="detail-title" style={{ marginBottom: '0.25rem' }}>End-to-End User Booking Flow</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>6-step interaction model wireframed and user-tested in Figma.</p>
                </div>
                <span className="meta-pill">Happy Path Journey</span>
              </div>

              <div className="flow-steps-grid">
                <div className="flow-step-card" onClick={() => setActiveTab('screen-1')}>
                  <div className="flow-index">STEP 01</div>
                  <div className="flow-name">Service Discovery</div>
                  <div className="flow-desc">Search specialties, clinics, or symptoms</div>
                </div>
                <div className="flow-step-card" onClick={() => setActiveTab('screen-2')}>
                  <div className="flow-index">STEP 02</div>
                  <div className="flow-name">Browse Doctors</div>
                  <div className="flow-desc">Filter by ratings, fee, and availability</div>
                </div>
                <div className="flow-step-card" onClick={() => setActiveTab('screen-3')}>
                  <div className="flow-index">STEP 03</div>
                  <div className="flow-name">Doctor Profile</div>
                  <div className="flow-desc">Review credentials, bio, and hospital</div>
                </div>
                <div className="flow-step-card" onClick={() => setActiveTab('screen-4')}>
                  <div className="flow-index">STEP 04</div>
                  <div className="flow-name">Slot Selection</div>
                  <div className="flow-desc">Pick date and preferred consultation time</div>
                </div>
                <div className="flow-step-card" onClick={() => setActiveTab('screen-5')}>
                  <div className="flow-index">STEP 05</div>
                  <div className="flow-name">Patient Info</div>
                  <div className="flow-desc">Input patient notes and insurance info</div>
                </div>
                <div className="flow-step-card" onClick={() => setActiveTab('screen-5')}>
                  <div className="flow-index">STEP 06</div>
                  <div className="flow-name">Confirmation</div>
                  <div className="flow-desc">Instant booking ID & calendar sync</div>
                </div>
              </div>
            </div>

            {/* Design System Bento Grid */}
            <div className="design-system-bento">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 className="detail-title" style={{ marginBottom: '0.25rem' }}>Figma Design System Tokens</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Scalable Auto-Layout components, color variables, and typography tokens.</p>
                </div>
                <span className="meta-pill">Design Tokens</span>
              </div>

              <div className="tokens-grid">
                <div className="token-card">
                  <div className="token-swatch" style={{ background: '#0EA5E9' }}></div>
                  <div className="token-name">Primary Health Cyan</div>
                  <div className="token-code">#0EA5E9 • Brand Accent</div>
                </div>
                <div className="token-card">
                  <div className="token-swatch" style={{ background: '#10B981' }}></div>
                  <div className="token-name">Medical Success Green</div>
                  <div className="token-code">#10B981 • Confirmed Status</div>
                </div>
                <div className="token-card">
                  <div className="token-swatch" style={{ background: '#6366F1' }}></div>
                  <div className="token-name">Interactive Violet</div>
                  <div className="token-code">#6366F1 • CTA Focus</div>
                </div>
                <div className="token-card">
                  <div className="token-swatch" style={{ background: '#0E1524' }}></div>
                  <div className="token-name">Deep Canvas Dark</div>
                  <div className="token-code">#0E1524 • Background</div>
                </div>
              </div>
            </div>

            <div className="detail-block">
              <div className="detail-icon">📐</div>
              <h4 className="detail-title">Information Architecture</h4>
              <p className="detail-text">
                Every screen maintains consistent navigational anchor points. Medical specialties are categorized into digestible clusters, while doctor cards emphasize instant decision-making triggers: rating, proximity, consultation fee, and next available appointment slot.
              </p>
            </div>

            <div className="detail-block">
              <div className="detail-icon">🎨</div>
              <h4 className="detail-title">Accessibility & Component States</h4>
              <p className="detail-text">
                Built adhering to WCAG 2.1 AA contrast thresholds. Every button, input form, and slot pill contains complete interactive states: default, hover, focused, selected, disabled, and loading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
