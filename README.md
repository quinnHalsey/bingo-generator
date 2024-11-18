# Bingo Board Generator

## Getting Started

### Prerequisites

- **Node.js** (14 or later) and **npm** (or Yarn) installed on your machine.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:quinnHalsey/bingo-generator.git
   cd bingo-generator

   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

   This command will install all the necessary dependencies specified in package.json.

## Usage

1. **Configure Boards**:

   Set board options, title, items and more in new file **src/helpers/constants.ts** based on **src/helpers/constants\_\_TEMPLATE.ts**

2. **Run Development Servcer**:

```
npm run start
```

This starts the Webpack development server and opens the application in your default web browser on **port 8000**.

3. **Print Boards**

When you're satisfied with all of the options and board output, print from your browser. The page breaks will occur after each board automatically.
