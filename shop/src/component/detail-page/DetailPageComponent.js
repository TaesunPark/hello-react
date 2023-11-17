import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import {Context1} from '../../App'
import { addData } from "../../store/shoesSlice";
import { useDispatch, useSelector } from "react-redux";

function DetailPageComponent(props) {

    let {재고} = useContext(Context1); // 보관함 해체해줌

    let [count, setCount] = useState(0);
    let { id } = useParams();
    let img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes" + (Number(id) + 1);
    let [isVisible, setIsVisible] = useState(true);
    let [isWarning, setWarning] = useState(false);
    let [formData, setFormData] = useState(' ');
    let [탭, 탭변경] = useState(0);

    let shoes = useSelector(state => state.shoes);
    let dispatch = useDispatch();

    let 찾은상품 = props.shoes.find(function (x) {
        return x.id == id;
    });

    let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
    `

    // html 렌더링 후에 동작함.
    // 만약 두번째 인자에 [count]를 작성하면 count 값이 변경될 때 실행됨.
    // [] 빈거 하면 1번만 실행됨.
    useEffect(() => {

        console.log(2)

        return () => {            
            // 코드~~~~~~
            // 여기는 useEffect가 실행되기 전에 실행됨.
            // 기존 코드 치우는 거 많이 사용함.
            clearTimeout();
            console.log(1);
        }
    })

    useEffect(() => {
        if (isNaN(formData) == true) {
            alert('ㄴㄴ');
        }
    }, [formData])


    return (
        <div className="container">

            <SaleComponent isVisible={isVisible} />

            {count}
            <button onClick={() => { setCount(count + 1) }}>버튼{count}</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={img_dir + '.jpg?raw=true'} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button onClick={()=>{                        
                        dispatch(addData(찾은상품));
                        // 해당 제품 추가하기
                        // 상품 리덕스로 관리하기                        
                    }} className="btn btn-danger">주문하기</button>
                </div>

                <input onChange={((e) => {
                    setFormData(e.target.value);
                })} />
                
            </div>

            <Nav variant="tabs" defaultActiveKey="link1">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent 탭 = {탭} 탭변경 = {탭변경}/>
            
        </div>
    );
}

function SaleComponent(props) {
    return (
        props.isVisible &&
        <div className="alert alert-warning">
            2초이내 구매시 할인
        </div>
    )
}

function TabContent(props){
    console.log(props.탭);

    if(props.탭 === 0){        
        return <div>내용0</div>
    }
    if(props.탭 === 1){        
        return <div>내용1</div>
    }
    if(props.탭 === 2){        
        return <div>내용2</div>
    }
}

export default DetailPageComponent;