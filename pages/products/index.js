import Link from 'next/link'; 
import TableComponent from "../../components/products/TableComponent"
import {gql,useQuery} from "@apollo/client"
import { PushSpinner } from "react-spinners-kit";

const GET_PRODUCTS = gql`
query getProducts{
  getProducts{
    id
    name
    stock
    price
    createdAt
  }
}
`;

const Products = () => {
  const {loading,data} = useQuery(GET_PRODUCTS);
  const titleTable = ['Name','stock','price','Created','Actions'];
  
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/3 sm:left-1/2 ">
        <PushSpinner size={50} color="#686769" loading={loading} />
      </div>
    );
  }
  return (
    <div className="p-10 w-full min-w-full  flex flex-col justify-center">
      <div className="sm:flex justify-between items-center px-10 sm:mb-4 mx-auto sm:mx-0">
        <h1 className="text-center font-bold text-4xl text-indigo-500 block">
          Products
        </h1>
        <Link href="/products/new/product">
          <button
            className="bg-blue-200 border border-gray-300 rounded-2xl text-indigo-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            New Product
          </button>
        </Link>
      </div>

      <TableComponent title={titleTable} body={data.getProducts} />

      <div className="py-2 flex justify-center md:justify-end">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            <li>
              <a
                href="#pablo"
                className="first:ml-0 text-2xl font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-gray-400 text-gray-100"
              >
                <i className="bx bxs-chevron-left"></i>
              </a>
            </li>

            <li>
              <a
                href="#pablo"
                className="first:ml-0 text-2xl font-semibold flex w-12 h-12 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-gray-400 text-gray-100"
              >
                <i className="bx bx-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Products;
