import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodos: (state, action) => {
            state.todoList.push(action.payload)
        }
    }
});

export const {
    saveTodos
} = todoSlice.actions
export default todoSlice.reducer