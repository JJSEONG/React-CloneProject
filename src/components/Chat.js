import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

// import FriendMessage from "../elements/FriendMessage";
// import MyMessage from "../elements/MyMessage";

let stompClient = null;
const Chat = () => {
  const [ chatList, setChatList ] = React.useState([])
  const params = useParams()
  const send_txt = React.useRef(null)
  console.log(params.roomId)

  let sessionStorage = window.sessionStorage
  const username = sessionStorage.getItem("username")
  
  let sock = new SockJS('http://13.125.57.219:8080/stomp');
  stompClient = over(sock);
  
  const onConnected = () => {
    console.log(stompClient)
    const token = sessionStorage.getItem("token")
    const user = {
      writer: username,
      roomId: params.roomId
    }
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
    // stompClient.subscribe(`/sub/chat/room/${params.roomId}`, onMessageReceived);
  }

  const onMessageReceived = (payload) => {
    console.log(payload)
    setChatList([...chatList, payload])
    console.log(chatList)
  }
  
  const onError = () => {
    window.alert("실패했다 !")
  }

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    stompClient.connect({ Authorization: token }, onConnected, onError);
  }, [])

  return (
    <Wrap>
      <Title>
        <h2>이보리</h2>
      </Title>
      <ChatBox>
  
      </ChatBox>
      <PostMessageBox>
        <PostMessageForm onSubmit={sendMessage}>
          <PostMessageInput ref={ send_txt } />
          <SubmitBtn>전송</SubmitBtn>
        </PostMessageForm>
      </PostMessageBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #b2c7da;
`;
const Title = styled.div`
  width: 100%;
  height: 8%;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: #b2c7da;
  h2 {
    width: 90%;
    margin: 0 auto;
    background-color: #b2c7da;
    border-bottom: 0.1rem solid #8e8e8e;
    font-size: 1.3rem;
    padding: 3% 0 2% 0;
  }
`;

const ChatBox = styled.div`
  width: 90%;
  overflow: hidden;
  background-color: #b2c7da;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
const PostMessageBox = styled.div`
  width: 100%;
  height: 15%;
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
  border: 1px solid #C8C8C8;
  color: #939393;
`;

export default Chat;