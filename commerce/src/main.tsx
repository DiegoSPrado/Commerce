import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles/index.css';
import App from './pages/App.tsx';

import Login from './pages/Login.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import TokenConfirm from './routes/LoginForms/TokenConfirm.tsx';
import RecoveryPassword from './routes/LoginForms/RecoveryPassword.tsx';
import LoginForm from './routes/LoginForms/LoginForm.tsx';
import RegisterForm from './routes/LoginForms/RegisterForm.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement: <ErrorPage/>
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
        path: "/login/token",
        element: <TokenConfirm/>,
      },
      {
        path: "/login/recovery",
        element: <RecoveryPassword/>,
      },
    ]
  },

 {
  path: "/register/token",
  element: <TokenConfirm/>,
 },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
