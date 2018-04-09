const Prismic = require('prismic-javascript');
const PrismicDOM = require('prismic-dom');
const request = require('request');
const Cookies = require('cookies');
const PrismicConfig = require('./prismic-configuration');
const app = require('./config');

const PORT = app.get('port');
app.listen(PORT, () => {
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`);
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

//
// app.get('/quickstart', (req, res) => {
//   const page = req.params.id;
//   req.prismic.api.getByUID('page', 'quickstart').then((document) => {
//     res.render('test', { document });
//   });
// });

app.get('/:caseStudy', (req, res) => {
  const caseStudy = req.params.caseStudy;
  req.prismic.api.getByUID('case_study', caseStudy).then((document) => {
    res.render('casestudy', { document });
  });
});

app.get('/', (req, res) => {
  req.prismic.api.getSingle('homepage').then((document) => {
    res.render('home', { document });
    // console.log(document.data.case_study_list);
  });
});

//eventually redirect this
app.get('*', (req, res) => {
  res.render('404');
});
