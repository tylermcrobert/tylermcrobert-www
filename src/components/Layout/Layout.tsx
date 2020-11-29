import React from 'react'
import { GlobalStyle } from 'style'
import Seo, { SeoProps } from 'components/Seo/Seo'
import Nav from 'components/Nav/Nav'

const Layout: React.FC<{} & SeoProps> = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <GlobalStyle />
      <Nav />
      {children}
    </>
  )
}

export default Layout
