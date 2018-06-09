import {
  // Link,
  RichText,
  // Date,
} from 'prismic-reactjs';
import React from 'react';
import CaseStudy from '../CaseStudy/CaseStudy';
import CaseStudyList from '../CaseStudyList/CaseStudyList';
import Loading from '../Loading/Loading';
import PrismicConfig from '../../prismic/prismic-configuration';
import NotFound from '../NotFound/NotFound';
import Tags from '../Tags/Tags';
import '../../styles/app.css';

function Intro(props) {
  const introText =
    RichText.asText(props.doc.data.intro_message, PrismicConfig.linkResolver);

  let intro = null;
  if (props.isOpen === true) {
    intro = (
      <div className="home__intro">
        <h2>{introText}</h2>
      </div>
    );
  }
  return intro;
}


export default class Home extends React.Component {
  state = {
    doc: null,
    notFound: false,
    currentCaseStudyUID: null,
    tags: null,
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

  setTags() {
    const csList = this.state.doc.data.case_study_list;
    let tags = new Set();

    // Loop through each post
    csList.forEach((item) => {
      const entryTags = item.case_study_item.tags;

      // Put each item in the array into 'tags'
      entryTags.forEach((tag) => {
        tags.add(tag);
      });
    });

    tags = Array.from(tags);


    tags = tags.map(tag => ({
      name: tag,
      enabled: false,
      hovered: false,
      key: tag,
    }));

    this.setState({
      tags: [...tags],
    });
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
          this.setTags();
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
    const caseStudyIsSelected = this.state.currentCaseStudyUID !== null;

    if (this.state.doc) {
      return (
        <React.Fragment>
          <Intro doc={this.state.doc} isOpen={!caseStudyIsSelected} />

          <div className="caseStudies">
            <Tags tags={this.state.tags} />
            { caseStudyIsSelected ?
              <CaseStudy
                slug={this.state.currentCaseStudyUID}
                key={this.state.currentCaseStudyUID}
                prismicCtx={this.props.prismicCtx}
                changeCaseStudy={this.changeCaseStudy} />
            :
              <CaseStudyList
                doc={this.state.doc}
                prismicCtx={this.props.prismicCtx}
                changeCaseStudy={this.changeCaseStudy}
                handleTagChange={this.handleTagChange}
                currentCaseStudyUID={this.statecurrentCaseStudyUID} />
            }
          </div>
        </React.Fragment>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
