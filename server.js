const express = require('express');
const path = require('path');
// const exphbs = require('express-handlebars');
const app = express();
const PORT = 7693;

// app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
// app.set('view engine', 'hbs');

app.use(express.static('Public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });
  
//   app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'home.html'));
//   });
  
//   app.get('/intro', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'intro.html'));
//   });
  
//   app.get('/projects', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'projects.html'));
//   });
  
  app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contactme.html'));
  });


// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
