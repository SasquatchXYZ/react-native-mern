const express = require('express');
const PORT = process.env.PORT || 3000;

// Initialize HTTP Server
const app = express();

// Handle / Route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});