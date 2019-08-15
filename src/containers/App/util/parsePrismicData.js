const DEFAULT_CONTEXT = 'homepage';

export default function parsePrismicData(data, urlCtxId) {
  const { contexts, caseStudies: allCaseStudies } = data;

  function getValidContextId() {
    const requestedCtxIndex = contexts.map(item => item.uid).indexOf(urlCtxId);
    const urlContextIdIsValid = requestedCtxIndex !== -1;
    return urlContextIdIsValid ? urlCtxId : DEFAULT_CONTEXT;
  }

  function getContextData(contextId) {
    const res = contexts[contexts.map(item => item.uid).indexOf(contextId)];
    return {
      uids: res.data.case_study_list.map(item => item.case_study_item.uid),
      data: res.data,
    };
  }

  function getContextCaseStudies(ctxUids) {
    return data.caseStudies.reduce((acc, curVal) => {
      const i = ctxUids.indexOf(curVal.uid);
      if (i > -1) acc[i] = curVal;
      return acc;
    }, []);
  }

  const contextId = getValidContextId();
  const contextData = getContextData(contextId);
  const contextCaseeStudies = getContextCaseStudies(contextData.uids);

  return {
    context: {
      uids: contextData.uids,
      bio: contextData.data.bio,
      data: contextData.data,
    },
    caseStudies: {
      all: allCaseStudies,
      context: contextCaseeStudies,
    },
  };
}
