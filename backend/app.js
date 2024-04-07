const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const noteRoutes = require('./routes/note.js');
const morgan = require('morgan');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/notes', noteRoutes);

app.get('/healthcheck', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 8080; // Set default port if not provided in environment variables

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
