import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import data from './data.js'
import Item from './component/component.js'
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import MainPageComponent from './component/main-page/MainPageComponent.js';
import DetailPageComponet from './component/detail-page/DetailPageComponent.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  // 페이지 이동을 도와주는 함수임.

  return (
    <div className="App">


      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path='/' element={          
            <MainPageComponent shoes={shoes} item={Item} setShoes = {setShoes} />          
        } />

        // url파라미터
        <Route path='/detail/:id' element={
          <DetailPageComponet shoes = {shoes}/>
        } />
        

        <Route path='*' element = {
          <div>없는페이지요</div>
        }></Route>

        <Route path="/event" element={<About/>}>
          <Route path = "one" element = { <div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path = "two" element = { <div>생일기념 쿠폰받기</div>}/>
        </Route>
      </Routes>              
    </div>
  );

  

  function About(){
    return(
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>      
    )
  }

}

export default App;
