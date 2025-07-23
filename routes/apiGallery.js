// routes/apiGallery.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router(); // <-- this is the key fix

router.get('/', (req, res) => {
  const folder = req.query.folder;

  if (!folder) {
    return res.status(400).json({ error: 'No folder specified' });
  }
  const folderDescriptions = {
    'graphic-design': 'Graphic design project',
    'web-dev': 'Web development project',
    // Add more folders as needed
  };
  const dir = path.join(__dirname, `../public/SiteImages/portfolio/${folder}`);

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Could not read gallery directory' });
    }

    const gallery = files
      .filter(f => /\.(png|jpe?g|gif)$/i.test(f))
      .map(f => {
        const title = f.replace(/\.(png|jpe?g|gif)$/i, '').replace(/-/g, ' ');
        const trimTitle =  title.replace(/\(.*?\)/, '').replace(/-/g, ' ').trim();
        const desc = title.match(/\((.*?)\)/)? title.match(/\((.*?)\)/)[1].replace(/-/g, ' '): folderDescriptions[folder];

        return{
          file: `/SiteImages/portfolio/${folder}/${f}`,
          title: title.match(/\((.*?)\)/)? trimTitle : title,
          description: `✨ ${desc} ✨`
        };        
      });
    res.json(gallery);
  });
});

module.exports = router;
