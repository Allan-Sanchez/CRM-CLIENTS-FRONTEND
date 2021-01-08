import {GET_CLIENTS, GET_PRODUCTS} from "../../types";

const OrderReducer = (state,action) =>{
    switch (action.type) {
        case GET_CLIENTS:
            return{
                ...state,
                clients: action.payload
            }
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default OrderReducer;