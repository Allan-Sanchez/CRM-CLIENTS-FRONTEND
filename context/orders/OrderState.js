import React,{useReducer} from 'react';
import {GET_CLIENTS, GET_PRODUCTS, UPDATE_PRODUCT_QTY, UPDATE_TOTAL} from "../../types";
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
         let newState;
         if (state.products.length > 0 ) {
             newState = products.map( product =>{
                 const newObject = state.products.find( productState => productState.id === product.id )
                 return {...product,...newObject}
             } )
         }else{
             newState = products
         }
        dispatch({
            type:GET_PRODUCTS,
            payload:newState
        })
    }

    const updateProductState = (product) =>{
        dispatch({
            type:UPDATE_PRODUCT_QTY,
            payload:product
        })
    }
    const updateTotal = () =>{
        dispatch({
            type:UPDATE_TOTAL
        })
    }

    return ( 
        <OrderContext.Provider 
        value={{
            client: state.clients,
            products : state.products,    
            total: state.total,
            getClientState, 
            getProductsState,
            updateProductState,
            updateTotal
            }}>
            {children}
        </OrderContext.Provider>
     );
}
 
export default OrderState;