import React from 'react';
import PropTypes from 'prop-types';
import Tags from './_Tags';
import Index from './_Index';
import Styled from './blocks';

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
    const { index, caseStudies } = this.props;
    const { hoverTags, hoverIndex } = this.state;
    console.log(caseStudies);
    const projectTags = index !== null && caseStudies[index].tags;

    return (
      <Styled.Wrapper>
        <Styled.Left>
          <Tags tags={this.getUniqueTags()} activeTags={projectTags || hoverTags} index={index} />
        </Styled.Left>
        <Styled.Right>
          <Index index={(index || hoverIndex) + 1} length={caseStudies.length} />
        </Styled.Right>
        { this.props.children({ handleHover: this.handleHover }) }
      </Styled.Wrapper>
    );
  }
}
Context.defaultProps = {
  index: 0,
};

Context.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
  children: PropTypes.func.isRequired,
};
