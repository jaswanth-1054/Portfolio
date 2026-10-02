import React from 'react';
import { Edit3 } from 'lucide-react';

export default function ReviewBanner({ onOpenReviewModal }) {
  return (
    <div className="container">
      <div className="review-panel-banner">
        <div className="review-banner-text">
          <h4>Personalization & Review Assistant</h4>
          <p>Easily review and modify your name, title, bio, contact details, or case study copy directly on this page.</p>
        </div>
        <button className="btn-secondary" onClick={onOpenReviewModal}>
          <Edit3 size={16} />
          Review & Edit Fields
        </button>
      </div>
    </div>
  );
}
