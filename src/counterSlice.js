import {createSlice} from '@reduxjs/toolkit'

const cart = JSON.parse(localStorage.getItem('cart')) || {products: []}
    
const size = cart.products.length

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        value : size
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer 