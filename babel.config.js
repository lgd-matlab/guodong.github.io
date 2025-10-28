module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 11'],
        },
        modules: false, // Let webpack/vite handle modules
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // For React 17+ transform
        development: process.env.NODE_ENV === 'development',
      },
    ],
  ],
  plugins: [
    // Add any additional plugins here
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
            modules: 'commonjs', // Jest requires CommonJS
          },
        ],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    },
  },
};