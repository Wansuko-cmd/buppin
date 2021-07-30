import '../styles/globals.css'
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Sidebar from "../components/layouts/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
      <>

          <Header/>
          <Sidebar/>
          <Component {...pageProps} />
          <Footer/>
      </>
  )
}

export default MyApp
