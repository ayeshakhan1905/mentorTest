import React from 'react';
import axios from '../utils/Axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Navbar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();



  const handleLogout = async () => {
    try {
      await axios.post('/users/logout', {}, { withCredentials: true }); // optional backend logout
    } catch (err) {
      console.error('Logout error:', err);
    }
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-semibold">
        <Link to="/dashboard" className="hover:text-indigo-300">
          MyApp
        </Link>
      </div>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="hover:text-indigo-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-indigo-300">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-indigo-300">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Logout
            </button>
            <Link to="/dashboard/admin" className="hover:text-indigo-300">
              Admin
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
