import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import data from './data.js'
import Item from './component/component.js'
import { Route, Routes, Link } from 'react-router-dom'
import MainPageComponent from './component/main-page/MainPageComponent.js';
import DetailPageComponet from './component/detail-page/DetailPageComponent.js';

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">


      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path='/' element={          
            <MainPageComponent shoes={shoes} item={Item} />          
        } />
        <Route path='/detail' element={
          <DetailPageComponet/>
        } />
      </Routes>


    </div>

  );
}

export default App;
