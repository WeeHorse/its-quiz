const express = require('express');
const path = require('path');

const PORT = 5224;
const app = express();

app.use((_req, res, _next) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT));