import express from 'express';
import { UserRepositoryJson } from '../infrastructure/json/UserRepositoryJson';
import { CreateUserUseCase } from '../usecases/CreateUserUseCase';
import { UserController } from '../adapters/UserController';
import { createRoutes } from '../adapters/routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static('public'));

// Crear instancias de las capas
const userRepository = new UserRepositoryJson();
const createUserUseCase = new CreateUserUseCase(userRepository);
const userController = new UserController(createUserUseCase, userRepository);

// Configurar rutas
app.use('/api', createRoutes(userController));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
