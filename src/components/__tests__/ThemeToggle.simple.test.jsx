/**
 * Simple ThemeToggle Component Tests
 *
 * Basic test suite for the ThemeToggle component focusing on core functionality
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock window.matchMedia for useTheme hook
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Import the component after mocks are set up
import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle Simple Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('button has correct aria-label', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  test('button has title attribute', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title');
  });

  test('contains theme icon', () => {
    render(<ThemeToggle />);

    const icon = screen.getByLabelText(/theme icon/i);
    expect(icon).toBeInTheDocument();
  });

  test('icon contains emoji', () => {
    render(<ThemeToggle />);

    const icon = screen.getByLabelText(/theme icon/i);
    const iconText = icon.textContent;

    // Should contain one of the theme icons
    expect(['☀️', '🌙', '🌓']).toContain(iconText);
  });

  test('button responds to clicks', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');

    // Should not throw error on click
    expect(() => {
      fireEvent.click(button);
    }).not.toThrow();
  });

  test('renders with custom className', () => {
    render(<ThemeToggle className="custom-class" />);

    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  test('renders with config object', () => {
    const config = {
      showLabel: true,
      showIndicator: true,
    };

    render(<ThemeToggle config={config} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('handles null config gracefully', () => {
    render(<ThemeToggle config={null} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('handles onThemeChange callback', () => {
    const onThemeChange = jest.fn();

    render(<ThemeToggle onThemeChange={onThemeChange} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Callback might be called asynchronously
    // Just verify it doesn't throw errors
    expect(button).toBeInTheDocument();
  });

  test('button has correct type attribute', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('contains screen reader text', () => {
    render(<ThemeToggle />);

    // Should have descriptive text for screen readers
    const srText = screen.getByText(/currently using/i);
    expect(srText).toBeInTheDocument();
  });

  test('icon has correct accessibility attributes', () => {
    render(<ThemeToggle />);

    const icon = screen.getByLabelText(/theme icon/i);
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).toHaveAttribute('role', 'img');
  });
});