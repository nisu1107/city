import React from 'react'
import {Col, Container, Navbar } from 'react-bootstrap'


export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <div>
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container className="text-center text-muted">
                    <Col lg={12} className="text-center text-light">
                        {year} - All rights are reserved!!!
                    </Col>
                </Container>
            </Navbar>
        </div>
    )
}