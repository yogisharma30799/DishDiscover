import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CartSlice";

const Store = configureStore({
    reducer: {
        cart: CardSlice
    }
});

export default Store;