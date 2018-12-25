import React from 'react';
import Tags from './Tags';

export default class Context extends React.Component {
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
    const { render } = this.props;
    const { currentTags, index } = this.state;
    return (
      <div>
        <Tags tags={this.getUniqueTags()} currentTags={currentTags} index={index} />
        {render({ handleHover: this.handleHover })}
      </div>
    );
  }
}

Context.propTypes = {
};
