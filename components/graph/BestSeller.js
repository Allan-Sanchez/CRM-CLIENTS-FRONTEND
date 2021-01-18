import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PushSpinner } from "react-spinners-kit";

const GET_BEST_SELLER = gql`
  query getBestSellers {
    getBestSellers {
      total
      seller {
        name
      }
    }
  }
`;


const BestSeller = () => {
  const { loading, data, startPolling, stopPolling } = useQuery(
    GET_BEST_SELLER
  );

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/3 sm:left-1/2 ">
        <PushSpinner size={50} color="#686769" loading={loading} />
      </div>
    );
  }

  const { getBestSellers } = data;
  const dataSeller = [];
  getBestSellers.map((item, index) => {
    dataSeller[index] = {
      ...item.seller[0],
      total: item.total,
    };
  });

  return (
      <div className="">
        <h1 className="text-center py-5 text-2xl font-bold text-gray-800">
          The best Seller
        </h1>
        <ResponsiveContainer
            width={'98%'}
            height={350}
        >
          <BarChart
            width={500}
            height={300}
            data={dataSeller}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default BestSeller;
