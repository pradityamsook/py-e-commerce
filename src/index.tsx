import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/index.layout';
import LoginPage from './pages/login.page';
import ProductDetail from './pages/product-detail.page';
import HomePage from './pages/home.page';
import CardProducts from './components/card.componet';
import { RecoilRoot } from 'recoil';
import DashboardPage from './pages/dashboard.page';
import ErrorPage from './pages/error.page';
import EditProductPage from './pages/edit-product.page';
import CreateProductPage from './pages/create-product.page';

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
      },
      {
        path: "/dashboard",
        element: <DashboardPage />
      },
      {
        path: "/dashboard/edit_product/:id",
        element: <EditProductPage />
      },
      {
        path: "/dashboard/create_product",
        element: <CreateProductPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />
  }
]);

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
);

reportWebVitals();
