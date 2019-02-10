export default async function getCaseStudies({ api, setCaseStudies }) {
  if (api) {
    const getContext = () => api.getByUID('context', 'homepage').then(doc => doc);

    const getIds = async () => {
      const context = await getContext();
      return context.data.case_study_list.map(item => item.case_study_item.id);
    };

    const ids = await getIds();
    api.getByIDs(ids).then(docs => docs.results).then((val) => {
      setCaseStudies(val);
    });
  }
}
