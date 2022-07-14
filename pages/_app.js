import '../styles/globals.css'
import CustomNavbar from './CustomNavbar'

function MyApp({ Component, pageProps }) {
  return <>
  <CustomNavbar/>
  <Component {...pageProps} />
  
  </>
}

export default MyApp
