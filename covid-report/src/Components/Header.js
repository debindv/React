import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav
} from 'react-bootstrap';

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Covid-19</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/world">World Stats</Link>
                    <Link className="nav-link" to="/state">State Stats</Link>
                    <Link className="nav-link" to="/india">Indian Stats</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;