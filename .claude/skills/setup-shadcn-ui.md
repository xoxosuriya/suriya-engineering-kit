# Skill: Setup shadcn/ui

This skill installs and configures shadcn/ui component library.

## Usage

### As a standalone skill
```
/skill setup-shadcn-ui
```

### As part of a command
This skill is designed to be used by frontend setup commands

## What it does

1. Installs shadcn/ui and its dependencies
2. Initializes the component library with your preferred style
3. Sets up the components.json configuration file
4. Creates the components directory structure
5. Installs Radix UI primitives as peer dependencies

## Implementation

This skill would typically:
- Run `npx shadcn-ui init` to set up the configuration
- Prompt for or use predefined preferences:
  - Style: Default (or New York, etc.)
  - Color: Based on project theme
  - Radius: 0.5rem (or configured value)
  - Source stack: None (or modify as needed)
- Install commonly used components (button, input, card, etc.)

## Dependencies

- React 18+
- React DOM 18+
- Class Variance Authority
- clsx
- Tailwind CSS (peer dependency)
- Radix UI primitives

## Output

A project with shadcn/ui configured and ready to use:
- components.json configuration file
- components/ directory with UI primitives
- Tailwind CSS configured for the selected theme
- TypeScript support for all components

## Configuration

The skill configures:
- Color palette based on project preferences
- Radius settings
- Tailwind CSS integration
- Component aliases (if using path mapping)

## Usage Example

After setup, you can use components like:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfileCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Lorem ipsum dolor sit amet.</p>
        <Button variant="outline">View Profile</Button>
      </CardContent>
    </Card>
  )
}
```

## Available Components

After running this skill, you can add specific components with:
```
npx shadcn-ui add button
npx shadcn-ui add card
npx shadcn-ui add input
# etc.
```

The skill can be extended to automatically add a core set of components.

---
*Part of the Suriya Starter Kit*