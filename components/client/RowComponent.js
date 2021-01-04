import { formatDistanceToNow } from "date-fns";
import Swal from "sweetalert2";
import { gql, useMutation } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id)
  }
`;
const GET_CLIENT = gql`
  query getClientsSeller {
    getClientsSeller {
      id
      name
      lastName
      company
      email
      phone
      seller
      createdAt
    }
  }
`;
const RowComponent = ({ data, title }) => {
  const { name, lastName, email, createdAt, id } = data;
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    update(cache) {
      //get cache
      const { getClientsSeller } = cache.readQuery({ query: GET_CLIENT });

      //update cache
      cache.writeQuery({
        query: GET_CLIENT,
        data: {
          getClientsSeller: getClientsSeller.filter(
            (currentClient) => currentClient.id !== id
          ),
        },
      });
    },
  });

  const handleDeleteClient = (id) => {
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
          const { data } = await deleteClient({
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

  return (
    <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-800 text-right sm:text-center border border-b block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[0]}
        </span>
        {`${name} ${lastName}`}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[1]}
        </span>
        {email}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-right sm:text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[2]}
        </span>
        {formatDistanceToNow(new Date(createdAt))}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase ">
          {title[3]}
        </span>
        <a
          href="#"
          className="text-gray-800 bg-green-300  hover:bg-green-400 py-2 px-3 rounded-2xl"
        >
          <span className="hidden sm:inline-block">Edit</span>
          <i className="bx bx-pencil md:ml-2"></i>
        </a>
        <button
          className="text-gray-800  bg-red-300  hover:bg-red-400 py-2 px-3 rounded-2xl ml-2"
          onClick={() => handleDeleteClient(id)}
        >
          <span className="hidden sm:inline-block">Remove</span>
          <i className="bx bx-trash md:ml-2"></i>
        </button>
      </td>
    </tr>
  );
};

export default RowComponent;
