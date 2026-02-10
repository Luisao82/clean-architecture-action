import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

interface CreateUserRequest {
  name: string;
  email: string;
}

interface CreateUserResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email } = request;

    const user = new User({
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date(),
    });

    await this.userRepository.save(user);

    return { user };
  }
}
