/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { CurationProvider, Grid } from "components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { ThemeProvider } from "styled-components"
import { useCuration } from "hooks"
import Cookies from "js-cookie"
import checkMobile from "util/checkMobile"
import S from "./Styled"
import { DEFAULT_CTX } from "../../constants"

const Layout: React.FC = ({ children }) => {
  return (
    <CurationProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <main>{children}</main>
      </ThemeProvider>
    </CurationProvider>
  )
}

const Nav = () => {
  return (
    <S.Nav>
      <Grid>
        <S.LogoArea>
          <Link to="/">Tyler McRobert</Link>
          <ContxtIndicator />
        </S.LogoArea>
        <S.Link>Info</S.Link>
      </Grid>
    </S.Nav>
  )
}

const ContxtIndicator = () => {
  const [isHover, setHover] = useState(false)
  const { currentCtx } = useCuration()
  const isDefault = currentCtx.uid === DEFAULT_CTX
  const isMobile = checkMobile()

  const handleClick = () => {
    Cookies.remove("curation")
    navigate("/")
  }

  return (
    <S.ContextArea>
      {!isDefault && (
        <span
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {" "}
          &#215; {currentCtx.name}{" "}
          <span onClick={handleClick}>
            {(isMobile || isHover) && "(close)"}
          </span>
        </span>
      )}
    </S.ContextArea>
  )
}
export default Layout
