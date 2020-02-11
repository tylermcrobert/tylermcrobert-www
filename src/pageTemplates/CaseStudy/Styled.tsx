import styled from "styled-components"

const Section = styled.div<{ bg?: string }>`
  background-color: ${props => props.bg};
  padding: 2rem 0;
  border-bottom: 1px solid black;
`

const Sidebar = styled.div`
  grid-column: span 2;
`

const Main = styled.div`
  grid-column: span 4;
`

const Title = styled.div`
  text-align: center;
`

export default {
  Section,
  Sidebar,
  Main,
  Title,
}
