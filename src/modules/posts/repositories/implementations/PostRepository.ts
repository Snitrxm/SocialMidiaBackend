import { Post } from "@prisma/client";

import { prisma } from "../../../../prisma";
import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { IPostRepository } from "../IPostRepository";

export class PostRepository implements IPostRepository {
  create({ title, body, userId }: ICreatePostDTO): Promise<Post> {
    const post = prisma.post.create({
      data: {
        title,
        body,
        userId,
      },
    });

    return post;
  }
}
