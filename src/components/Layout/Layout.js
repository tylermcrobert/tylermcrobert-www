import React from 'react';
import CaseStudy from '../CaseStudy/CaseStudy';
import CaseStudyIndex from '../CaseStudyIndex/CaseStudyIndex';
import Intro from '../Intro/Intro';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
import Tags from '../Tags/Tags';
import '../../styles/app.css';


export default class Layout extends React.Component {
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

    // add 'hovered', 'enabled', and 'key'
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
          { !caseStudyIsSelected && <Intro doc={this.state.doc} />}

          <div className="caseStudies">
            <Tags tags={this.state.tags} />
            { caseStudyIsSelected ?
              <CaseStudy
                slug={this.state.currentCaseStudyUID}
                key={this.state.currentCaseStudyUID}
                prismicCtx={this.props.prismicCtx}
                changeCaseStudy={this.changeCaseStudy} />
            :
              <CaseStudyIndex
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
