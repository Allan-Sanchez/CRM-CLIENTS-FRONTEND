import Link from 'next/link';

const Orders = () => {
  return (
    <>
      <div className="p-10 w-full min-w-full  flex flex-col justify-center">
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

      
      </div>

    </>
  );
};

export default Orders;
