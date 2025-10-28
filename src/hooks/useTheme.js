import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Available theme options
 */
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

/**
 * Default theme configuration
 */
const DEFAULT_CONFIG = {
  defaultTheme: THEMES.SYSTEM,
  storageKey: 'academic-website-theme',
  enableSystemDetection: true,
  enablePersistence: true,
  transitionDuration: 300,
  enablePlotlyIntegration: false,
};

/**
 * Detect system color scheme preference
 * @returns {string} 'light', 'dark', or 'unknown'
 */
const detectSystemPreference = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'unknown';
  }

  try {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.media !== 'not all') {
      return mediaQuery.matches ? 'dark' : 'light';
    }
  } catch (error) {
    console.warn('Error detecting system theme preference:', error);
    return 'unknown';
  }

  return 'unknown';
};

/**
 * Get system preference with listener support
 * @returns {Object} { preference, addListener, removeListener }
 */
const getSystemPreference = () => {
  let preference = detectSystemPreference();
  const listeners = [];

  const updatePreference = () => {
    preference = detectSystemPreference();
    listeners.forEach(listener => listener(preference));
  };

  if (typeof window !== 'undefined' && window.matchMedia) {
    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.addListener) {
        mediaQuery.addListener(updatePreference);
      } else if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', updatePreference);
      }

      return {
        preference,
        addListener: (callback) => {
          listeners.push(callback);
          return () => {
            const index = listeners.indexOf(callback);
            if (index > -1) {
              listeners.splice(index, 1);
            }
          };
        },
        removeListener: (callback) => {
          const index = listeners.indexOf(callback);
          if (index > -1) {
            listeners.splice(index, 1);
          }
        },
      };
    } catch (error) {
      console.warn('Error setting up system preference listener:', error);
    }
  }

  return {
    preference,
    addListener: () => {},
    removeListener: () => {},
  };
};

/**
 * Load theme from localStorage
 * @param {string} storageKey - Storage key
 * @returns {string|null} Stored theme or null
 */
const loadStoredTheme = (storageKey) => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored;
  } catch (error) {
    console.warn('Error loading theme from localStorage:', error);
    return null;
  }
};

/**
 * Save theme to localStorage
 * @param {string} storageKey - Storage key
 * @param {string} theme - Theme to save
 */
const saveStoredTheme = (storageKey, theme) => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, theme);
  } catch (error) {
    console.warn('Error saving theme to localStorage:', error);
  }
};

/**
 * Apply theme to document
 * @param {string} theme - Theme to apply
 * @param {boolean} isTransitioning - Whether to show transition
 */
const applyThemeToDocument = (theme, isTransitioning = false) => {
  if (typeof document === 'undefined') {
    return;
  }

  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  try {
    // Set data-theme attribute for CSS styling
    htmlElement.setAttribute('data-theme', theme);

    // Set theme class for fallback styling
    htmlElement.className = htmlElement.className
      .replace(/theme-\w+/g, '')
      .replace(/^\s+|\s+$/g, '')
      .split(' ')
      .filter(Boolean)
      .concat(theme !== 'system' ? `theme-${theme}` : '')
      .join(' ');

    // Add transition class for smooth theme changes
    if (isTransitioning) {
      htmlElement.classList.add('theme-transitioning');

      // Remove transition class after animation completes
      setTimeout(() => {
        htmlElement.classList.remove('theme-transitioning');
      }, 300); // Match CSS transition duration
    }

    // Update body class for additional styling
    if (bodyElement) {
      bodyElement.classList.remove('theme-light', 'theme-dark', 'theme-system');
      if (theme !== 'system') {
        bodyElement.classList.add(`theme-${theme}`);
      }
    }

    // Trigger custom event for external listeners
    const event = new CustomEvent('themechange', {
      detail: { theme, isTransitioning },
    });
    window.dispatchEvent(event);

  } catch (error) {
    console.warn('Error applying theme to document:', error);
  }
};

/**
 * Update Plotly theme if available
 * @param {string} theme - Current theme
 */
const updatePlotlyTheme = (theme) => {
  if (typeof window === 'undefined' || !window.Plotly) {
    return;
  }

  try {
    // Look for existing Plotly charts and update their theme
    const plots = document.querySelectorAll('.plotly-graph-div');

    plots.forEach(plot => {
      if (plot._fullLayout && window.Plotly.relayout) {
        // Update Plotly layout colors based on theme
        const layout = { ...plot._fullLayout };

        if (theme === 'dark') {
          layout.paper_bgcolor = '#2d2d2d';
          layout.plot_bgcolor = '#3d3d3d';
          layout.font = { color: '#f0f0f0' };
          layout.xaxis = {
            ...layout.xaxis,
            gridcolor: '#444444',
            tickfont: { color: '#f0f0f0' },
            titlefont: { color: '#f0f0f0' }
          };
          layout.yaxis = {
            ...layout.yaxis,
            gridcolor: '#444444',
            tickfont: { color: '#f0f0f0' },
            titlefont: { color: '#f0f0f0' }
          };
        } else {
          layout.paper_bgcolor = '#ffffff';
          layout.plot_bgcolor = '#ffffff';
          layout.font = { color: '#333333' };
          layout.xaxis = {
            ...layout.xaxis,
            gridcolor: '#e0e0e0',
            tickfont: { color: '#333333' },
            titlefont: { color: '#333333' }
          };
          layout.yaxis = {
            ...layout.yaxis,
            gridcolor: '#e0e0e0',
            tickfont: { color: '#333333' },
            titlefont: { color: '#333333' }
          };
        }

        window.Plotly.relayout(plot, layout);
      }
    });

  } catch (error) {
    console.warn('Error updating Plotly theme:', error);
  }
};

