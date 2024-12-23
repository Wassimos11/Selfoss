const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route to serve Selfie.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Selfie.html');  // Serve the Selfie.html from the public folder
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
