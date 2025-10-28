/**
 * ThemeToggle Entry Point
 *
 * This file serves as the Jekyll integration entry point for the ThemeToggle component.
 * It follows the Islands Architecture pattern to mount the React component on the
 * appropriate DOM elements while maintaining progressive enhancement.
 *
 * Usage in Jekyll:
 * ```html
 * <div id="theme-toggle-root" data-config='{"showLabel": true}'></div>
 * ```
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import ThemeToggle from './ThemeToggle';

/**
 * Default configuration for the ThemeToggle component
 */
const DEFAULT_CONFIG = {
  defaultTheme: 'system',
  storageKey: 'academic-website-theme',
  enableSystemDetection: true,
  enablePersistence: true,
  transitionDuration: 300,
  enablePlotlyIntegration: false,
  showLabel: false,
  showIndicator: false,
};

/**
 * Parse configuration from data attributes
 * @param {HTMLElement} element - DOM element containing data attributes
 * @returns {Object} Parsed configuration object
 */
const parseConfigFromElement = (element) => {
  const config = { ...DEFAULT_CONFIG };

  // Parse data-config attribute if present
  const dataConfig = element.dataset.config;
  if (dataConfig) {
    try {
      const parsedConfig = JSON.parse(dataConfig);
      Object.assign(config, parsedConfig);
    } catch (error) {
      console.warn('Failed to parse theme-toggle config:', error, 'Raw config:', dataConfig);
    }
  }

  // Parse individual data attributes
  const dataAttributes = {
    'defaultTheme': 'defaultTheme',
    'storageKey': 'storageKey',
    'showLabel': 'showLabel',
    'showIndicator': 'showIndicator',
    'enablePlotlyIntegration': 'enablePlotlyIntegration',
    'transitionDuration': 'transitionDuration',
  };

  Object.entries(dataAttributes).forEach(([dataAttr, configKey]) => {
    const value = element.dataset[dataAttr.toLowerCase()];
    if (value !== undefined) {
      // Convert string values to appropriate types
      if (value === 'true') config[configKey] = true;
      else if (value === 'false') config[configKey] = false;
      else if (!isNaN(value) && value !== '') config[configKey] = Number(value);
      else config[configKey] = value;
    }
  });

  return config;
};

/**
 * Find and mount ThemeToggle components
 * @param {string} selector - CSS selector for mount points
 */
const mountThemeToggleComponents = (selector = '[data-theme-toggle]') => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    try {
      // Skip if already mounted
      if (element.hasAttribute('data-react-mounted')) {
        return;
      }

      // Parse configuration from element
      const config = parseConfigFromElement(element);

      // Create React root and render component
      const root = createRoot(element);
      root.render(
        <ThemeToggle
          config={config}
          className={element.className || ''}
          onThemeChange={(theme) => {
            // Dispatch custom event for external listeners
            const event = new CustomEvent('themeChanged', {
              detail: { theme, element, config }
            });
            document.dispatchEvent(event);
          }}
        />
      );

      // Mark as mounted
      element.setAttribute('data-react-mounted', 'true');
      element.setAttribute('data-component', 'ThemeToggle');

      console.log('ThemeToggle mounted successfully on element:', element);

    } catch (error) {
      console.error('Failed to mount ThemeToggle on element:', element, error);

      // Fallback: show a simple toggle button if React mounting fails
      element.innerHTML = `
        <button
          onclick="this.dataset.theme = this.dataset.theme === 'dark' ? 'light' : 'dark';
                 document.documentElement.setAttribute('data-theme', this.dataset.theme);
                 localStorage.setItem('academic-website-theme', this.dataset.theme);"
          data-theme="system"
          style="
            padding: 0.5rem 0.75rem;
            border: 2px solid #e1e5e9;
            border-radius: 2rem;
            background: #ffffff;
            color: #333333;
            cursor: pointer;
            font-size: 0.875rem;
            transition: all 300ms ease-in-out;
          "
          title="Toggle theme"
        >
          🌓
        </button>
      `;
    }
  });
};

/**
 * Auto-mount ThemeToggle components when DOM is ready
 */
const initializeThemeToggle = () => {
  // Mount immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountThemeToggleComponents);
  } else {
    // DOM is already loaded, mount immediately
    mountThemeToggleComponents();
  }

  // Also mount after a short delay to handle dynamic content
  setTimeout(mountThemeToggleComponents, 100);

  // Mount on page transitions for SPA-like behavior
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      setTimeout(mountThemeToggleComponents, 50);
    }
  }).observe(document, { subtree: true, childList: true });
};

/**
 * Handle theme changes from other components
 */
const handleExternalThemeChanges = () => {
  // Listen for theme change events
  document.addEventListener('themechange', (event) => {
    const { theme } = event.detail;

    // Update any theme toggle buttons that might exist outside React
    document.querySelectorAll('[data-theme-toggle]').forEach(element => {
      if (!element.hasAttribute('data-react-mounted')) {
        const button = element.querySelector('button');
        if (button) {
          const icon = button.querySelector('[data-theme-icon]');
          if (icon) {
            // Update icon based on theme
            switch (theme) {
              case 'light':
                icon.textContent = '☀️';
                break;
              case 'dark':
                icon.textContent = '🌙';
                break;
              default:
                icon.textContent = '🌓';
            }
          }
        }
      }
    });
  });
};

/**
 * Export utility functions for external use
 */
export const ThemeToggleUtils = {
  /**
   * Manually mount ThemeToggle components
   * @param {string} selector - CSS selector for mount points
   */
  mount: mountThemeToggleComponents,

  /**
   * Get current theme from DOM
   * @returns {string} Current theme
   */
  getCurrentTheme: () => {
    return document.documentElement.getAttribute('data-theme') || 'system';
  },

  /**
   * Set theme programmatically
   * @param {string} theme - Theme to set
   */
  setTheme: (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('academic-website-theme', theme);

    // Trigger theme change event
    const event = new CustomEvent('themechange', {
      detail: { theme, source: 'ThemeToggleUtils' }
    });
    document.dispatchEvent(event);
  },

  /**
   * Check if component is mounted
   * @param {HTMLElement} element - Element to check
   * @returns {boolean} True if mounted
   */
  isMounted: (element) => {
    return element.hasAttribute('data-react-mounted') &&
           element.getAttribute('data-component') === 'ThemeToggle';
  }
};

// Initialize immediately
initializeThemeToggle();
handleExternalThemeChanges();

// Make utilities available globally for external scripts
if (typeof window !== 'undefined') {
  window.ThemeToggleUtils = ThemeToggleUtils;
}

export default ThemeToggleUtils;