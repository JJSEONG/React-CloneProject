import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Friend = () => {
  return (
    <Wrap>
      <Header>
        <Title>
          <h1>친구</h1>
        </Title>
        <AddBtn>
          <FontAwesomeIcon icon={faUserPlus} />
        </AddBtn>
      </Header>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`

const Header = styled.div`
  position: relative;
  width: 90%;
  height: 70px;
  border-bottom: 1px solid #5E5E5E;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
  box-sizing: border-box;
`

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 22px;
    margin: 0;
    margin-left: 10px;
  }
`

const AddBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5E5E5E;
  font-size: 20px;
  cursor: pointer;
`

export default Friend