# Node.js REST API with TypeScript

A REST API built with Node.js, TypeScript, Express, and JWT authentication.

## Features

- User authentication with JWT (access and refresh tokens)
- Role-based authorization (USER and ADMIN roles)
- Product management
- PostgreSQL database with Prisma ORM
- API documentation with Swagger
- Security features (helmet, cors, rate limiting)
- Docker support

## Prerequisites

- Node.js
- Docker and Docker Compose
- PostgreSQL

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and update the values
3. Install dependencies:
   ```bash
   npm install
   ```

4. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```

5. Start the database and API with Docker:
   ```bash
   docker-compose up -d
   ```

6. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

7. Run the seed script (in development):
   ```bash
   npm run seed
   ```

The API will be available at http://localhost:3000
Swagger documentation will be available at http://localhost:3000/docs

## Default Admin User (Development)

- Email: admin@admin.com
- Password: admin123

## API Endpoints

### Authentication
- POST `/auth/register` - Register a new user
- POST `/auth/login` - Login user

### Users
- GET `/users/me` - Get authenticated user data

### Products
- GET `/products` - List all products
- POST `/products` - Create a new product

## Development

To start the development server:
```bash
npm run dev
```

## Production

To build and start for production:
```bash
npm run build
npm start
```
