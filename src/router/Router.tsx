import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/pages/login/Login';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { LoginUserProvider } from '../hooks/providers/useLoginUserProvider';

export const Router = () => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home/*"
          element={
            <HeaderLayout>
              <Routes>
                {homeRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.children}
                  />
                ))}
              </Routes>
            </HeaderLayout>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
};
