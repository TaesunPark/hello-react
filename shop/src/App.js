import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import data from './data.js'
import Item from './component.js'

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

      <div className="main-bg"></div>

      <div>
        <Container>
          <Row>
            {
              shoes.map((e, i) => {                
                return (
                  <Col>                  
                    <Item idx = {i} s_data = {data} />
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default App;
