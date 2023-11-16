import React from "react";
import { Link } from "react-router-dom";

function Item(props) {    
    const img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes";            
    let dir = "detail/" + (props.idx.id)
    return (
        
        <div>
            <Link to = {dir}>
                <img src={img_dir + (props.idx.id + 1) + '.jpg?raw=true'} width="80%" />
            </Link>                                    
            <h4>{props.idx.title}</h4>
            <p>{props.idx.content}</p>
            <p>{props.idx.price}</p>
        </div>
    );
}

export default Item;
