import React from 'react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-200 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">🛠️ Admin Panel</h2>
        <p className="text-gray-700 text-lg mb-6">
          This section is accessible only to admin users. Use your superpowers wisely!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-yellow-300 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-yellow-700 font-semibold mb-2">Manage Users</h3>
            <p className="text-sm text-gray-600">View, edit, or remove registered users.</p>
          </div>
          <div className="bg-white border border-yellow-300 p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-yellow-700 font-semibold mb-2">Site Settings</h3>
            <p className="text-sm text-gray-600">Configure platform settings and preferences.</p>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          More features coming soon...
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
