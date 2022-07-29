import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/form-styles.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
