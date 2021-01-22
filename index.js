const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/auth', routes.auth);
app.use('/api/user', routes.user);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => {
      console.log('Server running');
    });
  }
);
