const express = require('express');
const auth = require('./auth');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/protected-resource', auth.checkToken, (req, res) => {
  res.end('Hi ' + req.user.name + '! You made it to the protected resource!');
});

app.get('/api/open-resource', (req, res) => {
  res.end('You made it to the open resource!');
});

app.post('/login', (req, res) => {
  const credentials = req.body;

  if (auth.checkCredentials(credentials)) {
    res.end(auth.generateToken(credentials));
  } else {
    res.status(401).end();
  }
});

app.listen(3000, () => console.log('Listening on port 3000...'));
