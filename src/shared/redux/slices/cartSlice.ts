import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../../features/cart/types";
import type { productType } from "../../data";

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productType>) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find(
                item => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find(
                item => item.id === action.payload
            );
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        i => i.id !== action.payload
                    )
                }
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});


export const { addToCart, removeFromCart, clearCart, decreaseQuantity, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;