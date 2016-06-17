const express = require('express');
const authenticate = require('./authenticate');
const app = express();

app.use(express.static('static'));

app.get('/api/authorized-resource', authenticate, (req, res) => {
  res.end('Hi ' + req.user.name + '! You made it to the authorized resource!');
});

app.get('/api/open-resource', (req, res) => {
  res.end('You made it to the open resource!');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
