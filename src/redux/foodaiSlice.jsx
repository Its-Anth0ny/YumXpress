import { createSlice } from "@reduxjs/toolkit";

const foodaiSlice = createSlice({
    name: "foodai",
    initialState: {
        isOpen: false,
        foodSuggessions: [],
    },
    reducers: {
        setFoodaiBoxOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
        setFoodSuggessions: (state, action) => {
            state.foodSuggessions = action.payload;
        },
    },
});

export const { setFoodSuggessions, setFoodaiBoxOpen } = foodaiSlice.actions;
export default foodaiSlice.reducer;
