import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";

import { Registros } from './screens/registros.jsx';
import {PaginaInicial} from './screens/paginaInicial.jsx'
import {CadastrarFilmes} from './screens/cadastrarFilme.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/PaginaInicial",
    element: <PaginaInicial />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
