import styled from 'styled-components'

const Container = styled.div`
  [data-testid='pt-editor'][data-fullscreen='false'] {
    height: 10rem;
  }

  [data-testid='pt-editor__toolbar-card'] {
    display: none;
  }
`

export const RichTextMinimalContainer = ((props: any) => (
  <Container>{props.renderDefault({...props, initialActive: true})}</Container>
)) as any
