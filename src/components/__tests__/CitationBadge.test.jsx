import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CitationBadge from '../CitationBadge';
import { useCitationData, clearCitationCache, getCachedCitationData } from '../../hooks/useCitationData';

// Mock fetch for API calls
global.fetch = jest.fn();

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Create a test query client
const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
};

// Wrapper component for testing
const TestWrapper = ({ children }) => (
  <QueryClientProvider client={createTestQueryClient()}>
    {children}
  </QueryClientProvider>
);

// Test data
const mockCitationData = {
  id: 'https://openalex.org/W123456789',
  doi: '10.1234/example.doi',
  title: 'Example Research Paper',
  citation_count: 42,
  publication_year: 2023,
  venue: 'Journal of Examples',
  type: 'journal-article',
  openalex_id: 'https://openalex.org/W123456789',
  updated_at: '2023-10-28T10:00:00Z',
};

describe('CitationBadge', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    fetch.mockClear();
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  describe('Component Rendering', () => {
    it('should render loading state initially', () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      expect(screen.getByText('Loading citations...')).toBeInTheDocument();
      expect(screen.getByTitle('Loading citation count...')).toBeInTheDocument();
    });

    it('should render citation count when data is loaded', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      render(
        <TestWrapper>
          <CitationBadge
            doi="10.1234/example.doi"
            title="Example Paper"
            venue="Journal of Examples"
          />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Cited by 42')).toBeInTheDocument();
      });

      const badge = screen.getByRole('status');
      expect(badge).toHaveAttribute('title', '42 citations from OpenAlex for Journal of Examples - Example Paper');
    });

    it('should render singular form for single citation', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          ...mockCitationData,
          citation_count: 1,
        }),
      });

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Cited by 1')).toBeInTheDocument();
      });
    });

    it('should render error state when API call fails', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Citations unavailable')).toBeInTheDocument();
      });

      expect(screen.getByTitle('Unable to load citation count')).toBeInTheDocument();
    });

    it('should render no data state when DOI is empty', () => {
      render(
        <TestWrapper>
          <CitationBadge doi="" />
        </TestWrapper>
      );

      expect(screen.getByText('No citations')).toBeInTheDocument();
      expect(screen.getByTitle('No citation data available')).toBeInTheDocument();
    });

    it('should apply custom className', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      render(
        <TestWrapper>
          <CitationBadge
            doi="10.1234/example.doi"
            className="custom-class another-class"
          />
        </TestWrapper>
      );

      await waitFor(() => {
        const badge = screen.getByRole('status');
        expect(badge).toHaveClass('custom-class', 'another-class');
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      await waitFor(() => {
        const badge = screen.getByRole('status');
        expect(badge).toHaveAttribute('aria-live', 'polite');
      });
    });

    it('should update aria-live content during loading', () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      // Should have loading status
      expect(screen.getByText('Loading citations...')).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Props Handling', () => {
    it('should accept and use title prop in title attribute', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      render(
        <TestWrapper>
          <CitationBadge
            doi="10.1234/example.doi"
            title="Custom Title"
            venue="Custom Venue"
          />
        </TestWrapper>
      );

      await waitFor(() => {
        const badge = screen.getByRole('status');
        expect(badge).toHaveAttribute('title', '42 citations from OpenAlex for Custom Venue - Custom Title');
      });
    });

    it('should handle config prop gracefully', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      const config = { showLoading: true, cacheTime: 3600 };

      render(
        <TestWrapper>
          <CitationBadge
            doi="10.1234/example.doi"
            config={config}
          />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Cited by 42')).toBeInTheDocument();
      });
    });

    it('should use default values when optional props are not provided', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      await waitFor(() => {
        const badge = screen.getByRole('status');
        expect(badge).toHaveAttribute('title', '42 citations from OpenAlex');
      });
    });
  });

  describe('Error Handling', () => {
    it('should handle 404 error from OpenAlex API', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/nonexistent.doi" />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Citations unavailable')).toBeInTheDocument();
      });
    });

    it('should handle rate limiting error', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 429,
        statusText: 'Too Many Requests',
      });

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Citations unavailable')).toBeInTheDocument();
      });
    });

    it('should handle network error', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      render(
        <TestWrapper>
          <CitationBadge doi="10.1234/example.doi" />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Citations unavailable')).toBeInTheDocument();
      });
    });
  });
});

