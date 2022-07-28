import { Router } from "express";

import { postsRoutes } from "../../modules/posts/infra/http/routes/post.routes";
import { usersRoutes } from "../../modules/users/infra/http/routes/user.route";

export const v1Routes = Router();

v1Routes.use("/users", usersRoutes);
v1Routes.use("/posts", postsRoutes);
