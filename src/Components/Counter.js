import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {decrementCounter, incrementCounter, resetCounter} from '../Services/Actions/Action'

const Counter = () => {
    const count= useSelector(state=>state.count);
    const dispatch=useDispatch();
    const handleIncrement=()=>{
        dispatch(incrementCounter());
    }
    const handledecrement=()=>{
        dispatch(decrementCounter());
    }
    const handlereset=()=>{
        dispatch(resetCounter());
    }
    return (
        <div>
            <h1>Counter APP</h1>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handledecrement}>Decrement</button>
            <button onClick={handlereset}>Reset</button>
        </div>
    )
}

export default Counter
