import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap'
import { Link } from "react-router-dom";

class NavigationBar extends Component {
    render() {
        const navStyle = {
            color: 'white'
        }
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href='/'>Request Manager</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link style={navStyle} to="/Request">Request</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
    
}

export default NavigationBar