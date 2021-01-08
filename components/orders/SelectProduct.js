import React, { useState, useEffect, useContext } from "react";
import OrderContext from "../../context/orders/OrderContext";
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";
import { PushSpinner } from "react-spinners-kit";

const GET_PRODUCTS = gql`
query getProducts{
  getProducts{
    id
    name
    stock
    price
    createdAt
  }
}
`;
const SelectProduct = () => {
  const [productSelected, setProductSelected] = useState([]);
  const orderContext = useContext(OrderContext);
  const { getProductsState } = orderContext;
  const { loading, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    getProductsState(productSelected);
  }, [productSelected]);
  
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/3 sm:left-1/2 ">
        <PushSpinner size={50} color="#686769" loading={loading} />
      </div>
    );
  }
  const {getProducts} = data;

  return (
    <>
      <div className="text-gray-500 border-l-4 border-gray-200 bg-white px-2 py-3 mb-2">
        <p className="text-gray-400 text-base">
          <span className="font-bold text-indigo-500 mr-1">2.- </span>
          Add products at the order.
        </p>
        <Select
          className="mt-1"
          options={getProducts}
          isMulti={true}
          onChange={(option) => setProductSelected(option)}
          getOptionLabel={(options) => `${options.name} - ${options.stock} Available`}
          getOptionValue={(options) => options.id}
          placeholder="Select Products"
        />
      </div>
    </>
  );
};

export default SelectProduct;
