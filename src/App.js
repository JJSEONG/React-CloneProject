import React from "react";
import { Routes, Route } from "react-router-dom";

// 컴포넌트 연결
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Friend from "./components/Friend";

//스타일 관련
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 홈 화면 - SigninPage */}
        <Route index element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:my_id/friendList" element={<Friend />} />
      </Routes>
    </div>
  );
}

export default App;
