import {GET_CLIENTS, GET_PRODUCTS, UPDATE_PRODUCT_QTY} from "../../types";

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
        case UPDATE_PRODUCT_QTY:
            return{
                ...state,
                products : state.products.map( product => product.id === action.payload.id ? product = action.payload : product)
            }
        default:
            return state
    }
}

export default OrderReducer;