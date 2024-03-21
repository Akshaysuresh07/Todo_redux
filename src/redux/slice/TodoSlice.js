import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        markTodo: (state, action) => { 
            state.todos = state.todos.map(todo => 
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            );
        }
    }
})

export const { addTodo,removeTodo,markTodo } = todoSlice.actions
export default todoSlice.reducer