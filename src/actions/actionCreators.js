import {
    ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO
} from "./index";


export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const editTodo = (payload)=>({
    type:EDIT_TODO,
    payload
});

export const removeTodo = (id)=>({
    type: REMOVE_TODO,
    id
});