import React from "react";

// 로고
import Logo from "../talk_logo.png";

// 아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// 스타일 관련
import styled from "styled-components";



const Signup = () => {
  return (
    <Wrap>
      <ContentsBox>
        <TitleBox>
          {/* <FontAwesomeIcon
        icon={faAngleLeft}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "1.2rem",
        }}
      /> */}
          {/* Logo */}
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "33px",
              height: "33px",
            }}
          />
          <Title>회원가입</Title>
        </TitleBox>

        {/* 회원가입 입력창 */}
        <SignupForm>
          {/* 아이디 */}
          <IdBox>
            <IdInput type="text" placeholder="아이디를 입력하세요." />
            <IdInputConfirm>중복확인</IdInputConfirm>
          </IdBox>
          {/* 이름 */}
          <NameInput type="text" placeholder="이름을 입력하세요." />
          {/* 닉네임 */}
          <NicknameInput type="text" placeholder="닉네임을 입력하세요." />
          {/* 비밀번호 */}
          <PwInput type="password" placeholder="비밀번호를 입력하세요." />
          {/* 비밀번호 확인 */}
          <PwConfirmInput
            type="password"
            placeholder="비밀번호를 확인해주세요."
          />

          {/* Signin Button - Friend 페이지로 이동 */}
          <SignupBtn>회원가입</SignupBtn>
        </SignupForm>
      </ContentsBox>
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

const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 52px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 1.7rem;
  margin-left: 2%;
`;

const SignupForm = styled.form`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IdBox = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin-bottom: 3%;
  border-radius: 8px;
  border: none;
  display: flex;
`;

const IdInput = styled.input`
  width: 70%;
  height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 5%;
  border-radius: 8px 0px 0px 8px;
  outline: none;
  border: 1px solid #d2d2d2;
`;

const IdInputConfirm = styled.button`
  width: 30%;
  height: 40px;
  background-color: #38302b;
  color: #fff;
  font-weight: 600;
  box-sizing: border-box;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid #d2d2d2;
  border-left: none;
`;

const NameInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 3%;
  padding-left: 5%;
  outline: none;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
`;

const NicknameInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 3%;
  padding-left: 5%;
  outline: none;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
`;

const PwInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 3%;
  padding-left: 5%;
  outline: none;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
`;

const PwConfirmInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 5%;
  padding-left: 5%;
  outline: none;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
`;

const SignupBtn = styled.button`
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
`;

export default Signup;
