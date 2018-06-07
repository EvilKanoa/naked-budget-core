const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/api/test', (req, res) => {
  res.send({ express: 'Testing From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
