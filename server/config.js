
/**
 * Module dependencies.
 */
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const path = require('path');

module.exports = (() => {
  const app = express();

  // all environments
  app.set('port', process.env.PORT || 6969);
  app.set('views', path.join(__dirname, '../views'));

  //using pug template
  app.set('view engine', 'pug');
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride());

  //directory of templates
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(errorHandler());

  return app;
})();
