import React,{useState, useEffect} from 'react'
import {gql, useMutation} from '@apollo/client';
import Swal from "sweetalert2";


const UPDATE_ORDER = gql`
mutation updateOrder($id: ID!,$input: OrderInputUpdate){
  updateOrder(id: $id, input:$input){
    id
    state
  }
}
`;

const DELETE_ORDER = gql`
mutation deleteOrder($id: ID!){
  deleteOrder(id:$id)
}
`;

const GET_ORDERS = gql`
  query getOrdersSeller{
  getOrdersSeller{
    id
  }
}
`;


const OrderCard = ({ product }) => {
    const {
      id,
      total,
      client: { name, lastName, email, phone },
      order,
      state
    } = product;

    const [borderClass, setBorderClass] = useState('');
    const [stateOrder, setStateOrder] = useState(state);
    const [updateOrder] = useMutation(UPDATE_ORDER);
    const [deleteOrder] = useMutation(DELETE_ORDER,{
      update(cache){
        const {getOrdersSeller} = cache.readQuery({ query: GET_ORDERS});

        cache.writeQuery({
          query:GET_ORDERS,
          data: {
            getOrdersSeller : getOrdersSeller.filter( order => order.id !== id) 
          }
        })
      }
    });

  useEffect(() => {
        if (stateOrder) {
            setStateOrder(state);
        }
     handleBorderClass();

  }, [stateOrder])

  const handleBorderClass = () =>{
      if(state === "PENDING"){
           setBorderClass(' border-yellow-500 ');
      }else if (state === "CANCELLED") {
           setBorderClass(' border-red-500 ');
      }else{
           setBorderClass(' border-green-500');
      }
  }

  const handleSelectState = async(stateSelect) =>{
    
    try {
        const {data} = await updateOrder({
          variables:{
            id,
            input:{
              client:product.client.id,
              state: stateSelect
            }
          }
        });
        setStateOrder(data.updateOrder.state);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteOrder = () =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const {data} = await deleteOrder({
            variables:{
              id
            }
          })
          Swal.fire("Deleted!", data.deleteOrder, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  function currencyFormat(num) {
    return "Q " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className={`bg-gray-100 mt-4 w-full pt-10 grid lg:grid-cols-2 rounded-xl border-t-8 ${borderClass}`}>
      <div className="flex flex-col justify-between">
        <div>
          <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
            <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
              <i className="bx bxs-user text-white"></i>
              <h2 className="text-white font-bold text-center p-2">Client</h2>
            </div>
            <div className="w-3/4 mx-auto px-2">
              <h3 className="text-center">{`${name} ${lastName}`}</h3>
            </div>
          </div>

          <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
            <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
              <i className="bx bxs-envelope text-white"></i>
              <h2 className="text-white font-bold text-center p-2">Email</h2>
            </div>
            <div className="w-3/4 mx-auto px-2">
              <h3 className="text-center">{email}</h3>
            </div>
          </div>

          <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
            <div className="w-1/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
              <i className="bx bxs-phone text-white"></i>
              <h2 className="text-white font-bold text-center p-2">Phone</h2>
            </div>
            <div className="w-3/4 mx-auto px-2">
              <h3 className="text-center">{phone}</h3>
            </div>
          </div>
        </div>
        <div className="my-5 mx-2">
          <select className="w-full sm:w-1/2 border bg-blue-200 text-indigo-800 font-bold rounded-xl px-3 py-3 outline-none" value={stateOrder} onChange={ (e) =>{handleSelectState(e.target.value)}}>
            <option value="PENDING" className="py-1">PENDING</option>
            <option value="CANCELLED" className="py-1">CANCELLED</option>
            <option value="COMPLETED" className="py-1">COMPLETED</option>
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
            <th className="text-center">Qty</th>              
              <th className="text-center">price</th>
            </tr>
          </thead>
          <tbody>
          {order.map( item => (
                  
            <tr key={item.id}>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.quantity}</td>              
              <td className="text-right">{currencyFormat(item.price)}</td>
            </tr>
                  ))}

            <tr>
            <td></td>
              <td className="text-center font-bold text-indigo-800">
                Total to pay
              </td>
              <td className="text-right font-bold text-indigo-800">{currencyFormat(total)}</td>
            </tr>
          </tbody>
        </table>
        <div className="w-full flex justify-end my-5">
          <button
            className="bg-red-200 border border-gray-300 rounded-2xl text-red-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={handleDeleteOrder}
          >
            Delete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
