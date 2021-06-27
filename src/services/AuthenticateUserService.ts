import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

type AuthenticateUserDTO = {
  email: string;
  password: string;
};

export class AuthenticateUserService {
  async execute({ email, password }: AuthenticateUserDTO) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "34140186b1d5406809584974c15d0d97",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
