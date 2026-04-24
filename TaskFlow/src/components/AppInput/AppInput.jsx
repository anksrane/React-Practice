// src/components/AppInput/AppInput.jsx
import React, { useState } from 'react';
import styles from './AppInput.module.css';

import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function AppInput({
  label,
  linkText,
  onLinkClick,

  error,
  helperText,

  leftIcon,
  rightIcon,

  type = 'text',
  placeholder = '',
  disabled = false,
  fullWidth = true,

  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  const inputType =
    isPassword && showPassword
      ? 'text'
      : type;

  const wrapperClasses = [
    styles.wrapper,
    fullWidth ? styles.fullWidth : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const fieldClasses = [
    styles.field,
    error ? styles.error : '',
    disabled ? styles.disabled : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      {(label || linkText) && (
        <div className={styles.topRow}>
          {label && (
            <label className={styles.label}>
              {label}
            </label>
          )}

          {linkText && (
            <button
              type="button"
              className={styles.link}
              onClick={onLinkClick}
            >
              {linkText}
            </button>
          )}
        </div>
      )}

      <div className={fieldClasses}>
        {leftIcon && (
          <span className={styles.iconLeft}>
            {leftIcon}
          </span>
        )}

        <input
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            className={styles.iconButton}
            onClick={() =>
              setShowPassword(!showPassword)
            }
            tabIndex={-1}
            aria-label={
              showPassword
                ? 'Hide password'
                : 'Show password'
            }
          >
            {showPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}
          </button>
        ) : (
          rightIcon && (
            <span className={styles.iconRight}>
              {rightIcon}
            </span>
          )
        )}
      </div>

      {(error || helperText) && (
        <p
          className={
            error
              ? styles.errorText
              : styles.helperText
          }
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
}