import styled from 'styled-components';

const Col = styled.div`
  flex-basis: 100%;
  flex: 1;
  background: ${props => (props.background ? props.background : null)}
`;

export default Col;
