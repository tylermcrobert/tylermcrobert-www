import React, { Component } from 'react';
import styled from 'styled-components';
import Tags from '../../components/Tags/Tags';
import IndexIndicator from '../../components/IndexIndicator/IndexIndicator';

const CaseStudyContextHOC = WrappedComponent => class CaseStudyContext extends Component {
  state = {
    currentUID: null,
    doc: this.props.doc,
    isFloating: false,
    activeTags: [],
    contextTags: [],
    currentIndex: 1,
    indexLength: 1,
  }

  componentWillMount() {
    const routeUid = (this.props.match) ? this.props.match.params.caseStudyUID : null;
    this.getCaseStudyContext(routeUid);
  }
  getCaseStudyContext = (currentUID) => {
    const _caseStudyList = this.state.doc.data.case_study_list;
    const indexLength = _caseStudyList.length;
    const contextTags = Array
      .from(new Set(_caseStudyList
        .map(list => list.case_study_item.tags)
        .reduce((allTags, csTags) => allTags.concat(csTags), [])));
    const currentIndex = (currentUID)
      ? _caseStudyList
        .map(list => list.case_study_item.uid)
        .indexOf(currentUID)
      : 0;
    const activeTags = _caseStudyList
      .map(item => item.case_study_item)
      .filter(list => list.uid === currentUID)
      .map(csData => csData.tags)
      .reduce((fullArray, newArray) => fullArray.concat(newArray), []);

    this.setState({
      isFloating: currentIndex === -1,
      activeTags,
      contextTags,
      indexLength,
      currentUID,
      currentIndex,
    });
  }

  handleHoveredCaseStudy = (hoveredCaseStudyUID) => {
    this.getCaseStudyContext(hoveredCaseStudyUID);
  }

  render() {
    const CaseStudyContextWrapper = styled.div`
      position: relative;
    `;

    if (!this.state.isFloating) {
      return (
        <CaseStudyContextWrapper
          className="CaseStudyContextWrapper"
        >
          <IndexIndicator
            currentIndex={this.state.currentIndex}
            indexLength={this.state.indexLength}
          />
          <Tags
            tagList={this.state.contextTags}
            activeTags={this.state.activeTags}
          />
          <WrappedComponent
            {...this.props}
            currentUID={this.state.currentUID}
            handleHoveredCaseStudy={this.handleHoveredCaseStudy}
            isFloating={this.state.isFloating}
          />
        </CaseStudyContextWrapper>
      );
    }

    return (
      <WrappedComponent {...this.props} />
    );
  }
};

export default CaseStudyContextHOC;
