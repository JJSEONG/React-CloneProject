import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FriendModal = ({ setAddFriend }) => {

  const sessionStorage = window.sessionStorage;

  const ModalCancle = () => {
    setAddFriend(false)
  }

  const [ disabled, setDisabled ] = React.useState(true)
  const add_ref = React.useRef(null)

  const change = () => {
    if(add_ref.current.value !== "") {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const token = sessionStorage.getItem("token")
  const addFriend = async () => {
    const res = await axios.post("http://3.37.61.221/api/friend/new", {
      "friendname": add_ref.current.value
    }, {
      headers: {
        "Authorization": token
      }
    })
    console.log(res)
  }

  return (
    <div>
      <Dimmed onClick={ModalCancle}></Dimmed>
      <ModalWrap>
        <SubTitle>
          <h2>친구추가</h2>
        </SubTitle>
        <SubDesc>
          <p>이메일 ID로 추가하기</p>
        </SubDesc>
        <Input>
          <input type="text" ref={add_ref} onChange= {change} placeholder='찾으시는 친구의 ID를 입력하세요.' />
        </Input>
        <ButtonWrap>
          <button onClick={ModalCancle}>취소</button>
          <button onClick={addFriend} disabled={disabled}>친구 추가</button>
        </ButtonWrap>
      </ModalWrap>
    </div>
  )
}

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrap = styled.div`
  position: fixed;
  top: calc(50% - 150px);
  left: calc(50% - 140px);
  width: 280px;
  height: 300px;
  margin: 0 auto;
  background-color: white;
  border: 2px solid #5E5E5E;
  border-radius: 10px;
  overflow: hidden;
`

const SubTitle = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 20px 0 8px;
  border-bottom: 1px solid #5E5E5E;
  h2 {
    background-color: white;
    margin: 0;
    margin-left: 10px;
    font-size: 16px;
  }
`

const SubDesc = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  p {
    margin: 6px 0 0 10px;
    font-size: 15px;
    background-color: white;
  }
`

const Input = styled.div`
  width: 90%;
  height: 22px;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  input {
    width: 90%;
    height: 100%;
    border: none;
    background-color: white;
    border-bottom: 1px solid #5E5E5E;
    outline: none;
  }
`

const ButtonWrap = styled.div`
  width: 90%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  button {
    width: 80px;
    height: 100%;
    margin: 0 4px;
    border: none;
    border-radius: 10px;
    background-color: #CCC;
    font-weight: 900;
    cursor: pointer;
  }
  button:nth-of-type(2) {
    background-color: #38302B;
    color: #FAE400;
  }
  button:disabled {
    background-color: #5E5E5E;
    color: #EEE;
    cursor: not-allowed;
  }
`

export default FriendModal