/**
 * Custom hook for theme management
 *
 * @param {Object} config - Configuration options
 * @returns {Object} Theme state and functions
 */
export const useTheme = (config = {}) => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const { storageKey, enableSystemDetection, enablePersistence, enablePlotlyIntegration } = finalConfig;

  // State management
  const [theme, setThemeState] = useState(() => {
    // Priority: stored > system > default
    if (enablePersistence) {
      const stored = loadStoredTheme(storageKey);
      if (stored && Object.values(THEMES).includes(stored)) {
        return stored;
      }
    }

    if (enableSystemDetection) {
      const systemPreference = detectSystemPreference();
      if (systemPreference !== 'unknown') {
        return systemPreference;
      }
    }

    return finalConfig.defaultTheme;
  });

  const [systemPreference, setSystemPreference] = useState(() => detectSystemPreference());
  const [isTransitioning, setIsTransitioning] = useState(false);

  // System preference listener
  const systemPreferenceRef = useRef(null);

  // Initialize system preference detection
  useEffect(() => {
    if (enableSystemDetection) {
      const system = getSystemPreference();
      setSystemPreference(system.preference);
      systemPreferenceRef.current = system;

      const removeListener = system.addListener((newPreference) => {
        setSystemPreference(newPreference);

        // Auto-switch to system theme if currently set to system
        if (theme === THEMES.SYSTEM) {
          applyThemeToDocument(THEMES.SYSTEM);
          updatePlotlyTheme(THEMES.SYSTEM);
        }
      });

      return () => {
        removeListener();
      };
    }
  }, [enableSystemDetection, theme]);

  // Apply theme to document when it changes
  useEffect(() => {
    applyThemeToDocument(theme, isTransitioning);

    // Update Plotly theme if enabled
    if (enablePlotlyIntegration) {
      updatePlotlyTheme(theme);
    }

    // Update data attribute for CSS custom properties
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--current-theme', theme);
    }

  }, [theme, isTransitioning, enablePlotlyIntegration]);

  // Persist theme when enabled
  useEffect(() => {
    if (enablePersistence) {
      saveStoredTheme(storageKey, theme);
    }
  }, [theme, storageKey, enablePersistence]);

  // Toggle between themes
  const toggleTheme = useCallback(() => {
    setIsTransitioning(true);

    setThemeState(currentTheme => {
      let nextTheme;

      switch (currentTheme) {
        case THEMES.LIGHT:
          nextTheme = THEMES.DARK;
          break;
        case THEMES.DARK:
          nextTheme = THEMES.SYSTEM;
          break;
        case THEMES.SYSTEM:
          nextTheme = THEMES.LIGHT;
          break;
        default:
          nextTheme = THEMES.SYSTEM;
      }

      return nextTheme;
    });

    // Clear transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, finalConfig.transitionDuration);
  }, [finalConfig.transitionDuration]);

  // Set specific theme
  const setTheme = useCallback((newTheme) => {
    if (!Object.values(THEMES).includes(newTheme)) {
      console.warn(`Invalid theme: ${newTheme}. Available themes: ${Object.values(THEMES).join(', ')}`);
      return;
    }

    setIsTransitioning(true);
    setThemeState(newTheme);

    // Clear transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, finalConfig.transitionDuration);
  }, [finalConfig.transitionDuration]);

  // Cycle through all themes
  const cycleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  // Reset to default theme
  const resetTheme = useCallback(() => {
    setTheme(finalConfig.defaultTheme);
  }, [finalConfig.defaultTheme]);

  return {
    // Current state
    theme,
    systemPreference,
    isTransitioning,

    // Actions
    setTheme,
    toggleTheme,
    cycleTheme,
    resetTheme,

    // Constants
    THEMES,
  };
};

/**
 * Utility functions for theme management (exported for external use)
 */

/**
 * Get current theme from DOM
 * @returns {string} Current theme
 */
export const getCurrentTheme = () => {
  if (typeof document === 'undefined') {
    return THEMES.SYSTEM;
  }

  const theme = document.documentElement.getAttribute('data-theme');
  return theme && Object.values(THEMES).includes(theme) ? theme : THEMES.SYSTEM;
};

/**
 * Check if dark theme is active
 * @returns {boolean} True if dark theme or system prefers dark
 */
export const isDarkTheme = () => {
  const current = getCurrentTheme();

  if (current === THEMES.SYSTEM) {
    return detectSystemPreference() === THEMES.DARK;
  }

  return current === THEMES.DARK;
};

/**
 * Check if light theme is active
 * @returns {boolean} True if light theme or system prefers light
 */
export const isLightTheme = () => {
  const current = getCurrentTheme();

  if (current === THEMES.SYSTEM) {
    return detectSystemPreference() === THEMES.LIGHT;
  }

  return current === THEMES.LIGHT;
};

/**
 * Clear theme storage
 * @param {string} storageKey - Storage key to clear
 */
export const clearThemeStorage = (storageKey = DEFAULT_CONFIG.storageKey) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.removeItem(storageKey);
    } catch (error) {
      console.warn('Error clearing theme storage:', error);
    }
  }
};

export default useTheme;