describe('useCitationData Hook', () => {
  beforeEach(() => {
    localStorageMock.clear();
    fetch.mockClear();
  });

  describe('Data Fetching', () => {
    it('should fetch data from OpenAlex API', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      const TestComponent = () => {
        const { data, isLoading, error } = useCitationData('10.1234/example.doi');

        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        if (!data) return <div>No data</div>;

        return <div>Citations: {data.citation_count}</div>;
      };

      render(
        <TestWrapper>
          <TestComponent />
        </TestWrapper>
      );

      expect(screen.getByText('Loading...')).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByText('Citations: 42')).toBeInTheDocument();
      });

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('https://api.openalex.org/works/doi:10.1234%2Fexample.doi'),
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            'Accept': 'application/json',
            'User-Agent': 'Academic Website Citation Badge/1.0',
          }),
        })
      );
    });

    it('should not fetch when DOI is empty', () => {
      const TestComponent = () => {
        const { data, isLoading, error } = useCitationData('');

        if (error) return <div>Error: {error.message}</div>;
        return <div>Has data: {!!data}</div>;
      };

      render(
        <TestWrapper>
          <TestComponent />
        </TestWrapper>
      );

      expect(screen.getByText('Has data: false')).toBeInTheDocument();
      expect(fetch).not.toHaveBeenCalled();
    });

    it('should handle API response transformation correctly', async () => {
      const openAlexResponse = {
        id: 'https://openalex.org/W123456789',
        display_name: 'Test Paper',
        cited_by_count: 25,
        publication_year: '2023',
        host_venue: {
          display_name: 'Test Journal',
        },
        type: 'journal-article',
      };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => openAlexResponse,
      });

      const TestComponent = () => {
        const { data, isLoading } = useCitationData('10.1234/test.doi');

        if (isLoading) return <div>Loading...</div>;
        if (!data) return <div>No data</div>;

        return <div>{JSON.stringify(data)}</div>;
      };

      render(
        <TestWrapper>
          <TestComponent />
        </TestWrapper>
      );

      await waitFor(() => {
        const resultText = screen.getByText(/Test Paper/).textContent;
        const data = JSON.parse(resultText.match(/{.*}/)[0]);

        expect(data).toEqual({
          id: 'https://openalex.org/W123456789',
          doi: '10.1234/test.doi',
          title: 'Test Paper',
          citation_count: 25,
          publication_year: 2023,
          venue: 'Test Journal',
          type: 'journal-article',
          openalex_id: 'https://openalex.org/W123456789',
          updated_at: expect.any(String),
        });
      });
    });
  });

  describe('Caching', () => {
    it('should cache data in localStorage', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      const TestComponent = () => {
        const { data, isLoading } = useCitationData('10.1234/example.doi');

        if (isLoading) return <div>Loading...</div>;
        if (!data) return <div>No data</div>;

        return <div>Citations: {data.citation_count}</div>;
      };

      render(
        <TestWrapper>
          <TestComponent />
        </TestWrapper>
      );

      await waitFor(() => {
        expect(screen.getByText('Citations: 42')).toBeInTheDocument();
      });

      // Check if data was cached
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'citation_10_1234_example_doi',
        expect.stringContaining('citation_count')
      );
    });

    it('should use cached data when available', async () => {
      // Set up cached data
      const cachedData = {
        data: { ...mockCitationData, citation_count: 100 },
        timestamp: Date.now() - 1000, // 1 second ago (fresh)
      };

      localStorageMock.setItem('citation_10_1234_example_doi', JSON.stringify(cachedData));

      // Don't mock fetch to test that it's not called
      const TestComponent = () => {
        const { data, isLoading } = useCitationData('10.1234/example.doi');

        if (isLoading) return <div>Loading...</div>;
        if (!data) return <div>No data</div>;

        return <div>Citations: {data.citation_count}</div>;
      };

      render(
        <TestWrapper>
          <TestComponent />
        </TestWrapper>
      );

      // Should immediately show cached data without loading
      expect(screen.getByText('Citations: 100')).toBeInTheDocument();
      expect(fetch).not.toHaveBeenCalled();
    });

    it('should ignore expired cache', async () => {
      // Set up expired cached data
      const cachedData = {
        data: { ...mockCitationData, citation_count: 100 },
        timestamp: Date.now() - (1000 * 60 * 60 + 1000), // 1 hour + 1 second ago (expired)
      };

      localStorageMock.setItem('citation_10_1234_example.doi', JSON.stringify(cachedData));

      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockCitationData,
      });

      const TestComponent = () => {
        const { data, isLoading } = useCitationData('10.1234/example.doi');

        if (isLoading) return <div>Loading...</div>;
        if (!data) return <div>No data</div>;

        return <div>Citations: {data.citation_count}</div>;
      };

      render(
        <TestWrapper>
          <TestComponent />
        </TestWrapper>
      );

      // Should show loading then fresh data
      expect(screen.getByText('Loading...')).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByText('Citations: 42')).toBeInTheDocument();
      });

      expect(fetch).toHaveBeenCalled();
    });
  });

  describe('Utility Functions', () => {
    it('should clear citation cache for specific DOI', () => {
      localStorageMock.setItem('citation_10_1234_example_doi', 'some data');
      localStorageMock.setItem('citation_10_5678_other_doi', 'other data');

      clearCitationCache('10.1234/example.doi');

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('citation_10_1234_example_doi');
      expect(localStorageMock.removeItem).not.toHaveBeenCalledWith('citation_10_5678_other_doi');
    });

    it('should clear all citation cache when no DOI provided', () => {
      localStorageMock.setItem('citation_10_1234_example_doi', 'some data');
      localStorageMock.setItem('citation_10_5678_other_doi', 'other data');
      localStorageMock.setItem('other_key', 'should not be removed');

      // Mock Object.keys
      const originalKeys = Object.keys;
      Object.keys = jest.fn(() => [
        'citation_10_1234_example_doi',
        'citation_10_5678_other_doi',
        'other_key'
      ]);

      clearCitationCache();

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('citation_10_1234_example_doi');
      expect(localStorageMock.removeItem).toHaveBeenCalledWith('citation_10_5678_other_doi');
      expect(localStorageMock.removeItem).not.toHaveBeenCalledWith('other_key');

      // Restore original
      Object.keys = originalKeys;
    });

    it('should get cached citation data', () => {
      const cachedData = {
        data: { ...mockCitationData, citation_count: 75 },
        timestamp: Date.now() - 1000, // Fresh
      };

      localStorageMock.getItem.mockReturnValue(JSON.stringify(cachedData));

      const result = getCachedCitationData('10.1234/example.doi');

      expect(result).toEqual({
        ...mockCitationData,
        citation_count: 75,
      });
    });

    it('should return null for expired cache', () => {
      const cachedData = {
        data: { ...mockCitationData, citation_count: 75 },
        timestamp: Date.now() - (1000 * 60 * 60 * 24 + 1000), // 24 hours + 1 second ago (expired)
      };

      localStorageMock.getItem.mockReturnValue(JSON.stringify(cachedData));

      const result = getCachedCitationData('10.1234/example.doi');

      expect(result).toBeNull();
      expect(localStorageMock.removeItem).toHaveBeenCalledWith('citation_10_1234_example_doi');
    });

    it('should handle malformed cache data', () => {
      localStorageMock.getItem.mockReturnValue('invalid json');

      const result = getCachedCitationData('10.1234/example.doi');

      expect(result).toBeNull();
      expect(localStorageMock.removeItem).toHaveBeenCalledWith('citation_10_1234_example_doi');
    });
  });

  describe('Error Handling', () => {
    it('should handle missing DOI error', async () => {
      const TestComponent = () => {
        const { error } = useCitationData('');

        if (error) return <div>Error: {error.message}</div>;
        return <div>No error</div>;
      };

      render(
        <TestWrapper>
          <TestComponent />
        </TestWrapper>
      );

      expect(screen.getByText('No error')).toBeInTheDocument();
    });

    it('should handle various HTTP error statuses', async () => {
      const errorCases = [
        { status: 404, expectedMessage: 'Publication not found' },
        { status: 429, expectedMessage: 'Rate limit exceeded' },
        { status: 500, expectedMessage: 'OpenAlex service temporarily unavailable' },
        { status: 503, expectedMessage: 'HTTP 503: Service Unavailable' },
      ];

      for (const { status, expectedMessage } of errorCases) {
        fetch.mockResolvedValueOnce({
          ok: false,
          status,
          statusText: 'Error',
        });

        const TestComponent = () => {
          const { error, isLoading } = useCitationData('10.1234/test.doi');

          if (isLoading) return <div>Loading...</div>;
          if (error) return <div>Error: {error.message}</div>;
          return <div>Success</div>;
        };

        const { unmount } = render(
          <TestWrapper>
            <TestComponent />
          </TestWrapper>
        );

        await waitFor(() => {
          expect(screen.getByText(new RegExp(expectedMessage))).toBeInTheDocument();
        });

        unmount();
      }
    });
  });
});