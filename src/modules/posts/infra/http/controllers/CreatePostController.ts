import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePostService } from "../../../services/CreatePostService";

export class CreatePostController {
  public async handle(req: Request, res: Response) {
    const { title, body } = req.body;
    const { id: userId } = req.user;

    const createPostService = container.resolve(CreatePostService);

    const post = await createPostService.execute({
      title,
      body,
      userId,
    });

    return res.status(201).json(post);
  }
}
