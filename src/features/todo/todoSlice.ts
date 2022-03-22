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
        },
        updateTodo:(state,action:PayloadAction<TodoState>)=>{
            const todo = state.todos.find(todo=>todo.id === action.payload.id)
            if(todo){
                state.todoItems = action.payload.text
                // update todo
                state.todos = state.todos.filter(todo=>todo.id === action.payload.id ? action.payload : todo)
            }
        },
        
        clearTodo:(state)=>{
            state.todoItems = ''
        },
        updateCompleteTodo:(state,action:PayloadAction<TodoState>)=>{
            const todo = state.todos.find(todo=>todo.id === action.payload.id)
            if(todo){
                state.todos = state.todos.filter(todo=>todo.id === action.payload.id ? action.payload : todo)
            }
        }
        
    
    }
    
})

export const {
    addTodo,
    removeTodo,
    submitTodo,
    updateTodo,
    clearTodo,
    updateCompleteTodo
} = todoSlice.actions;
export default todoSlice.reducer;