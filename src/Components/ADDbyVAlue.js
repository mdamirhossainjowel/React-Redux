import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCounter } from '../Services/Actions/Action';

const ADDbyVAlue = () => {
   const count= useSelector(state=>state.count);
    const dispatch=useDispatch();
  
    const handleADD=()=>{
        dispatch(addCounter(15));
    }
    return (
        <div>
            <h1>ADD By 15</h1>
            <h3>Count: {count}</h3>
           
            <button onClick={handleADD}>ADD</button>
        </div>
    )
}

export default ADDbyVAlue