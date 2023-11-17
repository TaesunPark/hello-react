import { createSlice } from "@reduxjs/toolkit"

let cart = createSlice(
    {
        name :'cart',
        initialState : [
            {id : 0, name : 'White and Black', count : 2},
            {id : 1, name : 'Grey Yordan', count : 1}],
        reducers : {
            increase_cart(state, value){                
                state[value.payload.id].count += 1
            }
        }   
    }
)

export let {increase_cart} = cart.actions;

export default cart;