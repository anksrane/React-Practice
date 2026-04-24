// src/components/AppButton/AppButton.jsx
import React from 'react';
import styles from './AppButton.module.css';

export default function AppButton({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',

  iconLeft = null,
  iconRight = null,
  iconOnly = false,

  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth  : '',
    iconOnly ? styles.iconOnly : '',
    disabled ? styles.disabled : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}

      {!iconOnly && children}

      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
}