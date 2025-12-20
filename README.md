# TechFlow

A modern landing page for TechFlow - an AI-powered workflow automation platform. This repository contains a responsive web application built with HTML and Tailwind CSS, featuring light/dark theme support and smooth animations.

## Features

- 🎨 Responsive design that works on all devices
- 🌓 Light/Dark theme support
- ✨ Smooth scroll animations using AOS library
- 🎯 Modern UI with Tailwind CSS
- 📱 Font Awesome icons integration
- 📑 Sections for Features, Reviews, and Pricing

## Project Structure

- `index.html` - The main HTML page with responsive layout
- `src/` - Source files for CSS and other assets
  - `input.css` - Tailwind CSS configuration and custom styles
- `img/` - Image assets and favicons
- `dist/` - Compiled CSS output
- `package.json` - Project dependencies and build scripts

## Technology Stack

- HTML5 for structure
- Tailwind CSS v4.1.14 for styling
- AOS (Animate On Scroll) library for animations
- Font Awesome v6.6.0 for icons

## Prerequisites

- Node.js (recommended v16+)
- npm (bundled with Node.js)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd TechFlow
```

2. Install dependencies:

```bash
npm install
```

### Development

This project uses Tailwind CSS for styling. To start development:

1. Run the CSS watcher:

```bash
npm run watch:css
```

This command watches `./src/input.css` and compiles it to `./dist/output.css` automatically when changes are detected.

2. Open `index.html` in your browser to view the site

3. Make changes to:
   - `index.html` for layout and content
   - `src/input.css` for custom styles
   - The CSS will recompile automatically when you save changes

## Deployment

For production deployment:

1. Build the final CSS:

```bash
npm run watch:css # Let it complete one build
```

2. Deploy the following files to your web server:
   - `index.html`
   - `dist/output.css`
   - `img/` directory

You can use any static web hosting service like Netlify, Vercel, or GitHub Pages.

## Contributing

- Open an issue for bugs or feature requests
- Send a pull request with a clear summary of changes
- Follow the existing code style and structure

## License

This project is licensed under the ISC License.

## Notes

- The project uses the latest Tailwind CSS v4.1.14
- Dark/Light theme switching is handled via CSS variables
- AOS library is included via CDN for smooth scroll animations
- Font Awesome icons are included via CDN
