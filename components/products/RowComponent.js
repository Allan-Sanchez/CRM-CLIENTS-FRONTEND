import { formatDistanceToNow } from "date-fns";
import {gql, useMutation} from '@apollo/client';
import Swal from "sweetalert2";
import Router from 'next/router';


const DELETE_PRODUCT = gql`
mutation deleteProduct($id: ID!){
  deleteProduct(id : $id)
}
`;

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      name
      stock
      price
      createdAt
    }
  }
`;
  
const RowComponent = ({ title, data }) => {
  const {id} = data
    const [deleteProduct] = useMutation(DELETE_PRODUCT,{
      update(cache){
        //get cache
        const {getProducts} = cache.readQuery({query:GET_PRODUCTS});
        //write cache
        cache.writeQuery({
          query:GET_PRODUCTS,
          data:{
            getProducts: getProducts.filter(  product=> product.id !== id)
          }
        })
      }
    });

    const handleDeleteClient = () => {
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
            const { data } = await deleteProduct({
              variables: {
                id,
              },
            });
            Swal.fire("Deleted!", data.deleteClient, "success");
          } catch (error) {
            console.log(error);
          }
        }
      });
    };
  
    const handleEditClient = () =>{
      Router.push({
        pathname:'/products/edit/[id]',
        query:{
          id
        }
      })
    }
  

  return (
    <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-800 text-right sm:text-center border border-b block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[0]}
        </span>
        {data.name}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[1]}
        </span>
        {data.stock > 25 ? (
          <span className=" text-green-700 text-lg font-semibold ">{data.stock}</span>
        ) : null}
        {data.stock <= 25 && data.stock > 10 ? (
          <span className=" text-yellow-700 text-lg font-semibold">{data.stock}</span>
        ) : null}

        {data.stock <= 10 ? (
          <span className=" text-red-700 text-lg font-semibold">{data.stock}</span>
        ) : null}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center lg:text-right block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[2]}
        </span>
        Q. {data.price}
        
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-right sm:text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[3]}
        </span>
        {formatDistanceToNow(new Date(data.createdAt))}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase ">
          {title[4]}
        </span>
        <button
            onClick={() => handleEditClient()}
          className="text-gray-800 bg-green-300  hover:bg-green-400 py-2 px-3 rounded-2xl"
        >
          <span className="hidden sm:inline-block">Edit</span>
          <i className="bx bx-pencil md:ml-2"></i>
        </button>
        <button
          className="text-gray-800  bg-red-300  hover:bg-red-400 py-2 px-3 rounded-2xl ml-2"
            onClick={() => handleDeleteClient()}
        >
          <span className="hidden sm:inline-block">Remove</span>
          <i className="bx bx-trash md:ml-2"></i>
        </button>
      </td>
    </tr>
  );
};

export default RowComponent;
