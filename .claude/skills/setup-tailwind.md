# Skill: Setup Tailwind CSS

This skill configures Tailwind CSS for a project.

## Usage

### As a standalone skill
```
/skill setup-tailwind
```

### As part of a command
This skill is designed to be used by commands that set up frontend projects

## What it does

1. Installs Tailwind CSS and peer dependencies
2. Creates tailwind.config.js with sensible defaults
3. Creates postcss.config.js
4. Adds Tailwind directives to CSS file
5. Configures content paths for optimal purging
6. Sets up a basic color palette and theme extension

## Implementation

This skill would typically:
- Run `npm install -D tailwindcss postcss autoprefixer`
- Initialize config files with `npx tailwindcss init -p`
- Customize tailwind.config.js for the project
- Update CSS globals file with @tailwind directives

## Dependencies

- PostCSS
- Autoprefixer

## Output

A project configured with Tailwind CSS ready to use utility classes.

## Configuration

The skill sets up:
- Content paths pointing to app/**/*.{js,ts,jsx,tsx} (for Next.js App Router)
- Theme extension for custom colors, spacing, etc.
- Plugins array ready for additional plugins (forms, typography, etc.)

---
*Part of the Suriya Starter Kit*