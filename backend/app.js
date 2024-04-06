import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.get('/healthcheck', (req, res) => {
  res.send('Server is running');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started at port `, process.env.PORT || 8080);
});
