import Header from "./Header";
import NavBar from "./NavBar";

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
