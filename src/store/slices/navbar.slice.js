import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectName: '',
};

export const NavbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setProjectNameNavbar: (state, action) => {
            state = {
                ...state,
                projectName: action.payload
            }
            return state;
        },
    }
});

export const { setProjectNameNavbar } = NavbarSlice.actions;

export default NavbarSlice.reducer;