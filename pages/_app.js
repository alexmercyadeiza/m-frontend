import { AppWrapper } from "../lib/context/global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
