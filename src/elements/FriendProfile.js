import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

// 나의 프로필 이미지
import MyImg from '../profile_img.jpeg'



const FriendProfile = () => {

  const list = useSelector((state) => state.cocoatalk.list)

  return (
    <FriendWrap>
      <ProTxt>
        <ImgWrap>
          <img src={MyImg} alt="프로필 이미지" />
        </ImgWrap>
        <TxtWrap>
          <h3>이보리</h3>
          <p>보리🌾</p>
        </TxtWrap>
      </ProTxt>
    </FriendWrap>
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