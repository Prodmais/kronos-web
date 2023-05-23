import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loadingSystem: false,
};

export const SystemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setLoadingSystem: (state, action) => {
            state = {
                ...state,
                loadingSystem: action.payload
            }
            return state;
        },
    }
});

export const { setLoadingSystem } = SystemSlice.actions;

export default SystemSlice.reducer;