import { HeaderContainer, Space } from "./styles";
import { FaHamburger } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="header-title-1">
          <div className="header-title">
            <h1>Next.js</h1>
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <BiSearchAlt />
              </li>
              <li>
                <FaHamburger />
              </li>
            </ul>
          </div>
        </div>
        <div className="header-title-2"></div>
      </HeaderContainer>
      <Space />
    </>
  );
};

export default Header;
