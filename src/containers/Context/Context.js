import React from 'react';
import styled from 'styled-components';
import Tags from './_Tags';
import Index from './_Index';

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
    const projectTags = index !== null && caseStudies[index].tags;

    return (
      <Wrapper>
        <Left>
          <Tags tags={this.getUniqueTags()} activeTags={projectTags || hoverTags} index={index} />
        </Left>
        <Right>
          <Index index={(index || hoverIndex) + 1} length={caseStudies.length} />
        </Right>
        { this.props.children({ handleHover: this.handleHover }) }
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  transform: translateZ(0);
`;

const Sideways = styled.div`
  position: absolute;
  top: 0;
  width: 100vh;
  text-align: center;
  line-height: 3em;
  font-size: .81em;
`;

const Right = styled(Sideways)`
  transform: rotate(90deg) translate3d(calc(100%), 0, 0);
  transform-origin: right 0;
  right: 0;
`;

const Left = styled(Sideways)`
  transform-origin: 0% 0%;
  transform-origin: 100 100;
  transform: rotate(-90deg) translate3d(-100%, 0, 0);
  left: 0
`;


Context.propTypes = {
};
