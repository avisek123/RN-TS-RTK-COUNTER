import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface TodoState{
    id:number,
    text:string,
  

}
type todoItems=string
interface TodoList{
    todos:TodoState[]
    todoItems:todoItems
}
const initialState:TodoList = {
    todos:[],
    todoItems:''
    
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        submitTodo:(state,action:PayloadAction<todoItems>)=>{
            state.todoItems = action.payload
        },
        addTodo:(state,action:PayloadAction<TodoState>)=>{
            state.todos.push(action.payload)
          
        },
        removeTodo:(state,action:PayloadAction<number>)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        }
    
    }
    
})

export const {
    addTodo,
    removeTodo,
    submitTodo
} = todoSlice.actions;
export default todoSlice.reducer;