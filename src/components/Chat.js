import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

// Components 연결
import MyProfile from '../elements/MyProfile'
import FriendProfile from '../elements/FriendProfile'
import Button from '../elements/Button'
import FriendModal from '../elements/FriendModal'

const Chat = () => {

  return (
    <Wrap>
      <Title>
        <h2>이보리</h2>
      </Title>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #B2C7DA;
`
const Title = styled.div`
  width: 100%;
  height: 100%;
  background-color: #B2C7DA;
  h2 {
    margin: 0;
    padding: 10px 0;
    background-color: #B2C7DA;
  }
`

export default Chat


