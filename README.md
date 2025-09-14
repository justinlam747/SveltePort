# Justin's Portfolio

A modern, responsive portfolio website built with SvelteKit, GSAP animations, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional design following the provided theme
- 🚀 **SvelteKit**: Fast, modern web framework
- ✨ **GSAP Animations**: Smooth, professional animations and transitions
- 🎯 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 📝 **Static Data**: Easy project management with shared data source
- 📱 **Responsive**: Works perfectly on all devices
- 🔍 **Project Modals**: Detailed project views with technology stacks and project trees
- 🌟 **Interactive**: Hover effects and smooth transitions

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Navigation.svelte
│   │   ├── HeroSection.svelte
│   │   ├── ProjectGrid.svelte
│   │   └── ProjectModal.svelte
│   └── utils/
│       └── projects.js
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── about/
│   ├── works/
│   └── contact/
├── content/
│   ├── projects/
│   └── personal.yml
└── app.css
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Content Management

### Project Management

1. Edit projects in `src/lib/data/projects.js`
2. Add project images to `static/images/`
3. Push changes to trigger automatic deployment

### Adding Projects

Projects are managed through:
- Static data file: `src/lib/data/projects.js`
- Single source of truth for both landing and works pages

Each project includes:
- Title and subtitle
- Description and category
- Technologies used
- Image filename
- External link (GitHub/live demo)
- Demo and source URLs

## Customization

### Colors and Styling

Edit `tailwind.config.js` to customize:
- Color palette
- Fonts
- Animations
- Spacing

### Content

Update personal information in:
- `src/content/personal.yml`
- Static data management

### Projects

Add new projects via:
- Static data management
- Manual markdown files in `src/content/projects/`

## Technologies Used

- **SvelteKit** - Web framework
- **GSAP** - Animations
- **Tailwind CSS** - Styling
- **Static Data** - Project management
- **Vite** - Build tool

## Deployment

This project is optimized for deployment on:
- Netlify (recommended)
- Vercel
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!
