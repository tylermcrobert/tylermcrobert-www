import React from 'react';
import PropTypes from 'prop-types';
import Prismic from 'prismic-javascript';
import Layout from 'containers/Layout/Layout';
import { apiEndpoint } from 'config';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import Loading from 'components/Loading/Loading';

class App extends React.Component {
  state = {
    caseStudies: null,
    notFound: false,
    api: null,
  }

  componentDidMount() {
    this.getApi();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.api !== prevState.api) {
      this.getData();
    }
  }

  getApi = () => {
    Prismic.api(apiEndpoint).then((api) => {
      this.setState({ api });
    });
  };

  getData = () => {
    this.getContextDoc().then((caseStudies) => {
      this.setState({ caseStudies });
    });
  }

  getContextDoc = () => this.getIDs()
    .then(ids => this.state.api
      .getByIDs(ids)
      .then(docs => docs.results));

  getIDs = () => this.state.api.getByUID('context', 'homepage')
    .then(a => a.data.case_study_list
      .map(cs => cs.case_study_item.id))

  getIndex = () => this.state.caseStudies
    .map(cs => cs.uid)
    .indexOf(this.props.caseStudyUid)

  render() {
    const { notFound, caseStudies } = this.state;

    if (caseStudies) {
      return (
        <Layout
          caseStudies={caseStudies}
          view={this.props.view}
          index={this.getIndex() !== -1 ? this.getIndex() : null}
        />
      );
    } else if (notFound) {
      return (<ContextFrame>Not Found</ContextFrame>);
    }
    return (<ContextFrame><Loading /></ContextFrame>);
  }
}

App.propTypes = {
  view: PropTypes.string.isRequired,
};

export default App;
