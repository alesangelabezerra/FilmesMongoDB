import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Header } from "../components/header";
import { listar } from "../services/listar";

export function PaginaInicial() {

    const [filmes, setFilmes] = useState([])

    async function listarFilmes() {
        const res = await listar()
        setFilmes(res.data)
    }

    useEffect(() => {
       listarFilmes()
      }, []);

    return(
        <div>
            <Header />
           <h1>Pagina inicial</h1>

           <div>
                {filmes.map((elem, index) => (
                    <div key={index}>
                        <h2>{elem.nome}</h2>
                        <span>{elem.genero}</span>
                        <img src={"http://localhost:3000/files/" + elem.imagem} alt="" />
                        <p>{elem.sinopse}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.