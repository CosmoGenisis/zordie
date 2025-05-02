
import React from 'react';
import { Navigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children 
}) => {
  // Since we've removed authentication, this component just renders the children directly
  // In a real application, you would check for authentication here
  return <>{children}</>;
};

export default ProtectedRoute;
