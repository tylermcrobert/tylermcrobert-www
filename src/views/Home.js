import {
  // Link,
  RichText,
  // Date,
} from 'prismic-reactjs';
import React from 'react';
import NotFound from './NotFound';
import Loading from './Loading';
import PrismicConfig from '../utils/prismic-configuration';
import '../styles/app.css';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      doc: null,
      notFound: false,
    };
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
      const introText =
        RichText.render(this.state.doc.data.intro_message, PrismicConfig.linkResolver);

      return (
        <div>
          {introText}
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
