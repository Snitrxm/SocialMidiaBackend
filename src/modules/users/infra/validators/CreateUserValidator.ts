import { celebrate, Joi, Segments } from "celebrate";

export const CreateUserValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    birth_date: Joi.date().required(),
  }),
});
