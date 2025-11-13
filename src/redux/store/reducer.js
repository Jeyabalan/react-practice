import initialState from './state'
function AdditionReducers(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                result: action.payload.a + action.payload.b
            }
        case 'SUB':
            return {
                ...state,
                result: action.payload.a - action.payload.b
            }
            break
        default:
            return state
    }
}

export default AdditionReducers