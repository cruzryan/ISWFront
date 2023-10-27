import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Registrar_empleado from './pages/registrar_empleado/Registrar_empleado.tsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/registrar_empleado",
    element: <Registrar_empleado/>,
  },

])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
