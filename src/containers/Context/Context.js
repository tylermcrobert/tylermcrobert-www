import React from 'react';
import Tags from './Tags';
import Index from './Index';

export default class Context extends React.Component {
  state = {
    hoverTags: [],
    hoverIndex: null,
  }

  getUniqueTags = () => Array.from(new Set(this.props.caseStudies.map(cs => cs.tags)
    .reduce((a, b) => a.concat(b), [])))

  handleHover = (tags, i) => {
    this.setState({
      hoverTags: tags,
      hoverIndex: i,
    });
  }

  render() {
    const { render, index, caseStudies } = this.props;
    const { hoverTags, hoverIndex } = this.state;
    const projectTags = index && caseStudies[index].tags;

    return (
      <div>
        <Tags
          tags={this.getUniqueTags()}
          activeTags={projectTags || hoverTags}
          index={index}
        />
        <Index
          index={(index || hoverIndex) + 1}
          length={caseStudies.length}
        />
        {
          render({ handleHover: this.handleHover })
        }
      </div>
    );
  }
}

Context.propTypes = {
};
