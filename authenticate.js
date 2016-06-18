const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.get('Authorization').replace(/^Bearer /, '');

  try {
    req.user = jwt.verify(token, 'secret')
    next();
  } catch(err) {
    res.status(401).end();
  }
};

module.exports = authenticate;
