import styled from "@emotion/styled";

export const NabBarContainer = styled.div``;

export const NavBarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-left: 0;

  li {
    padding: 0 1rem;
  }

  li > a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: lightgray;
  }

  .active {
    color: black;
  }
`;
