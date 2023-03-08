import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts';
import LoginPage from './pages/login';
import ProductDetail from './pages/product-detail';
import HomePage from './pages/home';
import CardProducts from './components/card';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <CardProducts />,
      },
      {
        path: "/products/:productName/:index",
        element: <ProductDetail />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>

  </React.StrictMode>
);

reportWebVitals();
