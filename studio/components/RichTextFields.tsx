import styled from 'styled-components'

const RichTextMinimalContainerStyle = styled.div`
  [data-testid='pt-editor'][data-fullscreen='false'] {
    height: 10rem;
  }

  [data-testid='pt-editor__toolbar-card'] {
    display: none;
  }
`

export const RichTextMinimalContainer = ((props: any) => (
  <RichTextMinimalContainerStyle>
    {props.renderDefault({...props, initialActive: true})}
  </RichTextMinimalContainerStyle>
)) as any
