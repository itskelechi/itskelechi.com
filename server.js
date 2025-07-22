const express = require('express');
const app = express();
const port = 3001;

const { engine } = require('express-handlebars');

app.engine('hbs', engine({ 
  extname: 'hbs',
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'index',
  partialsDir: `${__dirname}/views/partials`
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.json());
app.use('/projects/gallery', require('./routes/apiGallery'));



// Routes
app.get('/', (req, res) => {
  res.render('main', {
    PageTitle: 'We\'ve been waiting for you',
    metaDesc: 'Welcome to Kelechi\'s Portfolio',
    layout: 'buffer' 
  });
});
  
app.get('/home', (req, res) => {
  res.render('home',{
    PageTitle: 'Heyyy Girlie!!!',
    metaDesc: 'Welcome to Kelechi\'s Portfolio',
    layout: 'index' 
  });
});
  
app.get('/about', (req, res) => {
  res.render('intro', {
    PageTitle: 'a lil about me👋🏿',
    metaDesc: 'About Kelechi',
    layout: 'index' 
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    PageTitle: 'K\'s Portfolio ✨',
    metaDesc: 'The Repertoire',
    layout: 'index' 
  });
});

app.get('/contact', (req, res) => {
  res.render('contactme', {
    PageTitle: 'We\'ve been waiting for you',
    metaDesc: 'Welcome to Kelechi\'s Portfolio',
    layout: 'index' 
  });
});

app.get('/poems', (req, res) => {
  res.render('poems', {
    PageTitle: 'ཐི❤︎ཋྀ',
    metaDesc: 'some musings I\'ve written...',
    layout: 'index' 
  });
});

app.use((req, res) => {
  res.status(404).render('404', {
    PageTitle: 'INTRUDER!',
    metaDesc: 'For Legal Purposes, this page doesn\'t exist',
    layout: 'buffer' 
  });
});

// // Handle 500 errors
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).render('500', {
//     PageTitle: 'Server Error',
//     layout: 'buffer'
//   });
// });
// Start server
app.listen(port, () => 
  console.log(`Have you been to http://localhost:${port} ? The Server is strutting her stuff there!`)
);
