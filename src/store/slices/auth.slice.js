import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserAuthentication: (state, action) => {
            state = {
                ...state,
                ...action.payload
            }
            return state;
        },
        clearUserAuthentication: (state) => {
            state = {
                ...state,
                ...initialState
            }

            return state;
        }
    }
});

export const { setUserAuthentication, clearUserAuthentication } = AuthSlice.actions;

export default AuthSlice.reducer;