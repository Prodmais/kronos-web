import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menuItemReducer from './slices/menu-items.slice';
import authReducer from './slices/auth.slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import systemReducer from './slices/system.slice';
import navbarReducer from './slices/navbar.slice';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    menuItem: menuItemReducer,
    system: systemReducer,
    navbar: navbarReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);