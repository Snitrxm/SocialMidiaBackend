import { Followers } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IFollowersRepository } from "../repositories/IFollowersRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  userId: string;
  followerId: string;
}

@injectable()
export class CreateFollowerService {
  constructor(
    @inject("FollowersRepository")
    private followersRepository: IFollowersRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ userId, followerId }: IRequest): Promise<Followers> {
    const user = await this.usersRepository.findById(userId);
    const followedPerson = await this.usersRepository.findById(followerId);

    if (!user || !followedPerson) {
      throw new Error("User not found");
    }

    if (followerId === user.id) {
      throw new Error("You can't follow yourself");
    }

    const follower = await this.followersRepository.create({
      userId,
      followerId,
    });

    followedPerson.followers += 1;

    await this.usersRepository.save(followedPerson);

    return follower;
  }
}
