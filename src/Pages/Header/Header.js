import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GetAuth from './../Context/GetAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,googleSignOut}=GetAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" defaultExpanded collapseOnSelect expand="lg"  >
                <Navbar.Brand href="#home">Genius Car Mechanic</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                                <Nav.Link as={Link} to="/addService">Add Services</Nav.Link>
                                <Nav.Link as={Link} to="/manageServices">Manage Services</Nav.Link>
                                {
                                    user.email
                                    ?<Nav.Link onClick={googleSignOut}>Logout</Nav.Link> 
                                    :<Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }
                                {
                                    user.email &&
                                    <Navbar.Text className="text-white fw-bolder">
                                    Signed in as {user.displayName}
                                    </Navbar.Text>
                                }
                            </Nav>

                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;