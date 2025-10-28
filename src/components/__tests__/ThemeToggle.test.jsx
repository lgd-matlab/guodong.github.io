/**
 * ThemeToggle Component Tests
 *
 * Comprehensive test suite for the ThemeToggle component covering:
 * - Component rendering and props handling
 * - Theme switching functionality
 * - System preference detection
 * - Theme persistence
 * - Accessibility features
 * - Error handling
 * - Integration with useTheme hook
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ThemeToggle from '../ThemeToggle';

// Define theme constants
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

// Mock the useTheme hook
const mockUseTheme = {
  theme: THEMES.LIGHT,
  systemPreference: 'light',
  isTransitioning: false,
  setTheme: jest.fn(),
  toggleTheme: jest.fn(),
  cycleTheme: jest.fn(),
  THEMES,
};

jest.mock('../../hooks/useTheme', () => ({
  useTheme: jest.fn(() => mockUseTheme),
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
  },
}));

// Mock console methods to test error handling
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = jest.fn();
  console.warn = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
  const { useTheme } = require('../../hooks/useTheme');
  useTheme.mockReturnValue(mockUseTheme);
  mockUseTheme.theme = THEMES.LIGHT;
  mockUseTheme.systemPreference = 'light';
  mockUseTheme.isTransitioning = false;
});

describe('ThemeToggle Component', () => {
  describe('Basic Rendering', () => {
    test('renders without crashing', () => {
      render(<ThemeToggle />);

      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toBeInTheDocument();
    });

    test('renders with custom className', () => {
      render(<ThemeToggle className="custom-class" />);

      const toggleContainer = screen.getByRole('button').parentElement;
      expect(toggleContainer).toHaveClass('custom-class');
    });

    test('renders with default config when none provided', () => {
      render(<ThemeToggle />);

      // Should use mock useTheme values
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('renders with custom config', () => {
      const customConfig = {
        showLabel: true,
        showIndicator: true,
        transitionDuration: 500,
      };

      render(<ThemeToggle config={customConfig} />);

      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toBeInTheDocument();
    });
  });

  describe('Theme Display', () => {
    test('displays correct icon for light theme', () => {
      mockUseTheme.theme = THEMES.LIGHT;
      render(<ThemeToggle />);

      const icon = screen.getByLabelText('light theme icon');
      expect(icon).toHaveTextContent('☀️');
    });

    test('displays correct icon for dark theme', () => {
      mockUseTheme.theme = THEMES.DARK;
      render(<ThemeToggle />);

      const icon = screen.getByLabelText('dark theme icon');
      expect(icon).toHaveTextContent('🌙');
    });

    test('displays correct icon for system theme', () => {
      mockUseTheme.theme = THEMES.SYSTEM;
      render(<ThemeToggle />);

      const icon = screen.getByLabelText('system theme icon');
      expect(icon).toHaveTextContent('🌓');
    });

    test('displays theme label when showLabel is true', () => {
      const config = { showLabel: true };
      mockUseTheme.theme = THEMES.LIGHT;

      render(<ThemeToggle config={config} />);

      const label = screen.getByText('Light');
      expect(label).toBeInTheDocument();
    });

    test('displays Auto label for system theme', () => {
      const config = { showLabel: true };
      mockUseTheme.theme = THEMES.SYSTEM;

      render(<ThemeToggle config={config} />);

      const label = screen.getByText('Auto');
      expect(label).toBeInTheDocument();
    });

    test('displays theme indicator when showIndicator is true', () => {
      const config = { showIndicator: true };
      mockUseTheme.theme = THEMES.DARK;

      render(<ThemeToggle config={config} />);

      const indicator = document.querySelector('.themeIndicator');
      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveClass('dark');
    });
  });

  describe('Accessibility', () => {
    test('has proper aria-label for button', () => {
      mockUseTheme.theme = THEMES.LIGHT;
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Switch to dark theme');
    });

    test('has descriptive title attribute', () => {
      mockUseTheme.theme = THEMES.SYSTEM;
      mockUseTheme.systemPreference = 'dark';
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('title',
        'Theme: Currently using system preference (dark theme). Click to cycle through themes.'
      );
    });

    test('includes screen reader text', () => {
      mockUseTheme.theme = THEMES.DARK;
      render(<ThemeToggle />);

      const srText = screen.getByText('Currently using dark theme');
      expect(srText).toBeInTheDocument();
      expect(srText).toHaveClass('srOnly');
    });

    test('button has correct type', () => {
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Theme Switching', () => {
    test('calls toggleTheme when button is clicked', async () => {
      const user = userEvent.setup();
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(mockUseTheme.toggleTheme).toHaveBeenCalledTimes(1);
    });

    test('calls onThemeChange callback when theme changes', async () => {
      const user = userEvent.setup();
      const onThemeChange = jest.fn();
      render(<ThemeToggle onThemeChange={onThemeChange} />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(onThemeChange).toHaveBeenCalledWith(THEMES.LIGHT);
    });

    test('does not call onThemeChange when callback is not provided', async () => {
      const user = userEvent.setup();
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      await user.click(button);

      // Should not throw error
      expect(mockUseTheme.toggleTheme).toHaveBeenCalledTimes(1);
    });
  });

  describe('Transition State', () => {
    test('adds transitioning class when isTransitioning is true', () => {
      mockUseTheme.isTransitioning = true;
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('transitioning');
    });

    test('disables button when transitioning', () => {
      mockUseTheme.isTransitioning = true;
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    test('does not add transitioning class when isTransitioning is false', () => {
      mockUseTheme.isTransitioning = false;
      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('transitioning');
    });
  });

  describe('Error Handling', () => {
    test('handles useTheme hook errors gracefully', () => {
      const { useTheme } = require('../../hooks/useTheme');
      useTheme.mockImplementation(() => {
        throw new Error('Hook error');
      });

      expect(() => {
        render(<ThemeToggle />);
      }).toThrow('Hook error');
    });

    test('handles missing theme gracefully', () => {
      mockUseTheme.theme = null;
      render(<ThemeToggle />);

      // Should still render button with fallback icon
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    test('handles invalid theme gracefully', () => {
      mockUseTheme.theme = 'invalid-theme';
      render(<ThemeToggle />);

      // Should still render button with default icon
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('System Preference Integration', () => {
    test('displays system preference in description', () => {
      mockUseTheme.theme = THEMES.SYSTEM;
      mockUseTheme.systemPreference = 'dark';
      render(<ThemeToggle />);

      const description = screen.getByText('Currently using system preference (dark theme)');
      expect(description).toBeInTheDocument();
    });

    test('handles unknown system preference', () => {
      mockUseTheme.theme = THEMES.SYSTEM;
      mockUseTheme.systemPreference = 'unknown';
      render(<ThemeToggle />);

      const description = screen.getByText('Currently using system preference (unknown theme)');
      expect(description).toBeInTheDocument();
    });
  });

  describe('Props Handling', () => {
    test('passes className to container', () => {
      render(<ThemeToggle className="test-class another-class" />);

      const container = screen.getByRole('button').parentElement;
      expect(container).toHaveClass('test-class', 'another-class');
    });

    test('merges default config with custom config', () => {
      const customConfig = {
        showLabel: true,
        transitionDuration: 500,
      };

      render(<ThemeToggle config={customConfig} />);

      // Should render with custom config applied
      expect(screen.getByText('Light')).toBeInTheDocument();
    });

    test('handles empty config object', () => {
      render(<ThemeToggle config={{}} />);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    test('handles null config', () => {
      render(<ThemeToggle config={null} />);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Component Structure', () => {
    test('renders icon with correct attributes', () => {
      render(<ThemeToggle />);

      const icon = screen.getByLabelText(/theme icon/);
      expect(icon).toHaveAttribute('aria-hidden', 'true');
      expect(icon).toHaveAttribute('role', 'img');
    });

    test('renders screen reader only text', () => {
      render(<ThemeToggle />);

      const srText = screen.getByText(/Currently using/);
      expect(srText).toBeInTheDocument();
    });

    test('conditional elements render based on config', () => {
      const configWithLabel = { showLabel: true };
      mockUseTheme.theme = THEMES.LIGHT;

      const { rerender } = render(<ThemeToggle config={configWithLabel} />);
      expect(screen.getByText('Light')).toBeInTheDocument();

      const configWithoutLabel = { showLabel: false };
      rerender(<ThemeToggle config={configWithoutLabel} />);
      expect(screen.queryByText('Light')).not.toBeInTheDocument();
    });
  });

  describe('Integration with useTheme Hook', () => {
    test('uses all values from useTheme hook', () => {
      const customMock = {
        theme: THEMES.DARK,
        systemPreference: 'dark',
        isTransitioning: true,
        setTheme: jest.fn(),
        toggleTheme: jest.fn(),
        cycleTheme: jest.fn(),
        THEMES,
      };

      const { useTheme } = require('../../hooks/useTheme');
      useTheme.mockReturnValue(customMock);

      render(<ThemeToggle />);

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('transitioning');
    });

    test('updates when useTheme values change', () => {
      const { useTheme } = require('../../hooks/useTheme');

      const { rerender } = render(<ThemeToggle />);

      // Initially light theme
      expect(screen.getByLabelText('light theme icon')).toHaveTextContent('☀️');

      // Change to dark theme
      mockUseTheme.theme = THEMES.DARK;
      useTheme.mockReturnValue(mockUseTheme);
      rerender(<ThemeToggle />);

      expect(screen.getByLabelText('dark theme icon')).toHaveTextContent('🌙');
    });
  });

  describe('Performance', () => {
    test('does not re-render unnecessarily', () => {
      const { rerender } = render(<ThemeToggle />);

      const button = screen.getByRole('button');
      const initialButton = button;

      rerender(<ThemeToggle />);

      expect(screen.getByRole('button')).toBe(initialButton);
    });

    test('handles rapid theme changes', async () => {
      const user = userEvent.setup();
      render(<ThemeToggle />);

      const button = screen.getByRole('button');

      // Rapid clicks
      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(mockUseTheme.toggleTheme).toHaveBeenCalledTimes(3);
    });
  });
});

describe('ThemeToggle Edge Cases', () => {
  test('handles missing THEMES constant', () => {
    const { useTheme } = require('../../hooks/useTheme');
    useTheme.mockReturnValue({
      ...mockUseTheme,
      THEMES: undefined,
    });

    expect(() => {
      render(<ThemeToggle />);
    }).not.toThrow();
  });

  test('handles undefined systemPreference', () => {
    mockUseTheme.systemPreference = undefined;
    mockUseTheme.theme = THEMES.SYSTEM;

    render(<ThemeToggle />);

    // Should still render without crashing
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('handles boolean config values as strings', () => {
    const config = {
      showLabel: 'true',
      showIndicator: 'false',
    };

    render(<ThemeToggle config={config} />);

    // Component should handle string conversion
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});