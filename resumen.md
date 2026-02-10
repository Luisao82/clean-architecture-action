# Resumen del Proyecto - Clean Architecture con Express

## Descripción

Este es un ejemplo básico de Clean Architecture implementado con Node.js, Express y TypeScript para la gestión de usuarios.

## Estructura de carpetas

```
src/
├── entities/          # Objetos de negocio (User.ts)
├── repositories/      # Interfaces de acceso a datos (IUserRepository.ts)
├── usecases/          # Lógica de negocio (CreateUserUseCase.ts)
├── adapters/          # Controladores y rutas (UserController.ts, routes.ts)
├── presenters/        # Formateo de respuestas (UserPresenter.ts)
├── infrastructure/    # Servicios externos (UserRepositoryJson.ts)
└── main/              # Punto de entrada (server.ts)
public/
└── index.html         # Interfaz visual para gestionar usuarios
data/
└── users.json         # Persistencia de datos
```

## Capas de Clean Architecture

| Capa | Propósito | Archivo |
|------|-----------|---------|
| **Entities** | Objetos de negocio (User) | `src/entities/User.ts` |
| **Use Cases** | Lógica de negocio | `src/usecases/CreateUserUseCase.ts` |
| **Repositories** | Interfaces de acceso a datos | `src/repositories/IUserRepository.ts` |
| **Infrastructure** | Implementación de persistencia | `src/infrastructure/json/UserRepositoryJson.ts` |
| **Adapters** | Controladores y rutas HTTP | `src/adapters/UserController.ts` |
| **Presenters** | Formateo de respuestas | `src/presenters/UserPresenter.ts` |

## Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/users` | Crear un nuevo usuario |
| GET | `/api/users` | Listar todos los usuarios |

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Ejecuta en modo desarrollo con ts-node |
| `npm run build` | Compila TypeScript a `dist/` |
| `npm start` | Ejecuta el servidor compilado |

## Persistencia

Los usuarios se almacenan en `data/users.json`. La capa de repositorio abstracta la persistencia, facilitando el cambio a una base de datos relacional o NoSQL en el futuro.
