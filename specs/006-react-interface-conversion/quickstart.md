# Quickstart Guide: React Interface Conversion

**Purpose**: Quick reference for implementing React components in the academic website
**Target Audience**: Developers implementing the React interface conversion
**Last Updated**: 2025-10-28

## Prerequisites

Before starting with React component implementation, ensure you have:

1. **Node.js 18+** installed
2. **npm** or **yarn** package manager
3. **Git** with the feature branch checked out: `006-react-interface-conversion`
4. **Basic knowledge** of React, TypeScript, and Jekyll

## Quick Setup

### 1. Install React Dependencies

```bash
# Install core React dependencies
npm install react react-dom

# Install development dependencies
npm install --save-dev @vitejs/plugin-react @types/react @types/react-dom vite

# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Install state management
npm install @tanstack/react-query

# Install styling dependencies
npm install --save-dev vite-plugin-css-modules
```

### 2. Create Vite Configuration

Create `vite.config.js` in the root directory:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'assets/js/bundles',
    rollupOptions: {
      input: {
        'citation-manager': resolve(__dirname, 'src/components/CitationManager.jsx'),
        'theme-toggle': resolve(__dirname, 'src/components/ThemeToggle.jsx'),
        'publication-list': resolve(__dirname, 'src/components/PublicationList.jsx'),
      },
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
});
```

### 3. Update Package.json Scripts

```json
{
  "scripts": {
    "build:react": "vite build",
    "build:js": "npm run build:react && npm run uglify",
    "watch:react": "vite build --watch",
    "test:react": "jest",
    "test:watch": "jest --watch",
    "jekyll:serve": "bundle exec jekyll serve",
    "dev": "npm run watch:react & npm run jekyll:serve"
  }
}
```

## Component Templates

### Basic React Component Template

```jsx
// src/components/ComponentName.jsx
import React, { useState, useEffect } from 'react';
import styles from './ComponentName.module.css';

const ComponentName = ({ data, onAction }) => {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Component initialization logic
  }, []);

  const handleAction = (actionData) => {
    // Handle user interactions
    onAction?.(actionData);
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### Jekyll Integration Template

```html
<!-- In your Jekyll include or layout -->
<div id="react-component-name"
     data-prop="{{ some_data | jsonify | escape }}"
     data-config="{{ site.component_config | jsonify | escape }}">
  <!-- Fallback content for no JavaScript -->
  <div class="react-fallback">
    <!-- Existing jQuery functionality -->
  </div>
</div>

<!-- Load React component -->
<script type="module" src="/assets/js/bundles/component-name.js"></script>
```

### Component Entry Point Template

```jsx
// src/components/ComponentName.entry.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentName from './ComponentName';

const mountComponentName = () => {
  const container = document.getElementById('react-component-name');
  if (!container) return;

  const props = JSON.parse(container.dataset.prop || '{}');
  const config = JSON.parse(container.dataset.config || '{}');

  const root = createRoot(container);
  root.render(<ComponentName {...props} config={config} />);
};

// Mount component when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountComponentName);
} else {
  mountComponentName();
}
```

## First Component: Citation Badge

### 1. Create Component

```jsx
// src/components/CitationBadge.jsx
import React from 'react';
import { useCitationData } from '../hooks/useCitationData';
import styles from './CitationBadge.module.css';

const CitationBadge = ({ doi, title, venue }) => {
  const { data, isLoading, error } = useCitationData(doi);

  if (isLoading) {
    return <span className={styles.badge}>Loading citations...</span>;
  }

  if (error) {
    return <span className={styles.badge + ' ' + styles.error}>Citations unavailable</span>;
  }

  const citationCount = data?.citation_count || 0;

  return (
    <span className={styles.badge} title={`${citationCount} citations from OpenAlex`}>
      Cited by {citationCount}
    </span>
  );
};

export default CitationBadge;
```

### 2. Create Custom Hook

```jsx
// src/hooks/useCitationData.js
import { useQuery } from '@tanstack/react-query';

const fetchCitationData = async (doi) => {
  if (!doi) return null;

  // Check localStorage cache first
  const cacheKey = `citation_${doi}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    // Cache for 1 hour
    if (Date.now() - timestamp < 1000 * 60 * 60) {
      return data;
    }
  }

  try {
    const response = await fetch(`https://api.openalex.org/works/doi:${doi}`);
    if (!response.ok) throw new Error('Citation fetch failed');

    const data = await response.json();
    const citationData = {
      citation_count: data.cited_by_count || 0,
      title: data.display_name,
      publication_year: data.publication_year
    };

    // Cache the result
    localStorage.setItem(cacheKey, JSON.stringify({
      data: citationData,
      timestamp: Date.now()
    }));

    return citationData;
  } catch (error) {
    console.error('Error fetching citation data:', error);
    throw error;
  }
};

