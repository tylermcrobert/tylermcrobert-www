import styled from "styled-components"
import { mq } from "style"

export const LargeHead = styled.h1`
  font-size: ${props => props.theme.remScale[4]};

  br {
    display: none;
  }

  @media ${mq.xs} {
    br {
      display: block;
    }
  }

  @media ${mq.sm} {
    font-size: ${props => props.theme.remScale[5]};
  }

  @media ${mq.md} {
    font-size: ${props => props.theme.remScale[6]};
  }
`

export const MediumHead = styled.h2`
  font-size: ${props => props.theme.remScale[3]};
`
