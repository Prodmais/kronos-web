import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserAuthentication: (state, action) => {
            state = {
                ...state,
                isAuthenticated: action.payload
            }

            return state;
        }
    }
});