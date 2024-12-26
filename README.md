# Authentication Server

This project is a robust authentication server built using Node.js, Express, and TypeScript. It provides secure user registration, login, and token-based authentication using JWTs.

## Technologies Used

*   **Node.js:** Runtime environment for server-side JavaScript.
*   **Express:** Fast, unopinionated, minimalist web framework for Node.js.
*   **TypeScript:** Superset of JavaScript that adds static typing.
*   **MongoDB (Mongoose):** Database for storing user data.
*   **JSON Web Tokens (JWT):** For secure token-based authentication.
*   **bcrypt:** For password hashing.
*   **cors:** For handling Cross-Origin Resource Sharing.
*   **zod:** For schema validation.
*   **dotenv:** For managing environment variables.
*   **http-status-codes:** For consistent HTTP status codes.

## Features

*   **User Registration:** Allows users to create new accounts with secure password hashing.
*   **User Login:** Authenticates users and generates JWT tokens upon successful login.
*   **JWT Authentication:** Protects routes and resources using JWT middleware.
*   **Input Validation:** Uses Zod for robust input validation to prevent common vulnerabilities.
*   **Error Handling:** Provides consistent error responses with appropriate HTTP status codes.
*   **Environment Variables:** Uses dotenv for managing sensitive information.

## Getting Started

### Prerequisites

*   Node.js (LTS recommended)
*   npm or yarn
*   MongoDB installed and running

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd Autehntciation-server
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4.  Create a `.env` file in the root directory and configure the environment variables:

    ```
    PORT=3000
    MONGODB_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    # ... other environment variables
    ```

### Development

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

### Linting and Formatting

*   **Lint:**

    ```bash
    npm run lint
    # or
    yarn lint
    ```

*   **Fix Lint Issues:**

    ```bash
    npm run lint:fix
    # or
    yarn lint:fix
    ```

*   **Format Code:**

    ```bash
    npm run format
    # or
    yarn format
    ```

## Project Structure

Autehntciation-server/
├── src/
│   ├── models/        # Database models (e.g., User)
│   ├── routes/        # API routes
│   ├── middleware/    # Middleware functions (e.g., authentication)
│   ├── controllers/   # Route handlers/controllers
│   ├── utils/         # Utility functions
│   ├── config/        # Configuration files
│   ├── server.ts      # Main server file
│   └── index.ts       # Entry point
├── .env               # Environment variables
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── .eslintrc.js       # ESLint configuration
├── .prettierrc.js     # Prettier configuration
└── README.md          # Project documentation