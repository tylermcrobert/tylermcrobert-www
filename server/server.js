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



// class CaseStudyList {
//   constructor(req, apiDocData, callback) {
//     this.list = apiDocData.data.case_study_list;
//     this.items = [];
//     this.totalItemCount = 0;
//
//     this.list.forEach((item, index) => {
//       this.items[index] = {
//         id: item.case_study_item.id,
//         number: index + 1,
//         data() {
//           return req.prismic.api.getByID(this.id).then((document) => {
//             //this.data = document
//             callback();
//           });
//         },
//       };
//       this.totalItemCount += 1; // probably pull this out of here
//     });
//   }
// }

app.get('/:caseStudy', (req, res, next) => {
  const caseStudy = req.params.caseStudy;
  req.prismic.api.getByUID('case_study', caseStudy).then((document) => {
    if (document) {
      res.render('casestudy', { document });
    } else {
      next();
    }
  });
});

app.get('/', (req, res) => {
  req.prismic.api.getSingle('homepage',{'fetchLinks': 'case_study.title'}).then((document) => {

    let csList = document.data.case_study_list;

    res.render('home', { document });
  });
});

// eventually redirect this
app.get('*', (req, res) => {
  res.render('404');
});
