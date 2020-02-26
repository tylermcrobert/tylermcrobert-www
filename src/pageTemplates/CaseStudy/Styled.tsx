import styled from "styled-components"

const Section = styled.div<{ bg?: string }>`
  background-color: ${props => props.bg};
  padding: 3rem 0;
  border-bottom: 1px solid black;
`

const LgSection = styled(Section)`
  padding: 6rem 0;
`

const Sidebar = styled.div`
  grid-column: span 2;
  max-width: 13rem;
`

const Main = styled.div`
  grid-column: span 4;
  font-family: ${props => props.theme.fontFamilies.serif};
`

const Title = styled.div`
  text-align: center;
`

const Body = styled.div`
  grid-column: 4 / span 3;
`

const SliceWrapper = styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px dashed black;
  margin-bottom: 1px;
`
export default {
  SliceWrapper,
  LgSection,
  Section,
  Sidebar,
  Main,
  Title,
  Body,
}
