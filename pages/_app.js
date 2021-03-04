import {SearchProvider} from 'context/searchContext'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  )
}

export default MyApp
