# Research Summary: Fix Vercel Deployment Configuration

**Date**: 2025-10-28
**Feature**: Fix Vercel deployment to recognize React/Vite instead of Jekyll
**Research Focus**: Vercel auto-detection patterns and configuration solutions

## Problem Analysis

### Root Cause Identified
Vercel auto-detects project types based on specific files. In this repository, both Jekyll and React indicators exist:

**Jekyll Detection Triggers (Present):**
- `_config.yml` file
- `Gemfile` with Jekyll dependencies
- `_posts/`, `_publications/`, `_layouts/`, `_includes/` directories

**React/Vite Detection Triggers (Present):**
- `package.json` with React/Vite dependencies
- `vite.config.ts` file
- `index.html` in root
- `src/` directory structure

**Issue**: Vercel prioritizes Jekyll detection when `_config.yml` is present, causing Ruby gem installation instead of npm build.

## Solution Decisions

### Decision 1: Explicit Framework Configuration
**Chosen Approach**: Use `vercel.json` with explicit framework specification
```json
{
  "version": 2,
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

**Rationale**: Explicitly telling Vercel to use Vite framework overrides auto-detection. This is the most direct solution to the core problem.

**Alternatives Considered**:
- Removing Jekyll files entirely (rejected - breaks existing functionality)
- Using separate repositories (rejected - adds unnecessary complexity)
- Custom build scripts (rejected - over-engineering for this use case)

### Decision 2: File Exclusion Strategy
**Chosen Approach**: Create `.vercelignore` to exclude Jekyll files from deployment
```
# Jekyll files
_config.yml
Gemfile
Gemfile.lock
_layouts/
_posts/
_includes/
_data/
_sass/
_site/
.jekyll-cache/
.jekyll-metadata
```

**Rationale**: Prevents Jekyll files from being considered during deployment detection and reduces deployment size.

**Alternatives Considered**:
- Moving Jekyll files to subdirectory (rejected - would break Jekyll functionality)
- Using Vercel's root directory setting (rejected - adds complexity)

### Decision 3: SPA Routing Configuration
**Chosen Approach**: Include rewrites for single-page application routing
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Rationale**: Ensures all client-side routes work correctly in the deployed application.

## Technical Requirements Resolved

### Build Process Configuration
- **Build Command**: `npm run build` (standard Vite build)
- **Output Directory**: `dist` (Vite's default)
- **Install Command**: `npm install` (standard npm install)

### Node.js Compatibility
- Update `engines.node` from `>= 0.10.0` to `>= 18.0.0` in package.json
- Ensures compatibility with modern Vercel runtime and Vite 6.x

### Dependency Management
- Remove duplicate vite versions (was present in both dependencies and devDependencies)
- Consolidate type definitions (@types/react, @types/react-dom)
- Clean up conflicting package versions

## Implementation Strategy

### Phase 1: Configuration Files
1. Create `vercel.json` with explicit Vite configuration
2. Create `.vercelignore` to exclude Jekyll files
3. Update `package.json` engines field
4. Clean up duplicate dependencies

### Phase 2: Build Validation
1. Test build locally with `npm run build`
2. Verify `dist/` directory structure
3. Test SPA routing works correctly
4. Validate all assets are properly built

### Phase 3: Deployment Testing
1. Commit configuration changes
2. Trigger Vercel deployment
3. Monitor build logs for Ruby gem errors (should not occur)
4. Verify deployed application loads correctly

## Risk Mitigation

### Potential Issues and Solutions
1. **Build Cache Issues**: Clear Vercel build cache if needed
2. **Missing Assets**: Verify all assets are in `dist/` directory
3. **Routing Problems**: Test all application routes post-deployment
4. **Environment Variables**: Ensure proper environment configuration

### Rollback Strategy
- Keep current working Jekyll deployment as fallback
- Use Git version control to quickly revert if needed
- Monitor deployment closely for first few hours

## Success Metrics

Based on research, successful implementation will show:
- Vercel build completes in < 3 minutes
- No Ruby gem installation in build logs
- npm install and npm run build executed successfully
- Application loads correctly from deployed URL
- All client-side routes work without 404 errors

## Next Steps

The research provides clear guidance for implementing the Vercel configuration fix. All technical unknowns have been resolved, and specific configuration patterns have been identified. The solution follows Vercel best practices and should resolve the deployment issue while maintaining existing functionality.