import React from "react";
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Item from '../../component.js'
import data from '../../data.js'

function MainPageComponent(props) {

    let [shoes] = useState(data);

    return (
        <>
            <div className="main-bg"></div>
            <div>
                <Container>
                    <Row>
                        {
                            shoes.map((e, i) => {
                                return (
                                    <Col>
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