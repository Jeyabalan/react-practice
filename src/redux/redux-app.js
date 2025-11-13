import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addition, substraction } from './store/action';

export default function ReduxAddition() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.AdditionReducers.result);

    return (<>React Redux - {result}
        <button onClick={() => dispatch(addition(11, 21))}> Addition </button>
        <button onClick={() => dispatch(substraction(11, 21))}> Subtraction </button>
    </>)
}