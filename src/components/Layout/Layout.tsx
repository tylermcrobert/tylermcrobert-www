import React from "react"
import { Link } from "gatsby"
import { useClientCtx } from "components/ClientContextProvider"
import { ClientContextProvider, Grid } from "components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { ThemeProvider } from "styled-components"

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
    <Grid>
      <Link to={linkDest}>Tyler McRobert </Link>
      <div />
      <div>Info</div>
      <div>Work</div>
    </Grid>
  )
}

export default Layout
