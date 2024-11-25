const express = require('express');
const path = require('path');
// const exphbs = require('express-handlebars');
const app = express();
const PORT = 7693;

// app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
// app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.render('index.html', { title: "We've Been Waiting For You" }));
app.get('/home', (req, res) => res.render('home.html', { title: 'Heyyy Girlie!!!' }));
app.get('/intro', (req, res) => res.render('intro.html', { title: 'a lil about me👋🏿' }));
app.get('/projects', (req, res) => res.render('projects.html', { title: "K's Portfolio ✨" }));
app.get('/contactus', (req, res) => res.render('contactme.html', { title: "Tell me Soemthing i dont't know" }));



// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
