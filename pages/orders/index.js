import Link from "next/link";

const Orders = () => {
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

        <div className="bg-gray-100 mt-4 w-full pt-10 grid lg:grid-cols-2 rounded-xl border-t-8 border-green-500">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-user text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Client
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">Allan Edrey Sanchez Rixtun</h3>
                </div>
              </div>

              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-envelope text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Email
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">asanchezrixtun@gmail.com.</h3>
                </div>
              </div>

              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-phone text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Phone
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">(502) 4512-4852</h3>
                </div>
              </div>
            </div>
            <div className="my-5 mx-2">
              <select className="w-full sm:w-1/2 border bg-blue-200 text-indigo-800 font-bold rounded-xl px-3 py-3 outline-none">
                <option className="py-1">Option 2</option>
                <option className="py-1">Option 1</option>
                <option className="py-1">Option 3</option>
              </select>
            </div>
          </div>

          <div className="w-full grid  border-b-2 border-gray-200 ">
            <div className="w-full flex justify-start lg:justify-end">
              <div className="w-36 bg-blue-500 h-10  rounded-r-xl lg:rounded-r-none lg:rounded-l-xl  flex items-center justify-start lg:justify-end ">
                <i className="bx bxs-cart text-white"></i>
                <h2 className="text-white font-bold text-center p-2">
                  Product List
                </h2>
              </div>
            </div>
            <table className="mx-5 mt-3">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Allan Sanchez</td>
                  <td className="text-right">Q100.25</td>
                </tr>

                <tr>
                  <td className="text-center">Allan Sanchez</td>
                  <td className="text-right">Q100.25</td>
                </tr>

              </tbody>
            </table>
            <div className="w-full flex justify-end my-5">
              <button
                className="bg-red-200 border border-gray-300 rounded-2xl text-red-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Delete Order
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 mt-4 w-full pt-10 grid lg:grid-cols-2 rounded-xl border-t-8 border-yellow-500">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-user text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Client
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">Allan Edrey Sanchez Rixtun</h3>
                </div>
              </div>

              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-envelope text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Email
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">asanchezrixtun@gmail.com.</h3>
                </div>
              </div>

              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-phone text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Phone
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">(502) 4512-4852</h3>
                </div>
              </div>
            </div>
            <div className="my-5 mx-2">
              <select className="w-1/2 border bg-blue-200 text-indigo-800 font-bold rounded-xl px-3 py-3 outline-none">
                <option className="py-1">Option 2</option>
                <option className="py-1">Option 1</option>
                <option className="py-1">Option 3</option>
              </select>
            </div>
          </div>

          <div className="w-full grid  border-b-2 border-gray-200 ">
            <div className="w-full flex justify-start lg:justify-end">
              <div className="w-36 bg-blue-500 h-10  rounded-r-xl lg:rounded-r-none lg:rounded-l-xl  flex items-center justify-start lg:justify-end ">
                <i className="bx bxs-cart text-white"></i>
                <h2 className="text-white font-bold text-center p-2">
                  Product List
                </h2>
              </div>
            </div>
            <table className="mx-5 mt-3">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Allan Sanchez</td>
                  <td className="text-right">Q100.25</td>
                </tr>

                <tr>
                  <td className="text-center">Allan Sanchez</td>
                  <td className="text-right">Q100.25</td>
                </tr>

              </tbody>
            </table>
            <div className="w-full flex justify-end my-5">
              <button
                className="bg-red-200 border border-gray-300 rounded-2xl text-red-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Delete Order
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 mt-4 w-full pt-10 grid lg:grid-cols-2 rounded-xl border-t-8 border-red-500">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-user text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Client
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">Allan Edrey Sanchez Rixtun</h3>
                </div>
              </div>

              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-envelope text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Email
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">asanchezrixtun@gmail.com.</h3>
                </div>
              </div>

              <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
                <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
                  <i className="bx bxs-phone text-white"></i>
                  <h2 className="text-white font-bold text-center p-2">
                    Phone
                  </h2>
                </div>
                <div className="w-3/4 mx-auto px-2">
                  <h3 className="text-center">(502) 4512-4852</h3>
                </div>
              </div>
            </div>
            <div className="my-5 mx-2">
              <select className="w-1/2 border bg-blue-200 text-indigo-800 font-bold rounded-xl px-3 py-3 outline-none">
                <option className="py-1">Option 2</option>
                <option className="py-1">Option 1</option>
                <option className="py-1">Option 3</option>
              </select>
            </div>
          </div>

          <div className="w-full grid  border-b-2 border-gray-200 ">
            <div className="w-full flex justify-start lg:justify-end">
              <div className="w-36 bg-blue-500 h-10  rounded-r-xl lg:rounded-r-none lg:rounded-l-xl  flex items-center justify-start lg:justify-end ">
                <i className="bx bxs-cart text-white"></i>
                <h2 className="text-white font-bold text-center p-2">
                  Product List
                </h2>
              </div>
            </div>
            <table className="mx-5 mt-3">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Allan Sanchez</td>
                  <td className="text-right">Q100.25</td>
                </tr>

                <tr>
                  <td className="text-center">Allan Sanchez</td>
                  <td className="text-right">Q100.25</td>
                </tr>

              </tbody>
            </table>
            <div className="w-full flex justify-end my-5">
              <button
                className="bg-red-200 border border-gray-300 rounded-2xl text-red-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Delete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
