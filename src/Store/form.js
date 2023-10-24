import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./index";
const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        price: 0
    },
    reducers: {
        changeName: (state, action) => {
            // console.log(state, action);
            state.name = action.payload;
        },
        changePrice: (state, action) => {
            // console.log(state, action);
            state.price = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCar, (state, action) => {
            state.name = "";
            state.price = 0;
        });
    }
});

export const { changeName, changePrice } = formSlice.actions;
export const formReducer = formSlice.reducer;