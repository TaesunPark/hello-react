import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name :'state 이름 ~~',
    initialState : {'name' : 'kim', 'age' : 20},
    reducers : {
        changeName(state){            
            state.name = 'park'
        },
        increase(state){
            state.age += 1
        }
        
    }
    // 1. state 수정해주는 함수만들기
    // 2. export 해야함
})

export let {changeName, increase} = user.actions;
export default user;