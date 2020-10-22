import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import metadata from '../data/settings.json'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="bg-primaryBlack">
        <Head>
          <meta name="description" content={metadata.site_description} />
          <meta name="keywords" content={metadata.site_keywords} />

          <meta property="og:title" content={metadata.site_title} />
          <meta property="og:description" content={metadata.site_description} />
          <meta property="og:image" content={metadata.thumbnail} />
          <meta property="og:url" content={metadata.base_url} />

          {/* Replace with your own */}
          <meta name="author" content="daytime.studio" />
          <meta name="copyright" content="daytime.studio" />

          {/* Google Analytics goes here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
