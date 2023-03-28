import { Request, Response } from 'express';
import { ErrorMessage, SuccessMessage } from '../../utils/constant';
import { errorResponse, successResponse } from '../../utils/response.request';
import { GetUserDetailsService } from './user.service';

export const GetUserDetailsController = (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    GetUserDetailsService(id).then((d) => {
      return successResponse(res, SuccessMessage.GET_USER, d);
    });
  } catch (e) {
    return errorResponse(res, ErrorMessage.BAD_REQUEST, e);
  }
};
