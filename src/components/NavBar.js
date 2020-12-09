import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function App() {
    return <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">Kira Fightwear</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">Jiu Jitsu Apparel</Nav.Link>
            <Nav.Link href="">Streetwear</Nav.Link>
            <Nav.Link href="">Accesories</Nav.Link>
            </Nav>
        </Navbar>
     </>;
}

export default App;