const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

/**
 * Handles requests routed to /api/accounts.
 */
app.get('/api/accounts', (req, res) => {
  const sampleAccountData = [
    {
      id: 1,
      name: 'Brandon Avant',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
  ];

  res.send(JSON.stringify(sampleAccountData));
});

/**
 * Starts the server.
 */
app.listen(port, () => console.log(`Listening on port ${port}...`));
