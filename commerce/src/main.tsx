import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './pages/App.tsx'

import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import TokenConfirm from './pages/TokenConfirm.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/Register",
    element: <Register/>,
  },
 {
  path: "/Register/Token",
  element: <TokenConfirm/>,
 }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
