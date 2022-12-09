import React, {FC} from 'react';
import './style.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavbarContainer} from "./Navbar";

const Main: FC = () => {
    return (
        <Container fluid>
            <NavbarContainer/>
            <Row xs={18} xl={18}>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}
export default Main;