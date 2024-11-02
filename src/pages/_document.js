// File: src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add any additional meta tags or link tags here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}