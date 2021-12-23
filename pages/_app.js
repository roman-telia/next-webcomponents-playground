import "../styles/globals.css";
import { TeliaVocaStats } from "@teliads/components/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TeliaVocaStats project="b2c-lt" country="LT" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
