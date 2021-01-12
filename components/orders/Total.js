import React,{useContext} from 'react'
import OrderContext from '../../context/orders/OrderContext';
const Total = () => {
  const orderContext = useContext(OrderContext);
  const {total} = orderContext;
  return (
    <div className="flex justify-end">
      <button
        className=" bg-blue-200 border border-gray-300 rounded-2xl text-indigo-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
      >
        Total Q<span className="ml-3">{total}</span>
      </button>
    </div>
  );
};

export default Total;
