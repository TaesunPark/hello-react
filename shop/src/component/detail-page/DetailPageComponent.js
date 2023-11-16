import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components'

function DetailPageComponent(props) {

    let [count, setCount] = useState(0);
    let { id } = useParams();
    let img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes" + (Number(id) + 1);
    let [isVisible, setIsVisible] = useState(true);

    let 찾은상품 = props.shoes.find(function (x) {
        return x.id == id;
    });

    let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
    `

    // html 렌더링 후에 동작함.
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    })

    return (
        <div className="container">

            <SaleComponent isVisible = {isVisible}/>

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
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <YellowBtn>주문</YellowBtn>
            </div>
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

export default DetailPageComponent;