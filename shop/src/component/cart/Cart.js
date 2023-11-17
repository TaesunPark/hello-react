import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from '../../store/userSlice';
import { increase_cart } from '../../store/cartSlice';

function Cart() {

    const cart = useSelector(state =>
        state.cart
    )

    const user = useSelector(state =>
        state.user    
    )

    const shoes = useSelector(state =>
        state.shoes    
    )

    const dispatch = useDispatch(); // store.js로 요청 보내주는 함수임

    return (
        <div>
            {user.name}의 장바구니
            <button onClick={()=>{
                dispatch(increase());
            }}>나이 증가</button>
            {user.age}

            <Table>
                <thead>
                    <tr>
                        <th>상품번호</th>
                        <th>상품명</th>
                        <th>내용</th>
                        <th>가격</th>                        
                    </tr>
                </thead>
                <tbody>

                    {
                        shoes.map((item, i) => {                            
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>                                    
                                    <td>{item.price}</td>                                                                        
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>

    )
}

export default Cart;