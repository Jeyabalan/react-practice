import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addvalue } from './store/action';

export default function ReduxAddition() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.result)
    React.useEffect(() => {
        dispatch(addvalue(11, 21))
    }, [])
    
    return <>React - Redux - {result}</>
}