import styled from 'styled-components'

const Wrapper = styled.div`
  background: black;
  padding: 10%;
`

const Image = styled.img<{ visible: boolean }>`
  display: ${p => (p.visible ? 'block' : 'none')};
`

export default { Image, Wrapper }
