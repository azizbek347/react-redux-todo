import {
    ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO
} from '../actions';
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:{
            const newState = [...state,action.payload];
            return newState;
        }
        case REMOVE_TODO:{
            const {id}=action;
            const newState = state.filter(el=>el.id!==id);
            return newState;
        }
        case EDIT_TODO:{
            const {payload:{id,text}}=action;
            const newState = [...state];
            newState.forEach(el=>el.id===id ? el.text = text : "");
            return newState;
        }
        default:
            return state;
    }
};

export default todoReducer;