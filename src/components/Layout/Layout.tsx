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
          <Styled.LogoWrapper>
            <Logo />
            <Link to={linkDest}>Tyler McRobert </Link>
          </Styled.LogoWrapper>
        </Styled.LogoArea>
        <Styled.Link>Info</Styled.Link>
        <Styled.Link>Work</Styled.Link>
      </Grid>
    </Styled.Nav>
  )
}

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 226">
      <path
        style={{ width: "100%" }}
        d="M62 26l100 174M25 163L199 63M62 200L162 26"
        stroke="#231F20"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Layout
