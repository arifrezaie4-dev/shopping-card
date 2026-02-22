import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [
            {
                id: 1,
                name: "Xiaomi Mi Band 5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                image: "./images/product-1.jpg",
                price: 199,
            },
            {
                id: 2,
                name: "Big Power Sound Speaker",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                image: "./images/product-2.jpg",
                price: 279,
            },
            {
                id: 3,
                name: "WiFi Security Camera",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                image: "./images/product-3.jpg",
                price: 399,
            },
            {
                id: 4,
                name: "PX7 Wireless Headphones",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                image: "./images/product-4.jpg",
                price: 100,
            }
        ]
    },
    reducers: {

    }
})
export default productSlice.reducer