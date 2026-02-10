import { Router } from 'express';
import { UserController } from './UserController';

export function createRoutes(userController: UserController): Router {
  const router = Router();

  router.post('/users', (req, res) => userController.create(req, res));
  router.get('/users', (req, res) => userController.list(req, res));

  return router;
}
