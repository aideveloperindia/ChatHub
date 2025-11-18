# ChatHub Website Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Important Notes

### Play Store Badge
The website includes a placeholder Play Store badge (`public/play-store-badge.svg`). For production, replace it with the official Google Play badge from:
- [Google Play Badge Generator](https://play.google.com/intl/en_us/badges/)

Download the badge and save it as `play-store-badge.png` or `play-store-badge.svg` in the `public/` folder.

### Images
All app screenshots are already in the `public/` folder:
- `chathubimage.webp` - Registration/Hero screen
- `chathubimage1.webp` - Global community features
- `chathubimage2.webp` - Filter options
- `chathubimage3.webp` - Chat/Voice/Video features
- `chathubimage4.webp` - Profile details

### Customization

#### Colors
Edit `tailwind.config.ts` to customize neon colors:
- `neon-blue`: #00D9FF
- `neon-purple`: #B026FF
- `neon-pink`: #FF00E5
- `neon-cyan`: #00FFFF

#### Content
- Landing page: `app/page.tsx`
- Features page: `app/features/page.tsx`
- Components: `components/` folder

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The website can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting** (after `npm run build`)

For Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically


