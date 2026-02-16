import express from 'express';
import path from 'node:path';
import { UserRepositoryJson } from '../infrastructure/json/UserRepositoryJson';
import { CreateUserUseCase } from '../usecases/CreateUserUseCase';
import { UserController } from '../adapters/UserController';
import { createRoutes } from '../adapters/routes';
import { DeleteUserUseCase } from '../usecases/DeleteUserUseCase';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

// Crear instancias de las capas
const userRepository = new UserRepositoryJson();
const createUserUseCase = new CreateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const userController = new UserController(deleteUserUseCase, createUserUseCase, userRepository);

// Configurar rutas
app.use('/api', createRoutes(userController));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Exportar app para Vercel (serverless)
export default app;

// Solo hacer listen en desarrollo local
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
