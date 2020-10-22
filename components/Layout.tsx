import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { withRouter, NextRouter } from 'next/router'

type Props = {
  children?: ReactNode
  title?: string
  router: NextRouter
}

const PATHS = [
  ['Readme', '/'],
  ['Image Example', '/image-example'],
]

const Layout = ({ router, children, title = 'This is the default title' }: Props) => (
  <div className="relative min-h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="w-full">
      <nav className="flex flex-row p-4">
        {console.log(router)}
        {PATHS.map(([title, path], k) => (
          <Link key={k} href={path}>
            <a className={`mr-4 ${router.pathname === path ? 'italic' : ''}`}>{title}</a>
          </Link>
        ))}
      </nav>
    </header>

    {children}

    <div className="h-12" />
    <footer className="w-full absolute bottom-0">
      <hr />
      <div className="p-4">
        Made by <a href="https://daytime.studio">daytime.studio</a>
      </div>
    </footer>
  </div>
)

export default withRouter(Layout)
