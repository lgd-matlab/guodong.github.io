import React from 'react';
import { useTheme } from '../hooks/useTheme';
import styles from './ThemeToggle.module.css';

/**
 * ThemeToggle Component
 *
 * Provides theme switching functionality for the academic website.
 * Supports light, dark, and system preference themes with smooth transitions.
 * Integrates with existing Jekyll theme system and maintains accessibility.
 *
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.config - Configuration options
 * @param {Function} props.onThemeChange - Callback function when theme changes
 */
const ThemeToggle = ({
  className = '',
  config = {},
  onThemeChange,
}) => {
  const {
    theme,
    systemPreference,
    isTransitioning,
    setTheme,
    toggleTheme,
    cycleTheme,
  } = useTheme(config);

  /**
   * Handle theme toggle click
   */
  const handleToggle = () => {
    toggleTheme();
    onThemeChange?.(theme);
  };

  /**
   * Get appropriate icon for current theme
   */
  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'system':
        return '🌓';
      default:
        return '🌓';
    }
  };

  /**
   * Get aria-label for accessibility
   */
  const getAriaLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark theme';
      case 'dark':
        return 'Switch to system theme';
      case 'system':
        return 'Switch to light theme';
      default:
        return 'Toggle theme';
    }
  };

  /**
   * Get descriptive text for screen readers
   */
  const getThemeDescription = () => {
    switch (theme) {
      case 'light':
        return 'Currently using light theme';
      case 'dark':
        return 'Currently using dark theme';
      case 'system':
        return `Currently using system preference (${systemPreference} theme)`;
      default:
        return 'Theme unknown';
    }
  };

  return (
    <div className={`${styles.themeToggle} ${className}`}>
      {/* Theme toggle button */}
      <button
        className={`${styles.toggleButton} ${isTransitioning ? styles.transitioning : ''}`}
        onClick={handleToggle}
        aria-label={getAriaLabel()}
        title={`Theme: ${getThemeDescription()}. Click to cycle through themes.`}
        disabled={isTransitioning}
        type="button"
      >
        <span
          className={styles.themeIcon}
          aria-hidden="true"
          role="img"
          aria-label={`${theme} theme icon`}
        >
          {getThemeIcon()}
        </span>
        <span className={styles.srOnly}>
          {getThemeDescription()}
        </span>
      </button>

      {/* Optional: Theme indicator for additional visibility */}
      {config.showIndicator && (
        <div
          className={`${styles.themeIndicator} ${styles[theme]}`}
          aria-hidden="true"
          title={`Current theme: ${theme}`}
        />
      )}

      {/* Optional: Theme text label */}
      {config.showLabel && (
        <span className={styles.themeLabel}>
          {theme === 'system' ? 'Auto' : theme.charAt(0).toUpperCase() + theme.slice(1)}
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;