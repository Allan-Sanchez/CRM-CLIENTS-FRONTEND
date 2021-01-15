import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { PushSpinner } from "react-spinners-kit";
import OrderCard from '../../components/orders/StateOrder/OrderCard';
const GET_ORDERS = gql`
  query getOrdersSeller{
  getOrdersSeller{
    id
    order{
      id
      name
      quantity
      price
    }
    total
    client{
      id
      name
      lastName
      email
      phone
    }
    state
  }
}
`;

const Orders = () => {
  const { loading, data } = useQuery(GET_ORDERS);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/3 sm:left-1/2 ">
        <PushSpinner size={50} color="#686769" loading={loading} />
      </div>
    );
  }
  const {getOrdersSeller} = data
  return (
    <>
      <div className="mt-4 flex flex-col justify-center lg:mx-10">
        <div className="sm:flex justify-between items-center px-10 sm:mb-4 mx-auto sm:mx-0">
          <h1 className="text-center font-bold text-4xl text-indigo-500 block">
            Orders
          </h1>
          <Link href="/orders/new/order">
            <button
              className="bg-blue-200 border border-gray-300 rounded-2xl text-indigo-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              New Order
            </button>
          </Link>
        </div>

        { getOrdersSeller.map( orderItem => (
          <OrderCard key={orderItem.id} product={orderItem}> </OrderCard>
        ))}

        
      </div>
    </>
  );
};

export default Orders;
