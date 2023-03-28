import * as Jf from 'joiful';

export class LoginDTO {
  @Jf.string().email().required()
  email: string;

  @Jf.string().required()
  password: string;
}
