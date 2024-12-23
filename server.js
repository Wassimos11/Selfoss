const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json({ limit: '10mb' })); // Handle large image data

// Endpoint to receive and save the photo
app.post('/upload', (req, res) => {
  const imageData = req.body.image; // Get Base64 image data
  const base64Data = imageData.replace(/^data:image\/png;base64,/, "");

  // Save the photo as selfie.png
  fs.writeFile('selfie.png', base64Data, 'base64', (err) => {
    if (err) {
      console.error("Failed to save the photo!", err);
      return res.status(500).send('Error saving the photo.');
    }
    console.log("Photo saved as selfie.png!");
    res.json({ message: 'Photo received!' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
