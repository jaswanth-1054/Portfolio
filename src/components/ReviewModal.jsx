import React, { useState, useEffect } from 'react';

export default function ReviewModal({ isOpen, onClose, profileData, onSave, onReset }) {
  const [formData, setFormData] = useState(profileData);

  useEffect(() => {
    setFormData(profileData);
  }, [profileData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Review & Edit Portfolio Fields</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Update your personal details, email, tagline, or case study description below. Updates preview immediately.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="editName">Full Name</label>
                <input
                  type="text"
                  id="editName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="editTitle">Professional Title</label>
                <input
                  type="text"
                  id="editTitle"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="editEmail">Email Address</label>
                <input
                  type="email"
                  id="editEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="editLocation">Location / Availability</label>
                <input
                  type="text"
                  id="editLocation"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="editStatus">Status Badge</label>
              <input
                type="text"
                id="editStatus"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="editHeroSubtitle">Hero Introduction</label>
              <textarea
                id="editHeroSubtitle"
                name="heroSubtitle"
                value={formData.heroSubtitle}
                onChange={handleChange}
                rows={3}
                className="form-textarea"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="editProjectDesc">Smart Health Services Description</label>
              <textarea
                id="editProjectDesc"
                name="projectDesc"
                value={formData.projectDesc}
                onChange={handleChange}
                rows={4}
                className="form-textarea"
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                onReset();
                onClose();
              }}
            >
              Reset to Defaults
            </button>
            <button type="submit" className="btn-primary">
              Save & Apply Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
