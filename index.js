console.log('Hello, World! Node is working...');
// index.js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => { // new
  res.render('index');
});

app.get('/about', (req, res) => { // new
  res.send('About');
});

app.listen(3000, () => console.log('listening on port 3000')); // new
