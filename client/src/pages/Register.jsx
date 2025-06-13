import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import axios from '../utils/Axios';

const Register = () => {
  const { setUser } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', isAdmin: false });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/register', form, { withCredentials: true });
      setUser(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

        {error && (
          <p className="text-red-500 bg-red-100 border border-red-300 rounded px-4 py-2 mb-4 text-sm">
            {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />

        <label className="flex items-center mb-6 text-gray-700">
          <input
            type="checkbox"
            name="isAdmin"
            checked={form.isAdmin}
            onChange={handleChange}
            className="mr-2 accent-green-600"
          />
          Register as Admin
        </label>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-3 rounded-lg w-full font-semibold"
        >
          Register
        </button>

        <p className="mt-6 text-sm text-center text-gray-700">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
