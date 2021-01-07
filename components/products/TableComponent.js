import React from 'react'
import RowComponent from "./RowComponent";


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
          <RowComponent key={index}
            data={item}
            title={title}
          ></RowComponent>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
