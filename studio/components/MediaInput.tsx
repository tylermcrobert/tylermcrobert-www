import styled from 'styled-components'

const MediaInputStyle = styled.div`
  container-type: inline-size;

  [data-testid*='media.video'] > [data-ui='Box'] {
    padding: 0 !important;
    border: 0;

    button > span {
      margin-top: -0.25em;
      margin-bottom: -0.25em;
    }

    @container (max-width: 29.1em) {
      button > span {
        margin-bottom: 0;
      }

      [data-ui='Card'] > [data-ui='Flex'] {
        flex-direction: column;

        > *:first-child {
          align-self: flex-start;
        }
      }
    }
  }
`

export const MediaInput = ((props: any) => {
  return <MediaInputStyle>{props.renderDefault({...props})}</MediaInputStyle>
}) as any
