import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (adminOnly && !user.isAdmin) return <Navigate to="/not-authorized" />;

  return children;
};

export default ProtectedRoute;
