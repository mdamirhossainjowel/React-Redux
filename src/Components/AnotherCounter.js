import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetCounter } from '../Services/Actions/Action';

const AnotherCounter = () => {
   const count= useSelector(state=>state.count);
    const dispatch=useDispatch();
  
    const handlereset=()=>{
        dispatch(resetCounter());
    }
    return (
        <div>
            <h1>Reset Counter APP</h1>
            <h3>Count: {count}</h3>
           
            <button onClick={handlereset}>Reset</button>
        </div>
    )
}

export default AnotherCounter