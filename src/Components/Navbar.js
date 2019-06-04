import React, { Component } from 'react'
import { Navbar, Nav, NavItem, } from 'reactstrap'
import { Link } from "react-router-dom";

class NavigationBar extends Component {
    render() {
        const navStyle = {
            color: 'white',
            textDecoration: 'none',
            marginTop: '0.5em',
            marginBottom: '0.5em'
        }
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    {/* <NavbarBrand style={navStyle}>Portland HR App</NavbarBrand> */}
                    <Link className='mx-3' style={navStyle} to="/">Portland HR App</Link>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className='mx-3' style={navStyle} to="/Request">Request</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='mx-3' style={navStyle} to="/Manage">Manage</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
    
}

export default NavigationBar