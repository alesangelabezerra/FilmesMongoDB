import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Header } from "../components/header";
import { listar } from "../services/listar";
import { buscarPorGenero } from "../services/buscarPorGenero";

export function ListarGenero() {

    const [generos, setGeneros] = useState([])
    const [filmesGeneros, setFilmes] = useState([])
    const [exibirFilmes, setExib] = useState(false)
    
  

    async function listarFilmes() {
        const res = await listar()
        setGeneros(res.data)
    }

    async function BuscarFilmes(genero) {
        const res = await buscarPorGenero(genero)
       console.log(res);
       setFilmes(res.data)
       setExib(!exibirFilmes)
    }

    useEffect(() => {
       listarFilmes()
      }, []);

    return(
        <div>
            <Header />
           <h1>Pagina inicial</h1>
           
           {
            exibirFilmes ? (
                <>
                <button 
                    onClick={() => setExib(!exibirFilmes)} 
                    type="button"
                >
                    Voltar
                </button>
                {filmesGeneros.map((elem, index) => (
                    <div key={index}>
                    <h2>{elem.nome}</h2>
                    <span>{elem.genero}</span>
                    <img src={"http://localhost:3000/files/" + elem.imagem} alt="" />
                    <p>{elem.sinopse}</p>
                    </div>
                ))}
                </>
            ) : (
                generos.map((elem, index) => (
                <div key={index}>
                    <button
                    onClick={() => {
                        BuscarFilmes(elem.genero);
                    }}
                    type="button"
                    >
                    {elem.genero}
                    </button>
                </div>
                ))
            )
            }
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.