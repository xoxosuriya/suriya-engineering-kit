# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
It serves as a permanent engineering playbook for all projects in this repository.

---

## GENERAL ENGINEERING PRINCIPLES

### Think Before Coding
- Fully understand the problem statement and requirements before writing a single line of code.
- Ask clarifying questions if requirements are ambiguous.
- Consider edge cases, failure modes, and non-functional requirements (performance, security, scalability) upfront.
- Sketch a high-level solution design (text, diagram, or pseudocode) before implementation.

### Understand the Problem First
- Root-cause analysis: Identify the underlying issue, not just symptoms.
- Validate assumptions with data or prototyping when possible.
- Consider the user journey and business context.
- For bugs: Reproduce the issue in a controlled environment before fixing.

### Prefer Production-Ready Solutions
- Avoid placeholder implementations (e.g., `TODO`, stubs that return hardcoded values) unless explicitly requested for prototyping.
- Choose battle-tested libraries and frameworks over novelty.
- Implement proper error handling, logging, and monitoring from the start.
- Write code that is observable, operable, and diagnosable in production.

### Never Generate Placeholder Implementations Unless Requested
- If a feature is not fully specified, do not invent implementation details.
- Instead, ask for clarification or define a clear interface contract first.
- Placeholders create technical debt and confuse future maintenance.

### Prefer Maintainability Over Shortcuts
- Favor readable, explicit code over clever one-liners.
- Optimize for the reader (future you or teammates), not the writer.
- Avoid premature optimization; first make it correct, then make it clear, then make it fast if needed.
- Delete dead code aggressively.

### Explain Architectural Decisions When Appropriate
- Document why certain choices were made (trade-offs considered, alternatives rejected).
- Use ADRs (Architecture Decision Records) for significant decisions.
- In code, prefer self-documenting names and concise comments over lengthy explanations.

### Challenge Poor Technical Decisions and Recommend Better Alternatives
- Question requirements or constraints that lead to suboptimal solutions.
- Suggest improvements backed by evidence (benchmarks, industry practices, maintainability metrics).
- Escalate architectural concerns early; do not silently accommodate flawed designs.

---

## CODE QUALITY

### SOLID Principles
- **Single Responsibility**: Each module, class, or function should have one reason to change.
- **Open/Closed**: Software entities should be open for extension but closed for modification.
- **Liskov Substitution**: Subtypes must be substitutable for their base types.
- **Interface Segregation**: Clients should not be forced to depend on interfaces they do not use.
- **Dependency Inversion**: Depend on abstractions, not concretions.

### DRY (Don't Repeat Yourself)
- Extract duplicated logic into reusable functions, modules, or utilities.
- Prefer composition over inheritance for code reuse.
- Establish a single source of truth for configuration, constants, and business rules.
- Balance DRY with readability: avoid over-abstraction that obscures intent.

### KISS (Keep It Simple, Stupid)
- Favor straightforward solutions over complex ones.
- Introduce complexity only when necessary to meet requirements.
- Simple code is easier to test, debug, and maintain.
- If a solution feels overly complex, revisit the problem definition.

### Separation of Concerns
- Decouple distinct responsibilities (e.g., UI, business logic, data access).
- Organize code into layers with clear interfaces (e.g., presentation, application, infrastructure).
- Avoid mixing concerns in the same file or function (e.g., UI rendering with API calls).

### Clean Architecture
- Dependencies point inward: high-level modules should not depend on low-level modules.
- Business rules are independent of frameworks, databases, and external agencies.
- Use interfaces/adapters to isolate external details.
- Apply to both frontend and backend systems.

### Domain-Driven Design (Where Applicable)
- Model the core domain and domain logic explicitly.
- Use ubiquitous language shared between developers and domain experts.
- Identify bounded contexts and maintain consistent models within each.
- Prefer rich domain models over anemic ones when business logic is complex.

### Readability
- Use descriptive, intention-revealing names for variables, functions, and classes.
- Keep functions small and focused (ideally under 20 lines).
- Follow consistent formatting (enforced via linter/formatter).
- Comment why, not what (unless the what is non-obvious).

### Maintainability
- Write code that is easy to modify and extend.
- Minimize coupling between modules.
- Ensure tests are easy to write and run; high test coverage enables safe refactoring.
- Document public APIs and complex algorithms.

### Scalability
- Design stateless services where possible.
- Use asynchronous processing and message queues for decoupling.
- Consider horizontal scaling from the outset (e.g., avoid singleton patterns that impede scaling).
- Profile and optimize bottlenecks under load.

### Error Handling
- Handle errors explicitly; avoid swallowing exceptions.
- Distinguish between expected (validation, business rule violations) and unexpected errors.
- Log errors with sufficient context (request ID, user ID, timestamps) for debugging.
- Return meaningful error messages to users without leaking internal details.
- Implement circuit breakers for external service calls.

### Logging
- Use structured logging (JSON) for machine parseability.
- Log at appropriate levels: DEBUG (development), INFO (operational), WARN (recoverable issues), ERROR (failures).
- Avoid logging sensitive data (PII, credentials, tokens).
- Include correlation IDs to trace requests across services.
- Rotate and retain logs per compliance requirements.

### Reusability
- Design components, functions, and modules with clear, minimal interfaces.
- Avoid hardcoding values; use configuration or parameters.
- Publish reusable libraries internally when appropriate.
- Version shared dependencies to prevent breaking changes.

---

## FRONTEND STANDARDS

### Preferred Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui (built on Radix UI)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query (React Query)
- **State Management**: Prefer server state (TanStack Query) and URL state; use Zustand or Jotai for minimal client state if needed.

### Design Philosophy
- Emulate the visual and interaction quality of Apple, Linear, Stripe, Vercel, Notion, Framer, and Arc Browser.
- Prioritize content clarity, intuitive navigation, and deliberate motion.
- Avoid clutter; embrace whitespace and visual hierarchy.
- Focus on micro-interactions that enhance, not distract.

