import { useQuery } from '@tanstack/react-query';

/**
 * Configuration constants for citation data fetching
 */
const CACHE_CONFIG = {
  STALE_TIME: 1000 * 60 * 60, // 1 hour
  CACHE_TIME: 1000 * 60 * 60 * 24, // 24 hours
  RETRY_DELAY: 1000,
  MAX_RETRIES: 3,
};

/**
 * Generate cache key for localStorage
 * @param {string} doi - Digital Object Identifier
 * @returns {string} Cache key
 */
const getCacheKey = (doi) => `citation_${doi.replace(/[^a-zA-Z0-9]/g, '_')}`;

/**
 * Fetch citation data from OpenAlex API
 * @param {string} doi - Digital Object Identifier
 * @returns {Promise<Object>} Citation data
 */
const fetchCitationData = async (doi) => {
  if (!doi) {
    throw new Error('DOI is required for citation data fetch');
  }

  // Check localStorage cache first
  const cacheKey = getCacheKey(doi);
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();

      // Return cached data if still valid (1 hour)
      if (now - timestamp < CACHE_CONFIG.STALE_TIME) {
        return data;
      }
    } catch (error) {
      console.warn('Failed to parse cached citation data:', error);
      // Continue with API fetch
    }
  }

  try {
    // Build OpenAlex API URL
    const apiUrl = `https://api.openalex.org/works/doi:${encodeURIComponent(doi)}`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Academic Website Citation Badge/1.0',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Publication not found in OpenAlex database');
      }
      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      if (response.status >= 500) {
        throw new Error('OpenAlex service temporarily unavailable');
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Transform OpenAlex data to our format
    const citationData = {
      id: data.id || doi,
      doi: doi,
      title: data.display_name || '',
      citation_count: data.cited_by_count || 0,
      publication_year: data.publication_year || null,
      venue: data.host_venue?.display_name || data.primary_location?.source?.display_name || '',
      type: data.type || 'unknown',
      openalex_id: data.id,
      updated_at: new Date().toISOString(),
    };

    // Cache the result
    try {
      localStorage.setItem(cacheKey, JSON.stringify({
        data: citationData,
        timestamp: Date.now(),
      }));
    } catch (cacheError) {
      console.warn('Failed to cache citation data:', cacheError);
      // Non-fatal error, continue
    }

    return citationData;
  } catch (error) {
    // Enhance error message with more context
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error: Unable to connect to OpenAlex API');
    }

    // Re-throw with original error message
    throw error;
  }
};

/**
 * Custom hook for fetching and managing citation data
 *
 * @param {string} doi - Digital Object Identifier for the publication
 * @returns {Object} Query result with data, loading state, error, and refetch function
 */
export const useCitationData = (doi) => {
  return useQuery({
    queryKey: ['citation', doi],
    queryFn: () => fetchCitationData(doi),
    enabled: !!doi && doi.trim().length > 0,
    staleTime: CACHE_CONFIG.STALE_TIME,
    cacheTime: CACHE_CONFIG.CACHE_TIME,
    retry: (failureCount, error) => {
      // Don't retry on certain errors
      if (error.message.includes('not found') ||
          error.message.includes('Invalid DOI') ||
          error.message.includes('Rate limit')) {
        return false;
      }

      // Retry up to MAX_RETRIES times with exponential backoff
      return failureCount < CACHE_CONFIG.MAX_RETRIES;
    },
    retryDelay: (attemptIndex) => {
      // Exponential backoff: 1s, 2s, 4s
      return Math.min(1000 * 2 ** attemptIndex, 5000);
    },
    onError: (error) => {
      // Log error for debugging
      console.warn(`Citation data fetch failed for DOI ${doi}:`, error.message);
    },
    // Add some default data structure for better type safety
    initialData: () => {
      if (!doi) return null;

      // Return placeholder data while loading
      return {
        id: doi,
        doi: doi,
        title: '',
        citation_count: 0,
        publication_year: null,
        venue: '',
        type: 'loading',
        updated_at: new Date().toISOString(),
      };
    },
    select: (data) => {
      // Ensure we always have a consistent data structure
      if (!data) return null;

      return {
        ...data,
        citation_count: Number(data.citation_count) || 0,
        publication_year: data.publication_year ? Number(data.publication_year) : null,
      };
    },
  });
};

/**
 * Utility function to clear citation cache
 * @param {string} doi - Optional DOI to clear specific cache, clears all if not provided
 */
export const clearCitationCache = (doi = null) => {
  if (doi) {
    const cacheKey = getCacheKey(doi);
    localStorage.removeItem(cacheKey);
  } else {
    // Clear all citation caches
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('citation_')) {
        localStorage.removeItem(key);
      }
    });
  }
};

/**
 * Utility function to get cached citation data
 * @param {string} doi - Digital Object Identifier
 * @returns {Object|null} Cached citation data or null
 */
export const getCachedCitationData = (doi) => {
  if (!doi) return null;

  const cacheKey = getCacheKey(doi);
  const cached = localStorage.getItem(cacheKey);

  if (!cached) return null;

  try {
    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // Return cached data if still valid
    if (now - timestamp < CACHE_CONFIG.CACHE_TIME) {
      return data;
    }

    // Remove expired cache
    localStorage.removeItem(cacheKey);
    return null;
  } catch (error) {
    console.warn('Failed to parse cached citation data:', error);
    localStorage.removeItem(cacheKey);
    return null;
  }
};