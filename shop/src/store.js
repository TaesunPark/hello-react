import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from './store/userSlice.js'
import cart from './store/cartSlice.js'

// useState() 역할임
// state 하나를 slice 라고 부름


export default configureStore(
    {
        reducer : {
            user : user.reducer,
            cart : cart.reducer
        }
    }
)