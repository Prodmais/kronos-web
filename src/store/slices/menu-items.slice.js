import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const menuItemSlice = createSlice({
  name: 'menuItems',
  initialState,
  reducers: {
    setMenuItems: (state, action) => {

      state = {
        ...state,
        items: [...action.payload]
      }

      return state;
    },
  },
});

export const { setMenuItems } = menuItemSlice.actions;

export default menuItemSlice.reducer;