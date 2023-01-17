import Navbar from '../components/molecules/navbar'
import Footer from '../components/molecules/footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
  <Navbar/>
  <Component {...pageProps} />
  <Footer />
  </>
  )
}
