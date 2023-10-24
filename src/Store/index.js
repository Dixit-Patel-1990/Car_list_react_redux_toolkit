import { changeName, changePrice } from "./form";
import { formReducer } from "./form";
import { changeSearchTerm, addCar, removeCar } from "./carlist";
import { carListReducer } from "./carlist";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carListReducer,
  },
});

export { store, changeName, changePrice, changeSearchTerm, addCar, removeCar };
