const express = require('express');
const router = express();
const port = 3000;

const exphbs = require('express-handlebars');

router.set('view engine', 'hbs');

router.engine('hbs', exphbs({ 
  layoutsDir: `${__dirname}/views/layouts`
 ,extname: 'hbs'
 ,defaultLayout: 'index'
 ,partialsDir: `${__dirname}/views/partials`
}));

router.use(express.static('public'));
router.use(express.json());

// Routes
router.get('/', (req, res) => {
  res.render('main' ,{layout : 'welcome'})
});
  
router.get('/home', (req, res) => {
  res.render('home');
});
  
router.get('/intro', (req, res) => {
  res.render('intro');
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/contactus', (req, res) => {
  res.render('contactme');
});


// Start server
router.listen(port, () => 
  console.log(`Have you been to the Port 3000? The Server is strutting her stuff there: http://localhost:${port}`)
);
