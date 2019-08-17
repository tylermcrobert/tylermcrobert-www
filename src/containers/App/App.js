import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { data as cachedData } from 'app-data.json';
import { ThemeProvider } from 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import Layout from 'containers/Layout/Layout';
import Loading from 'components/Loading/Loading';
import GlobalStyle, { theme } from './styled';
import parsePrismicData from './util/parsePrismicData';
import useFetchedData from './hooks/useFetchedData';

export const AppContext = createContext();

const IS_STATIC = false;

function App({ location }) {
  const urlCtxId = qs.parse(location.search.split('?')[1]).v;

  const liveData = useFetchedData();
  const data = IS_STATIC ? cachedData : liveData;
  const parsedData = data ? parsePrismicData(data, urlCtxId) : null;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {parsedData ? (
          <AppContext.Provider
            value={{
              caseStudies: parsedData.caseStudies.context,
            }}
          >
            <Layout />
          </AppContext.Provider>
        ) : (
          <Loading />
        )}
      </>
    </ThemeProvider>
  );
}

export default withRouter(App);

App.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
};
