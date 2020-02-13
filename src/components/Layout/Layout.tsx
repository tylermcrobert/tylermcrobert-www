import React from "react"
import { Link } from "gatsby"
import { useClientCtx } from "components/ClientContextProvider"
import { ClientContextProvider, Grid } from "components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { ThemeProvider } from "styled-components"
import Styled from "./Styled"

interface IProps {
  ctx: string
}

const Layout: React.FC<IProps> = ({ children, ctx }) => {
  return (
    <ClientContextProvider ctx={ctx}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <main>{children}</main>
      </ThemeProvider>
    </ClientContextProvider>
  )
}

const Nav = () => {
  const { currentCtx } = useClientCtx()
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
