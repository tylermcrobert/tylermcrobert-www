import React, { createContext, memo } from 'react';
import PropTypes from 'prop-types';
import Layout from 'containers/Layout/Layout';
import Loading from 'components/Loading/Loading';
import usePrismicData from './hooks/usePrismicData';
import getIndex from './util/getIndex';
import GlobalStyle from './styled';

export const AppContext = createContext();

function App({ view, caseStudyUid }) {
  const { caseStudies, api } = usePrismicData();
  const loaded = !!(api && caseStudies);
  const index = getIndex({ caseStudies, caseStudyUid });

  return (
    <AppContext.Provider value={{
        view,
        caseStudyUid,
        caseStudies,
        index,
        api,
      }}
    >
      <GlobalStyle />
      {loaded ? <Layout /> : <Loading />}
    </AppContext.Provider>
  );
}

export default memo(App);

App.defaultProps = {
  caseStudyUid: null,
};

App.propTypes = {
  view: PropTypes.string.isRequired,
  caseStudyUid: PropTypes.string,
};
