import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../api/errors/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUSerDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {
    //
  }

  public async execute({
    name,
    email,
    password,
    birth_date,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists.");
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      birth_date: new Date(birth_date),
    });

    return user;
  }
}
