import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { data as fetchedData } from 'app-data.json';
import { ThemeProvider } from 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import Layout from 'containers/Layout/Layout';
import GlobalStyle, { theme } from './styled';
import parsePrismicData from './util/parsePrismicData';

export const AppContext = createContext();

function App({ location }) {
  const urlCtxId = qs.parse(location.search.split('?')[1]).v;
  const data = parsePrismicData(fetchedData, urlCtxId);

  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          caseStudies: fetchedData.caseStudies,
          // ctx,
        }}
      >
        <GlobalStyle />
        <Layout />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default withRouter(App);

App.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
};
