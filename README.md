# Library Backend System

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up MongoDB and update the `.env` file.
4. Start the server: `node server.js`.

## Testing
Use Postman or cURL to test the API endpoints. Example:
- Register a user: `POST /api/users/register`
- Login: `POST /api/users/login`
- Add a book: `POST /api/books`
- Borrow a book: `POST /api/borrow/:bookId/:userId`
