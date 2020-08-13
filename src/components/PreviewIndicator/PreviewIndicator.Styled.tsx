import styled from 'styled-components'
import { size } from 'style'

const Wrapper = styled.div<{ enabled: boolean }>`
  background: orange;
  font-size: ${size[-1]};
  padding: 0 ${size[-2]};
  margin: ${size[-2]};
  position: fixed;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${size[2]};
  width: ${p => (p.enabled ? `250px` : size[2])};
  overflow: hidden;
  white-space: nowrap;
  border-radius: 999px;
  transform: scale(${p => (p.enabled ? 1 : 0.5)});
  transition: 200ms width ease, 200ms transform ease;
  transform-origin: bottom left;

  > div {
    opacity: ${p => (p.enabled ? 1 : 0)};
    transition: 200ms opacity ease;
  }
`

export default {
  Wrapper,
}
