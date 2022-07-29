import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFollowerService } from "../../../services/CreateFollowerService";

export class CreateFollowerController {
  public async handle(req: Request, res: Response) {
    const { id } = req.user;

    const createFollowerService = container.resolve(CreateFollowerService);

    const follower = await createFollowerService.execute({
      userId: id,
      followerId: req.params.id,
    });

    return res.status(201).json(follower);
  }
}
