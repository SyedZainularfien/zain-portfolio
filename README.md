# Anime Portfolio Website

A modern, anime-themed personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Anime-inspired design with smooth animations
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Interactive particle background
- 📊 Skills visualization with progress bars
- 💼 Project showcase with carousel
- 📝 Experience timeline
- 📧 Contact form

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **UI Components**: Radix UI, Lucide React
- **State Management**: TanStack Query
- **Animations**: Framer Motion, Lottie React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd anime-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── data/        # Static data
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility libraries
│   │   └── pages/       # Page components
├── attached_assets/     # Additional assets
└── dist/               # Production build output
```

## Customization

### Personal Information

Edit the data in `client/src/data/portfolio.ts` to customize:
- Projects
- Skills
- Experience
- Personal information

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Fonts in `client/index.html`
- Component styles in individual component files

### Images

Add your images to `client/public/images/` and update the references in the data file.

## Deployment

This is a static frontend application that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply build the project and upload the `dist` folder contents.

## License

MIT License - feel free to use this project for your own portfolio!