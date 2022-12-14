import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


// import FriendMessage from "../elements/FriendMessage";
// import MyMessage from "../elements/MyMessage";

let stompClient = null;
const Chat = ({ data, setData }) => {

  const navigate = useNavigate();
  // console.log(data)

  const [ chatList, setChatList ] = React.useState([])
  const params = useParams()
  const send_txt = React.useRef(null)
  // console.log(params.roomId)

  let sessionStorage = window.sessionStorage
  const username = sessionStorage.getItem("username")
  
  let sock = new SockJS('http://13.125.57.219:8080/stomp');
  stompClient = over(sock);

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    stompClient.connect({ Authorization: token }, onConnected, onError);
  }, [])
  
  const onConnected = () => {
    // console.log(stompClient)
    // const token = sessionStorage.getItem("token")
    // const user = {
    //   writer: username,
    //   roomId: params.roomId
    // }
    stompClient.subscribe(`/sub/chat/room/${params.roomId}`, onMessageReceived);
    // stompClient.send("/pub/chat/enter", { Authorization: token, "content-type": "application/json" }, JSON.stringify(user));
  }

  const sendMessage = (e) => {
    e.preventDefault()
    const token = sessionStorage.getItem("token")
    const message = {
      writer: username,
      roomId: params.roomId,
      message: send_txt.current.value
    }
    stompClient.send("/pub/chat/message", { Authorization: token, "content-type": "application/json" }, JSON.stringify(message));
    setInputtxt('')
    send_txt.current.focus()
    // stompClient.subscribe(`/sub/chat/room/${params.roomId}`, onMessageReceived);
  }

  const onMessageReceived = (payload) => {
    // console.log(payload)
    const data = JSON.parse(payload.body)
    // console.log(data)
    chatList.push(data)
    setChatList([...chatList])
  }

  // console.log(chatList)
  
  const onError = () => {
    window.alert("???????????? !")
  }

  const [ disabled, setDisabled ] = React.useState(true)

  const change = () => {
    if(send_txt.current.value !== "") {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const scrollRef = React.useRef(null)

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatList]);

  const [ inputtxt, setInputtxt ] = React.useState('');
  const onChangeInput = (e) => {
    setInputtxt(e.target.value);
  }

  const onCheckEnter = (e) => {
    if(e.key === 'Enter') {
      sendMessage(e)
    }
  }

  return (
    <Wrap>
      <Title>
        <FontAwesomeIcon
          className="BackIcon"
          onClick={ () => navigate("/friendList") }
          icon={faAngleLeft}
          style={{
            position: "absolute",
            top: "calc(50% - 6px)",
            left: "10%"
          }}
        />
        <h2>{data.nickname}</h2>
      </Title>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <ChatWrap>
          {
            chatList.map((v, i) => {
              return (
                <ChatBox ref={ scrollRef } key = { i } style = {{
                  alignItems: v.writer === sessionStorage.getItem("username") ? "flex-end" : "flex-start",
                  justifyContents: v.writer === sessionStorage.getItem("username") ? "flex-end" : "flex-start",
                }}>
                  {
                    (v.writer === sessionStorage.getItem("username")) ? 
                    (
                      <p style={{ 
                        fontSize: "14px",
                        backgroundColor: "#B2C7DA",
                        maxWidth: "290px",
                        minHeight: "30px",
                        padding: "4px 10px",
                        borderRadius: "10px",
                        boxSizing: "border-box",
                        textAlign: "right"
                      }}>{v.message}</p>
                    ) :
                    (
                      <ProfileWrap>
                        <ImgWrap>
                          <img src={data.profileImage} alt="" />
                        </ImgWrap>
                        <Profile>
                          <p style={{
                            fontSize: "10px",
                            marginLeft: "6px"
                          }}>{data.nickname}</p>
                          <p style={{
                            fontSize: "14px",
                            backgroundColor: "white",
                            maxWidth: "290px",
                            minHeight: "30px",
                            padding: "4px 10px",
                            borderRadius: "10px",
                            boxSizing: "border-box",
                            textAlign: "left"
                          }}>{v.message}</p>
                        </Profile>
                      </ProfileWrap>
                    )
                  }
                </ChatBox>
              )
            })
          }
        </ChatWrap>
        <PostMessageBox>
          <PostMessageForm onSubmit={sendMessage} onKeyPress = {onCheckEnter}>
            <PostMessageInput ref={ send_txt } value = {inputtxt}
            onChange = {(e) => {
              change();
              onChangeInput(e)}
              } />
            <SubmitBtn disabled = {disabled}>??????</SubmitBtn>
          </PostMessageForm>
        </PostMessageBox>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: #fae300;
  h2 {
    width: 90%;
    margin: 0 auto;
    border-bottom: 0.1rem solid #8e8e8e;
    font-size: 1.3rem;
    padding: 3% 0 2% 0;
    background-color: #fae300;
  }
`;

const ChatWrap = styled.div`
  width: 100%;
  height: 65%;
  margin: 60px 0 140px;
`

const ChatBox = styled.div`
  width: 90%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    margin: 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 6px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const PostMessageBox = styled.div`
  width: 100%;
  height: 18%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
`;

const PostMessageForm = styled.form`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PostMessageInput = styled.textarea`
  width: 73%;
  height: 75%;
  position: absolute;
  left: 10px;
  background-color: #fff;
  resize: none;
  border: none;
  outline: none;
`;

const SubmitBtn = styled.button`
  width: 20%;
  height: 30%;
  position: absolute;
  bottom: 15px;
  right: 8px;
  border-radius: 5px;
  background-color: #fae300;
  border: 1px solid #c8c8c8;
  color: #38302B;
  font-weight: bold;
  &:disabled {
    border: 1px solid #c8c8c8;
    color: #939393;
  }
`;

export default Chat;
