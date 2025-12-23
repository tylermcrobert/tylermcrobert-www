import {styled} from 'styled-components'

const fieldLabelSelector = `> fieldset > [data-ui='Flex'] > [data-ui='fieldHeaderContentBox'] legend [data-ui='Text']`

const MediaFieldStyle = styled.div`
  &:has(img) > [data-ui='Stack'] > * {
    padding: 0;
    border: none;
    outline: none;
  }

  ${fieldLabelSelector} {
    display: flex;
    &:after {
      padding-left: 0.4ch;
    }
  }

  /* Add media suffix to field label */
  &:has(img) ${fieldLabelSelector}:after {
    content: '- Image';
  }

  /* Add video suffix to field label */
  &:has(mux-player) ${fieldLabelSelector}:after {
    content: '- Video';
  }

  /* Hide nested field label (Image or Video) */
  :has(img) fieldset > div:first-child,
  :has(mux-player) fieldset > div:first-child {
    display: none !important;
  }
`

export const FlattenNestedMediaBlock = ((props: any) => {
  return (
    <MediaFieldStyle data-name="media-field">
      {props.renderDefault({...props, name: 'asdf'})}
    </MediaFieldStyle>
  )
}) as any
