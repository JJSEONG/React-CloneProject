import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 연결
import Login from './components/Login';
import Friend from "./components/Friend"

//스타일 관련
import './App.css';



function App() {
  return (
    
    <div className="App">
      <Routes>
        {/* main page */}
        <Route index element={<Login />} />
        <Route path="/:my_id/friendList" element={ <Friend /> }/>

      </Routes>
     
    </div>
  );
}

export default App;
