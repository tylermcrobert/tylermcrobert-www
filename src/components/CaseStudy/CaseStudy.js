import React from 'react';

class CaseStudy extends React.Component {
  state = {
    doc: null,
  }

  componentDidMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    props.prismicCtx.api.getByUID('case_study', props.slug).then((doc) => {
      if (doc) {
        this.setState({ doc });
      }
    });
  }

  render() {
    const { doc } = this.state;
    if (doc) {
      const { data } = doc;
      const title = data.title[0].text;
      const desc = data.description[0].text;
      const { deliverables } = data;

      return (
        <div className="caseStudy">
          <button onClick={() => this.props.changeCaseStudy(null)}>
            CLOSE
          </button>
          <div className="caseStudy__intro">
            <h2>{title}</h2>
            <p>{deliverables}</p>
            <p>{desc}</p>
          </div>
        </div>
      );
    }
    return <div>loading</div>;
  }
}

export default CaseStudy;
