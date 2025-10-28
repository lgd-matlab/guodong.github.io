# Quick Start Guide: Fix Vercel Deployment Configuration

**Purpose**: Quick reference for implementing the Vercel deployment fix
**Target**: Developers who need to deploy React/Vite applications with existing Jekyll files

## Problem Summary

Vercel incorrectly detects the project as Jekyll instead of React/Vite due to the presence of `_config.yml` and `Gemfile`. This causes Ruby gem installation during deployment instead of npm build.

## Solution Overview

1. **Explicit Vercel Configuration**: Create `vercel.json` to force Vite framework detection
2. **File Exclusions**: Use `.vercelignore` to exclude Jekyll files from deployment
3. **Package Cleanup**: Remove duplicate dependencies and update Node.js requirements

## Implementation Steps

### Step 1: Create Vercel Configuration

Create `vercel.json` in repository root:

```json
{
  "version": 2,
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Key Points**:
- `"framework": "vite"` explicitly tells Vercel to use Vite
- `"outputDirectory": "dist"` matches Vite's default output
- `"rewrites"` enables SPA routing

### Step 2: Create Deployment Exclusions

Create `.vercelignore` in repository root:

```
# Jekyll Configuration Files
_config.yml
_config_*.yml
Gemfile
Gemfile.lock

# Jekyll Directories
_layouts/
_posts/
_includes/
_data/
_sass/
_collections/

# Jekyll Build Artifacts
_site/
.jekyll-cache/
.jekyll-metadata
.sass-cache/

# Development Files
.git/
node_modules/
*.log
README.md
```

**Key Points**:
- Excludes all Jekyll detection triggers
- Preserves React/Vite essential files
- Reduces deployment size

### Step 3: Update Package Configuration

Update `package.json`:

```json
{
  "engines": {
    "node": ">= 18.0.0"
  },
  "dependencies": {
    "vite": "^6.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.7.0",
    "typescript": "^5.9.3"
  }
}
```

**Key Points**:
- Update Node.js version requirement
- Remove duplicate dependencies
- Consolidate type definitions

### Step 4: Verify Vite Configuration

Ensure `vite.config.ts` has proper build settings:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: mode === "development",
    minify: mode === "production" ? "terser" : false,
  },
}));
```

## Testing the Fix

### Local Testing

1. **Test Build Process**:
   ```bash
   npm run build
   ```
   Verify `dist/` directory is created with all assets.

2. **Test Preview**:
   ```bash
   npm run preview
   ```
   Verify application runs locally from build artifacts.

3. **Test Vercel Development**:
   ```bash
   npx vercel dev
   ```
   Verify Vercel uses correct configuration locally.

### Deployment Testing

1. **Commit Changes**:
   ```bash
   git add vercel.json .vercelignore package.json vite.config.ts
   git commit -m "Configure Vercel for React/Vite deployment"
   git push origin main
   ```

2. **Monitor Build**:
   - Check Vercel dashboard for build progress
   - Verify no Ruby gem installation occurs
   - Confirm npm install and npm run build execute

3. **Verify Deployment**:
   - Visit deployed URL
   - Test all application routes
   - Verify assets load correctly

## Common Issues and Solutions

### Issue: Build Still Uses Jekyll
**Solution**: Ensure `vercel.json` has `"framework": "vite"` and clear Vercel build cache.

### Issue: Assets Not Loading
**Solution**: Verify `outputDirectory` matches Vite's build output and check asset paths in `dist/index.html`.

### Issue: Routes Return 404
**Solution**: Ensure `rewrites` configuration is correct and test SPA routing.

### Issue: Build Timeout
**Solution**: Optimize build process and ensure all dependencies are properly declared.

## Validation Checklist

- [ ] `vercel.json` created with explicit framework setting
- [ ] `.vercelignore` excludes all Jekyll detection triggers
- [ ] `package.json` engines field updated to Node.js >= 18.0.0
- [ ] Duplicate dependencies removed
- [ ] Local build succeeds (`npm run build`)
- [ ] `dist/` directory contains all necessary assets
- [ ] Vercel deployment completes without Ruby gem installation
- [ ] Deployed application loads correctly
- [ ] All application routes work without 404 errors

## Rollback Plan

If deployment fails:

1. **Quick Rollback**:
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Cache Clear**:
   - Clear Vercel build cache in dashboard
   - Trigger new deployment

3. **Partial Rollback**:
   - Remove problematic configuration files
   - Test incremental changes

## Success Metrics

Successful implementation shows:
- Build time < 3 minutes
- No Ruby gem installation in logs
- npm install and build execute successfully
- Application loads from deployed URL
- All routes work correctly

## Support Resources

- [Vercel Framework Detection Documentation](https://vercel.com/docs/frameworks)
- [Vercel Configuration Reference](https://vercel.com/docs/projects/project-configuration)
- [Vite Deployment Guide](https://vitejs.dev/guide/build.html#deployment)
- [Troubleshooting Vercel Builds](https://vercel.com/docs/concepts/deployments#troubleshooting)