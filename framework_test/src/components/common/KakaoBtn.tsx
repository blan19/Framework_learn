import React from "react";
import styled from "@emotion/styled";

const KakaoBtn = () => {
  return (
    <a
      style={{ textDecoration: "none", color: "inherit" }}
      href="http://localhost:4000/oauth/kakao"
    >
      <Container>
        <Symbol></Symbol>
        <Label>Login with Kakao</Label>
      </Container>
    </a>
  );
};

export default KakaoBtn;

const Container = styled.div`
  background: #fee500;
  border-radius: 12px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  cursor: pointer;
`;

const Label = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000 85%;
  padding: 0 25px;
`;

const Symbol = styled.div``;
