import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple test to verify Jest setup is working
describe('Jest Setup', () => {
  it('should render basic React component', () => {
    const TestComponent = () => <div data-testid="test-component">Test</div>;
    render(<TestComponent />);

    expect(screen.getByTestId('test-component')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should have localStorage mock working', () => {
    localStorage.setItem('test', 'value');
    expect(localStorage.setItem).toHaveBeenCalledWith('test', 'value');
    expect(localStorage.getItem).toHaveBeenCalledWith('test');
  });

  it('should have matchMedia mock working', () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    expect(mediaQuery.matches).toBe(false);
    expect(mediaQuery.media).toBe('(prefers-color-scheme: dark)');
  });
});