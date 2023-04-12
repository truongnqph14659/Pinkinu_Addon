import React from 'react';

const FarmingPersonal = () => {
  return (
    <div className="relative rounded-[5px] bg-[#1B1B1B] px-10">
      <table className="w-full table-auto border-collapse text-left text-sm  text-white">
        <thead className="pl-6">
          <tr className="ml-4 border-b-[1px] border-[#FFFFFF]">
            <th scope="col" className="px-2 py-3">
              #
            </th>
            <th scope="col" className="px-2 py-3">
              STAKED LP
            </th>
            <th scope="col" className="px-2 py-3">
              REWARDS UNCLAIMED
            </th>
            <th scope="col" className="px-2 py-3">
              START TIME
            </th>
            <th scope="col" className="px-2 py-3 text-right">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <th scope="row" className="space-nowrap px-2 py-4 font-medium">
              Apple MacBook Pro 17
            </th>
            <td className="px-2 py-4">1</td>
            <td className="px-2 py-4">$2999</td>
            <td className="px-2 py-4">1</td>
            <td className="px-2 py-4 text-right">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FarmingPersonal;
