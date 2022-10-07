const express = require('express');
const path = require('path');
const app = express();
const port = 3001

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  console.log(`req ${req}`)
  console.log(path.join(__dirname, 'build', 'index.html'))
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})