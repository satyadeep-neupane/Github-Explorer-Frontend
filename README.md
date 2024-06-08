# Github Explorer

## Introduction

Welcome to Github Explorer. This is a simple react app to explore github repositories.

## Prerequisites

Ensure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (version 14.x or later)
-   [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/) (version 1.22.x or later)

## Getting Started

Follow these steps to set up and run the application locally.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/satyadeep-neupane/Github-Explorer-Frontend.git
cd Github-Explorer-Frontend
```

### 2. Copy Environment Variables

Copy the .env.example file to .env:

```
cp .env.example .env
```

Edit the .env file to add your backend URL:

```
REACT_APP_BACKEND_URL=http://your-backend-url
```

### 3. Install Dependencies

Install the project dependencies:

Using npm:

```
npm install
```

Using yarn:

```
yarn install
```

### 4. Ensure Backend is Running

Make sure your backend server is running and accessible at the URL specified in the .env file.

### 5. Start the Application

Start the application:

Using npm:

```
npm start
```

Using yarn:

```
yarn start
```

Open your browser and visit http://localhost:3000 to see the app running.

## Known Issues

1. HTML in README Not Rendered Properly:
   Current version only supports markup in README file. HTML content in the README file may not be rendered propery.
