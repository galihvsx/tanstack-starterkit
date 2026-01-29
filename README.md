# Starterkit

A modern, production-ready fullstack web application starter kit built with performance and developer experience in mind.

## 🚀 Tech Stack

This project leverages the latest and greatest tools in the React ecosystem:

- **Framework**: [TanStack Start](https://tanstack.com/start/latest) (Server-Side Rendering, API Routes)
- **Routing**: [TanStack Router](https://tanstack.com/router/latest)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Form Handling**: [TanStack Form](https://tanstack.com/form/latest)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Database**: PostgreSQL

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/) (Runtime & Package Manager)
- [Node.js](https://nodejs.org/) (Required for some tools)
- PostgreSQL Database

## 🏁 Getting Started

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd starterkit
    ```

2.  **Install dependencies**

    ```bash
    bun install
    ```

3.  **Environment Setup**

    Create a `.env` file in the root directory (or copy `.env.example` if available) and add your database connection string and authentication secrets.

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/starterkit"
    BETTER_AUTH_SECRET="your-secret-here"
    BETTER_AUTH_URL="http://localhost:3000"
    ```

4.  **Database Setup**

    Generate migration files and push the schema to your database.

    ```bash
    bun run db:generate
    bun run db:push
    ```

5.  **Run Development Server**

    ```bash
    bun run dev
    ```

    The application will be available at `http://localhost:3000`.

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `bun run dev` | Starts the development server with hot reloading. |
| `bun run build` | Builds the application for production. |
| `bun run preview` | Previews the production build locally. |
| `bun run test` | Runs the test suite using Vitest. |
| `bun run db:generate` | Generates SQL migrations based on your Drizzle schema. |
| `bun run db:migrate` | Applies migrations to the database. |
| `bun run db:push` | Pushes schema changes directly to the database (prototyping). |
| `bun run db:studio` | Opens Drizzle Studio to inspect and manage your data. |

## 📁 Project Structure

```
starterkit/
├── src/
│   ├── components/   # UI components
│   ├── routes/       # File-based routing (TanStack Router)
│   ├── lib/          # Utilities and configuration
│   ├── server/       # Server-side logic
│   └── ...
├── drizzle/          # Database migrations and schema
├── public/           # Static assets
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT](LICENSE)
