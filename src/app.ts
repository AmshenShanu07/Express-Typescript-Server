import express, { Application } from 'express';
import logger from 'morgan';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import * as dotenv from 'dotenv';

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

app.get('/', (req, res) => {
  res.send('Sadhya Backend Api');
});

export default app;
