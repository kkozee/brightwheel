import { Request, Response, NextFunction } from 'express';
import Joi from "joi";

export default (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    to: Joi.string().email().required(),
    to_name: Joi.string().required(),
    from: Joi.string().email().required(),
    from_name: Joi.string().required(),
    subject: Joi.string().required(),
    body: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body);
  
  if (error) {
      res.send(`Error: ${error.details.map(x => x.message).join(', ')}`);
  } else {
      req.body = value;
      next();
  }
}