### Typography
- Use a maximum of two typefaces (one for headings, one for body).
- Prioritize readability: body text ≥ 16px, line height 1.5–1.7.
- Establish a clear typographic scale (e.g., 8px grid: 12, 14, 16, 20, 24, 30, 36, 48, 60px).
- Use semantic HTML elements (`h1`–`h6`, `p`, `blockquote`, etc.) for accessibility and SEO.
- Prefer system fonts or well-optimized web fonts (e.g., Inter, Geist) with proper loading strategies.

### Spacing
- Adhere to an 8px grid for margin, padding, gap, and border radius.
- Use consistent spacing tokens (e.g., `space-2` = 16px, `space-4` = 32px).
- Align elements to baseline grid where applicable.
- Avoid arbitrary spacing values; enforce via Tailwind configuration.

### Color Systems
- Define a semantic color palette (primary, secondary, background, foreground, destructive, muted) in Tailwind config).
- Use color purposefully: reserve bright colors for calls to action, muted tones for backgrounds.
- Ensure sufficient contrast (WCAG AA minimum) for text and interactive elements.
- Implement dark mode via CSS variables and Tailwind dark mode strategy.
- Avoid using color alone to convey meaning.

### Responsive Layouts
- Mobile-first approach: design for smallest screen first, then enhance.
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
- Prefer flexbox and CSS Grid over floats or positioning for layouts.
- Test breakpoints at common device widths (320px, 768px, 1024px, 1440px).
- Ensure touch targets are at least 48x48dp.

### Accessibility (WCAG 2.1 AA)
- Semantic HTML: use `<button>`, `<a>`, `<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`, etc.
- Ensure keyboard navigability: logical tab order, visible focus outlines.
- Provide accessible names (aria-label, aria-labelledby) for icons and custom controls.
- Label form fields explicitly with `<label>`.
- Announce dynamic changes via ARIA live regions when appropriate.
- Test with screen readers (NVDA, VoiceOver) and keyboard-only navigation.

### Animations (Framer Motion)
- Use animations to provide feedback, guide attention, and smooth state transitions.
- Prefer subtle, purposeful animations: hover effects, micro-interactions, page transitions.
- Stagger animations for lists or grids to create a sense of rhythm.
- Use spring physics for natural motion (`type: "spring"`, `stiffness: 100`, `damping: 15`).
- Avoid animations that trigger vestibular disorders (respect `prefers-reduced-motion`).
- Page transitions: use Next.js route shared elements or Framer Motion's `AnimatePresence`.
- Scroll triggers: use `useInView` or `IntersectionObserver` for scroll-based animations sparingly.

### Component Architecture
- Follow atomic design principles: atoms → molecules → organisms → templates → pages.
- Keep components focused and reusable; avoid monolithic components.
- Separate presentational and container concerns where beneficial.
- Use composition over inheritance; prefer slots/children props for flexibility.
- Export components with clear TypeScript interfaces for props.
- Place component-specific styles in Tailwind classes or CSS modules; avoid global styles in components.

### Reusable UI
- Abstract common UI patterns into a shared component library (e.g., buttons, inputs, modals, tooltips).
- Document usage with Storybook or similar.
- Ensure components are accessible, responsive, and themeable.
- Avoid over-engineering: only create reusable components when duplication occurs.

### Modern UX Patterns
- **Loading States**: use skeleton loaders or spinners; avoid blocking the entire UI.
- **Empty States**: provide illustrative graphics and clear guidance on next steps.
- **Error States**: display user-friendly messages with recovery options (retry, contact support).
- **Forms**: inline validation, clear error messages, progressive disclosure for complex forms.
- **Navigation**: predictable hierarchy, breadcrumbs for deep pages, consistent global nav.
- **Dashboards**: prioritize key metrics, use data visualization effectively, allow customization.
- **Landing Pages**: clear value proposition, minimal distractions, strong call to action.
- **Admin Panels**: focus on data density, efficient bulk operations, clear audit trails.

### Specific Component Guidance
- **Buttons**: use `<button>` element; distinguish primary, secondary, destructive; show loading state.
- **Inputs**: pair with `<label>`; show validation errors inline; use proper input types (email, tel, number).
- **Modals**: trap focus, provide escape to close, prevent background scroll.
- **Toasts**: non-blocking, dismissible, limited duration (or persistent for errors).
- **Navigation**: highlight current section, indicate dropdowns, support keyboard navigation.
- **Tables**: sortable, paginated, responsive (convert to cards on mobile); avoid horizontal scrolling.

---

## ANIMATION STANDARDS

### Default Animation Library
- Framer Motion is the standard for all animations.

### Preferred Animation Types
- **Stagger Animations**: for lists, grids, or sequential reveals (e.g., `staggerChildren: 0.05`).
- **Hover Animations**: subtle scale (`scale: 1.02`) or color change on interactive elements.
- **Page Transitions**: cross-fade or slide between routes using Next.js and Framer Motion.
- **Scroll Reveals**: elements fade/slide in as they enter viewport (use `useInView` or `IntersectionObserver`).
- **Smooth Easing**: prefer `easeInOut`, `anticipate`, or custom cubic-bezier curves over linear.
- **Subtle Interactions**: button presses, toggle switches, form field focus; avoid overwhelming the user.

### What to Avoid
- Animations that delay user actions (e.g., mandatory wait before proceeding).
- Excessive movement that distracts from content (e.g., bouncing, spinning indefinitely).
- Animations that trigger motion sickness (parallax, rapid rotation).
- Animations on low-power devices without checking `prefers-reduced-motion`.

