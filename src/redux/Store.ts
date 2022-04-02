import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "../features/auth/AuthSlicer";
import CounterReducer from '../features/counter/counterSlice';
import modalSlice from "../features/modal/modalSlice";
import todoSlice from "../features/todo/todoSlice";
import { pokemon } from "../services/Pokemon";
import { postApi } from "../services/post";
export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        todoSlicer: todoSlice,
        authSlicer: authSlice,
        modalSlicer: modalSlice,
        [postApi.reducerPath]: postApi.reducer,
        [pokemon.reducerPath]: pokemon.reducer,
      
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat([postApi.middleware,pokemon.middleware]),
    

});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch