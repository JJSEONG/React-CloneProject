import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 로고
import Logo from "../talk_logo.png";

// 아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";


const Signup = () => {
  const navigate = useNavigate();

  const signupId = React.useRef(null); // Id
  const signupName = React.useRef(null); // Name
  const signupNick = React.useRef(null); // Nickname
  const signupPw = React.useRef(null); // Password
  const signupPwCheck = React.useRef(null); // CheckPassword

  let sessionStorage = window.sessionStorage;

  useEffect(() => {
    sessionStorage.setItem("checkUsername", false)
  }, []);

  const submitToSignup = async (e) => {
    e.preventDefault();
    const username = signupId.current.value;
    const name = signupName.current.value;
    const nickname = signupNick.current.value;
    const password = signupPw.current.value;
    const checkPassword = signupPwCheck.current.value;
    
    console.log(username, name, nickname, password, checkPassword);

    let sessionStorage = window.sessionStorage;
    
    // axios 회원가입 요청
    try {
      await axios({
        method: "post",
        url: "http://13.125.57.219:8080/api/user/join",
        data: {
          username: username,
          realname: name, 
          nickname: nickname,
          password: password,
          checkPassword: checkPassword,
          profileImage: "https://horang2film.co.kr/common/img/default_profile.png",
          checkUsername: sessionStorage.getItem("checkUsername")
        },
      }).then((response) => {
          // 유효성 검사하기
          console.log(response)

          if(response.status === 200 && response.data === '아이디를 3자 이상 입력하세요.') {
            window.alert("아이디를 3자 이상 이메일 형식으로 입력하세요.") 
            return;
          } else if(response.status === 200 && name === "" ) { 
            window.alert("이름을 입력해주세요.")
            return;
          } else if(response.status === 200 && nickname === "") {
            window.alert("닉네임을 입력해주세요")
            return;
          } else if(response.status === 200 && response.data === '비밀번호를 4자 이상 입력하세요') {
            window.alert(response.data)
            return;
          } else if(response.status === 200 && response.data === '비밀번호가 일치하지 않습니다') {
            window.alert(response.data)
            return;
          } else if(response.status === 200 && response.data === '중복된 id 입니다.') {
            window.alert(response.data)
            return;
          } else if(response.status === 200 && response.data === '이메일 형식으로 입력 하세요.') {
            window.alert(response.data)
            return;
          } else if(response.status === 200 && response.data === "비밀번호에 아이디를 포함할 수 없습니다.") {
            window.alert(response.data)
            return;
          }else if(response.status === 200 && response.data === "아이디 중복 확인") {
            signupId.current.focus();
            window.alert("ID 중복확인을 진행 후 가입을 완료해주세요.")
            return;
          } else {
            window.alert(`${nickname}님💚 \n회원가입 축하드립니다.`)
            sessionStorage.removeItem("checkUsername");
            navigate("/")
          }
        }
      );
    } catch (error) {
      // alert(error.respnse.data.message);
      console.log(error);
    }
  };

  const IdCheck = async (e) => {
    e.preventDefault();
    const username = signupId.current.value;

    const res = await axios.post("http://13.125.57.219:8080/api/user/username", {
      username: username
    })
    console.log(res)
    if(res.data === "사용 할 수 있는 아이디 입니다.") {
      sessionStorage.setItem("checkUsername", true)
      window.alert(res.data)
    } else {
      sessionStorage.setItem("checkUsername", false)
      signupId.current.focus();
      alert(res.data)
    }
  }

  return (
    <Wrap>
      <ContentsBox>
        <TitleBox>
          {/* 뒤로가기 Icon */}
          <FontAwesomeIcon
            className="BackIcon"
            onClick={() => navigate("/")}
            icon={faAngleLeft}
            style={{
              position: "absolute",
              left: "10%",
            }}
          />
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
        <SignupForm onSubmit={(e) => submitToSignup(e)}>
          {/* 아이디 */}
          <IdBox>
            <IdInput
              type="text"
              placeholder="아이디를 입력하세요."
              ref={signupId}
            />
            <IdInputConfirm onClick={IdCheck}>중복확인</IdInputConfirm>
          </IdBox>
          {/* 이름 */}
          <NameInput
            type="text"
            placeholder="이름을 입력하세요."
            ref={signupName}
          />
          {/* 닉네임 */}
          <NicknameInput
            type="text"
            placeholder="닉네임을 입력하세요."
            ref={signupNick}
          />
          {/* 비밀번호 */}
          <PwInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            ref={signupPw}
          />
          {/* 비밀번호 확인 */}
          <PwConfirmInput
            type="password"
            placeholder="비밀번호를 확인해주세요."
            ref={signupPwCheck}
          />

          {/* SignUp Button - Signin 페이지로 이동 (axios에서 처리할까?..) */}
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
  position: relative;
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
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
`;

export default Signup;
