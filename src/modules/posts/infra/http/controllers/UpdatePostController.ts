import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePostService } from "../../../services/UpdatePostService";

export class UpdatePostController {
  public async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { id: userId } = req.user;
    const { title, body, likes } = req.body;

    const updatePostService = container.resolve(UpdatePostService);

    const updatedPost = await updatePostService.execute({
      id,
      userId,
      title,
      body,
      likes,
    });

    return res.status(200).json(updatedPost);
  }
}
