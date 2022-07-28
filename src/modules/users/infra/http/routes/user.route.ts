import { Router } from "express";

import { AuthenticateUserValidator } from "../../validators/AuthenticateUserValidator";
import { CreateUserValidator } from "../../validators/CreateUserValidator";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post("/", CreateUserValidator, createUserController.handle);
usersRoutes.post(
  "/login",
  AuthenticateUserValidator,
  authenticateUserController.handle
);
