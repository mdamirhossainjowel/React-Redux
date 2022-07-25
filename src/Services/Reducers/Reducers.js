import { DECREMENT, INCREMENT, INCREMENTBYVALUE, RESET } from "../Constants/Constats";

const initialCount={
    count:0
}

const counterReducer=(state=initialCount,action)=>{
switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            count:state.count+1,
        }
    case DECREMENT:
        return{
            ...state,
            count:state.count-1,
        }
    case RESET:
        return{
            ...state,
            count:0,
        }
    case INCREMENTBYVALUE:
        return{
            ...state,
            count:state.count+action.payload,
        }

    default:
        return state;
}
}

export default counterReducer