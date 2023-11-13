import React, { useState } from "react";
//import Hello from "./Hello";
import './App.css'

function App(){

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);  
  let [따봉, 따봉변경] =  useState(0);
  
  // array/object 특징
  // array/object 담은 변수엔 화살표만 저장됨
  // ... -> 괄호를 벗겨주세요

  return(
    // jsx 언어임
    <div className="App">      
      <div className = "black-nav">
        <h4 style = {{color:'red', fontSize: '20px'}}>{글제목[0]}</h4>  
      </div>

      <button onClick = {() =>{
        let copy = [...글제목].sort();
        b(copy);
      }}>글 정렬</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉 + 1) }}>따봉</span> {따봉} </h4>        
        <p>2월 17일 발행</p>
        <button onClick={() => 
          {            
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            b(copy);          
          }}>클릭</button>
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