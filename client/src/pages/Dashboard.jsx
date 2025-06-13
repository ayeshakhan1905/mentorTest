import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-white to-purple-200 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 animate-fade-in">
          Hello, {user?.name}! 👋
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to your personal dashboard. Manage your activities, explore features, and stay updated!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-indigo-700 font-semibold mb-2">Profile Overview</h3>
            <p className="text-sm text-gray-600">Email: {user?.email}</p>
            <p className="text-sm text-gray-600">Role: {user?.isAdmin ? 'Admin' : 'User'}</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-green-700 font-semibold mb-2">Quick Actions</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside">
              <li>Update Profile</li>
              <li>View Reports</li>
              <li>Change Password</li>
            </ul>
          </div>
        </div>

        {user?.isAdmin && (
          <div className="mt-8">
            <Link
              to="/dashboard/admin"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-6 py-3 rounded-lg"
            >
              🚀 Go to Admin Section
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
