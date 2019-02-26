import React, { createContext, memo } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import Layout from 'containers/Layout/Layout';
import Loading from 'components/Loading/Loading';
import usePrismicData from './hooks/usePrismicData';
import getIndex from './util/getIndex';
import GlobalStyle from './styled';

export const AppContext = createContext();

function App({ caseStudyUid, location }) {
  const ctx = qs.parse(location.search)['?'];
  const { caseStudies, api } = usePrismicData({ ctx });
  const loaded = !!(api && caseStudies);
  const index = getIndex({ caseStudies, caseStudyUid });

  return (
    <AppContext.Provider value={{
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

export default memo(withRouter(App));

App.defaultProps = {
  caseStudyUid: null,
};

App.propTypes = {
  caseStudyUid: PropTypes.string,
  location: PropTypes.object.isRequired, //eslint-disable-line
};
