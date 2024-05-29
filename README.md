## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)

## Features

- Create a new todo item
- Read all todo items or a single todo item by ID
- Update a todo item
- Delete a todo item

## Technologies Used

- Node.js
- Express
- TypeScript

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the TypeScript files:

   ```bash
   npm run build
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Use a tool like Postman or curl to interact with the API.

## API Endpoints

- `GET /todos`: Get all todo items
- `GET /todos/:id`: Get a single todo item by ID
- `POST /todos`: Create a new todo item
- `PUT /todos/:id`: Update a todo item by ID
- `DELETE /todos/:id`: Delete a todo item by ID

## Examples

- Get all todo items:

  ```bash
  GET /todos
  ```

- Get a todo item by ID:

  ```bash
  GET /todos/:id
  ```

- Create a new todo item:

  ```bash
  POST /todos
  ```

  Request body:

  ```json
  {
    "title": "Finish README",
    "completed": false
  }
  ```

- Update a todo item by ID:

  ```bash
  PUT /todos/:id
  ```

  Request body:

  ```json
  {
    "title": "Finish README",
    "completed": true
  }
  ```

- Delete a todo item by ID:

  ```bash
  DELETE /todos/:id
  ```
