# Deployment Guide

This landing page for Otologic Technologies can be easily deployed on either **Vercel** or **GitHub Pages**.

## Option 1: Deploy to Vercel (Recommended)

Vercel provides the easiest deployment experience for React applications:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project" and import your GitHub repository

2. **Configuration:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy:**
   - Click "Deploy" - Vercel will automatically build and deploy your site
   - Your site will be available at a `your-project-name.vercel.app` URL

## Option 2: Deploy to GitHub Pages

1. **Install GitHub Pages deployment package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts and homepage field:
   ```json
   {
     "homepage": "https://yourusername.github.io/otologic-web",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Configure Vite for GitHub Pages:**
   Update `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from "path"

   export default defineConfig({
     base: '/otologic-web/', // Replace with your repository name
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch

## Build Verification

To verify the build locally:

```bash
npm run build    # Build the project
npm run preview  # Preview the built site locally
```

## Custom Domain (Optional)

For both platforms, you can configure a custom domain:

- **Vercel:** Go to Project Settings > Domains
- **GitHub Pages:** Add a `CNAME` file to your repository root with your domain name

## Environment Variables

This project doesn't require any environment variables for basic functionality.

## Contact

For any deployment issues or questions, contact: contact@otologictech.com
