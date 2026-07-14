# Skill: Setup Framer Motion

This skill installs and configures Framer Motion for animations.

## Usage

### As a standalone skill
```
/skill setup-framer-motion
```

### As part of a command
This skill is designed to be used by frontend setup commands

## What it does

1. Installs Framer Motion package
2. Creates motion variants library for reusable animations
3. Sets up global motion configuration if needed
4. Provides examples of common animation patterns

## Implementation

This skill would typically:
- Run `npm install framer-motion`
- Create a `/lib/motion.ts` or `/lib/animations.ts` file with:
  - Page transition variants
  - List item stagger animations
  - Hover and tap effects
  - Modal animations
  - Custom presets for common animations

## Dependencies

- React 18+
- Framer Motion

## Output

A project with Framer Motion installed and configured with:
- Reusable animation variants
- TypeScript definitions
- Examples of common patterns

## Configuration

The skill creates a motion utilities file with:
- Variants for page transitions (fade, slide, scale)
- Stagger variants for lists and grids
- Hover, tap, and focus animations
- Modal entrance and exit animations
- Custom spring physics configurations

## Usage Example

After installing this skill, you can use animations like:

```tsx
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/motion'

export default function Component() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      {items.map(item => (
        <motion.key
          key={item.id}
          variants={itemVariants}
          initial="hidden"
          animate="show"
        >
          {item.content}
        </motion.key>
      ))}
    </motion.div>
  )
}
```

---
*Part of the Suriya Starter Kit*