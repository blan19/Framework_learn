import { cloneElement, Children } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropsTypes from "prop-types";

const NavLink = ({ activeClassName, children, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {cloneElement(child, { className: className || null })}
    </Link>
  );
};

NavLink.PropsTypes = {
  activeClassName: PropsTypes.string.isRequired,
};

export default NavLink;
