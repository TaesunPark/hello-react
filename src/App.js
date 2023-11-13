import React, { useState } from "react";
//import Hello from "./Hello";
import './App.css'

function App(){

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);  
  let [따봉, 따봉변경] =  useState(0);
  
  // 1. onClick = {} 안엔 함수
  // 2. state 변경하는법 -> 항상 state 변경 함수 쓰세요.  
  // 숙제. 버튼 누르면 여자 코트 추천으로 바뀌는 기능 만들기

  return(
    // jsx 언어임
    <div className="App">      
      <div className = "black-nav">
        <h4 style = {{color:'red', fontSize: '20px'}}>{글제목[0]}</h4>  
      </div>
      
      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉 + 1) }}>따봉</span> {따봉} </h4>        
        <p>2월 17일 발행</p>
        <button onClick={() => {b(['여자 코트 추천', '여자 코트 추천', '맛집 추천2'])}}>클릭</button>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;