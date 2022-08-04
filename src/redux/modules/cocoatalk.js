// cocoatalk.js

import axios from "axios";

// Actions
const FRIEND_LOAD = "cocoatalk/FRIEND_LOAD";

const initialState = {
  list : [
    {
      username: "",
      nickname: "",
      title: "",
      images: "",
      contents: "",
      agreeCount: 0,
      disagreeCount: 0,
      agree: false,
      disagree: false,
      date: "",
      mbti: "",
      id : 1,
      comment : [
        {
          nickname: "안녕",
          mbti: "안녕",
          comment: "안녕"
        },
        {
          nickname: "안닝",
          mbti: "안닝",
          comment: "안닝"
        },
        {
          nickname: "인닝",
          mbti: "인닝",
          comment: "인닝"
        }
      ]
    },
  ]
} 

// Action Creators
export function loadFriend(list) {
  return { type: FRIEND_LOAD, list }
}

// middlewares
export const loadFriendDB = () => {
  const sessionStorage = window.sessionStorage;
  const token = sessionStorage.getItem("token")
  return async function (dispatch) {
    try {
      const res = await axios.get("http://13.125.57.219:8080/api/friend/list", {
        headers: {
          "Authorization": token
        }
      });
      // console.log(res)
      dispatch(loadFriend(res.data))
    } catch(error) {
      console.log(error)
    }
  }
}

// Reducer
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "cocoatalk/FRIEND_LOAD": {
      // console.log(state, action.list)
      return { list: action.list }
    }

    default: return state;
  }
}