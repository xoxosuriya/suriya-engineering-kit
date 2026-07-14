# Skill: Setup Next.js with TypeScript

This skill creates a new Next.js project with TypeScript configuration.

## Usage

### As a standalone skill
```
/skill nextjs-typescript
```

### As part of a command
This skill is designed to be used by commands like `/init-nextjs`

## What it does

1. Initializes a new Next.js project with TypeScript template
2. Creates or updates tsconfig.json with strict type checking
3. Sets up path aliases (@/components, /lib, etc.)
4. Installs required dependencies
5. Creates basic directory structure

## Implementation

This skill would typically:
- Run `npx create-next-app@latest` with TypeScript flag
- Or manually set up the files if in an existing directory
- Configure TypeScript paths in tsconfig.json
- Create basic folder structure

## Dependencies

- Node.js 18+
- npm, yarn, or pnpm

## Output

A Next.js project ready for further configuration with:
- TypeScript support
- Path aliases configured
- Basic directory structure
- Package.json with React and TypeScript dependencies

---
*Part of the Suriya Starter Kit*