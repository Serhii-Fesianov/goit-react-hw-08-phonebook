import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { PublickRoutes } from 'Routes/PublickRoutes';
import { PrivateRoutes } from 'Routes/PrivateRoutes';

export const App = () => {
  return (
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
