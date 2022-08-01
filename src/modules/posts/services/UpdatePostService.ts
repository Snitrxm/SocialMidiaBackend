import { Post } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IPostRepository } from "../repositories/IPostRepository";

interface IRequest {
  id: string;
  userId: string;
  title: string;
  body: string;
  likes: number;
}

@injectable()
export class UpdatePostService {
  constructor(
    @inject("PostRepository")
    private postRepository: IPostRepository
  ) {
    //
  }

  public async execute({
    body,
    id,
    likes,
    title,
    userId,
  }: IRequest): Promise<Post> {
    const postExits = await this.postRepository.findById(id, userId);

    if (!postExits) {
      throw new Error("Post not found");
    }

    Object.assign(postExits, {
      title: title ?? postExits.title,
      body: body ?? postExits.body,
      likes: likes ?? postExits.likes,
    });

    const post = await this.postRepository.updateById(postExits);
    return post;
  }
}
