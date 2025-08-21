# Deployment Guide

This landing page for Otologic Technologies can be easily deployed on either **Vercel** or **GitHub Pages**.

## Option 1: GitHub Pages with Auto-Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the master branch.

### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section in the left sidebar
   - Under "Source", select **"GitHub Actions"** 
   - The workflow is already configured in `.github/workflows/deploy.yml`

2. **Push to Master:**
   - Any push to the `master` branch will automatically trigger a build and deployment
   - Your site will be available at: `https://yourusername.github.io/otologic-web`
   - The workflow will build the project and deploy the `dist` folder contents

3. **Monitor Deployment:**
   - Go to the "Actions" tab in your repository to monitor deployment progress
   - Each deployment creates a new GitHub Pages environment

### Workflow Features:
- ✅ Triggers on push to master branch
- ✅ Can be manually triggered from GitHub Actions tab
- ✅ Builds with Node.js 20 and npm
- ✅ Uploads build artifacts to GitHub Pages
- ✅ Proper permissions and security configured

## Option 2: Deploy to Vercel

Vercel provides an alternative deployment option:

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

## Manual GitHub Pages Deployment (Legacy Method)

If you prefer manual deployment instead of auto-deployment:

1. **Install GitHub Pages deployment package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy manually:**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to repository settings → Pages
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch

## Configuration Details

The project is pre-configured with:
- **Base path**: `/otologic-web/` (set in `vite.config.ts`)
- **Build output**: `dist/` directory
- **Static assets**: Properly handled by Vite

## Troubleshooting

**If the GitHub Actions workflow fails:**
1. Check that GitHub Pages is enabled in repository settings
2. Ensure the source is set to "GitHub Actions"
3. Verify the workflow file exists at `.github/workflows/deploy.yml`
4. Check the Actions tab for detailed error logs

**If assets don't load on GitHub Pages:**
- Ensure the `base` path in `vite.config.ts` matches your repository name
- Verify static assets are in the `public/` folder

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
