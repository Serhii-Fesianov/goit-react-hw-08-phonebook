import { selectIsLoggedIn } from 'components/redux/auth/slice';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PublickRoutes = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/contacts'} />;
  }
  return children;
};
