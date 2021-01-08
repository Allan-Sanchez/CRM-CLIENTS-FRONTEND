import React,{useReducer} from 'react';
import {GET_CLIENTS} from "../../types";
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
    }
    return ( 
        <OrderContext.Provider value={{getClientState}}>
            {children}
        </OrderContext.Provider>
     );
}
 
export default OrderState;