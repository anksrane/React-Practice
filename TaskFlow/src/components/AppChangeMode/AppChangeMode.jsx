// src/components/AppChangeMode/AppChangeMode.jsx
import React from 'react';
import styles from './AppChangeMode.module.css';

import {
  FiSun,
  FiMoon
} from 'react-icons/fi';

import {
  useTheme
} from '../../app/providers/ThemeProvider';

export default function AppChangeMode() {
  const {
    theme,
    toggleTheme
  } = useTheme();

  const isDark =
    theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggleBtn}
      aria-label="Toggle Theme"
      title="Change Mode"
    >
      {isDark ? (
        <FiSun />
      ) : (
        <FiMoon />
      )}
    </button>
  );
}