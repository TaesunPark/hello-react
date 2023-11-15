import React, { useEffect } from "react";
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Item from '../component'

function MainPageComponent({ shoes, item, setShoes }) {

    return (
        <>
            <div className="main-bg"></div>
            <div>
                <Container>
                    <Row>
                        {
                            shoes.map((e, i) => {
                                return (
                                    <Col key={i}>
                                        <Item idx={shoes[i]} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>
            
            <button onClick={
                () => {
                    let copy = [...shoes];
                    copy.sort((a, b) => {
                        return a.title.localeCompare(b.title);
                    })
                    setShoes(copy);
                }
            } >글 정렬</button>
        </>
    )
}

export default MainPageComponent;