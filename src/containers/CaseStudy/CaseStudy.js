import React from 'react';
import CaseStudyIntro from '../../components/CaseStudies/CaseStudyIntro/CaseStudyIntro';
import Loading from '../../components/Loading/Loading';

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
      return (
        <div className="caseStudy">
          <button onClick={() => this.props.changeCaseStudyHandler(null)}>
            CLOSE
          </button>
          <CaseStudyIntro data={data} />
          <p>projects go here</p>
        </div>
      );
    }
    return (<Loading />);
  }
}

export default CaseStudy;
