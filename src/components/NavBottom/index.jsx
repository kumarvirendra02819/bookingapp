import React from 'react';
import './style.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStream, faSearch, faBinoculars, faCalendarCheck, faFlag } from '@fortawesome/free-solid-svg-icons'

function NavBottom() {
    return (
        <div className="nav-bg">
            <Navbar>
                <NavbarBrand href="/"><FontAwesomeIcon icon={faStream} color="#78E5A1" /></NavbarBrand>
                <Nav className="justify-content-end" >
                    <NavItem>
                        <NavLink disabled href="#"><FontAwesomeIcon icon={faSearch} /></NavLink>
                    </NavItem>
                    <NavItem className="active">
                        <NavLink href="#"><FontAwesomeIcon icon={faBinoculars} /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#"><FontAwesomeIcon icon={faCalendarCheck} /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#"><FontAwesomeIcon icon={faFlag} /></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBottom;
