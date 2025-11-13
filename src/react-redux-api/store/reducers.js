import initialState from "./state";

function ToDoReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TODOS_LIST':
            return {
                ...state,
                toDoList: action.payload
            }
        default:
            return state
    }
}

export default ToDoReducer