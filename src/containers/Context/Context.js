import React from 'react';
import Tags from './_Tags';
import Index from './_Index';
import style from './Context.module.css';

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

    const Sideways = ({ children, right }) => (
      <div className={`${style.sideways} ${right ? style.right : style.left}`}>
        {children}
      </div>
    );

    return (
      <div>
        <Sideways>
          <Tags
            tags={this.getUniqueTags()}
            activeTags={projectTags || hoverTags}
            index={index}
          />
        </Sideways>
        <Sideways right>
          <Index
            index={(index || hoverIndex) + 1}
            length={caseStudies.length}
          />
        </Sideways>
        {
          this.props.children({ handleHover: this.handleHover })
        }
      </div>
    );
  }
}

Context.propTypes = {
};
