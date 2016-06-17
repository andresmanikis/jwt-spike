
const authenticate = (req, res, next) => {
  if (req.get('Authorization') === 'Bearer valid.token') {
    next();
  } else {
    res.status(401).end();
  }
};

module.exports = authenticate;
