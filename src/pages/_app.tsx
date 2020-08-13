import React from 'react'
import { GlobalStyle } from 'style'
import { PreviewIndicator } from 'components'
import App, { AppProps, AppContext } from 'next/app'
import CaseStudyPicker from 'components/CaseStudyPicker/CaseStudyPicker'

type MyAppProps = AppProps & { isPreview: boolean }

function MyApp({ Component, pageProps, isPreview }: MyAppProps) {
  return (
    <>
      {isPreview && <PreviewIndicator />}
      <GlobalStyle />
      <CaseStudyPicker />
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const isPreview =
    appContext.ctx.req?.headers.cookie?.includes('__next_preview_data') || false

  return {
    ...appProps,
    isPreview,
  }
}

export default MyApp
