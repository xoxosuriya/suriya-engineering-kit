# Initialize a portfolio website with modern design and animations

This command sets up a stunning portfolio website using:
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for sophisticated animations
- shadcn/ui components
- Three.js for 3D elements (optional)
- Framer Motion for page transitions and micro-interactions
- Optimized for performance and accessibility
- SEO-friendly with metadata and OpenGraph tags
- Dark mode support
- Responsive design for all device sizes

## Usage

```
/init-portfolio [project-name]
```

If project-name is not provided, it will use the current directory name.

## What it does

1. Creates a Next.js TypeScript project
2. Sets up Tailwind CSS with custom configuration for premium design
3. Configures Framer Motion for animations
4. Installs and configures shadcn/ui with premium themes
5. Adds Lucide React for beautiful icons
6. Implements smooth page transitions with shared element transitions
7. Creates animated hero section with parallax effects
8. Builds interactive project showcase with filters
9. Adds animated skill bars and testimonials section
10. Implements contact form with validation (React Hook Form + Zod)
11. Sets up SEO with next-seo or manual metadata
12. Configures image optimization with next/image
13. Adds dark/light theme toggle with persistent preference
14. Implements accessible navigation with keyboard support
15. Creates blog section with markdown support (using next-contentful or MDX)
16. Sets up performance optimization (loading prioritization, lazy loading)
17. Configures Vercel for optimal deployment
18. Adds comprehensive testing setup (Vitest, Playwright)
19. Creates a scalable folder structure:
    ```
    /app
      /(components)     # Reusable UI components
      /(sections)       # Page sections (hero, about, projects, etc.)
      /lib              # Utilities, custom hooks, constants
      /styles           # Global styles and CSS variables
      /public           # Static assets
    ```
20. Creates essential pages:
    - Home (with animated hero)
    - About (with timeline and skills)
    - Projects (with filtering and case studies)
    - Blog (optional Blog (with MDX ) 
  with markdown support)
    - Contact (with form)
    - Resume (downloadable PDF)
21. Adds automated deployment setup for Vercel
22. Creates README with customization guide

## Features

### Design & Animation
- **Apple-inspired aesthetics** with smooth motion and micro-interactions
- **Staggered animations** for lists and grids
- **Hover effects** on all interactive elements
- **Page transitions** using Framer Motion's shared layout
- **Scroll-triggered animations** for sections as they enter viewport
- **3D elements** with Three.js (optional, can be enabled)
- **Parallax effects** for depth and immersion
- **Liquid hover effects** on buttons and cards

### Performance
- **Lighthouse score >95** in all categories
- **Optimized images** with next/Image
- **Font optimization** with self-hosted fonts
- **Bundle analysis** and code splitting
- **Critical CSS** extraction
- **Service worker** for offline capability (optional)

### Accessibility
- **WCAG 2.1 AA** compliant
- **Semantic HTML** throughout
- **Keyboard navigation** support
- **Screen reader** friendly
- **Focus management** for modal dialogs
- **Reduced motion** support (respects user preferences)

### Developer Experience
- **TypeScript** strict mode for type safety
- **ESLint and Prettier** configured
- **Husky** for pre-commit hooks
- **Commitlint** for conventional commits
- **Storybook** for component documentation (optional)
- **Vitest and Playground** for testing
- **Environment variable** validation

## Usage

```
/init-portfolio my-portfolio-site
```

This will create a new portfolio website in the `my-portfolio-site` directory.

## Customization

The portfolio is designed to be easily customized:
- Theme colors in `tailwind.config.js`
- Content in `/app/content` directory (Markdown files)
- Configuration in `/lib/config.ts`
- Animation variants in `/lib/animations.ts`
- SEO metadata in `/lib/seo.ts`

## Deployment

Optimized for Vercel deployment with:
- Serverless functions for API routes
- Image optimization
- Edge caching
- Preview deployments for pull requests

## Notes

- Requires Node.js 18+ and npm/pnpm/yarn
- Uses pnpm by default if available, falls back to npm
- Follows the engineering standards in CLAUDE.md
- All code is production-ready and follows best practices
- Designed to be extended and customized for personal branding

---
*Part of the Suriya Starter Kit*