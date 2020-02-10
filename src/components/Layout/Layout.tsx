import React from "react"
import { Link } from "gatsby"
import { useClientCtx } from "components/ClientContextProvider"
import { ClientContextProvider } from "components"

interface IProps {
  ctx: string
}

const Layout: React.FC<IProps> = ({ children, ctx }) => {
  return (
    <ClientContextProvider ctx={ctx}>
      <Nav />
      <hr />
      <main>{children}</main>
    </ClientContextProvider>
  )
}

const Nav = () => {
  const { currentCtx } = useClientCtx()
  const linkDest = currentCtx === "homepage" ? "/" : `/${currentCtx}`
  return (
    <>
      <Link to={linkDest}>Tyler McRobert </Link>/ ctx: {currentCtx}
    </>
  )
}

export default Layout
