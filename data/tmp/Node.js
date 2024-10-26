const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/reviews', (req, res) => {
  fs.readFile('reviews.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading reviews');
    } else {
      res.send(data);
    }
  });
});

app.post('/reviews', (req, res) => {
  const newReview = req.body.review;
  fs.appendFile('reviews.txt', `${newReview}\n`, (err) => {
    if (err) {
      res.status(500).send('Error writing review');
    } else {
      res.send('Review added');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
