# Next.js Template

This is a starter template for a Next.js 15+ application with TypeScript, Tailwind CSS, and modern web development best practices.

## Features

- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** ready for animations
- **ESLint & Prettier** for code quality
- **Optimized** for performance and SEO

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── ...               # Other routes
├── components/           # Reusable components
├── public/               # Static assets
├── styles/               # Additional styles
├── ...                   # Configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (requires test setup)

## Customization

### Tailwind Configuration
Modify `tailwind.config.js` to customize colors, spacing, border radius, etc.

### TypeScript Configuration
Adjust `tsconfig.json` for stricter or more relaxed type checking.

### Adding Components
Create reusable components in the `components/` directory and use them in your pages.

## Deployment

This application is optimized for deployment on Vercel:

```bash
npm run build
```

Then deploy the `.next` folder or connect your GitHub repo to Vercel for automatic deployments.

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---
*Part of the Suriya Starter Kit*