import React, { useEffect } from "react";
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Item from '../component'

function MainPageComponent({shoes,item}) {

    return (
        <>
            <div className="main-bg"></div>
            <div>
                <Container>
                    <Row>
                        {
                            shoes.map((e, i) => {
                                return (
                                    <Col key = {i}>
                                        <Item idx={shoes[i]} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MainPageComponent;