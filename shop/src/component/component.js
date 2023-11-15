import React from "react";

function Item(props) {    
    const img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes";        
    
    return (
        <div>                                    
            <img src={img_dir + (props.idx.id + 1) + '.jpg?raw=true'} width="80%" />
            <h4>{props.idx.title}</h4>
            <p>{props.idx.content}</p>
            <p>{props.idx.price}</p>
        </div>
    );
}

export default Item;
