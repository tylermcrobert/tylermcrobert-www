export default async function getCaseStudies({ api, setCaseStudies, ctx }) {
  if (api) {
    const getContext = ctxId => api.getByUID('context', ctxId).then((doc) => {
      if (doc) return doc;
      return getContext('homepage');
    });

    const getIds = async () => {
      const context = await getContext(ctx || 'homepage');
      return context.data.case_study_list.map(item => item.case_study_item.id);
    };

    const ids = await getIds();
    api.getByIDs(ids).then(docs => docs.results).then((val) => {
      setCaseStudies(val);
    });
  }
}
