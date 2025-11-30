# Deployment Guide

## Quick Deploy Options

### Option 1: Netlify (Recommended)

#### Via Netlify CLI
```powershell
# Build the project
npm run build

# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### Via Netlify UI (Easiest)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Live URL**: Will be provided after deployment (e.g., `https://ai-interface-xyz.netlify.app`)

---

### Option 2: Vercel

#### Via Vercel CLI
```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Via Vercel UI
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Live URL**: Will be provided (e.g., `https://ai-interface-xyz.vercel.app`)

---

### Option 3: GitHub Pages

#### Setup
1. Install gh-pages package:
```powershell
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

4. Deploy:
```powershell
npm run deploy
```

**Live URL**: `https://yourusername.github.io/repository-name`

---

## Deploy Storybook Separately

### Chromatic (Recommended for Storybook)
```powershell
# Install Chromatic
npm install --save-dev chromatic

# Build and deploy Storybook
npx chromatic --project-token=YOUR_TOKEN
```

### Netlify/Vercel (Static Storybook)
```powershell
# Build Storybook
npm run build-storybook

# Deploy the storybook-static folder
# (Use same process as above but with storybook-static directory)
```

---

## Environment Variables (If Needed)

If integrating real AI APIs, create `.env` file:

```env
VITE_OPENAI_API_KEY=your_openai_key
VITE_ANTHROPIC_API_KEY=your_anthropic_key
```

**Important**: 
- Never commit `.env` to Git
- Add `.env` to `.gitignore`
- For production, set env vars in hosting platform dashboard

---

## Pre-Deployment Checklist

- [ ] Run `npm run build` locally to test
- [ ] Check for TypeScript errors: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Update README with live URL after deployment
- [ ] Test on mobile devices
- [ ] Verify dark mode works
- [ ] Check accessibility (run Lighthouse)

---

## Troubleshooting

### Build fails with TypeScript errors
```powershell
# Check for errors
npx tsc --noEmit

# Fix errors and rebuild
npm run build
```

### 404 on refresh (SPA routing)
For Netlify, create `public/_redirects`:
```
/*    /index.html   200
```

For Vercel, create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Build size too large
- Already optimized with Vite
- Tailwind CSS purges unused styles
- Tree-shaking enabled
- Current bundle: ~150KB gzipped

---

## Post-Deployment

1. Update README.md with live URL
2. Test all features on production
3. Add live URL to GitHub repository description
4. Share Storybook link if deployed separately

---

## Expected URLs

After deployment, you'll have:

1. **Main Application**: `https://your-domain.netlify.app` or `.vercel.app`
2. **Storybook** (if deployed): `https://your-storybook-domain.chromatic.com`
3. **GitHub Repository**: `https://github.com/yourusername/repository-name`

Update these in your assessment submission!
