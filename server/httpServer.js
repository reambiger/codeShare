import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({ path: '.env' });

const port = 8000;
await mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB connection successful");
  });


app.listen(port, () => {
  console.log(`Server running at https://codeshareserver-5.onrender.com:${port}`);
});

export default app
