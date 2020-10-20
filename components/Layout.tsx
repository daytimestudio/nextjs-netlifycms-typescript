import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex">
      <header>
        <nav className="flex flex-col h-screen justify-center pl-10">
          <Link href="/">
            <a>home</a>
          </Link>{' '}
          <Link href="/about">
            <a>about</a>
          </Link>{' '}
        </nav>
      </header>
      {children}
    </div>
    <footer className="fixed bottom-0 w-full py-2 px-4">
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
