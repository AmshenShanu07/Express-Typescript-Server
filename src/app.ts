import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import * as dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

import authRouter from './core/auth/auth.route';

const app: Application = express();
dotenv.config();

app.use(logger('dev'));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  }),
);

app.use('/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Sadhya Backend Api');
});

export default app;
