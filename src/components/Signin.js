import React from "react";
import { Link } from 'react-router-dom';

// 로고 이미지
import Logo from "../talk_logo.png";

// 스타일 관련
import styled from "styled-components";

const Signin = () => {
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
      <SigninFormBox>
        {/* ID */}
        <IdInput placeholder="카카오계정(이메일)" />
        {/* PW */}
        <PwInput placeholder="비밀번호" />
        {/* Signin Button - Friend 페이지로 이동 */}
        <SigninBtn>로그인</SigninBtn>
      </SigninFormBox>

      <GoingToSignupBox>
        <GoingToSignupText>
          계정이 없으신가요?
          {/* Signup 페이지로 이동 */}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span>회원가입</span>
          </Link>  
        </GoingToSignupText>
      </GoingToSignupBox>
    </>
  );
};

// styled components
const SigninFormBox = styled.div`
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
  outline: none;
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
  outline: none;
  padding-left: 8%;
  box-sizing: border-box;
  color: #7d7d7d;
`;

const SigninBtn = styled.button`
  width: 230px;
  height: 50px;
  background: #38302b;
  color: #fae300;
  font-size: 18px;
  font-weight: 800;
  outline: none;
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

export default Signin;