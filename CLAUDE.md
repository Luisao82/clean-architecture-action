# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js project using Express framework with **Clean Architecture** pattern for user management.

## Architecture

The project follows Clean Architecture with these layers:

| Layer | Purpose | Location |
|-------|---------|----------|
| **Entities** | Business objects (User) | `src/entities/` |
| **Use Cases** | Business logic (CreateUserUseCase) | `src/usecases/` |
| **Repositories** | Data access interfaces | `src/repositories/` |
| **Adapters** | Controllers and routes | `src/adapters/` |
| **Presenters** | Response formatting | `src/presenters/` |
| **Infrastructure** | External services (JSON DB) | `src/infrastructure/` |

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run in development mode with ts-node |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled server |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | List all users |

## File Locations

- **User Entity**: `src/entities/User.ts`
- **Create User Use Case**: `src/usecases/CreateUserUseCase.ts`
- **User Repository Interface**: `src/repositories/IUserRepository.ts`
- **JSON Repository Adapter**: `src/infrastructure/json/UserRepositoryJson.ts`
- **Express Controller**: `src/adapters/UserController.ts`
- **Server Entry**: `src/main/server.ts`

## Data Persistence

Users are stored in `data/users.json`. The repository layer abstracts persistence, making it easy to swap JSON storage for a database later.

## Setup

```bash
npm install           # Install dependencies
npm run dev          # Start development server
```
