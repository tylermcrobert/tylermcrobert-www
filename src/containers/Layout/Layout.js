import React from 'react';
import Intro from '../../components/Intro/Intro';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import CaseStudies from '../../components/CaseStudies/CaseStudies';

import '../../styles/app.css';


export default class Layout extends React.Component {
  state = {
    context: 'homepage',
    currentCaseStudy: {uid: 'dwp18'},
    doc: null,
    tags: null,
    notFound: false,
    hoveredCaseStudy: null,
    isFloating: true,
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  getContextTags = doc => Array // make array from set
    .from(new Set(doc.data.case_study_list // create set of case studies in list
      .map(list => list.case_study_item.tags) // flatten 'case_study_item.tags' out
      .reduce((allTags, csTags) => allTags.concat(csTags), []))) // Put all csTags into master array

  getPageIndex = (doc, uid = this.state.currentCaseStudy.uid) =>
    doc.data.case_study_list
      .map(list => list.case_study_item.uid)
      .indexOf(uid);

  contextualizeCaseStudy = (doc) => {
    // get case study uid if set
    const initialCaseStudyState = (this.state.currentCaseStudy)
      ? { ...this.state.currentCaseStudy }
      : null;

    // If case study is set, get index
    const pageIndex = (initialCaseStudyState)
      ? this.getPageIndex(doc)
      : null;

    const isFloating = (pageIndex === -1 && pageIndex !== null);

    // If case study belongs to context
    const currentCaseStudy = (initialCaseStudyState && !isFloating)
      // Get index & tags for sidebar
      ? { ...doc.data.case_study_list[pageIndex].case_study_item, pageIndex }
      // Get index & tags for sidebar
      : initialCaseStudyState;

    const tags = this.getContextTags(doc);
    this.setState({
      doc,
      tags,
      currentCaseStudy,
      isFloating,
    });
  }

  changeCaseStudyHandler = (caseStudy) => {
    this.setState({ currentCaseStudy: caseStudy });
  }

  hoverCaseStudyHandler = (caseStudy) => {
    this.setState({ hoveredCaseStudy: caseStudy });
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getSingle(
        this.state.context,
        {
          fetchLinks: [
            'case_study.title',
            // 'case_study.description'
          ],
        },
      ).then((doc) => {
        if (doc) {
          this.contextualizeCaseStudy(doc);
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    const { currentCaseStudy } = this.state;

    if (this.state.doc) {
      return (
        <React.Fragment>
          { !currentCaseStudy && <Intro doc={this.state.doc} />}
          <CaseStudies
            changeCaseStudyHandler={this.changeCaseStudyHandler}
            currentCaseStudy={currentCaseStudy}
            doc={this.state.doc}
            getPageIndex={this.getPageIndex}
            hoverCaseStudyHandler={this.hoverCaseStudyHandler}
            hoveredCaseStudy={this.state.hoveredCaseStudy}
            isFloating={this.state.isFloating}
            prismicCtx={this.props.prismicCtx}
            tags={this.state.tags}
          />
        </React.Fragment>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
