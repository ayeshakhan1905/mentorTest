import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
        Welcome to MyApp 🚀
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        This is a simple and secure authentication system with separate dashboards for users and admins. Register or login to get started.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
