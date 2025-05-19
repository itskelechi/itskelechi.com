const express = require('express');
const app = express();
const port = 3000;

const { engine } = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', engine({ 
  layoutsDir: `${__dirname}/views/layouts`
 ,extname: 'hbs'
 ,defaultLayout: 'index'
 ,partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('main', { layout: 'buffer' })
});
  
app.get('/home', (req, res) => {
  res.render('home', { layout: 'index' });
});
  
app.get('/intro', (req, res) => {
  res.render('intro', { layout: 'index' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { layout: 'index' });
});

app.get('/contactus', (req, res) => {
  res.render('contactme', { layout: 'index' });
});


// Start server
app.listen(port, () => 
  console.log(`Have you been to the Port 3000? The Server is strutting her stuff there: http://localhost:${port}`)
);
