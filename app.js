const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/api/authorized-resource', (req, res) => {
  res.end('You made it!');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
