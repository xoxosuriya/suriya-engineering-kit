# Initialize a Next.js 15+ project with the preferred stack

This command sets up a new Next.js application with:
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Radix UI
- Lucide React
- React Hook Form
- Zod
- TanStack Query
- ESLint & Prettier
- Vitest & Playwright for testing
- Proper folder structure

## Usage

```
/init-nextjs [project-name]
```

If project-name is not provided, it will use the current directory name.

## What it does

1. Initializes a new Next.js project with TypeScript
2. Installs and configures Tailwind CSS
3. Sets up Framer Motion for animations
4. Installs and configures shadcn/ui with Radix UI
5. Adds Lucide React icons
6. Configures React Hook Form with Zod validation
7. Sets up TanStack Query for data fetching
8. Configures ESLint and Prettier for code quality
9. Sets up Vitest and Playwright for testing
10. Creates a scalable folder structure
11. Adds essential configuration files (tsconfig.json, tailwind.config.js, etc.)
12. Updates package.json with useful scripts
13. Creates a basic README.md
14. Initializes a git repository

## Example

```
/init-nextjs my-awesome-app
```

This will create a new Next.js project in the `my-awesome-app` directory.

## Notes

- Requires Node.js 18+ and npm/pnpm/yarn
- Uses pnpm by default if available, falls back to npm
- Follows the engineering standards in CLAUDE.md
- All generated code follows best practices for maintainability and scalability

---
*Part of the Suriya Starter Kit*