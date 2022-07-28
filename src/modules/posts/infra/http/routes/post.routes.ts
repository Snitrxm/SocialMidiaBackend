import { Router } from "express";

import { ensureAuthenticated } from "../../../../../api/middlewares/ensureAuthenticate";
import { CreatePostController } from "../controllers/CreatePostController";
import { CreatePostValidator } from "../validators/CreatePostValidator";

export const postRoutes = Router();

const createPostController = new CreatePostController();

postRoutes.use(ensureAuthenticated);

postRoutes.post("/", CreatePostValidator, createPostController.handle);
