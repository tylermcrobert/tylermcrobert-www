import React from "react"
import { Link } from "gatsby"
import { useClientCtx } from "components/ClientContextProvider"
import { ClientContextProvider } from "components"
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
        <hr />
        <main>{children}</main>
      </ThemeProvider>
    </ClientContextProvider>
  )
}

const Nav = () => {
  const { currentCtx } = useClientCtx()
  const linkDest = currentCtx.uid === "homepage" ? "/" : `/${currentCtx.uid}`
  return (
    <>
      <Link to={linkDest}>Tyler McRobert </Link>/ ctx: {currentCtx.uid}
    </>
  )
}

export default Layout
