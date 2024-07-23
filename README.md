# React/TypeScript Boilerplate

A boilerplate project for setting up a React application with TypeScript, Babel, and Webpack. Created for quickly setting up personal projects.

## Features

- **React 18+**: Latest version of React with the new JSX Transform.
- **TypeScript**: Strong typing and enhanced development experience.
- **Babel**: Transpiles modern JavaScript and TypeScript code.
- **Webpack**: Bundles your application and includes a development server with hot reloading.

## Getting Started

### Prerequisites

- **Node.js** (14.x or later) and **npm** (or Yarn) installed on your machine.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:quinnHalsey/boilerplate.git
   cd boilerplate

2. **Install Dependencies**:

   ```
   npm install
    ```
    This command will install all the necessary dependencies specified in package.json.

3. **Run Development Servcer**:

    ```
    npm run start
    ```
    This starts the Webpack development server and opens the application in your default web browser on **port 8000**. The server will watch for changes and automatically reload the page.


4. **Production Build**

    ```
    npm run build
    ```
    This command creates a production-ready build of your application in the **/dist** directory. The build will be optimized and ready for deployment.


5. **Check Typescript**:

    ```
    npm run tsc
    ```
    This runs TypeScript type checking to ensure that your code adheres to the type definitions specified in **tsconfig.json**.



