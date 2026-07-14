# Portfolio Website Template

This is a template for a modern, animated portfolio website using Next.js, Tailwind CSS, and Framer Motion.

## Structure

```
portfolio-template/
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── README.md
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── logo.svg
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ... (shadcn/ui components)
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── layout.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── blog.tsx
│   │   ├── contact.tsx
│   │   └── testimonials.tsx
│   ├── animations/
│   │   ├── variants.ts
│   │   └── motion-presets.ts
│   └── utils/
│       ├── framer-motion.ts
│       ├── class-names.ts
│       └── email.ts
├── lib/
│   ├── content/
│   │   ├── projects.ts
│   │   └── blog-posts.ts
│   ├── utils.ts
│   └── api.ts
├── styles/
│   ├── globals.css
│   └── animations.css
└── data/
    ├── projects.json
    └── site-config.json
```

## Key Features

1. **Modern Stack**
   - Next.js 15+ (App Router)
   - TypeScript
   - Tailwind CSS
   - Framer Motion for animations
   - shadcn/ui components
   - Lucide React icons

2. **Performance Optimized**
   - Image optimization with Next.js Image
   - Code splitting and dynamic imports
   - Font optimization
   - Metadata and SEO optimization

3. **Animation & Interactions**
   - Page transitions with shared elements
   - Scroll-triggered animations
   - Hover effects and micro-interactions
   - Staggered animations for lists
   - 3D elements with react-three-fiber (optional)

4. **Sections Included**
   - Hero with animated typography
   - About section with skills timeline
   - Projects showcase with filtering
   - Blog with MDX support
   - Contact form with email integration
   - Testimonials slider
   - Footer with social links

5. **Developer Experience**
   - ESLint and Prettier configured
   - Commit linting with Husky
   - Environment variable validation
   - Type-safe API routes
   - Content layer for easy updates

## Key Components

### app/layout.tsx
Root layout with providers for theme, motion, and analytics.

### app/page.tsx (Home)
Hero section with animated greeting, call-to-action, and navigation to sections.

### components/sections/hero.tsx
Animated hero with:
- Typewriter effect for job titles
- Floating elements
- Interactive cursor follower
- Responsive layout

### components/sections/projects.tsx
Project grid with:
- Filter buttons (All, Web, Mobile, Design)
- Hover lift effect on cards
- Modal for project details
- Loading skeletons

### components/sections/contact.tsx
Form with:
- React Hook Form + Zod validation
- Animated field labels
- Submit button loading state
- Success/error toast notifications

### components/layout/navbar.tsx
Responsive navigation with:
- Mobile hamburger menu
- Smooth scroll to sections
- Active link indicators
- Dark mode toggle

### animations/variants.ts
Framer Motion variants for:
- Page transitions
- Staggered children
- Hover effects
- Scroll animations

## Customization

1. **Theme**: Modify tailwind.config.js for colors, fonts, and radius
2. **Content**: Update data/projects.json and data/site-config.json
3. **Styles**: Adjust styles/globals.css and styles/animations.css
4. **Components**: Customize shadcn/ui components in components/ui/

## Deployment

Optimized for Vercel with:
- Serverless functions for API routes
- Image optimization
- Edge middleware (if needed)
- Automatic SSL and CDN

---
*Part of the Suriya Starter Kit Template Collection*