import React from "react"
import styled from "styled-components"
import { UNICODE } from "../../constants"

const DotHead: React.FC = ({ children }) => {
  return (
    <StyledDotHead>
      {UNICODE.CIRCLE} {children}
    </StyledDotHead>
  )
}

const StyledDotHead = styled.span`
  text-transform: uppercase;
`

export default DotHead
