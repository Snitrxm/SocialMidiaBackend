import { Router } from "express";

import { ensureAuthenticated } from "../../../../../api/middlewares/ensureAuthenticate";
import { CreatePostController } from "../controllers/CreatePostController";
import { UpdatePostController } from "../controllers/UpdatePostController";
import { CreatePostValidator } from "../validators/CreatePostValidator";

export const postsRoutes = Router();

const createPostController = new CreatePostController();
const updatedPostController = new UpdatePostController();

postsRoutes.use(ensureAuthenticated);

postsRoutes.post("/", CreatePostValidator, createPostController.handle);
postsRoutes.put("/byId/:id", updatedPostController.handle);
