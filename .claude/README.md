# Claude Code Starter Kit

This directory contains reusable components for Claude Code to help bootstrap and develop projects efficiently.

## Structure

- `commands/` - Slash commands that automate common workflows (e.g., `/init-nextjs`)
- `skills/` - Reusable skills that can be invoked via `/skill` or used by commands
- `templates/` - Starter templates for different project types

## Usage

### Commands
Use slash commands directly in chat:
```
/init-nextjs
/init-fastapi
/init-portfolio
```

### Skills
Skills can be invoked with the Skill tool or used as building blocks in commands:
```
/skill nextjs-app
/skill setup-tailwind
```

### Templates
Templates are copied to new projects via commands or skills.

## Philosophy

This kit follows the engineering standards defined in the root `CLAUDE.md` file. All generated code and configurations adhere to:
- Production-grade practices
- Your preferred technology stack (Next.js 15+, FastAPI, Tailwind, etc.)
- Engineering principles from top tech companies
- Focus on maintainability, scalability, and best practices

## Customization

To customize this kit for your needs:
1. Modify the templates in `.claude/templates/`
2. Update skills in `.claude/skills/` to match your preferred patterns
3. Add new commands in `.claude/commands/` for common workflows
4. Update this README as needed

---
*Part of the Suriya Starter Kit - Last updated: 2026-07-14*