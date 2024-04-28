import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        resId: null,
        items: [],
        resData: null,
        price: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const { resId, itemData, resData, itemPrice } = action.payload;

            if (state.resId === null) {
                state.resId = resId;
                state.resData = resData;
            }

            const existingItemIndex = state.items.findIndex(
                (item) => item.itemId === itemData.id
            );

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count++;
                state.price += itemPrice;
            } else {
                state.items.push({
                    itemId: itemData.id,
                    count: 1,
                    itemData: itemData,
                });
                state.price += itemPrice;
            }
        },
        removeItem: (state, action) => {
            const { itemData, itemPrice } = action.payload;

            const existingItemIndex = state.items.findIndex(
                (item) => item.itemId === itemData.id
            );

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count--;

                if (state.items[existingItemIndex].count === 0) {
                    state.items.splice(existingItemIndex, 1);
                }

                if (state.items.length === 0) {
                    state.resId = null;
                    state.resData = null;
                }
                state.price -= itemPrice;
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
