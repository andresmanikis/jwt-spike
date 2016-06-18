const users = [
  { name: 'John Doe', username: 'john.doe', password: 'j0hnd03' },
  { name: 'Jack Black', username: 'jack.black', password: 'j4ck13' }
];

function getByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = { getByUsername };
