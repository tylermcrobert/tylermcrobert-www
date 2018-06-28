import React, { Component } from 'react';
import styled from 'styled-components';
import Tags from '../../components/Tags/Tags';
import IndexIndicator from '../../components/IndexIndicator/IndexIndicator';

const CaseStudyContextHOC = WrappedComponent => class CaseStudyContext extends Component {
  state = {
    currentUID: null,
    caseStudiesList: this.props.caseStudiesList,
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
    const { caseStudiesList } = this.state;

    const indexLength = caseStudiesList.length;
    const contextTags = Array
      .from(new Set(caseStudiesList
        .map(list => list.case_study_item.tags)
        .reduce((allTags, csTags) => allTags.concat(csTags), [])));
    const currentIndex = (currentUID)
      ? caseStudiesList
        .map(list => list.case_study_item.uid)
        .indexOf(currentUID)
      : 0;
    const activeTags = caseStudiesList
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
    const {
      currentIndex,
      indexLength,
      contextTags,
      activeTags,
      currentUID,
      isFloating,
    } = this.state;

    if (!isFloating) {
      return (
        <CaseStudyContextWrapper
          className="CaseStudyContextWrapper"
        >
          <IndexIndicator
            currentIndex={currentIndex}
            indexLength={indexLength}
          />
          <Tags
            tagList={contextTags}
            activeTags={activeTags}
          />
          <WrappedComponent
            {...this.props}
            currentUID={currentUID}
            handleHoveredCaseStudy={this.handleHoveredCaseStudy}
            isFloating={isFloating}
          />
        </CaseStudyContextWrapper>
      );
    }

    return (
      <WrappedComponent {...this.props} isFloating={isFloating} />
    );
  }
};

export default CaseStudyContextHOC;
