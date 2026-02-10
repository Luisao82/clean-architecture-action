import { Request, Response } from 'express';
import { CreateUserUseCase } from '../usecases/CreateUserUseCase';
import { UserPresenter } from '../presenters/UserPresenter';
import { IUserRepository } from '../repositories/IUserRepository';

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private userRepository: IUserRepository
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;

    if (!name || !email) {
      res.status(400).json({ error: 'Name and email are required' });
      return;
    }

    try {
      const { user } = await this.createUserUseCase.execute({ name, email });

      res.status(201).json({
        message: 'User created successfully',
        user: UserPresenter.toJson(user),
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userRepository.findAll();
      res.status(200).json({ users: users.map(UserPresenter.toJson) });
    } catch (error) {
      res.status(500).json({ error: 'Failed to list users' });
    }
  }
}
