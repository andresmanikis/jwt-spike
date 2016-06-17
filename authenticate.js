const authenticate = (req, res, next) => {
  throw new Error('Cannot authenticate user')  ;
};

module.exports = authenticate;
