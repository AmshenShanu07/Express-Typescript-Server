import mongoose from 'mongoose';

const startUpMongo = () => {
  return new Promise(async (resolve) => {
    const uri: string = process.env.MONGODB_URI || '';

    mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      () => {
        console.log('\n\nMONGO CONNECTED SUCCESSFULLY 📚!');
        resolve(true);
      },
    );
  });
};

export default startUpMongo;
