import { Router } from "express";

import { ensureAuthenticated } from "../../../../../api/middlewares/ensureAuthenticate";
import { AuthenticateUserValidator } from "../../validators/AuthenticateUserValidator";
import { CreateUserValidator } from "../../validators/CreateUserValidator";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateFollowerController } from "../controllers/CreateFollowerController";
import { CreateUserController } from "../controllers/CreateUserController";
import { FindAllUsersController } from "../controllers/FindAllUsersController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const findAllUsersController = new FindAllUsersController();
const createFollowerController = new CreateFollowerController();

usersRoutes.post("/", CreateUserValidator, createUserController.handle);
usersRoutes.post(
  "/login",
  AuthenticateUserValidator,
  authenticateUserController.handle
);

usersRoutes.use(ensureAuthenticated);

usersRoutes.get("/findAll", findAllUsersController.handle);

usersRoutes.post("/follow/:id", createFollowerController.handle);
