import {formatDistanceToNow} from 'date-fns';

const TableComponent = ({ title, body }) => {
  return (
    <table className="border-collapse w-full lg:mt-10 ">
      <thead>
        <tr>
          {title.map((item, index) => (
            <th
              key={index}
              className="p-3 font-bold uppercase bg-gray-400 text-gray-700 border border-gray-300 hidden lg:table-cell"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((item, index) => (
          <tr
            key={index}
            className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
          >
            <td className="w-full lg:w-auto p-3 text-gray-800 text-right sm:text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                {title[0]}
              </span>
              {`${item.name} ${item.lastName}`}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                {title[1]}
              </span>
              {item.email}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-right sm:text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                {title[2]}
              </span>
              {formatDistanceToNow(new Date(item.createdAt))}
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

              <a
                href="#"
                className="text-gray-800  bg-red-300  hover:bg-red-400 py-2 px-3 rounded-2xl ml-2"
              >
                <span className="hidden sm:inline-block">Remove</span>
                <i className="bx bx-trash md:ml-2"></i>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
