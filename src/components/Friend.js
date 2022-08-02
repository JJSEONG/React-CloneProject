import React, { useEffect } from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

// Components 연결
import MyProfile from "../elements/MyProfile";
import FriendProfile from "../elements/FriendProfile";
import FriendModal from "../elements/FriendModal";



// Redux Action Funtion 연결
import { loadFriendDB } from '../redux/modules/cocoatalk'

const Friend = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cocoatalk.list.friendList)
  // console.log(data)

  useEffect(() => {
    dispatch(loadFriendDB())
  }, [])

  const [addFriend, setAddFriend] = React.useState(false);

  const addFriendBtn = () => {
    setAddFriend(true);
  };
  console.log(addFriend);

  return (
    <Wrap>
      <Header>
        <Title>
          <h1>친구</h1>
        </Title>
        <AddBtn onClick={addFriendBtn}>
          <FontAwesomeIcon icon={faUserPlus} />
        </AddBtn>
      </Header>
      <MyProfile />
      <SubTitle>
        <p>친구</p>
      </SubTitle>
      <FriendList>
        <FriendProfile />
      </FriendList>
      {addFriend ? <FriendModal setAddFriend={setAddFriend} /> : null}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 320px;
  height: 100%;
  margin: 0 auto;
`;

const Header = styled.div`
  position: relative;
  width: 90%;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
  box-sizing: border-box;
`;

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
`;

const AddBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const SubTitle = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  p {
    margin: 0;
    margin-left: 10px;
    padding: 6px 0;
    font-size: 12px;
    color: #5e5e5e;
  }
`;

const FriendList = styled.div`
  width: 100%;
`;

export default Friend;
