import React from 'react';
import { createRoot } from 'react-dom/client';
import CitationBadge from './CitationBadge';

/**
 * Mount CitationBadge components on the page
 * This entry point is used by Vite to build the citation-badge bundle
 */

/**
 * Parse data attributes from DOM element
 * @param {HTMLElement} container - The container element
 * @returns {Object} Parsed props object
 */
const parseDataAttributes = (container) => {
  const props = {};

  // Parse DOI
  if (container.dataset.doi) {
    props.doi = container.dataset.doi;
  }

  // Parse title
  if (container.dataset.title) {
    props.title = container.dataset.title;
  }

  // Parse venue
  if (container.dataset.venue) {
    props.venue = container.dataset.venue;
  }

  // Parse additional classes
  if (container.dataset.className) {
    props.className = container.dataset.className;
  }

  // Parse config (JSON string)
  if (container.dataset.config) {
    try {
      props.config = JSON.parse(container.dataset.config);
    } catch (error) {
      console.warn('Failed to parse config data:', error);
      props.config = {};
    }
  }

  return props;
};

/**
 * Mount CitationBadge component
 * @param {HTMLElement} container - The container element
 */
const mountCitationBadge = (container) => {
  if (!container) {
    console.warn('CitationBadge: Container element not found');
    return;
  }

  // Parse props from data attributes
  const props = parseDataAttributes(container);

  // Validate required props
  if (!props.doi) {
    console.warn('CitationBadge: DOI is required but not provided', container);
    return;
  }

  try {
    const root = createRoot(container);
    root.render(<CitationBadge {...props} />);
  } catch (error) {
    console.error('CitationBadge: Failed to render component', error);

    // Fallback: show error message in container
    container.innerHTML = `
      <span style="
        background-color: #ffebee;
        color: #c62828;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-style: italic;
      ">
        Citation badge unavailable
      </span>
    `;
  }
};

/**
 * Find and mount all CitationBadge containers on the page
 */
const mountAllCitationBadges = () => {
  // Find all containers with the citation-badge class or data attribute
  const containers = document.querySelectorAll('.citation-badge, [data-citation-badge="true"]');

  if (containers.length === 0) {
    // Look for the specific ID pattern as fallback
    const specificContainer = document.getElementById('react-citation-badge');
    if (specificContainer) {
      mountCitationBadge(specificContainer);
      return;
    }

    console.log('CitationBadge: No containers found on the page');
    return;
  }

  containers.forEach((container, index) => {
    // Add a unique identifier for debugging
    if (!container.id) {
      container.id = `react-citation-badge-${index}`;
    }

    mountCitationBadge(container);
  });

  console.log(`CitationBadge: Mounted ${containers.length} badge(s)`);
};

/**
 * Initialize CitationBadge components
 * This function is called when the script loads
 */
const initializeCitationBadges = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAllCitationBadges);
  } else {
    // DOM already ready
    mountAllCitationBadges();
  }

  // Also handle dynamic content loading
  // Observe DOM changes for new citation badge containers
  if (window.MutationObserver) {
    const observer = new MutationObserver((mutations) => {
      let shouldRemount = false;

      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Check if any new citation badge containers were added
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (
                node.classList?.contains('citation-badge') ||
                node.dataset?.citationBadge === 'true' ||
                node.querySelector('.citation-badge, [data-citation-badge="true"]')
              ) {
                shouldRemount = true;
              }
            }
          });
        }
      });

      if (shouldRemount) {
        // Small delay to avoid rapid remounting
        setTimeout(mountAllCitationBadges, 100);
      }
    });

    // Start observing the entire document
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
};

// Initialize the components
initializeCitationBadges();

// Export for potential external use
window.CitationBadge = {
  mount: mountCitationBadge,
  mountAll: mountAllCitationBadges,
  remount: mountAllCitationBadges,
};

// Development debugging (remove in production)
if (process.env.NODE_ENV === 'development') {
  window.__CITATION_BADGE_DEBUG__ = {
    version: '1.0.0',
    mounted: false,
    containers: [],

    inspect: () => {
      const containers = document.querySelectorAll('.citation-badge, [data-citation-badge="true"]');
      console.log('CitationBadge containers:', containers);
      return Array.from(containers).map(container => ({
        id: container.id,
        doi: container.dataset.doi,
        title: container.dataset.title,
        venue: container.dataset.venue,
      }));
    },

    reload: () => {
      mountAllCitationBadges();
    },
  };
}