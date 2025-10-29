import styled from 'styled-components'

const SettingsStyle = styled.div`
  > [data-ui='Stack'] {
    gap: 0rem;
  }

  // Gap between title and description

  [data-ui='fieldHeaderContentBox'] > [data-ui='Stack'] {
    gap: 0.5rem;
  }

  // Remove padding from card

  [data-ui='Card'] {
    border: none;
    padding-left: 0.125rem;

    > div > div {
      padding: 0.125rem 0.5rem;
    }
  }
`

export const MediaPlaybackSettingsInput = ((props: any) => {
  return <SettingsStyle>{props.renderDefault({...props})}</SettingsStyle>
}) as any
