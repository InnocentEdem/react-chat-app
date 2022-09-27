import chatReducer from './store';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const persistConfig = {
    key: 'counter',
    storage,
};

const reducers = combineReducers({chat: chatReducer})
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

