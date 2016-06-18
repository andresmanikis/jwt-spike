const users = [
  { name: 'John Doe', username: 'john.doe', password: 'j0hnd03' }
];

function getByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = { getByUsername };
