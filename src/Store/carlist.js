import { createSlice, nanoid } from "@reduxjs/toolkit";

const carListSlice = createSlice({
    name: "form",
    initialState: {
        searchTerm: "",
        data: []
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            // console.log(action.payload);
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            state.data.push({
                name: action.payload.name,
                price: action.payload.price,
                id: nanoid()
            });
            // console.log("addCar => ", state.data);
        },
        removeCar: (state, action) => {
            state.data = state.data.filter(element => element.id !== action.payload);
            // console.log("removeCar => ", state.data);
        }
    }
});

export const { changeSearchTerm, addCar,  removeCar} = carListSlice.actions;
export const carListReducer = carListSlice.reducer;