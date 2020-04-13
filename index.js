const express = require('express');
const app = express();
const port = 3001;

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

  res.send(sampleAccountData);
});

/**
 * Starts the server.
 */
app.listen(port, () => console.log(`Listening on port ${port}...`));
