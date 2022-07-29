import React from "react";
import Logo from "../talk_logo.png";

import styled from "styled-components";

const Login = () => {
  return (
    <>
      {/* Logo */}
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "133px",
          height: "133px",
          margin: "136px auto",
          marginBottom: "8%",
        }}
      />
      <LoginFormBox>
        {/* ID */}
        <IdInput placeholder="카카오계정(이메일)" />
        {/* PW */}
        <PwInput placeholder="비밀번호" />
        {/* Signin Button - Friend 페이지로 이동 */}
        <LoginBtn>로그인</LoginBtn>
      </LoginFormBox>

      <GoingToSignupBox>
        <GoingToSignupText>
          계정이 없으신가요?
          {/* Signup 페이지로 이동 */}
          <span>회원가입</span>
        </GoingToSignupText>
      </GoingToSignupBox>
    </>
  );
};

// styled components
const LoginFormBox = styled.div`
  width: 230px;
  height: 95px;
  margin: 0% auto;
`;

const IdInput = styled.input`
  width: 230px;
  height: 46px;
  border: 1px solid #d2d2d2;
  background-color: #fff;
  font-size: 13px;
  border-radius: 6px 6px 0px 0px;
  padding-left: 8%;
  box-sizing: border-box;
  color: #7d7d7d;
`;

const PwInput = styled.input`
  width: 230px;
  height: 46px;
  border: 1px solid #d2d2d2;
  background-color: #fff;
  font-size: 13px;
  border-radius: 0px 0px 6px 6px;
  padding-left: 8%;
  box-sizing: border-box;
  color: #7d7d7d;
`;

const LoginBtn = styled.button`
  width: 230px;
  height: 50px;
  background: #38302b;
  color: #fae300;
  font-size: 18px;
  font-weight: 800;
  border-radius: 8px;
  margin-top: 5%;
  border: none;
`;

const GoingToSignupBox = styled.div`
  width: 224px;
  height: 51px;
  margin: 16% auto;
  line-height: 51px;
  font-size: 0.7rem;
`;

const GoingToSignupText = styled.p`
  span {
    font-weight: 900;
    font-size: 0.75rem;
    margin-left: 3%;
    color: #575757;
  }
  color: #7d7d7d;
`;

export default Login;
