# Chetan Bhandari - AI Developer Portfolio

A premium, modern developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Featuring a sleek design with smooth animations, glassmorphism effects, and a focus on AI/ML projects.

## Features

✨ **Modern Design**
- Premium minimalist aesthetic
- Soft pastel color scheme (Lavender, Cream, Purple)
- Glassmorphism effects with soft shadows
- Smooth animations and transitions

🎯 **Fully Responsive**
- Mobile-first design
- Desktop and tablet optimized
- Smooth scrolling experience

🌓 **Dark Mode Support**
- Toggle between light and dark themes
- Persistent theme preference

🚀 **Performance Optimized**
- Built with Vite for fast development
- Optimized for production
- Lazy loading and code splitting

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Sections

1. **Hero** - Engaging introduction with split-screen layout
2. **About** - Professional background with animated statistics
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with tech stack and links
5. **Experience** - Education and coursework
6. **Resume** - Resume download and preview
7. **Contact** - Contact form and social links
8. **Footer** - Navigation and social links

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit the following files to customize content:
- `src/components/Hero.jsx` - Main headline and introduction
- `src/components/About.jsx` - About section content
- `src/components/Projects.jsx` - Project details
- `src/components/Contact.jsx` - Contact information

### Modify Colors

Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  lavender: { ... },
  cream: '#faf8f3',
}
```

### Add Resume

Place your resume PDF in the `public` folder and update the filename in `src/components/Resume.jsx`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar
│   ├── Hero.jsx             # Hero section
│   ├── About.jsx            # About section with stats
│   ├── Skills.jsx           # Skills grid
│   ├── Projects.jsx         # Project cards
│   ├── Experience.jsx       # Education section
│   ├── Resume.jsx           # Resume section
│   ├── Contact.jsx          # Contact form
│   ├── Footer.jsx           # Footer
│   └── BackgroundElements.jsx # Animated backgrounds
├── App.jsx                  # Main app component
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## Performance Tips

1. Optimize images for web
2. Use lazy loading for images
3. Consider service workers for offline support
4. Monitor Core Web Vitals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: email@gmail.com
- **GitHub**: https://github.com
- **LinkedIn**: https://linkedin.com

---

Built with ❤️ by Chetan Bhandari
