import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact({ profileData, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Product Design',
    timeline: 'Immediately',
    subject: '',
    message: ''
  });

  const projectTypes = [
    'Full Product Design',
    'UI/UX Redesign',
    'Design System',
    'Healthcare / SaaS App',
    'Full-time Role'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please complete all required fields.', false);
      return;
    }

    onShowToast(`Thank you, ${formData.name}! Your inquiry regarding "${formData.projectType}" was received. Naga will be in touch shortly.`, true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      projectType: 'Full Product Design',
      timeline: 'Immediately',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project, freelance opportunity, or full-time UI/UX design role? Let's build something remarkable together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info">
            <div>
              <p className="contact-lead">
                I'm always open to discussing new product design opportunities, design system architecture, or exploring creative collaborations.
              </p>

              <div className="contact-channels">
                <a href={`mailto:${profileData.email}`} className="contact-channel-item">
                  <div className="channel-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="channel-title">Email</div>
                    <div className="channel-val">{profileData.email}</div>
                  </div>
                </a>

                <a
                  href="https://www.figma.com/design/4VwnEbzGMk1fjFOn6BfOTZ/Smart-Health-Services-%E2%80%94-Desktop-UI-UX?node-id=0-1&t=8KGBdmIA34YU60Xh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 24C5.79 24 4 22.21 4 20C4 17.79 5.79 16 8 16H12V20C12 22.21 10.21 24 8 24ZM4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12ZM4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4ZM12 0H16C18.21 0 20 1.79 20 4C20 6.21 18.21 8 16 8H12V0ZM20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8C18.21 8 20 9.79 20 12Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="channel-title">Figma Profile</div>
                    <div className="channel-val">Smart Health Services Project File</div>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div className="channel-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="channel-title">Location & Availability</div>
                    <div className="channel-val">{profileData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Designer Note</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                Looking for a customized case study presentation or detailed Figma component walkthrough? Send a message and I will reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row" style={{ marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label htmlFor="userName" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="userName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userEmail" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="userEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label">Project or Inquiry Type</label>
                <div className="project-type-pills">
                  {projectTypes.map((type) => (
                    <span
                      key={type}
                      className={`type-pill ${formData.projectType === type ? 'active' : ''}`}
                      onClick={() => handleTypeSelect(type)}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="form-row" style={{ marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label htmlFor="projectTimeline" className="form-label">Timeline / Start Date</label>
                  <select
                    id="projectTimeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Immediately">Immediately (Within 1-2 weeks)</option>
                    <option value="1 month">Within 1 month</option>
                    <option value="Exploring">Just exploring / Not urgent</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="projectSubject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="projectSubject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. Healthcare App Redesign"
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                <label htmlFor="userMessage" className="form-label">Message *</label>
                <textarea
                  id="userMessage"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell me about your project goals, scope, or design needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
