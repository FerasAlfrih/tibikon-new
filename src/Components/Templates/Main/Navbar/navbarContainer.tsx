import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import SiteLogo from '../../../../Assets/images/logo.png'
import React from "react";
import './style.scss';

const NavbarContainer: React.FC = () => {
    return (
        <Container fluid>
            <Navbar bg="transparent" sticky={"top"} expand={'sm'} collapseOnSelect={true}>
                <Navbar.Brand>
                    <Link to={'/'}><img src={SiteLogo} alt="التيبيكون" width={30} height={30}/> التيبيكون</Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" title={'الروابط'}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="navbar-elements">
                        <Nav.Link><Link to={"/guide"}>الدليل الانطاكي</Link></Nav.Link>
                        <Nav.Link><Link to={"/daily/readings"}>قراءات اليوم</Link></Nav.Link>
                        <Nav.Link><Link to={"/network"}>الشبكة الفصحية</Link></Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavbarContainer;