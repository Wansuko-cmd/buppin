import '../styles/globals.css'
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
      </>
  )
}

export default MyApp
