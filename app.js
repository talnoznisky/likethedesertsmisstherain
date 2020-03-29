const express = require('express')
const app = express();
require('dotenv').config();


app.get('/', (req, res) => {
  res.send(process.env.FART)
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
