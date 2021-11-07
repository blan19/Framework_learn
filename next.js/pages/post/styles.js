import styled from "@emotion/styled";

export const PostContainer = styled.div`
  margin: 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .post-colume {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ViewContainer = styled.div``;
