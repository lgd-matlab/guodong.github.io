import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CitationBadge from '../CitationBadge';

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

// Simple test to verify component renders
describe('CitationBadge - Basic Tests', () => {
  it('should render without crashing', () => {
    render(
      <TestWrapper>
        <CitationBadge doi="10.1234/test.doi" />
      </TestWrapper>
    );
    // Component should render without throwing an error
  });

  it('should render loading state initially', () => {
    render(
      <TestWrapper>
        <CitationBadge doi="10.1234/test.doi" />
      </TestWrapper>
    );
    expect(screen.getByText('Loading citations...')).toBeInTheDocument();
  });

  it('should render no data state when DOI is empty', () => {
    render(
      <TestWrapper>
        <CitationBadge doi="" />
      </TestWrapper>
    );
    expect(screen.getByText('No citations')).toBeInTheDocument();
  });
});