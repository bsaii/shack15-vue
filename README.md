# SHACK15

![image](https://github.com/user-attachments/assets/a8372074-b148-45ba-b369-88ef4f07f955)


## Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/bsaii/shack15-vue
cd shack15-vue
```

### 2. Install Dependencies

Install the required dependencies:

Using npm:

```bash
npm install
```

Or, if you prefer Yarn:

```bash
yarn install
```

### 3. Configure Environment Variables

Create an `.env` file in the root directory and define the `API_URL` environment variable.

```plaintext
API_URL=http://localhost:8000
```

> **Note**: Replace `http://localhost:8000` with the actual base URL of your API.

### 4. Run the Application

To start the development server, use:

Using npm:

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```

The application will start running at [http://localhost:3000](http://localhost:3000).

## Additional Commands

- **Build for Production**: To build the app for production, run:
  ```bash
  npm run build
  ```
  Or:
  ```bash
  yarn build
  ```

- **Generate Static Files**: To generate static files (useful for static hosting), use:
  ```bash
  npm run generate
  ```
  Or:
  ```bash
  yarn generate
  ```

- **Lint Code**: To lint the codebase, you can run:
  ```bash
  npm run lint
  ```
  Or:
  ```bash
  yarn lint
  ```

## Troubleshooting

- **Environment Variables**: Ensure your `.env` file contains the correct `API_URL`.
- **Dependencies**: Verify that Node.js and npm/Yarn are correctly installed.

---

This README should provide all the necessary information for setting up and running your Nuxt.js application!

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
