import React from "react";
import { Routes, Route } from "react-router-dom";

// 컴포넌트 연결
import Signin from './components/Signin';
import Signup from './components/Signup';
import Friend from './components/Friend';
import Chat from './components/Chat';

//스타일 관련
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 홈 화면 - SigninPage */}
        <Route index element={<Signin />} />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/friendList" element={ <Friend /> } />
        <Route path="/:my_id/:friend_id/chat" element={ <Chat /> } />
      </Routes>
    </div>
  );
}

export default App;
