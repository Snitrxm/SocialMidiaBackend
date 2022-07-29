import { Followers } from "@prisma/client";

import { ICreateFollowerDTO } from "../dtos/iCreateFollowerDTO";

export interface IFollowersRepository {
  create({ followerId, userId }: ICreateFollowerDTO): Promise<Followers>;
}
