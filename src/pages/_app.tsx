import React from 'react'
import { GlobalStyle } from 'style'
import { AppProps } from 'next/app'

type MyAppProps = AppProps & {}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  )
}

MyApp.getInitialProps = () => {}

export default MyApp
