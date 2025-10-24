/**
 * Citation Count Fetcher for Google Scholar
 * This script fetches real-time citation counts for publications
 */

(function() {
  'use strict';

  // Configuration
  const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const CACHE_KEY_PREFIX = 'citation_count_';

  /**
   * Get cached citation count if available and not expired
   */
  function getCachedCount(scholarId) {
    try {
      const cached = localStorage.getItem(CACHE_KEY_PREFIX + scholarId);
      if (cached) {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < CACHE_DURATION) {
          return data.count;
        }
      }
    } catch (e) {
      console.error('Error reading cache:', e);
    }
    return null;
  }

  /**
   * Cache citation count
   */
  function setCachedCount(scholarId, count) {
    try {
      localStorage.setItem(CACHE_KEY_PREFIX + scholarId, JSON.stringify({
        count: count,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.error('Error setting cache:', e);
    }
  }

  /**
   * Fetch citation count from Google Scholar via proxy/API
   * Note: Direct fetching from Google Scholar is blocked by CORS
   * This is a placeholder - you'll need to implement a backend proxy
   */
  async function fetchCitationCount(scholarId) {
    // Check cache first
    const cached = getCachedCount(scholarId);
    if (cached !== null) {
      return cached;
    }

    try {
      // Option 1: Use your own backend proxy
      // const response = await fetch(`/api/citations/${scholarId}`);
      
      // Option 2: Use Semantic Scholar API (if DOI available)
      // const response = await fetch(`https://api.semanticscholar.org/v1/paper/${doi}`);
      
      // For now, return null to indicate manual update needed
      return null;
    } catch (error) {
      console.error('Error fetching citation count:', error);
      return null;
    }
  }

  /**
   * Update citation badge display
   */
  function updateCitationBadge(element, count) {
    const numberSpan = element.querySelector('.citation-number');
    if (numberSpan) {
      if (count !== null) {
        numberSpan.textContent = count;
        element.classList.add('loaded');
      } else {
        // If unable to fetch, show link to Google Scholar
        numberSpan.textContent = 'View on Google Scholar';
      }
    }
  }

  /**
   * Initialize citation count fetching
   */
  async function initCitationCounts() {
    const citationBadges = document.querySelectorAll('.citation-badge[id^="citation-"]');
    
    for (const badge of citationBadges) {
      const scholarId = badge.id.replace('citation-', '');
      
      // Try to fetch citation count
      const count = await fetchCitationCount(scholarId);
      updateCitationBadge(badge, count);
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCitationCounts);
  } else {
    initCitationCounts();
  }

})();
