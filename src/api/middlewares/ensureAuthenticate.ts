import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  const { sub: user_id } = (await verify(
    token,
    process.env.JWT_SECRET as string
  )) as IPayload;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(user_id);

  if (!user) {
    throw new AppError("Token is invalid", 401);
  }

  req.user = {
    id: user_id,
  };

  next();
}
