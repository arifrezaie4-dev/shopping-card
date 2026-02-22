import { createSlice } from "@reduxjs/toolkit";
const saveState = (state) => {
    localStorage.setItem('cart', JSON.stringify(state))
    console.log(localStorage);
    
}
const loadState = () => {
    const storage = localStorage.getItem('cart')
    return storage ? JSON.parse(storage) : []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : loadState()
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const existing = state.items.find((item) => item.id === product.id)

            if (existing) {
                state.qty += 1
            }else {
            state.items.push({...product, qty: 1})
            }
            saveState(state.items)
        },
        increment: (state, action) => {
            const id = action.payload
            const product = state.items.find((item) => item.id === id)

            if (product) {
                product.qty += 1
            }
            saveState(state.items)
        },
        decrement: (state, action) => {
            const id = action.payload
            const product = state.items.find((item) => item.id === id)

            if (product && product.qty > 1) {
                product.qty -= 1
            }else {
                state.items = state.items.filter((item) => item.id !== id)
            }
            saveState(state.items)
    },
    removeFromCart: (state, action) => {
        const id = action.payload
        const product = state.items.find((item) => item.id === id)
        if (product) {
        state.items = state.items.filter((item) => item.id !== id)
        }
        saveState(state.items)
    },
    removeCart: (state) => {
        state.items = [];
        saveState(state.items)
    }
}})
export const {addToCart, increment, decrement, removeFromCart, removeCart} = cartSlice.actions
export default cartSlice.reducer