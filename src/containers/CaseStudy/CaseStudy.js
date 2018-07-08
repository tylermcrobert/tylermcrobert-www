import React from 'react';
import CaseStudyIntro from '../../components/CaseStudyIntro/CaseStudyIntro';
import CaseStudyBody from '../../components/CaseStudyBody/CaseStudyBody';
import NextCaseStudy from '../../components/NextCaseStudy/NextCaseStudy';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import CaseStudyContextHOC from '../CaseStudyContextHOC/CaseStudyContextHOC';

class CaseStudy extends React.Component {
  state = {
    doc: null,
    notFound: false,
  }

  componentDidMount() {
    this.fetchPage(this.props);
    window.scrollTo(0, 0);
  }

  fetchPage(props) {
    const { caseStudyUID } = props.match.params;
    props.prismicCtx.api.getByUID('case_study', caseStudyUID).then((doc) => {
      if (doc) {
        this.setState({ doc });
      } else {
        this.setState({ notFound: !doc });
      }
    });
  }

  render() {
    const { doc, notFound } = this.state;

    if (doc) {
      return (
        <div className="caseStudy">
          <CaseStudyIntro data={doc.data} />
          <CaseStudyBody blocks={doc.data.cs_content} />
          <NextCaseStudy nextCaseStudy={this.props.nextCaseStudy} />
        </div>
      );
    } else if (notFound) {
      return <NotFound />;
    }
    return (<Loading />);
  }
}

export default CaseStudyContextHOC(CaseStudy);
