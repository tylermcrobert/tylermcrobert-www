import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { ThemeProvider } from 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import Layout from 'containers/Layout/Layout';
import Loading from 'components/Loading/Loading';
import usePrismicData from './hooks/usePrismicData';
import GlobalStyle, { theme } from './styled';

export const AppContext = createContext();

function App({ location }) {
  const ctx = qs.parse(location.search)['?'];
  const { caseStudies, api } = usePrismicData({ ctx });
  const loaded = !!(api && caseStudies);

  const context = true; // CHANGEEE

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{
        caseStudies,
        api,
        context,
      }}
      >
        <GlobalStyle />
        {loaded ? <Layout /> : <Loading />}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default withRouter(App);

App.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
};
