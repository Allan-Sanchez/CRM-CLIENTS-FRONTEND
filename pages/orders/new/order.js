import { useState, useContext, useEffect } from "react";
import SelectClient from "../../../components/orders/SelectClient";
import SelectProduct from "../../../components/orders/SelectProduct";
import ListOrder from "../../../components/orders/ListOrder";
import Total from "../../../components/orders/Total";
import OrderContext from "../../../context/orders/OrderContext";
const Order = () => {
  const orderContext = useContext(OrderContext);
  const [validateButton, setValidateButton] = useState(false);
  const { client, products, total } = orderContext;

  useEffect(() => {
    validateOrder();
  }, [client, products]);

  const validateOrder = async () => {
    let validated = await products.every(product => product.quantity > 0 && total > 0 && client.length > 0);
    setValidateButton(validated);
    return validated;
  };
  return (
    <div className="sm:p-10 w-full min-w-full  flex justify-center">
      <div className="w-full sm:w-10/12 lg:w-3/5 bg-gray-100 p-10 rounded-xl">
        <h1 className="text-center font-bold text-4xl text-indigo-500 block mb-3">
          New Order
        </h1>

        <form>
          <SelectClient></SelectClient>
          <SelectProduct></SelectProduct>
          <ListOrder></ListOrder>
          <Total></Total>
          {!validateButton ? (
            <div className="flex justify-center mt-3">
              <button
                className="w-1/2 text-indigo-500 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
                <i className="bx bx-shopping-bag mr-2"></i> New Order
              </button>
            </div>
          ): null}
        </form>
      </div>
    </div>
  );
};

export default Order;
