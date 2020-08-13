import React from 'react'
import { GlobalStyle } from 'style'
import Seo, { SeoProps } from 'components/Seo/Seo'

const Layout: React.FC<{} & SeoProps> = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
