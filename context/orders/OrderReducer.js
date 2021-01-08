import {GET_CLIENTS} from "../../types";

const OrderReducer = (state,action) =>{
    switch (action.type) {
        case GET_CLIENTS:
            return{
                ...state,
                clients: action.payload
            }
        default:
            return state
    }
}

export default OrderReducer;