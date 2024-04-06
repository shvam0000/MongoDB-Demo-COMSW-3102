import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const noteRoutes = require('./routes/note.js');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/notes', noteRoutes);

app.get('/healthcheck', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 8080; // Set default port if not provided in environment variables

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
