import fs from "fs/promises";
import path from "path";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface UserJson {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const isVercel = !!process.env.VERCEL;

// En Vercel: leer desde el bundle deployado, escribir en /tmp
// En local: usar el directorio del proyecto
const SOURCE_DATA_FILE = path.join(__dirname, "../../../data/users.json");
const WRITABLE_DATA_FILE = isVercel
  ? path.join("/tmp", "users.json")
  : path.join(__dirname, "../../../data/users.json");

export class UserRepositoryJson implements IUserRepository {
  private initialized = false;

  private async ensureWritableFile(): Promise<void> {
    if (this.initialized || !isVercel) return;
    try {
      await fs.access(WRITABLE_DATA_FILE);
    } catch {
      // Copiar datos iniciales al directorio writable
      try {
        const data = await fs.readFile(SOURCE_DATA_FILE, "utf-8");
        await fs.writeFile(WRITABLE_DATA_FILE, data, "utf-8");
      } catch {
        await fs.writeFile(WRITABLE_DATA_FILE, "[]", "utf-8");
      }
    }
    this.initialized = true;
  }

  private async readData(): Promise<UserJson[]> {
    await this.ensureWritableFile();
    try {
      const data = await fs.readFile(WRITABLE_DATA_FILE, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading user data:", error);
      return [];
    }
  }

  private async writeData(users: UserJson[]): Promise<void> {
    await this.ensureWritableFile();
    await fs.mkdir(path.dirname(WRITABLE_DATA_FILE), { recursive: true });
    await fs.writeFile(
      WRITABLE_DATA_FILE,
      JSON.stringify(users, null, 2),
      "utf-8",
    );
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
    return users.map(
      (u) =>
        new User({
          id: u.id,
          name: u.name,
          email: u.email,
          createdAt: new Date(u.createdAt),
        }),
    );
  }
}
