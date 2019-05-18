import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'

// others
import Logo from "../../assets/img/upah.png";
import "./Navbar.sass";

class NavBar extends Component{
    render(){
        return(
            <Navbar bg="light" variant="light" fixed="top" >
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="100px"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#product">Product</Nav.Link>
                        <Nav.Link href="#location">Location</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;