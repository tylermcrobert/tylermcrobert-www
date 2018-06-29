import styled from 'styled-components';

const VerticalText = styled.div`
  position: absolute;
  top: calc(50vh - 1em);
  ${props => (
    props.right
      ? 'right: calc(-50vh + 1.5em)'
      : 'left: calc(-50vh + 1.5em)'
  )};
  display: inline-block;
  transform: ${props => (props.right ? 'rotate(90deg)' : 'rotate(270deg)')};
  width: 100vh;
  text-align: center;
  height: .81em;
  line-height: .81em;

  p, li {
    line-height: .81em;
  }
`;

export default VerticalText;
