import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../repositories/UsersRepositories";

type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
};

export class CreateUserService {
  async execute({ name, email, password, admin = false }: CreateUserDTO) {
    const userRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    const passwordHash = await hash(password, 8);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}
