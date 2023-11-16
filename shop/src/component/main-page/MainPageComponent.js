import React, { useEffect } from "react";
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import Item from '../component'
import axios from 'axios'
import ReactLoading from 'react-loading'

const LodingComponent = () => (
    <ReactLoading type={'spin'} color={'#ffffff'} height={50} width={50} />
);

function MainPageComponent({ shoes, item, setShoes }) {
    let [cnt, setCnt] = useState(1);

    useEffect(() => {
        setCnt(cnt + 1);
    }, [shoes]);

    return (
        <>
            <div className="main-bg"></div>
            <div>
                <Container>
                    <Row>
                        {
                            shoes.map((e, i) => {
                                return (
                                    <Col style={{ flex: '0 0 33.33%' }}>
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
            <br></br>

            <button onClick={() => {
                // 로딩중 UI 띄우기 ~                
                let request_link = 'https://codingapple1.github.io/shop/data' + (cnt) + '.json';
                axios.get(request_link).then((결과) => {
                    console.log(결과.data)
                    let copy = [...shoes, ...결과.data];
                    console.log(copy);
                    setShoes(copy);
                    // 로딩중 UI 숨기기 ~
                })
                    .catch(() => {
                        alert('더 이상 추가할 수 없습니다.');
                        // 로딩중 UI 숨기기
                    })
            }}>추가</button>            
        </>
    )
}

export default MainPageComponent;