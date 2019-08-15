const { apiEndpoint } = require('../config');
const Prismic = require('prismic-javascript');

async function fetchSiteData() {
  const getApi = async () => Prismic.getApi(apiEndpoint);
  const api = await getApi();

  const getByDocType = (type, results = 20) =>
    api.query(Prismic.Predicates.at('document.type', type), {
      pageSize: results,
    });

  const getContexts = async () => getByDocType('context');
  const contexts = await getContexts();

  const getCaseStudies = async () => getByDocType('case_study', 40);
  const caseStudies = await getCaseStudies();

  return {
    caseStudies: caseStudies.results,
    contexts: contexts.results,
  };
}

module.exports = fetchSiteData;
