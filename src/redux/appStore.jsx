import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import foodaiReducer from "./foodaiSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        foodai: foodaiReducer,
    },
});

export default appStore;
