import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../users/repositories/IUsersRepository";
import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { IPostRepository } from "../repositories/IPostRepository";

@injectable()
export class CreatePostService {
  constructor(
    @inject("PostRepository")
    private postRepository: IPostRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {
    //
  }

  public async execute({ title, body, userId }: ICreatePostDTO) {
    const post = await this.postRepository.create({ title, body, userId });

    return post;
  }
}
