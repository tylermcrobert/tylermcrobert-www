import styled from 'styled-components'
import { mq, size, lineHeights } from 'style'

export const LargeHead = styled.h1`
  font-size: ${size[2]};
  line-height: ${lineHeights.heading};

  br {
    display: none;
  }
  @media ${mq.xs} {
    br {
      display: block;
    }
  }
  @media ${mq.sm} {
    font-size: ${size[5]};
  }
  @media ${mq.md} {
    font-size: ${size[4]};
  }
`
