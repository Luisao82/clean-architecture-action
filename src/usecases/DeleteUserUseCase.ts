import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

interface DeleteUserRequest {
  id: string;
}

interface DeleteUserResponse {
  user: User;
}

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    const { id } = request;

    const userDelete = await this.userRepository.findById(id);
    if (!userDelete) {
      throw new Error("User not found");
    }

    await this.userRepository.delete(userDelete);

    return { user: userDelete };
  }
}