export const useCitationData = (doi) => {
  return useQuery({
    queryKey: ['citation', doi],
    queryFn: () => fetchCitationData(doi),
    enabled: !!doi,
    staleTime: 1000 * 60 * 60, // 1 hour
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
```

### 3. Create Styles

```css
/* src/components/CitationBadge.module.css */
.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: var(--badge-bg);
  color: var(--badge-text);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.badge:hover {
  background-color: var(--badge-bg-hover);
}

.badge.loading {
  background-color: var(--badge-bg-loading);
  color: var(--badge-text-loading);
}

.badge.error {
  background-color: var(--badge-bg-error);
  color: var(--badge-text-error);
}
```

### 4. Jekyll Integration

```html
<!-- In _includes/archive-single.html -->
<span class="react-citation-badge"
      data-doi="{{ page.doi | escape }}"
      data-title="{{ page.title | escape }}"
      data-venue="{{ page.venue | escape }}">
  <!-- Fallback to existing citation functionality -->
  {% if page.citation_count %}
    <span class="citation-count">Cited by {{ page.citation_count }}</span>
  {% endif %}
</span>

<script type="module" src="/assets/js/bundles/citation-badge.js"></script>
```

## Testing Quickstart

### 1. Component Test

```jsx
// src/components/__tests__/CitationBadge.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CitationBadge from '../CitationBadge';

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
};

const renderWithQueryClient = (component) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  );
};

describe('CitationBadge', () => {
  it('displays loading state', () => {
    renderWithQueryClient(
      <CitationBadge doi="10.1234/test.doi" title="Test Paper" venue="Test Venue" />
    );

    expect(screen.getByText('Loading citations...')).toBeInTheDocument();
  });

  it('displays citation count when data is loaded', async () => {
    // Mock successful API response
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        cited_by_count: 42,
        display_name: 'Test Paper',
        publication_year: 2024
      })
    });

    renderWithQueryClient(
      <CitationBadge doi="10.1234/test.doi" title="Test Paper" venue="Test Venue" />
    );

    expect(await screen.findByText('Cited by 42')).toBeInTheDocument();
  });
});
```

### 2. Run Tests

```bash
# Run all React component tests
npm run test:react

# Run tests in watch mode
npm run test:watch
```

## Development Workflow

### 1. Development Mode

```bash
# Start React build in watch mode and Jekyll server
npm run dev
```

### 2. Building for Production

```bash
# Build React components and Jekyll site
npm run build:js
bundle exec jekyll build
```

### 3. Deployment

The GitHub Actions workflow will automatically:
1. Build React components
2. Build Jekyll site
3. Deploy to GitHub Pages

## Common Patterns

### Theme Integration

```jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`themed-component theme-${theme}`}>
      <button onClick={toggleTheme}>
        Current theme: {theme}
      </button>
    </div>
  );
};
```

### Error Boundaries

```jsx
// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page and try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Progressive Enhancement

```jsx
// Wrap components with error boundaries and loading states
const SafeComponent = ({ children, fallback }) => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};
```

## Troubleshooting

### Common Issues

1. **Component not rendering**: Check that the mount point ID matches the entry point
2. **Build errors**: Ensure all imports are correct and dependencies installed
3. **Styling issues**: Check CSS Modules syntax and CSS variable usage
4. **API errors**: Verify network requests and CORS settings

### Debug Mode

Add this to your Vite config for development debugging:

```javascript
export default defineConfig({
  // ... other config
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true
      }
    }
  }
});
```

## Next Steps

1. **Implement Citation Badge** following the template
2. **Create Theme Toggle** component with React Context
3. **Build Publication List** with filtering and sorting
4. **Add comprehensive testing** for all components
5. **Performance optimization** with code splitting
6. **Accessibility audit** and improvements

For detailed implementation guidance, refer to:
- [Data Model Specification](data-model.md)
- [API Contracts](contracts/api-contract.yaml)
- [Research Findings](research.md)