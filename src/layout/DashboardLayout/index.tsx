import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-white">
      <Outlet />
    </div>
  );
};

export default Dashboard;
