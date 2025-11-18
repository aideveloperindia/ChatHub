# ChatHub Website

Official landing website for ChatHub – Stranger Chat App.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Features

- Dark-neon glossy UI with glassmorphism effects
- Responsive design
- Smooth animations and transitions
- SEO optimized

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx          # Landing page
│   ├── features/         # Features page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── WhyChatHub.tsx    # Why choose section
│   ├── DownloadCTA.tsx   # Download CTA section
│   ├── FAQ.tsx           # FAQ accordion
│   └── Footer.tsx        # Footer component
└── public/               # Static assets
    └── chathubimage*.webp # App screenshots
```

## Notes

- Add the Google Play Store badge image (`play-store-badge.png`) to the `public/` folder
- All app screenshots should be in the `public/` folder
- The website uses a dark theme with neon accents, while showcasing the app's light theme screenshots

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Peppty Technologies Pvt Ltd


