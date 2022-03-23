import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counter/counterSlice';
import todoSlice from "../features/todo/todoSlice";
import { postApi } from "../services/post";
export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        todoSlicer: todoSlice,
        [postApi.reducerPath]: postApi.reducer,
      
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat([postApi.middleware]),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch