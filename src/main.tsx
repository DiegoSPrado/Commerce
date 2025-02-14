import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles/index.css';
import App from './pages/App.tsx';

import Login from './pages/Login.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import RecoveryPassword from './routes/LoginForms/RecoveryPassword.tsx';
import LoginForm from './routes/LoginForms/LoginForm.tsx';
import RegisterForm from './routes/LoginForms/RegisterForm.tsx';
import { Home } from './routes/HomePages/Home.tsx';
import { CategotiesHome } from './routes/HomePages/Categories.tsx';
import { ProductPage } from './pages/ProductPage.tsx';
import { CartPage } from './pages/CartPage.tsx';
import { CartProvider } from './context/CartContext.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/categories",
        element: <CategotiesHome/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    children: [
      {
        path: "/login",
        element: <LoginForm/>
      },
      {
        path: "/login/register",
        element: <RegisterForm/>,
      },
      {
        path: "/login/recovery",
        element: <RecoveryPassword/>,
      },
      {
        path: "/login/token",
        element: <RegisterForm/>
      }
    ]
  },
  {
    path: "/product/:id",
    element: <ProductPage />
  },
  {
    path: "/buycart",
    element: <CartPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
