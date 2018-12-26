import React from 'react';
import PropTypes from 'prop-types';

export default class RoundCorner extends React.Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }
  state={
    radius: 0,
  }
  componentDidMount() {
    this.setState({
      radius: this.node.current.offsetWidth * (this.props.radius / 100),
    });
  }
  render() {
    const { radius } = this.state;
    return (
      <div
        ref={this.node}
        style={{ borderRadius: `${radius}px`, overflow: 'hidden' }}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }
}

RoundCorner.propTypes = {
  radius: PropTypes.number.isRequired,
};
