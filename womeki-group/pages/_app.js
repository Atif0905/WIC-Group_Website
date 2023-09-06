import 'bootstrap/dist/css/bootstrap.css'
// import "../css/customcss.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
