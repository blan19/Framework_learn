import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  background: white;
  position: fixed;
  z-index: 999;

  .header-title-1 {
    display: flex;
    padding: 0 2rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;

    .header-title {
      h1 {
        font-size: 3rem;
        font-weight: 400;
      }
    }

    .header-menu {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ul > li {
        padding-left: 1.25rem;
        svg {
          cursor: pointer;
          font-size: 2rem;
        }
      }
    }
  }
`;

export const Space = styled.div`
  height: 77.19px;
`;
