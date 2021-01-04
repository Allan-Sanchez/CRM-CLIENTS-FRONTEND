import {gql, useQuery} from '@apollo/client';
import TableComponent from '../components/client/TableComponent';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { PushSpinner } from "react-spinners-kit";
import {useRouter} from 'next/router'; 
import Link from 'next/link'; 

const GET_CLIENT = gql`
query getClientsSeller{
  getClientsSeller{
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
const Clients = () => {
    const router = useRouter();
      // try {
        const {data, loading} = useQuery(GET_CLIENT);
        if (loading) {
          return (
            <PushSpinner size={30} color="#686769" loading={loading} />
            )
          }
        if (!data.getClientsSeller) {
          console.log('test');
          router.push('/login')
          // console.log(data.getClientsSeller);
          return null
        }
        console.log(data.getClientsSeller)
      // } catch (error) {
      //   console.log(error);
      // }

  const titleTable = ['Name','Email','Created','Actions'];

  return (
    <div className="p-10 w-full min-w-full  flex flex-col justify-center">
      <div className="sm:flex justify-between items-center px-10 sm:mb-4 mx-auto sm:mx-0">
        <h1 className="text-center font-bold text-4xl text-indigo-500 block">
          Clients
        </h1>
        <Link href="/new/client">
        <button
          className="bg-blue-200 border border-gray-300 rounded-2xl text-indigo-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          New Client
        </button>
        </Link>
      </div>

      <TableComponent title={titleTable} body={data.getClientsSeller} />
      
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
            {/* <li>
              <a
                href="#pablo"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-indigo-500 text-gray-200"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-blue-500"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-blue-500"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-blue-500"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-blue-500"
              >
                5
              </a>
            </li>*/}
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

export default Clients;
