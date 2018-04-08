const path = require('path');
const Prismic = require('prismic-javascript');
const PrismicDOM = require('prismic-dom');
const PrismicConfig = require('./prismic-configuration');
const request = require('request');
const Cookies = require('cookies');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');

const app = express();

// all environments
app.set('port', process.env.PORT || 6969);
app.set('views', path.join(__dirname, '../views/includes'));

// use pug template
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

// directory of templates
app.use(express.static(path.join(__dirname, '../public')));
app.use(errorHandler());


const PORT = app.get('port');


// Middleware to inject prismic context
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: PrismicConfig.apiEndpoint,
    linkResolver: PrismicConfig.linkResolver,
  };
  // add PrismicDOM in locals to access them in templates.
  res.locals.PrismicDOM = PrismicDOM;
  Prismic.api(PrismicConfig.apiEndpoint, {
    accessToken: PrismicConfig.accessToken,
    req,
  }).then((api) => {
    req.prismic = { api };
    next();
  }).catch((error) => {
    next(error.message);
  });
});

app.get('/quickstart', (req, res) => {
  const page = req.params.id;
  req.prismic.api.getByUID('page', 'quickstart').then((document) => {
    res.render('test', { document });
  });
});

app.get('/tester', (req, res) => {
  res.send(app);
});


app.get('/', (req, res) => {
  res.render('home');
});
app.get('*', (req, res) => {
  res.render('404');
});

console.log(`point your browser to http://localhost:${PORT}`);
app.listen(PORT);
