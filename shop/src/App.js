import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import data from './data.js'
import Item from './component.js'
import { Route, Routes, Link } from 'react-router-dom'
import MainPageComponent from './component/main-page/MainPageComponent.js';


function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to = "/">홈</Link>
      <Link to = "/detail">상세페이지</Link>    

      <Routes>
        <Route path='/' element={    
          <MainPageComponent shoes = {shoes}/>      
        } />
        <Route path='/detail' element={<div>상세페이지임</div>} />
      </Routes>

    </div>

  );
}

export default App;
