# Skill: Setup FastAPI Project Structure

This skill creates a production-ready FastAPI project structure.

## Usage

### As a standalone skill
```
/skill setup-fastapi-structure
```

### As part of a command
This skill is designed to be used by backend setup commands like `/init-fastapi`

## What it does

1. Creates the standard FastAPI directory structure:
   ```
   /app
     /api          # Route handlers and routers
     /core         # Configuration, security, dependencies
     /db           # Database models, session management
     /schemas      # Pydantic models for request/validation
     /services     # Business logic and external integrations
     /utils        # Helper functions and utilities
   ```
2. Creates essential files in each directory
3. Sets up main application entry point
4. Configures basic application settings
5. Creates example routers and models

## Implementation

This skill creates:
- `app/main.py` - FastAPI application instance and router inclusion
- `app/core/config.py` - Environment variable and settings management
- `app/core/security.py` - Password hashing, token utilities
- `app/core/database.py` - Database engine and session setup
- `app/api/api_v1/api.py` - API router versioning
- `app/db/base.py` - SQLAlchemy base model
- `app/models/` directory for SQLAlchemy models
- `app/schemas/` directory for Pydantic models
- `app/services/` directory for business logic
- `app/utils/` directory for helper functions

## Dependencies

- FastAPI
- Uvicorn (ASGI server)
- SQLAlchemy 2.0
- Pydantic 2.0
- Alembic (for migrations)
- python-dotenv
- passlib[bcrypt]
- python-jose[cryptography]

## Output

A well-structured FastAPI project ready for FastAPI base structure and services directory structure: Environment and configuration
- : Database and session management
- route
- schema
- Pydantic 2.
- service
- utility

## Usage

After running this skill, you'll have:
1. A complete FastAPI application structure
2. Example files to get started
3. Proper separation of concerns
4. Foundation for adding authentication, database models, and API endpoints

## Example Usage

To start the development server:
```bash
uvicorn app.main:app --reload
```

To create a new API endpoint:
1. Add a router in `app/api/api_v1/endpoints/`
2. Include it in `app/api/api_v1/api.py`
3. Create corresponding models and schemas
4. Implement business logic in services

This structure follows FastAPI best practices and scales well for large applications.

---
*Part of the Starter Kit*