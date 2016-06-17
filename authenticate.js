const authenticate = (req, res, next) => {
  res.end(req.get('Authorization'));
};

module.exports = authenticate;
