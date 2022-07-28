import { Router } from "express";

import { usersRoutes } from "../../modules/users/infra/http/routes";

export const v1Routes = Router();

v1Routes.use("/users", usersRoutes);
