module.exports = (() => {
  const getUniqueTags = (caseStudyList) => {
    const uniqueTags = new Set();

    caseStudyList.forEach((element) => {
      const { case_study_item } = element;
      const { tags } = case_study_item; // eslint-disable-line camelcase

      tags.forEach((tag) => {
        uniqueTags.add(tag);
      });
    });

    return Array.from(uniqueTags);
  };

  /* for use within case study page */
  const getCaseStudyContext = (docContainingList, selectedCaseStudy) => {
    const caseStudyList = docContainingList.data.case_study_list;
    const uniqueTags = getUniqueTags(caseStudyList);
    const listSize = caseStudyList.length;
    let pageIndex;
    let existsInContext = false;

    caseStudyList.forEach((el, i) => {
      if (el.case_study_item.uid === selectedCaseStudy) {
        existsInContext = true;
        pageIndex = i;
      }
    });

    const getNextPage = () => {
      if (pageIndex >= (listSize - 1)) {
        return caseStudyList[0].case_study_item;
      }
      return caseStudyList[pageIndex + 1].case_study_item;
    };

    if (existsInContext === false) {
      return null;
    }

    return {
      caseStudyList,
      uniqueTags,
      pageIndex,
      listSize,
      nextPage: getNextPage(),
    };
  };

  return {
    getCaseStudyContext,
    getUniqueTags,
  };
})();
