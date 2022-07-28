import { celebrate, Joi, Segments } from "celebrate";

export const CreatePostValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
  }),
});
