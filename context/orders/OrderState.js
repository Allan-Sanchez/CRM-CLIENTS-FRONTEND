import React,{useReducer} from 'react';
import {GET_CLIENTS, GET_PRODUCTS, UPDATE_PRODUCT_QTY} from "../../types";
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';


const OrderState = ({children}) => {

    const initialState = {
        clients: {},
        products:[],
        total:0
    }
    const [state,dispatch] = useReducer(OrderReducer,initialState);

    const getClientState = (client) =>{
        dispatch({
            type:GET_CLIENTS,
            payload:client
        })
    };

    const getProductsState = (products) =>{
        dispatch({
            type:GET_PRODUCTS,
            payload:products
        })
    }

    const updateProductState = (product) =>{
        dispatch({
            type:UPDATE_PRODUCT_QTY,
            payload:product
        })
    }
    return ( 
        <OrderContext.Provider 
        value={{
            products : state.products,    
            getClientState, 
            getProductsState,
            updateProductState
            }}>
            {children}
        </OrderContext.Provider>
     );
}
 
export default OrderState;