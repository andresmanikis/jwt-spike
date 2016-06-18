const users = require('./users');
const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
  const token = req.get('Authorization').replace(/^Bearer /, '');

  try {
    req.user = jwt.verify(token, 'secret')
    next();
  } catch(err) {
    res.status(401).end();
  }
}

function generateToken(credentials) {
  const payload = Object.assign({}, users.getByUsername(credentials.username));
  delete payload.password; // Don't want to send that in the payload!

  return jwt.sign(payload, 'secret');
}

function checkCredentials(credentials) {
  const user = users.getByUsername(credentials.username);

  if (!user) { return false; }
  if (user.password !== credentials.password) { return false; }

  return true;
}

module.exports = { checkToken, generateToken, checkCredentials };
