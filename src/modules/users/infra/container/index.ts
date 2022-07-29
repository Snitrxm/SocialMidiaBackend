import { container } from "tsyringe";

import { IFollowersRepository } from "../../repositories/IFollowersRepository";
import { FollowersRepository } from "../../repositories/implementations/FollowersRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IFollowersRepository>(
  "FollowersRepository",
  FollowersRepository
);
