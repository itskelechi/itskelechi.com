const express = require('express');
const app = express();
const port = 3000;

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
app.use(express.urlencoded({ extended: true }));
app.use('/projects/contact', require('./routes/apiContact')); 
app.use('/projects/gallery', require('./routes/apiGallery'));
const commentsRouter = require('./routes/apiComments');
const { comments } = require('./routes/apiComments');
app.use(commentsRouter); // ✅ Works now



// Routes
app.get('/', (req, res) => {
  console.log("Landing Page");
  res.render('main', {
    PageTitle: 'We\'ve been waiting for you',
    metaDesc: 'Welcome to Kelechi\'s Portfolio',
    layout: 'buffer' 
  });
});
  
app.get('/home', (req, res) => {
  console.log("Honey! I'm home");
  res.render('home',{
    PageTitle: 'Heyyy Girlie!!!',
    metaDesc: 'Welcome to Kelechi\'s Portfolio',
    layout: 'index' 
  });
});
  
app.get('/about', (req, res) => {
  console.log("About Page");
  res.render('about', {
    comments,
    PageTitle: 'a lil about me👋🏿',
    metaDesc: 'About Kelechi',
    layout: 'index' 
  });
});

app.get('/projects', (req, res) => {
  console.log("Projects...");
  res.render('projects', {
    PageTitle: 'K\'s Portfolio ✨',
    metaDesc: 'The Repertoire',
    layout: 'index' 
  });
});

app.get('/contact', (req, res) => {
  console.log("You call me on the day of my daughter's wedding?");
  res.render('contactme', {
    PageTitle: 'We\'ve been waiting for you',
    metaDesc: 'Welcome to Kelechi\'s Portfolio',
    layout: 'index' 
  });
});

app.get('/poems', (req, res) => {
  console.log("Spamming end user with Poetry in 3, 2, 1...");
  res.render('poems', {
    PageTitle: 'ཐི❤︎ཋྀ',
    metaDesc: 'some musings I\'ve written...',
    layout: 'index' 
  });
});

app.get('/blog',(req, res) => {
  console.log("How could you, this is like my diary");
  res.render('blog', {
    PageTitle: 'Dear diary...',
    metaDesc: 'How could you, this is like my diary',
    layout: 'index' 
  });
});


app.use((req, res) => {
  console.log("so you found me...");
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
