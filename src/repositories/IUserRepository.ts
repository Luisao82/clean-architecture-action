import { User } from '../entities/User';

export interface IUserRepository {
  save(user: User): Promise<User>;
  delete(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}
