# Guodong Lu - Academic Portfolio (React Version)

This is the React conversion of the Jekyll-based academic portfolio website.

## 🎨 Features

- **Modern React Stack**: Built with React 18, TypeScript, and Vite
- **Academic Warm Theme**: Maintains the original warm beige/brown color palette
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Thick Border Aesthetic**: Preserves the bold 4px border styling from the original
- **Multiple Pages**: Home, Publications, CV, Talks, and Resources
- **Dark Mode Ready**: Theme system supports light and dark modes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```
   This will also generate the `package-lock.json` file.

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Sidebar.tsx     # Author profile sidebar
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # About/landing page
│   ├── Publications.tsx # Publications listing
│   ├── CV.tsx          # Curriculum Vitae
│   ├── Talks.tsx       # Talks and presentations
│   └── Resources.tsx   # Resources and tools
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles and theme
```

## 🎨 Design System

The project uses a semantic color system based on HSL values:

### Light Theme
- Background: Warm beige `#e8dfd1`
- Primary: Warm brown `#845835`
- Text: Dark `#1a1a1a`
- Borders: `#262626` (4px thick)

### Dark Theme
- Background: Dark warm `#2b1f17`
- Primary: Light warm `#d9c5b3`
- Text: Light `#f5f1eb`
- Borders: White `#ffffff` (4px thick)

## 🔧 Customization

### Adding Publications

Edit `src/pages/Publications.tsx` and add entries to the `publications` array.

### Adding Talks

Edit `src/pages/Talks.tsx` and add entries to the `talks` array.

### Updating Profile

Edit `src/components/Sidebar.tsx` for contact information and `src/pages/Home.tsx` for bio content.

### Theme Colors

All colors are defined in `src/index.css` using CSS custom properties. Modify the HSL values in the `:root` and `.dark` selectors.

## 📝 Migration Notes

### From Jekyll to React

- **Layouts → Components**: Jekyll layouts converted to React components
- **Liquid Templates → JSX**: Template logic now in JavaScript/TypeScript
- **SCSS → Tailwind CSS**: Styling migrated to utility-first CSS
- **Collections → Arrays**: Jekyll collections converted to TypeScript data arrays
- **Routing**: Using React Router instead of Jekyll's file-based routing

### Preserved Features

✅ Academic warm color scheme  
✅ Thick 4px borders throughout  
✅ Author sidebar with profile  
✅ Publications with download links  
✅ CV sections and formatting  
✅ Talks and presentations  
✅ Responsive mobile design  

### New Features

✨ Faster page navigation (SPA)  
✨ TypeScript for type safety  
✨ Modern React hooks  
✨ Optimized build with Vite  
✨ Easy component reusability  

## 🚀 Deployment

### GitHub Pages

1. Update `base` in `vite.config.ts` if deploying to a subdirectory
2. Build: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

### Netlify/Vercel

Simply connect your repository and these platforms will auto-detect the Vite configuration.

## 📦 Dependencies

- **react** & **react-dom**: UI library
- **react-router-dom**: Client-side routing
- **lucide-react**: Icon library
- **tailwindcss**: Utility-first CSS
- **vite**: Build tool
- **typescript**: Type safety

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

## 📄 License

© 2025 Guodong Lu. All rights reserved.
