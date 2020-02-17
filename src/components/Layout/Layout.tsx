import React from "react"
import { Link } from "gatsby"
import { CurationProvider, Grid } from "components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { ThemeProvider } from "styled-components"
import { useCuration } from "hooks"
import Styled from "./Styled"

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
  const { currentCtx } = useCuration()

  const linkDest = currentCtx.uid === "homepage" ? "/" : `/${currentCtx.uid}`
  return (
    <Styled.Nav>
      <Grid>
        <Styled.LogoArea>
          <Link to={linkDest}>Tyler McRobert </Link>
        </Styled.LogoArea>
        <Styled.Link>Info</Styled.Link>
        <Styled.Link>Work</Styled.Link>
      </Grid>
    </Styled.Nav>
  )
}

export default Layout
