import { AppProps } from 'next/app'
import '../styles.scss'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
