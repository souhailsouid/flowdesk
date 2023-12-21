# My Binance Market App

## Overview
This project is a React application built with TypeScript and Vite, aimed at retrieving and displaying market data for selected currency pairs from the Binance public API. It allows users to select a currency pair, fetches market data, and displays trades with sorting capabilities.

## Goals
- Provide a form for users to select a currency pair.
- Fetch and display market data for the selected pair from Binance public REST API, including ticker, 24h ticker, and recent trades.
- Enable sorting of trades data by time, price, and quantity.

## Specifications
- React application with TypeScript.
- Styled components for CSS styling.
- Published source code in a VCS (Version Control System).

## Technology Stack
- React 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8
- MUI (Material-UI) for UI components
- ApexCharts and Chart.js for data visualization
- Axios for HTTP requests
- React Query for data fetching management
- ESLint for code quality

## Setup and Running the Project
- Ensure Node.js and PNPM are installed.
- Clone the repository: `git clone <repository-url>`
- Navigate to the project directory: `cd my-binance-market-app`
- Install dependencies: `pnpm install`
- Start the development server: `pnpm run dev`

For version management, this project uses NVM (Node Version Manager). To set the correct node version, run `nvm use` before starting the development server.

## Running Tests
- To run tests: `<command-to-run-tests>`

## Linting
- ESLint is configured for code quality and consistency. To run ESLint: `pnpm run lint`

## Building for Production
- To build the project: `pnpm run build`
- To preview the build: `pnpm run preview`

## Documentation
- Binance API: [Binance API Documentation](https://binance-docs.github.io/apidocs/spot/en/#change-log)




