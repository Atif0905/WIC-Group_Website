import Buisness_Card from "../components/Buisness_Card";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Buisness_Card/>
    </>
  );
}

export default MyApp;
