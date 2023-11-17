import { createSlice } from "@reduxjs/toolkit";

const shoes = createSlice({
  name: 'shoes',
  initialState: [{
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000
  }],
  reducers: {
    addData: (state, action) => {
      state.push(action.payload)      
    }
  }
});

export default shoes;
export const { addData } = shoes.actions;
