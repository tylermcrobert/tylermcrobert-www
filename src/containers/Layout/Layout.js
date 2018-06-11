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
    currentCaseStudy: null,
    notFound: false,
    tags: null,
    isFloating: false,
    context: 'homepage',
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  getContextTags = (doc) => {
    const ctxTags = doc.data.case_study_list
      .map(list => list.case_study_item.tags)
      .reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        [],
      );
    return Array.from(new Set(ctxTags));
  }

  isFloating = (doc) => {
    const ctxSlugs = doc.data.case_study_list.map(list => list.case_study_item.slug);
    if (this.state.currentCaseStudy) {
      const isFloating = ctxSlugs.indexOf(this.state.currentCaseStudy.uid) === -1;
      return isFloating;
    }
    return null;
  }

  contextualizeCaseStudy = (doc) => {
    const tags = this.getContextTags(doc);
    const isFloating = this.isFloating(doc);
    this.setState({ doc, tags, isFloating });
  }

  changeCaseStudy = (caseStudy) => {
    this.setState({ currentCaseStudy: caseStudy });
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
          // We put the retrieved content in the state as a doc variable
          this.contextualizeCaseStudy(doc);
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
    // console.log('[layout] render called', this.state);

    const caseStudyIsSelected = this.state.currentCaseStudy !== null;
    const { isFloating } = this.state;

    if (this.state.doc) {
      return (
        <React.Fragment>
          { !caseStudyIsSelected && <Intro doc={this.state.doc} />}
          <main className="caseStudies">
            { !isFloating &&
              <Tags
                tags={this.state.tags}
                currentCaseStudy={this.state.currentCaseStudy}
              />
            }
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
                currentCaseStudy={this.state.currentCaseStudy}
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
