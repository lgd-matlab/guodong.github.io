/**
 * Citation Count Fetcher using OpenAlex API
 * This script fetches real-time citation counts from OpenAlex for publications
 * OpenAlex API: https://docs.openalex.org/
 */

(function() {
  'use strict';

  // Configuration
  const OPENALEX_API_BASE = 'https://api.openalex.org';
  const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const CACHE_KEY_PREFIX = 'openalex_citation_';
  const REQUEST_DELAY = 200; // ms delay between requests to be polite to the API

  /**
   * Extract DOI from URL (handles both full URL and DOI string)
   */
  function extractDOI(doiString) {
    if (!doiString) return null;
    
    // If it's a full URL, extract the DOI part
    const doiMatch = doiString.match(/10\.\d{4,}(?:\.\d+)*\/(?:(?!["&'<>])\S)+/);
    return doiMatch ? doiMatch[0] : null;
  }

  /**
   * Get cached citation count if available and not expired
   */
  function getCachedCount(doi) {
    try {
      const cached = localStorage.getItem(CACHE_KEY_PREFIX + doi);
      if (cached) {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < CACHE_DURATION) {
          return data;
        }
      }
    } catch (e) {
      console.error('Error reading cache:', e);
    }
    return null;
  }

  /**
   * Cache citation count and metadata
   */
  function setCachedCount(doi, citationCount, openalexUrl) {
    try {
      localStorage.setItem(CACHE_KEY_PREFIX + doi, JSON.stringify({
        count: citationCount,
        openalexUrl: openalexUrl,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.error('Error setting cache:', e);
    }
  }

  /**
   * Fetch citation count from OpenAlex API
   * @param {string} doi - The DOI of the work
   * @returns {Promise<Object>} Object with citation count and OpenAlex URL
   */
  async function fetchCitationFromOpenAlex(doi) {
    // Check cache first
    const cached = getCachedCount(doi);
    if (cached !== null) {
      console.log(`Using cached citation count for DOI: ${doi}`);
      return cached;
    }

    try {
      // Query OpenAlex by DOI
      const url = `${OPENALEX_API_BASE}/works/https://doi.org/${doi}`;
      console.log(`Fetching citation count from OpenAlex: ${url}`);
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'mailto:djtulgd@gmail.com', // Polite API usage
        }
      });

      if (!response.ok) {
        console.error(`OpenAlex API error for DOI ${doi}: ${response.status}`);
        return null;
      }

      const data = await response.json();
      
      const result = {
        count: data.cited_by_count || 0,
        openalexUrl: data.id || `https://openalex.org/works?filter=doi:${doi}`
      };

      // Cache the result
      setCachedCount(doi, result.count, result.openalexUrl);
      
      console.log(`Citation count for DOI ${doi}: ${result.count}`);
      return result;

    } catch (error) {
      console.error(`Error fetching citation count for DOI ${doi}:`, error);
      return null;
    }
  }

  /**
   * Update citation badge display
   */
  function updateCitationBadge(badge, result) {
    const numberSpan = badge.querySelector('.citation-number');
    const link = badge.closest('a');
    
    if (!numberSpan) return;

    if (result && result.count !== null && result.count !== undefined) {
      // Update citation count
      numberSpan.textContent = result.count;
      badge.classList.add('loaded');
      
      // Update link to point to OpenAlex work page
      if (link && result.openalexUrl) {
        link.href = result.openalexUrl;
        link.title = `View on OpenAlex (${result.count} citations)`;
      }
    } else {
      // If unable to fetch, show error message
      numberSpan.textContent = 'N/A';
      badge.classList.add('loaded');
      badge.style.background = 'linear-gradient(135deg, #888 0%, #666 100%)';
    }
  }

  /**
   * Initialize citation count fetching for all badges
   */
  async function initCitationCounts() {
    const citationBadges = document.querySelectorAll('.citation-badge[data-doi]');
    
    if (citationBadges.length === 0) {
      console.log('No citation badges with DOI found on this page');
      return;
    }

    console.log(`Found ${citationBadges.length} publications to fetch citation counts for`);
    
    for (const badge of citationBadges) {
      const doiString = badge.getAttribute('data-doi');
      const doi = extractDOI(doiString);
      
      if (!doi) {
        console.warn('No valid DOI found for badge:', badge);
        updateCitationBadge(badge, null);
        continue;
      }
      
      // Fetch citation count from OpenAlex
      const result = await fetchCitationFromOpenAlex(doi);
      updateCitationBadge(badge, result);
      
      // Small delay to be polite to the API
      await new Promise(resolve => setTimeout(resolve, REQUEST_DELAY));
    }
    
    console.log('Citation count fetching complete');
  }

  /**
   * Clear cache (useful for debugging)
   */
  function clearCitationCache() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(CACHE_KEY_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    console.log('Citation cache cleared');
  }

  // Expose clearCache function globally for debugging
  window.clearCitationCache = clearCitationCache;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCitationCounts);
  } else {
    initCitationCounts();
  }

})();
