import { Post } from "@prisma/client";

import { prisma } from "../../../../prisma";
import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { IUpdatePostDTO } from "../../dtos/IUpdatePostDTO";
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

  updateById({ id, userId, ...remaining }: IUpdatePostDTO): Promise<Post> {
    const post = prisma.post.updateMany({
      where: {
        id,
        userId,
      },
      data: {
        ...remaining,
      },
    });

    return post as any;
  }

  findById(id: string, userId: string): Promise<Post | null> {
    const post = prisma.post.findFirst({
      where: {
        id,
        userId,
      },
    });

    return post;
  }
}
