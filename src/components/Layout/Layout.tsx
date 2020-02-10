import React from "react"
import { Link } from "gatsby"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Link to="/">Tyler McRobert</Link>
      <hr />
      <main>{children}</main>
    </div>
  )
}

export default Layout
