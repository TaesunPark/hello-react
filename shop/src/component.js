import React from "react";

function Item(props) {
    let img_dir = "";

    switch (props.idx){
        case 0:
            img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes1.jpg?raw=true";
            break;
        case 1:
            img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes2.jpg?raw=true";
            break;
        case 2:
            img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes3.jpg?raw=true";
            break;        
    }

    return (
        <div>                        
            <img src={img_dir} width="80%" />
            <h4>{props.s_data[props.idx].title}</h4>
            <p>{props.s_data[props.idx].content}</p>
            <p>{props.s_data[props.idx].price}</p>
        </div>
    );
}

export default Item;
