const Prismic = require('prismic-javascript');
const PrismicDOM = require('prismic-dom');
const request = require('request');
const Cookies = require('cookies');
const PrismicConfig = require('./config/prismic-configuration');
const app = require('./config/config');
const caseStudyContext = require('./core/caseStudyContext');

const templateData = {};

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


app.get('/preview', (req, res) => {
  const { token } = req.query;
  if (token) {
    req.prismic.api.previewSession(token, PrismicConfig.linkResolver, '/').then((url) => {
      const cookies = new Cookies(req, res);
      cookies.set(Prismic.previewCookie, token, { maxAge: 30 * 60 * 1000, path: '/', httpOnly: false });
      res.redirect(302, url);
    }).catch((err) => {
      res.status(500).send(`Error 500 in preview: ${err.message}`);
    });
  } else {
    res.send(400, 'Missing token from querystring');
  }
});

app.get('/', (req, res) => {
  req.prismic.api.getSingle('homepage', { fetchLinks: 'case_study.title' }).then((doc) => {
    const document = doc;
    document.data.uniqueTags = caseStudyContext.getUniqueTags(document.data.case_study_list);
    res.render('home', { document });
  });
});


app.get(['/:caseStudy', '/work/:caseStudy'], (req, res, next) => {
  const param = req.params.caseStudy;
  const getContext = req.prismic.api.getSingle('homepage', { fetchLinks: 'case_study.title' });
  const getCaseStudy = req.prismic.api.getByUID('case_study', param);

  Promise.all([
    getContext,
    getCaseStudy,
  ])
    .then((docs) => {
      const context = docs[0];
      const caseStudy = docs[1];
      const checkContext = caseStudyContext.getCaseStudyContext(context, param);

      caseStudy.data.caseStudyContext = checkContext;
      res.render('casestudy', { caseStudy });
    })
    .catch((err) => {
      res.render('404');
    });
});

app.get('*', (req, res) => {
  res.render('404');
});
