import React from 'react';
import CaseStudy from '../CaseStudy/CaseStudy';
import CaseStudyIndex from '../../components/CaseStudyIndex/CaseStudyIndex';
import IndexIndicator from '../../components/IndexIndicator/IndexIndicator';
import Intro from '../../components/Intro/Intro';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import Tags from '../../components/Tags/Tags';
import '../../styles/app.css';


export default class Layout extends React.Component {
  state = {
    context: 'homepage',
    currentCaseStudy: { uid: 'dwp18' },
    doc: null,
    tags: null,
    notFound: false,
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

  getPageIndex = (doc) => {
    const ctxSlugs = doc.data.case_study_list.map(list => list.case_study_item.uid);
    return ctxSlugs.indexOf(this.state.currentCaseStudy.uid);
  }

  contextualizeCaseStudy = (doc) => {
    let { currentCaseStudy } = this.state;
    const tags = this.getContextTags(doc);
    let pageIndex;

    // if CurrentCaseStudy is set on load
    if (currentCaseStudy) {
      currentCaseStudy.pageIndex = this.getPageIndex(doc);
      const caseStudyIsFloating = currentCaseStudy.pageIndex !== -1;

      if (caseStudyIsFloating) {
        currentCaseStudy = doc.data.case_study_list[pageIndex].case_study_item;
      }
    }

    this.setState({
      doc,
      tags,
      currentCaseStudy,
    });
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
    const { currentCaseStudy } = this.state;

    if (this.state.doc) {
      return (
        <React.Fragment>
          { !currentCaseStudy && <Intro doc={this.state.doc} />}

          <main className="caseStudies">
            { (!currentCaseStudy || currentCaseStudy.pageIndex !== -1) &&
              <React.Fragment>
                <Tags
                  tags={this.state.tags}
                  currentCaseStudy={currentCaseStudy}
                />
                <IndexIndicator
                  currentCaseStudy={currentCaseStudy}
                  getPageIndex={this.getPageIndex}
                  doc={this.state.doc}
                />
              </React.Fragment>
            }
            { currentCaseStudy ?
              <CaseStudy
                slug={currentCaseStudy.uid}
                key={currentCaseStudy.uid}
                prismicCtx={this.props.prismicCtx}
                changeCaseStudy={this.changeCaseStudy}
                isFloating={this.state.isFloating}
              />
            :
              <CaseStudyIndex
                doc={this.state.doc}
                prismicCtx={this.props.prismicCtx}
                changeCaseStudy={this.changeCaseStudy}
                currentCaseStudy={currentCaseStudy}
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
