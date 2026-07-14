# Initialize a FastAPI project with production-grade standards

This command sets up a new FastAPI application with:
- FastAPI 0.100+ (async support)
- Python 3.9+
- Type hints and PEP 8 compliance
- Pydantic v2 for validation
- SQLAlchemy 2.0 with async support
- Alembic for database migrations
- Environment variable management
- Structured logging
- Security best practices
- API documentation (OpenAPI/Swagger)
- Docker configuration
- GitHub Actions CI/CD
- Testing with pytest
- Proper folder structure

## Usage

```
/init-fastapi [project-name]
```

If project-name is not provided, it will use the current directory name.

## What it does

1. Creates a Python project with virtual environment
2. Installs FastAPI and essential dependencies
3. Sets up SQLAlchemy with async PostgreSQL driver
4. Configures Alembic for database migrations
5. Sets up Pydantic v2 for data validation
6. Implements structured logging with loguru
7. Adds security middleware (CORS, trusted hosts)
8. Creates OpenAPI/Swagger documentation endpoints
9. Adds Dockerfile and docker-compose.yml
10. Sets up GitHub Actions for CI/CD
11. Configures pytest for testing
12. Creates a scalable folder structure:
    ```
    /app
      /api          # Route handlers
      /core         # Configuration, security, dependencies
      /db           # Database models and session
      /schemas      # Pydantic models
      /services     # Business logic
      /utils        # Helper functions
    ```
13. Creates essential configuration files:
    - .env.example
    - requirements.txt
    - alembic.ini
    - Dockerfile
    - docker-compose.yml
    - pytest.ini
14. Updates README.md with setup instructions
15. Initializes a git repository

## Usage

```
/init-fastapi my-fastapi-app
```

This will create a new FastAPI project in the `my-fastapi-app` directory.

## Features

- **Async First**: Built for async/await throughout
- **Production Ready**: Includes logging, security, monitoring hooks
- **Database**: SQLAlchemy 2.0 with async support and Alembic migrations
- **Validation**: Pydantic v2 with comprehensive validation
- **Documentation**: Automatic OpenAPI/Swagger UI
- **Containerization**: Docker and docker-compose for easy deployment
- **CI/CD**: GitHub Actions workflow for testing and deployment
- **Testing**: pytest configuration with fixtures and coverage
- **Environment**: python-dotenv for environment variable management

## Notes

- Requires Python 3.9+
- Uses PostgreSQL as the default database (can be changed to SQLite for development)
- Follows the engineering standards in CLAUDE.md
- All generated code includes type hints and follows PEP 8
- Designed for scalability and maintainability

---
*Part of the Suriya Starter Kit*