### Performance Considerations
- Use `will-change` or `transform`/`opacity` for GPU-accelerated animations.
- Animate only transform and opacity properties when possible for 60fps.
- Limit concurrent animated elements; use `layout` prop in Framer Motion for efficient layout animations.
- Remove event listeners and stop animations on component unmount.

---

## BACKEND STANDARDS

### Preferred Technologies
- **Primary**: FastAPI (Python) for performance, async support, and automatic OpenAPI docs.
- **Alternatives**: Flask (simplicity), Node.js/Express (ecosystem).
- **Real-time**: WebSockets (via FastAPI/WebSocket or Socket.io) or Server-Sent Events.
- **API Style**: REST as default; GraphQL for flexible data fetching (e.g., complex dashboards).

### Folder Structure
```
/app
  /api          # Route handlers / controllers
  /core         # Configuration, security, dependencies
  /db           # Database models, migrations, session management
  /schemas      # Pydantic models for request/response validation
  /services     # Business logic, external integrations
  /utils        # Helper functions
  main.py       # Application entry point
```
- Keep routers thin; delegate complex logic to services.
- Place domain-specific code in services; avoid fat controllers.

### Service Layer
- Encapsulate business logic and external API calls.
- Make services testable by injecting dependencies (repositories, clients).
- Handle transactions at service level when spanning multiple operations.
- Return rich domain objects or DTOs; avoid leaking ORM entities.

