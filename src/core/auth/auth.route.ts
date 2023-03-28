import { Router } from 'express';
import { validate } from '../../utils/request.validator';
import { LoginService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

const router = Router();

router.get('/', (req, res) => {
  res.json({ status: true });
});

router.post('/login', validate(LoginDTO), LoginService);

export default router;
