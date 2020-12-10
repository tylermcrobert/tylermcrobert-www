import React from 'react'
import Head from 'next/head'

export type SeoProps = {
  title: string | null
  // TODO: Require desc + img
}

const Seo: React.FC<SeoProps> = ({ title: titleProp }) => {
  return (
    <Head>
      <title>
        {titleProp ? `${titleProp} – Tyler McRobert` : 'Tyler McRobert'}
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XN74KTMBQ5"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-XN74KTMBQ5');
          `,
        }}
      />
    </Head>
  )
}

export default Seo
