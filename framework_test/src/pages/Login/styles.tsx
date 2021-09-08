import styled from "@emotion/styled";
import { color } from "../../lib/styles/color";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: center;
    color: ${color.violet[6]};
  }
  label {
    margin: 1rem 0;
    font-weight: bold;
  }
  .signup {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem 0;
    span {
      a {
        font-weight: bold;
        text-decoration: none;
        color: ${color.violet[4]};
        &:hover {
          color: ${color.violet[6]};
        }
      }
    }
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border: 1px solid ${color.violet[4]};
  border-radius: 3px;
  padding: 0.4rem;
  &:focus {
    border-color: ${color.violet[6]};
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  background: ${color.violet[6]};
  border-radius: 3px;
  padding: 0.4rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: large;
  margin-top: 1rem;
  &:hover {
    background: ${color.violet[4]};
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  p {
    color: red;
    font-weight: bold;
  }
`;
