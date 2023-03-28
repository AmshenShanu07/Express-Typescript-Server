import { Request, Response } from 'express';
import { ErrorMessage } from '../../utils/constant';
import { errorResponse, successResponse } from '../../utils/response.request';
import { LoginService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

export const LoginController = (req: Request, res: Response) => {
  try {
    LoginService(req.body as LoginDTO)
      .then((d: any) => {
        return successResponse(res, d);
      })
      .catch((e) => {
        return errorResponse(res, ErrorMessage.BAD_REQUEST, e);
      });
  } catch (e: any) {
    return errorResponse(res, ErrorMessage.BAD_REQUEST, e);
  }
};
