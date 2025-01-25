const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use a worker thread or asynchronous operation for long tasks
  const processData = () => {
    setTimeout(() => {
      res.send('Hello World!');
    }, 5000);
  };
  processData();
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});