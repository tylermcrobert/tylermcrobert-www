import React from 'react';
import DirectoryLinks from './DirectoryLinks';
import Tags from './Tags';

export default class Directory extends React.Component {
  state = {
    currentTags: [],
    index: null,
  }

  getUniqueTags = () => Array.from(new Set(this.props.caseStudies.map(cs => cs.tags)
    .reduce((a, b) => a.concat(b), [])))

  handleHover = (tags, i) => {
    this.setState({
      currentTags: tags,
      index: i,
    });
  }

  render() {
    const { caseStudies } = this.props;
    const { currentTags, index } = this.state;
    return (
      <div>
        <Tags tags={this.getUniqueTags()} currentTags={currentTags} index={index} />
        <DirectoryLinks handleHover={this.handleHover} caseStudies={caseStudies} />
      </div>
    );
  }
}

Directory.propTypes = {
};
