import Link from "next/link";
import NavLink from "../NavLink";
import { StyledNavLink } from "../NavLink/styles";
import { NavBarUl } from "./styles";

const NavBar = () => {
  return (
    <div>
      <NavBarUl>
        <li>
          <StyledNavLink activeClassName="active" href="/">
            <a>Main</a>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink activeClassName="active" href="/post">
            <a>Posts</a>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink activeClassName="active" href="/about">
            <a>About</a>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink activeClassName="active" href="/account">
            <a>Account</a>
          </StyledNavLink>
        </li>
      </NavBarUl>
    </div>
  );
};

export default NavBar;
