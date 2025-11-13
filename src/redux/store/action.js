export const addition = (a, b) => ({
    type: 'ADD',
    payload: { a, b }
});

export const substraction = (a, b) => ({
    type: 'SUB',
    payload: { a, b }
})