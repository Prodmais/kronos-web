import { configureStore } from '@reduxjs/toolkit';
import menuItemReducer from './slices/menu-items.slice';
import authReducer from './slices/auth.slice';

const store = configureStore ({
    reducer: {
        auth: authReducer,
        menuItem: menuItemReducer
    }
});

export default store;