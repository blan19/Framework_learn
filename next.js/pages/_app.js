import GlobalStyles from "../lib/styles/global";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
