# NodeJS QR 

![Build Status](https://github.com/rayblair06/nodejs-qr/workflows/Build/badge.svg) ![Tests Status](https://github.com/rayblair06/nodejs-qr/workflows/Lint%20and%20tests/badge.svg)

A QR Code generator built in NodeJS

## Requirements

- [Docker](https://www.docker.com/)
- [NPM](https://www.npmjs.com) / [Yarn](https://yarnpkg.com)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Installation

### _Development_

Follow the steps below to build and start the NodeJS server.

Generate environment variables.
```
cp .env.example .env
```

Build Docker image and start Docker container.
```
make build
make start
```

## Commands
```
npm start                     # Start NodeJS server
npm run lint                  # Run linter
npm run lint:fix              # Run linter and fix formatting
npm run test                  # Run tests with Jest
```


## API Endpoints

### Create QR Code
  Create and return a QR Code

*  **GET** `/`
  
    **URL Params**

    **Required:**

    `text=[string]`

    **Optional:**

    `width=[integer]`

    `height=[integer]`

    `color=[hexcolor]`

    `background=[hexcolor]`

    `type=[jpg|png]`

    **Success Response:**

    Will return an `image/png` or `image/jpeg` content response.

    * **Code:** 200
