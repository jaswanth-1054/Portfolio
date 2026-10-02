import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

export default function Toast({ toast }) {
  if (!toast.show) return null;

  return (
    <div className="toast">
      <span className="toast-icon">
        {toast.isSuccess ? <Check size={18} color="var(--success)" /> : <AlertTriangle size={18} color="#f59e0b" />}
      </span>
      <span className="toast-message">{toast.message}</span>
    </div>
  );
}
