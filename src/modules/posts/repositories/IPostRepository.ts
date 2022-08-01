import { Post, Prisma } from "@prisma/client";

import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { IUpdatePostDTO } from "../dtos/IUpdatePostDTO";

export interface IPostRepository {
  create({ title, body, userId }: ICreatePostDTO): Promise<Post>;
  updateById({ id, ...remaining }: IUpdatePostDTO): Promise<Post>;
  findById(id: string, userId: string): Promise<Post | null>;
}
