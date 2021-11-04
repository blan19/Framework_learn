import Header from "./header";
import NavBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
