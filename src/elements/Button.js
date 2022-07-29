import React from 'react'
import styled from "styled-components"

const Button = () => {
  return (
    <ButtonWrap>
      <button>친구목록</button>
      <button>채팅방</button>
    </ButtonWrap>
  )
}

const ButtonWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    width: 50%;
    height: 100%;
    border: 1px solid #5E5E5E;
    background-color: white;
    cursor: pointer;
    outline: none;
  }
  button:nth-of-type(1) {
    border-right: none;
  }
`

export default Button