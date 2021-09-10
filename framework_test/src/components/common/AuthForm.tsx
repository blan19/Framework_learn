import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
} from "../../pages/Login/styles";
import { useForm } from "react-hook-form";
import axios from "axios";
import KakaoBtn from "./KakaoBtn";

interface PropsTypes {
  type: string;
}

interface FormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const AuthForm = ({ type }: PropsTypes) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    watch,
  } = useForm<FormData>();

  const password = useRef<string>();
  password.current = watch("password");

  const onSubmit = useCallback(
    (data: FormData) => {
      const { email, password, nickname } = data;

      const fetch = async () => {
        try {
          if (type === "Signup") {
            await axios
              .post(
                "http://localhost:4000/api/users/register",
                { email, password, nickname },
                { withCredentials: true }
              )
              .then((res) => console.log(res))
              .catch((e) => console.log(e));
          }

          if (type === "Login") {
            await axios
              .post(
                "http://localhost:4000/api/users/login",
                { email, password },
                { withCredentials: true }
              )
              .then((res) => console.log(res))
              .catch((e) => console.log(e));
          }
        } catch (e) {
          console.log(e);
        }
      };
      fetch();
      reset({
        email: "",
        password: "",
      });
    },
    [reset]
  );
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Mayday</h1>
        <label>Email</label>
        <Input
          {...register("email", {
            required: true,
            pattern:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
          })}
        />
        {errors.email?.type === "required" && (
          <ErrorMessage>
            <p>이메일를 입력해주세요!</p>
          </ErrorMessage>
        )}
        {errors.email?.type === "pattern" && (
          <ErrorMessage>
            <p>이메일 형식으로 입력해주세요!</p>
          </ErrorMessage>
        )}
        {type === "Signup" && (
          <>
            <label>Nickname</label>
            <Input
              {...register("nickname", {
                required: true,
                minLength: 2,
              })}
            />
            {errors.nickname?.type === "required" && (
              <ErrorMessage>
                <p>닉네임을 입력해주세요!</p>
              </ErrorMessage>
            )}
            {errors.nickname?.type === "minLength" && (
              <ErrorMessage>
                <p>2글자 이상 입력해주세요!</p>
              </ErrorMessage>
            )}
          </>
        )}
        <label>Password</label>
        <Input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password?.type === "required" && (
          <ErrorMessage>
            <p>비밀번호를 입력해주세요!</p>
          </ErrorMessage>
        )}
        {errors.password?.type === "minLength" && (
          <ErrorMessage>
            <p>비밀번호를 8글자 이상 입력해주세요!</p>
          </ErrorMessage>
        )}
        {type === "Signup" && (
          <>
            <label>Password Confirm</label>
            <Input
              type="password"
              {...register("passwordConfirm", {
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            {errors.passwordConfirm?.type === "required" && (
              <ErrorMessage>
                <p>비밀번호를 입력해주세요!</p>
              </ErrorMessage>
            )}
            {errors.password !== errors.passwordConfirm && (
              <ErrorMessage>
                <p>비밀번호를 확인해주세요!</p>
              </ErrorMessage>
            )}
          </>
        )}
        {type === "Login" ? (
          <Button type="submit">로그인</Button>
        ) : (
          <Button type="submit">회원가입</Button>
        )}
        <div style={{ display: "inherit" }}>
          <KakaoBtn />
        </div>
        <div className="signup">
          {type === "Login" && (
            <span>
              회원이 아니신가요? <Link to="/signup">Sign up</Link>
            </span>
          )}
        </div>
      </Form>
    </Container>
  );
};

export default AuthForm;
