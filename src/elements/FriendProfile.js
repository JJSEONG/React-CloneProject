import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const FriendProfile = () => {

  const lists = useSelector((state) => state.cocoatalk.list.friendList)
  const sessionStorage = window.sessionStorage
  console.log(lists)

  const CreateChatRoom = async (e, username) => {

    e.preventDefault();
    console.log(username)
    try {
      const token = sessionStorage.getItem("token")
      const res = await axios.post("http://3.37.61.221/chatRoom/find", {
        "participants": username,
        "roomName": username
      }, {
        headers: {
          "Authorization": token
        }
      })
      console.log(res.data)
      navigate(`/${res.data}/chat`)
    } catch(error) {
      console.log(error)
      const token = sessionStorage.getItem("token")
      const res = await axios.post("http://3.37.61.221/chatRoom/create", {
        "participants": username,
        "roomName": username
      }, {
        headers: {
          "Authorization": token
        }
      })
      console.log("create", res)
      navigate(`/${res.data}/chat`)
    }
  }

  const navigate = useNavigate()

  return (
    <div>
      {
        lists?.map((list, idx) => {
          return (
            <FriendWrap key = {idx}
            onClick = {(e) => CreateChatRoom(e, list.username)}>
              <ProTxt>
                <ImgWrap>
                  <img src={list?.profileImage} alt="프로필 이미지" />
                </ImgWrap>
                <TxtWrap>
                  <h3>{list?.nickname}</h3>
                  <p>{list?.userStatus}</p>
                </TxtWrap>
              </ProTxt>
            </FriendWrap>
          )
        })
      }
    </div>
  )
}

const FriendWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding-bottom: 10px;
  p {
    margin: 0;
    margin-left: 10px;
    padding: 6px 0;
    font-size: 12px;
    color: #5E5E5E;
  }
`

const ProTxt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ImgWrap = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 10px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

const TxtWrap = styled.div`
  width: 170px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  h3, p {
    margin: 0;
    padding: 0;
    text-align: left;
  }
`

export default FriendProfile