import TableComponent from '../components/client/TableComponent';

const Clients = () => {

  const titleTable = ['Name','Email','Created','Actions'];
  const dataTable = [{
    name:'Allan',
    Email:'admin@admin.com',
    created:'10/12/20',
    id:'123'
  },
  {
    name:'Edrey',
    Email:'admin@admin.com',
    created:'10/12/20',
    id:'1234'
  },
  {
    name:'Edrey',
    Email:'admin@admin.com',
    created:'10/12/20',
    id:'1234'
  },
  {
    name:'Edrey',
    Email:'admin@admin.com',
    created:'10/12/20',
    id:'1234'
  },
  {
    name:'Edrey',
    Email:'admin@admin.com',
    created:'10/12/20',
    id:'1234'
  }];
  return (
    <div className="p-10 w-full min-w-full min-h-screen flex flex-col justify-center">
      <div className="flex justify-between px-10">
        <h1 className="text-center font-bold text-4xl text-indigo-500 block">
          Clients
        </h1>
        <button
          className="bg-blue-200 border border-gray-300 rounded-2xl text-indigo-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          New Client
        </button>
      </div>

      <TableComponent title={titleTable} body={dataTable} />
      
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
