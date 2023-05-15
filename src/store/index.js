import { configureStore } from '@reduxjs/toolkit';
import menuItemReducer from './slices/menu-items.slice';

const store = configureStore ({
    reducer: {
        menuItem: menuItemReducer
    }
});

export default store;