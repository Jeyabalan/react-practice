import initialState from './state'
function additionReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            const { a, b } = action.payload
            return {
                ...state,
                result: a + b
            }
    }
}
export default additionReducer;