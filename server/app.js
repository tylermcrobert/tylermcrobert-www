const Prismic = require('prismic-javascript');
const PrismicDOM = require('prismic-dom');
const request = require('request');
const Cookies = require('cookies');
const PrismicConfig = require('./prismic-configuration');
const app = require('./config');

const PORT = app.get('port');

app.listen(PORT, () => {
  //callback for listen
});

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


app.route('/test').get(function(req, res) {
  req.prismic.api.getByUID('page', 'quickstart').then((document) => {
      res.render('casestudy', { document });
  });
});

/*
 * Route with documentation to build your project with prismic
 */
app.route('/').get((req, res) => {
  res.render('index');
});
