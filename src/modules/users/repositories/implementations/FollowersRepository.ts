import { Followers } from "@prisma/client";

import { prisma } from "../../../../prisma";
import { ICreateFollowerDTO } from "../../dtos/iCreateFollowerDTO";
import { IFollowersRepository } from "../IFollowersRepository";

export class FollowersRepository implements IFollowersRepository {
  create({ followerId, userId }: ICreateFollowerDTO): Promise<Followers> {
    const follower = prisma.followers.create({
      data: {
        followerId,
        userId,
      },
    });

    return follower;
  }
}
