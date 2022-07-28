import { container } from "tsyringe";

import { PostRepository } from "../../repositories/implementations/PostRepository";
import { IPostRepository } from "../../repositories/IPostRepository";

container.registerSingleton<IPostRepository>("PostRepository", PostRepository);
