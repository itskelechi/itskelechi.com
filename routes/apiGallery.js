// routes/apiGallery.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router(); // <-- this is the key fix

router.get('/projects/gallery', (req, res) => {
  const folder = req.query.folder;
  if (!folder) {
    return res.status(400).json({ error: 'No folder specified' });
  }

  const dir = path.join(__dirname, `../public/SiteImages/portfolio/${folder}`);

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Could not read gallery directory' });
    }

    const gallery = files
      .filter(f => /\.(png|jpe?g|gif)$/i.test(f))
      .map(f => ({
        file: `/SiteImages/portfolio/${folder}/${f}`,
        title: f.replace(/\.(png|jpe?g|gif)$/i, ''),
        description: '✨ Add description dynamically if needed ✨'
      }));

    res.json(gallery);
  });
});

module.exports = router;
