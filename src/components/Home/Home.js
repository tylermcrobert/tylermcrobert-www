import {
  // Link,
  RichText,
  // Date,
} from 'prismic-reactjs';
import React from 'react';
import CaseStudies from '../CaseStudyList/CaseStudyList';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';
import PrismicConfig from '../../prismic/prismic-configuration';
import '../../styles/app.css';

function Intro(props) {
  const introText =
    RichText.asText(props.doc.data.intro_message, PrismicConfig.linkResolver);

  return (
    <div className="home__intro">
      <h2>{introText}</h2>
    </div>
  );
}


export default class Home extends React.Component {
  state = {
    doc: null,
    notFound: false,
    currentCaseStudyUID: null,
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  changeCaseStudy = (uid) => {
    this.setState({ currentCaseStudyUID: uid });
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getSingle('homepage').then((doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({
            notFound: !doc,
          });
        }
      });
    }
    return null;
  }

  render() {
    if (this.state.doc) {
      return (
        <div className="home">
          <Intro doc={this.state.doc} />
          <CaseStudies
            doc={this.state.doc}
            prismicCtx={this.props.prismicCtx}
            currentCaseStudy={this.state.currentCaseStudyUID}
            changeCaseStudy={this.changeCaseStudy}
          />
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
