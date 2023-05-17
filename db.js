// db.js

const mongoose = require('mongoose');

function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://127.0.0.1:27017/foodApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      serverSelectionTimeoutMS: 30000,
    })
      .then(() => {
        console.log('Connected to the database');
        resolve();
      })
      .catch((err) => {
        console.error('Failed to connect to the database', err);
        reject(err);
      });
  });
}

module.exports = {
  connect,
};
