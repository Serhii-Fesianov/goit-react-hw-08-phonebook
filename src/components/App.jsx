import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { PublickRoutes } from 'Routes/PublickRoutes';
import { PrivateRoutes } from 'Routes/PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/operations';
import { selectIsRefresh } from './redux/auth/slice';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return refresh ? (
    <div className="">
      <Loader />
    </div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoutes>
                <ContactsPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="login"
            element={
              <PublickRoutes>
                <LoginPage />
              </PublickRoutes>
            }
          />
          <Route
            path="register"
            element={
              <PublickRoutes>
                <RegisterPage />
              </PublickRoutes>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
