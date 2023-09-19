import Footer from "../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Womeki</title>
      </Head>
      <Navbar />
      <div>sdcrwfv</div>
      <div className=" navmargin ">
        <Component {...pageProps} />{" "}
      </div>
      <Footer />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    </>
  );
}

export default MyApp;
