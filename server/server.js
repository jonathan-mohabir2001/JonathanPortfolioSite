/*
Backend Entry point for Jonathans Portfolio Site 

Express/Node backend, Mongoose ODM
*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Welcome to the Express Backend Home');
});

app.listen(PORT, () => {
  console.log(`Backend Server running on ${PORT}, press ctrl + c to end`);
});
