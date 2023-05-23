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
                isAuthenticated: action.payload
            }

            return state;
        }
    }
});

export const { setUserAuthentication } = AuthSlice;

export default AuthSlice.reducer;