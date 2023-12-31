import React, { useState } from "react";
//import Hello from "./Hello";
import './App.css'

function App(){

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);  
  let [따봉, 따봉변경] =  useState([0,0,0]);
  let [modal, 모달변경] = useState(false);
  let [now_modal, 현재모달위치] = useState(0);
  let [입력값, 입력값변경] = useState('');
  // UI의 현재 상태를 state로 저장
  
  
  // array/object 특징
  // array/object 담은 변수엔 화살표만 저장됨
  // ... -> 괄호를 벗겨주세요

  return(
    // jsx 언어임
    <div className="App">      
      <div className = "black-nav">
        <h4 style = {{color:'red', fontSize: '20px'}}>{글제목[0]}</h4>  
      </div>                  

      {
        글제목.map(function(a, i){

          return (          
            <div className="list">              
              <h4>{i + 1} {a} {따봉[i]}</h4>              

              <button onClick={()=>{
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}>카운트 업</button>
              <p>날짜</p>
              <p>상세내용</p>
              <button onClick={
                () => {                  
                  모달변경(!modal);
                  현재모달위치(i);
                }
              }>모달</button>
              <button onClick={
                () =>{
                  let copy = [...글제목];
                  copy.splice(now_modal, 1);
                  b(copy);
                }
              }>삭제</button>
            </div>            
          )
        })
      }    

      <div>
        <input onChange={(e)=>{
          입력값변경(e.target.value);
          console.log(입력값);
        }} />
        <button onClick={
          () =>{
            let copy = [...글제목];
            let copy2 = [...따봉];
            copy2.push(0);
            copy.push(입력값);
            b(copy);
            따봉변경(copy2);
          }
        }>입력</button>
      </div>
      

      {
        modal == true ? <Modal color = "yellow" 글제목 = {글제목} 첫번째헤드 = {b} 현재모달 = {now_modal}></Modal> : null
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

function Modal(props){
  return( 
      
      <div className="modal" style={{background : props.color}}>        
        <h4>{props.글제목[props.현재모달]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick ={
          () => {
            let copy = [... props.글제목];
            copy[0] = "여자코트 추천";
            props.첫번째헤드(copy);
          }
        }>글수정</button>
      </div>      
  )
}

// [동적인 UI 만드는 step]
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

export default App;