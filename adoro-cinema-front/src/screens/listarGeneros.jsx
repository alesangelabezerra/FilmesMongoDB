import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Header } from "../components/header";
import { listarGeneros } from "../services/listar";
import { buscarPorGenero } from "../services/buscar";

export function ListarGenero() {

    const [generos, setGeneros] = useState([])
    const [filmesGeneros, setFilmes] = useState([])
    const [exibirFilmes, setExib] = useState(false)
    
  

    async function listarFilmes() {
        const res = await listarGeneros()
        console.log(res);
        setGeneros(res.data)
    }

    async function BuscarFilmes(genero) {
        const res = await buscarPorGenero(genero)
       setFilmes(res.data)
       setExib(!exibirFilmes)
    }

    useEffect(() => {
       listarFilmes()
      }, []);

      return (
        <div>
            <Header />
            
            <h1>Gêneros</h1>
            <button 
                onClick={() => setExib(!exibirFilmes)} 
                type="button"
            >Voltar</button>
            <div className="generos-container">
                {generos.map((elem, index) => (
                    <div key={index} className="genero-item">
                        <button
                            onClick={() => {
                                BuscarFilmes(elem);
                            }}
                            type="button"
                        >
                            {elem}
                        </button>
                    </div>
                ))}
            </div>

            {exibirFilmes && (
                <div className="filmes-container">
                    
                    {filmesGeneros.map((elem, index) => (
                        <div key={index} className="filme-card">
                            <h2>{elem.nome}</h2>
                            <span>{elem.genero}</span>
                            <img src={"http://localhost:3000/files/" + elem.imagem} alt={elem.nome} />
                            <p>{elem.sinopse}</p> 
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.