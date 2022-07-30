import React from "react";
import { Link } from "react-router-dom";

// 로고 이미지
import Logo from "../talk_logo.png";

// 스타일 관련
import styled from "styled-components";

const Signin = () => {
  const signinId = React.useRef(null);
  const signinPw = React.useRef(null);

  const submitToSiginIn = (e) => {
    e.preventDefault();
    const username = signinId.current.value;
    const password = signinPw.current.value;
    console.log(username, password);

    // const userData = { username, password };
  };
  return (
    <Wrap>
      <ContentsWrap>
        <div style={{ width: "133px", height: "133px", marginBottom: "40px" }}>
          {/* Logo */}
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <SigninFormBox onSubmit={submitToSiginIn}>
          {/* ID */}
          <IdInput
            type="text"
            placeholder="카카오계정(이메일)"
            ref={signinId}
          />
          {/* PW */}
          <PwInput type="password" placeholder="비밀번호" ref={signinPw} />
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
      </ContentsWrap>
    </Wrap>
  );
};

// styled components

const Wrap = styled.div`
  max-width: 320px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const ContentsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SigninFormBox = styled.form`
  width: 90%;
  height: 100%;
  margin: 0% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IdInput = styled.input`
  width: 100%;
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
  width: 100%;
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
  width: 100%;
  height: 50px;
  background: #38302b;
  color: #fae300;
  font-size: 18px;
  font-weight: 800;
  outline: none;
  border-radius: 8px;
  margin-top: 5%;
  border: none;
  &:hover{
    cursor: pointer;
  }
`;

const GoingToSignupBox = styled.div`
  width: 90%;
  height: 51px;
  line-height: 51px;
  font-size: 0.7rem;
`;

const GoingToSignupText = styled.p`
  span {
    font-weight: 900;
    font-size: 0.75rem;
    color: #575757;
    margin-left: 3%;
    &:hover{
      color: #000000;
      border-bottom: 1px solid #333;
    }
  }
  color: #444;
`;

export default Signin;
