const express = require('express');
const authenticate = require('./authenticate');
const app = express();

app.use(express.static('static'));

app.use(authenticate);

app.get('/api/authorized-resource', (req, res) => {
  res.end('You made it!');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
