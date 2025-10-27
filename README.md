# Jazila - A Love Story

A romantic digital journey built with Next.js.

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

This creates an optimized production build in the `out` directory, ready for static hosting.

## Deployment to Cloudflare Pages

### Option 1: Automatic Deployment via Git

1. Push your code to GitHub, GitLab, or Bitbucket
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to Pages → Create a project
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `20` or latest
6. Click "Save and Deploy"

### Option 2: Manual Deployment via Wrangler CLI

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Deploy to Cloudflare Pages:
   ```bash
   wrangler pages deploy out
   ```

### Environment Variables

If you need environment variables in the future, add them in Cloudflare Pages settings under Environment Variables.

## Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/public` - Static assets (images, videos, fonts)
- `/out` - Production build output (generated after build)

## Features

- Responsive design optimized for all devices
- Smooth scrolling experience
- Auto-playing video backgrounds
- Custom typography with Ogg and Switzer fonts
- Starfield animations

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cloudflare Pages (for deployment)
