import { User } from "@prisma/client";

import { prisma } from "../../../../prisma";
import { ICreateUserDTO } from "../../dtos/ICreateUSerDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  public async create({
    name,
    email,
    password,
    birth_date,
  }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        birth_date,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user as User;
  }

  public async findById(id: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return user as User;
  }

  public async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }

  public async save(user: User): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });

    return updatedUser;
  }
}
