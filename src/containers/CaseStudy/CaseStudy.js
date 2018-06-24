import React from 'react';
import CaseStudyIntro from '../../components/CaseStudies/CaseStudyIntro/CaseStudyIntro';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';

class CaseStudy extends React.Component {
  state = {
    doc: null,
    notFound: false,
  }

  componentDidMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      const { caseStudyUID } = props.match.params;
      props.prismicCtx.api.getByUID('case_study', caseStudyUID).then((doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
  }

  render() {
    if (this.state.doc) {
      return (
        <div className="caseStudy">
          <CaseStudyIntro data={this.state.doc.data} />
          <p>projects go here</p>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return (<Loading />);
  }
}

export default CaseStudy;
