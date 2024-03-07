# NestJS Application


## Project Structure

The project structure follows a typical NestJS setup:

- **controllers/**: Contains controllers for handling HTTP requests. `form.controller.js` is responsible for form-related endpoints.
- **routes/**: Declares routes for the application, mapping incoming requests to appropriate controller methods.
- **services/**: Contains service classes responsible for handling business logic. `form.services.js` likely contains form-related services.
- **utils/**: Contains utility functions or modules. `filter.js` may include various utility functions.
- **example.env**: This file serves as a template for environment variables. Remember to fill it with actual values and rename it to `.env`.

## Scripts

- **test**: Placeholder script for running tests.
- **start**: Used to start the server in production mode with `node server.js`.
- **dev**: Runs the server in development mode using `nodemon` for auto-reloading.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Rename `example.env` to `.env` and fill in the necessary environment variables.
4. Start the server:
    - For development: `npm run dev`
    - For production: `npm start`

## Environment Variables

Ensure to set the following environment variables in your `.env` file:

- `PORT`: Port on which the server will run. Example: `PORT=5000`
- `API_KEY`: Your API key (if applicable). Example: `API_KEY=your_api_key`
- `FORM_ID`: Your form ID (if applicable). Example: `FORM_ID=your_form_id`

Remember to replace `your_api_key` and `your_form_id` with the actual values corresponding to your application's requirements.




