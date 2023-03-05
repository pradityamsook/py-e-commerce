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
        path: "/products/:productName",
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
