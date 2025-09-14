# Abo's Portfolio

A modern, responsive portfolio website built with SvelteKit, GSAP animations, Tailwind CSS, and Netlify CMS.

## Features

- 🎨 **Modern Design**: Clean, professional design following the provided theme
- 🚀 **SvelteKit**: Fast, modern web framework
- ✨ **GSAP Animations**: Smooth, professional animations and transitions
- 🎯 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 📝 **Netlify CMS**: Easy content management for projects and personal info
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
│       └── cms.js
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

### Netlify CMS Setup

1. Deploy to Netlify
2. Enable Git Gateway in Netlify Identity
3. Access CMS at `/admin`
4. Configure authentication

### Adding Projects

Projects can be managed through:
- Netlify CMS interface at `/admin`
- Direct markdown files in `src/content/projects/`

Each project includes:
- Title and subtitle
- Description and category
- Technologies used
- Project tree structure
- Build process details
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
- Netlify CMS admin interface

### Projects

Add new projects via:
- Netlify CMS admin interface
- Manual markdown files in `src/content/projects/`

## Technologies Used

- **SvelteKit** - Web framework
- **GSAP** - Animations
- **Tailwind CSS** - Styling
- **Netlify CMS** - Content management
- **Vite** - Build tool

## Deployment

This project is optimized for deployment on:
- Netlify (recommended for CMS integration)
- Vercel
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!
