import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import NotAuthorized from './pages/NotAuthorized';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;

