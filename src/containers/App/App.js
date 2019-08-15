import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { data } from 'app-data.json';
import { ThemeProvider } from 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import Layout from 'containers/Layout/Layout';
import GlobalStyle, { theme } from './styled';

export const AppContext = createContext();

function App({ location }) {
  const ctx = qs.parse(location.search)['?'];

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          caseStudies: data.caseStudies,
          ctx,
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
