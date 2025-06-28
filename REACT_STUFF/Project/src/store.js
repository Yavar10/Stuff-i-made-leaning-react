import { configureStore } from "@reduxjs/toolkit";
import PSlice from "./redux/PSlice";

const store = configureStore({reducer: {
        PSlice:PSlice,
    },});
export default store;
