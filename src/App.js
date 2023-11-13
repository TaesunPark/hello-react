import React, { useState } from "react";
//import Hello from "./Hello";
import './App.css'

function App(){

  let post = '강남 우동 맛집';
  let [글제목, b] = useState('남자 코트 추천');
  let [logo, setLogo] = useState('ReactBlog');
  // a는 state 보관했던 자료
  // b는 state 변경 도와주는 함수
  // Destructuring 문법

  // state 문법을 언제 쓸지?
  // 변수랑 state 차이점이 있음.
  // 변수는 html에 자동으로 반영안됨
  // state는 갑자기 변경되면 자동 재렌더링됨.
  // Q. state 언제 써야함?
  // A. 변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용


  return(
    // jsx 언어임
    <div className="App">      
      <div className = "black-nav">
        <h4 style = {{color:'red', fontSize: '20px'}}>{logo}</h4>  
      </div>

      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;