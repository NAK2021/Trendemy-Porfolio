import React from 'react';
import styles from './ToastMessage.module.css';

// ToastMessage component definition
export default function ToastMessage({ message, type, visible, onClose }) {
  // Define icon classes based on toast type
  const iconClass = {
    Success: 'fa-check-circle',
    Error: 'fa-exclamation-circle',
  };

  return (
    // Main toast container with conditional classes for visibility and type
    <div className={`${styles.toast} ${visible ? styles.toast_visible : ''} ${styles[`toast_${type}`]}`}>
      {/* Icon based on the toast type */}
      <i className={`fas ${iconClass[type]} ${styles.toast_icon}`}></i>
      {/* Message content */}
      <div className={styles.toast_message}>{message}</div>
      {/* Close button */}
      <div className={styles.toast_close} onClick={onClose}>
        &times;
      </div>
    </div>
  );
}
