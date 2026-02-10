import fs from 'fs/promises';
import path from 'path';
import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface UserJson {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

// Usar una ruta relativa desde el root del proyecto
const DATA_FILE = path.join(process.cwd(), 'data', 'users.json');

export class UserRepositoryJson implements IUserRepository {
  private async readData(): Promise<UserJson[]> {
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private async writeData(users: UserJson[]): Promise<void> {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), 'utf-8');
  }

  async save(user: User): Promise<User> {
    const users = await this.readData();
    const newUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
    };
    users.push(newUser);
    await this.writeData(users);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const users = await this.readData();
    const user = users.find((u) => u.id === id);
    if (!user) return null;

    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt),
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.readData();
    return users.map((u) =>
      new User({
        id: u.id,
        name: u.name,
        email: u.email,
        createdAt: new Date(u.createdAt),
      })
    );
  }
}
