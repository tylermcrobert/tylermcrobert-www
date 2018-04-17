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

const getUniqueTags = (caseStudyList) => {
  const uniqueTags = new Set();

  caseStudyList.forEach((element) => {
    const { case_study_item } = element;
    const { tags } = case_study_item;

    tags.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });

  return Array.from(uniqueTags);
};


const getCaseStudyContext = (docContainingList, selectedCaseStudy) => {
  const caseStudyList = docContainingList.data.case_study_list;
  const uniqueTags = getUniqueTags(caseStudyList);
  let nextPageSlug;
  let prevPageSlug;

  return {
    caseStudyList,
    uniqueTags,
  };
};


app.get('/', (req, res) => {
  req.prismic.api.getSingle('homepage', { fetchLinks: 'case_study.title' }).then((document) => {
    document.data.uniqueTags = getUniqueTags(document.data.case_study_list);
    res.render('home', { document });
  });
});


app.get('/work/:caseStudy', (req, res, next) => {
  const { caseStudy } = req.params;

  req.prismic.api.getSingle('homepage').then((homepageDoc) => {
    req.prismic.api.getByUID('case_study', caseStudy).then((document) => {
      // Fix this
      document.data.caseStudyContext = getCaseStudyContext(homepageDoc);
      if (document) {
        res.render('casestudy', { document });
      } else {
        next();
      }
    });
  });
});

// eventually redirect this
app.get('*', (req, res) => {
  res.render('404');
});
