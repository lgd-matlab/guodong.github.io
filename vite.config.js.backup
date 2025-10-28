import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],

  // Build configuration for Islands Architecture
  build: {
    outDir: 'assets/js/bundles',
    rollupOptions: {
      input: {
        // Individual component entry points for Islands Architecture
        'citation-badge': resolve(__dirname, 'src/components/CitationBadge.entry.jsx'),
        'theme-toggle': resolve(__dirname, 'src/components/ThemeToggle.entry.jsx'),
        'author-profile': resolve(__dirname, 'src/components/AuthorProfile.entry.jsx'),
        'publication-list': resolve(__dirname, 'src/components/PublicationList.entry.jsx'),
        'navigation': resolve(__dirname, 'src/components/Navigation.entry.jsx'),
        'search-form': resolve(__dirname, 'src/components/SearchForm.entry.jsx'),
      },
      output: {
        // Use hash for cache busting
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',

        // Ensure clean output
        sanitizeFileName: (name) => name.replace(/[^\w-]/g, '_'),
      }
    },

    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },

    // Target modern browsers but maintain compatibility
    target: 'es2015',

    // Asset inlining threshold
    assetsInlineLimit: 4096,
  },

  // CSS configuration for CSS Modules
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    // Process CSS from node_modules as global styles
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/shared/variables.css";`,
      },
    },
  },

  // Development server configuration
  server: {
    port: 3000,
    host: true, // Allow external connections
    cors: true,
    proxy: {
      // Proxy API requests to Jekyll development server
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  // Preview server for production builds
  preview: {
    port: 3001,
    host: true,
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@tanstack/react-query',
    ],
    exclude: [
      // Exclude components that should be built separately
      'src/components/CitationBadge.entry.jsx',
      'src/components/ThemeToggle.entry.jsx',
      'src/components/AuthorProfile.entry.jsx',
    ],
  },

  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },

  // Experimental features
  experimental: {
    renderBuiltUrl: (filename, { hostType }) => {
      if (hostType === 'js') {
        // Return relative paths for JS imports
        return { js: `{{ '/assets/js/bundles/' }}${filename}` };
      } else {
        // Return absolute paths for other assets
        return { relative: filename };
      }
    },
  },
});