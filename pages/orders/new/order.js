import SelectClient from "../../../components/orders/SelectClient";
import SelectProduct from "../../../components/orders/SelectProduct";
import ListOrder from '../../../components/orders/ListOrder';
const Order = () => {
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

        <div className="flex justify-end">
        <button
              className=" bg-blue-200 border border-gray-300 rounded-2xl text-indigo-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              >
             Total Q
              <span className="ml-3">
                4500
              </span>
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
