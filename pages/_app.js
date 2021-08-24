import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import Head from "next/head";
import store from "../redux/store";
import GlobalStyle from "../styles/globalStyle.js";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="//code-eu1.jivosite.com/widget/FcyQqOXV14" async></script>
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
