import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const MyProfile = () => {

  const list = useSelector((state) => state.cocoatalk.list.userProfile)
  console.log(list)

  return (
    <MyPro>
      <p>내 프로필</p>
      <MyProTxt>
        <MyImgWrap>
          <img src={list?.profileImage} alt="프로필 이미지" />
        </MyImgWrap>
        <MyTxtWrap>
          <h3>{list?.nickname}</h3>
          <p>{list?.userStatus}</p>
        </MyTxtWrap>
      </MyProTxt>
    </MyPro>
  )
}

const MyPro = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  p {
    margin: 0;
    margin-left: 10px;
    padding: 6px 0;
    font-size: 12px;
    color: #5E5E5E;
  }
`

const MyProTxt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const MyImgWrap = styled.div`
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

const MyTxtWrap = styled.div`
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

export default MyProfile