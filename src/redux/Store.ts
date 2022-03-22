import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counter/counterSlice';
import todoSlice from "../features/todo/todoSlice";
export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        todoSlicer: todoSlice
      
    }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch