import { Post } from "@prisma/client";

import { ICreatePostDTO } from "../dtos/ICreatePostDTO";

export interface IPostRepository {
  create({ title, body, userId }: ICreatePostDTO): Promise<Post>;
}
