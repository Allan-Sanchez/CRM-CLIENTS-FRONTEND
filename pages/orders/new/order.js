import SelectClient from "../../../components/orders/SelectClient";
import SelectProduct from "../../../components/orders/SelectProduct";

const Order = () => {
  return (
    <div className="sm:p-10 w-full min-w-full  flex justify-center">
      <div className="w-full sm:w-10/12 lg:w-1/2 bg-gray-100 p-10 rounded-xl">
        <h1 className="text-center font-bold text-4xl text-indigo-500 block mb-3">
          New Order
        </h1>
        <form>
        <SelectClient></SelectClient>
        <SelectProduct></SelectProduct>
        </form>
      </div>
    </div>
  );
};

export default Order;
