import User from '../../database/models/user.model';

export const GetUserDetailsService = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userDetail = await User.findUserById(id);

      return resolve(userDetail);
    } catch (e) {
      return reject(e);
    }
  });
};
