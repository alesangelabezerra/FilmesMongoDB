import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Header } from "../components/header";
import { listar } from "../services/listar";

export function ListarGenero() {

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
                       
                        <span>{elem.genero}</span>
                      
                    </div>
                ))} 
            </div>
        </div>
    )
}

  //foto, nome, ano, genero , atoresprincipais, sinopse.