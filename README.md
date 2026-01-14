# Urban Tasty - Company Portfolio Website

A modern, responsive company portfolio website for Urban Tasty, showcasing premium wholesale and retail stationary items.

## Features

- **Modern Design**: Clean, professional design with green and orange color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Product Showcase**: Interactive product catalog with category filtering
- **Company Portfolio**: Professional presentation of company information
- **Contact Forms**: Newsletter subscription and contact form
- **Optimized**: Built with Next.js 16 for optimal performance

## Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Latest React features

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
urbantasty/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Products.tsx      # Products showcase
│   ├── PromoBanners.tsx  # Promotional banners
│   └── Newsletter.tsx    # Newsletter and contact section
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Products Featured

- Banana Powder
- Coconut Oil
- Drumstick Powder
- Jackfruit Puttupodi
- Nannari Syrup
- Ragi Powder

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- Primary: Green (#22c55e)
- Secondary: Orange (#f97316)
- Accent: Yellow (#fbbf24)

### Content

Update product information in `components/Products.tsx` and company details in `components/About.tsx`.

### Images

The website currently uses high-quality images from Unsplash. To use your own product images:

1. **Option 1: Use local images**
   - Place your images in the `public/images/` directory
   - Update image paths in components (e.g., `/images/banana-powder.jpg`)

2. **Option 2: Use external image URLs**
   - Update the `image` property in the products array in `components/Products.tsx`
   - If using a different domain, add it to `next.config.js` in the `images.remotePatterns` array

3. **Image Optimization**
   - The website uses Next.js Image component for automatic optimization
   - Images are automatically optimized for performance and responsive loading
   - Recommended image dimensions: 600x600px for product images, 800x800px for hero images

## License

Copyright © 2025 Urban Tasty. All rights reserved.

