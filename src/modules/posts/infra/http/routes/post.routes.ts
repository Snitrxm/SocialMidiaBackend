import { Router } from "express";

import { ensureAuthenticated } from "../../../../../api/middlewares/ensureAuthenticate";
import { CreatePostController } from "../controllers/CreatePostController";
import { CreatePostValidator } from "../validators/CreatePostValidator";

export const postsRoutes = Router();

const createPostController = new CreatePostController();

postsRoutes.use(ensureAuthenticated);

postsRoutes.post("/", CreatePostValidator, createPostController.handle);
