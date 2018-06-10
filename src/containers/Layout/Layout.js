import React from 'react';
import CaseStudy from '../CaseStudy/CaseStudy';
import CaseStudyIndex from '../../components/CaseStudyIndex/CaseStudyIndex';
import Intro from '../../components/Intro/Intro';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import Tags from '../../components/Tags/Tags';
import '../../styles/app.css';


export default class Layout extends React.Component {
  state = {
    doc: null,
    currentCaseStudy: {
      uid: null,
      title: 'ballsack',
      description: 'farts farts farts',
      deliverables: null,
      tags: null,
    },
    notFound: false,
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
    this.setState({ currentCaseStudy: { uid } });
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getSingle(
        'homepage',
        {
          fetchLinks: [
            'case_study.title',
            'case_study.description'],
        },
      ).then((doc) => {
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
    const caseStudyIsSelected = this.state.currentCaseStudy.uid !== null;
    // console.log('Homepage Document', this.state.doc);
    if (this.state.doc) {
      return (
        <React.Fragment>
          { !caseStudyIsSelected && <Intro doc={this.state.doc} />}
          <main className="caseStudies">
            <Tags tags={this.state.tags} />
            { caseStudyIsSelected ?
              <CaseStudy
                slug={this.state.currentCaseStudy.uid}
                key={this.state.currentCaseStudy.uid}
                prismicCtx={this.props.prismicCtx}
                changeCaseStudy={this.changeCaseStudy}
              />
            :
              <CaseStudyIndex
                doc={this.state.doc}
                prismicCtx={this.props.prismicCtx}
                changeCaseStudy={this.changeCaseStudy}
                handleTagChange={this.handleTagChange}
                currentCaseStudyUID={this.state.currentCaseStudy.uid}
              />
            }
          </main>
        </React.Fragment>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
