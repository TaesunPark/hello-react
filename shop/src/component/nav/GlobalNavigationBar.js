import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom';

function GloabalNavgationBar() {

    let navigate = useNavigate();

    return <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default GloabalNavgationBar;