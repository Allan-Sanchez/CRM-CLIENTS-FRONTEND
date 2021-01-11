import React, { useState, useEffect, useContext } from "react";
import OrderContext from "../../context/orders/OrderContext";
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";
import { PushSpinner } from "react-spinners-kit";

const GET_CLIENTS = gql`
  query getClientsSeller {
    getClientsSeller {
      id
      name
      lastName
    }
  }
`;


const SelectClient = () => {
  const [CurrentClient, setCurrentClient] = useState({});
  const orderContext = useContext(OrderContext);
  const { getClientState } = orderContext;

  useEffect(() => {
    getClientState(CurrentClient);
  }, [CurrentClient]);
  const { loading, data } = useQuery(GET_CLIENTS);
  
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/3 sm:left-1/2 ">
        <PushSpinner size={50} color="#686769" loading={loading} />
      </div>
    );
  }
  const {getClientsSeller} = data;

  return (
    <>
      <div className="text-gray-500 border-l-4 border-gray-400 bg-white px-2 py-3 mb-2">
        <p className="text-gray-400 text-base">
          <span className="font-bold text-indigo-500 mr-1">1.- </span>
          Select a client to the order.
        </p>
        <Select
          className="mt-1"
          options={getClientsSeller}
          onChange={(option) => setCurrentClient(option)}
          getOptionLabel={(options) => options.name}
          getOptionValue={(options) => options.id}
          placeholder="Select Client"
        />
      </div>
    </>
  );
};

export default SelectClient;
