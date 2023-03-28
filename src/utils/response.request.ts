import { Response } from 'express';
import { HttpStatus } from './constant';

export const errorResponse = (
  res: Response,
  message?: string,
  data?: any,
  addOnData?: any,
) => {
  return res.status(HttpStatus.BAD_REQUEST).json({
    data: data,
    status: 'error',
    statusCode: HttpStatus.BAD_REQUEST,
    message: [message],
    ...addOnData,
  });
};

export const successResponse = (
  res: Response,
  message?: string,
  data?: any,
  addOnData?: any,
) => {
  return res.status(HttpStatus.SUCCESS).json({
    data: data,
    message: message,
    status: 'success',
    statusCode: HttpStatus.BAD_REQUEST,
    ...addOnData,
  });
};
