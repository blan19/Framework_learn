import { Global, css } from "@emotion/react";

const styles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
