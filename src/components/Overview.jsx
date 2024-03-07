import React from 'react';
import Performance from './Performance';

const Overview = ({ data }) => {
  const {
    todayLow,
    todayHigh,
    marketCap,
    current,
    ...rest
  } = data;

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {/* Performance  */}
      <Performance
        data = {data}
      />
      

    {/*  */}
      <h2 className="text-xl font-bold mt-6 mb-4">Fundamentals</h2>
      {Object.entries(rest).map(([key, value]) => (
        <div className="flex items-center justify-between text-gray-700 py-2 border-b border-gray-200" key={key}>
          <span>{key}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default Overview;
