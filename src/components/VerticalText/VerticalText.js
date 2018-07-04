import styled from 'styled-components';

const VerticalText = styled.div`

  position: absolute;
  top: 50vh;
  width: 100vh;
  margin: -1em 0;
  text-align: center;
  height: .81em;
  line-height: .81em;

  @media (max-width: ${props => props.maxWidth}px){
    display:none;
  }

  ${props => (props.right
    ? `
      right: -50vh;
      transform: rotate(90deg) translateY(50%);
      margin-right: 1em;`
    : `
      left: -50vh;
      transform: rotate(270deg) translateY(50%);
      margin-left: 1em;`
  )};


  p, li {
    line-height: .81em;
    font-size: .81em;
  }
`;

export default VerticalText;
