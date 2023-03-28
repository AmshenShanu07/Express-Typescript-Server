import User from '../../database/models/user.model';
import { ErrorMessage } from '../../utils/constant';
import { LoginDTO } from './dto/login.dto';

export const LoginService = (data: LoginDTO) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userDetails = User.findByEmail(data.email);

      if (!userDetails.checkPassword)
        return reject(ErrorMessage.WRONG_PASSWORD);

      return resolve({ email: data.email, status: true });
    } catch (e) {
      return reject(e);
    }
  });
};
