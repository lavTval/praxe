import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ItemPage from './pages/ItemPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/item/:id",
    element: <ItemPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
