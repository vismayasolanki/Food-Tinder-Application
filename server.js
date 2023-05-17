const userRoutes = require('./routes/users');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./db')


const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Server is running!');
});

const port = process.env.PORT || 5005;


db.connect()
  .then(() => {
    console.log('Connected to the database');

    // Start your application or perform other operations
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
    // Handle the error or exit the application gracefully
  });



  
