import { NextFunction, Request, Response } from 'express';
import { validateAsClass } from 'joiful';
import { errorResponse } from './response.request';

export const validate = (classDTO: any, isQuery = false) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = isQuery ? req.query : req.body;
    const error: any = validateAsClass(body, classDTO);

    if (error) return errorResponse(res, error.error.details[0].message);

    return next();
  };
};