### Controllers (API Routes)
- Validate incoming data using schemas (Pydantic).
- Map HTTP concerns (status codes, headers) to service outputs.
- Keep route handlers focused on request/response orchestration.
- Use dependency injection for services and databases (via FastAPI's `Depends`).

### Validation
- Validate all external inputs (query params, headers, body, path params).
- Use Pydantic models for declarative validation and serialization.
- Sanitize inputs to prevent injection (XSS, SQLi) even when using ORMs.
- Return 4xx errors for client issues; 5xx for server issues.

### Authentication & Authorization
- **Authentication**: JWT (access token + refresh token) or session-based (secure, HttpOnly cookies).
- **Authorization**: Role-Based Access Control (RBAC) or Attribute-Based (ABAC) as needed.
- Protect routes with dependencies; centralize auth logic.
- Never store passwords in plaintext; use bcrypt/scrypt with appropriate work factor.
- Implement rate limiting on auth endpoints.

### Logging
- Use structured logging (e.g., `loguru` or `structlog` in Python).
- Include request ID, user ID, timestamp, and context in every log entry.
- Log errors with stack traces; avoid logging sensitive data.
- Correlate logs across services via trace IDs (OpenTelemetry).

### Configuration
- Use environment variables for all configuration (via `pydantic-settings` or `python-decouple`).
- Separate configs per environment (development, staging, production).
- Validate configuration at startup; fail fast on missing required values.
- Never commit secrets; use `.env.example` and secret managers (AWS Secrets Manager, Vault).

### Dependency Injection
- Leverage FastAPI's dependency injection system for services, database connections, etc.
- Prefer factories or singletons for expensive resources (e.g., DB clients).
- Make dependencies overridable for testing (e.g., override with mock services).

### Environment Variables
- Prefix variables with project name (e.g., `APP_DATABASE_URL`).
- Document required variables in `.env.example`.
- Use meaningful names; avoid cryptic abbreviations.
- Load variables early in application lifecycle.

### Security
- **SQL Injection**: Use ORM or parameterized queries; never concatenate user input.
- **XSS**: Escape output in templates; use safe rendering primitives.
- **CSRF**: Implement CSRF tokens for state-changing operations (or use SameSite cookies).
- **Authentication Flaws**: Implement secure password reset, account locking after failures.
- **Secret Leakage**: Scan for secrets in code; use pre-commit hooks (e.g., `detect-secrets`).
- **Headers**: Set security headers (Helmet equivalent: HSTS, CSP, X-Frame-Options, etc.).
- **Dependencies**: Regularly update dependencies; use `pip-audit` or `safety`.

### API Documentation
- Generate OpenAPI/Swagger docs automatically (FastAPI does this by default).
- Keep docstrings updated; they become API documentation.
- Include example requests/responses and error descriptions.
- Version APIs via URL (`/api/v1/`) or headers; maintain backward compatibility.

### Error Handling
- Centralize exception handling to return consistent JSON error format.
- Never expose stack traces or internal details in production responses.
- Use HTTP status codes appropriately (4xx client, 5xx server).
- Log errors internally for debugging; return user-safe messages.

### Response Formats
- Standardize on JSON API or similar structure:
  ```json
  {
    "data": {...},
    "error": null,
    "meta": {...}
  }
  ```
- For errors:
  ```json
  {
    "data": null,
    "error": {"code": "VALIDATION_ERROR", "message": "..."},
    "meta": {...}
  }
  ```
- Use consistent date formats (ISO 8601 UTC).

---

## DATABASE STANDARDS

### Preferred Databases
- **PostgreSQL**: Default choice for relational data (feature-rich, extensible, reliable).
- **MySQL**: When compatibility with existing systems is required.
- **SQLite**: For prototyping, low-traffic apps, or embedded use cases.
- **MongoDB**: For flexible schema, document-based data (use with caution; prefer PostgreSQL JSONB if possible).
- **Supabase**: For rapid development with PostgreSQL + auth + storage.

### Schema Design
- Normalize to 3NF unless denormalization is proven necessary for performance.
- Use meaningful, consistent naming (snake_case for columns, plural table names).
- Avoid reserved words as identifiers.
- Use UUIDs (v4) or ULIDs for public IDs; auto-increment integers for internal PKs if preferred.
- Store timestamps in UTC with timezone awareness (`TIMESTAMPTZ` in PostgreSQL).
- Use enumerated types (ENUM) or lookup tables for fixed sets of values.
- Document schema with comments; maintain ER diagrams.

### Indexes
- Index foreign keys and columns used in WHERE, JOIN, ORDER BY, GROUP BY.
- Use composite indexes for multi-column queries; order columns by selectivity.
- Avoid over-indexing; each index slows writes.
- Monitor index usage; drop unused indexes.
- Consider partial indexes for filtered subsets.
- Use covering indexes (include columns) to avoid table lookups.

### Normalization
- Eliminate repeating groups; ensure atomic values.
- Remove partial dependencies; ensure non-key attributes depend on whole key.
- Remove transitive dependencies; non-key attributes depend only on key.
- Denormalize only for read performance after profiling; maintain via triggers or application logic.

### Transactions
- Wrap related operations in transactions to ensure atomicity.
- Use the lowest isolation level that prevents anomalies (usually `READ COMMITTED` or `REPEATABLE READ`).
- Avoid long-running transactions; keep them short and fast.
- Handle deadlocks gracefully with retry logic.

### Parameterized Queries
- Always use parameterized queries or ORM methods; never string concatenation.
- For raw queries, use database driver's parameter binding (e.g., `%s` for Psycopg2, `?` for SQLite).
- This prevents SQL injection and allows query plan caching.

### Performance
- Use `EXPLAIN ANALYZE` to understand query plans.
- Avoid `SELECT *`; select only needed columns.
- Use `LIMIT` and `OFFSET` judiciously; prefer keyset pagination for large datasets.
- Monitor slow queries; add indexes or rewrite queries as needed.
- Consider materialized views or caching for expensive aggregations.

### Migrations
- Use migration tools (Alembic for SQLAlchemy, Prisma Migrate, Flyway).
- Make migrations backward-compatible where possible.
- Test migrations on a copy of production data.
- Never run destructive migrations without verification.
- Document migration purpose and risks.

---

## PYTHON STANDARDS

### Code Style
- Follow PEP 8 (via `ruff` or `flake8` with `black` formatting).
- Use type hints for all public functions and classes (PEP 484).
- Enable strict type checking in CI (e.g., `mypy` or `pyright`).
- Keep line length to 88 characters (Black default) or 100 if team prefers.

### Virtual Environments
- Always use a virtual environment (`venv` or `conda`).
- Never install packages globally.
- Commit `requirements.txt` or `pyproject.toml`; lock versions for reproducibility.
- Use `pip-tools` or `poetry` for dependency management.

### Modular Architecture
- Organize code into packages with clear responsibilities.
- Use `__init__.py` to control exports; avoid star imports.
- Prefer relative imports within a package (`from .module import function`).
- Avoid circular dependencies; refactor to break cycles.

### Preferred Libraries
- **Data**: Pandas, NumPy
- **Computer Vision**: OpenCV
- **ML**: TensorFlow, PyTorch, Scikit-Learn
- **Visualization**: Matplotlib, Plotly
- **API**: FastAPI
- **Testing**: Pytest
- **Dev**: Ruff, Black, Mypy, Pre-commit
- **HTTP**: HTTPX or Requests (for clients)
- **Config**: Pydantic-settings
- **Logging**: Loguru or Structlog

### Best Practices
- Use context managers (`with`) for resources (files, locks, connections).
- Prefer `pathlib` over `os.path` for path manipulations.
- Use f-strings for string formatting (Python 3.6+).
- Handle exceptions specifically; avoid bare `except:`.
- Use `if __name__ == "__main__":` for script entry points.
- Write idempotent scripts where possible.
- Leverage built-in data structures and algorithms (collections, heapq, bisect).

---

## AI / MACHINE LEARNING

### Training Pipelines
- Version data, code, and configuration (use DVC or MLflow).
- Separate data preprocessing, feature engineering, training, and evaluation into distinct steps.
- Log hyperparameters, metrics, and artifacts for every run.
- Use experiment tracking (Weights & Biases, MLflow, TensorBoard).
- Ensure reproducibility: fix random seeds, log library versions.

### Evaluation
- Use appropriate metrics for the problem (accuracy, precision-recall, F1, ROC-AUC, etc.).
- Evaluate on held-out test set; never tune on test data.
- Perform cross-validation for robust estimates.
- Analyze errors: where does the model fail? Look for bias or data issues.
- Compare against baselines (simple models, heuristics).

### Preprocessing
- Document all preprocessing steps; apply identically to training and inference.
- Handle missing values intentionally (imputation, removal, or modeling as missing).
- Scale features appropriately (standardization, normalization) based on algorithm.
- Encode categorical variables (one-hot, ordinal, target encoding) with care to avoid leakage.
- Detect and address data drift between training and production.

### Feature Engineering
- Create features that are interpretable and actionable.
- Avoid data leakage: ensure features are available at prediction time.
- Use domain knowledge to inform feature creation.
- Consider automated feature selection (e.g., Boruta) but validate results.
- Scale features to similar ranges where beneficial (e.g., for distance-based algorithms).

### Model Selection
- Start with simple models (linear regression, decision trees) as baselines.
- Experiment with more complex models only if needed.
- Use techniques like grid search, random search, or Bayesian optimization for hyperparameters.
- Consider ensemble methods (bagging, boosting) for performance gains.
- Interpret complex models with SHAP or LIME when explainability is required.

### Documentation
- Document data sources, preprocessing steps, model architecture, and evaluation results.
- Include limitations, ethical considerations, and potential biases.
- Provide clear instructions for reproducing results and deploying the model.
- Version models with metadata (using MLflow Model Registry or similar).

### Experiment Tracking
- Track parameters, metrics, code version, and output artifacts for every run.
- Use a centralized tracking server (MLflow, Weights & Biases) for team collaboration.
- Compare experiments visually to identify trends.
- Tag experiments by purpose (e.g., `bugfix`, `feature-experiment`).

### Inference APIs
- Design inference services for low latency and high throughput.
- Batch requests where possible; use asynchronous processing.
- Implement input validation and output sanitization.
- Monitor prediction drift and data quality in production.
- Canary deploy new model versions; A/B test when feasible.

### Reproducibility
- Fix random seeds for numpy, tensorflow, torch, and Python's random.
- Log exact versions of all dependencies (including OS and hardware if relevant).
- Store trained models and preprocessing artifacts with version control.
- Provide a single command to rebuild the environment and run the pipeline.

### Performance Optimization
- Profile training bottlenecks (CPU, GPU, I/O, memory).
- Use mixed-precision training (FP16) where supported.
- Optimize data loading pipelines (use `tf.data`, PyTorch DataLoader`, `torch.utils.data.DataLoader` with multiple workers).
- Consider model pruning, quantization, or distillation for deployment.
- Cache frequent computations; avoid redundant calculations.

### Never Fabricate Metrics
- Report metrics honestly; do not cherry-pick or manipulate numbers to look better.
- If results are unfavorable, analyze why and iterate.
- Clearly distinguish between training, validation, and test metrics.
- Use statistical significance testing where appropriate (e.g., t-test for A/B tests).

---

## DATA ANALYTICS

### Preferred Tools
- **Databases**: SQL (PostgreSQL/MySQL), DuckDB for local analysis.
- **Programming**: Python (Pandas, NumPy) for complex transformations.
- **Spreadsheets**: Excel for simple exploration and sharing (but prefer reproducible scripts).
- **BI Tools**: Power BI or Tableau for interactive dashboards (when sharing with non-technical stakeholders).

### Analysis Workflow
- **Inspect Datasets**: Always start with data profiling (shape, types, missing values, unique counts).
- **Handle Missing Values**: Decide based on context (imputation with mean/median/model, dropping, or flagging as missing).
- **Detect Outliers**: Use IQR, Z-score, or isolation forests; investigate before removing.
- **Generate Meaningful KPIs**: Align metrics with business goals; avoid vanity metrics.
- **Recommendations: Focus on actionable insights (what should we do differently?) over descriptive charts.
- **Explain Business Insights**: Translate findings into plain language; highlight impact and uncertainty.
- **Recommend Dashboards**: Create dashboards that answer specific business questions; avoid data dump.
- **Prefer Actionable Over Raw**: Every analysis should conclude with clear next steps or decisions.

### Best Practices
- Use version-controlled scripts for analysis (Jupyter notebooks only for exploration; convert to `.py` for reproducibility).
- Document data transformations and assumptions.
- Validate findings with domain experts.
- Be cautious of correlation vs. causation.
- Communicate uncertainty: use confidence intervals, p-values, or Bayesian credible intervals.
- Avoid pie charts and 3D visualizations; prefer bar charts, line charts, and scatter plots.
- Ensure visualizations are accessible (colorblind-friendly palettes, labels, legends).

---

## SQL

### Preferred Features
- **CTEs (Common Table Expressions)**: For breaking down complex queries into readable, reusable parts.
- **Window Functions**: For running totals, rankings, and time-series analysis without self-joins.
- **Indexes**: Essential for performance; design based on query patterns.
- **Optimized JOINs**: Prefer `INNER JOIN`; avoid `CROSS JOIN` unless intentional. Use `EXISTS`/`NOT EXISTS` for subqueries when appropriate.

### Avoid
- `SELECT *` in production code; explicitly list columns.
- Correlated subqueries when a JOIN or window function suffices.
- Functions on indexed columns in WHERE clauses (prevents index use).
- Implicit joins (comma-separated tables in FROM); use explicit JOIN syntax.

### Query Optimization
- Use `EXPLAIN` to verify index usage and join order.
- Push predicates down into CTEs or subqueries early.
- Consider materialized views for frequently accessed aggregated data.
- Partition large tables by date or other high-cardinality dimensions.
- Avoid SELECT DISTINCT when possible; use GROUP BY or examine data uniqueness.

### Explain Optimization When Useful
- Comment on why a particular approach was chosen (e.g., "Using CTE to avoid repeated subquery evaluation").
- Note trade-offs (readability vs. performance).
- Highlight indexes that make the query efficient.

---

## DEVOPS

### Containerization
- **Docker**: Standard for packaging applications.
- Multi-stage builds to minimize image size.
- Use `.dockerignore` to exclude unnecessary files.
- Run containers as non-root user.
- Health checks (`HEALTHCHECK`) for orchestration systems.
- Tag images with git commit SHA and semantic version.

### CI/CD
- **GitHub Actions**: Default for workflow automation.
- Separate workflows for CI (testing, linting) and CD (deployment).
- Run tests on every pull request; block merge on failure.
- Use caching for dependencies and build artifacts.
- Deploy to preview environments for every PR (e.g., Vercel preview, Render preview).
- Automate release processes (version bump, changelog, tagging).

### Deployment Platforms
- **Vercel**: Preferred for Next.js and static sites.
- **Render**: For full-stack apps (web services, databases, cron jobs).
- **Railway**: Simpler alternative for rapid deployment.
- **AWS**: For complex, scalable infrastructure (use CDK or Terraform for IaC).
- **Environment Variables**: Manage via platform secrets; never hardcode.
- **Deployment**: Automate rollbacks; use blue/green or canary when risk is high.

### Monitoring
- **Logging**: Centralize logs (Elasticsearch, Loki, CloudWatch).
- **Metrics**: Collect application and infrastructure metrics (Prometheus, Grafana).
- **Tracing**: Distributed tracing (Jaeger, Zipkin, AWS X-Ray).
- **Alerting**: Set up alerts for error rates, latency, and resource saturation.
- **Health Checks**: Implement liveness and readiness probes.

### Environment Variables
- Use 12-factor app principles: config in environment.
- Separate secrets from config; use secret managers.
- Validate variables at startup; fail fast on missing/invalid values.
- Document expected variables and formats in `ENVIRONMENT.md` or similar.

---

## PERFORMANCE

### Bundle Size
- Audit bundle with `next-bundle-analyzer` or `webpack-bundle-analyzer`.
- Code-split routes and large components (`dynamic import()` with loading fallback).
- Remove unused dependencies; tree-shake aggressively.
- Prefer dynamic imports for Route-based splitting in Next.js.

### Images
- Serve responsive images (`next/image` with `sizes` and `srcSet`).
- Use modern formats (WebP, AVIF) with fallbacks.
- Compress images without perceptible loss (Squoosh, ImageOptim).
- Lazy-load images below the fold.
- Specify width and height to prevent layout shift.

### Fonts
- Self-host fonts; avoid third-party requests when possible.
- Use `font-display: swap` to prevent invisible text.
- Subset fonts to required glyphs (especially for CJK).
- Pre-compress font files (WOFF2).
- Limit font families and weights to reduce payload.

### Caching
- Leverage browser caching via `Cache-Control` headers.
- Use CDN for static assets (Vercel Edge Network, Cloudflare).
- Implement server-side caching (Redis, Memcached) for expensive computations.
- Cache API responses at the edge (Vercel Edge Config, Cloudflare Workers).
- Invalidate caches on deploy or content change.

### Lazy Loading & Dynamic Imports
- Lazy-load non-critical components (modals, tabs, off-screen content).
- Use `next/dynamic` for components with SSR fallback.
- Preload critical assets (fonts, hero images) with `<link rel="preload">`.
- Split vendor and application code; use separate chunks.

### Code Splitting
- Route-based splitting is automatic in Next.js App Router.
- Component-level splitting for large, infrequently used UI.
- Avoid splitting too granularly; aim for chunks > 10kB after gzip.
- Monitor chunk sizes in production; adjust splitting strategy.

### Performance Targets
- Aim for Lighthouse score > 95 in Performance, Accessibility, Best Practices, and SEO.
- Focus on Core Web Vitals:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- Test on real devices and throttled networks (Fast 3G, Slow 4G).
- Monitor performance continuously in production (Lighthouse CI, SpeedCurve).

---

## ACCESSIBILITY

### WCAG 2.1 AA Compliance
- **Perceivable**: Provide text alternatives for non-text content; ensure sufficient contrast.
- **Operable**: Make all functionality keyboard accessible; provide enough time.
- **Understandable**: Make text readable and predictable; provide input assistance.
- **Robust**: Maximize compatibility with current and future user agents.

### Specific Requirements
- **Semantic HTML**: Use native elements (`<button>`, `<input>`, `<select>`, `<textarea>`, `<a>`) for built-in accessibility.
- **ARIA Labels**: Use `aria-label`, `aria-labelledby`, `aria-describedb` when native semantics are insufficient.
- **Keyboard Navigation**: Ensure logical tab order; provide visible focus outlines (never `outline: none` without alternative).
- **Proper Contrast**: Text and background contrast ratio ≥ 4.5:1 (normal text), ≥ 3:1 (large text). Check with tools like WebAIM Contrast Checker.
- **Alt Text**: Provide meaningful `alt` text for images; use `alt=""` for decorative images.
- **Forms**: Associate labels with inputs; provide clear error messages and instructions.
- **Media**: Provide captions for audio; transcripts for video; audio description for visual content.
- **Dynamic Content**: Announce updates via ARIA live regions (`aria-live="polite"`).
- **Skip Links**: Provide "skip to main content" link at top of page.
- **Language**: Specify page language with `lang` attribute on `<html>`.

### Testing
- Manual testing: keyboard-only navigation, screen reader (NVDA, VoiceOver).
- Automated testing: use `jest-axe` or `@testing-library/jest-dom` with `axe-core`.
- Include accessibility checks in CI pipeline.

---

## SEO

### Metadata
- **Title Tag**: Unique, descriptive, ≤ 60 characters.
- **Meta Description**: Compelling summary, ≤ 160 characters.
- **Canonical Tag**: Prevent duplicate content; point to preferred URL.
- **Meta Robots**: Control indexing (`index`, `follow`) as appropriate.

### OpenGraph & Twitter Cards
- **OG Title**: Same as title tag or slightly shorter.
- **OG Description**: Same as meta description.
- **OG Image**: 1200x630px image; ensure it's representative and optimized.
- **Twitter Card**: `summary_large_image` for articles; `summary` for other content.

### Structured Data
- Use JSON-LD for schema.org types (Article, Product, FAQ, HowTo, etc.).
- Validate with Google's Rich Results Test.
- Implement breadcrumbs, organization, and site navigation schema.

### Technical SEO
- **robots.txt**: Disallow admin/private paths; allow crawling of public content.
- **sitemap.xml**: Generate automatically; include all canonical URLs.
- **URL Structure**: Use hyphens, lowercase, descriptive paths; avoid parameters when possible.
- **Pagination**: Use `rel="prev"` and `rel="next"`; implement view-all option.
- **Canonicalization**: Ensure www/non-www and http/https consistency.
- **Page Speed**: Critical for SEO; follow performance standards above.
- **Mobile-Friendly**: Responsive design; test with Google's Mobile-Friendly Test.
- **HTTPS**: Enforce via HSTS; redirect HTTP to HTTPS.

### Content SEO
- Create high-quality, original content that addresses user intent.
- Use heading hierarchy (`h1` → `h2` → `h3`) logically.
- Include internal links with descriptive anchor text.
- Optimize for featured snippets (concise answers to common questions).
- Regularly update content; remove or redirect outdated pages.

---

## SECURITY

### SQL Injection
- Use ORM query builders or parameterized queries.
- Never concatenate user input into SQL strings.
- Validate and sanitize inputs (though parameterization is primary defense).

### XSS (Cross-Site Scripting)
- Escape dynamic content in templates (React auto-escapes; be cautious with `dangerouslySetInnerHTML`).
- Implement Content Security Policy (CSP) to mitigate impact.
- Sanitize HTML if user-generated content is allowed (use DOMPurify).

### CSRF (Cross-Site Request Forgery)
- Use SameSite cookies for session tokens.
- Implement CSRF tokens for state-changing operations (forms, AJAX).
- Verify origin or referer headers for sensitive endpoints.

### Authentication Flaws
- Implement secure password reset with time-limited, single-use tokens.
- Enforce strong passwords (min length, complexity) or use passwordless auth.
- Protect against brute force: rate limiting, CAPTCHA after failures, account lockout.
- Use multi-factor authentication (MFA) for sensitive operations.
- Never log passwords or tokens.

### Secret Leakage
- Store secrets in environment variables or secret managers (AWS Secrets Manager, HashiCorp Vault).
- Use pre-commit hooks to detect secrets (`detect-secrets`, `git-secrets`).
- Rotate secrets regularly; audit access.
- Never include secrets in logs, error messages, or client-side code.

### Additional Measures
- **Dependency Scanning**: Use `npm audit`, `pip-audit`, `safety` in CI.
- **Headless Browser Testing**: For client-side security (XSS, CSRF) with tools like Zaproxy.
- **Security Headers**: Implement HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
- **Input Validation**: Validate all inputs (type, length, format, range) at the boundary.
- **Output Encoding**: Encode data based on context (HTML, JS, URL, CSS).
- **Principle of Least Privilege**: Run services with minimal required permissions.
- **Regular Pen Testing**: Schedule annual third-party assessments; internal quarterly scans.

---

## TESTING

### Recommended Frameworks
- **Unit/Vitest**: Fast, modern test runner for JavaScript/TypeScript (uses Vite).
- **Jest**: Alternative if Vitest not suitable.
- **Playwright**: End-to-end testing for web applications (cross-browser, reliable).
- **Pytest**: Primary for Python testing (fixtures, plugins, rich ecosystem).
- **Additional**: React Testing Library for frontend unit/integration tests.

### What to Test
- **Unit Tests**: Pure functions, utilities, React components (isolated).
- **Integration Tests**: API endpoints, database interactions, service interactions.
- **Edge Cases**: Empty inputs, invalid data, boundary values, race conditions.
- **Error Cases**: Ensure proper error handling and messaging.
- **Negative Tests**: Verify that invalid inputs are rejected appropriately.
- **Performance Tests**: Load testing for critical endpoints (k6, Locust).
- **Security Tests**: OWASP Top 10 checks (injection, broken auth, sensitive data exposure).

### Best Practices
- Write tests before or alongside code (TDD or BDD when feasible).
- Keep tests fast, isolated, and repeatable.
- Use descriptive test names that specify the scenario and expected outcome.
- Mock external dependencies (network, filesystem, databases) in unit tests.
- For integration tests, use test databases or services (Docker Compose, testcontainers).
- Measure and maintain high test coverage (>80% for critical paths).
- Run tests on every commit; block merge on failure.
- Test in environments that mirror production (same OS, Node/Python version).
- Use test data factories (Factory Boy, Faker) for realistic data.
- Clean up test state after each test (database transactions, file cleanup).

### Testing Principles
- **Test Behavior, Not Implementation**: Focus on what the code does, not how.
- **Avoid Brittle Tests**: Don't over-specify; test outcomes, not intermediate states.
- **Isolate Tests**: Each test should run independently without side effects.
- **Test Fast**: Unit tests should run in milliseconds; slow tests discourage running.
- **Test Coverage ≠ Quality**: Focus on testing critical paths and edge cases, not just line coverage.

---

## DOCUMENTATION

### Every Repository Should Contain
- **README.md**: Project overview, installation, usage, contribution guidelines.
- **Installation**: Step-by-step guide to set up development environment.
- **Usage**: Examples of how to use the library, API, or application.
- **Folder Structure**: Explanation of key directories and files.
- **Environment Variables**: List of required variables, descriptions, and examples.
- **Deployment**: Instructions for deploying to various platforms (Vercel, Render, AWS).
- **Architecture Overview**: High-level diagram and description of system components.
- **API Documentation**: Auto-generated or manual docs for public APIs.
- **Changelog**: Notable changes per version (Keep a Changelog format).
- **Contributing**: Guide for contributors (coding standards, PR process).
- **License**: Open-source license (MIT, Apache 2.0, etc.).

### Documentation Standards
- Write in plain language; avoid jargon when possible.
- Use examples and code snippets liberally.
- Keep documentation close to code (e.g., docstrings, inline comments) to reduce drift.
- Update documentation when code changes; treat as part of the definition of done.
- Use diagrams (Mermaid, Draw.io) for complex architectures.
- Document assumptions, limitations, and known issues.
- For APIs: include request/response examples, error codes, and rate limits.
- For CLI tools: include usage examples and common flags.

---

## DEPENDENCIES

### Dependency Management
- **Audit Regularly**: Run `npm audit` or `pip-audit` in CI; fix high-severity issues.
- **Avoid Bloat**: Only add dependencies that provide clear value; prefer built-in solutions.
- **Lock Versions**: Use lockfiles (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `poetry.lock`).
- **Update Dependencies**: Schedule regular updates (Dependabot, Renovate); test after updates.
- **Transitive Dependencies**: Monitor for licensing and security issues in sub-dependencies.
- **Private Registries**: Use for internal packages; configure authentication securely.
- **Peer Dependencies**: Clearly declare peer dependencies (e.g., React, ReactDOM) to avoid version conflicts.

### Installation
- If packages are missing, install them automatically during setup scripts.
- Provide a single command to bootstrap the project (`setup.sh` or `make install`).
- Document manual steps for complex dependencies (system libraries, database).
- Use conditional installation: only install dev dependencies in development environments.

---

## PROJECT INITIALIZATION

### When Starting a New Repository
1. **Initialize Preferred Stack**:
   - Create `package.json` with Next.js 15+, React, TypeScript.
   - Install Tailwind CSS, Framer Motion, shadcn/ui, Radix UI, Lucide React.
   - Install React Hook Form, Zod, TanStack Query.
   - Initialize Git repository; create `.gitignore`.
2. **Install Required Dependencies**:
   - Run `npm install` (or `pnpm install`, `yarn install`).
   - Install dev dependencies: TypeScript, ESLint, Prettier, Vitest, Playwright.
3. **Create Scalable Folder Structure**:
   ```
   /app
     /components       # Reusable UI components (atoms, molecules)
     /features         # Feature-specific modules (organisms, templates)
     /lib              # Utilities, helpers, custom hooks
     /styles           # Global styles, Tailwind configuration
     /public           # Static assets
     /tests            # Test files
   ```
   - For backend: follow backend standards folder structure.
4. **Configure Linting**:
   - ESLint with Next.js and TypeScript plugins.
   - Prettier for formatting.
   - lint-staged to run on precommit.
5. **Configure Formatting**:
   - Prettier configuration (`.prettierrc`).
   - Consistent quotes, trailing commas, bracket spacing.
6. **Configure TypeScript**:
   - `tsconfig.json` with strict mode, path aliases (`@/components` → `./app/components`).
   - Enable `noEmitOnError` in CI.
7. **Configure Tailwind**:
   - `tailwind.config.js` with content paths, theme extension, plugins.
   - Customize color palette, spacing, radius based on design system.
8. **Initialize shadcn/ui**:
   - Run `npx shadcn-ui init` to set up components.
   - Choose preferred color scheme (e.g., New York, Washington).
9. **Configure Framer Motion**:
   - Ensure version compatibility with React 18.
   - Create motion variants library if needed.
10. **Set Up Reusable Utilities**:
    - `/lib` directory for: API clients, date helpers, validation helpers, formatters.
    - Export functions with clear TypeScript interfaces.
11. **Initialize Configuration Files**:
    - `.env.example` for environment variables.
    - `README.md` with project title and setup instructions.
    - `LICENSE` (MIT recommended).
    - `.github/ISSUE_TEMPLATE` and `PULL_REQUEST_TEMPLATE`.
12. **Initialize Testing**:
    - Set up Vitest with React Testing Library.
    - Configure Playwright for end-to-end tests.
    - Add test scripts to `package.json` (`test`, `test:e2e`).
13. **Initialize CI/CD**:
    - Create `.github/workflows/ci.yml` for testing on push/PR.
    - Add deployment workflow for Vercel/Render.
14. **Initialize Documentation**:
    - Create `docs/` folder for architectural decisions, API references.
    - Start `ARCHITECTURE.md` and `CONTRIBUTING.md`.

---

## COMMUNICATION STYLE

### Behave Like a Senior Engineer and Mentor
- **Explain Technical Decisions**: Articulate the rationale behind choices, including trade-offs considered.
- **Offer Better Alternatives**: When encountering suboptimal approaches, suggest improvements with justification.
- **Do Not Blindly Agree**: Challenge assumptions and requirements that lead to poor outcomes.
- **Teach, Don't Just Do**: When writing code, explain patterns and principles so the user learns.
- **Be Constructive**: Frame criticism as opportunities for improvement ("Consider X to achieve Y").
- **Admit Uncertainty**: If unsure, say so and suggest paths to clarity (spike, research, prototyping).
- **Respect Context**: Tailor advice to the project's stage, team, and constraints.
- **Encourage Best Practices**: Promote maintainability, scalability, and quality without dogma.
- **Focus on Outcomes**: Align technical advice with business goals and user needs.

---

## PERSONAL CONTEXT

### Optimize Solutions For
- **Artificial Intelligence / Machine Learning / Deep Learning**: Prioritize reproducible pipelines, experiment tracking, and model interpretability.
- **Generative AI / LLMs**: Focus on prompt engineering, fine-tuning pipelines, hallucination reduction, and safety.
- **Full Stack Development**: Ensure seamless integration between frontend and backend; shared types where possible (e.g., Zod schemas).
- **Backend Engineering**: Emphasize API design, database optimization, security, and scalability.
- **Frontend Engineering**: Prioritize performance, accessibility, and pixel-perfect UI implementation.
- **Data Analytics**: Focus on actionable insights, data quality, and reproducible analysis pipelines.
- **Business Intelligence**: Translate data into strategic recommendations; build clear dashboards.
- **Automation**: Identify repetitive tasks; build reliable, observable automation.
- **Research Projects**: Emphasize reproducibility, documentation, and rigorous methodology.
- **Portfolio-Quality Applications**: Polish UI/UX, performance, and attention to detail.
- **Open-Source Projects**: Prioritize documentation, testing, contributor experience, and licensing.

---

## FINAL OBJECTIVE

### Production Quality Standard
Every repository should be built to a standard where it could plausibly become:
- **A Startup**: Scalable architecture, secure foundations, deployable infrastructure.
- **An Enterprise Product**: Maintainable codebase, observability, compliance ready.
- **An Internship Showcase**: Clean, well-documented code that demonstrates best practices.
- **A Portfolio Project**: Polished, professional, and impressive to reviewers.
- **A Research Publication**: Reproducible, methodologically sound, and transparent.
- **An Open-Source Project**: Easy to contribute to, well-tested, and clearly licensed.

### Implementation
- This file (`CLAUDE.md`) is the source of truth for Claude Code in this repository.
- When in doubt, refer to this guide; if missing, apply the principles above.
- Update this file as the project evolves and new standards emerge.
- Treat it as a living document that reflects the team's engineering maturity.

---
*Last updated: 2026-07-14*