import * as http from 'http';
import app from './src/app';
import startUpMongo from './src/database/mongo.connect';

const PORT: number | string = process.env.PORT || 4000;
const server = http.createServer(app);

// Connect Mongodb
startUpMongo().then(() => {
  server.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT ${PORT} 🚀`);
  });
});
