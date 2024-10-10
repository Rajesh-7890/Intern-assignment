const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/InternDatabase')
  .then(() => {
    console.log('DB is connected');
  })
  .catch(() => {
    console.log('DB is error');
  });
