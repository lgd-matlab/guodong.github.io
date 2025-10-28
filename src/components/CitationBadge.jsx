import React from 'react';
import { useCitationData } from '../hooks/useCitationData';
import styles from './CitationBadge.module.css';

/**
 * CitationBadge Component
 *
 * Displays citation count for a publication with OpenAlex integration.
 * Includes loading states, error handling, and accessibility features.
 *
 * @param {Object} props - Component props
 * @param {string} props.doi - Digital Object Identifier for the publication
 * @param {string} props.title - Publication title (used for fallback)
 * @param {string} props.venue - Publication venue (used for display)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.config - Configuration options
 */
const CitationBadge = ({
  doi,
  title = '',
  venue = '',
  className = '',
  config = {},
}) => {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useCitationData(doi);

  // Handle loading state
  if (isLoading) {
    return (
      <span
        className={`${styles.badge} ${styles.loading} ${className}`}
        title="Loading citation count..."
        role="status"
        aria-live="polite"
      >
        Loading citations...
      </span>
    );
  }

  // Handle error state
  if (error) {
    return (
      <span
        className={`${styles.badge} ${styles.error} ${className}`}
        title={error.message || 'Unable to load citation count'}
        role="status"
        aria-live="polite"
      >
        Citations unavailable
      </span>
    );
  }

  // Handle no data
  if (!data) {
    return (
      <span
        className={`${styles.badge} ${styles.noData} ${className}`}
        title="No citation data available"
        role="status"
        aria-live="polite"
      >
        No citations
      </span>
    );
  }

  const citationCount = data.citation_count || 0;
  const displayText = citationCount === 1
    ? 'Cited by 1'
    : `Cited by ${citationCount}`;

  const titleText = `${citationCount} citation${citationCount === 1 ? '' : 's'} from OpenAlex${
    venue ? ` for ${venue}` : ''
  }${title ? ` - ${title}` : ''}`;

  return (
    <span
      className={`${styles.badge} ${className}`}
      title={titleText}
      role="status"
      aria-live="polite"
    >
      {displayText}
    </span>
  );
};

export default CitationBadge;