import { DECREMENT, INCREMENT, INCREMENTBYVALUE, RESET } from "../Constants/Constats";


export const incrementCounter=()=>{
    return{
        type:INCREMENT
    }
}
export const decrementCounter=()=>{
    return{
        type:DECREMENT
    }
}
export const resetCounter=()=>{
    return{
        type:RESET
    }
}
export const addCounter=(value)=>{
    return{
        type:INCREMENTBYVALUE,
        payload:value,
    }
}