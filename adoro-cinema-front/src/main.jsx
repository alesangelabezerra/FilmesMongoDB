import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";

import { Registros } from './screens/registros.jsx';
import { PaginaInicial } from './screens/PaginaInicial.jsx';
import {CadastrarFilmes} from './screens/cadastrarFilmes.jsx'
import { ListarGenero } from './screens/listarGeneros.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cadastrarFilmes",
    element: <CadastrarFilmes />
  },
  {
    path: "/listarGeneros",
    element: <ListarGenero />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
