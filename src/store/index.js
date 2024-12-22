import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/UsersSlice';
import { setupListeners } from '@reduxjs/toolkit/query';    
import { albumsApi } from './apis/albumsApi';

const store = configureStore({
    reducer:{
        users: usersReducer,
        albums: albumsApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
            .concat(albumsApi.middleware);
    }
});

setupListeners(store.dispatch);

export {
    store
};

export * from "./thunks";
export * from "./apis";
