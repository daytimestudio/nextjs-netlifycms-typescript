import { AppProps } from 'next/app'

import '../css/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
