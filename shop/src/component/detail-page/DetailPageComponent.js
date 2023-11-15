import { useParams } from "react-router-dom";


function DetailPageComponet(props) {

    let {id} = useParams();    
    let img_dir = "https://github.com/codingapple1/codingapple1.github.io/blob/master/shop/shoes" + (Number(id) + 1);
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={img_dir + '.jpg?raw=true'} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default DetailPageComponet;