import { css, Global } from "@emotion/react";

const styles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

const GlobalStyles = ({ children }) => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
