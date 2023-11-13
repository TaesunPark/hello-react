import React, { useState } from "react";
//import Hello from "./Hello";
import './App.css'

function App(){

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);  
  let [따봉, 따봉변경] =  useState(0);
  // UI의 현재 상태를 state로 저장
  let [modal, setModal] = useState(false);
  
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
        <p>2월 18일 발행</p>
      </div>

      <button onClick={()=>{         
        setModal(!modal);
        }}></button>

      {
        modal == true ? <Modal></Modal> : null
      } 

    </div>
  );
}

// const 변수는 에러 메시지를 띄워줌

// 컴포넌트로 만들면 좋은 경우
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주변경되는 것들
// 단점
// 1. state 가져다쓸 때 문제생김

function Modal(){
  return(    
      <div className="modal">
        <h4>제목11</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>      
  )
}

// [동적인 UI 만드는 step]
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

export default App;