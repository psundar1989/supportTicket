import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "../slice/layoutSlice";
 import { setSessionStorage } from "@/utils/commonFunctions";
 import profileSlice from "../slice/profileSlice";

export const store = configureStore({
    reducer: {
        layoutSlice: layoutSlice,
        profileSlice:profileSlice
        // Reducers goes here
    },
});
store.subscribe(() => {
    const { layoutSlice} = store.getState();
    const { layoutModeType } = layoutSlice;
    setSessionStorage("layoutState", layoutSlice);

});
