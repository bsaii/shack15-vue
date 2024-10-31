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


