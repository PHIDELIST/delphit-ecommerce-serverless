import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CartItem {
    id:number;
    name:string;
    price: number;
    quantity:number;
}
interface CartState {
    cartItems: CartItem[];
}
const initialState: CartState = {
    cartItems: [],
};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action:PayloadAction<CartItem>) => {
            state.cartItems.push(action.payload);
        },
    },
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;