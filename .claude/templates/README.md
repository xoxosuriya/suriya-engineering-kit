# Templates Directory

This directory contains starter templates for different types of projects. Each template provides a foundational structure that can be used as a starting point for new projects.

## Available Templates

### 1. Next.js Template
Location: `/templates/nextjs/`
Description: A modern Next.js 15+ application with TypeScript, Tailwind CSS, and Framer Motion.
Use cases: Web applications, marketing sites, dashboards, portfolios.

### 2. FastAPI Template
Location: `/templates/fastapi/`
Description: A production-ready FastAPI application with SQLAlchemy, Pydantic, and automated testing.
Use cases: REST APIs, microservices, backend services, internal tools.

### 3. Portfolio Website Template
Location: `/templates/portfolio/`
Description: A visually stunning portfolio website with animations, projects showcase, and blog.
Use cases: Personal portfolios, agency sites, product showcases, creative resumes.

### 4. Dashboard Template
Location: `/templates/dashboard/`
Description: A data dashboard application with authentication, data visualization, and responsive layouts.
Use cases: Admin panels, analytics dashboards, monitoring tools, business intelligence apps.

### 5. AI/ML Project Template
Location: `/templates/ai-ml/`
Description: A machine learning project structure focused on reproducibility, experiment tracking, and production readiness.
Use cases: Machine learning research, predictive modeling, data science projects, AI applications.

### 6. Data Analytics Template
Location: `/templates/data-analytics/`
Description: A data analysis and business intelligence template for extracting insights and creating reports.
Use cases: Business analytics, marketing analysis, financial reporting, operational reporting.

## Using Templates

Templates can be used in several ways:

### Via Commands
The easiest way to use a template is through the initialization commands:
```
/init-nextjs my-project
/init-fastapi my-api
/init-portfolio my-portfolio
/init-dashboard my-dashboard
/init-ai-ml my-ml-project
/init-data-analytics my-analytics-project
```

These commands will:
1. Create a new directory (if specified)
2. Copy the template files
3. Initialize a git repository
4. Install dependencies
5. Configure basic settings

### Manual Copying
You can also manually copy template files:
```bash
cp -r .claude/templates/nextjs/* ./my-new-project/
```

Then follow the setup instructions in the template's README or template-description.md file.

## Template Structure

Each template typically includes:
- **Directory structure**: Recommended folder organization
- **Configuration files**: Essential config files (package.json, requirements.ts, etc.)
- **Starter code**: Basic implementation to get started
- **Documentation**: README or template-description.md explaining usage
- **Scripts**: Helpful scripts for development, testing, and deployment
- **Configuration**: Linting, formatting, and testing setup

## Customizing Templates

Templates are meant to be starting points. Feel free to:
1. Modify the directory structure to suit your needs
2. Update dependencies in package.json/requirements.txt
3. Change configuration files (tailwind.config.js, etc.)
4. Add or remove starter code based on your project requirements
5. Update documentation to reflect your specific use case

## Maintenance

Templates are updated periodically to:
- Include latest versions of dependencies
- Incorporate security patches
- Add new best practices
- Improve based on user feedback

To update an existing project with template improvements:
1. Check the template directory for changes
2. Manually copy updated files
3. Update dependency versions as needed
4. Run tests to ensure compatibility

## Contributing

If you'd like to contribute to the templates:
1. Fork the repository
2. Make improvements to templates in `.claude/templates/`
3. Submit a pull request with your changes
4. Ensure your changes follow the established patterns
5. Update documentation as needed

## License

The templates are provided as part of the Suriya Starter Kit and are free to use for personal and commercial projects.

---
*Part of the Suriya Starter Kit*