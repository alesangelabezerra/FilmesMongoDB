import { useState } from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
import { cadastrar } from './services/cadastrar'
import {PaginaInicial} from './screens/paginaInicial'


function App() {
  const [quant, setQant] = useState(0)
  const [peso, setPeso] = useState(0)
  const [nome, setNome] = useState("")
  const [exibResult, setExibResult] = useState(false)

  const calcularAgua = (peso) => {
    const quantRecom = peso * 35

    const quantlitros = (quantRecom / 1000).toFixed(2);

    setQant(quantlitros)
  }

  return (
    <>
      <PaginaInicial/>
    </>
  )
}

export default App
