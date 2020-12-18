import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget.js';



function NavBar() {
    return <>
        <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="">Kira Fightwear</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">Jiu Jitsu Apparel</Nav.Link>
            <Nav.Link href="">Streetwear</Nav.Link>
            <Nav.Link href="">Accessories</Nav.Link>
            </Nav>
            <CartWidget />
        </Navbar>
     </>;
}

export default NavBar;