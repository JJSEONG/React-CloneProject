import React from "react";
import styled from "styled-components";

import MyImg from "../profile_img.jpeg";

const FriendMessage = () => {
  return (
    <Wrap>
      {/* <MessageBox> */}
        <ImgWrap>
          <img src={MyImg} alt="프로필 이미지" />
        </ImgWrap>
        {/* <Ments/>
      </MessageBox> */}
    </Wrap>
  );
};

// styled components 적용
const Wrap = styled.div`
  width: 90%;
`;
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
`;

export default FriendMessage;
